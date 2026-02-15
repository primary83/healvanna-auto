import { NextRequest, NextResponse } from "next/server";

const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const PLACES_API_BASE = "https://places.googleapis.com/v1/places:searchText";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const latitude = searchParams.get("latitude");
  const longitude = searchParams.get("longitude");
  const categories = searchParams.get("categories") || "car detailing";
  const term = searchParams.get("term") || "";
  const limit = parseInt(searchParams.get("limit") || "20", 10);
  const sort_by = searchParams.get("sort_by") || "distance";

  if (!GOOGLE_API_KEY) {
    return NextResponse.json(
      { error: "Google API key not configured" },
      { status: 500 }
    );
  }

  if (!latitude || !longitude) {
    return NextResponse.json(
      { error: "Latitude and longitude are required" },
      { status: 400 }
    );
  }

  try {
    // Build text query from categories and optional search term
    const textQuery = term ? `${term} ${categories}` : categories;

    // Map sort_by to Google Places ranking preference
    // Google Places (New) Text Search supports DISTANCE and RELEVANCE
    const rankPreference = sort_by === "distance" ? "DISTANCE" : "RELEVANCE";

    const requestBody: Record<string, unknown> = {
      textQuery,
      locationBias: {
        circle: {
          center: {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          },
          radius: 40000.0, // 40km (~25 miles)
        },
      },
      maxResultCount: Math.min(limit, 20),
      rankPreference,
      languageCode: "en",
    };

    const response = await fetch(PLACES_API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": GOOGLE_API_KEY,
        "X-Goog-FieldMask":
          "places.id,places.displayName,places.formattedAddress,places.location,places.rating,places.userRatingCount,places.types,places.businessStatus,places.currentOpeningHours,places.nationalPhoneNumber,places.photos,places.priceLevel,places.primaryType,places.primaryTypeDisplayName,places.shortFormattedAddress",
      },
      body: JSON.stringify(requestBody),
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Google Places API error:", errorData);
      return NextResponse.json(
        { error: "Failed to fetch from Google Places API", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    const places = data.places || [];

    // Auto-related type filtering
    const AUTO_TYPES = new Set([
      "car_repair", "car_wash", "car_dealer", "auto_parts_store",
      "gas_station", "parking", "electric_vehicle_charging_station",
    ]);

    // Auto-related keyword filtering for businesses that may not have specific types
    const AUTO_KEYWORDS = [
      "auto", "car", "vehicle", "detailing", "body shop", "collision",
      "wrap", "paint", "glass", "windshield", "wash", "ceramic", "tint",
    ];

    const isAutoRelated = (place: Record<string, unknown>) => {
      const types = (place.types as string[]) || [];
      if (types.some((t) => AUTO_TYPES.has(t))) return true;
      const name = ((place.displayName as Record<string, string>)?.text || "").toLowerCase();
      const address = ((place.formattedAddress as string) || "").toLowerCase();
      return AUTO_KEYWORDS.some((kw) => name.includes(kw) || address.includes(kw));
    };

    // Transform Google Places data to match our Provider format
    const providers = places
      .filter((place: Record<string, unknown>) => isAutoRelated(place))
      .map((place: Record<string, unknown>) => {
        const location = place.location as Record<string, number> | undefined;
        const displayName = place.displayName as Record<string, string> | undefined;
        const address = (place.formattedAddress as string) || "";
        const shortAddress = (place.shortFormattedAddress as string) || address;
        const primaryTypeDisplay = place.primaryTypeDisplayName as Record<string, string> | undefined;

        // Extract city and state from formatted address
        const addressParts = address.split(", ");
        const cityStateZip = addressParts.length >= 2 ? addressParts[addressParts.length - 2] : "";
        const stateMatch = cityStateZip.match(/^(.+?)\s+([A-Z]{2})\s/);
        const city = stateMatch ? stateMatch[1] : (addressParts.length >= 3 ? addressParts[addressParts.length - 3] : "");
        const state = stateMatch ? stateMatch[2] : "";

        // Calculate approximate distance from search center
        const lat1 = parseFloat(latitude);
        const lon1 = parseFloat(longitude);
        const lat2 = location?.latitude || 0;
        const lon2 = location?.longitude || 0;
        const R = 3959; // Earth radius in miles
        const dLat = ((lat2 - lat1) * Math.PI) / 180;
        const dLon = ((lon2 - lon1) * Math.PI) / 180;
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos((lat1 * Math.PI) / 180) *
            Math.cos((lat2 * Math.PI) / 180) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = (R * c).toFixed(1);

        // Map price level
        const priceLevelMap: Record<string, string> = {
          PRICE_LEVEL_FREE: "",
          PRICE_LEVEL_INEXPENSIVE: "$",
          PRICE_LEVEL_MODERATE: "$$",
          PRICE_LEVEL_EXPENSIVE: "$$$",
          PRICE_LEVEL_VERY_EXPENSIVE: "$$$$",
        };

        const types = (place.types as string[]) || [];
        const specialties = primaryTypeDisplay?.text
          ? [primaryTypeDisplay.text]
          : types
              .filter((t) => AUTO_TYPES.has(t))
              .map((t) => t.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()));

        const isOpen = place.currentOpeningHours
          ? (place.currentOpeningHours as Record<string, unknown>).openNow === true
          : true;

        return {
          id: place.id as string,
          name: displayName?.text || "",
          category: primaryTypeDisplay?.text || specialties[0] || "Auto Services",
          city,
          state,
          address: shortAddress,
          specialties: specialties.length > 0 ? specialties : ["Auto Services"],
          verified: (place.businessStatus as string) === "OPERATIONAL",
          image: place.photos
            ? `https://places.googleapis.com/v1/${((place.photos as Record<string, string>[])[0])?.name}/media?maxHeightPx=400&maxWidthPx=600&key=${GOOGLE_API_KEY}`
            : "",
          description: specialties.join(", ") || "Auto Services",
          rating: (place.rating as number) || 0,
          reviewCount: (place.userRatingCount as number) || 0,
          phone: (place.nationalPhoneNumber as string) || "",
          latitude: location?.latitude || 0,
          longitude: location?.longitude || 0,
          isOpen,
          distance,
          url: `https://www.google.com/maps/place/?q=place_id:${place.id}`,
          priceRange: priceLevelMap[(place.priceLevel as string) || ""] || "",
        };
      });

    // Sort by distance if requested (Google may not sort perfectly by distance)
    if (sort_by === "distance") {
      providers.sort((a: { distance: string }, b: { distance: string }) => parseFloat(a.distance) - parseFloat(b.distance));
    } else if (sort_by === "rating") {
      providers.sort((a: { rating: number }, b: { rating: number }) => b.rating - a.rating);
    } else if (sort_by === "review_count") {
      providers.sort((a: { reviewCount: number }, b: { reviewCount: number }) => b.reviewCount - a.reviewCount);
    }

    return NextResponse.json({
      providers,
      total: providers.length,
      region: {
        center: {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        },
      },
    });
  } catch (error) {
    console.error("Error fetching from Google Places:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

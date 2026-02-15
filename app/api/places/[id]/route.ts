import { NextRequest, NextResponse } from "next/server";

const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!GOOGLE_API_KEY) {
    return NextResponse.json(
      { error: "Google API key not configured" },
      { status: 500 }
    );
  }

  if (!id) {
    return NextResponse.json(
      { error: "Place ID is required" },
      { status: 400 }
    );
  }

  try {
    // Fetch place details from Google Places API (New)
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": GOOGLE_API_KEY,
          "X-Goog-FieldMask":
            "id,displayName,formattedAddress,shortFormattedAddress,location,rating,userRatingCount,types,businessStatus,currentOpeningHours,regularOpeningHours,nationalPhoneNumber,internationalPhoneNumber,photos,priceLevel,primaryType,primaryTypeDisplayName,websiteUri,reviews,googleMapsUri",
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Google Places detail error:", errorData);

      // Handle not found / unavailable
      if (response.status === 404) {
        return NextResponse.json(
          {
            error: "BUSINESS_UNAVAILABLE",
            details: "This business is not currently available on Google Maps.",
          },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { error: "Failed to fetch place details", details: errorData },
        { status: response.status }
      );
    }

    const place = await response.json();

    // Extract city and state from formatted address
    const address = place.formattedAddress || "";
    const addressParts = address.split(", ");
    const cityStateZip = addressParts.length >= 2 ? addressParts[addressParts.length - 2] : "";
    const stateMatch = cityStateZip.match(/^(.+?)\s+([A-Z]{2})\s/);
    const city = stateMatch ? stateMatch[1] : (addressParts.length >= 3 ? addressParts[addressParts.length - 3] : "");
    const state = stateMatch ? stateMatch[2] : "";

    const primaryTypeDisplay = place.primaryTypeDisplayName?.text || "";
    const types = place.types || [];

    // Map price level
    const priceLevelMap: Record<string, string> = {
      PRICE_LEVEL_FREE: "",
      PRICE_LEVEL_INEXPENSIVE: "$",
      PRICE_LEVEL_MODERATE: "$$",
      PRICE_LEVEL_EXPENSIVE: "$$$",
      PRICE_LEVEL_VERY_EXPENSIVE: "$$$$",
    };

    // Build photos array
    const photos = (place.photos || []).map(
      (photo: Record<string, string>) =>
        `https://places.googleapis.com/v1/${photo.name}/media?maxHeightPx=600&maxWidthPx=800&key=${GOOGLE_API_KEY}`
    );

    // Parse hours into the format the frontend expects
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hours = (place.regularOpeningHours?.periods || []).map(
      (period: Record<string, Record<string, number>>) => ({
        day: period.open?.day ?? 0,
        start: String(period.open?.hour ?? 0).padStart(2, "0") + String(period.open?.minute ?? 0).padStart(2, "0"),
        end: String(period.close?.hour ?? 0).padStart(2, "0") + String(period.close?.minute ?? 0).padStart(2, "0"),
      })
    );

    const specialties = primaryTypeDisplay
      ? [primaryTypeDisplay]
      : types
          .filter((t: string) =>
            ["car_repair", "car_wash", "car_dealer", "auto_parts_store"].includes(t)
          )
          .map((t: string) =>
            t.replace(/_/g, " ").replace(/\b\w/g, (c: string) => c.toUpperCase())
          );

    const provider = {
      id: place.id,
      name: place.displayName?.text || "",
      category: primaryTypeDisplay || specialties[0] || "Auto Services",
      city,
      state,
      address: place.shortFormattedAddress || address,
      specialties: specialties.length > 0 ? specialties : ["Auto Services"],
      verified: place.businessStatus === "OPERATIONAL",
      image: photos[0] || "",
      photos,
      description: specialties.join(", ") || "Auto Services",
      rating: place.rating || 0,
      reviewCount: place.userRatingCount || 0,
      phone: place.nationalPhoneNumber || place.internationalPhoneNumber || "",
      latitude: place.location?.latitude || 0,
      longitude: place.location?.longitude || 0,
      isOpen: place.currentOpeningHours?.openNow ?? false,
      url: place.googleMapsUri || `https://www.google.com/maps/place/?q=place_id:${place.id}`,
      priceRange: priceLevelMap[place.priceLevel || ""] || "",
      hours,
      isOpenNow: place.currentOpeningHours?.openNow ?? false,
      transactions: [],
      websiteUri: place.websiteUri || "",
    };

    // Transform Google reviews to match our format
    const reviews = (place.reviews || []).slice(0, 5).map(
      (review: Record<string, unknown>, index: number) => ({
        id: `review-${index}`,
        rating: review.rating || 0,
        text: (review.text as Record<string, string>)?.text || (review.originalText as Record<string, string>)?.text || "",
        timeCreated: (review.publishTime as string) || "",
        user: {
          name: (review.authorAttribution as Record<string, string>)?.displayName || "Google User",
          imageUrl: (review.authorAttribution as Record<string, string>)?.photoUri || "",
        },
      })
    );

    return NextResponse.json({ provider, reviews });
  } catch (error) {
    console.error("Error fetching place details:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const PLACES_API_BASE = "https://places.googleapis.com/v1/places:searchText";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const location = searchParams.get("location") || "Austin, TX";
  const category = searchParams.get("category") || "body_shops";

  if (!GOOGLE_API_KEY) {
    return NextResponse.json(
      { error: "Google API key not configured" },
      { status: 500 }
    );
  }

  // Map categories to Google Places text search queries
  const categoryConfig: Record<string, string> = {
    body_shops: "auto body shop collision repair",
    auto_repair: "auto repair mechanic car service",
    car_restoration: "classic car restoration custom auto",
  };

  const textQuery = `${categoryConfig[category] || categoryConfig.body_shops} in ${location}`;

  try {
    const response = await fetch(PLACES_API_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": GOOGLE_API_KEY,
        "X-Goog-FieldMask":
          "places.id,places.displayName,places.formattedAddress,places.location,places.rating,places.userRatingCount,places.types,places.businessStatus,places.currentOpeningHours,places.nationalPhoneNumber,places.photos,places.priceLevel,places.primaryTypeDisplayName",
      },
      body: JSON.stringify({
        textQuery,
        maxResultCount: 20,
        languageCode: "en",
      }),
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google Places API error:", errorText);
      return NextResponse.json(
        { error: "Failed to fetch from Google Places" },
        { status: response.status }
      );
    }

    const data = await response.json();
    const places = data.places || [];

    // Transform to match the format the craft page expects (legacy structure)
    const businesses = places.map((place: Record<string, unknown>) => {
      const displayName = place.displayName as Record<string, string> | undefined;
      const location = place.location as Record<string, number> | undefined;
      const primaryTypeDisplay = place.primaryTypeDisplayName as Record<string, string> | undefined;
      const photos = place.photos as Record<string, string>[] | undefined;

      return {
        id: place.id,
        name: displayName?.text || "",
        image_url: photos?.[0]
          ? `https://places.googleapis.com/v1/${photos[0].name}/media?maxHeightPx=400&maxWidthPx=600&key=${GOOGLE_API_KEY}`
          : "",
        url: `https://www.google.com/maps/place/?q=place_id:${place.id}`,
        rating: place.rating || 0,
        review_count: place.userRatingCount || 0,
        categories: [
          {
            alias: (place.primaryType as string) || "auto_services",
            title: primaryTypeDisplay?.text || "Auto Services",
          },
        ],
        coordinates: {
          latitude: location?.latitude || 0,
          longitude: location?.longitude || 0,
        },
        location: {
          address1: (place.formattedAddress as string) || "",
          city: "",
          state: "",
          zip_code: "",
          display_address: [(place.formattedAddress as string) || ""],
        },
        display_phone: (place.nationalPhoneNumber as string) || "",
        is_closed: (place.businessStatus as string) !== "OPERATIONAL",
      };
    });

    return NextResponse.json({ businesses, total: businesses.length });
  } catch (error) {
    console.error("Error fetching from Google Places:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";

const YELP_API_KEY = process.env.YELP_API_KEY;
const YELP_API_BASE = "https://api.yelp.com/v3";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const latitude = searchParams.get("latitude");
  const longitude = searchParams.get("longitude");
  const categories = searchParams.get("categories") || "autodetailing";
  const term = searchParams.get("term") || "";
  const limit = searchParams.get("limit") || "20";
  const sort_by = searchParams.get("sort_by") || "distance";

  if (!YELP_API_KEY) {
    return NextResponse.json(
      { error: "Yelp API key not configured" },
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
    const params = new URLSearchParams({
      latitude,
      longitude,
      categories,
      limit,
      sort_by,
      radius: "40000", // 40km (~25 miles) radius
    });

    if (term) {
      params.append("term", term);
    }

    const response = await fetch(
      `${YELP_API_BASE}/businesses/search?${params.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Yelp API error:", errorData);
      return NextResponse.json(
        { error: "Failed to fetch from Yelp API", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Transform Yelp data to match our provider format
    const providers = data.businesses.map((business: any) => ({
      id: business.id,
      name: business.name,
      category: business.categories?.[0]?.title || "Auto Services",
      city: business.location?.city || "",
      state: business.location?.state || "",
      address: business.location?.display_address?.join(", ") || "",
      specialties: business.categories?.map((cat: any) => cat.title) || [],
      verified: !business.is_closed,
      image: business.image_url || "",
      description: business.categories?.map((cat: any) => cat.title).join(", ") || "",
      rating: business.rating || 0,
      reviewCount: business.review_count || 0,
      phone: business.display_phone || "",
      latitude: business.coordinates?.latitude || 0,
      longitude: business.coordinates?.longitude || 0,
      isOpen: !business.is_closed,
      distance: business.distance ? (business.distance / 1609.34).toFixed(1) : "0", // Convert meters to miles
      url: business.url || "",
      priceRange: business.price || "",
    }));

    return NextResponse.json({
      providers,
      total: data.total,
      region: data.region,
    });
  } catch (error) {
    console.error("Error fetching from Yelp:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

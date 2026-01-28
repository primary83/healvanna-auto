import { NextRequest, NextResponse } from "next/server";

const YELP_API_KEY = process.env.YELP_API_KEY;
const YELP_API_BASE = "https://api.yelp.com/v3";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!YELP_API_KEY) {
    return NextResponse.json(
      { error: "Yelp API key not configured" },
      { status: 500 }
    );
  }

  if (!id) {
    return NextResponse.json(
      { error: "Business ID is required" },
      { status: 400 }
    );
  }

  try {
    // Fetch business details and reviews in parallel
    const [detailsRes, reviewsRes] = await Promise.all([
      fetch(`${YELP_API_BASE}/businesses/${id}`, {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 300 },
      }),
      fetch(`${YELP_API_BASE}/businesses/${id}/reviews?limit=3&sort_by=yelp_sort`, {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
          "Content-Type": "application/json",
        },
        next: { revalidate: 300 },
      }),
    ]);

    if (!detailsRes.ok) {
      const errorData = await detailsRes.json();
      return NextResponse.json(
        { error: "Failed to fetch business details", details: errorData },
        { status: detailsRes.status }
      );
    }

    const business = await detailsRes.json();
    const reviewsData = reviewsRes.ok ? await reviewsRes.json() : { reviews: [] };

    const provider = {
      id: business.id,
      name: business.name,
      category: business.categories?.[0]?.title || "Auto Services",
      city: business.location?.city || "",
      state: business.location?.state || "",
      address: business.location?.display_address?.join(", ") || "",
      specialties: business.categories?.map((cat: any) => cat.title) || [],
      verified: !business.is_closed,
      image: business.image_url || "",
      photos: business.photos || [],
      description: business.categories?.map((cat: any) => cat.title).join(", ") || "",
      rating: business.rating || 0,
      reviewCount: business.review_count || 0,
      phone: business.display_phone || "",
      latitude: business.coordinates?.latitude || 0,
      longitude: business.coordinates?.longitude || 0,
      isOpen: !business.is_closed,
      url: business.url || "",
      priceRange: business.price || "",
      hours: business.hours?.[0]?.open?.map((h: any) => ({
        day: h.day,
        start: h.start,
        end: h.end,
      })) || [],
      isOpenNow: business.hours?.[0]?.is_open_now ?? false,
      transactions: business.transactions || [],
    };

    const reviews = reviewsData.reviews?.map((r: any) => ({
      id: r.id,
      rating: r.rating,
      text: r.text,
      timeCreated: r.time_created,
      user: {
        name: r.user?.name || "Anonymous",
        imageUrl: r.user?.image_url || "",
      },
    })) || [];

    return NextResponse.json({ provider, reviews });
  } catch (error) {
    console.error("Error fetching business details:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

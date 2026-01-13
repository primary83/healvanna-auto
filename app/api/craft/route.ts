import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const location = searchParams.get("location") || "Austin, TX";
  const category = searchParams.get("category") || "body_shops";

  const apiKey = process.env.YELP_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Yelp API key not configured" },
      { status: 500 }
    );
  }

  // Map our categories to better Yelp search terms
  const categoryConfig: Record<string, { categories: string; term: string }> = {
    body_shops: {
      categories: "body_shops",
      term: "auto body shop collision repair car",
    },
    auto_repair: {
      categories: "auto_repair",
      term: "auto repair mechanic car service",
    },
    car_restoration: {
      categories: "auto_customization,auto_repair",
      term: "classic car restoration custom auto",
    },
  };

  const config = categoryConfig[category] || categoryConfig.body_shops;

  try {
    const url = new URL("https://api.yelp.com/v3/businesses/search");
    url.searchParams.append("location", location);
    url.searchParams.append("categories", config.categories);
    url.searchParams.append("term", config.term);
    url.searchParams.append("sort_by", "rating");
    url.searchParams.append("limit", "20");

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Yelp API error:", errorText);
      return NextResponse.json(
        { error: "Failed to fetch from Yelp" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching from Yelp:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

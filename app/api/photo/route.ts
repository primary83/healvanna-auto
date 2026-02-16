import { NextRequest, NextResponse } from "next/server";

const GOOGLE_API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export async function GET(request: NextRequest) {
  const ref = request.nextUrl.searchParams.get("ref");
  const maxWidth = request.nextUrl.searchParams.get("maxWidth") || "600";
  const maxHeight = request.nextUrl.searchParams.get("maxHeight") || "400";

  if (!GOOGLE_API_KEY) {
    return new NextResponse(null, { status: 500 });
  }

  // Validate ref to prevent open-proxy abuse
  if (!ref || !ref.startsWith("places/")) {
    return new NextResponse(null, { status: 400 });
  }

  try {
    const googleUrl = `https://places.googleapis.com/v1/${ref}/media?maxWidthPx=${maxWidth}&maxHeightPx=${maxHeight}&key=${GOOGLE_API_KEY}`;

    const response = await fetch(googleUrl, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!response.ok) {
      return new NextResponse(null, { status: 404 });
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch {
    return new NextResponse(null, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const city = request.headers.get("x-vercel-ip-city");
  const region = request.headers.get("x-vercel-ip-country-region");
  const latitude = request.headers.get("x-vercel-ip-latitude");
  const longitude = request.headers.get("x-vercel-ip-longitude");
  const country = request.headers.get("x-vercel-ip-country");

  if (!city || !region) {
    return NextResponse.json({
      detected: false,
      city: null,
      region: null,
      latitude: null,
      longitude: null,
      country: null,
    });
  }

  return NextResponse.json({
    detected: true,
    city: decodeURIComponent(city),
    region,
    latitude: latitude ? parseFloat(latitude) : null,
    longitude: longitude ? parseFloat(longitude) : null,
    country: country || "US",
  });
}

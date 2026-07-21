import { NextRequest, NextResponse } from "next/server";
import { getPlaceById } from "../../../lib/googlePlaces";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const result = await getPlaceById(id);

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error, details: result.details },
      { status: result.status }
    );
  }

  return NextResponse.json({ provider: result.provider, reviews: result.reviews });
}

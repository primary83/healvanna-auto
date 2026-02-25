import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const year = searchParams.get("year");
  const make = searchParams.get("make");
  const model = searchParams.get("model");

  if (!year || !make || !model) {
    return NextResponse.json(
      { error: "Missing required parameters: year, make, model" },
      { status: 400 }
    );
  }

  try {
    const url = `https://api.nhtsa.dot.gov/recalls/recallsByVehicle?make=${encodeURIComponent(
      make
    )}&model=${encodeURIComponent(model)}&modelYear=${encodeURIComponent(year)}`;

    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 }, // cache for 1 hour
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch recalls from NHTSA" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "An error occurred while fetching recall data" },
      { status: 500 }
    );
  }
}

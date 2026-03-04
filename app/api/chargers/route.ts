import { NextRequest, NextResponse } from "next/server";

const NREL_API_KEY = process.env.NREL_API_KEY;
const NREL_BASE_URL =
  "https://developer.nlr.gov/api/alt-fuel-stations/v1/nearest.json";

export async function GET(request: NextRequest) {
  try {
    if (!NREL_API_KEY) {
      return NextResponse.json(
        { error: "Charging station data is not configured.", code: "NO_API_KEY" },
        { status: 503 }
      );
    }

    const { searchParams } = new URL(request.url);
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    const radius = searchParams.get("radius") || "25";
    const limit = searchParams.get("limit") || "20";
    const evConnectorType = searchParams.get("ev_connector_type");
    const evNetwork = searchParams.get("ev_network");

    if (!lat || !lng) {
      return NextResponse.json(
        { error: "Provide lat and lng parameters." },
        { status: 400 }
      );
    }

    const params = new URLSearchParams({
      api_key: NREL_API_KEY,
      fuel_type: "ELEC",
      latitude: lat,
      longitude: lng,
      radius,
      limit,
      status: "E",
    });

    if (evConnectorType) params.set("ev_connector_type", evConnectorType);
    if (evNetwork) params.set("ev_network", evNetwork);

    const response = await fetch(`${NREL_BASE_URL}?${params.toString()}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("NREL API error:", response.status, errorText);
      return NextResponse.json(
        { error: "Could not fetch charging stations.", code: "NREL_ERROR" },
        { status: 502 }
      );
    }

    const data = await response.json();

    const stations = (data.fuel_stations || []).map(
      (s: Record<string, unknown>) => ({
        id: s.id,
        name: s.station_name,
        address: s.street_address,
        city: s.city,
        state: s.state,
        zip: s.zip,
        lat: s.latitude,
        lng: s.longitude,
        network: s.ev_network,
        connectorTypes: s.ev_connector_types || [],
        dcFastPorts: s.ev_dc_fast_num || 0,
        level2Ports: s.ev_level2_evse_num || 0,
        level1Ports: s.ev_level1_evse_num || 0,
        pricing: s.ev_pricing,
        distance: s.distance,
        accessTime: s.access_days_time,
        phone: s.station_phone,
      })
    );

    return NextResponse.json({
      stations,
      totalResults: data.total_results || stations.length,
      latitude: data.latitude,
      longitude: data.longitude,
    });
  } catch (error) {
    console.error("Chargers API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

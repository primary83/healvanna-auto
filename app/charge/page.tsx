"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { EV_MODELS } from "../lib/carData";

// Dynamically import map to avoid SSR issues with Leaflet
const ChargeMap = dynamic(() => import("./ChargeMap"), { ssr: false });

interface Station {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
  network: string;
  connectorTypes: string[];
  dcFastPorts: number;
  level2Ports: number;
  level1Ports: number;
  pricing: string | null;
  distance: number;
  accessTime: string | null;
  phone: string | null;
}

type FilterType = "all" | "dc_fast" | "level2" | "free";

// Group EV models by brand for the dropdown
const brandGroups = EV_MODELS.reduce(
  (acc, ev) => {
    if (!acc[ev.brand]) acc[ev.brand] = [];
    acc[ev.brand].push(ev);
    return acc;
  },
  {} as Record<string, typeof EV_MODELS>
);
const sortedBrands = Object.keys(brandGroups).sort();

function estimateChargeTime(
  rangeNumeric: number,
  chargerKw: number
): string {
  // Approximate battery capacity: range * 0.3 kWh/mi
  const batteryKwh = rangeNumeric * 0.3;
  // 10% to 80% = 70% of capacity
  const chargeKwh = batteryKwh * 0.7;
  const minutes = Math.round((chargeKwh / chargerKw) * 60);
  if (minutes < 60) return `~${minutes} min`;
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `~${hrs}h ${mins}m` : `~${hrs}h`;
}

function getStationMaxKw(station: Station): number {
  if (station.dcFastPorts > 0) return 150;
  if (station.level2Ports > 0) return 7.7;
  return 1.4;
}

function connectorLabel(type: string): string {
  const map: Record<string, string> = {
    CHADEMO: "CHAdeMO",
    J1772: "J1772",
    J1772COMBO: "CCS",
    TESLA: "Tesla",
    NEMA515: "NEMA 5-15",
    NEMA520: "NEMA 5-20",
    NEMA1450: "NEMA 14-50",
  };
  return map[type] || type;
}

export default function ChargePage() {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");
  const [mapCenter, setMapCenter] = useState<[number, number] | null>(null);
  const [hoveredStation, setHoveredStation] = useState<number | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [detectingLocation, setDetectingLocation] = useState(false);

  const selectedEv = EV_MODELS.find((ev) => ev.id === selectedVehicle);

  // Auto-detect location on mount
  useEffect(() => {
    if ("geolocation" in navigator) {
      setDetectingLocation(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setMapCenter([pos.coords.latitude, pos.coords.longitude]);
          setLocationInput(
            `${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`
          );
          setDetectingLocation(false);
        },
        () => {
          setDetectingLocation(false);
        },
        { timeout: 8000 }
      );
    }
  }, []);

  const searchChargers = useCallback(async () => {
    if (!locationInput.trim() && !mapCenter) {
      setError("Please enter a location or allow location access.");
      return;
    }

    setLoading(true);
    setError("");
    setHasSearched(true);

    try {
      let lat: string | null = null;
      let lng: string | null = null;

      // Check if locationInput is coordinates
      const coordMatch = locationInput.match(
        /^(-?\d+\.?\d*),\s*(-?\d+\.?\d*)$/
      );
      if (coordMatch) {
        lat = coordMatch[1];
        lng = coordMatch[2];
      } else if (locationInput.trim()) {
        // Geocode text location using Nominatim (OpenStreetMap)
        const geoRes = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationInput.trim())}&format=json&limit=1&countrycodes=us`,
          { headers: { "User-Agent": "HealvannaAuto/1.0" } }
        );
        const geoData = await geoRes.json();
        if (!geoData || geoData.length === 0) {
          setError("Could not find that location. Try a ZIP code or city name.");
          setLoading(false);
          return;
        }
        lat = geoData[0].lat;
        lng = geoData[0].lon;
      } else if (mapCenter) {
        lat = mapCenter[0].toString();
        lng = mapCenter[1].toString();
      }

      if (!lat || !lng) {
        setError("Please enter a valid location.");
        setLoading(false);
        return;
      }

      // Update map center from geocoded/detected location
      setMapCenter([parseFloat(lat), parseFloat(lng)]);

      const params = new URLSearchParams({ lat, lng, limit: "30" });
      const res = await fetch(`/api/chargers?${params.toString()}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Could not fetch charging stations.");
        setStations([]);
        return;
      }

      setStations(data.stations || []);
    } catch {
      setError(
        "Could not connect to the charging station service. Please try again."
      );
      setStations([]);
    } finally {
      setLoading(false);
    }
  }, [locationInput, mapCenter]);

  const filteredStations = useMemo(() => {
    switch (filter) {
      case "dc_fast":
        return stations.filter((s) => s.dcFastPorts > 0);
      case "level2":
        return stations.filter((s) => s.level2Ports > 0);
      case "free":
        return stations.filter(
          (s) =>
            s.pricing &&
            (s.pricing.toLowerCase().includes("free") ||
              s.pricing.toLowerCase().includes("no charge"))
        );
      default:
        return stations;
    }
  }, [stations, filter]);

  const detectLocation = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    setDetectingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setMapCenter([pos.coords.latitude, pos.coords.longitude]);
        setLocationInput(
          `${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`
        );
        setDetectingLocation(false);
      },
      () => {
        setError("Could not detect your location. Please enter it manually.");
        setDetectingLocation(false);
      },
      { timeout: 8000 }
    );
  }, []);

  const filters: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "DC Fast", value: "dc_fast" },
    { label: "Level 2", value: "level2" },
    { label: "Free", value: "free" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="CHARGE" />

      {/* Header */}
      <section className="pt-32 pb-6 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">
            Charge
          </div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-extralight tracking-tight mb-4">
            Find EV{" "}
            <span className="italic text-[#4a90d9]">Chargers</span>
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[600px] mx-auto">
            Locate charging stations near you. Select your vehicle for
            personalized charge time estimates.
          </p>
        </div>
      </section>

      {/* Search Controls */}
      <section className="px-6 md:px-12 pb-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row gap-3">
            {/* Vehicle Selector */}
            <div className="flex-1">
              <label className="block text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] mb-1.5 font-medium">
                Your Vehicle
              </label>
              <select
                value={selectedVehicle}
                onChange={(e) => setSelectedVehicle(e.target.value)}
                className="w-full px-4 py-3 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[13px] focus:outline-none focus:border-[#4a90d9] transition-colors appearance-none"
              >
                <option value="" className="bg-[#0a0f1a]">
                  Select vehicle (optional)
                </option>
                {sortedBrands.map((brand) => (
                  <optgroup key={brand} label={brand} className="bg-[#0a0f1a]">
                    {brandGroups[brand].map((ev) => (
                      <option
                        key={ev.id}
                        value={ev.id}
                        className="bg-[#0a0f1a]"
                      >
                        {ev.model} — {ev.range}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Location Input */}
            <div className="flex-1">
              <label className="block text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] mb-1.5 font-medium">
                Location
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && searchChargers()}
                  placeholder="City, ZIP, or address"
                  className="flex-1 px-4 py-3 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[13px] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
                />
                <button
                  onClick={detectLocation}
                  disabled={detectingLocation}
                  className="px-3 py-3 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#4a90d9] hover:border-[#4a90d9] transition-colors disabled:opacity-50"
                  title="Detect my location"
                >
                  {detectingLocation ? (
                    <svg
                      className="w-5 h-5 animate-spin"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={searchChargers}
                disabled={loading}
                className="w-full md:w-auto px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-all duration-200 disabled:opacity-60"
              >
                {loading ? "Searching..." : "Search"}
              </button>
            </div>
          </div>

          {/* Filter Chips */}
          {hasSearched && (
            <div className="flex gap-2 mt-4">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={`px-4 py-1.5 text-[12px] rounded-full transition-all duration-200 ${
                    filter === f.value
                      ? "bg-[#4a90d9] text-[#0a0f1a] font-medium"
                      : "bg-[rgba(15,22,40,0.8)] text-[#6b7a94] border border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#e8edf5]"
                  }`}
                >
                  {f.label}
                  {f.value !== "all" && (
                    <span className="ml-1 opacity-70">
                      (
                      {f.value === "dc_fast"
                        ? stations.filter((s) => s.dcFastPorts > 0).length
                        : f.value === "level2"
                          ? stations.filter((s) => s.level2Ports > 0).length
                          : stations.filter(
                              (s) =>
                                s.pricing &&
                                (s.pricing.toLowerCase().includes("free") ||
                                  s.pricing
                                    .toLowerCase()
                                    .includes("no charge"))
                            ).length}
                      )
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Error */}
      {error && (
        <div className="px-6 md:px-12 pb-4">
          <div className="max-w-[1400px] mx-auto">
            <div className="px-4 py-3 bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.3)] rounded-lg text-[13px] text-[#ef4444]">
              {error}
            </div>
          </div>
        </div>
      )}

      {/* Map + Results */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Station List */}
            <div className="w-full md:w-[400px] order-2 md:order-1">
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <svg
                    className="w-6 h-6 animate-spin text-[#4a90d9]"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                </div>
              ) : filteredStations.length > 0 ? (
                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                  <div className="text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] font-medium mb-2">
                    {filteredStations.length} station
                    {filteredStations.length !== 1 ? "s" : ""} found
                  </div>
                  {filteredStations.map((station) => (
                    <div
                      key={station.id}
                      onMouseEnter={() => setHoveredStation(station.id)}
                      onMouseLeave={() => setHoveredStation(null)}
                      className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                        hoveredStation === station.id
                          ? "bg-[rgba(15,22,40,0.8)] border-[rgba(74,144,217,0.35)] -translate-y-0.5"
                          : "bg-[rgba(15,22,40,0.6)] border-[rgba(74,144,217,0.12)]"
                      }`}
                    >
                      {/* Station Header */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-[14px] font-medium text-[#e8edf5] leading-tight">
                            {station.name}
                          </h3>
                          <p className="text-[12px] text-[#6b7a94] mt-0.5">
                            {station.address}, {station.city}, {station.state}{" "}
                            {station.zip}
                          </p>
                        </div>
                        <span className="text-[12px] text-[#4a90d9] font-medium whitespace-nowrap">
                          {station.distance.toFixed(1)} mi
                        </span>
                      </div>

                      {/* Network & Speed */}
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {station.network && (
                          <span className="px-2 py-0.5 text-[10px] tracking-[0.03em] rounded-md bg-[rgba(74,144,217,0.1)] text-[#4a90d9] border border-[rgba(74,144,217,0.2)]">
                            {station.network}
                          </span>
                        )}
                        {station.dcFastPorts > 0 && (
                          <span className="px-2 py-0.5 text-[10px] tracking-[0.03em] rounded-md bg-[rgba(52,211,153,0.1)] text-[#34d399] border border-[rgba(52,211,153,0.2)]">
                            DC Fast
                          </span>
                        )}
                        {station.level2Ports > 0 && (
                          <span className="px-2 py-0.5 text-[10px] tracking-[0.03em] rounded-md bg-[rgba(74,144,217,0.1)] text-[#6b7a94] border border-[rgba(74,144,217,0.12)]">
                            Level 2
                          </span>
                        )}
                      </div>

                      {/* Port Details */}
                      <div className="flex gap-4 text-[11px] text-[#6b7a94] mb-2">
                        {station.dcFastPorts > 0 && (
                          <span>
                            <svg
                              className="w-3 h-3 inline mr-1 text-[#34d399]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                              />
                            </svg>
                            {station.dcFastPorts} DC Fast
                          </span>
                        )}
                        {station.level2Ports > 0 && (
                          <span>
                            <svg
                              className="w-3 h-3 inline mr-1 text-[#4a90d9]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                              />
                            </svg>
                            {station.level2Ports} Level 2
                          </span>
                        )}
                      </div>

                      {/* Connectors */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {station.connectorTypes.map((ct: string) => (
                          <span
                            key={ct}
                            className="px-1.5 py-0.5 text-[10px] rounded bg-[rgba(74,144,217,0.05)] text-[#3d4a61] border border-[rgba(74,144,217,0.08)]"
                          >
                            {connectorLabel(ct)}
                          </span>
                        ))}
                      </div>

                      {/* Estimated charge time */}
                      {selectedEv && (
                        <div className="pt-2 border-t border-[rgba(74,144,217,0.08)]">
                          <div className="flex items-center gap-1.5 text-[11px]">
                            <svg
                              className="w-3.5 h-3.5 text-[#34d399]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-[#34d399] font-medium">
                              {estimateChargeTime(
                                selectedEv.rangeNumeric,
                                getStationMaxKw(station)
                              )}
                            </span>
                            <span className="text-[#3d4a61]">
                              10%→80% at{" "}
                              {getStationMaxKw(station) >= 50
                                ? `${getStationMaxKw(station)} kW`
                                : `${getStationMaxKw(station)} kW`}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : hasSearched ? (
                <div className="text-center py-20">
                  <svg
                    className="w-10 h-10 mx-auto mb-4 text-[#3d4a61]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <p className="text-[14px] text-[#6b7a94]">
                    No charging stations found in this area.
                  </p>
                  <p className="text-[12px] text-[#3d4a61] mt-1">
                    Try expanding your search or try a different location.
                  </p>
                </div>
              ) : (
                <div className="text-center py-20">
                  <svg
                    className="w-10 h-10 mx-auto mb-4 text-[#3d4a61]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                  <p className="text-[14px] text-[#6b7a94]">
                    Enter a location to find nearby charging stations.
                  </p>
                </div>
              )}
            </div>

            {/* Map */}
            <div className="flex-1 order-1 md:order-2">
              <div className="rounded-xl overflow-hidden border border-[rgba(74,144,217,0.12)] h-[300px] md:h-[600px]">
                <ChargeMap
                  stations={filteredStations}
                  center={mapCenter}
                  hoveredStation={hoveredStation}
                  onStationHover={setHoveredStation}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] text-[#3d4a61] leading-relaxed max-w-[800px]">
            Charging station data provided by the U.S. Department of
            Energy&apos;s Alternative Fuels Station Locator. Healvanna is not
            affiliated with or endorsed by the U.S. Department of Energy or
            NREL. Station availability and details may vary.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

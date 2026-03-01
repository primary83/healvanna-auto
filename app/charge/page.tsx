"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { EV_MODELS } from "../lib/carData";
import { DEALS } from "../lib/dealsData";

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

// Networks for filter dropdown and browse section
const NETWORKS = [
  "ChargePoint Network",
  "Tesla",
  "Tesla Destination",
  "Electrify America",
  "EVgo",
  "Blink Network",
  "SemaConnect",
  "Volta",
  "FLO",
  "EV Connect",
  "OpConnect",
  "GreenLots",
];

// Connector types for filter dropdown
const CONNECTOR_TYPES: { label: string; value: string }[] = [
  { label: "J1772", value: "J1772" },
  { label: "CCS (J1772COMBO)", value: "J1772COMBO" },
  { label: "CHAdeMO", value: "CHADEMO" },
  { label: "Tesla (NACS)", value: "TESLA" },
  { label: "NEMA 14-50", value: "NEMA1450" },
];

// Distance radius options
const RADIUS_OPTIONS = [
  { label: "5 mi", value: "5" },
  { label: "10 mi", value: "10" },
  { label: "25 mi", value: "25" },
  { label: "50 mi", value: "50" },
];

// Browse by state data
const BROWSE_STATES = [
  { name: "Florida", abbr: "FL", active: true },
  { name: "California", abbr: "CA", active: true },
  { name: "Texas", abbr: "TX", active: true },
  { name: "New York", abbr: "NY", active: true },
  { name: "Georgia", abbr: "GA", active: true },
  { name: "Washington", abbr: "WA", active: true },
  { name: "Colorado", abbr: "CO", active: true },
  { name: "North Carolina", abbr: "NC", active: true },
  { name: "Illinois", abbr: "IL", active: true },
  { name: "Virginia", abbr: "VA", active: true },
  { name: "Oregon", abbr: "OR", active: true },
  { name: "Arizona", abbr: "AZ", active: true },
];

// Haversine distance in miles
function haversineDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 3959; // Earth's radius in miles
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function estimateChargeTime(
  rangeNumeric: number,
  chargerKw: number
): string {
  const batteryKwh = rangeNumeric * 0.3;
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

  // New filter states
  const [networkFilter, setNetworkFilter] = useState("");
  const [connectorFilter, setConnectorFilter] = useState("");
  const [radiusFilter, setRadiusFilter] = useState("25");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Email capture state
  const [emailInput, setEmailInput] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const selectedEv = EV_MODELS.find((ev) => ev.id === selectedVehicle);

  // Auto-select vehicle from ?vehicle= query param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const vehicleParam = params.get("vehicle");
    if (!vehicleParam) return;

    const match = EV_MODELS.find(
      (ev) =>
        `${ev.brandSlug}/${ev.slug}` === vehicleParam || ev.id === vehicleParam
    );
    if (match) {
      setSelectedVehicle(match.id);
    }
  }, []);

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

      const coordMatch = locationInput.match(
        /^(-?\d+\.?\d*),\s*(-?\d+\.?\d*)$/
      );
      if (coordMatch) {
        lat = coordMatch[1];
        lng = coordMatch[2];
      } else if (locationInput.trim()) {
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

      setMapCenter([parseFloat(lat), parseFloat(lng)]);

      const params = new URLSearchParams({
        lat,
        lng,
        limit: "40",
        radius: radiusFilter,
      });

      // Pass network and connector filters to API
      if (networkFilter) params.set("ev_network", networkFilter);
      if (connectorFilter) params.set("ev_connector_type", connectorFilter);

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
  }, [locationInput, mapCenter, radiusFilter, networkFilter, connectorFilter]);

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

  // Nearby deals based on map center / search location
  const nearbyDeals = useMemo(() => {
    if (!mapCenter) return [];
    return DEALS.filter((deal) => {
      const dist = haversineDistance(
        mapCenter[0],
        mapCenter[1],
        deal.lat,
        deal.lng
      );
      return dist <= 30;
    }).slice(0, 4);
  }, [mapCenter]);

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

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setEmailStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xjggywyr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: emailInput,
          source: "charge-page",
          message: "EV Charging Updates signup",
        }),
      });
      if (res.ok) {
        setEmailStatus("sent");
        setEmailInput("");
      } else {
        setEmailStatus("error");
      }
    } catch {
      setEmailStatus("error");
    }
  };

  const filters: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "DC Fast", value: "dc_fast" },
    { label: "Level 2", value: "level2" },
    { label: "Free", value: "free" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="CHARGE" />

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="pt-28 px-6 md:px-12"
      >
        <div className="max-w-[1400px] mx-auto">
          <ol className="flex items-center gap-1.5 text-[11px] text-[#3d4a61]">
            <li>
              <Link href="/" className="hover:text-[#4a90d9] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#6b7a94]">Charge</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-4 pb-6 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">
            Charge
          </div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-extralight tracking-tight mb-4">
            Find EV{" "}
            <span className="italic text-[#4a90d9]">Chargers</span>
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[600px] mx-auto">
            Search 85,000+ EV charging stations across the US. Filter by
            network, connector type, and charging speed.
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

          {/* Advanced Filters Toggle */}
          <button
            onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            className="mt-3 text-[12px] text-[#4a90d9] hover:text-[#5a9ee5] transition-colors flex items-center gap-1"
          >
            <svg
              className={`w-3 h-3 transition-transform ${showAdvancedFilters ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            {showAdvancedFilters ? "Hide Filters" : "More Filters"}
          </button>

          {/* Advanced Filters Row */}
          {showAdvancedFilters && (
            <div className="flex flex-col sm:flex-row gap-3 mt-3 p-4 bg-[rgba(15,22,40,0.5)] border border-[rgba(74,144,217,0.1)] rounded-xl">
              {/* Network Filter */}
              <div className="flex-1">
                <label className="block text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] mb-1.5 font-medium">
                  Network
                </label>
                <select
                  value={networkFilter}
                  onChange={(e) => setNetworkFilter(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[12px] focus:outline-none focus:border-[#4a90d9] transition-colors appearance-none"
                >
                  <option value="" className="bg-[#0a0f1a]">All Networks</option>
                  {NETWORKS.map((n) => (
                    <option key={n} value={n} className="bg-[#0a0f1a]">
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              {/* Connector Filter */}
              <div className="flex-1">
                <label className="block text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] mb-1.5 font-medium">
                  Connector Type
                </label>
                <select
                  value={connectorFilter}
                  onChange={(e) => setConnectorFilter(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[12px] focus:outline-none focus:border-[#4a90d9] transition-colors appearance-none"
                >
                  <option value="" className="bg-[#0a0f1a]">All Connectors</option>
                  {CONNECTOR_TYPES.map((ct) => (
                    <option key={ct.value} value={ct.value} className="bg-[#0a0f1a]">
                      {ct.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Distance Radius */}
              <div className="flex-1">
                <label className="block text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] mb-1.5 font-medium">
                  Distance Radius
                </label>
                <select
                  value={radiusFilter}
                  onChange={(e) => setRadiusFilter(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[12px] focus:outline-none focus:border-[#4a90d9] transition-colors appearance-none"
                >
                  {RADIUS_OPTIONS.map((r) => (
                    <option key={r.value} value={r.value} className="bg-[#0a0f1a]">
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

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

                      {/* Access Hours & Pricing */}
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-[#6b7a94] mb-2">
                        {station.accessTime && (
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3 text-[#3d4a61]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {station.accessTime}
                          </span>
                        )}
                        {station.pricing && (
                          <span className="flex items-center gap-1">
                            <svg className="w-3 h-3 text-[#3d4a61]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="truncate max-w-[180px]">{station.pricing}</span>
                          </span>
                        )}
                      </div>

                      {/* Phone & Directions */}
                      <div className="flex items-center gap-2 mb-2">
                        {station.phone && (
                          <a
                            href={`tel:${station.phone}`}
                            className="flex items-center gap-1 text-[11px] text-[#4a90d9] hover:text-[#5a9ee5] transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            {station.phone}
                          </a>
                        )}
                        <a
                          href={`https://www.google.com/maps/dir/?api=1&destination=${station.lat},${station.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-[11px] text-[#34d399] hover:text-[#4ade80] transition-colors ml-auto"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m0 0l3-3m-3 3l-3-3m12-3v8.25m0 0l3-3m-3 3l-3-3" />
                          </svg>
                          Get Directions
                        </a>
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
                              10%&rarr;80% at {getStationMaxKw(station)} kW
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

      {/* Nearby Deals Cross-Sell */}
      {nearbyDeals.length > 0 && hasSearched && (
        <section className="px-6 md:px-12 pb-10">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-[20px] font-light tracking-tight mb-1">
              Auto Service <span className="italic text-[#4a90d9]">Deals</span> Nearby
            </h2>
            <p className="text-[13px] text-[#6b7a94] mb-5">
              While you charge, check out these deals from shops near your search area.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {nearbyDeals.map((deal) => (
                <Link
                  key={deal.id}
                  href={`/deals?city=${encodeURIComponent(deal.city)}`}
                  className="p-4 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.35)] transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 text-[10px] tracking-[0.03em] rounded-md bg-[rgba(52,211,153,0.1)] text-[#34d399] border border-[rgba(52,211,153,0.2)] font-medium">
                      {deal.discountLabel}
                    </span>
                    <span className="text-[10px] text-[#3d4a61]">{deal.city}</span>
                  </div>
                  <h3 className="text-[13px] font-medium text-[#e8edf5] leading-snug mb-1 group-hover:text-[#4a90d9] transition-colors">
                    {deal.title}
                  </h3>
                  <p className="text-[11px] text-[#6b7a94]">{deal.shop}</p>
                </Link>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/deals"
                className="text-[13px] text-[#4a90d9] hover:text-[#5a9ee5] transition-colors"
              >
                View all deals &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Browse by Network */}
      <section className="px-6 md:px-12 pb-10">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[20px] font-light tracking-tight mb-1">
            Browse by <span className="italic text-[#4a90d9]">Network</span>
          </h2>
          <p className="text-[13px] text-[#6b7a94] mb-5">
            Find charging stations from your preferred network.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {NETWORKS.map((network) => (
              <button
                key={network}
                onClick={() => {
                  setNetworkFilter(network);
                  setShowAdvancedFilters(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`p-3 rounded-xl text-center border transition-all duration-300 hover:-translate-y-0.5 ${
                  networkFilter === network
                    ? "bg-[rgba(74,144,217,0.15)] border-[rgba(74,144,217,0.4)] text-[#4a90d9]"
                    : "bg-[rgba(15,22,40,0.6)] border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.3)] text-[#e8edf5]"
                }`}
              >
                <svg
                  className="w-5 h-5 mx-auto mb-1.5 text-[#4a90d9]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
                <span className="text-[11px] font-medium leading-tight block">
                  {network}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by State */}
      <section className="px-6 md:px-12 pb-10">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[20px] font-light tracking-tight mb-1">
            Browse by <span className="italic text-[#4a90d9]">State</span>
          </h2>
          <p className="text-[13px] text-[#6b7a94] mb-5">
            Explore charging infrastructure across the country.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {BROWSE_STATES.map((state) => (
              <button
                key={state.abbr}
                onClick={() => {
                  setLocationInput(state.name);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-3 rounded-xl text-center bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="text-[16px] font-medium text-[#4a90d9] block">
                  {state.abbr}
                </span>
                <span className="text-[11px] text-[#6b7a94] block mt-0.5">
                  {state.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="px-6 md:px-12 pb-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="p-6 md:p-8 rounded-2xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] text-center">
            <svg
              className="w-8 h-8 mx-auto mb-3 text-[#4a90d9]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
            <h2 className="text-[20px] font-light tracking-tight mb-2">
              Get EV Charging <span className="italic text-[#4a90d9]">Updates</span>
            </h2>
            <p className="text-[13px] text-[#6b7a94] mb-5 max-w-[500px] mx-auto">
              New stations, price changes, and charging tips delivered to your
              inbox. No spam.
            </p>
            {emailStatus === "sent" ? (
              <div className="text-[#34d399] text-[14px] font-medium">
                You&apos;re signed up! We&apos;ll keep you in the loop.
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[460px] mx-auto">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 bg-[rgba(10,15,26,0.6)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[13px] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
                />
                <button
                  type="submit"
                  disabled={emailStatus === "sending"}
                  className="px-6 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-all duration-200 disabled:opacity-60 whitespace-nowrap"
                >
                  {emailStatus === "sending" ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
            {emailStatus === "error" && (
              <p className="text-[12px] text-[#ef4444] mt-2">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="p-4 rounded-xl bg-[rgba(15,22,40,0.4)] border border-[rgba(74,144,217,0.08)]">
            <h3 className="text-[12px] font-medium text-[#6b7a94] mb-2 uppercase tracking-[0.05em]">
              Data Sources &amp; Disclaimer
            </h3>
            <p className="text-[11px] text-[#3d4a61] leading-relaxed">
              Charging station data is provided by the U.S. Department of
              Energy&apos;s Alternative Fuels Station Locator, powered by the
              National Renewable Energy Laboratory (NREL). Data is updated
              regularly but station availability, pricing, hours of operation,
              and connector compatibility may vary from what is displayed.
              Always verify details with the charging network or station
              operator before traveling. Charge time estimates are
              approximations based on vehicle specifications and may differ
              based on battery state of charge, temperature, and charging
              infrastructure. Healvanna is not affiliated with or endorsed by
              the U.S. Department of Energy, NREL, or any charging network
              listed on this page.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

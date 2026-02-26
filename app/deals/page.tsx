"use client";

import { useState, useMemo, useEffect, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  DEALS,
  DEAL_TYPES,
  SERVICE_FILTERS,
} from "../lib/dealsData";
import { useVercelGeo } from "../hooks/useVercelGeo";
import { REGION_TO_STATE, haversineDistance } from "../lib/floridaCities";

const BADGE_COLORS: Record<string, { bg: string; text: string }> = {
  bogo: { bg: "bg-[rgba(168,85,247,0.15)]", text: "text-[#a855f7]" },
  percent_off: { bg: "bg-[rgba(52,211,153,0.15)]", text: "text-[#34d399]" },
  dollar_off: { bg: "bg-[rgba(74,144,217,0.15)]", text: "text-[#4a90d9]" },
  new_customer: { bg: "bg-[rgba(239,68,68,0.15)]", text: "text-[#ef4444]" },
  seasonal: { bg: "bg-[rgba(245,158,11,0.15)]", text: "text-[#f59e0b]" },
  free_service: { bg: "bg-[rgba(20,184,166,0.15)]", text: "text-[#14b8a6]" },
  bundle: { bg: "bg-[rgba(6,182,212,0.15)]", text: "text-[#06b6d4]" },
};

const BADGE_LABELS: Record<string, string> = {
  bogo: "BOGO",
  percent_off: "% OFF",
  dollar_off: "$ DEAL",
  new_customer: "NEW CUSTOMER",
  seasonal: "SEASONAL",
  free_service: "FREE",
  bundle: "BUNDLE",
};

function DealsPageContent() {
  const searchParams = useSearchParams();
  const geo = useVercelGeo();

  const [dealTypeFilter, setDealTypeFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [userLat, setUserLat] = useState<number | null>(null);
  const [userLng, setUserLng] = useState<number | null>(null);
  const [userCity, setUserCity] = useState<string | null>(null);
  const [userRegion, setUserRegion] = useState<string | null>(null);
  const [locationSource, setLocationSource] = useState<"vercel" | "zip" | "none">("none");
  const [showZipInput, setShowZipInput] = useState(false);
  const [zipInput, setZipInput] = useState("");
  const [zipLoading, setZipLoading] = useState(false);
  const [zipError, setZipError] = useState("");

  // Read ?service= query param on mount
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      const match = SERVICE_FILTERS.find(
        (sf) => sf.toLowerCase() === serviceParam.toLowerCase()
      );
      if (match) {
        setServiceFilter(match);
        setDealTypeFilter("");
      }
    }
  }, [searchParams]);

  // Process geo detection
  useEffect(() => {
    if (geo.isLoading || !geo.detected) return;

    setUserCity(geo.city);
    setUserRegion(geo.region);
    setLocationSource("vercel");

    if (geo.latitude && geo.longitude) {
      setUserLat(geo.latitude);
      setUserLng(geo.longitude);
    }
  }, [geo.isLoading, geo.detected, geo.city, geo.region, geo.latitude, geo.longitude]);

  // ZIP code lookup via Nominatim
  const handleZipLookup = useCallback(async () => {
    if (!zipInput.trim() || !/^\d{5}$/.test(zipInput.trim())) {
      setZipError("Enter a valid 5-digit ZIP code");
      return;
    }
    setZipLoading(true);
    setZipError("");
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?postalcode=${zipInput.trim()}&country=US&format=json&limit=1`
      );
      const data = await res.json();
      if (data.length > 0) {
        const lat = parseFloat(data[0].lat);
        const lng = parseFloat(data[0].lon);
        setUserLat(lat);
        setUserLng(lng);
        // Extract city/state from display_name
        const parts = data[0].display_name.split(", ");
        setUserCity(parts[0] || zipInput.trim());
        // Try to find state from parts
        const stateMatch = parts.find((p: string) =>
          Object.values(REGION_TO_STATE).includes(p)
        );
        if (stateMatch) {
          setUserRegion(
            Object.entries(REGION_TO_STATE).find(
              ([, v]) => v === stateMatch
            )?.[0] || null
          );
        }
        setLocationSource("zip");
        setShowZipInput(false);
        setZipInput("");
      } else {
        setZipError("ZIP code not found. Try another.");
      }
    } catch {
      setZipError("Lookup failed. Try again.");
    } finally {
      setZipLoading(false);
    }
  }, [zipInput]);

  // Filter + proximity sort deals
  const filteredDeals = useMemo(() => {
    let deals = DEALS.filter((d) => {
      if (dealTypeFilter && d.dealType !== dealTypeFilter) return false;
      if (serviceFilter && !d.categories.includes(serviceFilter)) return false;
      return true;
    });

    // Sort by distance if user location available
    if (userLat !== null && userLng !== null) {
      deals = [...deals].sort((a, b) => {
        const distA = haversineDistance(userLat, userLng, a.lat, a.lng);
        const distB = haversineDistance(userLat, userLng, b.lat, b.lng);
        return distA - distB;
      });
    }

    return deals;
  }, [dealTypeFilter, serviceFilter, userLat, userLng]);

  const stats = useMemo(() => {
    const shops = new Set(DEALS.map((d) => d.shop));
    return { total: DEALS.length, shops: shops.size, topSaving: "$100" };
  }, []);

  const clearFilters = () => {
    setDealTypeFilter("");
    setServiceFilter("");
  };

  // Get distance for a deal
  const getDealDistance = (dealLat: number, dealLng: number): string | null => {
    if (userLat === null || userLng === null) return null;
    const dist = haversineDistance(userLat, userLng, dealLat, dealLng);
    if (dist < 1) return "<1 mi";
    return `${Math.round(dist)} mi`;
  };

  // Location banner text
  const getLocationBanner = () => {
    if (geo.isLoading) {
      return { type: "loading" as const, text: "Detecting your location..." };
    }
    if (locationSource === "vercel" && userCity && userRegion) {
      const stateName = REGION_TO_STATE[userRegion] || userRegion;
      const isInFlorida = userRegion === "FL";
      if (isInFlorida) {
        return {
          type: "detected" as const,
          text: `Showing deals near ${userCity}, FL`,
          sub: "sorted by distance",
        };
      }
      return {
        type: "out_of_state" as const,
        text: `You're in ${userCity}, ${stateName}`,
        sub: "showing Florida deals sorted by distance to you",
      };
    }
    if (locationSource === "zip" && userCity) {
      return {
        type: "zip" as const,
        text: `Showing deals near ${userCity}`,
        sub: "sorted by distance",
      };
    }
    return {
      type: "none" as const,
      text: "Showing all deals",
      sub: null,
    };
  };

  const banner = getLocationBanner();

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="" />

      {/* Hero */}
      <section className="pt-32 pb-6 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">
            Save
          </div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-extralight tracking-tight mb-4">
            Car Service{" "}
            <span className="italic text-[#4a90d9]">Deal Hunter</span>
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[600px] mx-auto">
            Save on auto repairs, maintenance, and EV services near you.
            Real deals from real shops, updated regularly.
          </p>
        </div>
      </section>

      {/* Location Banner */}
      <section className="px-6 md:px-12 pb-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center justify-center gap-3 py-3 px-5 rounded-xl bg-[rgba(74,144,217,0.06)] border border-[rgba(74,144,217,0.1)]">
            {banner.type === "loading" ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-[#4a90d9] border-t-transparent rounded-full animate-spin" />
                <span className="text-[13px] text-[#6b7a94] animate-pulse">
                  {banner.text}
                </span>
              </div>
            ) : (
              <>
                <svg
                  className="w-4 h-4 text-[#4a90d9] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  <span className="text-[13px] text-[#e8edf5] font-medium">
                    {banner.text}
                  </span>
                  {banner.sub && (
                    <span className="text-[11px] text-[#6b7a94]">
                      — {banner.sub}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setShowZipInput(!showZipInput)}
                  className="text-[11px] text-[#4a90d9] hover:text-[#5a9ee5] transition-colors ml-2 whitespace-nowrap"
                >
                  {locationSource !== "none" ? "Change" : "Enter ZIP"}
                </button>
              </>
            )}
          </div>

          {/* ZIP Input */}
          {showZipInput && (
            <div className="flex items-center justify-center gap-2 mt-3">
              <input
                type="text"
                value={zipInput}
                onChange={(e) => {
                  setZipInput(e.target.value.replace(/\D/g, "").slice(0, 5));
                  setZipError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleZipLookup()}
                placeholder="Enter ZIP code"
                className="w-32 px-3 py-2 text-[13px] bg-[#0d1424] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] focus:border-[#4a90d9] focus:outline-none transition-colors text-center"
                maxLength={5}
              />
              <button
                onClick={handleZipLookup}
                disabled={zipLoading}
                className="px-4 py-2 text-[12px] font-medium bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-colors disabled:opacity-50"
              >
                {zipLoading ? "..." : "Go"}
              </button>
              <button
                onClick={() => {
                  setShowZipInput(false);
                  setZipError("");
                }}
                className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors"
              >
                Cancel
              </button>
              {zipError && (
                <span className="text-[11px] text-[#ef4444]">{zipError}</span>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 pb-4">
        <div className="max-w-[1000px] mx-auto flex justify-center">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1.5">
              <span className="text-[#34d399] font-medium">{stats.total}</span>
              <span className="text-[#6b7a94]">deals</span>
            </div>
            <div className="w-px h-4 bg-[rgba(74,144,217,0.15)]" />
            <div className="flex items-center gap-1.5">
              <span className="text-[#4a90d9] font-medium">{stats.shops}</span>
              <span className="text-[#6b7a94]">shops</span>
            </div>
            <div className="w-px h-4 bg-[rgba(74,144,217,0.15)]" />
            <div className="flex items-center gap-1.5">
              <span className="text-[#34d399] font-medium">Up to {stats.topSaving}</span>
              <span className="text-[#6b7a94]">savings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
          <section className="px-6 md:px-12 pb-6">
            <div className="max-w-[1000px] mx-auto space-y-3">
              {/* Deal Type filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={clearFilters}
                  className={`px-4 py-2 text-[12px] rounded-full border transition-all duration-200 ${
                    !dealTypeFilter && !serviceFilter
                      ? "bg-[#4a90d9] text-[#0a0f1a] border-[#4a90d9]"
                      : "bg-transparent text-[#6b7a94] border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#e8edf5]"
                  }`}
                >
                  All Deals
                </button>
                {DEAL_TYPES.map((dt) => (
                  <button
                    key={dt.slug}
                    onClick={() => {
                      setDealTypeFilter(dealTypeFilter === dt.slug ? "" : dt.slug);
                      setServiceFilter("");
                    }}
                    className={`px-4 py-2 text-[12px] rounded-full border transition-all duration-200 ${
                      dealTypeFilter === dt.slug
                        ? "bg-[#4a90d9] text-[#0a0f1a] border-[#4a90d9]"
                        : "bg-transparent text-[#6b7a94] border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#e8edf5]"
                    }`}
                  >
                    {dt.label}
                  </button>
                ))}
              </div>

              {/* Service filters */}
              <div className="flex flex-wrap gap-2">
                {SERVICE_FILTERS.map((sf) => (
                  <button
                    key={sf}
                    onClick={() => {
                      setServiceFilter(serviceFilter === sf ? "" : sf);
                      setDealTypeFilter("");
                    }}
                    className={`px-3.5 py-1.5 text-[11px] rounded-full border transition-all duration-200 capitalize ${
                      serviceFilter === sf
                        ? "bg-[rgba(74,144,217,0.15)] text-[#4a90d9] border-[#4a90d9]"
                        : "bg-transparent text-[#3d4a61] border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] hover:text-[#6b7a94]"
                    }`}
                  >
                    {sf}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Deals Grid */}
          <section className="px-6 md:px-12 pb-8">
            <div className="max-w-[1000px] mx-auto">
              {filteredDeals.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredDeals.map((deal) => {
                    const badge = BADGE_COLORS[deal.dealType] || BADGE_COLORS.dollar_off;
                    const distance = getDealDistance(deal.lat, deal.lng);
                    return (
                      <div
                        key={deal.id}
                        className="bg-[#0d1424] border border-[rgba(74,144,217,0.12)] rounded-2xl p-5 hover:border-[rgba(74,144,217,0.35)] hover:shadow-[0_0_30px_-10px_rgba(74,144,217,0.15)] transition-all duration-300 flex flex-col"
                      >
                        {/* Top row: badge + discount */}
                        <div className="flex items-start justify-between mb-3">
                          <span
                            className={`px-2.5 py-1 text-[10px] tracking-[0.05em] font-semibold rounded-md ${badge.bg} ${badge.text}`}
                          >
                            {BADGE_LABELS[deal.dealType]}
                          </span>
                          <span className="text-[18px] font-bold text-[#34d399]">
                            {deal.discountLabel}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-[14px] font-medium text-[#e8edf5] mb-1.5 leading-snug">
                          {deal.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[12px] text-[#6b7a94] leading-relaxed line-clamp-2 mb-3">
                          {deal.description}
                        </p>

                        {/* Category tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {deal.categories.slice(0, 3).map((cat) => (
                            <span
                              key={cat}
                              className="px-2 py-0.5 text-[10px] rounded-md bg-[rgba(74,144,217,0.06)] text-[#3d4a61] border border-[rgba(74,144,217,0.08)]"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>

                        {/* Spacer */}
                        <div className="flex-1" />

                        {/* Footer */}
                        <div className="pt-3 border-t border-[rgba(74,144,217,0.08)]">
                          <div className="text-[12px] text-[#6b7a94] mb-3">
                            <span className="text-[#e8edf5] font-medium">{deal.shop}</span>
                            <span className="mx-1.5">&middot;</span>
                            {deal.city}, FL
                            {distance && (
                              <span className="ml-1.5 text-[#3d4a61]">
                                ({distance})
                              </span>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <a
                              href={deal.dealsPage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 px-4 py-2.5 text-[12px] font-medium text-center bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-colors"
                            >
                              Get This Deal
                            </a>
                            <a
                              href={`https://www.google.com/maps/search/${encodeURIComponent(deal.shop + " " + deal.city + " Florida")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2.5 text-[12px] font-medium text-[#6b7a94] bg-[rgba(74,144,217,0.08)] rounded-lg hover:text-[#e8edf5] hover:bg-[rgba(74,144,217,0.15)] transition-colors"
                            >
                              Directions
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-16">
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
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  <p className="text-[14px] text-[#6b7a94]">
                    No deals found for this filter. Check back soon!
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-3 text-[13px] text-[#4a90d9] hover:text-[#5a9ee5] transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </section>

      {/* Bottom CTAs */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-[800px] mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 text-[13px] font-medium text-center bg-[rgba(74,144,217,0.08)] text-[#4a90d9] border border-[rgba(74,144,217,0.2)] rounded-xl hover:bg-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] transition-all"
          >
            Own a shop? List your deals for free &rarr;
          </Link>
          <Link
            href="/care"
            className="px-8 py-4 text-[13px] font-medium text-center bg-[rgba(74,144,217,0.08)] text-[#6b7a94] border border-[rgba(74,144,217,0.1)] rounded-xl hover:text-[#e8edf5] hover:border-[rgba(74,144,217,0.3)] transition-all"
          >
            Find More Shops &rarr;
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[11px] text-[#3d4a61] leading-relaxed">
            Deals are sourced from publicly available promotions. Verify
            availability directly with the shop before visiting. Healvanna Auto
            is not responsible for expired or modified deals. Shop owners can
            submit or update deals by contacting us.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function DealsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5] flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#4a90d9] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <DealsPageContent />
    </Suspense>
  );
}

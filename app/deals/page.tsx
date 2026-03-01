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

/* ───────── Constants ───────── */

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

const CITIES = [
  { name: "Orlando", lat: 28.5383, lng: -81.3792 },
  { name: "Miami", lat: 25.7617, lng: -80.1918 },
  { name: "Tampa", lat: 27.9506, lng: -82.4572 },
  { name: "Jacksonville", lat: 30.3322, lng: -81.6557 },
  { name: "Fort Lauderdale", lat: 26.1224, lng: -80.1373 },
  { name: "Naples", lat: 26.1420, lng: -81.7948 },
  { name: "Sarasota", lat: 27.3364, lng: -82.5307 },
  { name: "Daytona Beach", lat: 29.2108, lng: -81.0228 },
];

const SERVICE_TYPES = [
  { name: "Oil Change", icon: "🛢️", filter: "oil change" },
  { name: "Detailing", icon: "✨", filter: "detailing" },
  { name: "EV Service", icon: "⚡", filter: "EV service" },
  { name: "Brake Service", icon: "🔧", filter: "brakes" },
  { name: "Tires", icon: "🔘", filter: "tires" },
  { name: "AC Service", icon: "❄️", filter: "AC service" },
  { name: "Wrapping", icon: "🎨", filter: "wrapping" },
  { name: "Body Shops", icon: "🏪", filter: "body work" },
  { name: "Collision", icon: "💥", filter: "collision" },
  { name: "Auto Glass", icon: "🪟", filter: "auto glass" },
  { name: "Painting", icon: "🖌️", filter: "paint" },
  { name: "Car Wash", icon: "🚿", filter: "car wash" },
  { name: "Ceramic Coating", icon: "💎", filter: "ceramic coating" },
  { name: "Tire Rotation", icon: "🔄", filter: "tire rotation" },
  { name: "Alignment", icon: "📐", filter: "alignment" },
  { name: "Inspection", icon: "🔍", filter: "inspection" },
  { name: "Maintenance", icon: "🛠️", filter: "maintenance" },
  { name: "Battery", icon: "🔋", filter: "battery" },
];

const DEAL_TYPE_BROWSE = [
  { name: "New Customer", icon: "🆕", filter: "new_customer" },
  { name: "BOGO Deals", icon: "🎁", filter: "bogo" },
  { name: "Seasonal Specials", icon: "🌞", filter: "seasonal" },
  { name: "Free Services", icon: "🎉", filter: "free_service" },
  { name: "Bundle Deals", icon: "📦", filter: "bundle" },
  { name: "Dollar Off", icon: "💵", filter: "dollar_off" },
  { name: "Percent Off", icon: "🏷️", filter: "percent_off" },
];

const BROWSE_STATES = [
  { name: "Florida", abbr: "FL", active: true },
  { name: "Georgia", abbr: "GA", active: false },
  { name: "Alabama", abbr: "AL", active: false },
  { name: "South Carolina", abbr: "SC", active: false },
  { name: "Texas", abbr: "TX", active: false },
];

const NEAR_RADIUS = 30; // miles

/* ───────── Main component ───────── */

function DealsPageContent() {
  const searchParams = useSearchParams();
  const geo = useVercelGeo();

  const [activeSection, setActiveSection] = useState<"all" | "city" | "service" | "type">("all");
  const [cityFilter, setCityFilter] = useState<string | null>(null);
  const [dealTypeFilter, setDealTypeFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [userLat, setUserLat] = useState<number | null>(null);
  const [userLng, setUserLng] = useState<number | null>(null);
  const [userCity, setUserCity] = useState<string | null>(null);
  const [userRegion, setUserRegion] = useState<string | null>(null);
  const [locationSource, setLocationSource] = useState<"browser" | "vercel" | "zip" | "zip_nearest" | "none">("none");
  const [showZipInput, setShowZipInput] = useState(false);
  const [zipInput, setZipInput] = useState("");
  const [zipLoading, setZipLoading] = useState(false);
  const [zipError, setZipError] = useState("");
  const [nearestZipMsg, setNearestZipMsg] = useState<string | null>(null);
  const [geoLoading, setGeoLoading] = useState(true);
  const [emailInput, setEmailInput] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [browserGeoResolved, setBrowserGeoResolved] = useState(false);
  const [browserGeoDenied, setBrowserGeoDenied] = useState(false);

  // Read ?service= query param on mount
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      const match = SERVICE_FILTERS.find(
        (sf) => sf.toLowerCase() === serviceParam.toLowerCase()
      );
      if (match) {
        setServiceFilter(match);
        setActiveSection("service");
      }
    }
  }, [searchParams]);

  // Step 1: Try browser Geolocation API
  useEffect(() => {
    let cancelled = false;
    if (!navigator.geolocation) {
      setBrowserGeoDenied(true);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        if (cancelled) return;
        const { latitude, longitude } = position.coords;
        setUserLat(latitude);
        setUserLng(longitude);
        setLocationSource("browser");
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&zoom=10`
          );
          const data = await res.json();
          if (!cancelled && data.address) {
            setUserCity(data.address.city || data.address.town || data.address.village || null);
            const stateCode = Object.entries(REGION_TO_STATE).find(
              ([, v]) => v === data.address.state
            )?.[0] || null;
            setUserRegion(stateCode);
          }
        } catch { /* coords set, city won't show */ }
        if (!cancelled) {
          setBrowserGeoResolved(true);
          setGeoLoading(false);
        }
      },
      () => { if (!cancelled) setBrowserGeoDenied(true); },
      { timeout: 5000, maximumAge: 300000 }
    );
    return () => { cancelled = true; };
  }, []);

  // Step 2: Vercel geo fallback
  useEffect(() => {
    if (!browserGeoDenied) return;
    if (geo.isLoading) return;
    if (browserGeoResolved) return;
    if (geo.detected) {
      setUserCity(geo.city);
      setUserRegion(geo.region);
      setLocationSource("vercel");
      if (geo.latitude && geo.longitude) {
        setUserLat(geo.latitude);
        setUserLng(geo.longitude);
      }
    }
    setGeoLoading(false);
  }, [browserGeoDenied, browserGeoResolved, geo.isLoading, geo.detected, geo.city, geo.region, geo.latitude, geo.longitude]);

  // ZIP code lookup
  const handleZipLookup = useCallback(async () => {
    if (!zipInput.trim() || !/^\d{5}$/.test(zipInput.trim())) {
      setZipError("Enter a valid 5-digit ZIP code");
      return;
    }
    setZipLoading(true);
    setZipError("");
    setNearestZipMsg(null);
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
        const parts = data[0].display_name.split(", ");
        setUserCity(parts[0] || zipInput.trim());
        const stateMatch = parts.find((p: string) =>
          Object.values(REGION_TO_STATE).includes(p)
        );
        if (stateMatch) {
          setUserRegion(
            Object.entries(REGION_TO_STATE).find(([, v]) => v === stateMatch)?.[0] || null
          );
        }
        const nearbyCount = DEALS.filter(
          (d) => haversineDistance(lat, lng, d.lat, d.lng) <= 50
        ).length;
        if (nearbyCount === 0) {
          setLocationSource("zip_nearest");
          setNearestZipMsg(`No deals in ${zipInput.trim()} yet — showing nearest deals`);
        } else {
          setLocationSource("zip");
          setNearestZipMsg(null);
        }
        setShowZipInput(false);
        setZipInput("");
        setActiveSection("all");
        setCityFilter(null);
      } else {
        setZipError("ZIP code not found. Try another.");
      }
    } catch {
      setZipError("Lookup failed. Try again.");
    } finally {
      setZipLoading(false);
    }
  }, [zipInput]);

  // Email signup
  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setEmailStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/xjggywyr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, _subject: "Deal Alerts Signup" }),
      });
      setEmailStatus(res.ok ? "success" : "error");
      if (res.ok) setEmailInput("");
    } catch {
      setEmailStatus("error");
    }
  };

  // Filter + proximity sort deals
  const filteredDeals = useMemo(() => {
    let deals = DEALS.filter((d) => {
      if (cityFilter && d.city !== cityFilter) return false;
      if (dealTypeFilter && d.dealType !== dealTypeFilter) return false;
      if (serviceFilter && !d.categories.includes(serviceFilter)) return false;
      return true;
    });
    if (userLat !== null && userLng !== null) {
      deals = [...deals].sort((a, b) =>
        haversineDistance(userLat, userLng, a.lat, a.lng) - haversineDistance(userLat, userLng, b.lat, b.lng)
      );
    }
    return deals;
  }, [cityFilter, dealTypeFilter, serviceFilter, userLat, userLng]);

  // Split near / more (from filtered deals, for filtered view)
  const { nearDeals: nearFiltered, moreDeals: moreFiltered } = useMemo(() => {
    if (userLat === null || userLng === null) return { nearDeals: [], moreDeals: filteredDeals };
    const near: typeof filteredDeals = [];
    const more: typeof filteredDeals = [];
    for (const deal of filteredDeals) {
      if (haversineDistance(userLat, userLng, deal.lat, deal.lng) <= NEAR_RADIUS) {
        near.push(deal);
      } else {
        more.push(deal);
      }
    }
    return { nearDeals: near, moreDeals: more };
  }, [filteredDeals, userLat, userLng]);

  // Near deals from ALL deals (for the browse/all view, unfiltered)
  const nearDeals = useMemo(() => {
    if (userLat === null || userLng === null) return [];
    return DEALS
      .filter(d => haversineDistance(userLat, userLng, d.lat, d.lng) <= NEAR_RADIUS)
      .sort((a, b) => haversineDistance(userLat!, userLng!, a.lat, a.lng) - haversineDistance(userLat!, userLng!, b.lat, b.lng));
  }, [userLat, userLng]);

  // Featured deals: top savings / most interesting
  const featuredDeals = useMemo(() => {
    const featured = DEALS.filter(d =>
      d.dealType === "bogo" || d.dealType === "free_service" ||
      d.discountLabel.includes("$80") || d.discountLabel.includes("$60") || d.discountLabel.includes("$100")
    );
    if (userLat !== null && userLng !== null) {
      return [...featured].sort((a, b) =>
        haversineDistance(userLat!, userLng!, a.lat, a.lng) - haversineDistance(userLat!, userLng!, b.lat, b.lng)
      ).slice(0, 6);
    }
    return featured.slice(0, 6);
  }, [userLat, userLng]);

  const stats = useMemo(() => {
    const shops = new Set(DEALS.map((d) => d.shop));
    return { total: DEALS.length, shops: shops.size };
  }, []);

  const clearFilters = () => {
    setDealTypeFilter("");
    setServiceFilter("");
    setCityFilter(null);
    setActiveSection("all");
  };

  const getDealDistance = (dealLat: number, dealLng: number): string | null => {
    if (userLat === null || userLng === null) return null;
    const dist = haversineDistance(userLat, userLng, dealLat, dealLng);
    if (dist < 1) return "<1 mi";
    return `${Math.round(dist)} mi`;
  };

  // Location banner
  const getLocationBanner = () => {
    if (geoLoading) return { type: "loading" as const, text: "Detecting your location..." };
    if (locationSource === "zip_nearest" && nearestZipMsg) return { type: "nearest" as const, text: nearestZipMsg };
    if ((locationSource === "browser" || locationSource === "vercel") && userCity && userRegion) {
      const stateName = REGION_TO_STATE[userRegion] || userRegion;
      if (userRegion === "FL") return { type: "detected" as const, text: `Showing deals near ${userCity}, FL` };
      return { type: "out_of_state" as const, text: `You're in ${userCity}, ${stateName} — showing Florida deals` };
    }
    if ((locationSource === "browser" || locationSource === "vercel") && userLat !== null) {
      return { type: "detected" as const, text: "Showing deals near your location" };
    }
    if (locationSource === "zip" && userCity) return { type: "zip" as const, text: `Showing deals near ${userCity}` };
    return { type: "none" as const, text: "Showing all Florida deals" };
  };

  const banner = getLocationBanner();

  /* ───────── Deal card ───────── */
  const renderDealCard = (deal: (typeof DEALS)[0], featured = false) => {
    const badge = BADGE_COLORS[deal.dealType] || BADGE_COLORS.dollar_off;
    const distance = getDealDistance(deal.lat, deal.lng);
    return (
      <div
        key={deal.id}
        className={`bg-[#0d1424] border rounded-2xl p-5 hover:border-[rgba(74,144,217,0.35)] hover:shadow-[0_0_30px_-10px_rgba(74,144,217,0.15)] transition-all duration-300 flex flex-col ${
          featured ? "border-[rgba(16,185,129,0.2)]" : "border-[rgba(74,144,217,0.12)]"
        }`}
      >
        <div className="flex items-start justify-between mb-3">
          <span className={`px-2.5 py-1 text-[10px] tracking-[0.05em] font-semibold rounded-md ${badge.bg} ${badge.text}`}>
            {BADGE_LABELS[deal.dealType]}
          </span>
          <span className="text-[18px] font-bold text-[#34d399]">{deal.discountLabel}</span>
        </div>
        <h3 className="text-[14px] font-medium text-[#e8edf5] mb-1.5 leading-snug">{deal.title}</h3>
        <p className="text-[12px] text-[#6b7a94] leading-relaxed line-clamp-2 mb-3">{deal.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {deal.categories.slice(0, 3).map((cat) => (
            <span key={cat} className="px-2 py-0.5 text-[10px] rounded-md bg-[rgba(74,144,217,0.06)] text-[#3d4a61] border border-[rgba(74,144,217,0.08)]">
              {cat}
            </span>
          ))}
        </div>
        <div className="flex-1" />
        <div className="pt-3 border-t border-[rgba(74,144,217,0.08)]">
          <div className="text-[12px] text-[#6b7a94] mb-3">
            <span className="text-[#e8edf5] font-medium">{deal.shop}</span>
            <span className="mx-1.5">&middot;</span>
            {deal.city}, FL
            {distance && <span className="ml-1.5 text-[#3d4a61]">({distance})</span>}
          </div>
          <div className="flex gap-2">
            <a
              href={deal.dealsPage}
              target="_blank"
              rel="noopener noreferrer sponsored"
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
  };

  /* ───────── Section heading ───────── */
  const SectionHeading = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) => (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-9 h-9 rounded-xl bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.12)] flex items-center justify-center text-[16px]">
        {icon}
      </div>
      <div>
        <h2 className="text-[18px] font-semibold text-[#e8edf5]">{title}</h2>
        {subtitle && <p className="text-[12px] text-[#6b7a94]">{subtitle}</p>}
      </div>
    </div>
  );

  /* ───────── City deals count ───────── */
  const cityDealCount = (cityName: string) => DEALS.filter(d => d.city === cityName).length;

  // ItemList structured data for SEO
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Car Service Deals in Florida",
    numberOfItems: DEALS.length,
    itemListElement: DEALS.slice(0, 20).map((deal, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: deal.title,
      url: deal.dealsPage,
    })),
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Navigation activeItem="" />

      {/* Hero */}
      <section className="pt-32 pb-8 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#10B981] mb-3.5 font-medium">
            Save on Auto Services
          </div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-extralight tracking-tight mb-4">
            Car Service{" "}
            <span className="italic text-[#4a90d9]">Deals</span>
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[600px] mx-auto mb-6">
            Compare real deals from real shops across Florida. Oil changes, detailing, brakes, EV services and more — all in one place.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 text-sm mb-6">
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
              <span className="text-[#34d399] font-medium">{CITIES.length}</span>
              <span className="text-[#6b7a94]">cities</span>
            </div>
          </div>

          {/* Location Banner */}
          <div className={`inline-flex items-center gap-2.5 py-3 px-5 rounded-full border text-[13px] ${
            banner.type === "nearest"
              ? "bg-[rgba(245,158,11,0.06)] border-[rgba(245,158,11,0.15)] text-[#f59e0b]"
              : banner.type === "detected" || banner.type === "zip"
                ? "bg-[rgba(16,185,129,0.06)] border-[rgba(16,185,129,0.15)] text-[#e8edf5]"
                : "bg-[rgba(74,144,217,0.06)] border-[rgba(74,144,217,0.1)] text-[#6b7a94]"
          }`}>
            {banner.type === "loading" ? (
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 border-2 border-[#4a90d9] border-t-transparent rounded-full animate-spin" />
                <span className="animate-pulse">{banner.text}</span>
              </div>
            ) : (
              <>
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="font-medium">{banner.text}</span>
                <button
                  onClick={() => setShowZipInput(!showZipInput)}
                  className="text-[11px] text-[#4a90d9] hover:text-[#5a9ee5] transition-colors ml-1"
                >
                  {locationSource !== "none" ? "Change" : "Enter ZIP"}
                </button>
              </>
            )}
          </div>

          {showZipInput && (
            <div className="flex items-center justify-center gap-2 mt-3">
              <input
                type="text"
                value={zipInput}
                onChange={(e) => { setZipInput(e.target.value.replace(/\D/g, "").slice(0, 5)); setZipError(""); }}
                onKeyDown={(e) => e.key === "Enter" && handleZipLookup()}
                placeholder="ZIP code"
                className="w-28 px-3 py-2 text-[13px] bg-[#0d1424] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] focus:border-[#4a90d9] focus:outline-none transition-colors text-center"
                maxLength={5}
              />
              <button onClick={handleZipLookup} disabled={zipLoading} className="px-4 py-2 text-[12px] font-medium bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-colors disabled:opacity-50">
                {zipLoading ? "..." : "Go"}
              </button>
              <button onClick={() => { setShowZipInput(false); setZipError(""); }} className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors">
                Cancel
              </button>
              {zipError && <span className="text-[11px] text-[#ef4444]">{zipError}</span>}
            </div>
          )}
        </div>
      </section>

      {/* ───────── Near You (Geo-Detected) ───────── */}
      {activeSection === "all" && !geoLoading && nearDeals.length > 0 && (
        <section className="px-6 md:px-12 pb-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-center gap-2 mb-5">
              <svg className="w-5 h-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <h2 className="text-[18px] font-semibold text-[#10B981]">Near You</h2>
              <span className="text-[12px] text-[#6b7a94]">
                {nearDeals.length} {nearDeals.length === 1 ? "deal" : "deals"} within {NEAR_RADIUS} miles
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nearDeals.map(deal => renderDealCard(deal))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Featured Deals ───────── */}
      {activeSection === "all" && featuredDeals.length > 0 && (
        <section className="px-6 md:px-12 pb-10">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeading
              icon={<span>🔥</span>}
              title="Featured Deals"
              subtitle="Top savings and popular offers"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredDeals.map((deal) => renderDealCard(deal, true))}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Browse by City ───────── */}
      {activeSection === "all" && (
        <section className="px-6 md:px-12 pb-10">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeading
              icon={<span>📍</span>}
              title="Deals by City"
              subtitle="Browse deals in your area"
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {CITIES.map((city) => {
                const count = cityDealCount(city.name);
                const dist = userLat !== null && userLng !== null
                  ? Math.round(haversineDistance(userLat, userLng, city.lat, city.lng))
                  : null;
                return (
                  <button
                    key={city.name}
                    onClick={() => { setCityFilter(city.name); setActiveSection("city"); setDealTypeFilter(""); setServiceFilter(""); }}
                    className="group p-4 rounded-xl border border-[rgba(74,144,217,0.1)] bg-[#0d1424] hover:border-[rgba(74,144,217,0.3)] hover:bg-[rgba(74,144,217,0.04)] transition-all duration-300 text-left"
                  >
                    <div className="text-[15px] font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">
                      {city.name}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[12px] text-[#34d399]">{count} {count === 1 ? "deal" : "deals"}</span>
                      {dist !== null && (
                        <span className="text-[11px] text-[#3d4a61]">{dist} mi</span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Browse by State ───────── */}
      {activeSection === "all" && (
        <section className="px-6 md:px-12 pb-10">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeading
              icon={<span>🗺️</span>}
              title="Deals by State"
              subtitle="Browse deals across the Southeast and beyond"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {BROWSE_STATES.map((state) => {
                const count = state.active ? DEALS.length : 0;
                return state.active ? (
                  <button
                    key={state.abbr}
                    onClick={() => { setCityFilter(null); setDealTypeFilter(""); setServiceFilter(""); setActiveSection("all"); }}
                    className="group p-4 rounded-xl border border-[rgba(16,185,129,0.15)] bg-[#0d1424] hover:border-[rgba(16,185,129,0.3)] hover:bg-[rgba(16,185,129,0.04)] transition-all duration-300 text-left"
                  >
                    <div className="text-[15px] font-medium text-[#e8edf5] group-hover:text-[#10B981] transition-colors">
                      {state.name}
                    </div>
                    <div className="text-[12px] text-[#34d399] mt-1">{count} {count === 1 ? "deal" : "deals"}</div>
                  </button>
                ) : (
                  <div
                    key={state.abbr}
                    className="p-4 rounded-xl border border-[rgba(74,144,217,0.05)] bg-[#0d1424]/50 opacity-50 cursor-default text-left"
                  >
                    <div className="text-[15px] font-medium text-[#6b7a94]">
                      {state.name}
                    </div>
                    <div className="text-[11px] text-[#3d4a61] mt-1">Coming Soon</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Browse by Service Type ───────── */}
      {activeSection === "all" && (
        <section className="px-6 md:px-12 pb-10">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeading
              icon={<span>🔧</span>}
              title="Deals by Service Type"
              subtitle="Find deals for the service you need"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {SERVICE_TYPES.map((st) => {
                const count = DEALS.filter(d => d.categories.includes(st.filter)).length;
                return (
                  <button
                    key={st.filter}
                    onClick={count > 0 ? () => { setServiceFilter(st.filter); setActiveSection("service"); setCityFilter(null); setDealTypeFilter(""); } : undefined}
                    className={`group p-4 rounded-xl border transition-all duration-300 text-center ${count > 0
                      ? "border-[rgba(74,144,217,0.1)] bg-[#0d1424] hover:border-[rgba(74,144,217,0.3)] hover:bg-[rgba(74,144,217,0.04)] cursor-pointer"
                      : "border-[rgba(74,144,217,0.05)] bg-[#0d1424]/50 opacity-50 cursor-default"
                    }`}
                  >
                    <div className="text-[24px] mb-2">{st.icon}</div>
                    <div className={`text-[13px] font-medium transition-colors ${count > 0 ? "text-[#e8edf5] group-hover:text-[#4a90d9]" : "text-[#6b7a94]"}`}>
                      {st.name}
                    </div>
                    <div className={`text-[11px] mt-1 ${count > 0 ? "text-[#34d399]" : "text-[#3d4a61]"}`}>{count} {count === 1 ? "deal" : "deals"}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Browse by Deal Type ───────── */}
      {activeSection === "all" && (
        <section className="px-6 md:px-12 pb-10">
          <div className="max-w-[1200px] mx-auto">
            <SectionHeading
              icon={<span>🏷️</span>}
              title="Deals by Deal Type"
              subtitle="BOGO, first-time customer discounts, seasonal specials, and more"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {DEAL_TYPE_BROWSE.map((dt) => {
                const count = DEALS.filter(d => d.dealType === dt.filter).length;
                return (
                  <button
                    key={dt.filter}
                    onClick={() => { setDealTypeFilter(dt.filter); setActiveSection("type"); setCityFilter(null); setServiceFilter(""); }}
                    className="group p-4 rounded-xl border border-[rgba(74,144,217,0.1)] bg-[#0d1424] hover:border-[rgba(74,144,217,0.3)] hover:bg-[rgba(74,144,217,0.04)] transition-all duration-300 text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-[20px]">{dt.icon}</span>
                      <div>
                        <div className="text-[13px] font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">
                          {dt.name}
                        </div>
                        <div className="text-[11px] text-[#34d399]">{count} {count === 1 ? "deal" : "deals"}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ───────── Filtered Results View ───────── */}
      {activeSection !== "all" && (
        <section className="px-6 md:px-12 pb-10">
          <div className="max-w-[1200px] mx-auto">
            {/* Back button + active filter */}
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-[13px] text-[#4a90d9] hover:text-[#5a9ee5] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                All Deals
              </button>
              <span className="text-[#3d4a61]">/</span>
              <span className="text-[14px] font-medium text-[#e8edf5]">
                {activeSection === "city" && cityFilter}
                {activeSection === "service" && serviceFilter && serviceFilter.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                {activeSection === "type" && DEAL_TYPES.find(dt => dt.slug === dealTypeFilter)?.label}
              </span>
              <span className="text-[12px] text-[#6b7a94]">
                ({filteredDeals.length} {filteredDeals.length === 1 ? "deal" : "deals"})
              </span>
            </div>

            {/* Sub-filters: when in city view, also show service filters */}
            {activeSection === "city" && (
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => { setServiceFilter(""); setDealTypeFilter(""); }}
                  className={`px-3.5 py-1.5 text-[11px] rounded-full border transition-all ${
                    !serviceFilter && !dealTypeFilter
                      ? "bg-[#4a90d9] text-[#0a0f1a] border-[#4a90d9]"
                      : "text-[#6b7a94] border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#e8edf5]"
                  }`}
                >
                  All
                </button>
                {SERVICE_FILTERS.slice(0, 8).map(sf => {
                  const count = DEALS.filter(d => d.city === cityFilter && d.categories.includes(sf)).length;
                  if (count === 0) return null;
                  return (
                    <button
                      key={sf}
                      onClick={() => { setServiceFilter(serviceFilter === sf ? "" : sf); setDealTypeFilter(""); }}
                      className={`px-3.5 py-1.5 text-[11px] rounded-full border transition-all capitalize ${
                        serviceFilter === sf
                          ? "bg-[rgba(74,144,217,0.15)] text-[#4a90d9] border-[#4a90d9]"
                          : "text-[#3d4a61] border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] hover:text-[#6b7a94]"
                      }`}
                    >
                      {sf}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Deal grid */}
            {filteredDeals.length > 0 ? (
              <>
                {nearFiltered.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-4 h-4 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                      <h3 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#10B981]">Near You</h3>
                      <span className="text-[11px] text-[#6b7a94]">({nearFiltered.length} within {NEAR_RADIUS} mi)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {nearFiltered.map(deal => renderDealCard(deal))}
                    </div>
                  </div>
                )}
                {moreFiltered.length > 0 && (
                  <div>
                    {nearFiltered.length > 0 && (
                      <div className="flex items-center gap-2 mb-4">
                        <svg className="w-4 h-4 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
                        </svg>
                        <h3 className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#4a90d9]">More Deals</h3>
                        <span className="text-[11px] text-[#6b7a94]">({moreFiltered.length})</span>
                      </div>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {moreFiltered.map(deal => renderDealCard(deal))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <svg className="w-10 h-10 mx-auto mb-4 text-[#3d4a61]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <p className="text-[14px] text-[#6b7a94]">No deals found for this filter.</p>
                <button onClick={clearFilters} className="mt-3 text-[13px] text-[#4a90d9] hover:text-[#5a9ee5] transition-colors">
                  View all deals
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ───────── Email Capture ───────── */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-[700px] mx-auto">
          <div className="rounded-2xl border border-[rgba(16,185,129,0.15)] bg-[rgba(16,185,129,0.04)] p-8 text-center">
            <div className="text-[24px] mb-3">📬</div>
            <h2 className="text-[20px] font-semibold text-[#e8edf5] mb-2">Get Deal Alerts</h2>
            <p className="text-[13px] text-[#6b7a94] mb-5 max-w-[400px] mx-auto">
              New deals added weekly. Get notified when we find savings near you — no spam, just deals.
            </p>
            {emailStatus === "success" ? (
              <div className="flex items-center justify-center gap-2 text-[#10B981]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className="text-[14px] font-medium">You&apos;re subscribed! We&apos;ll be in touch.</span>
              </div>
            ) : (
              <form onSubmit={handleEmailSignup} className="flex gap-2 max-w-[400px] mx-auto">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 text-[13px] bg-[#0d1424] border border-[rgba(74,144,217,0.2)] rounded-xl text-[#e8edf5] placeholder:text-[#3d4a61] focus:border-[#10B981] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={emailStatus === "submitting"}
                  className="px-6 py-3 text-[13px] font-medium bg-[#10B981] text-[#0a0f1a] rounded-xl hover:bg-[#34d399] transition-colors disabled:opacity-50"
                >
                  {emailStatus === "submitting" ? "..." : "Subscribe"}
                </button>
              </form>
            )}
            {emailStatus === "error" && (
              <p className="text-[12px] text-[#ef4444] mt-2">Something went wrong. Try again.</p>
            )}
          </div>
        </div>
      </section>

      {/* ───────── Bottom CTAs ───────── */}
      <section className="px-6 md:px-12 pb-10">
        <div className="max-w-[800px] mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/partner"
            className="px-8 py-4 text-[13px] font-medium text-center bg-[rgba(74,144,217,0.08)] text-[#4a90d9] border border-[rgba(74,144,217,0.2)] rounded-xl hover:bg-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] transition-all"
          >
            Own a shop? List your deals for free &rarr;
          </Link>
          <Link
            href="/directory"
            className="px-8 py-4 text-[13px] font-medium text-center bg-[rgba(74,144,217,0.08)] text-[#6b7a94] border border-[rgba(74,144,217,0.1)] rounded-xl hover:text-[#e8edf5] hover:border-[rgba(74,144,217,0.3)] transition-all"
          >
            Browse Service Directory &rarr;
          </Link>
        </div>
      </section>

      {/* ───────── Disclaimer ───────── */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[800px] mx-auto">
          <div className="rounded-xl border border-[rgba(74,144,217,0.08)] bg-[rgba(74,144,217,0.03)] p-5">
            <div className="flex items-start gap-3">
              <svg className="w-4 h-4 text-[#3d4a61] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
              </svg>
              <div>
                <p className="text-[12px] text-[#3d4a61] leading-relaxed mb-1.5">
                  <span className="text-[#6b7a94] font-medium">Third-Party Deals Disclaimer:</span> Deals listed on this page are sourced from publicly available promotions offered by third-party businesses. Healvanna Auto does not guarantee pricing, availability, or terms of any deal.
                </p>
                <p className="text-[11px] text-[#3d4a61] leading-relaxed">
                  Always verify deal details directly with the service provider before visiting. Healvanna Auto earns no commission from these listings unless marked. Shop owners can submit or update deals by <Link href="/contact" className="text-[#4a90d9] hover:text-[#5a9ee5] transition-colors">contacting us</Link>.
                </p>
              </div>
            </div>
          </div>
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

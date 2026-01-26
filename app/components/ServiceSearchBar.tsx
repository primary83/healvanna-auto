"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { SERVICE_CATEGORIES, MAJOR_CITIES } from "../lib/services";
import { useGeoLocation, calculateDistance } from "../hooks/useGeoLocation";

const SERVICE_SUGGESTIONS = SERVICE_CATEGORIES.flatMap((cat) => [
  { label: cat.name, slug: cat.slug, type: "category" as const },
  ...cat.subcategories.map((sub) => ({
    label: sub.name,
    slug: cat.slug,
    type: "subcategory" as const,
  })),
]);

export default function ServiceSearchBar() {
  const router = useRouter();
  const geo = useGeoLocation();
  const [query, setQuery] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Set ZIP from geolocation once detection is complete
  useEffect(() => {
    if (!geo.isLoading && geo.zip) {
      setZipCode(geo.zip);
    }
  }, [geo.isLoading, geo.zip]);

  // Close suggestions on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = query.trim().length > 0
    ? SERVICE_SUGGESTIONS.filter((s) =>
        s.label.toLowerCase().includes(query.toLowerCase())
      )
    : SERVICE_SUGGESTIONS.filter((s) => s.type === "category");

  function buildUrl(slug: string) {
    if (!geo.latitude || !geo.longitude) return `/${slug}`;

    // Find the nearest major city that has a static page
    let nearestSlug = "";
    let nearestDist = Infinity;
    for (const city of MAJOR_CITIES) {
      const dist = calculateDistance(
        geo.latitude, geo.longitude,
        city.latitude, city.longitude
      );
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestSlug = city.slug;
      }
    }

    return nearestSlug ? `/${slug}/${nearestSlug}` : `/${slug}`;
  }

  function handleSearch(slug?: string) {
    if (slug) {
      router.push(buildUrl(slug));
      return;
    }

    // Try to match query to a service
    const match = SERVICE_SUGGESTIONS.find(
      (s) => s.label.toLowerCase() === query.toLowerCase()
    );
    if (match) {
      router.push(buildUrl(match.slug));
      return;
    }

    // Partial match — take first result
    const partial = filtered[0];
    if (partial) {
      router.push(buildUrl(partial.slug));
      return;
    }

    // Fallback to services page
    router.push("/services");
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlightedIndex >= 0 && filtered[highlightedIndex]) {
        handleSearch(filtered[highlightedIndex].slug);
      } else {
        handleSearch();
      }
      setShowSuggestions(false);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  }

  return (
    <div className="w-full max-w-[800px] mx-auto" ref={wrapperRef}>
      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row bg-white/[0.07] backdrop-blur-md rounded-2xl border border-white/[0.12] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
        {/* Service Input */}
        <div className="flex-1 relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
              setHighlightedIndex(-1);
            }}
            onFocus={() => setShowSuggestions(true)}
            onKeyDown={handleKeyDown}
            placeholder="What does your car need?"
            className="w-full pl-12 pr-4 py-4 sm:py-5 bg-transparent text-white placeholder:text-[#6b7a94] text-[15px] outline-none"
          />
        </div>

        {/* Divider */}
        <div className="hidden sm:block w-px bg-white/[0.1] my-3" />
        <div className="block sm:hidden h-px bg-white/[0.1] mx-4" />

        {/* ZIP Code Input */}
        <div className="relative flex items-center">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-[#6b7a94]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value.replace(/\D/g, "").slice(0, 5))}
            placeholder={geo.isLoading ? "Detecting..." : "ZIP Code"}
            className="w-full sm:w-[140px] pl-10 pr-4 py-4 sm:py-5 bg-transparent text-white placeholder:text-[#6b7a94] text-[15px] outline-none"
            maxLength={5}
          />
        </div>

        {/* Search Button */}
        <button
          onClick={() => {
            handleSearch();
            setShowSuggestions(false);
          }}
          className="mx-3 my-3 px-6 py-3 sm:py-0 bg-[#4a90d9] hover:bg-[#5a9ee5] text-white font-medium text-[14px] rounded-xl transition-all duration-200 hover:shadow-[0_4px_16px_rgba(74,144,217,0.4)] shrink-0"
        >
          Search
        </button>
      </div>

      {/* Autocomplete Suggestions */}
      {showSuggestions && filtered.length > 0 && (
        <div className="mt-2 bg-[#111827]/95 backdrop-blur-md rounded-xl border border-white/[0.1] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.4)] max-h-[280px] overflow-y-auto">
          {filtered.map((item, idx) => (
            <button
              key={`${item.slug}-${item.label}`}
              onClick={() => {
                setQuery(item.label);
                handleSearch(item.slug);
                setShowSuggestions(false);
              }}
              onMouseEnter={() => setHighlightedIndex(idx)}
              className={`w-full text-left px-5 py-3 flex items-center gap-3 transition-colors ${
                idx === highlightedIndex
                  ? "bg-[#4a90d9]/15 text-white"
                  : "text-[#a0aec0] hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              <svg className="w-4 h-4 text-[#4a90d9] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                {item.type === "category" ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                )}
              </svg>
              <span className="text-[14px]">{item.label}</span>
              {item.type === "subcategory" && (
                <span className="text-[11px] text-[#6b7a94] ml-auto">
                  in {SERVICE_CATEGORIES.find((c) => c.slug === item.slug)?.shortName}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Quick Category Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mt-5">
        {SERVICE_CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => handleSearch(cat.slug)}
            className="px-4 py-2 text-[12px] font-medium text-[#a0aec0] bg-white/[0.05] hover:bg-[#4a90d9]/15 hover:text-[#4a90d9] border border-white/[0.08] hover:border-[#4a90d9]/30 rounded-full transition-all duration-200"
          >
            {cat.shortName}
          </button>
        ))}
      </div>

      {/* Location indicator */}
      {geo.city && geo.state && !geo.isLoading && (
        <div className="flex items-center justify-center gap-1.5 mt-4 text-[12px] text-[#6b7a94]">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span>Showing services near <span className="text-[#4a90d9]">{geo.city}, {geo.state}</span></span>
        </div>
      )}
    </div>
  );
}

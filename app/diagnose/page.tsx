"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  searchCodes,
  TOP_CODES,
  SEVERITY_COLORS,
  OBDCode,
  OBD_CODES,
  CATEGORIES,
  getCodesByCategory,
  getCategoryCounts,
} from "../lib/obdCodes";

// SVG icons for each category
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  engine: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  fuel: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
    </svg>
  ),
  emissions: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
    </svg>
  ),
  transmission: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  ),
  electrical: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
    </svg>
  ),
  body: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  chassis: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
    </svg>
  ),
  network: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  ),
};

export default function DiagnosePage() {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(50);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Read ?category= from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && CATEGORIES.some((c) => c.slug === cat)) {
      setActiveCategory(cat);
    }
  }, []);

  const categoryCounts = useMemo(() => getCategoryCounts(), []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchCodes(query);
  }, [query]);

  const categoryResults = useMemo(() => {
    if (!activeCategory) return [];
    return getCodesByCategory(activeCategory);
  }, [activeCategory]);

  const activeCategoryData = useMemo(
    () => CATEGORIES.find((c) => c.slug === activeCategory),
    [activeCategory]
  );

  const handleSearch = () => {
    if (query.trim()) setHasSearched(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleCategoryClick = (slug: string) => {
    if (activeCategory === slug) {
      // Deselect
      setActiveCategory("");
      window.history.replaceState({}, "", "/diagnose");
    } else {
      setActiveCategory(slug);
      setVisibleCount(50);
      setQuery("");
      setHasSearched(false);
      window.history.replaceState({}, "", `/diagnose?category=${slug}`);
    }
  };

  const clearCategory = () => {
    setActiveCategory("");
    setVisibleCount(50);
    window.history.replaceState({}, "", "/diagnose");
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    if (value.trim()) {
      setHasSearched(true);
      if (activeCategory) {
        setActiveCategory("");
        window.history.replaceState({}, "", "/diagnose");
      }
    }
  };

  const totalCodes = OBD_CODES.length;

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="DIAGNOSE" />

      {/* Header */}
      <section className="pt-32 pb-6 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">
            Diagnose
          </div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-extralight tracking-tight mb-4">
            Car{" "}
            <span className="italic text-[#4a90d9]">Diagnostic</span>{" "}
            Tool
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[600px] mx-auto">
            Enter a diagnostic trouble code or search by symptom to get
            plain-English explanations, severity levels, and estimated repair costs.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="px-6 md:px-12 pb-4">
        <div className="max-w-[800px] mx-auto">
          <div className="flex gap-3">
            <input
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder='Enter code (e.g., P0300) or keyword (e.g., "misfire")'
              className="flex-1 px-5 py-3.5 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[14px] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
            />
            <button
              onClick={handleSearch}
              className="px-8 py-3.5 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-all duration-200"
            >
              Search
            </button>
          </div>

          {/* Quick Access Chips */}
          <div className="mt-4">
            <div className="text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] font-medium mb-2.5">
              Common Codes
            </div>
            <div className="flex flex-wrap gap-2">
              {TOP_CODES.map((code) => (
                <Link
                  key={code}
                  href={`/diagnose/${code.toLowerCase()}`}
                  className="px-3.5 py-1.5 text-[12px] rounded-full bg-[rgba(15,22,40,0.8)] text-[#6b7a94] border border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#e8edf5] transition-all duration-200"
                >
                  {code}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Browse By Category */}
      <section className="px-6 md:px-12 pb-6">
        <div className="max-w-[1000px] mx-auto">
          {/* Total count */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.15)] text-[13px] text-[#6b7a94]">
              <svg className="w-4 h-4 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
              <span className="font-medium text-[#e8edf5]">{totalCodes.toLocaleString()}</span> Diagnostic Codes Available
            </span>
          </div>

          {/* Category heading */}
          <div className="text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] font-medium mb-3 text-center">
            Browse By Category
          </div>

          {/* Category grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryClick(cat.slug)}
                className={`text-left p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 group ${
                  activeCategory === cat.slug
                    ? "bg-[rgba(74,144,217,0.1)] border-[#4a90d9]"
                    : "bg-[rgba(15,22,40,0.6)] border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.35)]"
                }`}
              >
                <div
                  className={`mb-2 ${
                    activeCategory === cat.slug
                      ? "text-[#4a90d9]"
                      : "text-[#3d4a61] group-hover:text-[#4a90d9]"
                  } transition-colors`}
                >
                  {CATEGORY_ICONS[cat.slug]}
                </div>
                <div className="text-[13px] font-medium text-[#e8edf5] mb-0.5">
                  {cat.name}
                </div>
                <div className="text-[11px] text-[#3d4a61] mb-1.5">{cat.range}</div>
                <div className="text-[11px] text-[#4a90d9] font-medium">
                  {(categoryCounts[cat.slug] || 0).toLocaleString()} codes
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Category Results */}
      {activeCategory && activeCategoryData && !query.trim() && (
        <section className="px-6 md:px-12 pb-8">
          <div className="max-w-[800px] mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] font-medium">
                {activeCategoryData.name} — {categoryResults.length.toLocaleString()} codes
              </div>
              <button
                onClick={clearCategory}
                className="text-[12px] text-[#4a90d9] hover:text-[#5a9ee5] transition-colors flex items-center gap-1"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                Clear
              </button>
            </div>
            <div className="space-y-3">
              {categoryResults.slice(0, visibleCount).map((code) => (
                <CodeCard key={code.code} code={code} />
              ))}
            </div>
            {visibleCount < categoryResults.length && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setVisibleCount((v) => v + 50)}
                  className="px-6 py-3 text-[13px] font-medium text-[#4a90d9] bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.2)] rounded-lg hover:bg-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] transition-all duration-200"
                >
                  Load More ({Math.min(50, categoryResults.length - visibleCount)} more of {categoryResults.length.toLocaleString()})
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Search Results */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-[800px] mx-auto">
          {hasSearched && query.trim() && results.length > 0 && (
            <div className="space-y-3">
              <div className="text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] font-medium mb-2">
                {results.length} result{results.length !== 1 ? "s" : ""} found
              </div>
              {results.map((code) => (
                <CodeCard key={code.code} code={code} />
              ))}
            </div>
          )}

          {hasSearched && query.trim() && results.length === 0 && (
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
                No codes found for &ldquo;{query}&rdquo;
              </p>
              <p className="text-[12px] text-[#3d4a61] mt-1">
                Try a different code or keyword, like &ldquo;P0420&rdquo; or &ldquo;catalytic converter&rdquo;
              </p>
            </div>
          )}

          {!hasSearched && !activeCategory && (
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
                  d="M11.42 15.17l-5.384-3.19A1.5 1.5 0 015 10.69V6.31a1.5 1.5 0 011.036-1.29l5.384-3.19a1.5 1.5 0 011.16 0l5.384 3.19A1.5 1.5 0 0119 6.31v4.38a1.5 1.5 0 01-1.036 1.29l-5.384 3.19a1.5 1.5 0 01-1.16 0z"
                />
              </svg>
              <p className="text-[14px] text-[#6b7a94]">
                Enter a diagnostic code or search by symptom to get started.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[11px] text-[#3d4a61] leading-relaxed">
            For informational purposes only. Diagnostic trouble codes are
            starting points for diagnosis, not definitive answers. Always consult
            a certified mechanic for proper diagnosis and repair. Estimated costs
            vary by vehicle, location, and shop rates.
          </p>
        </div>
      </section>

      {/* ── What is OBD-II? ── */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-10">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">
              Learn
            </div>
            <h2 className="text-[clamp(26px,4vw,40px)] font-extralight tracking-tight mb-4">
              What is{" "}
              <span className="italic text-[#4a90d9]">OBD-II</span>?
            </h2>
            <p className="text-[15px] text-[#6b7a94] max-w-[640px] mx-auto leading-relaxed">
              Everything you need to know about on-board diagnostics and how your car communicates problems.
            </p>
          </div>

          <div className="space-y-6">
            {/* What OBD Stands For */}
            <div className="p-6 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center text-[#4a90d9]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[16px] font-medium text-[#e8edf5] mb-2">OBD Stands for On-Board Diagnostics</h3>
                  <p className="text-[13px] text-[#6b7a94] leading-relaxed">
                    OBD-II (On-Board Diagnostics, second generation) is a standardized computer system built into every modern vehicle. It continuously monitors your engine, transmission, emissions equipment, and other critical systems. When something goes wrong, the OBD-II system detects the issue, turns on your check engine light, and stores a specific diagnostic trouble code (DTC) that identifies the problem.
                  </p>
                </div>
              </div>
            </div>

            {/* Why It Matters */}
            <div className="p-6 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center text-[#4a90d9]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[16px] font-medium text-[#e8edf5] mb-2">Why OBD-II Matters</h3>
                  <p className="text-[13px] text-[#6b7a94] leading-relaxed">
                    OBD-II gives you the power to understand what&rsquo;s happening inside your car before a small issue becomes an expensive repair. It&rsquo;s the same system mechanics use to diagnose problems &mdash; and with an affordable scanner, you can read the codes yourself. It also plays a key role in emissions testing, helping keep vehicles running cleaner.
                  </p>
                </div>
              </div>
            </div>

            {/* Brief History */}
            <div className="p-6 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center text-[#4a90d9]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[16px] font-medium text-[#e8edf5] mb-2">A Brief History: OBD-I vs OBD-II</h3>
                  <p className="text-[13px] text-[#6b7a94] leading-relaxed">
                    The original OBD-I systems appeared in the early 1980s, but they varied wildly between manufacturers &mdash; each brand had its own codes, connectors, and protocols. In 1996, the U.S. government mandated OBD-II for all cars and light trucks sold in America. OBD-II standardized everything: a universal 16-pin connector, a shared set of diagnostic codes, and consistent communication protocols. This means any OBD-II scanner works with any 1996-or-newer vehicle, regardless of make.
                  </p>
                </div>
              </div>
            </div>

            {/* How DTCs Work */}
            <div className="p-6 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)]">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center text-[#4a90d9]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[16px] font-medium text-[#e8edf5] mb-2">How Diagnostic Trouble Codes Work</h3>
                  <p className="text-[13px] text-[#6b7a94] leading-relaxed mb-4">
                    Every DTC follows a standard five-character format. The first letter tells you which vehicle system is affected:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {[
                      { letter: "P", label: "Powertrain", desc: "Engine, transmission, drivetrain", color: "#4a90d9" },
                      { letter: "B", label: "Body", desc: "Airbags, A/C, seatbelts, lighting", color: "#34d399" },
                      { letter: "C", label: "Chassis", desc: "ABS, steering, suspension", color: "#f59e0b" },
                      { letter: "U", label: "Network", desc: "CAN bus, module communication", color: "#a78bfa" },
                    ].map((item) => (
                      <div
                        key={item.letter}
                        className="text-center p-3.5 rounded-lg bg-[rgba(10,15,26,0.6)] border border-[rgba(74,144,217,0.1)]"
                      >
                        <div
                          className="text-[28px] font-bold mb-1"
                          style={{ color: item.color }}
                        >
                          {item.letter}
                        </div>
                        <div className="text-[13px] font-medium text-[#e8edf5] mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-[11px] text-[#3d4a61] leading-snug">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-[13px] text-[#6b7a94] leading-relaxed mt-4">
                    The remaining characters narrow down the exact fault. For example, <span className="font-mono text-[#4a90d9]">P0300</span> means a random/multiple cylinder misfire in the powertrain system. Use the search tool above to look up any code and get a plain-English explanation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Where is My OBD-II Port? ── */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[900px] mx-auto">
          <div className="p-6 md:p-8 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center text-[#4a90d9]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[18px] font-medium text-[#e8edf5] mb-3">Where is My OBD-II Port?</h3>
                <p className="text-[13px] text-[#6b7a94] leading-relaxed mb-4">
                  On most vehicles, the OBD-II port is located <span className="text-[#e8edf5] font-medium">under the dashboard on the driver&rsquo;s side</span>, usually near the steering column. It&rsquo;s a 16-pin trapezoidal connector that faces downward.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { step: "1", text: "Sit in the driver's seat and look under the dashboard, to the left of the steering wheel." },
                    { step: "2", text: "Check near the fuse panel area or just above the pedals. Some vehicles have a small cover over the port." },
                    { step: "3", text: "Plug in your OBD-II scanner — it should fit snugly into the 16-pin connector. Turn the ignition to \"On\" (engine off) to start reading codes." },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="p-4 rounded-lg bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.08)]"
                    >
                      <div className="text-[20px] font-bold text-[#4a90d9] mb-2">{item.step}</div>
                      <p className="text-[12px] text-[#6b7a94] leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-extralight tracking-tight mb-3">
              Frequently Asked{" "}
              <span className="italic text-[#4a90d9]">Questions</span>
            </h2>
            <p className="text-[14px] text-[#6b7a94]">
              Common questions about OBD-II diagnostics and trouble codes.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "What does OBD stand for?",
                a: "OBD stands for On-Board Diagnostics. It refers to a vehicle's built-in computer system that monitors engine performance, emissions, and other critical systems. OBD-II is the second generation of this technology, standardized across all vehicles sold in the U.S. since 1996."
              },
              {
                q: "Do all cars have OBD-II?",
                a: "All gasoline cars and light trucks sold in the United States since 1996 are required to have OBD-II systems. Diesel vehicles followed in 1997. If your car was manufactured before 1996, it may have the older OBD-I system or no standardized diagnostic port at all."
              },
              {
                q: "What's the difference between OBD-I and OBD-II?",
                a: "OBD-I (pre-1996) varied by manufacturer — each brand had different connectors, codes, and protocols. OBD-II standardized everything: a universal 16-pin port, shared diagnostic codes, and consistent communication protocols. This means one scanner can read codes from any OBD-II vehicle, regardless of make or model."
              },
              {
                q: "Do electric vehicles have OBD ports?",
                a: "Yes, most electric vehicles have an OBD-II port because it's legally required. However, EVs often use the port primarily for emissions compliance reporting and may not expose as much diagnostic data through standard OBD-II protocols. Many EV manufacturers use proprietary systems for deeper diagnostics, accessible through brand-specific apps or dealer tools."
              },
              {
                q: "What do I need to read OBD codes?",
                a: "You need an OBD-II scanner (also called a code reader). Basic scanners that read and clear codes start around $20–$30. More advanced scanners offer live data, freeze frame data, and manufacturer-specific codes. You can also use a Bluetooth OBD-II adapter paired with a smartphone app — popular options include BlueDriver, FIXD, and the ELM327 adapter with the Torque app."
              },
              {
                q: "Are OBD codes the same for all cars?",
                a: "Generic (SAE standard) codes starting with P0, P2, P3, B0, C0, and U0 are the same across all manufacturers. However, manufacturer-specific codes (starting with P1, B1, C1, U1, etc.) are unique to each brand. These proprietary codes cover systems and features specific to that manufacturer."
              },
              {
                q: "Can I drive with a check engine light on?",
                a: "It depends on the severity. A steady check engine light usually indicates a non-emergency issue — the car is safe to drive short distances, but you should get it diagnosed soon. A flashing check engine light means a severe problem (often a misfire that can damage the catalytic converter) and you should pull over safely and avoid driving until it's repaired."
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[rgba(74,144,217,0.12)] overflow-hidden transition-colors duration-200 hover:border-[rgba(74,144,217,0.25)]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-[rgba(15,22,40,0.6)] hover:bg-[rgba(15,22,40,0.8)] transition-colors duration-200"
                >
                  <span className="text-[14px] font-medium text-[#e8edf5]">{item.q}</span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 text-[#4a90d9] transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 pt-0 bg-[rgba(15,22,40,0.4)]">
                    <p className="text-[13px] text-[#6b7a94] leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CodeCard({ code }: { code: OBDCode }) {
  const severity = SEVERITY_COLORS[code.severity];

  return (
    <Link
      href={`/diagnose/${code.code.toLowerCase()}`}
      className="block p-5 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.35)] transition-all duration-300 hover:-translate-y-0.5 group"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex items-center gap-3">
          <span className="text-[15px] font-mono font-semibold text-[#4a90d9]">
            {code.code}
          </span>
          <span
            className={`px-2.5 py-0.5 text-[10px] tracking-[0.03em] font-medium rounded-full ${severity.bg} ${severity.text} border ${severity.border}`}
          >
            {code.severity}
          </span>
        </div>
        <span className="px-2 py-0.5 text-[10px] tracking-[0.03em] rounded-md bg-[rgba(74,144,217,0.1)] text-[#4a90d9] border border-[rgba(74,144,217,0.2)]">
          {code.system}
        </span>
      </div>
      <h3 className="text-[14px] font-medium text-[#e8edf5] mb-1.5">
        {code.title}
      </h3>
      <p className="text-[12px] text-[#6b7a94] leading-relaxed line-clamp-2 mb-3">
        {code.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-[12px] text-[#6b7a94]">
          Est. ${code.estimatedCostMin} &ndash; ${code.estimatedCostMax}
        </span>
        <span className="text-[12px] text-[#4a90d9] group-hover:gap-2 inline-flex items-center gap-1 transition-all">
          View Details
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

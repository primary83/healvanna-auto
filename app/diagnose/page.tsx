"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { searchCodes, TOP_CODES, SEVERITY_COLORS, OBDCode } from "../lib/obdCodes";

export default function DiagnosePage() {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return searchCodes(query);
  }, [query]);

  const handleSearch = () => {
    if (query.trim()) setHasSearched(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

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
              onChange={(e) => {
                setQuery(e.target.value);
                if (e.target.value.trim()) setHasSearched(true);
              }}
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

      {/* Results */}
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

          {!hasSearched && (
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

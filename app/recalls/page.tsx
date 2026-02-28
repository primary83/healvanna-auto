"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const YEARS = Array.from({ length: 27 }, (_, i) => 2026 - i); // 2026 down to 2000

const MAKES = [
  "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler",
  "Dodge", "Fiat", "Fisker", "Ford", "Genesis", "GMC", "Honda", "Hyundai",
  "Infiniti", "Jaguar", "Jeep", "Kia", "Land Rover", "Lexus", "Lincoln",
  "Lucid", "Mazda", "Mercedes-Benz", "Mini", "Mitsubishi", "Nissan",
  "Polestar", "Porsche", "Ram", "Rivian", "Subaru", "Tesla", "Toyota",
  "Volkswagen", "Volvo",
];

interface Recall {
  NHTSACampaignNumber: string;
  Component: string;
  Summary: string;
  Consequence: string;
  Remedy: string;
  ReportReceivedDate: string;
  Manufacturer: string;
}

function getSeverity(consequence: string): {
  level: string;
  color: string;
  bg: string;
  border: string;
  bar: string;
} {
  const lower = consequence.toLowerCase();
  if (lower.includes("fire") || lower.includes("crash") || lower.includes("explosion") || lower.includes("death") || lower.includes("fatal")) {
    return {
      level: "Critical",
      color: "text-[#ef4444]",
      bg: "bg-[rgba(239,68,68,0.1)]",
      border: "border-[#ef4444]",
      bar: "border-l-[#ef4444]",
    };
  }
  if (lower.includes("injury") || lower.includes("injuries") || lower.includes("harm") || lower.includes("airbag")) {
    return {
      level: "High",
      color: "text-[#f97316]",
      bg: "bg-[rgba(249,115,22,0.1)]",
      border: "border-[#f97316]",
      bar: "border-l-[#f97316]",
    };
  }
  return {
    level: "Medium",
    color: "text-[#f59e0b]",
    bg: "bg-[rgba(245,158,11,0.1)]",
    border: "border-[#f59e0b]",
    bar: "border-l-[#f59e0b]",
  };
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "N/A";
  // NHTSA format: "/Date(1234567890000)/" or "MM/DD/YYYY"
  const msMatch = dateStr.match(/\/Date\((\d+)\)\//);
  if (msMatch) {
    const d = new Date(parseInt(msMatch[1]));
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }
  // Try direct parse
  const d = new Date(dateStr);
  if (!isNaN(d.getTime())) {
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  }
  return dateStr;
}

export default function RecallsPage() {
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [recalls, setRecalls] = useState<Recall[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleCheck = async () => {
    if (!year || !make || !model.trim()) return;

    setLoading(true);
    setError("");
    setHasSearched(true);
    setRecalls([]);

    try {
      const res = await fetch(
        `/api/recalls?year=${encodeURIComponent(year)}&make=${encodeURIComponent(make)}&model=${encodeURIComponent(model.trim())}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch recall data");
      }

      const data = await res.json();
      setRecalls(data.results || []);
    } catch {
      setError("Unable to fetch recall data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCheck();
  };

  const criticalCount = recalls.filter(
    (r) => getSeverity(r.Consequence).level === "Critical"
  ).length;

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="" />

      {/* Hero */}
      <section className="pt-32 pb-6 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">
            Safety
          </div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-extralight tracking-tight mb-4">
            Vehicle{" "}
            <span className="italic text-[#4a90d9]">Recall</span>{" "}
            Checker
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[600px] mx-auto">
            Check if your vehicle has any open safety recalls using official
            NHTSA data. Free, instant, and covers all makes and models.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-[800px] mx-auto">
          <div className="bg-[#0d1424] border border-[rgba(74,144,217,0.15)] rounded-2xl p-8">
            <h2 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-6 font-medium">
              Enter Your Vehicle
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Year */}
              <div>
                <label className="block text-sm text-[#6b7a94] mb-1.5">
                  Year
                </label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full bg-[#0a0f1a] border border-[rgba(74,144,217,0.2)] rounded-lg px-4 py-3 text-[#e8edf5] focus:border-[#4a90d9] focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select year</option>
                  {YEARS.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>

              {/* Make */}
              <div>
                <label className="block text-sm text-[#6b7a94] mb-1.5">
                  Make
                </label>
                <select
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  className="w-full bg-[#0a0f1a] border border-[rgba(74,144,217,0.2)] rounded-lg px-4 py-3 text-[#e8edf5] focus:border-[#4a90d9] focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select make</option>
                  {MAKES.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Model */}
              <div>
                <label className="block text-sm text-[#6b7a94] mb-1.5">
                  Model
                </label>
                <input
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="e.g., Camry, Model 3"
                  className="w-full bg-[#0a0f1a] border border-[rgba(74,144,217,0.2)] rounded-lg px-4 py-3 text-[#e8edf5] placeholder-[#3d4a61] focus:border-[#4a90d9] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <button
              onClick={handleCheck}
              disabled={!year || !make || !model.trim() || loading}
              className="w-full md:w-auto px-10 py-3.5 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Checking...
                </span>
              ) : (
                "Check Recalls"
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Error */}
      {error && (
        <section className="px-6 md:px-12 pb-6">
          <div className="max-w-[800px] mx-auto">
            <div className="p-4 rounded-xl bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] text-[#ef4444] text-[14px]">
              {error}
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {hasSearched && !loading && !error && (
        <section className="px-6 md:px-12 pb-8">
          <div className="max-w-[800px] mx-auto">
            {recalls.length > 0 ? (
              <>
                {/* Count badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)] text-[14px] font-medium text-[#ef4444]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    {recalls.length} Active Recall{recalls.length !== 1 ? "s" : ""} Found
                  </span>
                  {criticalCount > 0 && (
                    <span className="text-[12px] text-[#ef4444]">
                      {criticalCount} critical
                    </span>
                  )}
                </div>

                {/* Recall cards */}
                <div className="space-y-4">
                  {recalls.map((recall, i) => {
                    const severity = getSeverity(recall.Consequence);
                    return (
                      <div
                        key={recall.NHTSACampaignNumber || i}
                        className={`p-6 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] border-l-4 ${severity.bar}`}
                      >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div className="flex items-center gap-3">
                            <span className="text-[13px] font-mono text-[#4a90d9]">
                              {recall.NHTSACampaignNumber}
                            </span>
                            <span
                              className={`px-2.5 py-0.5 text-[10px] tracking-[0.03em] font-medium rounded-full ${severity.bg} ${severity.color}`}
                            >
                              {severity.level}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#3d4a61] whitespace-nowrap">
                            {formatDate(recall.ReportReceivedDate)}
                          </span>
                        </div>

                        {/* Component */}
                        <div className="mb-3">
                          <div className="text-[10px] tracking-[0.1em] uppercase text-[#6b7a94] mb-1">
                            Component
                          </div>
                          <div className="text-[14px] font-medium text-[#e8edf5]">
                            {recall.Component}
                          </div>
                        </div>

                        {/* Summary */}
                        <div className="mb-3">
                          <div className="text-[10px] tracking-[0.1em] uppercase text-[#6b7a94] mb-1">
                            Issue
                          </div>
                          <p className="text-[13px] text-[#6b7a94] leading-relaxed">
                            {recall.Summary}
                          </p>
                        </div>

                        {/* Consequence */}
                        {recall.Consequence && (
                          <div className="mb-3">
                            <div className="text-[10px] tracking-[0.1em] uppercase text-[#6b7a94] mb-1">
                              Consequence
                            </div>
                            <p className={`text-[13px] leading-relaxed ${severity.color}`}>
                              {recall.Consequence}
                            </p>
                          </div>
                        )}

                        {/* Remedy */}
                        {recall.Remedy && (
                          <div>
                            <div className="text-[10px] tracking-[0.1em] uppercase text-[#6b7a94] mb-1">
                              Remedy
                            </div>
                            <p className="text-[13px] text-[#34d399] leading-relaxed">
                              {recall.Remedy}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <Link
                    href="/care"
                    className="inline-flex items-center gap-2 px-8 py-4 text-[14px] font-medium bg-[rgba(239,68,68,0.1)] text-[#ef4444] border border-[rgba(239,68,68,0.25)] rounded-xl hover:bg-[rgba(239,68,68,0.15)] hover:border-[#ef4444] transition-all duration-200"
                  >
                    Need This Addressed?
                    <span className="text-[#e8edf5]">→</span>
                    <span className="text-[#e8edf5]">Find a Shop Near You</span>
                  </Link>
                </div>
              </>
            ) : (
              /* No recalls */
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[rgba(52,211,153,0.1)] border border-[rgba(52,211,153,0.2)] flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#34d399]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-[#34d399] mb-2">
                  No Recalls Found
                </h3>
                <p className="text-[14px] text-[#6b7a94] max-w-md mx-auto">
                  Great news! No open safety recalls were found for your {year}{" "}
                  {make} {model}. Your vehicle is clear.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Empty state before search */}
      {!hasSearched && !loading && (
        <section className="px-6 md:px-12 pb-8">
          <div className="max-w-[800px] mx-auto text-center py-12">
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
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
            <p className="text-[14px] text-[#6b7a94]">
              Select your vehicle above to check for open safety recalls.
            </p>
            <p className="text-[12px] text-[#3d4a61] mt-1.5">
              Data sourced from the National Highway Traffic Safety Administration (NHTSA)
            </p>
          </div>
        </section>
      )}

      {/* Disclaimer */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[11px] text-[#3d4a61] leading-relaxed">
            Recall data is provided by the National Highway Traffic Safety
            Administration (NHTSA). Results may not include all recalls. For the
            most complete recall information, visit{" "}
            <a
              href="https://www.nhtsa.gov/recalls"
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="text-[#4a90d9] hover:underline"
            >
              nhtsa.gov/recalls
            </a>{" "}
            or contact your vehicle dealer directly.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

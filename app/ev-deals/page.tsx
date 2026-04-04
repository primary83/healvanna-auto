"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { EV_DEALS, MARKET_PULSE, GAS_CARS, EV_BRANDS } from "../lib/evDealsData";
import type { EvDeal } from "../lib/evDealsData";
import { getSlugForDeal } from "../lib/evDetailData";
import SavingsCalculatorWidget from "../components/SavingsCalculatorWidget";

const BODY_TYPES = ["all", "sedan", "suv", "truck", "hatchback", "van"] as const;
const PRICE_RANGES = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $30k", min: 0, max: 30000 },
  { label: "$30k–$50k", min: 30000, max: 50000 },
  { label: "$50k–$80k", min: 50000, max: 80000 },
  { label: "$80k+", min: 80000, max: Infinity },
];
const RANGE_FILTERS = [
  { label: "Any Range", min: 0 },
  { label: "200+ mi", min: 200 },
  { label: "250+ mi", min: 250 },
  { label: "300+ mi", min: 300 },
];
const CONDITIONS = ["all", "new", "used"] as const;

function formatPrice(n: number | null) {
  if (n === null) return "N/A";
  return "$" + n.toLocaleString();
}

function scoreColor(score: number) {
  if (score >= 85) return "text-emerald-400";
  if (score >= 75) return "text-[#4a90d9]";
  if (score >= 65) return "text-amber-400";
  return "text-red-400";
}

function scoreBg(score: number) {
  if (score >= 85) return "bg-emerald-500/20 border-emerald-500/30";
  if (score >= 75) return "bg-[rgba(74,144,217,0.2)] border-[rgba(74,144,217,0.3)]";
  if (score >= 65) return "bg-amber-500/20 border-amber-500/30";
  return "bg-red-500/20 border-red-500/30";
}

function trendColor(pct: number) {
  if (pct < -5) return "text-emerald-400";
  if (pct < 0) return "text-emerald-300";
  if (pct === 0) return "text-slate-400";
  return "text-red-400";
}

export default function EvDealsPage() {
  // Filters
  const [bodyType, setBodyType] = useState<string>("all");
  const [priceIdx, setPriceIdx] = useState(0);
  const [rangeIdx, setRangeIdx] = useState(0);
  const [condition, setCondition] = useState<string>("all");
  const [brandFilter, setBrandFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("score");

  // Expandable cards
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [expandedTab, setExpandedTab] = useState<string>("ownership");

  // Comparison
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  // Calculator
  const [calcGasIdx, setCalcGasIdx] = useState(0);
  const [calcMilesPerYear, setCalcMilesPerYear] = useState(12000);
  const [calcGasPrice, setCalcGasPrice] = useState(3.5);
  const [calcElecPrice, setCalcElecPrice] = useState(0.13);

  // Newsletter
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // Filtering
  const filtered = useMemo(() => {
    let list = [...EV_DEALS];

    if (bodyType !== "all") list = list.filter((d) => d.bodyType === bodyType);
    if (brandFilter !== "all") list = list.filter((d) => d.brand === brandFilter);

    const pr = PRICE_RANGES[priceIdx];
    list = list.filter((d) => {
      const lowest = d.bestUsedPrice ?? d.bestNewPrice ?? d.msrp;
      return lowest >= pr.min && lowest < pr.max;
    });

    const rf = RANGE_FILTERS[rangeIdx];
    list = list.filter((d) => d.range >= rf.min);

    if (condition === "new") list = list.filter((d) => d.bestNewPrice !== null);
    if (condition === "used") list = list.filter((d) => d.bestUsedPrice !== null);

    // Sort
    list.sort((a, b) => {
      if (sortBy === "score") return b.trueValueScore - a.trueValueScore;
      if (sortBy === "price-low") {
        const aP = a.bestUsedPrice ?? a.bestNewPrice ?? a.msrp;
        const bP = b.bestUsedPrice ?? b.bestNewPrice ?? b.msrp;
        return aP - bP;
      }
      if (sortBy === "price-high") {
        const aP = a.bestNewPrice ?? a.msrp;
        const bP = b.bestNewPrice ?? b.msrp;
        return bP - aP;
      }
      if (sortBy === "range") return b.range - a.range;
      if (sortBy === "savings") return b.fuelSavings.fiveYear - a.fuelSavings.fiveYear;
      return 0;
    });

    return list;
  }, [bodyType, priceIdx, rangeIdx, condition, brandFilter, sortBy]);

  const featured = EV_DEALS.find((d) => d.featured);

  const toggleCompare = (id: string) => {
    setCompareIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : prev.length < 3 ? [...prev, id] : prev
    );
  };

  const compareDeals = compareIds.map((id) => EV_DEALS.find((d) => d.id === id)!).filter(Boolean);

  // Gas savings calc
  const gasCar = GAS_CARS[calcGasIdx];
  const annualGasCost = (calcMilesPerYear / gasCar.mpg) * calcGasPrice;
  const annualElecCost = (calcMilesPerYear / 3.5) * calcElecPrice; // avg 3.5 mi/kWh
  const annualSavings = annualGasCost - annualElecCost;

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmailStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xjggywyr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "ev-deals-newsletter" }),
      });
      setEmailStatus(res.ok ? "sent" : "error");
      if (res.ok) setEmail("");
    } catch {
      setEmailStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation />

      {/* SECTION 1: HERO */}
      <section className="pt-28 pb-14 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="max-w-[1400px] mx-auto relative">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[11px] text-[#6b7a94] mb-6">
            <Link href="/" className="hover:text-[#4a90d9] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#e8edf5]">EV Best Price Finder</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <div className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-[11px] font-semibold tracking-wide uppercase">
              Updated April 2026
            </div>
          </div>

          <h1 className="text-[36px] md:text-[48px] font-light tracking-tight leading-tight mb-4">
            EV Best Price <span className="text-emerald-400 font-medium">Finder</span>
          </h1>
          <p className="text-[16px] text-[#6b7a94] max-w-2xl mb-6">
            Compare real prices on 50 popular electric vehicles from Carvana, CarMax, AutoTrader, and more.
            Find the best deal with our True Value Score, ownership cost breakdowns, and Gas Savings Calculator.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-4 text-center">
              <div className="text-[28px] font-bold text-emerald-400">50</div>
              <div className="text-[11px] text-[#6b7a94] uppercase tracking-wider">EVs Compared</div>
            </div>
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-4 text-center">
              <div className="text-[28px] font-bold text-emerald-400">6</div>
              <div className="text-[11px] text-[#6b7a94] uppercase tracking-wider">Platforms Tracked</div>
            </div>
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-4 text-center">
              <div className="text-[28px] font-bold text-emerald-400">$1,100+</div>
              <div className="text-[11px] text-[#6b7a94] uppercase tracking-wider">Avg. Annual Gas Savings</div>
            </div>
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-4 text-center">
              <div className="text-[28px] font-bold text-emerald-400">Monthly</div>
              <div className="text-[11px] text-[#6b7a94] uppercase tracking-wider">Price Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: MARKET PULSE */}
      <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#4a90d9] font-medium mb-2">
            Market Intelligence
          </div>
          <h2 className="text-[24px] font-light tracking-tight mb-6">
            EV Market Pulse — April 2026
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {MARKET_PULSE.map((mp) => (
              <div
                key={mp.model}
                className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-4"
              >
                <div className="text-[12px] font-medium text-[#e8edf5] mb-1">{mp.model}</div>
                <div className={`text-[20px] font-bold ${trendColor(mp.percent)}`}>
                  {mp.percent > 0 ? "+" : ""}
                  {mp.percent}%
                </div>
                <div className="text-[11px] text-[#6b7a94] mt-1">{mp.note}</div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#3d4a61] mt-4">
            30-day price change based on average listing prices across major platforms. Updated monthly.
          </p>
        </div>
      </section>

      {/* SECTION 3: BEST DEAL RIGHT NOW */}
      {featured && (
        <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-[10px] tracking-[0.3em] uppercase text-emerald-400 font-medium mb-2">
              Editor&apos;s Pick
            </div>
            <h2 className="text-[24px] font-light tracking-tight mb-6">
              Best Deal Right Now
            </h2>
            <div className="bg-gradient-to-r from-emerald-900/20 to-[rgba(15,22,40,0.6)] border border-emerald-500/20 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-[11px] font-semibold">
                      True Value Score: {featured.trueValueScore}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-[11px] font-semibold ${trendColor(featured.trendPercent)} bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.12)]`}>
                      {featured.trendPercent}% this month
                    </span>
                  </div>
                  <h3 className="text-[28px] font-light mb-2">
                    {featured.year} {featured.brand} {featured.model}
                  </h3>
                  <p className="text-[14px] text-[#6b7a94] mb-4">{featured.featuredNote}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <div className="text-[11px] text-[#6b7a94] uppercase">Best New Price</div>
                      <div className="text-[18px] font-bold text-emerald-400">
                        {formatPrice(featured.bestNewPrice)}
                      </div>
                      <div className="text-[11px] text-[#3d4a61]">MSRP {formatPrice(featured.msrp)}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-[#6b7a94] uppercase">Range</div>
                      <div className="text-[18px] font-bold">{featured.range} mi</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-[#6b7a94] uppercase">0-60 mph</div>
                      <div className="text-[18px] font-bold">{featured.zeroToSixty}</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-[#6b7a94] uppercase">5-Year Savings</div>
                      <div className="text-[18px] font-bold text-emerald-400">
                        {formatPrice(featured.fuelSavings.fiveYear)}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {featured.platforms.map((p) => (
                      <a
                        key={p.name}
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="px-4 py-2 text-[12px] font-medium bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.2)] rounded-lg hover:border-emerald-500/50 hover:text-emerald-400 transition-all"
                      >
                        {p.name} &rarr;
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: FILTERS */}
      <section className="py-8 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)] sticky top-[73px] z-40 bg-[#0a0f1a]/95 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-3 items-center">
            {/* Body Type */}
            <div className="flex gap-1 bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-lg p-1">
              {BODY_TYPES.map((bt) => (
                <button
                  key={bt}
                  onClick={() => setBodyType(bt)}
                  className={`px-3 py-1.5 text-[11px] font-medium rounded-md capitalize transition-all ${
                    bodyType === bt
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "text-[#6b7a94] hover:text-[#e8edf5]"
                  }`}
                >
                  {bt === "all" ? "All Types" : bt + "s"}
                </button>
              ))}
            </div>

            {/* Price Range */}
            <select
              value={priceIdx}
              onChange={(e) => setPriceIdx(Number(e.target.value))}
              className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-lg px-3 py-2 text-[12px] text-[#e8edf5] focus:outline-none focus:border-[#4a90d9]"
            >
              {PRICE_RANGES.map((pr, i) => (
                <option key={i} value={i}>{pr.label}</option>
              ))}
            </select>

            {/* Range Filter */}
            <select
              value={rangeIdx}
              onChange={(e) => setRangeIdx(Number(e.target.value))}
              className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-lg px-3 py-2 text-[12px] text-[#e8edf5] focus:outline-none focus:border-[#4a90d9]"
            >
              {RANGE_FILTERS.map((rf, i) => (
                <option key={i} value={i}>{rf.label}</option>
              ))}
            </select>

            {/* Condition */}
            <div className="flex gap-1 bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-lg p-1">
              {CONDITIONS.map((c) => (
                <button
                  key={c}
                  onClick={() => setCondition(c)}
                  className={`px-3 py-1.5 text-[11px] font-medium rounded-md capitalize transition-all ${
                    condition === c
                      ? "bg-[rgba(74,144,217,0.2)] text-[#4a90d9] border border-[rgba(74,144,217,0.3)]"
                      : "text-[#6b7a94] hover:text-[#e8edf5]"
                  }`}
                >
                  {c === "all" ? "New & Used" : c}
                </button>
              ))}
            </div>

            {/* Brand */}
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-lg px-3 py-2 text-[12px] text-[#e8edf5] focus:outline-none focus:border-[#4a90d9]"
            >
              <option value="all">All Brands</option>
              {EV_BRANDS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-lg px-3 py-2 text-[12px] text-[#e8edf5] focus:outline-none focus:border-[#4a90d9] ml-auto"
            >
              <option value="score">Sort: Best Value</option>
              <option value="price-low">Sort: Price Low → High</option>
              <option value="price-high">Sort: Price High → Low</option>
              <option value="range">Sort: Most Range</option>
              <option value="savings">Sort: Most Savings</option>
            </select>
          </div>

          <div className="mt-2 text-[11px] text-[#3d4a61]">
            Showing {filtered.length} of {EV_DEALS.length} vehicles
            {compareIds.length > 0 && (
              <button
                onClick={() => setShowCompare(true)}
                className="ml-4 text-emerald-400 hover:text-emerald-300 font-medium"
              >
                Compare ({compareIds.length}/3) &rarr;
              </button>
            )}
          </div>
        </div>
      </section>

      {/* EV Savings Calculator Widget */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <SavingsCalculatorWidget />
        </div>
      </section>

      {/* SECTION 5: DEAL CARDS */}
      <section className="py-10 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {filtered.map((deal) => {
              const isExpanded = expandedId === deal.id;
              const inCompare = compareIds.includes(deal.id);
              const savingsVsMsrp = deal.bestNewPrice
                ? deal.msrp - deal.bestNewPrice
                : deal.bestUsedPrice
                ? deal.msrp - deal.bestUsedPrice
                : 0;

              return (
                <div
                  key={deal.id}
                  className={`bg-[rgba(15,22,40,0.6)] border rounded-2xl overflow-hidden transition-all ${
                    inCompare
                      ? "border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                      : "border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.3)]"
                  } ${isExpanded ? "col-span-1 md:col-span-2 xl:col-span-3" : ""}`}
                >
                  {/* Card Header */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] uppercase tracking-wider text-[#6b7a94]">
                            {deal.year} {deal.bodyType}
                          </span>
                          {deal.discontinued && (
                            <span className="px-2 py-0.5 bg-amber-500/20 border border-amber-500/30 rounded text-amber-400 text-[10px] font-semibold">
                              Discontinued
                            </span>
                          )}
                          {deal.featured && (
                            <span className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-500/30 rounded text-emerald-400 text-[10px] font-semibold">
                              Best Deal
                            </span>
                          )}
                        </div>
                        <h3 className="text-[18px] font-medium">
                          {deal.brand} {deal.model}
                        </h3>
                      </div>
                      <div className={`px-3 py-1.5 rounded-lg border text-center ${scoreBg(deal.trueValueScore)}`}>
                        <div className={`text-[16px] font-bold ${scoreColor(deal.trueValueScore)}`}>
                          {deal.trueValueScore}
                        </div>
                        <div className="text-[9px] text-[#6b7a94] uppercase">Score</div>
                      </div>
                    </div>

                    {/* Price Row */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div>
                        <div className="text-[10px] text-[#6b7a94] uppercase">MSRP</div>
                        <div className="text-[14px] text-[#3d4a61] line-through">{formatPrice(deal.msrp)}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-[#6b7a94] uppercase">Best New</div>
                        <div className="text-[14px] font-semibold text-emerald-400">
                          {formatPrice(deal.bestNewPrice)}
                        </div>
                        {deal.bestNewPlatform && (
                          <div className="text-[10px] text-[#3d4a61]">{deal.bestNewPlatform}</div>
                        )}
                      </div>
                      <div>
                        <div className="text-[10px] text-[#6b7a94] uppercase">Best Used</div>
                        <div className="text-[14px] font-semibold text-[#4a90d9]">
                          {formatPrice(deal.bestUsedPrice)}
                        </div>
                        {deal.bestUsedPlatform && (
                          <div className="text-[10px] text-[#3d4a61]">
                            {deal.bestUsedPlatform} • {deal.bestUsedMileage}
                          </div>
                        )}
                      </div>
                    </div>

                    {savingsVsMsrp > 0 && (
                      <div className="text-[12px] text-emerald-400 font-medium mb-3">
                        Save up to {formatPrice(savingsVsMsrp)} vs MSRP
                      </div>
                    )}

                    {/* Specs Row */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      <div className="text-center p-2 bg-[rgba(15,22,40,0.8)] rounded-lg">
                        <div className="text-[14px] font-semibold">{deal.range} mi</div>
                        <div className="text-[9px] text-[#6b7a94] uppercase">Range</div>
                      </div>
                      <div className="text-center p-2 bg-[rgba(15,22,40,0.8)] rounded-lg">
                        <div className="text-[14px] font-semibold">{deal.zeroToSixty}</div>
                        <div className="text-[9px] text-[#6b7a94] uppercase">0-60</div>
                      </div>
                      <div className="text-center p-2 bg-[rgba(15,22,40,0.8)] rounded-lg">
                        <div className="text-[14px] font-semibold">{deal.efficiency}</div>
                        <div className="text-[9px] text-[#6b7a94] uppercase">mi/kWh</div>
                      </div>
                      <div className="text-center p-2 bg-[rgba(15,22,40,0.8)] rounded-lg">
                        <div className={`text-[14px] font-semibold ${trendColor(deal.trendPercent)}`}>
                          {deal.trendPercent > 0 ? "+" : ""}{deal.trendPercent}%
                        </div>
                        <div className="text-[9px] text-[#6b7a94] uppercase">Trend</div>
                      </div>
                    </div>

                    <div className="text-[11px] text-[#6b7a94] mb-4">
                      Gas savings: <span className="text-emerald-400 font-medium">{formatPrice(deal.fuelSavings.annual)}/yr</span>
                      {" "}&middot;{" "}
                      Fast charge: <span className="text-[#e8edf5]">{deal.chargingSpeed}/15min</span>
                    </div>

                    {/* Quick-Look Tabs */}
                    <div className="flex gap-1 mb-3 flex-wrap">
                      {(["gasSavings", "ownership", "battery", "platforms"] as const).map((tab) => {
                        const labels: Record<string, string> = {
                          gasSavings: "Gas Savings",
                          ownership: "Ownership Cost",
                          battery: "Battery",
                          platforms: "Where to Buy",
                        };
                        const isActive = isExpanded && expandedTab === tab;
                        return (
                          <button
                            key={tab}
                            onClick={() => {
                              if (isActive) {
                                setExpandedId(null);
                              } else {
                                setExpandedId(deal.id);
                                setExpandedTab(tab);
                              }
                            }}
                            className={`px-2.5 py-1 text-[10px] font-medium rounded-md border transition-all ${
                              isActive
                                ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
                                : "bg-[rgba(15,22,40,0.8)] border-[rgba(74,144,217,0.08)] text-[#6b7a94] hover:text-[#e8edf5] hover:border-[rgba(74,144,217,0.2)]"
                            }`}
                          >
                            {labels[tab]}
                          </button>
                        );
                      })}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link
                        href={`/ev-deals/${getSlugForDeal(deal.id)}`}
                        className="flex-1 py-2 text-center text-[12px] font-medium bg-[rgba(74,144,217,0.1)] border border-[rgba(74,144,217,0.2)] rounded-lg hover:bg-[rgba(74,144,217,0.2)] transition-all text-[#4a90d9]"
                      >
                        Full Details &rarr;
                      </Link>
                      <button
                        onClick={() => toggleCompare(deal.id)}
                        className={`px-3 py-2 text-[12px] font-medium rounded-lg border transition-all ${
                          inCompare
                            ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-400"
                            : "bg-[rgba(15,22,40,0.8)] border-[rgba(74,144,217,0.12)] text-[#6b7a94] hover:text-[#e8edf5]"
                        }`}
                      >
                        {inCompare ? "- Compare" : "+ Compare"}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Section */}
                  {isExpanded && (
                    <div className="border-t border-[rgba(74,144,217,0.08)] bg-[rgba(10,15,26,0.5)]">
                      {/* Tabs */}
                      <div className="flex border-b border-[rgba(74,144,217,0.08)]">
                        {(["gasSavings", "ownership", "battery", "platforms"] as const).map((tab) => {
                          const tabLabels: Record<string, string> = {
                            gasSavings: "Gas Savings",
                            ownership: "Ownership Cost",
                            battery: "Battery Deep-Dive",
                            platforms: "Where to Buy",
                          };
                          return (
                            <button
                              key={tab}
                              onClick={() => setExpandedTab(tab)}
                              className={`flex-1 py-3 text-[12px] font-medium transition-all ${
                                expandedTab === tab
                                  ? "text-[#4a90d9] border-b-2 border-[#4a90d9]"
                                  : "text-[#6b7a94] hover:text-[#e8edf5]"
                              }`}
                            >
                              {tabLabels[tab]}
                            </button>
                          );
                        })}
                      </div>

                      <div className="p-6">
                        {expandedTab === "gasSavings" && (
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-[14px] font-semibold mb-4">Annual Fuel Savings vs Gas</h4>
                              <div className="space-y-3">
                                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                                  <div className="text-[11px] text-emerald-400/80 uppercase mb-1">Annual Savings</div>
                                  <div className="text-[28px] font-bold text-emerald-400">{formatPrice(deal.fuelSavings.annual)}</div>
                                  <div className="text-[12px] text-[#6b7a94]">{formatPrice(deal.fuelSavings.monthly)}/mo less than gas</div>
                                </div>
                                <div className="p-4 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.12)] rounded-xl">
                                  <div className="text-[11px] text-[#6b7a94] uppercase mb-1">5-Year Savings</div>
                                  <div className="text-[24px] font-bold text-emerald-400">{formatPrice(deal.fuelSavings.fiveYear)}</div>
                                  <div className="text-[12px] text-[#6b7a94]">Based on 12,000 miles/yr, $3.50/gal</div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-[14px] font-semibold mb-4">Cost Per Mile</h4>
                              <div className="space-y-2">
                                <div className="flex justify-between py-2 border-b border-[rgba(74,144,217,0.08)]">
                                  <span className="text-[12px] text-[#6b7a94]">Electric Cost/Mile</span>
                                  <span className="text-[12px] font-medium text-emerald-400">~$0.04</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-[rgba(74,144,217,0.08)]">
                                  <span className="text-[12px] text-[#6b7a94]">Gas Cost/Mile (avg)</span>
                                  <span className="text-[12px] font-medium text-red-400">~$0.14</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-[rgba(74,144,217,0.08)]">
                                  <span className="text-[12px] text-[#6b7a94]">Savings/Mile</span>
                                  <span className="text-[12px] font-bold text-emerald-400">~$0.10</span>
                                </div>
                              </div>
                              <div className="mt-4 p-3 bg-[rgba(74,144,217,0.1)] border border-[rgba(74,144,217,0.2)] rounded-lg">
                                <div className="text-[12px] text-[#4a90d9] font-medium">Charging Speed</div>
                                <div className="text-[16px] font-bold">{deal.chargingSpeed} in 15 min</div>
                                <div className="text-[11px] text-[#6b7a94]">Efficiency: {deal.efficiency} mi/kWh</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {expandedTab === "ownership" && (
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-[14px] font-semibold mb-4">5-Year Ownership Cost</h4>
                              <div className="space-y-2">
                                {[
                                  { label: "Electricity (5yr)", val: deal.ownershipCost.electricity5yr },
                                  { label: "Insurance (5yr)", val: deal.ownershipCost.insurance5yr },
                                  { label: "Maintenance (5yr)", val: deal.ownershipCost.maintenance5yr },
                                ].map((item) => (
                                  <div key={item.label} className="flex justify-between py-2 border-b border-[rgba(74,144,217,0.08)]">
                                    <span className="text-[12px] text-[#6b7a94]">{item.label}</span>
                                    <span className="text-[12px] font-medium">{formatPrice(item.val)}</span>
                                  </div>
                                ))}
                                <div className="flex justify-between py-2 border-b border-[rgba(74,144,217,0.08)]">
                                  <span className="text-[12px] text-[#6b7a94]">Total 5yr Cost</span>
                                  <span className="text-[14px] font-bold text-amber-400">{formatPrice(deal.ownershipCost.totalCost5yr)}</span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-[14px] font-semibold mb-4">Resale & Net Cost</h4>
                              <div className="space-y-2">
                                <div className="flex justify-between py-2 border-b border-[rgba(74,144,217,0.08)]">
                                  <span className="text-[12px] text-[#6b7a94]">Resale Value ({deal.ownershipCost.resalePercent}%)</span>
                                  <span className="text-[12px] font-medium text-emerald-400">{formatPrice(deal.ownershipCost.resaleValue)}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-[rgba(74,144,217,0.08)]">
                                  <span className="text-[12px] text-[#6b7a94]">True Net Cost (5yr)</span>
                                  <span className="text-[14px] font-bold text-[#4a90d9]">{formatPrice(deal.ownershipCost.netCost)}</span>
                                </div>
                              </div>
                              <div className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                                <div className="text-[12px] text-emerald-400 font-medium">Gas Savings Over 5 Years</div>
                                <div className="text-[20px] font-bold text-emerald-400">{formatPrice(deal.fuelSavings.fiveYear)}</div>
                                <div className="text-[11px] text-[#6b7a94]">{formatPrice(deal.fuelSavings.monthly)}/mo vs average gas car</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {expandedTab === "battery" && (
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-[14px] font-semibold mb-4">Battery Specs</h4>
                              <div className="space-y-2">
                                {[
                                  { label: "Battery Capacity", val: deal.batteryDetails.capacity },
                                  { label: "Real-World Range", val: deal.batteryDetails.realWorldRange },
                                  { label: "Cold Weather Range", val: deal.batteryDetails.coldWeatherRange },
                                  { label: "Fast Charge (15 min)", val: deal.chargingSpeed },
                                  { label: "Efficiency", val: `${deal.efficiency} mi/kWh` },
                                  { label: "Cargo Space", val: deal.cargoSpace },
                                  { label: "Warranty", val: deal.warranty },
                                ].map((item) => (
                                  <div key={item.label} className="flex justify-between py-2 border-b border-[rgba(74,144,217,0.08)]">
                                    <span className="text-[12px] text-[#6b7a94]">{item.label}</span>
                                    <span className="text-[12px] font-medium text-right">{item.val}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-[14px] font-semibold mb-4">Degradation & Longevity</h4>
                              <div className="p-4 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.12)] rounded-xl">
                                <p className="text-[13px] text-[#6b7a94] leading-relaxed">
                                  {deal.batteryDetails.degradationNote}
                                </p>
                              </div>
                              <div className="mt-4 p-3 bg-[rgba(74,144,217,0.1)] border border-[rgba(74,144,217,0.2)] rounded-lg">
                                <div className="text-[12px] text-[#4a90d9] font-medium">Market Trend</div>
                                <div className={`text-[16px] font-bold ${trendColor(deal.trendPercent)}`}>
                                  {deal.trendPercent > 0 ? "+" : ""}{deal.trendPercent}% this month
                                </div>
                                <div className="text-[11px] text-[#6b7a94]">{deal.trendNote}</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {expandedTab === "platforms" && (
                          <div>
                            <h4 className="text-[14px] font-semibold mb-4">Where to Buy</h4>
                            <div className="grid md:grid-cols-2 gap-3">
                              {deal.platforms.map((p) => (
                                <a
                                  key={p.name}
                                  href={p.url}
                                  target="_blank"
                                  rel="noopener noreferrer sponsored"
                                  className="flex items-center justify-between p-4 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.12)] rounded-xl hover:border-[rgba(74,144,217,0.3)] transition-all group"
                                >
                                  <div>
                                    <div className="text-[14px] font-medium group-hover:text-[#4a90d9] transition-colors">{p.name}</div>
                                    <div className="text-[11px] text-[#6b7a94]">View {deal.brand} {deal.model} listings</div>
                                  </div>
                                  <svg className="w-4 h-4 text-[#6b7a94] group-hover:text-[#4a90d9] group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <div className="text-[20px] text-[#6b7a94] mb-2">No vehicles match your filters</div>
              <button
                onClick={() => {
                  setBodyType("all");
                  setPriceIdx(0);
                  setRangeIdx(0);
                  setCondition("all");
                  setBrandFilter("all");
                }}
                className="text-[#4a90d9] text-[14px] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 6: COMPARISON MODAL */}
      {showCompare && compareDeals.length >= 2 && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0d1424] border border-[rgba(74,144,217,0.2)] rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-[rgba(74,144,217,0.08)]">
              <h3 className="text-[20px] font-light">Side-by-Side Comparison</h3>
              <button
                onClick={() => setShowCompare(false)}
                className="text-[#6b7a94] hover:text-[#e8edf5] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 overflow-x-auto">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-[rgba(74,144,217,0.08)]">
                    <th className="text-left py-3 text-[#6b7a94] font-medium w-[140px]">Spec</th>
                    {compareDeals.map((d) => (
                      <th key={d.id} className="text-center py-3 font-semibold text-[14px]">
                        {d.brand} {d.model}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "MSRP", fn: (d: EvDeal) => formatPrice(d.msrp) },
                    { label: "Best New Price", fn: (d: EvDeal) => formatPrice(d.bestNewPrice) },
                    { label: "Best Used Price", fn: (d: EvDeal) => formatPrice(d.bestUsedPrice) },
                    { label: "True Value Score", fn: (d: EvDeal) => String(d.trueValueScore) },
                    { label: "Range", fn: (d: EvDeal) => `${d.range} mi` },
                    { label: "0-60 mph", fn: (d: EvDeal) => d.zeroToSixty },
                    { label: "Efficiency", fn: (d: EvDeal) => `${d.efficiency} mi/kWh` },
                    { label: "Fast Charge", fn: (d: EvDeal) => d.chargingSpeed },
                    { label: "Cargo Space", fn: (d: EvDeal) => d.cargoSpace },
                    { label: "Battery", fn: (d: EvDeal) => d.batteryDetails.capacity },
                    { label: "Real Range", fn: (d: EvDeal) => d.batteryDetails.realWorldRange },
                    { label: "Cold Range", fn: (d: EvDeal) => d.batteryDetails.coldWeatherRange },
                    { label: "Annual Gas Savings", fn: (d: EvDeal) => formatPrice(d.fuelSavings.annual) },
                    { label: "5yr Gas Savings", fn: (d: EvDeal) => formatPrice(d.fuelSavings.fiveYear) },
                    { label: "5yr Total Cost", fn: (d: EvDeal) => formatPrice(d.ownershipCost.totalCost5yr) },
                    { label: "Resale Value", fn: (d: EvDeal) => formatPrice(d.ownershipCost.resaleValue) },
                    { label: "Net Cost (5yr)", fn: (d: EvDeal) => formatPrice(d.ownershipCost.netCost) },
                    { label: "Warranty", fn: (d: EvDeal) => d.warranty },
                    { label: "30-Day Trend", fn: (d: EvDeal) => `${d.trendPercent}%` },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-[rgba(74,144,217,0.05)]">
                      <td className="py-2.5 text-[#6b7a94] font-medium">{row.label}</td>
                      {compareDeals.map((d) => (
                        <td key={d.id} className="py-2.5 text-center font-medium">
                          {row.fn(d)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Floating Compare Bar */}
      {compareIds.length > 0 && !showCompare && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0d1424]/95 backdrop-blur-xl border-t border-emerald-500/30 p-4">
          <div className="max-w-[1400px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-[12px] text-[#6b7a94]">Comparing:</span>
              {compareDeals.map((d) => (
                <span
                  key={d.id}
                  className="flex items-center gap-1 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-[12px] text-emerald-400"
                >
                  {d.brand} {d.model}
                  <button
                    onClick={() => toggleCompare(d.id)}
                    className="ml-1 hover:text-white transition-colors"
                  >
                    &times;
                  </button>
                </span>
              ))}
              {compareIds.length < 3 && (
                <span className="text-[11px] text-[#3d4a61]">Select up to {3 - compareIds.length} more</span>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setCompareIds([])}
                className="px-4 py-2 text-[12px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors"
              >
                Clear
              </button>
              <button
                onClick={() => setShowCompare(true)}
                disabled={compareIds.length < 2}
                className="px-6 py-2 text-[12px] font-semibold bg-emerald-500 text-[#0a0f1a] rounded-lg hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Compare Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 7: GAS vs EV SAVINGS CALCULATOR */}
      <section className="py-14 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-emerald-400 font-medium mb-2">
            Savings Calculator
          </div>
          <h2 className="text-[24px] font-light tracking-tight mb-6">
            Gas vs EV — How Much Will You Save?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-2xl p-6">
              <h3 className="text-[14px] font-semibold mb-4">Your Current Car</h3>

              <label className="block mb-4">
                <span className="text-[11px] text-[#6b7a94] uppercase tracking-wider">Current Gas Vehicle</span>
                <select
                  value={calcGasIdx}
                  onChange={(e) => setCalcGasIdx(Number(e.target.value))}
                  className="mt-1 w-full bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.12)] rounded-lg px-3 py-2.5 text-[13px] text-[#e8edf5] focus:outline-none focus:border-[#4a90d9]"
                >
                  {GAS_CARS.map((c, i) => (
                    <option key={i} value={i}>{c.name} ({c.mpg} MPG)</option>
                  ))}
                </select>
              </label>

              <label className="block mb-4">
                <span className="text-[11px] text-[#6b7a94] uppercase tracking-wider">Miles Driven Per Year</span>
                <input
                  type="range"
                  min={5000}
                  max={30000}
                  step={1000}
                  value={calcMilesPerYear}
                  onChange={(e) => setCalcMilesPerYear(Number(e.target.value))}
                  className="mt-2 w-full accent-emerald-500"
                />
                <div className="text-[14px] font-semibold mt-1">{calcMilesPerYear.toLocaleString()} mi/yr</div>
              </label>

              <label className="block mb-4">
                <span className="text-[11px] text-[#6b7a94] uppercase tracking-wider">Gas Price ($/gal)</span>
                <input
                  type="range"
                  min={2.5}
                  max={6.0}
                  step={0.1}
                  value={calcGasPrice}
                  onChange={(e) => setCalcGasPrice(Number(e.target.value))}
                  className="mt-2 w-full accent-emerald-500"
                />
                <div className="text-[14px] font-semibold mt-1">${calcGasPrice.toFixed(2)}/gal</div>
              </label>

              <label className="block">
                <span className="text-[11px] text-[#6b7a94] uppercase tracking-wider">Electricity Rate ($/kWh)</span>
                <input
                  type="range"
                  min={0.08}
                  max={0.30}
                  step={0.01}
                  value={calcElecPrice}
                  onChange={(e) => setCalcElecPrice(Number(e.target.value))}
                  className="mt-2 w-full accent-emerald-500"
                />
                <div className="text-[14px] font-semibold mt-1">${calcElecPrice.toFixed(2)}/kWh</div>
              </label>
            </div>

            {/* Results */}
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-2xl p-6">
              <h3 className="text-[14px] font-semibold mb-4">Your Savings</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-[rgba(74,144,217,0.08)]">
                  <span className="text-[13px] text-[#6b7a94]">Annual Gas Cost ({gasCar.name})</span>
                  <span className="text-[16px] font-bold text-red-400">${Math.round(annualGasCost).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[rgba(74,144,217,0.08)]">
                  <span className="text-[13px] text-[#6b7a94]">Annual EV Electricity Cost</span>
                  <span className="text-[16px] font-bold text-emerald-400">${Math.round(annualElecCost).toLocaleString()}</span>
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 text-center mb-4">
                <div className="text-[11px] text-emerald-400 uppercase tracking-wider font-medium mb-1">Annual Savings</div>
                <div className="text-[36px] font-bold text-emerald-400">
                  ${Math.round(annualSavings).toLocaleString()}
                </div>
                <div className="text-[12px] text-[#6b7a94]">per year by switching to an EV</div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-[rgba(15,22,40,0.8)] rounded-lg">
                  <div className="text-[16px] font-bold text-emerald-400">${Math.round(annualSavings / 12).toLocaleString()}</div>
                  <div className="text-[10px] text-[#6b7a94] uppercase">Monthly</div>
                </div>
                <div className="text-center p-3 bg-[rgba(15,22,40,0.8)] rounded-lg">
                  <div className="text-[16px] font-bold text-emerald-400">${Math.round(annualSavings * 3).toLocaleString()}</div>
                  <div className="text-[10px] text-[#6b7a94] uppercase">3-Year</div>
                </div>
                <div className="text-center p-3 bg-[rgba(15,22,40,0.8)] rounded-lg">
                  <div className="text-[16px] font-bold text-emerald-400">${Math.round(annualSavings * 5).toLocaleString()}</div>
                  <div className="text-[10px] text-[#6b7a94] uppercase">5-Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: NEWSLETTER */}
      <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[700px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#4a90d9] font-medium mb-2">
            Stay Updated
          </div>
          <h2 className="text-[24px] font-light tracking-tight mb-3">
            EV Deals Newsletter
          </h2>
          <p className="text-[13px] text-[#6b7a94] mb-6">
            Get monthly price drops, new deals, and market insights delivered to your inbox. No spam — just savings.
          </p>

          {emailStatus === "sent" ? (
            <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-[14px] font-medium">
              You&apos;re subscribed! Watch your inbox for the next EV deals update.
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-lg px-4 py-3 text-[13px] text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9]"
              />
              <button
                type="submit"
                disabled={emailStatus === "sending"}
                className="px-6 py-3 text-[12px] tracking-[0.1em] uppercase font-bold bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-all disabled:opacity-50"
              >
                {emailStatus === "sending" ? "..." : "Subscribe"}
              </button>
            </form>
          )}
          {emailStatus === "error" && (
            <p className="text-red-400 text-[12px] mt-2">Something went wrong. Please try again.</p>
          )}
        </div>
      </section>

      {/* SECTION 9: TRUST & METHODOLOGY */}
      <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#4a90d9] font-medium mb-2">
            Methodology
          </div>
          <h2 className="text-[24px] font-light tracking-tight mb-6">
            How We Find the Best EV Deals
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
              <div className="text-[28px] mb-3">1</div>
              <h3 className="text-[14px] font-semibold mb-2">Multi-Platform Price Tracking</h3>
              <p className="text-[12px] text-[#6b7a94] leading-relaxed">
                We monitor prices across Carvana, CarMax, AutoTrader, Cars.com, CarGurus, and manufacturer sites.
                Prices are updated monthly to reflect current market conditions.
              </p>
            </div>
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
              <div className="text-[28px] mb-3">2</div>
              <h3 className="text-[14px] font-semibold mb-2">True Value Score</h3>
              <p className="text-[12px] text-[#6b7a94] leading-relaxed">
                Our proprietary score weighs price-to-range ratio, ownership costs, charging speed, resale value,
                warranty coverage, and brand reliability to give you a single number for comparison.
              </p>
            </div>
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
              <div className="text-[28px] mb-3">3</div>
              <h3 className="text-[14px] font-semibold mb-2">Real Ownership Data</h3>
              <p className="text-[12px] text-[#6b7a94] leading-relaxed">
                Ownership cost estimates include electricity, insurance, maintenance, and depreciation based on
                industry averages and real-world owner reports.
              </p>
            </div>
          </div>

          <div className="bg-[rgba(15,22,40,0.4)] border border-[rgba(74,144,217,0.08)] rounded-xl p-5">
            <h4 className="text-[12px] font-semibold text-[#6b7a94] uppercase tracking-wider mb-2">Disclaimer</h4>
            <p className="text-[11px] text-[#3d4a61] leading-relaxed">
              Prices shown are based on publicly listed prices at the time of last update and may not reflect
              real-time availability. Actual prices may vary by location, dealer, and vehicle condition. Healvanna Auto
              is not a dealer or broker. We provide price comparison information to help you make informed decisions.
              Always verify pricing directly with the seller before making a purchase. Gas savings estimates assume
              national average fuel prices and may vary based on your location and driving habits. True Value Scores
              are editorial assessments and should not be the sole basis for purchase decisions. Links to third-party
              platforms may contain affiliate relationships.
            </p>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-10 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-[16px] font-semibold mb-4">Related Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link
              href="/cars"
              className="p-4 bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl hover:border-[rgba(74,144,217,0.3)] transition-all text-center"
            >
              <div className="text-[13px] font-medium mb-1">Browse EVs</div>
              <div className="text-[11px] text-[#4a90d9]">All brands &rarr;</div>
            </Link>
            <Link
              href="/compare-evs"
              className="p-4 bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl hover:border-[rgba(74,144,217,0.3)] transition-all text-center"
            >
              <div className="text-[13px] font-medium mb-1">Compare EVs</div>
              <div className="text-[11px] text-[#4a90d9]">Side by side &rarr;</div>
            </Link>
            <Link
              href="/calculate"
              className="p-4 bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl hover:border-[rgba(74,144,217,0.3)] transition-all text-center"
            >
              <div className="text-[13px] font-medium mb-1">EV Cost Calculator</div>
              <div className="text-[11px] text-[#4a90d9]">Estimate costs &rarr;</div>
            </Link>
            <Link
              href="/deals"
              className="p-4 bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl hover:border-[rgba(74,144,217,0.3)] transition-all text-center"
            >
              <div className="text-[13px] font-medium mb-1">Local Deals</div>
              <div className="text-[11px] text-[#4a90d9]">Service deals &rarr;</div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  DEALS,
  DEAL_TYPES,
  SERVICE_FILTERS,
  STATES,
} from "../lib/dealsData";

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

export default function DealsPage() {
  const [selectedState, setSelectedState] = useState("Florida");
  const [dealTypeFilter, setDealTypeFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const filteredDeals = useMemo(() => {
    if (selectedState !== "Florida") return [];
    return DEALS.filter((d) => {
      if (dealTypeFilter && d.dealType !== dealTypeFilter) return false;
      if (serviceFilter && !d.categories.includes(serviceFilter)) return false;
      return true;
    });
  }, [selectedState, dealTypeFilter, serviceFilter]);

  const stats = useMemo(() => {
    const shops = new Set(DEALS.map((d) => d.shop));
    return { total: DEALS.length, shops: shops.size, topSaving: "$100" };
  }, []);

  const clearFilters = () => {
    setDealTypeFilter("");
    setServiceFilter("");
  };

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

      {/* State Selector + Stats */}
      <section className="px-6 md:px-12 pb-4">
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <label className="text-sm text-[#6b7a94]">Location:</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="bg-[#0d1424] border border-[rgba(74,144,217,0.2)] rounded-lg px-4 py-2.5 text-[#e8edf5] text-sm focus:border-[#4a90d9] focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {selectedState === "Florida" && (
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
            )}
          </div>
        </div>
      </section>

      {/* Coming Soon for other states */}
      {selectedState !== "Florida" && (
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-[600px] mx-auto text-center py-20">
            <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[rgba(74,144,217,0.1)] border border-[rgba(74,144,217,0.2)] flex items-center justify-center">
              <svg className="w-8 h-8 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-[#e8edf5] mb-2">
              Coming Soon!
            </h3>
            <p className="text-[14px] text-[#6b7a94]">
              We&apos;re expanding to {selectedState} shortly. Check back soon for
              local deals near you.
            </p>
          </div>
        </section>
      )}

      {/* Filters + Deals Grid (Florida only) */}
      {selectedState === "Florida" && (
        <>
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
                            <span className="mx-1.5">·</span>
                            {deal.city}, FL
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
        </>
      )}

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

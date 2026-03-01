"use client";

import Link from "next/link";
import { DEALS } from "../lib/dealsData";

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

interface RelatedDealsProps {
  serviceCategories: string[];
  maxDeals?: number;
}

export default function RelatedDeals({
  serviceCategories,
  maxDeals = 3,
}: RelatedDealsProps) {
  const matches = DEALS.filter((d) =>
    d.categories.some((c) => serviceCategories.includes(c))
  ).slice(0, maxDeals);

  if (matches.length === 0) return null;

  return (
    <div className="bg-[rgba(15,22,40,0.5)] rounded-xl p-6 border border-[rgba(74,144,217,0.1)] my-8">
      <h3 className="text-lg font-medium text-[#e8edf5] mb-4">
        Related Deals
      </h3>
      <div className="space-y-3">
        {matches.map((deal) => {
          const badge = BADGE_COLORS[deal.dealType] || BADGE_COLORS.percent_off;
          return (
            <a
              key={deal.id}
              href={deal.dealsPage}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="group flex items-center justify-between gap-3 p-3 rounded-lg hover:bg-[rgba(74,144,217,0.04)] transition-colors"
            >
              <div className="min-w-0">
                <div className="text-[13px] font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors truncate">
                  {deal.title}
                </div>
                <div className="text-[11px] text-[#6b7a94]">
                  {deal.shop} &middot; {deal.city}
                </div>
              </div>
              <span
                className={`shrink-0 px-2 py-0.5 text-[9px] font-semibold tracking-wider rounded-full ${badge.bg} ${badge.text}`}
              >
                {BADGE_LABELS[deal.dealType] || deal.dealType}
              </span>
            </a>
          );
        })}
      </div>
      <Link
        href="/deals"
        className="block mt-4 text-[13px] text-[#4a90d9] hover:text-[#6ba8eb] transition-colors"
      >
        View all deals &rarr;
      </Link>
    </div>
  );
}

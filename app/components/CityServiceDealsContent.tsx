"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import { Deal } from "../lib/dealsData";
import { DealCity, DealServiceCategory } from "../lib/dealCities";

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

interface CityServiceDealsContentProps {
  city: DealCity;
  service: DealServiceCategory;
  deals: Deal[];
  otherServices: DealServiceCategory[];
}

export default function CityServiceDealsContent({
  city,
  service,
  deals,
  otherServices,
}: CityServiceDealsContentProps) {
  const [emailInput, setEmailInput] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setEmailStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/f/xjggywyr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, _subject: `${service.name} Deals - ${city.city}` }),
      });
      setEmailStatus(res.ok ? "success" : "error");
      if (res.ok) setEmailInput("");
    } catch {
      setEmailStatus("error");
    }
  };

  // Other service categories in this city with deals
  const relatedServices = otherServices.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="deals" />

      <section className="pt-32 pb-6 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Deals", href: "/deals" },
              { name: city.city, href: `/deals/${city.slug}` },
              { name: service.name },
            ]}
          />

          <div className="text-[10px] tracking-[0.35em] uppercase text-[#10B981] mb-3 font-medium">
            {city.city}, {city.state}
          </div>
          <h1 className="text-[clamp(28px,4vw,48px)] font-extralight tracking-tight mb-3">
            {service.name} Deals in{" "}
            <span className="italic text-[#4a90d9]">{city.city}</span>
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[600px] mb-6">
            {deals.length} {deals.length === 1 ? "deal" : "deals"} for {service.name.toLowerCase()} services in {city.city}, {city.state}.
          </p>
        </div>
      </section>

      {/* Deal grid */}
      <section className="px-6 md:px-12 pb-10">
        <div className="max-w-[1200px] mx-auto">
          {deals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {deals.map((deal) => {
                const badge = BADGE_COLORS[deal.dealType] || BADGE_COLORS.percent_off;
                return (
                  <a
                    key={deal.id}
                    href={deal.dealsPage}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="group block rounded-xl border border-[rgba(74,144,217,0.1)] bg-[#0d1424] p-5 hover:border-[rgba(74,144,217,0.25)] hover:bg-[rgba(74,144,217,0.03)] transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="text-[14px] font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors leading-snug">
                        {deal.title}
                      </div>
                      <span className={`shrink-0 px-2 py-0.5 text-[10px] font-semibold tracking-wider rounded-full ${badge.bg} ${badge.text}`}>
                        {BADGE_LABELS[deal.dealType] || deal.dealType}
                      </span>
                    </div>
                    <div className="text-[12px] text-[#6b7a94] mb-3 leading-relaxed line-clamp-2">
                      {deal.description}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-[#4a90d9]">{deal.shop}</span>
                      <span className="text-[11px] text-[#3d4a61]">{deal.discountLabel}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[14px] text-[#6b7a94]">
                No {service.name.toLowerCase()} deals in {city.city} yet.
              </p>
              <Link href={`/deals/${city.slug}`} className="mt-3 inline-block text-[13px] text-[#4a90d9] hover:text-[#5a9ee5] transition-colors">
                View all {city.city} deals
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Other services in this city */}
      {relatedServices.length > 0 && (
        <section className="px-6 md:px-12 pb-10">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[16px] font-medium text-[#e8edf5] mb-4">
              Other Services in {city.city}
            </h2>
            <div className="flex flex-wrap gap-2">
              {relatedServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/deals/${city.slug}/${s.slug}`}
                  className="px-4 py-2 text-[12px] rounded-full border border-[rgba(74,144,217,0.15)] text-[#6b7a94] hover:border-[#4a90d9] hover:text-[#e8edf5] transition-all"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Email capture */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-[700px] mx-auto">
          <div className="rounded-2xl border border-[rgba(16,185,129,0.15)] bg-[rgba(16,185,129,0.04)] p-8 text-center">
            <h2 className="text-[20px] font-semibold text-[#e8edf5] mb-2">
              Get {service.name} Alerts in {city.city}
            </h2>
            <p className="text-[13px] text-[#6b7a94] mb-5 max-w-[400px] mx-auto">
              Be the first to know about new {service.name.toLowerCase()} deals.
            </p>
            {emailStatus === "success" ? (
              <div className="flex items-center justify-center gap-2 text-[#10B981]">
                <span className="text-[14px] font-medium">You&apos;re subscribed!</span>
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
          </div>
        </div>
      </section>

      {/* Navigation links */}
      <section className="px-6 md:px-12 pb-10">
        <div className="max-w-[800px] mx-auto flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/deals/${city.slug}`}
            className="px-8 py-4 text-[13px] font-medium text-center bg-[rgba(74,144,217,0.08)] text-[#4a90d9] border border-[rgba(74,144,217,0.2)] rounded-xl hover:bg-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] transition-all"
          >
            All {city.city} Deals &rarr;
          </Link>
          <Link
            href="/deals"
            className="px-8 py-4 text-[13px] font-medium text-center bg-[rgba(74,144,217,0.08)] text-[#6b7a94] border border-[rgba(74,144,217,0.1)] rounded-xl hover:text-[#e8edf5] hover:border-[rgba(74,144,217,0.3)] transition-all"
          >
            All Florida Deals &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

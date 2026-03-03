"use client";

import { useState } from "react";
import Link from "next/link";
import { BRAND_HUB_DATA } from "../lib/brandHubData";

export default function BrandHubSections({ brandSlug }: { brandSlug: string }) {
  const data = BRAND_HUB_DATA[brandSlug];
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) return null;

  // Build cross-links from ALL brands in the data, excluding the current brand
  const allCrossLinks = Object.values(BRAND_HUB_DATA)
    .filter((b) => b.slug !== brandSlug)
    .map((b) => ({ slug: b.slug, name: b.brandName }))
    .sort((a, b) => a.name.localeCompare(b.name));

  // FAQPage JSON-LD schema
  const faqSchema = data.faqItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <>
      {/* FAQPage Schema */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* About the Brand */}
      <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#4a90d9] font-medium mb-2">
            About the Brand
          </div>
          <h2 className="text-[24px] font-light tracking-tight mb-6">
            {data.aboutTitle}
          </h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Intro Text */}
            <div className="flex-[1.8] space-y-4">
              {data.aboutParagraphs.map((p, i) => (
                <p
                  key={i}
                  className={`text-[14px] leading-relaxed ${i === 0 ? "text-[#e8edf5]" : "text-[#6b7a94]"}`}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Quick Facts */}
            <div className="flex-1 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
              <div className="text-[10px] tracking-[0.3em] uppercase text-[#4a90d9] font-semibold mb-4">
                Quick Facts
              </div>
              <div className="space-y-0">
                {data.quickFacts.map((fact, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2.5 border-b border-[rgba(74,144,217,0.08)] last:border-b-0 gap-3"
                  >
                    <span className="text-[12px] text-[#6b7a94] font-medium">
                      {fact.label}
                    </span>
                    <span className="text-[12px] text-[#e8edf5] font-medium text-right">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
              {data.officialUrl && (
                <a
                  href={data.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-4 py-2.5 text-[11px] tracking-[0.15em] uppercase font-semibold text-[#4a90d9] border border-[rgba(74,144,217,0.3)] rounded-lg hover:bg-[rgba(74,144,217,0.1)] transition-all"
                >
                  Visit {data.brandName} &rarr;
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Charging Guide */}
      {data.chargingCards.length > 0 && (
        <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#4a90d9] font-medium mb-2">
              Charging
            </div>
            <h2 className="text-[24px] font-light tracking-tight mb-2">
              {data.brandName} Charging Guide
            </h2>
            <p className="text-[13px] text-[#6b7a94] mb-6">
              How to charge your {data.brandName} EV at home, on the road, and
              with fast chargers.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {data.chargingCards.map((card, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] text-center"
                >
                  <div className="text-[28px] mb-2">{card.icon}</div>
                  <h4 className="text-[14px] font-semibold mb-1">
                    {card.title}
                  </h4>
                  <p className="text-[12px] text-[#6b7a94] leading-relaxed">
                    {card.description}
                  </p>
                  {card.highlight && (
                    <span className="block mt-1 text-[15px] text-[#4a90d9] font-bold">
                      {card.highlight}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-5">
              <Link
                href="/charge"
                className="inline-block px-6 py-2.5 text-[12px] tracking-[0.1em] uppercase font-semibold text-[#4a90d9] border border-[rgba(74,144,217,0.3)] rounded-lg hover:bg-[rgba(74,144,217,0.1)] transition-all"
              >
                Find Charging Stations Near You &rarr;
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Deals CTA */}
      <section className="py-10 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#4a90d9] font-medium mb-2">
            Current Deals
          </div>
          <h2 className="text-[24px] font-light tracking-tight mb-4">
            {data.brandName} Deals &amp; Incentives
          </h2>
          <Link
            href="/deals"
            className="inline-block px-8 py-3 text-[12px] tracking-[0.15em] uppercase font-bold bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-all"
          >
            View {data.brandName} Deals &rarr;
          </Link>
        </div>
      </section>

      {/* FAQ */}
      {data.faqItems.length > 0 && (
        <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#4a90d9] font-medium mb-2">
              FAQ
            </div>
            <h2 className="text-[24px] font-light tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
            <div className="max-w-[800px] space-y-0">
              {data.faqItems.map((faq, i) => (
                <div
                  key={i}
                  className="border-b border-[rgba(74,144,217,0.08)]"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center py-4 text-left gap-4 group"
                  >
                    <h4 className="text-[14px] font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">
                      {faq.question}
                    </h4>
                    <span className="text-[#4a90d9] text-[18px] flex-shrink-0 transition-transform">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i
                        ? "max-h-[400px] pb-4"
                        : "max-h-0"
                    }`}
                  >
                    <p className="text-[13px] text-[#6b7a94] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Browse Other Brands */}
      {allCrossLinks.length > 0 && (
        <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#4a90d9] font-medium mb-2">
              Explore More
            </div>
            <h2 className="text-[24px] font-light tracking-tight mb-5">
              Browse Other EV Brands
            </h2>
            <div className="flex flex-wrap gap-2">
              {allCrossLinks.map((link) => (
                <Link
                  key={link.slug}
                  href={`/cars/${link.slug}`}
                  className="px-4 py-2 text-[12px] font-medium text-[#6b7a94] bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-lg hover:border-[rgba(74,144,217,0.3)] hover:text-[#4a90d9] transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

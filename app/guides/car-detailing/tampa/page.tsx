"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Tampa",
  state: "FL",
  slug: "tampa",
  description: "Tampa Bay's sunny climate, coastal salt air, and active outdoor lifestyle mean your vehicle needs regular professional care to stay protected and looking its best.",
  averageCost: "$150-$650+",
  popularService: "Full detail with sealant protection",
  localTip: "Tampa's bay area salt air isn't as aggressive as Miami's ocean air, but it still accelerates paint degradation. A quality sealant or ceramic coating is highly recommended for bay-area drivers.",
  climate: "Tampa enjoys 244 sunny days per year with hot, humid summers and mild winters. The combination of UV exposure, salt air from the bay, and summer thunderstorms creates a challenging environment for vehicle maintenance.",
  challenges: [
    "Bay area salt air causes gradual paint oxidation and trim degradation",
    "Summer thunderstorms leave water spots and mineral deposits on unprotected paint",
    "Sand from Clearwater and St. Pete beach trips can scratch paint if not washed properly",
    "Love bug seasons require prompt cleaning to prevent paint etching",
    "High humidity promotes interior mold, especially in vehicles parked outside",
    "Causeway bridge crossings expose vehicles to higher salt concentration"
  ],
  topServices: [
    { name: "Full Exterior Detail + Ceramic Sealant", price: "$250-$450", why: "Best protection against Tampa's salt air and UV exposure" },
    { name: "Interior Deep Clean + Mold Prevention", price: "$150-$300", why: "Critical for Tampa's humidity - prevents mold and mildew buildup" },
    { name: "Paint Correction + Ceramic Coating", price: "$650-$1,800", why: "Long-term protection for bay area vehicles" },
    { name: "Beach Trip Recovery Detail", price: "$100-$200", why: "Remove sand, salt, and restore protection after beach days" }
  ],
  neighborhoods: [
    "South Tampa - Premium detailing with several high-end shops along Dale Mabry",
    "Westshore / International Plaza - Convenient shops near the business district",
    "Brandon - Great value detailing with competitive pricing east of Tampa",
    "Carrollwood - Growing area with quality mobile and shop-based detailers",
    "St. Petersburg - Across the bay with its own selection of quality detail shops"
  ]
};

const otherCities = [
  { name: "Miami", slug: "miami" },
  { name: "Orlando", slug: "orlando" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale" },
  { name: "Jacksonville", slug: "jacksonville" },
];

export default function TampaCarDetailingGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does car detailing cost in Tampa?",
      answer: "Tampa offers competitive detailing prices. A basic detail runs $125-$200, a full detail $250-$400, and a premium detail with paint correction $450-$650+. The broader Tampa Bay area (including St. Pete and Clearwater) has plenty of options at various price points."
    },
    {
      question: "How do I prevent mold in my car in Tampa?",
      answer: "Tampa's humidity makes mold prevention important. Park in a garage when possible, run your AC for a few minutes before turning off the car to dry the system, don't leave wet items in the car, and have your interior detailed with antimicrobial treatment every few months. If you smell musty odors, get an ozone treatment promptly."
    },
    {
      question: "How often should I detail my car in Tampa?",
      answer: "For Tampa's climate, aim for a maintenance wash every 1-2 weeks, a basic detail every 4-6 weeks, and a full detail every 4-6 months. If you frequently cross the bay bridges or visit the beaches, increase your wash frequency to remove salt deposits."
    },
    {
      question: "Is ceramic coating worth it in Tampa?",
      answer: "Very much so. Tampa's combination of UV, salt air, and rain makes ceramic coating one of the best investments for your vehicle. It significantly reduces maintenance effort, protects against water spots, and makes salt removal much easier. The $700-$1,800 investment typically pays for itself within 2 years."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8">
            <Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link>
            <span>/</span>
            <Link href="/guides/car-detailing" className="hover:text-[#4a90d9] transition-colors">Car Detailing</Link>
            <span>/</span>
            <span className="text-[#e8edf5]">{cityData.name}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🧽</span>
            <span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">
              {cityData.name}, {cityData.state}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">
            Car Detailing in {cityData.name}: Complete Local Guide
          </h1>

          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{cityData.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10">
              <div className="text-sm text-[#6b7a94]">Average Cost</div>
              <div className="text-lg font-medium text-[#4a90d9]">{cityData.averageCost}</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10">
              <div className="text-sm text-[#6b7a94]">Most Popular</div>
              <div className="text-lg font-medium text-[#4a90d9]">{cityData.popularService}</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10">
              <div className="text-sm text-[#6b7a94]">Climate</div>
              <div className="text-lg font-medium text-[#4a90d9]">244 sunny days/yr</div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-12 p-6 rounded-2xl bg-[#4a90d9]/5 border border-[#4a90d9]/20">
            <h3 className="text-lg font-medium text-[#4a90d9] mb-2">💡 Local Tip</h3>
            <p className="text-[#b8c4d9]">{cityData.localTip}</p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Why Detailing Matters More in {cityData.name}</h2>
            <p className="text-[#b8c4d9] leading-relaxed mb-6">{cityData.climate}</p>
            <div className="space-y-3">
              {cityData.challenges.map((challenge, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10">
                  <span className="text-[#4a90d9] mt-0.5">⚠️</span>
                  <span className="text-[#b8c4d9]">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Recommended Detailing Services for {cityData.name}</h2>
            <div className="space-y-4">
              {cityData.topServices.map((service, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-[#e8edf5]">{service.name}</h3>
                    <span className="text-[#4a90d9] font-medium">{service.price}</span>
                  </div>
                  <p className="text-[#6b7a94]">{service.why}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Detailing by Neighborhood</h2>
            <div className="space-y-3">
              {cityData.neighborhoods.map((hood, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10">
                  <p className="text-[#b8c4d9]">{hood}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} Car Detailing FAQ</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors">
                    <span className="font-medium text-[#e8edf5]">{faq.question}</span>
                    <span className={`text-[#4a90d9] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>↓</span>
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10">
                      <p className="text-[#b8c4d9] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10">
            <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Detailing Pros in {cityData.name}</h3>
            <p className="text-[#6b7a94] mb-6">Browse top-rated detailing professionals in the {cityData.name} area.</p>
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">
              Find Detailers <span>→</span>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10">
            <h3 className="text-lg font-medium text-[#e8edf5] mb-4">Car Detailing Guides for Other Florida Cities</h3>
            <div className="flex flex-wrap gap-3">
              {otherCities.map((city) => (
                <Link key={city.slug} href={`/guides/car-detailing/${city.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{city.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

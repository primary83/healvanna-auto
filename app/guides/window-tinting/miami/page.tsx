"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Miami",
  state: "FL",
  slug: "miami",
  description: "Miami's intense tropical sun and year-round heat make quality window tinting essential for comfortable driving and protecting your vehicle's interior.",
  averageCost: "$200-$600",
  popularFilm: "Ceramic (most popular due to extreme heat)",
  localTip: "Many Miami shops specialize in luxury vehicles and offer premium ceramic films from brands like 3M, XPEL, and Llumar.",
  climate: "Miami averages 248 sunny days per year with temperatures regularly exceeding 90°F. Quality tint is practically a necessity here.",
};

const localShopTips = [
  "Look for shops that specialize in ceramic film - it's worth the investment in Miami's heat",
  "Many shops in Brickell and Miami Beach cater to luxury vehicles",
  "Ask about their experience with curved glass (common on luxury cars)",
  "Mobile tinting services are popular in Miami - convenient but ensure they have a clean workspace",
];

const pricingGuide = [
  { type: "Dyed Film", sedan: "$150-$250", suv: "$200-$350" },
  { type: "Carbon Film", sedan: "$300-$450", suv: "$400-$550" },
  { type: "Ceramic Film", sedan: "$400-$600", suv: "$500-$800" },
];

export default function MiamiWindowTinting() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's the legal tint limit in Miami?",
      answer: "Miami follows Florida state law: 28% VLT minimum for front side windows, 15% for back side and rear windows on sedans. SUVs and vans can have any darkness on rear windows."
    },
    {
      question: "How much does window tinting cost in Miami?",
      answer: "Miami pricing ranges from $150-$600+ depending on film type. Expect to pay 10-20% more than state average due to higher operating costs. Ceramic film typically runs $400-$600 for sedans."
    },
    {
      question: "Is ceramic tint worth it in Miami?",
      answer: "Absolutely. Miami's intense sun and heat make ceramic film's superior heat rejection (up to 50%) a worthwhile investment. You'll notice significant interior temperature reduction and your AC won't work as hard."
    },
    {
      question: "How long does tint take to cure in Miami's humidity?",
      answer: "Due to Miami's high humidity, tint may take 5-7 days to fully cure (vs 3-5 days in drier climates). Don't roll down windows during this period to prevent peeling."
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8">
            <Link href="/guides" className="hover:text-[#4a90d9] transition-colors">
              Guides
            </Link>
            <span>/</span>
            <Link href="/guides/window-tinting" className="hover:text-[#4a90d9] transition-colors">
              Window Tinting
            </Link>
            <span>/</span>
            <span className="text-[#e8edf5]">{cityData.name}</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">🔧</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4a90d9]/10 text-[#4a90d9]">
              {cityData.name}, {cityData.state}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#e8edf5] mb-6">
            Window Tinting in {cityData.name}
          </h1>
          
          <p className="text-lg text-[#6b7a94] mb-6 max-w-2xl">
            {cityData.description}
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 px-6 bg-[#0d1424]/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">{cityData.averageCost}</div>
              <div className="text-sm text-[#6b7a94]">Average Cost</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">28% VLT</div>
              <div className="text-sm text-[#6b7a94]">Front Window Legal Limit</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">248 Days</div>
              <div className="text-sm text-[#6b7a94]">Sunny Days/Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Climate Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-4">
              Why Window Tinting Matters in {cityData.name}
            </h2>
            <p className="text-[#b8c4d9] leading-relaxed mb-4">
              {cityData.climate}
            </p>
            <p className="text-[#b8c4d9] leading-relaxed">
              {cityData.localTip}
            </p>
          </div>

          {/* Pricing Table */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-4">
              {cityData.name} Pricing Guide
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#4a90d9]/20">
                    <th className="text-left py-3 px-4 text-[#6b7a94] font-medium">Film Type</th>
                    <th className="text-left py-3 px-4 text-[#6b7a94] font-medium">Sedan</th>
                    <th className="text-left py-3 px-4 text-[#6b7a94] font-medium">SUV/Truck</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingGuide.map((row, idx) => (
                    <tr key={idx} className="border-b border-[#4a90d9]/10">
                      <td className="py-3 px-4 text-[#e8edf5]">{row.type}</td>
                      <td className="py-3 px-4 text-[#4a90d9]">{row.sedan}</td>
                      <td className="py-3 px-4 text-[#4a90d9]">{row.suv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Local Tips */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-4">
              Tips for Finding a Tint Shop in {cityData.name}
            </h2>
            <ul className="space-y-3">
              {localShopTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#b8c4d9]">
                  <span className="text-[#4a90d9] mt-1">✓</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              {cityData.name} Window Tinting FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"
                  >
                    <span className="font-medium text-[#e8edf5]">{faq.question}</span>
                    <span className={`text-[#4a90d9] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
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

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10">
            <h3 className="text-xl font-medium text-[#e8edf5] mb-2">
              Find Window Tinting in {cityData.name}
            </h3>
            <p className="text-[#6b7a94] mb-6">
              Browse verified tint shops in the {cityData.name} area.
            </p>
            <Link
              href="/services/window-tinting"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
            >
              Find Tint Shops
              <span>→</span>
            </Link>
          </div>

          {/* Other Cities */}
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10">
            <h3 className="text-lg font-medium text-[#e8edf5] mb-4">
              Window Tinting Guides for Other Florida Cities
            </h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/guides/window-tinting/orlando" className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">
                Orlando
              </Link>
              <Link href="/guides/window-tinting/tampa" className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">
                Tampa
              </Link>
              <Link href="/guides/window-tinting/fort-lauderdale" className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">
                Fort Lauderdale
              </Link>
              <Link href="/guides/window-tinting/jacksonville" className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">
                Jacksonville
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

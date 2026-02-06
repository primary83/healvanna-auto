"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Miami",
  state: "FL",
  slug: "miami",
  description: "Miami is one of the biggest vinyl wrap markets in the country. The city's car culture, luxury vehicles, and year-round outdoor lifestyle make wraps a popular choice for standing out.",
  averageCost: "$3,000-$7,000",
  popularFinish: "Color-shifting & Chrome",
  localTip: "Miami's exotic car scene means many shops specialize in high-end wraps for Lamborghinis, Ferraris, and McLarens. These shops often have the most experienced installers, even for regular vehicles.",
  climate: "Miami's 248 sunny days and intense UV mean wraps face maximum sun exposure. Ceramic coating your wrap and garage parking are essential to get the most life out of your investment.",
  challenges: [
    "Intense UV exposure is the #1 threat to wrap longevity in Miami",
    "Salt air from the ocean can degrade wrap edges and seams faster",
    "Extreme heat softens adhesive - park in shade or garage when possible",
    "Love bug seasons require prompt cleaning to prevent staining the wrap",
    "Chrome and mirror wraps attract extra attention from law enforcement - verify legality",
    "High demand means some shops have 2-4 week wait times"
  ],
  topServices: [
    { name: "Full Color Change Wrap", price: "$3,500-$7,000", why: "Complete transformation - Miami's most popular wrap service" },
    { name: "Exotic/Luxury Vehicle Wrap", price: "$5,000-$10,000+", why: "Specialized installation for complex curves on high-end vehicles" },
    { name: "Matte/Satin Finish Wrap", price: "$3,000-$5,500", why: "Stealth look that's hugely popular in Miami's luxury scene" },
    { name: "Chrome Delete + Accents", price: "$500-$1,500", why: "Blacking out trim and adding accent colors for a custom look" }
  ],
  neighborhoods: [
    "Wynwood / Design District - Hub of Miami's wrap culture with several top-tier shops",
    "Doral - Multiple established shops with competitive pricing and fast turnaround",
    "Hialeah - Great selection of shops, many offering bilingual service",
    "Brickell / Downtown - Premium shops catering to the luxury condo crowd",
    "Kendall / South Miami - Growing market with quality shops and good value"
  ]
};

const otherCities = [
  { name: "Orlando", slug: "orlando" },
  { name: "Tampa", slug: "tampa" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale" },
  { name: "Jacksonville", slug: "jacksonville" },
];

export default function MiamiVinylWrapsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does a vinyl wrap cost in Miami?",
      answer: "Miami wrap prices range from $3,000-$7,000 for a full wrap on a standard vehicle. Exotic and luxury vehicles can run $5,000-$10,000+. Partial wraps and accents start around $500. Miami prices are on the higher end due to demand and the concentration of luxury vehicles, but the quality of work is among the best in the country."
    },
    {
      question: "How long will a wrap last in Miami's sun?",
      answer: "With proper care, a premium wrap in Miami lasts 4-5 years. Without ceramic coating and garage parking, expect 3-4 years. The intense UV is the biggest factor. Investing $300-$500 in ceramic coating on your wrap can add 1-2 years of life and makes maintenance much easier."
    },
    {
      question: "Are chrome wraps legal in Miami?",
      answer: "Florida doesn't have a specific law banning chrome wraps, but highly reflective surfaces can be cited for causing a hazard or glare to other drivers. Chrome accents are generally fine, but a full chrome wrap may attract unwanted attention. Check with your installer and local regulations."
    },
    {
      question: "What's the most popular wrap color in Miami?",
      answer: "Miami trends toward bold and exotic: color-shifting wraps (purple-to-teal), satin colors (satin black, satin gray), and vibrant colors like Miami blue, neon green, and matte red. Matte black remains a consistent best-seller across all markets."
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
            <Link href="/guides/vinyl-wraps" className="hover:text-[#4a90d9] transition-colors">Vinyl Wraps</Link>
            <span>/</span>
            <span className="text-[#e8edf5]">{cityData.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🎨</span>
            <span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{cityData.name}, {cityData.state}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">Vinyl Wraps in {cityData.name}: Complete Local Guide</h1>
          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{cityData.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10">
              <div className="text-sm text-[#6b7a94]">Average Cost</div>
              <div className="text-lg font-medium text-[#4a90d9]">{cityData.averageCost}</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10">
              <div className="text-sm text-[#6b7a94]">Popular Finish</div>
              <div className="text-lg font-medium text-[#4a90d9]">{cityData.popularFinish}</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10">
              <div className="text-sm text-[#6b7a94]">Climate</div>
              <div className="text-lg font-medium text-[#4a90d9]">248 sunny days/yr</div>
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
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Vinyl Wraps in {cityData.name}: What to Know</h2>
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
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Popular Wrap Services in {cityData.name}</h2>
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
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Wrap Shops by Neighborhood</h2>
            <div className="space-y-3">
              {cityData.neighborhoods.map((hood, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10">
                  <p className="text-[#b8c4d9]">{hood}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} Vinyl Wrap FAQ</h2>
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
            <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Wrap Shops in {cityData.name}</h3>
            <p className="text-[#6b7a94] mb-6">Browse top-rated vinyl wrap installers in the {cityData.name} area.</p>
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">
              Find Wrap Shops <span>→</span>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10">
            <h3 className="text-lg font-medium text-[#e8edf5] mb-4">Vinyl Wrap Guides for Other Florida Cities</h3>
            <div className="flex flex-wrap gap-3">
              {otherCities.map((city) => (
                <Link key={city.slug} href={`/guides/vinyl-wraps/${city.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{city.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

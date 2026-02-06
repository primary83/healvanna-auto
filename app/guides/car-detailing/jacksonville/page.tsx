"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Jacksonville",
  state: "FL",
  slug: "jacksonville",
  description: "Jacksonville's sprawling layout means more time driving, and the combination of beach proximity, pollen, and Florida sun makes regular detailing a smart investment for any vehicle owner.",
  averageCost: "$125-$600+",
  popularService: "Full detail with paint sealant",
  localTip: "Jacksonville offers some of Florida's most affordable detailing prices while maintaining good quality. The market is value-conscious with many shops offering loyalty programs and package deals.",
  climate: "Jacksonville enjoys 221 sunny days per year with hot summers and mild winters. Being in North Florida, it has slightly more temperature variation than South Florida, but still gets plenty of UV exposure year-round.",
  challenges: [
    "Atlantic coast salt air affects vehicles, especially in beach communities like Jax Beach and Ponte Vedra",
    "Heavy pollen seasons coat vehicles in yellow-green film that can damage paint",
    "Long commutes (Jacksonville is geographically huge) mean more road debris and wear",
    "Love bugs are a seasonal nuisance requiring prompt cleaning",
    "Summer heat and humidity promote interior mold growth in parked vehicles",
    "Pine sap from the area's abundant pine trees is notoriously difficult to remove"
  ],
  topServices: [
    { name: "Full Exterior Detail + Sealant", price: "$200-$400", why: "Best value protection for Jacksonville's diverse climate challenges" },
    { name: "Interior Deep Clean + Odor Treatment", price: "$125-$275", why: "Essential for vehicles dealing with humidity, pollen, and long commutes" },
    { name: "Paint Correction + Ceramic Coating", price: "$600-$1,600", why: "Long-term investment for beach-area and daily-driver vehicles" },
    { name: "Pollen Season Recovery Package", price: "$75-$150", why: "Remove pollen buildup and restore paint protection" }
  ],
  neighborhoods: [
    "San Marco / Riverside - Artsy neighborhoods with quality boutique detailing shops",
    "Jacksonville Beach / Neptune Beach - Coastal shops experienced with salt damage restoration",
    "Ponte Vedra - Premium detailing services catering to luxury vehicle owners",
    "Mandarin / Southside - Great selection of mid-range shops with competitive pricing",
    "St. Johns Town Center area - Convenient shops near Jacksonville's major shopping district"
  ]
};

const otherCities = [
  { name: "Miami", slug: "miami" },
  { name: "Orlando", slug: "orlando" },
  { name: "Tampa", slug: "tampa" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale" },
];

export default function JacksonvilleCarDetailingGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does car detailing cost in Jacksonville?",
      answer: "Jacksonville offers some of Florida's most competitive detailing prices. A basic detail runs $100-$175, a full detail $200-$350, and a premium detail with paint correction $400-$600+. Prices are generally 15-25% lower than South Florida markets, with no compromise on quality."
    },
    {
      question: "How do I deal with pollen on my car in Jacksonville?",
      answer: "Don't let pollen sit for more than a few days - it's mildly acidic and can leave staining on paint. Rinse it off gently with water first (don't wipe dry pollen as it scratches). Then do a proper wash. A good wax or ceramic coating makes pollen removal much easier and prevents it from bonding to paint."
    },
    {
      question: "How often should I detail my car in Jacksonville?",
      answer: "For most Jacksonville drivers, a maintenance wash every 1-2 weeks, a basic detail every 6-8 weeks, and a full detail every 6 months works well. If you live near the beaches (Jax Beach, Atlantic Beach, Neptune Beach), increase wash frequency due to salt exposure."
    },
    {
      question: "What about pine sap removal?",
      answer: "Pine sap is a common issue in Jacksonville given the area's abundant pine trees. Don't try to scrub it off - you'll scratch the paint. Use a dedicated tar/sap remover or rubbing alcohol on a microfiber cloth. Let it soak for a few minutes before gently wiping. A ceramic coating makes future sap removal much easier."
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
              <div className="text-lg font-medium text-[#4a90d9]">221 sunny days/yr</div>
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

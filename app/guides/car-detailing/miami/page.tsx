"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Miami",
  state: "FL",
  slug: "miami",
  description: "Miami's tropical climate, salt air, and intense UV exposure make regular detailing essential for protecting your vehicle's paint and interior from the elements.",
  averageCost: "$200-$800+",
  popularService: "Full exterior detail with ceramic coating",
  localTip: "Salt air from the coast accelerates paint degradation. Miami car owners should wax or ceramic coat more frequently than the national average.",
  climate: "Miami averages 248 sunny days per year with high humidity and salt air. These conditions make paint protection and interior conditioning critical.",
  challenges: [
    "Salt air causes paint oxidation and metal corrosion faster than inland areas",
    "Intense UV rays fade paint and crack dashboards and leather",
    "Love bug seasons (May & September) require immediate removal to prevent paint etching",
    "Afternoon rain showers leave water spots if car isn't protected",
    "High humidity promotes mold and mildew growth in interiors",
    "Sand from beach trips scratches paint if not washed properly"
  ],
  topServices: [
    { name: "Paint Correction + Ceramic Coating", price: "$800-$2,500", why: "Essential for long-term protection against salt air and UV" },
    { name: "Full Interior Detail with Leather Care", price: "$200-$400", why: "UV and heat destroy leather fast in Miami - conditioning is critical" },
    { name: "Monthly Maintenance Detail", price: "$150-$250", why: "Regular upkeep prevents salt and contamination buildup" },
    { name: "Love Bug Removal + Protection", price: "$50-$100", why: "Seasonal must-have to prevent paint damage" }
  ],
  neighborhoods: [
    "Brickell - Premium detailing with mobile services for condo residents",
    "Coral Gables - High-end shops specializing in luxury and exotic vehicles",
    "Doral - Great variety of shops with competitive pricing",
    "Miami Beach - Mobile detailing popular due to limited garage space",
    "Wynwood - Growing area with several quality detail shops"
  ]
};

const otherCities = [
  { name: "Orlando", slug: "orlando" },
  { name: "Tampa", slug: "tampa" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale" },
  { name: "Jacksonville", slug: "jacksonville" },
];

export default function MiamiCarDetailingGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does car detailing cost in Miami?",
      answer: "In Miami, a basic detail runs $150-$250, a full detail $300-$500, and a premium detail with paint correction $500-$800+. Luxury and exotic vehicles typically cost 30-50% more. Mobile detailing services are popular in condo-heavy areas and may charge a small premium for convenience."
    },
    {
      question: "How often should I detail my car in Miami?",
      answer: "Due to Miami's salt air, UV exposure, and humidity, we recommend a maintenance wash every 1-2 weeks, a basic detail monthly, and a full detail every 3-4 months. If you park outside or near the coast, increase frequency. Cars with ceramic coating can go slightly longer between full details."
    },
    {
      question: "Is mobile detailing worth it in Miami?",
      answer: "Mobile detailing is very popular in Miami, especially for condo and apartment residents without garage access. Quality mobile detailers bring professional equipment and can do excellent work. Just ensure they have proper insurance and use quality products. Expect to pay a 10-20% premium over shop-based services."
    },
    {
      question: "What's the best way to protect my car from Miami's salt air?",
      answer: "The best protection is a multi-layer approach: ceramic coating for the paint, regular undercarriage washes to remove salt, leather conditioning for the interior, and consistent maintenance washes. Parking in a garage helps significantly. At minimum, keep a strong wax or sealant on your paint at all times."
    }
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

          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">
            {cityData.description}
          </p>

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
              <div className="text-lg font-medium text-[#4a90d9]">248 sunny days/yr</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          
          {/* Local Tip */}
          <div className="mb-12 p-6 rounded-2xl bg-[#4a90d9]/5 border border-[#4a90d9]/20">
            <h3 className="text-lg font-medium text-[#4a90d9] mb-2">💡 Local Tip</h3>
            <p className="text-[#b8c4d9]">{cityData.localTip}</p>
          </div>

          {/* Climate Challenges */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              Why Detailing Matters More in {cityData.name}
            </h2>
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

          {/* Top Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              Recommended Detailing Services for {cityData.name}
            </h2>
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

          {/* Neighborhoods */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              Detailing by Neighborhood
            </h2>
            <div className="space-y-3">
              {cityData.neighborhoods.map((hood, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10">
                  <p className="text-[#b8c4d9]">{hood}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
              {cityData.name} Car Detailing FAQ
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"
                  >
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

          {/* CTA */}
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10">
            <h3 className="text-xl font-medium text-[#e8edf5] mb-2">
              Find Detailing Pros in {cityData.name}
            </h3>
            <p className="text-[#6b7a94] mb-6">
              Browse top-rated detailing professionals in the {cityData.name} area.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
            >
              Find Detailers
              <span>→</span>
            </Link>
          </div>

          {/* Other Cities */}
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10">
            <h3 className="text-lg font-medium text-[#e8edf5] mb-4">
              Car Detailing Guides for Other Florida Cities
            </h3>
            <div className="flex flex-wrap gap-3">
              {otherCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/guides/car-detailing/${city.slug}`}
                  className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

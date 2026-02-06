"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Orlando",
  state: "FL",
  slug: "orlando",
  description: "Orlando's hot summers, frequent rain showers, and love bug seasons make regular car detailing essential for maintaining your vehicle's appearance and value.",
  averageCost: "$150-$700+",
  popularService: "Full detail with paint correction",
  localTip: "With cars often parked at theme parks for 8+ hours in the Florida sun, interior protection is especially important for Orlando residents. Ceramic-coated interiors resist UV damage far better.",
  climate: "Orlando sees 233 sunny days per year with summer temperatures regularly hitting 95°F+. Afternoon thunderstorms are almost daily in summer, creating a cycle of sun damage and water spots.",
  challenges: [
    "Love bug seasons (May & September) leave acidic residue that etches paint within 24-48 hours",
    "Daily afternoon rain showers leave water spots that can permanently etch unprotected paint",
    "Extended theme park parking means hours of direct sun exposure on interiors",
    "Pollen season coats vehicles and can damage paint if left too long",
    "High humidity promotes mold growth in vehicles parked outside",
    "I-4 construction dust and debris constantly settle on vehicles"
  ],
  topServices: [
    { name: "Full Exterior Detail + Sealant", price: "$250-$450", why: "Protection against Orlando's sun-rain-sun cycle" },
    { name: "Interior Deep Clean + UV Protection", price: "$175-$350", why: "Essential after long theme park parking sessions" },
    { name: "Paint Correction + Ceramic Coating", price: "$700-$2,000", why: "Long-term protection against love bugs and water spots" },
    { name: "Love Bug Season Package", price: "$75-$150", why: "Seasonal treatment to remove and protect against love bug damage" }
  ],
  neighborhoods: [
    "Winter Park - Upscale shops specializing in luxury vehicles and premium detailing",
    "Dr. Phillips / Sand Lake - Several quality shops serving the restaurant row area",
    "Lake Nona - Growing area with mobile detailing services popular among new homeowners",
    "Altamonte Springs - Competitive pricing with several established detail shops",
    "Kissimmee / I-Drive - Tourist-area shops with quick turnaround services"
  ]
};

const otherCities = [
  { name: "Miami", slug: "miami" },
  { name: "Tampa", slug: "tampa" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale" },
  { name: "Jacksonville", slug: "jacksonville" },
];

export default function OrlandoCarDetailingGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does car detailing cost in Orlando?",
      answer: "Orlando detailing prices are moderate for Florida. A basic detail runs $125-$200, a full detail $250-$450, and a premium detail with paint correction $500-$700+. Prices are generally 10-15% lower than Miami or Fort Lauderdale. Mobile detailing is widely available and competitively priced."
    },
    {
      question: "How do I protect my car from love bugs in Orlando?",
      answer: "Prevention is key: keep a fresh coat of wax or ceramic coating on your paint. During love bug season, wash affected areas within 24 hours - their residue is acidic and will etch paint. A bug deflector for the hood helps, and keeping quick detail spray in your car for immediate wipe-downs is smart."
    },
    {
      question: "How often should I detail my car in Orlando?",
      answer: "For Orlando's climate, we recommend a maintenance wash weekly, a basic detail every 4-6 weeks, and a full detail every 4-6 months. During love bug season, increase wash frequency. If you park outside daily, consider monthly basic details to combat sun and rain damage."
    },
    {
      question: "What's the best protection for cars parked at theme parks all day?",
      answer: "Use a ceramic-coated windshield sunshade, apply UV protectant to your dashboard and leather regularly, and keep your ceramic coating or wax fresh to protect exterior paint. Tinted windows also significantly reduce interior heat and UV damage. Consider a steering wheel cover to prevent burning."
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
              <div className="text-lg font-medium text-[#4a90d9]">233 sunny days/yr</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-12 p-6 rounded-2xl bg-[#4a90d9]/5 border border-[#4a90d9]/20">
            <h3 className="text-lg font-medium text-[#4a90d9] mb-2">💡 Local Tip</h3>
            <p className="text-[#b8c4d9]">{cityData.localTip}</p>
          </div>

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

          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10">
            <h3 className="text-lg font-medium text-[#e8edf5] mb-4">
              Car Detailing Guides for Other Florida Cities
            </h3>
            <div className="flex flex-wrap gap-3">
              {otherCities.map((city) => (
                <Link key={city.slug} href={`/guides/car-detailing/${city.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">
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

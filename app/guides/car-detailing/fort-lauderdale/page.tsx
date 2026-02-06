"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Fort Lauderdale",
  state: "FL",
  slug: "fort-lauderdale",
  description: "Fort Lauderdale's coastal luxury lifestyle, intense sun, and salt-heavy air demand premium vehicle care. Regular detailing protects your investment from the elements.",
  averageCost: "$200-$750+",
  popularService: "Premium detail with ceramic coating",
  localTip: "Fort Lauderdale's proximity to the ocean means salt exposure is constant. Vehicles parked within a few miles of the coast need more frequent washing and stronger paint protection than inland vehicles.",
  climate: "Fort Lauderdale averages 250+ sunny days per year with year-round warmth. The coastal location means constant salt air exposure, making it one of the most demanding environments for vehicle maintenance in Florida.",
  challenges: [
    "Ocean salt air is more concentrated than bay areas - causes faster corrosion and paint degradation",
    "Luxury vehicles are common and require specialized detailing knowledge and products",
    "Beach sand gets everywhere - proper removal technique is critical to avoid scratching",
    "Year-round warm temps mean UV damage happens 12 months, not just summer",
    "Boat trailer salt exposure affects vehicles used for watercraft transport",
    "Condo parking garages with limited ventilation can trap humidity and promote mold"
  ],
  topServices: [
    { name: "Premium Exterior Detail + Ceramic Coating", price: "$800-$2,500", why: "The gold standard for coastal vehicle protection in Fort Lauderdale" },
    { name: "Luxury Interior Detail + Leather Treatment", price: "$250-$500", why: "Specialized care for premium interiors common in Fort Lauderdale vehicles" },
    { name: "Monthly Maintenance Package", price: "$175-$300/visit", why: "Regular care is essential with constant salt exposure" },
    { name: "Salt Damage Recovery Detail", price: "$300-$600", why: "Restore vehicles affected by coastal corrosion and oxidation" }
  ],
  neighborhoods: [
    "Las Olas / Downtown - Premium shops catering to luxury vehicle owners",
    "Weston - High-quality suburban shops with competitive pricing",
    "Coral Springs - Great value detailing with several established businesses",
    "Pompano Beach - Coastal shops experienced with salt damage and marine vehicles",
    "Plantation - Family-friendly shops with good range of packages and pricing"
  ]
};

const otherCities = [
  { name: "Miami", slug: "miami" },
  { name: "Orlando", slug: "orlando" },
  { name: "Tampa", slug: "tampa" },
  { name: "Jacksonville", slug: "jacksonville" },
];

export default function FortLauderdaleCarDetailingGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does car detailing cost in Fort Lauderdale?",
      answer: "Fort Lauderdale detailing prices are on the higher end for Florida due to the luxury market. A basic detail runs $175-$275, a full detail $350-$550, and a premium detail with paint correction $550-$750+. Exotic and luxury vehicle specialists may charge more. Mobile detailing is popular in condo communities."
    },
    {
      question: "How do I protect my car from salt air in Fort Lauderdale?",
      answer: "Layer your protection: ceramic coating is the best long-term solution, topped with a spray sealant monthly. Wash your car at least weekly to remove salt deposits - don't let them sit. Rinse the undercarriage regularly. If you park near the Intracoastal or beach, consider bi-weekly professional washes."
    },
    {
      question: "How often should I detail my car in Fort Lauderdale?",
      answer: "Due to the intense coastal conditions, Fort Lauderdale vehicles need more frequent care than inland areas. Aim for weekly washes, monthly maintenance details, and a full detail every 3-4 months. Vehicles with ceramic coating can extend the full detail interval to every 6 months."
    },
    {
      question: "Do Fort Lauderdale detailers specialize in luxury cars?",
      answer: "Many do. Fort Lauderdale has a high concentration of luxury and exotic vehicles, and several detail shops specialize in brands like Porsche, Mercedes, BMW, and exotics. These shops use brand-appropriate products and techniques. Always ask about experience with your specific vehicle brand."
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
              <div className="text-lg font-medium text-[#4a90d9]">250+ sunny days/yr</div>
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

"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Miami",
  state: "FL",
  slug: "miami",
  description: "Miami's vibrant car culture and nightlife scene make LED lighting upgrades hugely popular - from premium headlight upgrades to eye-catching accent lighting for cruising South Beach.",
  averageCost: "$50-$800+",
  popularUpgrade: "LED headlights + underglow",
  localTip: "Miami's car show and cruise scene is one of the most active in the country. Many lighting shops offer show-ready packages with underglow, interior LEDs, and custom headlights in one visit.",
  climate: "Miami's 248 sunny days mean bright conditions during the day, but the city's active nightlife and evening culture make quality lighting upgrades both practical and stylish.",
  challenges: ["High heat accelerates LED degradation - choose bulbs with quality heat sinks", "Salt air can corrode exposed electrical connections on exterior lighting", "Frequent rain demands waterproof connections and sealed installations", "Law enforcement is active on South Beach - ensure all lighting is legal", "Humidity can cause condensation inside headlight housings if seals are broken", "UV exposure yellows headlight lenses - consider protective coatings"],
  topServices: [{"n": "Premium LED Headlight Upgrade", "p": "$150-$800", "w": "Most impactful safety upgrade for Miami's busy night driving scene"}, {"n": "Interior Ambient LED Package", "p": "$50-$200", "w": "Transform your cabin for Miami's nightlife and cruise culture"}, {"n": "Underglow / Accent Kit", "p": "$100-$400", "w": "Popular for shows and car meets throughout South Florida"}, {"n": "Full Lighting Makeover", "p": "$400-$1,500+", "w": "Complete upgrade package: headlights, tails, interior, and accents"}],
  neighborhoods: ["Wynwood / Design District - Custom lighting shops catering to the car culture crowd", "Doral - Multiple electronics and lighting specialists with competitive pricing", "Hialeah - Budget-friendly options with experienced installers", "Brickell / Downtown - Premium shops with luxury vehicle experience", "Kendall - Good selection of general automotive shops offering lighting services"]
};

const otherCities = [{"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function MiamiLEDLightingGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [{"q": "Where can I get LED headlights installed in Miami?", "a": "Car audio and electronics shops are your best bet for quality LED installations in Miami. Shops in Doral and Hialeah tend to offer the best pricing, while Wynwood and Brickell shops cater to higher-end vehicles. Expect $50-$150 for installation on top of parts cost."}, {"q": "Is underglow legal in Miami?", "a": "White and amber underglow is generally tolerated, but red, blue, and green are illegal (reserved for emergency vehicles). Miami police are more enforcement-active than rural areas, so stick to legal colors. Many enthusiasts only use underglow at shows and events."}, {"q": "How much do LED headlights cost in Miami?", "a": "LED bulb swaps run $30-$150 for parts, plus $50-$100 for installation. Full LED headlight assemblies range $200-$800+ per pair with installation. Miami pricing is comparable to other major Florida markets."}, {"q": "Can the heat in Miami damage LED lights?", "a": "Yes, extreme heat shortens LED lifespan - but quality LEDs with proper heat management handle Florida heat well. Avoid ultra-cheap LEDs with no cooling. Premium brands like Morimoto and Diode Dynamics are designed to handle high ambient temperatures."}];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><Link href="/guides/led-lighting-upgrades" className="hover:text-[#4a90d9] transition-colors">LED Lighting</Link><span>/</span><span className="text-[#e8edf5]">{cityData.name}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">🔦</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{cityData.name}, {cityData.state}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">LED & Lighting Upgrades in {cityData.name}: Complete Local Guide</h1>
          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{cityData.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Average Cost</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.averageCost}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Popular Upgrade</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.popularUpgrade}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">248 sunny days/yr</div></div>
          </div>
        </div>
      </section>
      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 p-6 rounded-2xl bg-[#4a90d9]/5 border border-[#4a90d9]/20"><h3 className="text-lg font-medium text-[#4a90d9] mb-2">💡 Local Tip</h3><p className="text-[#b8c4d9]">{cityData.localTip}</p></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Lighting Upgrades in {cityData.name}: What to Know</h2><p className="text-[#b8c4d9] leading-relaxed mb-6">{cityData.climate}</p><div className="space-y-3">{cityData.challenges.map((challenge, idx) => (<div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><span className="text-[#4a90d9] mt-0.5">⚠️</span><span className="text-[#b8c4d9]">{challenge}</span></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Popular Lighting Services in {cityData.name}</h2><div className="space-y-4">{cityData.topServices.map((service, idx) => (<div key={idx} className="p-6 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="flex justify-between items-start mb-2"><h3 className="text-lg font-medium text-[#e8edf5]">{service.n}</h3><span className="text-[#4a90d9] font-medium">{service.p}</span></div><p className="text-[#6b7a94]">{service.w}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Lighting Shops by Neighborhood</h2><div className="space-y-3">{cityData.neighborhoods.map((hood, idx) => (<div key={idx} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><p className="text-[#b8c4d9]">{hood}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} LED Lighting FAQ</h2><div className="space-y-4">{faqs.map((faq, idx) => (<div key={idx} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{faq.q}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === idx && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{faq.a}</p></div>)}</div>))}</div></div>
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10"><h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Lighting Shops in {cityData.name}</h3><p className="text-[#6b7a94] mb-6">Browse top-rated automotive lighting specialists in the {cityData.name} area.</p><Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link></div>
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10"><h3 className="text-lg font-medium text-[#e8edf5] mb-4">LED Lighting Guides for Other Florida Cities</h3><div className="flex flex-wrap gap-3">{otherCities.map((city) => (<Link key={city.slug} href={`/guides/led-lighting-upgrades/${city.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{city.name}</Link>))}</div></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Jacksonville",
  state: "FL",
  slug: "jacksonville",
  description: "Jacksonville's sprawling layout and long commutes make headlight upgrades a practical necessity, while the city's growing car scene fuels demand for custom lighting modifications.",
  averageCost: "$35-$600+",
  popularUpgrade: "LED headlight swap + interior LEDs",
  localTip: "Jacksonville offers some of the best pricing for lighting upgrades in Florida. The market is value-focused with several quality shops competing on price. Great city for first-time lighting upgraders.",
  climate: "Jacksonville's 221 sunny days and North Florida location provide slightly milder conditions than South Florida, which can extend the lifespan of lighting upgrades. However, summer heat still demands quality components.",
  challenges: ["Long commutes across the city make headlight quality a safety priority", "Beach community driving exposes lights to Atlantic salt air", "Pine sap and pollen can coat and dim headlight output", "Fewer specialist shops than larger Florida metros - do your research", "North Florida occasionally sees cooler temperatures that can affect cheap LED performance", "Highway driving to Amelia Island and St. Augustine benefits from better lighting"],
  topServices: [{"n": "LED Headlight Bulb Swap", "p": "$70-$160 installed", "w": "Best value lighting upgrade for Jacksonville's long commutes"}, {"n": "Complete Interior LED Kit", "p": "$35-$90 installed", "w": "Affordable cabin upgrade popular with the local car community"}, {"n": "LED Headlight Assembly Upgrade", "p": "$200-$600", "w": "Full headlight replacement for maximum improvement"}, {"n": "Truck Lighting Package", "p": "$150-$500", "w": "LED headlights, fog lights, and bed lights for Jacksonville's truck owners"}],
  neighborhoods: ["San Marco / Riverside - Quality boutique shops with attention to detail", "Southside / Town Center - Several auto electronics shops with convenient access", "Jacksonville Beach area - Coastal shops understanding salt-air challenges", "Orange Park - Suburban shops with competitive pricing", "Mandarin - Growing area with newer shops and good customer service"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}];

export default function JacksonvilleLEDLightingGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [{"q": "How much do LED headlights cost in Jacksonville?", "a": "Jacksonville offers Florida's most competitive lighting upgrade pricing. LED bulb swaps run $70-$160 installed, while full assemblies range $200-$600 with installation. That's roughly 15-25% less than South Florida markets with comparable quality."}, {"q": "What's the best upgrade for Jacksonville's long commutes?", "a": "LED headlight bulbs are the single best upgrade. Jacksonville's sprawling layout means more nighttime and dawn/dusk driving than compact cities. A quality LED headlight swap for $100-$160 installed dramatically improves visibility and safety for daily commuting."}, {"q": "Are there good car meets to show off lighting mods in Jacksonville?", "a": "Jacksonville's car scene is growing, with regular meets at spots around St. Johns Town Center and the beach communities. The truck and Jeep community is particularly active, and lighting mods are always popular at these events."}, {"q": "How do I protect my LED lights from Jacksonville's pine sap?", "a": "Pine sap should be removed promptly using isopropyl alcohol or a dedicated tar/sap remover. For headlight lenses specifically, applying a ceramic coating creates a protective layer that makes sap removal easier and prevents it from bonding to the surface."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">221 sunny days/yr</div></div>
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

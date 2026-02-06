"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Tampa",
  state: "FL",
  slug: "tampa",
  description: "Tampa Bay's diverse driving conditions - from highway commutes to beach cruising - make lighting upgrades a practical and popular vehicle modification across the metro area.",
  averageCost: "$40-$650+",
  popularUpgrade: "LED headlights + fog lights",
  localTip: "Tampa's bay area fog can roll in quickly during cooler months. A quality LED fog light upgrade (especially in amber/yellow) paired with LED headlights is the ultimate safety combo for bay-area driving.",
  climate: "Tampa's 244 sunny days combined with sudden summer storms and occasional bay fog create varied driving conditions that benefit greatly from quality lighting upgrades.",
  challenges: ["Bay fog during cooler months reduces visibility significantly", "Summer thunderstorms create rapid transitions from bright sun to dark rain", "Causeway and bridge driving benefits from better headlight output", "Salt air from the bay can affect exterior lighting connections", "Beach sand can scratch and cloud headlight lenses over time", "Growing traffic congestion makes being visible to other drivers more important"],
  topServices: [{"n": "LED Headlight + Fog Light Combo", "p": "$150-$500", "w": "The ideal pairing for Tampa Bay's varied driving conditions"}, {"n": "LED Headlight Bulb Swap", "p": "$80-$180 installed", "w": "Quick and affordable brightness upgrade for daily commuters"}, {"n": "Interior LED Package", "p": "$40-$100 installed", "w": "Cabin ambiance upgrade popular across the bay area"}, {"n": "Truck LED Light Bar", "p": "$100-$500 installed", "w": "Popular with Tampa's truck community for off-road and work use"}],
  neighborhoods: ["South Tampa - Quality shops with experienced technicians", "Brandon / Riverview - Competitive pricing with fast turnaround", "Wesley Chapel / New Tampa - Newer shops serving the growing north corridor", "St. Petersburg - Several quality auto electronics shops across the bay", "Clearwater - Shops experienced with coastal vehicle maintenance"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function TampaLEDLightingGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [{"q": "How much do LED headlights cost in Tampa?", "a": "Tampa offers competitive pricing. LED bulb swaps run $80-$180 installed, while full LED assemblies range $250-$650 with installation. Combo deals with fog lights can save 10-15% compared to doing them separately."}, {"q": "What color fog lights are best for Tampa?", "a": "Amber/yellow (3,000K) fog lights perform best in Tampa Bay's conditions. The bay fog and heavy rain that Tampa experiences are better penetrated by yellow light, which produces less glare and reflection than white light in moisture."}, {"q": "Are LED light bars legal in Tampa?", "a": "LED light bars must be covered or turned off when driving on public roads in Florida. They're legal for off-road use only. Tampa police do enforce this, so use them only off-road or when your vehicle is stationary."}, {"q": "Can I install LED headlights myself in Tampa?", "a": "LED bulb swaps are very DIY-friendly. If you're not comfortable, most Tampa car audio shops charge $50-$100 for installation. For more complex work like full assembly replacements or wiring, professional installation is recommended."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">244 sunny days/yr</div></div>
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

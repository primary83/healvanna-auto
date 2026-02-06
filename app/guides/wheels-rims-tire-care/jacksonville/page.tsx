"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Jacksonville",
  state: "FL",
  description: "Jacksonville offers Florida's best wheel and tire pricing. The strong truck and Jeep community means all-terrain options are abundant and competitively priced. Great city for first-time wheel upgrades.",
  averageCost: "$500-$4,500+",
  popularStyle: "Truck wheels & all-terrain",
  localTip: "Jacksonville offers Florida's best wheel and tire pricing. The strong truck and Jeep community means all-terrain options are abundant and competitively priced. Great city for first-time wheel upgrades.",
  climate: "Jacksonville's 221 sunny days and slightly milder climate compared to South Florida are kinder to wheel finishes. Atlantic salt air still affects beach communities, but inland wheels last longer between maintenance.",
  challenges: ["Atlantic coast salt air affects beach community vehicles", "Pine sap can stain and damage certain wheel finishes", "Long commutes across Jacksonville's sprawl increase tire wear", "Road hazards from the area's ongoing development and construction", "Fewer premium wheel specialists than larger Florida metros", "North Florida's occasional cold snaps can affect tire pressure significantly"],
  topServices: [{"n": "Truck Wheel & Tire Package", "p": "$1,000-$4,500", "w": "Jacksonville's strong truck market means excellent selection and value"}, {"n": "Budget Wheel Upgrade", "p": "$500-$1,500", "w": "Quality cast and flow-formed options at Florida's best prices"}, {"n": "Tire Replacement Service", "p": "$350-$900", "w": "Competitive tire pricing with professional mounting and balancing"}, {"n": "Wheel Repair & Refinishing", "p": "$75-$200/wheel", "w": "Affordable curb rash and finish repair at Jacksonville prices"}],
  neighborhoods: ["San Marco / Riverside - Quality shops with enthusiast-focused service", "Southside / Town Center - Convenient shops with good selection", "Jacksonville Beach - Coastal shops understanding salt-air challenges", "Orange Park / Fleming Island - Suburban shops with competitive pricing", "Mandarin - Growing area with newer shops competing on price"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}];

export default function JacksonvilleWheelsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much do wheels and tires cost in Jacksonville?", "a": "Jacksonville offers the best value in Florida. Budget wheel and tire packages start at $500-$1,000, quality upgrades run $1,000-$2,500, and premium setups start at $2,500+. Truck wheels with all-terrain tires are especially well-priced at $1,000-$3,500."}, {"q": "What's popular in Jacksonville's wheel scene?", "a": "Trucks and Jeeps dominate Jacksonville's wheel market - lifted trucks with all-terrain tires and beadlock-style wheels are hugely popular. For cars, gloss black and bronze flow-formed wheels are trending. The Mustang and Camaro community is also active with performance wheel upgrades."}, {"q": "How do I deal with pine sap on wheels?", "a": "Use isopropyl alcohol or a dedicated tar/sap remover on a microfiber cloth. Let it soak before gently wiping. Never scrub with abrasive materials. Ceramic-coated wheels resist sap bonding and make removal much easier."}, {"q": "Are there good tire deals in Jacksonville?", "a": "Yes - Jacksonville's competitive market drives good pricing. National chains like Discount Tire, Tire Kingdom, and local independents all compete aggressively. Watch for seasonal sales (Memorial Day, Black Friday) for the best deals on tires."}];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><Link href="/guides/wheels-rims-tire-care" className="hover:text-[#4a90d9] transition-colors">Wheels & Tires</Link><span>/</span><span className="text-[#e8edf5]">{cityData.name}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">🛞</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{cityData.name}, {cityData.state}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">Wheels, Rims & Tire Care in {cityData.name}: Complete Local Guide</h1>
          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{cityData.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Average Cost</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.averageCost}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Popular Style</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.popularStyle}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">221 sunny days/yr</div></div>
          </div>
        </div>
      </section>
      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 p-6 rounded-2xl bg-[#4a90d9]/5 border border-[#4a90d9]/20"><h3 className="text-lg font-medium text-[#4a90d9] mb-2">💡 Local Tip</h3><p className="text-[#b8c4d9]">{cityData.localTip}</p></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Wheels & Tires in {cityData.name}: What to Know</h2><p className="text-[#b8c4d9] leading-relaxed mb-6">{cityData.climate}</p><div className="space-y-3">{cityData.challenges.map((c, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><span className="text-[#4a90d9] mt-0.5">⚠️</span><span className="text-[#b8c4d9]">{c}</span></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Popular Wheel & Tire Services in {cityData.name}</h2><div className="space-y-4">{cityData.topServices.map((s, i) => (<div key={i} className="p-6 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="flex justify-between items-start mb-2"><h3 className="text-lg font-medium text-[#e8edf5]">{s.n}</h3><span className="text-[#4a90d9] font-medium">{s.p}</span></div><p className="text-[#6b7a94]">{s.w}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Wheel & Tire Shops by Neighborhood</h2><div className="space-y-3">{cityData.neighborhoods.map((h, i) => (<div key={i} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><p className="text-[#b8c4d9]">{h}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} Wheels & Tires FAQ</h2><div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{f.q}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === i && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{f.a}</p></div>)}</div>))}</div></div>
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10"><h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Wheel & Tire Shops in {cityData.name}</h3><p className="text-[#6b7a94] mb-6">Browse top-rated wheel and tire specialists in the {cityData.name} area.</p><Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link></div>
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10"><h3 className="text-lg font-medium text-[#e8edf5] mb-4">Wheel & Tire Guides for Other Florida Cities</h3><div className="flex flex-wrap gap-3">{otherCities.map((c) => (<Link key={c.slug} href={`/guides/wheels-rims-tire-care/${c.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{c.name}</Link>))}</div></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

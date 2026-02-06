"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Jacksonville",
  state: "FL",
  description: "Jacksonville offers the best new car protection value in Florida. Lower shop rates plus a competitive market means you can get professional-grade protection for 20-30% less than South Florida. Ideal for new car buyers who want quality without premium-market pricing.",
  averageCost: "$1,000-$6,000+",
  popularService: "Ceramic coating + tint packages",
  localTip: "Jacksonville offers the best new car protection value in Florida. Lower shop rates plus a competitive market means you can get professional-grade protection for 20-30% less than South Florida. Ideal for new car buyers who want quality without premium-market pricing.",
  climate: "Jacksonville's 221 sunny days and slightly milder climate compared to South Florida are somewhat easier on paint, but Atlantic salt air, pine sap, heavy pollen, and highway debris still create strong reasons to protect a new vehicle.",
  challenges: ["Atlantic coast salt air affects beach-area vehicles year-round", "Pine sap bonds to unprotected paint and requires professional removal", "Heavy pollen seasons leave acidic deposits on unprotected surfaces", "Long commutes across Jacksonville create extended road debris exposure", "Fewer premium protection specialists than larger metros", "Love bug season still affects North Florida vehicles"],
  topServices: [{"n": "Essential Package (Tint + Basic Ceramic)", "p": "$350-$600", "w": "Florida's most affordable new car protection package"}, {"n": "Smart Package (Ceramic + Tint + Partial PPF)", "p": "$1,200-$2,500", "w": "Best value comprehensive package in the state"}, {"n": "Premium Package (Full-Front PPF + Ceramic + Tint)", "p": "$2,500-$4,500", "w": "Full front-end protection at Jacksonville's competitive prices"}, {"n": "Full Protection Package", "p": "$4,500-$6,000+", "w": "Complete protection at 20-30% below South Florida pricing"}],
  neighborhoods: ["San Marco / Riverside - Quality protection shops with attention to detail", "Southside / Town Center - Convenient shops with comprehensive package options", "Jacksonville Beach - Coastal shops understanding salt-exposure protection", "Orange Park / Fleming Island - Competitive suburban pricing on packages", "Mandarin - Growing area with newer shops offering new car specials"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}];

export default function JacksonvilleNewCarGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does new car protection cost in Jacksonville?", "a": "Jacksonville is Florida's best value market. Essential packages start at $350-$600, Smart Packages run $1,200-$2,500, and full coverage runs $4,500-$6,000+. That's typically 20-30% less than South Florida with comparable product quality and warranties."}, {"q": "What's the best value protection package in Jacksonville?", "a": "The Smart Package ($1,200-$2,500) - professional ceramic coating, ceramic window tint, and partial PPF on the front bumper and hood. This covers the most vulnerable areas at a price point that delivers excellent ROI through maintained resale value and prevented damage."}, {"q": "Is PPF necessary in Jacksonville?", "a": "For front-end protection, yes - especially if you commute on I-95 or I-295. At minimum, protect the front bumper ($400-$700 in Jacksonville). Full-front PPF ($1,200-$2,500) is ideal for highway commuters. Jacksonville pricing makes PPF more accessible than in larger markets."}, {"q": "When should I schedule protection after buying?", "a": "Within 2-3 weeks. Jacksonville's slightly milder climate gives you a bit more time than South Florida, but don't wait. Get tint first, then PPF and ceramic coating. Book your appointment before or right after purchasing to minimize the unprotected window."}];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><Link href="/guides/new-car-protection-packages" className="hover:text-[#4a90d9] transition-colors">New Car Protection</Link><span>/</span><span className="text-[#e8edf5]">{cityData.name}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">🚗</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{cityData.name}, {cityData.state}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">New Car Protection Packages in {cityData.name}: Complete Local Guide</h1>
          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{cityData.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Package Range</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.averageCost}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Most Popular</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.popularService}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">221 sunny days/yr</div></div>
          </div>
        </div>
      </section>
      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 p-6 rounded-2xl bg-[#4a90d9]/5 border border-[#4a90d9]/20"><h3 className="text-lg font-medium text-[#4a90d9] mb-2">💡 Local Tip</h3><p className="text-[#b8c4d9]">{cityData.localTip}</p></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">New Car Protection in {cityData.name}: What to Know</h2><p className="text-[#b8c4d9] leading-relaxed mb-6">{cityData.climate}</p><div className="space-y-3">{cityData.challenges.map((c, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><span className="text-[#4a90d9] mt-0.5">⚠️</span><span className="text-[#b8c4d9]">{c}</span></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Protection Packages in {cityData.name}</h2><div className="space-y-4">{cityData.topServices.map((s, i) => (<div key={i} className="p-6 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="flex justify-between items-start mb-2"><h3 className="text-lg font-medium text-[#e8edf5]">{s.n}</h3><span className="text-[#4a90d9] font-medium">{s.p}</span></div><p className="text-[#6b7a94]">{s.w}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Protection Shops by Neighborhood</h2><div className="space-y-3">{cityData.neighborhoods.map((h, i) => (<div key={i} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><p className="text-[#b8c4d9]">{h}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} New Car Protection FAQ</h2><div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{f.q}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === i && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{f.a}</p></div>)}</div>))}</div></div>
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10"><h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Protection Specialists in {cityData.name}</h3><p className="text-[#6b7a94] mb-6">Browse top-rated PPF, ceramic coating, and tint specialists in the {cityData.name} area.</p><Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link></div>
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10"><h3 className="text-lg font-medium text-[#e8edf5] mb-4">New Car Protection Guides for Other Florida Cities</h3><div className="flex flex-wrap gap-3">{otherCities.map((c) => (<Link key={c.slug} href={`/guides/new-car-protection-packages/${c.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{c.name}</Link>))}</div></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

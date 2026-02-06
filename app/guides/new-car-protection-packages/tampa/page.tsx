"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Tampa",
  state: "FL",
  description: "Tampa's protection market is well-developed with several shops offering comprehensive new car packages. The bay area's unique combination of UV, salt air, and heavy highway traffic makes protection especially valuable for Tampa drivers.",
  averageCost: "$1,200-$8,000+",
  popularService: "Ceramic + tint + partial PPF combos",
  localTip: "Tampa's protection market is well-developed with several shops offering comprehensive new car packages. The bay area's unique combination of UV, salt air, and heavy highway traffic makes protection especially valuable for Tampa drivers.",
  climate: "Tampa's 244 sunny days, bay-area salt air, and bridge commutes create a unique set of paint threats. Vehicles driving the causeway and Howard Frankland bridge daily face concentrated salt spray that accelerates damage around any unprotected chips.",
  challenges: ["Bay bridge commutes expose paint to concentrated salt spray daily", "UV exposure at 244 sunny days causes rapid paint degradation", "Summer storms create water spots that etch in Tampa's heat", "Beach trips to Clearwater bring sand and salt that threaten paint", "Growing traffic means more rock chip exposure during commutes", "Several quality shops to choose from but quality varies - research carefully"],
  topServices: [{"n": "Essential Package (Tint + Spray Ceramic)", "p": "$400-$700", "w": "Budget protection for Tampa Bay daily drivers"}, {"n": "Smart Package (Ceramic + Tint + Partial PPF)", "p": "$1,500-$3,000", "w": "The ideal combo for Tampa's highway and bridge commuters"}, {"n": "Premium Package (Full-Front PPF + Ceramic + Tint)", "p": "$3,000-$5,500", "w": "Comprehensive protection against Tampa Bay's harsh conditions"}, {"n": "Full Protection Package", "p": "$5,500-$8,000+", "w": "Maximum coverage for long-term Tampa vehicle ownership"}],
  neighborhoods: ["South Tampa - Premium protection shops with quality standards", "Brandon / Riverview - Competitive pricing on comprehensive packages", "Wesley Chapel / New Tampa - Growing area with newer shops offering deals", "St. Petersburg - Quality shops across the bay for Pinellas drivers", "Clearwater - Coastal shops understanding salt-exposure protection needs"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function TampaNewCarGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does new car protection cost in Tampa?", "a": "Tampa offers competitive pricing. Essential packages start at $400-$700, Smart Packages run $1,500-$3,000, and full coverage runs $5,500-$8,000+. Bundle deals typically save 10-20% over booking services individually."}, {"q": "Is salt air protection important in Tampa?", "a": "Yes, especially for bridge commuters. The Howard Frankland, Courtney Campbell, and Gandy bridges expose vehicles to concentrated salt spray. PPF prevents chips where salt infiltrates, and ceramic coating provides chemical resistance against salt deposits."}, {"q": "What should I get first on a new car in Tampa?", "a": "Window tint first (reduces UV immediately), then PPF if you're getting it (protects against chips from day one), then ceramic coating last (seals everything). Many Tampa shops coordinate all three in a single 3-5 day package visit."}, {"q": "Are dealer protection packages worth it at Tampa dealerships?", "a": "Generally no. Tampa dealers mark up protection 100-300%. A $2,500 dealer package often uses consumer-grade products worth $400-$600. Specialist shops use professional products with manufacturer warranties at better value."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">244 sunny days/yr</div></div>
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

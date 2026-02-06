"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Fort Lauderdale",
  state: "FL",
  description: "Fort Lauderdale's luxury vehicle market means many detail shops specialize in premium leather care for brands like BMW, Mercedes, Porsche, and Bentley. Their expertise benefits all customers, even with more affordable vehicles.",
  averageCost: "$100-$500+",
  popularService: "Premium leather restoration",
  localTip: "Fort Lauderdale's luxury vehicle market means many detail shops specialize in premium leather care for brands like BMW, Mercedes, Porsche, and Bentley. Their expertise benefits all customers, even with more affordable vehicles.",
  climate: "Fort Lauderdale's 250+ sunny days, ocean salt air, and luxury vehicle concentration create demand for premium interior care services. The coastal climate is as harsh as Miami's for interior materials.",
  challenges: ["Ocean salt air accelerates interior material degradation", "UV exposure through large windshields fades leather rapidly", "Luxury vehicle owners demand flawless interior maintenance", "Boat and watercraft lifestyle brings extra moisture and salt exposure", "Sand from beach lifestyle grinds into premium leather surfaces", "High humidity year-round promotes mold in garaged vehicles"],
  topServices: [{"n": "Premium Interior Detail", "p": "$175-$400", "w": "High-end interior care matching Fort Lauderdale's luxury market"}, {"n": "Leather Restoration & Re-Dyeing", "p": "$200-$600/seat", "w": "Professional repair for faded, cracked, or damaged luxury leather"}, {"n": "Interior Ceramic Coating", "p": "$200-$500", "w": "Long-term protection for premium interiors against UV and salt"}, {"n": "Full Interior Reconditioning", "p": "$400-$800", "w": "Complete interior overhaul for neglected or damaged vehicles"}],
  neighborhoods: ["Las Olas / Downtown - Premium shops with luxury vehicle expertise", "Pompano Beach - Quality options with more accessible pricing", "Weston / Pembroke Pines - Suburban shops with broad experience", "Coral Springs - Competitive pricing with quality workmanship", "Deerfield Beach - Northern Broward shops with fair pricing"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function FortLauderdaleLeatherGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does premium leather care cost in Fort Lauderdale?", "a": "Fort Lauderdale pricing reflects the luxury market. Basic interior cleaning runs $100-$200, full premium detail $175-$400, and leather restoration $200-$600 per seat. The higher pricing comes with expertise in luxury vehicle interiors and premium products."}, {"q": "Can salt air damage my car's interior in Fort Lauderdale?", "a": "Indirectly, yes. Salt air that enters through windows and ventilation can settle on interior surfaces, promoting corrosion of metal components and degrading leather over time. Regular interior cleaning removes salt deposits, and ceramic interior coating provides a protective barrier."}, {"q": "How do I maintain a convertible interior in Fort Lauderdale?", "a": "Convertible interiors need extra care. Condition leather twice as often, apply UV protectant to all surfaces, and never leave the top down when parked. Invest in a quality car cover for extended parking. Interior ceramic coating is especially valuable for convertibles."}, {"q": "Is interior ceramic coating worth it in Fort Lauderdale?", "a": "Absolutely - it's one of the best investments for Fort Lauderdale vehicles. Ceramic coating protects leather from UV, salt, and stains while making cleaning easier. At $200-$500 for professional application lasting 1-2 years, it's far cheaper than leather repair or replacement."}];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><Link href="/guides/leather-upholstery-care" className="hover:text-[#4a90d9] transition-colors">Leather & Upholstery</Link><span>/</span><span className="text-[#e8edf5]">{cityData.name}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">🛋️</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{cityData.name}, {cityData.state}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">Leather & Upholstery Care in {cityData.name}: Complete Local Guide</h1>
          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{cityData.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Average Cost</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.averageCost}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Popular Service</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.popularService}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">250 sunny days/yr</div></div>
          </div>
        </div>
      </section>
      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 p-6 rounded-2xl bg-[#4a90d9]/5 border border-[#4a90d9]/20"><h3 className="text-lg font-medium text-[#4a90d9] mb-2">💡 Local Tip</h3><p className="text-[#b8c4d9]">{cityData.localTip}</p></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Interior Care in {cityData.name}: What to Know</h2><p className="text-[#b8c4d9] leading-relaxed mb-6">{cityData.climate}</p><div className="space-y-3">{cityData.challenges.map((c, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><span className="text-[#4a90d9] mt-0.5">⚠️</span><span className="text-[#b8c4d9]">{c}</span></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Popular Interior Services in {cityData.name}</h2><div className="space-y-4">{cityData.topServices.map((s, i) => (<div key={i} className="p-6 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="flex justify-between items-start mb-2"><h3 className="text-lg font-medium text-[#e8edf5]">{s.n}</h3><span className="text-[#4a90d9] font-medium">{s.p}</span></div><p className="text-[#6b7a94]">{s.w}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Interior Care Shops by Neighborhood</h2><div className="space-y-3">{cityData.neighborhoods.map((h, i) => (<div key={i} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><p className="text-[#b8c4d9]">{h}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} Interior Care FAQ</h2><div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{f.q}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === i && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{f.a}</p></div>)}</div>))}</div></div>
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10"><h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Interior Care Shops in {cityData.name}</h3><p className="text-[#6b7a94] mb-6">Browse top-rated interior detailing specialists in the {cityData.name} area.</p><Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link></div>
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10"><h3 className="text-lg font-medium text-[#e8edf5] mb-4">Interior Care Guides for Other Florida Cities</h3><div className="flex flex-wrap gap-3">{otherCities.map((c) => (<Link key={c.slug} href={`/guides/leather-upholstery-care/${c.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{c.name}</Link>))}</div></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

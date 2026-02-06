"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Fort Lauderdale",
  state: "FL",
  description: "Fort Lauderdale's luxury market means protection shops here work with the highest-end vehicles and products. Their expertise with soft European paints, exotic vehicles, and comprehensive protection translates to exceptional quality for all customers.",
  averageCost: "$2,000-$12,000+",
  popularService: "Premium full packages for luxury vehicles",
  localTip: "Fort Lauderdale's luxury market means protection shops here work with the highest-end vehicles and products. Their expertise with soft European paints, exotic vehicles, and comprehensive protection translates to exceptional quality for all customers.",
  climate: "Fort Lauderdale's 250+ sunny days and direct ocean exposure create the most aggressive paint environment in Florida. New car protection isn't optional here - it's essential for preserving both appearance and resale value.",
  challenges: ["Ocean salt air is the most corrosive paint environment in Florida", "250+ sunny days means extreme UV exposure year-round", "Luxury vehicle concentration demands premium protection products and installation", "Soft European paint on BMW, Mercedes, Porsche scratches more easily", "Convertible lifestyle means more paint exposure to elements", "Premium pricing reflects quality but shop around for competitive packages"],
  topServices: [{"n": "Smart Package (Ceramic + Tint + Partial PPF)", "p": "$2,000-$4,000", "w": "Entry-level comprehensive protection for Fort Lauderdale's conditions"}, {"n": "Premium Package (Full-Front PPF + Ceramic + Tint)", "p": "$4,000-$7,000", "w": "The recommended package for Fort Lauderdale's luxury vehicle market"}, {"n": "Ultimate Package (Full PPF + Ceramic + Tint + Interior)", "p": "$7,000-$12,000+", "w": "Complete bumper-to-bumper protection for high-value vehicles"}, {"n": "Exotic Vehicle Package", "p": "$10,000-$20,000+", "w": "Specialized protection for exotic and collectible vehicles"}],
  neighborhoods: ["Las Olas / Downtown - Premium protection shops with exotic vehicle certifications", "Pompano Beach - Quality shops with more accessible pricing on packages", "Weston / Pembroke Pines - Suburban shops with competitive protection packages", "Coral Springs - Growing market with quality work at fair pricing", "Deerfield Beach - Northern Broward options with experienced installers"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function FortLauderdaleNewCarGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does new car protection cost in Fort Lauderdale?", "a": "Fort Lauderdale pricing reflects the luxury market. Smart Packages start at $2,000-$4,000, Premium runs $4,000-$7,000, and full coverage for luxury/exotic vehicles runs $7,000-$20,000+. Premium pricing comes with premium products, expertise, and manufacturer-backed warranties."}, {"q": "Is full-body PPF worth it in Fort Lauderdale?", "a": "For vehicles worth $60,000+, yes. Full-body PPF ($4,000-$7,000) prevents thousands in paint damage from Fort Lauderdale's salt air, rock chips, and environmental threats. It also preserves 100% of your factory paint, maximizing resale value on luxury vehicles."}, {"q": "Do Fort Lauderdale shops specialize in European vehicles?", "a": "Many do. The concentration of BMW, Mercedes, Porsche, and exotic vehicles means Fort Lauderdale shops have deep experience with soft European paints and complex body lines. They use proper techniques and products designed for these vehicles' specific needs."}, {"q": "How do I choose between Fort Lauderdale protection shops?", "a": "Look for manufacturer certifications (Xpel, SunTek, Ceramic Pro, Gtechniq), before/after portfolios with vehicles similar to yours, transparent pricing, and Google reviews mentioning specific protection services. Visit shops in person to see their workspace and demo vehicles."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">250 sunny days/yr</div></div>
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

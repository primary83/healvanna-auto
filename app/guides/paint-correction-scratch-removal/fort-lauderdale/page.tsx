"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Fort Lauderdale",
  state: "FL",
  description: "Fort Lauderdale's correction specialists regularly work on six-figure vehicles, giving them exceptional skill with high-end paints and clear coats. Their expertise with soft European paints (BMW, Porsche, Mercedes) benefits all customers, regardless of vehicle value.",
  averageCost: "$300-$2,500+",
  popularService: "Premium correction for luxury vehicles",
  localTip: "Fort Lauderdale's correction specialists regularly work on six-figure vehicles, giving them exceptional skill with high-end paints and clear coats. Their expertise with soft European paints (BMW, Porsche, Mercedes) benefits all customers, regardless of vehicle value.",
  climate: "Fort Lauderdale's 250+ sunny days and direct ocean exposure make it one of the most paint-hostile environments in the country. UV damage, salt corrosion, and environmental etching occur faster here than almost anywhere else in Florida.",
  challenges: ["Ocean salt air is the most corrosive paint environment in Florida", "UV exposure at 250+ sunny days causes rapid oxidation and fading", "Luxury vehicle concentration demands the highest correction standards", "Soft European paint (BMW, Porsche) scratches more easily and needs careful correction", "Convertible lifestyle means more paint exposure to elements", "Premium pricing reflects the luxury market but quality is exceptional"],
  topServices: [{"n": "Premium One-Stage Correction", "p": "$300-$600", "w": "Enhancement polish with luxury-vehicle care standards"}, {"n": "Two-Stage Professional Correction", "p": "$600-$1,200", "w": "Comprehensive correction at Fort Lauderdale's professional grade"}, {"n": "Full Multi-Stage Correction", "p": "$1,200-$2,500+", "w": "Show-quality correction for luxury, exotic, and collectible vehicles"}, {"n": "Correction + Ceramic Coating", "p": "$1,000-$3,000+", "w": "The complete package - flawless correction sealed with premium ceramic protection"}],
  neighborhoods: ["Las Olas / Downtown - Premium correction specialists with exotic vehicle expertise", "Pompano Beach - Quality shops with more accessible pricing", "Weston / Pembroke Pines - Suburban shops with good general experience", "Coral Springs - Growing market with competitive correction pricing", "Deerfield Beach - Northern Broward shops with quality workmanship"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function FortLauderdalePaintCorrectionGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does paint correction cost in Fort Lauderdale?", "a": "Fort Lauderdale pricing reflects the luxury market. One-stage $300-$600, two-stage $600-$1,200, and full correction $1,200-$2,500+. Premium pricing comes with expertise in luxury vehicle paints and exceptional attention to detail."}, {"q": "Is correction different for luxury vehicles?", "a": "Yes. European luxury vehicles often have softer paint that's more prone to scratching but also easier to correct. They require different compound and pad combinations, more careful technique, and experienced hands. Fort Lauderdale shops handle these regularly."}, {"q": "How do I protect my paint from Fort Lauderdale's salt air?", "a": "Paint correction removes existing damage, then ceramic coating creates a chemical-resistant barrier against salt. Keep up with regular washing to remove salt deposits, address rock chips promptly to prevent salt reaching bare metal, and consider PPF on high-impact areas."}, {"q": "How often should I get correction in Fort Lauderdale?", "a": "With ceramic coating and proper maintenance, every 3-5 years. Without protection, Fort Lauderdale's harsh coastal environment can cause noticeable damage within 6-12 months. Annual enhancement polishing can extend the time between full corrections."}];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><Link href="/guides/paint-correction-scratch-removal" className="hover:text-[#4a90d9] transition-colors">Paint Correction</Link><span>/</span><span className="text-[#e8edf5]">{cityData.name}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">✨</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{cityData.name}, {cityData.state}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">Paint Correction & Scratch Removal in {cityData.name}: Complete Local Guide</h1>
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
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Paint Correction in {cityData.name}: What to Know</h2><p className="text-[#b8c4d9] leading-relaxed mb-6">{cityData.climate}</p><div className="space-y-3">{cityData.challenges.map((c, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><span className="text-[#4a90d9] mt-0.5">⚠️</span><span className="text-[#b8c4d9]">{c}</span></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Popular Correction Services in {cityData.name}</h2><div className="space-y-4">{cityData.topServices.map((s, i) => (<div key={i} className="p-6 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="flex justify-between items-start mb-2"><h3 className="text-lg font-medium text-[#e8edf5]">{s.n}</h3><span className="text-[#4a90d9] font-medium">{s.p}</span></div><p className="text-[#6b7a94]">{s.w}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Correction Shops by Neighborhood</h2><div className="space-y-3">{cityData.neighborhoods.map((h, i) => (<div key={i} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><p className="text-[#b8c4d9]">{h}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} Paint Correction FAQ</h2><div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{f.q}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === i && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{f.a}</p></div>)}</div>))}</div></div>
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10"><h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Paint Correction Specialists in {cityData.name}</h3><p className="text-[#6b7a94] mb-6">Browse top-rated paint correction and detailing specialists in the {cityData.name} area.</p><Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link></div>
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10"><h3 className="text-lg font-medium text-[#e8edf5] mb-4">Paint Correction Guides for Other Florida Cities</h3><div className="flex flex-wrap gap-3">{otherCities.map((c) => (<Link key={c.slug} href={`/guides/paint-correction-scratch-removal/${c.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{c.name}</Link>))}</div></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

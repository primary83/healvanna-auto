"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Tampa",
  state: "FL",
  description: "Tampa's detailing scene has grown significantly, with several shops specializing in correction and ceramic coating packages. The bay area's diverse vehicle market means you'll find specialists for everything from daily drivers to weekend sports cars.",
  averageCost: "$200-$1,800+",
  popularService: "Correction + ceramic coating combos",
  localTip: "Tampa's detailing scene has grown significantly, with several shops specializing in correction and ceramic coating packages. The bay area's diverse vehicle market means you'll find specialists for everything from daily drivers to weekend sports cars.",
  climate: "Tampa's 244 sunny days and bay-area salt air create unique paint challenges. The combination of UV damage, salt corrosion around chips, and water spots from both rain and bay moisture keeps correction specialists busy year-round.",
  challenges: ["Bay salt air accelerates paint degradation around existing chips and scratches", "UV exposure causes faster oxidation than inland Florida cities", "Summer storms leave water spots that etch quickly in Tampa's heat", "Bridge and causeway driving exposes paint to concentrated salt spray", "Growing traffic means more opportunities for rock chips and road debris", "Beach trips bring sand that scratches paint if washing technique is poor"],
  topServices: [{"n": "One-Stage Enhancement Polish", "p": "$200-$400", "w": "Light correction and gloss enhancement for maintained vehicles"}, {"n": "Two-Stage Correction", "p": "$400-$750", "w": "Comprehensive swirl and scratch removal - Tampa's most requested service"}, {"n": "Multi-Stage Correction", "p": "$750-$1,800", "w": "Maximum correction for severely damaged or show-quality prep"}, {"n": "Correction + Ceramic Package", "p": "$600-$1,800", "w": "The smart combo - correct then protect against Tampa Bay's harsh conditions"}],
  neighborhoods: ["South Tampa - Premium correction shops with diverse vehicle experience", "Brandon / Riverview - Competitive pricing with quality workmanship", "Wesley Chapel / New Tampa - Newer shops with modern techniques and equipment", "St. Petersburg - Several quality correction specialists across the bay", "Clearwater - Shops experienced with salt-air paint damage correction"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function TampaPaintCorrectionGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does paint correction cost in Tampa?", "a": "Tampa offers competitive pricing. One-stage $200-$400, two-stage $400-$750, and full correction $750-$1,800. Correction + ceramic coating packages run $600-$1,800 and offer the best long-term value for bay-area vehicles."}, {"q": "Does Tampa's salt air affect my car's paint?", "a": "Yes, particularly around existing chips and scratches where salt can reach bare metal. Salt air also accelerates clear coat degradation over time. Regular washing, prompt chip repair, and ceramic coating provide the best defense."}, {"q": "What's the best paint protection for Tampa Bay vehicles?", "a": "Paint correction followed by ceramic coating is the gold standard. The correction removes existing damage, and ceramic coating provides UV protection, hydrophobic properties (great for Tampa's rain), and chemical resistance against salt and contaminants."}, {"q": "How do I find a good correction specialist in Tampa?", "a": "Look for shops with before/after photos taken under correction lighting, paint depth gauge usage, and ceramic coating certifications. South Tampa and Brandon have the strongest concentration of quality shops. Ask to see their portfolio and read Google reviews specifically mentioning correction work."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">244 sunny days/yr</div></div>
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

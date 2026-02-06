"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Miami",
  state: "FL",
  description: "Miami's luxury car market means many detailers here are among the best paint correction specialists in the Southeast. Even if you don't drive a Ferrari, you benefit from their expertise and standards. Ask to see their portfolio under correction lighting.",
  averageCost: "$250-$2,500+",
  popularService: "Full correction + ceramic coating",
  localTip: "Miami's luxury car market means many detailers here are among the best paint correction specialists in the Southeast. Even if you don't drive a Ferrari, you benefit from their expertise and standards. Ask to see their portfolio under correction lighting.",
  climate: "Miami's 248 sunny days and intense UV cause faster paint oxidation and damage than almost anywhere else in the country. Love bugs, bird droppings, and hard water spots are year-round threats that create constant demand for correction services.",
  challenges: ["Intense UV causes faster oxidation and fading, especially on dark colors", "Love bug acid etches clear coat within 24-48 hours in Miami's heat", "Hard water from sprinklers and rain leaves mineral deposits that etch paint", "Salt air accelerates deterioration around existing chips and scratches", "Automatic car washes are popular but cause the swirl marks correction removes", "High demand means top shops may have 1-3 week wait times"],
  topServices: [{"n": "One-Stage Enhancement Polish", "p": "$250-$500", "w": "Light swirl removal and gloss enhancement for well-maintained vehicles"}, {"n": "Two-Stage Paint Correction", "p": "$500-$1,000", "w": "Comprehensive correction removing 80-90% of defects - Miami's most popular service"}, {"n": "Full Multi-Stage Correction", "p": "$1,000-$2,500+", "w": "Show-quality correction for Miami's luxury and exotic vehicle market"}, {"n": "Correction + Ceramic Coating Package", "p": "$800-$2,500", "w": "The ultimate combo - correct the paint then lock in the results with ceramic protection"}],
  neighborhoods: ["Wynwood / Design District - Premium correction specialists with exotic car portfolios", "Doral - Multiple established shops with competitive pricing and quality work", "Hialeah - Value-focused shops with experienced polishing technicians", "Brickell / Downtown - High-end detailers catering to luxury vehicle owners", "Kendall - Good options serving South Miami-Dade's diverse vehicle market"]
};

const otherCities = [{"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function MiamiPaintCorrectionGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does paint correction cost in Miami?", "a": "One-stage enhancement runs $250-$500, two-stage correction $500-$1,000, and full multi-stage correction $1,000-$2,500+. Miami pricing is slightly above state average but the quality and expertise with luxury vehicles is exceptional. Correction + ceramic coating packages offer the best value at $800-$2,500."}, {"q": "How often do Miami cars need paint correction?", "a": "With ceramic coating and proper washing, every 3-5 years. Without protection, Miami's UV and environmental contaminants can create visible swirl marks and oxidation within 6-12 months. The sun is your paint's biggest enemy here."}, {"q": "What causes the most paint damage in Miami?", "a": "Automatic car washes (swirl marks), love bugs (acid etching), bird droppings (acid etching), sprinkler water spots (mineral etching), and UV oxidation. Most of these are preventable with proper washing, prompt contaminant removal, and ceramic coating."}, {"q": "Should I get correction before ceramic coating in Miami?", "a": "Absolutely yes. Ceramic coating locks in whatever is underneath it. Getting corrected first means the coating seals over flawless paint. Most quality ceramic coating installers in Miami include at least a one-stage correction in their prep process."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">248 sunny days/yr</div></div>
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

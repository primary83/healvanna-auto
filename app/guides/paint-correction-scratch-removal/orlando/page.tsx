"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Orlando",
  state: "FL",
  description: "Orlando's competitive detailing market means excellent value for paint correction. Many shops offer correction + protection packages specifically designed for the daily driver who wants great-looking paint without show-car pricing.",
  averageCost: "$200-$1,800+",
  popularService: "Two-stage correction + sealant",
  localTip: "Orlando's competitive detailing market means excellent value for paint correction. Many shops offer correction + protection packages specifically designed for the daily driver who wants great-looking paint without show-car pricing.",
  climate: "Orlando's 233 sunny days, daily thunderstorms, and love bug seasons create a constant cycle of paint contamination. The good news is Orlando has a growing community of skilled correction specialists offering competitive pricing.",
  challenges: ["Love bug seasons cause heavy acid etching that requires professional correction", "Daily thunderstorms leave water spots that etch in Orlando's sun", "Theme park parking exposes paint to 8+ hours of UV and environmental fallout", "I-4 construction debris causes rock chips and paint damage", "Pollen season deposits acidic pollen that can etch clear coat", "Many Orlando drivers use automatic washes that create swirl marks"],
  topServices: [{"n": "One-Stage Enhancement", "p": "$200-$400", "w": "Affordable swirl removal and gloss boost for daily drivers"}, {"n": "Two-Stage Correction", "p": "$400-$750", "w": "Orlando's sweet spot - comprehensive correction at competitive pricing"}, {"n": "Full Correction", "p": "$750-$1,800", "w": "Maximum defect removal for show-quality results"}, {"n": "Correction + Ceramic Package", "p": "$600-$1,800", "w": "Correct and protect in one service - the best value proposition"}],
  neighborhoods: ["Winter Park - Quality detailing shops with strong correction portfolios", "Colonial Drive area - Several established shops with competitive pricing", "Sanford / Lake Mary - Growing market with newer shops and good work", "Kissimmee - Budget-friendly options south of Orlando", "Altamonte Springs - Established shops with experienced correction technicians"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function OrlandoPaintCorrectionGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does paint correction cost in Orlando?", "a": "Orlando offers great value. One-stage runs $200-$400, two-stage $400-$750, and full correction $750-$1,800. That's 15-20% less than South Florida with comparable quality. Package deals with ceramic coating provide the best overall value."}, {"q": "How do I prevent love bug damage to my paint?", "a": "Apply ceramic coating or paint sealant for a sacrificial barrier. During love bug season, wash bug remains off within 24 hours. Keep a quick detailer spray and microfiber in your car for immediate removal. Once etching occurs, paint correction is the only fix."}, {"q": "Is paint correction worth it for a daily driver?", "a": "Yes, especially paired with ceramic coating. A two-stage correction ($400-$750) removes years of swirl marks and scratches, and ceramic coating ($300-$800) protects the results for 2-5 years. Your car looks dramatically better and is easier to maintain."}, {"q": "How long does paint correction take?", "a": "One-stage: 3-6 hours. Two-stage: 6-12 hours. Full correction: 12-20+ hours. Quality correction is time-intensive - be wary of shops promising full correction in a few hours. Most shops keep your vehicle for 1-2 days for thorough correction."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">233 sunny days/yr</div></div>
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

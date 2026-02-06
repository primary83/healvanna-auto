"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Jacksonville",
  state: "FL",
  description: "Jacksonville offers the best paint correction value in Florida. The growing detailing community means competitive pricing without sacrificing quality. Great market for first-time correction customers who want to see what their paint can really look like.",
  averageCost: "$175-$1,500+",
  popularService: "Two-stage correction + sealant",
  localTip: "Jacksonville offers the best paint correction value in Florida. The growing detailing community means competitive pricing without sacrificing quality. Great market for first-time correction customers who want to see what their paint can really look like.",
  climate: "Jacksonville's 221 sunny days and slightly milder North Florida climate are somewhat easier on paint than South Florida. However, Atlantic salt air, pine sap, and pollen create their own correction-worthy challenges.",
  challenges: ["Atlantic coast salt air affects vehicles in beach communities", "Pine sap bonds to clear coat and requires careful removal before correction", "Heavy pollen seasons leave acidic deposits that can etch paint", "Long commutes across Jacksonville's sprawl mean more road debris exposure", "Fewer premium correction specialists than larger metros - research shops carefully", "Love bug season still affects North Florida, creating etching that needs correction"],
  topServices: [{"n": "One-Stage Enhancement Polish", "p": "$175-$350", "w": "Florida's best-value enhancement polish for daily drivers"}, {"n": "Two-Stage Correction", "p": "$350-$650", "w": "Comprehensive correction at Jacksonville's competitive pricing"}, {"n": "Full Multi-Stage Correction", "p": "$650-$1,500", "w": "Maximum correction results at North Florida's best value"}, {"n": "Correction + Ceramic Package", "p": "$500-$1,500", "w": "Complete correction and protection at prices 20-30% below South Florida"}],
  neighborhoods: ["San Marco / Riverside - Quality correction specialists with attention to detail", "Southside / Town Center - Convenient shops with good detailing reputations", "Jacksonville Beach - Coastal shops experienced with salt-damaged paint", "Orange Park / Fleming Island - Competitive suburban pricing", "Mandarin - Growing area with newer shops competing on quality and value"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}];

export default function JacksonvillePaintCorrectionGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does paint correction cost in Jacksonville?", "a": "Jacksonville offers Florida's best correction value. One-stage $175-$350, two-stage $350-$650, and full correction $650-$1,500. That's typically 20-30% less than South Florida. Correction + ceramic packages run $500-$1,500."}, {"q": "How do I deal with pine sap damage?", "a": "Pine sap must be carefully removed before correction using isopropyl alcohol or a dedicated sap remover. Never try to polish over sap - it will spread and scratch. Once removed, the area underneath often has etching that paint correction can address."}, {"q": "Is the correction market growing in Jacksonville?", "a": "Yes, significantly. Jacksonville's growing population and car enthusiast community are driving demand for quality correction services. More skilled detailers are entering the market, which benefits consumers through competition and better pricing."}, {"q": "What's the best investment for paint care in Jacksonville?", "a": "Two-stage correction ($350-$650) plus ceramic coating ($300-$600) gives you the best long-term value. Total investment of $650-$1,250 protects your paint for 2-5 years. Jacksonville's milder climate means corrections last longer than in South Florida."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">221 sunny days/yr</div></div>
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

"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Orlando",
  state: "FL",
  description: "Orlando's competitive protection market means excellent package deals for new car owners. Several shops offer one-stop new car packages that handle PPF, ceramic, and tint in a single drop-off, making the process convenient for busy families and commuters.",
  averageCost: "$1,200-$8,000+",
  popularService: "Ceramic coating + tint packages",
  localTip: "Orlando's competitive protection market means excellent package deals for new car owners. Several shops offer one-stop new car packages that handle PPF, ceramic, and tint in a single drop-off, making the process convenient for busy families and commuters.",
  climate: "Orlando's 233 sunny days, daily thunderstorms, and love bug seasons create a strong case for new car protection. The heavy I-4 commute traffic also increases rock chip exposure on front-end surfaces.",
  challenges: ["I-4 commute traffic creates heavy rock chip exposure on front bumper and hood", "Daily thunderstorms leave water spots that etch unprotected paint in sun", "Love bug seasons cause acid etching that protection prevents", "Theme park parking means 8+ hours of UV exposure regularly", "Dealer protection upsells are aggressive at Orlando dealerships", "Growing demand means plan ahead - popular shops book 1-3 weeks out"],
  topServices: [{"n": "Essential Package (Tint + Basic Ceramic)", "p": "$400-$700", "w": "Budget-friendly new car protection at Orlando's competitive prices"}, {"n": "Smart Package (Ceramic + Tint + Partial PPF)", "p": "$1,500-$3,000", "w": "The best value new car package in Central Florida"}, {"n": "Premium Package (Full-Front PPF + Ceramic + Tint)", "p": "$3,000-$5,000", "w": "Comprehensive protection for Orlando's highway commuters"}, {"n": "Full Protection Package (Full PPF + Ceramic + Tint)", "p": "$5,000-$8,000+", "w": "Maximum coverage for vehicles you plan to keep long-term"}],
  neighborhoods: ["Winter Park - Quality protection shops with thorough attention to detail", "Colonial Drive corridor - Multiple PPF and ceramic shops with good pricing", "Sanford / Lake Mary - Growing area with competitive new car package deals", "Kissimmee - Budget-friendly options south of the metro area", "Altamonte Springs - Established shops with experienced installation teams"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function OrlandoNewCarGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does new car protection cost in Orlando?", "a": "Orlando offers great value. Essential packages start at $400-$700, the popular Smart Package runs $1,500-$3,000, and premium full-coverage runs $5,000-$8,000+. Pricing is typically 10-15% less than South Florida with comparable product quality."}, {"q": "Is PPF worth it for I-4 commuting?", "a": "Absolutely. I-4 is one of the most debris-heavy highways in Florida. At minimum, protect the front bumper ($500-$800) and hood ($600-$1,200). A full-front PPF package ($1,500-$3,000) prevents rock chips that cost $150-$300+ each to repair."}, {"q": "Can I get everything done at one Orlando shop?", "a": "Yes - several Orlando shops offer complete new car packages. They coordinate tint, PPF, and ceramic coating in the right order during a single drop-off (typically 3-5 days). This is more convenient and usually 10-20% less than booking services separately."}, {"q": "How long does a full protection package take?", "a": "Window tint: 2-4 hours. Partial PPF: 1-2 days. Full-front PPF: 2-3 days. Ceramic coating: 1-2 days. A full package with all services typically takes 3-5 business days. Many shops offer loaner vehicles or shuttle service."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">233 sunny days/yr</div></div>
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

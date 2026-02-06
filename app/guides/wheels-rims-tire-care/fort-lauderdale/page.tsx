"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Fort Lauderdale",
  state: "FL",
  description: "Fort Lauderdale's luxury market means many shops carry premium wheel brands and have experience with exotic vehicles. Even for standard vehicles, you benefit from their higher standards of fitment and installation quality.",
  averageCost: "$800-$8,000+",
  popularStyle: "Premium forged & concave",
  localTip: "Fort Lauderdale's luxury market means many shops carry premium wheel brands and have experience with exotic vehicles. Even for standard vehicles, you benefit from their higher standards of fitment and installation quality.",
  climate: "Fort Lauderdale's 250+ sunny days and direct ocean exposure create the most challenging conditions for wheels in Florida. Salt air corrosion and UV damage are constant threats that require proactive protection.",
  challenges: ["Direct ocean salt air is the most corrosive in Florida for wheel finishes", "UV exposure can fade and yellow certain wheel coatings", "Luxury vehicle wheels are prime theft targets - use quality wheel locks", "Tight parallel parking in beach areas increases curb rash risk", "Higher market pricing reflects the luxury vehicle concentration", "Sand from beach trips requires careful washing to avoid scratching"],
  topServices: [{"n": "Premium Wheel & Tire Package", "p": "$2,000-$8,000+", "w": "High-end wheel selection matching Fort Lauderdale's luxury market"}, {"n": "Wheel Refinishing & Restoration", "p": "$175-$350/wheel", "w": "Expert restoration for salt-damaged or curbed luxury wheels"}, {"n": "Ceramic Coating for Wheels", "p": "$150-$400", "w": "Critical protection against Fort Lauderdale's ocean salt air"}, {"n": "Custom Wheel Fitment Consultation", "p": "$0-$100", "w": "Professional fitment verification for proper offset and clearance"}],
  neighborhoods: ["Las Olas / Downtown - Premium shops with exotic vehicle experience", "Pompano Beach - Quality options with more accessible pricing", "Weston / Pembroke Pines - Suburban shops with good general selection", "Coral Springs - Competitive pricing with quality service", "Deerfield Beach - Northern Broward options with diverse inventory"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function FortLauderdaleWheelsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much do premium wheels cost in Fort Lauderdale?", "a": "Fort Lauderdale's luxury market supports high-end options. Quality flow-formed wheels run $1,000-$2,500/set, premium forged wheels $3,000-$12,000+. Complete packages with premium tires typically start at $2,000 and can exceed $15,000 for exotic vehicles."}, {"q": "How do I protect wheels from ocean salt in Fort Lauderdale?", "a": "Professional ceramic coating is essential for Fort Lauderdale. Clean wheels at least weekly - more if you're near the Intracoastal or beach. Use pH-neutral wheel cleaners only. Rinse thoroughly after any beach trips. Inspect for corrosion or finish degradation regularly."}, {"q": "Do Fort Lauderdale shops specialize in luxury vehicles?", "a": "Many do. The concentration of BMW, Mercedes, Porsche, and exotic vehicles in Fort Lauderdale means several shops specialize in proper fitment for these brands. They stock correct bolt patterns, offsets, and hub-centric components. Worth the premium for peace of mind."}, {"q": "What about wheel theft in Fort Lauderdale?", "a": "Premium wheels are unfortunately theft targets. Invest in quality wheel locks (not the cheap ones that come free). Consider aftermarket lug nuts that require a unique key. Park in well-lit, secure areas when possible. Some insurance policies cover wheel theft - check yours."}];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><Link href="/guides/wheels-rims-tire-care" className="hover:text-[#4a90d9] transition-colors">Wheels & Tires</Link><span>/</span><span className="text-[#e8edf5]">{cityData.name}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">🛞</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{cityData.name}, {cityData.state}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">Wheels, Rims & Tire Care in {cityData.name}: Complete Local Guide</h1>
          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{cityData.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Average Cost</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.averageCost}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Popular Style</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.popularStyle}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">250 sunny days/yr</div></div>
          </div>
        </div>
      </section>
      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 p-6 rounded-2xl bg-[#4a90d9]/5 border border-[#4a90d9]/20"><h3 className="text-lg font-medium text-[#4a90d9] mb-2">💡 Local Tip</h3><p className="text-[#b8c4d9]">{cityData.localTip}</p></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Wheels & Tires in {cityData.name}: What to Know</h2><p className="text-[#b8c4d9] leading-relaxed mb-6">{cityData.climate}</p><div className="space-y-3">{cityData.challenges.map((c, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><span className="text-[#4a90d9] mt-0.5">⚠️</span><span className="text-[#b8c4d9]">{c}</span></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Popular Wheel & Tire Services in {cityData.name}</h2><div className="space-y-4">{cityData.topServices.map((s, i) => (<div key={i} className="p-6 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="flex justify-between items-start mb-2"><h3 className="text-lg font-medium text-[#e8edf5]">{s.n}</h3><span className="text-[#4a90d9] font-medium">{s.p}</span></div><p className="text-[#6b7a94]">{s.w}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Wheel & Tire Shops by Neighborhood</h2><div className="space-y-3">{cityData.neighborhoods.map((h, i) => (<div key={i} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><p className="text-[#b8c4d9]">{h}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} Wheels & Tires FAQ</h2><div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{f.q}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === i && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{f.a}</p></div>)}</div>))}</div></div>
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10"><h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Wheel & Tire Shops in {cityData.name}</h3><p className="text-[#6b7a94] mb-6">Browse top-rated wheel and tire specialists in the {cityData.name} area.</p><Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link></div>
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10"><h3 className="text-lg font-medium text-[#e8edf5] mb-4">Wheel & Tire Guides for Other Florida Cities</h3><div className="flex flex-wrap gap-3">{otherCities.map((c) => (<Link key={c.slug} href={`/guides/wheels-rims-tire-care/${c.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{c.name}</Link>))}</div></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

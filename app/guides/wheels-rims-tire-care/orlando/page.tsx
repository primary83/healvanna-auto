"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Orlando",
  state: "FL",
  description: "Orlando's car meet scene is wheel-focused. Check out local meets before buying to see what styles look best on vehicles similar to yours. Many local wheel shops sponsor events and offer meet discounts.",
  averageCost: "$600-$5,000+",
  popularStyle: "Flow-formed sport wheels",
  localTip: "Orlando's car meet scene is wheel-focused. Check out local meets before buying to see what styles look best on vehicles similar to yours. Many local wheel shops sponsor events and offer meet discounts.",
  climate: "Orlando's 233 sunny days, afternoon rain, and love bug seasons all affect wheel and tire maintenance. Good wet-rated tires are essential for the daily summer thunderstorms.",
  challenges: ["Daily afternoon thunderstorms demand tires with excellent wet traction", "Love bug residue can stain wheel finishes - clean promptly", "I-4 construction debris increases risk of tire damage", "Long theme park parking means extended heat exposure for tires", "Pollen season coats wheels and can stain certain finishes", "Growing traffic means more brake dust buildup during commutes"],
  topServices: [{"n": "Wheel & Tire Package", "p": "$1,000-$4,000", "w": "Complete upgrade with Central Florida's competitive pricing"}, {"n": "Tire Replacement & Service", "p": "$400-$1,200", "w": "Quality tire selection focused on wet performance for Orlando's rain"}, {"n": "Wheel Refinishing", "p": "$150-$250/wheel", "w": "Restore damaged or faded wheels to like-new condition"}, {"n": "TPMS Service & Calibration", "p": "$30-$80/sensor", "w": "Proper tire pressure monitoring for Orlando's temperature swings"}],
  neighborhoods: ["Winter Park - Quality wheel shops with enthusiast-focused service", "Colonial Drive corridor - Several tire and wheel shops with good inventory", "Sanford / Lake Mary - Growing area with competitive pricing", "Kissimmee - Budget-friendly options south of Orlando", "Apopka / Ocoee - West side shops with fast turnaround"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function OrlandoWheelsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much do wheels and tires cost in Orlando?", "a": "Orlando offers competitive pricing. Budget wheel and tire packages start around $700-$1,200. Quality flow-formed wheels with good tires run $1,500-$3,000. Premium setups start at $3,000+. Pricing is typically 10-15% less than South Florida."}, {"q": "What tires are best for Orlando's rain?", "a": "For Orlando's daily afternoon thunderstorms, prioritize tires with strong wet ratings. Michelin Pilot Sport All Season 4, Continental ExtremeContact DWS06+, and Bridgestone Turanza all excel in wet conditions. Never run bald or near-bald tires in Orlando."}, {"q": "Are there good wheel shops near Orlando theme parks?", "a": "Several shops along I-Drive and in Kissimmee serve the area. For quality wheel upgrades, the shops in Winter Park and along Colonial Drive tend to have better selection and more enthusiast-focused service."}, {"q": "How often should I check tire pressure in Orlando?", "a": "Monthly at minimum, and always in the morning before driving. Orlando's summer heat can increase tire pressure by 3-5 PSI above your cold setting. Overinflated tires have reduced contact patch and worse wet traction - dangerous in afternoon storms."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">233 sunny days/yr</div></div>
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

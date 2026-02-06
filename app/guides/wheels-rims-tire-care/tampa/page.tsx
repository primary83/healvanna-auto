"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Tampa",
  state: "FL",
  description: "Tampa's diverse vehicle market means shops cater to everything from lifted trucks to lowered sport cars. The truck and Jeep community is particularly strong, so all-terrain tire and wheel selection is excellent.",
  averageCost: "$600-$5,000+",
  popularStyle: "All-terrain & sport wheels",
  localTip: "Tampa's diverse vehicle market means shops cater to everything from lifted trucks to lowered sport cars. The truck and Jeep community is particularly strong, so all-terrain tire and wheel selection is excellent.",
  climate: "Tampa's 244 sunny days, bay salt air, and summer storms affect both wheel finish longevity and tire performance. Quality wet-rated tires and wheel protection are smart investments.",
  challenges: ["Bay area salt air degrades wheel finishes faster than inland areas", "Causeway bridge driving exposes wheels to concentrated salt spray", "Summer storms create hydroplaning risk with worn tires", "Beach sand from Clearwater can scratch wheel surfaces during washing", "Growing traffic congestion increases brake dust accumulation", "Road construction debris on major corridors risks tire damage"],
  topServices: [{"n": "Truck/SUV Wheel & Tire Package", "p": "$1,200-$5,000", "w": "Tampa's strong truck market drives excellent selection and pricing"}, {"n": "Sport Wheel Upgrade", "p": "$800-$3,500", "w": "Performance-focused wheel and tire packages for sport cars and sedans"}, {"n": "Wheel Ceramic Coating", "p": "$80-$250", "w": "Protection against Tampa Bay's salt air and brake dust"}, {"n": "Tire Rotation & Alignment", "p": "$100-$200", "w": "Essential maintenance for even tire wear and proper handling"}],
  neighborhoods: ["South Tampa - Premium shops with sport and luxury vehicle focus", "Brandon / Riverview - Competitive pricing with large truck/SUV inventory", "Wesley Chapel - Growing area with newer shops and good service", "St. Petersburg - Quality shops across the bay with diverse inventory", "Clearwater - Coastal shops understanding of salt-air wheel challenges"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function TampaWheelsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much do wheels cost in Tampa?", "a": "Tampa offers great value. Budget wheel sets start at $400-$800, flow-formed sport wheels run $800-$2,500, and premium forged options start at $2,000+. Truck and SUV wheels with all-terrain tires are competitively priced at $1,200-$4,000 for a complete package."}, {"q": "What about salt air damage to wheels in Tampa?", "a": "Tampa Bay's salt air is milder than Miami's ocean air but still affects wheels. Ceramic coating provides the best protection. Clean wheels weekly, especially after crossing bay bridges. Avoid leaving brake dust mixed with salt deposits for extended periods."}, {"q": "Where are the best tire shops in Tampa?", "a": "South Tampa has premium options, Brandon and Riverview offer the best value. For truck-specific needs, shops along US-301 and in the Brandon area have the largest selection. For performance tires, shops near the Westshore area cater to sport car owners."}, {"q": "How often should I rotate tires in Tampa?", "a": "Every 5,000-7,500 miles. Tampa's highway driving tends to wear front tires faster (especially on FWD vehicles). Regular rotation extends total tire life by 20-30%, saving you money long-term. Many shops offer free rotation with tire purchase."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">244 sunny days/yr</div></div>
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

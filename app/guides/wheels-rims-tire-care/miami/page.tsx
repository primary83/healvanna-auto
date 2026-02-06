"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Miami",
  state: "FL",
  description: "Miami's exotic car scene means many wheel shops stock high-end brands like Vossen, HRE, and ADV.1. Even if you drive a regular car, these shops often have the best fitment knowledge and installation quality.",
  averageCost: "$800-$8,000+",
  popularStyle: "Deep dish & concave styles",
  localTip: "Miami's exotic car scene means many wheel shops stock high-end brands like Vossen, HRE, and ADV.1. Even if you drive a regular car, these shops often have the best fitment knowledge and installation quality.",
  climate: "Miami's 248 sunny days, salt air, and frequent rain create the toughest conditions for wheels in Florida. Ceramic coating and regular cleaning are essential for maintaining wheel appearance.",
  challenges: ["Salt air corrodes bare metal and attacks wheel finishes - ceramic coating is essential", "Pothole-damaged roads in some areas threaten low-profile tires", "Extreme heat increases tire pressure - check monthly in summer", "Brake dust accumulates faster in stop-and-go Miami traffic", "Love bug season residue can stain wheel finishes if left too long", "Luxury wheel theft is a concern - consider wheel locks"],
  topServices: [{"n": "Custom Wheel & Tire Package", "p": "$1,500-$8,000+", "w": "Complete upgrade with fitment verification for Miami's style-conscious market"}, {"n": "Wheel Ceramic Coating", "p": "$100-$300", "w": "Essential protection against Miami's salt air and brake dust"}, {"n": "Curb Rash Repair", "p": "$75-$175/wheel", "w": "Fix cosmetic wheel damage from Miami's tight parking situations"}, {"n": "Tire Service (Mount/Balance/Align)", "p": "$150-$300", "w": "Professional installation with proper torque specs and alignment"}],
  neighborhoods: ["Wynwood / Design District - Premium wheel shops with exotic car experience", "Doral - Multiple wheel and tire shops with competitive pricing", "Hialeah - Great value options with large inventory selections", "Brickell / Downtown - High-end shops catering to luxury vehicle owners", "Kendall - Good selection of shops serving south Miami-Dade"]
};

const otherCities = [{"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function MiamiWheelsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much do aftermarket wheels cost in Miami?", "a": "Miami's luxury market means a wide price range. Budget cast wheels start at $400-$800/set, quality flow-formed run $1,000-$2,500, and premium forged wheels (popular in Miami) range from $3,000-$12,000+. Add $400-$1,500 for quality tires."}, {"q": "What wheel brands are popular in Miami?", "a": "Miami's scene favors premium brands: Vossen, HRE, ADV.1, Rohana, and Ferrada for the luxury crowd. For value-oriented buyers, ESR, Niche, and TSW offer great looks at reasonable prices. Gloss black and brushed titanium finishes are trending."}, {"q": "How do I protect wheels from Miami's salt air?", "a": "Ceramic coating is the #1 recommendation. Clean wheels weekly to remove salt deposits. Avoid harsh wheel cleaners that strip protective coatings. Consider a dedicated wheel sealant between ceramic coating maintenance. Rinse wheels after beach trips."}, {"q": "Where can I get wheels repaired in Miami?", "a": "Several Miami shops specialize in wheel repair and refinishing. Expect $75-$175 per wheel for curb rash repair, $150-$300 for full refinishing. Shops in Doral and Hialeah tend to offer the most competitive pricing."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">248 sunny days/yr</div></div>
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

"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Tampa",
  state: "FL",
  description: "Tampa's bay-area humidity makes mold prevention a top priority. Many Tampa detailing shops offer humidity-specific interior treatments and can advise on keeping your interior mold-free year-round.",
  averageCost: "$60-$400+",
  popularService: "Leather conditioning & mold prevention",
  localTip: "Tampa's bay-area humidity makes mold prevention a top priority. Many Tampa detailing shops offer humidity-specific interior treatments and can advise on keeping your interior mold-free year-round.",
  climate: "Tampa's 244 sunny days combined with bay-area humidity create a unique challenge for interiors - extreme heat that dries leather while humidity promotes mold. Both require active management.",
  challenges: ["Bay-area humidity promotes mold growth even in well-maintained vehicles", "Summer heat combined with humidity creates a harsh leather environment", "Beach trips to Clearwater bring sand and salt moisture into interiors", "Causeway commutes in rain mean frequently wet occupants", "Growing traffic means more time in hot cars, increasing wear", "Hard water spots from afternoon storms affect interior glass"],
  topServices: [{"n": "Full Interior Detail", "p": "$100-$275", "w": "Comprehensive cleaning and conditioning for Tampa Bay conditions"}, {"n": "Anti-Mold Interior Treatment", "p": "$100-$250", "w": "Specialized treatment for Tampa's humidity-related interior issues"}, {"n": "Leather Care Package", "p": "$60-$120", "w": "Cleaning and conditioning to combat heat and humidity damage"}, {"n": "Fabric Cleaning & Protection", "p": "$80-$200", "w": "Deep clean and protective coating for cloth interiors"}],
  neighborhoods: ["South Tampa - Premium detail shops with experienced technicians", "Brandon / Riverview - Competitive pricing with quality work", "Wesley Chapel / New Tampa - Growing area with newer shops", "St. Petersburg - Quality options across the bay", "Clearwater - Shops experienced with beach-related interior issues"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function TampaLeatherGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How do I prevent mold in Tampa's humidity?", "a": "Tampa's bay-area humidity is higher than most inland Florida cities. Run AC regularly (even when not driving, idle for 10 minutes weekly), use silica gel moisture absorbers, never leave windows cracked in rain, and address any water intrusion immediately. Anti-mold interior treatments from detailing shops provide extra protection."}, {"q": "How much does interior detailing cost in Tampa?", "a": "Tampa offers competitive pricing. Basic interior clean runs $60-$120, full detail $100-$275, and deep restoration $250-$400. Mold-specific treatments add $100-$250. Many shops offer package deals with exterior services."}, {"q": "How often should I condition leather in Tampa?", "a": "Every 2-4 weeks. Tampa's combination of heat and humidity is paradoxical - heat dries leather while humidity promotes mold. Regular conditioning keeps leather hydrated, and a proper conditioner can include anti-microbial properties."}, {"q": "What about sand damage from Clearwater beach trips?", "a": "Keep a small brush or hand vacuum in the car. Brush off sand before sitting, and vacuum seats and carpets after every beach trip. Sand acts like fine sandpaper on leather and fabric. A seat towel is an inexpensive preventive measure."}];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><Link href="/guides/leather-upholstery-care" className="hover:text-[#4a90d9] transition-colors">Leather & Upholstery</Link><span>/</span><span className="text-[#e8edf5]">{cityData.name}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">🛋️</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{cityData.name}, {cityData.state}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">Leather & Upholstery Care in {cityData.name}: Complete Local Guide</h1>
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
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Interior Care in {cityData.name}: What to Know</h2><p className="text-[#b8c4d9] leading-relaxed mb-6">{cityData.climate}</p><div className="space-y-3">{cityData.challenges.map((c, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><span className="text-[#4a90d9] mt-0.5">⚠️</span><span className="text-[#b8c4d9]">{c}</span></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Popular Interior Services in {cityData.name}</h2><div className="space-y-4">{cityData.topServices.map((s, i) => (<div key={i} className="p-6 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="flex justify-between items-start mb-2"><h3 className="text-lg font-medium text-[#e8edf5]">{s.n}</h3><span className="text-[#4a90d9] font-medium">{s.p}</span></div><p className="text-[#6b7a94]">{s.w}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Interior Care Shops by Neighborhood</h2><div className="space-y-3">{cityData.neighborhoods.map((h, i) => (<div key={i} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><p className="text-[#b8c4d9]">{h}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} Interior Care FAQ</h2><div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{f.q}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === i && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{f.a}</p></div>)}</div>))}</div></div>
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10"><h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Interior Care Shops in {cityData.name}</h3><p className="text-[#6b7a94] mb-6">Browse top-rated interior detailing specialists in the {cityData.name} area.</p><Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link></div>
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10"><h3 className="text-lg font-medium text-[#e8edf5] mb-4">Interior Care Guides for Other Florida Cities</h3><div className="flex flex-wrap gap-3">{otherCities.map((c) => (<Link key={c.slug} href={`/guides/leather-upholstery-care/${c.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{c.name}</Link>))}</div></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Tampa",
  state: "FL",
  description: "Tampa's audio scene blends practical upgrades with serious bass culture. The truck and Jeep community is particularly active, and several shops specialize in audio systems for lifted trucks and open-top vehicles that need to overcome wind and road noise.",
  averageCost: "$150-$4,000+",
  popularService: "Full system builds & bass",
  localTip: "Tampa's audio scene blends practical upgrades with serious bass culture. The truck and Jeep community is particularly active, and several shops specialize in audio systems for lifted trucks and open-top vehicles that need to overcome wind and road noise.",
  climate: "Tampa's bay-area driving with bridges, highways, and coastal roads creates diverse audio challenges. Quality audio cuts through road noise on causeway crossings and makes the frequent stop-and-go traffic more enjoyable.",
  challenges: ["Bay bridge crossings create wind noise that challenges weaker audio systems", "Salt air from the bay can corrode exposed speaker terminals and wiring", "Summer storms create road noise that competes with audio playback", "Truck and Jeep owners need higher-output systems to overcome wind noise", "Growing traffic congestion increases daily listening time", "Beach-area parking exposes systems to sand and salt moisture"],
  topServices: [{"n": "Truck / Jeep Audio Package", "p": "$500-$2,500", "w": "Higher-output systems designed for Tampa's popular truck and Jeep market"}, {"n": "Speaker + Amp Upgrade", "p": "$400-$1,200", "w": "Quality components with amplification for the bay-area commute"}, {"n": "CarPlay Head Unit Install", "p": "$150-$500", "w": "Modern connectivity upgrade for daily Tampa Bay driving"}, {"n": "Full Custom Build", "p": "$1,500-$4,000", "w": "Complete audio overhaul with Tampa's competitive pricing"}],
  neighborhoods: ["South Tampa - Quality shops with diverse vehicle experience", "Brandon / Riverview - Competitive pricing with strong truck audio focus", "Wesley Chapel / New Tampa - Newer shops with modern installation techniques", "St. Petersburg - Several established shops across the bay", "Clearwater - Shops experienced with marine-influenced audio needs"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function TampaAudioGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does car audio cost in Tampa?", "a": "Tampa offers great value. Basic speaker upgrades start at $150-$300, CarPlay head units run $150-$500 installed, and full systems range from $1,000-$4,000. Truck-specific packages start around $500. Pricing is competitive across the bay area."}, {"q": "What about audio for trucks and Jeeps in Tampa?", "a": "Tampa has several shops specializing in truck and Jeep audio. Open-top vehicles need higher-output systems with weather-resistant components. Marine-grade speakers and amplifiers are recommended for Jeep Wranglers. Budget $500-$2,500 for a quality truck or Jeep system."}, {"q": "How does salt air affect car audio in Tampa?", "a": "Tampa's bay salt air can corrode exposed connections and speaker terminals over time. Use dielectric grease on connections, choose marine-grade equipment for convertibles and Jeeps, and inspect wiring annually. Sealed speaker connections and quality wiring prevent most issues."}, {"q": "Where are the best car audio shops in Tampa?", "a": "Brandon and South Tampa have the strongest concentration of quality shops. For truck-specific work, shops along US-301 in Brandon specialize in lifted truck audio. St. Pete has several veteran shops with great reputations. Check Google reviews for recent audio-specific feedback."}];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><Link href="/guides/car-audio-sound-systems" className="hover:text-[#4a90d9] transition-colors">Car Audio</Link><span>/</span><span className="text-[#e8edf5]">{cityData.name}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">🔊</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{cityData.name}, {cityData.state}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">Car Audio & Sound Systems in {cityData.name}: Complete Local Guide</h1>
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
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Car Audio in {cityData.name}: What to Know</h2><p className="text-[#b8c4d9] leading-relaxed mb-6">{cityData.climate}</p><div className="space-y-3">{cityData.challenges.map((c, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><span className="text-[#4a90d9] mt-0.5">⚠️</span><span className="text-[#b8c4d9]">{c}</span></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Popular Audio Services in {cityData.name}</h2><div className="space-y-4">{cityData.topServices.map((s, i) => (<div key={i} className="p-6 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="flex justify-between items-start mb-2"><h3 className="text-lg font-medium text-[#e8edf5]">{s.n}</h3><span className="text-[#4a90d9] font-medium">{s.p}</span></div><p className="text-[#6b7a94]">{s.w}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Audio Shops by Neighborhood</h2><div className="space-y-3">{cityData.neighborhoods.map((h, i) => (<div key={i} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><p className="text-[#b8c4d9]">{h}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} Car Audio FAQ</h2><div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{f.q}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === i && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{f.a}</p></div>)}</div>))}</div></div>
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10"><h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Audio Shops in {cityData.name}</h3><p className="text-[#6b7a94] mb-6">Browse top-rated car audio specialists in the {cityData.name} area.</p><Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link></div>
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10"><h3 className="text-lg font-medium text-[#e8edf5] mb-4">Car Audio Guides for Other Florida Cities</h3><div className="flex flex-wrap gap-3">{otherCities.map((c) => (<Link key={c.slug} href={`/guides/car-audio-sound-systems/${c.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{c.name}</Link>))}</div></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

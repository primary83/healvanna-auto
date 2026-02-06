"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Jacksonville",
  state: "FL",
  description: "Jacksonville offers Florida's best car audio value. The strong bass community and competitive shop market means you can build a seriously impressive system for less than you'd spend in South Florida. Great city for first-time audio upgraders.",
  averageCost: "$100-$3,500+",
  popularService: "Bass systems & budget builds",
  localTip: "Jacksonville offers Florida's best car audio value. The strong bass community and competitive shop market means you can build a seriously impressive system for less than you'd spend in South Florida. Great city for first-time audio upgraders.",
  climate: "Jacksonville's 221 sunny days and North Florida location are slightly kinder to audio equipment than South Florida. Cooler winter temperatures are easier on electronics, and the reduced salt exposure (compared to South Florida) extends equipment life.",
  challenges: ["Long commutes across Jacksonville's sprawl make audio quality a daily priority", "Atlantic coast salt air affects beach-area installations", "Bass community is strong but noise ordinances are enforced", "Fewer premium specialist shops than larger Florida metros", "North Florida's occasional cold can affect subwoofer enclosure materials", "Highway driving benefits from higher-output systems to overcome road noise"],
  topServices: [{"n": "Budget Speaker Upgrade", "p": "$100-$300", "w": "Best-value speaker upgrade in Florida for a noticeable improvement"}, {"n": "Bass Package (Sub + Amp)", "p": "$200-$800", "w": "Jacksonville's bass culture means excellent selection and competitive pricing"}, {"n": "CarPlay Head Unit", "p": "$130-$400 installed", "w": "Florida's most affordable CarPlay upgrade for modern connectivity"}, {"n": "Full System Build", "p": "$800-$3,500", "w": "Complete audio transformation at Jacksonville's value-friendly prices"}],
  neighborhoods: ["San Marco / Riverside - Quality shops with attention to clean installations", "Southside / Town Center - Convenient location with several audio specialists", "Jacksonville Beach - Shops familiar with coastal vehicle audio needs", "Orange Park / Fleming Island - Competitive suburban pricing", "Mandarin / Baymeadows - Growing area with newer audio shops"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}];

export default function JacksonvilleAudioGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does car audio cost in Jacksonville?", "a": "Jacksonville offers the best audio value in Florida. Speaker upgrades start at $100-$300, bass packages run $200-$800, and full systems range from $800-$3,500. That's typically 15-25% less than South Florida. The quality of work is excellent despite the lower pricing."}, {"q": "Is the bass scene big in Jacksonville?", "a": "Very. Jacksonville has an active bass competition community with regular local events. Several shops specialize in high-output bass systems and have experience building competition vehicles. If you want serious bass on a budget, Jacksonville is the place."}, {"q": "What's the best budget audio upgrade?", "a": "A set of quality coaxial speakers ($80-$150) swapped into your factory locations gives the most improvement per dollar. Add a $100-$200 powered subwoofer for bass. Total investment of $200-$350 for a noticeable upgrade. Many Jacksonville shops offer budget-friendly package deals."}, {"q": "Can I find MECP-certified installers in Jacksonville?", "a": "Yes, several Jacksonville shops have MECP-certified technicians. Certification means the installer has passed industry testing on proper installation techniques, wiring, and system integration. Ask shops directly about certification and look for the MECP logo."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">221 sunny days/yr</div></div>
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

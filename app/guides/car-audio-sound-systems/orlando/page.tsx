"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Orlando",
  state: "FL",
  description: "Orlando's audio market is practical and value-focused. Many customers want CarPlay/Android Auto upgrades and quality speaker improvements for their daily commute along I-4. The growing car meet scene has also increased demand for show-quality systems.",
  averageCost: "$150-$4,000+",
  popularService: "CarPlay upgrades & speaker packages",
  localTip: "Orlando's audio market is practical and value-focused. Many customers want CarPlay/Android Auto upgrades and quality speaker improvements for their daily commute along I-4. The growing car meet scene has also increased demand for show-quality systems.",
  climate: "Orlando's long commutes and daily thunderstorms make a quality audio system both a practical improvement and a safety feature - clearer phone calls and better podcast audio improve your daily driving experience.",
  challenges: ["Long I-4 commutes benefit from quality audio but also mean more heat exposure", "Daily thunderstorms create road noise that challenges weaker audio systems", "Theme park parking exposes vehicles to extended heat that stresses equipment", "Love bug season can clog speaker grilles if not maintained", "Growing market means quality varies between shops - research carefully", "Pollen season can infiltrate speaker cones if cabin air filter is neglected"],
  topServices: [{"n": "CarPlay/Android Auto Head Unit", "p": "$150-$500 installed", "w": "The most requested upgrade in Orlando - modern connectivity for commuters"}, {"n": "Speaker Upgrade Package", "p": "$200-$800", "w": "Quality speakers that make your daily I-4 commute enjoyable"}, {"n": "Subwoofer + Amp Package", "p": "$250-$1,000", "w": "Add bass to your system at competitive Central Florida pricing"}, {"n": "Full System Build", "p": "$1,000-$4,000", "w": "Complete audio transformation at Orlando's value-friendly prices"}],
  neighborhoods: ["Colonial Drive corridor - Several established car audio shops with decades of experience", "Winter Park - Quality shops with attention to clean, professional installations", "Sanford / Lake Mary - Growing area with newer shops and competitive pricing", "Kissimmee - Budget-friendly options south of Orlando", "Altamonte Springs - Established shops with good reputations for quality work"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function OrlandoAudioGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does a CarPlay head unit cost in Orlando?", "a": "A quality CarPlay/Android Auto head unit with installation runs $150-$500 in Orlando. Budget options like the Pioneer DMH-1770NEX installed start around $200. Premium units with wireless CarPlay and larger screens run $400-$700 installed. Orlando pricing is very competitive."}, {"q": "What's the best upgrade for my Orlando commute?", "a": "A head unit with CarPlay/Android Auto plus quality coaxial speakers is the best commuter combo. Budget around $300-$600 total for both. The head unit gives you navigation, streaming, and hands-free calling, while better speakers make everything sound clearer."}, {"q": "Are there car audio competitions in Orlando?", "a": "Orlando's car meet scene is growing and includes audio showcases. Events around the Millenia area and various car meets feature sound-offs. While not as competition-heavy as Miami or Jacksonville, the community is active and welcoming to newcomers."}, {"q": "Can I install speakers myself in Orlando?", "a": "Basic coaxial speaker swaps are very DIY-friendly and take 1-2 hours. If you're not comfortable, Orlando shops charge $50-$100 for speaker installation. For amplifiers, subwoofers, or complex wiring, professional installation is recommended and runs $100-$300."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">233 sunny days/yr</div></div>
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

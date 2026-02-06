"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Miami",
  state: "FL",
  description: "Miami is one of the strongest car audio markets in the country. The bass and sound competition culture runs deep here, and many shops have nationally recognized installers. You'll find everything from budget-friendly upgrades to competition-grade custom builds.",
  averageCost: "$200-$5,000+",
  popularService: "Bass systems & full builds",
  localTip: "Miami is one of the strongest car audio markets in the country. The bass and sound competition culture runs deep here, and many shops have nationally recognized installers. You'll find everything from budget-friendly upgrades to competition-grade custom builds.",
  climate: "Miami's year-round warm weather means windows-down driving is the norm, influencing audio priorities toward higher output systems that sound great with the windows open.",
  challenges: ["Extreme heat degrades speaker surrounds and stresses amplifiers faster", "Humidity can cause corrosion on exposed electrical connections", "Theft risk is higher for visible audio equipment - use stealth installs", "Bass competitions and loud systems attract noise complaint enforcement", "Rain and humidity demand properly sealed wiring and marine-grade equipment for convertibles", "Traffic congestion means more listening time but also more heat soak for components"],
  topServices: [{"n": "Full Custom Audio Build", "p": "$1,500-$5,000+", "w": "Miami's specialty - complete audio systems with custom fabrication"}, {"n": "Bass / Subwoofer Package", "p": "$300-$1,500", "w": "Subwoofer, amp, and enclosure combo for Miami's bass-heavy culture"}, {"n": "Speaker + Amp Upgrade", "p": "$400-$1,200", "w": "Quality component speakers with amplifier for serious sound quality"}, {"n": "CarPlay/Android Auto Head Unit", "p": "$200-$600 installed", "w": "Modern connectivity upgrade with touchscreen and smartphone integration"}],
  neighborhoods: ["Wynwood / Design District - Custom shops with competition-level build quality", "Doral - Major hub for car audio with multiple established shops", "Hialeah - Excellent value with experienced installers and large selection", "Brickell / Downtown - Premium shops for luxury vehicle integration", "Kendall / Homestead - Good options serving South Dade's car culture"]
};

const otherCities = [{"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function MiamiAudioGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does a car audio upgrade cost in Miami?", "a": "Miami's competitive market offers great options at every budget. Basic speaker upgrades start at $150-$300, speaker + amp packages run $500-$1,500, and full custom builds range from $2,000-$5,000+. Bass packages (sub + amp) start around $300-$800. Miami pricing is competitive despite the premium market."}, {"q": "Where are the best car audio shops in Miami?", "a": "Doral and Hialeah have the highest concentration of quality audio shops. Wynwood has premium custom builders. Look for shops with MECP-certified installers and ask to hear demo vehicles. The best shops have active social media showcasing recent builds."}, {"q": "Is bass culture big in Miami?", "a": "Huge. Miami hosts some of the biggest bass competitions in the Southeast. Many shops specialize in high-output bass systems. If you're into bass, Miami has the expertise and the community. Just be mindful of noise ordinances in residential areas."}, {"q": "How do I protect audio equipment from Miami's heat?", "a": "Choose equipment rated for high temperatures, ensure amplifiers have proper ventilation and aren't enclosed in tight spaces, use quality wiring with heat-resistant insulation, and park in shade when possible. Marine-grade equipment is worth considering for convertibles and Jeeps."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">248 sunny days/yr</div></div>
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

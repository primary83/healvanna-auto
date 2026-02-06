"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Fort Lauderdale",
  state: "FL",
  description: "Fort Lauderdale's luxury vehicle market means many audio shops specialize in seamless factory integration - upgrades that enhance sound quality without changing the look of your interior. If you drive a BMW, Mercedes, or Audi, Fort Lauderdale shops have the expertise.",
  averageCost: "$200-$5,000+",
  popularService: "Premium integration & stealth installs",
  localTip: "Fort Lauderdale's luxury vehicle market means many audio shops specialize in seamless factory integration - upgrades that enhance sound quality without changing the look of your interior. If you drive a BMW, Mercedes, or Audi, Fort Lauderdale shops have the expertise.",
  climate: "Fort Lauderdale's 250+ sunny days and ocean proximity demand audio equipment that can handle extreme heat and salt air. Premium shops here understand these challenges and use appropriate equipment and techniques.",
  challenges: ["Luxury vehicles require specialized integration that preserves factory aesthetics", "Ocean salt air corrodes connections faster than inland installations", "High-end vehicles have complex electronics that need careful audio integration", "Convertible lifestyle requires marine-grade or weather-resistant equipment", "Premium market expectations mean higher installation standards required", "Theft risk for visible audio equipment in high-traffic beach areas"],
  topServices: [{"n": "Factory Integration Upgrade", "p": "$500-$2,500", "w": "Premium sound enhancement that preserves your luxury vehicle's factory look"}, {"n": "Premium Speaker + Amp Package", "p": "$600-$2,000", "w": "High-end component speakers with quality amplification"}, {"n": "Stealth Subwoofer Install", "p": "$400-$1,200", "w": "Hidden bass installation that doesn't sacrifice trunk space"}, {"n": "Full Premium Build", "p": "$2,000-$5,000+", "w": "Complete audio transformation for Fort Lauderdale's luxury market"}],
  neighborhoods: ["Las Olas / Downtown - Premium shops with European luxury vehicle expertise", "Pompano Beach - Quality audio shops with more accessible pricing", "Weston / Pembroke Pines - Suburban shops with broad vehicle experience", "Coral Springs - Growing audio market with competitive shops", "Deerfield Beach - Northern Broward shops with quality installers"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function FortLauderdaleAudioGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does car audio cost in Fort Lauderdale?", "a": "Fort Lauderdale pricing reflects the luxury market. Factory integration upgrades run $500-$2,500, quality speaker + amp packages $600-$2,000, and full premium builds $2,000-$5,000+. The higher pricing comes with expertise in luxury vehicle electronics and premium installation quality."}, {"q": "Can I upgrade audio in my BMW/Mercedes without changing the look?", "a": "Yes - this is Fort Lauderdale shops' specialty. Factory integration upgrades add amplifiers, DSPs, and better speakers while keeping the factory head unit and interior look completely stock. Brands like Audison, Focal, and Bavsound specialize in OEM integration for European luxury vehicles."}, {"q": "What about audio for convertibles in Fort Lauderdale?", "a": "Convertibles need marine-grade or weather-resistant speakers and amplifiers. Quality convertible audio systems cost 20-30% more than standard but handle Fort Lauderdale's rain, humidity, and salt air. Several local shops specialize in convertible audio installations."}, {"q": "Is a stealth subwoofer install worth it?", "a": "For Fort Lauderdale, absolutely. Stealth installs hide the subwoofer under a seat, in a custom enclosure, or in a spare tire well. You get bass without sacrificing trunk space and without advertising expensive equipment to potential thieves. Budget $400-$1,200 for a quality stealth sub setup."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">250 sunny days/yr</div></div>
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

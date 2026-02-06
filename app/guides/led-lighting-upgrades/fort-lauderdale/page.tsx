"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Fort Lauderdale",
  state: "FL",
  slug: "fort-lauderdale",
  description: "Fort Lauderdale's luxury vehicle market and active nightlife create demand for premium lighting upgrades - from high-performance headlights to sophisticated interior ambient lighting.",
  averageCost: "$50-$800+",
  popularUpgrade: "Premium LED assemblies + ambient lighting",
  localTip: "Fort Lauderdale's luxury market means many shops have experience with high-end vehicles that require careful integration with complex vehicle electronics. Choose shops familiar with your vehicle brand.",
  climate: "Fort Lauderdale's 250+ sunny days and ocean proximity create intense conditions for vehicle lighting. UV yellows lenses faster, and salt air corrodes exposed connections more quickly than inland areas.",
  challenges: ["Ocean salt air corrodes electrical connections faster than inland areas", "UV exposure yellows headlight lenses quickly - protective coatings recommended", "Luxury vehicles often have complex electronics requiring careful integration", "Higher price expectations in the luxury market", "Humidity causes condensation issues if headlight seals are compromised", "Frequent rain demands waterproof installations"],
  topServices: [{"n": "Premium LED Headlight Assembly", "p": "$300-$800+", "w": "High-end headlight upgrades for Fort Lauderdale's luxury vehicles"}, {"n": "Interior Ambient Lighting", "p": "$100-$400", "w": "Sophisticated cabin lighting matching luxury vehicle interiors"}, {"n": "Headlight Restoration + LED Upgrade", "p": "$150-$400", "w": "Address UV yellowing and upgrade to LED in one appointment"}, {"n": "Full Vehicle Lighting Package", "p": "$500-$1,500+", "w": "Complete headlight, taillight, interior, and accent upgrade"}],
  neighborhoods: ["Las Olas / Downtown - Premium shops serving the luxury vehicle community", "Pompano Beach - Quality options with more accessible pricing", "Weston / Pembroke Pines - Suburban shops with good general automotive experience", "Coral Springs - Growing market with competitive pricing", "Deerfield Beach - Northern Broward shops with quality work and fair prices"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function FortLauderdaleLEDLightingGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [{"q": "How much do LED headlights cost in Fort Lauderdale?", "a": "Fort Lauderdale pricing ranges from $80-$200 for LED bulb swaps to $300-$800+ for premium LED assemblies, reflecting the area's luxury market. Installation adds $50-$200 depending on vehicle complexity. European luxury vehicles often cost more due to electronic integration requirements."}, {"q": "Will LED upgrades void my luxury car warranty?", "a": "Simple LED bulb swaps generally don't affect your warranty. However, modifying wiring or replacing entire assemblies could potentially be an issue if a related electrical problem occurs. For vehicles under warranty, stick with direct-fit LED bulbs and keep your original parts."}, {"q": "How do I prevent headlight yellowing in Fort Lauderdale?", "a": "Fort Lauderdale's intense UV causes faster lens yellowing than most areas. Apply a UV-protective clear coat or ceramic coating to headlight lenses. When doing LED upgrades, ask your shop about protective coating application - many offer it as an add-on service."}, {"q": "Are there shops that specialize in luxury vehicle lighting?", "a": "Yes, several Fort Lauderdale shops specialize in European luxury brands (BMW, Mercedes, Audi, Porsche). These shops understand the complex electronics and proper integration methods required. Expect to pay a premium, but the quality and compatibility are worth it."}];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><Link href="/guides/led-lighting-upgrades" className="hover:text-[#4a90d9] transition-colors">LED Lighting</Link><span>/</span><span className="text-[#e8edf5]">{cityData.name}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">🔦</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{cityData.name}, {cityData.state}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">LED & Lighting Upgrades in {cityData.name}: Complete Local Guide</h1>
          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{cityData.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Average Cost</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.averageCost}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Popular Upgrade</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.popularUpgrade}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">250 sunny days/yr</div></div>
          </div>
        </div>
      </section>
      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 p-6 rounded-2xl bg-[#4a90d9]/5 border border-[#4a90d9]/20"><h3 className="text-lg font-medium text-[#4a90d9] mb-2">💡 Local Tip</h3><p className="text-[#b8c4d9]">{cityData.localTip}</p></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Lighting Upgrades in {cityData.name}: What to Know</h2><p className="text-[#b8c4d9] leading-relaxed mb-6">{cityData.climate}</p><div className="space-y-3">{cityData.challenges.map((challenge, idx) => (<div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><span className="text-[#4a90d9] mt-0.5">⚠️</span><span className="text-[#b8c4d9]">{challenge}</span></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Popular Lighting Services in {cityData.name}</h2><div className="space-y-4">{cityData.topServices.map((service, idx) => (<div key={idx} className="p-6 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="flex justify-between items-start mb-2"><h3 className="text-lg font-medium text-[#e8edf5]">{service.n}</h3><span className="text-[#4a90d9] font-medium">{service.p}</span></div><p className="text-[#6b7a94]">{service.w}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Lighting Shops by Neighborhood</h2><div className="space-y-3">{cityData.neighborhoods.map((hood, idx) => (<div key={idx} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><p className="text-[#b8c4d9]">{hood}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} LED Lighting FAQ</h2><div className="space-y-4">{faqs.map((faq, idx) => (<div key={idx} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{faq.q}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === idx && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{faq.a}</p></div>)}</div>))}</div></div>
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10"><h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Lighting Shops in {cityData.name}</h3><p className="text-[#6b7a94] mb-6">Browse top-rated automotive lighting specialists in the {cityData.name} area.</p><Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link></div>
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10"><h3 className="text-lg font-medium text-[#e8edf5] mb-4">LED Lighting Guides for Other Florida Cities</h3><div className="flex flex-wrap gap-3">{otherCities.map((city) => (<Link key={city.slug} href={`/guides/led-lighting-upgrades/${city.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{city.name}</Link>))}</div></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

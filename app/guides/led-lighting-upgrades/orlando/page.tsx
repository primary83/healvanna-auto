"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Orlando",
  state: "FL",
  slug: "orlando",
  description: "Orlando's car enthusiast community and long commutes make lighting upgrades both a safety essential and a popular way to personalize your ride for the active local car meet scene.",
  averageCost: "$40-$700+",
  popularUpgrade: "LED headlight conversion",
  localTip: "Orlando's car meet scene is growing fast, with regular events at spots like Millenia and along I-Drive. Quality headlight upgrades are the most practical improvement you can make for the area's busy highways.",
  climate: "Orlando's 233 sunny days and frequent afternoon thunderstorms create a cycle of bright days and suddenly dark, rainy conditions - making quality headlights a genuine safety upgrade.",
  challenges: ["Daily thunderstorms create sudden low-visibility driving conditions", "Long I-4 commutes increase exposure to road debris that can damage lights", "Love bug season coats light housings and reduces output", "Theme park parking means hours of sun exposure on headlight lenses", "Growing market means quality varies - research shops carefully", "Pollen season can coat and dim exterior lighting"],
  topServices: [{"n": "LED Headlight Bulb Swap", "p": "$80-$200 installed", "w": "The #1 safety upgrade for Orlando's busy highway commuting"}, {"n": "Full LED Headlight Assembly", "p": "$250-$700", "w": "Complete headlight replacement with modern LED optics"}, {"n": "Interior LED Conversion Kit", "p": "$40-$120 installed", "w": "Quick and affordable cabin upgrade popular with enthusiasts"}, {"n": "Fog Light LED Upgrade", "p": "$60-$200", "w": "Essential for Orlando's frequent afternoon rain storms"}],
  neighborhoods: ["Winter Park - Quality automotive shops with attention to detail", "Sanford / Lake Mary - Competitive pricing with experienced installers", "Kissimmee - Budget-friendly options serving the southern metro area", "Altamonte Springs - Established auto electronics shops with good reputations", "Apopka / Ocoee - West side shops often with shorter wait times"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function OrlandoLEDLightingGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [{"q": "What's the best lighting upgrade for Orlando commuters?", "a": "LED headlight bulbs or assemblies are the #1 recommendation. Orlando's I-4 corridor is one of the most dangerous highways in the country, and the daily afternoon thunderstorms create sudden low-visibility conditions. Quality LED headlights with a proper beam pattern dramatically improve your ability to see and be seen."}, {"q": "How much does LED headlight installation cost in Orlando?", "a": "LED bulb swap installation runs $50-$100 at most shops (parts separate). Full assembly replacement is typically $100-$200 for labor. Many car audio shops offer package deals for parts + installation. Orlando pricing is generally 10-15% less than South Florida."}, {"q": "Are there good shops for custom lighting in Orlando?", "a": "Yes! Orlando's growing car scene has attracted several quality shops. Car audio and electronics stores like those along Colonial Drive and in the Altamonte area often have the most experience with automotive lighting. Check Google reviews specifically mentioning lighting work."}, {"q": "Will LED headlights help with Orlando's rain?", "a": "Absolutely. LED headlights produce a brighter, whiter light that improves visibility in rain compared to dim yellow halogens. Pair them with amber/yellow LED fog lights (3,000K) for the best rain visibility - yellow light penetrates rain and fog better than white."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">233 sunny days/yr</div></div>
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

"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Jacksonville",
  state: "FL",
  slug: "jacksonville",
  description: "Jacksonville's wrap market offers excellent value with a growing number of skilled installers. The city's truck and muscle car culture drives strong demand for bold color changes and matte finishes.",
  averageCost: "$2,000-$4,500",
  popularFinish: "Matte & Gloss",
  localTip: "Jacksonville offers some of the best wrap value in Florida. The lower cost of living translates to more affordable shop rates without sacrificing quality. Great for first-time wrap buyers.",
  climate: "Jacksonville's 221 sunny days and North Florida location provide a slightly less harsh environment for wraps than South Florida, potentially adding 1-2 years to wrap lifespan compared to Miami.",
  challenges: [
    "Atlantic coast salt air affects wraps in beach communities (Jax Beach, Atlantic Beach)",
    "Pine sap from abundant pine trees can stain wrap surfaces if not removed promptly",
    "Heavy pollen seasons coat vehicles and require frequent gentle cleaning",
    "Jacksonville's large geographic area means longer commutes and more road debris exposure",
    "Fewer wrap specialists than South Florida - research and wait times may apply",
    "Love bug season still affects North Florida, requiring prompt cleaning"
  ],
  topServices: [
    { name: "Full Color Change Wrap", price: "$2,000-$4,000", why: "Best value in Florida for a complete vehicle transformation" },
    { name: "Truck & Large Vehicle Wrap", price: "$3,000-$5,000", why: "Jacksonville's truck culture drives demand for F-150 and RAM wraps" },
    { name: "Matte Black Wrap", price: "$2,200-$3,800", why: "The perennial best-seller in Jacksonville's car enthusiast community" },
    { name: "Partial Wrap / Racing Stripes", price: "$400-$1,500", why: "Popular entry point for muscle car and sports car owners" }
  ],
  neighborhoods: [
    "San Marco / Riverside - Quality boutique shops with attention to detail",
    "Southside / Town Center - Convenient location with several established wrap shops",
    "Jacksonville Beach area - Coastal shops understanding of salt-air challenges",
    "Orange Park / Fleming Island - Suburban shops with competitive pricing",
    "Mandarin - Growing area with newer shops competing on quality and price"
  ]
};

const otherCities = [
  { name: "Miami", slug: "miami" },
  { name: "Orlando", slug: "orlando" },
  { name: "Tampa", slug: "tampa" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale" },
];

export default function JacksonvilleVinylWrapsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { question: "How much does a vinyl wrap cost in Jacksonville?", answer: "Jacksonville offers the best wrap value in Florida. Full wraps run $2,000-$4,000 for standard vehicles - 20-30% less than South Florida markets. Trucks and large SUVs run $3,000-$5,000. Partial wraps start around $400. The savings don't mean lower quality - Jacksonville has talented installers." },
    { question: "How long do wraps last in Jacksonville?", answer: "Jacksonville wraps typically last 5-7 years with proper care - slightly longer than South Florida due to less intense UV and salt exposure. North Florida's climate is more forgiving on wraps, though summer heat and beach salt still require attention." },
    { question: "Is the wrap market growing in Jacksonville?", answer: "Yes, rapidly. As Jacksonville's population and car culture grow, more wrap shops are opening. This competition benefits consumers with better pricing and quality. The truck and muscle car community in particular is driving strong demand for wraps." },
    { question: "How do I deal with pine sap on my wrap?", answer: "Pine sap is a common Jacksonville issue. Use isopropyl alcohol or a wrap-safe tar/sap remover on a microfiber cloth. Let it soak for a few minutes before gently wiping. Never scrub or use abrasive tools. Ceramic coating makes sap removal much easier and prevents it from bonding to the wrap surface." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><Link href="/guides/vinyl-wraps" className="hover:text-[#4a90d9] transition-colors">Vinyl Wraps</Link><span>/</span><span className="text-[#e8edf5]">{cityData.name}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">🎨</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{cityData.name}, {cityData.state}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">Vinyl Wraps in {cityData.name}: Complete Local Guide</h1>
          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{cityData.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Average Cost</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.averageCost}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Popular Finish</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.popularFinish}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">221 sunny days/yr</div></div>
          </div>
        </div>
      </section>
      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 p-6 rounded-2xl bg-[#4a90d9]/5 border border-[#4a90d9]/20"><h3 className="text-lg font-medium text-[#4a90d9] mb-2">💡 Local Tip</h3><p className="text-[#b8c4d9]">{cityData.localTip}</p></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Vinyl Wraps in {cityData.name}: What to Know</h2><p className="text-[#b8c4d9] leading-relaxed mb-6">{cityData.climate}</p><div className="space-y-3">{cityData.challenges.map((challenge, idx) => (<div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><span className="text-[#4a90d9] mt-0.5">⚠️</span><span className="text-[#b8c4d9]">{challenge}</span></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Popular Wrap Services in {cityData.name}</h2><div className="space-y-4">{cityData.topServices.map((service, idx) => (<div key={idx} className="p-6 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="flex justify-between items-start mb-2"><h3 className="text-lg font-medium text-[#e8edf5]">{service.name}</h3><span className="text-[#4a90d9] font-medium">{service.price}</span></div><p className="text-[#6b7a94]">{service.why}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Wrap Shops by Neighborhood</h2><div className="space-y-3">{cityData.neighborhoods.map((hood, idx) => (<div key={idx} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><p className="text-[#b8c4d9]">{hood}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} Vinyl Wrap FAQ</h2><div className="space-y-4">{faqs.map((faq, idx) => (<div key={idx} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{faq.question}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === idx && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{faq.answer}</p></div>)}</div>))}</div></div>
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10"><h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Wrap Shops in {cityData.name}</h3><p className="text-[#6b7a94] mb-6">Browse top-rated vinyl wrap installers in the {cityData.name} area.</p><Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Wrap Shops <span>→</span></Link></div>
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10"><h3 className="text-lg font-medium text-[#e8edf5] mb-4">Vinyl Wrap Guides for Other Florida Cities</h3><div className="flex flex-wrap gap-3">{otherCities.map((city) => (<Link key={city.slug} href={`/guides/vinyl-wraps/${city.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{city.name}</Link>))}</div></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

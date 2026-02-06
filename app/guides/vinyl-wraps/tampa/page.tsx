"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Tampa",
  state: "FL",
  slug: "tampa",
  description: "Tampa Bay's car culture is growing rapidly, with vinyl wraps becoming increasingly popular for both personal vehicles and the area's thriving small business fleet branding.",
  averageCost: "$2,500-$5,000",
  popularFinish: "Satin & Metallic",
  localTip: "Tampa's wrap market is more value-oriented than Miami's. You can often get the same quality work at 15-25% less. Many Tampa shops also serve the broader bay area including St. Pete and Clearwater.",
  climate: "Tampa's 244 sunny days and bay-area salt air create a unique environment for wraps. The salt exposure is less intense than ocean-front cities but still requires attention to edge sealing and maintenance.",
  challenges: [
    "Bay area salt air can degrade wrap edges over time if not properly sealed",
    "Summer heat exceeding 95°F can soften adhesive on dark-colored wraps",
    "Beach trips to Clearwater and St. Pete expose wraps to sand and salt",
    "Causeway bridge crossings increase salt exposure significantly",
    "Afternoon thunderstorms leave water spots on unwashed wraps",
    "Growing market means quality varies - research installers carefully"
  ],
  topServices: [
    { name: "Full Color Change Wrap", price: "$2,500-$4,500", why: "Competitive bay-area pricing for complete vehicle transformation" },
    { name: "Commercial / Fleet Wraps", price: "$1,500-$4,000", why: "Tampa's growing business scene drives strong fleet wrap demand" },
    { name: "Metallic Finish Wrap", price: "$3,000-$5,000", why: "Metallic wraps look stunning in Tampa's abundant sunshine" },
    { name: "Roof & Hood Wrap", price: "$400-$1,000", why: "Popular accent option for adding contrast without full commitment" }
  ],
  neighborhoods: [
    "South Tampa / Hyde Park - Premium shops with experienced installers and luxury clientele",
    "Brandon / Riverview - Growing area with competitive pricing and good turnaround times",
    "Wesley Chapel / New Tampa - Newer shops serving the rapidly growing north Tampa market",
    "St. Petersburg - Several quality shops across the bay with their own loyal customer base",
    "Clearwater - Coastal shops experienced with wraps that face extra salt air exposure"
  ]
};

const otherCities = [
  { name: "Miami", slug: "miami" },
  { name: "Orlando", slug: "orlando" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale" },
  { name: "Jacksonville", slug: "jacksonville" },
];

export default function TampaVinylWrapsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { question: "How much does a vinyl wrap cost in Tampa?", answer: "Tampa offers excellent value for wraps. Full wraps run $2,500-$4,500 for standard vehicles, making it one of the more affordable major Florida markets. Partial wraps start around $400-$800. The quality-to-price ratio in Tampa is excellent." },
    { question: "How does salt air affect wraps in Tampa Bay?", answer: "Tampa's bay-area salt air is milder than Miami's ocean air but still impacts wraps over time. Edges and seams are most vulnerable. Regular washing (especially after bridge crossings), ceramic coating, and choosing an installer who properly seals edges will minimize salt-related issues." },
    { question: "Are commercial wraps popular in Tampa?", answer: "Very much so. Tampa's growing small business community has driven strong demand for fleet and commercial wraps. A branded vehicle wrap can generate 30,000-70,000 impressions per day, making it one of the most cost-effective advertising investments for local businesses." },
    { question: "How long do wraps last in Tampa?", answer: "With proper care, premium wraps last 4-6 years in Tampa. The salt exposure is moderate compared to coastal cities, so wraps tend to last slightly longer than in Miami or Fort Lauderdale. Ceramic coating and garage parking can push lifespan toward the 6-7 year range." }
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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">244 sunny days/yr</div></div>
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

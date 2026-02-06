"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Fort Lauderdale",
  state: "FL",
  slug: "fort-lauderdale",
  description: "Fort Lauderdale's luxury car scene and coastal lifestyle create strong demand for premium vinyl wraps. The area is home to some of South Florida's most experienced wrap installers.",
  averageCost: "$3,000-$6,500",
  popularFinish: "Satin & Color-Shift",
  localTip: "Fort Lauderdale shops often serve clients from Palm Beach to Miami. Many specialize in luxury and exotic vehicles, giving them broad experience with complex installations on high-end cars.",
  climate: "With 250+ sunny days and direct ocean exposure, Fort Lauderdale wraps face intense UV and salt air year-round. Premium UV-resistant films and ceramic coating are essential investments here.",
  challenges: [
    "Ocean salt air is more concentrated than inland areas - edges and seams need extra attention",
    "Year-round UV exposure means wraps degrade faster without ceramic coating protection",
    "Luxury vehicle owners expect flawless installations - choose experienced shops",
    "Boat trailer and watercraft exposure adds extra salt damage risk for some owners",
    "Condo HOAs occasionally have rules about vehicle modifications - check before wrapping",
    "Premium pricing reflects the area's luxury market - budget accordingly"
  ],
  topServices: [
    { name: "Luxury Vehicle Full Wrap", price: "$4,000-$6,500", why: "Specialized installation for Fort Lauderdale's premium vehicle market" },
    { name: "Satin Color Change Wrap", price: "$3,000-$5,500", why: "Sophisticated satin finishes are the top request in Fort Lauderdale" },
    { name: "Color-Shifting / Chameleon Wrap", price: "$4,000-$7,000", why: "Head-turning exotic finishes popular in the luxury community" },
    { name: "Chrome Delete Package", price: "$500-$1,500", why: "Popular for modernizing luxury vehicles with blacked-out trim" }
  ],
  neighborhoods: [
    "Las Olas / Downtown - Premium shops with portfolios full of luxury and exotic vehicles",
    "Pompano Beach - Quality shops with slightly more accessible pricing than downtown",
    "Weston / Pembroke Pines - Suburban shops serving Broward's western communities",
    "Coral Springs / Parkland - Growing market with quality installers and good value",
    "Deerfield Beach / Boca Raton border - Northern Broward shops often serving Palm Beach clients too"
  ]
};

const otherCities = [
  { name: "Miami", slug: "miami" },
  { name: "Orlando", slug: "orlando" },
  { name: "Tampa", slug: "tampa" },
  { name: "Jacksonville", slug: "jacksonville" },
];

export default function FortLauderdaleVinylWrapsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { question: "How much does a vinyl wrap cost in Fort Lauderdale?", answer: "Fort Lauderdale wrap prices range from $3,000-$6,500 for a full wrap, reflecting the area's luxury market. Exotic vehicles can run $5,000-$8,000+. The premium pricing comes with access to some of South Florida's most skilled installers who regularly work with high-end vehicles." },
    { question: "How do I protect my wrap from Fort Lauderdale's salt air?", answer: "Ceramic coating is essential for wraps in Fort Lauderdale. The ocean salt air accelerates edge degradation and can dull finishes faster. Wash your wrapped vehicle weekly to remove salt deposits, and have your installer use extra adhesion techniques on edges and seams." },
    { question: "Can I get a wrap that matches my boat?", answer: "Absolutely! Many Fort Lauderdale wrap shops also do marine work or can coordinate colors with boat wraps. Color-matching between vehicles and watercraft is a niche but growing service in the Fort Lauderdale market." },
    { question: "Will my HOA allow a wrapped vehicle?", answer: "Most HOAs don't restrict vehicle wraps since they're cosmetic and reversible. However, some luxury communities have rules about vehicle appearance. Check your HOA guidelines before getting a bright or unusual color. Matte black, satin gray, and other understated wraps rarely cause issues." }
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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">250+ sunny days/yr</div></div>
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

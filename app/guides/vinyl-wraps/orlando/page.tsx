"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Orlando",
  state: "FL",
  slug: "orlando",
  description: "Orlando's growing car enthusiast community and year-round car show culture make it a thriving market for vinyl wraps, with options ranging from subtle matte finishes to eye-catching color shifts.",
  averageCost: "$2,500-$5,500",
  popularFinish: "Matte & Satin",
  localTip: "Orlando has a strong car meet and show culture. Many wrap shops offer show-prep packages and can recommend finishes that look best under show lighting and photography.",
  climate: "Orlando's 233 sunny days and summer temperatures above 95°F require UV-resistant films and proper maintenance to keep wraps looking their best year-round.",
  challenges: [
    "Love bug seasons (May & September) can stain wraps if not cleaned within 24 hours",
    "Theme park parking exposes wrapped cars to 8+ hours of direct sun",
    "Daily afternoon thunderstorms can leave water spots on unprotected wraps",
    "I-4 construction debris poses a risk to wrap surfaces during commutes",
    "High humidity requires climate-controlled installation facilities",
    "Pollen season coats vehicles and can stain lighter-colored wraps"
  ],
  topServices: [
    { name: "Full Color Change Wrap", price: "$2,500-$5,000", why: "Complete vehicle transformation at competitive Central Florida pricing" },
    { name: "Satin/Matte Finish Wrap", price: "$2,800-$4,500", why: "The most requested finish in Orlando's car enthusiast community" },
    { name: "Partial Wrap / Two-Tone", price: "$800-$2,500", why: "Popular for adding racing stripes or contrasting roof and hood" },
    { name: "Commercial Fleet Wraps", price: "$1,500-$4,500", why: "Orlando's tourism industry drives strong demand for branded vehicles" }
  ],
  neighborhoods: [
    "Winter Park - Upscale area with premium wrap shops specializing in luxury finishes",
    "Sanford / Lake Mary - Growing area with competitive pricing and quality work",
    "Kissimmee / I-Drive corridor - Several shops serving the tourist and car rental market",
    "Altamonte Springs - Established shops with good reputation in Central Florida",
    "Apopka / Ocoee - West side shops often offering the best value in the metro area"
  ]
};

const otherCities = [
  { name: "Miami", slug: "miami" },
  { name: "Tampa", slug: "tampa" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale" },
  { name: "Jacksonville", slug: "jacksonville" },
];

export default function OrlandoVinylWrapsGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much does a vinyl wrap cost in Orlando?",
      answer: "Orlando offers competitive wrap pricing compared to South Florida. A full wrap runs $2,500-$5,000 for standard vehicles, with exotic finishes adding 15-30%. Partial wraps start around $500-$800. Orlando's pricing is generally 15-20% less than Miami while offering comparable quality."
    },
    {
      question: "What's the best wrap finish for Orlando's climate?",
      answer: "Satin and matte finishes are popular and hide minor imperfections well. For longevity in Orlando's sun, choose premium films (3M, XPEL, Inozetek) and add ceramic coating. Darker colors absorb more heat, so lighter satins and metallics may last slightly longer."
    },
    {
      question: "How do I protect my wrap from love bugs?",
      answer: "Keep a wrap-safe quick detailer spray and microfiber towels in your car during love bug season. Clean affected areas within 24 hours. Ceramic coating on your wrap creates a sacrificial layer that makes love bug removal much easier and prevents staining."
    },
    {
      question: "Are there good car meets in Orlando to show off my wrap?",
      answer: "Orlando has an active car scene! Regular meets include Cars & Coffee events, Orlando Cars and Culture, and various meets around the Millenia area. Many wrap shops sponsor or participate in these events - it's a great way to find quality installers and see their work in person."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8">
            <Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link>
            <span>/</span>
            <Link href="/guides/vinyl-wraps" className="hover:text-[#4a90d9] transition-colors">Vinyl Wraps</Link>
            <span>/</span>
            <span className="text-[#e8edf5]">{cityData.name}</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🎨</span>
            <span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{cityData.name}, {cityData.state}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">Vinyl Wraps in {cityData.name}: Complete Local Guide</h1>
          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{cityData.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Average Cost</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.averageCost}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Popular Finish</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.popularFinish}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">233 sunny days/yr</div></div>
          </div>
        </div>
      </section>
      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 p-6 rounded-2xl bg-[#4a90d9]/5 border border-[#4a90d9]/20">
            <h3 className="text-lg font-medium text-[#4a90d9] mb-2">💡 Local Tip</h3>
            <p className="text-[#b8c4d9]">{cityData.localTip}</p>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Vinyl Wraps in {cityData.name}: What to Know</h2>
            <p className="text-[#b8c4d9] leading-relaxed mb-6">{cityData.climate}</p>
            <div className="space-y-3">{cityData.challenges.map((challenge, idx) => (<div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><span className="text-[#4a90d9] mt-0.5">⚠️</span><span className="text-[#b8c4d9]">{challenge}</span></div>))}</div>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Popular Wrap Services in {cityData.name}</h2>
            <div className="space-y-4">{cityData.topServices.map((service, idx) => (<div key={idx} className="p-6 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="flex justify-between items-start mb-2"><h3 className="text-lg font-medium text-[#e8edf5]">{service.name}</h3><span className="text-[#4a90d9] font-medium">{service.price}</span></div><p className="text-[#6b7a94]">{service.why}</p></div>))}</div>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Wrap Shops by Neighborhood</h2>
            <div className="space-y-3">{cityData.neighborhoods.map((hood, idx) => (<div key={idx} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><p className="text-[#b8c4d9]">{hood}</p></div>))}</div>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} Vinyl Wrap FAQ</h2>
            <div className="space-y-4">{faqs.map((faq, idx) => (<div key={idx} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{faq.question}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === idx && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{faq.answer}</p></div>)}</div>))}</div>
          </div>
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10">
            <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Wrap Shops in {cityData.name}</h3>
            <p className="text-[#6b7a94] mb-6">Browse top-rated vinyl wrap installers in the {cityData.name} area.</p>
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Wrap Shops <span>→</span></Link>
          </div>
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10">
            <h3 className="text-lg font-medium text-[#e8edf5] mb-4">Vinyl Wrap Guides for Other Florida Cities</h3>
            <div className="flex flex-wrap gap-3">{otherCities.map((city) => (<Link key={city.slug} href={`/guides/vinyl-wraps/${city.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{city.name}</Link>))}</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

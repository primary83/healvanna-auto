"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Jacksonville",
  state: "FL",
  description: "Jacksonville offers the best interior detailing value in Florida. The lower cost of living translates to more affordable shop rates without sacrificing quality. Great for building a regular maintenance routine without breaking the bank.",
  averageCost: "$50-$350+",
  popularService: "Full interior detail & fabric care",
  localTip: "Jacksonville offers the best interior detailing value in Florida. The lower cost of living translates to more affordable shop rates without sacrificing quality. Great for building a regular maintenance routine without breaking the bank.",
  climate: "Jacksonville's 221 sunny days and slightly milder climate compared to South Florida are somewhat kinder to interiors. However, Atlantic salt air, pine sap, and pollen present their own unique challenges.",
  challenges: ["Atlantic coast salt air affects vehicles in beach communities", "Pine sap can permanently stain leather and fabric if not treated quickly", "Heavy pollen seasons coat interior surfaces when windows are left open", "Long commutes increase daily wear on seats and interior surfaces", "North Florida's occasional cold snaps can make leather feel stiffer", "Fewer premium detail specialists than larger Florida metros"],
  topServices: [{"n": "Full Interior Detail", "p": "$80-$225", "w": "Complete interior cleaning and conditioning at Jacksonville's best prices"}, {"n": "Leather Clean & Condition", "p": "$50-$100", "w": "Essential leather maintenance at Florida's most affordable pricing"}, {"n": "Fabric Extraction & Protection", "p": "$70-$175", "w": "Deep fabric cleaning with protective coating application"}, {"n": "Interior Odor Elimination", "p": "$40-$120", "w": "Professional odor removal at budget-friendly pricing"}],
  neighborhoods: ["San Marco / Riverside - Quality detail shops with attention to craft", "Southside / Town Center - Convenient options with good selection", "Jacksonville Beach - Coastal shops familiar with salt-air challenges", "Orange Park / Fleming Island - Suburban shops with competitive pricing", "Mandarin - Growing area with newer shops competing on value"]
};

const otherCities = [{"name": "Miami", "slug": "miami"}, {"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}];

export default function JacksonvilleLeatherGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does interior detailing cost in Jacksonville?", "a": "Jacksonville offers Florida's best value. Basic interior clean runs $50-$100, full detail $80-$225, and deep restoration $200-$350. That's typically 20-30% less than South Florida with comparable quality. A great market for establishing a regular maintenance routine."}, {"q": "How do I remove pine sap from my interior?", "a": "Pine sap hardens quickly and bonds to surfaces. For leather, apply a small amount of rubbing alcohol on a microfiber cloth and gently work the sap loose, then condition immediately. For fabric, freeze the sap with ice cubes then carefully pick it off before treating the area with fabric cleaner."}, {"q": "How often do Jacksonville cars need interior care?", "a": "Every 3-4 weeks for leather conditioning, weekly vacuuming for fabric. Jacksonville's climate is slightly milder than South Florida, so interiors last a bit longer between maintenance sessions. However, pollen season and beach trips may require more frequent cleaning."}, {"q": "Are there good mobile detailers in Jacksonville?", "a": "Yes - Jacksonville's spread-out layout has created a strong mobile detailing market. Many mobile detailers offer full interior services at your home or office, often at competitive prices. Check Google reviews and look for detailers with interior-specific experience."}];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><Link href="/guides/leather-upholstery-care" className="hover:text-[#4a90d9] transition-colors">Leather & Upholstery</Link><span>/</span><span className="text-[#e8edf5]">{cityData.name}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">🛋️</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{cityData.name}, {cityData.state}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">Leather & Upholstery Care in {cityData.name}: Complete Local Guide</h1>
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
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Interior Care in {cityData.name}: What to Know</h2><p className="text-[#b8c4d9] leading-relaxed mb-6">{cityData.climate}</p><div className="space-y-3">{cityData.challenges.map((c, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><span className="text-[#4a90d9] mt-0.5">⚠️</span><span className="text-[#b8c4d9]">{c}</span></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Popular Interior Services in {cityData.name}</h2><div className="space-y-4">{cityData.topServices.map((s, i) => (<div key={i} className="p-6 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="flex justify-between items-start mb-2"><h3 className="text-lg font-medium text-[#e8edf5]">{s.n}</h3><span className="text-[#4a90d9] font-medium">{s.p}</span></div><p className="text-[#6b7a94]">{s.w}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Interior Care Shops by Neighborhood</h2><div className="space-y-3">{cityData.neighborhoods.map((h, i) => (<div key={i} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><p className="text-[#b8c4d9]">{h}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} Interior Care FAQ</h2><div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{f.q}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === i && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{f.a}</p></div>)}</div>))}</div></div>
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10"><h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Interior Care Shops in {cityData.name}</h3><p className="text-[#6b7a94] mb-6">Browse top-rated interior detailing specialists in the {cityData.name} area.</p><Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link></div>
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10"><h3 className="text-lg font-medium text-[#e8edf5] mb-4">Interior Care Guides for Other Florida Cities</h3><div className="flex flex-wrap gap-3">{otherCities.map((c) => (<Link key={c.slug} href={`/guides/leather-upholstery-care/${c.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{c.name}</Link>))}</div></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

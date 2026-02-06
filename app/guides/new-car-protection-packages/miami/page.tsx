"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Miami",
  state: "FL",
  description: "Miami's luxury market means protection shops here regularly handle six-figure vehicles. The quality standards are high, and many shops offer comprehensive new car packages that bundle PPF, ceramic coating, and tint at 10-20% less than individual pricing.",
  averageCost: "$1,500-$10,000+",
  popularService: "Full PPF + ceramic + tint packages",
  localTip: "Miami's luxury market means protection shops here regularly handle six-figure vehicles. The quality standards are high, and many shops offer comprehensive new car packages that bundle PPF, ceramic coating, and tint at 10-20% less than individual pricing.",
  climate: "Miami's 248 sunny days, extreme UV, salt air, and love bug seasons make new car protection more essential here than almost anywhere in the country. Unprotected paint degrades noticeably faster in Miami than any other major Florida city.",
  challenges: ["Extreme UV causes unprotected paint to oxidize within 1-2 years", "Salt air attacks any exposed metal from rock chips immediately", "Love bug acid etches unprotected clear coat within 24 hours in Miami heat", "Hard water from sprinklers leaves permanent etching on unprotected paint", "Dealership protection packages are heavily pushed but generally overpriced", "High demand means top shops may have 2-4 week wait times for new car packages"],
  topServices: [{"n": "Essential Package (Tint + Spray Ceramic)", "p": "$400-$800", "w": "Budget protection with ceramic tint and DIY-grade ceramic spray"}, {"n": "Smart Package (Ceramic + Tint + Partial PPF)", "p": "$2,000-$4,000", "w": "Miami's most popular new car package - excellent value and protection"}, {"n": "Premium Package (Full-Front PPF + Ceramic + Tint)", "p": "$3,500-$6,000", "w": "Comprehensive protection for Miami's luxury vehicle market"}, {"n": "Ultimate Package (Full-Body PPF + Ceramic + Tint)", "p": "$6,000-$12,000+", "w": "Maximum protection for exotic and high-value vehicles"}],
  neighborhoods: ["Wynwood / Design District - Premium shops with exotic vehicle protection expertise", "Doral - Multiple established PPF/ceramic shops with competitive package pricing", "Hialeah - Value-oriented shops offering quality protection at accessible prices", "Brickell / Downtown - High-end shops catering to luxury condo residents", "Kendall - Good options serving South Miami-Dade's growing vehicle market"]
};

const otherCities = [{"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function MiamiNewCarGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How much does a new car protection package cost in Miami?", "a": "Miami packages range from $400-$800 (tint + basic ceramic) to $6,000-$12,000+ (full body PPF + ceramic + tint). The most popular Smart Package runs $2,000-$4,000 and includes professional ceramic coating, ceramic tint, and partial PPF. Bundle pricing saves 10-20% over individual services."}, {"q": "Should I decline the Miami dealer's protection package?", "a": "Almost always yes. Miami dealers commonly charge $2,000-$4,000 for packages worth $500-$800 in actual product quality. Specialist shops use professional-grade products (Xpel, Ceramic Pro, 3M) with manufacturer warranties that dealer products can't match."}, {"q": "How soon after buying should I get protection in Miami?", "a": "Within 2-4 weeks, ideally sooner. Miami's UV and environmental threats start damaging paint immediately. Get window tint first (week 1), then PPF (if applicable), then ceramic coating. Some shops offer expedited new car packages."}, {"q": "What's the minimum protection for a Miami car?", "a": "At absolute minimum, ceramic window tint ($300-$500) and a quality ceramic spray coating ($30-$50 DIY). This provides UV protection for your interior and basic paint protection. Budget $1,500-$3,000 for the recommended Smart Package when possible."}];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><Link href="/guides/new-car-protection-packages" className="hover:text-[#4a90d9] transition-colors">New Car Protection</Link><span>/</span><span className="text-[#e8edf5]">{cityData.name}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">🚗</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{cityData.name}, {cityData.state}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">New Car Protection Packages in {cityData.name}: Complete Local Guide</h1>
          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{cityData.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Package Range</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.averageCost}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Most Popular</div><div className="text-lg font-medium text-[#4a90d9]">{cityData.popularService}</div></div>
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">248 sunny days/yr</div></div>
          </div>
        </div>
      </section>
      <section className="relative px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 p-6 rounded-2xl bg-[#4a90d9]/5 border border-[#4a90d9]/20"><h3 className="text-lg font-medium text-[#4a90d9] mb-2">💡 Local Tip</h3><p className="text-[#b8c4d9]">{cityData.localTip}</p></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">New Car Protection in {cityData.name}: What to Know</h2><p className="text-[#b8c4d9] leading-relaxed mb-6">{cityData.climate}</p><div className="space-y-3">{cityData.challenges.map((c, i) => (<div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><span className="text-[#4a90d9] mt-0.5">⚠️</span><span className="text-[#b8c4d9]">{c}</span></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Protection Packages in {cityData.name}</h2><div className="space-y-4">{cityData.topServices.map((s, i) => (<div key={i} className="p-6 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="flex justify-between items-start mb-2"><h3 className="text-lg font-medium text-[#e8edf5]">{s.n}</h3><span className="text-[#4a90d9] font-medium">{s.p}</span></div><p className="text-[#6b7a94]">{s.w}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Protection Shops by Neighborhood</h2><div className="space-y-3">{cityData.neighborhoods.map((h, i) => (<div key={i} className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><p className="text-[#b8c4d9]">{h}</p></div>))}</div></div>
          <div className="mb-12"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{cityData.name} New Car Protection FAQ</h2><div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{f.q}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === i && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{f.a}</p></div>)}</div>))}</div></div>
          <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10"><h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Protection Specialists in {cityData.name}</h3><p className="text-[#6b7a94] mb-6">Browse top-rated PPF, ceramic coating, and tint specialists in the {cityData.name} area.</p><Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link></div>
          <div className="mt-12 pt-8 border-t border-[#4a90d9]/10"><h3 className="text-lg font-medium text-[#e8edf5] mb-4">New Car Protection Guides for Other Florida Cities</h3><div className="flex flex-wrap gap-3">{otherCities.map((c) => (<Link key={c.slug} href={`/guides/new-car-protection-packages/${c.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{c.name}</Link>))}</div></div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

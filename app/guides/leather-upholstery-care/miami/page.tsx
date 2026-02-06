"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const cityData = {
  name: "Miami",
  state: "FL",
  description: "Miami's combination of extreme heat and luxury vehicle concentration means leather care is taken seriously here. Many detailing shops offer monthly leather maintenance subscriptions that save money long-term.",
  averageCost: "$75-$500+",
  popularService: "Leather conditioning & UV protection",
  localTip: "Miami's combination of extreme heat and luxury vehicle concentration means leather care is taken seriously here. Many detailing shops offer monthly leather maintenance subscriptions that save money long-term.",
  climate: "Miami's 248 sunny days and extreme heat create the harshest conditions for leather interiors in Florida. Cars parked in direct sun regularly reach 150-160°F interior temperatures, making leather conditioning essential.",
  challenges: ["Interior temperatures reaching 160\u00b0F crack and dry leather rapidly", "UV exposure fades and discolors leather, especially lighter colors", "High humidity promotes mold growth in closed vehicles", "Salt air accelerates degradation of leather and interior materials", "Sand from beach trips grinds into leather causing premature wear", "Dye transfer from clothing is accelerated by heat and sweat"],
  topServices: [{"n": "Full Interior Detail", "p": "$150-$350", "w": "Complete leather cleaning, conditioning, and interior restoration"}, {"n": "Leather Conditioning Service", "p": "$75-$150", "w": "Essential maintenance to prevent Florida heat damage to leather"}, {"n": "Interior Ceramic Coating", "p": "$150-$400", "w": "Long-lasting UV and stain protection for leather and interior surfaces"}, {"n": "Mold Remediation", "p": "$200-$500", "w": "Professional mold removal for humidity-damaged interiors"}],
  neighborhoods: ["Wynwood / Design District - Premium detailing shops with luxury vehicle experience", "Doral - Multiple established shops with competitive pricing", "Hialeah - Budget-friendly options with quality leather care services", "Brickell / Downtown - High-end shops catering to the luxury condo crowd", "Kendall - Good selection of detailing shops serving South Miami-Dade"]
};

const otherCities = [{"name": "Orlando", "slug": "orlando"}, {"name": "Tampa", "slug": "tampa"}, {"name": "Fort Lauderdale", "slug": "fort-lauderdale"}, {"name": "Jacksonville", "slug": "jacksonville"}];

export default function MiamiLeatherGuide() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const faqs = [{"q": "How often should I condition leather in Miami?", "a": "Every 2-3 weeks during summer, every 3-4 weeks in winter. Miami's extreme heat dries leather faster than anywhere else in Florida. Feel your seats - if they're dry or stiff, they're overdue. A quick conditioning takes 15-20 minutes and prevents expensive cracking."}, {"q": "How do I prevent mold in my car in Miami?", "a": "Run your AC regularly to dehumidify, never leave wet items inside, use moisture absorber bags, and crack windows slightly when garage-parked for extended periods. Miami's humidity makes mold prevention a year-round concern, not just a summer issue."}, {"q": "How much does interior detailing cost in Miami?", "a": "Basic interior cleaning runs $75-$150, full detail with leather conditioning $150-$350, and deep interior restoration $300-$500+. Miami pricing is slightly above average but the quality and experience with luxury interiors is excellent."}, {"q": "Can Miami's heat permanently damage my leather?", "a": "Yes, prolonged exposure without conditioning causes irreversible cracking. Once leather cracks, it can only be repaired, not restored to original condition. Prevention through regular conditioning, window tinting, and using a sunshade is far cheaper than repair."}];

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
            <div className="p-4 rounded-xl bg-[#0d1424] border border-[#4a90d9]/10"><div className="text-sm text-[#6b7a94]">Climate</div><div className="text-lg font-medium text-[#4a90d9]">248 sunny days/yr</div></div>
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

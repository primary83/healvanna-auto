"use client";

import Link from "next/link";

export default function MercedesEQB() {
  const variants = [
    { name: "EQB 250+", price: "$52,750", range: "245 miles", acceleration: "8.0s 0-60 mph", topSpeed: "99 mph", power: "188 hp" },
    { name: "EQB 300 4MATIC", price: "$54,500", range: "232 miles", acceleration: "7.7s 0-60 mph", topSpeed: "99 mph", power: "225 hp" },
    { name: "EQB 350 4MATIC", price: "$58,050", range: "227 miles", acceleration: "5.6s 0-60 mph", topSpeed: "99 mph", power: "288 hp" }
  ];

  const features = [
    { icon: "👨‍👩‍👧‍👦", title: "7 Seats Available", description: "Optional third row for up to 7 passengers." },
    { icon: "📱", title: "MBUX System", description: "Intuitive infotainment with voice control and navigation." },
    { icon: "🛡️", title: "Safety Systems", description: "Active brake assist and driver attention monitoring." },
    { icon: "⚡", title: "100 kW Charging", description: "DC fast charging from 10-80% in 32 minutes." }
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-light tracking-wider">HEALVANNA <span className="text-emerald-400">AUTO</span></Link>
          <div className="flex gap-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">HOME</Link>
            <Link href="/cars" className="text-emerald-400">CARS</Link>
            <Link href="/care" className="text-slate-300 hover:text-white transition-colors">CARE</Link>
            <Link href="/craft" className="text-slate-300 hover:text-white transition-colors">CRAFT</Link>
            <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">BLOG</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Link href="/cars" className="hover:text-white transition-colors">Cars</Link><span>/</span>
          <Link href="/cars/mercedes" className="hover:text-white transition-colors">Mercedes-Benz</Link><span>/</span>
          <span className="text-white">EQB</span>
        </div>
      </div>

      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 rounded-full text-cyan-400 text-sm mb-4">
                <span>Mercedes-EQ</span><span>•</span><span>Electric Compact SUV</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">Mercedes-Benz EQB</h1>
              <p className="text-xl text-slate-300 mb-8">The versatile family EV. The EQB offers Mercedes luxury in a practical, family-friendly electric SUV with available 7-seat configuration.</p>
              <div className="flex gap-8 mb-8">
                <div><div className="text-3xl font-bold text-cyan-400">$52,750</div><div className="text-slate-400">Starting Price</div></div>
                <div><div className="text-3xl font-bold text-white">245 mi</div><div className="text-slate-400">Max Range</div></div>
                <div><div className="text-3xl font-bold text-white">5.6s</div><div className="text-slate-400">0-60 mph</div></div>
              </div>
              <div className="flex gap-4">
                <a href="https://www.mbusa.com/en/vehicles/class/eqb/suv" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2">
                  Build Your EQB <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <a href="https://www.mbusa.com/en/dealers" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors">Find Dealer</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-slate-700/50 overflow-hidden">
                <img src="/cars/mercedes/eqb.png" alt="Mercedes-Benz EQB" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-cyan-500 rounded-full text-white text-sm font-medium">7 Seats</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Available Variants</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {variants.map((variant, index) => (
              <div key={variant.name} className={`rounded-2xl p-6 border ${index === 2 ? 'bg-gradient-to-br from-cyan-500/10 to-slate-900 border-cyan-500/30' : 'bg-slate-900/50 border-slate-800'}`}>
                {index === 2 && <div className="inline-block px-2 py-1 bg-cyan-500/20 rounded text-cyan-400 text-xs mb-3">MOST POWERFUL</div>}
                <h3 className="text-xl font-semibold text-white mb-4">{variant.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-slate-400">Price</span><span className="text-cyan-400 font-semibold">{variant.price}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Range</span><span className="text-white">{variant.range}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">0-60 mph</span><span className="text-white">{variant.acceleration}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Top Speed</span><span className="text-white">{variant.topSpeed}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Power</span><span className="text-white">{variant.power}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Explore Other Mercedes-EQ Models</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/cars/mercedes/eqs" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">EQS</h3>
              <p className="text-sm text-slate-400">From $104,400</p>
            </Link>
            <Link href="/cars/mercedes/eqe" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-cyan-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">EQE</h3>
              <p className="text-sm text-slate-400">From $74,900</p>
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-slate-800/50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-400"><p>© 2026 Healvanna Auto. All rights reserved.</p></div>
      </footer>
    </main>
  );
}

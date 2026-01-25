"use client";

import Link from "next/link";

export default function PorscheTaycan() {
  const variants = [
    { name: "Taycan", price: "$92,900", range: "246 miles", acceleration: "4.8s 0-60 mph", topSpeed: "143 mph", power: "402 hp" },
    { name: "Taycan 4S", price: "$106,400", range: "227 miles", acceleration: "3.7s 0-60 mph", topSpeed: "155 mph", power: "522 hp" },
    { name: "Taycan Turbo S", price: "$185,000", range: "222 miles", acceleration: "2.6s 0-60 mph", topSpeed: "161 mph", power: "750 hp" }
  ];

  const features = [
    { icon: "⚡", title: "800V Architecture", description: "Industry-leading voltage for faster charging and better performance." },
    { icon: "🏁", title: "Launch Control", description: "Consistent acceleration runs with overboost capability." },
    { icon: "🔄", title: "2-Speed Transmission", description: "Unique rear-axle gearbox for optimal efficiency and performance." },
    { icon: "⚡", title: "270 kW Charging", description: "Charge from 5-80% in just 22.5 minutes." }
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
          <Link href="/cars/porsche" className="hover:text-white transition-colors">Porsche</Link><span>/</span>
          <span className="text-white">Taycan</span>
        </div>
      </div>

      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/20 rounded-full text-rose-400 text-sm mb-4">
                <span>Porsche</span><span>•</span><span>Electric Sports Sedan</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">Porsche Taycan</h1>
              <p className="text-xl text-slate-300 mb-8">The soul, electrified. The Taycan combines iconic Porsche performance with electric power, delivering an exhilarating driving experience with zero emissions.</p>
              <div className="flex gap-8 mb-8">
                <div><div className="text-3xl font-bold text-rose-400">$92,900</div><div className="text-slate-400">Starting Price</div></div>
                <div><div className="text-3xl font-bold text-white">246 mi</div><div className="text-slate-400">Max Range</div></div>
                <div><div className="text-3xl font-bold text-white">2.6s</div><div className="text-slate-400">0-60 (Turbo S)</div></div>
              </div>
              <div className="flex gap-4">
                <a href="https://www.porsche.com/usa/models/taycan/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2">
                  Configure on Porsche.com <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <a href="https://www.porsche.com/usa/dealersearch/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors">Find Dealer</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-slate-700/50 overflow-hidden">
                <img src="/cars/porsche/taycan.png" alt="Porsche Taycan" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-rose-500 rounded-full text-white text-sm font-medium">800V</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Available Variants</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {variants.map((variant, index) => (
              <div key={variant.name} className={`rounded-2xl p-6 border ${index === 2 ? 'bg-gradient-to-br from-rose-500/10 to-slate-900 border-rose-500/30' : 'bg-slate-900/50 border-slate-800'}`}>
                {index === 2 && <div className="inline-block px-2 py-1 bg-rose-500/20 rounded text-rose-400 text-xs mb-3">TURBO S</div>}
                <h3 className="text-xl font-semibold text-white mb-4">{variant.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-slate-400">Price</span><span className="text-rose-400 font-semibold">{variant.price}</span></div>
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
          <h2 className="text-2xl font-bold text-white mb-8">Explore Other Porsche Models</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/cars/porsche/macan-ev" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-rose-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-rose-400 transition-colors">Macan Electric</h3>
              <p className="text-sm text-slate-400">From $80,450</p>
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

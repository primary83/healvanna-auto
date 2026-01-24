"use client";
import Link from "next/link";

export default function TeslaModelS() {
  const variants = [
    { name: "Model S", price: "$74,990", range: "402 miles", acceleration: "3.2s 0-60 mph", topSpeed: "149 mph", drive: "All-Wheel Drive" },
    { name: "Model S Plaid", price: "$89,990", range: "348 miles", acceleration: "1.99s 0-60 mph", topSpeed: "200 mph", drive: "Tri-Motor AWD" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-light tracking-wider">HEALVANNA <span className="text-emerald-400">AUTO</span></Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-slate-400 hover:text-emerald-400">HOME</Link>
            <Link href="/cars" className="text-sm text-emerald-400">CARS</Link>
            <Link href="/care" className="text-sm text-slate-400 hover:text-emerald-400">CARE</Link>
            <Link href="/craft" className="text-sm text-slate-400 hover:text-emerald-400">CRAFT</Link>
            <Link href="/blog" className="text-sm text-slate-400 hover:text-emerald-400">BLOG</Link>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/cars" className="hover:text-emerald-400">Cars</Link><span>/</span>
            <Link href="/cars/tesla" className="hover:text-emerald-400">Tesla</Link><span>/</span>
            <span className="text-white">Model S</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-sm font-medium mb-4">
                <span>Tesla</span><span>•</span><span>Luxury Electric Sedan</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Tesla Model S</h1>
              <p className="text-xl text-slate-300 mb-6">The flagship luxury sedan with the longest range and fastest acceleration of any production car. Model S Plaid does 0-60 in just 1.99 seconds.</p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div><div className="text-3xl font-bold text-emerald-400">$74,990</div><div className="text-sm text-slate-400">Starting Price</div></div>
                <div><div className="text-3xl font-bold text-white">402 mi</div><div className="text-sm text-slate-400">Max Range</div></div>
                <div><div className="text-3xl font-bold text-white">1.99s</div><div className="text-sm text-slate-400">0-60 (Plaid)</div></div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.tesla.com/models/design" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl">
                  Configure on Tesla.com
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <a href="https://www.tesla.com/findus" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl">Find Tesla Store</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-slate-700/50">
                <p className="text-slate-500">Tesla Model S</p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">1,020 HP Plaid</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Available Variants</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {variants.map((variant, index) => (
              <div key={variant.name} className={`rounded-2xl p-6 border ${index === 1 ? 'bg-gradient-to-br from-red-900/30 to-slate-800/50 border-red-500/30' : 'bg-slate-800/30 border-slate-700/50'}`}>
                {index === 1 && <div className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full mb-4">PLAID - FASTEST CAR EVER</div>}
                <h3 className="text-xl font-bold text-white mb-4">{variant.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between"><span className="text-slate-400">Price</span><span className="text-emerald-400 font-semibold">{variant.price}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Range</span><span className="text-white">{variant.range}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">0-60 mph</span><span className="text-white">{variant.acceleration}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Top Speed</span><span className="text-white">{variant.topSpeed}</span></div>
                </div>
                <a href="https://www.tesla.com/models/design" target="_blank" rel="noopener noreferrer" className={`block text-center py-3 rounded-xl font-semibold ${index === 1 ? 'bg-red-600 hover:bg-red-500' : 'bg-slate-700 hover:bg-slate-600'} text-white`}>Configure</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🏎️", title: "Fastest Acceleration", desc: "0-60 in 1.99 seconds with Plaid—the quickest production car ever." },
              { icon: "🔋", title: "402 Mile Range", desc: "Go further than any other EV on a single charge." },
              { icon: "🎮", title: "Gaming Computer", desc: "10 teraflops of processing power for AAA gaming." },
              { icon: "✈️", title: "Yoke Steering", desc: "Aircraft-inspired steering for an immersive experience." },
              { icon: "🔊", title: "22-Speaker Audio", desc: "960 watts with active noise cancellation." },
              { icon: "💨", title: "Lowest Drag", desc: "0.208 Cd—most aerodynamic production car." }
            ].map(f => (
              <div key={f.title} className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl p-8 md:p-12 border border-emerald-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">Protect Your Tesla Model S</h2>
            <p className="text-slate-300 mb-6">Your flagship sedan deserves premium protection. Our ceramic coating and PPF preserve your Model S's stunning finish.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/care" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl">View Care Services</Link>
              <Link href="/craft" className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl">Custom Modifications</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Other Tesla Models</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { name: "Model 3", price: "$38,990", slug: "model-3" },
              { name: "Model Y", price: "$44,990", slug: "model-y" },
              { name: "Model X", price: "$79,990", slug: "model-x" },
              { name: "Cybertruck", price: "$79,990", slug: "cybertruck" }
            ].map(m => (
              <Link key={m.slug} href={`/cars/tesla/${m.slug}`} className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50">
                <h3 className="font-semibold text-white group-hover:text-emerald-400">{m.name}</h3>
                <p className="text-sm text-slate-400">From {m.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-slate-800/50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© 2026 Healvanna Auto. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

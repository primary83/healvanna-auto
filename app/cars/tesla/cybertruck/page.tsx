"use client";
import Link from "next/link";

export default function TeslaCybertruck() {
  const variants = [
    { name: "Cybertruck RWD", price: "$60,990", range: "250 miles", acceleration: "6.5s 0-60 mph", topSpeed: "112 mph", drive: "Rear-Wheel Drive" },
    { name: "Cybertruck AWD", price: "$79,990", range: "318 miles", acceleration: "4.1s 0-60 mph", topSpeed: "120 mph", drive: "Dual Motor AWD" },
    { name: "Cybertruck Cyberbeast", price: "$99,990", range: "301 miles", acceleration: "2.6s 0-60 mph", topSpeed: "130 mph", drive: "Tri-Motor AWD" }
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
            <span className="text-white">Cybertruck</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-sm font-medium mb-4">
                <span>Tesla</span><span>•</span><span>Electric Pickup Truck</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Tesla Cybertruck</h1>
              <p className="text-xl text-slate-300 mb-6">The revolutionary stainless steel electric truck that's unlike anything else on the road. Built to be nearly impenetrable with an exoskeleton design.</p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div><div className="text-3xl font-bold text-emerald-400">$60,990</div><div className="text-sm text-slate-400">Starting Price</div></div>
                <div><div className="text-3xl font-bold text-white">318 mi</div><div className="text-sm text-slate-400">Max Range</div></div>
                <div><div className="text-3xl font-bold text-white">2.6s</div><div className="text-sm text-slate-400">0-60 (Beast)</div></div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.tesla.com/cybertruck/design" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl">
                  Configure on Tesla.com
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <a href="https://www.tesla.com/findus" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl">Find Tesla Store</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-slate-700/50">
                <p className="text-slate-500">Tesla Cybertruck</p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-slate-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Stainless Steel</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Available Variants</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {variants.map((variant, index) => (
              <div key={variant.name} className={`rounded-2xl p-6 border ${index === 2 ? 'bg-gradient-to-br from-red-900/30 to-slate-800/50 border-red-500/30' : 'bg-slate-800/30 border-slate-700/50'}`}>
                {index === 2 && <div className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full mb-4">CYBERBEAST - 845 HP</div>}
                <h3 className="text-xl font-bold text-white mb-4">{variant.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between"><span className="text-slate-400">Price</span><span className="text-emerald-400 font-semibold">{variant.price}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Range</span><span className="text-white">{variant.range}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">0-60 mph</span><span className="text-white">{variant.acceleration}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Top Speed</span><span className="text-white">{variant.topSpeed}</span></div>
                </div>
                <a href="https://www.tesla.com/cybertruck/design" target="_blank" rel="noopener noreferrer" className={`block text-center py-3 rounded-xl font-semibold ${index === 2 ? 'bg-red-600 hover:bg-red-500' : 'bg-slate-700 hover:bg-slate-600'} text-white`}>Configure</a>
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
              { icon: "🛡️", title: "Ultra-Hard Stainless Steel", desc: "Exoskeleton made from 30X cold-rolled stainless steel." },
              { icon: "💪", title: "11,000 lb Towing", desc: "Tow more than most full-size trucks on the market." },
              { icon: "📦", title: "6.5ft Bed", desc: "Versatile vault with 100 cu ft of lockable storage." },
              { icon: "⚡", title: "PowerShare", desc: "Use your truck as a mobile power source for tools or homes." },
              { icon: "🪨", title: "Armor Glass", desc: "Ultra-strong glass designed to resist impacts." },
              { icon: "🚀", title: "0-60 in 2.6s", desc: "Cyberbeast is faster than most supercars." }
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
            <h2 className="text-2xl font-bold text-white mb-4">Protect Your Cybertruck</h2>
            <p className="text-slate-300 mb-6">Even stainless steel benefits from protection. Our specialized coatings keep your Cybertruck looking its best and easier to clean.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/care" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl">View Care Services</Link>
              <Link href="/craft" className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl">Custom Accessories</Link>
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
              { name: "Model S", price: "$74,990", slug: "model-s" },
              { name: "Model X", price: "$79,990", slug: "model-x" }
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

"use client";

import Link from "next/link";

export default function PorscheBrand() {
  const vehicles = [
    { name: "Taycan", slug: "taycan", type: "Electric Sports Sedan", price: "$92,900", range: "246 miles", acceleration: "2.6s 0-60", image: "/cars/porsche/taycan.png", description: "The soul, electrified." },
    { name: "Macan Electric", slug: "macan-ev", type: "Electric Sports SUV", price: "$80,450", range: "308 miles", acceleration: "3.1s 0-60", image: "/cars/porsche/macan-ev.png", description: "All-electric, all Macan." }
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

      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link href="/cars" className="text-rose-400 hover:text-rose-300 transition-colors inline-flex items-center gap-2"><span>←</span> Back to All Brands</Link>
      </div>

      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">🏎️</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Porsche</h1>
              <p className="text-slate-400">Electric Performance • Founded 1931 • Stuttgart, Germany</p>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">Porsche electrifies its legendary sports car DNA with the Taycan and Macan Electric. Experience the thrill of Porsche performance with zero emissions.</p>

          <div className="grid grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-rose-400">2</div>
              <div className="text-slate-400">Models Available</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-rose-400">308 mi</div>
              <div className="text-slate-400">Max Range</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-rose-400">2.6s</div>
              <div className="text-slate-400">Fastest 0-60</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-rose-400">800V</div>
              <div className="text-slate-400">Architecture</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Porsche Electric Models</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {vehicles.map((vehicle) => (
              <Link key={vehicle.slug} href={`/cars/porsche/${vehicle.slug}`} className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-rose-500/50 transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-rose-500 rounded-full text-white text-sm font-medium">Porsche</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Porsche {vehicle.name}</h3>
                  <p className="text-slate-400 mb-4">{vehicle.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div><div className="text-sm text-slate-500">Starting at</div><div className="text-rose-400 font-semibold">{vehicle.price}</div></div>
                    <div><div className="text-sm text-slate-500">Range</div><div className="text-white font-semibold">{vehicle.range}</div></div>
                  </div>
                  <div className="text-rose-400 group-hover:text-rose-300 font-medium inline-flex items-center gap-2">View Details <span>→</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Protect Your Investment CTA */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-4">
              Own a Porsche? Protect Your Investment
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl">
              Our premium ceramic coating and PPF services keep your Porsche looking showroom-new for years.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/care" 
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Explore Care Services <span>›</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 border-t border-slate-800/50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-400"><p>© 2026 Healvanna Auto. All rights reserved.</p></div>
      </footer>
    </main>
  );
}

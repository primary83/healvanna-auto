"use client";

import Link from "next/link";

export default function GenesisBrand() {
  const vehicles = [
    { name: "GV60", slug: "gv60", type: "Compact SUV", price: "$52,000", range: "248 miles", acceleration: "4.0s 0-60", image: "https://images.unsplash.com/photo-1680266694127-1029b5765fd5?w=800&q=80", description: "A sporty compact electric SUV with face recognition entry and drift mode." },
    { name: "Electrified G80", slug: "e-g80", type: "Luxury Sedan", price: "$79,900", range: "282 miles", acceleration: "4.9s 0-60", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", description: "Genesis's flagship sedan electrified — combining timeless elegance with zero emissions." },
    { name: "Electrified GV70", slug: "e-gv70", type: "Mid-Size SUV", price: "$65,850", range: "236 miles", acceleration: "4.2s 0-60", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80", description: "A premium electric SUV with athletic design and generous standard equipment." },
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
      <div className="max-w-7xl mx-auto px-4 py-6"><Link href="/cars" className="text-amber-600 hover:text-amber-500 transition-colors inline-flex items-center gap-2"><span>←</span> Back to All Brands</Link></div>
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center"><span className="text-2xl font-bold text-amber-600">G</span></div>
            <div><h1 className="text-4xl font-bold text-white">Genesis</h1><p className="text-slate-400">Korean Luxury & EVs • Founded 2015 • Seoul, South Korea</p></div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">Hyundai&apos;s luxury division delivers exceptional value with striking design, advanced technology, and growing electric options that rival European marques.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-amber-600">3</div><div className="text-slate-400">EV Models</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-amber-600">282 mi</div><div className="text-slate-400">Max Range</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-amber-600">4.0s</div><div className="text-slate-400">Fastest 0-60</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-amber-600">800V</div><div className="text-slate-400">Fast Charging</div></div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Genesis EV Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <Link key={vehicle.slug} href={`/cars/genesis/${vehicle.slug}`} className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-600/50 transition-all">
                <div className="aspect-video relative overflow-hidden"><img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-4 right-4 px-3 py-1 bg-amber-700 rounded-full text-white text-sm font-medium">Genesis</div></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Genesis {vehicle.name}</h3><p className="text-slate-400 mb-4">{vehicle.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div><div className="text-sm text-slate-500">Starting at</div><div className="text-amber-600 font-semibold">{vehicle.price}</div></div>
                    <div><div className="text-sm text-slate-500">Range</div><div className="text-white font-semibold">{vehicle.range}</div></div>
                    <div><div className="text-sm text-slate-500">0-60 mph</div><div className="text-white font-semibold">{vehicle.acceleration}</div></div>
                    <div><div className="text-sm text-slate-500">Type</div><div className="text-white font-semibold">{vehicle.type}</div></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-slate-950 border-t border-slate-800/50 py-12 px-4"><div className="max-w-7xl mx-auto text-center text-slate-400"><p>© 2026 Healvanna Auto. All rights reserved.</p></div></footer>
    </main>
  );
}

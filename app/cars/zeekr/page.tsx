"use client";

import Link from "next/link";

export default function ZeekrBrand() {
  const vehicles = [
    { name: "001", slug: "001", type: "Shooting Brake", price: "$48,900", range: "390 miles", acceleration: "3.8s 0-60", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80", description: "A stunning shooting brake that blends performance GT driving with everyday practicality." },
    { name: "009", slug: "009", type: "Luxury MPV", price: "$58,900", range: "380 miles", acceleration: "4.5s 0-60", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", description: "A luxury electric MPV designed for executive comfort and family travel." },
    { name: "X", slug: "x", type: "Compact SUV", price: "$29,900", range: "310 miles", acceleration: "5.5s 0-60", image: "https://images.unsplash.com/photo-1670974085498-72cebc5e0c49?w=800&q=80", description: "Zeekr's most accessible model — a compact urban SUV with premium features." },
    { name: "007", slug: "007", type: "Performance Sedan", price: "$42,900", range: "420 miles", acceleration: "2.8s 0-60", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80", description: "A performance sedan with supercar acceleration and exceptional range." },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-light tracking-wider">HEALVANNA <span className="text-violet-400">AUTO</span></Link>
          <div className="flex gap-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">HOME</Link>
            <Link href="/cars" className="text-violet-400">CARS</Link>
            <Link href="/care" className="text-slate-300 hover:text-white transition-colors">CARE</Link>
            <Link href="/craft" className="text-slate-300 hover:text-white transition-colors">CRAFT</Link>
            <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">BLOG</Link>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 py-6"><Link href="/cars" className="text-violet-400 hover:text-violet-300 transition-colors inline-flex items-center gap-2"><span>←</span> Back to All Brands</Link></div>
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center"><span className="text-2xl font-bold text-violet-400">ZK</span></div>
            <div><h1 className="text-4xl font-bold text-white">Zeekr</h1><p className="text-slate-400">Premium Performance EVs • Founded 2021 • Ningbo, China</p></div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">Geely&apos;s premium EV brand combines Scandinavian-inspired design with cutting-edge battery technology, including the ultra-fast-charging Golden Battery architecture.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-violet-400">4</div><div className="text-slate-400">Models Available</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-violet-400">420 mi</div><div className="text-slate-400">Max Range</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-violet-400">2.8s</div><div className="text-slate-400">Fastest 0-60</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-violet-400">800V</div><div className="text-slate-400">Architecture</div></div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Zeekr Models</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.slug} className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-violet-400/50 transition-all">
                <div className="aspect-video relative overflow-hidden"><img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-4 right-4 px-3 py-1 bg-violet-500 rounded-full text-white text-sm font-medium">Zeekr</div></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Zeekr {vehicle.name}</h3>
                  <p className="text-slate-400 mb-4">{vehicle.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div><div className="text-sm text-slate-500">Starting at</div><div className="text-violet-400 font-semibold">{vehicle.price}</div></div>
                    <div><div className="text-sm text-slate-500">Range</div><div className="text-white font-semibold">{vehicle.range}</div></div>
                    <div><div className="text-sm text-slate-500">0-60 mph</div><div className="text-white font-semibold">{vehicle.acceleration}</div></div>
                    <div><div className="text-sm text-slate-500">Type</div><div className="text-white font-semibold">{vehicle.type}</div></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className="bg-slate-950 border-t border-slate-800/50 py-12 px-4"><div className="max-w-7xl mx-auto text-center text-slate-400"><p>© 2026 Healvanna Auto. All rights reserved.</p></div></footer>
    </main>
  );
}

"use client";

import Link from "next/link";

export default function LucidBrand() {
  const vehicles = [
    { name: "Air Pure", slug: "air-pure", type: "Luxury Sedan", price: "$69,900", range: "410 miles", acceleration: "4.5s 0-60", image: "https://images.unsplash.com/photo-1664141249828-5c6e1b3faed5?w=800&q=80", description: "The entry point to Lucid's luxury lineup with incredible efficiency and range." },
    { name: "Air Touring", slug: "air-touring", type: "Luxury Sedan", price: "$78,900", range: "425 miles", acceleration: "3.4s 0-60", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", description: "A perfect balance of performance, range, and luxury for the discerning driver." },
    { name: "Air Grand Touring", slug: "air-grand-touring", type: "Luxury Sedan", price: "$109,900", range: "516 miles", acceleration: "3.0s 0-60", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80", description: "Over 500 miles of range — the most efficient luxury EV ever produced." },
    { name: "Air Sapphire", slug: "air-sapphire", type: "Performance Sedan", price: "$249,900", range: "427 miles", acceleration: "1.89s 0-60", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80", description: "The fastest sedan ever made. Tri-motor performance that rewrites the rules." },
    { name: "Gravity", slug: "gravity", type: "Luxury SUV", price: "$79,900", range: "440 miles", acceleration: "3.5s 0-60", image: "https://images.unsplash.com/photo-1675467521498-58e52a4f4cbc?w=800&q=80", description: "Lucid's first SUV brings Air-level luxury and efficiency to the SUV segment." },
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
      <div className="max-w-7xl mx-auto px-4 py-6"><Link href="/cars" className="text-amber-500 hover:text-amber-400 transition-colors inline-flex items-center gap-2"><span>←</span> Back to All Brands</Link></div>
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center"><span className="text-2xl font-bold text-amber-500">L</span></div>
            <div><h1 className="text-4xl font-bold text-white">Lucid</h1><p className="text-slate-400">Ultra-Luxury EVs • Founded 2007 • Newark, California</p></div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">Setting new standards in EV range and luxury, Lucid delivers the most efficient electric powertrains wrapped in California-designed elegance. The Air Sapphire is the fastest sedan ever made.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-amber-500">5</div><div className="text-slate-400">Models Available</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-amber-500">516 mi</div><div className="text-slate-400">Max Range</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-amber-500">1.89s</div><div className="text-slate-400">Fastest 0-60</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-amber-500">1,234 hp</div><div className="text-slate-400">Peak Power</div></div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Lucid Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <Link key={vehicle.slug} href={`/cars/lucid/${vehicle.slug}`} className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all">
                <div className="aspect-video relative overflow-hidden"><img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-4 right-4 px-3 py-1 bg-amber-600 rounded-full text-white text-sm font-medium">Lucid</div></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Lucid {vehicle.name}</h3>
                  <p className="text-slate-400 mb-4">{vehicle.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div><div className="text-sm text-slate-500">Starting at</div><div className="text-amber-500 font-semibold">{vehicle.price}</div></div>
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

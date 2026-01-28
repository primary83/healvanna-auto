"use client";

import Link from "next/link";

export default function NIOBrand() {
  const vehicles = [
    { name: "ET7", slug: "et7", type: "Luxury Sedan", price: "$69,900", range: "360 miles", acceleration: "3.8s 0-60", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", description: "NIO's flagship luxury sedan with swappable battery and advanced autonomous features." },
    { name: "ET5", slug: "et5", type: "Mid-Size Sedan", price: "$49,900", range: "340 miles", acceleration: "4.3s 0-60", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80", description: "A sporty mid-size sedan designed to compete with the BMW 3 Series." },
    { name: "ES8", slug: "es8", type: "Full-Size SUV", price: "$59,900", range: "310 miles", acceleration: "4.9s 0-60", image: "https://images.unsplash.com/photo-1675467521498-58e52a4f4cbc?w=800&q=80", description: "A premium 6/7-seat SUV with NIO's signature battery swap capability." },
    { name: "ES6", slug: "es6", type: "Mid-Size SUV", price: "$52,900", range: "340 miles", acceleration: "4.5s 0-60", image: "https://images.unsplash.com/photo-1670974085498-72cebc5e0c49?w=800&q=80", description: "A versatile electric SUV balancing performance, range, and everyday practicality." },
    { name: "EC7", slug: "ec7", type: "Coupe SUV", price: "$62,900", range: "350 miles", acceleration: "3.8s 0-60", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80", description: "A sleek coupe-style SUV blending sportiness with NIO's luxury DNA." },
    { name: "EC6", slug: "ec6", type: "Compact Coupe SUV", price: "$48,900", range: "310 miles", acceleration: "4.5s 0-60", image: "https://images.unsplash.com/photo-1611651338502-8230a0c5636c?w=800&q=80", description: "A compact coupe SUV offering an accessible entry into the NIO ecosystem." },
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
        <Link href="/cars" className="text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center gap-2"><span>←</span> Back to All Brands</Link>
      </div>
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center"><span className="text-2xl font-bold text-sky-400">NIO</span></div>
            <div>
              <h1 className="text-4xl font-bold text-white">NIO</h1>
              <p className="text-slate-400">Premium Smart EVs & Battery Swap • Founded 2014 • Shanghai, China</p>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">Pioneering battery-swap technology and premium EV design, NIO delivers a luxury ownership experience with innovative power solutions and an AI-driven cockpit.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-sky-400">6</div><div className="text-slate-400">Models Available</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-sky-400">360 mi</div><div className="text-slate-400">Max Range</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-sky-400">3.8s</div><div className="text-slate-400">Fastest 0-60</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-sky-400">2,400+</div><div className="text-slate-400">Swap Stations</div></div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All NIO Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <Link key={vehicle.slug} href={`/cars/nio/${vehicle.slug}`} className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-sky-400/50 transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-sky-500 rounded-full text-white text-sm font-medium">NIO</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">NIO {vehicle.name}</h3>
                  <p className="text-slate-400 mb-4">{vehicle.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div><div className="text-sm text-slate-500">Starting at</div><div className="text-sky-400 font-semibold">{vehicle.price}</div></div>
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

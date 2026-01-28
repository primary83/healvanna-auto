"use client";

import Link from "next/link";

export default function BYDBrand() {
  const vehicles = [
    { name: "Seal", slug: "seal", type: "Electric Sedan", price: "$34,990", range: "360 miles", acceleration: "3.8s 0-60", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80", description: "A sleek performance sedan rivaling the Tesla Model 3 with Blade Battery technology." },
    { name: "Atto 3", slug: "atto-3", type: "Compact SUV", price: "$28,990", range: "260 miles", acceleration: "7.3s 0-60", image: "https://images.unsplash.com/photo-1670974085498-72cebc5e0c49?w=800&q=80", description: "A fun, affordable compact SUV packed with tech and a spacious interior." },
    { name: "Dolphin", slug: "dolphin", type: "Electric Hatchback", price: "$21,990", range: "250 miles", acceleration: "7.0s 0-60", image: "https://images.unsplash.com/photo-1622838520460-3521c68afd78?w=800&q=80", description: "An ultra-affordable city EV with playful design and surprising range." },
    { name: "Han", slug: "han", type: "Luxury Sedan", price: "$45,990", range: "375 miles", acceleration: "3.9s 0-60", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", description: "BYD's flagship luxury sedan combining elegant design with cutting-edge technology." },
    { name: "Tang", slug: "tang", type: "Full-Size SUV", price: "$52,990", range: "300 miles", acceleration: "4.4s 0-60", image: "https://images.unsplash.com/photo-1675467521498-58e52a4f4cbc?w=800&q=80", description: "A commanding 7-seat electric SUV with premium features and all-wheel drive." },
    { name: "Seal U", slug: "seal-u", type: "Mid-Size SUV", price: "$33,990", range: "310 miles", acceleration: "5.9s 0-60", image: "https://images.unsplash.com/photo-1611651338502-8230a0c5636c?w=800&q=80", description: "A versatile family SUV offering excellent value with BYD's proven EV platform." },
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
        <Link href="/cars" className="text-red-500 hover:text-red-400 transition-colors inline-flex items-center gap-2"><span>←</span> Back to All Brands</Link>
      </div>
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center"><span className="text-2xl font-bold text-red-500">BYD</span></div>
            <div>
              <h1 className="text-4xl font-bold text-white">BYD</h1>
              <p className="text-slate-400">Mass-Market & Premium EVs • Founded 1995 • Shenzhen, China</p>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">The world&apos;s largest EV manufacturer by volume. BYD combines its proprietary Blade Battery technology with aggressive pricing to deliver exceptional value across sedans, SUVs, and hatchbacks.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-red-500">6</div><div className="text-slate-400">Models Available</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-red-500">375 mi</div><div className="text-slate-400">Max Range</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-red-500">3.8s</div><div className="text-slate-400">Fastest 0-60</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-red-500">#1</div><div className="text-slate-400">Global EV Sales</div></div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All BYD Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <Link key={vehicle.slug} href={`/cars/byd/${vehicle.slug}`} className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-red-500/50 transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-600 rounded-full text-white text-sm font-medium">BYD</div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">BYD {vehicle.name}</h3>
                  <p className="text-slate-400 mb-4">{vehicle.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div><div className="text-sm text-slate-500">Starting at</div><div className="text-red-500 font-semibold">{vehicle.price}</div></div>
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

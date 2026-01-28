"use client";

import Link from "next/link";

export default function HyundaiBrand() {
  const vehicles = [
    { name: "Ioniq 5", slug: "ioniq-5", type: "Electric Crossover", price: "$41,800", range: "303 miles", acceleration: "5.2s 0-60", image: "https://images.unsplash.com/photo-1670974085498-72cebc5e0c49?w=800&q=80", description: "An award-winning retro-futuristic crossover with 800V ultra-fast charging." },
    { name: "Ioniq 6", slug: "ioniq-6", type: "Electric Sedan", price: "$41,600", range: "361 miles", acceleration: "5.1s 0-60", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80", description: "A streamlined aerodynamic sedan delivering exceptional range and efficiency." },
    { name: "Ioniq 9", slug: "ioniq-9", type: "3-Row SUV", price: "$56,900", range: "350 miles", acceleration: "5.2s 0-60", image: "https://images.unsplash.com/photo-1675467521498-58e52a4f4cbc?w=800&q=80", description: "Hyundai's flagship electric SUV with three rows and lounge-like interior." },
    { name: "Kona Electric", slug: "kona-ev", type: "Compact SUV", price: "$33,550", range: "261 miles", acceleration: "6.0s 0-60", image: "https://images.unsplash.com/photo-1611651338502-8230a0c5636c?w=800&q=80", description: "An affordable compact electric SUV perfect for city and suburban driving." },
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
      <div className="max-w-7xl mx-auto px-4 py-6"><Link href="/cars" className="text-sky-500 hover:text-sky-400 transition-colors inline-flex items-center gap-2"><span>←</span> Back to All Brands</Link></div>
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center"><span className="text-2xl font-bold text-sky-500">H</span></div>
            <div><h1 className="text-4xl font-bold text-white">Hyundai</h1><p className="text-slate-400">Mainstream & Performance EVs • Founded 1967 • Seoul, South Korea</p></div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">Leading the charge with the acclaimed Ioniq lineup, Hyundai delivers 800V ultra-fast charging and award-winning design at accessible price points.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-sky-500">4</div><div className="text-slate-400">Models Available</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-sky-500">361 mi</div><div className="text-slate-400">Max Range</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-sky-500">5.1s</div><div className="text-slate-400">Fastest 0-60</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-sky-500">800V</div><div className="text-slate-400">Ultra-Fast Charging</div></div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Hyundai Models</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {vehicles.map((vehicle) => (
              <Link key={vehicle.slug} href={`/cars/hyundai/${vehicle.slug}`} className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-sky-500/50 transition-all">
                <div className="aspect-video relative overflow-hidden"><img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-4 right-4 px-3 py-1 bg-sky-600 rounded-full text-white text-sm font-medium">Hyundai</div></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Hyundai {vehicle.name}</h3>
                  <p className="text-slate-400 mb-4">{vehicle.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div><div className="text-sm text-slate-500">Starting at</div><div className="text-sky-500 font-semibold">{vehicle.price}</div></div>
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

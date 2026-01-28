"use client";

import Link from "next/link";

export default function LiAutoBrand() {
  const vehicles = [
    { name: "MEGA", slug: "mega", type: "Electric MPV", price: "$52,900", range: "440 miles", acceleration: "5.5s 0-60", image: "https://images.unsplash.com/photo-1611651338502-8230a0c5636c?w=800&q=80", description: "Li Auto's first pure electric vehicle — a premium MPV with 5C ultra-fast charging." },
    { name: "L9", slug: "l9", type: "Full-Size SUV", price: "$54,900", range: "690 miles (EREV)", acceleration: "5.3s 0-60", image: "https://images.unsplash.com/photo-1675467521498-58e52a4f4cbc?w=800&q=80", description: "The ultimate family flagship with extended range, dual screens, and luxury seating." },
    { name: "L8", slug: "l8", type: "Mid-Large SUV", price: "$44,900", range: "650 miles (EREV)", acceleration: "5.5s 0-60", image: "https://images.unsplash.com/photo-1670974085498-72cebc5e0c49?w=800&q=80", description: "A spacious 6-seat SUV combining extended-range technology with premium comfort." },
    { name: "L7", slug: "l7", type: "Mid-Size SUV", price: "$42,900", range: "650 miles (EREV)", acceleration: "5.3s 0-60", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", description: "A 5-seat executive SUV with rear reclining seats and extended-range freedom." },
    { name: "L6", slug: "l6", type: "Compact SUV", price: "$33,900", range: "620 miles (EREV)", acceleration: "5.5s 0-60", image: "https://images.unsplash.com/photo-1622838520460-3521c68afd78?w=800&q=80", description: "Li Auto's most accessible model, bringing extended-range tech to the compact SUV segment." },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-light tracking-wider">HEALVANNA <span className="text-blue-400">AUTO</span></Link>
          <div className="flex gap-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">HOME</Link>
            <Link href="/cars" className="text-blue-400">CARS</Link>
            <Link href="/care" className="text-slate-300 hover:text-white transition-colors">CARE</Link>
            <Link href="/craft" className="text-slate-300 hover:text-white transition-colors">CRAFT</Link>
            <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">BLOG</Link>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 py-6"><Link href="/cars" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"><span>←</span> Back to All Brands</Link></div>
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center"><span className="text-2xl font-bold text-blue-400">Li</span></div>
            <div><h1 className="text-4xl font-bold text-white">Li Auto</h1><p className="text-slate-400">Extended-Range & Pure Electric SUVs • Founded 2015 • Beijing, China</p></div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">Known for family-oriented smart SUVs, Li Auto pioneered the extended-range EV concept in China and now offers both EREV and pure electric platforms for maximum flexibility.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-blue-400">5</div><div className="text-slate-400">Models Available</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-blue-400">690 mi</div><div className="text-slate-400">Max Range (EREV)</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-blue-400">5.3s</div><div className="text-slate-400">Fastest 0-60</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-blue-400">5C</div><div className="text-slate-400">Ultra-Fast Charging</div></div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Li Auto Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.slug} className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-400/50 transition-all">
                <div className="aspect-video relative overflow-hidden"><img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-4 right-4 px-3 py-1 bg-blue-500 rounded-full text-white text-sm font-medium">Li Auto</div></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Li Auto {vehicle.name}</h3>
                  <p className="text-slate-400 mb-4">{vehicle.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div><div className="text-sm text-slate-500">Starting at</div><div className="text-blue-400 font-semibold">{vehicle.price}</div></div>
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

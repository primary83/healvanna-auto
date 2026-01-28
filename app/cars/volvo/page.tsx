"use client";

import Link from "next/link";

export default function VolvoBrand() {
  const vehicles = [
    { name: "EX30", slug: "ex30", type: "Compact SUV", price: "$34,950", range: "275 miles", acceleration: "3.4s 0-60", image: "https://images.unsplash.com/photo-1611651338502-8230a0c5636c?w=800&q=80", description: "A small, stylish electric SUV with a focus on sustainability and safety." },
    { name: "EX90", slug: "ex90", type: "Full-Size SUV", price: "$76,695", range: "310 miles", acceleration: "4.9s 0-60", image: "https://images.unsplash.com/photo-1675467521498-58e52a4f4cbc?w=800&q=80", description: "Volvo's flagship electric SUV with LiDAR, 7 seats, and bidirectional charging." },
    { name: "EC40", slug: "ec40", type: "Coupe Crossover", price: "$56,300", range: "257 miles", acceleration: "4.7s 0-60", image: "https://images.unsplash.com/photo-1670974085498-72cebc5e0c49?w=800&q=80", description: "A sleek coupe crossover blending Scandinavian design with electric performance." },
    { name: "XC40 Recharge", slug: "xc40-recharge", type: "Compact SUV", price: "$53,550", range: "254 miles", acceleration: "4.7s 0-60", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80", description: "The electric version of Volvo's popular compact SUV with dual motor AWD." },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-light tracking-wider">HEALVANNA <span className="text-cyan-400">AUTO</span></Link>
          <div className="flex gap-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">HOME</Link>
            <Link href="/cars" className="text-cyan-400">CARS</Link>
            <Link href="/care" className="text-slate-300 hover:text-white transition-colors">CARE</Link>
            <Link href="/craft" className="text-slate-300 hover:text-white transition-colors">CRAFT</Link>
            <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">BLOG</Link>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 py-6"><Link href="/cars" className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2"><span>←</span> Back to All Brands</Link></div>
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center"><span className="text-2xl font-bold text-cyan-400">V</span></div>
            <div><h1 className="text-4xl font-bold text-white">Volvo</h1><p className="text-slate-400">Scandinavian Safety & Electric • Founded 1927 • Gothenburg, Sweden</p></div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">Volvo commits to becoming fully electric by 2030, combining legendary safety with sustainable Scandinavian design and cutting-edge technology.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-cyan-400">4</div><div className="text-slate-400">Models Available</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-cyan-400">310 mi</div><div className="text-slate-400">Max Range</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-cyan-400">3.4s</div><div className="text-slate-400">Fastest 0-60</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-cyan-400">LiDAR</div><div className="text-slate-400">Safety Tech</div></div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Volvo EV Models</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.slug} className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-400/50 transition-all">
                <div className="aspect-video relative overflow-hidden"><img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500 rounded-full text-white text-sm font-medium">Volvo</div></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Volvo {vehicle.name}</h3><p className="text-slate-400 mb-4">{vehicle.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div><div className="text-sm text-slate-500">Starting at</div><div className="text-cyan-400 font-semibold">{vehicle.price}</div></div>
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

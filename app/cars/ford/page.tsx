"use client";

import Link from "next/link";

export default function FordBrand() {
  const vehicles = [
    { name: "Mustang Mach-E", slug: "mach-e", type: "Electric Crossover", price: "$42,995", range: "312 miles", acceleration: "3.5s 0-60", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80", description: "An electric crossover that carries the Mustang spirit with zero emissions." },
    { name: "F-150 Lightning", slug: "f150-lightning", type: "Electric Truck", price: "$49,995", range: "320 miles", acceleration: "4.0s 0-60", image: "https://images.unsplash.com/photo-1643750228773-b997a0c1db66?w=800&q=80", description: "America's best-selling truck goes electric with mega power frunk and V2H capability." },
    { name: "E-Transit", slug: "e-transit", type: "Commercial Van", price: "$51,769", range: "126 miles", acceleration: "8.5s 0-60", image: "https://images.unsplash.com/photo-1622838520460-3521c68afd78?w=800&q=80", description: "An all-electric commercial van built for business fleets and last-mile delivery." },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-light tracking-wider">HEALVANNA <span className="text-blue-500">AUTO</span></Link>
          <div className="flex gap-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">HOME</Link>
            <Link href="/cars" className="text-blue-500">CARS</Link>
            <Link href="/care" className="text-slate-300 hover:text-white transition-colors">CARE</Link>
            <Link href="/craft" className="text-slate-300 hover:text-white transition-colors">CRAFT</Link>
            <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">BLOG</Link>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 py-6"><Link href="/cars" className="text-blue-500 hover:text-blue-400 transition-colors inline-flex items-center gap-2"><span>←</span> Back to All Brands</Link></div>
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center"><span className="text-2xl font-bold text-blue-500">F</span></div>
            <div><h1 className="text-4xl font-bold text-white">Ford</h1><p className="text-slate-400">Electric Trucks & Performance • Founded 1903 • Dearborn, Michigan</p></div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">America&apos;s truck brand electrifies its icons with the F-150 Lightning and Mustang Mach-E, bringing EV capability to mainstream American buyers.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-blue-500">3</div><div className="text-slate-400">Models Available</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-blue-500">320 mi</div><div className="text-slate-400">Max Range</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-blue-500">3.5s</div><div className="text-slate-400">Fastest 0-60</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-blue-500">120+</div><div className="text-slate-400">Years Heritage</div></div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Ford EV Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.slug} className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all">
                <div className="aspect-video relative overflow-hidden"><img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-4 right-4 px-3 py-1 bg-blue-600 rounded-full text-white text-sm font-medium">Ford</div></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Ford {vehicle.name}</h3><p className="text-slate-400 mb-4">{vehicle.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div><div className="text-sm text-slate-500">Starting at</div><div className="text-blue-500 font-semibold">{vehicle.price}</div></div>
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

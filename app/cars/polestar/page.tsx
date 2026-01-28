"use client";

import Link from "next/link";

export default function PolestarBrand() {
  const vehicles = [
    { name: "Polestar 2", slug: "polestar-2", type: "Electric Sedan", price: "$44,900", range: "320 miles", acceleration: "4.3s 0-60", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", description: "A minimalist performance sedan with Google built-in and sharp Scandinavian design." },
    { name: "Polestar 3", slug: "polestar-3", type: "Electric SUV", price: "$73,400", range: "315 miles", acceleration: "4.6s 0-60", image: "https://images.unsplash.com/photo-1675467521498-58e52a4f4cbc?w=800&q=80", description: "An aerodynamic performance SUV with available dual-motor setup and LiDAR." },
    { name: "Polestar 4", slug: "polestar-4", type: "Coupe SUV", price: "$56,300", range: "300 miles", acceleration: "3.8s 0-60", image: "https://images.unsplash.com/photo-1670974085498-72cebc5e0c49?w=800&q=80", description: "A bold coupe SUV with no rear window — replaced by a rear-facing camera system." },
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-light tracking-wider">HEALVANNA <span className="text-amber-400">AUTO</span></Link>
          <div className="flex gap-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">HOME</Link>
            <Link href="/cars" className="text-amber-400">CARS</Link>
            <Link href="/care" className="text-slate-300 hover:text-white transition-colors">CARE</Link>
            <Link href="/craft" className="text-slate-300 hover:text-white transition-colors">CRAFT</Link>
            <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">BLOG</Link>
          </div>
        </div>
      </nav>
      <div className="max-w-7xl mx-auto px-4 py-6"><Link href="/cars" className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-2"><span>←</span> Back to All Brands</Link></div>
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center"><span className="text-2xl font-bold text-amber-400">P</span></div>
            <div><h1 className="text-4xl font-bold text-white">Polestar</h1><p className="text-slate-400">Swedish Performance Electric • Founded 2017 • Gothenburg, Sweden</p></div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">Born from Volvo and Geely, Polestar is a pure electric performance brand combining Scandinavian minimalism with cutting-edge technology and sustainable materials.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-amber-400">3</div><div className="text-slate-400">Models Available</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-amber-400">320 mi</div><div className="text-slate-400">Max Range</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-amber-400">3.8s</div><div className="text-slate-400">Fastest 0-60</div></div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800"><div className="text-3xl font-bold text-amber-400">Google</div><div className="text-slate-400">Built-In</div></div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Polestar Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <div key={vehicle.slug} className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-400/50 transition-all">
                <div className="aspect-video relative overflow-hidden"><img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><div className="absolute top-4 right-4 px-3 py-1 bg-amber-500 rounded-full text-white text-sm font-medium">Polestar</div></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{vehicle.name}</h3><p className="text-slate-400 mb-4">{vehicle.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div><div className="text-sm text-slate-500">Starting at</div><div className="text-amber-400 font-semibold">{vehicle.price}</div></div>
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

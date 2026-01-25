"use client";

import Link from "next/link";

export default function MercedesBrand() {
  const vehicles = [
    {
      name: "EQS",
      slug: "eqs",
      type: "Electric Luxury Sedan",
      price: "$104,400",
      range: "350 miles",
      acceleration: "4.1s 0-60",
      image: "/cars/mercedes/eqs.png",
      description: "The electric flagship sedan."
    },
    {
      name: "EQE",
      slug: "eqe",
      type: "Electric Executive Sedan",
      price: "$74,900",
      range: "305 miles",
      acceleration: "4.5s 0-60",
      image: "/cars/mercedes/eqe.png",
      description: "Business class, electrified."
    },
    {
      name: "EQB",
      slug: "eqb",
      type: "Electric Compact SUV",
      price: "$52,750",
      range: "245 miles",
      acceleration: "5.6s 0-60",
      image: "/cars/mercedes/eqb.png",
      description: "Versatile family electric SUV."
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-light tracking-wider">
            HEALVANNA <span className="text-emerald-400">AUTO</span>
          </Link>
          <div className="flex gap-8">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors">HOME</Link>
            <Link href="/cars" className="text-emerald-400">CARS</Link>
            <Link href="/care" className="text-slate-300 hover:text-white transition-colors">CARE</Link>
            <Link href="/craft" className="text-slate-300 hover:text-white transition-colors">CRAFT</Link>
            <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">BLOG</Link>
          </div>
        </div>
      </nav>

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link href="/cars" className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
          <span>←</span> Back to All Brands
        </Link>
      </div>

      {/* Brand Header */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center">
              <span className="text-3xl">⭐</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Mercedes-Benz</h1>
              <p className="text-slate-400">Electric Luxury • Founded 1926 • Stuttgart, Germany</p>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            Mercedes-Benz EQ represents the pinnacle of electric luxury. Combining over a century of automotive excellence with cutting-edge electric technology for the ultimate driving experience.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-cyan-400">3</div>
              <div className="text-slate-400">Models Available</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-cyan-400">350 mi</div>
              <div className="text-slate-400">Max Range</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-cyan-400">4.1s</div>
              <div className="text-slate-400">Fastest 0-60</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-cyan-400">MBUX</div>
              <div className="text-slate-400">Hyperscreen</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Models */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Mercedes-Benz EQ Models</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <Link 
                key={vehicle.slug}
                href={`/cars/mercedes/${vehicle.slug}`}
                className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-cyan-500 rounded-full text-white text-sm font-medium">
                    Mercedes-EQ
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Mercedes-Benz {vehicle.name}</h3>
                  <p className="text-slate-400 mb-4">{vehicle.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-slate-500">Starting at</div>
                      <div className="text-cyan-400 font-semibold">{vehicle.price}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Range</div>
                      <div className="text-white font-semibold">{vehicle.range}</div>
                    </div>
                  </div>

                  <div className="text-cyan-400 group-hover:text-cyan-300 font-medium inline-flex items-center gap-2">
                    View Details <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>© 2026 Healvanna Auto. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

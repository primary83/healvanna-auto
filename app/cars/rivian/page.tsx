"use client";

import Link from "next/link";

export default function RivianBrand() {
  const vehicles = [
    {
      name: "R1T",
      slug: "r1t",
      type: "Electric Truck",
      price: "$69,900",
      range: "314 miles",
      acceleration: "3.0s 0-60",
      image: "/cars/rivian/r1t.png",
      description: "The world's first electric adventure truck."
    },
    {
      name: "R1S",
      slug: "r1s",
      type: "Electric SUV",
      price: "$75,900",
      range: "321 miles",
      acceleration: "3.0s 0-60",
      image: "/cars/rivian/r1s.png",
      description: "A 7-passenger SUV built for adventure."
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
        <Link href="/cars" className="text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-2">
          <span>←</span> Back to All Brands
        </Link>
      </div>

      {/* Brand Header */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-amber-500">R</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Rivian</h1>
              <p className="text-slate-400">Electric Adventure Vehicles • Founded 2009 • Irvine, California</p>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            Rivian is an American electric vehicle manufacturer focused on adventure. Their vehicles combine rugged capability with sustainable technology, perfect for exploring the great outdoors.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-amber-500">2</div>
              <div className="text-slate-400">Models Available</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-amber-500">321 mi</div>
              <div className="text-slate-400">Max Range</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-amber-500">3.0s</div>
              <div className="text-slate-400">Fastest 0-60</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-amber-500">10,000+</div>
              <div className="text-slate-400">Adventure Network</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Models */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Rivian Models</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {vehicles.map((vehicle) => (
              <Link 
                key={vehicle.slug}
                href={`/cars/rivian/${vehicle.slug}`}
                className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500 rounded-full text-white text-sm font-medium">
                    Rivian
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Rivian {vehicle.name}</h3>
                  <p className="text-slate-400 mb-4">{vehicle.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-slate-500">Starting at</div>
                      <div className="text-amber-500 font-semibold">{vehicle.price}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Range</div>
                      <div className="text-white font-semibold">{vehicle.range}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">0-60 mph</div>
                      <div className="text-white font-semibold">{vehicle.acceleration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Type</div>
                      <div className="text-white font-semibold">{vehicle.type}</div>
                    </div>
                  </div>

                  <div className="text-amber-400 group-hover:text-amber-300 font-medium inline-flex items-center gap-2">
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

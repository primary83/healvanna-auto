"use client";

import Link from "next/link";

export default function BMWBrand() {
  const vehicles = [
    {
      name: "i4",
      slug: "i4",
      type: "Electric Gran Coupe",
      price: "$52,200",
      range: "301 miles",
      acceleration: "3.7s 0-60",
      image: "/cars/bmw/i4.png",
      description: "The first-ever all-electric Gran Coupé."
    },
    {
      name: "i7",
      slug: "i7",
      type: "Electric Luxury Sedan",
      price: "$105,700",
      range: "318 miles",
      acceleration: "4.5s 0-60",
      image: "/cars/bmw/i7.png",
      description: "Ultimate luxury meets electric performance."
    },
    {
      name: "iX",
      slug: "ix",
      type: "Electric SAV",
      price: "$87,100",
      range: "324 miles",
      acceleration: "4.4s 0-60",
      image: "/cars/bmw/ix.png",
      description: "The BMW iX. Born Electric."
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
        <Link href="/cars" className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2">
          <span>←</span> Back to All Brands
        </Link>
      </div>

      {/* Brand Header */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-400">BMW</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">BMW</h1>
              <p className="text-slate-400">Electric Vehicles • Founded 1916 • Munich, Germany</p>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            BMW's electric lineup combines the brand's legendary driving dynamics with zero-emission technology. Experience the future of "The Ultimate Driving Machine."
          </p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6 mt-8">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-blue-400">3</div>
              <div className="text-slate-400">Models Available</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-blue-400">324 mi</div>
              <div className="text-slate-400">Max Range</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-blue-400">3.7s</div>
              <div className="text-slate-400">Fastest 0-60</div>
            </div>
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
              <div className="text-3xl font-bold text-blue-400">100+</div>
              <div className="text-slate-400">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Models */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All BMW Electric Models</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <Link 
                key={vehicle.slug}
                href={`/cars/bmw/${vehicle.slug}`}
                className="group bg-slate-900/50 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500 rounded-full text-white text-sm font-medium">
                    BMW
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">BMW {vehicle.name}</h3>
                  <p className="text-slate-400 mb-4">{vehicle.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-slate-500">Starting at</div>
                      <div className="text-blue-400 font-semibold">{vehicle.price}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Range</div>
                      <div className="text-white font-semibold">{vehicle.range}</div>
                    </div>
                  </div>

                  <div className="text-blue-400 group-hover:text-blue-300 font-medium inline-flex items-center gap-2">
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

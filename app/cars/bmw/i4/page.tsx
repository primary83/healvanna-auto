"use client";

import Link from "next/link";

export default function BMWi4() {
  const variants = [
    {
      name: "i4 eDrive35",
      price: "$52,200",
      range: "270 miles",
      acceleration: "5.5s 0-60 mph",
      topSpeed: "118 mph",
      power: "281 hp"
    },
    {
      name: "i4 eDrive40",
      price: "$56,900",
      range: "301 miles",
      acceleration: "5.5s 0-60 mph",
      topSpeed: "118 mph",
      power: "335 hp"
    },
    {
      name: "i4 M50",
      price: "$67,300",
      range: "271 miles",
      acceleration: "3.7s 0-60 mph",
      topSpeed: "130 mph",
      power: "536 hp"
    }
  ];

  const features = [
    { icon: "🎮", title: "Curved Display", description: "14.9-inch curved touchscreen with BMW iDrive 8 operating system." },
    { icon: "🔊", title: "Harman Kardon", description: "Premium 16-speaker Harman Kardon surround sound system." },
    { icon: "🛡️", title: "Driving Assistant", description: "Professional driver assistance with highway and parking assist." },
    { icon: "⚡", title: "DC Fast Charging", description: "Charge from 10-80% in approximately 31 minutes." }
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

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Link href="/cars" className="hover:text-white transition-colors">Cars</Link>
          <span>/</span>
          <Link href="/cars/bmw" className="hover:text-white transition-colors">BMW</Link>
          <span>/</span>
          <span className="text-white">i4</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm mb-4">
                <span>BMW</span>
                <span>•</span>
                <span>Electric Gran Coupé</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">BMW i4</h1>
              <p className="text-xl text-slate-300 mb-8">
                The first-ever all-electric BMW Gran Coupé. Combining sporty elegance with emission-free driving pleasure and the legendary BMW driving dynamics.
              </p>
              
              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-blue-400">$52,200</div>
                  <div className="text-slate-400">Starting Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">301 mi</div>
                  <div className="text-slate-400">Max Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">3.7s</div>
                  <div className="text-slate-400">0-60 (M50)</div>
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://www.bmwusa.com/vehicles/all-electric/i4/overview.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  Build Your i4
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href="https://www.bmwusa.com/dealer-locator.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
                >
                  Find Dealer
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-slate-700/50 overflow-hidden">
                <img 
                  src="/cars/bmw/i4.png" 
                  alt="BMW i4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-blue-500 rounded-full text-white text-sm font-medium">
                Gran Coupé
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Variants Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Available Variants</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {variants.map((variant, index) => (
              <div 
                key={variant.name}
                className={`rounded-2xl p-6 border ${
                  index === 2 
                    ? 'bg-gradient-to-br from-blue-500/10 to-slate-900 border-blue-500/30' 
                    : 'bg-slate-900/50 border-slate-800'
                }`}
              >
                {index === 2 && (
                  <div className="inline-block px-2 py-1 bg-blue-500/20 rounded text-blue-400 text-xs mb-3">
                    M PERFORMANCE
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-4">{variant.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Price</span>
                    <span className="text-blue-400 font-semibold">{variant.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Range</span>
                    <span className="text-white">{variant.range}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">0-60 mph</span>
                    <span className="text-white">{variant.acceleration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Top Speed</span>
                    <span className="text-white">{variant.topSpeed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Power</span>
                    <span className="text-white">{variant.power}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Models Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Explore Other BMW Models</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/cars/bmw/i7" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">i7</h3>
              <p className="text-sm text-slate-400">From $105,700</p>
            </Link>
            <Link href="/cars/bmw/ix" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">iX</h3>
              <p className="text-sm text-slate-400">From $87,100</p>
            </Link>
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

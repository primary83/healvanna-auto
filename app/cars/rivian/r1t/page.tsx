"use client";

import Link from "next/link";

export default function RivianR1T() {
  const variants = [
    {
      name: "R1T Dual-Motor",
      price: "$69,900",
      range: "270 miles",
      acceleration: "4.5s 0-60 mph",
      topSpeed: "110 mph",
      drive: "All-Wheel Drive"
    },
    {
      name: "R1T Tri-Motor",
      price: "$87,900",
      range: "314 miles",
      acceleration: "3.0s 0-60 mph",
      topSpeed: "125 mph",
      drive: "All-Wheel Drive"
    },
    {
      name: "R1T Quad-Motor",
      price: "$104,900",
      range: "289 miles",
      acceleration: "2.5s 0-60 mph",
      topSpeed: "130 mph",
      drive: "All-Wheel Drive"
    }
  ];

  const features = [
    { icon: "🏕️", title: "Camp Mode", description: "Built-in camp kitchen, integrated tent compatibility, and 120V outlets throughout." },
    { icon: "🔋", title: "Adventure Network", description: "Access to Rivian's exclusive charging network at trailheads and outdoor destinations." },
    { icon: "💪", title: "11,000 lb Towing", description: "Tow boats, trailers, and adventure gear with confidence." },
    { icon: "🌊", title: "3ft Water Wading", description: "Cross streams and tackle challenging terrain with ease." }
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
          <Link href="/cars/rivian" className="hover:text-white transition-colors">Rivian</Link>
          <span>/</span>
          <span className="text-white">R1T</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 rounded-full text-amber-400 text-sm mb-4">
                <span>Rivian</span>
                <span>•</span>
                <span>Electric Adventure Truck</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">Rivian R1T</h1>
              <p className="text-xl text-slate-300 mb-8">
                The world's first electric adventure truck. Combining incredible off-road capability with zero emissions, the R1T redefines what a pickup truck can be.
              </p>
              
              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-amber-500">$69,900</div>
                  <div className="text-slate-400">Starting Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">314 mi</div>
                  <div className="text-slate-400">Max Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">2.5s</div>
                  <div className="text-slate-400">0-60 mph</div>
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href="https://rivian.com/r1t" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  Configure on Rivian.com
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href="https://rivian.com/experience" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
                >
                  Book Test Drive
                </a>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-slate-700/50 overflow-hidden">
                <img 
                  src="/cars/rivian/r1t.png" 
                  alt="Rivian R1T"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-4 px-3 py-1 bg-amber-500 rounded-full text-white text-sm font-medium">
                Adventure Ready
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
                    ? 'bg-gradient-to-br from-amber-500/10 to-slate-900 border-amber-500/30' 
                    : 'bg-slate-900/50 border-slate-800'
                }`}
              >
                {index === 2 && (
                  <div className="inline-block px-2 py-1 bg-amber-500/20 rounded text-amber-400 text-xs mb-3">
                    QUAD-MOTOR
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-4">{variant.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Price</span>
                    <span className="text-amber-500 font-semibold">{variant.price}</span>
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
                    <span className="text-slate-400">Drive</span>
                    <span className="text-white">{variant.drive}</span>
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
          <h2 className="text-2xl font-bold text-white mb-8">Explore Other Rivian Models</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/cars/rivian/r1s" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-amber-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">R1S</h3>
              <p className="text-sm text-slate-400">From $75,900</p>
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

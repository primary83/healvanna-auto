"use client";

import Link from "next/link";

export default function TeslaModelY() {
  const variants = [
    {
      name: "Model Y",
      price: "$44,990",
      range: "260 miles",
      acceleration: "5.0s 0-60 mph",
      topSpeed: "135 mph",
      drive: "All-Wheel Drive"
    },
    {
      name: "Model Y Long Range",
      price: "$49,990",
      range: "310 miles",
      acceleration: "4.8s 0-60 mph",
      topSpeed: "135 mph",
      drive: "All-Wheel Drive"
    },
    {
      name: "Model Y Performance",
      price: "$54,990",
      range: "285 miles",
      acceleration: "3.5s 0-60 mph",
      topSpeed: "155 mph",
      drive: "All-Wheel Drive"
    }
  ];

  const features = [
    { icon: "👨‍👩‍👧‍👦", title: "Room for 7", description: "Optional third row seating for up to 7 passengers." },
    { icon: "📦", title: "68 cu ft Cargo", description: "Massive cargo space with seats folded. Fits almost anything." },
    { icon: "🔋", title: "310 Mile Range", description: "Go further on a single charge with the Long Range variant." },
    { icon: "⚡", title: "Supercharging", description: "Access to 25,000+ Superchargers worldwide." },
    { icon: "🛡️", title: "5-Star Safety", description: "Lowest probability of injury of any SUV ever tested by NHTSA." },
    { icon: "🎮", title: "Full Entertainment", description: "Gaming, streaming, and more on the 15-inch touchscreen." }
  ];

  const specs = {
    performance: [
      { label: "0-60 mph", value: "3.5 - 5.0 seconds" },
      { label: "Top Speed", value: "135 - 155 mph" },
      { label: "Peak Power", value: "384 - 534 hp" },
      { label: "Drive", value: "All-Wheel Drive" }
    ],
    battery: [
      { label: "Range (EPA est.)", value: "260 - 310 miles" },
      { label: "Battery Type", value: "Lithium-ion" },
      { label: "Supercharging Max", value: "250 kW" },
      { label: "Home Charging", value: "42 mi/hr (240V)" }
    ],
    dimensions: [
      { label: "Length", value: "187.0 in" },
      { label: "Width", value: "83.8 in (mirrors)" },
      { label: "Height", value: "63.9 in" },
      { label: "Cargo Volume", value: "68 cu ft (max)" }
    ],
    warranty: [
      { label: "Basic Vehicle", value: "4 years / 50,000 mi" },
      { label: "Battery & Drive Unit", value: "8 years / 120,000 mi" },
      { label: "Minimum Battery Retention", value: "70%" }
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-light tracking-wider">
            HEALVANNA <span className="text-emerald-400">AUTO</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">HOME</Link>
            <Link href="/cars" className="text-sm text-emerald-400 transition-colors">CARS</Link>
            <Link href="/care" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">CARE</Link>
            <Link href="/craft" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">CRAFT</Link>
            <Link href="/blog" className="text-sm text-slate-400 hover:text-emerald-400 transition-colors">BLOG</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/cars" className="hover:text-emerald-400 transition-colors">Cars</Link>
            <span>/</span>
            <Link href="/cars/tesla" className="hover:text-emerald-400 transition-colors">Tesla</Link>
            <span>/</span>
            <span className="text-white">Model Y</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-sm font-medium mb-4">
                <span>Tesla</span>
                <span>•</span>
                <span>Electric SUV</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Tesla Model Y
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                The world's best-selling electric vehicle. Versatile, spacious, and packed with technology for the whole family.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-emerald-400">$44,990</div>
                  <div className="text-sm text-slate-400">Starting Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">310 mi</div>
                  <div className="text-sm text-slate-400">Max Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">3.5s</div>
                  <div className="text-sm text-slate-400">0-60 mph</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.tesla.com/modely/design" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-xl transition-colors"
                >
                  Configure on Tesla.com
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href="https://www.tesla.com/findus" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors"
                >
                  Find Tesla Store
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-slate-700/50">
                <div className="text-center">
                  <svg className="w-32 h-32 text-slate-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                  </svg>
                  <p className="text-slate-500">Tesla Model Y</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                #1 Best Seller
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
                    ? 'bg-gradient-to-br from-red-900/30 to-slate-800/50 border-red-500/30' 
                    : 'bg-slate-800/30 border-slate-700/50'
                }`}
              >
                {index === 2 && (
                  <div className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-semibold rounded-full mb-4">
                    PERFORMANCE
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-4">{variant.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Price</span>
                    <span className="text-emerald-400 font-semibold">{variant.price}</span>
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

                <a 
                  href="https://www.tesla.com/modely/design" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                    index === 2
                      ? 'bg-red-600 hover:bg-red-500 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  Configure
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Specifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">Performance</h3>
              <div className="space-y-3">
                {specs.performance.map((spec) => (
                  <div key={spec.label} className="flex justify-between">
                    <span className="text-slate-400 text-sm">{spec.label}</span>
                    <span className="text-white text-sm font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">Battery & Charging</h3>
              <div className="space-y-3">
                {specs.battery.map((spec) => (
                  <div key={spec.label} className="flex justify-between">
                    <span className="text-slate-400 text-sm">{spec.label}</span>
                    <span className="text-white text-sm font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">Dimensions</h3>
              <div className="space-y-3">
                {specs.dimensions.map((spec) => (
                  <div key={spec.label} className="flex justify-between">
                    <span className="text-slate-400 text-sm">{spec.label}</span>
                    <span className="text-white text-sm font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">Warranty</h3>
              <div className="space-y-3">
                {specs.warranty.map((spec) => (
                  <div key={spec.label} className="flex justify-between">
                    <span className="text-slate-400 text-sm">{spec.label}</span>
                    <span className="text-white text-sm font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protect Your Tesla Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl p-8 md:p-12 border border-emerald-500/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Protect Your Tesla Model Y</h2>
                <p className="text-slate-300 mb-6">
                  Your family SUV deserves the best protection. Our ceramic coating and PPF services guard against road debris, UV damage, and everyday wear.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/care" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
                    View Care Services
                  </Link>
                  <Link href="/blog/ppf-vs-ceramic-coating" className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors">
                    PPF vs Ceramic Guide
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-2xl mb-2">🛡️</div>
                  <div className="text-white font-semibold">Ceramic Coating</div>
                  <div className="text-slate-400 text-sm">5+ years protection</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="text-white font-semibold">Full PPF</div>
                  <div className="text-slate-400 text-sm">Rock chip protection</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-2xl mb-2">🧽</div>
                  <div className="text-white font-semibold">Interior Protection</div>
                  <div className="text-slate-400 text-sm">Kid-proof coating</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-2xl mb-2">🪟</div>
                  <div className="text-white font-semibold">Window Tint</div>
                  <div className="text-slate-400 text-sm">UV protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Tesla Models */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Other Tesla Models</h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/cars/tesla/model-3" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Model 3</h3>
              <p className="text-sm text-slate-400">From $38,990</p>
            </Link>
            <Link href="/cars/tesla/model-s" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Model S</h3>
              <p className="text-sm text-slate-400">From $74,990</p>
            </Link>
            <Link href="/cars/tesla/model-x" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Model X</h3>
              <p className="text-sm text-slate-400">From $79,990</p>
            </Link>
            <Link href="/cars/tesla/cybertruck" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Cybertruck</h3>
              <p className="text-sm text-slate-400">From $79,990</p>
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

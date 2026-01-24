"use client";

import Link from "next/link";

export default function TeslaModel3() {
  const variants = [
    {
      name: "Model 3",
      price: "$38,990",
      range: "272 miles",
      acceleration: "5.8s 0-60 mph",
      topSpeed: "125 mph",
      drive: "Rear-Wheel Drive"
    },
    {
      name: "Model 3 Long Range",
      price: "$45,990",
      range: "333 miles",
      acceleration: "4.2s 0-60 mph",
      topSpeed: "125 mph",
      drive: "All-Wheel Drive"
    },
    {
      name: "Model 3 Performance",
      price: "$52,990",
      range: "315 miles",
      acceleration: "3.1s 0-60 mph",
      topSpeed: "140 mph",
      drive: "All-Wheel Drive"
    }
  ];

  const features = [
    { icon: "⚡", title: "Supercharging", description: "Access to 25,000+ Superchargers. Charge up to 200 miles in 15 minutes." },
    { icon: "🛡️", title: "Safety", description: "5-star safety rating in every category. Advanced airbag protection." },
    { icon: "📱", title: "15\" Touchscreen", description: "Minimalist interior with everything controlled through the center display." },
    { icon: "🎮", title: "Gaming & Entertainment", description: "Play games, watch streaming content, and more while parked." },
    { icon: "🚗", title: "Autopilot", description: "Standard Autopilot with automatic steering, acceleration, and braking." },
    { icon: "🔄", title: "Over-the-Air Updates", description: "Your car improves over time with free software updates." }
  ];

  const specs = {
    performance: [
      { label: "0-60 mph", value: "3.1 - 5.8 seconds" },
      { label: "Top Speed", value: "125 - 140 mph" },
      { label: "Peak Power", value: "283 - 510 hp" },
      { label: "Drive", value: "RWD or AWD" }
    ],
    battery: [
      { label: "Range (EPA est.)", value: "272 - 333 miles" },
      { label: "Battery Type", value: "Lithium-ion" },
      { label: "Supercharging Max", value: "250 kW" },
      { label: "Home Charging", value: "44 mi/hr (240V)" }
    ],
    dimensions: [
      { label: "Length", value: "184.8 in" },
      { label: "Width", value: "82.2 in (mirrors)" },
      { label: "Height", value: "56.8 in" },
      { label: "Cargo Volume", value: "23 cu ft" }
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
            <span className="text-white">Model 3</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-sm font-medium mb-4">
                <span>Tesla</span>
                <span>•</span>
                <span>Electric Sedan</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Tesla Model 3
              </h1>
              
              <p className="text-xl text-slate-300 mb-6">
                The best-selling electric car in the world. Exceptional range, performance, and technology at an accessible price point.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold text-emerald-400">$38,990</div>
                  <div className="text-sm text-slate-400">Starting Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">333 mi</div>
                  <div className="text-sm text-slate-400">Max Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">3.1s</div>
                  <div className="text-sm text-slate-400">0-60 mph</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.tesla.com/model3/design" 
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
                  <p className="text-slate-500">Tesla Model 3</p>
                </div>
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
                  href="https://www.tesla.com/model3/design" 
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
                <h2 className="text-2xl font-bold text-white mb-4">Protect Your Tesla Model 3</h2>
                <p className="text-slate-300 mb-6">
                  Your Tesla deserves premium protection. Our ceramic coating and paint protection film services keep your Model 3 looking showroom-new for years.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/care" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
                    View Care Services
                  </Link>
                  <Link href="/blog/ceramic-coating-tesla-model-3" className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors">
                    Read Ceramic Coating Guide
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
                  <div className="text-white font-semibold">PPF</div>
                  <div className="text-slate-400 text-sm">Self-healing film</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-2xl mb-2">✨</div>
                  <div className="text-white font-semibold">Detailing</div>
                  <div className="text-slate-400 text-sm">Premium finish</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                  <div className="text-2xl mb-2">🎨</div>
                  <div className="text-white font-semibold">Custom Wrap</div>
                  <div className="text-slate-400 text-sm">Unique style</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/ceramic-coating-tesla-model-3" className="group bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-800"></div>
              <div className="p-5">
                <span className="text-xs text-emerald-400 font-medium">GUIDE</span>
                <h3 className="text-lg font-semibold text-white mt-2 group-hover:text-emerald-400 transition-colors">Complete Guide to Ceramic Coating Your Tesla Model 3</h3>
              </div>
            </Link>
            
            <Link href="/blog/real-cost-owning-ev-2026" className="group bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-800"></div>
              <div className="p-5">
                <span className="text-xs text-emerald-400 font-medium">GUIDE</span>
                <h3 className="text-lg font-semibold text-white mt-2 group-hover:text-emerald-400 transition-colors">The Real Cost of Owning an Electric Car in 2026</h3>
              </div>
            </Link>
            
            <Link href="/blog/ev-range-anxiety" className="group bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <div className="h-40 bg-gradient-to-br from-slate-700 to-slate-800"></div>
              <div className="p-5">
                <span className="text-xs text-emerald-400 font-medium">GUIDE</span>
                <h3 className="text-lg font-semibold text-white mt-2 group-hover:text-emerald-400 transition-colors">EV Range Anxiety: What Actually Matters</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Tesla Models */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Other Tesla Models</h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/cars/tesla/model-y" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Model Y</h3>
              <p className="text-sm text-slate-400">From $44,990</p>
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

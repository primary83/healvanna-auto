"use client";

import Link from "next/link";
import Image from "next/image";

export default function TeslaBrand() {
  const teslaModels = [
    {
      name: "Model 3",
      slug: "model-3",
      image: "/cars/tesla/model-3.png",
      startingPrice: "$38,990",
      range: "272-333 miles",
      acceleration: "3.1-5.8s 0-60",
      topSpeed: "125-140 mph",
      description: "The best-selling electric sedan that started the EV revolution. Perfect blend of range, performance, and value."
    },
    {
      name: "Model Y",
      slug: "model-y",
      image: "/cars/tesla/model-y.png",
      startingPrice: "$44,990",
      range: "260-310 miles",
      acceleration: "3.5-5.0s 0-60",
      topSpeed: "135-155 mph",
      description: "The world's best-selling electric SUV. Spacious, versatile, and packed with technology."
    },
    {
      name: "Model S",
      slug: "model-s",
      image: "/cars/tesla/model-s.png",
      startingPrice: "$74,990",
      range: "320-402 miles",
      acceleration: "1.99-3.2s 0-60",
      topSpeed: "149-200 mph",
      description: "The flagship luxury sedan with unmatched range and performance. The Plaid is the fastest production car ever."
    },
    {
      name: "Model X",
      slug: "model-x",
      image: "/cars/tesla/model-x.png",
      startingPrice: "$79,990",
      range: "269-348 miles",
      acceleration: "2.5-3.9s 0-60",
      topSpeed: "149-163 mph",
      description: "The luxury SUV with iconic falcon-wing doors, seating for up to 7, and supercar performance."
    },
    {
      name: "Cybertruck",
      slug: "cybertruck",
      image: "/cars/tesla/cybertruck.png",
      startingPrice: "$79,990",
      range: "250-340 miles",
      acceleration: "2.6-6.5s 0-60",
      topSpeed: "112-130 mph",
      description: "The revolutionary stainless steel electric truck that's unlike anything else on the road."
    }
  ];

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
          <Link href="/cars" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Brands
          </Link>

          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
              <svg viewBox="0 0 278.7 36.3" className="w-full h-auto">
                <path fill="#e82127" d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6zM31.3 14.4v7h18.2v21h7.1v-21H89v-7H31.3zM174.4 14.4v21.9h40.1v-7h-33.1v-2.3h33.1v-12.6h-40.1zm7 7h26.1v2.3h-26.1v-2.3zM79.9 14.4v21.9H120v-7H87v-2.3h33V14.4H79.9zm7 7h26.1v2.3H86.9v-2.3zM0 14.4l17.8 21.9h8.9L9 14.4H0zm21.7 0l17.8 21.9h8.9L30.5 14.4h-8.8zM129.5 14.4v21.9h7V14.4h-7zM147.9 14.4v21.9h7v-21h25.6V7.1h-32.6v7.3z"/>
                <path fill="#e82127" d="M139.3 0C115.4 0 95.5 4.4 89 7.1h100.6c-6.5-2.7-26.4-7.1-50.3-7.1z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Tesla</h1>
              <p className="text-slate-400">Electric Vehicles • Founded 2003 • Palo Alto, California</p>
            </div>
          </div>

          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Tesla is the world's leading electric vehicle manufacturer, known for pioneering long-range EVs, the Supercharger network, and cutting-edge autonomous driving technology.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">5</div>
              <div className="text-sm text-slate-400">Models Available</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">402 mi</div>
              <div className="text-sm text-slate-400">Max Range</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">1.99s</div>
              <div className="text-sm text-slate-400">Fastest 0-60</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">25,000+</div>
              <div className="text-sm text-slate-400">Superchargers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Tesla Models</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teslaModels.map((model) => (
              <Link
                key={model.slug}
                href={`/cars/tesla/${model.slug}`}
                className="group bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <Image 
                    src={`/cars/tesla/${model.slug}.png`}
                    alt={`Tesla ${model.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                    Tesla
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    Tesla {model.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{model.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <div className="text-xs text-slate-500">Starting at</div>
                      <div className="text-emerald-400 font-semibold">{model.startingPrice}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Range</div>
                      <div className="text-white font-semibold">{model.range}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">0-60 mph</div>
                      <div className="text-white font-semibold">{model.acceleration}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Top Speed</div>
                      <div className="text-white font-semibold">{model.topSpeed}</div>
                    </div>
                  </div>

                  <div className="flex items-center text-emerald-400 text-sm font-medium">
                    View Details
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tesla Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-red-900/20 to-slate-800/50 rounded-3xl p-8 md:p-12 border border-red-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">Why Choose Tesla?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Supercharger Network</h3>
                <p className="text-slate-400 text-sm">Access to 25,000+ Superchargers worldwide with charging speeds up to 250kW.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Over-the-Air Updates</h3>
                <p className="text-slate-400 text-sm">Your Tesla gets better over time with free software updates that add features and improve performance.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Autopilot & FSD</h3>
                <p className="text-slate-400 text-sm">Industry-leading driver assistance with available Full Self-Driving capability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl p-8 md:p-12 border border-emerald-500/20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Own a Tesla? Protect Your Investment</h2>
              <p className="text-slate-300 mb-6">Our premium ceramic coating and PPF services keep your Tesla looking showroom-new for years.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/care" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
                  Explore Care Services
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/blog/ceramic-coating-tesla-model-3" className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors">
                  Tesla Ceramic Coating Guide
                </Link>
              </div>
            </div>
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

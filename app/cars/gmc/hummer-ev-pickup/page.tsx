"use client";

import Link from "next/link";
import ChargingSection from "../../../components/ChargingSection";
import MaintenanceSchedule from "../../../components/MaintenanceSchedule";

export default function GMCHummerEVPickup() {
  const variants = [
    {
      name: "Hummer EV Pickup 2X",
      price: "$98,845",
      range: "329 miles",
      acceleration: "3.5s 0-60 mph",
      topSpeed: "106 mph",
      drive: "All-Wheel Drive",
      hp: "625 hp"
    },
    {
      name: "Hummer EV Pickup 3X",
      price: "$106,945",
      range: "329 miles",
      acceleration: "3.0s 0-60 mph",
      topSpeed: "106 mph",
      drive: "All-Wheel Drive",
      hp: "1,000 hp"
    }
  ];

  const features = [
    { icon: "⚡", title: "1,000 Horsepower", description: "Three electric motors produce 1,000 hp and 11,500 lb-ft of torque in the Edition 1 and 3X trims." },
    { icon: "🛡️", title: "Extract Mode", description: "Raises the suspension approximately 6 inches for extreme off-road capability and obstacle clearance." },
    { icon: "📱", title: "Super Cruise", description: "Hands-free driver assistance on compatible highways with automatic lane changes and trailer-capable driving." },
    { icon: "🔋", title: "350kW Fast Charging", description: "Ultium platform supports up to 350kW DC fast charging. Add 100 miles of range in approximately 12 minutes." }
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
          <Link href="/cars/gmc" className="hover:text-white transition-colors">GMC</Link>
          <span>/</span>
          <span className="text-white">Hummer EV Pickup</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-sm mb-4">
                <span>GMC</span>
                <span>&bull;</span>
                <span>Electric Supertruck Pickup</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">GMC Hummer EV Pickup</h1>
              <p className="text-xl text-slate-300 mb-8">
                1,000 horsepower of electric dominance. The Hummer EV Pickup redefines what a truck can be with Watts to Freedom launch mode and 329 miles of range.
              </p>

              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-emerald-400">$98,845</div>
                  <div className="text-slate-400">Starting Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">329 mi</div>
                  <div className="text-slate-400">Max Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">3.0s</div>
                  <div className="text-slate-400">0-60 mph</div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.gmc.com/hummer-ev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  Configure on GMC.com
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.gmc.com/dealer-locator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
                >
                  Find GMC Dealer
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-slate-700/50 overflow-hidden">
                <img
                  src="/cars/gmc/hummer-ev-pickup.png"
                  alt="GMC Hummer EV Pickup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Variants Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Available Variants</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {variants.map((variant, index) => (
              <div
                key={variant.name}
                className={`rounded-2xl p-6 border ${
                  index === 1
                    ? "bg-gradient-to-br from-emerald-500/10 to-slate-900 border-emerald-500/30"
                    : "bg-slate-900/50 border-slate-800"
                }`}
              >
                {index === 1 && (
                  <div className="inline-block px-2 py-1 bg-emerald-500/20 rounded text-emerald-400 text-xs mb-3">
                    3X
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-4">{variant.name}</h3>
                <div className="space-y-3">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charging & Maintenance */}
      <ChargingSection brand="GMC" model="Hummer EV Pickup" slug="gmc/hummer-ev-pickup" range={329} theme="slate" />
      <MaintenanceSchedule brand="GMC" model="Hummer EV Pickup" theme="slate" />

      {/* Key Features */}
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

      {/* Explore Other Models */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Explore GMC EVs</h2>

          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/cars/gmc" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">All GMC Models</h3>
              <p className="text-sm text-slate-400">View the full lineup</p>
            </Link>
            <Link href="/cars/gmc/hummer-ev-suv" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Hummer EV SUV</h3>
              <p className="text-sm text-slate-400">Electric supertruck SUV</p>
            </Link>
            <Link href="/cars/gmc/sierra-ev" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Sierra EV</h3>
              <p className="text-sm text-slate-400">Premium electric truck</p>
            </Link>
            <Link href="/compare-evs?cars=gmc-hummer-ev-pickup" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Compare</h3>
              <p className="text-sm text-slate-400">Side-by-side specs</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/50 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2026 Healvanna Auto. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

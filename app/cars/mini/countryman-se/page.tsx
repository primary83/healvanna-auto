"use client";

import Link from "next/link";
import ChargingSection from "../../../components/ChargingSection";
import MaintenanceSchedule from "../../../components/MaintenanceSchedule";
import Navigation from "../../../components/Navigation";

export default function MiniCountrymanSE() {
  const variants = [
    {
      name: "Countryman SE",
      price: "$44,900",
      range: "245 miles",
      acceleration: "5.6s 0-60 mph",
      topSpeed: "112 mph",
      drive: "All-Wheel Drive",
      hp: "308 hp"
    },
    {
      name: "Countryman SE ALL4",
      price: "$48,900",
      range: "234 miles",
      acceleration: "5.6s 0-60 mph",
      topSpeed: "112 mph",
      drive: "All-Wheel Drive",
      hp: "308 hp"
    }
  ];

  const features = [
    { icon: "⚡", title: "Dual-Motor AWD", description: "308 horsepower from dual electric motors with ALL4 all-wheel drive for confident performance in all conditions." },
    { icon: "🛡️", title: "Driving Assistant", description: "Active cruise control, lane departure warning, front collision warning, and city collision mitigation." },
    { icon: "📱", title: "Circular OLED", description: "9.4-inch circular OLED display with Mini Operating System 9, wireless Apple CarPlay, and intelligent assistant." },
    { icon: "🔋", title: "DC Fast Charging", description: "Charge from 10% to 80% in approximately 30 minutes with CCS DC fast charging at up to 130kW." }
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Link href="/cars" className="hover:text-white transition-colors">Cars</Link>
          <span>/</span>
          <Link href="/cars/mini" className="hover:text-white transition-colors">Mini</Link>
          <span>/</span>
          <span className="text-white">Countryman SE</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-sm mb-4">
                <span>Mini</span>
                <span>&bull;</span>
                <span>Electric Crossover</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">Mini Countryman SE</h1>
              <p className="text-xl text-slate-300 mb-8">
                The biggest Mini ever, now all-electric. A versatile crossover with 308 horsepower, premium materials, and up to 245 miles of range.
              </p>

              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-emerald-400">$44,900</div>
                  <div className="text-slate-400">Starting Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">245 mi</div>
                  <div className="text-slate-400">Max Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">5.6s</div>
                  <div className="text-slate-400">0-60 mph</div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.miniusa.com/model/countryman"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  Configure on Mini.com
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.miniusa.com/find-a-dealer"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
                >
                  Find Mini Dealer
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-slate-700/50 overflow-hidden">
                <img
                  src="/cars/mini/countryman-se.png"
                  alt="Mini Countryman SE"
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
                    ALL4
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
      <ChargingSection brand="Mini" model="Countryman SE" slug="mini/countryman-se" range={245} theme="slate" />
      <MaintenanceSchedule brand="Mini" model="Countryman SE" theme="slate" />

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
          <h2 className="text-2xl font-bold text-white mb-8">Explore Mini EVs</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/cars/mini" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">All Mini Models</h3>
              <p className="text-sm text-slate-400">View the full lineup</p>
            </Link>
            <Link href="/cars/mini/cooper-se" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Cooper SE</h3>
              <p className="text-sm text-slate-400">From $34,900</p>
            </Link>
            <Link href="/compare-evs?cars=mini-countryman-se" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Compare Countryman SE</h3>
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

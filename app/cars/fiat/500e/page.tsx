"use client";

import Link from "next/link";
import ChargingSection from "../../../components/ChargingSection";
import MaintenanceSchedule from "../../../components/MaintenanceSchedule";
import Navigation from "../../../components/Navigation";

export default function Fiat500e() {
  const variants = [
    {
      name: "500e Pop",
      price: "$33,995",
      range: "149 miles",
      acceleration: "7.0s 0-60 mph",
      topSpeed: "93 mph",
      drive: "Front-Wheel Drive"
    },
    {
      name: "500e Inspired By",
      price: "$37,495",
      range: "149 miles",
      acceleration: "7.0s 0-60 mph",
      topSpeed: "93 mph",
      drive: "Front-Wheel Drive"
    },
    {
      name: "500e La Prima Cabrio",
      price: "$40,995",
      range: "141 miles",
      acceleration: "7.0s 0-60 mph",
      topSpeed: "93 mph",
      drive: "Front-Wheel Drive"
    }
  ];

  const features = [
    { icon: "⚡", title: "Made in Italy", description: "Designed and built in Turin, Italy with iconic Cinquecento DNA reimagined for the electric era." },
    { icon: "🛡️", title: "Level 2 Autonomy", description: "Intelligent cruise control with lane centering, traffic sign recognition, and autonomous emergency braking." },
    { icon: "📱", title: "10.25\" Display", description: "Touchscreen infotainment with wireless Apple CarPlay, Android Auto, and Fiat connected services." },
    { icon: "🔋", title: "Fast Charging", description: "Charge from 0% to 80% in approximately 35 minutes with 85kW DC fast charging capability." }
  ];

  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Link href="/cars" className="hover:text-white transition-colors">Cars</Link>
          <span>/</span>
          <Link href="/cars/fiat" className="hover:text-white transition-colors">Fiat</Link>
          <span>/</span>
          <span className="text-white">500e</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/20 rounded-full text-rose-400 text-sm mb-4">
                <span>Fiat</span>
                <span>&bull;</span>
                <span>Electric City Car</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">Fiat 500e</h1>
              <p className="text-xl text-slate-300 mb-8">
                The iconic Cinquecento reimagined for the electric age. Italian style meets zero-emission driving with charming character and nimble city handling.
              </p>

              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-emerald-400">$33,995</div>
                  <div className="text-slate-400">Starting Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">149 mi</div>
                  <div className="text-slate-400">Max Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">7.0s</div>
                  <div className="text-slate-400">0-60 mph</div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.fiatusa.com/500e"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  Configure on Fiat.com
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.fiatusa.com/dealer-locator"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
                >
                  Find Fiat Dealer
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-slate-700/50 overflow-hidden">
                <img
                  src="/cars/fiat/500e.png"
                  alt="Fiat 500e"
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

          <div className="grid md:grid-cols-3 gap-6">
            {variants.map((variant, index) => (
              <div
                key={variant.name}
                className={`rounded-2xl p-6 border ${
                  index === 2
                    ? "bg-gradient-to-br from-emerald-500/10 to-slate-900 border-emerald-500/30"
                    : "bg-slate-900/50 border-slate-800"
                }`}
              >
                {index === 2 && (
                  <div className="inline-block px-2 py-1 bg-emerald-500/20 rounded text-emerald-400 text-xs mb-3">
                    CABRIO
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
      <ChargingSection brand="Fiat" model="500e" slug="fiat/500e" range={149} theme="slate" />
      <MaintenanceSchedule brand="Fiat" model="500e" theme="slate" />

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
          <h2 className="text-2xl font-bold text-white mb-8">Explore Fiat EVs</h2>

          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/cars/fiat" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">All Fiat Models</h3>
              <p className="text-sm text-slate-400">View the full lineup</p>
            </Link>
            <Link href="/compare-evs?cars=fiat-500e" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Compare 500e</h3>
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

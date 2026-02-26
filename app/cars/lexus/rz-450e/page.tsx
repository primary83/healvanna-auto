"use client";

import Link from "next/link";
import ChargingSection from "../../../components/ChargingSection";
import MaintenanceSchedule from "../../../components/MaintenanceSchedule";

export default function LexusRZ450e() {
  const variants = [
    {
      name: "RZ 450e Premium",
      price: "$55,150",
      range: "266 miles",
      acceleration: "4.8s 0-60 mph",
      topSpeed: "130 mph",
      drive: "All-Wheel Drive"
    },
    {
      name: "RZ 450e Luxury",
      price: "$62,000",
      range: "266 miles",
      acceleration: "4.8s 0-60 mph",
      topSpeed: "130 mph",
      drive: "All-Wheel Drive"
    }
  ];

  const features = [
    { icon: "⚡", title: "DIRECT4 AWD", description: "Innovative system independently controls front and rear electric motors for optimal traction, stability, and driving dynamics." },
    { icon: "🛡️", title: "Lexus Safety System+ 3.0", description: "Pre-collision system with intersection support, emergency steering assist, and advanced adaptive cruise control." },
    { icon: "📱", title: "14\" Touchscreen", description: "Premium multimedia display with Lexus Interface, wireless Apple CarPlay, Android Auto, and Mark Levinson audio." },
    { icon: "🔋", title: "DC Fast Charging", description: "Charge from 10% to 80% in approximately 30 minutes at compatible CCS DC fast charging stations." }
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
          <Link href="/cars/lexus" className="hover:text-white transition-colors">Lexus</Link>
          <span>/</span>
          <span className="text-white">RZ 450e</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 rounded-full text-amber-400 text-sm mb-4">
                <span>Lexus</span>
                <span>&bull;</span>
                <span>Luxury Electric SUV</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">Lexus RZ 450e</h1>
              <p className="text-xl text-slate-300 mb-8">
                Lexus&apos; first dedicated electric vehicle combines luxury craftsmanship with the innovative DIRECT4 all-wheel drive system and up to 266 miles of range.
              </p>

              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-emerald-400">$55,150</div>
                  <div className="text-slate-400">Starting Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">266 mi</div>
                  <div className="text-slate-400">Max Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">4.8s</div>
                  <div className="text-slate-400">0-60 mph</div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.lexus.com/models/RZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  Configure on Lexus.com
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.lexus.com/dealers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
                >
                  Find Lexus Dealer
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-slate-700/50 overflow-hidden">
                <img
                  src="/cars/lexus/rz-450e.png"
                  alt="Lexus RZ 450e"
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
                    LUXURY
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
      <ChargingSection brand="Lexus" model="RZ 450e" slug="lexus/rz-450e" range={266} theme="slate" />
      <MaintenanceSchedule brand="Lexus" model="RZ 450e" theme="slate" />

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
          <h2 className="text-2xl font-bold text-white mb-8">Explore Lexus EVs</h2>

          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/cars/lexus" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">All Lexus Models</h3>
              <p className="text-sm text-slate-400">View the full lineup</p>
            </Link>
            <Link href="/compare-evs?cars=lexus-rz-450e" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Compare RZ 450e</h3>
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

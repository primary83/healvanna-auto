"use client";

import Link from "next/link";
import ChargingSection from "../../../components/ChargingSection";
import MaintenanceSchedule from "../../../components/MaintenanceSchedule";

export default function SubaruSolterra() {
  const variants = [
    {
      name: "Solterra Premium",
      price: "$39,945",
      range: "227 miles",
      acceleration: "6.5s 0-60 mph",
      topSpeed: "100 mph",
      drive: "All-Wheel Drive"
    },
    {
      name: "Solterra Limited",
      price: "$44,945",
      range: "220 miles",
      acceleration: "6.5s 0-60 mph",
      topSpeed: "100 mph",
      drive: "All-Wheel Drive"
    },
    {
      name: "Solterra Touring",
      price: "$49,945",
      range: "220 miles",
      acceleration: "6.5s 0-60 mph",
      topSpeed: "100 mph",
      drive: "All-Wheel Drive"
    }
  ];

  const features = [
    { icon: "⚡", title: "Symmetrical AWD", description: "Subaru&apos;s legendary all-wheel drive system adapted for electric power, providing balanced traction in all conditions." },
    { icon: "🛡️", title: "EyeSight Safety", description: "Award-winning driver assistance with adaptive cruise, pre-collision braking, lane centering, and lead vehicle start alert." },
    { icon: "📱", title: "12.3\" Multimedia", description: "Touchscreen display with wireless Apple CarPlay, Android Auto, and Subaru STARLINK connected services." },
    { icon: "🔋", title: "DC Fast Charging", description: "Charge from 10% to 80% in approximately 35 minutes at compatible CCS DC fast charging stations." }
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
          <Link href="/cars/subaru" className="hover:text-white transition-colors">Subaru</Link>
          <span>/</span>
          <span className="text-white">Solterra</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm mb-4">
                <span>Subaru</span>
                <span>&bull;</span>
                <span>Electric SUV</span>
              </div>
              <h1 className="text-5xl font-bold text-white mb-4">Subaru Solterra</h1>
              <p className="text-xl text-slate-300 mb-8">
                Subaru&apos;s first all-electric SUV combines legendary symmetrical AWD with zero-emission driving, X-MODE off-road capability, and up to 227 miles of range.
              </p>

              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-emerald-400">$39,945</div>
                  <div className="text-slate-400">Starting Price</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">227 mi</div>
                  <div className="text-slate-400">Max Range</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">6.5s</div>
                  <div className="text-slate-400">0-60 mph</div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.subaru.com/vehicles/solterra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors inline-flex items-center gap-2"
                >
                  Configure on Subaru.com
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a
                  href="https://www.subaru.com/retailers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors"
                >
                  Find Subaru Dealer
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border border-slate-700/50 overflow-hidden">
                <img
                  src="/cars/subaru/solterra.png"
                  alt="Subaru Solterra"
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
                    TOURING
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
      <ChargingSection brand="Subaru" model="Solterra" slug="subaru/solterra" range={227} theme="slate" />
      <MaintenanceSchedule brand="Subaru" model="Solterra" theme="slate" />

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
          <h2 className="text-2xl font-bold text-white mb-8">Explore Subaru EVs</h2>

          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/cars/subaru" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">All Subaru Models</h3>
              <p className="text-sm text-slate-400">View the full lineup</p>
            </Link>
            <Link href="/compare-evs?cars=subaru-solterra" className="group bg-slate-800/30 rounded-xl p-4 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Compare Solterra</h3>
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

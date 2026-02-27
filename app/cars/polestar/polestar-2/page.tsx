"use client";

import Image from "next/image";
import Link from "next/link";
import ChargingSection from "../../../components/ChargingSection";
import MaintenanceSchedule from "../../../components/MaintenanceSchedule";
import Navigation from "../../../components/Navigation";

export default function Polestar2Page() {
  const specs = {
    range: "320 mi",
    acceleration: "4.1s",
    topSpeed: "127 mph",
    power: "421 hp",
    battery: "82 kWh",
    drive: "Dual Motor AWD",
  };

  const variants = [
    { name: "Long Range Single Motor", price: "$44,900", range: "320 mi", power: "299 hp" },
    { name: "Long Range Dual Motor", price: "$48,900", range: "276 mi", power: "421 hp" },
    { name: "Performance Pack", price: "$53,900", range: "270 mi", power: "455 hp" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation />

      {/* Hero Section */}
      <div className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4">
              <span className="bg-[#1a1a1a] text-white text-[10px] font-bold px-3 py-1 rounded">
                POLESTAR
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-[#e8edf5] mb-2">
              Polestar 2
            </h1>
            <p className="text-[#4a90d9] text-lg mb-4">2024 • From $44,900</p>
            <p className="text-[#8a919e] mb-8 max-w-lg">
              The performance fastback. Pure electric driving pleasure with Scandinavian 
              precision, Google built-in, and driver-focused dynamics.
            </p>

            {/* Quick Specs */}
            <div className="flex gap-8 mb-8">
              <div>
                <span className="text-3xl font-light text-[#4a90d9]">{specs.range}</span>
                <p className="text-sm text-[#6b7a94]">Range</p>
              </div>
              <div>
                <span className="text-3xl font-light text-[#4a90d9]">{specs.acceleration}</span>
                <p className="text-sm text-[#6b7a94]">0-60 mph</p>
              </div>
              <div>
                <span className="text-3xl font-light text-[#4a90d9]">{specs.power}</span>
                <p className="text-sm text-[#6b7a94]">Power</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Request Quote
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/cars/polestar/polestar-2.png"
              alt="Polestar 2"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Specifications Section */}
      <div className="px-6 md:px-12 py-12 bg-[#0d1420]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-[#e8edf5] mb-8">Specifications</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Performance */}
            <div className="bg-[#111927] rounded-xl p-6 border border-[#1a2235]">
              <h3 className="text-[#4a90d9] font-medium mb-4">Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Horsepower</span>
                  <span className="text-[#e8edf5]">421 hp</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Torque</span>
                  <span className="text-[#e8edf5]">546 lb-ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">0-60 mph</span>
                  <span className="text-[#e8edf5]">4.1 seconds</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Top Speed</span>
                  <span className="text-[#e8edf5]">127 mph</span>
                </div>
              </div>
            </div>

            {/* Battery & Charging */}
            <div className="bg-[#111927] rounded-xl p-6 border border-[#1a2235]">
              <h3 className="text-[#4a90d9] font-medium mb-4">Battery & Charging</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Battery Capacity</span>
                  <span className="text-[#e8edf5]">82 kWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Range (EPA)</span>
                  <span className="text-[#e8edf5]">320 miles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">DC Fast Charging</span>
                  <span className="text-[#e8edf5]">205 kW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Charge Time (10-80%)</span>
                  <span className="text-[#e8edf5]">28 min</span>
                </div>
              </div>
            </div>

            {/* Dimensions */}
            <div className="bg-[#111927] rounded-xl p-6 border border-[#1a2235]">
              <h3 className="text-[#4a90d9] font-medium mb-4">Dimensions</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Length</span>
                  <span className="text-[#e8edf5]">181.4 in</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Width</span>
                  <span className="text-[#e8edf5]">73.2 in</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Height</span>
                  <span className="text-[#e8edf5]">57.6 in</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Cargo Space</span>
                  <span className="text-[#e8edf5]">14.4 cu ft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Variants Section */}
      <div className="px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-[#e8edf5] mb-8">Available Variants</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {variants.map((variant) => (
              <div key={variant.name} className="bg-[#0d1420] rounded-xl p-6 border border-[#1a2235] hover:border-[#2a3a55] transition-colors">
                <h3 className="text-lg font-medium text-[#e8edf5] mb-2">{variant.name}</h3>
                <p className="text-[#4a90d9] text-xl font-light mb-4">{variant.price}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b7a94]">Range: {variant.range}</span>
                  <span className="text-[#6b7a94]">Power: {variant.power}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 md:px-12 py-12 bg-[#0d1420]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-[#e8edf5] mb-8">Key Features</h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              "Google Built-In",
              "Pilot Assist",
              "Pixel LED Headlights",
              "Harman Kardon Audio",
              "Vegan Interior Options",
              "Performance Software",
              "Öhlins Dampers Available",
              "Over-the-Air Updates",
            ].map((feature) => (
              <div key={feature} className="bg-[#111927] rounded-lg p-4 border border-[#1a2235]">
                <span className="text-[#e8edf5] text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/cars/polestar"
            className="inline-flex items-center gap-2 text-[#4a90d9] hover:text-[#6ba5e7] transition-colors"
          >
            <span>←</span>
            <span>Back to Polestar Models</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      {/* Charging Compatibility */}
      <ChargingSection brand="Polestar" model="2" slug="polestar/polestar-2" range={320} theme="sapphire" />
      <MaintenanceSchedule brand="Polestar" model="2" theme="sapphire" />

      
      {/* Compare With */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold text-white mb-4">Compare With Competitors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link href="/cars/tesla/model-3" className="block px-5 py-3.5 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 transition-all">
                <div className="text-white font-medium text-sm">Tesla Model 3</div>
                <div className="text-emerald-400 text-xs mt-1">Compare →</div>
              </Link>
              <Link href="/cars/bmw/i4" className="block px-5 py-3.5 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 transition-all">
                <div className="text-white font-medium text-sm">BMW i4</div>
                <div className="text-emerald-400 text-xs mt-1">Compare →</div>
              </Link>
              <Link href="/cars/hyundai/ioniq-6" className="block px-5 py-3.5 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 transition-all">
                <div className="text-white font-medium text-sm">Hyundai Ioniq 6</div>
                <div className="text-emerald-400 text-xs mt-1">Compare →</div>
              </Link>
          </div>
          <div className="mt-4">
            <Link href="/cars/polestar" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
              ← All Polestar Models
            </Link>
          </div>
        </div>
      </section>

      <footer className="px-6 md:px-12 py-12 border-t border-[#1a2235]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[11px] text-[#6b7a94]">
              © 2024 Healvanna Auto. All rights reserved.
            </div>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

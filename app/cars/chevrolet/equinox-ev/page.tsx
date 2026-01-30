"use client";

import Image from "next/image";
import Link from "next/link";

export default function EquinoxEVPage() {
  const variants = [
    { name: "1LT", price: "$34,995", range: "319 mi", power: "210 hp" },
    { name: "2LT", price: "$38,995", range: "319 mi", power: "210 hp" },
    { name: "3LT AWD", price: "$43,295", range: "285 mi", power: "290 hp" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em]">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "HOME", href: "/" },
            { name: "CARS", href: "/cars" },
            { name: "CARE", href: "/care" },
            { name: "CRAFT", href: "/craft" },
            { name: "SHOP", href: "/shop" },
            { name: "BLOG", href: "/blog" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs tracking-[0.12em] transition-colors duration-300 ${
                item.name === "CARS"
                  ? "text-[#4a90d9] border-b border-[#4a90d9] pb-1"
                  : "text-[#8a919e] hover:text-[#e8edf5]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4">
              <span className="bg-[#1a1a1a] text-[#d4a84b] text-[10px] font-bold px-3 py-1 rounded">
                CHEVROLET
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-[#e8edf5] mb-2">
              Chevrolet Equinox EV
            </h1>
            <p className="text-[#4a90d9] text-lg mb-4">2024 • From $34,995</p>
            <p className="text-[#8a919e] mb-8 max-w-lg">
              Affordable electric mobility for everyone. The Equinox EV delivers impressive 
              range, modern technology, and Chevy reliability at a price that makes EV 
              ownership accessible.
            </p>

            <div className="flex gap-8 mb-8">
              <div>
                <span className="text-3xl font-light text-[#4a90d9]">319 mi</span>
                <p className="text-sm text-[#6b7a94]">Range</p>
              </div>
              <div>
                <span className="text-3xl font-light text-[#4a90d9]">5.9s</span>
                <p className="text-sm text-[#6b7a94]">0-60 mph</p>
              </div>
              <div>
                <span className="text-3xl font-light text-[#4a90d9]">290 hp</span>
                <p className="text-sm text-[#6b7a94]">Power</p>
              </div>
            </div>

            <button className="bg-[#d4a84b] hover:bg-[#e4b85b] text-black px-8 py-3 rounded-lg font-medium transition-colors">
              Request Quote
            </button>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/cars/chevrolet/equinox-ev.png"
              alt="Chevrolet Equinox EV"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Specifications */}
      <div className="px-6 md:px-12 py-12 bg-[#0d1420]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-[#e8edf5] mb-8">Specifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#111927] rounded-xl p-6 border border-[#1a2235]">
              <h3 className="text-[#4a90d9] font-medium mb-4">Performance</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-[#6b7a94]">Horsepower</span><span className="text-[#e8edf5]">290 hp</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Torque</span><span className="text-[#e8edf5]">346 lb-ft</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">0-60 mph</span><span className="text-[#e8edf5]">5.9 seconds</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Drive</span><span className="text-[#e8edf5]">FWD / eAWD</span></div>
              </div>
            </div>
            <div className="bg-[#111927] rounded-xl p-6 border border-[#1a2235]">
              <h3 className="text-[#4a90d9] font-medium mb-4">Battery & Charging</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-[#6b7a94]">Battery Capacity</span><span className="text-[#e8edf5]">85 kWh</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Range (EPA)</span><span className="text-[#e8edf5]">319 miles</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">DC Fast Charging</span><span className="text-[#e8edf5]">150 kW</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Charge Time (10-80%)</span><span className="text-[#e8edf5]">32 min</span></div>
              </div>
            </div>
            <div className="bg-[#111927] rounded-xl p-6 border border-[#1a2235]">
              <h3 className="text-[#4a90d9] font-medium mb-4">Dimensions</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-[#6b7a94]">Length</span><span className="text-[#e8edf5]">190.1 in</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Width</span><span className="text-[#e8edf5]">73.0 in</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Height</span><span className="text-[#e8edf5]">64.4 in</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Cargo Space</span><span className="text-[#e8edf5]">57 cu ft</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Variants */}
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

      {/* Features */}
      <div className="px-6 md:px-12 py-12 bg-[#0d1420]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-[#e8edf5] mb-8">Key Features</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {["17.7\" Touchscreen", "Super Cruise Available", "One-Pedal Driving", "Wireless CarPlay/Android Auto", "Hands-Free Liftgate", "11\" Digital Cluster", "Chevy Safety Assist", "OTA Updates"].map((feature) => (
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
          <Link href="/cars/chevrolet" className="inline-flex items-center gap-2 text-[#4a90d9] hover:text-[#6ba5e7] transition-colors">
            <span>←</span><span>Back to Chevrolet Models</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-[#1a2235]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[11px] text-[#6b7a94]">© 2024 Healvanna Auto. All rights reserved.</div>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <Link key={link} href={`/${link.toLowerCase()}`} className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors">{link}</Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

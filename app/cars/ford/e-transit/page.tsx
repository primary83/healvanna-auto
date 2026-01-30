"use client";

import Image from "next/image";
import Link from "next/link";

export default function ETransitPage() {
  const specs = {
    range: "159 mi",
    acceleration: "N/A",
    topSpeed: "75 mph",
    power: "266 hp",
    battery: "89 kWh",
    drive: "RWD",
  };

  const variants = [
    { name: "Cargo Van Low Roof", price: "$43,295", range: "159 mi", cargo: "246 cu ft" },
    { name: "Cargo Van Medium Roof", price: "$48,295", range: "148 mi", cargo: "399 cu ft" },
    { name: "Cargo Van High Roof", price: "$51,295", range: "143 mi", cargo: "487 cu ft" },
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
          {/* Left Content */}
          <div>
            <div className="mb-4">
              <span className="bg-[#003478] text-white text-[10px] font-bold px-3 py-1 rounded">
                FORD
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-[#e8edf5] mb-2">
              Ford E-Transit
            </h1>
            <p className="text-[#4a90d9] text-lg mb-4">2024 • From $43,295</p>
            <p className="text-[#8a919e] mb-8 max-w-lg">
              The all-electric commercial van built for business. Lower operating costs, 
              zero emissions, and the reliability businesses depend on.
            </p>

            {/* Quick Specs */}
            <div className="flex gap-8 mb-8">
              <div>
                <span className="text-3xl font-light text-[#4a90d9]">{specs.range}</span>
                <p className="text-sm text-[#6b7a94]">Range</p>
              </div>
              <div>
                <span className="text-3xl font-light text-[#4a90d9]">487 cu ft</span>
                <p className="text-sm text-[#6b7a94]">Max Cargo</p>
              </div>
              <div>
                <span className="text-3xl font-light text-[#4a90d9]">{specs.power}</span>
                <p className="text-sm text-[#6b7a94]">Power</p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-[#003478] hover:bg-[#004494] text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Request Fleet Quote
            </button>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/cars/ford/e-transit.png"
              alt="Ford E-Transit"
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
                  <span className="text-[#e8edf5]">266 hp</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Torque</span>
                  <span className="text-[#e8edf5]">317 lb-ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Drive Type</span>
                  <span className="text-[#e8edf5]">Rear-Wheel Drive</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Max Speed</span>
                  <span className="text-[#e8edf5]">75 mph</span>
                </div>
              </div>
            </div>

            {/* Battery & Charging */}
            <div className="bg-[#111927] rounded-xl p-6 border border-[#1a2235]">
              <h3 className="text-[#4a90d9] font-medium mb-4">Battery & Charging</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Battery Capacity</span>
                  <span className="text-[#e8edf5]">89 kWh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Range (EPA)</span>
                  <span className="text-[#e8edf5]">159 miles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">DC Fast Charging</span>
                  <span className="text-[#e8edf5]">115 kW</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Charge Time (15-80%)</span>
                  <span className="text-[#e8edf5]">34 min</span>
                </div>
              </div>
            </div>

            {/* Cargo Capacity */}
            <div className="bg-[#111927] rounded-xl p-6 border border-[#1a2235]">
              <h3 className="text-[#4a90d9] font-medium mb-4">Cargo Capacity</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Cargo Length</span>
                  <span className="text-[#e8edf5]">148.9 in</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Cargo Width</span>
                  <span className="text-[#e8edf5]">70.2 in</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Cargo Height</span>
                  <span className="text-[#e8edf5]">81.5 in</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6b7a94]">Max Cargo Volume</span>
                  <span className="text-[#e8edf5]">487.3 cu ft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Variants Section */}
      <div className="px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-[#e8edf5] mb-8">Available Configurations</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {variants.map((variant) => (
              <div key={variant.name} className="bg-[#0d1420] rounded-xl p-6 border border-[#1a2235] hover:border-[#2a3a55] transition-colors">
                <h3 className="text-lg font-medium text-[#e8edf5] mb-2">{variant.name}</h3>
                <p className="text-[#4a90d9] text-xl font-light mb-4">{variant.price}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6b7a94]">Range: {variant.range}</span>
                  <span className="text-[#6b7a94]">Cargo: {variant.cargo}</span>
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
              "Pro Power Onboard (2.4 kW)",
              "SYNC 4 with 12\" Touchscreen",
              "Ford Pro E-Telematics",
              "Commercial-Grade Durability",
              "Multiple Roof Heights",
              "Multiple Wheelbase Options",
              "Fleet Management Integration",
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
            href="/cars/ford"
            className="inline-flex items-center gap-2 text-[#4a90d9] hover:text-[#6ba5e7] transition-colors"
          >
            <span>←</span>
            <span>Back to Ford Models</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
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

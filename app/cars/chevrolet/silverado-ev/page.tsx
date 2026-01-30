"use client";

import Image from "next/image";
import Link from "next/link";

export default function SilveradoEVPage() {
  const variants = [
    { name: "Work Truck", price: "$73,590", range: "450 mi", power: "510 hp" },
    { name: "RST", price: "$96,495", range: "440 mi", power: "664 hp" },
    { name: "Trail Boss", price: "$98,990", range: "393 mi", power: "664 hp" },
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
              Chevrolet Silverado EV
            </h1>
            <p className="text-[#4a90d9] text-lg mb-4">2024 • From $73,590</p>
            <p className="text-[#8a919e] mb-8 max-w-lg">
              The most capable Silverado ever. All-electric power meets legendary truck 
              capability with up to 450 miles of range and 10,000 lbs towing capacity.
            </p>

            <div className="flex gap-8 mb-8">
              <div>
                <span className="text-3xl font-light text-[#4a90d9]">450 mi</span>
                <p className="text-sm text-[#6b7a94]">Range</p>
              </div>
              <div>
                <span className="text-3xl font-light text-[#4a90d9]">4.5s</span>
                <p className="text-sm text-[#6b7a94]">0-60 mph</p>
              </div>
              <div>
                <span className="text-3xl font-light text-[#4a90d9]">664 hp</span>
                <p className="text-sm text-[#6b7a94]">Power</p>
              </div>
            </div>

            <button className="bg-[#d4a84b] hover:bg-[#e4b85b] text-black px-8 py-3 rounded-lg font-medium transition-colors">
              Request Quote
            </button>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="/cars/chevrolet/silverado-ev.png"
              alt="Chevrolet Silverado EV"
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
                <div className="flex justify-between"><span className="text-[#6b7a94]">Horsepower</span><span className="text-[#e8edf5]">664 hp</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Torque</span><span className="text-[#e8edf5]">780 lb-ft</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">0-60 mph</span><span className="text-[#e8edf5]">4.5 seconds</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Towing Capacity</span><span className="text-[#e8edf5]">10,000 lbs</span></div>
              </div>
            </div>
            <div className="bg-[#111927] rounded-xl p-6 border border-[#1a2235]">
              <h3 className="text-[#4a90d9] font-medium mb-4">Battery & Charging</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-[#6b7a94]">Battery Capacity</span><span className="text-[#e8edf5]">200 kWh</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Range (EPA)</span><span className="text-[#e8edf5]">450 miles</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">DC Fast Charging</span><span className="text-[#e8edf5]">350 kW</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Charge Time (10-80%)</span><span className="text-[#e8edf5]">20 min</span></div>
              </div>
            </div>
            <div className="bg-[#111927] rounded-xl p-6 border border-[#1a2235]">
              <h3 className="text-[#4a90d9] font-medium mb-4">Capability</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-[#6b7a94]">Payload Capacity</span><span className="text-[#e8edf5]">1,300 lbs</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Bed Length</span><span className="text-[#e8edf5]">5.11 ft</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">eTrunk Storage</span><span className="text-[#e8edf5]">10.6 cu ft</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">PowerBase</span><span className="text-[#e8edf5]">10.2 kW</span></div>
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
            {["Multi-Flex Midgate", "eTrunk Storage", "PowerBase (10.2 kW)", "Super Cruise", "17\" Touchscreen", "Four-Wheel Steer", "CrabWalk Mode", "OTA Updates"].map((feature) => (
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

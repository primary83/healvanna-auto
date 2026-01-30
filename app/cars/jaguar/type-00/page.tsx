"use client";

import Image from "next/image";
import Link from "next/link";

export default function Type00Page() {
  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em]">HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span></Link>
        <div className="hidden md:flex items-center gap-8">
          {[{ name: "HOME", href: "/" }, { name: "CARS", href: "/cars" }, { name: "CARE", href: "/care" }, { name: "CRAFT", href: "/craft" }, { name: "SHOP", href: "/shop" }, { name: "BLOG", href: "/blog" }].map((item) => (
            <Link key={item.name} href={item.href} className={`text-xs tracking-[0.12em] transition-colors duration-300 ${item.name === "CARS" ? "text-[#4a90d9] border-b border-[#4a90d9] pb-1" : "text-[#8a919e] hover:text-[#e8edf5]"}`}>{item.name}</Link>
          ))}
        </div>
      </nav>

      <div className="pt-24 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-4 flex gap-2">
              <span className="bg-[#1a1a1a] text-[#2d6b4d] text-[10px] font-bold px-3 py-1 rounded">JAGUAR</span>
              <span className="bg-[#6b4d2d] text-white text-[10px] font-bold px-3 py-1 rounded">CONCEPT</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-[#e8edf5] mb-2">Jaguar Type 00</h1>
            <p className="text-[#4a90d9] text-lg mb-4">2026 • From $150,000 (est.)</p>
            <p className="text-[#8a919e] mb-8 max-w-lg">A glimpse into Jaguar's all-electric future. Bold, dramatic, and utterly revolutionary—the Type 00 heralds a new era for British luxury.</p>
            <div className="flex gap-8 mb-8">
              <div><span className="text-3xl font-light text-[#4a90d9]">400 mi</span><p className="text-sm text-[#6b7a94]">Target Range</p></div>
              <div><span className="text-3xl font-light text-[#4a90d9]">2.9s</span><p className="text-sm text-[#6b7a94]">Target 0-60</p></div>
              <div><span className="text-3xl font-light text-[#4a90d9]">600 hp</span><p className="text-sm text-[#6b7a94]">Target Power</p></div>
            </div>
            <button className="bg-[#2d6b4d] hover:bg-[#3d7b5d] text-white px-8 py-3 rounded-lg font-medium transition-colors">Register Interest</button>
          </div>
          <div className="relative h-[400px] lg:h-[500px]"><Image src="/cars/jaguar/type-00.png" alt="Jaguar Type 00" fill className="object-contain" priority /></div>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12 bg-[#0d1420]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-[#e8edf5] mb-8">Concept Specifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#111927] rounded-xl p-6 border border-[#1a2235]">
              <h3 className="text-[#4a90d9] font-medium mb-4">Performance Target</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-[#6b7a94]">Horsepower</span><span className="text-[#e8edf5]">600+ hp</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Torque</span><span className="text-[#e8edf5]">700+ lb-ft</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">0-60 mph</span><span className="text-[#e8edf5]">Under 3s</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Top Speed</span><span className="text-[#e8edf5]">200 mph</span></div>
              </div>
            </div>
            <div className="bg-[#111927] rounded-xl p-6 border border-[#1a2235]">
              <h3 className="text-[#4a90d9] font-medium mb-4">Battery & Range</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-[#6b7a94]">Platform</span><span className="text-[#e8edf5]">JEA Architecture</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Target Range</span><span className="text-[#e8edf5]">400+ miles</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Charging</span><span className="text-[#e8edf5]">Ultra-Fast 800V</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Charge Time</span><span className="text-[#e8edf5]">15-20 min</span></div>
              </div>
            </div>
            <div className="bg-[#111927] rounded-xl p-6 border border-[#1a2235]">
              <h3 className="text-[#4a90d9] font-medium mb-4">Design Vision</h3>
              <div className="space-y-3">
                <div className="flex justify-between"><span className="text-[#6b7a94]">Body Style</span><span className="text-[#e8edf5]">4-Door GT</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Materials</span><span className="text-[#e8edf5]">Carbon Fiber</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Production</span><span className="text-[#e8edf5]">2026</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Availability</span><span className="text-[#e8edf5]">Limited</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-[#e8edf5] mb-8">Revolutionary Features</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {["Dramatic New Design Language", "Sustainable Luxury Materials", "AI-Powered Driving", "Bespoke Configuration", "Brass Accents", "Minimalist Interior", "Next-Gen Infotainment", "Zero Emissions"].map((feature) => (
              <div key={feature} className="bg-[#111927] rounded-lg p-4 border border-[#1a2235]"><span className="text-[#e8edf5] text-sm">{feature}</span></div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 py-8"><div className="max-w-7xl mx-auto"><Link href="/cars/jaguar" className="inline-flex items-center gap-2 text-[#4a90d9] hover:text-[#6ba5e7] transition-colors"><span>←</span><span>Back to Jaguar Models</span></Link></div></div>

      <footer className="px-6 md:px-12 py-12 border-t border-[#1a2235]"><div className="max-w-7xl mx-auto"><div className="flex flex-col md:flex-row justify-between items-center gap-4"><div className="text-[11px] text-[#6b7a94]">© 2024 Healvanna Auto. All rights reserved.</div><div className="flex gap-6">{["Privacy", "Terms", "Cookies"].map((link) => (<Link key={link} href={`/${link.toLowerCase()}`} className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors">{link}</Link>))}</div></div></div></footer>
    </main>
  );
}

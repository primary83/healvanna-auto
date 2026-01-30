"use client";

import Image from "next/image";
import Link from "next/link";

export default function RSETronGTPage() {
  const specs = {
    range: "232 mi",
    acceleration: "3.1s",
    topSpeed: "155 mph",
    power: "637 hp",
    battery: "93.4 kWh",
    drive: "quattro AWD",
  };

  const variants = [
    { name: "RS e-tron GT", price: "$147,000", range: "232 mi", power: "637 hp" },
    { name: "RS e-tron GT Performance", price: "$164,150", range: "232 mi", power: "912 hp" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em]">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[{ name: "HOME", href: "/" }, { name: "CARS", href: "/cars" }, { name: "CARE", href: "/care" }, { name: "CRAFT", href: "/craft" }, { name: "SHOP", href: "/shop" }, { name: "BLOG", href: "/blog" }].map((item) => (
            <Link key={item.name} href={item.href} className={`text-xs tracking-[0.12em] transition-colors duration-300 ${item.name === "CARS" ? "text-[#e8edf5] border-b border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5]"}`}>{item.name}</Link>
          ))}
        </div>
      </nav>

      <section className="pt-24 pb-4 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-2 text-sm text-[#6b7a94]">
            <Link href="/cars" className="hover:text-[#e8edf5] transition-colors">Cars</Link>
            <span>/</span>
            <Link href="/cars/audi" className="hover:text-[#e8edf5] transition-colors">Audi</Link>
            <span>/</span>
            <span className="text-[#e8edf5]">RS e-tron GT</span>
          </div>
        </div>
      </section>

      <section className="py-8 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-[#bb0a30] text-white text-xs font-bold px-3 py-1 rounded mb-4">RS</div>
              <h1 className="text-5xl md:text-6xl font-light mb-4">Audi RS e-tron GT</h1>
              <p className="text-xl text-[#4a90d9] mb-2">2024 • From $147,000</p>
              <p className="text-[#6b7a94] mb-8 max-w-lg">The ultimate electric performance machine with RS DNA and track-ready capabilities.</p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div><div className="text-3xl font-light text-[#4a90d9]">{specs.range}</div><div className="text-sm text-[#6b7a94]">Range</div></div>
                <div><div className="text-3xl font-light text-[#4a90d9]">{specs.acceleration}</div><div className="text-sm text-[#6b7a94]">0-60 mph</div></div>
                <div><div className="text-3xl font-light text-[#4a90d9]">{specs.power}</div><div className="text-sm text-[#6b7a94]">Power</div></div>
              </div>
              <Link href="/contact" className="inline-block bg-[#bb0a30] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#9a0827] transition-colors">Request Quote</Link>
            </div>
            <div className="relative h-[400px] bg-gradient-to-br from-[#12182a] to-[#0d1220] rounded-2xl flex items-center justify-center">
              <Image src="/cars/audi/rs-e-tron-gt.png" alt="Audi RS e-tron GT" width={500} height={300} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 bg-[#080c14]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl font-light mb-8">Specifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Object.entries(specs).map(([key, value]) => (
              <div key={key} className="bg-[#0a0f1a] p-4 rounded-lg">
                <div className="text-xl font-medium text-[#4a90d9]">{value}</div>
                <div className="text-xs text-[#6b7a94] capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl font-light mb-8">Available Variants</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {variants.map((variant) => (
              <div key={variant.name} className="bg-gradient-to-b from-[rgba(15,22,40,0.8)] to-[rgba(10,15,26,0.9)] p-6 rounded-xl border border-[rgba(74,144,217,0.1)]">
                <h3 className="text-lg font-medium mb-2">{variant.name}</h3>
                <p className="text-2xl text-[#4a90d9] font-light mb-4">{variant.price}</p>
                <div className="space-y-2 text-sm text-[#6b7a94]">
                  <div className="flex justify-between"><span>Range</span><span className="text-[#e8edf5]">{variant.range}</span></div>
                  <div className="flex justify-between"><span>Power</span><span className="text-[#e8edf5]">{variant.power}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <Link href="/cars/audi" className="inline-flex items-center text-[#4a90d9] hover:text-[#e8edf5] transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Audi Models
          </Link>
        </div>
      </section>

      <footer className="bg-[#080c14] py-16 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(74,144,217,0.15)]">
            <div className="text-[11px] text-[#3d4a61] mb-4 md:mb-0">© 2026 Healvanna. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

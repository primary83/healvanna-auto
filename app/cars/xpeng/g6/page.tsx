"use client";

import Link from "next/link";
import Image from "next/image";

export default function XPengG6Page() {
  const variants = [
    { name: "G6 RWD", price: "$38,000", range: "360 mi", acceleration: "6.9s", power: "296 hp", battery: "87.5 kWh" },
    { name: "G6 AWD Performance", price: "$44,000", range: "330 mi", acceleration: "3.9s", power: "476 hp", battery: "87.5 kWh", highlight: true },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[20px] font-light tracking-[0.12em]">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="flex gap-8">
          {[{ name: "HOME", href: "/" }, { name: "CARS", href: "/cars", active: true }, { name: "CARE", href: "/care" }, { name: "CRAFT", href: "/craft" }, { name: "BLOG", href: "/blog" }].map((item) => (
            <Link key={item.name} href={item.href} className={`text-xs tracking-[0.12em] transition-colors duration-300 ${item.active ? "text-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5]"}`}>{item.name}</Link>
          ))}
        </div>
      </nav>

      <div className="pt-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-[#6b7a94]">
            <Link href="/cars" className="hover:text-[#10b981] transition-colors">Cars</Link>
            <span>/</span>
            <Link href="/cars/xpeng" className="hover:text-[#10b981] transition-colors">XPeng</Link>
            <span>/</span>
            <span className="text-[#e8edf5]">G6</span>
          </div>
        </div>
      </div>

      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-light mb-4">XPeng G6</h1>
            <p className="text-[#8a9bb5] text-lg mb-8 leading-relaxed">
              A compact electric SUV that brings flagship technology to a more accessible price. The G6 features the same 800V architecture as the G9 with exceptional performance.
            </p>
            
            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-3xl font-light text-[#10b981]">$38,000</div>
                <div className="text-sm text-[#6b7a94]">Starting Price</div>
              </div>
              <div>
                <div className="text-3xl font-light">360 mi</div>
                <div className="text-sm text-[#6b7a94]">Max Range</div>
              </div>
              <div>
                <div className="text-3xl font-light">3.9s</div>
                <div className="text-sm text-[#6b7a94]">0-60 mph</div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.xpeng.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#10b981] text-white rounded-lg font-medium hover:bg-[#059669] transition-colors flex items-center gap-2">
                Learn More on XPeng.com
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <Link href="/cars/xpeng" className="px-6 py-3 border border-[#6b7a94] text-[#e8edf5] rounded-lg font-medium hover:bg-white/5 transition-colors">View All XPeng Models</Link>
            </div>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image src="/cars/xpeng/g6.png" alt="XPeng G6" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[#0d1424]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-8">Available Variants</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {variants.map((variant) => (
              <div key={variant.name} className={`p-6 rounded-xl border ${variant.highlight ? "border-[#10b981] bg-gradient-to-b from-[rgba(16,185,129,0.1)] to-transparent" : "border-[rgba(74,144,217,0.15)] bg-[rgba(15,22,40,0.5)]"}`}>
                {variant.highlight && <div className="text-xs tracking-wider text-[#10b981] font-semibold mb-2 uppercase">Performance</div>}
                <h3 className="text-xl font-medium mb-4">{variant.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-[#6b7a94]">Price</span><span className="text-[#10b981] font-medium">{variant.price}</span></div>
                  <div className="flex justify-between"><span className="text-[#6b7a94]">Range</span><span>{variant.range}</span></div>
                  <div className="flex justify-between"><span className="text-[#6b7a94]">0-60 mph</span><span>{variant.acceleration}</span></div>
                  <div className="flex justify-between"><span className="text-[#6b7a94]">Power</span><span>{variant.power}</span></div>
                  <div className="flex justify-between"><span className="text-[#6b7a94]">Battery</span><span>{variant.battery}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-8">Key Features</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "800V Platform", desc: "Same ultra-fast charging as flagship G9" },
              { title: "XNGP Ready", desc: "Advanced city navigation autonomous driving" },
              { title: "Coupe Design", desc: "Sporty fastback SUV styling" },
              { title: "Smart Cockpit", desc: "15.6\" touchscreen with Xmart OS" },
            ].map((feature) => (
              <div key={feature.title} className="p-5 rounded-xl bg-[rgba(15,22,40,0.5)] border border-[rgba(74,144,217,0.1)]">
                <h3 className="font-medium mb-2 text-[#10b981]">{feature.title}</h3>
                <p className="text-sm text-[#6b7a94]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6 md:px-12 bg-[#0d1424]">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/cars/xpeng" className="inline-flex items-center gap-2 text-[#10b981] hover:gap-3 transition-all">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to All XPeng Models
          </Link>
        </div>
      </section>

      <footer className="bg-[#0a0f1a] py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="max-w-7xl mx-auto text-center text-[#6b7a94] text-sm">© 2026 Healvanna Auto. All rights reserved.</div>
      </footer>
    </main>
  );
}

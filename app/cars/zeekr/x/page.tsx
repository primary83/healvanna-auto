"use client";

import Link from "next/link";
import Image from "next/image";

export default function ZeekrXPage() {
  const variants = [
    { name: "Zeekr X Standard", price: "$44,900", range: "249 mi", acceleration: "5.8s", power: "268 hp", drive: "RWD" },
    { name: "Zeekr X Long Range", price: "$49,900", range: "311 mi", acceleration: "5.8s", power: "268 hp", drive: "RWD" },
    { name: "Zeekr X Performance", price: "$56,900", range: "285 mi", acceleration: "3.7s", power: "536 hp", drive: "AWD", highlight: true },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[20px] font-light tracking-[0.12em]">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="flex gap-8">
          {[
            { name: "HOME", href: "/" },
            { name: "CARS", href: "/cars", active: true },
            { name: "CARE", href: "/care" },
            { name: "CRAFT", href: "/craft" },
            { name: "BLOG", href: "/blog" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs tracking-[0.12em] transition-colors duration-300 ${
                item.active ? "text-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="pt-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-[#6b7a94]">
            <Link href="/cars" className="hover:text-[#eaaa00] transition-colors">Cars</Link>
            <span>/</span>
            <Link href="/cars/zeekr" className="hover:text-[#eaaa00] transition-colors">Zeekr</Link>
            <span>/</span>
            <span className="text-[#e8edf5]">X</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-light mb-4">Zeekr X</h1>
            <p className="text-[#8a9bb5] text-lg mb-8 leading-relaxed">
              The compact electric crossover that proves great things come in smaller packages. 
              Urban agility meets premium quality with bold, unmistakable styling.
            </p>
            
            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-3xl font-light text-[#eaaa00]">$44,900</div>
                <div className="text-sm text-[#6b7a94]">Starting Price</div>
              </div>
              <div>
                <div className="text-3xl font-light">311 mi</div>
                <div className="text-sm text-[#6b7a94]">Max Range</div>
              </div>
              <div>
                <div className="text-3xl font-light">3.7s</div>
                <div className="text-sm text-[#6b7a94]">0-60 mph</div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.zeekrlife.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#eaaa00] text-[#0a0f1a] rounded-lg font-medium hover:bg-[#ffc832] transition-colors flex items-center gap-2">
                Learn More on Zeekr.com
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link href="/cars/zeekr" className="px-6 py-3 border border-[#6b7a94] text-[#e8edf5] rounded-lg font-medium hover:bg-white/5 transition-colors">
                View All Zeekr Models
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/cars/zeekr/x.png"
              alt="Zeekr X"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Variants Section */}
      <section className="py-16 px-6 md:px-12 bg-[#0d1424]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-8">Available Variants</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {variants.map((variant) => (
              <div
                key={variant.name}
                className={`p-6 rounded-xl border ${
                  variant.highlight
                    ? "border-[#eaaa00] bg-gradient-to-b from-[rgba(234,170,0,0.1)] to-transparent"
                    : "border-[rgba(74,144,217,0.15)] bg-[rgba(15,22,40,0.5)]"
                }`}
              >
                {variant.highlight && (
                  <div className="text-xs tracking-wider text-[#eaaa00] font-semibold mb-2 uppercase">Performance</div>
                )}
                <h3 className="text-xl font-medium mb-4">{variant.name}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#6b7a94]">Price</span>
                    <span className="text-[#eaaa00] font-medium">{variant.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6b7a94]">Range</span>
                    <span>{variant.range}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6b7a94]">0-60 mph</span>
                    <span>{variant.acceleration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6b7a94]">Power</span>
                    <span>{variant.power}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6b7a94]">Drive</span>
                    <span>{variant.drive}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-8">Key Features</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Compact Design", desc: "Agile dimensions perfect for city driving" },
              { title: "SEA Platform", desc: "Built on Geely's advanced architecture" },
              { title: "Fast Charging", desc: "10% to 80% in under 30 minutes" },
              { title: "14.6\" Display", desc: "Large touchscreen with wireless connectivity" },
            ].map((feature) => (
              <div key={feature.title} className="p-5 rounded-xl bg-[rgba(15,22,40,0.5)] border border-[rgba(74,144,217,0.1)]">
                <h3 className="font-medium mb-2 text-[#eaaa00]">{feature.title}</h3>
                <p className="text-sm text-[#6b7a94]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Zeekr */}
      <section className="py-12 px-6 md:px-12 bg-[#0d1424]">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/cars/zeekr" className="inline-flex items-center gap-2 text-[#eaaa00] hover:gap-3 transition-all">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Zeekr Models
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="max-w-7xl mx-auto text-center text-[#6b7a94] text-sm">
          © 2026 Healvanna Auto. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

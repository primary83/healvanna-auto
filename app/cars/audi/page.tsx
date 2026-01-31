"use client";

import Image from "next/image";
import Link from "next/link";

export default function AudiPage() {
  const models = [
    {
      id: "q4-e-tron",
      name: "Audi Q4 e-tron",
      year: "2024",
      price: "From $49,800",
      type: "COMPACT ELECTRIC SUV",
      tag: "EV",
      description: "The accessible luxury electric SUV with quattro confidence and premium Audi craftsmanship.",
      range: "265 mi",
      acceleration: "5.8s",
      power: "295 hp",
      image: "/cars/audi/q4-e-tron.png",
    },
    {
      id: "q8-e-tron",
      name: "Audi Q8 e-tron",
      year: "2024",
      price: "From $74,400",
      type: "LUXURY ELECTRIC SUV",
      tag: "EV",
      description: "The flagship electric SUV combining spacious luxury with impressive range and performance.",
      range: "285 mi",
      acceleration: "5.6s",
      power: "402 hp",
      image: "/cars/audi/q8-e-tron.png",
    },
    {
      id: "e-tron-gt",
      name: "Audi e-tron GT",
      year: "2024",
      price: "From $106,500",
      type: "ELECTRIC GRAND TOURER",
      tag: "EV",
      description: "The stunning electric grand tourer with breathtaking design and exhilarating performance.",
      range: "238 mi",
      acceleration: "3.9s",
      power: "522 hp",
      image: "/cars/audi/e-tron-gt.png",
    },
    {
      id: "rs-e-tron-gt",
      name: "Audi RS e-tron GT",
      year: "2024",
      price: "From $147,000",
      type: "HIGH-PERFORMANCE GT",
      tag: "RS",
      description: "The ultimate electric performance machine with RS DNA and track-ready capabilities.",
      range: "232 mi",
      acceleration: "3.1s",
      power: "637 hp",
      image: "/cars/audi/rs-e-tron-gt.png",
    },
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
                  ? "text-[#e8edf5] border-b border-[#4a90d9]"
                  : "text-[#6b7a94] hover:text-[#e8edf5]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Stats Bar */}
      <section className="pt-24 pb-8 px-6 md:px-12 border-b border-[rgba(74,144,217,0.15)]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-light text-[#4a90d9]">4</div>
              <div className="text-sm text-[#6b7a94]">Models Available</div>
            </div>
            <div>
              <div className="text-4xl font-light text-[#4a90d9]">285 mi</div>
              <div className="text-sm text-[#6b7a94]">Max Range</div>
            </div>
            <div>
              <div className="text-4xl font-light text-[#4a90d9]">3.1s</div>
              <div className="text-sm text-[#6b7a94]">Fastest 0-60</div>
            </div>
            <div>
              <div className="text-4xl font-light text-[#4a90d9]">quattro</div>
              <div className="text-sm text-[#6b7a94]">All-Wheel Drive</div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link + Brand Header */}
      <section className="pt-8 pb-4 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <Link
            href="/cars"
            className="inline-flex items-center text-[#6b7a94] hover:text-[#e8edf5] transition-colors mb-8"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Cars
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-[100px] h-[100px] bg-[#bb0a30] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">AUDI</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-light">Audi</h1>
              <p className="text-[#6b7a94]">Vorsprung durch Technik</p>
            </div>
          </div>

          <p className="text-[#6b7a94] max-w-3xl leading-relaxed">
            Audi is redefining electric luxury with its e-tron lineup. From the accessible Q4 e-tron 
            to the breathtaking RS e-tron GT, every model combines progressive design, cutting-edge 
            technology, and the legendary quattro all-wheel drive system.
          </p>
        </div>
      </section>

      {/* Models Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl font-light mb-8">All Audi Models</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {models.map((model) => (
              <Link key={model.id} href={`/cars/audi/${model.id}`}>
                <div className="bg-gradient-to-b from-[rgba(15,22,40,0.8)] to-[rgba(10,15,26,0.9)] rounded-xl overflow-hidden border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-300 hover:-translate-y-1 group">
                  <div className="relative h-48 bg-gradient-to-br from-[#12182a] to-[#0d1220] flex items-center justify-center p-4">
                    <div className="absolute top-4 left-4 bg-[#bb0a30] text-white text-xs font-bold px-3 py-1 rounded">
                      AUDI
                    </div>
                    <Image
                      src={model.image}
                      alt={model.name}
                      width={280}
                      height={160}
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs text-[#6b7a94] tracking-wider">{model.type}</span>
                      <span className="text-xs bg-[rgba(74,144,217,0.2)] text-[#4a90d9] px-2 py-1 rounded">
                        {model.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-medium mb-1">{model.name}</h3>
                    <p className="text-[#4a90d9] font-medium text-sm mb-3">{model.year} • {model.price}</p>
                    <p className="text-xs text-[#6b7a94] mb-4 line-clamp-2">{model.description}</p>

                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[rgba(74,144,217,0.1)]">
                      <div>
                        <div className="text-sm font-medium text-[#4a90d9]">{model.range}</div>
                        <div className="text-xs text-[#6b7a94]">Range</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#4a90d9]">{model.acceleration}</div>
                        <div className="text-xs text-[#6b7a94]">0-60</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#4a90d9]">{model.power}</div>
                        <div className="text-xs text-[#6b7a94]">Power</div>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <span className="text-[#4a90d9] text-sm font-medium tracking-wider">
                        VIEW DETAILS
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-[#0d1424]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl font-light mb-4">Own an Audi? Protect Your Investment</h2>
          <p className="text-[#6b7a94] mb-8">Our premium ceramic coating and PPF services keep your Audi looking showroom-new for years.</p>
          <div className="flex justify-center gap-4">
            <Link href="/care" className="px-8 py-3 text-[13px] font-medium bg-emerald-500 text-white hover:bg-emerald-400 transition-all duration-300 rounded">
              Explore Care Services
            </Link>
            <Link href="/cars" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">
              View All Brands
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080c14] py-16 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(74,144,217,0.15)]">
            <div className="text-[11px] text-[#3d4a61] mb-4 md:mb-0">
              © 2026 Healvanna. All rights reserved.
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

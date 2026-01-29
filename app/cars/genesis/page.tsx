"use client";

import Link from "next/link";
import Image from "next/image";

export default function GenesisPage() {
  const genesisModels = [
    {
      id: 1,
      name: "GV60",
      category: "Compact Luxury SUV",
      image: "/cars/genesis/gv60.png",
      range: "294 mi",
      acceleration: "4.0s",
      power: "429 hp",
      price: "$54,900",
      description: "Bold compact luxury electric SUV with Crystal Sphere shifter and innovative design.",
      link: "/cars/genesis/gv60"
    },
    {
      id: 2,
      name: "Electrified G80",
      category: "Luxury Sedan",
      image: "/cars/genesis/electrified-g80.png",
      range: "282 mi",
      acceleration: "4.9s",
      power: "365 hp",
      price: "$75,625",
      description: "Elegant luxury electric sedan with refined road manners and premium interior.",
      link: "/cars/genesis/electrified-g80"
    },
    {
      id: 3,
      name: "Electrified GV70",
      category: "Midsize Luxury SUV",
      image: "/cars/genesis/electrified-gv70.png",
      range: "236 mi",
      acceleration: "4.2s",
      power: "429 hp",
      price: "$67,800",
      description: "Athletic luxury electric SUV with powerful dual motors and premium features.",
      link: "/cars/genesis/electrified-gv70"
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="flex gap-10">
          {[
            { name: "HOME", href: "/" },
            { name: "CARS", href: "/cars" },
            { name: "CARE", href: "/care" },
            { name: "CRAFT", href: "/craft" },
            { name: "SHOP", href: "/shop" },
            { name: "BLOG", href: "/blog" },
          ].map((item) => (
            <Link key={item.name} href={item.href} className={`text-[13px] tracking-[0.15em] cursor-pointer transition-colors duration-300 ${item.name === "CARS" ? "text-[#4a90d9] border-b border-[#4a90d9] pb-1" : "text-[#6b7a94] hover:text-[#e8edf5]"}`}>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Stats Bar */}
      <section className="pt-24 bg-[#0a0f1a]">
        <div className="max-w-[1300px] mx-auto px-12">
          <div className="grid grid-cols-4 gap-8 py-8 border-b border-[rgba(74,144,217,0.15)]">
            <div className="p-8">
              <div className="text-3xl font-light text-[#c9a88a]">3</div>
              <div className="text-sm text-[#6b7a94]">Models Available</div>
            </div>
            <div className="p-8">
              <div className="text-3xl font-light text-[#c9a88a]">294 mi</div>
              <div className="text-sm text-[#6b7a94]">Max Range</div>
            </div>
            <div className="p-8">
              <div className="text-3xl font-light text-[#c9a88a]">4.0s</div>
              <div className="text-sm text-[#6b7a94]">Fastest 0-60</div>
            </div>
            <div className="p-8">
              <div className="text-3xl font-light text-[#c9a88a]">800V</div>
              <div className="text-sm text-[#6b7a94]">Ultra-Fast Charging</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Header */}
      <section className="py-12 px-12">
        <div className="max-w-[1300px] mx-auto">
          <Link href="/cars" className="inline-flex items-center gap-2 text-[#6b7a94] text-sm mb-6 hover:text-[#c9a88a] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Cars
          </Link>

          <div className="flex items-center gap-6 mb-6">
            {/* Genesis Logo */}
            <div className="w-20 h-20 bg-[#6b4c3b] rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl italic">G</span>
            </div>
            <div>
              <h1 className="text-4xl font-light tracking-tight">Genesis</h1>
              <p className="text-[#6b7a94]">Athletic Elegance</p>
            </div>
          </div>

          <p className="text-[#8a9bb5] max-w-[800px] leading-relaxed">
            Genesis represents Korean luxury reimagined with electrifying performance. Featuring 
            800V architecture for ultra-fast charging, stunning design, and an industry-leading 
            10-year warranty, Genesis EVs deliver athletic elegance for the modern driver.
          </p>
        </div>
      </section>

      {/* All Genesis Models */}
      <section className="py-12 px-12 bg-[#0d1424]">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">All Genesis Models</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {genesisModels.map((car) => (
              <Link
                key={car.id}
                href={car.link}
                className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-xl overflow-hidden cursor-pointer border border-[rgba(0,40,122,0.15)] hover:border-[rgba(0,40,122,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,40,122,0.2)] group block"
              >
                <div className="relative h-48 bg-gradient-to-br from-[#1a2235] to-[#0f1525]">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-5">
                  <div className="text-[#6b7a94] text-xs tracking-wider uppercase mb-1">{car.category}</div>
                  <h3 className="text-lg font-medium mb-1">{car.name}</h3>
                  <p className="text-[#6b7a94] text-sm mb-4 line-clamp-2">{car.description}</p>
                  
                  <div className="flex justify-between text-sm mb-4">
                    <div>
                      <div className="text-[#c9a88a]">{car.range}</div>
                      <div className="text-[#6b7a94] text-xs">Range</div>
                    </div>
                    <div>
                      <div className="text-[#c9a88a]">{car.acceleration}</div>
                      <div className="text-[#6b7a94] text-xs">0-60</div>
                    </div>
                    <div>
                      <div className="text-[#c9a88a]">{car.power}</div>
                      <div className="text-[#6b7a94] text-xs">Power</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-[rgba(74,144,217,0.1)]">
                    <span className="text-[#c9a88a] font-medium">{car.price}</span>
                    <span className="text-[#6b7a94] text-sm group-hover:text-[#c9a88a] transition-colors">View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080c14] py-16 px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="text-xl font-light tracking-wider cursor-pointer">
                HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
              </Link>
              <p className="text-[#6b7a94] text-sm mt-4 leading-relaxed">
                Premium electric vehicles for the modern driver. Experience the future of sustainable luxury.
              </p>
            </div>
            {[
              { title: "Vehicles", links: [
                { name: "All Cars", href: "/cars" },
                { name: "SUVs", href: "/cars?type=suv" },
                { name: "Sedans", href: "/cars?type=sedan" },
                { name: "Compare", href: "/compare" }
              ]},
              { title: "Services", links: [
                { name: "Care", href: "/care" },
                { name: "Craft", href: "/craft" },
                { name: "Shop", href: "/shop" },
                { name: "Support", href: "/support" }
              ]},
              { title: "Company", links: [
                { name: "About", href: "/about" },
                { name: "For Business", href: "/business" },
                { name: "Contact", href: "/contact" }
              ]},
            ].map((column, index) => (
              <div key={index}>
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">{column.title}</h4>
                {column.links.map((link) => (
                  <Link key={link.name} href={link.href} className="block text-[13px] text-[#6b7a94] mb-2.5 cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">{link.name}</Link>
                ))}
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center pt-8 border-t border-[rgba(74,144,217,0.15)] max-w-[1200px] mx-auto">
            <div className="text-[11px] text-[#3d4a61]">© 2026 Healvanna. All rights reserved.</div>
            <div className="flex gap-6">
              {[
                { name: "Privacy", href: "/privacy" },
                { name: "Terms", href: "/terms" },
                { name: "Cookies", href: "#" }
              ].map((link) => <Link key={link.name} href={link.href} className="text-[11px] text-[#6b7a94] cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">{link.name}</Link>)}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

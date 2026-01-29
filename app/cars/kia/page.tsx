"use client";

import Link from "next/link";
import Image from "next/image";

export default function KiaPage() {
  const kiaModels = [
    {
      id: 1,
      name: "EV6",
      category: "Electric Crossover",
      image: "/cars/kia/ev6.png",
      range: "310 mi",
      acceleration: "5.1s",
      power: "320 hp",
      price: "$44,000",
      description: "Award-winning electric crossover with stunning design and ultra-fast 800V charging.",
      link: "/cars/kia/ev6"
    },
    {
      id: 2,
      name: "EV9",
      category: "Electric Three-Row SUV",
      image: "/cars/kia/ev9.png",
      range: "304 mi",
      acceleration: "5.3s",
      power: "379 hp",
      price: "$56,400",
      description: "Bold three-row electric SUV with futuristic design and spacious interior.",
      link: "/cars/kia/ev9"
    },
    {
      id: 3,
      name: "EV3",
      category: "Compact Electric SUV",
      image: "/cars/kia/ev3.png",
      range: "311 mi",
      acceleration: "7.5s",
      power: "201 hp",
      price: "$35,000",
      description: "Affordable compact electric SUV bringing EV technology to everyone.",
      link: "/cars/kia/ev3"
    },
    {
      id: 4,
      name: "Niro EV",
      category: "Compact Electric Crossover",
      image: "/cars/kia/niro-ev.png",
      range: "253 mi",
      acceleration: "7.2s",
      power: "201 hp",
      price: "$40,900",
      description: "Eco-friendly crossover with practical design and efficient performance.",
      link: "/cars/kia/niro-ev"
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
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs tracking-[0.12em] cursor-pointer transition-colors duration-300 pb-2 ${
                item.name === "CARS"
                  ? "text-[#e8edf5] border-b border-[#4a90d9]"
                  : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Stats Bar - Kia Theme */}
      <section className="pt-28 pb-0">
        <div className="grid grid-cols-4 border-b border-[rgba(5,20,31,0.3)]">
          <div className="p-8 border-r border-[rgba(5,20,31,0.3)]">
            <div className="text-3xl font-light text-[#05141f]">4</div>
            <div className="text-sm text-[#6b7a94]">Models Available</div>
          </div>
          <div className="p-8 border-r border-[rgba(5,20,31,0.3)]">
            <div className="text-3xl font-light text-[#05141f]">311 mi</div>
            <div className="text-sm text-[#6b7a94]">Max Range</div>
          </div>
          <div className="p-8 border-r border-[rgba(5,20,31,0.3)]">
            <div className="text-3xl font-light text-[#05141f]">5.1s</div>
            <div className="text-sm text-[#6b7a94]">Fastest 0-60</div>
          </div>
          <div className="p-8">
            <div className="text-3xl font-light text-[#05141f]">800V</div>
            <div className="text-sm text-[#6b7a94]">Ultra-Fast Charging</div>
          </div>
        </div>
      </section>

      {/* Brand Header */}
      <section className="py-12 px-12">
        <div className="max-w-[1300px] mx-auto">
          <Link href="/cars" className="inline-flex items-center gap-2 text-[#6b7a94] text-sm mb-6 hover:text-[#05141f] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Cars
          </Link>
          
          <div className="flex items-center gap-6 mb-6">
            {/* Kia Logo */}
            <div className="w-20 h-20 bg-[#05141f] rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl tracking-wider">KIA</span>
            </div>
            <div>
              <h1 className="text-4xl font-light tracking-tight">Kia</h1>
              <p className="text-[#6b7a94]">Movement that Inspires</p>
            </div>
          </div>
          
          <p className="text-[#8a9bb5] max-w-[800px] leading-relaxed">
            Kia has transformed into an innovative electric vehicle leader with its award-winning EV lineup. 
            Combining bold design, cutting-edge technology, and exceptional value, Kia EVs offer 
            an exciting driving experience with industry-leading 800V charging capability.
          </p>
        </div>
      </section>

      {/* All Kia Models */}
      <section className="py-12 px-12 bg-[#0d1424]">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">All Kia Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kiaModels.map((car) => (
              <Link 
                key={car.id} 
                href={car.link} 
                className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-xl overflow-hidden cursor-pointer border border-[rgba(5,20,31,0.15)] hover:border-[rgba(5,20,31,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(5,20,31,0.2)] group block"
              >
                <div className="h-48 overflow-hidden relative bg-gradient-to-br from-[#1a1f2e] to-[#0d1220]">
                  <Image 
                    src={car.image} 
                    alt={`Kia ${car.name}`} 
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105" 
                  />
                  {/* Kia Badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-[#05141f] text-white text-[9px] tracking-wider font-semibold rounded">
                    KIA
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] font-medium">{car.category}</div>
                    <span className="text-[9px] tracking-[0.1em] uppercase px-2 py-1 bg-[rgba(5,20,31,0.15)] text-[#4a90d9] rounded-sm font-semibold">EV</span>
                  </div>
                  <div className="text-lg font-medium mb-1">Kia {car.name}</div>
                  <div className="text-xs text-[#6b7a94] mb-3">2024 • From {car.price}</div>
                  <p className="text-xs text-[#6b7a94] mb-4 line-clamp-2">{car.description}</p>
                  <div className="flex justify-between text-[11px] text-[#6b7a94] mb-4 py-3 border-t border-b border-[rgba(5,20,31,0.1)]">
                    <div><span className="text-[#e8edf5] font-medium">{car.range}</span> Range</div>
                    <div><span className="text-[#e8edf5] font-medium">{car.acceleration}</span> 0-60</div>
                    <div><span className="text-[#e8edf5] font-medium">{car.power}</span></div>
                  </div>
                  <span className="w-full py-2.5 text-[10px] tracking-[0.1em] uppercase font-medium border border-[rgba(5,20,31,0.3)] text-[#4a90d9] hover:bg-[rgba(5,20,31,0.1)] transition-all duration-300 rounded block text-center">
                    View Details
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kia Section */}
      <section className="py-16 px-12">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">Why Choose Kia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "800V Ultra-Fast Charging",
                description: "Charge from 10-80% in just 18 minutes with 350kW DC fast charging capability."
              },
              {
                title: "Award-Winning Design",
                description: "World Car of the Year winners with distinctive styling that turns heads everywhere."
              },
              {
                title: "Exceptional Value",
                description: "Premium features and technology at competitive prices with industry-leading warranty."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[rgba(15,22,40,0.5)] rounded-xl p-6 border border-[rgba(5,20,31,0.1)]">
                <h3 className="text-base font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-[#6b7a94]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-12 bg-[#0d1424]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl font-light mb-4">Interested in a Kia?</h2>
          <p className="text-[#6b7a94] mb-8">Protect your investment with our premium Care services - ceramic coating, PPF, and detailing from verified specialists.</p>
          <div className="flex justify-center gap-4">
            <Link href="/care" className="px-8 py-3 text-[13px] font-medium bg-[#05141f] text-white hover:bg-[#0a2540] transition-all duration-300 rounded">
              Explore Care Services
            </Link>
            <Link href="/cars" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(5,20,31,0.3)] text-[#4a90d9] hover:bg-[rgba(5,20,31,0.1)] transition-all duration-300 rounded">
              View All Brands
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] pt-16 pb-8 px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="grid grid-cols-6 gap-10 max-w-[1200px] mx-auto mb-12">
          {[
            { title: "Cars", links: [
              { name: "Tesla", href: "/cars/tesla" },
              { name: "Kia", href: "/cars/kia" },
              { name: "Hyundai", href: "/cars/hyundai" },
              { name: "All Brands", href: "/cars" }
            ]},
            { title: "Care", links: [
              { name: "Detailing", href: "/care" },
              { name: "Ceramic Coating", href: "/care" },
              { name: "PPF", href: "/care" },
              { name: "Interior", href: "/care" }
            ]},
            { title: "Craft", links: [
              { name: "EV Body Shops", href: "/craft" },
              { name: "Luxury Collision", href: "/craft" },
              { name: "Restoration", href: "/craft" }
            ]},
            { title: "Markets", links: [
              { name: "Austin", href: "/care?location=Austin" },
              { name: "Miami", href: "/care?location=Miami" },
              { name: "Los Angeles", href: "/care?location=Los Angeles" },
              { name: "New York", href: "/care?location=New York" }
            ]},
            { title: "Resources", links: [
              { name: "Blog", href: "/blog" },
              { name: "Guides", href: "/blog" }
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
      </footer>
    </main>
  );
}

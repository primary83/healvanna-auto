"use client";

import Link from "next/link";
import Image from "next/image";

export default function LucidPage() {
  const lucidModels = [
    {
      id: 1,
      name: "Air Pure",
      category: "Luxury Electric Sedan",
      image: "/cars/lucid/air-pure.png",
      range: "419 mi",
      acceleration: "4.5s",
      power: "480 hp",
      price: "$69,900",
      description: "The entry point to Lucid luxury. Exceptional range and refined elegance at an accessible price.",
      link: "/cars/lucid/air-pure"
    },
    {
      id: 2,
      name: "Air Touring",
      category: "Performance Luxury Sedan",
      image: "/cars/lucid/air-touring.png",
      range: "425 mi",
      acceleration: "3.4s",
      power: "620 hp",
      price: "$77,900",
      description: "The perfect balance of performance and luxury with dual-motor AWD and extended range.",
      link: "/cars/lucid/air-touring"
    },
    {
      id: 3,
      name: "Air Grand Touring",
      category: "Ultra-Luxury Electric Sedan",
      image: "/cars/lucid/air-grand-touring.png",
      range: "516 mi",
      acceleration: "3.0s",
      power: "819 hp",
      price: "$109,900",
      description: "Industry-leading 516-mile range meets breathtaking performance in the ultimate grand tourer.",
      link: "/cars/lucid/air-grand-touring"
    },
    {
      id: 4,
      name: "Air Sapphire",
      category: "Hyper Performance Sedan",
      image: "/cars/lucid/air-sapphire.png",
      range: "427 mi",
      acceleration: "1.9s",
      power: "1,234 hp",
      price: "$249,000",
      description: "The world's most powerful sedan. Three motors, 1,234 horsepower, and a 1.9-second 0-60.",
      link: "/cars/lucid/air-sapphire"
    },
    {
      id: 5,
      name: "Gravity",
      category: "Luxury Electric SUV",
      image: "/cars/lucid/gravity.png",
      range: "440 mi",
      acceleration: "3.5s",
      power: "620 hp",
      price: "$79,900",
      description: "Lucid's first SUV brings Air's groundbreaking technology to a spacious 7-seat package.",
      link: "/cars/lucid/gravity"
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

      {/* Hero Stats Bar - Lucid Blue-Gray Theme */}
      <section className="pt-28 pb-0">
        <div className="grid grid-cols-4 border-b border-[rgba(68,102,136,0.2)]">
          <div className="p-8 border-r border-[rgba(68,102,136,0.2)]">
            <div className="text-3xl font-light text-[#446688]">5</div>
            <div className="text-sm text-[#6b7a94]">Models Available</div>
          </div>
          <div className="p-8 border-r border-[rgba(68,102,136,0.2)]">
            <div className="text-3xl font-light text-[#446688]">516 mi</div>
            <div className="text-sm text-[#6b7a94]">Max Range</div>
          </div>
          <div className="p-8 border-r border-[rgba(68,102,136,0.2)]">
            <div className="text-3xl font-light text-[#446688]">1.9s</div>
            <div className="text-sm text-[#6b7a94]">Fastest 0-60</div>
          </div>
          <div className="p-8">
            <div className="text-3xl font-light text-[#446688]">1,234 hp</div>
            <div className="text-sm text-[#6b7a94]">Max Power</div>
          </div>
        </div>
      </section>

      {/* Brand Header */}
      <section className="py-12 px-12">
        <div className="max-w-[1300px] mx-auto">
          <Link href="/cars" className="inline-flex items-center gap-2 text-[#6b7a94] text-sm mb-6 hover:text-[#446688] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Cars
          </Link>
          
          <div className="flex items-center gap-6 mb-6">
            {/* Lucid Logo */}
            <div className="w-20 h-20 bg-[#446688] rounded-2xl flex items-center justify-center p-3">
              <span className="text-white font-light text-xl tracking-wider">LUCID</span>
            </div>
            <div>
              <h1 className="text-4xl font-light tracking-tight">Lucid Motors</h1>
              <p className="text-[#6b7a94]">Luxury Redefined</p>
            </div>
          </div>
          
          <p className="text-[#8a9bb5] max-w-[800px] leading-relaxed">
            Founded by former Tesla executives, Lucid Motors represents the pinnacle of electric vehicle engineering. 
            With industry-leading range, stunning design, and the most powerful sedan ever built, Lucid is 
            redefining what a luxury EV can be.
          </p>
        </div>
      </section>

      {/* All Lucid Models */}
      <section className="py-12 px-12 bg-[#0d1424]">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">All Lucid Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lucidModels.map((car) => (
              <Link 
                key={car.id} 
                href={car.link} 
                className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-xl overflow-hidden cursor-pointer border border-[rgba(68,102,136,0.15)] hover:border-[rgba(68,102,136,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(68,102,136,0.2)] group block"
              >
                <div className="h-48 overflow-hidden relative bg-gradient-to-br from-[#1a1f2e] to-[#0d1220]">
                  <Image 
                    src={car.image} 
                    alt={`Lucid ${car.name}`} 
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105" 
                  />
                  {/* Lucid Badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-[#446688] text-white text-[9px] tracking-wider font-semibold rounded">
                    LUCID
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#446688] font-medium">{car.category}</div>
                    <span className="text-[9px] tracking-[0.1em] uppercase px-2 py-1 bg-[rgba(68,102,136,0.15)] text-[#446688] rounded-sm font-semibold">EV</span>
                  </div>
                  <div className="text-lg font-medium mb-1">Lucid {car.name}</div>
                  <div className="text-xs text-[#6b7a94] mb-3">2024 • From {car.price}</div>
                  <p className="text-xs text-[#6b7a94] mb-4 line-clamp-2">{car.description}</p>
                  <div className="flex justify-between text-[11px] text-[#6b7a94] mb-4 py-3 border-t border-b border-[rgba(68,102,136,0.1)]">
                    <div><span className="text-[#e8edf5] font-medium">{car.range}</span> Range</div>
                    <div><span className="text-[#e8edf5] font-medium">{car.acceleration}</span> 0-60</div>
                    <div><span className="text-[#e8edf5] font-medium">{car.power}</span></div>
                  </div>
                  <span className="w-full py-2.5 text-[10px] tracking-[0.1em] uppercase font-medium border border-[rgba(68,102,136,0.3)] text-[#446688] hover:bg-[rgba(68,102,136,0.1)] transition-all duration-300 rounded block text-center">
                    View Details
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lucid Section */}
      <section className="py-16 px-12">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">Why Choose Lucid?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Industry-Leading Range",
                description: "Up to 516 miles on a single charge - the longest range of any electric vehicle on the market."
              },
              {
                title: "Space-Age Technology",
                description: "900V+ architecture enables ultra-fast charging - gain up to 200 miles in just 15 minutes."
              },
              {
                title: "California Craftsmanship",
                description: "Designed and built in America with meticulous attention to detail and sustainable luxury materials."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[rgba(15,22,40,0.5)] rounded-xl p-6 border border-[rgba(68,102,136,0.1)]">
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
          <h2 className="text-2xl font-light mb-4">Interested in a Lucid?</h2>
          <p className="text-[#6b7a94] mb-8">Protect your investment with our premium Care services - ceramic coating, PPF, and detailing from verified specialists.</p>
          <div className="flex justify-center gap-4">
            <Link href="/care" className="px-8 py-3 text-[13px] font-medium bg-[#446688] text-white hover:bg-[#557799] transition-all duration-300 rounded">
              Explore Care Services
            </Link>
            <Link href="/cars" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(68,102,136,0.3)] text-[#446688] hover:bg-[rgba(68,102,136,0.1)] transition-all duration-300 rounded">
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
              { name: "Lucid", href: "/cars/lucid" },
              { name: "BYD", href: "/cars/byd" },
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

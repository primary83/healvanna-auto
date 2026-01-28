"use client";

import Link from "next/link";
import Image from "next/image";

export default function BYDPage() {
  // BYD Models with accurate specs
  const bydModels = [
    {
      id: 1,
      name: "Seal",
      category: "Electric Sedan",
      image: "/cars/byd/seal.png",
      range: "391 mi",
      acceleration: "3.8s",
      power: "530 hp",
      price: "$44,900",
      description: "BYD's flagship performance sedan with cutting-edge Blade Battery technology and stunning design.",
      link: "/cars/byd/seal"
    },
    {
      id: 2,
      name: "Han",
      category: "Luxury Electric Sedan",
      image: "/cars/byd/han.png",
      range: "375 mi",
      acceleration: "3.9s",
      power: "517 hp",
      price: "$46,900",
      description: "Premium luxury sedan combining elegant design with advanced EV technology.",
      link: "/cars/byd/han"
    },
    {
      id: 3,
      name: "Atto 3",
      category: "Compact Electric SUV",
      image: "/cars/byd/atto-3.png",
      range: "261 mi",
      acceleration: "7.3s",
      power: "201 hp",
      price: "$38,000",
      description: "Versatile compact SUV perfect for urban adventures with impressive range.",
      link: "/cars/byd/atto-3"
    },
    {
      id: 4,
      name: "Tang",
      category: "Full-Size Electric SUV",
      image: "/cars/byd/tang.png",
      range: "313 mi",
      acceleration: "4.6s",
      power: "517 hp",
      price: "$65,000",
      description: "Flagship 7-seater SUV with premium features and powerful dual-motor AWD.",
      link: "/cars/byd/tang"
    },
    {
      id: 5,
      name: "Dolphin",
      category: "Compact Electric Hatchback",
      image: "/cars/byd/dolphin.png",
      range: "265 mi",
      acceleration: "7.0s",
      power: "201 hp",
      price: "$31,900",
      description: "Affordable and fun compact EV with playful design and solid range.",
      link: "/cars/byd/dolphin"
    },
    {
      id: 6,
      name: "Seal U",
      category: "Mid-Size Electric SUV",
      image: "/cars/byd/seal-u.png",
      range: "323 mi",
      acceleration: "5.9s",
      power: "308 hp",
      price: "$42,000",
      description: "Spacious family SUV with excellent efficiency and modern styling.",
      link: "/cars/byd/seal-u"
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

      {/* Hero Stats Bar - BYD Red Theme */}
      <section className="pt-28 pb-0">
        <div className="grid grid-cols-4 border-b border-[rgba(199,33,38,0.2)]">
          <div className="p-8 border-r border-[rgba(199,33,38,0.2)]">
            <div className="text-3xl font-light text-[#c72126]">6</div>
            <div className="text-sm text-[#6b7a94]">Models Available</div>
          </div>
          <div className="p-8 border-r border-[rgba(199,33,38,0.2)]">
            <div className="text-3xl font-light text-[#c72126]">391 mi</div>
            <div className="text-sm text-[#6b7a94]">Max Range</div>
          </div>
          <div className="p-8 border-r border-[rgba(199,33,38,0.2)]">
            <div className="text-3xl font-light text-[#c72126]">3.8s</div>
            <div className="text-sm text-[#6b7a94]">Fastest 0-60</div>
          </div>
          <div className="p-8">
            <div className="text-3xl font-light text-[#c72126]">#1</div>
            <div className="text-sm text-[#6b7a94]">Global EV Sales</div>
          </div>
        </div>
      </section>

      {/* Brand Header */}
      <section className="py-12 px-12">
        <div className="max-w-[1300px] mx-auto">
          <Link href="/cars" className="inline-flex items-center gap-2 text-[#6b7a94] text-sm mb-6 hover:text-[#c72126] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Cars
          </Link>
          
          <div className="flex items-center gap-6 mb-6">
            {/* BYD Logo */}
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
              <svg viewBox="0 0 100 60" className="w-full h-auto">
                <ellipse cx="50" cy="30" rx="48" ry="28" fill="#c72126" stroke="#1a1a1a" strokeWidth="2"/>
                <text x="50" y="38" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif">BYD</text>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-light tracking-tight">BYD</h1>
              <p className="text-[#6b7a94]">Build Your Dreams</p>
            </div>
          </div>
          
          <p className="text-[#8a9bb5] max-w-[800px] leading-relaxed">
            The world's largest electric vehicle manufacturer. BYD combines innovative Blade Battery technology 
            with sophisticated design, offering everything from affordable hatchbacks to premium luxury sedans. 
            Known for exceptional safety, impressive range, and cutting-edge features.
          </p>
        </div>
      </section>

      {/* All BYD Models */}
      <section className="py-12 px-12 bg-[#0d1424]">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">All BYD Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bydModels.map((car) => (
              <Link 
                key={car.id} 
                href={car.link} 
                className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-xl overflow-hidden cursor-pointer border border-[rgba(199,33,38,0.15)] hover:border-[rgba(199,33,38,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(199,33,38,0.2)] group block"
              >
                <div className="h-48 overflow-hidden relative bg-gradient-to-br from-[#1a1f2e] to-[#0d1220]">
                  <Image 
                    src={car.image} 
                    alt={`BYD ${car.name}`} 
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105" 
                  />
                  {/* BYD Badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-[#c72126] text-white text-[9px] tracking-wider font-semibold rounded">
                    BYD
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#c72126] font-medium">{car.category}</div>
                    <span className="text-[9px] tracking-[0.1em] uppercase px-2 py-1 bg-[rgba(199,33,38,0.15)] text-[#c72126] rounded-sm font-semibold">EV</span>
                  </div>
                  <div className="text-lg font-medium mb-1">BYD {car.name}</div>
                  <div className="text-xs text-[#6b7a94] mb-3">2024 • From {car.price}</div>
                  <p className="text-xs text-[#6b7a94] mb-4 line-clamp-2">{car.description}</p>
                  <div className="flex justify-between text-[11px] text-[#6b7a94] mb-4 py-3 border-t border-b border-[rgba(199,33,38,0.1)]">
                    <div><span className="text-[#e8edf5] font-medium">{car.range}</span> Range</div>
                    <div><span className="text-[#e8edf5] font-medium">{car.acceleration}</span> 0-60</div>
                    <div><span className="text-[#e8edf5] font-medium">{car.power}</span></div>
                  </div>
                  <span className="w-full py-2.5 text-[10px] tracking-[0.1em] uppercase font-medium border border-[rgba(199,33,38,0.3)] text-[#c72126] hover:bg-[rgba(199,33,38,0.1)] transition-all duration-300 rounded block text-center">
                    View Details
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why BYD Section */}
      <section className="py-16 px-12">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">Why Choose BYD?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Blade Battery Technology",
                description: "Revolutionary LFP battery design offers exceptional safety, passing nail penetration tests without fire or explosion."
              },
              {
                title: "Vertically Integrated",
                description: "BYD manufactures everything from batteries to chips, ensuring quality control and competitive pricing."
              },
              {
                title: "Global #1 in EV Sales",
                description: "Surpassing Tesla in 2024, BYD delivers more electric vehicles than any other manufacturer worldwide."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[rgba(15,22,40,0.5)] rounded-xl p-6 border border-[rgba(199,33,38,0.1)]">
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
          <h2 className="text-2xl font-light mb-4">Interested in a BYD?</h2>
          <p className="text-[#6b7a94] mb-8">Protect your investment with our premium Care services - ceramic coating, PPF, and detailing from verified specialists.</p>
          <div className="flex justify-center gap-4">
            <Link href="/care" className="px-8 py-3 text-[13px] font-medium bg-[#c72126] text-white hover:bg-[#a51c20] transition-all duration-300 rounded">
              Explore Care Services
            </Link>
            <Link href="/cars" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(199,33,38,0.3)] text-[#c72126] hover:bg-[rgba(199,33,38,0.1)] transition-all duration-300 rounded">
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
              { name: "BYD", href: "/cars/byd" },
              { name: "All Brands", href: "/cars" },
              { name: "SUVs", href: "/cars/suvs" }
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

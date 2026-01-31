"use client";

import Link from "next/link";
import Image from "next/image";

export default function GenesisPage() {
  const genesisModels = [
    {
      id: 1,
      name: "GV60",
      category: "Electric Crossover",
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
      category: "Electric Luxury Sedan",
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
      category: "Electric Luxury SUV",
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

      {/* Hero Stats Bar - Genesis Theme */}
      <section className="pt-28 pb-0">
        <div className="grid grid-cols-4 border-b border-[rgba(5,20,31,0.3)]">
          <div className="p-8 border-r border-[rgba(5,20,31,0.3)]">
            <div className="text-3xl font-light text-[#05141f]">3</div>
            <div className="text-sm text-[#6b7a94]">Models Available</div>
          </div>
          <div className="p-8 border-r border-[rgba(5,20,31,0.3)]">
            <div className="text-3xl font-light text-[#05141f]">294 mi</div>
            <div className="text-sm text-[#6b7a94]">Max Range</div>
          </div>
          <div className="p-8 border-r border-[rgba(5,20,31,0.3)]">
            <div className="text-3xl font-light text-[#05141f]">4.0s</div>
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
            {/* Genesis Logo */}
            <div className="w-20 h-20 bg-[#05141f] rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl tracking-wider">GEN</span>
            </div>
            <div>
              <h1 className="text-4xl font-light tracking-tight">Genesis</h1>
              <p className="text-[#6b7a94]">Athletic Elegance</p>
            </div>
          </div>

          <p className="text-[#8a9bb5] max-w-[800px] leading-relaxed">
            Genesis represents Korean luxury reimagined with electrifying performance.
            Combining bold design, cutting-edge technology, and exceptional value, Genesis EVs offer
            an exciting driving experience with industry-leading 800V charging capability.
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
                className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-xl overflow-hidden cursor-pointer border border-[rgba(5,20,31,0.15)] hover:border-[rgba(5,20,31,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(5,20,31,0.2)] group block"
              >
                <div className="h-48 overflow-hidden relative bg-gradient-to-br from-[#1a1f2e] to-[#0d1220]">
                  <Image
                    src={car.image}
                    alt={`Genesis ${car.name}`}
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                  {/* Genesis Badge */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-[#05141f] text-white text-[9px] tracking-wider font-semibold rounded">
                    GENESIS
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#4a90d9] font-medium">{car.category}</div>
                    <span className="text-[9px] tracking-[0.1em] uppercase px-2 py-1 bg-[rgba(5,20,31,0.15)] text-[#4a90d9] rounded-sm font-semibold">EV</span>
                  </div>
                  <div className="text-lg font-medium mb-1">Genesis {car.name}</div>
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

      {/* Why Genesis Section */}
      <section className="py-16 px-12">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">Why Choose Genesis?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "800V Ultra-Fast Charging",
                description: "Charge from 10-80% in just 18 minutes with 350kW DC fast charging capability."
              },
              {
                title: "Award-Winning Design",
                description: "Athletic elegance with distinctive styling that turns heads everywhere."
              },
              {
                title: "10-Year Warranty",
                description: "Industry-leading warranty coverage with complimentary scheduled maintenance."
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
          <h2 className="text-2xl font-light mb-4">Own a Genesis? Protect Your Investment</h2>
          <p className="text-[#6b7a94] mb-8">Our premium ceramic coating and PPF services keep your Genesis looking showroom-new for years.</p>
          <div className="flex justify-center gap-4">
            <Link href="/care" className="px-8 py-3 text-[13px] font-medium bg-emerald-500 text-white hover:bg-emerald-400 transition-all duration-300 rounded">
              Explore Care Services
            </Link>
            <Link href="/cars" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(5,20,31,0.3)] text-[#4a90d9] hover:bg-[rgba(5,20,31,0.1)] transition-all duration-300 rounded">
              View All Brands
            </Link>
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

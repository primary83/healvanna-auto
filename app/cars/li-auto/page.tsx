"use client";

import Link from "next/link";
import Image from "next/image";

export default function LiAutoPage() {
  const liAutoModels = [
    {
      id: 1,
      name: "MEGA",
      category: "Premium Electric MPV",
      image: "/cars/li-auto/mega.png",
      range: "440 mi",
      acceleration: "5.5s",
      power: "400 hp",
      price: "$68,000",
      description: "Revolutionary premium electric MPV with industry-leading 5C battery and ultra-fast charging.",
      link: "/cars/li-auto/mega"
    },
    {
      id: 2,
      name: "L9",
      category: "Full-Size Luxury SUV",
      image: "/cars/li-auto/l9.png",
      range: "130 mi EV + 620 mi EREV",
      acceleration: "5.3s",
      power: "449 hp",
      price: "$69,000",
      description: "Flagship 6-seat luxury SUV with extended range technology and premium family features.",
      link: "/cars/li-auto/l9"
    },
    {
      id: 3,
      name: "L8",
      category: "Mid-Large Luxury SUV",
      image: "/cars/li-auto/l8.png",
      range: "120 mi EV + 620 mi EREV",
      acceleration: "5.5s",
      power: "449 hp",
      price: "$56,000",
      description: "Versatile 6-seat luxury SUV balancing space, comfort, and extended range capability.",
      link: "/cars/li-auto/l8"
    },
    {
      id: 4,
      name: "L7",
      category: "Mid-Large Luxury SUV",
      image: "/cars/li-auto/l7.png",
      range: "120 mi EV + 620 mi EREV",
      acceleration: "5.3s",
      power: "449 hp",
      price: "$52,000",
      description: "5-seat luxury SUV with executive rear seating and advanced smart features.",
      link: "/cars/li-auto/l7"
    },
    {
      id: 5,
      name: "L6",
      category: "Compact Luxury SUV",
      image: "/cars/li-auto/l6.png",
      range: "110 mi EV + 590 mi EREV",
      acceleration: "5.4s",
      power: "396 hp",
      price: "$42,000",
      description: "Entry-level luxury SUV bringing Li Auto technology to a more accessible price point.",
      link: "/cars/li-auto/l6"
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

      {/* Hero Stats Bar - Li Auto Orange Theme */}
      <section className="pt-28 pb-0">
        <div className="grid grid-cols-4 border-b border-[rgba(249,115,22,0.2)]">
          <div className="p-8 border-r border-[rgba(249,115,22,0.2)]">
            <div className="text-3xl font-light text-[#f97316]">5</div>
            <div className="text-sm text-[#6b7a94]">Models Available</div>
          </div>
          <div className="p-8 border-r border-[rgba(249,115,22,0.2)]">
            <div className="text-3xl font-light text-[#f97316]">750 mi</div>
            <div className="text-sm text-[#6b7a94]">Max Total Range</div>
          </div>
          <div className="p-8 border-r border-[rgba(249,115,22,0.2)]">
            <div className="text-3xl font-light text-[#f97316]">5.3s</div>
            <div className="text-sm text-[#6b7a94]">Fastest 0-60</div>
          </div>
          <div className="p-8">
            <div className="text-3xl font-light text-[#f97316]">5C</div>
            <div className="text-sm text-[#6b7a94]">Fast Charging</div>
          </div>
        </div>
      </section>

      {/* Brand Header */}
      <section className="py-12 px-12">
        <div className="max-w-[1300px] mx-auto">
          <Link href="/cars" className="inline-flex items-center gap-2 text-[#6b7a94] text-sm mb-6 hover:text-[#f97316] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Cars
          </Link>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
              <svg viewBox="0 0 100 60" className="w-full h-auto">
                <text x="50" y="35" textAnchor="middle" fill="#f97316" fontSize="18" fontWeight="bold" fontFamily="Arial, sans-serif">Li Auto</text>
                <text x="50" y="50" textAnchor="middle" fill="#666" fontSize="10" fontFamily="Arial, sans-serif">理想汽车</text>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-light tracking-tight">Li Auto</h1>
              <p className="text-[#6b7a94]">Create a Mobile Home</p>
            </div>
          </div>
          
          <p className="text-[#8a9bb5] max-w-[800px] leading-relaxed">
            A leading Chinese new energy vehicle manufacturer specializing in extended-range electric vehicles (EREV). 
            Li Auto focuses on family-oriented luxury SUVs that eliminate range anxiety while delivering premium comfort and smart technology.
          </p>
        </div>
      </section>

      {/* All Li Auto Models */}
      <section className="py-12 px-12 bg-[#0d1424]">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">All Li Auto Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liAutoModels.map((car) => (
              <Link 
                key={car.id} 
                href={car.link} 
                className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-xl overflow-hidden cursor-pointer border border-[rgba(249,115,22,0.15)] hover:border-[rgba(249,115,22,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(249,115,22,0.2)] group block"
              >
                <div className="h-48 overflow-hidden relative bg-gradient-to-br from-[#1a1f2e] to-[#0d1220]">
                  <Image 
                    src={car.image} 
                    alt={`Li Auto ${car.name}`} 
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105" 
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-[#f97316] text-white text-[9px] tracking-wider font-semibold rounded">
                    LI AUTO
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#f97316] font-medium">{car.category}</div>
                    <span className="text-[9px] tracking-[0.1em] uppercase px-2 py-1 bg-[rgba(249,115,22,0.15)] text-[#f97316] rounded-sm font-semibold">EREV</span>
                  </div>
                  <div className="text-lg font-medium mb-1">Li Auto {car.name}</div>
                  <div className="text-xs text-[#6b7a94] mb-3">2024 • From {car.price}</div>
                  <p className="text-xs text-[#6b7a94] mb-4 line-clamp-2">{car.description}</p>
                  <div className="flex justify-between text-[11px] text-[#6b7a94] mb-4 py-3 border-t border-b border-[rgba(249,115,22,0.1)]">
                    <div><span className="text-[#e8edf5] font-medium">{car.range.split(' ')[0]}</span> Range</div>
                    <div><span className="text-[#e8edf5] font-medium">{car.acceleration}</span> 0-60</div>
                    <div><span className="text-[#e8edf5] font-medium">{car.power}</span></div>
                  </div>
                  <span className="w-full py-2.5 text-[10px] tracking-[0.1em] uppercase font-medium border border-[rgba(249,115,22,0.3)] text-[#f97316] hover:bg-[rgba(249,115,22,0.1)] transition-all duration-300 rounded block text-center">
                    View Details
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Li Auto Section */}
      <section className="py-16 px-12">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">Why Choose Li Auto?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "No Range Anxiety",
                description: "Extended-range electric technology combines EV efficiency with the convenience of a gas generator backup."
              },
              {
                title: "Family-First Design",
                description: "Spacious interiors with premium materials, advanced entertainment, and comfort features for the whole family."
              },
              {
                title: "Smart Features",
                description: "Advanced driver assistance, voice control, and OTA updates keep your vehicle always up to date."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[rgba(15,22,40,0.5)] rounded-xl p-6 border border-[rgba(249,115,22,0.1)]">
                <h3 className="text-base font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-[#6b7a94]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] py-12 px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="max-w-7xl mx-auto text-center text-[#6b7a94] text-sm">
          © 2026 Healvanna Auto. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

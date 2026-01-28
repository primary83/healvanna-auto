"use client";

import Link from "next/link";
import Image from "next/image";

export default function NIOPage() {
  const nioModels = [
    {
      id: 1,
      name: "ET7",
      category: "Flagship Electric Sedan",
      image: "/cars/nio/et7.png",
      range: "360 mi",
      acceleration: "3.8s",
      power: "644 hp",
      price: "$69,000",
      description: "NIO's flagship sedan with cutting-edge technology and luxurious appointments.",
      link: "/cars/nio/et7"
    },
    {
      id: 2,
      name: "ET5",
      category: "Mid-Size Electric Sedan",
      image: "/cars/nio/et5.png",
      range: "340 mi",
      acceleration: "4.3s",
      power: "483 hp",
      price: "$52,000",
      description: "Sporty mid-size sedan combining performance with everyday practicality.",
      link: "/cars/nio/et5"
    },
    {
      id: 3,
      name: "ES8",
      category: "Full-Size Electric SUV",
      image: "/cars/nio/es8.png",
      range: "310 mi",
      acceleration: "4.1s",
      power: "536 hp",
      price: "$75,000",
      description: "Premium 6/7-seater SUV with flagship features and commanding presence.",
      link: "/cars/nio/es8"
    },
    {
      id: 4,
      name: "ES6",
      category: "Mid-Size Electric SUV",
      image: "/cars/nio/es6.png",
      range: "340 mi",
      acceleration: "4.5s",
      power: "536 hp",
      price: "$58,000",
      description: "Versatile mid-size SUV balancing performance, space, and efficiency.",
      link: "/cars/nio/es6"
    },
    {
      id: 5,
      name: "EC7",
      category: "Electric Coupe SUV",
      image: "/cars/nio/ec7.png",
      range: "355 mi",
      acceleration: "3.8s",
      power: "644 hp",
      price: "$72,000",
      description: "Sleek coupe SUV with dramatic styling and flagship performance.",
      link: "/cars/nio/ec7"
    },
    {
      id: 6,
      name: "EC6",
      category: "Compact Coupe SUV",
      image: "/cars/nio/ec6.png",
      range: "340 mi",
      acceleration: "4.5s",
      power: "536 hp",
      price: "$62,000",
      description: "Sporty coupe SUV combining style with practicality.",
      link: "/cars/nio/ec6"
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

      {/* Hero Stats Bar - NIO Blue Theme */}
      <section className="pt-28 pb-0">
        <div className="grid grid-cols-4 border-b border-[rgba(0,191,255,0.2)]">
          <div className="p-8 border-r border-[rgba(0,191,255,0.2)]">
            <div className="text-3xl font-light text-[#00bfff]">6</div>
            <div className="text-sm text-[#6b7a94]">Models Available</div>
          </div>
          <div className="p-8 border-r border-[rgba(0,191,255,0.2)]">
            <div className="text-3xl font-light text-[#00bfff]">360 mi</div>
            <div className="text-sm text-[#6b7a94]">Max Range</div>
          </div>
          <div className="p-8 border-r border-[rgba(0,191,255,0.2)]">
            <div className="text-3xl font-light text-[#00bfff]">3.8s</div>
            <div className="text-sm text-[#6b7a94]">Fastest 0-60</div>
          </div>
          <div className="p-8">
            <div className="text-3xl font-light text-[#00bfff]">3 min</div>
            <div className="text-sm text-[#6b7a94]">Battery Swap</div>
          </div>
        </div>
      </section>

      {/* Brand Header */}
      <section className="py-12 px-12">
        <div className="max-w-[1300px] mx-auto">
          <Link href="/cars" className="inline-flex items-center gap-2 text-[#6b7a94] text-sm mb-6 hover:text-[#00bfff] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Cars
          </Link>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
              <svg viewBox="0 0 100 60" className="w-full h-auto">
                <text x="50" y="40" textAnchor="middle" fill="#00bfff" fontSize="28" fontWeight="bold" fontFamily="Arial, sans-serif">NIO</text>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-light tracking-tight">NIO</h1>
              <p className="text-[#6b7a94]">Blue Sky Coming</p>
            </div>
          </div>
          
          <p className="text-[#8a9bb5] max-w-[800px] leading-relaxed">
            A premium Chinese electric vehicle manufacturer known for innovative battery swap technology, 
            luxurious interiors, and cutting-edge autonomous driving features. NIO combines performance 
            with practicality through their unique Battery-as-a-Service model.
          </p>
        </div>
      </section>

      {/* All NIO Models */}
      <section className="py-12 px-12 bg-[#0d1424]">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">All NIO Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nioModels.map((car) => (
              <Link 
                key={car.id} 
                href={car.link} 
                className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-xl overflow-hidden cursor-pointer border border-[rgba(0,191,255,0.15)] hover:border-[rgba(0,191,255,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,191,255,0.2)] group block"
              >
                <div className="h-48 overflow-hidden relative bg-gradient-to-br from-[#1a1f2e] to-[#0d1220]">
                  <Image 
                    src={car.image} 
                    alt={`NIO ${car.name}`} 
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105" 
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-[#00bfff] text-white text-[9px] tracking-wider font-semibold rounded">
                    NIO
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#00bfff] font-medium">{car.category}</div>
                    <span className="text-[9px] tracking-[0.1em] uppercase px-2 py-1 bg-[rgba(0,191,255,0.15)] text-[#00bfff] rounded-sm font-semibold">EV</span>
                  </div>
                  <div className="text-lg font-medium mb-1">NIO {car.name}</div>
                  <div className="text-xs text-[#6b7a94] mb-3">2024 • From {car.price}</div>
                  <p className="text-xs text-[#6b7a94] mb-4 line-clamp-2">{car.description}</p>
                  <div className="flex justify-between text-[11px] text-[#6b7a94] mb-4 py-3 border-t border-b border-[rgba(0,191,255,0.1)]">
                    <div><span className="text-[#e8edf5] font-medium">{car.range}</span> Range</div>
                    <div><span className="text-[#e8edf5] font-medium">{car.acceleration}</span> 0-60</div>
                    <div><span className="text-[#e8edf5] font-medium">{car.power}</span></div>
                  </div>
                  <span className="w-full py-2.5 text-[10px] tracking-[0.1em] uppercase font-medium border border-[rgba(0,191,255,0.3)] text-[#00bfff] hover:bg-[rgba(0,191,255,0.1)] transition-all duration-300 rounded block text-center">
                    View Details
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why NIO Section */}
      <section className="py-16 px-12">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">Why Choose NIO?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Battery Swap Technology",
                description: "Swap your battery in just 3 minutes at any NIO Power Swap station - faster than refueling."
              },
              {
                title: "NOMI AI Assistant",
                description: "The world's first in-car AI companion with emotional intelligence and personality."
              },
              {
                title: "NIO House Experience",
                description: "Premium lifestyle spaces for NIO owners to work, relax, and connect with the community."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[rgba(15,22,40,0.5)] rounded-xl p-6 border border-[rgba(0,191,255,0.1)]">
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

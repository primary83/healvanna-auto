"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";

export default function XPengPage() {
  const xpengModels = [
    {
      id: 1,
      name: "G9",
      category: "Flagship Electric SUV",
      image: "/cars/xpeng/g9.png",
      range: "350 mi",
      acceleration: "3.9s",
      power: "543 hp",
      price: "$52,000",
      description: "XPeng's flagship SUV with industry-leading charging speeds and advanced autonomous driving.",
      link: "/cars/xpeng/g9"
    },
    {
      id: 2,
      name: "P7",
      category: "Electric Sports Sedan",
      image: "/cars/xpeng/p7.png",
      range: "440 mi",
      acceleration: "4.3s",
      power: "430 hp",
      price: "$42,000",
      description: "Sleek sports sedan with exceptional range and cutting-edge technology.",
      link: "/cars/xpeng/p7"
    },
    {
      id: 3,
      name: "G6",
      category: "Compact Electric SUV",
      image: "/cars/xpeng/g6.png",
      range: "360 mi",
      acceleration: "3.9s",
      power: "476 hp",
      price: "$38,000",
      description: "Compact SUV with flagship technology at an accessible price point.",
      link: "/cars/xpeng/g6"
    },
    {
      id: 4,
      name: "X9",
      category: "Electric MPV",
      image: "/cars/xpeng/x9.png",
      range: "370 mi",
      acceleration: "5.7s",
      power: "370 hp",
      price: "$58,000",
      description: "Premium electric MPV with revolutionary rear-wheel steering and spacious interior.",
      link: "/cars/xpeng/x9"
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation />

      {/* Hero Stats Bar - XPeng Green Theme */}
      <section className="pt-28 pb-0">
        <div className="grid grid-cols-4 border-b border-[rgba(16,185,129,0.2)]">
          <div className="p-8 border-r border-[rgba(16,185,129,0.2)]">
            <div className="text-3xl font-light text-[#10b981]">4</div>
            <div className="text-sm text-[#6b7a94]">Models Available</div>
          </div>
          <div className="p-8 border-r border-[rgba(16,185,129,0.2)]">
            <div className="text-3xl font-light text-[#10b981]">440 mi</div>
            <div className="text-sm text-[#6b7a94]">Max Range</div>
          </div>
          <div className="p-8 border-r border-[rgba(16,185,129,0.2)]">
            <div className="text-3xl font-light text-[#10b981]">3.9s</div>
            <div className="text-sm text-[#6b7a94]">Fastest 0-60</div>
          </div>
          <div className="p-8">
            <div className="text-3xl font-light text-[#10b981]">480 kW</div>
            <div className="text-sm text-[#6b7a94]">Max Charging</div>
          </div>
        </div>
      </section>

      {/* Brand Header */}
      <section className="py-12 px-12">
        <div className="max-w-[1300px] mx-auto">
          <Link href="/cars" className="inline-flex items-center gap-2 text-[#6b7a94] text-sm mb-6 hover:text-[#10b981] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Cars
          </Link>
          
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
              <svg viewBox="0 0 100 60" className="w-full h-auto">
                <text x="50" y="42" textAnchor="middle" fill="#10b981" fontSize="22" fontWeight="bold" fontFamily="Arial, sans-serif">XPENG</text>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-light tracking-tight">XPeng</h1>
              <p className="text-[#6b7a94]">Explore Excellence</p>
            </div>
          </div>
          
          <p className="text-[#8a9bb5] max-w-[800px] leading-relaxed">
            A leading Chinese smart electric vehicle company known for industry-leading autonomous driving technology, 
            ultra-fast charging capabilities, and innovative design. XPeng is pushing the boundaries of what EVs can do.
          </p>
        </div>
      </section>

      {/* All XPeng Models */}
      <section className="py-12 px-12 bg-[#0d1424]">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">All XPeng Models</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {xpengModels.map((car) => (
              <Link 
                key={car.id} 
                href={car.link} 
                className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-xl overflow-hidden cursor-pointer border border-[rgba(16,185,129,0.15)] hover:border-[rgba(16,185,129,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(16,185,129,0.2)] group block"
              >
                <div className="h-48 overflow-hidden relative bg-gradient-to-br from-[#1a1f2e] to-[#0d1220]">
                  <Image 
                    src={car.image} 
                    alt={`XPeng ${car.name}`} 
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105" 
                  />
                  <div className="absolute top-3 right-3 px-2 py-1 bg-[#10b981] text-white text-[9px] tracking-wider font-semibold rounded">
                    XPENG
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[9px] tracking-[0.2em] uppercase text-[#10b981] font-medium">{car.category}</div>
                    <span className="text-[9px] tracking-[0.1em] uppercase px-2 py-1 bg-[rgba(16,185,129,0.15)] text-[#10b981] rounded-sm font-semibold">EV</span>
                  </div>
                  <div className="text-lg font-medium mb-1">XPeng {car.name}</div>
                  <div className="text-xs text-[#6b7a94] mb-3">2024 • From {car.price}</div>
                  <p className="text-xs text-[#6b7a94] mb-4 line-clamp-2">{car.description}</p>
                  <div className="flex justify-between text-[11px] text-[#6b7a94] mb-4 py-3 border-t border-b border-[rgba(16,185,129,0.1)]">
                    <div><span className="text-[#e8edf5] font-medium">{car.range}</span> Range</div>
                    <div><span className="text-[#e8edf5] font-medium">{car.acceleration}</span> 0-60</div>
                    <div><span className="text-[#e8edf5] font-medium">{car.power}</span></div>
                  </div>
                  <span className="w-full py-2.5 text-[10px] tracking-[0.1em] uppercase font-medium border border-[rgba(16,185,129,0.3)] text-[#10b981] hover:bg-[rgba(16,185,129,0.1)] transition-all duration-300 rounded block text-center">
                    View Details
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why XPeng Section */}
      <section className="py-16 px-12">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-2xl font-light tracking-tight mb-8">Why Choose XPeng?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "XNGP Autonomous Driving",
                description: "Industry-leading city and highway navigation with no HD maps required in supported areas."
              },
              {
                title: "480kW Supercharging",
                description: "XPeng's S4 chargers deliver up to 480kW - charge from 10-80% in just 10 minutes."
              },
              {
                title: "Smart Cockpit",
                description: "Xmart OS with voice control, OTA updates, and seamless smartphone integration."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[rgba(15,22,40,0.5)] rounded-xl p-6 border border-[rgba(16,185,129,0.1)]">
                <h3 className="text-base font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-[#6b7a94]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      
      {/* You Might Also Like */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/cars/byd" className="block px-6 py-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all text-center">
                <div className="text-white font-medium mb-1">BYD</div>
                <div className="text-emerald-400 text-sm">View Models →</div>
              </Link>
              <Link href="/cars/nio" className="block px-6 py-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all text-center">
                <div className="text-white font-medium mb-1">NIO</div>
                <div className="text-emerald-400 text-sm">View Models →</div>
              </Link>
              <Link href="/cars/zeekr" className="block px-6 py-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all text-center">
                <div className="text-white font-medium mb-1">Zeekr</div>
                <div className="text-emerald-400 text-sm">View Models →</div>
              </Link>
              <Link href="/cars/xiaomi" className="block px-6 py-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all text-center">
                <div className="text-white font-medium mb-1">Xiaomi</div>
                <div className="text-emerald-400 text-sm">View Models →</div>
              </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0f1a] py-12 px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="max-w-7xl mx-auto text-center text-[#6b7a94] text-sm">
          © 2026 Healvanna Auto. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

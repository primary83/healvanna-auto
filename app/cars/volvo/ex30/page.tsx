"use client";

import Image from "next/image";
import Link from "next/link";

export default function VolvoEX30Page() {
  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="flex gap-10">
          {["HOME", "CARS", "CARE", "CRAFT", "SHOP", "BLOG"].map((item) => (
            <Link
              key={item}
              href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              className={`text-xs tracking-[0.12em] cursor-pointer transition-colors duration-300 pb-2 ${
                item === "CARS" ? "text-[#e8edf5] border-b border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5]"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* Back Link */}
      <div className="pt-28 px-12">
        <Link href="/cars/volvo" className="inline-flex items-center gap-2 text-[#6b7a94] text-sm hover:text-[#1c6bba] transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Volvo
        </Link>
      </div>

      {/* Hero Section */}
      <section className="px-12 py-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[#1c6bba] text-sm font-medium tracking-wider uppercase mb-2">Volvo</div>
            <h1 className="text-5xl font-light tracking-tight mb-4">EX30</h1>
            <p className="text-xl text-[#8a9bb5] mb-6">The small SUV with a big impact. Minimalist Scandinavian design meets powerful performance in our most affordable electric vehicle.</p>
            <div className="text-3xl font-light text-[#1c6bba] mb-8">$34,950 <span className="text-base text-[#6b7a94]">Starting MSRP</span></div>
            
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="bg-[#0d1424] rounded-xl p-4 text-center">
                <div className="text-2xl font-light text-[#1c6bba]">275 mi</div>
                <div className="text-xs text-[#6b7a94]">EPA Range</div>
              </div>
              <div className="bg-[#0d1424] rounded-xl p-4 text-center">
                <div className="text-2xl font-light text-[#1c6bba]">3.4s</div>
                <div className="text-xs text-[#6b7a94]">0-60 mph</div>
              </div>
              <div className="bg-[#0d1424] rounded-xl p-4 text-center">
                <div className="text-2xl font-light text-[#1c6bba]">422 hp</div>
                <div className="text-xs text-[#6b7a94]">Peak Power</div>
              </div>
              <div className="bg-[#0d1424] rounded-xl p-4 text-center">
                <div className="text-2xl font-light text-[#1c6bba]">AWD</div>
                <div className="text-xs text-[#6b7a94]">Dual Motor</div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px]">
            <Image
              src="/cars/volvo/ex30.png"
              alt="Volvo EX30"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-12 py-16 bg-[#0d1424]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-3xl font-light mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Google Built-In", desc: "Google Maps, Google Assistant, and Google Play Store seamlessly integrated." },
              { title: "Sustainable Materials", desc: "Interior crafted with recycled plastics, denim, and flax-based composites." },
              { title: "Compact Yet Spacious", desc: "Smart packaging delivers surprising interior space in a small footprint." },
              { title: "360° Safety", desc: "Advanced driver assistance with cameras and sensors all around." },
              { title: "Fast Charging", desc: "10-80% in approximately 26 minutes with DC fast charging." },
              { title: "Harman Kardon Audio", desc: "Premium sound system for an immersive listening experience." },
            ].map((feature, i) => (
              <div key={i} className="bg-[#0a0f1a] rounded-xl p-6 border border-[rgba(28,107,186,0.1)]">
                <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-[#6b7a94]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080c14] py-16 px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center pt-8 border-t border-[rgba(74,144,217,0.15)]">
            <div className="text-[11px] text-[#3d4a61]">© 2026 Healvanna. All rights reserved.</div>
            <div className="flex gap-6">
              {["Privacy", "Terms", "Cookies"].map((link) => (
                <span key={link} className="text-[11px] text-[#6b7a94] cursor-pointer hover:text-[#e8edf5]">{link}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

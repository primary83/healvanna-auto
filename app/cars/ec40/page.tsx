"use client";

import Image from "next/image";
import Link from "next/link";

export default function VolvoEC40Page() {
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
            <h1 className="text-5xl font-light tracking-tight mb-4">EC40</h1>
            <p className="text-xl text-[#8a9bb5] mb-6">The sporty crossover coupe. A sleek silhouette and dynamic character for drivers who want to stand out.</p>
            <div className="text-3xl font-light text-[#1c6bba] mb-8">$56,395 <span className="text-base text-[#6b7a94]">Starting MSRP</span></div>
            
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="bg-[#0d1424] rounded-xl p-4 text-center">
                <div className="text-2xl font-light text-[#1c6bba]">246 mi</div>
                <div className="text-xs text-[#6b7a94]">EPA Range</div>
              </div>
              <div className="bg-[#0d1424] rounded-xl p-4 text-center">
                <div className="text-2xl font-light text-[#1c6bba]">4.5s</div>
                <div className="text-xs text-[#6b7a94]">0-60 mph</div>
              </div>
              <div className="bg-[#0d1424] rounded-xl p-4 text-center">
                <div className="text-2xl font-light text-[#1c6bba]">402 hp</div>
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
              src="/cars/volvo/ec40.png"
              alt="Volvo EC40"
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
              { title: "Coupe Design", desc: "Dramatic sloping roofline creates a sporty silhouette that turns heads." },
              { title: "Google Built-In", desc: "Google Maps, Google Assistant, and Google Play Store at your fingertips." },
              { title: "Performance AWD", desc: "Dual motors deliver instant torque and confident all-weather capability." },
              { title: "Pilot Assist", desc: "Semi-autonomous driving support for a more relaxed journey." },
              { title: "Fast Charging", desc: "DC fast charging capability for convenient road trips." },
              { title: "Harman Kardon", desc: "Premium audio system for an immersive sound experience." },
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

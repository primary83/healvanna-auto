"use client";

import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";

const variants = [
  {
    name: "Zeekr 009 Long Range",
    price: "$78,900",
    range: "405 mi",
    acceleration: "4.5s",
    topSpeed: "118 mph",
    drive: "All-Wheel Drive",
    seating: "6 Seats",
  },
  {
    name: "Zeekr 009 Grand",
    price: "$98,900",
    range: "385 mi",
    acceleration: "4.5s",
    topSpeed: "118 mph",
    drive: "All-Wheel Drive",
    seating: "4 Seats",
    isLuxury: true,
  },
];

const features = [
  {
    title: "Executive Lounge Seating",
    description: "Second-row captain chairs with massage, heating, cooling, and leg rests",
  },
  {
    title: "140 kWh Battery",
    description: "Largest battery in its class for exceptional range and confidence",
  },
  {
    title: "Air Suspension",
    description: "Full air suspension with adaptive damping for a cloud-like ride",
  },
  {
    title: "Dual Sunroof",
    description: "Panoramic front and rear skylights with electrochromic dimming",
  },
  {
    title: "28-Speaker Audio",
    description: "Dynaudio premium sound system with 3D surround sound",
  },
  {
    title: "Rear Entertainment",
    description: "Dual 15.6-inch screens with streaming and gaming capabilities",
  },
];

export default function Zeekr009Page() {
  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="CARS" />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link href="/cars/zeekr" className="text-[#eaaa00] hover:underline">
              Zeekr
            </Link>
            <span className="text-[#6b7a94]">•</span>
            <span className="text-[#6b7a94]">Electric Luxury MPV</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-extralight text-white mb-4">
                Zeekr 009
              </h1>
              <p className="text-[#8a9bb5] text-lg leading-relaxed mb-8">
                The ultimate electric luxury MPV. First-class travel for the entire family with 
                executive seating, whisper-quiet cabin, and uncompromising comfort.
              </p>

              {/* Key Stats */}
              <div className="flex items-center gap-8 mb-8">
                <div>
                  <p className="text-[#eaaa00] text-3xl font-light">$78,900</p>
                  <p className="text-[#6b7a94] text-sm">Starting Price</p>
                </div>
                <div className="w-px h-12 bg-[rgba(255,255,255,0.1)]" />
                <div>
                  <p className="text-white text-3xl font-light">405 mi</p>
                  <p className="text-[#6b7a94] text-sm">Max Range</p>
                </div>
                <div className="w-px h-12 bg-[rgba(255,255,255,0.1)]" />
                <div>
                  <p className="text-white text-3xl font-light">4.5s</p>
                  <p className="text-[#6b7a94] text-sm">0-60 mph</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.zeekrlife.com/009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 text-[13px] font-medium bg-[#eaaa00] text-[#0a0f1a] hover:bg-[#ffc832] transition-all duration-300 rounded inline-flex items-center gap-2"
                >
                  Learn More on Zeekr.com
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <Link
                  href="/cars/zeekr"
                  className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(234,170,0,0.3)] text-[#eaaa00] hover:bg-[rgba(234,170,0,0.1)] transition-all duration-300 rounded"
                >
                  View All Zeekr Models
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-gradient-to-b from-[rgba(234,170,0,0.1)] to-transparent">
                <img
                  src="/cars/zeekr/009.png"
                  alt="Zeekr 009"
                  className="w-full h-full object-contain object-center p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Variants Section */}
      <section className="px-6 md:px-12 py-16 bg-[#0d1424]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-white mb-8">Available Variants</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {variants.map((variant) => (
              <div
                key={variant.name}
                className={`bg-[rgba(15,22,40,0.5)] rounded-xl p-6 border ${
                  variant.isLuxury
                    ? "border-[rgba(234,170,0,0.3)]"
                    : "border-[rgba(74,144,217,0.1)]"
                }`}
              >
                {variant.isLuxury && (
                  <span className="inline-block px-3 py-1 bg-[#eaaa00] text-[#0a0f1a] text-xs font-bold rounded mb-4">
                    GRAND EDITION
                  </span>
                )}
                <h3 className="text-xl font-medium text-white mb-4">{variant.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#6b7a94]">Price</span>
                    <span className="text-[#eaaa00] font-medium">{variant.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6b7a94]">Range</span>
                    <span className="text-white">{variant.range}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6b7a94]">0-60 mph</span>
                    <span className="text-white">{variant.acceleration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6b7a94]">Top Speed</span>
                    <span className="text-white">{variant.topSpeed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6b7a94]">Seating</span>
                    <span className="text-white">{variant.seating}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6b7a94]">Drive</span>
                    <span className="text-white">{variant.drive}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-white mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-[rgba(15,22,40,0.5)] rounded-xl p-6 border border-[rgba(74,144,217,0.1)]"
              >
                <h3 className="text-lg font-medium text-[#eaaa00] mb-2">{feature.title}</h3>
                <p className="text-[#8a9bb5] text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-[#0d1424]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl font-light mb-4">Protect Your Zeekr 009</h2>
          <p className="text-[#6b7a94] mb-8">
            Keep your luxury MPV in showroom condition with our premium care services.
          </p>
          <Link
            href="/care"
            className="px-8 py-3 text-[13px] font-medium bg-[#eaaa00] text-[#0a0f1a] hover:bg-[#ffc832] transition-all duration-300 rounded inline-block"
          >
            Explore Care Services
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

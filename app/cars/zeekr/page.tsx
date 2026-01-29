"use client";

import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const models = [
  {
    name: "Zeekr 001",
    slug: "001",
    tagline: "The original shooting brake that started it all",
    price: "$59,900",
    range: "352 mi",
    acceleration: "3.8s",
    image: "/cars/zeekr/001.png",
  },
  {
    name: "Zeekr 007",
    slug: "007",
    tagline: "Luxury performance sedan with elegant design",
    price: "$52,900",
    range: "438 mi",
    acceleration: "2.8s",
    image: "/cars/zeekr/007.png",
  },
  {
    name: "Zeekr 009",
    slug: "009",
    tagline: "Ultra-luxury electric MPV for the discerning family",
    price: "$78,900",
    range: "405 mi",
    acceleration: "4.5s",
    image: "/cars/zeekr/009.png",
  },
  {
    name: "Zeekr X",
    slug: "x",
    tagline: "Compact crossover with bold urban styling",
    price: "$44,900",
    range: "311 mi",
    acceleration: "3.7s",
    image: "/cars/zeekr/x.png",
  },
];

export default function ZeekrPage() {
  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="CARS" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 text-[#6b7a94] hover:text-[#4a90d9] transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Brands
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-16 h-16 rounded-xl bg-[rgba(234,170,0,0.1)] flex items-center justify-center border border-[rgba(234,170,0,0.2)]">
              <span className="text-[#eaaa00] font-bold text-xl">Z</span>
            </div>
            <div>
              <h1 className="text-5xl md:text-6xl font-extralight text-white">
                Zeekr
              </h1>
              <p className="text-[#6b7a94] mt-1">Geely&apos;s Premium Electric Brand</p>
            </div>
          </div>

          <p className="text-[#8a9bb5] text-lg max-w-3xl leading-relaxed">
            Zeekr represents Geely&apos;s vision for premium electric mobility. Built on the SEA architecture, 
            Zeekr combines cutting-edge technology with bold Scandinavian-influenced design, delivering 
            exceptional performance and innovative features across their growing lineup.
          </p>
        </div>
      </section>

      {/* Models Grid */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-white mb-8">All Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {models.map((model) => (
              <Link
                key={model.slug}
                href={`/cars/zeekr/${model.slug}`}
                className="group bg-[rgba(15,22,40,0.5)] rounded-2xl overflow-hidden border border-[rgba(74,144,217,0.1)] hover:border-[rgba(234,170,0,0.3)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)]"
              >
                <div className="h-[240px] relative overflow-hidden bg-gradient-to-b from-[rgba(234,170,0,0.05)] to-transparent">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-contain object-center p-6 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-light text-white group-hover:text-[#eaaa00] transition-colors mb-2">
                    {model.name}
                  </h3>
                  <p className="text-[#6b7a94] text-sm mb-4">{model.tagline}</p>
                  
                  <div className="flex items-center gap-6 mb-4">
                    <div>
                      <p className="text-[#eaaa00] text-lg font-medium">{model.price}</p>
                      <p className="text-[#6b7a94] text-xs">Starting</p>
                    </div>
                    <div className="w-px h-8 bg-[rgba(255,255,255,0.1)]" />
                    <div>
                      <p className="text-white text-lg font-medium">{model.range}</p>
                      <p className="text-[#6b7a94] text-xs">Range</p>
                    </div>
                    <div className="w-px h-8 bg-[rgba(255,255,255,0.1)]" />
                    <div>
                      <p className="text-white text-lg font-medium">{model.acceleration}</p>
                      <p className="text-[#6b7a94] text-xs">0-60 mph</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center text-[#eaaa00] text-sm font-medium group-hover:gap-2 gap-1 transition-all">
                    View Details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Info Section */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[rgba(15,22,40,0.5)] rounded-2xl border border-[rgba(74,144,217,0.1)] p-8 md:p-12">
            <h2 className="text-2xl font-light text-white mb-6">About Zeekr</h2>
            <div className="grid md:grid-cols-2 gap-8 text-[#8a9bb5]">
              <div>
                <h3 className="text-[#eaaa00] font-medium mb-2">Heritage & Innovation</h3>
                <p className="leading-relaxed">
                  Launched in 2021 as Geely&apos;s premium electric brand, Zeekr quickly established itself 
                  as a leader in the premium EV segment. The brand combines Swedish design influence 
                  with Chinese manufacturing excellence.
                </p>
              </div>
              <div>
                <h3 className="text-[#eaaa00] font-medium mb-2">Technology Leadership</h3>
                <p className="leading-relaxed">
                  Built on the SEA (Sustainable Experience Architecture) platform, Zeekr vehicles 
                  feature 800V architecture, ultra-fast charging capabilities, and advanced driver 
                  assistance systems powered by Mobileye technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-[#0d1424]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl font-light mb-4">Interested in a Zeekr?</h2>
          <p className="text-[#6b7a94] mb-8">
            Protect your investment with our premium Care services - ceramic coating, PPF, and detailing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/care"
              className="px-8 py-3 text-[13px] font-medium bg-[#eaaa00] text-[#0a0f1a] hover:bg-[#ffc832] transition-all duration-300 rounded"
            >
              Explore Care Services
            </Link>
            <a
              href="https://www.zeekrlife.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(234,170,0,0.3)] text-[#eaaa00] hover:bg-[rgba(234,170,0,0.1)] transition-all duration-300 rounded"
            >
              Visit Zeekr.com
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

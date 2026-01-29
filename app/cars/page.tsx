"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const brands = [
  { name: "Tesla", slug: "tesla", models: "Model S · Model 3 · Model Y · Model X · Cybertruck", count: "5 Models", image: "/cars/tesla/model-s.png", region: "american", tags: ["electric", "performance"] },
  { name: "Rivian", slug: "rivian", models: "R1T · R1S", count: "2 Models", image: "/cars/rivian/r1t.png", region: "american", tags: ["electric"] },
  { name: "BMW", slug: "bmw", models: "i4 · i7 · iX", count: "3 Models", image: "/cars/bmw/i4.png", region: "european", tags: ["luxury", "performance"] },
  { name: "Mercedes", slug: "mercedes", models: "EQS · EQE · EQB", count: "3 Models", image: "/cars/mercedes/eqs.png", region: "european", tags: ["luxury"] },
  { name: "Porsche", slug: "porsche", models: "Taycan · Macan EV", count: "2 Models", image: "/cars/porsche/taycan.png", region: "european", tags: ["luxury", "performance"] },
  { name: "BYD", slug: "byd", models: "Seal · Atto 3 · Dolphin · Han · Tang · Seal U", count: "6 Models", image: "/cars/byd/seal.png", region: "chinese", tags: ["electric"] },
  { name: "NIO", slug: "nio", models: "ET7 · ET5 · ES8 · ES6 · EC7 · EC6", count: "6 Models", image: "/cars/nio/et7.png", region: "chinese", tags: ["electric", "luxury"] },
  { name: "XPeng", slug: "xpeng", models: "G9 · P7 · G6 · X9", count: "4 Models", image: "/cars/xpeng/g9.png", region: "chinese", tags: ["electric"] },
  { name: "Li Auto", slug: "li-auto", models: "MEGA · L9 · L8 · L7 · L6", count: "5 Models", image: "/cars/li-auto/mega.png", region: "chinese", tags: ["electric"] },
  { name: "Zeekr", slug: "zeekr", models: "001 · 009 · X · 007", count: "4 Models", image: "/cars/zeekr/001.png", region: "chinese", tags: ["electric", "performance"] },
  { name: "Xiaomi", slug: "xiaomi", models: "SU7 · SU7 Pro · SU7 Max", count: "3 Models", image: "https://images.unsplash.com/photo-1712749028550-24ef15a1fb64?w=600&q=80", region: "chinese", tags: ["electric"] },
  { name: "Lucid", slug: "lucid", models: "Air Pure · Air Touring · Air GT · Sapphire · Gravity", count: "5 Models", image: "https://images.unsplash.com/photo-1664141249828-5c6e1b3faed5?w=600&q=80", region: "american", tags: ["electric", "luxury"] },
  { name: "Hyundai", slug: "hyundai", models: "Ioniq 5 · Ioniq 6 · Ioniq 9 · Kona EV", count: "4 Models", image: "https://images.unsplash.com/photo-1670974085498-72cebc5e0c49?w=600&q=80", region: "asian", tags: ["electric"] },
  { name: "Kia", slug: "kia", models: "EV6 · EV9 · EV3 · Niro EV", count: "4 Models", image: "https://images.unsplash.com/photo-1676573680498-5765e2eac178?w=600&q=80", region: "asian", tags: ["electric"] },
  { name: "Genesis", slug: "genesis", models: "GV60 · Electrified G80 · Electrified GV70", count: "3 Models", image: "https://images.unsplash.com/photo-1680266694127-1029b5765fd5?w=600&q=80", region: "asian", tags: ["luxury"] },
  { name: "Volvo", slug: "volvo", models: "EX30 · EX90 · EC40 · XC40 Recharge", count: "4 Models", image: "https://images.unsplash.com/photo-1611651338502-8230a0c5636c?w=600&q=80", region: "european", tags: ["electric", "luxury"] },
  { name: "Volkswagen", slug: "volkswagen", models: "ID.4 · ID.Buzz · ID.7", count: "3 Models", image: "https://images.unsplash.com/photo-1622838520460-3521c68afd78?w=600&q=80", region: "european", tags: ["electric"] },
  { name: "Audi", slug: "audi", models: "Q4 e-tron · Q8 e-tron · e-tron GT · RS e-tron GT", count: "4 Models", image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=600&q=80", region: "european", tags: ["luxury", "performance"] },
  { name: "Ford", slug: "ford", models: "Mustang Mach-E · F-150 Lightning · E-Transit", count: "3 Models", image: "https://images.unsplash.com/photo-1643750228773-b997a0c1db66?w=600&q=80", region: "american", tags: ["electric"] },
  { name: "Polestar", slug: "polestar", models: "Polestar 2 · Polestar 3 · Polestar 4", count: "3 Models", image: "https://images.unsplash.com/photo-1664141250065-cf3a1dae59b7?w=600&q=80", region: "european", tags: ["electric", "performance"] },
  { name: "Cadillac", slug: "cadillac", models: "LYRIQ · CELESTIQ · Escalade IQ · OPTIQ", count: "4 Models", image: "https://images.unsplash.com/photo-1657123543888-4877e7b6c5c6?w=600&q=80", region: "american", tags: ["luxury", "electric"] },
  { name: "Chevrolet", slug: "chevrolet", models: "Equinox EV · Blazer EV · Silverado EV", count: "3 Models", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80", region: "american", tags: ["electric"] },
  { name: "Jaguar", slug: "jaguar", models: "I-PACE · Type 00", count: "2 Models", image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=600&q=80", region: "european", tags: ["luxury"] },
  { name: "VinFast", slug: "vinfast", models: "VF 8 · VF 9 · VF 6 · VF 7", count: "4 Models", image: "https://images.unsplash.com/photo-1694537746498-a5dab4d5a5fb?w=600&q=80", region: "asian", tags: ["electric"] },
];

const filters = [
  { label: "All Brands", value: "all" },
  { label: "Electric Focus", value: "electric" },
  { label: "Luxury", value: "luxury" },
  { label: "Performance", value: "performance" },
  { label: "European", value: "european" },
  { label: "American", value: "american" },
  { label: "Chinese", value: "chinese" },
  { label: "Asian", value: "asian" },
];

export default function CarsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredBrands = activeFilter === "all"
    ? brands
    : ["electric", "luxury", "performance"].includes(activeFilter)
      ? brands.filter((b) => b.tags.includes(activeFilter))
      : brands.filter((b) => b.region === activeFilter);

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="CARS" />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#4a90d9] tracking-[0.3em] text-sm mb-4 font-medium">BRAND DIRECTORY</p>
          <h1 className="text-5xl md:text-6xl font-extralight text-white mb-2">
            All <span className="italic text-[#4a90d9]">Brands</span>
          </h1>
          <p className="text-[#6b7a94] text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Explore the world&apos;s finest electric vehicle manufacturers. Select a brand to browse all models.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="px-6 md:px-12 mb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-5 py-2 rounded-full text-sm transition-all duration-200 ${
                  activeFilter === filter.value
                    ? "bg-[#4a90d9] text-white shadow-[0_4px_16px_rgba(74,144,217,0.3)]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredBrands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/cars/${brand.slug}`}
                className="bg-[rgba(15,22,40,0.5)] rounded-xl overflow-hidden border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] group block"
              >
                <div className="h-[140px] relative overflow-hidden bg-gradient-to-b from-[rgba(74,144,217,0.05)] to-transparent">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-contain object-center p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-lg font-medium text-white group-hover:text-[#4a90d9] transition-colors">{brand.name}</h4>
                    <span className="text-[10px] tracking-[0.1em] uppercase text-[#4a90d9] font-medium">{brand.count}</span>
                  </div>
                  <p className="text-[12px] text-[#6b7a94] mb-3">{brand.models}</p>
                  <span className="inline-flex items-center text-[#4a90d9] text-[12px] font-medium group-hover:gap-2 gap-1 transition-all">
                    View Models
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-[#0d1424]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl font-light mb-4">Found Your Perfect EV?</h2>
          <p className="text-[#6b7a94] mb-8">Protect your investment with our premium Care services - ceramic coating, PPF, and detailing from verified specialists.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/care" className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">
              Explore Care Services
            </Link>
            <Link href="/blog" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">
              Read EV Guides
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

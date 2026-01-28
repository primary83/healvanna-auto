"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const brands = [
  { name: "Tesla", slug: "tesla", models: "Model S · Model 3 · Model Y · Model X · Cybertruck", image: "/cars/tesla/model-s.png", country: "USA", region: "american", tags: ["electric"] },
  { name: "Rivian", slug: "rivian", models: "R1T · R1S · R2", image: "/cars/rivian/r1t.png", country: "USA", region: "american", tags: ["electric"] },
  { name: "BMW", slug: "bmw", models: "i4 · i5 · i7 · iX", image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&q=80", country: "Germany", region: "european", tags: ["luxury", "performance"] },
  { name: "Mercedes-Benz", slug: "mercedes", models: "EQS · EQE · EQB", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80", country: "Germany", region: "european", tags: ["luxury"] },
  { name: "Porsche", slug: "porsche", models: "Taycan · Macan EV", image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&q=80", country: "Germany", region: "european", tags: ["luxury", "performance"] },
  { name: "BYD", slug: "byd", models: "Seal · Atto 3 · Dolphin · Han · Tang", image: "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?w=600&q=80", country: "China", region: "chinese", tags: ["electric"] },
  { name: "NIO", slug: "nio", models: "ET7 · ET5 · ES6 · EC7", image: "https://images.unsplash.com/photo-1694076439640-3c0fc4e9e8ee?w=600&q=80", country: "China", region: "chinese", tags: ["electric", "luxury"] },
  { name: "XPeng", slug: "xpeng", models: "G9 · P7 · G6 · X9", image: "https://images.unsplash.com/photo-1697654361888-e24650fa1860?w=600&q=80", country: "China", region: "chinese", tags: ["electric"] },
  { name: "Li Auto", slug: "li-auto", models: "MEGA · L9 · L7 · L6", image: "https://images.unsplash.com/photo-1698256029750-0cdebc2eca0b?w=600&q=80", country: "China", region: "chinese", tags: ["electric"] },
  { name: "Zeekr", slug: "zeekr", models: "001 · 009 · X · 007", image: "https://images.unsplash.com/photo-1697017559073-4b2d5765303e?w=600&q=80", country: "China", region: "chinese", tags: ["electric", "performance"] },
  { name: "Xiaomi", slug: "xiaomi", models: "SU7 · SU7 Pro · SU7 Max", image: "https://images.unsplash.com/photo-1712749028550-24ef15a1fb64?w=600&q=80", country: "China", region: "chinese", tags: ["electric"] },
  { name: "Lucid", slug: "lucid", models: "Air · Gravity", image: "https://images.unsplash.com/photo-1664141249828-5c6e1b3faed5?w=600&q=80", country: "USA", region: "american", tags: ["electric", "luxury"] },
  { name: "Hyundai", slug: "hyundai", models: "IONIQ 5 · IONIQ 6 · Kona EV", image: "https://images.unsplash.com/photo-1670974085498-72cebc5e0c49?w=600&q=80", country: "South Korea", region: "asian", tags: ["electric"] },
  { name: "Kia", slug: "kia", models: "EV6 · EV9 · Niro EV", image: "https://images.unsplash.com/photo-1676573680498-5765e2eac178?w=600&q=80", country: "South Korea", region: "asian", tags: ["electric"] },
  { name: "Volvo", slug: "volvo", models: "EX30 · EX90 · C40 · XC40", image: "https://images.unsplash.com/photo-1611651338502-8230a0c5636c?w=600&q=80", country: "Sweden", region: "european", tags: ["electric", "luxury"] },
  { name: "Volkswagen", slug: "volkswagen", models: "ID.4 · ID.7 · ID.Buzz", image: "https://images.unsplash.com/photo-1622838520460-3521c68afd78?w=600&q=80", country: "Germany", region: "european", tags: ["electric"] },
  { name: "Audi", slug: "audi", models: "e-tron GT · Q8 e-tron · Q4", image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=600&q=80", country: "Germany", region: "european", tags: ["luxury", "performance"] },
  { name: "Ford", slug: "ford", models: "Mustang Mach-E · F-150 Lightning", image: "https://images.unsplash.com/photo-1643750228773-b997a0c1db66?w=600&q=80", country: "USA", region: "american", tags: ["electric"] },
  { name: "Polestar", slug: "polestar", models: "Polestar 2 · Polestar 3 · Polestar 4", image: "https://images.unsplash.com/photo-1664141250065-cf3a1dae59b7?w=600&q=80", country: "Sweden", region: "european", tags: ["electric", "performance"] },
  { name: "Genesis", slug: "genesis", models: "GV60 · G80 EV · GV70 EV", image: "https://images.unsplash.com/photo-1680266694127-1029b5765fd5?w=600&q=80", country: "South Korea", region: "asian", tags: ["luxury"] },
  { name: "Cadillac", slug: "cadillac", models: "LYRIQ · CELESTIQ · Escalade IQ", image: "https://images.unsplash.com/photo-1657123543888-4877e7b6c5c6?w=600&q=80", country: "USA", region: "american", tags: ["luxury", "electric"] },
  { name: "Chevrolet", slug: "chevrolet", models: "Equinox EV · Blazer EV · Silverado EV", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80", country: "USA", region: "american", tags: ["electric"] },
  { name: "Jaguar", slug: "jaguar", models: "I-PACE · Type 00", image: "https://images.unsplash.com/photo-1612825173281-9a193378527e?w=600&q=80", country: "UK", region: "european", tags: ["luxury"] },
  { name: "VinFast", slug: "vinfast", models: "VF 8 · VF 9 · VF 6", image: "https://images.unsplash.com/photo-1694537746498-a5dab4d5a5fb?w=600&q=80", country: "Vietnam", region: "asian", tags: ["electric"] },
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map((brand) => (
              <Link
                href={`/cars/${brand.slug}`}
                key={brand.slug}
                className="group bg-[#0d1420] rounded-xl overflow-hidden border border-white/5 hover:border-[#4a90d9]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] block"
              >
                {/* Brand Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1420] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] tracking-[0.1em] uppercase px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white/80 rounded-full border border-white/10">{brand.country}</span>
                  </div>
                </div>

                {/* Brand Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-[#4a90d9] transition-colors">{brand.name}</h3>
                  <p className="text-[12px] text-[#6b7a94] mb-4">{brand.models}</p>
                  <span className="inline-flex items-center gap-2 text-[12px] tracking-[0.05em] uppercase text-[#4a90d9] font-medium group-hover:gap-3 transition-all">
                    View Models
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function CarsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const brands = [
    {
      name: "Porsche",
      models: ["Taycan", "Macan EV"],
      modelCount: 2,
      image: "/cars/porsche/taycan.png",
      link: "/cars/porsche",
    },
    {
      name: "BYD",
      models: ["Seal", "Atto 3", "Dolphin", "Han", "Tang", "Seal U"],
      modelCount: 6,
      image: "/cars/byd/seal.png",
      link: "/cars/byd",
    },
    {
      name: "NIO",
      models: ["ET7", "ET5", "ES8", "ES6", "EC7", "EC6"],
      modelCount: 6,
      image: "/cars/nio/et7.png",
      link: "/cars/nio",
    },
    {
      name: "XPeng",
      models: ["G9", "P7", "G6", "X9"],
      modelCount: 4,
      image: "/cars/xpeng/g9.png",
      link: "/cars/xpeng",
    },
    {
      name: "Li Auto",
      models: ["MEGA", "L9", "L8", "L7", "L6"],
      modelCount: 5,
      image: "/cars/li-auto/mega.png",
      link: "/cars/li-auto",
    },
    {
      name: "Zeekr",
      models: ["001", "009", "X", "007"],
      modelCount: 4,
      image: "/cars/zeekr/001.png",
      link: "/cars/zeekr",
    },
    {
      name: "Xiaomi",
      models: ["SU7", "SU7 Pro", "SU7 Max"],
      modelCount: 3,
      image: "/cars/xiaomi/su7.png",
      link: "/cars/xiaomi",
    },
    {
      name: "Lucid",
      models: ["Air Pure", "Air Touring", "Air GT", "Sapphire", "Gravity"],
      modelCount: 5,
      image: "/cars/lucid/air-pure.png",
      link: "/cars/lucid",
    },
    {
      name: "Kia",
      models: ["EV6", "EV9", "EV3", "Niro EV"],
      modelCount: 4,
      image: "/cars/kia/ev6.png",
      link: "/cars/kia",
    },
    {
      name: "Genesis",
      models: ["GV60", "Electrified G80", "Electrified GV70"],
      modelCount: 3,
      image: "/cars/genesis/gv60.png",
      link: "/cars/genesis",
    },
    {
      name: "VinFast",
      models: ["VF 8", "VF 9"],
      modelCount: 2,
      image: "/cars/vinfast/vf8.png",
      link: "/cars/vinfast",
    },
    {
      name: "Volkswagen",
      models: ["ID.4", "ID. Buzz"],
      modelCount: 2,
      image: "/cars/volkswagen/id4.png",
      link: "/cars/volkswagen",
    },
    {
      name: "Rivian",
      models: ["R1T", "R1S"],
      modelCount: 2,
      image: "/cars/rivian/r1t.png",
      link: "/cars/rivian",
    },
    {
      name: "Tesla",
      models: ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck"],
      modelCount: 5,
      image: "/cars/tesla/model-3.png",
      link: "/cars/tesla",
    },
    {
      name: "Volvo",
      models: ["EX30", "EX90", "EC40", "XC40 Recharge"],
      modelCount: 4,
      image: "/cars/volvo/ex30.png",
      link: "/cars/volvo",
    },
    {
      name: "Hyundai",
      models: ["Ioniq 5", "Ioniq 6", "Kona Electric"],
      modelCount: 3,
      image: "/cars/hyundai/ioniq-5.png",
      link: "/cars/hyundai",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: "HOME", href: "/" },
            { name: "SERVICES", href: "/services", hasDropdown: true },
            { name: "CARS", href: "/cars" },
            { name: "BLOG", href: "/blog" },
            { name: "SHOP", href: "/shop" },
            { name: "ABOUT", href: "/about" },
            { name: "CONTACT", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs tracking-[0.12em] cursor-pointer transition-colors duration-300 pb-2 flex items-center gap-1 ${
                item.name === "CARS"
                  ? "text-[#e8edf5] border-b border-[#4a90d9]"
                  : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
              }`}
            >
              {item.name}
              {item.hasDropdown && (
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Page Header */}
      <section className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Electric Vehicles
          </h1>
          <p className="text-[#6b7a94] text-lg max-w-2xl">
            Explore our curated collection of premium electric vehicles from the world's leading manufacturers.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                href={brand.link}
                className="bg-gradient-to-b from-[rgba(15,22,40,0.8)] to-[rgba(10,15,26,0.9)] rounded-xl overflow-hidden cursor-pointer border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(74,144,217,0.15)] group block"
              >
                <div className="h-44 overflow-hidden relative bg-gradient-to-br from-[#12182a] to-[#0d1220] flex items-center justify-center p-4">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={280}
                    height={160}
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-medium">{brand.name}</h3>
                    <span className="text-xs text-[#4a90d9] font-medium">
                      {brand.modelCount} MODELS
                    </span>
                  </div>
                  <p className="text-sm text-[#6b7a94] mb-4 line-clamp-1">
                    {brand.models.join(" · ")}
                  </p>
                  <div className="flex items-center text-[#4a90d9] text-sm font-medium group-hover:gap-2 transition-all">
                    View Models
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080c14] py-16 px-6 md:px-12 mt-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link href="/" className="text-xl font-light tracking-wider cursor-pointer">
                HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
              </Link>
              <p className="text-[#6b7a94] text-sm mt-4 leading-relaxed">
                Premium electric vehicles for the modern driver. Experience the future of sustainable luxury.
              </p>
            </div>
            {[
              {
                title: "Vehicles",
                links: [
                  { name: "All Cars", href: "/cars" },
                  { name: "SUVs", href: "/cars?type=suv" },
                  { name: "Sedans", href: "/cars?type=sedan" },
                  { name: "Compare", href: "/compare" },
                ],
              },
              {
                title: "Services",
                links: [
                  { name: "Care", href: "/care" },
                  { name: "Craft", href: "/craft" },
                  { name: "Shop", href: "/shop" },
                  { name: "Support", href: "/support" },
                ],
              },
              {
                title: "Company",
                links: [
                  { name: "About", href: "/about" },
                  { name: "For Business", href: "/business" },
                  { name: "Contact", href: "/contact" },
                ],
              },
            ].map((column, index) => (
              <div key={index}>
                <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">
                  {column.title}
                </h4>
                {column.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-[13px] text-[#6b7a94] mb-2.5 cursor-pointer hover:text-[#e8edf5] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(74,144,217,0.15)]">
            <div className="text-[11px] text-[#3d4a61] mb-4 md:mb-0">
              © 2026 Healvanna. All rights reserved.
            </div>
            <div className="flex gap-6">
              {[
                { name: "Privacy", href: "/privacy" },
                { name: "Terms", href: "/terms" },
                { name: "Cookies", href: "#" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[11px] text-[#6b7a94] cursor-pointer hover:text-[#e8edf5] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

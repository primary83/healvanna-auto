"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Battery, Zap } from "lucide-react";

const brands = [
  {
    id: "xiaomi",
    name: "Xiaomi",
    logo: "/cars/xiaomi/logo.png",
    description: "Technology giant bringing smart EV innovation",
    models: 3,
    flagshipRange: "800+ km",
    color: "#FF6900",
    flagship: "SU7 Max",
  },
  {
    id: "lucid",
    name: "Lucid",
    logo: "/cars/lucid/logo.png",
    description: "Luxury EVs with industry-leading range",
    models: 5,
    flagshipRange: "516 mi",
    color: "#C4A777",
    flagship: "Air Sapphire",
  },
  {
    id: "zeekr",
    name: "Zeekr",
    logo: "/cars/zeekr/logo.png",
    description: "Premium electric mobility from Geely",
    models: 4,
    flagshipRange: "640 km",
    color: "#3B5EDB",
    flagship: "001",
  },
  {
    id: "byd",
    name: "BYD",
    logo: "/cars/byd/logo.png",
    description: "World's leading EV manufacturer",
    models: 4,
    flagshipRange: "700+ km",
    color: "#C41230",
    flagship: "Seal",
  },
  {
    id: "kia",
    name: "Kia",
    logo: "/cars/kia/logo.png",
    description: "Movement that inspires with award-winning EVs",
    models: 4,
    flagshipRange: "310 mi",
    color: "#05141F",
    flagship: "EV9",
  },
  {
    id: "genesis",
    name: "Genesis",
    logo: "/cars/genesis/logo.png",
    description: "Korean luxury with athletic elegance",
    models: 3,
    flagshipRange: "294 mi",
    color: "#6b4c3b",
    flagship: "GV60",
  },
];

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Electric Vehicles
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Explore the world&apos;s most innovative electric vehicles from leading manufacturers
            </p>
          </div>
        </div>
      </div>

      {/* Brands Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/cars/${brand.id}`}
              className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
            >
              <div 
                className="h-32 flex items-center justify-center relative"
                style={{ 
                  background: `linear-gradient(135deg, ${brand.color}15 0%, transparent 100%)` 
                }}
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain filter brightness-0 invert opacity-90"
                  />
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">{brand.name}</h3>
                  <span 
                    className="px-2 py-1 rounded-full text-xs font-medium"
                    style={{ 
                      backgroundColor: `${brand.color}20`,
                      color: brand.color 
                    }}
                  >
                    {brand.models} Models
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{brand.description}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Battery className="w-4 h-4 text-green-400" />
                    <span className="text-white text-sm">{brand.flagshipRange}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-400 text-sm">{brand.flagship}</span>
                  </div>
                </div>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="text-sm font-medium">Explore Models</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">6</div>
            <div className="text-gray-400">Brands</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">23</div>
            <div className="text-gray-400">Models</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">516</div>
            <div className="text-gray-400">Max Range (mi)</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1,234</div>
            <div className="text-gray-400">Max HP</div>
          </div>
        </div>
      </div>
    </div>
  );
}

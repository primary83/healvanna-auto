"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Battery, Gauge, Zap } from "lucide-react";

const genesisModels = [
  {
    id: "gv60",
    name: "GV60",
    price: 54900,
    range: 294,
    acceleration: "4.0s",
    power: "429 hp",
    image: "/cars/genesis/gv60.png",
    description: "Compact luxury electric SUV with Crystal Sphere shifter and bold design.",
  },
  {
    id: "electrified-g80",
    name: "Electrified G80",
    price: 75625,
    range: 282,
    acceleration: "4.9s",
    power: "365 hp",
    image: "/cars/genesis/electrified-g80.png",
    description: "Elegant luxury electric sedan with refined road manners and premium interior.",
  },
  {
    id: "electrified-gv70",
    name: "Electrified GV70",
    price: 67800,
    range: 236,
    acceleration: "4.2s",
    power: "429 hp",
    image: "/cars/genesis/electrified-gv70.png",
    description: "Athletic luxury electric SUV with powerful dual motors and premium features.",
  },
];

export default function GenesisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6b4c3b]/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Genesis
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Athletic Elegance. Korean luxury reimagined with electrifying performance.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <span className="px-4 py-2 bg-[#6b4c3b]/20 rounded-full text-[#c9a88a] text-sm font-medium">
                3 Electric Models
              </span>
              <span className="px-4 py-2 bg-[#6b4c3b]/20 rounded-full text-[#c9a88a] text-sm font-medium">
                Up to 294 Miles Range
              </span>
              <span className="px-4 py-2 bg-[#6b4c3b]/20 rounded-full text-[#c9a88a] text-sm font-medium">
                10-Year Warranty
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Models Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Electric Vehicle Lineup
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {genesisModels.map((model) => (
            <Link
              key={model.id}
              href={`/cars/genesis/${model.id}`}
              className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-[#6b4c3b] transition-all duration-300 hover:shadow-2xl hover:shadow-[#6b4c3b]/10"
            >
              <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800">
                <Image
                  src={model.image}
                  alt={model.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">{model.name}</h3>
                  <span className="text-[#c9a88a] font-semibold">
                    ${model.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-4">{model.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <Battery className="w-5 h-5 text-[#c9a88a] mx-auto mb-1" />
                    <span className="text-white font-medium text-sm">{model.range} mi</span>
                  </div>
                  <div className="text-center">
                    <Gauge className="w-5 h-5 text-[#c9a88a] mx-auto mb-1" />
                    <span className="text-white font-medium text-sm">{model.acceleration}</span>
                  </div>
                  <div className="text-center">
                    <Zap className="w-5 h-5 text-[#c9a88a] mx-auto mb-1" />
                    <span className="text-white font-medium text-sm">{model.power}</span>
                  </div>
                </div>
                <div className="flex items-center text-[#c9a88a] group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">View Details</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Brand Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">Ultra-Fast Charging</h3>
            <p className="text-gray-400 text-sm">
              800V architecture enables 10-80% charging in just 18-22 minutes with 350kW DC fast chargers.
            </p>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">Industry-Leading Warranty</h3>
            <p className="text-gray-400 text-sm">
              10-year/100,000-mile powertrain and battery coverage with 3 years complimentary maintenance.
            </p>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold text-white mb-2">Korean Craftsmanship</h3>
            <p className="text-gray-400 text-sm">
              Meticulously designed interiors with premium materials and innovative technology features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Battery, Gauge, Zap, Clock, Star, Shield, Cog } from "lucide-react";

export default function GV60Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/cars/genesis"
          className="inline-flex items-center text-gray-400 hover:text-[#c9a88a] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Genesis
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#c9a88a] font-medium">Genesis</span>
            <h1 className="text-5xl font-bold text-white mt-2 mb-4">GV60</h1>
            <p className="text-xl text-gray-300 mb-6">
              The bold compact luxury electric SUV featuring the innovative Crystal Sphere 
              and Genesis's signature athletic elegance.
            </p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-bold text-white">$54,900</span>
              <span className="text-gray-400">Starting MSRP</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <Battery className="w-6 h-6 text-[#c9a88a] mb-2" />
                <div className="text-2xl font-bold text-white">294 mi</div>
                <div className="text-gray-400 text-sm">EPA Range</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <Gauge className="w-6 h-6 text-[#c9a88a] mb-2" />
                <div className="text-2xl font-bold text-white">4.0s</div>
                <div className="text-gray-400 text-sm">0-60 mph</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <Zap className="w-6 h-6 text-[#c9a88a] mb-2" />
                <div className="text-2xl font-bold text-white">429 hp</div>
                <div className="text-gray-400 text-sm">Peak Power</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <Clock className="w-6 h-6 text-[#c9a88a] mb-2" />
                <div className="text-2xl font-bold text-white">18 min</div>
                <div className="text-gray-400 text-sm">10-80% Charge</div>
              </div>
            </div>
          </div>
          <div className="relative h-80 lg:h-[500px]">
            <Image
              src="/cars/genesis/gv60.png"
              alt="Genesis GV60"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <Star className="w-8 h-8 text-[#c9a88a] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Crystal Sphere</h3>
            <p className="text-gray-400 text-sm">
              Iconic rotating gear selector that doubles as ambient interior lighting when parked.
            </p>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <Shield className="w-8 h-8 text-[#c9a88a] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Face Connect</h3>
            <p className="text-gray-400 text-sm">
              Biometric facial recognition system for keyless entry and personalized settings.
            </p>
          </div>
          <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
            <Cog className="w-8 h-8 text-[#c9a88a] mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Boost Mode</h3>
            <p className="text-gray-400 text-sm">
              Performance mode delivers maximum power for 10 seconds of exhilarating acceleration.
            </p>
          </div>
        </div>
      </div>

      {/* Specs Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Specifications</h2>
        <div className="bg-gray-800/30 rounded-xl border border-gray-700 overflow-hidden">
          <table className="w-full">
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 text-gray-400">Battery Capacity</td>
                <td className="px-6 py-4 text-white font-medium">77.4 kWh</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">Motor Configuration</td>
                <td className="px-6 py-4 text-white font-medium">Dual Motor AWD</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">Peak Power</td>
                <td className="px-6 py-4 text-white font-medium">429 hp</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">Peak Torque</td>
                <td className="px-6 py-4 text-white font-medium">446 lb-ft</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">Architecture</td>
                <td className="px-6 py-4 text-white font-medium">800V</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">Fast Charging</td>
                <td className="px-6 py-4 text-white font-medium">350 kW DC</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">Body Style</td>
                <td className="px-6 py-4 text-white font-medium">Compact SUV</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-400">Warranty</td>
                <td className="px-6 py-4 text-white font-medium">10 Years / 100,000 Miles</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ID4Page() {
  const specs = {
    range: "275 miles",
    acceleration: "5.7s 0-60 mph",
    power: "295 hp (AWD)",
    drivetrain: "RWD / AWD",
    battery: "82 kWh",
    charging: "170 kW DC fast charging",
  };

  const features = [
    "ID.Light intuitive communication",
    "12-inch touchscreen infotainment",
    "IQ.DRIVE advanced driver assistance",
    "Spacious interior with flat floor",
    "Augmented reality head-up display",
    "Wireless App-Connect",
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001e50]/20 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        <Image
          src="/cars/volkswagen/id4.png"
          alt="Volkswagen ID.4"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#001e50] font-semibold mb-4 text-lg">Volkswagen</p>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              ID.4
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              The Electric SUV for Everyone
            </p>
            <p className="text-3xl font-bold text-white mt-6">Starting at $38,995</p>
          </motion.div>
        </div>
      </section>

      {/* Specs Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Performance Specs
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(specs).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#12182a] to-[#0d1220] rounded-2xl p-6 border border-gray-800/50"
            >
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </p>
              <p className="text-2xl font-bold text-white">{value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Key Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-gradient-to-br from-[#12182a] to-[#0d1220] rounded-xl p-4 border border-gray-800/50"
            >
              <div className="w-3 h-3 bg-[#001e50] rounded-full flex-shrink-0" />
              <p className="text-gray-300">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 pb-20 flex justify-between">
        <Link
          href="/cars/volkswagen"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Volkswagen
        </Link>
        <Link
          href="/cars"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          All Brands
        </Link>
      </div>
    </main>
  );
}

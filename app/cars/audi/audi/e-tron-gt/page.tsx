"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ETronGTPage() {
  const specs = {
    range: "238 miles",
    acceleration: "3.9s 0-60 mph",
    power: "522 hp",
    drivetrain: "quattro AWD",
    battery: "93.4 kWh",
    charging: "270 kW DC fast charging",
  };

  const features = [
    "Porsche Taycan platform",
    "Two-speed transmission rear axle",
    "Adaptive air suspension sport",
    "Carbon fiber roof",
    "Matrix LED headlights with laser",
    "Bang & Olufsen 3D sound system",
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#bb0a30]/20 via-[#0a0a0a]/70 to-[#0a0a0a]" />
        <Image
          src="/cars/audi/e-tron-gt.png"
          alt="Audi e-tron GT"
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
            <p className="text-[#bb0a30] font-semibold mb-4 text-lg">Audi</p>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              e-tron GT
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Electric Gran Turismo
            </p>
            <p className="text-3xl font-bold text-white mt-6">Starting at $106,500</p>
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
              <div className="w-3 h-3 bg-[#bb0a30] rounded-full flex-shrink-0" />
              <p className="text-gray-300">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 pb-20 flex justify-between">
        <Link
          href="/cars/audi"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Audi
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

"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Battery, Gauge, Zap, Calendar, MapPin } from "lucide-react";

const specs = {
  performance: [
    { label: "Horsepower", value: "480 hp" },
    { label: "Torque", value: "634 lb-ft" },
    { label: "0-60 mph", value: "3.5 seconds" },
    { label: "Top Speed", value: "130 mph" },
  ],
  battery: [
    { label: "Battery Capacity", value: "91 kWh" },
    { label: "Range (EPA)", value: "312 miles" },
    { label: "DC Fast Charging", value: "150 kW" },
    { label: "Charge Time (10-80%)", value: "38 min" },
  ],
  dimensions: [
    { label: "Length", value: "186 in" },
    { label: "Width", value: "74 in" },
    { label: "Height", value: "64 in" },
    { label: "Cargo Space", value: "59.7 cu ft" },
  ],
};

const features = [
  "Ford Co-Pilot360 2.0",
  "SYNC 4A with 15.5\" Touchscreen",
  "Hands-Free BlueCruise",
    "Panoramic Fixed Glass Roof",
  "B&O Sound System",
  "Wireless Apple CarPlay & Android Auto",
  "FordPass App Integration",
  "Over-the-Air Updates",
];

export default function MustangMachEPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-600/20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/cars/ford"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Ford
            </Link>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Mustang Mach-E
            </h1>
            <p className="text-xl text-blue-200/80 mb-8 max-w-lg">
              The icon, electrified. Experience the thrill of Mustang with zero emissions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Battery className="w-5 h-5 text-blue-400" />
                <span className="text-white">312 mi range</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Gauge className="w-5 h-5 text-blue-400" />
                <span className="text-white">3.5s 0-60</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-blue-400" />
                <span className="text-white">480 hp</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Configure Yours
              </button>
              <button className="border border-slate-600 hover:border-blue-400 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Schedule Test Drive
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <Image
              src="/cars/ford/mustang-mach-e.png"
              alt="Ford Mustang Mach-E"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Specifications
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(specs).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-6 capitalize">
                  {category}
                </h3>
                <div className="space-y-4">
                  {items.map((spec) => (
                    <div key={spec.label} className="flex justify-between">
                      <span className="text-slate-400">{spec.label}</span>
                      <span className="text-white font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Key Features
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700 text-center"
              >
                <span className="text-slate-200">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience Electric Mustang?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Starting from $42,995. Configure your Mustang Mach-E today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                <Calendar className="w-5 h-5" />
                Schedule Test Drive
              </button>
              <button className="flex items-center gap-2 border border-slate-600 hover:border-blue-400 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                <MapPin className="w-5 h-5" />
                Find a Dealer
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

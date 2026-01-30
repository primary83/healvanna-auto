"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Zap, Battery, Gauge } from "lucide-react";

const models = [
  {
    name: "Mustang Mach-E",
    slug: "mustang-mach-e",
    image: "/cars/ford/mustang-mach-e.png",
    price: "From $42,995",
    range: "312 miles",
    acceleration: "3.5s 0-60",
    power: "480 hp",
    description: "An all-electric SUV that combines Mustang heritage with modern EV technology.",
  },
  {
    name: "F-150 Lightning",
    slug: "f-150-lightning",
    image: "/cars/ford/f-150-lightning.png",
    price: "From $49,995",
    range: "320 miles",
    acceleration: "4.0s 0-60",
    power: "580 hp",
    description: "America's best-selling truck, now fully electric with incredible capability.",
  },
  {
    name: "E-Transit",
    slug: "e-transit",
    image: "/cars/ford/e-transit.png",
    price: "From $43,295",
    range: "159 miles",
    acceleration: "N/A",
    power: "266 hp",
    description: "The all-electric commercial van built for business efficiency.",
  },
];

export default function FordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 via-transparent to-transparent" />
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/cars"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Brands
            </Link>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              Ford
            </h1>
            <p className="text-xl md:text-2xl text-blue-200/80 max-w-2xl mx-auto">
              Built Ford Tough. Now Built Electric.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
          >
            Electric Models
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <motion.div
                key={model.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/cars/ford/${model.slug}`}>
                  <div className="group bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                      <Image
                        src={model.image}
                        alt={model.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {model.name}
                        </h3>
                        <span className="text-blue-400 font-semibold">
                          {model.price}
                        </span>
                      </div>
                      
                      <p className="text-slate-400 mb-6 line-clamp-2">
                        {model.description}
                      </p>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <Battery className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                          <span className="text-sm text-slate-300">{model.range}</span>
                        </div>
                        <div className="text-center">
                          <Gauge className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                          <span className="text-sm text-slate-300">{model.acceleration}</span>
                        </div>
                        <div className="text-center">
                          <Zap className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                          <span className="text-sm text-slate-300">{model.power}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Leading the Electric Revolution
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Ford is transforming its iconic lineup for the electric age. From the legendary 
              Mustang reimagined as an all-electric SUV to America's best-selling truck going 
              fully electric, Ford is proving that performance and sustainability go hand in hand. 
              With massive investments in EV technology and battery production, Ford is committed 
              to an electric future.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

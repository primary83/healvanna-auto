"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AudiPage() {
  const models = [
    {
      id: "q4-e-tron",
      name: "Q4 e-tron",
      price: "$49,800",
      specs: "265 mi range • Compact luxury SUV",
      image: "/cars/audi/q4-e-tron.png",
    },
    {
      id: "q8-e-tron",
      name: "Q8 e-tron",
      price: "$74,400",
      specs: "285 mi range • Flagship luxury SUV",
      image: "/cars/audi/q8-e-tron.png",
    },
    {
      id: "e-tron-gt",
      name: "e-tron GT",
      price: "$106,500",
      specs: "238 mi range • Gran Turismo",
      image: "/cars/audi/e-tron-gt.png",
    },
    {
      id: "rs-e-tron-gt",
      name: "RS e-tron GT",
      price: "$147,000",
      specs: "232 mi range • Performance flagship",
      image: "/cars/audi/rs-e-tron-gt.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#bb0a30]/30 via-[#0a0a0a]/60 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[url('/cars/audi/e-tron-gt.png')] bg-center bg-cover opacity-40" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              Audi
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Vorsprung durch Technik
            </p>
          </motion.div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Electric Models
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/cars/audi/${model.id}`}>
                <div className="group bg-gradient-to-br from-[#12182a] to-[#0d1220] rounded-2xl overflow-hidden border border-gray-800/50 hover:border-[#bb0a30]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#bb0a30]/20">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={model.image}
                      alt={model.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1220] via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {model.name}
                    </h3>
                    <p className="text-[#bb0a30] font-semibold text-lg mb-2">
                      Starting at {model.price}
                    </p>
                    <p className="text-gray-400">{model.specs}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <Link
          href="/cars"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to All Brands
        </Link>
      </div>
    </main>
  );
}

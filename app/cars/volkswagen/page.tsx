"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function VolkswagenPage() {
  const models = [
    {
      id: "id4",
      name: "ID.4",
      price: "$38,995",
      specs: "275 mi range • AWD available",
      image: "/cars/volkswagen/id4.png",
    },
    {
      id: "id-buzz",
      name: "ID.Buzz",
      price: "$59,995",
      specs: "234 mi range • Iconic design",
      image: "/cars/volkswagen/id-buzz.png",
    },
    {
      id: "id7",
      name: "ID.7",
      price: "$50,495",
      specs: "340 mi range • Flagship sedan",
      image: "/cars/volkswagen/id7.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001e50]/30 via-[#0a0a0a]/60 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[url('/cars/volkswagen/id4.png')] bg-center bg-cover opacity-40" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              Volkswagen
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Electric for All
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/cars/volkswagen/${model.id}`}>
                <div className="group bg-gradient-to-br from-[#12182a] to-[#0d1220] rounded-2xl overflow-hidden border border-gray-800/50 hover:border-[#001e50]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#001e50]/20">
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
                    <p className="text-[#001e50] font-semibold text-lg mb-2">
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

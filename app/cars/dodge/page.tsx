"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function DodgePage() {
  const models = [
    {
      id: "dodge-charger-daytona",
      name: "Dodge Charger Daytona",
      year: "2024",
      price: "From $59,595",
      type: "ELECTRIC MUSCLE CAR",
      tag: "EV",
      description:
        "The first electric muscle car. Dodge brings raw American power to the EV era with the Banshee powertrain and Fratzonic exhaust.",
      range: "317 mi",
      acceleration: "3.3s",
      power: "496-670 hp",
      image: "/cars/dodge/charger-daytona.png",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="CARS" />

      {/* Hero Stats Bar */}
      <div className="pt-24 pb-8 px-6 md:px-12 border-b border-[#1a2235]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
          <div>
            <span className="text-4xl md:text-5xl font-light text-[#e8edf5]">1</span>
            <p className="text-sm text-[#6b7a94] mt-1">Model Available</p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-light text-[#e8edf5]">317 mi</span>
            <p className="text-sm text-[#6b7a94] mt-1">Max Range</p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-light text-[#e8edf5]">3.3s</span>
            <p className="text-sm text-[#6b7a94] mt-1">Fastest 0-60</p>
          </div>
          <div>
            <span className="text-4xl md:text-5xl font-light text-[#e8edf5]">Banshee</span>
            <p className="text-sm text-[#6b7a94] mt-1">Powertrain</p>
          </div>
        </div>
      </div>

      {/* Back Link & Brand Header */}
      <div className="px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/cars"
            className="inline-flex items-center gap-2 text-[#6b7a94] hover:text-[#e8edf5] transition-colors mb-8"
          >
            <span>&larr;</span>
            <span>Back to All Cars</span>
          </Link>

          <div className="flex items-center gap-6 mb-6">
            <div className="w-32 h-24 bg-gradient-to-br from-red-900/20 to-[#0d1420] rounded-xl flex items-center justify-center border border-[#1a2235]">
              <span className="text-[#BA0C2F] font-bold text-lg tracking-wide">DODGE</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5]">Dodge</h1>
              <p className="text-[#6b7a94] mt-1">Muscle Meets Electric.</p>
            </div>
          </div>

          <p className="text-[#8a919e] max-w-3xl leading-relaxed">
            Dodge rewrites the rules with the Charger Daytona &mdash; the world&apos;s first
            electric muscle car. With the Banshee powertrain delivering up to 670 horsepower
            and the innovative Fratzonic chambered exhaust, Dodge proves that electrification
            amplifies the muscle car experience.
          </p>
        </div>
      </div>

      {/* Models Section */}
      <div className="px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-[#e8edf5] mb-8">All Dodge EV Models</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <div
                key={model.id}
                className="group bg-[#0d1420] rounded-2xl overflow-hidden border border-[#1a2235] hover:border-[#2a3a55] transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-red-900/20 to-[#0d1420] overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-r from-red-900/40 to-red-800/30 text-[#BA0C2F] text-[10px] font-bold px-3 py-1 rounded border border-red-700/20">
                      DODGE
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 z-10">
                    <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#1a2235] text-[#4a90d9]">
                      {model.tag}
                    </span>
                  </div>
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1420] via-transparent to-transparent" />
                  <p className="absolute bottom-4 left-4 text-[9px] text-[#6b7a94] uppercase tracking-wider">
                    {model.type}
                  </p>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-medium text-[#e8edf5] mb-1">{model.name}</h3>
                  <p className="text-[#4a90d9] text-sm mb-3">
                    {model.year} &bull; {model.price}
                  </p>
                  <p className="text-[#6b7a94] text-sm mb-4 line-clamp-2">{model.description}</p>

                  <div className="grid grid-cols-2 gap-3 border-t border-[#1a2235] pt-4">
                    <div>
                      <span className="text-[#e8edf5] font-medium text-sm">{model.price}</span>
                      <p className="text-[9px] text-[#6b7a94]">Starting Price</p>
                    </div>
                    <div>
                      <span className="text-[#e8edf5] font-medium text-sm">{model.range}</span>
                      <p className="text-[9px] text-[#6b7a94]">Range</p>
                    </div>
                    <div>
                      <span className="text-[#e8edf5] font-medium text-sm">{model.acceleration}</span>
                      <p className="text-[9px] text-[#6b7a94]">0-60 mph</p>
                    </div>
                    <div>
                      <span className="text-[#e8edf5] font-medium text-sm">{model.power}</span>
                      <p className="text-[9px] text-[#6b7a94]">Power</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#1a2235]">
                    <Link
                      href={`/compare-evs?cars=${model.id}`}
                      className="text-[#4a90d9] text-sm font-medium group-hover:text-[#6ba5e7] transition-colors"
                    >
                      Compare &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#111927] to-[#0d1420] rounded-2xl p-10 border border-[#1a2235]">
            <h2 className="text-3xl font-light text-[#e8edf5] mb-4">
              Own a Dodge? Protect Your Investment
            </h2>
            <p className="text-[#8a919e] text-lg mb-8 max-w-2xl">
              Our premium ceramic coating and PPF services keep your Dodge looking showroom-new for years.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/deals"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
              >
                Find Local Deals <span>&rsaquo;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

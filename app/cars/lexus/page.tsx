"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import BrandHubSections from "../../components/BrandHubSections";

export default function LexusBrand() {
  const models = [
    {
      name: "RZ 450e",
      slug: "rz-450e",
      image: "/cars/lexus/rz-450e.png",
      startingPrice: "$55,150",
      range: "266 miles",
      acceleration: "4.8s 0-60",
      topSpeed: "130 mph",
      description: "Lexus&apos; first dedicated electric vehicle. Crafted with precision and featuring the innovative DIRECT4 all-wheel drive system."
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation activeItem="CARS" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <Link href="/cars" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Brands
          </Link>

          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
              <span className="text-[#c4a052] font-bold text-2xl tracking-tight">LEXUS</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Lexus</h1>
              <p className="text-slate-400">Electric Vehicles &bull; Founded 1989 &bull; Nagoya, Japan</p>
            </div>
          </div>

          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Lexus brings its renowned craftsmanship and attention to detail to the electric era. The RZ 450e combines luxury refinement with cutting-edge electric technology, featuring the innovative DIRECT4 all-wheel drive system for exceptional handling.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">1</div>
              <div className="text-sm text-slate-400">Models Available</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">266 mi</div>
              <div className="text-sm text-slate-400">Max Range</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">4.8s</div>
              <div className="text-sm text-slate-400">Fastest 0-60</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">DIRECT4</div>
              <div className="text-sm text-slate-400">AWD System</div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Lexus Models</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <Link
                key={model.slug}
                href={`/cars/lexus/${model.slug}`}
                className="group bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <Image src={model.image} alt={`Lexus ${model.name}`} fill className="object-cover" />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">Lexus</div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Lexus {model.name}</h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">{model.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <div className="text-xs text-slate-500">Starting at</div>
                      <div className="text-emerald-400 font-semibold">{model.startingPrice}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Range</div>
                      <div className="text-white font-semibold">{model.range}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">0-60 mph</div>
                      <div className="text-white font-semibold">{model.acceleration}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">Top Speed</div>
                      <div className="text-white font-semibold">{model.topSpeed}</div>
                    </div>
                  </div>

                  <div className="flex items-center text-emerald-400 text-sm font-medium">
                    View Details
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Lexus Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-amber-900/20 to-slate-800/50 rounded-3xl p-8 md:p-12 border border-amber-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">Why Choose Lexus?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Crafted Luxury</h3>
                <p className="text-slate-400 text-sm">Meticulous attention to detail and hand-crafted quality that defines the Lexus ownership experience.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">DIRECT4 AWD</h3>
                <p className="text-slate-400 text-sm">Innovative all-wheel drive system independently controls front and rear motors for optimal grip.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Lexus Safety System+</h3>
                <p className="text-slate-400 text-sm">Advanced safety features including pre-collision system, lane tracing, and intelligent high beams.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl p-8 md:p-12 border border-emerald-500/20">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Own a Lexus? Protect Your Investment</h2>
              <p className="text-slate-300 mb-6">Our premium ceramic coating and PPF services keep your Lexus looking showroom-new for years.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/care" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
                  Explore Care Services
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-colors">
                  EV Care Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    
      {/* You Might Also Like */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-white mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/cars/genesis" className="block px-6 py-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all text-center">
                <div className="text-white font-medium mb-1">Genesis</div>
                <div className="text-emerald-400 text-sm">View Models →</div>
              </Link>
              <Link href="/cars/bmw" className="block px-6 py-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all text-center">
                <div className="text-white font-medium mb-1">BMW</div>
                <div className="text-emerald-400 text-sm">View Models →</div>
              </Link>
              <Link href="/cars/mercedes" className="block px-6 py-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all text-center">
                <div className="text-white font-medium mb-1">Mercedes</div>
                <div className="text-emerald-400 text-sm">View Models →</div>
              </Link>
              <Link href="/cars/acura" className="block px-6 py-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all text-center">
                <div className="text-white font-medium mb-1">Acura</div>
                <div className="text-emerald-400 text-sm">View Models →</div>
              </Link>
          </div>
        </div>
      </section>


      <BrandHubSections brandSlug="lexus" />

</main>
  );
}

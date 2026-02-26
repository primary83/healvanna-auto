"use client";

import Link from "next/link";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function SubaruBrand() {
  const models = [
    {
      name: "Solterra",
      slug: "solterra",
      image: "/cars/subaru/solterra.png",
      startingPrice: "$39,945",
      range: "227 miles",
      acceleration: "6.5s 0-60",
      topSpeed: "100 mph",
      description: "Subaru&apos;s first all-electric SUV combines symmetrical AWD heritage with zero-emission driving for outdoor adventures."
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navigation activeItem="CARS" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <Link href="/cars" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Brands
          </Link>

          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center p-3">
              <span className="text-[#003C82] font-bold text-2xl tracking-tight">SUBARU</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Subaru</h1>
              <p className="text-slate-400">Electric Vehicles &bull; Founded 1953 &bull; Tokyo, Japan</p>
            </div>
          </div>

          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Subaru extends its legendary all-wheel drive capability into the electric future with the Solterra. Built for adventure-seekers who want to explore without compromise, combining Subaru&apos;s rugged heritage with zero-emission driving.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">1</div>
              <div className="text-sm text-slate-400">Models Available</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">227 mi</div>
              <div className="text-sm text-slate-400">Max Range</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">6.5s</div>
              <div className="text-sm text-slate-400">Fastest 0-60</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
              <div className="text-2xl font-bold text-emerald-400">S-AWD</div>
              <div className="text-sm text-slate-400">Symmetrical AWD</div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Subaru Models</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
              <Link
                key={model.slug}
                href={`/cars/subaru/${model.slug}`}
                className="group bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300"
              >
                <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  <Image src={model.image} alt={`Subaru ${model.name}`} fill className="object-cover" />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">Subaru</div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Subaru {model.name}</h3>
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

      {/* Why Subaru Section */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/20 to-slate-800/50 rounded-3xl p-8 md:p-12 border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">Why Choose Subaru?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Symmetrical AWD</h3>
                <p className="text-slate-400 text-sm">Legendary all-wheel drive heritage adapted for the electric era, providing confident traction in all conditions.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Adventure Ready</h3>
                <p className="text-slate-400 text-sm">8.3 inches of ground clearance and X-MODE for capable off-road performance.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">EyeSight Safety</h3>
                <p className="text-slate-400 text-sm">Award-winning driver assistance with adaptive cruise, pre-collision braking, and lane centering.</p>
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
              <h2 className="text-2xl font-bold text-white mb-4">Own a Subaru? Protect Your Investment</h2>
              <p className="text-slate-300 mb-6">Our premium ceramic coating and PPF services keep your Subaru looking showroom-new for years.</p>
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
    </main>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import ChargingSection from "../../../components/ChargingSection";
import MaintenanceSchedule from "../../../components/MaintenanceSchedule";
import Navigation from "../../../components/Navigation";

export default function HyundaiIoniq5Page() {
  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-[#6b7a94]">
            <Link href="/cars" className="hover:text-[#00287a] transition-colors">Cars</Link>
            <span>/</span>
            <Link href="/cars/hyundai" className="hover:text-[#00287a] transition-colors">Hyundai</Link>
            <span>/</span>
            <span className="text-[#e8edf5]">Ioniq 5</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-light mb-4">Hyundai Ioniq 5</h1>
            <p className="text-[#8a9bb5] text-lg mb-8 leading-relaxed">
              The award-winning electric crossover that redefined EV design. Retro-futuristic styling 
              meets cutting-edge 800V technology for ultra-fast charging and exceptional performance.
            </p>
            
            <div className="flex gap-8 mb-8">
              <div>
                <div className="text-3xl font-light text-[#00287a]">$44,900</div>
                <div className="text-sm text-[#6b7a94]">Starting Price</div>
              </div>
              <div>
                <div className="text-3xl font-light">303 mi</div>
                <div className="text-sm text-[#6b7a94]">EPA Range</div>
              </div>
              <div>
                <div className="text-3xl font-light">5.0s</div>
                <div className="text-sm text-[#6b7a94]">0-60 mph</div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.hyundaiusa.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#00287a] text-white rounded-lg font-medium hover:bg-[#003399] transition-colors flex items-center gap-2">
                Configure on Hyundai.com
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link href="/cars/hyundai" className="px-6 py-3 border border-[#6b7a94] text-[#e8edf5] rounded-lg font-medium hover:bg-white/5 transition-colors">
                View All Hyundai Models
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image src="/cars/hyundai/ioniq-5.png" alt="Hyundai Ioniq 5" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Specs */}
      {/* Charging Compatibility */}
      <ChargingSection brand="Hyundai" model="Ioniq 5" slug="hyundai/ioniq-5" range={303} theme="sapphire" />
      <MaintenanceSchedule brand="Hyundai" model="Ioniq 5" theme="sapphire" />

      <section className="py-16 px-6 md:px-12 bg-[#0d1424]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light mb-8">Specifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Range", value: "303 mi" },
              { label: "0-60 mph", value: "5.0s" },
              { label: "Horsepower", value: "320 hp" },
              { label: "Charging", value: "800V / 18 min" },
            ].map((spec) => (
              <div key={spec.label} className="p-5 rounded-xl bg-[rgba(15,22,40,0.5)] border border-[rgba(0,40,122,0.1)]">
                <div className="text-2xl font-light text-[#00287a] mb-1">{spec.value}</div>
                <div className="text-sm text-[#6b7a94]">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Hyundai */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/cars/hyundai" className="inline-flex items-center gap-2 text-[#00287a] hover:gap-3 transition-all">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Hyundai Models
          </Link>
        </div>
      </section>

      {/* Footer */}
      
      {/* Compare With */}
      <section className="px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold text-white mb-4">Compare With Competitors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <Link href="/cars/tesla/model-y" className="block px-5 py-3.5 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 transition-all">
                <div className="text-white font-medium text-sm">Tesla Model Y</div>
                <div className="text-emerald-400 text-xs mt-1">Compare →</div>
              </Link>
              <Link href="/cars/kia/ev6" className="block px-5 py-3.5 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 transition-all">
                <div className="text-white font-medium text-sm">Kia EV6</div>
                <div className="text-emerald-400 text-xs mt-1">Compare →</div>
              </Link>
              <Link href="/cars/volkswagen/id4" className="block px-5 py-3.5 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-emerald-500/30 transition-all">
                <div className="text-white font-medium text-sm">VW ID.4</div>
                <div className="text-emerald-400 text-xs mt-1">Compare →</div>
              </Link>
          </div>
          <div className="mt-4">
            <Link href="/cars/hyundai" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
              ← All Hyundai Models
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#0a0f1a] py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="max-w-7xl mx-auto text-center text-[#6b7a94] text-sm">
          © 2026 Healvanna Auto. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

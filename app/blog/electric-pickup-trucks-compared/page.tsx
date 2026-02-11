"use client";

import Link from "next/link";
import Image from "next/image";

export default function ElectricPickupTrucksCompared() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Comparison</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Electric Pickup Trucks Compared: Cybertruck vs Rivian R1T vs F-150 Lightning
            </h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>14 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/electric-pickup-trucks-compared.png" alt="Three electric pickup trucks parked side by side in a mountain setting" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The electric pickup truck segment has gone from concept to crowded in just a few years. The Tesla Cybertruck, Rivian R1T, and Ford F-150 Lightning represent three fundamentally different approaches to electrifying America&apos;s favorite vehicle type. Here&apos;s how they compare across the metrics that matter most to truck buyers.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">At a Glance</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white">Spec</th>
                    <th className="text-left py-3 px-4 text-white">Cybertruck</th>
                    <th className="text-left py-3 px-4 text-white">Rivian R1T</th>
                    <th className="text-left py-3 pl-4 text-white">F-150 Lightning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 pr-4 text-white font-medium">Starting Price</td>
                    <td className="py-3 px-4">~$80,000</td>
                    <td className="py-3 px-4">~$73,000</td>
                    <td className="py-3 pl-4">~$52,000</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 pr-4 text-white font-medium">Range (max)</td>
                    <td className="py-3 px-4">340 miles</td>
                    <td className="py-3 px-4">328 miles</td>
                    <td className="py-3 pl-4">320 miles</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 pr-4 text-white font-medium">Towing Capacity</td>
                    <td className="py-3 px-4">11,000 lbs</td>
                    <td className="py-3 px-4">11,000 lbs</td>
                    <td className="py-3 pl-4">10,000 lbs</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 pr-4 text-white font-medium">Payload</td>
                    <td className="py-3 px-4">2,500 lbs</td>
                    <td className="py-3 px-4">1,760 lbs</td>
                    <td className="py-3 pl-4">2,000 lbs</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 pr-4 text-white font-medium">0-60 mph</td>
                    <td className="py-3 px-4">2.6 sec (Beast)</td>
                    <td className="py-3 px-4">3.0 sec</td>
                    <td className="py-3 pl-4">4.0 sec</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 pr-4 text-white font-medium">Bed Length</td>
                    <td className="py-3 px-4">6.0 ft</td>
                    <td className="py-3 px-4">4.5 ft</td>
                    <td className="py-3 pl-4">5.5 ft</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-white font-medium">Charging</td>
                    <td className="py-3 px-4">NACS (Supercharger)</td>
                    <td className="py-3 px-4">NACS adapter included</td>
                    <td className="py-3 pl-4">NACS adapter included</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Tesla Cybertruck</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-emerald-400 font-semibold mb-3">Strengths</h4>
              <ul className="space-y-2 text-slate-300 text-sm mb-4">
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Stainless steel exoskeleton is virtually dent-proof and scratch-resistant</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Most powerful option with the tri-motor Beast variant</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Native Supercharger access — largest fast-charging network</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Best payload capacity of the three</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Steer-by-wire with rear-wheel steering for tight maneuvers</li>
              </ul>
              <h4 className="text-red-400 font-semibold mb-3">Weaknesses</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start"><span className="text-red-400 mr-2">-</span>Polarizing design — you either love it or hate it</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">-</span>Stainless steel body shows fingerprints and is difficult to wrap or paint</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">-</span>No traditional paint means no color options (without aftermarket wrap)</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">-</span>Expensive — the base dual-motor starts around $80K</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">-</span>Large dimensions make it challenging in parking garages</li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Rivian R1T</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-emerald-400 font-semibold mb-3">Strengths</h4>
              <ul className="space-y-2 text-slate-300 text-sm mb-4">
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Best off-road capability — quad-motor with tank turn capability</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Gear tunnel provides unique enclosed storage between cab and bed</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Pull-out camp kitchen accessory for outdoor enthusiasts</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Most refined interior quality and ride comfort</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Adventure-oriented brand with loyal community</li>
              </ul>
              <h4 className="text-red-400 font-semibold mb-3">Weaknesses</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start"><span className="text-red-400 mr-2">-</span>Smallest bed (4.5 ft) limits traditional truck utility</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">-</span>Rivian&apos;s service network is still growing — fewer locations than Tesla or Ford</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">-</span>Higher price point with fewer trim options</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">-</span>Software updates have been slower to roll out compared to Tesla</li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Ford F-150 Lightning</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-emerald-400 font-semibold mb-3">Strengths</h4>
              <ul className="space-y-2 text-slate-300 text-sm mb-4">
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Most affordable entry point — starts under $55K</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Massive frunk (400 liters) with drain plug — doubles as a cooler</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Ford&apos;s dealer network means easy service access nationwide</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Pro Power Onboard — up to 9.6kW of onboard power for tools and equipment</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Most familiar truck — drives and feels like a traditional F-150</li>
              </ul>
              <h4 className="text-red-400 font-semibold mb-3">Weaknesses</h4>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start"><span className="text-red-400 mr-2">-</span>Heaviest of the three — impacts efficiency and range under load</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">-</span>Range drops significantly when towing (40-50% reduction)</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">-</span>Slowest acceleration and least sporty driving dynamics</li>
                <li className="flex items-start"><span className="text-red-400 mr-2">-</span>Interior tech feels a generation behind Tesla and Rivian</li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Which One Should You Buy?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Choose the Cybertruck if:</strong> You want maximum performance and towing capability, love the futuristic design, and are already in the Tesla ecosystem. Best for buyers who prioritize tech, speed, and the Supercharger network.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Choose the Rivian R1T if:</strong> You&apos;re an outdoor enthusiast who wants a capable off-roader with the most refined interior. Best for buyers who value adventure capability, build quality, and unique features like the gear tunnel.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Choose the F-150 Lightning if:</strong> You want the most practical, affordable entry into electric trucks with the peace of mind of Ford&apos;s nationwide service network. Best for traditional truck buyers transitioning to electric who need a work truck with Pro Power Onboard.</div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              All three trucks are genuine, capable electric pickups — but they serve different buyers. The Cybertruck pushes boundaries with raw performance and unconventional design. The R1T is the adventure vehicle that happens to be a truck. The Lightning is the sensible choice that makes electric accessible to mainstream truck buyers.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Whichever you choose, protecting your investment with proper paint care, ceramic coating, and regular maintenance will preserve its value for years. Electric trucks are built to last — treat the exterior with the same attention.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Protect Your Electric Truck</h3>
            <p className="text-slate-300 mb-6">Find ceramic coating, PPF, and detailing specialists experienced with electric trucks in your area.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Detailing Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          {/* Related Articles */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/ev-resale-value-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Resale Value: Which Cars Hold Value Best?</p>
              </Link>
              <Link href="/blog/ev-paint-protection-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Protect Your EV&apos;s Paint</p>
              </Link>
              <Link href="/blog/ev-road-trip-accessories" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Best EV Road Trip Accessories</p>
              </Link>
            </div>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Electric Trucks</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Cybertruck</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Rivian R1T</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">F-150 Lightning</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Comparison</span>
            </div>
            <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

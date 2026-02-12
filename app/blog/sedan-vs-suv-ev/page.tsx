"use client";

import Link from "next/link";
import Image from "next/image";

export default function SedanVsSuvEV() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Comparison</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Choosing Between Sedan and SUV EVs</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>12 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/sedan-vs-suv-ev.png" alt="Side by side comparison of a modern electric sedan and electric SUV in silver" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The EV market has matured enough that you can now get excellent electric sedans and SUVs at similar price points. But the choice between them affects more than just cargo space — it impacts range, efficiency, charging costs, insurance, and how the car handles. Here&apos;s an objective breakdown to help you decide.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Range and Efficiency</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">This is where sedans have a clear, physics-based advantage. A lower, more aerodynamic profile means less energy is wasted pushing air out of the way.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 pr-4 text-white font-semibold">Metric</th>
                      <th className="text-left py-3 pr-4 text-white font-semibold">EV Sedan</th>
                      <th className="text-left py-3 text-white font-semibold">EV SUV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Typical EPA range</td><td className="py-3 pr-4 text-emerald-400">300-400 miles</td><td className="py-3">250-330 miles</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Efficiency</td><td className="py-3 pr-4 text-emerald-400">3.5-4.5 mi/kWh</td><td className="py-3">2.8-3.5 mi/kWh</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Drag coefficient (Cd)</td><td className="py-3 pr-4 text-emerald-400">0.20-0.23</td><td className="py-3">0.26-0.32</td></tr>
                    <tr><td className="py-3 pr-4">Annual charging cost (12k mi)</td><td className="py-3 pr-4 text-emerald-400">~$400-500</td><td className="py-3">~$500-650</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-sm mt-4">With identical battery sizes, a sedan typically gets 15-25% more range than an SUV. That translates to fewer charging stops on road trips and lower annual energy costs.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Space and Practicality</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">This is where SUVs earn their premium. The taller body and flat EV floor create genuinely useful interior volume.</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Cargo space</strong> — SUV: 30-75 cu ft with seats folded. Sedan: 12-22 cu ft trunk. If you regularly haul bikes, strollers, furniture, or sports equipment, an SUV is meaningfully more capable.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Rear seat headroom</strong> — SUVs offer 2-4 inches more rear headroom, which matters for adults in the back seat. EV sedans with sloped rooflines can feel tight for taller passengers.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Entry and exit</strong> — SUVs have a higher seating position, making it easier to get in and out — especially for older passengers or those with mobility issues.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Frunk storage</strong> — Most EV sedans and SUVs have front trunks, but SUV frunks tend to be larger due to the taller hood profile.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Driving Dynamics</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Center of gravity</strong> — Both body styles benefit from the heavy battery pack mounted low in the floor. However, sedans sit even lower, giving them a slight handling advantage in corners and less body roll.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Acceleration</strong> — With comparable powertrains, sedans are typically 200-500 lbs lighter than SUVs, resulting in slightly quicker 0-60 times. The difference is small but noticeable.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Ride comfort</strong> — SUVs generally have more suspension travel, which can smooth out rough roads better. Sedans offer a more connected, sporty feel.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Ground clearance</strong> — SUVs offer 7-9 inches vs 5-6 for sedans. This matters for gravel roads, steep driveways, and snow. Some EV SUVs offer adjustable air suspension.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Cost Comparison</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Cost Category</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">EV Sedan</th>
                    <th className="text-left py-3 text-white font-semibold">EV SUV</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Starting MSRP (mid-range)</td><td className="py-3 pr-4 text-emerald-400">$35,000-$45,000</td><td className="py-3">$40,000-$55,000</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Insurance (annual avg.)</td><td className="py-3 pr-4 text-emerald-400">$1,800-$2,200</td><td className="py-3">$2,000-$2,600</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Tires (per set)</td><td className="py-3 pr-4 text-emerald-400">$600-$900</td><td className="py-3">$800-$1,200</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Charging (annual, 12k mi)</td><td className="py-3 pr-4 text-emerald-400">~$450</td><td className="py-3">~$575</td></tr>
                  <tr><td className="py-3 pr-4">5-year total cost of ownership</td><td className="py-3 pr-4 text-emerald-400">$48,000-$58,000</td><td className="py-3">$55,000-$70,000</td></tr>
                </tbody>
              </table>
              <p className="text-slate-400 text-sm mt-4">EV sedans are cheaper to buy, insure, and operate. An SUV adds roughly $5,000-$12,000 to the 5-year total cost of ownership. Whether the extra utility justifies that premium depends on your needs.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Popular Models Compared</h2>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Top EV Sedans (2026)</h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Tesla Model 3</strong> — 341 miles range, 3.1s 0-60 (Performance), from $38,990. The efficiency benchmark.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Hyundai Ioniq 6</strong> — 361 miles range, ultra-low 0.21 Cd, from $38,615. Best-in-class efficiency.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">BMW i4</strong> — 301 miles range, premium interior, from $52,200. The luxury sport sedan choice.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Mercedes EQE</strong> — 305 miles range, MBUX Hyperscreen available, from $74,900. Maximum luxury.</div></li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Top EV SUVs (2026)</h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Tesla Model Y</strong> — 310 miles range, 76 cu ft cargo, from $44,990. The best-selling EV globally for a reason.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Hyundai Ioniq 5</strong> — 303 miles range, 800V architecture for ultra-fast charging, from $42,745. 10-80% in 18 minutes.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Kia EV6</strong> — 310 miles range, GT version does 0-60 in 3.4s, from $42,600. Performance meets practicality.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Rivian R1S</strong> — 321 miles range, true off-road capability, from $75,900. The adventure SUV.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Who Should Choose a Sedan?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Commuters prioritizing efficiency</strong> — If range per dollar matters most, sedans deliver 15-25% more miles per kWh.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Drivers who value handling</strong> — Lower center of gravity and lighter weight create a more engaging driving experience.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Budget-conscious buyers</strong> — Lower purchase price, insurance, tires, and energy costs add up to meaningful savings.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Couples or small families</strong> — If you don&apos;t regularly need to haul large items, a sedan&apos;s trunk is sufficient for daily life.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Who Should Choose an SUV?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Families with kids</strong> — Car seats, strollers, sports gear, and road trip luggage need the extra cargo volume.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">People in snowy or rural areas</strong> — Higher ground clearance and available AWD make SUVs more capable in adverse conditions.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Those who tow occasionally</strong> — Some EV SUVs can tow 3,500-7,700 lbs. Most EV sedans aren&apos;t rated for towing at all.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Passengers with mobility needs</strong> — The higher seating position and wider door openings make entry and exit easier.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Verdict</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              If maximum range, efficiency, and driving dynamics are your priorities, an EV sedan is the better choice. If you need cargo space, higher ground clearance, or regularly carry passengers who appreciate easier entry, an SUV justifies the extra cost and reduced efficiency.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              The good news is that both body styles have excellent options in 2026. The EV market has moved past the era of limited choices — you can now pick the form factor that fits your life and still get a great electric car.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Explore EV Models</h3>
            <p className="text-slate-300 mb-6">Browse our comprehensive database of electric vehicles with detailed specs, pricing, and comparisons.</p>
            <Link href="/cars" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse All EVs
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or find EV service providers in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/best-electric-suvs-families-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Best Electric SUVs for Families in 2026</p></Link>
              <Link href="/blog/tesla-model-y-vs-ioniq-5" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Tesla Model Y vs Hyundai Ioniq 5</p></Link>
              <Link href="/blog/ev-vs-gas-maintenance-costs" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV vs Gas Maintenance Costs</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Sedan</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV SUV</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Comparison</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Electric Vehicles</span>
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

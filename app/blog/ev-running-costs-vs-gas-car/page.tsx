"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function EvRunningCostsVsGasCar() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">EV Ownership</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">EV Running Costs vs Gas Car: The Real Numbers for 2026</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>March 8, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>8 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/blog/ev-running-costs-vs-gas.png" alt="EV running costs compared to gas car with 5-year cost breakdown" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">Everyone says EVs are cheaper to run. But how much cheaper, exactly? And does the math still hold up when you factor in insurance, depreciation, and everything else that goes into owning a car?</p>

            <p className="text-slate-300 leading-relaxed mb-6">We&apos;ve done the math &mdash; using real 2026 numbers for Florida drivers &mdash; so you don&apos;t have to.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Comparison: Tesla Model 3 vs Toyota Camry</h2>

            <p className="text-slate-300 leading-relaxed mb-6">We&apos;re going to compare two cars that occupy the same general market space: a <strong className="text-emerald-400">Tesla Model 3 RWD</strong> (one of the most popular EVs in Florida) against a <strong className="text-emerald-400">Toyota Camry LE</strong> (the best-selling mid-size sedan in America). Both are reliable, comfortable, and sensibly priced.</p>

            <p className="text-slate-300 leading-relaxed mb-6">We&apos;ll run the numbers over <strong className="text-emerald-400">5 years / 60,000 miles</strong> &mdash; a realistic ownership window for most drivers.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">1. Purchase Price</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50"></th>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50">Tesla Model 3 RWD</th>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50">Toyota Camry LE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300">MSRP</td>
                    <td className="px-4 py-3 text-slate-300">$38,990</td>
                    <td className="px-4 py-3 text-slate-300">$28,400</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300">Federal Tax Credit</td>
                    <td className="px-4 py-3 text-slate-300">-$7,500</td>
                    <td className="px-4 py-3 text-slate-300">$0</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">Effective Price</strong></td>
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">$31,490</strong></td>
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">$28,400</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">The gap after the credit is just $3,090. That&apos;s a much smaller difference than most people expect.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">2. Fuel Costs</h2>

            <p className="text-slate-300 leading-relaxed mb-6">This is where EVs start pulling away.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Florida&apos;s average electricity rate is around <strong className="text-emerald-400">$0.13 per kWh</strong>. The Tesla Model 3 uses about <strong className="text-emerald-400">25 kWh per 100 miles</strong>, meaning it costs roughly <strong className="text-emerald-400">$3.25 per 100 miles</strong> to run on home electricity.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The Toyota Camry averages about <strong className="text-emerald-400">32 MPG combined</strong>. With Florida gas averaging around <strong className="text-emerald-400">$3.20 per gallon</strong> in 2026, that&apos;s <strong className="text-emerald-400">$10.00 per 100 miles</strong>.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Over 60,000 miles:</p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50"></th>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50">Tesla Model 3</th>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50">Toyota Camry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300">Cost per 100 miles</td>
                    <td className="px-4 py-3 text-slate-300">$3.25</td>
                    <td className="px-4 py-3 text-slate-300">$10.00</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">5-year fuel cost</strong></td>
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">$1,950</strong></td>
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">$6,000</strong></td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">Savings</strong></td>
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">$4,050</strong></td>
                    <td className="px-4 py-3 text-slate-300">&mdash;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">If you charge at home most of the time &mdash; which most Florida EV owners do &mdash; this gap is real and consistent.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">3. Maintenance</h2>

            <p className="text-slate-300 leading-relaxed mb-6">EVs have no oil changes, no transmission fluid, no spark plugs, no timing belts, and far less brake wear (thanks to regenerative braking). The primary maintenance items are tire rotations, cabin air filters, and windshield washer fluid.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Industry data consistently shows EV owners spend roughly <strong className="text-emerald-400">40&ndash;50% less on maintenance</strong> than equivalent gas car owners.</p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50"></th>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50">Tesla Model 3</th>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50">Toyota Camry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300">Annual maintenance estimate</td>
                    <td className="px-4 py-3 text-slate-300">~$350</td>
                    <td className="px-4 py-3 text-slate-300">~$700</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">5-year maintenance cost</strong></td>
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">$1,750</strong></td>
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">$3,500</strong></td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">Savings</strong></td>
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">$1,750</strong></td>
                    <td className="px-4 py-3 text-slate-300">&mdash;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">Toyota&apos;s legendary reliability does narrow this gap compared to less reliable gas cars, but EVs still win on maintenance costs.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">4. Insurance</h2>

            <p className="text-slate-300 leading-relaxed mb-6">This is the one category where EVs can cost more. EVs are more expensive to repair after accidents (specialized parts, battery inspections), which pushes premiums higher.</p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50"></th>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50">Tesla Model 3</th>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50">Toyota Camry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300">Average annual premium (FL)</td>
                    <td className="px-4 py-3 text-slate-300">~$2,400</td>
                    <td className="px-4 py-3 text-slate-300">~$1,800</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">5-year insurance cost</strong></td>
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">$12,000</strong></td>
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">$9,000</strong></td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">Extra cost for EV</strong></td>
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">+$3,000</strong></td>
                    <td className="px-4 py-3 text-slate-300">&mdash;</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">Florida insurance rates are among the highest in the nation regardless of vehicle type, but the EV premium is real and worth budgeting for. Shopping around &mdash; especially with insurers who specialize in EVs &mdash; can help close this gap.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">5. Depreciation</h2>

            <p className="text-slate-300 leading-relaxed mb-6">This one is often overlooked. Depreciation is the single biggest cost of car ownership for most people.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Tesla Model 3s have historically held their value better than average, though the used EV market has softened somewhat in 2025-2026. The Camry is a depreciation champion among gas cars.</p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50"></th>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50">Tesla Model 3</th>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50">Toyota Camry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300">Estimated 5-year resale value</td>
                    <td className="px-4 py-3 text-slate-300">~$18,000</td>
                    <td className="px-4 py-3 text-slate-300">~$14,500</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300">Value lost from effective price</td>
                    <td className="px-4 py-3 text-slate-300">~$13,490</td>
                    <td className="px-4 py-3 text-slate-300">~$13,900</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">Roughly comparable &mdash; and actually a slight edge to the Tesla.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The 5-Year Total Cost of Ownership</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-800/50">
                  <tr>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50">Cost Category</th>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50">Tesla Model 3</th>
                    <th className="px-4 py-3 text-emerald-400 font-semibold border-b border-slate-700/50">Toyota Camry</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300">Effective purchase price</td>
                    <td className="px-4 py-3 text-slate-300">$31,490</td>
                    <td className="px-4 py-3 text-slate-300">$28,400</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300">Fuel (5 years)</td>
                    <td className="px-4 py-3 text-slate-300">$1,950</td>
                    <td className="px-4 py-3 text-slate-300">$6,000</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300">Maintenance (5 years)</td>
                    <td className="px-4 py-3 text-slate-300">$1,750</td>
                    <td className="px-4 py-3 text-slate-300">$3,500</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300">Insurance (5 years)</td>
                    <td className="px-4 py-3 text-slate-300">$12,000</td>
                    <td className="px-4 py-3 text-slate-300">$9,000</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300">Depreciation</td>
                    <td className="px-4 py-3 text-slate-300">$13,490</td>
                    <td className="px-4 py-3 text-slate-300">$13,900</td>
                  </tr>
                  <tr className="border-b border-slate-700/30">
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">TOTAL</strong></td>
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">$60,680</strong></td>
                    <td className="px-4 py-3 text-slate-300"><strong className="text-emerald-400">$60,800</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">Over five years, the Tesla Model 3 and Toyota Camry cost almost <strong className="text-emerald-400">exactly the same</strong> to own and operate &mdash; despite the Tesla being a more premium, tech-forward vehicle. Factor in that you&apos;ll never queue at a gas station again, and the EV starts looking very attractive.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What About Charging at Public Stations?</h2>

            <p className="text-slate-300 leading-relaxed mb-6">If you rely heavily on DC fast chargers rather than home charging, the fuel cost savings shrink. Public fast charging typically costs <strong className="text-emerald-400">$0.30&ndash;$0.50 per kWh</strong> at networks like Electrify America &mdash; roughly 3&ndash;4x home charging rates.</p>

            <p className="text-slate-300 leading-relaxed mb-6">For most Florida drivers who charge overnight at home, this isn&apos;t a concern. But if you live in an apartment without dedicated charging, it&apos;s worth factoring in before you decide.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400"><Link href="/ev-tools" className="text-emerald-400 hover:text-emerald-300">Use our EV Tools</Link></strong> to calculate your personal fuel savings based on your exact commute and charging situation.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Bigger Picture</h2>

            <p className="text-slate-300 leading-relaxed mb-6">The &ldquo;EVs are too expensive&rdquo; narrative is becoming less and less true. For Florida drivers with a home charger, the combination of low fuel costs, reduced maintenance, and strong resale value makes EVs genuinely competitive &mdash; often cheaper &mdash; over the life of the car.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The insurance premium is the one genuine headwind. But as more insurers build EV-specific products and repair costs normalize, that gap is likely to narrow over time.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Browse our <Link href="/ev-deals" className="text-emerald-400 hover:text-emerald-300">EV Deals page</Link> to see current pricing and incentives on the models we mentioned &mdash; updated regularly with the latest offers available to Florida buyers.</p>
          </article>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              <Link href="/blog?tag=ev-ownership" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">EV Ownership</Link>
              <Link href="/blog?tag=savings" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Savings</Link>
              <Link href="/blog?tag=cost-comparison" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Cost Comparison</Link>
            </div>
          </div>

          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}
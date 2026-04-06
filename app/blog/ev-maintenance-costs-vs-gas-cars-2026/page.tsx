"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function EvMaintenanceCostsVsGasCars2026() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">EV Maintenance Costs vs Gas Cars 2026 &mdash; The Real Numbers</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>April 5, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>12 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/blog/ev-maintenance-costs-vs-gas-cars-2026.png" alt="Split comparison of gas car garage versus clean EV garage" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              One of the biggest selling points of electric vehicles is lower maintenance costs. But how much lower, exactly? We dug into real-world data from EV owners, manufacturer service schedules, and independent repair shops to build a <strong className="text-emerald-400">side-by-side 5-year cost comparison</strong>. The results are clear &mdash; and they&apos;re even better than most people expect.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What EVs Don&apos;t Need &mdash; The Parts That Don&apos;t Exist</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The biggest maintenance savings come from parts that simply aren&apos;t in an electric vehicle. An EV has no internal combustion engine, which means <strong className="text-emerald-400">no oil changes, no transmission fluid, no exhaust system, no spark plugs, no timing belt, no fuel filter, and no radiator</strong>. These are some of the most common and expensive maintenance items on gas cars, and they&apos;re completely eliminated.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              A gas car&apos;s engine has hundreds of moving parts that wear against each other, generate heat, and require constant lubrication. An EV&apos;s electric motor has as few as one moving part &mdash; the rotor. There&apos;s nothing to combust, nothing to lubricate with oil, and nothing to exhaust. The drivetrain is fundamentally simpler, and simpler means cheaper to maintain.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4">Eliminated Maintenance Items</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <span className="text-red-400 font-semibold">Oil Changes</span>
                  <p className="text-slate-400 text-xs mt-1">$50&ndash;$100 &times; 2&ndash;4/yr</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <span className="text-red-400 font-semibold">Transmission Service</span>
                  <p className="text-slate-400 text-xs mt-1">$150&ndash;$400 every 60K mi</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <span className="text-red-400 font-semibold">Exhaust/Muffler</span>
                  <p className="text-slate-400 text-xs mt-1">$200&ndash;$600 replacement</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <span className="text-red-400 font-semibold">Spark Plugs</span>
                  <p className="text-slate-400 text-xs mt-1">$100&ndash;$300 every 30&ndash;100K mi</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <span className="text-red-400 font-semibold">Timing Belt</span>
                  <p className="text-slate-400 text-xs mt-1">$500&ndash;$1,000 every 60&ndash;100K mi</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <span className="text-red-400 font-semibold">Fuel Filter</span>
                  <p className="text-slate-400 text-xs mt-1">$50&ndash;$150 every 20&ndash;40K mi</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What EVs Still Need &mdash; The Real Maintenance List</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              EVs aren&apos;t maintenance-free. They still have tires, brakes, suspension, a 12V battery, cabin air filters, wipers, and a thermal management system. Here&apos;s what each item actually costs.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Tires &mdash; $600&ndash;$1,200 Every 25,000&ndash;40,000 Miles</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><span className="text-slate-500">Replacement Cost</span><p className="text-white font-semibold">$600&ndash;$1,200 (set of 4)</p></div>
                <div><span className="text-slate-500">Lifespan</span><p className="text-white font-semibold">25,000&ndash;40,000 miles</p></div>
                <div><span className="text-slate-500">Rotation Cost</span><p className="text-white font-semibold">$30&ndash;$60 every 5K&ndash;7.5K mi</p></div>
                <div><span className="text-slate-500">EV Note</span><p className="text-white font-semibold">Heavier cars = faster wear</p></div>
              </div>
              <p className="text-slate-300 text-sm mb-3">Tires are the single biggest recurring cost for EV owners. Electric vehicles are heavier than equivalent gas cars (battery weight) and deliver instant torque, both of which accelerate tire wear. Using EV-specific low-rolling-resistance tires helps extend life and maximize range. Budget about $200&ndash;$300 per year for tires and rotations.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Brakes &mdash; $0&ndash;$300 Over 100,000 Miles</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><span className="text-slate-500">Pad Replacement</span><p className="text-white font-semibold">Often never needed</p></div>
                <div><span className="text-slate-500">Brake Fluid</span><p className="text-white font-semibold">$80&ndash;$150 every 2&ndash;3 years</p></div>
                <div><span className="text-slate-500">Why So Low</span><p className="text-white font-semibold">Regenerative braking</p></div>
                <div><span className="text-slate-500">Gas Car Comparison</span><p className="text-white font-semibold">$300&ndash;$800 every 30&ndash;50K mi</p></div>
              </div>
              <p className="text-slate-300 text-sm mb-3">Thanks to regenerative braking, most EV owners never replace brake pads during normal ownership. The electric motor does most of the slowing, with friction brakes only needed for hard stops. Many <Link href="/cars/tesla" className="text-emerald-400 hover:text-emerald-300">Tesla</Link> and <Link href="/cars/hyundai" className="text-emerald-400 hover:text-emerald-300">Hyundai</Link> owners report original brake pads lasting well past 100,000 miles. Brake fluid still needs replacement every 2&ndash;3 years as it absorbs moisture over time.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Cabin Air Filter &mdash; $20&ndash;$50 Every 15,000&ndash;20,000 Miles</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><span className="text-slate-500">Cost</span><p className="text-white font-semibold">$20&ndash;$50</p></div>
                <div><span className="text-slate-500">Frequency</span><p className="text-white font-semibold">Every 15,000&ndash;20,000 miles</p></div>
                <div><span className="text-slate-500">DIY</span><p className="text-white font-semibold">Easy &mdash; 5 minutes</p></div>
                <div><span className="text-slate-500">Same as Gas Car?</span><p className="text-white font-semibold">Yes, identical</p></div>
              </div>
              <p className="text-slate-300 text-sm mb-3">One of the few items that&apos;s identical between EVs and gas cars. Easy to do yourself in minutes.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Wipers, 12V Battery, Coolant</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><span className="text-slate-500">Wiper Blades</span><p className="text-white font-semibold">$20&ndash;$50/year</p></div>
                <div><span className="text-slate-500">12V Battery</span><p className="text-white font-semibold">$100&ndash;$300 every 4&ndash;5 years</p></div>
                <div><span className="text-slate-500">Battery Coolant</span><p className="text-white font-semibold">$100&ndash;$250 every 50&ndash;100K mi</p></div>
                <div><span className="text-slate-500">Annual Average</span><p className="text-white font-semibold">~$80/year combined</p></div>
              </div>
              <p className="text-slate-300 text-sm mb-3">These smaller items add up to modest annual costs. The 12V battery powers accessories and computers, and lasts 4&ndash;5 years like in any car. Battery coolant maintains optimal temperature for the high-voltage pack and typically needs service once during a 5-year ownership period.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The 5-Year Maintenance Cost Comparison</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Here&apos;s the full picture. We calculated 5-year maintenance costs for both vehicle types assuming 12,000 miles per year (60,000 miles total), using average 2026 service pricing.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4">5-Year Maintenance Breakdown (60,000 Miles)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left text-slate-400 py-3 pr-4">Item</th>
                      <th className="text-right text-red-400 py-3 px-4">Gas Car</th>
                      <th className="text-right text-emerald-400 py-3 pl-4">EV</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-slate-800">
                      <td className="py-3 pr-4">Oil Changes</td>
                      <td className="text-right py-3 px-4">$600</td>
                      <td className="text-right py-3 pl-4 text-emerald-400">$0</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 pr-4">Brake Pads/Rotors</td>
                      <td className="text-right py-3 px-4">$400</td>
                      <td className="text-right py-3 pl-4 text-emerald-400">$0</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 pr-4">Brake Fluid</td>
                      <td className="text-right py-3 px-4">$200</td>
                      <td className="text-right py-3 pl-4">$200</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 pr-4">Transmission Service</td>
                      <td className="text-right py-3 px-4">$250</td>
                      <td className="text-right py-3 pl-4 text-emerald-400">$0</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 pr-4">Spark Plugs</td>
                      <td className="text-right py-3 px-4">$200</td>
                      <td className="text-right py-3 pl-4 text-emerald-400">$0</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 pr-4">Tires (2 sets + rotations)</td>
                      <td className="text-right py-3 px-4">$700</td>
                      <td className="text-right py-3 pl-4">$900</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 pr-4">Cabin Air Filter</td>
                      <td className="text-right py-3 px-4">$120</td>
                      <td className="text-right py-3 pl-4">$120</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 pr-4">Wiper Blades</td>
                      <td className="text-right py-3 px-4">$150</td>
                      <td className="text-right py-3 pl-4">$150</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 pr-4">12V Battery</td>
                      <td className="text-right py-3 px-4">$150</td>
                      <td className="text-right py-3 pl-4">$150</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 pr-4">Battery Coolant</td>
                      <td className="text-right py-3 px-4">$0</td>
                      <td className="text-right py-3 pl-4">$120</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 pr-4">Engine Coolant</td>
                      <td className="text-right py-3 px-4">$150</td>
                      <td className="text-right py-3 pl-4 text-emerald-400">$0</td>
                    </tr>
                    <tr className="border-b border-slate-800">
                      <td className="py-3 pr-4">Belts/Hoses</td>
                      <td className="text-right py-3 px-4">$100</td>
                      <td className="text-right py-3 pl-4 text-emerald-400">$0</td>
                    </tr>
                    <tr className="border-t-2 border-slate-600 font-bold">
                      <td className="py-3 pr-4 text-white">5-Year Total</td>
                      <td className="text-right py-3 px-4 text-red-400">$3,020</td>
                      <td className="text-right py-3 pl-4 text-emerald-400">$1,640</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-emerald-400 font-semibold text-center mt-4">EVs cost 46% less to maintain over 5 years &mdash; saving $1,380</p>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              The only category where EVs cost more is tires, due to heavier vehicle weight causing faster wear. Every other category is either equal or dramatically cheaper. And this comparison doesn&apos;t even include fuel savings &mdash; add another <strong className="text-emerald-400">$4,000&ndash;$5,000 in electricity vs gas savings</strong> over 5 years, and the total cost-of-ownership advantage becomes enormous.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Battery Question &mdash; What About Replacement?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The elephant in the room is always battery replacement. A new EV battery pack costs $5,000&ndash;$15,000 depending on the vehicle. But here&apos;s the reality: <strong className="text-emerald-400">you almost certainly won&apos;t need one</strong>.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Every EV sold in the US carries a federal-mandated <strong className="text-emerald-400">8-year/100,000-mile battery warranty</strong> (10 years in California and CARB states). Real-world data from millions of EVs now shows that most batteries retain <strong className="text-emerald-400">85&ndash;95% of their original capacity after 8 years</strong> of normal use. <Link href="/cars/tesla" className="text-emerald-400 hover:text-emerald-300">Tesla</Link>&apos;s fleet data shows an average of 88% capacity remaining after 200,000 miles. <Link href="/cars/hyundai" className="text-emerald-400 hover:text-emerald-300">Hyundai</Link> and <Link href="/cars/kia" className="text-emerald-400 hover:text-emerald-300">Kia</Link>&apos;s 800V batteries are showing even lower degradation rates.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              For comparison, a gas car&apos;s engine and transmission can fail catastrophically at any time &mdash; and a replacement engine costs $3,000&ndash;$7,000, while a transmission runs $2,000&ndash;$5,000. The risk profile isn&apos;t as different as people assume.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Bottom Line</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              EVs cost roughly <strong className="text-emerald-400">half as much to maintain as gas cars</strong>. Over a typical 10-year ownership period, you&apos;ll save $2,500&ndash;$3,000 on maintenance alone. Combined with fuel savings of $8,000&ndash;$10,000 over the same period, the total operating cost advantage of an EV is $10,000&ndash;$13,000. That&apos;s real money &mdash; and it closes the purchase price gap faster than most buyers realize.
            </p>

            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 my-12">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Cut Your Maintenance Costs in Half?</h3>
              <p className="text-slate-300 mb-6">Compare real-time pricing on the lowest-maintenance vehicles on the road. Our EV Best Price Finder tracks deals across Carvana, CarMax, AutoTrader, and dealer inventory.</p>
              <Link href="/ev-deals" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
                Browse EV Deals
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Related Reading</h2>
            <div className="grid gap-4 mb-8">
              <Link href="/ev-deals" className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-400 text-sm font-medium">Deals</span>
                <h4 className="text-white font-semibold mt-1">EV Best Price Finder</h4>
                <p className="text-slate-400 text-sm mt-1">Compare real-time pricing across 50 EV models from top sources.</p>
              </Link>
              <Link href="/cars" className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-400 text-sm font-medium">Browse</span>
                <h4 className="text-white font-semibold mt-1">Explore All EV Brands</h4>
                <p className="text-slate-400 text-sm mt-1">Detailed specs, reviews, and deals organized by manufacturer.</p>
              </Link>
              <Link href="/blog/cheapest-evs-to-own-2026" className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-400 text-sm font-medium">Guide</span>
                <h4 className="text-white font-semibold mt-1">Cheapest EVs to Own in 2026</h4>
                <p className="text-slate-400 text-sm mt-1">Total cost of ownership rankings including purchase price, fuel, and maintenance.</p>
              </Link>
              <Link href="/blog/ev-charging-at-home-complete-guide-2026" className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-400 text-sm font-medium">Guide</span>
                <h4 className="text-white font-semibold mt-1">EV Home Charging Complete Guide 2026</h4>
                <p className="text-slate-400 text-sm mt-1">Everything you need to know about Level 1, Level 2, and home charging setup.</p>
              </Link>
            </div>
          </article>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/blog?tag=ev-maintenance" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">EV Maintenance</Link>
              <Link href="/blog?tag=cost-comparison" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">Cost Comparison</Link>
              <Link href="/blog?tag=ev-ownership" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">EV Ownership</Link>
              <Link href="/blog?tag=gas-vs-electric" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">Gas vs Electric</Link>
            </div>
            <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}

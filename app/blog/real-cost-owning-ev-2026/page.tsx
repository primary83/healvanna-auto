"use client";

import Link from "next/link";
import Image from "next/image";

export default function RealCostOwningEV2026() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Guides</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">The Real Cost of Owning an Electric Car in 2026</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>January 24, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>14 min read</span>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/real-cost-owning-ev-2026.png" alt="Electric vehicle with cost analysis display at modern home" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              When considering an electric vehicle, the sticker price tells only part of the story. Understanding the <strong className="text-emerald-400">real cost of owning an electric car</strong> requires looking at the complete picture—from purchase incentives to charging costs, maintenance savings, and long-term value. This comprehensive guide breaks down <strong className="text-emerald-400">how much does it cost to own an EV</strong> in 2026 and helps you understand whether an electric vehicle makes financial sense for your situation.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Purchase Price: The Starting Point</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Electric vehicles have historically commanded a premium over comparable gas-powered cars, but that gap has narrowed significantly in 2026. The average EV now costs around $55,000, while the average new car overall sits at approximately $48,000. However, this comparison doesn't account for the wide range of options available.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Budget-friendly EVs like the Chevrolet Equinox EV, Nissan Leaf, and various Chinese imports now start under $30,000. Mid-range options from Tesla, Hyundai, and Ford fall in the $40,000-$60,000 range, while luxury EVs from Mercedes, BMW, and Lucid can exceed $100,000.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">2026 EV Price Ranges</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Budget EVs</span>
                  <span className="text-emerald-400 font-bold">$25,000 - $35,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Mid-Range EVs</span>
                  <span className="text-emerald-400 font-bold">$40,000 - $60,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Premium EVs</span>
                  <span className="text-emerald-400 font-bold">$60,000 - $90,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Luxury EVs</span>
                  <span className="text-emerald-400 font-bold">$90,000+</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Federal and State Tax Credits</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The <strong className="text-emerald-400">EV tax credit 2026</strong> significantly reduces the effective purchase price for qualifying buyers and vehicles. The federal tax credit offers up to $7,500 for new EVs and up to $4,000 for used electric vehicles, subject to income limits and vehicle requirements.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              To qualify for the full credit, new EVs must meet domestic manufacturing requirements, and buyers must fall under income thresholds ($150,000 for single filers, $300,000 for joint filers). Many states offer additional incentives ranging from $1,000 to $7,500, potentially bringing your effective discount to $15,000 or more.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Example: Tax Credit Impact</h4>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between"><span>Vehicle MSRP:</span><span>$45,000</span></div>
                <div className="flex justify-between"><span>Federal Tax Credit:</span><span className="text-emerald-400">-$7,500</span></div>
                <div className="flex justify-between"><span>State Rebate (California):</span><span className="text-emerald-400">-$2,000</span></div>
                <div className="flex justify-between font-bold border-t border-slate-700/50 pt-2 mt-2"><span>Effective Price:</span><span className="text-white">$35,500</span></div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Charging Costs: Your New "Fuel" Bill</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              One of the biggest advantages of EV ownership is dramatically reduced fuel costs. The average American drives about 13,500 miles per year. Let's compare the annual fuel costs:
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Home Charging Costs</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              The average electricity rate in the US is approximately $0.16 per kWh. Most EVs consume about 3-4 miles per kWh, meaning it costs roughly $0.04-0.05 per mile to drive on electricity. For 13,500 annual miles, that's approximately $540-$675 per year in "fuel" costs.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Compare this to a gas car averaging 30 MPG with gas at $3.50 per gallon: the same 13,500 miles would cost $1,575 in fuel—nearly three times more than home EV charging.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Public Charging Costs</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Public DC fast charging is more expensive, typically $0.30-0.50 per kWh at networks like Electrify America or EVgo. Tesla Supercharging averages around $0.25-0.35 per kWh. If you rely heavily on public charging, your annual costs might double—but still remain below gasoline costs.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Annual Fuel Cost Comparison (13,500 miles)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">EV (Home Charging)</span>
                  <span className="text-emerald-400 font-bold">$540 - $675</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">EV (Mixed Charging)</span>
                  <span className="text-emerald-400 font-bold">$800 - $1,100</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Hybrid (45 MPG)</span>
                  <span className="text-yellow-400 font-bold">$1,050</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Gas Car (30 MPG)</span>
                  <span className="text-red-400 font-bold">$1,575</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Home Charging Installation</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              While you can charge an EV using a standard 120V outlet (Level 1), most owners install a 240V Level 2 charger for faster, more convenient charging. This is a one-time cost that typically ranges from $500 to $2,000 including the charger unit and installation.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Many utilities offer rebates for home charger installation, and the federal government offers a tax credit of up to 30% of installation costs (max $1,000). If your electrical panel needs an upgrade, costs can increase to $2,500-$4,000, but this is relatively uncommon.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Maintenance: Where EVs Really Shine</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-emerald-400">Electric car maintenance costs</strong> are significantly lower than gas vehicles. EVs have far fewer moving parts—no engine, transmission, exhaust system, spark plugs, or timing belts to worry about.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">What EVs Don't Need</h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>Oil changes ($50-100 x 3-4/year = $150-400 saved annually)</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>Transmission service ($150-300 every 30-60k miles)</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>Spark plugs ($200-400 every 30-100k miles)</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>Timing belt ($500-1,000 every 60-100k miles)</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>Exhaust system repairs ($300-1,500)</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>Fuel system maintenance</span></li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">What EVs Still Need</h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-slate-400 mr-3">•</span><span>Tire rotation and replacement (similar to gas cars)</span></li>
                <li className="flex items-start"><span className="text-slate-400 mr-3">•</span><span>Brake service (less frequent due to regenerative braking)</span></li>
                <li className="flex items-start"><span className="text-slate-400 mr-3">•</span><span>Cabin air filter replacement</span></li>
                <li className="flex items-start"><span className="text-slate-400 mr-3">•</span><span>Windshield wipers and washer fluid</span></li>
                <li className="flex items-start"><span className="text-slate-400 mr-3">•</span><span>12V battery replacement (every 4-5 years)</span></li>
              </ul>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Studies consistently show EVs cost 40-50% less to maintain than comparable gas vehicles. Over a typical 5-year ownership period, this can add up to $3,000-$5,000 in savings.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Insurance Costs</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-emerald-400">EV insurance costs</strong> tend to be 15-25% higher than comparable gas vehicles. This is due to higher repair costs (specialized parts and labor), more expensive replacement costs, and the relative newness of the technology.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              For a mid-range EV, expect to pay approximately $1,800-$2,400 per year for full coverage, compared to $1,500-$1,900 for a similar gas car. However, some insurers offer EV-specific discounts, and rates vary significantly by location and driving history.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Depreciation and Resale Value</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Depreciation is typically the largest cost of car ownership. EVs have historically depreciated faster than gas cars, but this trend is changing as battery technology improves and consumer confidence grows.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Tesla vehicles, in particular, have shown strong resale values, retaining 60-70% of their value after three years. Other EVs average 40-50% retention, compared to 50-60% for popular gas vehicles. As the used EV market matures and battery longevity concerns diminish, resale values are expected to improve.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Total Cost of Ownership: The Bottom Line</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Let's put it all together with a 5-year <strong className="text-emerald-400">total cost of ownership comparison</strong>:
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <h4 className="text-white font-semibold mb-4">5-Year Total Cost Comparison</h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 text-white">Cost Category</th>
                    <th className="text-right py-3 text-white">Mid-Range EV</th>
                    <th className="text-right py-3 text-white">Comparable Gas Car</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Purchase Price</td>
                    <td className="text-right">$45,000</td>
                    <td className="text-right">$38,000</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Tax Credits/Incentives</td>
                    <td className="text-right text-emerald-400">-$7,500</td>
                    <td className="text-right">$0</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Fuel (5 years)</td>
                    <td className="text-right">$3,500</td>
                    <td className="text-right">$7,875</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Maintenance (5 years)</td>
                    <td className="text-right">$2,000</td>
                    <td className="text-right">$4,500</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Insurance (5 years)</td>
                    <td className="text-right">$11,000</td>
                    <td className="text-right">$8,500</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Home Charger Install</td>
                    <td className="text-right">$1,200</td>
                    <td className="text-right">$0</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Depreciation (5 years)</td>
                    <td className="text-right">$18,750</td>
                    <td className="text-right">$15,200</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="py-3 text-white">TOTAL 5-YEAR COST</td>
                    <td className="text-right text-emerald-400">$73,950</td>
                    <td className="text-right text-slate-300">$74,075</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              In this example, the EV comes out slightly ahead over 5 years, despite a higher purchase price. The savings come from fuel, maintenance, and tax credits offsetting the higher insurance and depreciation costs.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When EVs Make the Most Financial Sense</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Electric vehicles offer the best value when:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>You can charge at home (biggest savings on fuel)</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>You drive 10,000+ miles per year (more fuel savings)</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>You qualify for federal and state tax credits</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>Electricity rates in your area are reasonable</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>You plan to keep the vehicle 5+ years</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>Your utility offers EV charging rates or time-of-use plans</span></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The <strong className="text-emerald-400">real cost of owning an electric car</strong> in 2026 is competitive with gas vehicles, especially when you factor in available incentives and long-term savings. While the upfront cost may be higher, lower fuel and maintenance expenses often make up the difference over time.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              The best approach is to calculate your specific situation using local electricity rates, your driving patterns, and available incentives. For many drivers, EVs now offer not just environmental benefits but genuine financial advantages as well.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Explore Electric Vehicles?</h3>
            <p className="text-slate-300 mb-6">Browse our curated selection of electric vehicles and find the perfect EV for your lifestyle and budget.</p>
            <Link href="/cars" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Electric Vehicles
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Costs</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Electric Vehicles</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Cost of Ownership</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Buying Guide</span>
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

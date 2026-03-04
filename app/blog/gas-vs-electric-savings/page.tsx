"use client";

import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function GasVsElectricSavings() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Insights</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Gas vs Electric: How Much Can You Really Save?</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 18, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>12 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/gas-vs-electric-savings.png" alt="Split image of gas pump and EV charger with dollar signs" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The question everyone asks before switching to an EV: <strong className="text-emerald-400">how much money will I actually save?</strong> Gas vs electric savings depend on fuel costs, maintenance, tax credits, and how long you own the vehicle. We ran the numbers using real-world data from 2025-2026 to give you a clear, honest answer. Spoiler: the savings are significant &mdash; but they&apos;re not automatic for everyone.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Fuel Cost Breakdown</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Let&apos;s start with the most obvious expense: keeping your vehicle moving. The national average price of regular gasoline in early 2026 sits around <strong className="text-emerald-400">$3.50 per gallon</strong>. The average residential electricity rate is approximately <strong className="text-emerald-400">$0.13 per kWh</strong>. These two numbers form the foundation of every gas vs electric savings calculation.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The average American drives about 12,000 miles per year. A typical gas car gets around 28 miles per gallon, which means you&apos;re burning roughly 429 gallons of fuel annually. At $3.50 per gallon, that&apos;s approximately <strong className="text-white">$2,100 per year in fuel costs</strong>.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              An average EV consumes about 3.5 miles per kWh (or roughly 0.29 kWh per mile). Over 12,000 miles, you&apos;ll use about 3,429 kWh of electricity. At $0.13 per kWh, your annual &quot;fuel&quot; cost drops to approximately <strong className="text-emerald-400">$600 per year</strong>. That&apos;s an immediate savings of $1,500 every single year just on fuel &mdash; before we even talk about maintenance or incentives.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <p className="text-red-400 text-2xl font-bold">~$2,100/year</p>
                  <p className="text-slate-400 text-sm">Average gas car fuel cost (12,000 mi/yr)</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <p className="text-emerald-400 text-2xl font-bold">~$600/year</p>
                  <p className="text-slate-400 text-sm">Average EV electricity cost (12,000 mi/yr)</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Math: 3 Real-World Comparisons</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Averages are helpful, but what do the savings look like when you compare specific vehicles that people actually cross-shop? We picked three of the most common matchups and calculated annual fuel costs based on EPA ratings and 12,000 miles per year of driving.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Toyota Camry vs Tesla Model 3</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <p className="text-white font-semibold mb-1">Toyota Camry (32 MPG combined)</p>
                  <p className="text-red-400 text-xl font-bold">$1,313/year</p>
                  <p className="text-slate-400 text-sm">375 gallons x $3.50</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <p className="text-white font-semibold mb-1">Tesla Model 3 (4.0 mi/kWh)</p>
                  <p className="text-emerald-400 text-xl font-bold">$390/year</p>
                  <p className="text-slate-400 text-sm">3,000 kWh x $0.13</p>
                </div>
              </div>
              <p className="text-emerald-400 text-sm font-medium">Annual savings with <Link href="/ev-deals/tesla-model-3" className="underline hover:text-emerald-300">Tesla Model 3</Link>: $923</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Honda CR-V vs Hyundai Ioniq 5</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <p className="text-white font-semibold mb-1">Honda CR-V (30 MPG combined)</p>
                  <p className="text-red-400 text-xl font-bold">$1,400/year</p>
                  <p className="text-slate-400 text-sm">400 gallons x $3.50</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <p className="text-white font-semibold mb-1">Hyundai Ioniq 5 (3.5 mi/kWh)</p>
                  <p className="text-emerald-400 text-xl font-bold">$446/year</p>
                  <p className="text-slate-400 text-sm">3,429 kWh x $0.13</p>
                </div>
              </div>
              <p className="text-emerald-400 text-sm font-medium">Annual savings with <Link href="/ev-deals/hyundai-ioniq-5" className="underline hover:text-emerald-300">Hyundai Ioniq 5</Link>: $954</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Ford F-150 vs F-150 Lightning</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <p className="text-white font-semibold mb-1">Ford F-150 (23 MPG combined)</p>
                  <p className="text-red-400 text-xl font-bold">$1,826/year</p>
                  <p className="text-slate-400 text-sm">522 gallons x $3.50</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <p className="text-white font-semibold mb-1">F-150 Lightning (2.4 mi/kWh)</p>
                  <p className="text-emerald-400 text-xl font-bold">$650/year</p>
                  <p className="text-slate-400 text-sm">5,000 kWh x $0.13</p>
                </div>
              </div>
              <p className="text-emerald-400 text-sm font-medium">Annual savings with <Link href="/ev-deals/ford-f150-lightning" className="underline hover:text-emerald-300">F-150 Lightning</Link>: $1,176</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Maintenance Savings</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Fuel savings get all the attention, but maintenance is where EVs quietly pull even further ahead. Electric vehicles have drastically fewer moving parts &mdash; no engine, no transmission, no exhaust system, no timing belt, and no oil to change. Regenerative braking means your brake pads last two to three times longer than on a gas car.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Here&apos;s what the average gas car owner pays annually for routine maintenance that EV owners mostly skip: oil changes ($400-$800), transmission service ($100-$200), spark plugs and ignition ($50-$150), exhaust system repairs ($100-$300), and more frequent brake work ($200-$400). Add it all up, and a typical gas car costs <strong className="text-white">$1,400 per year</strong> in maintenance.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              An equivalent EV? Tire rotations, cabin air filters, brake fluid checks, and the occasional coolant flush bring annual maintenance to roughly <strong className="text-emerald-400">$600 per year</strong>. That&apos;s an $800 annual advantage for electric vehicles.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Maintenance Item</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Gas Car (Annual)</th>
                    <th className="text-left py-3 text-white font-semibold">EV (Annual)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Oil changes</td><td className="py-3 pr-4">$400 - $800</td><td className="py-3 text-emerald-400">$0</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Brake pads/rotors</td><td className="py-3 pr-4">$200 - $400</td><td className="py-3 text-emerald-400">$50 - $100</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Transmission service</td><td className="py-3 pr-4">$100 - $200</td><td className="py-3 text-emerald-400">$0</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Spark plugs/ignition</td><td className="py-3 pr-4">$50 - $150</td><td className="py-3 text-emerald-400">$0</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Exhaust system</td><td className="py-3 pr-4">$100 - $300</td><td className="py-3 text-emerald-400">$0</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Tires/rotation</td><td className="py-3 pr-4">$300 - $500</td><td className="py-3">$400 - $600</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Coolant/fluids</td><td className="py-3 pr-4">$50 - $100</td><td className="py-3">$25 - $50</td></tr>
                  <tr className="border-b border-slate-700 font-bold"><td className="py-3 pr-4 text-white">Annual Total</td><td className="py-3 pr-4 text-red-400">~$1,400</td><td className="py-3 text-emerald-400">~$600</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Tax Credits and Incentives</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The federal government offers a <strong className="text-emerald-400">$7,500 tax credit</strong> for qualifying new electric vehicles under the Inflation Reduction Act. This credit can be applied at the point of sale at participating dealerships, effectively reducing your purchase price immediately. Used EVs qualify for a separate credit of up to $4,000.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              On top of federal incentives, many states offer their own EV rebates and credits. California&apos;s Clean Vehicle Rebate Project provides up to $2,000. Colorado offers a $5,000 state tax credit. New York, New Jersey, Connecticut, and Oregon all have programs worth $1,500 to $3,000. Check your state&apos;s energy office website for current offerings.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Don&apos;t overlook utility company rebates either. Many electric utilities offer $200 to $500 rebates for installing a Level 2 home charger, and some provide discounted off-peak charging rates as low as $0.04 to $0.08 per kWh. Charging at off-peak rates can cut your annual electricity cost from $600 down to <strong className="text-emerald-400">under $300</strong>.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Break-Even Point</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              EVs still cost more upfront than comparable gas vehicles. The average transaction price for a new EV in early 2026 is around $45,000, compared to roughly $38,000 for the average gas car &mdash; a gap of about $7,000. After the $7,500 federal tax credit, many EV buyers are already ahead on day one.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              But even without the full credit, the math works quickly. With combined fuel and maintenance savings of approximately <strong className="text-emerald-400">$2,300 per year</strong> ($1,500 fuel + $800 maintenance), a $7,000 price gap closes in just over <strong className="text-emerald-400">3 years</strong>. If you factor in the federal tax credit, you break even almost immediately. Most financial analyses show the break-even point for EV ownership falls between <strong className="text-white">3 to 4 years</strong> for the average driver.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Hidden Costs to Consider</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Transparency matters, so let&apos;s acknowledge the costs that work against EVs. These won&apos;t erase your savings, but they&apos;re worth factoring into your decision.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div><strong className="text-white">Insurance premiums</strong> &mdash; EV insurance costs 15-25% more than equivalent gas cars, adding roughly $200 to $400 per year. Higher repair costs and expensive battery packs drive the premium increase.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div><strong className="text-white">Home charger installation</strong> &mdash; A Level 2 home charger (240V) costs $500 to $2,000 installed, depending on your electrical panel and wiring situation. This is a one-time cost that pays for itself quickly through cheaper home charging vs. public stations.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div><strong className="text-white">Tire replacement costs</strong> &mdash; EVs are heavier and produce instant torque, wearing through tires 20-30% faster. EV-rated tires also cost more. Budget an extra $200 to $400 per year for tires compared to a gas vehicle.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">4.</span><div><strong className="text-white">Public charging costs</strong> &mdash; If you rely heavily on DC fast charging rather than home charging, your electricity costs can triple. Public fast chargers average $0.30 to $0.60 per kWh, significantly reducing your fuel savings advantage.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">10-Year Total Savings</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The real picture emerges when you look at cumulative savings over a full ownership period. Here&apos;s what the numbers look like over 10 years, assuming 12,000 miles per year of driving:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Cost Category</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Gas Car (10 yrs)</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">EV (10 yrs)</th>
                    <th className="text-left py-3 text-white font-semibold">Savings</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Fuel / Electricity</td><td className="py-3 pr-4">$21,000</td><td className="py-3 pr-4 text-emerald-400">$6,000</td><td className="py-3 text-emerald-400">$15,000</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Maintenance</td><td className="py-3 pr-4">$14,000</td><td className="py-3 pr-4 text-emerald-400">$6,000</td><td className="py-3 text-emerald-400">$8,000</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Insurance (additional)</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">+$3,000</td><td className="py-3 text-red-400">-$3,000</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Home charger (one-time)</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">+$1,200</td><td className="py-3 text-red-400">-$1,200</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Tire premium</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4">+$2,500</td><td className="py-3 text-red-400">-$2,500</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Federal tax credit</td><td className="py-3 pr-4">$0</td><td className="py-3 pr-4 text-emerald-400">-$7,500</td><td className="py-3 text-emerald-400">$7,500</td></tr>
                  <tr className="border-b border-slate-700 font-bold"><td className="py-3 pr-4 text-white">Net 10-Year Savings</td><td className="py-3 pr-4" colSpan={2}></td><td className="py-3 text-emerald-400 text-lg">$23,800</td></tr>
                </tbody>
              </table>
              <p className="text-slate-400 text-xs mt-4">*Estimates based on national averages. Actual savings vary by vehicle, location, electricity rates, and driving habits.</p>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Even after accounting for higher insurance, tire costs, and home charger installation, the average EV owner comes out roughly <strong className="text-emerald-400">$23,800 ahead</strong> over a 10-year period. That&apos;s nearly $2,400 per year in net savings, or about $200 per month back in your pocket.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Is Going Electric Worth It?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              For the <strong className="text-white">majority of drivers</strong>, the answer is a clear yes. If you drive 10,000 miles or more per year, have access to home charging or affordable workplace charging, and plan to keep your vehicle for at least 3-4 years, an EV will save you money &mdash; period.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The savings are especially dramatic for high-mileage drivers. If you drive 20,000 miles per year instead of 12,000, your fuel savings alone jump from $1,500 to $2,500 annually. Ride-share drivers, long commuters, and families with multiple cars have the most to gain from going electric.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The scenario where EVs make less financial sense is if you drive under 5,000 miles per year, rely exclusively on expensive public fast charging, or plan to keep the vehicle for less than two years. In those edge cases, the upfront cost premium may not fully pay back.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              The bottom line: gas vs electric savings are real, substantial, and getting better every year as EV prices drop and charging infrastructure expands. The average owner saves over <strong className="text-emerald-400">$20,000 over a decade</strong>. The only question is whether now is the right time for you &mdash; and with today&apos;s deals and incentives, the answer is almost certainly yes.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Start Saving &mdash; Find EV Deals</h3>
            <p className="text-slate-300 mb-6">Ready to see how much you can save? Browse our curated EV deals and find the best prices on electric vehicles available right now.</p>
            <Link href="/ev-deals" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse EV Deals
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/ev-vs-gas-maintenance-costs" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV vs Gas Car Maintenance Costs: A Complete Comparison</p></Link>
              <Link href="/blog/ev-tax-credits-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Tax Credits 2026: Everything You Need to Know</p></Link>
              <Link href="/blog/real-cost-owning-ev-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">The Real Cost of Owning an EV in 2026</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Gas vs Electric</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Savings</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Cost Comparison</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Benefits</span>
            </div>
            <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Related Deals */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}

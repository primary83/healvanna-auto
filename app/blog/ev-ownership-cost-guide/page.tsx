"use client";

import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function EVOwnershipCostGuide() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">How Much Does It Really Cost to Own an EV in 2026?</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 22, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>15 min read</span>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ev-ownership-cost-guide.png" alt="Calculator and electric car keys on a desk with cost breakdown charts" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Buying an electric vehicle is one of the biggest financial decisions you can make in 2026, and the sticker price only scratches the surface. The true <strong className="text-emerald-400">EV ownership cost</strong> involves a complex mix of purchase incentives, charging expenses, maintenance savings, insurance premiums, and depreciation. Whether you are considering your first EV or comparing it against a traditional gas car, this guide breaks down every dollar so you can make an informed decision. By the end, you will have a clear picture of what it really costs to drive electric and how to maximize your savings.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Purchase Price: Sticker Shock vs Reality</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The most common objection to EVs remains the upfront cost. In 2026, the average new electric vehicle carries an MSRP of roughly $52,000, compared to about $48,000 for the average new car overall. That gap looks daunting at first glance, but the reality is far more nuanced once you factor in available incentives and the expanding range of affordable models.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The <strong className="text-emerald-400">federal EV tax credit</strong> remains the single most powerful tool for reducing your purchase price. Qualifying buyers can claim up to <strong className="text-emerald-400">$7,500</strong> off their federal tax liability for new EVs, and starting in 2024 the point-of-sale transfer option lets you receive that discount immediately at the dealership rather than waiting until tax season. To qualify, your modified adjusted gross income must fall below $150,000 for single filers or $300,000 for joint filers, and the vehicle must meet domestic manufacturing and battery sourcing requirements.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Beyond the federal credit, <strong className="text-emerald-400">state incentives</strong> can stack thousands more in savings. Colorado offers a $5,000 state tax credit. California provides up to $7,500 in rebates for qualifying low-income buyers. New Jersey exempts EVs from sales tax entirely. Oregon offers rebates up to $7,500. Even in states without direct rebates, many utility companies provide charger installation rebates worth $500 to $1,500. When you combine federal and state incentives, a $45,000 EV can effectively cost as little as $30,000 to $35,000, putting it squarely in line with or below a comparable gas vehicle.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Example: Effective Purchase Price After Incentives</h4>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between"><span>Vehicle MSRP:</span><span>$45,000</span></div>
                <div className="flex justify-between"><span>Federal Tax Credit:</span><span className="text-emerald-400">-$7,500</span></div>
                <div className="flex justify-between"><span>State Rebate (example):</span><span className="text-emerald-400">-$3,000</span></div>
                <div className="flex justify-between"><span>Utility Charger Rebate:</span><span className="text-emerald-400">-$750</span></div>
                <div className="flex justify-between font-bold border-t border-slate-700/50 pt-2 mt-2"><span>Effective Price:</span><span className="text-white">$33,750</span></div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Charging Costs: Home vs Public</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Fuel is where EV ownership starts to save you real money every single month. The average American drives about 13,500 miles per year. With an EV averaging 3.5 miles per kWh and a national average electricity rate of around $0.16 per kWh, your monthly home charging bill works out to roughly <strong className="text-emerald-400">$30 to $50 per month</strong>. That is a dramatic difference compared to gasoline.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Level 2 Home Charging</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Most EV owners install a 240-volt Level 2 charger at home, which adds about 25 to 30 miles of range per hour of charging. The charger unit itself costs $300 to $700, and professional installation typically runs $500 to $1,500 depending on your electrical panel situation. Many utilities offer time-of-use rates that let you charge overnight at discounted rates as low as $0.08 per kWh, cutting your monthly charging cost to as little as $20 to $30. The federal government also provides a tax credit covering 30 percent of charger installation costs, up to $1,000.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Public and DC Fast Charging</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Public DC fast charging is more expensive, ranging from $0.30 to $0.50 per kWh at networks like Electrify America, EVgo, and ChargePoint. Tesla Supercharging averages $0.25 to $0.35 per kWh. If you rely primarily on public charging, your monthly costs might reach $80 to $120, which is still significantly less than gasoline. The key takeaway: even in the worst-case public charging scenario, you spend less than you would at the pump.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Monthly Fuel Cost Comparison</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">EV (Home Charging)</span>
                  <span className="text-emerald-400 font-bold">$30 - $50/month</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">EV (Mostly Public Charging)</span>
                  <span className="text-emerald-400 font-bold">$80 - $120/month</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Hybrid (45 MPG)</span>
                  <span className="text-yellow-400 font-bold">$90 - $110/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Gas Car (28 MPG)</span>
                  <span className="text-red-400 font-bold">$150 - $200/month</span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Over the course of a year, a home-charging EV owner saves roughly $1,200 to $1,800 on fuel compared to driving a gas-powered vehicle that gets 28 miles per gallon. Over five years, that adds up to $6,000 to $9,000 in fuel savings alone, which is a significant chunk of the purchase price difference.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Maintenance Savings</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              This is where electric vehicles truly shine compared to their gas-powered counterparts. An EV drivetrain has roughly 20 moving parts compared to over 2,000 in a traditional internal combustion engine. Fewer moving parts means dramatically fewer things that can break, wear out, or need servicing.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              With an EV, you never need oil changes, transmission fluid flushes, spark plug replacements, timing belt service, or exhaust system repairs. Those are some of the most common and expensive maintenance items for gas cars. Regenerative braking, which recovers energy by using the electric motor to slow the car, also significantly reduces brake pad and rotor wear. Many EV owners report their original brake pads lasting 100,000 miles or more, compared to 30,000 to 50,000 miles on a typical gas car.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Average Annual Maintenance Costs</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Electric Vehicle</span>
                  <span className="text-emerald-400 font-bold">~$600/year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Gas-Powered Vehicle</span>
                  <span className="text-red-400 font-bold">~$1,200/year</span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              The typical EV owner spends around <strong className="text-emerald-400">$600 per year</strong> on maintenance, which covers tire rotations, cabin air filters, windshield wipers, washer fluid, and the occasional 12-volt battery replacement. A comparable gas vehicle owner spends roughly <strong className="text-emerald-400">$1,200 per year</strong> on maintenance when you add in oil changes, transmission service, brake work, and other engine-related upkeep. That $600 annual savings translates to $3,000 over five years of ownership.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Insurance: The Hidden Cost</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Insurance is one area where EVs currently come with a premium. On average, electric vehicles cost <strong className="text-emerald-400">15 to 25 percent more to insure</strong> than comparable gas-powered cars. There are several reasons for this: EV repair costs tend to be higher due to specialized parts and labor requirements, battery damage can be extremely expensive to fix, and the vehicles themselves often have higher replacement values.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              For a mid-range EV like the Tesla Model Y, expect to pay approximately $2,000 to $2,600 per year for full coverage, compared to $1,600 to $2,000 for a comparable gas SUV like the Toyota RAV4. Over five years, that insurance premium gap adds up to $2,000 to $3,000 in additional costs.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              However, there are several strategies to reduce your EV insurance costs. Shop around aggressively, as rates vary wildly between insurers. Ask about EV-specific discounts that some companies now offer. Bundle your home and auto policies. Increase your deductible if you have an emergency fund. Consider usage-based insurance programs, which often favor EV drivers who charge at home and drive predictable routes. Finally, maintaining a clean driving record remains the most effective way to keep premiums low regardless of what you drive.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Depreciation and Resale Value</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Depreciation is typically the single largest cost of vehicle ownership, and it is where EVs have historically struggled. Early electric vehicles depreciated rapidly due to concerns about battery longevity, limited range, and a small used market. However, the landscape in 2026 looks very different.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Tesla vehicles continue to lead the pack with strong resale values, retaining 60 to 70 percent of their original value after three years. Other mainstream EVs have improved considerably as well, with models like the Hyundai Ioniq 5, Ford Mustang Mach-E, and Chevrolet Equinox EV now retaining 50 to 60 percent of their value after three years. The average gas vehicle retains about 55 to 65 percent over the same period.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Several factors are driving this improvement. Battery technology has advanced to the point where degradation concerns are minimal for most modern EVs, with manufacturers offering 8-year, 100,000-mile battery warranties. The growing demand for used EVs, fueled by rising gas prices and expanded charging infrastructure, has strengthened the secondary market. The used EV tax credit of up to $4,000 also makes pre-owned electrics more attractive to buyers, which supports resale values for current owners.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">5-Year Total Cost Comparison</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              To illustrate the complete financial picture, let us compare two of the most popular vehicles in their respective categories: the <strong className="text-emerald-400">Tesla Model Y</strong> and the <strong className="text-emerald-400">Toyota RAV4</strong> over a full five-year ownership period.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <h4 className="text-white font-semibold mb-4">5-Year Total Cost: Tesla Model Y vs Toyota RAV4</h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 text-white">Cost Category</th>
                    <th className="text-right py-3 text-white">Tesla Model Y</th>
                    <th className="text-right py-3 text-white">Toyota RAV4</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Purchase Price (MSRP)</td>
                    <td className="text-right">$44,990</td>
                    <td className="text-right">$32,350</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Federal Tax Credit</td>
                    <td className="text-right text-emerald-400">-$7,500</td>
                    <td className="text-right">$0</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Effective Purchase Price</td>
                    <td className="text-right font-semibold">$37,490</td>
                    <td className="text-right font-semibold">$32,350</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Fuel / Charging (5 years)</td>
                    <td className="text-right">$2,700</td>
                    <td className="text-right">$9,650</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Maintenance (5 years)</td>
                    <td className="text-right">$3,000</td>
                    <td className="text-right">$6,000</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Insurance (5 years)</td>
                    <td className="text-right">$11,500</td>
                    <td className="text-right">$9,000</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Home Charger Installation</td>
                    <td className="text-right">$1,200</td>
                    <td className="text-right">$0</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3">Depreciation (5 years)</td>
                    <td className="text-right">$15,750</td>
                    <td className="text-right">$12,900</td>
                  </tr>
                  <tr className="font-bold">
                    <td className="py-3 text-white">TOTAL 5-YEAR COST</td>
                    <td className="text-right text-emerald-400">$71,640</td>
                    <td className="text-right text-slate-300">$69,900</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              The numbers tell a compelling story. Despite the Tesla Model Y costing nearly $13,000 more at MSRP, the five-year total cost of ownership gap narrows to just $1,740 after accounting for the tax credit, fuel savings, and reduced maintenance. If you factor in state incentives that many buyers qualify for, the Model Y can actually be cheaper to own over five years. And if gas prices rise above current levels, the EV advantage grows even wider.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Most Affordable EVs to Own</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Not every EV carries a $45,000 price tag. Several models in 2026 offer exceptional value and low total ownership costs, making them accessible to a wide range of budgets. Here are three standout options worth considering:
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The <Link href="/ev-deals/chevrolet-equinox-ev" className="text-emerald-400 hover:text-emerald-300 underline">Chevrolet Equinox EV</Link> starts around $33,000 and qualifies for the full $7,500 federal tax credit, bringing the effective price below $26,000. With over 300 miles of range and a spacious interior, it is arguably the best value in the entire EV market right now.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The <Link href="/ev-deals/nissan-leaf" className="text-emerald-400 hover:text-emerald-300 underline">Nissan LEAF</Link> remains one of the most affordable entry points into electric driving. Its lower purchase price and proven reliability make it an excellent choice for commuters who do not need 300-plus miles of range. Annual operating costs are among the lowest of any vehicle on the road.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The <Link href="/ev-deals/tesla-model-3" className="text-emerald-400 hover:text-emerald-300 underline">Tesla Model 3</Link> offers the best combination of range, performance, and resale value in the mid-range segment. Access to the extensive Tesla Supercharger network and over-the-air software updates add long-term value that is difficult to quantify but very real for owners.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How to Minimize Your EV Costs</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Whether you already own an EV or are about to purchase one, these strategies will help you keep your total ownership costs as low as possible:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ol className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 font-bold mr-3 min-w-[24px]">1.</span>
                  <span><strong className="text-white">Charge at home on off-peak rates.</strong> Most utilities offer time-of-use plans with overnight electricity rates 40 to 60 percent cheaper than daytime rates. Set your car to charge between midnight and 6 a.m. to maximize savings.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 font-bold mr-3 min-w-[24px]">2.</span>
                  <span><strong className="text-white">Stack every available incentive.</strong> Do not leave money on the table. Claim the federal tax credit, apply for state rebates, check your utility for charger installation discounts, and look for local incentives offered by your city or county.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 font-bold mr-3 min-w-[24px]">3.</span>
                  <span><strong className="text-white">Shop around for insurance.</strong> Get quotes from at least five insurers. Ask specifically about EV discounts, bundle policies, and consider increasing your deductible to lower premiums. Some insurers specialize in EVs and offer significantly better rates.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 font-bold mr-3 min-w-[24px]">4.</span>
                  <span><strong className="text-white">Maximize regenerative braking.</strong> Use one-pedal driving mode whenever possible. This not only extends your range and reduces energy consumption but also dramatically reduces brake wear, saving you hundreds over the life of the vehicle.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 font-bold mr-3 min-w-[24px]">5.</span>
                  <span><strong className="text-white">Keep your battery between 20 and 80 percent.</strong> Regularly charging to 100 percent or draining below 10 percent accelerates battery degradation. Keeping the charge level in the optimal range helps preserve battery health and protects your resale value.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 font-bold mr-3 min-w-[24px]">6.</span>
                  <span><strong className="text-white">Choose the right EV for your needs.</strong> Do not overspend on range or features you will not use. A 250-mile range EV that costs $10,000 less than a 350-mile range model will save you far more overall if your daily commute is under 50 miles.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 font-bold mr-3 min-w-[24px]">7.</span>
                  <span><strong className="text-white">Maintain your tires properly.</strong> EVs are heavier than gas cars and produce instant torque, which means tires wear faster. Keep them properly inflated and rotate them every 5,000 to 7,500 miles to extend their life and maintain optimal efficiency.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 font-bold mr-3 min-w-[24px]">8.</span>
                  <span><strong className="text-white">Consider leasing if you want the latest technology.</strong> EV technology is evolving rapidly. Leasing lets you upgrade every few years while the lease company claims the commercial tax credit, which often translates to lower monthly payments even on vehicles that do not qualify for the consumer credit.</span>
                </li>
              </ol>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Bottom Line</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The <strong className="text-emerald-400">true cost of EV ownership</strong> in 2026 is closer to gas vehicles than ever before, and in many scenarios, an electric vehicle is actually the cheaper option when you look at the full picture. Higher purchase prices are offset by generous tax credits and state incentives. Fuel savings of $1,200 to $1,800 per year add up quickly. Maintenance costs run roughly half of what gas cars require. And while insurance remains a premium, smart shopping can narrow that gap significantly.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              The math is clear: for the average American driver who can charge at home and qualifies for federal tax credits, an EV is no longer a financial sacrifice. It is a financially competitive choice that also happens to be better for the environment, quieter to drive, and packed with the latest technology. The question is no longer whether you can afford an EV. It is whether you can afford not to consider one.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find the Best EV Deals</h3>
            <p className="text-slate-300 mb-6">Browse current offers and incentives on the most affordable electric vehicles. Our deal finder compares prices across dealerships so you do not have to.</p>
            <Link href="/ev-deals" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse EV Deals
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Related Articles */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="space-y-4">
              <Link href="/blog/ev-tax-credits-2026" className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-700/30 transition-colors group">
                <span className="text-slate-300 group-hover:text-emerald-400 transition-colors">Understanding EV Tax Credits in 2026: Complete Guide</span>
                <svg className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/blog/ev-charging-cost-comparison" className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-700/30 transition-colors group">
                <span className="text-slate-300 group-hover:text-emerald-400 transition-colors">EV Charging Cost Comparison: Home vs Public vs Supercharger</span>
                <svg className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/blog/ev-vs-gas-maintenance-costs" className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-700/30 transition-colors group">
                <span className="text-slate-300 group-hover:text-emerald-400 transition-colors">EV vs Gas Maintenance Costs: What You Really Save</span>
                <svg className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/blog?tag=ev-costs" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">EV Costs</Link>
              <Link href="/blog?tag=ownership-guide" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">Ownership Guide</Link>
              <Link href="/blog?tag=savings" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">Savings</Link>
              <Link href="/blog?tag=comparison" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">Comparison</Link>
              <Link href="/blog?tag=2026" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">2026</Link>
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

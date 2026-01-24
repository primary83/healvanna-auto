"use client";

import Link from "next/link";
import Image from "next/image";

export default function LeasingVsBuyingEV() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Leasing vs Buying an EV: Which Makes Sense Today?</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>January 24, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>13 min read</span>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/leasing-vs-buying-ev.png" alt="Split comparison of leasing paperwork and EV ownership" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The <strong className="text-emerald-400">lease vs buy decision</strong> has always been complex, but electric vehicles add new factors to consider. Rapidly evolving technology, generous lease incentives, changing tax credits, and uncertainty about long-term battery health all influence whether <strong className="text-emerald-400">leasing or buying an EV</strong> makes more sense for your situation. This comprehensive guide breaks down everything you need to know to make the right choice in 2026.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Basics: Leasing vs Buying</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Before diving into EV-specific considerations, let's review the fundamental differences:
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Leasing</h4>
                  <ul className="text-slate-400 text-sm space-y-2">
                    <li>• Pay for depreciation only</li>
                    <li>• Lower monthly payments</li>
                    <li>• Return car after 2-3 years</li>
                    <li>• Mileage limits apply</li>
                    <li>• Always under warranty</li>
                    <li>• No ownership equity</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Buying</h4>
                  <ul className="text-slate-400 text-sm space-y-2">
                    <li>• Pay full vehicle cost</li>
                    <li>• Higher monthly payments</li>
                    <li>• Own the car indefinitely</li>
                    <li>• No mileage restrictions</li>
                    <li>• Warranty eventually expires</li>
                    <li>• Build equity over time</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Why EVs Change the Equation</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Electric vehicles introduce unique factors that can shift the lease vs buy calculation compared to gas cars:
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">1. Rapid Technology Evolution</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              EV technology is advancing faster than traditional automotive technology. Range is increasing, charging speeds are improving, and new features are being added regularly. An EV purchased today may feel outdated in 3-5 years as newer models offer significantly better capabilities.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-emerald-400">Advantage: Leasing.</strong> A lease lets you upgrade to newer technology every 2-3 years without worrying about resale value or being stuck with "old" tech.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">2. Tax Credit Complexity</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              The federal EV tax credit ($7,500 for new vehicles) has income limits and vehicle requirements that many buyers don't qualify for. However, when you lease, the leasing company claims the credit and typically passes the savings to you through reduced payments—regardless of your income.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-emerald-400">Advantage: Leasing</strong> (if you don't qualify for the tax credit when buying).
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Tax Credit Eligibility (2026)</h4>
              <div className="space-y-3 text-sm">
                <div className="pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Income Limit (Single):</span>
                  <span className="text-white ml-2">$150,000 AGI</span>
                </div>
                <div className="pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Income Limit (Joint):</span>
                  <span className="text-white ml-2">$300,000 AGI</span>
                </div>
                <div className="pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Vehicle MSRP Limit (Cars):</span>
                  <span className="text-white ml-2">$55,000</span>
                </div>
                <div>
                  <span className="text-slate-300">Vehicle MSRP Limit (SUVs/Trucks):</span>
                  <span className="text-white ml-2">$80,000</span>
                </div>
              </div>
              <p className="text-emerald-400 text-sm mt-4">Leasing bypasses these limits—the credit goes to the leasing company and reduces your payment.</p>
            </div>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">3. Battery Degradation Concerns</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              EV batteries degrade over time, though modern batteries retain 80-90% capacity after 8-10 years. If you're worried about long-term battery health or costly replacement, leasing transfers that risk to the leasing company.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-emerald-400">Advantage: Leasing</strong> (for risk-averse buyers). However, note that battery degradation fears are often overblown—most EV batteries significantly outlast their warranties.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">4. Depreciation Uncertainty</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              EV resale values have historically been volatile. Some models (especially Teslas) hold value well, while others depreciate rapidly. Leasing protects you from depreciation risk—you simply return the car at lease end regardless of its market value.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-emerald-400">Advantage: Leasing</strong> (for uncertain resale value) or <strong className="text-emerald-400">Buying</strong> (for models with strong resale).
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">5. Lower Maintenance Costs</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              EVs require significantly less maintenance than gas cars—no oil changes, fewer brake replacements, no transmission service. This makes long-term ownership more attractive since you're not paying for expensive maintenance during the years after the warranty expires.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-emerald-400">Advantage: Buying.</strong> The maintenance savings compound over time, making long ownership more financially attractive.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Financial Comparison: A Real Example</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Let's compare leasing vs buying a $50,000 EV over 6 years:
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Scenario: $50,000 EV, 6-Year Period</h4>
              
              <div className="mb-6 pb-6 border-b border-slate-700/50">
                <h5 className="text-emerald-400 font-semibold mb-3">Option A: Two 3-Year Leases</h5>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex justify-between"><span>Monthly Payment:</span><span>$450</span></div>
                  <div className="flex justify-between"><span>Total Payments (72 months):</span><span>$32,400</span></div>
                  <div className="flex justify-between"><span>Down Payments (2x $3,000):</span><span>$6,000</span></div>
                  <div className="flex justify-between"><span>Tax Credit Savings:</span><span className="text-emerald-400">-$15,000</span></div>
                  <div className="flex justify-between font-bold border-t border-slate-700/50 pt-2 mt-2"><span>Total Cost:</span><span>$23,400</span></div>
                  <div className="flex justify-between text-slate-400"><span>Vehicle at end:</span><span>None</span></div>
                </div>
              </div>

              <div>
                <h5 className="text-emerald-400 font-semibold mb-3">Option B: Purchase with 6-Year Loan</h5>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex justify-between"><span>Monthly Payment:</span><span>$750</span></div>
                  <div className="flex justify-between"><span>Total Payments (72 months):</span><span>$54,000</span></div>
                  <div className="flex justify-between"><span>Down Payment:</span><span>$5,000</span></div>
                  <div className="flex justify-between"><span>Tax Credit (if eligible):</span><span className="text-emerald-400">-$7,500</span></div>
                  <div className="flex justify-between"><span>Resale Value (6 years):</span><span className="text-emerald-400">-$20,000</span></div>
                  <div className="flex justify-between font-bold border-t border-slate-700/50 pt-2 mt-2"><span>Net Cost:</span><span>$31,500</span></div>
                  <div className="flex justify-between text-slate-400"><span>Vehicle at end:</span><span>Owned outright</span></div>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              In this example, leasing appears cheaper, but you have nothing at the end. If you plan to keep driving the purchased vehicle beyond year 6, the math shifts toward buying. The "breakeven" point is typically around year 7-8.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When Leasing Makes Sense</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">You want the latest technology:</strong> Upgrade every 2-3 years as EVs improve</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">You don't qualify for tax credits:</strong> Income too high or vehicle doesn't qualify</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">You prefer lower monthly payments:</strong> Lease payments are typically 30-40% lower</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">You're uncertain about EV ownership:</strong> Try it without long-term commitment</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">You drive predictable miles:</strong> Can stay within lease mileage limits (10,000-15,000/year)</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">You use it for business:</strong> Lease payments may be tax-deductible</span></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When Buying Makes Sense</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">You plan to keep it long-term:</strong> 7+ years of ownership maximizes value</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">You qualify for tax credits:</strong> Get the full $7,500 federal credit</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">You drive a lot:</strong> No mileage restrictions when you own</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">You want to customize:</strong> Add accessories, modifications without restrictions</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">You're buying a Tesla:</strong> Strong resale value makes ownership attractive</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">You want payment-free years:</strong> After loan payoff, you own free and clear</span></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Special Considerations for 2026</h2>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Lease Deals Are Especially Good Right Now</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Manufacturers are offering aggressive EV lease deals to meet sales targets and comply with emissions regulations. Many lease deals effectively pass 100% of the tax credit to lessees, plus additional manufacturer incentives. Some EVs are leasing for less than $200/month after incentives.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Used EV Tax Credits</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              If you're considering a used EV, there's now a $4,000 federal tax credit available (income limits apply). This can make buying a 2-3 year old lease return particularly attractive—you get a nearly-new EV at a significant discount.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Technology Plateau Coming</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              While EV technology has improved dramatically, the pace of change is slowing. Most new EVs already offer 250-300+ miles of range and fast charging. The "fear of missing out" on new technology is becoming less of a concern, making long-term ownership more attractive.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Decision Framework</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Use this simple framework to guide your decision:
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-700/50">
                  <h4 className="text-white font-semibold">Question 1: How long do you plan to keep the vehicle?</h4>
                  <p className="text-slate-400 text-sm">Under 4 years → Lean toward leasing | Over 6 years → Lean toward buying</p>
                </div>
                <div className="pb-4 border-b border-slate-700/50">
                  <h4 className="text-white font-semibold">Question 2: Do you qualify for the federal tax credit?</h4>
                  <p className="text-slate-400 text-sm">No → Leasing captures the credit for you | Yes → Buying is more attractive</p>
                </div>
                <div className="pb-4 border-b border-slate-700/50">
                  <h4 className="text-white font-semibold">Question 3: How many miles do you drive annually?</h4>
                  <p className="text-slate-400 text-sm">Under 12,000 → Leasing works well | Over 15,000 → Buying avoids mileage penalties</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Question 4: What's your priority?</h4>
                  <p className="text-slate-400 text-sm">Lower monthly payments → Lease | Long-term value → Buy</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The <strong className="text-emerald-400">lease vs buy decision for EVs</strong> isn't one-size-fits-all. Both options have legitimate advantages depending on your circumstances, driving habits, and financial goals.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              In general, leasing works best for those who want lower payments, access to tax credits they wouldn't otherwise qualify for, and the flexibility to upgrade regularly. Buying works best for those who drive a lot, plan to keep the vehicle long-term, and want to eventually enjoy payment-free ownership.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Whichever path you choose, you'll be driving one of the most exciting and economical vehicles on the road. The real win is making the switch to electric—how you finance it is secondary to that decision.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Find Your EV?</h3>
            <p className="text-slate-300 mb-6">Whether you plan to lease or buy, explore our selection of electric vehicles to find the perfect match.</p>
            <Link href="/cars" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Electric Vehicles
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Leasing</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Buying Guide</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Financing</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Tax Credits</span>
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

"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVLeaseVsBuy() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Guides</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">EV Lease vs Buy: Which Saves You More?</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>12 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ev-lease-vs-buy.png" alt="Split-screen comparison of a modern electric sedan at a dealership and a home driveway with subtle financial graphics" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The lease vs buy decision for electric vehicles is different from gas cars. Rapidly evolving technology, federal tax credits, uncertain resale values, and battery warranties all change the math. Here&apos;s a comprehensive breakdown to help you decide which option saves more for your situation.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Case for Leasing an EV</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Access to the tax credit regardless of income</strong> — When you lease, the leasing company (not you) claims the $7,500 federal tax credit and passes the savings to you as a lower monthly payment. This means income limits and MSRP caps don&apos;t apply to your eligibility.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Technology protection</strong> — EV technology is improving rapidly. A 3-year lease lets you upgrade to a newer model with better range, faster charging, and improved features when the lease ends.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">No resale risk</strong> — EV depreciation is unpredictable. New models, price cuts (like Tesla&apos;s), and battery improvements can tank the value of older EVs. With a lease, that&apos;s the leasing company&apos;s problem.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Battery warranty coverage</strong> — Most leases end well within the battery warranty period (8-10 years). You&apos;ll never face an out-of-warranty battery replacement.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Lower monthly payments</strong> — Lease payments are typically 20-30% lower than loan payments for the same vehicle because you&apos;re only paying for depreciation, not the full value.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Case for Buying an EV</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Lower total cost over time</strong> — If you keep the car 7-10+ years, buying is almost always cheaper. Once the loan is paid off, you have years of payment-free ownership with minimal maintenance costs.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">No mileage restrictions</strong> — Leases typically cap at 10,000-12,000 miles per year. Excess mileage fees ($0.15-$0.25/mile) add up fast. If you drive 15,000+ miles annually, buying makes more sense.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Full tax credit (if eligible)</strong> — If you qualify for the $7,500 federal tax credit based on income and the vehicle meets MSRP requirements, you keep the full credit when buying.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Modification freedom</strong> — You can add aftermarket accessories, wrap the car, install a different charger, or make any changes without worrying about lease-end penalties.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Building equity</strong> — A purchased EV has residual value. Even after depreciation, you own an asset you can sell or trade in on your terms.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Cost Comparison: 3-Year Scenario</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Using a $45,000 EV as an example over 3 years:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 pr-4 text-white font-semibold">Factor</th>
                      <th className="text-left py-3 pr-4 text-white font-semibold">Lease</th>
                      <th className="text-left py-3 text-white font-semibold">Buy (Finance)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Monthly payment</td><td className="py-3 pr-4">~$350</td><td className="py-3">~$680 (72-month loan)</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Total payments (36 months)</td><td className="py-3 pr-4">$12,600</td><td className="py-3">$24,480</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Down payment</td><td className="py-3 pr-4">$2,000</td><td className="py-3">$5,000</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Tax credit benefit</td><td className="py-3 pr-4 text-emerald-400">$7,500 (via lower payment)</td><td className="py-3 text-emerald-400">$7,500 (if eligible)</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Vehicle value at 3 years</td><td className="py-3 pr-4">$0 (return it)</td><td className="py-3 text-emerald-400">~$27,000 (60% retained)</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Remaining loan balance</td><td className="py-3 pr-4">N/A</td><td className="py-3 text-red-400">~$20,400</td></tr>
                    <tr><td className="py-3 pr-4 font-medium text-white">Net cost at 3 years</td><td className="py-3 pr-4 font-medium text-white">~$7,100</td><td className="py-3 font-medium text-white">~$2,480 equity + ongoing payments</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-sm mt-4">Leasing costs less out-of-pocket in the first 3 years. But buying builds equity — if you sell or trade in at year 3, you have ~$6,600 in equity ($27,000 value minus $20,400 remaining loan). The gap narrows when you factor in buying and keeping the car long-term.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When Leasing Makes More Sense</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>You drive less than 12,000 miles per year</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>You want the latest technology every 3 years</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>You don&apos;t qualify for the federal tax credit when buying (income too high or wrong vehicle)</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>You&apos;re uncertain about long-term EV ownership and want to try it with lower commitment</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>You prefer predictable monthly costs and don&apos;t want to deal with resale</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When Buying Makes More Sense</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>You plan to keep the car 5+ years</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>You drive more than 12,000 miles annually</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>You qualify for the full federal tax credit</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>You want to modify the vehicle (wrap, accessories, etc.)</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>You can pay cash or make a large down payment to reduce interest costs</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Hidden Lease Costs to Watch</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Mileage overages</strong> — $0.15-$0.25 per mile over the limit. On a 10,000 mile/year lease, driving 15,000 miles costs an extra $750-$1,250 per year.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Disposition fee</strong> — $300-$500 charge when you return the vehicle at lease end. Some manufacturers waive this if you lease another vehicle.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Excess wear and tear</strong> — Scratches, dents, tire wear, and interior damage beyond &quot;normal&quot; use result in charges at lease return.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Early termination</strong> — Breaking a lease early is extremely expensive. The penalty can equal all remaining payments plus fees.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Verdict</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              For most EV shoppers in 2026, leasing is the smarter financial move for a 3-year horizon. The combination of tax credit access, technology protection, and no resale risk makes it compelling — especially while EV technology is evolving so rapidly.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              If you&apos;re confident you&apos;ll keep the car for 7+ years and you qualify for the purchase tax credit, buying wins on total cost. The key is being honest about how long you&apos;ll actually keep the car. Most people who say &quot;I&apos;ll keep it forever&quot; trade in at 4-5 years — and in that scenario, a lease would have saved them money.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Explore Electric Vehicles</h3>
            <p className="text-slate-300 mb-6">Browse our comprehensive database of electric vehicles with pricing, specs, and lease vs buy comparisons.</p>
            <Link href="/cars" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse All EVs
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or find EV dealers in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/leasing-vs-buying-ev" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Leasing vs Buying an EV</p></Link>
              <Link href="/blog/ev-tax-credits-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Tax Credits Guide 2026</p></Link>
              <Link href="/blog/real-cost-owning-ev-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">The Real Cost of Owning an EV</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Lease vs Buy</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Financing</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Tax Credits</span>
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

"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVvsGasMaintenanceCosts() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">EV vs Gas Car Maintenance Costs: A Complete Comparison</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>12 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ev-vs-gas-maintenance-costs.png" alt="Split comparison of electric vehicle and gas car maintenance" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              One of the biggest selling points of electric vehicles is lower maintenance costs. But how much do you actually save? The answer depends on what you drive, how long you keep it, and which costs you&apos;re comparing. Here&apos;s a detailed breakdown of every major maintenance category — EV vs gas.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Big Picture</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">According to data from AAA and Consumer Reports, EV owners spend roughly 40-50% less on maintenance over the life of the vehicle compared to gas car owners. The primary reason: EVs have far fewer moving parts — no engine, transmission, exhaust system, or oil to maintain.</p>
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <p className="text-emerald-400 text-2xl font-bold">~$0.06/mile</p>
                  <p className="text-slate-400 text-sm">Average EV maintenance cost</p>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                  <p className="text-red-400 text-2xl font-bold">~$0.10/mile</p>
                  <p className="text-slate-400 text-sm">Average gas car maintenance cost</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Category-by-Category Breakdown</h2>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Oil Changes — EV: $0 | Gas: $600 - $1,200/year</h3>
              <p className="text-slate-300 text-sm mb-2">Electric vehicles have no engine oil. This is the most obvious and immediate savings. A gas car needs oil changes every 5,000 - 7,500 miles, costing $40 - $100 each (or $150+ for synthetic in luxury vehicles). Over 5 years of typical driving, that&apos;s $2,000 - $5,000 in oil changes alone.</p>
              <p className="text-emerald-400 text-sm font-medium">EV advantage: $2,000 - $5,000 saved over 5 years</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Brakes — EV: 50-70% less | Gas: Standard wear</h3>
              <p className="text-slate-300 text-sm mb-2">EVs use regenerative braking, which recaptures energy and dramatically reduces wear on the physical brake pads and rotors. Many EV owners go 100,000+ miles before needing brake pad replacement. Gas cars typically need new pads every 30,000 - 50,000 miles ($150 - $400 per axle).</p>
              <p className="text-emerald-400 text-sm font-medium">EV advantage: $1,000 - $2,000 saved over 100k miles</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Transmission — EV: $0 | Gas: $500 - $3,500</h3>
              <p className="text-slate-300 text-sm mb-2">EVs use a simple single-speed reduction gear with no traditional transmission. No transmission fluid changes, no clutch wear, no torque converter issues. Gas cars need transmission fluid changes ($150 - $300) and can face costly transmission repairs or replacement ($1,500 - $3,500) as they age.</p>
              <p className="text-emerald-400 text-sm font-medium">EV advantage: $500 - $3,500 saved over vehicle lifetime</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Tires — EV: Slightly more | Gas: Standard</h3>
              <p className="text-slate-300 text-sm mb-2">This is one area where EVs cost more. EVs are heavier (due to the battery pack) and produce instant torque, which wears tires faster. EV-specific tires designed for the extra weight and low rolling resistance cost 10-20% more than standard tires. Expect to replace EV tires every 25,000 - 35,000 miles vs 40,000 - 50,000 for gas cars.</p>
              <p className="text-red-400 text-sm font-medium">Gas advantage: $500 - $1,000 saved over 5 years</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Coolant System — EV: Minimal | Gas: Moderate</h3>
              <p className="text-slate-300 text-sm mb-2">Both EVs and gas cars have cooling systems, but they work differently. EVs use a thermal management system for the battery and motor that&apos;s largely sealed and low-maintenance. Gas cars need coolant flushes every 30,000 - 50,000 miles ($100 - $200) plus potential radiator, thermostat, and water pump repairs.</p>
              <p className="text-emerald-400 text-sm font-medium">EV advantage: $300 - $800 saved over 5 years</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Exhaust System — EV: $0 | Gas: $200 - $2,000</h3>
              <p className="text-slate-300 text-sm mb-2">EVs have no exhaust system. Gas cars have catalytic converters, mufflers, exhaust pipes, and O2 sensors — all of which degrade over time and can be expensive to replace, especially catalytic converters ($1,000 - $2,500).</p>
              <p className="text-emerald-400 text-sm font-medium">EV advantage: $200 - $2,000 saved over vehicle lifetime</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Battery — EV: Warranty-covered | Gas: N/A</h3>
              <p className="text-slate-300 text-sm mb-2">The EV battery is the elephant in the room. Replacement costs $10,000 - $25,000+, but most EV batteries are warranted for 8 years / 100,000 miles and are designed to retain 70-80% capacity over that period. Out-of-warranty battery replacement is rare but expensive. Gas cars have their own costly long-term component: engine rebuild or replacement ($3,000 - $7,000+).</p>
              <p className="text-slate-400 text-sm font-medium">Depends on vehicle age and warranty coverage</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">5-Year Cost Comparison</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Category</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">EV (5 years)</th>
                    <th className="text-left py-3 text-white font-semibold">Gas Car (5 years)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Oil changes</td><td className="py-3 pr-4 text-emerald-400">$0</td><td className="py-3">$2,000 - $4,000</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Brake pads/rotors</td><td className="py-3 pr-4 text-emerald-400">$0 - $300</td><td className="py-3">$600 - $1,200</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Transmission service</td><td className="py-3 pr-4 text-emerald-400">$0</td><td className="py-3">$300 - $600</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Tires</td><td className="py-3 pr-4">$1,600 - $2,400</td><td className="py-3 text-emerald-400">$1,200 - $1,800</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Coolant/fluids</td><td className="py-3 pr-4 text-emerald-400">$0 - $100</td><td className="py-3">$200 - $400</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Cabin air filter</td><td className="py-3 pr-4">$50 - $100</td><td className="py-3">$50 - $100</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Wiper blades</td><td className="py-3 pr-4">$60 - $120</td><td className="py-3">$60 - $120</td></tr>
                  <tr className="border-b border-slate-700 font-bold"><td className="py-3 pr-4 text-white">Total (5 years)</td><td className="py-3 pr-4 text-emerald-400">$1,710 - $3,020</td><td className="py-3 text-red-400">$4,410 - $8,220</td></tr>
                </tbody>
              </table>
              <p className="text-slate-400 text-xs mt-4">*Based on 12,000 miles/year average driving. Excludes insurance, fuel/electricity, and depreciation.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Hidden EV Costs</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">EVs aren&apos;t maintenance-free. Here are the costs that catch some owners off guard:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">12V battery replacement</strong> — EVs still have a 12V battery for accessories. It fails every 3-5 years and costs $100 - $300 to replace.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Suspension wear</strong> — The extra weight of the battery pack puts more stress on suspension components. Struts and shocks may need replacement sooner.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Higher insurance</strong> — Not maintenance per se, but EV insurance averages 15-30% more due to higher repair costs.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Specialized repair labor</strong> — When something does go wrong, EV-certified technicians charge more per hour, and fewer shops can do the work.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Verdict</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              EVs are significantly cheaper to maintain over time. The elimination of oil changes, reduced brake wear, and no transmission or exhaust system create real savings that add up to thousands of dollars over a 5-year ownership period.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              The main exception is tires (EVs cost more) and the long-term battery question (which is largely covered by warranty). For most owners driving a mainstream EV, maintenance savings of $3,000 - $5,000 over 5 years are realistic.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find EV-Certified Service Providers</h3>
            <p className="text-slate-300 mb-6">Whether you drive an EV or gas car, find trusted detailing, body repair, and maintenance services near you.</p>
            <Link href="/directory" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Service Providers
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/real-cost-owning-ev-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">The Real Cost of Owning an EV in 2026</p></Link>
              <Link href="/blog/ev-insurance-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Insurance Guide</p></Link>
              <Link href="/blog/winter-ev-care-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Winter EV Care Guide</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Maintenance</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Gas vs Electric</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Cost Comparison</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Ownership</span>
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

"use client";
import Link from "next/link";
import Image from "next/image";

export default function EvChargingCostComparison() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8"><svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Back to Blog</Link>
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Guides</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">EV Charging Costs Explained: Home vs Public vs Supercharging in 2026</h1>
            <div className="flex items-center gap-4 text-slate-400"><span>January 26, 2026</span><span className="w-1.5 h-1.5 rounded-full bg-slate-600" /><span>15 min read</span></div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12"><Image src="/blog/ev-charging-cost-comparison.png" alt="Electric vehicle charging cost comparison chart" fill className="object-cover" priority /><div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" /></div>
        </div>
      </section>
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">Understanding <strong className="text-emerald-400">how much it costs to charge an EV</strong> is essential for calculating your true ownership costs. The answer varies dramatically depending on where and how you charge. Home charging can cost as little as $0.03 per mile, while DC fast charging on some networks can hit $0.15 per mile. This guide breaks down every charging scenario so you can make informed decisions and <strong className="text-emerald-400">minimize your EV charging costs</strong>.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Home Charging: The Most Affordable Option</h2>
            <p className="text-slate-300 leading-relaxed mb-6">About 80% of EV charging happens at home, and for good reason — it&apos;s by far the cheapest way to charge. The average US residential electricity rate is about $0.16 per kWh. For an EV averaging 3.5 miles per kWh, that works out to approximately $0.046 per mile or about $40-55 per month for the average driver (12,000 miles/year).</p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Home Charging Cost Breakdown</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Level 1 (120V Standard Outlet)</h4><p className="text-slate-400 text-sm">3-5 miles per hour, no installation cost</p></div>
                  <span className="text-emerald-400 font-bold">~$0.046/mi</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Level 2 (240V Dedicated Circuit)</h4><p className="text-slate-400 text-sm">25-30 miles per hour, $500-2,000 install</p></div>
                  <span className="text-emerald-400 font-bold">~$0.040/mi</span>
                </div>
                <div className="flex justify-between items-center">
                  <div><h4 className="text-white font-semibold">Level 2 + TOU Rates (Off-Peak)</h4><p className="text-slate-400 text-sm">Charge 11pm-6am at discounted rates</p></div>
                  <span className="text-emerald-400 font-bold">~$0.025/mi</span>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">Many utilities offer Time-of-Use (TOU) rates with off-peak electricity as low as $0.08-0.10 per kWh between 11pm and 6am. If you charge during these hours — which most EVs can schedule automatically — your cost per mile drops to about $0.025. That&apos;s roughly one-fifth the cost of gasoline.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Public Level 2 Charging</h2>
            <p className="text-slate-300 leading-relaxed mb-6">Public Level 2 stations are found at shopping centers, workplaces, hotels, and parking garages. Pricing varies significantly by network and location:</p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50 text-sm"><span className="text-slate-300">ChargePoint (varies by host)</span><span className="text-slate-400">$0.20 - $0.45/kWh</span></div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50 text-sm"><span className="text-slate-300">Blink Network</span><span className="text-slate-400">$0.04 - $0.06/min or $0.39/kWh</span></div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50 text-sm"><span className="text-slate-300">Workplace/Hotel (often free)</span><span className="text-emerald-400">$0.00</span></div>
                <div className="flex justify-between items-center text-sm"><span className="text-slate-300">Average cost per mile (L2 public)</span><span className="text-yellow-400 font-bold">~$0.06 - $0.10/mi</span></div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">DC Fast Charging: Network-by-Network Pricing</h2>
            <p className="text-slate-300 leading-relaxed mb-6">DC fast charging is the most expensive option but essential for road trips. Here&apos;s what each major network charges in 2026:</p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50"><div><h4 className="text-white font-semibold">Tesla Supercharger</h4><p className="text-slate-400 text-sm">Tesla owners / NACS adapters</p></div><span className="text-emerald-400 font-bold">$0.30-0.45/kWh</span></div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50"><div><h4 className="text-white font-semibold">Electrify America</h4><p className="text-slate-400 text-sm">CCS/NACS, up to 350kW</p></div><span className="text-yellow-400 font-bold">$0.43-0.48/kWh</span></div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50"><div><h4 className="text-white font-semibold">EVgo</h4><p className="text-slate-400 text-sm">CCS/NACS, up to 350kW</p></div><span className="text-yellow-400 font-bold">$0.31-0.36/kWh</span></div>
                <div className="flex justify-between items-center"><div><h4 className="text-white font-semibold">ChargePoint DC</h4><p className="text-slate-400 text-sm">Varies by host, CCS/NACS</p></div><span className="text-yellow-400 font-bold">$0.35-0.60/kWh</span></div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">Membership plans can reduce DC fast charging costs significantly. Electrify America&apos;s Pass+ membership ($4/month) reduces per-kWh pricing. EVgo offers similar membership tiers. Tesla Supercharging is generally the most affordable and reliable DC fast charging network available.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">EV vs Gas: Cost Per Mile Comparison</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Monthly Fuel Cost (1,000 miles/month)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50 text-sm"><span className="text-slate-300">EV — Home L2 (off-peak)</span><span className="text-emerald-400 font-bold">$25/month</span></div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50 text-sm"><span className="text-slate-300">EV — Home L2 (standard rate)</span><span className="text-emerald-400 font-bold">$46/month</span></div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50 text-sm"><span className="text-slate-300">EV — Mix of home + public DC</span><span className="text-yellow-400 font-bold">$65/month</span></div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50 text-sm"><span className="text-slate-300">EV — All DC fast charging</span><span className="text-yellow-400 font-bold">$100/month</span></div>
                <div className="flex justify-between items-center text-sm"><span className="text-slate-300">Gas car (30 MPG, $3.50/gal)</span><span className="text-red-400 font-bold">$117/month</span></div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How to Minimize Your Charging Costs</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start"><span className="text-emerald-400 mr-2 font-bold">1.</span>Install a Level 2 home charger and charge overnight on TOU rates</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2 font-bold">2.</span>Sign up for charging network memberships (saves 15-25%)</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2 font-bold">3.</span>Use free workplace and hotel charging whenever available</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2 font-bold">4.</span>Charge to 80% on DC fast chargers — the last 20% is slower and more expensive per kWh</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2 font-bold">5.</span>Consider solar panels — after payoff, your per-mile cost drops to nearly $0</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2 font-bold">6.</span>Use apps like PlugShare and ABRP to find the cheapest chargers on your route</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-2 font-bold">7.</span>Take advantage of free charging promotions from dealerships and charging networks</li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Bottom Line</h2>
            <p className="text-slate-300 leading-relaxed mb-6">For most EV owners who charge primarily at home, <strong className="text-emerald-400">electricity costs about one-third to one-quarter</strong> of what gasoline costs per mile. Even if you rely entirely on DC fast charging — the most expensive option — you&apos;ll likely still spend less than a comparable gas car. The key is to charge at home whenever possible and take advantage of off-peak electricity rates.</p>
            <p className="text-slate-300 leading-relaxed mb-8">The <strong className="text-emerald-400">cost to charge an EV</strong> continues to drop as competition increases among charging networks and utilities offer more EV-friendly rate structures. Combined with zero oil changes and reduced brake wear, the total cost of EV ownership is compelling — and only getting better.</p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Keep Your EV in Peak Condition</h3>
            <p className="text-slate-300 mb-6">Saving on fuel is just the start. Find certified EV care specialists to keep your electric vehicle looking and performing its best.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">Browse EV Services<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
          </div>
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Electric Vehicles</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Charging</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Cost Comparison</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Tips</span>
            </div>
            <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"><svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Back to All Articles</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

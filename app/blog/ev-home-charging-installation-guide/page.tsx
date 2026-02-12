"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVHomeChargingInstallationGuide() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">EV Charging at Home: Complete Installation Guide</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>13 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ev-home-charging-installation-guide.png" alt="Modern home garage with wall-mounted Level 2 EV charger connected to a white electric vehicle" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Over 80% of EV charging happens at home. A properly installed Level 2 charger transforms your EV experience — you wake up every morning with a full battery, never visit a gas station, and spend roughly $40-60/month on &quot;fuel.&quot; Here&apos;s everything you need to know about getting one installed.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Level 1 vs Level 2: Do You Need an Upgrade?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Feature</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Level 1 (120V)</th>
                    <th className="text-left py-3 text-white font-semibold">Level 2 (240V)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Power</td><td className="py-3 pr-4">1.4 kW</td><td className="py-3">7.2 - 19.2 kW</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Miles added per hour</td><td className="py-3 pr-4">3-5 miles</td><td className="py-3">25-50 miles</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Full charge time (300mi)</td><td className="py-3 pr-4 text-red-400">60-80 hours</td><td className="py-3 text-emerald-400">6-12 hours</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Installation needed</td><td className="py-3 pr-4 text-emerald-400">No (standard outlet)</td><td className="py-3">Yes (240V circuit)</td></tr>
                  <tr><td className="py-3 pr-4">Best for</td><td className="py-3 pr-4">PHEVs, &lt;30 mi/day</td><td className="py-3 text-emerald-400">All BEVs, daily drivers</td></tr>
                </tbody>
              </table>
              <p className="text-slate-400 text-sm mt-4">If you drive more than 30-40 miles per day or own a full battery EV, Level 2 is effectively mandatory. Level 1 simply can&apos;t keep up with daily driving needs.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Choosing a Home Charger (EVSE)</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Amperage: 48A is the sweet spot</strong> — A 48-amp charger on a 60-amp circuit delivers ~11.5 kW, which adds about 35-44 miles of range per hour. This fully charges most EVs overnight. Going higher (60A+) requires a more expensive circuit and rarely provides meaningful benefit.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Hardwired vs plug-in</strong> — Hardwired chargers are permanently connected to your electrical panel and look cleaner. Plug-in (NEMA 14-50) chargers can be unplugged and taken with you if you move. Both perform identically.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Wi-Fi connectivity</strong> — Smart chargers let you schedule charging for off-peak electricity hours, track energy usage, and set charging limits from your phone. The savings from off-peak scheduling alone can justify the price difference.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Cable length: 25 ft minimum</strong> — Measure from where the charger will mount to the farthest possible charging port position on your car. Short cables are the #1 complaint from charger owners.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">J1772 connector (universal)</strong> — All non-Tesla EVs use J1772 for Level 2. Teslas come with a J1772 adapter, so a J1772 charger works for every EV on the market.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Top Home Chargers</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">ChargePoint Home Flex</strong> — 50A, Wi-Fi, 23ft cable, NEMA 14-50 or hardwired. ~$700. The most popular home charger in the US for good reason.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Grizzl-E Classic</strong> — 40A, no Wi-Fi (keeps it simple), 24ft cable, NEMA 14-50. ~$400. The reliability-focused budget pick. Made in Canada, excellent build quality.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Emporia Smart Level 2</strong> — 48A, Wi-Fi, energy monitoring, 24ft cable. ~$500. Best value smart charger. Integrates with Emporia Vue energy monitoring.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Tesla Wall Connector</strong> — 48A, Wi-Fi, 24ft cable, hardwired only. ~$475. Tesla owners get the cleanest integration and up to 44 miles/hour. Works with J1772 adapter for non-Tesla EVs too.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Electrical Requirements</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">This is where most of the installation cost comes from. Your home&apos;s electrical system needs to support the additional load.</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Panel capacity</strong> — A 48A charger requires a 60A dedicated circuit breaker. Your main panel (typically 100A, 150A, or 200A) needs enough spare capacity. Homes with 200A panels rarely have issues. Homes with 100A panels may need a panel upgrade ($1,500-$3,000).</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Dedicated circuit</strong> — The charger needs its own circuit — no sharing with other appliances. The electrician will run a new wire from your panel to the charger location.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Wire gauge</strong> — A 48A charger requires 6-gauge copper wire (or 4-gauge aluminum). The longer the run from your panel, the more wire is needed — and wire is a significant portion of the cost.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Permits</strong> — Most jurisdictions require a permit for a 240V circuit installation. Your electrician should handle the permit and inspection. Typical cost: $50-$200.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Installation Costs</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Component</th>
                    <th className="text-left py-3 text-white font-semibold">Cost Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">EVSE unit</td><td className="py-3">$400 - $700</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Electrician labor</td><td className="py-3">$400 - $1,200</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Wire and materials</td><td className="py-3">$100 - $500</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Permit and inspection</td><td className="py-3">$50 - $200</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Panel upgrade (if needed)</td><td className="py-3">$1,500 - $3,000</td></tr>
                  <tr style={{fontWeight: 'bold'}}><td className="py-3 pr-4 font-medium text-white">Typical total (no panel upgrade)</td><td className="py-3 text-emerald-400">$950 - $2,600</td></tr>
                </tbody>
              </table>
              <p className="text-slate-400 text-xs mt-4">*The biggest variable is distance from your electrical panel to the charger. A charger mounted on the same wall as the panel might cost $500 to install. Running wire 50+ feet through walls and ceiling can push labor past $1,500.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Tax Credits and Incentives</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Federal tax credit (30C)</strong> — Up to 30% of the total cost (equipment + installation), capped at $1,000 for residential. This covers both the charger and electrician fees.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">State and utility rebates</strong> — Many states and local utilities offer additional $200-$500 rebates for home charger installation. Check your utility&apos;s website or DSIRE.org for local programs.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Time-of-use rates</strong> — Many utilities offer special EV rates that drop electricity to $0.05-$0.08/kWh during off-peak hours (typically 11pm-7am). A smart charger can be scheduled to charge only during these windows.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Installation Tips</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Mount at the right height</strong> — 42-48 inches from the floor is standard. This puts the connector at a comfortable height and keeps the cable off the ground.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Consider future-proofing</strong> — If you might get a second EV, have the electrician run conduit or wire for a second circuit now. It&apos;s much cheaper during the initial installation.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Outdoor installation</strong> — All recommended chargers are NEMA 4 rated (weather-resistant). However, a covered location extends the charger&apos;s lifespan and keeps the connector dry.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Get multiple electrician quotes</strong> — Prices vary significantly. Get at least 3 quotes and ensure each includes permit and inspection costs. Avoid anyone who suggests skipping the permit.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Verdict</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              A home Level 2 charger is the single best upgrade you can make as an EV owner. The convenience of waking up to a full battery every day, combined with off-peak electricity rates, makes home charging both the cheapest and most convenient way to power your vehicle.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              For most homeowners, a 48A charger with Wi-Fi connectivity on a dedicated 60A circuit is the ideal setup. Total investment including installation typically runs $1,000-$2,000, much of which is offset by the federal tax credit. It&apos;s one of those purchases that pays for itself quickly and improves daily life immediately.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find EV Charging Installation Services</h3>
            <p className="text-slate-300 mb-6">Browse certified electricians and EV charging installation providers near you.</p>
            <Link href="/directory" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Directory
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/how-to-install-home-ev-charger" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Install a Home EV Charger</p></Link>
              <Link href="/blog/ev-charging-levels-explained" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Charging Levels Explained</p></Link>
              <Link href="/blog/ev-charging-cost-comparison" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Charging Cost Comparison</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Charging</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Home Installation</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Level 2</span>
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

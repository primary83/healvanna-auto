"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVBatteryWarrantyGuide() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Technology</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Understanding EV Battery Warranties</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>12 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ev-battery-warranty-guide.png" alt="Modern electric vehicle in a clean bright service center with battery diagnostic equipment" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The battery is the most expensive component in any electric vehicle — often accounting for 30-40% of the total vehicle cost. Understanding what your battery warranty covers, how claims work, and what can void it is essential knowledge for every EV owner and buyer.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Federal Warranty Requirements</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">In the United States, federal regulations require all EV manufacturers to provide a minimum battery warranty. However, most manufacturers exceed the federal minimum:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Federal minimum:</strong> 8 years / 100,000 miles for the battery pack and electric drivetrain</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">California and CARB states:</strong> 10 years / 150,000 miles (applies to 15+ states that follow California emissions standards)</div></li>
              </ul>
              <p className="text-slate-400 text-sm mt-4">These are minimums. Many manufacturers offer more generous terms, especially for premium models.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Battery Warranty by Manufacturer</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 pr-4 text-white font-semibold">Manufacturer</th>
                      <th className="text-left py-3 pr-4 text-white font-semibold">Duration</th>
                      <th className="text-left py-3 pr-4 text-white font-semibold">Capacity Guarantee</th>
                      <th className="text-left py-3 text-white font-semibold">Transferable?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Tesla</td><td className="py-3 pr-4">8 yr / 120,000-150,000 mi</td><td className="py-3 pr-4 text-emerald-400">70% retention</td><td className="py-3 text-emerald-400">Yes</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Hyundai</td><td className="py-3 pr-4 text-emerald-400">10 yr / 100,000 mi</td><td className="py-3 pr-4 text-emerald-400">70% retention</td><td className="py-3 text-emerald-400">Yes</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Kia</td><td className="py-3 pr-4 text-emerald-400">10 yr / 100,000 mi</td><td className="py-3 pr-4 text-emerald-400">70% retention</td><td className="py-3 text-emerald-400">Yes</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">BMW</td><td className="py-3 pr-4">8 yr / 100,000 mi</td><td className="py-3 pr-4 text-emerald-400">70% retention</td><td className="py-3 text-emerald-400">Yes</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Ford</td><td className="py-3 pr-4">8 yr / 100,000 mi</td><td className="py-3 pr-4 text-emerald-400">70% retention</td><td className="py-3 text-emerald-400">Yes</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Rivian</td><td className="py-3 pr-4">8 yr / 175,000 mi</td><td className="py-3 pr-4 text-emerald-400">70% retention</td><td className="py-3 text-emerald-400">Yes</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Mercedes (EQ)</td><td className="py-3 pr-4 text-emerald-400">10 yr / 155,000 mi</td><td className="py-3 pr-4 text-emerald-400">70% retention</td><td className="py-3 text-emerald-400">Yes</td></tr>
                    <tr><td className="py-3 pr-4 font-medium text-white">Chevrolet</td><td className="py-3 pr-4">8 yr / 100,000 mi</td><td className="py-3 pr-4 text-emerald-400">70% retention</td><td className="py-3 text-emerald-400">Yes</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-xs mt-4">Warranty terms may vary by model and model year. Always verify with your specific vehicle&apos;s documentation.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What &quot;70% Capacity Retention&quot; Means</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Most EV battery warranties guarantee the battery will retain at least 70% of its original capacity during the warranty period. Here&apos;s what that looks like in practice:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Original range: 300 miles</strong> — If the battery degrades below 210 miles of capacity (70%), the manufacturer must repair or replace it under warranty.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">At 75% capacity:</strong> Your 300-mile EV now gets about 225 miles. This is normal degradation and is NOT covered by the warranty.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">At 68% capacity:</strong> Your 300-mile EV now gets about 204 miles. This IS covered — you can file a warranty claim.</div></li>
              </ul>
              <p className="text-slate-400 text-sm mt-4">Most modern EVs retain 85-95% battery capacity at the 8-year mark under normal use. Reaching the 70% threshold within the warranty period is relatively uncommon with current battery technology.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What&apos;s Covered vs. What&apos;s Not</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-3">Typically Covered</h4>
              <ul className="space-y-3 text-slate-300 mb-6">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Complete battery failure (won&apos;t hold charge)</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Capacity degradation below the guaranteed threshold (typically 70%)</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Defective battery cells or modules</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Battery management system (BMS) failures</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Thermal management system defects</div></li>
              </ul>
              <h4 className="text-white font-semibold mb-3">Typically NOT Covered</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div>Normal capacity degradation above the guaranteed threshold</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div>Damage from accidents, flooding, or physical impact</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div>Unauthorized modifications to the battery or charging system</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div>Using non-approved charging equipment that causes damage</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div>Range reduction due to extreme temperatures (temporary, not degradation)</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Happens During a Warranty Claim?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ol className="space-y-4 text-slate-300 list-decimal list-inside">
                <li><strong className="text-white">Report the issue to a dealer</strong> — Bring your EV to an authorized service center. Describe the symptoms — reduced range, charging errors, or capacity loss.</li>
                <li><strong className="text-white">Diagnostic testing</strong> — The dealer runs manufacturer-specific diagnostic software to assess battery health, individual cell voltages, and capacity. This is the definitive measurement.</li>
                <li><strong className="text-white">Manufacturer review</strong> — The diagnostic data is sent to the manufacturer for review and claim approval. This can take days to weeks depending on the manufacturer.</li>
                <li><strong className="text-white">Repair or replacement</strong> — If approved, the manufacturer will either replace individual battery modules (most common) or the entire pack. Replacement batteries are often refurbished packs with new cells in the existing casing.</li>
                <li><strong className="text-white">No cost to you</strong> — Warranty repairs are fully covered including parts and labor. You should not be charged anything for a legitimate warranty claim.</li>
              </ol>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How to Maximize Battery Longevity</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Following these practices helps ensure your battery stays healthy well beyond the warranty period:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Keep daily charge between 20-80%</strong> — Avoid keeping the battery at 100% or letting it drop near 0% regularly. Charge to 100% only before long trips.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Minimize DC fast charging</strong> — Level 2 home charging is gentler on the battery. Use DC fast charging for road trips, not daily charging.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Park in shade when possible</strong> — Extreme heat accelerates battery degradation. A garage-kept EV will have better long-term battery health.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Precondition the battery</strong> — In cold weather, precondition while plugged in. This uses grid power instead of battery power to warm the pack.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Keep software updated</strong> — Manufacturers frequently push battery management optimizations via over-the-air updates. Stay current.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Warranty Considerations for Used EV Buyers</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">If you&apos;re buying a used EV, the battery warranty is one of the most important factors:</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Check transferability</strong> — Most manufacturers transfer the battery warranty to subsequent owners. Verify this for your specific model.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Check remaining warranty</strong> — A 2020 EV with an 8-year warranty has coverage until 2028. Calculate how much time and mileage remain.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Request a battery health report</strong> — Ask the seller or dealer for a current State of Health (SOH) reading. This shows the battery&apos;s current capacity as a percentage of original.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Review service history</strong> — Look for evidence of regular maintenance and whether any battery-related service has been performed.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Beyond the Warranty</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              When the warranty expires, your battery doesn&apos;t suddenly fail. Modern EV batteries are designed to last 200,000+ miles with reasonable care. The warranty is a floor, not a ceiling. Most EV owners who follow basic charging best practices will never need a warranty claim.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              If your battery does eventually need replacement out of warranty, the cost has been dropping steadily. Battery pack prices have fallen roughly 90% since 2010, and that trend continues. Third-party repair shops specializing in EV batteries are also emerging, offering alternatives to dealer pricing.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Explore Electric Vehicles</h3>
            <p className="text-slate-300 mb-6">Browse our comprehensive database of electric vehicles with warranty details, specs, and pricing comparisons.</p>
            <Link href="/cars" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse All EVs
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or find EV service providers in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/ev-battery-degradation-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Battery Degradation: What to Expect</p></Link>
              <Link href="/blog/ev-home-charging-installation-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Home EV Charging Installation Guide</p></Link>
              <Link href="/blog/ev-maintenance-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Complete EV Maintenance Guide</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Battery Warranty</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Technology</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Electric Vehicles</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Buyer Guide</span>
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

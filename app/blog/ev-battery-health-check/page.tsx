"use client";
import Link from "next/link";
import Image from "next/image";

export default function EvBatteryHealthCheck() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8"><svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Back to Blog</Link>
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Guides</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">How to Check EV Battery Health Before Buying: The Complete Guide</h1>
            <div className="flex items-center gap-4 text-slate-400"><span>January 26, 2026</span><span className="w-1.5 h-1.5 rounded-full bg-slate-600" /><span>14 min read</span></div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12"><Image src="/blog/ev-battery-health-check.png" alt="Electric vehicle battery health diagnostic check" fill className="object-cover" priority /><div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" /></div>
        </div>
      </section>
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">The battery is the most valuable component in any electric vehicle, so knowing <strong className="text-emerald-400">how to check EV battery health</strong> before purchasing a used EV is essential. This guide covers everything from understanding State of Health (SOH) metrics to the specific tools you&apos;ll need for each brand, plus the red flags that should make you walk away from a deal.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Understanding Battery Degradation</h2>
            <p className="text-slate-300 leading-relaxed mb-6">Every lithium-ion battery gradually loses capacity over time — this is called <strong className="text-emerald-400">battery degradation</strong>. The rate depends on several factors: charge cycles, temperature exposure, charging speed habits, and the battery&apos;s thermal management system. Modern EVs with liquid-cooled battery packs (Tesla, Hyundai/Kia, VW) degrade much slower than air-cooled systems (early Nissan Leaf).</p>
            <p className="text-slate-300 leading-relaxed mb-6">Degradation isn&apos;t linear — batteries lose capacity faster in the first year or two, then the rate slows considerably. A typical EV might lose 5% in the first two years, then only 1-2% per year after that. Think of it like a new car&apos;s depreciation curve, but for battery capacity instead of value.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">State of Health (SOH) Explained</h2>
            <p className="text-slate-300 leading-relaxed mb-6">State of Health is the primary metric for <strong className="text-emerald-400">EV battery capacity</strong>. Expressed as a percentage, SOH represents the battery&apos;s current maximum capacity compared to when it was new. A battery at 90% SOH means it can hold 90% of its original energy capacity. Here&apos;s what different SOH levels mean in practice:</p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50"><div><h4 className="text-white font-semibold">95-100% SOH</h4><p className="text-slate-400 text-sm">Like new — typical for vehicles under 2 years/30K miles</p></div><span className="text-emerald-400 font-bold">Excellent</span></div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50"><div><h4 className="text-white font-semibold">85-94% SOH</h4><p className="text-slate-400 text-sm">Normal wear — typical for 3-5 years/50K-100K miles</p></div><span className="text-emerald-400 font-bold">Good</span></div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50"><div><h4 className="text-white font-semibold">75-84% SOH</h4><p className="text-slate-400 text-sm">Noticeable range reduction — negotiate price accordingly</p></div><span className="text-yellow-400 font-bold">Fair</span></div>
                <div className="flex justify-between items-center"><div><h4 className="text-white font-semibold">Below 75% SOH</h4><p className="text-slate-400 text-sm">Significant degradation — may trigger warranty replacement</p></div><span className="text-red-400 font-bold">Caution</span></div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How to Test Battery Health by Brand</h2>
            <p className="text-slate-300 leading-relaxed mb-6">Different manufacturers require different tools and approaches. Here&apos;s how to check <strong className="text-emerald-400">EV battery degradation</strong> for the most popular brands:</p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="space-y-6">
                <div><h4 className="text-emerald-400 font-semibold mb-2">Tesla</h4><p className="text-slate-300 text-sm">Use the &quot;Scan My Tesla&quot; app ($15) with an OBD-II Bluetooth adapter. It shows battery capacity in kWh, SOH percentage, individual cell voltages, and lifetime charging data. Tesla&apos;s own app shows estimated range, but the third-party tool provides more detailed data.</p></div>
                <div><h4 className="text-emerald-400 font-semibold mb-2">Nissan Leaf</h4><p className="text-slate-300 text-sm">LeafSpy Pro ($15) is the gold standard. Connect via OBD-II and get SOH, individual cell voltages, battery temperature history, and quick charge count. The Leaf&apos;s dashboard also shows battery health bars — each bar represents roughly 15% capacity.</p></div>
                <div><h4 className="text-emerald-400 font-semibold mb-2">Hyundai / Kia (E-GMP)</h4><p className="text-slate-300 text-sm">Use the &quot;EV Watchdog&quot; or &quot;Battery Life&quot; app with an OBD-II adapter. These apps read the Battery Management System data and display SOH, cumulative energy throughput, and cell balance. Hyundai/Kia dealers can also run a complimentary battery health report.</p></div>
                <div><h4 className="text-emerald-400 font-semibold mb-2">Chevrolet / GM</h4><p className="text-slate-300 text-sm">The myChevrolet app shows estimated battery health. For detailed analysis, &quot;Torque Pro&quot; with the extended EV PID set provides SOH and cell-level data. GM dealers can run a full diagnostic with their GDS tool.</p></div>
                <div><h4 className="text-emerald-400 font-semibold mb-2">Universal Option</h4><p className="text-slate-300 text-sm">Recurrent Auto ($20/report) provides a battery health analysis based on telematics data. It works across brands and provides a range confidence score based on real-world driving data from thousands of EVs.</p></div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Brand-by-Brand Degradation Data</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Average SOH at 100,000 Miles</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50 text-sm"><span className="text-slate-300">Tesla Model 3/Y</span><span className="text-emerald-400 font-bold">90-93%</span></div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50 text-sm"><span className="text-slate-300">Hyundai Ioniq 5 / Kia EV6</span><span className="text-emerald-400 font-bold">90-94%</span></div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50 text-sm"><span className="text-slate-300">Chevy Bolt EV/EUV</span><span className="text-emerald-400 font-bold">88-92%</span></div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50 text-sm"><span className="text-slate-300">VW ID.4</span><span className="text-emerald-400 font-bold">89-93%</span></div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50 text-sm"><span className="text-slate-300">Ford Mustang Mach-E</span><span className="text-emerald-400 font-bold">88-91%</span></div>
                <div className="flex justify-between items-center text-sm"><span className="text-slate-300">Nissan Leaf (40kWh)</span><span className="text-yellow-400 font-bold">78-85%</span></div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Warranty Coverage to Know</h2>
            <p className="text-slate-300 leading-relaxed mb-6">Federal regulations require EV manufacturers to warrant batteries for at least 8 years or 100,000 miles. Most warranties guarantee the battery will retain at least 70% of its original capacity during this period. If SOH drops below 70%, the manufacturer must replace or repair the battery at no cost.</p>
            <p className="text-slate-300 leading-relaxed mb-6">Some brands go further: Hyundai/Kia offer 10 years/100,000 miles, and this warranty transfers to subsequent owners. Tesla covers 8 years with mileage caps varying by model (100K-150K miles). When buying used, always calculate the remaining warranty period — it&apos;s essentially free insurance on the most expensive component.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Red Flags When Buying</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start"><span className="text-red-400 mr-2 font-bold">⚠</span>SOH below 80% with significant warranty remaining — could indicate abuse or defect</li>
                <li className="flex items-start"><span className="text-red-400 mr-2 font-bold">⚠</span>Seller refuses to allow a battery health scan — always walk away</li>
                <li className="flex items-start"><span className="text-red-400 mr-2 font-bold">⚠</span>Large voltage imbalance between cells (&gt;0.05V difference) — indicates potential cell failure</li>
                <li className="flex items-start"><span className="text-red-400 mr-2 font-bold">⚠</span>History of extreme climate storage without garage (hot desert or extreme cold)</li>
                <li className="flex items-start"><span className="text-red-400 mr-2 font-bold">⚠</span>Exclusively DC fast charged — while modern batteries handle this well, it&apos;s a factor</li>
                <li className="flex items-start"><span className="text-red-400 mr-2 font-bold">⚠</span>Salvage or rebuilt title — battery and high-voltage system integrity uncertain</li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Checklist</h2>
            <p className="text-slate-300 leading-relaxed mb-6">Before signing on a used EV, make sure you&apos;ve verified the battery SOH with a diagnostic tool, checked for open recalls, confirmed remaining warranty coverage, reviewed service records, and test-driven the vehicle to verify range is consistent with the SOH reading. A small investment in a diagnostic scan can save you thousands by revealing hidden battery issues before purchase.</p>
            <p className="text-slate-300 leading-relaxed mb-8">With proper due diligence, buying a used EV with a healthy battery is one of the smartest automotive purchases you can make. The key is knowing what to look for — and now you do.</p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Comprehensive EV Care</h3>
            <p className="text-slate-300 mb-6">Once you&apos;ve found the perfect used EV, connect with specialists who understand electric vehicle care inside and out.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">Find EV Specialists<svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Link>
          </div>
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Electric Vehicles</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Maintenance</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Battery Health</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Buying Tips</span>
            </div>
            <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"><svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>Back to All Articles</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

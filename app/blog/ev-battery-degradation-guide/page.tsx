"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVBatteryDegradationGuide() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Electric Car Battery Degradation: What to Expect</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>13 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ev-battery-degradation-guide.png" alt="Cutaway cross-section view of an electric vehicle battery pack with glowing blue energy cells" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Every EV battery loses capacity over time. That&apos;s not a defect — it&apos;s chemistry. The real question isn&apos;t whether your battery will degrade, but how much and how fast. The answer, backed by real-world data from millions of EVs on the road, is more reassuring than most people expect.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How EV Battery Degradation Works</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Lithium-ion batteries degrade through two primary mechanisms:</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Calendar aging</strong> — The battery loses capacity simply by existing, regardless of use. Chemical side reactions slowly consume active lithium ions and create resistive layers on the electrodes. This happens even if the car sits unused.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Cycle aging</strong> — Every charge and discharge cycle causes microscopic structural changes in the electrode materials. The more deeply and frequently you cycle the battery, the faster this progresses.</div></li>
              </ul>
              <p className="text-slate-300 mt-4">In practice, most degradation in the first few years comes from calendar aging. Cycle aging becomes more significant in high-mileage vehicles and those frequently fast-charged.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Real-World Degradation Rates</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Large-scale data from fleet tracking services and owner surveys consistently shows that modern EV batteries degrade far less than early predictions suggested.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Vehicle Age</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Avg. Capacity Remaining</th>
                    <th className="text-left py-3 text-white font-semibold">Practical Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">1 year</td><td className="py-3 pr-4 text-emerald-400">97-99%</td><td className="py-3">Barely noticeable</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">3 years</td><td className="py-3 pr-4 text-emerald-400">93-96%</td><td className="py-3">~10-20 miles less range</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">5 years</td><td className="py-3 pr-4">90-94%</td><td className="py-3">~15-30 miles less range</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">8 years</td><td className="py-3 pr-4">85-91%</td><td className="py-3">~25-45 miles less range</td></tr>
                  <tr><td className="py-3 pr-4 font-medium text-white">10+ years</td><td className="py-3 pr-4">80-88%</td><td className="py-3">~35-60 miles less range</td></tr>
                </tbody>
              </table>
              <p className="text-slate-400 text-xs mt-4">*Based on aggregated data from vehicles with 300-mile EPA range. Actual results vary by make, model, climate, and charging habits.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300">The key takeaway: most modern EVs retain <strong className="text-white">90% or more of their original range after 5 years</strong>. The degradation curve is not linear — batteries lose the most capacity in the first year or two, then the rate slows significantly. A Tesla Model 3, for example, typically shows about 5% degradation in the first 50,000 miles, then less than 1% per 10,000 miles after that.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Accelerates Degradation</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Frequent DC fast charging</strong> — Fast charging generates significantly more heat than Level 2 charging. Studies show that vehicles relying primarily on DC fast charging degrade roughly 10-15% faster than those charged mostly at home on Level 2.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Extreme heat</strong> — High ambient temperatures accelerate chemical degradation. EVs in Phoenix, Arizona show measurably more degradation than identical vehicles in Seattle. Thermal management systems help, but physics wins eventually.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Keeping the battery at 100% for extended periods</strong> — A fully charged battery is under higher electrochemical stress. Leaving it at 100% state of charge for days or weeks accelerates side reactions.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Draining to near 0% regularly</strong> — Deep discharges stress the battery chemistry. Repeatedly running below 10% and then charging to 100% is the worst-case cycle pattern.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">High-mileage driving</strong> — Pure cycle aging. A vehicle driven 30,000 miles per year will degrade faster than one driven 10,000, all else being equal.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How to Slow Battery Degradation</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Charge to 80% for daily use</strong> — Most manufacturers recommend an 80% daily charge limit. This keeps the battery in its comfort zone and significantly reduces stress on the cells. Only charge to 100% when you need the full range for a trip.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Use Level 2 charging as your primary method</strong> — Home Level 2 charging (240V) is gentler on the battery than DC fast charging. Aim for 80%+ of your charging to be Level 2.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Avoid extreme heat when possible</strong> — Park in shade or a garage during summer. Precondition the car while still plugged in so the thermal management system uses grid power, not battery power, to cool the pack.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Don&apos;t let it sit at very low charge</strong> — If you&apos;re parking the car for weeks, leave it at 50-60% rather than nearly empty or nearly full. This is the lowest-stress state for the chemistry.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Keep software updated</strong> — Manufacturers frequently update battery management software to optimize charging curves, thermal management, and cell balancing. These updates can meaningfully extend battery life.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Battery Warranties by Manufacturer</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Manufacturer</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Warranty Period</th>
                    <th className="text-left py-3 text-white font-semibold">Capacity Guarantee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Tesla</td><td className="py-3 pr-4">8 years / 120,000-150,000 mi</td><td className="py-3">70% minimum</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Hyundai/Kia</td><td className="py-3 pr-4">10 years / 100,000 mi</td><td className="py-3">70% minimum</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">BMW</td><td className="py-3 pr-4">8 years / 100,000 mi</td><td className="py-3">70% minimum</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Ford</td><td className="py-3 pr-4">8 years / 100,000 mi</td><td className="py-3">70% minimum</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Rivian</td><td className="py-3 pr-4">8 years / 175,000 mi</td><td className="py-3">70% minimum</td></tr>
                  <tr><td className="py-3 pr-4 font-medium text-white">Mercedes-Benz</td><td className="py-3 pr-4">10 years / 155,000 mi</td><td className="py-3">70% minimum</td></tr>
                </tbody>
              </table>
              <p className="text-slate-400 text-xs mt-4">*Warranty terms vary by model. Check your specific vehicle&apos;s warranty documentation for exact coverage.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Happens When the Battery Degrades Too Much?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">When an EV battery drops below roughly 70-80% capacity, it&apos;s still functional — it just has less range. Your options at that point:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Keep driving</strong> — An EV with 75% capacity on a 300-mile battery still has 225 miles of range. For many daily drivers, that&apos;s more than enough.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Battery replacement</strong> — Costs $5,000-$15,000 depending on the vehicle. Prices are dropping as battery technology improves and recycling infrastructure scales up.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Module replacement</strong> — Some manufacturers can replace individual degraded modules rather than the entire pack, reducing cost significantly.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Second-life use</strong> — Retired EV batteries with 70-80% capacity are excellent for home energy storage, where cycle demands are much lighter than automotive use.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How to Check Your Battery Health</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Built-in vehicle diagnostics</strong> — Many EVs display battery health or state of health (SoH) in the infotainment system or companion app. Tesla shows maximum range; others show a percentage.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">OBD-II scanners</strong> — Tools like OBDEleven, LeafSpy (Nissan), or Scan My Tesla provide detailed cell-level data, including individual cell voltages, temperatures, and capacity.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Third-party battery reports</strong> — Services like Recurrent Auto provide battery health reports based on telematics data. Useful when buying a used EV.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Verdict</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Battery degradation is real but manageable. Modern EVs with liquid-cooled battery packs typically retain 90%+ capacity after 5 years and 80%+ after 10 years under normal use. The batteries are outlasting the cars in many cases.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Follow the basics — charge to 80% daily, use Level 2 when possible, avoid extreme heat exposure — and your battery will serve you well for the life of the vehicle. If you&apos;re considering a used EV, check the battery health report before buying. A well-maintained 5-year-old EV battery still has many years of useful life ahead.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find EV Service Specialists Near You</h3>
            <p className="text-slate-300 mb-6">Browse certified EV service providers for battery health checks, maintenance, and collision repair.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse EV Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/ev-battery-health-check" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Battery Health Check Guide</p></Link>
              <Link href="/blog/ev-charging-levels-explained" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Charging Levels Explained</p></Link>
              <Link href="/blog/real-cost-owning-ev-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">The Real Cost of Owning an EV in 2026</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Battery</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Degradation</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Electric Vehicles</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Battery Life</span>
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

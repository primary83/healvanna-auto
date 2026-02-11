"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVInsuranceGuide() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">EV Insurance Guide: Why It Costs More and How to Save</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>12 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ev-insurance-guide.png" alt="Electric vehicle with protective insurance shield concept" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Electric vehicles cost more to insure than comparable gas-powered cars — often 15% to 30% more. The reasons are straightforward: higher purchase prices, expensive battery and component repairs, and fewer qualified repair shops. But there are real strategies to bring those premiums down. Here&apos;s what every EV owner needs to know.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Why EV Insurance Costs More</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Higher vehicle value</strong> — EVs have a higher MSRP than equivalent gas models. A higher replacement cost means higher comprehensive and collision premiums.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Expensive battery repairs</strong> — The battery pack is 30-50% of the vehicle&apos;s value. Even minor battery damage from an undercarriage impact can result in a total loss. Replacing a battery costs $10,000 - $25,000+.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Specialized repair requirements</strong> — EV repairs require certified technicians, specialized tools, and high-voltage safety protocols. Fewer shops can do the work, and labor rates are higher.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Parts availability</strong> — OEM parts for some EVs (particularly newer models) have longer lead times. Extended rental car coverage adds to claim costs.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Total loss rates</strong> — Insurance data shows EVs are totaled at higher rates than gas cars because even moderate damage to the battery structure or integrated electronics can exceed the repair threshold.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Much More Does EV Insurance Cost?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Vehicle</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Avg Annual Premium</th>
                    <th className="text-left py-3 text-white font-semibold">vs Gas Equivalent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Tesla Model Y</td><td className="py-3 pr-4">$2,700 - $3,200</td><td className="py-3">+25% vs similar crossover</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Tesla Model 3</td><td className="py-3 pr-4">$2,400 - $2,900</td><td className="py-3">+20% vs comparable sedan</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Hyundai Ioniq 5</td><td className="py-3 pr-4">$2,100 - $2,500</td><td className="py-3">+15% vs Tucson</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Ford Mustang Mach-E</td><td className="py-3 pr-4">$2,300 - $2,800</td><td className="py-3">+18% vs Edge</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Chevrolet Equinox EV</td><td className="py-3 pr-4">$1,800 - $2,200</td><td className="py-3">+12% vs Equinox gas</td></tr>
                  <tr><td className="py-3 pr-4 font-medium text-white">Rivian R1S</td><td className="py-3 pr-4">$3,500 - $4,200</td><td className="py-3">+30% vs luxury SUV</td></tr>
                </tbody>
              </table>
              <p className="text-slate-400 text-xs mt-4">*Premiums vary by location, driving record, and coverage levels. These are national averages for full coverage.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Factors That Affect Your EV Insurance Rate</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Vehicle make and model</strong> — Teslas are the most expensive EVs to insure due to high repair costs and proprietary parts. More mainstream EVs from Hyundai, Chevrolet, and Ford tend to be cheaper.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Your location</strong> — States with higher repair costs, more traffic, and more uninsured drivers (Florida, Michigan, Louisiana) have higher premiums across the board.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Annual mileage</strong> — EV owners who charge at home and have shorter commutes may qualify for low-mileage discounts. Some insurers offer per-mile pricing.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Safety features</strong> — EVs often come loaded with ADAS (Advanced Driver-Assistance Systems). Features like automatic emergency braking, lane-keeping assist, and blind-spot monitoring can reduce premiums.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Credit score</strong> — In states where it&apos;s permitted, credit-based insurance scores significantly affect your rate. Higher credit = lower premiums.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Charging location</strong> — Parking in a garage (especially for overnight charging) is viewed as lower risk than street parking. Some insurers ask about this.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">EV-Specific Coverage to Consider</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Battery Coverage</h3>
              <p className="text-slate-300 text-sm">Some insurers now offer specific battery damage coverage or include it in their comprehensive plans. Since the battery is the most expensive component, make sure your policy covers battery replacement — not just repair. Check if your policy has a battery exclusion clause.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Charging Equipment Coverage</h3>
              <p className="text-slate-300 text-sm">Your home Level 2 charger ($500 - $2,000 installed) may or may not be covered under your homeowner&apos;s policy. Some auto insurers offer add-on coverage for home charging equipment damage, including electrical surge protection.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Gap Insurance</h3>
              <p className="text-slate-300 text-sm">Especially important for EVs. If your car is totaled, gap insurance covers the difference between what you owe on the loan and the car&apos;s current market value. Given EV depreciation rates on some models, this gap can be significant in the first 2-3 years.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Extended Rental Coverage</h3>
              <p className="text-slate-300 text-sm">EV repairs take longer due to parts availability and specialized labor requirements. Standard rental coverage of 30 days may not be enough. Consider extending to 45-60 days if your insurer offers it.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">10 Ways to Lower Your EV Insurance Costs</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div><strong className="text-white">Shop around aggressively</strong> — EV insurance pricing varies wildly between companies. Get quotes from at least 5 insurers. Some specialize in EVs and offer better rates.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div><strong className="text-white">Bundle home and auto</strong> — Multi-policy discounts of 10-25% are common and can offset the EV premium increase.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div><strong className="text-white">Increase your deductible</strong> — Raising your collision deductible from $500 to $1,000 can reduce premiums by 15-20%. Only do this if you have the savings to cover the higher deductible.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">4.</span><div><strong className="text-white">Ask about EV-specific discounts</strong> — Some insurers offer green vehicle discounts. Progressive, GEICO, and State Farm have all offered EV-related discounts at various times.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">5.</span><div><strong className="text-white">Use manufacturer insurance</strong> — Tesla Insurance (available in most states) and others offer competitive rates because they use real-time driving data instead of traditional risk factors.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">6.</span><div><strong className="text-white">Maintain a clean driving record</strong> — This matters more for EVs because your base rate is already higher. One at-fault accident can push EV premiums well above $4,000/year.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">7.</span><div><strong className="text-white">Consider usage-based insurance</strong> — Pay-per-mile programs work well for EV owners who drive less. Metromile and similar programs charge a base rate plus cents per mile driven.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">8.</span><div><strong className="text-white">Park in a garage</strong> — Reduces theft and weather damage risk. Let your insurer know — many offer discounts for garage parking.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">9.</span><div><strong className="text-white">Take a defensive driving course</strong> — Many states allow a 5-10% discount for completing an approved course. These savings last 2-3 years per course.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">10.</span><div><strong className="text-white">Review coverage annually</strong> — As your EV depreciates, your comprehensive and collision coverage should be adjusted. You may be over-insured after the first few years.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Happens After an EV Accident?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">EV accident claims differ from gas car claims in several important ways:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Battery inspection is mandatory</strong> — Even in minor collisions, the battery pack must be inspected for damage. This adds time and cost to every claim.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Higher total loss rates</strong> — If the battery is compromised, the repair cost can exceed the vehicle&apos;s value. Some EVs with repairable body damage are still totaled because of suspected battery issues.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Certified shop requirement</strong> — Your insurer may require repairs at a manufacturer-certified collision center. This limits your choices but ensures proper high-voltage safety procedures.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Longer repair times</strong> — Average EV repair time is 20-30% longer than gas vehicles due to parts sourcing and specialized labor. Plan for extended rental needs.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              EV insurance costs more, but it&apos;s not a fixed penalty. The premium difference narrows when you shop strategically, take advantage of available discounts, and choose the right coverage levels. The key is not to accept the first quote — EV pricing is where insurers differ the most.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Factor insurance into your total EV ownership cost calculation alongside fuel savings, maintenance savings, and any available tax credits. For most owners, the higher insurance is more than offset by the savings in fuel and maintenance over time.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find EV Service Providers Near You</h3>
            <p className="text-slate-300 mb-6">From certified collision repair to detailing and paint protection — find service providers who specialize in electric vehicles.</p>
            <Link href="/directory" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Service Providers
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/real-cost-owning-ev-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">The Real Cost of Owning an EV in 2026</p></Link>
              <Link href="/blog/ev-collision-repair-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Collision Repair Guide</p></Link>
              <Link href="/blog/choose-first-ev" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Choose Your First EV</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Insurance</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Electric Cars</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Cost Guide</span>
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

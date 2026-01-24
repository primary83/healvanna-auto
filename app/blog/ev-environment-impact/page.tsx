"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVEnvironmentImpact() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Insights</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Are Electric Cars Actually Better for the Environment?</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>January 24, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>14 min read</span>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ev-environment-impact.png" alt="Split image showing electric vehicle and environmental impact" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              It's a question that sparks heated debates: <strong className="text-emerald-400">Are electric cars actually better for the environment</strong>, or are we just shifting pollution from tailpipes to power plants and mining operations? The answer isn't as simple as "yes" or "no"—but when you look at the complete lifecycle data, a clear picture emerges. This comprehensive analysis examines the <strong className="text-emerald-400">environmental impact of electric vehicles</strong> versus gas cars, from manufacturing to disposal.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Lifecycle Approach: Why It Matters</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              To fairly compare EVs and gas cars, we need to look at the entire lifecycle: raw material extraction, manufacturing, fuel/electricity production, driving emissions, and end-of-life disposal. Critics often focus on one stage (usually battery manufacturing) while ignoring others. A complete analysis tells a different story.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Lifecycle Stages Compared</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Manufacturing</span>
                  <span className="text-yellow-400">EVs have higher initial emissions</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Fuel Production</span>
                  <span className="text-emerald-400">EVs win (especially with renewables)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Driving Emissions</span>
                  <span className="text-emerald-400">EVs have zero direct emissions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">End of Life</span>
                  <span className="text-emerald-400">EVs improving with recycling</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Manufacturing: The Carbon Debt</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Let's address the elephant in the room: EV manufacturing does produce more CO2 than gas car manufacturing, primarily due to battery production. A typical EV battery creates 8-16 tons of CO2 during production, depending on battery size and manufacturing location.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              This means an EV starts life with a "carbon debt" compared to a gas car. However, this debt is paid off relatively quickly through cleaner operation—typically within 1-3 years of average driving.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Manufacturing Emissions Comparison</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">Gas Car Manufacturing</span>
                    <span className="text-slate-400">~7 tons CO2</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{width: '35%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">EV Manufacturing (total)</span>
                    <span className="text-slate-400">~14-20 tons CO2</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-yellow-500 h-3 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-4">Note: EV manufacturing emissions are decreasing as battery production becomes cleaner and more efficient.</p>
            </div>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">The Good News: Manufacturing Is Getting Cleaner</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Battery manufacturing emissions are dropping rapidly. Tesla's Gigafactory Nevada uses solar power. CATL and other Asian manufacturers are transitioning to renewable energy. New battery chemistries like LFP (lithium iron phosphate) have lower production emissions. By 2030, manufacturing emissions per kWh of battery are expected to drop by 50%.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Driving Emissions: Where EVs Excel</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Gas cars emit CO2 continuously while driving—about 4.6 metric tons per year for an average vehicle. EVs produce zero direct emissions. But what about the electricity used to charge them?
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Even when charged from the current US grid (which still relies partly on fossil fuels), EVs produce significantly fewer emissions than gas cars. And as the grid gets cleaner, EVs automatically become even more environmentally friendly.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Annual CO2 Emissions by Electricity Source</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Gas Car (30 MPG)</span>
                  <span className="text-red-400 font-bold">4.6 tons/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">EV on US Average Grid</span>
                  <span className="text-yellow-400 font-bold">1.8 tons/year</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">EV on California Grid</span>
                  <span className="text-emerald-400 font-bold">0.9 tons/year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">EV on 100% Renewable</span>
                  <span className="text-emerald-400 font-bold">~0 tons/year</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">The Grid Is Getting Cleaner</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              This is crucial: the environmental advantage of EVs grows over time. In 2010, the US grid was 45% coal. By 2025, it's under 20% and falling. By 2035, most projections show renewables dominating. An EV purchased today will become cleaner every year as the grid improves—a gas car just keeps polluting at the same rate.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The "Long Tailpipe" Argument</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Critics argue EVs just move pollution from tailpipes to power plants—the "long tailpipe" theory. While technically true, this misses several key points:
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">1.</span><span><strong className="text-white">Efficiency matters:</strong> Power plants convert fuel to electricity more efficiently than car engines. Even with transmission losses, EVs use energy more efficiently.</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">2.</span><span><strong className="text-white">Centralized pollution is easier to control:</strong> It's simpler to reduce emissions from one power plant than millions of tailpipes.</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">3.</span><span><strong className="text-white">Grid improvements benefit all EVs:</strong> When the grid gets cleaner, every EV becomes cleaner automatically.</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">4.</span><span><strong className="text-white">Location matters:</strong> Moving emissions away from urban centers improves air quality where people live.</span></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Mining and Raw Materials</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Lithium, cobalt, nickel, and rare earth elements used in EV batteries require mining, which has environmental and social impacts. This is a legitimate concern that the industry is actively addressing.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">The Reality Check</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              However, it's important to maintain perspective. Oil extraction is also environmentally destructive—oil spills, tar sands mining, fracking, and refinery pollution cause massive ongoing damage. The difference is that battery materials are mined once to build a product lasting 15-20 years, while oil is extracted continuously throughout a gas car's life.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Material Usage: EV Battery vs Gas Car Fuel</h4>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-700/50">
                  <h5 className="text-emerald-400 font-semibold">EV (150,000 miles)</h5>
                  <p className="text-slate-400 text-sm">~30 lbs lithium, ~30 lbs cobalt, ~110 lbs nickel (mined once, recyclable)</p>
                </div>
                <div>
                  <h5 className="text-red-400 font-semibold">Gas Car (150,000 miles)</h5>
                  <p className="text-slate-400 text-sm">~15,000 gallons of gasoline (continuously extracted, burned, gone forever)</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Progress in Responsible Sourcing</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              The industry is making progress: LFP batteries eliminate cobalt entirely. Recycling technologies are improving—battery materials can be recovered and reused. Automakers are implementing ethical sourcing standards. New mining techniques are reducing environmental impact.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Battery Recycling and Second Life</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              What happens to EV batteries at end of life? This used to be a concern, but solutions are emerging rapidly.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Battery End-of-Life Options</h4>
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-700/50">
                  <h5 className="text-emerald-400 font-semibold">Second Life Applications</h5>
                  <p className="text-slate-400 text-sm">Batteries degraded below EV standards (70-80% capacity) still work great for stationary energy storage—powering homes, buildings, or grid backup for another 10+ years.</p>
                </div>
                <div className="pb-4 border-b border-slate-700/50">
                  <h5 className="text-emerald-400 font-semibold">Recycling</h5>
                  <p className="text-slate-400 text-sm">95%+ of battery materials can be recovered. Companies like Redwood Materials (founded by Tesla's former CTO) are building large-scale recycling facilities.</p>
                </div>
                <div>
                  <h5 className="text-emerald-400 font-semibold">Closed Loop Manufacturing</h5>
                  <p className="text-slate-400 text-sm">Recovered materials go back into new batteries, reducing the need for new mining.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Complete Picture: Lifecycle Analysis</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Multiple independent studies have compared the total lifecycle emissions of EVs versus gas cars. The consensus is clear:
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Lifetime CO2 Emissions (150,000 miles)</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">Average Gas Car</span>
                    <span className="text-slate-400">~57 tons CO2</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-4">
                    <div className="bg-red-500 h-4 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">EV (US Average Grid)</span>
                    <span className="text-slate-400">~28 tons CO2</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-4">
                    <div className="bg-yellow-500 h-4 rounded-full" style={{width: '49%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-300">EV (Clean Grid/Renewables)</span>
                    <span className="text-slate-400">~14 tons CO2</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-4">
                    <div className="bg-emerald-500 h-4 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
              </div>
              <p className="text-emerald-400 text-sm mt-4 font-semibold">EVs produce 50-75% less lifetime CO2 than gas cars.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Beyond Carbon: Other Environmental Benefits</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              CO2 isn't the only environmental consideration. EVs offer additional benefits:
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span><strong className="text-white">Zero local emissions:</strong> No NOx, particulates, or CO in urban areas where people live</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span><strong className="text-white">Reduced noise pollution:</strong> Electric motors are nearly silent</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span><strong className="text-white">No oil changes:</strong> Eliminates motor oil disposal issues</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span><strong className="text-white">Regenerative braking:</strong> Reduces brake dust (a significant urban pollutant)</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span><strong className="text-white">Grid stabilization:</strong> EV batteries can help integrate more renewable energy</span></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Verdict: Yes, EVs Are Better</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-emerald-400">Are electric cars better for the environment?</strong> The evidence is clear: yes, significantly so. While EVs aren't perfect and do have environmental impacts, they produce substantially less pollution and CO2 over their lifetime than gas vehicles.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Key takeaways:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>EVs produce 50-75% less lifetime CO2 than gas cars</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>The environmental advantage grows as the grid gets cleaner</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>Manufacturing emissions are decreasing rapidly</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>Battery recycling is solving end-of-life concerns</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>EVs eliminate local pollution where people live and breathe</span></li>
              </ul>
            </div>
            <p className="text-slate-300 leading-relaxed mb-8">
              The shift to electric vehicles is one of the most impactful changes individuals can make to reduce their environmental footprint. While we should continue pushing for cleaner manufacturing and responsible material sourcing, driving an EV today is definitively better for the environment than driving a gas car.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Make the Switch?</h3>
            <p className="text-slate-300 mb-6">Explore our selection of electric vehicles and start driving cleaner today.</p>
            <Link href="/cars" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Electric Vehicles
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Environment</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Impact</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Sustainability</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Carbon Emissions</span>
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

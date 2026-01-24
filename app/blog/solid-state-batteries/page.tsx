"use client";

import Link from "next/link";
import Image from "next/image";

export default function SolidStateBatteries() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Technology</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Solid-State Batteries Explained: Why Everyone's Talking About Them</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>January 24, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>13 min read</span>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/solid-state-batteries.png" alt="Futuristic solid-state battery technology concept" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              <strong className="text-emerald-400">Solid-state batteries</strong> are being hailed as the next revolution in electric vehicle technology. Major automakers and battery companies are investing billions to develop this technology, promising EVs that charge in minutes, drive further on a single charge, and last longer than ever before. But what exactly are solid-state batteries, and when can we expect to see them in real cars? This comprehensive guide explains the <strong className="text-emerald-400">solid-state battery technology</strong> that could transform the EV industry.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Are Solid-State Batteries?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              To understand solid-state batteries, we first need to understand current lithium-ion batteries. Today's EV batteries contain a liquid or gel electrolyte—the substance that allows lithium ions to flow between the positive (cathode) and negative (anode) electrodes during charging and discharging.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Solid-state batteries replace this liquid electrolyte with a solid material, typically a ceramic, glass, or sulfide compound. This seemingly simple change has profound implications for battery performance, safety, and longevity.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Key Differences: Liquid vs Solid Electrolyte</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="text-emerald-400 font-semibold mb-2">Current Li-Ion (Liquid)</h5>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li>• Liquid/gel electrolyte</li>
                    <li>• Flammable at high temps</li>
                    <li>• Limited energy density</li>
                    <li>• Degrades over time</li>
                    <li>• Requires cooling systems</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-emerald-400 font-semibold mb-2">Solid-State (Solid)</h5>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li>• Ceramic/glass electrolyte</li>
                    <li>• Non-flammable</li>
                    <li>• 2-3x energy density</li>
                    <li>• Longer lifespan</li>
                    <li>• Simpler thermal management</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Advantages of Solid-State Batteries</h2>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">1. Higher Energy Density</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Solid-state batteries can potentially store 2-3 times more energy in the same space as current lithium-ion batteries. This means an EV could either have double the range with the same battery size, or achieve the same range with a much smaller, lighter battery.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The higher energy density comes from being able to use lithium metal anodes, which have about 10 times the capacity of the graphite anodes used today. Liquid electrolytes react dangerously with lithium metal, but solid electrolytes don't have this problem.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">2. Faster Charging</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Solid electrolytes can potentially enable much faster charging—some prototypes have demonstrated 10-80% charges in under 10 minutes. This is because solid electrolytes can handle higher current densities without the degradation issues that plague liquid electrolytes during fast charging.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">3. Improved Safety</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              The liquid electrolyte in current batteries is flammable, which is why we occasionally hear about EV battery fires. Solid electrolytes are non-flammable, making solid-state batteries inherently safer. They're also more stable at high temperatures and don't leak if the battery is damaged.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">4. Longer Lifespan</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Solid-state batteries experience less degradation over charge cycles. While current EV batteries typically retain 80% capacity after 1,000-1,500 cycles, solid-state batteries could maintain capacity for 5,000+ cycles—potentially lasting the entire life of the vehicle and beyond.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">5. Better Cold Weather Performance</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Current lithium-ion batteries lose significant range in cold weather partly because the liquid electrolyte becomes more viscous. Some solid electrolytes don't have this problem, potentially reducing cold weather range loss.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Solid-State Battery Advantages Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Energy Density</span>
                  <span className="text-emerald-400 font-bold">2-3x Higher</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Charging Speed</span>
                  <span className="text-emerald-400 font-bold">10-80% in ~10 min</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Fire Risk</span>
                  <span className="text-emerald-400 font-bold">Near Zero</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">Cycle Life</span>
                  <span className="text-emerald-400 font-bold">5,000+ cycles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Cold Weather Loss</span>
                  <span className="text-emerald-400 font-bold">Significantly Reduced</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Challenges: Why Don't We Have Them Yet?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              If solid-state batteries are so great, why aren't they in every EV? The technology faces several significant hurdles:
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Manufacturing Complexity</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Creating a perfect interface between solid materials is much harder than using liquids that naturally conform to surfaces. Any tiny gaps or imperfections in the solid electrolyte create resistance and can cause the battery to fail. Manufacturing at scale with the required precision is extremely challenging.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Cost</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Current solid-state battery prototypes cost 5-10 times more than equivalent lithium-ion batteries. The materials are more expensive, and the manufacturing processes haven't been optimized for mass production. Costs will need to drop dramatically for commercial viability.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Dendrite Formation</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              When using lithium metal anodes (key to the energy density advantage), needle-like structures called dendrites can form during charging. These can eventually pierce the solid electrolyte and short-circuit the battery. Solving this problem is one of the biggest research challenges.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Temperature Sensitivity</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Some solid electrolyte materials only work well at elevated temperatures, requiring battery heating systems that reduce efficiency. Finding materials that perform well across the full temperature range vehicles experience remains a challenge.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Who's Working on Solid-State Batteries?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Nearly every major automaker and battery company is investing heavily in solid-state battery development:
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="space-y-6">
                <div className="pb-4 border-b border-slate-700/50">
                  <h4 className="text-white font-semibold">Toyota</h4>
                  <p className="text-slate-400 text-sm">The leader with 1,000+ solid-state patents. Plans to introduce in hybrid vehicles first by 2027-2028, with full EV applications by 2030.</p>
                </div>
                <div className="pb-4 border-b border-slate-700/50">
                  <h4 className="text-white font-semibold">QuantumScape (backed by Volkswagen)</h4>
                  <p className="text-slate-400 text-sm">Has demonstrated promising results with ceramic electrolyte. VW plans to use their tech in vehicles by 2027.</p>
                </div>
                <div className="pb-4 border-b border-slate-700/50">
                  <h4 className="text-white font-semibold">Solid Power (backed by BMW & Ford)</h4>
                  <p className="text-slate-400 text-sm">Using sulfide-based electrolyte. Currently producing pilot cells for BMW and Ford testing.</p>
                </div>
                <div className="pb-4 border-b border-slate-700/50">
                  <h4 className="text-white font-semibold">Samsung SDI</h4>
                  <p className="text-slate-400 text-sm">Demonstrated a battery enabling 500+ mile range and 1,000 charge cycles. Targeting 2027 production.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">CATL</h4>
                  <p className="text-slate-400 text-sm">World's largest battery maker is developing solid-state technology, though specifics are closely guarded.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When Will Solid-State Batteries Arrive in EVs?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The timeline for solid-state batteries has repeatedly slipped, leading to some skepticism. However, progress is accelerating:
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Expected Timeline</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">2026-2027</span>
                  <span className="text-slate-400">Limited luxury/flagship vehicles, small volumes</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">2028-2030</span>
                  <span className="text-slate-400">Broader adoption in premium EVs</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <span className="text-slate-300">2030-2035</span>
                  <span className="text-slate-400">Mass market availability, cost parity with lithium-ion</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">2035+</span>
                  <span className="text-slate-400">Potential replacement of lithium-ion as dominant EV battery</span>
                </div>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              Toyota has committed to launching vehicles with solid-state batteries by 2027-2028, initially in hybrids where battery size requirements are smaller. Nissan aims for 2028, while Mercedes and BMW are targeting 2030 for mainstream models.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What This Means for EV Buyers Today</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Should you wait for solid-state batteries before buying an EV? For most buyers, the answer is no. Here's why:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span><strong className="text-white">Timeline uncertainty:</strong> Mass-market solid-state EVs are still 5-10 years away</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span><strong className="text-white">Current EVs are excellent:</strong> Today's lithium-ion technology is mature and capable</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span><strong className="text-white">Early adoption premium:</strong> First solid-state vehicles will likely be expensive</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span><strong className="text-white">Continuous improvement:</strong> Current batteries are getting better every year anyway</span></li>
              </ul>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Think of it like smartphones: waiting for the next breakthrough technology means missing years of utility from current devices that work extremely well. Today's EVs offer excellent range, improving charging speeds, and proven reliability.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Bigger Picture: Battery Evolution</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              While solid-state batteries get the headlines, other battery improvements are happening right now. LFP (lithium iron phosphate) batteries offer improved safety and longevity. Silicon anodes are increasing energy density in conventional lithium-ion cells. Sodium-ion batteries promise lower costs and better sustainability.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Solid-state is likely the long-term future of EV batteries, but the transition will be gradual. Expect to see hybrid approaches—semi-solid electrolytes, improved lithium-ion with silicon anodes—before pure solid-state becomes mainstream.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-emerald-400">Solid-state batteries</strong> represent a genuine breakthrough that could transform electric vehicles—offering longer range, faster charging, improved safety, and extended lifespan. The technology is real, and major companies are investing billions to commercialize it.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              However, significant challenges remain before we'll see solid-state batteries in mainstream vehicles. For now, enjoy the excellent EVs available today, knowing that even better technology is on the horizon. The future of electric mobility is bright, and solid-state batteries are a big part of that future.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Explore Today's Electric Vehicles</h3>
            <p className="text-slate-300 mb-6">Don't wait for tomorrow's technology—discover the impressive EVs available right now.</p>
            <Link href="/cars" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Electric Vehicles
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Solid-State Batteries</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Technology</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Battery Tech</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Future EVs</span>
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

"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function HowLongDoEvBatteriesLast() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">EV Ownership</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">How Long Do EV Batteries Last? Complete Guide for 2026</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>March 7, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/blog/how-long-ev-batteries-last.png" alt="How long do electric vehicle batteries last - complete guide" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              &ldquo;But what about the battery?&rdquo; It&apos;s the most common question from anyone considering an EV purchase, and it&apos;s a fair one. The battery is the most expensive component in an electric vehicle, so understanding how long it lasts, how it degrades, and what warranties cover is critical. The good news? Real-world data from millions of EVs on the road tells a very reassuring story.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Short Answer: 15-20 Years</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Modern EV batteries are designed to last <strong className="text-emerald-400">15 to 20 years or 200,000-300,000 miles</strong> before they degrade to a point where replacement becomes necessary. That timeframe exceeds the average lifespan of a gas car, which typically hits the junkyard at 12-15 years. In other words, the battery will almost certainly outlast the rest of the vehicle.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              &ldquo;Degradation&rdquo; doesn&apos;t mean the battery suddenly dies. It means the total capacity gradually decreases over time. A battery that started at 300 miles of range might deliver 270 miles after 5 years and 240 miles after 10 years. For the vast majority of drivers, even a degraded battery meets daily driving needs with room to spare.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Real-World Degradation Data by Brand</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Thanks to fleet tracking services and owner-reported data, we now have solid numbers on how different EV batteries hold up over time:
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Tesla</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><span className="text-slate-500">Avg. Degradation</span><p className="text-white font-semibold">~12% at 200K miles</p></div>
                <div><span className="text-slate-500">Battery Chemistry</span><p className="text-white font-semibold">NCA / LFP</p></div>
                <div><span className="text-slate-500">Warranty</span><p className="text-white font-semibold">8 yr / 120K miles</p></div>
                <div><span className="text-slate-500">Data Source</span><p className="text-white font-semibold">200K+ vehicles tracked</p></div>
              </div>
              <p className="text-slate-300 text-sm mb-3">Tesla has the largest dataset in the industry, and the numbers are impressive. Fleet data from over 200,000 vehicles shows an average of just 12% degradation at 200,000 miles. The newer LFP (lithium iron phosphate) batteries in the base <Link href="/ev-deals/tesla-model-3" className="text-emerald-400 hover:text-emerald-300">Model 3</Link> and <Link href="/ev-deals/tesla-model-y" className="text-emerald-400 hover:text-emerald-300">Model Y</Link> are expected to perform even better, as LFP chemistry handles deep cycling with less wear.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Hyundai / Kia (E-GMP Platform)</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><span className="text-slate-500">Avg. Degradation</span><p className="text-white font-semibold">~5% at 60K miles</p></div>
                <div><span className="text-slate-500">Battery Chemistry</span><p className="text-white font-semibold">NMC (SK Innovation)</p></div>
                <div><span className="text-slate-500">Warranty</span><p className="text-white font-semibold">10 yr / 100K miles</p></div>
                <div><span className="text-slate-500">Models</span><p className="text-white font-semibold">Ioniq 5, 6, EV6</p></div>
              </div>
              <p className="text-slate-300 text-sm mb-3">The <Link href="/ev-deals/hyundai-ioniq-5" className="text-emerald-400 hover:text-emerald-300">Ioniq 5</Link>, <Link href="/ev-deals/hyundai-ioniq-6" className="text-emerald-400 hover:text-emerald-300">Ioniq 6</Link>, and <Link href="/ev-deals/kia-ev6" className="text-emerald-400 hover:text-emerald-300">Kia EV6</Link> use the E-GMP platform with advanced thermal management. Early data shows excellent retention &mdash; about 5% degradation at 60,000 miles, projecting to roughly 10-12% at 150,000 miles. Hyundai&apos;s industry-leading 10-year/100,000-mile warranty is a confidence booster.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">GM (Ultium Platform)</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><span className="text-slate-500">Avg. Degradation</span><p className="text-white font-semibold">~8% at 80K miles</p></div>
                <div><span className="text-slate-500">Battery Chemistry</span><p className="text-white font-semibold">NCMA (Ultium)</p></div>
                <div><span className="text-slate-500">Warranty</span><p className="text-white font-semibold">8 yr / 100K miles</p></div>
                <div><span className="text-slate-500">Models</span><p className="text-white font-semibold">Equinox EV, Lyriq, Bolt</p></div>
              </div>
              <p className="text-slate-300 text-sm mb-3">GM&apos;s Ultium batteries power the <Link href="/ev-deals/chevrolet-equinox-ev" className="text-emerald-400 hover:text-emerald-300">Chevy Equinox EV</Link>, <Link href="/ev-deals/cadillac-lyriq" className="text-emerald-400 hover:text-emerald-300">Cadillac Lyriq</Link>, and others. The NCMA chemistry uses less cobalt than previous generations, improving both longevity and sustainability. The older Bolt EUV uses a different chemistry but has also shown strong retention after GM&apos;s battery management software updates.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Nissan</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><span className="text-slate-500">Avg. Degradation</span><p className="text-white font-semibold">~15-20% at 100K miles</p></div>
                <div><span className="text-slate-500">Battery Chemistry</span><p className="text-white font-semibold">NMC (passive cooling)</p></div>
                <div><span className="text-slate-500">Warranty</span><p className="text-white font-semibold">8 yr / 100K miles</p></div>
                <div><span className="text-slate-500">Key Caveat</span><p className="text-white font-semibold">No active cooling (older)</p></div>
              </div>
              <p className="text-slate-300 text-sm mb-3">The <Link href="/ev-deals/nissan-leaf" className="text-emerald-400 hover:text-emerald-300">Nissan Leaf</Link> is the cautionary tale in this list. Earlier models used passive air cooling instead of liquid thermal management, which led to faster degradation &mdash; especially in hot climates like Florida and Arizona. The current Leaf has improved, but Nissan&apos;s lack of active battery cooling remains a weak point compared to competitors. In moderate climates, Leaf batteries hold up reasonably well.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Every EV Battery Warranty Covers</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Federal law mandates that EV batteries carry a minimum warranty of <strong className="text-emerald-400">8 years or 100,000 miles</strong>. Most manufacturers guarantee the battery will retain at least 70% of its original capacity during that period. If it drops below 70%, the manufacturer will repair or replace the pack at no cost. Here&apos;s a quick breakdown:
            </p>
            <ul className="text-slate-300 space-y-2 mb-6">
              <li><strong className="text-emerald-400">Tesla</strong> &mdash; 8 years / 100,000-150,000 miles (varies by model), minimum 70% retention</li>
              <li><strong className="text-emerald-400">Hyundai/Kia</strong> &mdash; 10 years / 100,000 miles, minimum 70% retention</li>
              <li><strong className="text-emerald-400">GM (Chevy/Cadillac)</strong> &mdash; 8 years / 100,000 miles, minimum 70% retention</li>
              <li><strong className="text-emerald-400">Nissan</strong> &mdash; 8 years / 100,000 miles, minimum 70% retention (9 bars of 12)</li>
              <li><strong className="text-emerald-400">BMW</strong> &mdash; 8 years / 100,000 miles, minimum 70% retention</li>
              <li><strong className="text-emerald-400">Ford</strong> &mdash; 8 years / 100,000 miles, minimum 70% retention</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">7 Tips to Maximize Your EV Battery Life</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              While modern EV batteries are robust, a few simple habits can meaningfully extend their lifespan:
            </p>
            <ul className="text-slate-300 space-y-2 mb-6">
              <li><strong className="text-emerald-400">Keep daily charge between 20-80%</strong> &mdash; avoid charging to 100% unless you need the full range for a trip. Lithium batteries last longest when kept in the middle of their charge range.</li>
              <li><strong className="text-emerald-400">Minimize DC fast charging</strong> &mdash; occasional fast charging is fine, but relying on it daily generates more heat and accelerates degradation. Home Level 2 charging is gentlest on the battery.</li>
              <li><strong className="text-emerald-400">Avoid extreme heat exposure</strong> &mdash; park in shade or a garage when possible. Florida and Arizona drivers should be especially mindful. The battery&apos;s thermal management system works harder in 100-degree heat.</li>
              <li><strong className="text-emerald-400">Don&apos;t let it sit at 0% or 100% for extended periods</strong> &mdash; if storing the car for weeks, leave it at 50-60% charge.</li>
              <li><strong className="text-emerald-400">Use scheduled charging</strong> &mdash; set your car to finish charging right before you leave. This minimizes time spent at high charge levels.</li>
              <li><strong className="text-emerald-400">Keep software updated</strong> &mdash; manufacturers regularly push battery management improvements via over-the-air updates.</li>
              <li><strong className="text-emerald-400">Pre-condition before fast charging</strong> &mdash; use the navigation system to warm the battery before arriving at a fast charger. A warm battery charges faster and with less wear.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Happens When an EV Battery Needs Replacement?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Battery replacement costs have dropped significantly. In 2020, a full pack replacement cost $15,000-$20,000. In 2026, costs are closer to <strong className="text-emerald-400">$8,000-$12,000</strong> for most mainstream EVs, and they&apos;re still falling as manufacturing scales up. However, most owners will never need a full replacement. Individual cell or module replacements can fix degradation issues for $2,000-$5,000.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              When an EV battery can no longer serve a vehicle effectively (typically below 70-75% original capacity), it still has a second life ahead of it. Used EV batteries are increasingly repurposed for home energy storage, commercial backup power, and grid stabilization. Companies like Redwood Materials and Li-Cycle are building out recycling infrastructure that recovers 95%+ of critical minerals for reuse in new batteries.
            </p>

            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 my-12">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Find Your EV?</h3>
              <p className="text-slate-300 mb-6">Now that you know EV batteries last 15-20 years, it&apos;s time to find the right model. Our free EV Match tool considers your budget, driving habits, and priorities to recommend the best options.</p>
              <Link href="/ev-tools" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
                Try the EV Match Tool
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Related Articles</h2>
            <div className="grid gap-4 mb-8">
              <Link href="/blog/ev-battery-degradation-guide" className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-400 text-sm font-medium">Guide</span>
                <h4 className="text-white font-semibold mt-1">EV Battery Degradation Guide</h4>
                <p className="text-slate-400 text-sm mt-1">Deep dive into how battery degradation works and what to expect.</p>
              </Link>
              <Link href="/blog/do-evs-need-oil-changes-maintenance-guide" className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-400 text-sm font-medium">Guide</span>
                <h4 className="text-white font-semibold mt-1">Do EVs Need Oil Changes? EV Maintenance Guide</h4>
                <p className="text-slate-400 text-sm mt-1">Everything you need to know about maintaining an electric vehicle.</p>
              </Link>
              <Link href="/blog/ev-battery-warranty-guide" className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-400 text-sm font-medium">Guide</span>
                <h4 className="text-white font-semibold mt-1">EV Battery Warranty Guide</h4>
                <p className="text-slate-400 text-sm mt-1">What every EV battery warranty covers and what it doesn&apos;t.</p>
              </Link>
            </div>
          </article>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/blog?tag=ev-ownership" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">EV Ownership</Link>
              <Link href="/blog?tag=ev-maintenance" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">EV Maintenance</Link>
              <Link href="/blog?tag=battery" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">Battery</Link>
              <Link href="/blog?tag=battery-life" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">Battery Life</Link>
              <Link href="/blog?tag=2026" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">2026</Link>
            </div>
            <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}
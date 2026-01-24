"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVRangeAnxiety() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Guides</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">EV Range Anxiety: What Actually Matters (and What Doesn't)</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>January 24, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>12 min read</span>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ev-range-anxiety.png" alt="White electric vehicle driving on open desert highway" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              <strong className="text-emerald-400">Range anxiety</strong>—the fear of running out of battery before reaching your destination or a charging station—is the most commonly cited concern among potential EV buyers. But here's the reality: most range anxiety is based on misconceptions rather than actual driving experiences. This guide separates fact from fiction about <strong className="text-emerald-400">EV range concerns</strong> and explains what truly matters when it comes to electric vehicle range.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Understanding the Psychology of Range Anxiety</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Range anxiety is fundamentally a psychological phenomenon rooted in our gas car habits. We're conditioned to think about refueling as an event—something we do when the tank is nearly empty, taking 5 minutes at any of thousands of gas stations.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              EV ownership requires a mental shift: instead of refueling, you're recharging—and instead of a weekly trip to the gas station, you're starting each day with a "full tank." This simple change eliminates range anxiety for most daily driving scenarios.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">The Reality Check</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span>Average American daily driving: 37 miles</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span>Average 2026 EV range: 270+ miles</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span>Percentage of trips under 50 miles: 95%</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span>Days most people need more than 200 miles: Less than 5 per year</span></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Actually Affects EV Range</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Understanding the factors that impact <strong className="text-emerald-400">real-world EV range</strong> helps you plan better and worry less. Here's what genuinely matters:
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">1. Temperature (High Impact)</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Cold weather is the biggest range killer. At 20°F (-6°C), you can lose 20-40% of your rated range due to battery chemistry and cabin heating demands. At 100°F (38°C), range drops about 10-15% from air conditioning use.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-3">Temperature Impact on 300-Mile Rated Range</h4>
              <div className="space-y-2 text-slate-300 text-sm">
                <div className="flex justify-between"><span>70°F (21°C) - Ideal</span><span className="text-emerald-400">300 miles (100%)</span></div>
                <div className="flex justify-between"><span>32°F (0°C) - Cold</span><span className="text-yellow-400">240-270 miles (80-90%)</span></div>
                <div className="flex justify-between"><span>0°F (-18°C) - Very Cold</span><span className="text-orange-400">180-210 miles (60-70%)</span></div>
                <div className="flex justify-between"><span>100°F (38°C) - Hot</span><span className="text-yellow-400">255-270 miles (85-90%)</span></div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">2. Driving Speed (High Impact)</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Highway driving at 75+ mph can reduce range by 20-30% compared to the EPA rating, which is based on mixed city/highway driving at moderate speeds. Air resistance increases exponentially with speed, making it the second biggest factor after temperature.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              City driving, with its slower speeds and regenerative braking opportunities, often exceeds the EPA range estimate. Many EV owners find they get better range in urban environments.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">3. Driving Style (Moderate Impact)</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Aggressive acceleration and hard braking reduce efficiency. Smooth, progressive driving can improve range by 10-15%. Using regenerative braking effectively—one-pedal driving—recaptures energy that would otherwise be lost.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">4. Terrain (Moderate Impact)</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Climbing hills consumes more energy, but descending hills recovers much of it through regenerative braking. Unless you're doing one-way mountain driving, terrain impact often balances out over a round trip.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">5. Cargo and Passengers (Low Impact)</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Extra weight does reduce efficiency, but less than you might think. Adding 500 pounds typically reduces range by only 5-10%. Roof racks and cargo boxes create more significant impact due to increased air resistance.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Doesn't Matter (As Much as You Think)</h2>
            
            <h3 className="text-xl font-bold text-white mt-10 mb-4">EPA Range Numbers</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              While EPA ratings provide useful comparisons between vehicles, they don't predict your real-world experience. Your actual range depends on your driving conditions, which vary dramatically from the EPA test cycle. Some drivers consistently beat EPA estimates; others fall short.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Maximum Range</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Obsessing over maximum range is like choosing a gas car based on its maximum tank range. A 250-mile EV handles 99% of daily driving needs as well as a 400-mile EV. The extra range mostly provides psychological comfort, not practical benefit for typical use.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Charging to 100%</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Most EV manufacturers recommend charging to 80% for daily use to preserve battery health. This isn't a limitation—it's like how you probably don't fill your gas tank to the absolute brim. The 80% charge provides more than enough range for typical daily driving.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Charging Infrastructure Reality</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The charging network has expanded dramatically. As of 2026, there are over 70,000 public charging stations in the US with more than 180,000 charging ports. Tesla's Supercharger network alone has over 20,000 stations, and they're now open to other EV brands.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Charging Network Growth</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">⚡</span><span><strong className="text-white">Tesla Superchargers:</strong> 20,000+ stations, now open to all EVs</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">⚡</span><span><strong className="text-white">Electrify America:</strong> 900+ stations with ultra-fast 350kW charging</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">⚡</span><span><strong className="text-white">ChargePoint:</strong> 30,000+ locations across North America</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">⚡</span><span><strong className="text-white">EVgo:</strong> 1,000+ fast charging stations in metro areas</span></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Practical Strategies to Eliminate Range Anxiety</h2>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">1. Embrace the "Always Charged" Mindset</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Plug in at home every night, just like you charge your phone. You'll wake up to a full "tank" every morning. This single habit eliminates range concerns for 95% of your driving.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">2. Know Your Actual Driving Needs</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Track your driving for a month before buying. Most people are surprised to find their longest regular trip is well within even modest EV ranges. Those few times a year you drive farther? That's what fast charging is for.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">3. Use Apps and Navigation</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Modern EV navigation systems factor in elevation, weather, and driving style to provide accurate range predictions. Apps like PlugShare, ABRP (A Better Route Planner), and manufacturer apps show charging stations along your route and estimate arrival battery levels.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">4. Plan Long Trips (It's Easier Than You Think)</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              For road trips, charging stops align naturally with meal and rest breaks. A 20-30 minute fast charge while grabbing coffee or lunch adds 150-200 miles of range. Many EV owners find road trips more enjoyable with built-in breaks.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Sample 500-Mile Road Trip Plan</h4>
              <div className="space-y-3 text-slate-300 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                  <span>Start: Full charge (280 miles)</span>
                  <span className="text-emerald-400">0 miles</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                  <span>Stop 1: 20-min charge during breakfast</span>
                  <span className="text-emerald-400">180 miles</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                  <span>Stop 2: 25-min charge during lunch</span>
                  <span className="text-emerald-400">350 miles</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Arrive at destination</span>
                  <span className="text-emerald-400">500 miles</span>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-4">Total charging time: 45 minutes (aligned with meal stops you'd take anyway)</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Much Range Do You Actually Need?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Here's a practical guide based on driving patterns:
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="space-y-4">
                <div className="pb-4 border-b border-slate-700/50">
                  <h4 className="text-white font-semibold">Urban Commuter (under 50 miles/day)</h4>
                  <p className="text-slate-400 text-sm">Any EV works. Even budget EVs with 150-200 mile range are perfect.</p>
                </div>
                <div className="pb-4 border-b border-slate-700/50">
                  <h4 className="text-white font-semibold">Suburban Driver (50-100 miles/day)</h4>
                  <p className="text-slate-400 text-sm">Look for 250+ mile range for comfortable daily use without range stress.</p>
                </div>
                <div className="pb-4 border-b border-slate-700/50">
                  <h4 className="text-white font-semibold">Frequent Road Tripper</h4>
                  <p className="text-slate-400 text-sm">300+ mile range and access to fast charging networks (Tesla or CCS).</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Rural Driver / No Home Charging</h4>
                  <p className="text-slate-400 text-sm">350+ mile range recommended. Consider workplace charging options.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Range Anxiety Cure: Experience</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Studies consistently show that range anxiety decreases dramatically after the first few months of EV ownership. Once drivers experience the reality of starting each day with a full charge and see how rarely they actually approach their range limit, the anxiety fades.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              A survey of EV owners found that 92% reported their range anxiety was either "completely gone" or "significantly reduced" after six months of ownership. Many former skeptics become EV advocates once they experience the convenience firsthand.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-emerald-400">Range anxiety</strong> is real, but it's largely based on misconceptions rather than actual limitations. The average EV easily handles the average driver's needs, and the charging infrastructure continues to expand rapidly.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Focus on your actual driving patterns, not hypothetical worst-case scenarios. An EV with 250 miles of range handles 99% of driving situations. For that remaining 1%, the growing fast-charging network has you covered. The future of driving is electric, and range anxiety is quickly becoming a thing of the past.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find Your Perfect EV</h3>
            <p className="text-slate-300 mb-6">Explore electric vehicles with the range that fits your lifestyle—without the anxiety.</p>
            <Link href="/cars" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Electric Vehicles
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Range Anxiety</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Range</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Electric Vehicles</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Charging</span>
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

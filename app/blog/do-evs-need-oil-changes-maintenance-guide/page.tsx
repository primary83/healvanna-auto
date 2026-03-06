"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function DoEvsNeedOilChanges() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Do EVs Need Oil Changes? Complete EV Maintenance Guide for 2026</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>March 4, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/do-evs-need-oil-changes.png" alt="EV maintenance guide" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              It&apos;s one of the most common questions from people considering an electric vehicle: <strong className="text-emerald-400">&ldquo;Do EVs need oil changes?&rdquo;</strong> The short answer is no &mdash; electric vehicles have no engine, no pistons, no combustion, and therefore no engine oil. But that doesn&apos;t mean EVs are maintenance-free. Here&apos;s a complete guide to what your EV actually needs to stay in peak condition, how much it costs, and how it compares to maintaining a gas car.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Why EVs Don&apos;t Need Oil Changes</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Traditional gas and diesel engines use oil to lubricate hundreds of moving parts &mdash; pistons, crankshafts, camshafts, valves, and more. That oil breaks down over time from heat and friction, requiring replacement every 3,000&ndash;10,000 miles. Electric vehicles replace all of that complexity with an electric motor that has <strong className="text-emerald-400">as few as one moving part</strong>. No combustion means no oil contamination, no carbon buildup, and no need for oil filters.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              This single difference eliminates one of the most frequent and expensive maintenance items for car owners. At $50&ndash;$100 per oil change, two to four times per year, you&apos;re saving $100&ndash;$400 annually just on this one item. Over a typical 10-year ownership period, that&apos;s <strong className="text-emerald-400">$1,000&ndash;$4,000 in savings</strong> from skipping oil changes alone.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What EVs Actually Need: The Complete Maintenance Checklist</h2>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Tire Rotation &mdash; Every 5,000&ndash;7,500 Miles</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><span className="text-slate-500">Frequency</span><p className="text-white font-semibold">Every 5,000&ndash;7,500 miles</p></div>
                <div><span className="text-slate-500">Cost</span><p className="text-white font-semibold">$30&ndash;$60</p></div>
                <div><span className="text-slate-500">Why It Matters</span><p className="text-white font-semibold">Even wear, safety</p></div>
                <div><span className="text-slate-500">EV-Specific Note</span><p className="text-white font-semibold">EVs are heavier, wear faster</p></div>
              </div>
              <p className="text-slate-300 text-sm mb-3">Tires are actually the most important maintenance item for EVs. Electric vehicles are significantly heavier than gas cars due to their battery packs, and the instant torque from electric motors can wear tires faster. Regular rotation ensures even wear and extends tire life. Many EV owners also choose EV-specific tires designed for lower rolling resistance and higher load ratings.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Cabin Air Filter &mdash; Every 15,000&ndash;20,000 Miles</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><span className="text-slate-500">Frequency</span><p className="text-white font-semibold">Every 15,000&ndash;20,000 miles</p></div>
                <div><span className="text-slate-500">Cost</span><p className="text-white font-semibold">$20&ndash;$50</p></div>
                <div><span className="text-slate-500">DIY Difficulty</span><p className="text-white font-semibold">Easy (5 minutes)</p></div>
                <div><span className="text-slate-500">HEPA Available</span><p className="text-white font-semibold">Tesla, Volvo, others</p></div>
              </div>
              <p className="text-slate-300 text-sm mb-3">The cabin air filter cleans the air entering your vehicle&apos;s interior. It&apos;s one of the few maintenance items that&apos;s identical between EVs and gas cars. Some premium EVs like Tesla and Volvo offer HEPA-grade filters that capture 99.97% of particles, including pollen, wildfire smoke, and pollution. Replacement is simple and many owners do it themselves in under five minutes.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Brake Fluid &mdash; Every 2&ndash;3 Years</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><span className="text-slate-500">Frequency</span><p className="text-white font-semibold">Every 2&ndash;3 years</p></div>
                <div><span className="text-slate-500">Cost</span><p className="text-white font-semibold">$80&ndash;$150</p></div>
                <div><span className="text-slate-500">Why It Matters</span><p className="text-white font-semibold">Absorbs moisture over time</p></div>
                <div><span className="text-slate-500">DIY Difficulty</span><p className="text-white font-semibold">Moderate</p></div>
              </div>
              <p className="text-slate-300 text-sm mb-3">Brake fluid is hygroscopic &mdash; it absorbs moisture from the air over time, which lowers its boiling point and reduces braking performance. While EVs use their friction brakes far less than gas cars (thanks to regenerative braking), the brake fluid still needs periodic replacement. Most manufacturers recommend every two to three years regardless of mileage.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Battery Coolant &mdash; Every 50,000&ndash;100,000 Miles</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><span className="text-slate-500">Frequency</span><p className="text-white font-semibold">50,000&ndash;100,000 miles</p></div>
                <div><span className="text-slate-500">Cost</span><p className="text-white font-semibold">$100&ndash;$250</p></div>
                <div><span className="text-slate-500">Purpose</span><p className="text-white font-semibold">Battery thermal management</p></div>
                <div><span className="text-slate-500">Brand Variation</span><p className="text-white font-semibold">Varies significantly</p></div>
              </div>
              <p className="text-slate-300 text-sm mb-3">EVs use a liquid cooling system to maintain optimal battery temperature. Over time, this coolant degrades and needs replacement. Tesla recommends checking coolant at 50,000 miles, while Hyundai and Kia suggest replacement at around 60,000 miles. Some manufacturers like BMW claim their coolant is &ldquo;lifetime fill&rdquo; under normal conditions. Check your owner&apos;s manual for specific intervals.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Software Updates &mdash; Over-the-Air (OTA)</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><span className="text-slate-500">Frequency</span><p className="text-white font-semibold">Automatic / As available</p></div>
                <div><span className="text-slate-500">Cost</span><p className="text-white font-semibold">Free</p></div>
                <div><span className="text-slate-500">What&apos;s Updated</span><p className="text-white font-semibold">Range, features, safety</p></div>
                <div><span className="text-slate-500">Connection Required</span><p className="text-white font-semibold">Wi-Fi recommended</p></div>
              </div>
              <p className="text-slate-300 text-sm mb-3">Unlike gas cars that are essentially frozen in time after purchase, EVs regularly receive over-the-air software updates that can improve range, add features, enhance safety systems, and fix bugs. Tesla pushes updates every few weeks, while other manufacturers like Hyundai, Ford, and BMW have accelerated their OTA programs significantly in 2026. Keep your EV connected to Wi-Fi at home to receive updates automatically.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">12V Battery &mdash; Every 4&ndash;5 Years</h3>
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div><span className="text-slate-500">Frequency</span><p className="text-white font-semibold">Every 4&ndash;5 years</p></div>
                <div><span className="text-slate-500">Cost</span><p className="text-white font-semibold">$100&ndash;$300</p></div>
                <div><span className="text-slate-500">Purpose</span><p className="text-white font-semibold">Powers accessories, computers</p></div>
                <div><span className="text-slate-500">Warning Signs</span><p className="text-white font-semibold">Slow startup, errors</p></div>
              </div>
              <p className="text-slate-300 text-sm mb-3">Even though your EV has a massive high-voltage battery, it also uses a small 12V battery to power the vehicle&apos;s computers, lights, door locks, and other accessories. This 12V battery wears out just like in a gas car and needs replacement every 4&ndash;5 years. Some newer EVs are switching to lithium-ion 12V batteries that last longer, but most still use traditional lead-acid units.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Regenerative Braking Advantage</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              One of the biggest maintenance savings comes from <strong className="text-emerald-400">regenerative braking</strong>. When you lift your foot off the accelerator in an EV, the electric motor reverses to act as a generator, converting kinetic energy back into battery charge. This slows the car without using the friction brakes. Many EV drivers rarely touch the brake pedal during normal driving &mdash; a driving style called &ldquo;one-pedal driving.&rdquo;
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The result? EV brake pads can last <strong className="text-emerald-400">100,000&ndash;200,000 miles</strong> compared to 30,000&ndash;50,000 miles on a gas car. That&apos;s potentially the entire life of the vehicle without a single brake pad replacement. Brake rotors last similarly longer. This alone saves $300&ndash;$800 over typical ownership compared to a gas vehicle.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Annual Cost Comparison: EV vs Gas Car</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              When you add it all up, the average EV owner spends approximately <strong className="text-emerald-400">$400 per year on maintenance</strong>, compared to $1,200 or more for a comparable gas vehicle. That&apos;s a savings of $800+ every single year. Over a 10-year ownership period, you&apos;ll save $8,000&ndash;$10,000 in maintenance costs alone &mdash; and that&apos;s before counting the fuel savings from charging with electricity instead of buying gasoline.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Battery Health Tips for Longevity</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Your EV&apos;s battery is its most expensive component, and a few simple habits can extend its life significantly. <strong className="text-emerald-400">Keep daily charging between 20% and 80%</strong> &mdash; only charge to 100% before long trips. Avoid leaving the battery at very low states of charge for extended periods. Use Level 2 home charging as your primary method, reserving DC fast charging for road trips. Park in shade when possible, especially in hot climates, as heat is the battery&apos;s biggest enemy.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Modern EV batteries are remarkably durable. Most manufacturers warranty their batteries for 8 years or 100,000 miles, and real-world data shows the average EV battery retains <strong className="text-emerald-400">85&ndash;90% of its original capacity</strong> after 200,000 miles. Battery replacement fears are largely overblown &mdash; you&apos;re far more likely to sell the car before the battery wears out.
            </p>

            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 my-12">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Save on Maintenance? Find Your EV</h3>
              <p className="text-slate-300 mb-6">Compare real-time pricing on the lowest-maintenance vehicles on the road. Our EV Best Price Finder tracks deals across Carvana, CarMax, AutoTrader, and dealer inventory.</p>
              <Link href="/ev-deals" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
                Browse EV Deals
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Related Articles</h2>
            <div className="grid gap-4 mb-8">
              <Link href="/blog/ev-ownership-cost-guide" className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-400 text-sm font-medium">Guide</span>
                <h4 className="text-white font-semibold mt-1">True Cost of EV Ownership</h4>
                <p className="text-slate-400 text-sm mt-1">A full breakdown of what it really costs to own an electric vehicle.</p>
              </Link>
              <Link href="/blog/first-ev-buyers-complete-guide" className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-400 text-sm font-medium">Guide</span>
                <h4 className="text-white font-semibold mt-1">First-Time EV Buyer&apos;s Complete Guide</h4>
                <p className="text-slate-400 text-sm mt-1">Everything you need to know before making the switch to electric.</p>
              </Link>
              <Link href="/blog/gas-vs-electric-savings" className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <span className="text-emerald-400 text-sm font-medium">Comparison</span>
                <h4 className="text-white font-semibold mt-1">Gas vs Electric: Real Savings Breakdown</h4>
                <p className="text-slate-400 text-sm mt-1">Side-by-side comparison of gas and electric vehicle costs over time.</p>
              </Link>
            </div>
          </article>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Maintenance</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Oil Changes</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Electric Car Care</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Ownership</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">2026</span>
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
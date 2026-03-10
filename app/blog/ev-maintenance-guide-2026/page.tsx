"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function EvMaintenanceGuide2026() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">EV Maintenance Guide &mdash; What Actually Needs Servicing 2026</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>March 9, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>16 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/blog/ev-maintenance.png" alt="Complete EV maintenance guide for 2026 - what needs servicing" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">One of the biggest selling points of electric vehicles is lower maintenance costs &mdash; but how much lower, and what exactly do you still need to service? The honest answer: EVs eliminate about 60% of the maintenance items on a gas car, but they&apos;re not maintenance-free. This EV maintenance guide for 2026 covers everything you actually need to do, what you can skip entirely, real costs from real owners, and a year-by-year maintenance schedule so you know exactly what to expect.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What EVs Don&apos;t Have (and Never Need)</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Let&apos;s start with the maintenance items that simply don&apos;t exist on an electric vehicle. These are costs and headaches you&apos;ll never deal with again:</p>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li><strong className="text-emerald-400">No oil changes</strong> &mdash; EVs have no engine, no oil, no filter. Save $200&ndash;$400 per year.</li>
              <li><strong className="text-emerald-400">No transmission service</strong> &mdash; EVs use a single-speed reduction gear. No fluid changes, no rebuild risk. Save $150&ndash;$300 per service.</li>
              <li><strong className="text-emerald-400">No spark plugs</strong> &mdash; electric motors don&apos;t use combustion. Save $200&ndash;$400 every 60,000 miles.</li>
              <li><strong className="text-emerald-400">No timing belt/chain</strong> &mdash; no engine means no timing components. Save $500&ndash;$1,000 at replacement intervals.</li>
              <li><strong className="text-emerald-400">No exhaust system</strong> &mdash; no catalytic converter theft risk, no muffler replacement, no exhaust manifold gaskets.</li>
              <li><strong className="text-emerald-400">No radiator hoses or water pump</strong> &mdash; EVs have thermal management systems but no traditional cooling circuit failures.</li>
              <li><strong className="text-emerald-400">No alternator or starter motor</strong> &mdash; two common failure points eliminated.</li>
              <li><strong className="text-emerald-400">No fuel injectors, fuel pump, or fuel filter</strong> &mdash; no fuel system at all.</li>
              <li><strong className="text-emerald-400">No emission system</strong> &mdash; no EGR valve, no oxygen sensors, no catalytic converter, no emissions testing.</li>
            </ul>

            <p className="text-slate-300 leading-relaxed mb-6">A typical gas car has over 2,000 moving parts. An EV has fewer than 200. Fewer parts means fewer things that can break, fewer scheduled maintenance items, and fewer unexpected repair bills.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What EVs Still Need: The Complete List</h2>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Tires &mdash; Your Biggest Ongoing Expense</h3>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Frequency:</strong> Every 25,000&ndash;35,000 miles | <strong className="text-emerald-400">Cost:</strong> $600&ndash;$1,200 per set</p>

            <p className="text-slate-300 leading-relaxed mb-6">Tires are the single biggest maintenance cost on an EV. Electric vehicles are heavier than gas cars (due to the battery), and the instant torque wears tires faster. EV-specific tires are designed for higher load ratings and lower rolling resistance, but they cost 10&ndash;20% more than standard tires. Expect to replace tires every 25,000&ndash;35,000 miles compared to 40,000&ndash;50,000 for a gas car.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Pro tip:</strong> Rotate your tires every 5,000&ndash;7,500 miles to maximize lifespan. This is the single most impactful maintenance item for extending tire life. Many EV owners do rotations at 6,000-mile intervals and get 35,000+ miles from a set.</p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">2. Cabin Air Filter</h3>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Frequency:</strong> Every 12&ndash;24 months | <strong className="text-emerald-400">Cost:</strong> $20&ndash;$50 (DIY) or $50&ndash;$100 (dealer)</p>

            <p className="text-slate-300 leading-relaxed mb-6">Every EV uses a cabin air filter to clean the air entering the passenger compartment. In Florida, where humidity and pollen are constant, replacing this filter annually is recommended. Many EV cabin filters include a HEPA or activated charcoal layer. Tesla uses a &ldquo;Bioweapon Defense Mode&rdquo; HEPA filter that&apos;s slightly more expensive but cleans air exceptionally well. Most cabin air filters can be replaced in 10 minutes with no tools &mdash; YouTube tutorials exist for every model.</p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Brake Fluid</h3>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Frequency:</strong> Every 2&ndash;4 years | <strong className="text-emerald-400">Cost:</strong> $80&ndash;$150</p>

            <p className="text-slate-300 leading-relaxed mb-6">EVs still have hydraulic brakes, and brake fluid absorbs moisture over time, reducing braking performance. Most manufacturers recommend replacing brake fluid every 2&ndash;4 years regardless of mileage. Tesla recommends checking every 2 years and replacing as needed. This is one service best left to a professional, as improper brake bleeding can compromise safety.</p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Brake Pads and Rotors &mdash; The Pleasant Surprise</h3>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Frequency:</strong> Every 100,000&ndash;200,000+ miles | <strong className="text-emerald-400">Cost:</strong> $300&ndash;$600 when needed</p>

            <p className="text-slate-300 leading-relaxed mb-6">This is one of the most surprising benefits of EV ownership. Thanks to regenerative braking (the motor slows the car and captures energy when you lift off the accelerator), the physical brake pads are used far less than in a gas car. Many EV owners report original brake pads lasting 150,000&ndash;200,000+ miles. Some Tesla owners with over 200,000 miles have never replaced brake pads. In a gas car, brake pads typically last 30,000&ndash;50,000 miles &mdash; a massive difference.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Florida-specific note:</strong> In humid climates, brake rotors can develop surface rust from infrequent use. Use your physical brakes periodically (at least once per week in normal driving) to keep rotors clean. Some EV owners in Florida schedule a monthly &ldquo;brake cleaning drive&rdquo; where they use physical brakes more aggressively to scrub rust off the rotors.</p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Windshield Washer Fluid</h3>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Frequency:</strong> As needed | <strong className="text-emerald-400">Cost:</strong> $5&ndash;$10</p>

            <p className="text-slate-300 leading-relaxed mb-6">Yes, this makes the list because it&apos;s literally one of the few fluids in an EV. Top up when the indicator light comes on. In Florida, you&apos;ll use more washer fluid due to bug splatter and pollen, especially during love bug season (April&ndash;May and August&ndash;September).</p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">6. Battery Coolant</h3>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Frequency:</strong> Every 4&ndash;6 years or 50,000&ndash;100,000 miles | <strong className="text-emerald-400">Cost:</strong> $150&ndash;$300</p>

            <p className="text-slate-300 leading-relaxed mb-6">EVs use a liquid cooling system for the battery pack and power electronics. This coolant degrades over time and needs periodic replacement. Tesla recommends checking at 4 years, Hyundai/Kia at 6 years. This is a dealer/service center job &mdash; it requires specialized equipment to properly bleed the cooling circuit.</p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">7. 12V Battery</h3>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Frequency:</strong> Every 3&ndash;5 years | <strong className="text-emerald-400">Cost:</strong> $100&ndash;$300</p>

            <p className="text-slate-300 leading-relaxed mb-6">Every EV still has a small 12V battery that powers accessories, locks, and the computer system that wakes the main battery. This 12V battery needs replacement every 3&ndash;5 years, just like in a gas car. Some newer EVs (Tesla Model 3/Y 2024+) use lithium-ion 12V batteries that last longer but cost more to replace ($200&ndash;$300 vs $100&ndash;$150 for lead-acid).</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Annual Maintenance Cost Comparison</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 px-4 text-emerald-400 font-semibold">Item</th>
                    <th className="py-3 px-4 text-emerald-400 font-semibold">Gas Car (Annual)</th>
                    <th className="py-3 px-4 text-emerald-400 font-semibold">EV (Annual)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800"><td className="py-3 px-4">Oil changes</td><td className="py-3 px-4">$200&ndash;$400</td><td className="py-3 px-4">$0</td></tr>
                  <tr className="border-b border-slate-800"><td className="py-3 px-4">Transmission service</td><td className="py-3 px-4">$75 (amortized)</td><td className="py-3 px-4">$0</td></tr>
                  <tr className="border-b border-slate-800"><td className="py-3 px-4">Brake pads</td><td className="py-3 px-4">$150 (amortized)</td><td className="py-3 px-4">$15 (amortized)</td></tr>
                  <tr className="border-b border-slate-800"><td className="py-3 px-4">Tires</td><td className="py-3 px-4">$250 (amortized)</td><td className="py-3 px-4">$350 (amortized)</td></tr>
                  <tr className="border-b border-slate-800"><td className="py-3 px-4">Cabin air filter</td><td className="py-3 px-4">$35</td><td className="py-3 px-4">$35</td></tr>
                  <tr className="border-b border-slate-800"><td className="py-3 px-4">Spark plugs, belts, hoses</td><td className="py-3 px-4">$100 (amortized)</td><td className="py-3 px-4">$0</td></tr>
                  <tr className="border-b border-slate-800"><td className="py-3 px-4">Brake fluid</td><td className="py-3 px-4">$40 (amortized)</td><td className="py-3 px-4">$40 (amortized)</td></tr>
                  <tr className="border-b border-slate-800"><td className="py-3 px-4">Coolant</td><td className="py-3 px-4">$50 (amortized)</td><td className="py-3 px-4">$50 (amortized)</td></tr>
                  <tr className="font-bold"><td className="py-3 px-4 text-white">Total Annual</td><td className="py-3 px-4">$900&ndash;$1,100</td><td className="py-3 px-4">$490&ndash;$590</td></tr>
                  <tr className="font-bold text-emerald-400"><td className="py-3 px-4">Annual Savings</td><td className="py-3 px-4"></td><td className="py-3 px-4">$410&ndash;$510</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Year-by-Year EV Maintenance Schedule</h2>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Every 6 months or 5,000&ndash;7,500 miles:</strong> Tire rotation ($25&ndash;$50 or free with tire purchase)</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Year 1:</strong> Tire rotation x2, cabin air filter. Total: ~$100</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Year 2:</strong> Tire rotation x2, cabin air filter, brake fluid check. Total: ~$150</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Year 3:</strong> Tire rotation x2, cabin air filter, first tire replacement (if high mileage). Total: ~$100&ndash;$1,000</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Year 4:</strong> Tire rotation x2, cabin air filter, brake fluid replacement, battery coolant check, 12V battery check. Total: ~$250</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Year 5:</strong> Tire rotation x2, cabin air filter, second tire replacement, 12V battery replacement. Total: ~$1,100&ndash;$1,500</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Florida-Specific Maintenance Tips</h2>

            <ul className="text-slate-300 space-y-2 mb-6">
              <li><strong className="text-emerald-400">Heat and battery care:</strong> Florida heat accelerates battery degradation. Park in shade when possible, avoid charging to 100% for daily use (80% is ideal), and avoid leaving your EV parked in direct sun with a very low battery state for extended periods.</li>
              <li><strong className="text-emerald-400">Salt air corrosion:</strong> If you live near the coast, rinse the undercarriage monthly to prevent corrosion on non-battery components (suspension, brake calipers, hardware).</li>
              <li><strong className="text-emerald-400">AC system care:</strong> Florida EVs run AC heavily. The cabin AC system uses a compressor that&apos;s separate from the battery cooling. Have the refrigerant level checked every 2&ndash;3 years to maintain cooling efficiency.</li>
              <li><strong className="text-emerald-400">Hurricane preparedness:</strong> Keep your EV charged above 80% during hurricane season (June&ndash;November). A fully charged EV battery can serve as emergency power for essential devices.</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Bottom Line</h2>

            <p className="text-slate-300 leading-relaxed mb-6">EVs are dramatically cheaper to maintain than gas cars &mdash; roughly $400&ndash;$500 less per year. Over a 10-year ownership period, that&apos;s $4,000&ndash;$5,000 in savings on maintenance alone, on top of $15,000&ndash;$25,000 in fuel savings. The maintenance that does exist is simple: tire rotations, cabin filters, brake fluid, and the occasional coolant change. No oil, no transmission, no spark plugs, no exhaust &mdash; just the basics.</p>

            <p className="text-slate-300 leading-relaxed mb-8">Ready to start saving on both fuel and maintenance? Browse our <Link href="/ev-deals" className="text-emerald-400 hover:text-emerald-300">EV deals page</Link> for current pricing, or use our <Link href="/ev-tools" className="text-emerald-400 hover:text-emerald-300">EV Match &amp; Savings Hub</Link> to calculate your total cost of ownership including maintenance savings.</p>
          </article>

          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}

"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function EvVsGas5YearMaintenanceBreakdown() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Comparison</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">EV Maintenance Costs vs Gas Cars &mdash; 5-Year Breakdown</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>April 21, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>13 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/blog/ev-maintenance-costs.png" alt="EV maintenance vs gas car cost comparison" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">The maintenance cost advantage of EVs is one of the most repeated claims in automotive marketing &mdash; and one of the least understood by actual car buyers. &ldquo;EVs have fewer moving parts&rdquo; is technically true but practically meaningless until you see the real dollar amounts. This guide provides the actual 5-year maintenance costs for popular EVs versus their gas counterparts, using data from service records, manufacturer maintenance schedules, and owner-reported expenses. No estimates. No marketing. Just the real numbers.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Why EVs Cost Less to Maintain</h2>

            <p className="text-slate-300 leading-relaxed mb-6">The explanation is mechanical. An internal combustion engine has approximately <strong className="text-emerald-400">2,000 moving parts</strong>. An electric motor has approximately <strong className="text-emerald-400">20</strong>. Fewer moving parts means fewer things that wear out, break, or need periodic replacement.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Specifically, EVs eliminate these maintenance items entirely:</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Oil changes:</strong> Gas cars need oil changes every 5,000&ndash;10,000 miles ($50&ndash;$100 each). Over 5 years and 75,000 miles, that&apos;s 8&ndash;15 oil changes costing $400&ndash;$1,500 total. EVs: $0.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Transmission service:</strong> Automatic transmissions need fluid changes every 30,000&ndash;60,000 miles ($150&ndash;$300 each). EVs have single-speed reducers that require no service.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Spark plugs:</strong> Replacement every 30,000&ndash;100,000 miles ($100&ndash;$400 per set). EVs: no combustion, no spark plugs.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Timing belt/chain:</strong> Replacement at 60,000&ndash;100,000 miles ($500&ndash;$1,500). EVs: no engine, no timing system.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Exhaust system:</strong> Catalytic converters, mufflers, exhaust pipes &mdash; all absent on EVs.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Fuel system:</strong> Fuel injectors, fuel pump, fuel filter &mdash; all absent on EVs.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Engine cooling:</strong> Radiator, thermostat, coolant hoses &mdash; EVs have battery cooling systems, but they&apos;re sealed and rarely need service.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What EVs Still Need</h2>

            <p className="text-slate-300 leading-relaxed mb-6">EVs aren&apos;t maintenance-free. They share several maintenance items with gas cars:</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Tires:</strong> EVs are heavier and produce instant torque, both of which wear tires faster. EV-specific tires cost $150&ndash;$300 each and may need replacement every 25,000&ndash;35,000 miles versus 40,000&ndash;50,000 for gas cars. Over 5 years: EV tires cost approximately $1,200&ndash;$2,400 versus $800&ndash;$1,600 for gas car tires.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Brakes:</strong> Ironically, EV brakes last much longer &mdash; often 100,000+ miles &mdash; because regenerative braking handles 70&ndash;80% of deceleration. Over 5 years, most EV owners never replace brake pads. Gas car brake pad replacement (every 30,000&ndash;50,000 miles): $300&ndash;$800 per axle.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Cabin air filter:</strong> Every 15,000&ndash;25,000 miles, $30&ndash;$60 per replacement. Same for both EVs and gas cars.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Windshield wipers:</strong> Annual replacement, $20&ndash;$40. Same for both.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">12V battery:</strong> Replacement every 3&ndash;5 years, $100&ndash;$250. Same for both.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Coolant for battery thermal management:</strong> Some EVs recommend coolant replacement at 100,000&ndash;150,000 miles, $100&ndash;$200. Most owners won&apos;t reach this in 5 years.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The 5-Year Cost Comparison</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Based on 75,000 miles over 5 years (15,000 miles/year):</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Tesla Model 3 vs Toyota Camry</h3>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Tesla Model 3 5-year totals:</strong> Oil changes $0, transmission service $0, spark plugs $0, brake pads $0 (regen braking), tires $1,800 (2 sets), cabin air filter $150 (3 replacements), wipers $150, 12V battery $200, coolant $0, engine air filter $0. <strong className="text-emerald-400">5-Year Total: $2,300.</strong> Annual average: $460.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Toyota Camry 5-year totals:</strong> Oil changes $750 (10 changes), transmission service $300 (1 service), spark plugs $200 (1 set), brake pads $600 (1 replacement), tires $1,200 (1.5 sets), cabin air filter $150 (3 replacements), wipers $150, 12V battery $150, coolant $150, engine air filter $100. <strong className="text-emerald-400">5-Year Total: $3,750.</strong> Annual average: $750.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Savings: $1,450 over 5 years, or $290 per year.</strong></p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Chevrolet Equinox EV vs Chevrolet Equinox (Gas)</h3>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Equinox EV 5-year totals:</strong> Oil changes $0, transmission service $0, brake pads $0, tires $1,600, other routine items $400. <strong className="text-emerald-400">5-Year Total: $2,000.</strong> Annual average: $400.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Equinox Gas 5-year totals:</strong> Oil changes $900 (12 changes), transmission service $350, brake pads $700, tires $1,100, other routine items $600. <strong className="text-emerald-400">5-Year Total: $3,650.</strong> Annual average: $730.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Savings: $1,650 over 5 years, or $330 per year.</strong> For a deeper look at ongoing costs, see our <Link href="/blog/ev-maintenance-costs-vs-gas-cars-2026" className="text-emerald-400 hover:text-emerald-300">EV maintenance costs vs gas cars guide</Link>.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Tire Cost Caveat</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Tires are the one maintenance category where EVs cost MORE than gas cars. EV-specific tires (designed for the extra weight and instant torque) cost 10&ndash;30% more per tire and wear faster. Over 5 years, expect to spend $400&ndash;$800 more on tires for an EV than an equivalent gas car.</p>

            <p className="text-slate-300 leading-relaxed mb-6">This is the honest caveat that EV enthusiasts often skip. Tires partially offset the oil change and brake savings &mdash; reducing the net maintenance advantage from &ldquo;dramatic&rdquo; to &ldquo;meaningful.&rdquo; The EV still wins on total maintenance cost, but not by as much as the &ldquo;no oil changes!&rdquo; marketing implies.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Unscheduled Repair Factor</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Unscheduled repairs (things that break unexpectedly) are harder to compare because EVs haven&apos;t been on the road long enough for comprehensive long-term reliability data. Early data from Consumer Reports suggests that EVs have slightly more unscheduled repair visits in the first 3 years than gas cars (primarily for software issues, 12V battery failures, and fit/finish problems), but the cost per visit is lower because there are fewer expensive mechanical components to fail.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The wild card is battery replacement. If an EV battery fails outside warranty, the replacement cost is $5,000&ndash;$15,000 &mdash; a single expense that would wipe out a decade of maintenance savings. However, this is exceedingly rare for batteries less than 10 years old, and warranty coverage (8 years/100,000 miles standard) protects against early failures.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Combined Savings: Fuel + Maintenance</h2>

            <p className="text-slate-300 leading-relaxed mb-6">The real EV ownership story combines fuel AND maintenance savings:</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Fuel (5-year):</strong> EV $1,700&ndash;$3,400 vs Gas Car $8,750 &mdash; EV saves $5,350&ndash;$7,050.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Maintenance (5-year):</strong> EV $2,000&ndash;$2,300 vs Gas Car $3,650&ndash;$3,750 &mdash; EV saves $1,350&ndash;$1,750.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Total 5-year cost:</strong> EV $3,700&ndash;$5,700 vs Gas Car $12,400&ndash;$12,500 &mdash; <strong className="text-emerald-400">EV saves $6,700&ndash;$8,800.</strong></p>

            <p className="text-slate-300 leading-relaxed mb-8">Combined fuel and maintenance savings of $6,700&ndash;$8,800 over 5 years. That&apos;s $1,340&ndash;$1,760 per year &mdash; enough to offset a significant portion of any EV purchase price premium. For a complete three-way comparison, see our <Link href="/blog/ev-vs-hybrid-vs-gas-2026" className="text-emerald-400 hover:text-emerald-300">EV vs hybrid vs gas breakdown</Link>, check the latest <Link href="/blog/gas-prices-ev-savings-2026" className="text-emerald-400 hover:text-emerald-300">gas prices and EV savings data</Link>, or browse current <Link href="/ev-deals" className="text-emerald-400 hover:text-emerald-300">EV deals</Link> to run these numbers against a specific model and your own electricity rates.</p>
          </article>

          {/* Internal Links */}
          <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <h3 className="text-lg font-semibold text-white mb-4">Related Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/ev-maintenance-costs-vs-gas-cars-2026" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">EV Maintenance Costs vs Gas Cars 2026 &rarr;</Link>
              <Link href="/blog/ev-vs-hybrid-vs-gas-2026" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">EV vs Hybrid vs Gas 2026 &rarr;</Link>
              <Link href="/blog/gas-prices-ev-savings-2026" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Gas Prices &amp; EV Savings 2026 &rarr;</Link>
              <Link href="/ev-deals" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Find EV Deals &rarr;</Link>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              <Link href="/blog?tag=maintenance" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Maintenance</Link>
              <Link href="/blog?tag=ownership-costs" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Ownership Costs</Link>
              <Link href="/blog?tag=comparison" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Comparison</Link>
              <Link href="/blog?tag=savings" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Savings</Link>
            </div>
          </div>

          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}

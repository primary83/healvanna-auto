"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function VehicleToGridEvPowerHome() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Vehicle-to-Grid: Your EV Could Power Your Home During a Hurricane &mdash; Here&apos;s How</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>April 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>14 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/blog/vehicle-to-grid-ev-power-home-hero.png" alt="Electric vehicle powering a home through vehicle-to-grid technology" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">Your electric vehicle&apos;s battery is massive &mdash; typically <strong className="text-emerald-400">60 to 100 kWh</strong> of stored energy, compared to just 13.5 kWh in a Tesla Powerwall. That means the average EV sitting in your driveway holds five to seven times more backup power than the most popular home battery on the market. When the next hurricane knocks out power for days, your EV could be the difference between a minor inconvenience and a genuine emergency.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Is Vehicle-to-Grid Technology?</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Vehicle-to-grid (V2G) is an umbrella term for technologies that allow electric vehicles to send stored energy back out of their batteries &mdash; to your home, to the electrical grid, or directly to appliances and devices. A <strong className="text-emerald-400">77 kWh EV battery can power an average American home for two to three days</strong> during an outage, running the refrigerator, lights, Wi-Fi router, phone chargers, and even air conditioning on a managed schedule.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The technology works by reversing the flow of electricity through a bidirectional charger. Instead of only pulling power from the grid into the car, the system can push power from the car back into your home&apos;s electrical panel or onto the grid itself. It&apos;s the same basic principle as a generator, but silent, emissions-free, and already sitting in your garage.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Three Levels of EV Power Sharing</h2>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Vehicle-to-Load (V2L): Portable Power Outlet</h3>

            <p className="text-slate-300 leading-relaxed mb-6">V2L is the simplest form &mdash; your EV acts as a giant portable power bank with a standard outlet built into the vehicle. Output ranges from <strong className="text-emerald-400">1.9 kW to 3.6 kW</strong>, enough to run a laptop, phone chargers, camping gear, power tools, a portable heater, or even a small air conditioner. The <Link href="/cars/hyundai" className="text-emerald-400 hover:text-emerald-300">Hyundai Ioniq 5</Link>, <Link href="/cars/kia" className="text-emerald-400 hover:text-emerald-300">Kia EV6</Link>, <Link href="/cars/ford" className="text-emerald-400 hover:text-emerald-300">Ford F-150 Lightning</Link>, and <Link href="/cars/rivian" className="text-emerald-400 hover:text-emerald-300">Rivian R1T/R1S</Link> all support V2L out of the box. No additional equipment needed &mdash; just plug in and go.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Vehicle-to-Home (V2H): Whole-Home Backup Power</h3>

            <p className="text-slate-300 leading-relaxed mb-6">V2H is where things get serious. With a bidirectional charger and a transfer switch installed in your home, your EV can power your <strong className="text-emerald-400">entire house at 9.6 to 19.2 kW</strong> &mdash; enough to run the AC, refrigerator, washing machine, and every light in the house simultaneously. The Ford F-150 Lightning is the current leader in this space, with its Intelligent Backup Power system offering seamless switchover when the grid goes down. You don&apos;t even have to think about it &mdash; the truck detects the outage and starts powering your home automatically.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Vehicle-to-Grid (V2G): Selling Power Back</h3>

            <p className="text-slate-300 leading-relaxed mb-6">The most ambitious level &mdash; V2G allows your EV to sell stored energy back to the electrical grid during peak demand periods, earning you money while stabilizing the grid. This technology is still in the <strong className="text-emerald-400">pilot phase</strong> across most of the US, but several utilities are running active programs. The idea is simple: charge your EV at night when electricity is cheap ($0.04&ndash;$0.06/kWh), then sell it back during afternoon peak hours when rates spike ($0.20&ndash;$0.40/kWh). Early participants in pilot programs are reporting $50&ndash;$150 per month in grid credits.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Which EVs Support Bidirectional Charging?</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Not every EV can send power back. Here are the models currently supporting some form of bidirectional charging:</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Ford F-150 Lightning:</strong> The gold standard for V2H. Its 131 kWh extended-range battery can power an average home for up to 10 days. Ford&apos;s Intelligent Backup Power system with the 80-amp Ford Charge Station Pro provides seamless automatic switchover.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Hyundai Ioniq 5 / Ioniq 6:</strong> V2L standard on all trims with a 1.9 kW outlet. V2H capability available through third-party bidirectional chargers like the Wallbox Quasar 2.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Kia EV6 / EV9:</strong> V2L standard with 3.6 kW output &mdash; the highest V2L output currently available. V2H supported through compatible bidirectional chargers.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Rivian R1T / R1S:</strong> V2L through Camp Speaker accessory and vehicle outlets. Bidirectional home charging announced but not yet widely available.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Nissan Leaf (legacy):</strong> The original V2H pioneer through the CHAdeMO standard. Limited by the older charging protocol, but still functional for home backup.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Florida Hurricane Angle: Why This Matters Here</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Florida residents don&apos;t need to be reminded that power outages are a way of life during hurricane season. The average hurricane-related outage in Florida lasts <strong className="text-emerald-400">4.3 days</strong>, and some neighborhoods have gone weeks without power after major storms. A traditional whole-home generator costs $10,000&ndash;$20,000 installed, requires fuel that&apos;s often unavailable during emergencies, and needs regular maintenance.</p>

            <p className="text-slate-300 leading-relaxed mb-6">An EV with V2H capability flips the script entirely. The <strong className="text-emerald-400">F-150 Lightning&apos;s 131 kWh battery can power a typical Florida home for up to 10 days</strong> when managed conservatively &mdash; running the AC on a cycle, keeping the fridge cold, and maintaining essential electronics. Even a smaller 77 kWh battery provides three to four days of backup, well beyond the average outage duration.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The cost comparison is compelling. A complete V2H setup &mdash; including a bidirectional charger, transfer switch, and installation &mdash; runs <strong className="text-emerald-400">$3,500 to $8,000</strong>. A Tesla Powerwall system capable of similar backup duration (you&apos;d need two or three units) costs <strong className="text-emerald-400">$10,000 to $15,000</strong> per unit, installed. And unlike a dedicated battery, your EV does double duty as daily transportation.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Florida Utility V2G Programs</h2>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Florida Power &amp; Light (FPL)</strong> has launched a V2G pilot program for residential customers, offering bill credits for EV owners who allow the utility to draw small amounts of power from their vehicles during peak demand. Enrollment is limited but expanding. FPL&apos;s SolarTogether program also pairs well with V2H setups, allowing solar credits to offset the electricity used for EV charging.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Duke Energy Florida</strong> is running a similar pilot with a focus on commercial fleet vehicles, though residential expansion is planned for late 2026. Duke&apos;s program includes a smart charger incentive that covers up to $1,000 of the bidirectional charger cost.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What You Need to Set Up V2H</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Setting up vehicle-to-home backup power requires a few key components:</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">A compatible EV:</strong> Not all EVs support bidirectional charging. Check your vehicle&apos;s specs or ask your dealer.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">A bidirectional charger:</strong> The Ford Charge Station Pro ($1,310), Wallbox Quasar 2 ($4,000&ndash;$5,000), or Enphase IQ EV Charger ($1,500+) are the leading options. The Ford unit only works with the F-150 Lightning; the Wallbox and Enphase are more universal.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">A transfer switch:</strong> Required by code to safely isolate your home from the grid during an outage. This prevents backfeeding electricity into downed power lines. Cost: $500&ndash;$1,500 installed.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Professional installation:</strong> A licensed electrician needs to install the charger, transfer switch, and potentially upgrade your electrical panel. Budget $1,000&ndash;$2,500 for labor.</p>

            {/* In-article image: V2H setup */}
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-12">
              <Image src="/images/blog/vehicle-to-grid-ev-power-home-setup.png" alt="Vehicle-to-home charging setup with bidirectional charger" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Bottom Line</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Vehicle-to-grid technology transforms your EV from a simple mode of transportation into a mobile power plant. For Florida residents facing annual hurricane threats, the ability to power your home for days &mdash; or even weeks &mdash; from the battery in your driveway is a game-changer. The economics already make sense: a V2H setup costs less than a standalone home battery, provides more capacity, and your EV continues to serve as daily transportation.</p>

            <p className="text-slate-300 leading-relaxed mb-6">As V2G programs expand and bidirectional chargers become standard equipment, the line between &ldquo;electric vehicle&rdquo; and &ldquo;home energy system&rdquo; will continue to blur. Your next EV might not just save you money on gas &mdash; it could keep your lights on when the grid goes dark.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Want to learn more about EV charging? Read our <Link href="/blog/ev-home-charging-guide-2026" className="text-emerald-400 hover:text-emerald-300">complete home charging guide</Link> or see how much you could save with our <Link href="/blog/gas-prices-ev-savings-2026" className="text-emerald-400 hover:text-emerald-300">gas prices vs. EV savings breakdown</Link>. Find <Link href="/charge" className="text-emerald-400 hover:text-emerald-300">charging stations near you</Link> or <Link href="/ev-deals" className="text-emerald-400 hover:text-emerald-300">browse current EV deals</Link>.</p>
          </article>

          <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <h3 className="text-lg font-semibold text-white mb-4">Related Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/ev-home-charging-guide-2026" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Home Charging Guide 2026 &rarr;</Link>
              <Link href="/blog/gas-prices-ev-savings-2026" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Gas Prices Surging &mdash; EV Savings &rarr;</Link>
              <Link href="/charge" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Find Charging Stations &rarr;</Link>
              <Link href="/ev-deals" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Find EV Deals &rarr;</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              <Link href="/blog?tag=v2g" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">V2G</Link>
              <Link href="/blog?tag=vehicle-to-grid" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Vehicle-to-Grid</Link>
              <Link href="/blog?tag=technology" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Technology</Link>
              <Link href="/blog?tag=hurricane" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Hurricane</Link>
              <Link href="/blog?tag=ev-power" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">EV Power</Link>
            </div>
          </div>

          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}

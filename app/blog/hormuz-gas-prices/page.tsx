"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function HormuzGasPrices() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Insights</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Strait of Hormuz Blockade: What $6 Gas Would Mean for EV Demand</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>April 12, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>14 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/blog/hormuz-gas-prices-hero.png" alt="Strait of Hormuz tensions and rising gas prices" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">The Strait of Hormuz is a narrow waterway just <strong className="text-emerald-400">21 miles wide at its narrowest point</strong>, flanked by Iran on one side and Oman and the UAE on the other. Roughly <strong className="text-emerald-400">20 percent of the world&apos;s oil supply</strong> &mdash; between 17 and 20 million barrels per day &mdash; passes through this chokepoint on tanker ships. If that flow were disrupted, the consequences for global energy markets would be immediate, severe, and felt at every gas pump in America. For the electric vehicle industry, a Hormuz crisis wouldn&apos;t just be a news headline &mdash; it would be the single greatest demand accelerant in EV history.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Chokepoint That Controls Global Oil</h2>

            <p className="text-slate-300 leading-relaxed mb-6">The Strait of Hormuz has been a flashpoint in geopolitical strategy for decades. Iran&apos;s coastline runs along the entire northern edge of the strait, giving Tehran effective oversight of every tanker that transits the waterway. The shipping lane itself narrows to just <strong className="text-emerald-400">two miles wide</strong> in each direction, with a two-mile buffer zone between inbound and outbound traffic. It&apos;s the most important oil transit chokepoint on the planet, and there is no viable alternative route for most of the crude that flows through it.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Saudi Arabia, Iraq, Kuwait, the UAE, and Qatar all depend on the strait for the vast majority of their oil exports. While Saudi Arabia has a limited pipeline alternative through the East-West pipeline to the Red Sea port of Yanbu, that pipeline can only handle about <strong className="text-emerald-400">5 million barrels per day</strong> &mdash; a fraction of the strait&apos;s throughput. The UAE has the Habshan-Fujairah pipeline that bypasses the strait, but its capacity is similarly limited at around 1.5 million barrels per day. A full blockade would leave the majority of Persian Gulf oil stranded.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Current tensions have elevated the risk to levels not seen since the tanker wars of the 1980s. Iranian military exercises in the strait have increased in frequency and scale. The Islamic Revolutionary Guard Corps Navy (IRGCN) has conducted <strong className="text-emerald-400">live-fire drills simulating attacks on naval convoys</strong>, and Iranian officials have repeatedly threatened to close the strait in response to international sanctions pressure. Meanwhile, the U.S. Fifth Fleet maintains a permanent presence in Bahrain, with carrier strike groups rotating through the region. The situation is a powder keg with multiple ignition sources.</p>

            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-12">
              <Image src="/images/blog/hormuz-gas-prices-tankers.png" alt="Oil tankers in the Strait of Hormuz shipping lane" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What a Disruption Would Look Like at the Pump</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Energy analysts model Hormuz disruption scenarios on a spectrum from partial harassment (mine-laying, tanker seizures) to full naval blockade. Even a <strong className="text-emerald-400">partial disruption</strong> &mdash; one that reduces flow by 30 to 50 percent &mdash; would send oil prices spiking to <strong className="text-emerald-400">$120 to $150 per barrel</strong>, up from the current range of approximately $75 to $85. A complete blockade lasting more than two weeks would likely push crude past $150, with some extreme models forecasting temporary spikes above $200.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The translation to retail gasoline prices is roughly predictable. Every $10 increase in crude oil adds approximately $0.25 to $0.30 per gallon at the pump, with a lag of about two to four weeks. If crude surged from $80 to $140 per barrel, the national average gasoline price would climb from today&apos;s approximate <strong className="text-emerald-400">$3.50 to somewhere between $5.50 and $6.00 per gallon</strong>. A spike to $150+ crude could push retail prices to $6.50 or even $7.00 in high-tax states like California, where gas would likely breach <strong className="text-emerald-400">$8.00 per gallon</strong>.</p>

            <p className="text-slate-300 leading-relaxed mb-6">These aren&apos;t hypothetical projections from fringe analysts. The U.S. Energy Information Administration (EIA), the International Energy Agency (IEA), and major investment banks including Goldman Sachs and JP Morgan have all published Hormuz disruption models with similar price ranges. The question isn&apos;t whether a disruption would cause $6 gas &mdash; it&apos;s whether the disruption lasts long enough for prices to fully transmit through the supply chain.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Historical Precedents: Every Oil Shock Has Reshaped Car Buying</h2>

            <p className="text-slate-300 leading-relaxed mb-6">History shows a clear and repeatable pattern: when gas prices spike, consumer demand for fuel-efficient and alternative-fuel vehicles surges. The correlation is not subtle &mdash; it&apos;s dramatic, immediate, and persistent.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">1979 Iranian Revolution</h3>

            <p className="text-slate-300 leading-relaxed mb-6">When the revolution disrupted Iranian oil exports, U.S. gas prices surged from about <strong className="text-emerald-400">$1.30 to $3.40 per gallon</strong> (adjusted for inflation, roughly $4.50 to $11.60 in 2026 dollars). The result: a wholesale shift away from American gas guzzlers toward Japanese fuel-efficient cars. Toyota and Honda went from niche imports to mainstream brands practically overnight. Chrysler nearly went bankrupt. The entire trajectory of the U.S. auto industry was altered by a single geopolitical event.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">1990 Gulf War</h3>

            <p className="text-slate-300 leading-relaxed mb-6">Iraq&apos;s invasion of Kuwait caused crude oil prices to <strong className="text-emerald-400">double within three months</strong>. U.S. gas prices jumped by over a dollar per gallon. SUV sales, which had been booming, immediately softened. Compact car sales surged. The pattern repeated: consumers respond to pump prices with their wallets, not with loyalty to their previous vehicle class.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">2008 Oil Price Spike</h3>

            <p className="text-slate-300 leading-relaxed mb-6">When oil hit $147 per barrel in July 2008 and gas peaked at <strong className="text-emerald-400">$4.11 per gallon nationally</strong>, the Toyota Prius became nearly impossible to buy. Dealers had waiting lists months long. Prius sales jumped <strong className="text-emerald-400">50 percent year-over-year</strong>. GM, heavily invested in trucks and SUVs, filed for bankruptcy the following year. This was the spike that planted the seed for the modern EV revolution &mdash; Tesla delivered its first Roadsters that same year.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">2022 Russia-Ukraine Conflict</h3>

            <p className="text-slate-300 leading-relaxed mb-6">The most recent precedent and the most relevant. When Russia&apos;s invasion of Ukraine sent gas prices to a <strong className="text-emerald-400">$5.00 national average in June 2022</strong>, EV sales in the United States surged <strong className="text-emerald-400">65 percent year-over-year</strong>. Tesla couldn&apos;t build Model Y fast enough. Hyundai Ioniq 5 waitlists stretched to 12 months. The Chevrolet Bolt, previously a slow seller, suddenly had a months-long backlog. Google searches for &ldquo;electric car&rdquo; hit all-time highs. The message was unambiguous: $5 gas converts the curious into buyers.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Modeling $6 Gas: The Math That Changes Everything</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Let&apos;s run the numbers that every American driver would face at $6 per gallon, and compare them against current EV operating costs. The average American drives approximately <strong className="text-emerald-400">12,000 miles per year</strong>. The average fuel economy of the U.S. vehicle fleet is about <strong className="text-emerald-400">28 miles per gallon</strong>.</p>

            <p className="text-slate-300 leading-relaxed mb-6">At today&apos;s prices of roughly $3.50 per gallon, that driver spends about <strong className="text-emerald-400">$1,500 per year on gas</strong> (12,000 &divide; 28 &times; $3.50). Manageable. Not pleasant, but manageable.</p>

            <p className="text-slate-300 leading-relaxed mb-6">At $6.00 per gallon, that same driver spends <strong className="text-emerald-400">$2,571 per year</strong> &mdash; an increase of over $1,000 annually. That&apos;s $214 per month, or nearly $50 per week, just on gasoline. For a household with two gas vehicles, the annual fuel bill would approach <strong className="text-emerald-400">$5,142</strong>.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Now compare that to an electric vehicle. A <Link href="/ev-deals" className="text-emerald-400 hover:text-emerald-300">Tesla Model 3</Link> achieves approximately <strong className="text-emerald-400">3.5 miles per kWh</strong>. At the national average residential electricity rate of about $0.16 per kWh, the same 12,000 miles costs just <strong className="text-emerald-400">$549 per year</strong> in electricity. Even charging exclusively at public DC fast chargers at $0.35 per kWh, the annual cost is only $1,200 &mdash; still less than half of the $6 gas scenario.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The annual savings at $6 gas: <strong className="text-emerald-400">$2,022</strong> for home charging, or $1,371 for public charging. Monthly, that&apos;s $168 back in your pocket &mdash; enough to cover most of a car payment. At today&apos;s gas prices, the fuel savings take roughly <strong className="text-emerald-400">4 to 5 years</strong> to offset the EV price premium. At $6 gas, that breakeven drops to <strong className="text-emerald-400">under 18 months</strong>. For high-mileage drivers &mdash; rideshare workers, long commuters, delivery drivers &mdash; the breakeven could arrive in under a year.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Which EVs Become Financial No-Brainers at $6 Gas</h2>

            <p className="text-slate-300 leading-relaxed mb-6">At $6 per gallon, the calculus shifts from &ldquo;can I afford an EV?&rdquo; to &ldquo;can I afford not to buy one?&rdquo; Several current-market EVs would become irresistible value propositions. The <Link href="/blog/best-affordable-evs-2026" className="text-emerald-400 hover:text-emerald-300">Chevrolet Equinox EV</Link> starting around $33,000 with 319 miles of range offers one of the best price-to-range ratios on the market. After federal tax credits, the effective price could drop to <strong className="text-emerald-400">$25,500</strong> &mdash; competitive with a base-model Honda CR-V that would cost $2,571 per year to feed at $6 gas.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The <strong className="text-emerald-400">Tesla Model 3</strong> at $38,990 remains the benchmark for efficiency, delivering some of the lowest per-mile electricity costs of any EV on sale. The <strong className="text-emerald-400">Hyundai Ioniq 5</strong>, with its 800V architecture and fast charging capability, would appeal to buyers who need road-trip flexibility. And the <strong className="text-emerald-400">Nissan Ariya</strong>, often discounted below MSRP at dealers, could become one of the best value plays in the market.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Use our <Link href="/ev-tools" className="text-emerald-400 hover:text-emerald-300">EV Savings Calculator</Link> to model your personal savings at different gas price scenarios &mdash; you can input $6, $7, or even $8 per gallon to see exactly how quickly an EV pays for itself in your driving situation.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">EV Ownership as a Volatility Hedge</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Beyond the raw savings math, there&apos;s a strategic argument for EV ownership that often gets overlooked: <strong className="text-emerald-400">electricity prices are stable, gas prices are not</strong>. Over the past 20 years, the national average electricity rate has fluctuated within a narrow band of $0.10 to $0.18 per kWh &mdash; a range of about 80 percent. Over the same period, gasoline has swung from $1.50 to $5.00 per gallon &mdash; a range of <strong className="text-emerald-400">233 percent</strong>. Gas prices are hostage to wars, sanctions, OPEC production decisions, hurricane damage to refineries, and speculative trading. Electricity prices are set by regulated utilities and change slowly, predictably, and with advance notice.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Owning an EV is essentially <strong className="text-emerald-400">buying insurance against oil price volatility</strong>. Whether gas is $3.50 or $7.00, your per-mile cost stays roughly the same. For households budgeting on fixed incomes, for businesses managing fleet fuel costs, and for anyone who remembers the financial stress of the 2008 or 2022 price spikes, this stability has real monetary value beyond the per-gallon savings.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Florida Angle: Why the Sunshine State Benefits Most</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Florida residents have a unique set of advantages in an oil price crisis. The state has <strong className="text-emerald-400">no state income tax</strong>, which means the federal EV tax credit of up to $7,500 represents a larger percentage of total tax liability for Florida buyers than for residents of high-income-tax states. Florida&apos;s abundant sunshine also makes <strong className="text-emerald-400">home solar charging</strong> exceptionally viable &mdash; a rooftop solar system in Tampa or Miami can generate enough electricity to fully offset EV charging costs, effectively giving you <strong className="text-emerald-400">free fuel for life</strong> while your neighbors pay $6 at the pump.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Florida&apos;s flat terrain and moderate year-round temperatures also maximize EV range efficiency. Cold weather and mountainous terrain are the two biggest drains on EV battery performance &mdash; Florida has neither. A Tesla Model 3 rated at 272 miles EPA will routinely deliver <strong className="text-emerald-400">280 to 300 miles of real-world range</strong> in Florida&apos;s climate, which is better than almost any other state in the country.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Bottom Line: Geopolitics Is the EV Industry&apos;s Best (Unwanted) Salesperson</h2>

            <p className="text-slate-300 leading-relaxed mb-6">No EV manufacturer wants its sales to depend on geopolitical crises. The industry would prefer to win on technology, design, and value. But history is unambiguous: <strong className="text-emerald-400">every major oil price shock has triggered a structural shift in vehicle purchasing</strong>, and every shift has been permanent. The buyers who switched to Japanese cars in 1979 never went back. The buyers who switched to hybrids in 2008 never went back. The buyers who switched to EVs in 2022 are not going back.</p>

            <p className="text-slate-300 leading-relaxed mb-6">A Strait of Hormuz disruption that pushes gas to $6 would not just boost EV sales temporarily &mdash; it would permanently convert millions of American drivers. The economics at $6 gas are so overwhelmingly in favor of electric that the decision becomes purely rational, stripped of ideology and personal preference. When saving $168 per month is as simple as choosing an EV over a gas car, <strong className="text-emerald-400">the market will choose the EV</strong>.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The question isn&apos;t whether gas prices will spike again. They always do. The question is whether you&apos;ll be insulated from the next spike or exposed to it. For more on how <Link href="/blog/gas-prices-ev-savings-2026" className="text-emerald-400 hover:text-emerald-300">current gas prices already make EVs the smart financial choice</Link>, check out our detailed savings analysis. And for a look at where <Link href="/blog/ev-prices-parity" className="text-emerald-400 hover:text-emerald-300">EV prices are headed toward parity with gas cars</Link>, the trend is clear: the window of cost advantage for gasoline vehicles is closing, and Hormuz could slam it shut overnight. Browse the <Link href="/ev-deals" className="text-emerald-400 hover:text-emerald-300">latest EV deals</Link> to see which models fit your budget today &mdash; before the next crisis decides for you.</p>
          </article>

          <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <h3 className="text-lg font-semibold text-white mb-4">Related Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/gas-prices-ev-savings-2026" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Gas Prices &amp; EV Savings in 2026 &rarr;</Link>
              <Link href="/blog/ev-prices-parity" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">EV Price Parity Is Closer Than You Think &rarr;</Link>
              <Link href="/blog/best-affordable-evs-2026" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Best Affordable EVs in 2026 &rarr;</Link>
              <Link href="/ev-tools" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">EV Savings Calculator &rarr;</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              <Link href="/blog?tag=gas-prices" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Gas Prices</Link>
              <Link href="/blog?tag=oil" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Oil</Link>
              <Link href="/blog?tag=strait-of-hormuz" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Strait of Hormuz</Link>
              <Link href="/blog?tag=ev-demand" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">EV Demand</Link>
              <Link href="/blog?tag=geopolitics" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Geopolitics</Link>
              <Link href="/blog?tag=energy" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Energy</Link>
            </div>
          </div>

          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}
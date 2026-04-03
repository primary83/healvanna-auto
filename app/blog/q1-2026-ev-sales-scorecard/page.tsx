"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function Q12026EvSalesScorecard() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Q1 2026 EV Sales Scorecard &mdash; Winners, Losers, and What the Numbers Really Mean</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>April 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>14 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/blog/q1-2026-ev-sales-hero.png" alt="Q1 2026 EV sales scorecard — dealership lot filled with electric vehicles" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">The first quarter of 2026 is in the books, and the EV market just delivered one of the most complicated report cards in its history. The headline number looks alarming: new EV sales dropped 28% year-over-year to just 212,600 units. EV market share fell to an estimated 5.8%, well below the 7.5% peak hit in Q3 2025.</p>

            <p className="text-slate-300 leading-relaxed mb-6">But underneath that headline, the story is far more interesting. Some brands are soaring. Others are in freefall. And the used EV market is having its best quarter ever.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Here&apos;s the full breakdown.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Why the overall number dropped</h2>

            <p className="text-slate-300 leading-relaxed mb-6">One word: incentives. The $7,500 federal EV tax credit expired on September 30, 2025, and nothing has replaced it. That single policy change is responsible for most of the decline. In the quarters leading up to the expiration, buyers rushed to take advantage of the credit, pulling forward demand that would have happened in early 2026. Now we&apos;re seeing the hangover.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The situation isn&apos;t unique to EVs. The broader auto market is navigating tariff uncertainty, higher interest rates, and economic anxiety. Total new vehicle sales are under pressure across the board. But EVs, which benefited disproportionately from the tax credit, are feeling the removal most acutely.</p>

            <p className="text-slate-300 leading-relaxed mb-6">There&apos;s an important caveat here: electrified vehicles as a whole &mdash; including hybrids &mdash; actually hit an all-time high of 26% of new vehicle sales in Q4 2025. Americans aren&apos;t rejecting electrification. They&apos;re just choosing the cheaper path through hybrids instead of pure EVs, at least temporarily.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The winners</h2>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Toyota &mdash; up 78.8%</h3>

            <p className="text-slate-300 leading-relaxed mb-6">The biggest surprise of Q1 goes to <Link href="/cars/toyota" className="text-emerald-400 hover:text-emerald-300">Toyota</Link>. The updated bZ electric SUV posted 10,029 deliveries, up a staggering 78.8% from Q1 2025. That&apos;s enough to outsell <Link href="/cars/ford" className="text-emerald-400 hover:text-emerald-300">Ford&apos;s</Link> entire EV lineup. The Lexus RZ more than tripled its pace to 4,456 units.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Toyota spent years being criticized for moving too slowly on EVs. Turns out, their patience may have been strategic. They entered the market after the early adopters had been served, with a refined product at an accessible price, and they&apos;re gaining ground while competitors struggle. With the new C-HR, bZ Woodland, and Highlander EV rolling out later this year, expect Toyota&apos;s EV numbers to keep climbing.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Toyota also dominates hybrids, commanding 43% of hybrid sales. Their &ldquo;all of the above&rdquo; strategy &mdash; hybrids, plug-in hybrids, and full EVs &mdash; is looking smarter by the quarter.</p>

            {/* In-article image 1: Toyota bZ4X on highway */}
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-12">
              <Image src="/images/blog/toyota-bz4x-highway.png" alt="Toyota bZ4X electric SUV driving on highway" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Hyundai Ioniq 5 &mdash; up 14%</h3>

            <p className="text-slate-300 leading-relaxed mb-6">The <Link href="/cars/hyundai" className="text-emerald-400 hover:text-emerald-300">Ioniq 5</Link> found its way to 9,790 driveways in Q1, representing 14% growth over 2025. That&apos;s impressive in a market that shrank 28%. The new three-row Ioniq 9 added another 1,990 units in its early months.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Not everything went well for Hyundai&apos;s EV lineup, though. The Ioniq 6 sedan is being discontinued after sales fell 75% to just 829 units. The sedan form factor simply didn&apos;t resonate with American buyers the way the crossover does. Hyundai&apos;s overall success is being driven by hybrid versions of the Sonata, Elantra, and Santa Fe.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">GM &mdash; still the #2 EV seller</h3>

            <p className="text-slate-300 leading-relaxed mb-6"><Link href="/cars/chevrolet" className="text-emerald-400 hover:text-emerald-300">General Motors</Link> maintained its position as the second-largest EV seller in America behind Tesla. The newest Cadillac EVs are gaining traction &mdash; the Optiq tallied 2,847 deliveries and the Vistiq posted 1,902 in their early months. The newly arrived subcompact Chevy Bolt posted initial sales of 791 units as production ramps.</p>

            <p className="text-slate-300 leading-relaxed mb-6">GM&apos;s overall sales of 626,429 vehicles led the industry in Q1, though that total was down 9.7% from last year. Their EV strategy of covering multiple price points &mdash; from the affordable Bolt to the luxury Escalade IQ &mdash; gives them resilience that single-model competitors lack.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The losers</h2>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Tesla &mdash; missed estimates with inventory piling up</h3>

            <p className="text-slate-300 leading-relaxed mb-6"><Link href="/cars/tesla" className="text-emerald-400 hover:text-emerald-300">Tesla</Link> delivered 358,023 vehicles in Q1, about 7,600 units below Wall Street&apos;s consensus estimate of 365,645. But the more concerning number is the gap between production and deliveries. Tesla produced 408,386 vehicles but only delivered 358,023, adding over 50,000 vehicles to inventory in a single quarter.</p>

            <p className="text-slate-300 leading-relaxed mb-6">That inventory build suggests demand is softening faster than Tesla can adjust production. Combined with the <Link href="/blog/tesla-model-s-x-discontinued" className="text-emerald-400 hover:text-emerald-300">Model S and Model X discontinuation</Link> announced this week, Tesla is clearly in a transitional period. The company remains the dominant EV seller by a wide margin, but the days of demand outstripping supply appear to be over.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Kia EV6 &mdash; down 46%</h3>

            <p className="text-slate-300 leading-relaxed mb-6"><Link href="/cars/kia" className="text-emerald-400 hover:text-emerald-300">Kia&apos;s</Link> overall US sales actually grew 4.1% to 207,015 vehicles, driven by strong demand for gas models like the Sportage, Telluride, and K5. But the EV side was brutal. The EV6 fell 46% to just 2,023 units, and the EV9 dropped 27% to 2,740 units.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The timing is particularly painful because Kia just won Best Manufacturer at the TopGear EV Awards 2026, and the highly anticipated <Link href="/blog/kia-ev3-arrives-in-us" className="text-emerald-400 hover:text-emerald-300">EV3 is about to arrive in the US</Link>. Whether the affordable EV3 can reverse Kia&apos;s EV sales trajectory will be one of the biggest stories of the second half of 2026.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Nissan Leaf &mdash; down 71.2%</h3>

            <p className="text-slate-300 leading-relaxed mb-6">The redesigned 2026 Leaf was supposed to pick up the volume of both the Ariya and the previous-generation Leaf. That hasn&apos;t happened. First-quarter deliveries plummeted 71.2% to just 668 units. <Link href="/cars/nissan" className="text-emerald-400 hover:text-emerald-300">Nissan&apos;s</Link> overall US deliveries were down 7.5% to 247,068 vehicles.</p>

            <p className="text-slate-300 leading-relaxed mb-6">For a brand that pioneered mass-market EVs with the original Leaf back in 2010, this is a painful chapter. The new Leaf is objectively a good car, but it&apos;s entering a much more crowded market than its predecessor ever faced.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Ford &mdash; losing ground</h3>

            <p className="text-slate-300 leading-relaxed mb-6"><Link href="/cars/ford" className="text-emerald-400 hover:text-emerald-300">Ford</Link> sold fewer than 7,000 EVs in Q1 2026. After scaling back EV plans last year, the company is watching Toyota&apos;s bZ outsell its entire electric lineup. The F-150 Lightning, once considered the most important EV launch in history, has seen sales cool significantly. Ford CEO Jim Farley has said the company wants &ldquo;a piece of the Model 3 and Model Y&apos;s pie,&rdquo; but the current numbers suggest they have a lot of ground to make up.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The surprises</h2>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Used EVs are booming</h3>

            <p className="text-slate-300 leading-relaxed mb-6">While new EV sales dropped 28%, <Link href="/blog/used-evs-boom-2026" className="text-emerald-400 hover:text-emerald-300">used EV sales surged 12%</Link> to 93,500 units. Used EVs now average $34,821 &mdash; within just $1,300 of the average used gas vehicle at $33,487. That near-parity is unprecedented. As recently as early 2023, the gap was over $10,000.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Used EV inventory is turning at nearly the same pace as gas cars, with 42 days&apos; supply versus 38 days for combustion vehicles. This isn&apos;t a surplus problem &mdash; it&apos;s genuine consumer demand.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The driver is lease returns. The wave of EVs leased under the IRA&apos;s &ldquo;leasing loophole&rdquo; between 2023 and 2025 is now hitting dealer lots. A three-year-old Tesla Model 3 or Hyundai Ioniq 5 coming off lease represents extraordinary value, especially with gas prices climbing above $4 per gallon.</p>

            {/* In-article image 2: Ioniq 5 and Equinox EV comparison */}
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-12">
              <Image src="/images/blog/ioniq5-equinox-ev-comparison.png" alt="Hyundai Ioniq 5 and Chevrolet Equinox EV side by side" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Hybrids are eating EVs&apos; lunch</h3>

            <p className="text-slate-300 leading-relaxed mb-6">Here&apos;s the number that should worry pure-EV advocates: hybrid vehicles hit a record 756,000 units in Q4 2025, up 57% year-over-year. Toyota commands 43% of hybrid sales, with Honda at 16.3%.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Americans are electrifying their transportation &mdash; just not as fast or as completely as EV advocates hoped. The hybrid represents a comfortable middle ground: better fuel economy, no range anxiety, no charging infrastructure concerns, and a lower price than most pure EVs. Until battery EVs can match hybrids on convenience and cost, this trend will likely continue.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Charging is growing even as sales slow</h3>

            <p className="text-slate-300 leading-relaxed mb-6">Despite the new-sales slowdown, EV usage is actually accelerating. There are now roughly 5.8 million EVs on US roads, and they&apos;re charging more than ever. US public charging sessions hit 141 million in 2025, up 30% from the prior year.</p>

            <p className="text-slate-300 leading-relaxed mb-6">This disconnect &mdash; fewer new EVs sold but more charging happening &mdash; tells us that the existing EV fleet is growing and being used more. People who own EVs are driving them. The challenge is converting the next wave of buyers.</p>

            {/* In-article image 3: Used EV dealership lot */}
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-12">
              <Image src="/images/blog/used-ev-dealership-lot.png" alt="Used EV dealership lot with electric vehicles on display" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What this means for you</h2>

            <p className="text-slate-300 leading-relaxed mb-6">If you&apos;re thinking about buying an EV in 2026, the market dynamics are actually working in your favor.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">New EV prices are dropping.</strong> With inventory building up at dealerships &mdash; Tesla alone added 50,000 units to stock this quarter &mdash; negotiating leverage has shifted to buyers. Manufacturers are offering incentives, dealer markups have evaporated, and competition is fiercer than ever.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Used EVs are the deal of the decade.</strong> A three-year-old Tesla Model 3 or Ioniq 5 at near-parity pricing with a used gas car is an extraordinary value proposition, especially with gas prices rising.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Gas prices are a tailwind.</strong> The Middle East conflict is pushing oil prices up, and gas prices above $4 per gallon are making the EV cost-of-ownership calculation more favorable by the week.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">The best cars are getting better.</strong> Toyota, Hyundai, and <Link href="/cars/bmw" className="text-emerald-400 hover:text-emerald-300">BMW</Link> are all posting strong results because their EVs have genuinely improved. The vehicles available today are better, cheaper, and more practical than anything available even two years ago.</p>

            <p className="text-slate-300 leading-relaxed mb-8">The EV market isn&apos;t dying. It&apos;s maturing. The initial hype cycle has ended, the tax credit sugar rush has faded, and what&apos;s left is a market driven by genuine product quality and economic fundamentals. That&apos;s actually healthier in the long run.</p>
          </article>

          {/* Internal Links */}
          <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <h3 className="text-lg font-semibold text-white mb-4">Related Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/cars" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Browse All EV Brands &rarr;</Link>
              <Link href="/ev-deals" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Find EV Deals &rarr;</Link>
              <Link href="/blog/used-evs-boom-2026" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Used EVs Are Booming in 2026 &rarr;</Link>
              <Link href="/blog/best-affordable-evs-2026" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Best Affordable EVs 2026 &rarr;</Link>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              <Link href="/blog?tag=ev-sales" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">EV Sales</Link>
              <Link href="/blog?tag=q1-2026" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Q1 2026</Link>
              <Link href="/blog?tag=tesla" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Tesla</Link>
              <Link href="/blog?tag=toyota" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Toyota</Link>
              <Link href="/blog?tag=hyundai" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Hyundai</Link>
              <Link href="/blog?tag=market-data" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Market Data</Link>
            </div>
          </div>

          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}

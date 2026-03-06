"use client";

import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function BestSmallEvsCityDriving() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              Comparison
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Volvo EX30 vs Mini Cooper Electric: Best Small EVs for City Driving
            </h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>March 1, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/blog/small-city-evs.png"
              alt="Volvo EX30 and Mini Cooper Electric small city EVs"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Not everyone needs a 300-mile electric SUV with three rows of seating and enough torque to tow a boat. For the millions of Americans who live in cities and suburbs, a <strong className="text-emerald-400">small electric car</strong> makes far more sense&mdash;easier to park, cheaper to insure, lighter on energy consumption, and genuinely more fun to drive through tight urban streets. The Volvo EX30 and Mini Cooper Electric represent two very different philosophies on what a compact city EV should be, and both deserve serious consideration. Add the Fiat 500e to the mix, and you&apos;ve got a trio of small EVs that prove downsizing doesn&apos;t mean downgrading.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Volvo EX30: Scandinavian Efficiency Meets Surprising Performance
            </h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-500">Range</span>
                  <p className="text-white font-semibold">275 miles</p>
                </div>
                <div>
                  <span className="text-slate-500">0-60 mph</span>
                  <p className="text-white font-semibold">3.4 seconds (Twin Motor)</p>
                </div>
                <div>
                  <span className="text-slate-500">Starting Price</span>
                  <p className="text-white font-semibold">$34,950</p>
                </div>
                <div>
                  <span className="text-slate-500">Length</span>
                  <p className="text-white font-semibold">167.4 inches</p>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              The <Link href="/ev-deals/volvo-ex30" className="text-emerald-400 hover:text-emerald-300 underline">Volvo EX30</Link> is Volvo&apos;s smallest and most affordable electric vehicle, and it might also be their most impressive. Despite its compact footprint, the EX30 delivers a remarkable 275 miles of range on a single charge&mdash;more than enough for a full week of city commuting without plugging in. The interior follows Volvo&apos;s signature Scandinavian minimalism, with sustainably sourced materials, a single central touchscreen that controls virtually everything, and the kind of clean, uncluttered design that makes luxury brands twice the price look fussy by comparison.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              What truly sets the EX30 apart is performance. The Twin Motor Performance variant rockets from 0 to 60 in just <strong className="text-emerald-400">3.4 seconds</strong>&mdash;supercar territory in a vehicle that costs around $38,000. Even the single-motor version delivers brisk acceleration that makes merging onto freeways and darting through gaps in traffic effortless. Volvo&apos;s safety credentials remain top-tier, with a comprehensive suite of advanced driver-assistance systems and the brand&apos;s legendary crash protection built into every model.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Mini Cooper Electric: Go-Kart Fun Goes Electric
            </h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-500">Range</span>
                  <p className="text-white font-semibold">114&ndash;228 miles</p>
                </div>
                <div>
                  <span className="text-slate-500">Handling</span>
                  <p className="text-white font-semibold">Go-kart feel</p>
                </div>
                <div>
                  <span className="text-slate-500">Starting Price</span>
                  <p className="text-white font-semibold">$31,500</p>
                </div>
                <div>
                  <span className="text-slate-500">Length</span>
                  <p className="text-white font-semibold">153.7 inches</p>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              The <Link href="/ev-deals/mini-cooper-electric" className="text-emerald-400 hover:text-emerald-300 underline">Mini Cooper Electric</Link> is the car for people who think driving should be an experience, not a chore. Mini has always been famous for its go-kart-like handling, and the electric version amplifies that character with instant torque delivery and a low center of gravity thanks to its floor-mounted battery pack. Every corner, every roundabout, every tight city block becomes an opportunity to grin. The iconic design has been refreshed for the electric era with a cleaner face, circular OLED dashboard display, and Union Jack-patterned taillights that are unmistakably Mini.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Range varies depending on configuration. The base Cooper E delivers 114 miles on a smaller battery&mdash;perfectly adequate for drivers who rarely leave the city and charge at home each night. The Cooper SE steps up to <strong className="text-emerald-400">228 miles of range</strong>, which opens up weekend getaways and suburban errand runs without range anxiety. Both variants support DC fast charging at up to 130 kW, meaning a 10% to 80% top-up takes roughly 30 minutes at a compatible station.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Also Consider: Fiat 500e for the Truly Compact
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              If you want the smallest, most city-focused EV of the bunch, the <Link href="/ev-deals/fiat-500e" className="text-emerald-400 hover:text-emerald-300 underline">Fiat 500e</Link> deserves a serious look. Starting at approximately <strong className="text-emerald-400">$28,000</strong>, it&apos;s the most affordable option here and the easiest to park in tight urban spaces. The Italian styling is charming and distinctive, the interior punches above its weight with quality materials and a surprisingly spacious front cabin, and the roughly 149 miles of range handles the vast majority of daily city driving needs. It&apos;s the car that will slip into parking spots other drivers pass right by.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Price Breakdown: Small Cars, Smart Savings
            </h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-slate-500">Volvo EX30</span>
                  <p className="text-white font-semibold">From $34,950</p>
                </div>
                <div>
                  <span className="text-slate-500">Mini Cooper Electric</span>
                  <p className="text-white font-semibold">From $31,500</p>
                </div>
                <div>
                  <span className="text-slate-500">Fiat 500e</span>
                  <p className="text-white font-semibold">From $28,000</p>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              All three vehicles may qualify for the federal EV tax credit of up to $7,500 when purchased through qualifying dealers, potentially bringing the Fiat 500e below $21,000 and the Mini Cooper Electric under $24,000 at the point of sale. State and local incentives can stack on top of the federal credit, making these small EVs even more affordable than their sticker prices suggest. When you factor in lower fuel and maintenance costs compared to gas-powered equivalents, the total cost of ownership tilts heavily in favor of going electric.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              City Driving: Where Small EVs Truly Shine
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Parking is the silent killer of urban car ownership, and this is where compact EVs deliver their most tangible everyday advantage. The Fiat 500e, at just 146 inches long, fits into spaces that mid-size sedans cannot even attempt. The Mini Cooper Electric isn&apos;t much bigger at 153 inches, and even the EX30&mdash;the largest of the three&mdash;is over a foot shorter than a Tesla Model Y. Tight turning radii make U-turns on narrow streets routine rather than stressful, and the light, responsive steering on all three models makes parallel parking borderline enjoyable.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Maneuverability extends beyond parking. Navigating crowded downtown streets, squeezing past double-parked delivery vans, and threading through multi-story parking garages all become less stressful in a vehicle with a smaller footprint. The instant torque from electric motors also means you can accelerate quickly from traffic lights and merge into gaps that would close before a gas engine could spool up.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Range Reality: How Much Do City Drivers Actually Need?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Here&apos;s a number that puts range anxiety into perspective: the average American drives roughly <strong className="text-emerald-400">37 miles per day</strong>. City dwellers typically drive even less&mdash;often under 25 miles daily. Even the Fiat 500e&apos;s 149-mile range covers nearly a full week of average urban driving on a single charge. The Mini Cooper SE&apos;s 228 miles handles six days easily, and the Volvo EX30&apos;s 275 miles means you could go more than a week without visiting a charger. For city drivers, range is rarely the limiting factor&mdash;convenience of charging is.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Charging for Apartment Dwellers
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Not everyone has a garage with a dedicated Level 2 charger, and that&apos;s a legitimate concern for city-dwelling EV shoppers. The good news is that public charging infrastructure has expanded dramatically. Networks like ChargePoint, EVgo, and Tesla&apos;s now-open Supercharger network provide thousands of stations in urban areas. Many cities are installing curbside chargers, and workplace charging programs are increasingly common. A weekly 30-minute DC fast charge session is often all a city driver needs to stay topped up.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              For apartment dwellers specifically, look for buildings that offer EV charging in their parking garages&mdash;landlords are increasingly adding chargers as a competitive amenity. Even a standard 120-volt household outlet (Level 1 charging) can replenish 30 to 40 miles overnight, which is enough for most daily urban driving patterns. The lower energy consumption of these small EVs compared to larger models means they charge faster and cost less per mile regardless of the charging method.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Interior &amp; Cargo: Small Cars, Small Compromises
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Compact dimensions inevitably mean trade-offs in interior space, but these three EVs manage the compromises differently. The Volvo EX30 offers the most usable cargo area at roughly 14.6 cubic feet behind the rear seats, expandable to over 44 cubic feet with the seats folded. The Mini Cooper Electric provides about 8.7 cubic feet of trunk space&mdash;tight but workable for groceries and daily essentials. The Fiat 500e splits the difference with around 10 cubic feet, and its small hatchback opening makes loading straightforward.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Front-seat comfort is excellent across all three. Rear-seat space is where size differences become most apparent&mdash;the EX30 accommodates adults in the back row reasonably well, while the Mini and Fiat are best suited for children or short trips with rear passengers. If you regularly carry four adults, the EX30 is the clear choice. For solo commuters or couples, any of the three will feel perfectly spacious up front.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              The Verdict: Which Small EV Is Best for You?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Each of these compact EVs excels in a different area, making the &ldquo;best&rdquo; choice highly personal:
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Best for style and driving fun:</strong> The <Link href="/ev-deals/mini-cooper-electric" className="text-emerald-400 hover:text-emerald-300 underline">Mini Cooper Electric</Link> delivers the most engaging driving experience of the trio. If you want a car with genuine personality that makes every errand feel like an adventure, the Mini is unmatched.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Best for performance and range:</strong> The <Link href="/ev-deals/volvo-ex30" className="text-emerald-400 hover:text-emerald-300 underline">Volvo EX30</Link> combines the longest range, the quickest acceleration, and the most practical interior. It&apos;s the small car that makes the fewest compromises and backs it up with Volvo&apos;s world-class safety engineering.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Best for budget:</strong> The <Link href="/ev-deals/fiat-500e" className="text-emerald-400 hover:text-emerald-300 underline">Fiat 500e</Link> gets you into an electric vehicle for the lowest price, offers charming Italian design, and is the absolute king of urban parking. If your driving is almost entirely within city limits, the 500e is hard to beat on value.
            </p>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 my-12">
              <h3 className="text-2xl font-bold text-white mb-4">Find the Best Deal on a Small City EV</h3>
              <p className="text-slate-300 mb-6">
                Compare real-time pricing, dealer incentives, and available inventory on the Volvo EX30, Mini Cooper Electric, Fiat 500e, and dozens of other electric vehicles. Our EV Best Price Finder helps you secure the lowest price in your area.
              </p>
              <Link
                href="/ev-deals"
                className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
              >
                Browse EV Deals
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Related Articles */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Related Articles
            </h2>
            <div className="grid gap-4 mb-8">
              <Link
                href="/blog/best-evs-under-30k"
                className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-emerald-400 text-sm font-medium">Buying Guide</span>
                <h3 className="text-white font-semibold mt-1">5 Best EVs Under $30,000 in 2026</h3>
                <p className="text-slate-400 text-sm mt-1">Discover the most affordable electric vehicles that deliver outstanding value without compromise.</p>
              </Link>
              <Link
                href="/blog/first-time-ev-buyer-guide"
                className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-emerald-400 text-sm font-medium">Guide</span>
                <h3 className="text-white font-semibold mt-1">First-Time EV Buyer&apos;s Guide: Everything You Need to Know</h3>
                <p className="text-slate-400 text-sm mt-1">A comprehensive guide covering range, charging, costs, and what to expect from your first electric vehicle.</p>
              </Link>
              <Link
                href="/blog/best-evs-under-40k"
                className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-emerald-400 text-sm font-medium">Comparison</span>
                <h3 className="text-white font-semibold mt-1">Best Electric Cars Under $40,000 in 2026</h3>
                <p className="text-slate-400 text-sm mt-1">Step up your budget slightly and unlock even more range, features, and performance.</p>
              </Link>
            </div>
          </article>

          {/* Share & Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/blog?tag=city-evs" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">
                City EVs
              </Link>
              <Link href="/blog?tag=volvo-ex30" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">
                Volvo EX30
              </Link>
              <Link href="/blog?tag=mini-cooper" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">
                Mini Cooper
              </Link>
              <Link href="/blog?tag=fiat-500e" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">
                Fiat 500e
              </Link>
              <Link href="/blog?tag=comparison" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">
                Comparison
              </Link>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Related Deals */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}

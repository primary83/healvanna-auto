"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function TeslaModelSXDiscontinued() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">News</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Tesla Model S and Model X Officially Discontinued &mdash; The End of an Era</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>April 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>12 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/blog/tesla-model-s-x-discontinued-hero.png" alt="Tesla Model S and Model X discontinued — end of an era" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">It&apos;s official. Elon Musk confirmed this week that Tesla has stopped producing the Model S sedan and Model X SUV. Custom orders are no longer being accepted, and only about 600 vehicles remain in inventory worldwide.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Musk shared the news on X alongside a throwback photo from the original Model S production launch at the Fremont factory in June 2012, writing: &ldquo;We will have an official ceremony to mark the ending of an era.&rdquo;</p>

            <p className="text-slate-300 leading-relaxed mb-6">And that&apos;s exactly what this is &mdash; the end of an era. The cars that proved electric vehicles could be fast, luxurious, and desirable are leaving the stage. Here&apos;s what happened, what it means if you own one, and where Tesla goes from here.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The cars that changed everything</h2>

            <p className="text-slate-300 leading-relaxed mb-6">It&apos;s hard to overstate what the Model S did for the electric vehicle industry. When it launched in 2012, the EV market consisted of golf carts with license plates. The Nissan Leaf had a 73-mile range. The idea of a luxury electric sedan that could outrun a BMW M5 was laughable.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Then the Model S showed up with 265 miles of range, a 17-inch touchscreen, and over-the-air updates. It won Motor Trend&apos;s Car of the Year &mdash; unanimously. Consumer Reports gave it their highest score ever recorded. It didn&apos;t just compete with gas-powered luxury sedans. It embarrassed them.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The Model X followed in 2015 with those dramatic falcon-wing doors, a bioweapon defense mode air filtration system, and the distinction of being the quickest SUV ever built. It became a status symbol in Silicon Valley and beyond.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Together, these two vehicles did something no amount of marketing or government incentives could accomplish: they made electric cars cool. They proved that going electric didn&apos;t mean sacrificing performance, luxury, or range. Every EV that followed &mdash; from the <Link href="/cars/porsche" className="text-emerald-400 hover:text-emerald-300">Porsche Taycan</Link> to the Rivian R1S to the <Link href="/cars/lucid" className="text-emerald-400 hover:text-emerald-300">Lucid Air</Link> &mdash; exists in a market that the Model S and Model X created.</p>

            {/* In-article image 1: Tesla Model S profile */}
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-12">
              <Image src="/images/blog/tesla-model-s-profile.png" alt="Tesla Model S profile view — the car that started the luxury EV revolution" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Why Tesla pulled the plug</h2>

            <p className="text-slate-300 leading-relaxed mb-6">The decision wasn&apos;t sudden. Sales of the Model S and Model X had been declining for years. In their peak year, Tesla delivered over 100,000 units of the two models combined. By recent quarters, that number had dropped to a fraction of that.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Several factors drove the decline.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">The Model 3 and Model Y cannibalized them.</strong> When Tesla launched the Model 3 in 2017 at roughly half the price of a Model S, it opened the floodgates. The Model Y followed in 2020 and quickly became the best-selling car in the world &mdash; not just the best-selling EV, but the best-selling car, period. Customers who might have stretched for a Model S found themselves perfectly happy with a Model 3 Performance for $30,000 less.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">The competition caught up at the top.</strong> In 2012, the Model S had zero competition. By 2026, luxury EV buyers can choose from the <Link href="/cars/lucid" className="text-emerald-400 hover:text-emerald-300">Lucid Air</Link> (which beat the Model S in range), the <Link href="/cars/mercedes" className="text-emerald-400 hover:text-emerald-300">Mercedes EQS</Link> (which beat it in interior luxury), the <Link href="/cars/porsche" className="text-emerald-400 hover:text-emerald-300">Porsche Taycan</Link> (which matched it in driving dynamics), and the BMW i7 (which offered a more traditional luxury experience). The Model S still performed well, but it was no longer the only game in town.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Production economics didn&apos;t make sense.</strong> The Fremont factory needed the production line capacity for the Model Y, which generates far more revenue per square foot than the low-volume S and X. Tesla&apos;s focus has shifted to manufacturing scale and cost reduction &mdash; building fewer expensive cars and more affordable ones.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">The Cybertruck absorbed the halo-car role.</strong> Tesla used to need the Model S Plaid to generate headlines with its sub-2-second 0-60 time. Now the Cybertruck does that job while also generating actual sales volume.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What this means if you own a Model S or Model X</h2>

            <p className="text-slate-300 leading-relaxed mb-6">If you&apos;re one of the hundreds of thousands of Model S or Model X owners on the road, here&apos;s what you need to know.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Parts and service will continue.</strong> Tesla is legally obligated to support existing vehicles, and they&apos;ve committed to continuing parts availability and service for the foreseeable future. Your car won&apos;t become unsupported overnight. Tesla&apos;s service network has also expanded significantly, with service centers now in most major metro areas.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Software updates will likely continue for a while.</strong> Tesla has historically maintained software support for older models, though feature additions slow down over time. Don&apos;t expect major new features, but security updates and bug fixes should continue.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Resale values will be interesting.</strong> This is where things get unpredictable. On one hand, discontinued models sometimes become collector&apos;s items &mdash; especially significant ones like the Model S Plaid. On the other hand, the used EV market is currently being flooded with vehicles from lease returns, which is pushing prices down across the board. The practical daily-driver Model S variants will likely depreciate normally, while the limited-production Plaid models with low miles could hold or increase in value.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Third-party service options are growing.</strong> Independent Tesla-certified shops have been growing rapidly. If you&apos;re concerned about long-term service access, having a relationship with a trusted independent shop is smart planning.</p>

            {/* In-article image 2: Tesla service center */}
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-12">
              <Image src="/images/blog/tesla-service-center.png" alt="Tesla service center with Model S being serviced" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Where Tesla goes from here</h2>

            <p className="text-slate-300 leading-relaxed mb-6">With the Model S and Model X gone, <Link href="/cars/tesla" className="text-emerald-400 hover:text-emerald-300">Tesla&apos;s lineup</Link> looks like this:</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Model 3</strong> &mdash; The compact sedan that democratized Tesla ownership. Still one of the best-selling EVs in the world and recently refreshed with updated interior and improved range.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Model Y</strong> &mdash; Tesla&apos;s bread and butter. The best-selling vehicle on the planet. This is where the majority of Tesla&apos;s revenue comes from, and it&apos;s not going anywhere.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Cybertruck</strong> &mdash; Tesla&apos;s bold (and polarizing) entry into the truck market. Slowly ramping production and finding its audience among buyers who want something truly different.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Tesla Semi</strong> &mdash; The commercial truck that&apos;s in limited production and targeting fleet customers. Not a consumer product, but an important part of Tesla&apos;s long-term strategy.</p>

            <p className="text-slate-300 leading-relaxed mb-6">What&apos;s notably missing is a true luxury vehicle. The Model S was Tesla&apos;s flagship &mdash; the car that said &ldquo;this is what Tesla is capable of at its best.&rdquo; Without it, Tesla&apos;s most expensive consumer vehicle is the Cybertruck, which is a very different statement.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The rumored next-generation Tesla Roadster has been promised for years but has yet to materialize. If and when it arrives, it could fill the halo-car role. But for now, Tesla is a company focused on volume rather than luxury.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The bigger picture</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Tesla discontinuing the Model S and Model X is more than just a product decision. It&apos;s a signal about where the entire EV market is heading.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The era of proving that EVs can be great is over. That argument has been won. The current battle is about affordability, accessibility, and scale. Tesla is betting that selling millions of Model Ys matters more than selling thousands of Model S sedans. And the market data supports that bet &mdash; Toyota&apos;s affordable bZ just posted 78.8% sales growth in Q1 2026, while luxury EV sales are struggling across the board.</p>

            <p className="text-slate-300 leading-relaxed mb-6">For consumers, the practical takeaway is this: if you want a luxury electric sedan, you now have more choices than ever &mdash; <Link href="/cars/lucid" className="text-emerald-400 hover:text-emerald-300">Lucid Air</Link>, <Link href="/cars/mercedes" className="text-emerald-400 hover:text-emerald-300">Mercedes EQS</Link>, BMW i7, <Link href="/cars/porsche" className="text-emerald-400 hover:text-emerald-300">Porsche Taycan</Link> &mdash; but you won&apos;t be buying one from the company that started it all.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The Model S didn&apos;t just change Tesla. It changed the entire automotive industry. Every electric vehicle on the road today owes something to that 2012 sedan that proved electric could be better, not just different.</p>

            <p className="text-slate-300 leading-relaxed mb-8">It earned its ceremony.</p>
          </article>

          {/* Internal Links */}
          <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <h3 className="text-lg font-semibold text-white mb-4">Related Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/cars/tesla" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Browse Tesla Models &rarr;</Link>
              <Link href="/ev-deals" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Find EV Deals &rarr;</Link>
              <Link href="/cars/lucid" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Browse Lucid Models &rarr;</Link>
              <Link href="/cars/mercedes" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Browse Mercedes Models &rarr;</Link>
              <Link href="/cars/porsche" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Browse Porsche Models &rarr;</Link>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              <Link href="/blog?tag=tesla" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Tesla</Link>
              <Link href="/blog?tag=model-s" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Model S</Link>
              <Link href="/blog?tag=model-x" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Model X</Link>
              <Link href="/blog?tag=ev-news" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">EV News</Link>
              <Link href="/blog?tag=electric-vehicles" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Electric Vehicles</Link>
            </div>
          </div>

          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}

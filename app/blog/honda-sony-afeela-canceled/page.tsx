"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function HondaSonyAfeelaCanceled() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Honda and Sony Officially Kill the Afeela EV &mdash; What Went Wrong and What&apos;s Next</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>April 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>10 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/blog/afeela-canceled-hero.png" alt="Sony Honda Afeela EV officially canceled" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">It was supposed to be the future of driving &mdash; a car born from the marriage of Sony&apos;s entertainment technology and Honda&apos;s automotive engineering. The Afeela was going to blur the line between a vehicle and a living room, with immersive entertainment, AI-powered driving assistance, and the kind of tech-forward design that would make Tesla look old-fashioned.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Instead, Sony Honda Mobility has announced it will discontinue development and cancel the launch of the Afeela 1. The partnership isn&apos;t dissolving entirely &mdash; both companies say they&apos;re &ldquo;reassessing&rdquo; their collaboration &mdash; but the flagship product that was supposed to justify the whole venture is dead.</p>

            <p className="text-slate-300 leading-relaxed mb-6">What went wrong?</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The ambitious idea</h2>

            <p className="text-slate-300 leading-relaxed mb-6">When Sony and <Link href="/cars/honda" className="text-emerald-400 hover:text-emerald-300">Honda</Link> announced their partnership in 2022, it generated genuine excitement. The logic was compelling: Sony brings world-class sensor technology, entertainment systems, and software development expertise. Honda brings 75 years of vehicle manufacturing, safety engineering, and supply chain management. Together, they could build something neither could build alone.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The Afeela concept debuted at CES 2023 to enthusiastic reception. It was a sleek sedan packed with displays, spatial audio, and a &ldquo;media bar&rdquo; across the front that could communicate with pedestrians. Sony&apos;s President Kenichiro Yoshida drove one onto the CES stage. The car was cool. The vision was exciting.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The plan was to begin deliveries in 2026 &mdash; first in North America, then expanding to other markets.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What went wrong</h2>

            <p className="text-slate-300 leading-relaxed mb-6">The short answer: everything took longer and cost more than expected, and the market moved on without them.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Timing.</strong> The EV market in 2022&ndash;2023 was a gold rush. Every company with ambitions wanted in. By 2026, the landscape had hardened. Established automakers had caught up on technology. <Link href="/cars/tesla" className="text-emerald-400 hover:text-emerald-300">Tesla</Link>, <Link href="/cars/hyundai" className="text-emerald-400 hover:text-emerald-300">Hyundai</Link>, and BYD had locked down the key market segments. The window for a new entrant with an unproven product had narrowed dramatically.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">The market shifted toward affordability.</strong> When Afeela was conceived, the EV market was rewarding premium, high-tech vehicles. By 2026, the biggest growth is in affordable EVs &mdash; the Toyota bZ, Chevy Bolt, <Link href="/blog/kia-ev3-arrives-in-us" className="text-emerald-400 hover:text-emerald-300">Kia EV3</Link>. A tech-loaded luxury sedan starting at an estimated $80,000+ was swimming against the current.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Manufacturing complexity.</strong> Sony is a technology company, not a manufacturing company. Honda&apos;s production expertise was supposed to solve this, but integrating Sony&apos;s extensive sensor and entertainment technology into a mass-production vehicle proved more challenging than anticipated.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Difficult market conditions.</strong> The expiration of the US EV tax credit, economic uncertainty, and a general cooling of enthusiasm for new EV brands created headwinds. Investors and executives looked at the Afeela&apos;s projected costs, the increasingly competitive market, and the uncertain demand &mdash; and the math stopped working.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">The partnership dynamic.</strong> Joint ventures between companies from different industries have a mixed track record at best. Sony and Honda have fundamentally different corporate cultures, decision-making processes, and risk tolerances. Reports suggest alignment on key decisions became increasingly difficult.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Honda is doing instead</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Here&apos;s where the story gets more interesting. Honda isn&apos;t giving up on EVs &mdash; far from it. They&apos;re pivoting hard toward their own 0 Series platform, and the first product looks far more competitive than the Afeela ever was.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">The Acura RSX</strong> is launching in the first half of 2026 as a dual-motor compact crossover built on the 0 Series platform. It targets the sweet spot of the market &mdash; a premium but not ultra-luxury electric crossover competing against the Tesla Model Y, <Link href="/blog/bmw-ix3-world-car-of-the-year" className="text-emerald-400 hover:text-emerald-300">BMW iX3</Link>, and Hyundai Ioniq 5.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Honda&apos;s 0 Series represents a complete rethink of the company&apos;s EV strategy. All 0 Series vehicles will feature Honda&apos;s new Asimo OS (named after the famous robot), with an AI assistant and full support for over-the-air updates. The platform promises over 300 miles of range and competitive charging speeds.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Two more 0 Series models are planned for 2026 &mdash; a Honda-branded sedan and a compact crossover &mdash; making it a three-model launch year. It&apos;s the most ambitious EV rollout in Honda&apos;s history.</p>

            {/* In-article image: Acura RSX electric */}
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-12">
              <Image src="/images/blog/acura-rsx-electric.png" alt="Acura RSX electric crossover — Honda 0 Series" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The lesson for the industry</h2>

            <p className="text-slate-300 leading-relaxed mb-6">The Afeela&apos;s cancellation fits a broader pattern. The list of paused, canceled, or delayed EVs keeps growing as companies adjust to last year&apos;s policy changes and a more demanding market.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Apple spent years and billions on Project Titan before canceling its car program. Fisker went from a buzzy startup to bankruptcy in a matter of months. Lordstown Motors, Arrival, and others have all stumbled or failed entirely.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The common thread: building cars is incredibly hard, incredibly expensive, and incredibly unforgiving of mistakes. The EV companies that are thriving &mdash; Tesla, BYD, Hyundai &mdash; got in early, scaled aggressively, and built their reputations over years. Late entrants without massive cost advantages or truly differentiated products are finding it nearly impossible to gain traction.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What this means for car buyers</h2>

            <p className="text-slate-300 leading-relaxed mb-6">If you were waiting for the Afeela, your options are actually better now than they would have been.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The vehicle segment the Afeela targeted &mdash; premium electric sedans and crossovers &mdash; is now served by proven products from established brands. The <Link href="/cars/lucid" className="text-emerald-400 hover:text-emerald-300">Lucid Air</Link> offers the long-range, tech-forward luxury sedan experience. The <Link href="/cars/bmw" className="text-emerald-400 hover:text-emerald-300">BMW i5</Link> and <Link href="/cars/mercedes" className="text-emerald-400 hover:text-emerald-300">Mercedes EQE</Link> provide traditional luxury.</p>

            <p className="text-slate-300 leading-relaxed mb-8">For Honda loyalists, the 0 Series represents a genuine fresh start. The Acura RSX arriving in 2026 will be worth watching closely &mdash; it carries Honda&apos;s reliability reputation without the complexity and uncertainty of the Sony partnership. Honda has never built a long-range EV for the US market. The 0 Series is their moment to prove they can compete in a segment they&apos;ve largely sat out.</p>
          </article>

          <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <h3 className="text-lg font-semibold text-white mb-4">Related Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/cars/honda" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Browse Honda Models &rarr;</Link>
              <Link href="/cars" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Browse All EV Brands &rarr;</Link>
              <Link href="/ev-deals" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Find EV Deals &rarr;</Link>
              <Link href="/blog/best-evs-first-time-buyers-2026" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Best EVs for First-Time Buyers &rarr;</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              <Link href="/blog?tag=honda" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Honda</Link>
              <Link href="/blog?tag=sony" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Sony</Link>
              <Link href="/blog?tag=afeela" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Afeela</Link>
              <Link href="/blog?tag=ev-news" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">EV News</Link>
              <Link href="/blog?tag=honda-0-series" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Honda 0 Series</Link>
            </div>
          </div>

          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}

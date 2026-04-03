"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function RivianR2GreenCarOfTheYear() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Rivian R2 Wins 2026 Electric Green Car of the Year &mdash; and Robotaxis Are Coming to Miami</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>April 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/blog/rivian-r2-coastal-hero.png" alt="Rivian R2 electric SUV on a coastal road" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8"><Link href="/cars/rivian" className="text-emerald-400 hover:text-emerald-300">Rivian</Link> just had the kind of week that defines a company&apos;s trajectory. The R2 compact electric SUV won the 2026 Electric Green Car of the Year from Green Car Journal, beating out strong competition from Lexus, Jeep, Ford, and others across five award categories. And if that wasn&apos;t enough, the company also confirmed that its robotaxi service has struck a deal with DoorDash to develop self-driving delivery vehicles.</p>

            <p className="text-slate-300 leading-relaxed mb-6">For a company that spent its early years fighting for survival against production delays, cash burn concerns, and a brutal market, Rivian is suddenly looking like the comeback story of the EV industry.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The R2 &mdash; why it won</h2>

            <p className="text-slate-300 leading-relaxed mb-6">The Rivian R2 isn&apos;t trying to be everything to everyone. It&apos;s trying to be one thing exceptionally well: the best compact electric SUV for Americans who actually use their vehicles.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Where the original R1T pickup and R1S SUV were priced above $70,000 &mdash; limiting them to a relatively small audience &mdash; the R2 brings Rivian&apos;s adventure-oriented design philosophy to a price point that real people can afford. Starting around $45,000, it slots directly against the <Link href="/cars/tesla" className="text-emerald-400 hover:text-emerald-300">Tesla Model Y</Link>, the <Link href="/cars/hyundai" className="text-emerald-400 hover:text-emerald-300">Hyundai Ioniq 5</Link>, and the <Link href="/cars/ford" className="text-emerald-400 hover:text-emerald-300">Ford Mustang Mach-E</Link>.</p>

            <p className="text-slate-300 leading-relaxed mb-6">But it does something none of those competitors do quite as well: it makes you feel like every weekend should be an adventure.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The design is unmistakably Rivian &mdash; compact proportions, the signature stadium-light headlights, and a rugged-yet-refined stance that looks at home in both a downtown parking garage and a national park campground. The R2 maintains Rivian&apos;s signature gear tunnel (a lockable storage compartment that runs through the body of the vehicle between the rear seats and the trunk), though it&apos;s smaller than the R1&apos;s version.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Range sits at a competitive 300+ miles on the Long Range variant, with an 800-volt electrical architecture supporting fast charging. Rivian&apos;s software platform &mdash; which has consistently been praised as one of the best in the industry &mdash; runs the show, with a clean, responsive interface and over-the-air updates that genuinely add functionality over time.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The Green Car Journal jury specifically cited the R2&apos;s combination of &ldquo;accessible pricing, genuine capability, and a design identity that gives the electric SUV segment personality it has been lacking.&rdquo;</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Robotaxis in Miami and San Francisco</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Here&apos;s where Rivian&apos;s story takes a fascinating turn.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The micromobility company that spun out of Rivian last year has been quietly developing autonomous vehicle technology. They&apos;ve now announced initial deployments of robotaxi services in San Francisco and Miami, planned for 2028, with an ambitious scaling plan to reach 25 cities by 2031. The total investment commitment: $1.25 billion.</p>

            <p className="text-slate-300 leading-relaxed mb-6">For Florida residents, the Miami deployment is particularly significant. Miami&apos;s flat terrain, generally good weather, and grid-based street layout make it one of the more technically feasible cities for autonomous vehicle operations. The DoorDash partnership adds a commercial delivery angle alongside passenger rides, creating multiple revenue streams from the same autonomous vehicle fleet.</p>

            <p className="text-slate-300 leading-relaxed mb-6">This doesn&apos;t mean you&apos;ll be hailing a self-driving Rivian in two years. Autonomous vehicle deployments always take longer than announced, face regulatory hurdles, and require extensive testing. But the strategic significance is real. Rivian is positioning itself not just as a vehicle manufacturer but as a technology and mobility company.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How the R2 stacks up</h2>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Rivian R2 vs Tesla Model Y:</strong> The Model Y has Tesla&apos;s Supercharger network, years of production refinement, and lower base pricing. The R2 counters with more distinctive design, adventure-ready personality, and Rivian&apos;s software experience.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Rivian R2 vs Hyundai Ioniq 5:</strong> The Ioniq 5 is one of the best values in the EV market with its 800-volt charging and competitive pricing. The R2 matches it on charging architecture and offers more ground clearance and rugged styling for adventurous buyers.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Rivian R2 vs Ford Mustang Mach-E:</strong> Ford&apos;s offering has excellent driving dynamics but has been losing sales momentum. The R2&apos;s fresher design and newer technology platform give it an edge for tech-forward buyers.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Rivian R2 vs Subaru Solterra:</strong> Subaru&apos;s electric crossover targets a similar outdoor-adventure buyer, but its specs lag behind in range and charging speed. The R2 is the EV that Subaru loyalists have been waiting for someone to build.</p>

            {/* In-article image: Rivian R2 at campsite */}
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-12">
              <Image src="/images/blog/rivian-r2-campsite.png" alt="Rivian R2 parked at a scenic campsite" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What this means for Florida buyers</h2>

            <p className="text-slate-300 leading-relaxed mb-6">The R2 is particularly well-suited to Florida lifestyles:</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Beach and outdoor access.</strong> Florida&apos;s outdoor recreation &mdash; from the Keys to the Gulf beaches to the springs &mdash; demands a vehicle that&apos;s comfortable on highways but capable on unpaved access roads. The R2&apos;s raised ride height and standard AWD handle both.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">Hurricane preparedness.</strong> Rivian vehicles support vehicle-to-load (V2L) capability, which means they can power your home during outages. In a state where hurricanes knock out power regularly, having a massive battery on wheels is genuinely valuable.</p>

            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">The Miami robotaxi connection.</strong> If Rivian&apos;s autonomous service launches in Miami as planned, early R2 owners in South Florida will have a front-row seat to one of the most significant transportation experiments in the state&apos;s history.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The bottom line</h2>

            <p className="text-slate-300 leading-relaxed mb-8">The Rivian R2 winning Electric Green Car of the Year validates what the automotive press has been saying since its reveal: this is the vehicle that could make Rivian a mainstream brand. At $45,000, it&apos;s competitive with the Model Y and Ioniq 5 while offering a personality and capability set that neither can match. For Florida buyers interested in the R2, production is ramping through 2026. Getting on the reservation list now positions you for delivery later this year or early 2027.</p>
          </article>

          <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <h3 className="text-lg font-semibold text-white mb-4">Related Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/cars/rivian" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Browse Rivian Models &rarr;</Link>
              <Link href="/ev-deals" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Find EV Deals &rarr;</Link>
              <Link href="/blog/best-evs-highway-driving-long-trips-2026" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Best EVs for Highway Driving &rarr;</Link>
              <Link href="/charge" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Charging Stations Near You &rarr;</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              <Link href="/blog?tag=rivian" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Rivian</Link>
              <Link href="/blog?tag=r2" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">R2</Link>
              <Link href="/blog?tag=green-car-of-the-year" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Green Car of the Year</Link>
              <Link href="/blog?tag=robotaxi" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Robotaxi</Link>
              <Link href="/blog?tag=miami" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Miami</Link>
            </div>
          </div>

          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}

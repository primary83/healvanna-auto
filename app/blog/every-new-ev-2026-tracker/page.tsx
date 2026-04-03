"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function EveryNewEv2026Tracker() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Every New EV Launching in the US in 2026 &mdash; The Complete Tracker</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>April 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>16 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/blog/every-new-ev-2026-hero.png" alt="Every new electric vehicle launching in the US in 2026" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">The electric vehicle market isn&apos;t slowing down. Despite <Link href="/blog/q1-2026-ev-sales-scorecard" className="text-emerald-400 hover:text-emerald-300">new EV sales declining 28% in Q1 2026</Link> after the federal tax credit expired, automakers are launching a staggering 30+ new electric models in the US this year. That&apos;s more new EV launches than any previous year in history.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The message from the industry is clear: the temporary sales dip is a speed bump, not a dead end. Manufacturers are betting billions that the long-term trajectory of electrification is inevitable, and they&apos;re flooding the market with vehicles across every segment and price point.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Here&apos;s every confirmed new EV coming to American roads in 2026, organized by what matters most to car buyers.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Affordable EVs (Under $40,000)</h2>

            <p className="text-slate-300 leading-relaxed mb-6">These are the models fighting for the mass market &mdash; the vehicles that will determine whether EVs become mainstream transportation or remain an enthusiast&apos;s choice.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4"><Link href="/blog/kia-ev3-arrives-in-us" className="text-emerald-400 hover:text-emerald-300">Kia EV3</Link></h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Estimated price:</strong> Under $35,000 | <strong className="text-emerald-400">Range:</strong> Up to 320 miles</p>
            <p className="text-slate-300 leading-relaxed mb-6">The most anticipated affordable EV of the year. Built on the same E-GMP platform as the award-winning EV6, the EV3 brings 800-volt charging speed to a sub-$35,000 price point. Five trim levels, available AWD, and <Link href="/cars/kia" className="text-emerald-400 hover:text-emerald-300">Kia&apos;s</Link> strong warranty make this the one to watch. <strong className="text-white">When:</strong> Second half of 2026.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4"><Link href="/cars/chevrolet" className="text-emerald-400 hover:text-emerald-300">Chevrolet Bolt EV</Link> (all-new)</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Estimated price:</strong> ~$33,000 | <strong className="text-emerald-400">Range:</strong> 262 miles (EPA rated)</p>
            <p className="text-slate-300 leading-relaxed mb-6">The Bolt is back from the dead with a fresh design, updated interior, and competitive pricing. It doesn&apos;t match the Kia EV3 on charging speed (400-volt vs 800-volt), but it&apos;s built in America and backed by GM&apos;s massive dealer network. <strong className="text-white">When:</strong> Available now, ramping production.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4"><Link href="/cars/nissan" className="text-emerald-400 hover:text-emerald-300">Nissan Leaf</Link> (redesigned)</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Estimated price:</strong> ~$30,000 | <strong className="text-emerald-400">Range:</strong> Up to 303 miles (Long Range)</p>
            <p className="text-slate-300 leading-relaxed mb-6">The nameplate that started the mass-market EV movement is completely reimagined as a modern compact crossover. The Leaf has struggled with sales in Q1 (down 71%), but the product itself has been well-received by reviewers. <strong className="text-white">When:</strong> Available now.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Mitsubishi Lancer EV</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Estimated price:</strong> ~$30,000 | <strong className="text-emerald-400">Range:</strong> Up to 303 miles</p>
            <p className="text-slate-300 leading-relaxed mb-6">Mitsubishi&apos;s version of the Nissan Leaf platform, likely carrying the revived Lancer name. Expect similar specs with Mitsubishi&apos;s value-oriented pricing. <strong className="text-white">When:</strong> Late 2026.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Compact and Midsize SUVs ($40,000&ndash;$60,000)</h2>

            <p className="text-slate-300 leading-relaxed mb-6">The heart of the American car market. These are the models competing for the largest slice of EV buyers.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4"><Link href="/blog/bmw-ix3-world-car-of-the-year" className="text-emerald-400 hover:text-emerald-300">BMW iX3</Link> (Neue Klasse)</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Estimated price:</strong> ~$55,000 | <strong className="text-emerald-400">Range:</strong> 400+ miles</p>
            <p className="text-slate-300 leading-relaxed mb-6">The 2026 World Car of the Year. <Link href="/cars/bmw" className="text-emerald-400 hover:text-emerald-300">BMW&apos;s</Link> first Neue Klasse vehicle brings groundbreaking 400 kW charging speed, impressive range, and a completely new tech platform. <strong className="text-white">When:</strong> Second half of 2026.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Acura RSX</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Estimated price:</strong> ~$50,000 | <strong className="text-emerald-400">Range:</strong> 300+ miles</p>
            <p className="text-slate-300 leading-relaxed mb-6"><Link href="/cars/honda" className="text-emerald-400 hover:text-emerald-300">Honda&apos;s</Link> 0 Series debut in Acura form. Dual-motor compact crossover with Asimo OS, AI assistant, and OTA updates. This is Honda&apos;s make-or-break EV moment after the <Link href="/blog/honda-sony-afeela-canceled" className="text-emerald-400 hover:text-emerald-300">Afeela cancellation</Link>. <strong className="text-white">When:</strong> First half of 2026.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4"><Link href="/cars/mercedes" className="text-emerald-400 hover:text-emerald-300">Mercedes</Link> GLC EV</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Estimated price:</strong> ~$55,000 | <strong className="text-emerald-400">Range:</strong> 350+ miles (expected)</p>
            <p className="text-slate-300 leading-relaxed mb-6">Mercedes is electrifying its best-selling model. Early reviews call it not just a great electric car, but a great Mercedes. <strong className="text-white">When:</strong> 2026.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4"><Link href="/cars/toyota" className="text-emerald-400 hover:text-emerald-300">Toyota</Link> bZ Woodland</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Estimated price:</strong> ~$38,000 | <strong className="text-emerald-400">Range:</strong> TBD</p>
            <p className="text-slate-300 leading-relaxed mb-6">Toyota is expanding the bZ family with a rugged-styled variant targeting the outdoor crowd. Given that the standard bZ just posted 78.8% sales growth, the Woodland should find a receptive market. <strong className="text-white">When:</strong> Late 2026.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Toyota C-HR (electric)</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Estimated price:</strong> ~$35,000 | <strong className="text-emerald-400">Range:</strong> TBD</p>
            <p className="text-slate-300 leading-relaxed mb-6">A smaller, more affordable Toyota EV targeting urban buyers who don&apos;t need a full-size crossover. <strong className="text-white">When:</strong> 2026.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4"><Link href="/cars/subaru" className="text-emerald-400 hover:text-emerald-300">Subaru</Link> Getaway</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Estimated price:</strong> ~$45,000 | <strong className="text-emerald-400">Range:</strong> 300+ miles</p>
            <p className="text-slate-300 leading-relaxed mb-6">Subaru&apos;s first dedicated electric SUV. Three rows, over 300 miles of range, and 420 horsepower with standard AWD. Debuted at the New York Auto Show to strong reception. <strong className="text-white">When:</strong> Late 2026.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4"><Link href="/cars/volkswagen" className="text-emerald-400 hover:text-emerald-300">Volkswagen</Link> ID.7</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Price:</strong> ~$50,000 | <strong className="text-emerald-400">Range:</strong> ~340 miles</p>
            <p className="text-slate-300 leading-relaxed mb-6">VW&apos;s flagship EV sedan with a massive interior and impressive highway range. The company has also announced it&apos;s dropping the confusing capacitive touch controls &mdash; a welcome change. <strong className="text-white">When:</strong> Available now.</p>

            {/* In-article image: EV lineup grid */}
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-12">
              <Image src="/images/blog/ev-lineup-2026-grid.png" alt="Grid of new electric vehicles launching in 2026" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Three-Row Family SUVs ($50,000+)</h2>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Toyota Highlander EV</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Estimated price:</strong> ~$50,000 | <strong className="text-emerald-400">Range:</strong> TBD</p>
            <p className="text-slate-300 leading-relaxed mb-6">The electric Highlander gets 82 more horsepower than its gas counterpart. Toyota&apos;s reliability reputation and the Highlander&apos;s benchmark status should make this a strong seller. <strong className="text-white">When:</strong> Late 2026.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4"><Link href="/cars/hyundai" className="text-emerald-400 hover:text-emerald-300">Hyundai</Link> Ioniq 9</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Price:</strong> ~$56,000 | <strong className="text-emerald-400">Range:</strong> ~350 miles</p>
            <p className="text-slate-300 leading-relaxed mb-6">Already posting nearly 2,000 deliveries in Q1 despite being brand new. The Ioniq 9 brings Hyundai&apos;s 800-volt architecture to the three-row segment. <strong className="text-white">When:</strong> Available now.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Cadillac Vistiq</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Price:</strong> ~$70,000 | <strong className="text-emerald-400">Range:</strong> ~300 miles</p>
            <p className="text-slate-300 leading-relaxed mb-6">Cadillac&apos;s second major EV launch after the Lyriq. Already posting nearly 2,000 Q1 deliveries with GM&apos;s Ultium platform and Super Cruise hands-free driving. <strong className="text-white">When:</strong> Deliveries started.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Trucks and Adventure Vehicles</h2>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4"><Link href="/blog/rivian-r2-green-car-of-the-year" className="text-emerald-400 hover:text-emerald-300">Rivian R2</Link></h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Estimated price:</strong> ~$45,000 | <strong className="text-emerald-400">Range:</strong> 300+ miles</p>
            <p className="text-slate-300 leading-relaxed mb-6">The compact adventure SUV that just won Green Car of the Year. More accessible than the R1 lineup while maintaining <Link href="/cars/rivian" className="text-emerald-400 hover:text-emerald-300">Rivian&apos;s</Link> adventure-ready DNA. <strong className="text-white">When:</strong> Ramping production through 2026.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Chevrolet Silverado EV (expanding)</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Price:</strong> Starts ~$57,000 | <strong className="text-emerald-400">Range:</strong> Up to 450 miles</p>
            <p className="text-slate-300 leading-relaxed mb-6">The Silverado EV&apos;s 200 kWh battery delivers the longest range of any electric truck. GM is expanding trim levels and availability throughout 2026. <strong className="text-white">When:</strong> Expanding trim availability.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">GMC Sierra EV</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Price:</strong> ~$65,000 | <strong className="text-emerald-400">Range:</strong> ~400 miles</p>
            <p className="text-slate-300 leading-relaxed mb-6">GM&apos;s luxury truck brand goes electric with similar underpinnings to the Silverado EV but a more premium interior and features. <strong className="text-white">When:</strong> Available, expanding production.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Luxury and Performance</h2>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Jaguar Type 00</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Estimated price:</strong> $100,000+ | <strong className="text-emerald-400">Range:</strong> TBD</p>
            <p className="text-slate-300 leading-relaxed mb-6">Jaguar is staking its entire future on a grand six-figure electric sedan. It&apos;s the boldest bet in the luxury segment &mdash; a complete brand reinvention. <strong className="text-white">When:</strong> Late 2026.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Dodge Charger Daytona (expanding)</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Price:</strong> Starts ~$60,000 | <strong className="text-emerald-400">Range:</strong> ~250 miles</p>
            <p className="text-slate-300 leading-relaxed mb-6">Dodge&apos;s first electric muscle car has been polarizing but is finding its audience. The Fratzonic chambered exhaust system simulates engine sounds &mdash; purists hate it, but Dodge fans seem to love it. <strong className="text-white">When:</strong> Available, expanding production.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Polestar 4</h3>
            <p className="text-slate-300 leading-relaxed mb-2"><strong className="text-emerald-400">Price:</strong> ~$57,000 | <strong className="text-emerald-400">Range:</strong> ~300 miles</p>
            <p className="text-slate-300 leading-relaxed mb-6">Polestar&apos;s sleekest vehicle yet eliminates the rear window entirely in favor of a camera-based rear view system. Bold design choice that creates a remarkably aerodynamic profile. <strong className="text-white">When:</strong> Available now.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What to watch for in the second half of 2026</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Several additional models are expected but not fully confirmed for 2026 delivery:</p>

            <ul className="text-slate-300 leading-relaxed mb-6 list-disc pl-6 space-y-2">
              <li><strong className="text-white">Mercedes electric van</strong> (VAN.EA platform) &mdash; 800-volt luxury van</li>
              <li><strong className="text-white">Honda 0 Series sedan</strong> &mdash; Honda-branded companion to the Acura RSX</li>
              <li><strong className="text-white">Honda 0 Series compact</strong> &mdash; Third 0 Series model</li>
              <li><strong className="text-white">Cadillac Escalade IQL</strong> &mdash; Long-wheelbase electric Escalade</li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The bigger picture</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Over 30 new electric models in a single year tells you everything about where the auto industry is heading. Even with a temporary sales dip from the tax credit expiration, every major manufacturer is accelerating their electric lineups.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The most significant trend: affordable EVs are finally arriving in force. The <Link href="/blog/kia-ev3-arrives-in-us" className="text-emerald-400 hover:text-emerald-300">Kia EV3</Link>, Chevy Bolt, Nissan Leaf, and Mitsubishi Lancer all target the under-$35,000 segment. Combined with the <Link href="/blog/used-evs-boom-2026" className="text-emerald-400 hover:text-emerald-300">used EV boom</Link> and <Link href="/blog/gas-prices-ev-savings-2026" className="text-emerald-400 hover:text-emerald-300">rising gas prices</Link>, 2026 may be the year that EVs go from &ldquo;early adopter&rdquo; to &ldquo;mainstream choice.&rdquo;</p>

            <p className="text-slate-300 leading-relaxed mb-8">We&apos;ll keep this article updated as new models are confirmed, pricing is announced, and delivery timelines shift. Bookmark it and check back.</p>
          </article>

          <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <h3 className="text-lg font-semibold text-white mb-4">Related Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/cars" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Browse All EV Brands &rarr;</Link>
              <Link href="/ev-deals" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Find EV Deals &rarr;</Link>
              <Link href="/blog/best-affordable-evs-2026" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Best Affordable EVs 2026 &rarr;</Link>
              <Link href="/blog/q1-2026-ev-sales-scorecard" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Q1 2026 EV Sales Scorecard &rarr;</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              <Link href="/blog?tag=new-evs-2026" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">New EVs 2026</Link>
              <Link href="/blog?tag=ev-launches" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">EV Launches</Link>
              <Link href="/blog?tag=electric-vehicles" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Electric Vehicles</Link>
              <Link href="/blog?tag=auto-shows" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Auto Shows</Link>
              <Link href="/blog?tag=ev-tracker" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">EV Tracker</Link>
            </div>
          </div>

          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}

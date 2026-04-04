"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function GnemElectricMobilitySummit() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Events</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">GNEM Electric Mobility Summit 2026 &mdash; What to Know Before You Go</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>April 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>10 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/blog/gnem-summit-hero.png" alt="GNEM Electric Mobility Summit 2026 in Athens, Georgia" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">The Southeast is quickly becoming the epicenter of America&apos;s electric vehicle future, and there&apos;s no better proof than the GNEM Electric Mobility Summit landing at the University of Georgia in Athens on April 14&ndash;15, 2026.</p>

            <p className="text-slate-300 leading-relaxed mb-6">This isn&apos;t your typical auto show where you wander past shiny cars and collect brochures. The GNEM Summit is an industry-focused event tackling the real challenges and opportunities driving the EV transition &mdash; from battery supply chains to workforce development to the safety challenges that come with putting millions of high-voltage vehicles on the road.</p>

            <p className="text-slate-300 leading-relaxed mb-6">If you&apos;re in the EV industry, adjacent to it, or simply serious about understanding where electric mobility is heading, this is one of the most relevant events happening in the Southeast this spring.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Why Athens, Georgia?</h2>

            <p className="text-slate-300 leading-relaxed mb-6">It might seem surprising to host an electric mobility summit at a college town known more for bulldogs and indie rock than battery technology. But Athens sits at the heart of what industry insiders have started calling the Southeast Battery Belt.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Georgia has attracted massive investments in EV and battery manufacturing over the past few years. SK Innovation built a multi-billion-dollar battery plant in Commerce, Georgia &mdash; just 30 miles from Athens. <Link href="/cars/hyundai" className="text-emerald-400 hover:text-emerald-300">Hyundai</Link> is constructing a dedicated EV manufacturing facility in Bryan County. <Link href="/cars/rivian" className="text-emerald-400 hover:text-emerald-300">Rivian</Link> chose Georgia for its second manufacturing plant. The state has positioned itself as a critical node in America&apos;s EV supply chain.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The University of Georgia brings academic research muscle to the conversation. Their engineering and sustainability programs are actively developing the workforce that these new factories need. Hosting the summit on campus connects industry leaders directly with the researchers and future employees who will power the next phase of electrification.</p>

            {/* In-article image: Battery factory Southeast */}
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-12">
              <Image src="/images/blog/battery-factory-southeast.png" alt="Battery manufacturing facility in the Southeast Battery Belt" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What&apos;s on the agenda</h2>

            <p className="text-slate-300 leading-relaxed mb-6">The GNEM Summit is built around four major pillars that reflect where the EV industry&apos;s real work is happening right now.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Battery supply chains</h3>

            <p className="text-slate-300 leading-relaxed mb-6">This is arguably the most critical topic in the EV industry today. The global battery supply chain &mdash; from lithium mining in Australia and Chile to cell manufacturing in China, Korea, and now the American Southeast &mdash; is being reshaped by tariffs, trade policy, and a race for domestic production capacity.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Sessions will cover where raw materials are coming from, how the Inflation Reduction Act&apos;s domestic content requirements are reshaping sourcing decisions, and what the realistic timeline looks like for building a truly American battery supply chain.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Fleet electrification</h3>

            <p className="text-slate-300 leading-relaxed mb-6">While consumer EVs get most of the headlines, fleet electrification represents one of the largest potential shifts in transportation economics. Companies operating delivery vans, service vehicles, buses, and trucks are evaluating whether the total cost of ownership math works for going electric.</p>

            <p className="text-slate-300 leading-relaxed mb-6">The summit will address the practical challenges fleet operators face: charging infrastructure at depots, vehicle uptime requirements, maintenance training, and the financial modeling that determines whether an electric fleet saves money or costs money.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">EV safety</h3>

            <p className="text-slate-300 leading-relaxed mb-6">As millions of EVs enter the American vehicle fleet, safety considerations are evolving. High-voltage battery systems present different risks than traditional vehicles &mdash; from thermal runaway events to the challenges first responders face when dealing with EV accidents. Sessions will cover battery safety standards, crash testing protocols specific to EVs, fire department training requirements, and the evolving regulatory landscape.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Workforce development</h3>

            <p className="text-slate-300 leading-relaxed mb-6">Every new battery factory and EV assembly plant needs trained workers &mdash; and the Southeast is facing a skills gap. The traditional automotive workforce knows internal combustion engines. The new workforce needs to understand high-voltage electrical systems, battery chemistry, advanced manufacturing processes, and software diagnostics.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Practical details</h2>

            <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-emerald-400">When:</strong> April 14&ndash;15, 2026</p>
            <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-emerald-400">Where:</strong> University of Georgia, Athens, GA</p>
            <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-emerald-400">Getting there:</strong> Athens is about 70 miles east of Atlanta, roughly a 90-minute drive. Hartsfield-Jackson Atlanta International Airport is the nearest major airport.</p>
            <p className="text-slate-300 leading-relaxed mb-6"><strong className="text-emerald-400">EV charging:</strong> Athens has a growing network of public chargers, including Level 2 stations on the UGA campus and DC fast chargers along the US-78 corridor from Atlanta.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Why this event matters for the Southeast</h2>

            <p className="text-slate-300 leading-relaxed mb-6">The GNEM Summit is more than a conference &mdash; it&apos;s a statement about where America&apos;s EV future is being built. While Silicon Valley and Detroit get the attention, the Southeast is quietly assembling the manufacturing backbone of the electric vehicle industry.</p>

            <p className="text-slate-300 leading-relaxed mb-8">Georgia alone has attracted over $20 billion in EV and battery manufacturing investments. The Battery Belt stretching from Georgia through the Carolinas is becoming to EVs what Detroit was to gas cars a century ago. For anyone working in or around this industry in the Southeast, the GNEM Summit is a chance to connect with the people building that future.</p>
          </article>

          <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <h3 className="text-lg font-semibold text-white mb-4">More EV Events</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/battery-show-south-atlanta" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Battery Show South Atlanta &rarr;</Link>
              <Link href="/blog/electrify-expo-atlanta" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Electrify Expo Atlanta 2026 &rarr;</Link>
              <Link href="/blog/every-new-ev-2026-tracker" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Every New EV Launching in 2026 &rarr;</Link>
              <Link href="/cars" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Browse All EV Brands &rarr;</Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              <Link href="/blog?tag=ev-events" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">EV Events</Link>
              <Link href="/blog?tag=gnem-summit" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">GNEM Summit</Link>
              <Link href="/blog?tag=electric-mobility" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Electric Mobility</Link>
              <Link href="/blog?tag=athens-ga" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Athens GA</Link>
              <Link href="/blog?tag=battery-belt" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Battery Belt</Link>
            </div>
          </div>

          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}

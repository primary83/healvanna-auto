"use client";
import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function EvRunsOutOfBattery() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">What Happens If Your EV Runs Out of Battery?</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>April 27, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/images/blog/ev-runs-out-battery.png" alt="EV being assisted on the side of a road" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">It is the #1 fear of every potential EV buyer: what happens when the battery hits zero? Do the wheels lock? Does the car just stop in the middle of the highway? Is it a $10,000 tow bill? The reality is far less dramatic than the fear &mdash; but it is worth understanding exactly what happens so the anxiety loses its power.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Countdown to Zero</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Your EV does not go from &ldquo;driving normally&rdquo; to &ldquo;dead&rdquo; without extensive warning. The process is gradual, loud (figuratively), and gives you multiple opportunities to find a charger before the battery reaches zero.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">15&ndash;20% Battery: First Warning</h3>

            <p className="text-slate-300 leading-relaxed mb-6">Most EVs display a low-battery warning at approximately 15&ndash;20% remaining charge. The navigation system automatically searches for nearby charging stations and offers to route you to the closest one. The dashboard warning is impossible to miss &mdash; a prominent alert with a battery icon and estimated remaining range.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">10% Battery: Urgent Warning</h3>

            <p className="text-slate-300 leading-relaxed mb-6">At approximately 10%, the warnings become more insistent. Some EVs reduce climate control output to conserve energy. The navigation system prioritizes charging stations above all other destinations. The remaining range estimate updates more frequently and conservatively.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">5% Battery: Power Reduction</h3>

            <p className="text-slate-300 leading-relaxed mb-6">At approximately 5%, most EVs begin reducing available power. The car limits acceleration, top speed may decrease to 45&ndash;55 mph, and climate control may shut off entirely to route all remaining energy to propulsion. The car is telling you very clearly: find a charger NOW.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">2&ndash;3% Battery: Turtle Mode</h3>

            <p className="text-slate-300 leading-relaxed mb-6">At 2&ndash;3%, the EV enters what owners call &ldquo;turtle mode&rdquo; &mdash; a severely limited driving state where the car can maintain approximately 15&ndash;25 mph with minimal acceleration. This mode exists to give you enough range to reach the shoulder of the road, a parking lot, or ideally a charger. The turtle icon on the dashboard is universal across brands and unmistakable.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">0% Battery: The Car Stops</h3>

            <p className="text-slate-300 leading-relaxed mb-6">When the displayed battery reaches 0%, the car will coast to a stop. This is not instantaneous &mdash; you will feel the power fading and have time to steer toward the shoulder. The car does not lock the wheels, does not lose power steering (most EVs maintain electric power steering using 12V backup), and does not lose brake function (brakes remain operational).</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What 0% Actually Means</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Here is a critical detail that reduces the anxiety significantly: <strong className="text-emerald-400">0% displayed on the dashboard is not truly 0% battery.</strong> Every EV manufacturer builds in a reserve &mdash; typically 5&ndash;10% of total battery capacity &mdash; that is inaccessible to the driver but protects the battery from deep discharge damage and provides power for essential systems (hazard lights, power locks, 12V systems) after the car stops.</p>

            <p className="text-slate-300 leading-relaxed mb-6">This means the car does not die completely at 0%. The hazard lights work. The doors open. The windows roll down. The car can be put in neutral for pushing or flatbed loading. The 12V system continues operating for approximately 30&ndash;60 minutes after the main battery shows 0%.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What to Do If You Run Out</h2>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Step 1: Get to Safety</h3>

            <p className="text-slate-300 leading-relaxed mb-6">Steer to the shoulder or a safe stopping location as the car decelerates. Engage the parking brake. Turn on hazard lights (they will work even at 0%).</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Step 2: Call Roadside Assistance</h3>

            <p className="text-slate-300 leading-relaxed mb-6">Every major EV manufacturer provides roadside assistance for battery depletion. Tesla, Hyundai, Kia, Ford, GM, BMW, Mercedes, Rivian, and Volkswagen all include roadside programs with their EVs &mdash; typically free for the first 3&ndash;5 years of ownership. The number is in your car&apos;s infotainment system, your manufacturer app, or on the card in your glovebox.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Step 3: Get a Tow</h3>

            <p className="text-slate-300 leading-relaxed mb-6">In most cases, a flatbed tow truck will transport your EV to the nearest fast charger. This is the standard resolution &mdash; and it typically takes 30&ndash;60 minutes from call to arrival. Some manufacturers (Tesla, Rivian) are piloting mobile charging vans that can add 20&ndash;30 miles of range at the roadside, allowing you to drive to a charger rather than being towed.</p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">Step 4: Charge and Continue</h3>

            <p className="text-slate-300 leading-relaxed mb-6">Once at a fast <Link href="/charge" className="text-emerald-400 hover:text-emerald-300">charger</Link>, 10&ndash;15 minutes of charging adds 50&ndash;80 miles of range &mdash; enough to reach your destination or the next charger. The entire incident, from running out to driving again, typically takes 1&ndash;2 hours.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Much Does It Cost?</h2>

            <p className="text-slate-300 leading-relaxed mb-6">If your vehicle is within the manufacturer&apos;s roadside assistance coverage period (typically 3&ndash;5 years), the tow is free. Outside of coverage, a flatbed tow of 10&ndash;30 miles costs approximately $150&ndash;$300. AAA membership covers EV towing up to 100 miles on their premium plan. The charging itself costs $5&ndash;$15 depending on the station and how much charge you add.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Rare Is Running Out Actually?</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Extremely rare. Data from major EV manufacturers suggests that <strong className="text-emerald-400">fewer than 0.5% of EV owners have ever experienced a complete battery depletion.</strong> The multi-layered warning system (starting at 20% and escalating through power reduction and turtle mode) gives drivers approximately 50&ndash;80 miles of warning before the car stops. Running out of battery requires actively ignoring warnings for 45&ndash;60 minutes of continued driving &mdash; the EV equivalent of driving 60 miles with the gas light on.</p>

            <p className="text-slate-300 leading-relaxed mb-6">Good route planning is the best prevention. Use a tool like <Link href="/blog/best-ev-route-planning-apps-2026" className="text-emerald-400 hover:text-emerald-300">A Better Route Planner</Link> for road trips, learn the basics in our <Link href="/blog/ev-road-trip-planning-101" className="text-emerald-400 hover:text-emerald-300">EV road trip planning 101</Link> guide, and read our <Link href="/blog/ev-myths-debunked-2026" className="text-emerald-400 hover:text-emerald-300">EV myths debunked</Link> piece for more reality checks on common fears.</p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Bottom Line</h2>

            <p className="text-slate-300 leading-relaxed mb-6">Running out of battery in an EV is inconvenient but not dangerous, not expensive (usually free under warranty), and not damaging to the vehicle. The car warns you aggressively starting at 20%, reduces power at 5%, enters turtle mode at 2&ndash;3%, and coasts to a controlled stop at 0%. Hazard lights, locks, and steering continue working. Roadside assistance tows you to a charger for free. You charge for 15 minutes and continue driving. The fear of running out is dramatically worse than the reality of running out. And with 50&ndash;80 miles of increasingly urgent warnings, actually reaching 0% requires a level of inattention that is almost impossible in practice.</p>
          </article>

          {/* Internal Links */}
          <div className="mt-8 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
            <h3 className="text-lg font-semibold text-white mb-4">Related Reading</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/blog/ev-road-trip-planning-101" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">EV Road Trip Planning 101 &rarr;</Link>
              <Link href="/blog/best-ev-route-planning-apps-2026" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Best EV Route Planning Apps 2026 &rarr;</Link>
              <Link href="/charge" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">Find Charging Stations &rarr;</Link>
              <Link href="/blog/ev-myths-debunked-2026" className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm">EV Myths Debunked 2026 &rarr;</Link>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-wrap gap-2">
              <Link href="/blog?tag=ev-tips" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">EV Tips</Link>
              <Link href="/blog?tag=range-anxiety" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Range Anxiety</Link>
              <Link href="/blog?tag=roadside" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Roadside</Link>
              <Link href="/blog?tag=technology" className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400 text-sm hover:text-emerald-400 hover:border-emerald-500/30 transition-colors">Technology</Link>
            </div>
          </div>

          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}

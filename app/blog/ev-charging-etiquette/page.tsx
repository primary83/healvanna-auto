"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVChargingEtiquette() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Guides</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">EV Charging Etiquette: The Unwritten Rules</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>10 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ev-charging-etiquette.png" alt="Row of modern EV charging stations at a public charging plaza with vehicles charging" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Public EV charging stations are a shared resource, and as EV adoption grows, so does competition for chargers. Whether you&apos;re a new EV owner or a veteran, following these unwritten rules keeps the charging experience smooth for everyone.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Golden Rule: Don&apos;t Hog the Charger</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">The single most important etiquette rule is to move your car once charging is complete. Occupying a charger while not actively charging is the EV equivalent of parking at a gas pump and going shopping.</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Set a timer or use your app</strong> — Most EV apps send notifications when charging is complete. Set a phone timer as a backup. Move your car within 5-10 minutes of completion.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Don&apos;t charge to 100% at DC fast chargers</strong> — Charging slows dramatically above 80%. You&apos;re occupying the charger for diminishing returns while others wait. Charge to 80% and move on.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Never leave your car for hours at a public charger</strong> — Even Level 2 chargers in parking garages shouldn&apos;t be treated as all-day parking spots. Once charged, move to a regular spot.</div></li>
              </ul>
              <p className="text-slate-400 text-sm mt-4">Many charging networks now charge idle fees — typically $0.40-$1.00 per minute after charging completes. These fees exist specifically to discourage lingering.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">DC Fast Charging Etiquette</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">DC fast chargers (Level 3) are the highest-demand stations. Extra consideration is expected:</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Limit sessions to what you need</strong> — If you need 30% to reach your destination, don&apos;t charge to 80% just because you can. Others may need the charger urgently.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Use Level 2 when time isn&apos;t critical</strong> — If you&apos;re at a mall or restaurant for two hours, use a Level 2 charger instead of a DC fast charger. Save the fast chargers for people who need quick top-ups.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Don&apos;t unplug someone else&apos;s car</strong> — Never disconnect another EV from a charger without permission, even if it appears fully charged. Leave a note on their windshield if you must communicate.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Return the cable properly</strong> — Hang the cable back on the holster or hook. Don&apos;t leave it on the ground where it can be driven over or damaged.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Queuing and Waiting</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">When all chargers are occupied, here&apos;s how to handle the wait:</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Form a visible queue</strong> — Park nearby in a way that shows you&apos;re waiting. First come, first served. Don&apos;t hover or pressure the person currently charging.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Be patient and friendly</strong> — The person charging needs the charger too. A polite conversation goes further than frustration. Ask their estimated time — most people are happy to share.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Don&apos;t block charger access</strong> — Don&apos;t park behind someone at a charger in a way that traps them. They need to be able to leave when done.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Use apps to check availability</strong> — Apps like PlugShare, ChargePoint, and the Tesla app show real-time charger availability. Check before driving there to avoid unnecessary waits.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Workplace and Shared Charging</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Workplace chargers and shared residential chargers have their own dynamics:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Rotate mid-day if needed</strong> — If your workplace has fewer chargers than EVs, establish a rotation. Charge in the morning, move at lunch so a colleague can charge in the afternoon.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Don&apos;t charge every day if others need it</strong> — If you charged at home and have 80% battery, let a colleague who didn&apos;t have home charging use the workplace charger instead.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Communicate in shared spaces</strong> — In apartment buildings or condo parking, a group chat or sign-up sheet for shared chargers prevents conflicts.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">ICE-ing and Parking Issues</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">&quot;ICE-ing&quot; refers to internal combustion engine (ICE) vehicles parking in EV charging spots. It&apos;s frustrating, but here&apos;s how to handle it:</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Report to the property manager</strong> — Most parking lots with EV chargers have management that can address ICE-ing. Many jurisdictions now have fines for non-EV vehicles in charging spots.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Use a polite note</strong> — If you must leave a note, keep it educational, not confrontational. Many ICE drivers genuinely don&apos;t realize the spot is reserved for active charging.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Don&apos;t retaliate or block</strong> — Don&apos;t block the ICE vehicle in or leave aggressive notes. It creates negative perception of EV owners.</div></li>
              </ul>
              <p className="text-slate-400 text-sm mt-4">EV owners should also avoid parking in charging spots without charging. An EV parked in a charging spot without plugging in is just as inconsiderate as ICE-ing.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Road Trip Charging Tips</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Plan your stops in advance</strong> — Know where you&apos;ll charge and have backup options. Don&apos;t arrive at a charger on 5% battery with no alternative.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Arrive with a low battery</strong> — DC fast charging is fastest between 10-50%. Arriving at 50% means you&apos;re in the slow-charging zone already.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Leave at 80%</strong> — Charging from 80-100% can take as long as charging from 10-80%. Leave at 80% and charge again later if needed.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Have multiple charging apps installed</strong> — Different stations use different networks. Have ChargePoint, Electrify America, EVgo, and Tesla (if applicable) apps ready with payment set up.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Reporting Broken Chargers</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Broken chargers waste everyone&apos;s time. Help the community by reporting issues:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Report in the app</strong> — Most charging apps let you report broken or malfunctioning stations. This helps the network prioritize repairs.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Update PlugShare</strong> — Leave a check-in noting the issue. Other drivers will see it and avoid wasted trips.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Call the support number</strong> — Most chargers have a phone number on the unit. A quick call often resolves issues faster than app reports.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              EV charging etiquette comes down to the same principle as any shared resource — be considerate. Charge what you need, move when you&apos;re done, and communicate when there&apos;s a queue.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              As the charging network grows, many of these friction points will diminish. But while charger availability is still catching up to demand, following these unwritten rules makes the experience better for everyone — and gives the broader community a positive impression of EV owners.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Explore Electric Vehicles</h3>
            <p className="text-slate-300 mb-6">Browse our comprehensive database of electric vehicles with charging specs, range details, and pricing comparisons.</p>
            <Link href="/cars" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse All EVs
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or find EV service providers in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/ev-home-charging-installation-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Home EV Charging Installation Guide</p></Link>
              <Link href="/blog/ev-charging-networks-compared" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Charging Networks Compared</p></Link>
              <Link href="/blog/ev-road-trip-planning-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Road Trip Planning Guide</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Charging</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Etiquette</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Public Charging</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Electric Vehicles</span>
            </div>
            <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

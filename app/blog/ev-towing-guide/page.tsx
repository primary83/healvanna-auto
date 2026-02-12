"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVTowingGuide() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">EV Towing Guide: What You Need to Know</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>12 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ev-towing-guide.png" alt="Modern electric SUV towing a small camper trailer on a scenic highway" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Electric vehicles can absolutely tow — but towing with an EV comes with unique considerations around range impact, tow ratings, and charging logistics that every EV owner should understand before hitching up. Here&apos;s the complete guide.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Range Impact Reality</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">The biggest concern with EV towing is range reduction. Towing dramatically increases energy consumption because you&apos;re fighting aerodynamic drag, rolling resistance, and additional weight. Here&apos;s what to realistically expect:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 pr-4 text-white font-semibold">Towing Scenario</th>
                      <th className="text-left py-3 pr-4 text-white font-semibold">Range Reduction</th>
                      <th className="text-left py-3 text-white font-semibold">Example (300mi rated)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Small utility trailer (1,000 lbs)</td><td className="py-3 pr-4">25-35%</td><td className="py-3">195-225 miles</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Mid-size camper (3,500 lbs)</td><td className="py-3 pr-4 text-red-400">40-55%</td><td className="py-3">135-180 miles</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Large travel trailer (5,000 lbs)</td><td className="py-3 pr-4 text-red-400">50-65%</td><td className="py-3">105-150 miles</td></tr>
                    <tr><td className="py-3 pr-4">Boat trailer (4,000 lbs)</td><td className="py-3 pr-4 text-red-400">45-60%</td><td className="py-3">120-165 miles</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-sm mt-4">Speed has an outsized effect. Towing at 55 mph instead of 70 mph can recover 15-20% of your range because aerodynamic drag increases exponentially with speed.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Top EV Tow Ratings</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 pr-4 text-white font-semibold">Vehicle</th>
                      <th className="text-left py-3 pr-4 text-white font-semibold">Max Tow Rating</th>
                      <th className="text-left py-3 pr-4 text-white font-semibold">Battery Size</th>
                      <th className="text-left py-3 text-white font-semibold">Rated Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Rivian R1S</td><td className="py-3 pr-4 text-emerald-400">7,700 lbs</td><td className="py-3 pr-4">135 kWh</td><td className="py-3">321 miles</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Tesla Model X</td><td className="py-3 pr-4">5,000 lbs</td><td className="py-3 pr-4">100 kWh</td><td className="py-3">348 miles</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Ford F-150 Lightning</td><td className="py-3 pr-4 text-emerald-400">10,000 lbs</td><td className="py-3 pr-4">131 kWh</td><td className="py-3">320 miles</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Chevrolet Silverado EV</td><td className="py-3 pr-4 text-emerald-400">10,000 lbs</td><td className="py-3 pr-4">200 kWh</td><td className="py-3">400+ miles</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Tesla Cybertruck</td><td className="py-3 pr-4 text-emerald-400">11,000 lbs</td><td className="py-3 pr-4">123 kWh</td><td className="py-3">340 miles</td></tr>
                    <tr><td className="py-3 pr-4 font-medium text-white">BMW iX xDrive50</td><td className="py-3 pr-4">6,000 lbs</td><td className="py-3 pr-4">111 kWh</td><td className="py-3">324 miles</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Why EVs Are Actually Great for Towing</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Despite the range concern, EVs have several inherent advantages for towing:</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Instant torque</strong> — Electric motors deliver maximum torque at 0 RPM. Getting a heavy load moving from a stop is effortless. No turbo lag, no hunting for the right gear.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Low center of gravity</strong> — The heavy battery pack sits low in the chassis, improving stability when towing. Less sway, better handling.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Regenerative braking on descents</strong> — Going downhill with a trailer, regen braking slows you without heating your friction brakes. This is a major safety advantage on mountain passes.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">No transmission strain</strong> — No gears to overheat. Electric motors maintain consistent power delivery regardless of load.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Charging While Towing</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Charging logistics are the biggest practical challenge when towing with an EV. Here&apos;s how to handle it:</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Plan stops at 20-30% SOC</strong> — Don&apos;t push it to the wire. Towing energy consumption is less predictable than normal driving, and headwinds or elevation changes can burn through reserves quickly.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Use pull-through chargers</strong> — Many DC fast charging stations have pull-through stalls designed for vehicles with trailers. Apps like PlugShare let you filter for these.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Charge to 80-90%, not 100%</strong> — Charging slows dramatically above 80%. It&apos;s faster to make an extra stop than to wait for the last 20%.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Map charger spacing to your towing range</strong> — If your towing range is 150 miles, make sure chargers are spaced no more than 100 miles apart on your route to maintain a comfortable buffer.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Tips for Maximizing Towing Range</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Slow down</strong> — Dropping from 70 to 55 mph can add 30-50 miles of towing range. Aerodynamic drag is the dominant factor.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Maintain proper tire pressure</strong> — Check both the tow vehicle and trailer tires. Under-inflated tires increase rolling resistance significantly.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Choose aerodynamic trailers</strong> — A teardrop camper creates far less drag than a box trailer. If buying a trailer for EV towing, prioritize aerodynamics.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Reduce unnecessary weight</strong> — Every 100 lbs removed from the trailer saves roughly 1-2% range. Pack light and leave non-essentials at home.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Avoid extreme temperatures</strong> — Tow in mild weather when possible. Air conditioning and heating add to energy consumption on top of the towing load.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Flatbed Towing Your EV</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">If your EV needs to be towed (breakdown, flat tire, etc.), there&apos;s a critical rule:</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Never flat-tow an EV</strong> — Dragging an EV with its wheels on the ground forces the electric motor to spin, generating electricity with no load. This can overheat the motor and damage the drivetrain. Some EVs have a &quot;transport mode&quot; for short-distance wheel-down towing, but a flatbed is always the safest option.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Always use a flatbed</strong> — All four wheels off the ground. This is non-negotiable for most EVs. Make sure your roadside assistance plan specifies flatbed towing.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Is EV Towing Right for You?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              EV towing works best for short to medium trips with lightweight trailers. If your typical towing involves hauling a 2,000 lb utility trailer 50 miles to a job site or pulling a small camper to a campground 100 miles away, an EV handles this easily with minimal disruption.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              For long-distance heavy towing — 300+ mile trips with a 5,000+ lb trailer — you&apos;ll need a large-battery EV truck and patience for charging stops. It&apos;s doable but requires more planning than a gas truck. The charging infrastructure is rapidly improving, and by the time you read this, the network is likely better than when this was written.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Explore Electric Vehicles</h3>
            <p className="text-slate-300 mb-6">Browse our comprehensive database of electric vehicles with tow ratings, specs, and pricing to find the right EV for your towing needs.</p>
            <Link href="/cars" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse All EVs
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or find EV service providers in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/ev-battery-degradation-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Battery Degradation: What to Expect</p></Link>
              <Link href="/blog/ev-regenerative-braking-explained" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Understanding EV Regenerative Braking</p></Link>
              <Link href="/blog/sedan-vs-suv-ev" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Sedan vs SUV: Which EV Is Right for You?</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Towing</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Electric Trucks</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Tow Ratings</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Range Planning</span>
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

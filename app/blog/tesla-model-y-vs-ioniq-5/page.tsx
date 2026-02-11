"use client";

import Link from "next/link";
import Image from "next/image";

export default function TeslaModelYVsIoniq5() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Comparison</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Tesla Model Y vs Hyundai Ioniq 5: Which EV Should You Buy in 2026?</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>14 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/tesla-model-y-vs-ioniq-5.png" alt="Tesla Model Y and Hyundai Ioniq 5 side by side comparison" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The Tesla Model Y and Hyundai Ioniq 5 are two of the most popular electric SUVs on the market, and for good reason. Both offer compelling range, technology, and value — but they take very different approaches to the EV experience. Here&apos;s an in-depth comparison to help you decide which one deserves your driveway.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Quick Specs Comparison</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Spec</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Tesla Model Y (2026)</th>
                    <th className="text-left py-3 text-white font-semibold">Hyundai Ioniq 5 (2026)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Starting MSRP</td><td className="py-3 pr-4">~$44,990</td><td className="py-3">~$43,800</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Range (EPA)</td><td className="py-3 pr-4">Up to 320 mi (LR AWD)</td><td className="py-3">Up to 303 mi (LR RWD)</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">0-60 mph</td><td className="py-3 pr-4">4.8s (LR) / 3.5s (Perf)</td><td className="py-3">5.1s (AWD)</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Charging Architecture</td><td className="py-3 pr-4">400V</td><td className="py-3">800V</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Peak DC Charging</td><td className="py-3 pr-4">250 kW (Supercharger)</td><td className="py-3">350 kW (CCS / NACS)</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">10-80% Charge Time</td><td className="py-3 pr-4">~27 min</td><td className="py-3">~18 min</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Cargo Space</td><td className="py-3 pr-4">76 cu ft (seats down)</td><td className="py-3">59.3 cu ft (seats down)</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">V2L (Vehicle-to-Load)</td><td className="py-3 pr-4">No</td><td className="py-3">Yes (standard)</td></tr>
                  <tr><td className="py-3 pr-4 font-medium text-white">Warranty</td><td className="py-3 pr-4">4yr / 50k mi (basic)</td><td className="py-3">5yr / 60k mi (basic)</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Design and Exterior</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">The Model Y takes a conservative crossover shape — smooth, aerodynamic, and immediately recognizable as a Tesla. The 2026 refresh (codenamed &quot;Juniper&quot;) brought a redesigned front end, new headlights, and a sleeker overall profile. It looks like a smaller Model X and prioritizes function over flash.</p>
              <p className="text-slate-300 mb-4">The Ioniq 5 is a deliberate contrast. Its retro-futuristic design borrows from the 1974 Pony concept with sharp pixel-style LED lights, a flat floor, and cladding that makes it look more like a concept car that escaped the auto show. It&apos;s polarizing — people either love it or find it too unconventional.</p>
              <p className="text-slate-400 text-sm"><strong className="text-white">Edge:</strong> Comes down to personal taste. The Model Y is safe and modern. The Ioniq 5 is bold and distinctive.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Range and Efficiency</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">The Model Y edges ahead with up to 320 miles of EPA range on the Long Range AWD trim. Tesla&apos;s efficiency advantage comes from years of optimizing their drivetrain, heat pump system, and aerodynamics. In real-world highway driving, the Model Y tends to hit close to its rated range.</p>
              <p className="text-slate-300 mb-4">The Ioniq 5 offers up to 303 miles on the Long Range RWD trim. The AWD version drops to around 260 miles. Real-world range tends to fall a bit shorter than the EPA estimate, especially at sustained highway speeds above 70 mph.</p>
              <p className="text-slate-400 text-sm"><strong className="text-white">Edge:</strong> Tesla Model Y — more range across all trims and better real-world efficiency.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Charging</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">This is where the Ioniq 5 fights back hard. Its 800V architecture enables charging speeds up to 350 kW, which means a 10-80% charge in roughly 18 minutes at a compatible charger. That&apos;s fast enough to add 200+ miles during a bathroom break.</p>
              <p className="text-slate-300 mb-4">The Model Y uses a 400V system and peaks at 250 kW on Tesla Superchargers, with 10-80% taking about 27 minutes. Tesla&apos;s advantage is network reliability — the Supercharger network remains the most extensive and reliable in North America with over 50,000 plugs.</p>
              <p className="text-slate-300 mb-4">The Ioniq 5 now ships with a NACS port, giving it full access to the Supercharger network alongside CCS stations. The playing field has leveled significantly on network access.</p>
              <p className="text-slate-400 text-sm"><strong className="text-white">Edge:</strong> Ioniq 5 for charging speed. Tesla for network reliability (though the gap is narrowing).</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Interior and Technology</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">The Model Y&apos;s interior is minimalist to a fault. Nearly everything runs through the central 15.4-inch touchscreen. There are no physical buttons for climate, no instrument cluster behind the wheel, and the materials are clean but not luxurious. The 2026 refresh added ambient lighting and improved seat materials, but it&apos;s still a &quot;screen-first&quot; cabin.</p>
              <p className="text-slate-300 mb-4">The Ioniq 5 takes a different approach with dual 12.3-inch screens, physical climate buttons, and an interior that feels more like a living room. The flat floor creates a genuinely open cabin. Materials are higher quality at comparable trim levels, and Hyundai offers sustainable interior options with recycled materials.</p>
              <p className="text-slate-300 mb-4">One Ioniq 5 standout: Vehicle-to-Load (V2L) capability. You can power appliances, tools, or even charge another EV from a standard 120V outlet built into the car. This feature doesn&apos;t exist on the Model Y.</p>
              <p className="text-slate-400 text-sm"><strong className="text-white">Edge:</strong> Ioniq 5 for interior quality, ergonomics, and V2L. Model Y for seamless software integration.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Driving Dynamics</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">The Model Y drives like a tighter, sportier vehicle. It has a lower center of gravity, more responsive steering, and the Performance variant hits 0-60 in 3.5 seconds. Tesla&apos;s regenerative braking system is one of the best — true one-pedal driving that rarely requires the brake pedal.</p>
              <p className="text-slate-300 mb-4">The Ioniq 5 is tuned for comfort. The ride is smoother, road noise is better isolated, and the adjustable regenerative braking (via paddle shifters) gives you fine control over how aggressively the car slows down. It&apos;s not slow — the AWD version hits 0-60 in about 5.1 seconds — but it prioritizes being a comfortable cruiser over a performance machine.</p>
              <p className="text-slate-400 text-sm"><strong className="text-white">Edge:</strong> Model Y for sportiness. Ioniq 5 for ride comfort.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Ownership Costs</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Insurance</strong> — Tesla insurance tends to cost more due to higher repair costs and expensive parts. Hyundai is generally more affordable to insure.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Maintenance</strong> — Both are low-maintenance EVs. Tesla has a slight edge with no recommended service intervals. Hyundai recommends cabin air filter changes and brake fluid checks per their schedule.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Warranty</strong> — Hyundai wins with a longer 5-year/60,000-mile basic warranty and 10-year/100,000-mile powertrain warranty vs Tesla&apos;s 4-year/50,000-mile basic and 8-year/120,000-mile battery warranty.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Resale value</strong> — Tesla historically holds value better due to brand demand and the Supercharger network. However, the Ioniq 5&apos;s resale has been improving steadily.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Tax credits</strong> — Both may qualify for federal EV tax credits depending on the trim and where they&apos;re manufactured. Check current eligibility at the time of purchase.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Which Should You Buy?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Choose the Tesla Model Y if:</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span>You want maximum range and efficiency</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span>You prefer a sportier driving experience</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span>You need more cargo space</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span>You value Tesla&apos;s software ecosystem and OTA updates</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span>You do a lot of long-distance road trips</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Choose the Hyundai Ioniq 5 if:</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span>You want the fastest DC charging available</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span>You prefer a more comfortable, refined ride</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span>You want V2L to power appliances and tools</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span>You value a longer warranty and lower insurance costs</li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span>You want a more distinctive, head-turning design</li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Verdict</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Both of these are excellent electric SUVs. The Model Y wins on range, efficiency, cargo space, and driving dynamics. The Ioniq 5 wins on charging speed, interior quality, warranty, and unique features like V2L.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              If you&apos;re cross-shopping these two, you genuinely can&apos;t go wrong with either. The best move is to test drive both and see which cabin, driving feel, and ownership experience aligns with how you actually use a car.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Protect Your New EV</h3>
            <p className="text-slate-300 mb-6">Whether you choose the Model Y or Ioniq 5, find professional detailing and protection services to keep it looking showroom-new.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Detailing Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/hyundai-ioniq-6-vs-tesla-model-3" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Hyundai Ioniq 6 vs Tesla Model 3</p></Link>
              <Link href="/blog/ev-resale-value-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Resale Value in 2026</p></Link>
              <Link href="/blog/choose-first-ev" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Choose Your First EV</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Tesla</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Hyundai</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Model Y</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Ioniq 5</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Comparison</span>
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

"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVRegenerativeBrakingExplained() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Understanding EV Regenerative Braking</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ev-regenerative-braking-explained.png" alt="Modern electric vehicle braking on a mountain road with blue energy flow graphics around the wheels" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Every time you lift off the accelerator in an EV, something remarkable happens — the electric motor reverses its role and becomes a generator, converting your car&apos;s kinetic energy back into electricity and feeding it to the battery. This is regenerative braking, and it&apos;s one of the key reasons EVs are so efficient.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Regenerative Braking Works</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">In a gas car, braking converts kinetic energy into heat through friction pads pressing against rotors. That energy is wasted — it dissipates into the air. In an EV, regenerative braking captures a portion of that energy before friction brakes are needed:</p>
              <ol className="space-y-3 text-slate-300 list-decimal list-inside">
                <li><strong className="text-white">You lift off the accelerator</strong> — The motor controller detects reduced throttle input.</li>
                <li><strong className="text-white">The motor becomes a generator</strong> — Instead of consuming electricity to spin the wheels, the motor uses the wheels&apos; rotation to generate electricity.</li>
                <li><strong className="text-white">Resistance creates deceleration</strong> — The generator effect creates electromagnetic resistance, which slows the car. This feels like engine braking in a manual transmission car, but much stronger.</li>
                <li><strong className="text-white">Energy flows back to the battery</strong> — The generated electricity is routed through the inverter and stored in the battery pack, extending your range.</li>
                <li><strong className="text-white">Friction brakes engage if needed</strong> — At very low speeds or during hard braking, traditional friction brakes supplement the regenerative system.</li>
              </ol>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Much Energy Does It Recover?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">The amount of energy recovered depends on driving conditions, speed, and the vehicle&apos;s regen system:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 pr-4 text-white font-semibold">Driving Scenario</th>
                      <th className="text-left py-3 pr-4 text-white font-semibold">Energy Recovery</th>
                      <th className="text-left py-3 text-white font-semibold">Range Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">City driving (stop-and-go)</td><td className="py-3 pr-4 text-emerald-400">15-25%</td><td className="py-3 text-emerald-400">+30-60 miles on 300mi battery</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Suburban (mixed)</td><td className="py-3 pr-4">10-15%</td><td className="py-3">+20-40 miles</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Highway (steady speed)</td><td className="py-3 pr-4 text-red-400">3-8%</td><td className="py-3">+5-15 miles</td></tr>
                    <tr><td className="py-3 pr-4">Mountain descent</td><td className="py-3 pr-4 text-emerald-400">20-40%</td><td className="py-3 text-emerald-400">Significant recovery</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-sm mt-4">City driving benefits most from regen because you&apos;re constantly decelerating. Highway driving benefits least because you&apos;re maintaining steady speed with minimal braking events. This is why EVs often get better &quot;MPGe&quot; in city driving than highway — the opposite of gas cars.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">One-Pedal Driving</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Most modern EVs offer a &quot;one-pedal driving&quot; mode that maximizes regenerative braking. In this mode, lifting off the accelerator produces strong enough deceleration that you rarely need the brake pedal.</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">How it works</strong> — The regen is set to maximum. Lifting your foot fully off the accelerator can produce 0.2-0.3g of deceleration — enough to bring the car to a complete stop in most situations.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Benefits</strong> — Less brake wear (some EV owners go 150,000+ miles on original brake pads), more energy recovery, and once you adapt, it feels more intuitive and relaxing than two-pedal driving.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Adaptation period</strong> — Most drivers adjust within 1-2 weeks. The key is learning to modulate the accelerator pedal for smooth deceleration rather than binary on/off inputs.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Regen Levels by Manufacturer</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Manufacturer</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Regen Options</th>
                    <th className="text-left py-3 text-white font-semibold">One-Pedal?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Tesla</td><td className="py-3 pr-4">Standard (strong by default)</td><td className="py-3 text-emerald-400">Yes (default on newer models)</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Hyundai/Kia (E-GMP)</td><td className="py-3 pr-4">4 levels + i-Pedal via paddle shifters</td><td className="py-3 text-emerald-400">Yes (i-Pedal mode)</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">BMW</td><td className="py-3 pr-4">Adaptive, low, medium, high</td><td className="py-3 text-emerald-400">Yes (B mode)</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Rivian</td><td className="py-3 pr-4">Standard and high</td><td className="py-3 text-emerald-400">Yes</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Ford (Mach-E)</td><td className="py-3 pr-4">Normal and one-pedal</td><td className="py-3 text-emerald-400">Yes (L mode)</td></tr>
                  <tr><td className="py-3 pr-4 font-medium text-white">Mercedes (EQ)</td><td className="py-3 pr-4">4 levels + adaptive via paddles</td><td className="py-3 text-emerald-400">Yes (D-- mode)</td></tr>
                </tbody>
              </table>
              <p className="text-slate-400 text-xs mt-4">Hyundai/Kia&apos;s paddle shifter regen control is particularly well-regarded — you can adjust regen strength on the fly without taking your hands off the wheel.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When Regen Braking Is Limited</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Battery is fully charged</strong> — A 100% full battery can&apos;t accept more energy. Regen is reduced or disabled until the battery has room. This is one reason to avoid charging to 100% before driving downhill.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Very cold battery temperatures</strong> — Cold lithium-ion cells can&apos;t absorb energy efficiently. Regen is reduced until the battery warms up. Preconditioning the car while plugged in helps.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Very low speeds</strong> — Below roughly 5-10 mph, regen produces minimal deceleration. The car blends in friction brakes to bring you to a complete stop.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Emergency braking</strong> — Hard emergency stops always engage friction brakes. Regen alone can&apos;t produce the stopping force needed in a panic situation.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Brake Wear Benefit</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Because regen handles most deceleration, EV brake pads and rotors last dramatically longer than gas car brakes:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Gas car brake pads:</strong> 30,000-50,000 miles typical replacement interval</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">EV brake pads (with regen):</strong> 100,000-200,000+ miles — many EVs reach end of life without ever replacing brake pads</div></li>
              </ul>
              <p className="text-slate-300 mt-4">The downside: since the brakes are used so infrequently, the rotors can develop surface rust. Occasional moderate braking on a dry road helps keep the rotors clean.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Tips for Maximizing Regen Efficiency</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Anticipate stops</strong> — Lift off the accelerator early and let regen slow you gradually. Sudden braking wastes energy as heat in the friction brakes.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Use one-pedal mode in city driving</strong> — Maximum regen in stop-and-go traffic recovers the most energy.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Don&apos;t charge to 100% before a downhill commute</strong> — Leave room in the battery for regen to work. Charging to 80% gives you a buffer.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Precondition in cold weather</strong> — A warm battery accepts regen energy more efficiently. Start preconditioning while plugged in.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Use lower regen on highways</strong> — On constant-speed highway driving, lower regen settings reduce the jerkiness from small throttle adjustments and improve ride smoothness.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Verdict</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Regenerative braking is one of the most tangible advantages of electric driving. It extends range by 10-25%, virtually eliminates brake maintenance, and once you adjust to one-pedal driving, it makes the experience smoother and more intuitive.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              If you&apos;re new to EVs, give one-pedal mode at least two weeks before deciding. Almost everyone who commits to the learning curve prefers it permanently. It transforms driving from a two-foot activity into something more like controlling a video game — precise, responsive, and oddly satisfying.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Explore Electric Vehicles</h3>
            <p className="text-slate-300 mb-6">Browse our comprehensive database of electric vehicles with specs, pricing, and detailed comparisons.</p>
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
              <Link href="/blog/ev-maintenance-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Complete EV Maintenance Guide</p></Link>
              <Link href="/blog/ev-vs-gas-maintenance-costs" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV vs Gas Maintenance Costs</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Regenerative Braking</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Technology</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">One-Pedal Driving</span>
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

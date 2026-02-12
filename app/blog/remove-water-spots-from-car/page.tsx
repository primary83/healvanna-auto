"use client";

import Link from "next/link";
import Image from "next/image";

export default function RemoveWaterSpotsFromCar() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">How to Remove Water Spots from Your Car</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/remove-water-spots-from-car.png" alt="Close-up of dark car hood showing circular water spots with microfiber towel and spray bottle nearby" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Water spots are one of the most common and frustrating paint issues car owners deal with. They look harmless at first — just a few dried droplets — but left untreated, they can etch permanently into your clear coat. Here&apos;s how to identify, remove, and prevent them.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Causes Water Spots?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Water spots form when water evaporates and leaves behind dissolved minerals — primarily calcium, magnesium, and silica. The source of the water determines how difficult the spots are to remove:</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Hard water (sprinklers, tap water)</strong> — Contains high concentrations of calcium and magnesium. These create the white, chalky spots you see most often. Moderate to remove.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Rain water</strong> — Picks up airborne pollutants, acid, and particulates as it falls. Acid rain spots can etch the clear coat faster than mineral deposits.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Well water</strong> — Often has the highest mineral content. Well water spots are the most stubborn and most likely to cause permanent etching if left for days.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Three Types of Water Spots</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Type</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Description</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Severity</th>
                    <th className="text-left py-3 text-white font-semibold">Removal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Type I — Surface</td><td className="py-3 pr-4">Mineral deposits sitting on top of the paint</td><td className="py-3 pr-4 text-emerald-400">Mild</td><td className="py-3">Vinegar solution or water spot remover</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Type II — Bonded</td><td className="py-3 pr-4">Minerals partially embedded in the clear coat</td><td className="py-3 pr-4 text-yellow-400">Moderate</td><td className="py-3">Clay bar + polish</td></tr>
                  <tr><td className="py-3 pr-4 font-medium text-white">Type III — Etched</td><td className="py-3 pr-4">Minerals have chemically etched into the clear coat</td><td className="py-3 pr-4 text-red-400">Severe</td><td className="py-3">Compound + polish (professional)</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step-by-Step Removal Guide</h2>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Method 1: Vinegar Solution (Type I Spots)</h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <p className="text-slate-300 mb-4">This works for fresh surface-level water spots that haven&apos;t bonded to the paint.</p>
              <ol className="space-y-3 text-slate-300 list-decimal list-inside">
                <li><strong className="text-white">Mix solution</strong> — Combine equal parts white distilled vinegar and distilled water in a spray bottle.</li>
                <li><strong className="text-white">Wash the car first</strong> — Always start with a clean surface. Rubbing minerals into dirt creates scratches.</li>
                <li><strong className="text-white">Spray and soak</strong> — Apply the vinegar solution to the affected area. Let it sit for 60-90 seconds but do not let it dry.</li>
                <li><strong className="text-white">Wipe gently</strong> — Use a clean, damp microfiber towel to wipe the area. The acid in vinegar dissolves the mineral deposits.</li>
                <li><strong className="text-white">Rinse and dry</strong> — Rinse with clean water and dry immediately with a separate microfiber towel.</li>
              </ol>
              <p className="text-slate-400 text-sm mt-4">⚠️ Do not use vinegar on freshly applied ceramic coatings, PPF, or vinyl wraps. The acid can degrade the protective layer.</p>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Method 2: Clay Bar Treatment (Type II Spots)</h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <p className="text-slate-300 mb-4">When vinegar doesn&apos;t cut it, the minerals have bonded to the clear coat. A clay bar physically lifts embedded contaminants.</p>
              <ol className="space-y-3 text-slate-300 list-decimal list-inside">
                <li><strong className="text-white">Wash and dry</strong> — Start with a freshly washed car.</li>
                <li><strong className="text-white">Spray clay lubricant</strong> — Work in 2x2 foot sections. Never clay a dry surface — it will scratch.</li>
                <li><strong className="text-white">Glide the clay bar</strong> — Move the clay bar back and forth (not in circles) with light pressure. You&apos;ll feel the rough spots become smooth as contaminants are pulled into the clay.</li>
                <li><strong className="text-white">Fold and inspect</strong> — Fold the clay to expose a clean surface regularly. When the clay bar turns dark, discard it.</li>
                <li><strong className="text-white">Follow with polish</strong> — Clay removes contaminants but can leave light marring. A finishing polish restores gloss.</li>
              </ol>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Method 3: Machine Polish (Type III — Etched Spots)</h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Etched water spots require removing a thin layer of clear coat to level the surface. This is where most DIYers should consider professional help.</p>
              <ol className="space-y-3 text-slate-300 list-decimal list-inside">
                <li><strong className="text-white">Assess the damage</strong> — Run your fingernail across the spot. If you can feel an indentation, it&apos;s etched.</li>
                <li><strong className="text-white">Start with a light compound</strong> — Apply a medium-cut compound with a dual-action polisher on a microfiber cutting pad.</li>
                <li><strong className="text-white">Work in small sections</strong> — 2x2 foot areas at medium speed. Let the compound do the work — don&apos;t apply heavy pressure.</li>
                <li><strong className="text-white">Follow with finishing polish</strong> — After the etching is leveled, restore clarity and gloss with a fine polish.</li>
                <li><strong className="text-white">Protect the surface</strong> — Apply wax, sealant, or ceramic coating to prevent future water spots from bonding.</li>
              </ol>
              <p className="text-slate-400 text-sm mt-4">⚠️ If etching is deep enough that compounding doesn&apos;t fully remove it, the clear coat may be too thin for further correction. A professional can measure clear coat thickness before proceeding.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How to Prevent Water Spots</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Dry your car after every wash</strong> — Water spots only form when water evaporates on the surface. Use a dedicated drying towel or air blower.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Apply ceramic coating or sealant</strong> — Hydrophobic coatings cause water to bead and sheet off rather than sitting on the paint. This dramatically reduces water spot formation.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Avoid sprinklers</strong> — Park away from lawn sprinklers. Sprinkler water is the #1 cause of severe water spots because it&apos;s hard water that sits for hours in direct sun.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Use filtered water for washing</strong> — A deionized water system (spot-free rinse) eliminates minerals from the final rinse. It&apos;s the single most effective prevention tool.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Don&apos;t wash in direct sunlight</strong> — Water evaporates faster in sun, leaving minerals behind before you can dry them. Wash in shade or during cooler hours.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Products That Work</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Dedicated water spot removers</strong> — Products like CarPro Spotless or Gtechniq W9 are formulated to dissolve mineral deposits without damaging coatings.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Clay bar kits</strong> — Chemical Guys or Meguiar&apos;s clay kits include the bar and lubricant. Synthetic clay mitts are reusable and easier for beginners.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Dual-action polisher</strong> — A DA polisher (Griots G9, Rupes LHR15) is much safer than a rotary for DIY use. It&apos;s nearly impossible to burn through paint with a DA.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Verdict</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The key to water spot removal is acting quickly. Fresh spots come off with a simple vinegar solution. Let them sit for a week in the sun, and you might need a machine polisher and professional help. Prevention — ceramic coating, proper drying, and avoiding sprinkler water — costs far less than correction.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              If your car already has stubborn etched spots you can&apos;t remove, a professional detailer with paint correction experience can restore the finish. It&apos;s typically $300-600 for a full correction — far less than repainting.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find Professional Detailers Near You</h3>
            <p className="text-slate-300 mb-6">Browse certified detailing professionals who specialize in paint correction, water spot removal, and ceramic coating application.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Detailing Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/ceramic-coating-maintenance-tips" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Ceramic Coating Maintenance Tips</p></Link>
              <Link href="/blog/how-to-remove-swirl-marks" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Remove Swirl Marks</p></Link>
              <Link href="/blog/detail-car-like-pro-at-home" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Detail Your Car Like a Pro at Home</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Water Spots</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Paint Correction</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Detailing</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Care</span>
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

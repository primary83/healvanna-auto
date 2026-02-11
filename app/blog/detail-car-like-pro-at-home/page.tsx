"use client";

import Link from "next/link";
import Image from "next/image";

export default function DetailCarLikeProAtHome() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">How to Detail Your Car Like a Pro at Home</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>13 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/detail-car-like-pro-at-home.png" alt="Overhead view of a home garage car detailing setup" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              A professional detail costs $200 to $500+. But with the right products, tools, and technique, you can achieve 90% of the same results in your own driveway. This is a step-by-step walkthrough of a full exterior and interior detail — the same process pros use, adapted for home use.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What You&apos;ll Need</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-bold mb-3">Exterior</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Two buckets + grit guards</li>
                    <li>• pH-neutral car wash soap</li>
                    <li>• Microfiber wash mitt</li>
                    <li>• Foam cannon (optional but recommended)</li>
                    <li>• Clay bar or clay mitt</li>
                    <li>• Iron remover spray</li>
                    <li>• Dual-action polisher (optional)</li>
                    <li>• Polishing compound + finishing polish</li>
                    <li>• Spray sealant or ceramic booster</li>
                    <li>• 6-8 clean microfiber towels</li>
                    <li>• Wheel cleaner + wheel brush</li>
                    <li>• Tire dressing</li>
                    <li>• Glass cleaner</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-3">Interior</h3>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>• Vacuum with attachments</li>
                    <li>• Interior cleaner (all-purpose)</li>
                    <li>• Leather cleaner + conditioner (if applicable)</li>
                    <li>• Interior detailing brushes</li>
                    <li>• Microfiber towels for interior</li>
                    <li>• Glass cleaner (interior-safe)</li>
                    <li>• UV protectant for dashboard/trim</li>
                    <li>• Carpet/upholstery cleaner</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-4"><strong>Total startup cost:</strong> $100 - $200 for products that will last 10+ details</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 1: Wheels First</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Always start with the dirtiest part of the car. Cleaning wheels last means splashing brake dust and road grime onto panels you already washed.</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div>Spray wheel cleaner on one wheel at a time. Let it dwell for 30-60 seconds (follow product instructions).</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div>Scrub the face, barrels, and lug nut holes with a dedicated wheel brush. Use a smaller brush for tight spoke areas.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div>Rinse thoroughly before moving to the next wheel.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">4.</span><div>Clean the tire sidewall with all-purpose cleaner and a stiff brush.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 2: Pre-Wash / Foam Soak</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">The pre-wash loosens dirt and debris before you physically touch the paint. This step prevents the majority of wash-induced scratches.</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div>Rinse the entire car with a strong stream of water to remove loose dirt.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div>If you have a foam cannon, apply a thick layer of snow foam and let it dwell for 3-5 minutes. The foam encapsulates dirt particles and lifts them off the paint.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div>Rinse off the foam completely before contact washing.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 3: Contact Wash (Two-Bucket Method)</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div><strong className="text-white">Bucket 1:</strong> Fill with water and car wash soap per dilution instructions. Drop in a grit guard.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div><strong className="text-white">Bucket 2:</strong> Fill with clean water only. Drop in a grit guard.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div>Load your wash mitt from the soap bucket. Wash one panel at a time, starting from the top (roof) and working down. Top panels are cleanest; bottom panels have the most road grime.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">4.</span><div>After each panel, rinse your mitt in the clean water bucket, agitate it against the grit guard to release trapped dirt, then reload from the soap bucket.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">5.</span><div>Use straight-line motions, not circles. This is safer for the paint and reduces swirl marks.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 4: Decontamination</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">After washing, your paint may still have embedded contaminants (iron particles, industrial fallout, tree sap) that washing can&apos;t remove. This step is optional for every wash but should be done every 3-6 months.</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div><strong className="text-white">Iron remover:</strong> Spray onto wet paint. Wait 2-3 minutes — you&apos;ll see purple/red bleeding as it dissolves iron particles. Rinse off.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div><strong className="text-white">Clay bar:</strong> Lubricate a small section with clay lube or soapy water. Gently glide the clay bar across the surface. You&apos;ll feel it grab contaminants — when it glides smoothly, that panel is clean.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div>Rinse and dry the car completely before the next step.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 5: Polish (Optional)</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Polishing removes light swirl marks and scratches from the clear coat, restoring a deep, reflective finish. This is where a dual-action polisher makes a huge difference over hand polishing.</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">For beginners:</strong> Use a dual-action (DA) polisher with a medium-cut polishing pad and an all-in-one polish. DA polishers are safe for beginners — they oscillate rather than spin, making it nearly impossible to burn through paint.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Technique:</strong> Apply 3-4 pea-sized dots of polish to the pad. Work a 2x2 foot section at a time at medium speed. Make 3-4 slow passes, then wipe off with a clean microfiber.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Skip if:</strong> Your car has ceramic coating (polishing removes it) or PPF (polishing damages the film).</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 6: Protect</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">After washing (and optionally polishing), apply protection to lock in the finish:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Spray sealant:</strong> The easiest option. Spray onto each panel after drying, wipe with a clean microfiber. Lasts 2-4 months. Cost: $12 - $25.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Ceramic booster:</strong> If you have an existing ceramic coating, use the manufacturer&apos;s recommended booster spray. Refreshes the hydrophobic layer.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Traditional wax:</strong> Apply with a foam applicator, let it haze, then buff off with a microfiber. More labor-intensive but provides a warm, deep glow. Lasts 1-3 months.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 7: Glass</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div>Use automotive glass cleaner (not household Windex — it contains ammonia that can damage tint).</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div>Spray onto a waffle-weave microfiber towel, not directly on the glass. This prevents overspray on freshly protected paint.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div>Wipe in straight lines, not circles. Use one side of the towel to clean, flip to the dry side to buff streak-free.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">4.</span><div>For the interior windshield, reach with a clean microfiber on an extension tool to avoid body oil and fingerprint smudges.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 8: Tires</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Apply tire dressing to clean, dry tire sidewalls. Use a foam applicator pad for even coverage. Choose a water-based dressing for a natural satin finish, or solvent-based for a high-gloss wet look. Apply thin coats — thick application slings product onto your paint when you drive.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 9: Interior</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div><strong className="text-white">Remove everything:</strong> Floor mats, trash, personal items. Shake out and vacuum the mats separately.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div><strong className="text-white">Vacuum thoroughly:</strong> Seats, carpets, between seats, door pockets, trunk. Use crevice tools for tight areas around the console and seat rails.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div><strong className="text-white">Wipe hard surfaces:</strong> Dashboard, center console, door panels, steering wheel — use an interior all-purpose cleaner with a microfiber. For textured surfaces, use a soft detailing brush to agitate dirt from the grain.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">4.</span><div><strong className="text-white">Leather care:</strong> Clean with a dedicated leather cleaner, then apply leather conditioner. This prevents cracking and keeps the leather supple.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">5.</span><div><strong className="text-white">UV protectant:</strong> Apply to the dashboard, door trim, and any plastic surfaces that receive direct sunlight. This prevents fading and cracking.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">6.</span><div><strong className="text-white">Interior glass:</strong> Clean all windows from the inside with ammonia-free glass cleaner.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              A full detail at home takes 2-4 hours the first time. Once you have a routine, maintenance washes take 30-45 minutes. The key is doing it consistently — a well-maintained car that&apos;s detailed monthly at home will look better than one that gets a professional detail twice a year.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Start with the basics (wash, dry, protect) and add steps like clay barring and polishing as you get comfortable. The results compound over time — each detail builds on the last.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Prefer to Leave It to the Pros?</h3>
            <p className="text-slate-300 mb-6">Find professional detailers near you who offer full exterior and interior detailing services at competitive prices.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Detailing Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/interior-detailing-checklist" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Interior Detailing Checklist</p></Link>
              <Link href="/blog/car-wash-soap-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Choose the Right Car Wash Soap</p></Link>
              <Link href="/blog/ceramic-coating-maintenance-tips" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Ceramic Coating Maintenance Tips</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Detailing</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">DIY</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Care</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Guides</span>
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

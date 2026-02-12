"use client";

import Link from "next/link";
import Image from "next/image";

export default function ClayBarGuide() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">How to Use a Clay Bar on Your Car: Complete Guide</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/clay-bar-guide.png" alt="Close-up of hands wearing black nitrile gloves gliding a clay bar across a glossy car surface" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              A clay bar is the single most overlooked step in car care. If your paint feels rough or gritty even after washing, it&apos;s covered in bonded contaminants that washing can&apos;t remove. Clay barring strips them away and leaves a glass-smooth surface ready for polish, sealant, or ceramic coating.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Does a Clay Bar Do?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Your car&apos;s paint accumulates bonded contaminants that embed into the clear coat. These include:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Industrial fallout</strong> — Microscopic metal particles from brakes, trains, and factories that rust and bond to paint</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Rail dust</strong> — Iron particles that embed in the clear coat and appear as tiny orange or brown specks</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Tree sap residue</strong> — Even after cleaning, sap leaves a bonded residue that alters the surface texture</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Overspray</strong> — Paint mist from nearby construction or road work that lands on your car</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Brake dust</strong> — Fine metallic particles from your own brakes that bond to paint, especially on wheels and lower panels</div></li>
              </ul>
              <p className="text-slate-400 text-sm mt-4">A clay bar is a soft, pliable engineered resin that gently shears these contaminants off the surface without scratching the paint. Think of it as an eraser for embedded grime.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Plastic Bag Test</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Not sure if your car needs claying? Use this simple test:</p>
              <ol className="space-y-3 text-slate-300 list-decimal list-inside">
                <li><strong className="text-white">Wash and dry your car</strong> — Start with a clean surface so you&apos;re feeling contaminants, not dirt.</li>
                <li><strong className="text-white">Place a thin plastic bag over your hand</strong> — A sandwich bag or produce bag works. The plastic amplifies texture differences.</li>
                <li><strong className="text-white">Lightly run your covered hand across the paint</strong> — If it feels rough, gritty, or bumpy, you have bonded contaminants.</li>
                <li><strong className="text-white">Compare horizontal vs vertical panels</strong> — Hoods, roofs, and trunks collect more fallout than doors and fenders.</li>
              </ol>
              <p className="text-slate-400 text-sm mt-4">If the surface feels smooth like glass, you don&apos;t need to clay. If it feels like fine sandpaper, clay barring will transform it.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Clay Bar Types Compared</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 pr-4 text-white font-semibold">Type</th>
                      <th className="text-left py-3 pr-4 text-white font-semibold">Aggressiveness</th>
                      <th className="text-left py-3 pr-4 text-white font-semibold">Reusable?</th>
                      <th className="text-left py-3 text-white font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Traditional clay bar</td><td className="py-3 pr-4">Fine to medium</td><td className="py-3 pr-4">Limited (discard if dropped)</td><td className="py-3">Best results, most control</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Clay mitt</td><td className="py-3 pr-4">Fine</td><td className="py-3 pr-4 text-emerald-400">Yes (rinse and reuse)</td><td className="py-3">Speed, large panels</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Clay towel</td><td className="py-3 pr-4">Fine to medium</td><td className="py-3 pr-4 text-emerald-400">Yes</td><td className="py-3">Convenience, beginners</td></tr>
                    <tr><td className="py-3 pr-4 font-medium text-white">Clay pad (DA)</td><td className="py-3 pr-4">Fine</td><td className="py-3 pr-4 text-emerald-400">Yes</td><td className="py-3">Professional speed with DA polisher</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-sm mt-4">For most car owners, a clay mitt or traditional clay bar are the best choices. Clay mitts are faster and harder to drop. Traditional bars give more control on heavily contaminated areas.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step-by-Step Clay Bar Process</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ol className="space-y-4 text-slate-300 list-decimal list-inside">
                <li><strong className="text-white">Wash the car thoroughly</strong> — Clay should only touch clean paint. Any loose dirt will get trapped in the clay and scratch the surface. A proper two-bucket wash or foam cannon pre-wash is ideal.</li>
                <li><strong className="text-white">Work one panel at a time</strong> — Spray clay lubricant generously on a 2×2 foot section. The surface must be slippery — never clay dry paint.</li>
                <li><strong className="text-white">Flatten the clay into a disc</strong> — Form it into a flat pad about 3 inches wide. This maximizes surface contact and efficiency.</li>
                <li><strong className="text-white">Glide the clay with light pressure</strong> — Move in straight back-and-forth motions (not circles). Let the clay do the work — pressing hard increases the risk of marring.</li>
                <li><strong className="text-white">Feel for smoothness</strong> — You&apos;ll feel the clay grabbing initially, then gliding smoothly once contaminants are removed. That&apos;s how you know the section is done.</li>
                <li><strong className="text-white">Fold and knead the clay</strong> — After each section, fold the clay to expose a clean surface. If the entire bar is contaminated, switch to a fresh piece.</li>
                <li><strong className="text-white">Wipe the panel dry</strong> — Use a clean microfiber towel to remove the lubricant residue before moving to the next section.</li>
                <li><strong className="text-white">Follow with protection</strong> — Clay strips any existing wax or sealant. You must apply wax, sealant, or ceramic coating after claying.</li>
              </ol>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Critical Mistakes to Avoid</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Dropping the clay bar</strong> — If a traditional clay bar touches the ground, throw it away immediately. It picks up grit and sand that will scratch your paint badly. This is the number one mistake.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Claying without enough lubricant</strong> — The surface must be slippery. If you hear any dragging or squeaking, add more lubricant immediately. Dry claying will leave marring.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Using circular motions</strong> — Straight lines are less likely to create swirl marks. Back and forth, not circles.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Claying in direct sunlight</strong> — Heat causes the lubricant to evaporate too quickly and can make the clay sticky. Work in shade or a garage.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Skipping protection afterward</strong> — Clay removes all existing protection. Leaving the paint bare after claying exposes it to contaminants faster than before.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Often Should You Clay?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 pr-4 text-white font-semibold">Situation</th>
                      <th className="text-left py-3 text-white font-semibold">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Garaged car, mostly highway</td><td className="py-3">Once a year</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Daily driver, outdoor parking</td><td className="py-3">2-3 times per year</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Near construction or industrial area</td><td className="py-3">3-4 times per year</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Before applying ceramic coating</td><td className="py-3 text-emerald-400">Always (required prep step)</td></tr>
                    <tr><td className="py-3 pr-4">Before applying wax or sealant</td><td className="py-3 text-emerald-400">Recommended for best results</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Clay Bar vs Iron Remover</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Iron removers (like IronX or CarPro Iron X) are chemical decontaminants that dissolve iron particles. They&apos;re complementary to clay, not a replacement:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Use iron remover first</strong> — Spray it on, wait for the purple/red bleeding reaction, then rinse. This removes the majority of iron contamination chemically.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Follow with clay</strong> — Clay removes everything else the iron remover can&apos;t dissolve — overspray, sap residue, and other bonded contaminants.</div></li>
              </ul>
              <p className="text-slate-400 text-sm mt-4">Using an iron remover before claying means the clay stays cleaner longer and you get a more thorough decontamination. Professional detailers always use both.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Clay barring is the bridge between washing and protecting. It takes a clean car and makes it truly clean — removing the invisible contamination layer that prevents waxes, sealants, and coatings from bonding properly to the paint.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              If you&apos;ve never clayed your car, run the plastic bag test. You&apos;ll be surprised how rough the paint feels. After claying, the difference is dramatic — the surface will feel like glass, and any protection you apply afterward will last significantly longer.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Professional Paint Correction</h3>
            <p className="text-slate-300 mb-6">For heavily contaminated paint or full decontamination before ceramic coating, find certified detailing professionals near you.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Detailing Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or find local providers in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/is-ppf-worth-it" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Is Paint Protection Film Worth It?</p></Link>
              <Link href="/blog/ceramic-coating-maintenance-tips" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Ceramic Coating Maintenance Tips</p></Link>
              <Link href="/blog/protect-car-paint-summer-heat" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Protect Paint in Summer Heat</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Clay Bar</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Paint Decontamination</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Detailing</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Paint Care</span>
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

"use client";

import Link from "next/link";
import Image from "next/image";

export default function LeatherRestorationClassicCars() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Guides</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Interior Leather Restoration: Bringing Classic Car Seats Back to Life</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>January 24, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>14 min read</span>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/leather-restoration-classic.png" alt="Classic car cognac leather interior being restored" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The leather interior of a classic car is often what transforms a vehicle from merely old to genuinely special. Whether you own a vintage Porsche 911, a classic Mercedes-Benz, or an American muscle car, understanding <strong className="text-emerald-400">leather restoration classic car</strong> techniques can help you preserve or revive that timeless elegance. This comprehensive guide covers <strong className="text-emerald-400">how to restore old car leather seats</strong>, from assessing damage to choosing between DIY and professional <strong className="text-emerald-400">vintage car interior repair</strong>.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Understanding Classic Car Leather</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Before diving into restoration techniques, it's important to understand that leather in classic cars is fundamentally different from modern automotive leather. Vintage vehicles typically used aniline or semi-aniline leather—natural hides with minimal surface coatings that develop a rich patina over time but are also more susceptible to damage.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Modern cars mostly use corrected-grain leather with heavy pigmented coatings that are more durable but lack the character of vintage hides. This distinction matters because restoration approaches differ significantly between these leather types.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Types of Leather Damage in Classic Cars</h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Drying and Cracking</strong> – The most common issue, caused by loss of natural oils over decades. Leather becomes stiff and develops surface cracks.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Fading and Discoloration</strong> – UV exposure causes pigments to break down, resulting in uneven color, especially on sun-exposed surfaces.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Wear and Abrasion</strong> – High-contact areas like seat bolsters show wear patterns, sometimes wearing through to the substrate.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Tears and Rips</strong> – Physical damage from use, improper storage, or accidents requires structural repair.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Mold and Mildew</strong> – Common in cars that have been stored improperly, leaving stains and odors.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Assessing Your Leather's Condition</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Before starting any restoration work, thoroughly assess your leather's condition to determine the appropriate approach:
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Level 1: Light Wear (Conditioning Only)</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Leather is intact with no cracks or tears, just slightly dry or faded. This is the easiest to address—proper cleaning and conditioning may be all that's needed to restore suppleness and revive the appearance.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Level 2: Moderate Damage (Repair and Recolor)</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Surface cracking, noticeable fading, or worn areas that haven't gone through the leather. These can often be repaired with fillers, sealers, and recoloring techniques without full reupholstery.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Level 3: Severe Damage (Professional Restoration)</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Deep cracks, tears, holes, or leather that's worn through completely. This level typically requires professional intervention and may involve partial or complete reupholstery with period-correct materials.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">DIY Leather Restoration Process</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              For Level 1 and some Level 2 damage, DIY restoration can achieve impressive results. Here's a comprehensive process for <strong className="text-emerald-400">how to restore old car leather seats</strong>:
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Step 1: Deep Cleaning</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Start with a thorough cleaning to remove decades of dirt, oils, and contaminants. Use a pH-balanced leather cleaner and a soft brush to work into the grain. For heavily soiled leather, you may need multiple cleaning passes. Allow the leather to dry completely before proceeding.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-3">Recommended Cleaning Products</h4>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• Lexol Leather Cleaner</li>
                <li>• Leather Masters Strong Cleaner</li>
                <li>• Colourlock Mild Leather Cleaner</li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Step 2: Surface Preparation</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Once clean and dry, lightly sand any rough areas or peeling finish with fine-grit sandpaper (600-800 grit). This creates a smooth surface for repairs and helps new products adhere properly. Wipe away all dust with a slightly damp cloth.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Step 3: Crack and Damage Repair</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              For surface cracks, apply a flexible leather filler in thin layers, allowing each layer to dry before adding the next. Build up gradually until the surface is level. For deeper damage, you may need to use a sub-patch beneath the filler for structural support.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Step 4: Sanding and Smoothing</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              After fillers have fully cured (usually 24 hours), sand smooth with progressively finer grits. The goal is a surface that's indistinguishable from the surrounding leather by touch.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Step 5: Recoloring (If Needed)</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              If color restoration is needed, apply leather colorant in thin, even coats using an airbrush or sponge. Multiple light coats produce better results than heavy application. Allow each coat to dry before adding the next. Color matching is critical—many suppliers can custom-match colors to your original leather.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Step 6: Sealing and Protection</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Apply a leather finish or sealer to protect your work. Choose a finish level (matte, satin, or gloss) that matches the original appearance of your leather. This sealer provides wear resistance and makes future cleaning easier.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Step 7: Conditioning</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Finally, apply a quality leather conditioner to restore suppleness and protect against future drying. For classic car leather, use conditioners without silicone or petroleum distillates that can damage vintage hides over time.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Professional Restoration Options</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              For severe damage or concours-level restorations, professional <strong className="text-emerald-400">vintage car interior repair</strong> specialists offer services beyond DIY capabilities:
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Full Leather Reconditioning</h4><p className="text-slate-400 text-sm">Professional cleaning, repair, and recoloring</p></div>
                  <span className="text-emerald-400 font-bold">$800 - $2,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Seat Reupholstery (Per Seat)</h4><p className="text-slate-400 text-sm">New leather covers, original patterns</p></div>
                  <span className="text-emerald-400 font-bold">$1,500 - $3,500</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Complete Interior Restoration</h4><p className="text-slate-400 text-sm">All leather surfaces, headliner, carpets</p></div>
                  <span className="text-emerald-400 font-bold">$8,000 - $25,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <div><h4 className="text-white font-semibold">Concours-Level Restoration</h4><p className="text-slate-400 text-sm">Period-correct materials, show quality</p></div>
                  <span className="text-emerald-400 font-bold">$25,000 - $50,000+</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Choosing Period-Correct Materials</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              For authentic restorations, using period-correct materials is essential. Specialists source or recreate leather that matches original specifications:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">Connolly leather</strong> – The original supplier for many British and European classics</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">Correct grain patterns</strong> – Each era and manufacturer had distinctive textures</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">Original color formulations</strong> – Period colors often differ from modern equivalents</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span><strong className="text-white">Authentic stitching</strong> – Thread color, stitch pattern, and technique matter for judged events</span></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Maintaining Restored Leather</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              After investing in restoration, proper maintenance preserves your work for years to come:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div><strong className="text-white">Regular Cleaning</strong> – Clean leather every 1-2 months with pH-balanced cleaner to prevent dirt buildup.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div><strong className="text-white">Condition Quarterly</strong> – Apply quality conditioner every 3-4 months to maintain suppleness.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div><strong className="text-white">UV Protection</strong> – Use window tinting or car covers to minimize sun exposure when parked.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">4.</span><div><strong className="text-white">Climate Control</strong> – Avoid extreme temperature and humidity fluctuations in storage.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">5.</span><div><strong className="text-white">Avoid Harsh Products</strong> – Never use household cleaners, alcohol, or petroleum-based products on vintage leather.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When to Restore vs. Preserve Patina</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              One philosophical question in classic car circles is whether to fully restore leather or preserve its aged patina. There's no universal right answer—it depends on your goals:
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Preserve patina</strong> if your car is a survivor-class vehicle where originality adds value, or if you appreciate the character that age brings. Focus on conditioning and stabilization rather than color restoration.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-white">Full restoration</strong> makes sense for driver-quality cars you want to enjoy, vehicles being prepared for concours judging, or leather that has deteriorated beyond the point where patina is charming.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-emerald-400">Leather restoration classic car</strong> work is both an art and a science. Whether you tackle the project yourself or entrust it to professionals, understanding the process helps you make informed decisions and appreciate the craftsmanship involved.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              A beautifully restored leather interior transforms the driving experience, connecting you to your classic car in a way that worn, damaged leather simply can't. With proper care and maintenance, your restored interior will provide decades more enjoyment while preserving an important piece of automotive history.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find Interior Restoration Specialists</h3>
            <p className="text-slate-300 mb-6">Connect with craftsmen who specialize in classic car leather restoration and interior work.</p>
            <Link href="/care" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Care Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Leather Restoration</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Classic Cars</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Interior Care</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">DIY Guide</span>
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

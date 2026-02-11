"use client";

import Link from "next/link";
import Image from "next/image";

export default function CarWashSoapGuide() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">How to Choose the Right Car Wash Soap: A Complete Guide</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/car-wash-soap-guide.png" alt="Professional car detailer applying foam to a dark sports car" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Not all car wash soaps are created equal. The wrong soap can strip your ceramic coating, degrade your wax, or leave water spots and residue. The right one keeps your paint protected and looking its best wash after wash. Here&apos;s how to choose the right product for your vehicle.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Why Soap Choice Matters</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">pH balance is everything</strong> — A pH-neutral soap (pH 6-8) cleans effectively without stripping protective layers. Acidic or alkaline soaps break down wax, sealants, and even ceramic coatings over time.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Lubrication prevents scratches</strong> — Good car soap creates a slick layer between your wash mitt and the paint. Cheap soaps with low lubricity cause micro-scratches with every wash.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Your protection dictates your soap</strong> — A ceramic-coated car needs different soap than an unprotected one. Using the wrong type can waste hundreds of dollars in protection.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Types of Car Wash Soap</h2>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">1. pH-Neutral Car Wash Soap</h3>
              <p className="text-slate-300 text-sm mb-3">The safest all-around option. Cleans dirt and grime without affecting any existing protection. This is what you should use for regular maintenance washes on any protected vehicle.</p>
              <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Best for:</strong> Ceramic-coated, PPF-protected, waxed, or wrapped vehicles</p>
              <p className="text-slate-400 text-sm"><strong>Cost:</strong> $10 - $20 | <strong>Popular brands:</strong> Chemical Guys Mr. Pink, Meguiar&apos;s Gold Class, Adams Car Shampoo</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">2. Strip Wash / Heavy-Duty Soap</h3>
              <p className="text-slate-300 text-sm mb-3">Designed to remove old wax, sealant, or contamination before applying new protection. Higher alkalinity cuts through existing layers. Only use when you&apos;re intentionally stripping the paint bare for reapplication.</p>
              <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Best for:</strong> Pre-coating prep, removing old wax before reapplication</p>
              <p className="text-slate-400 text-sm"><strong>Cost:</strong> $12 - $18 | <strong>Popular brands:</strong> Chemical Guys Clean Slate, Gyeon Bathe+</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">3. Waterless Wash</h3>
              <p className="text-slate-300 text-sm mb-3">A spray-on solution that encapsulates dirt particles so they can be safely wiped away without water. Perfect for light dust, bird droppings, or quick touch-ups between full washes.</p>
              <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Best for:</strong> Light dust, apartment dwellers without hose access, quick clean-ups</p>
              <p className="text-slate-400 text-sm"><strong>Cost:</strong> $12 - $25 | <strong>Popular brands:</strong> Optimum No Rinse (as waterless), Aero Cosmetics</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">4. Rinseless Wash</h3>
              <p className="text-slate-300 text-sm mb-3">Uses a single bucket of water with a concentrated solution. You dip your mitt, wash a panel, and dry — no rinsing needed. Uses 1-2 gallons instead of 50+. Increasingly popular with EV owners who wash in garages.</p>
              <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Best for:</strong> Water-restricted areas, garage washing, eco-conscious owners</p>
              <p className="text-slate-400 text-sm"><strong>Cost:</strong> $15 - $25 | <strong>Popular brands:</strong> Optimum No Rinse (ONR), McKee&apos;s N-914</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">5. Foam Cannon Soap</h3>
              <p className="text-slate-300 text-sm mb-3">High-suds formulas designed for foam cannons attached to pressure washers. The thick foam clings to the surface and loosens dirt before you touch the paint. This is the pre-wash step that prevents the most scratches.</p>
              <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Best for:</strong> Pre-wash foam soak, heavily soiled vehicles</p>
              <p className="text-slate-400 text-sm"><strong>Cost:</strong> $15 - $30 | <strong>Popular brands:</strong> Chemical Guys Honeydew Snow Foam, Adam&apos;s Mega Foam</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Choosing Soap Based on Your Protection</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300 text-sm">
                <li><strong className="text-white">Ceramic coated →</strong> pH-neutral only. Avoid anything with wax or gloss enhancers that can interfere with the coating&apos;s hydrophobic properties.</li>
                <li><strong className="text-white">PPF protected →</strong> pH-neutral with no abrasives. Harsh chemicals can cloud or yellow PPF over time.</li>
                <li><strong className="text-white">Vinyl wrapped →</strong> Wrap-specific cleaner or gentle pH-neutral soap. Avoid strong solvents that can lift edges.</li>
                <li><strong className="text-white">Waxed →</strong> pH-neutral to preserve the wax layer. Strip wash only when you&apos;re ready to reapply wax.</li>
                <li><strong className="text-white">No protection →</strong> Any quality car wash soap works. Consider a soap with added wax or sealant for temporary protection between washes.</li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Two-Bucket Wash Method</h2>
            <p className="text-slate-300 leading-relaxed mb-6">Regardless of which soap you choose, how you use it matters just as much:</p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div><strong className="text-white">Bucket 1 (wash):</strong> Fill with water and car wash soap per the product&apos;s dilution ratio.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div><strong className="text-white">Bucket 2 (rinse):</strong> Fill with clean water and a grit guard at the bottom.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div><strong className="text-white">Wash one panel</strong> with your mitt from the soap bucket, working top to bottom.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">4.</span><div><strong className="text-white">Rinse your mitt</strong> in the clean water bucket before reloading with soap. This keeps dirt out of your soap bucket.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">5.</span><div><strong className="text-white">Dry with a clean microfiber towel</strong> or use a forced-air dryer to prevent water spots.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What to Avoid</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Dish soap (Dawn, etc.)</strong> — Extremely alkaline. Strips wax, sealant, and ceramic coatings. Dries out rubber trim and seals.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Household cleaners</strong> — Windex, all-purpose sprays, and bathroom cleaners contain chemicals that damage clear coat and trim.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Laundry detergent</strong> — Contains brighteners and harsh surfactants that strip paint protection and leave residue.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Pressure washer alone</strong> — Water alone doesn&apos;t provide lubrication. Without soap, you&apos;re pushing dirt across the surface.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Car wash soap is the product you&apos;ll use most often on your vehicle. Choosing the right one for your protection type and using proper wash technique prevents the majority of swirl marks and paint damage that accumulate over a car&apos;s life.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              For most owners with any form of paint protection, a quality pH-neutral car wash soap is all you need. Save the strip wash for prep days, and consider a rinseless wash for quick maintenance between full washes.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Want Professional Results?</h3>
            <p className="text-slate-300 mb-6">Find professional detailing services that use premium products and techniques to keep your car looking its best.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Detailing Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/hand-wash-vs-automatic-car-wash" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Hand Wash vs Automatic Car Wash</p></Link>
              <Link href="/blog/interior-detailing-checklist" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Interior Detailing Checklist</p></Link>
              <Link href="/blog/ceramic-coating-cost-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Ceramic Coating Cost in 2026</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Wash</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Soap Guide</span>
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

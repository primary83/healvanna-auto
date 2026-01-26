"use client";

import Link from "next/link";
import Image from "next/image";

export default function CustomCarPaintJobs() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Custom Car Paint Jobs: Costs, Options, and What to Expect</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>January 26, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>13 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/custom-car-paint-jobs.png" alt="Custom painted sports car with metallic finish in a professional paint booth" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              A <strong className="text-emerald-400">custom car paint job</strong> transforms your vehicle into a one-of-a-kind machine. Whether you&apos;re restoring a classic, personalizing a daily driver, or building a show car, understanding <strong className="text-emerald-400">how much a custom paint job costs</strong> and what the process involves helps you set the right expectations and budget.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Types of Custom Paint Jobs</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Single-Stage Paint</h4>
                  <p className="text-slate-400 text-sm">Color and gloss in one layer. Simple, affordable, but less durable without a separate clear coat. Common for budget repaints and classic cars.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Basecoat / Clearcoat</h4>
                  <p className="text-slate-400 text-sm">Industry standard. Color is applied first, then protected with clear coat layers for gloss, depth, and UV protection.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Metallic & Pearl</h4>
                  <p className="text-slate-400 text-sm">Aluminum flakes (metallic) or mica particles (pearl) mixed into the base create a shimmering, multi-dimensional finish that changes in different lighting.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Color-Shift / Chameleon</h4>
                  <p className="text-slate-400 text-sm">Special pigments that change color depending on the viewing angle. Head-turning but expensive — the paint alone can cost $300+ per quart.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Candy Paint</h4>
                  <p className="text-slate-400 text-sm">A translucent color layer over a metallic base creates deep, rich, jewel-like colors. Popular in custom and lowrider culture. Requires expert application.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Custom Airbrush / Graphics</h4>
                  <p className="text-slate-400 text-sm">Hand-painted artwork, flames, murals, or graphics. The pinnacle of custom paint — completely unique to your vehicle.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Custom Paint Job Cost Breakdown</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Basic Repaint (single color)</h4><p className="text-slate-400 text-sm">Standard prep, single-stage or base/clear, common color</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$1,000 - $3,500</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">High-Quality Repaint</h4><p className="text-slate-400 text-sm">Thorough prep, premium paint, base/clear, metallic options</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$3,500 - $7,000</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Show-Quality Paint Job</h4><p className="text-slate-400 text-sm">Complete strip, bodywork, multiple coats, wet sand, buff</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$7,000 - $15,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <div><h4 className="text-white font-semibold">Custom Art / Full Custom</h4><p className="text-slate-400 text-sm">Airbrush artwork, multi-color, candy, color-shift</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$15,000 - $30,000+</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Affects the Price</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Vehicle size</strong> — A compact car requires less paint and labor than a full-size truck or SUV.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Color complexity</strong> — Solid colors cost less than metallics, pearls, and color-shift paints.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Paint quality</strong> — Premium paint brands (PPG, BASF, Axalta) cost more but offer better coverage, durability, and color accuracy.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Prep work needed</strong> — Rust repair, dent removal, and old paint stripping add significant cost.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Number of coats</strong> — More base and clear coat layers means better depth and durability but more labor and material.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Disassembly level</strong> — Removing trim, lights, bumpers, and hardware for a clean finish adds labor cost but produces superior results.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Custom Paint Process</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div><strong className="text-white">Disassembly</strong> — Trim, lights, bumpers, mirrors, and hardware are removed for clean paint edges.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div><strong className="text-white">Prep & Sanding</strong> — Old paint is sanded, rust is treated, and dents are repaired. The surface is made perfectly smooth.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div><strong className="text-white">Primer</strong> — Primer is applied and sanded smooth, creating the foundation for the color coat.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">4.</span><div><strong className="text-white">Base Coat</strong> — The color is applied in multiple thin, even layers in a climate-controlled paint booth.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">5.</span><div><strong className="text-white">Clear Coat</strong> — Multiple clear coat layers are applied for protection, depth, and gloss.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">6.</span><div><strong className="text-white">Wet Sand & Buff</strong> — After curing, the paint is wet-sanded and machine buffed to remove orange peel and achieve a mirror finish.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">7.</span><div><strong className="text-white">Reassembly</strong> — All parts are reinstalled and the vehicle is final-inspected.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Long Does a Custom Paint Job Take?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Timeline varies dramatically based on complexity. A basic repaint can be completed in 3-5 days. A high-quality job with thorough prep takes 1-2 weeks. Show-quality and custom artwork paint jobs can take 3-6 weeks or longer. Rush jobs compromise quality — a good paint shop will give you an honest timeline and stick to it.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Protecting Your Custom Paint Job</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              After investing in <strong className="text-emerald-400">custom auto paint</strong>, protect it properly:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Ceramic coating</strong> — Apply a professional ceramic coating to add UV protection, chemical resistance, and hydrophobic properties.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Paint protection film (PPF)</strong> — Apply clear film to high-impact areas like the front bumper, hood, and fenders.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Proper washing</strong> — Hand wash only using the two-bucket method. Never use automatic car washes.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Garage parking</strong> — UV exposure is the biggest enemy of paint longevity. Park indoors whenever possible.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              A <strong className="text-emerald-400">custom car paint job</strong> is a significant investment that transforms your vehicle&apos;s identity. Whether you&apos;re doing a clean factory-color respray or going all-out with a show-quality custom finish, the results are only as good as the shop you choose. Look for a facility with a proper paint booth, experienced painters, a strong portfolio, and a willingness to discuss every detail of the process.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Take the time to get it right — a quality custom paint job will bring you joy every time you see your car for years to come.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find a Custom Paint Specialist</h3>
            <p className="text-slate-300 mb-6">Browse our network of verified auto paint shops specializing in custom and factory-quality paint work.</p>
            <Link href="/auto-painting" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Auto Painting Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Custom Paint</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Auto Painting</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Customization</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Paint Jobs</span>
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

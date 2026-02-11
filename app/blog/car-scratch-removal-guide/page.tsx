"use client";

import Link from "next/link";
import Image from "next/image";

export default function CarScratchRemovalGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Guides</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              How to Remove Scratches from Your Car: DIY vs Professional
            </h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/car-scratch-removal-guide.png" alt="Professional detailer using a dual-action polisher to remove scratches from a car hood" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Scratches happen to every car — parking lot dings, shopping cart hits, branch scrapes, even careless car washes. The good news is that many scratches can be removed or significantly reduced. The key is understanding what type of scratch you&apos;re dealing with and whether it&apos;s a DIY fix or one that needs professional attention.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Understanding Your Car&apos;s Paint Layers</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Modern car paint has multiple layers. Where the scratch stops determines how it should be treated:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">1.</span>
                  <div><strong className="text-white">Clear coat (top layer)</strong> — Most scratches live here. These are surface-level and the easiest to fix. If water or polish makes the scratch disappear temporarily, it&apos;s clear coat only.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">2.</span>
                  <div><strong className="text-white">Base coat / color layer</strong> — If you can see a different color beneath the scratch (white on a black car, for example), it&apos;s gone through the clear coat into the paint. Polishing alone won&apos;t fix this.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">3.</span>
                  <div><strong className="text-white">Primer</strong> — Gray or dull-colored layer visible in the scratch. The paint is gone completely in that spot and needs professional repair.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">4.</span>
                  <div><strong className="text-white">Bare metal</strong> — Silver/metallic visible in the scratch. This needs immediate attention to prevent rust, especially on non-aluminum body panels.</div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">DIY Scratch Removal Methods</h2>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">For Light Clear Coat Scratches</h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h4 className="text-emerald-400 font-semibold mb-3">Method 1: Scratch Remover Compound</h4>
              <p className="text-slate-300 text-sm mb-3">Products like Meguiar&apos;s ScratchX, Chemical Guys VSS, or 3M Scratch Remover contain fine abrasives that level the clear coat around the scratch, making it disappear.</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>1. Wash and dry the area thoroughly</li>
                <li>2. Apply a small amount of compound to a microfiber applicator pad</li>
                <li>3. Work in small circular motions over the scratch for 30-60 seconds</li>
                <li>4. Wipe off with a clean microfiber towel</li>
                <li>5. Repeat if needed, then apply wax or sealant to protect the area</li>
              </ul>
              <p className="text-slate-400 text-sm mt-3"><strong>Cost:</strong> $10 - $25 | <strong>Difficulty:</strong> Easy | <strong>Best for:</strong> Light swirl marks and hairline scratches</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h4 className="text-emerald-400 font-semibold mb-3">Method 2: Polishing with a Dual-Action Polisher</h4>
              <p className="text-slate-300 text-sm mb-3">A DA polisher with a medium-cut polish removes deeper clear coat scratches more effectively than hand application. This is what professionals use for paint correction.</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>1. Wash, clay bar, and dry the surface</li>
                <li>2. Apply polish to a foam cutting pad on the DA polisher</li>
                <li>3. Work in 2x2 foot sections at medium speed</li>
                <li>4. Wipe residue and inspect under direct light</li>
                <li>5. Follow with a finishing polish and sealant</li>
              </ul>
              <p className="text-slate-400 text-sm mt-3"><strong>Cost:</strong> $150 - $300 (polisher + pads + polish) | <strong>Difficulty:</strong> Moderate | <strong>Best for:</strong> Swirl marks, water spots, moderate scratches</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-emerald-400 font-semibold mb-3">Method 3: Touch-Up Paint Pen</h4>
              <p className="text-slate-300 text-sm mb-3">For scratches that go through the clear coat into the color layer, a color-matched touch-up paint pen fills the scratch. It won&apos;t be invisible, but it prevents rust and makes the scratch far less noticeable.</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>1. Clean the scratch with rubbing alcohol</li>
                <li>2. Apply touch-up paint in thin layers, letting each dry</li>
                <li>3. Once level with the surface, wet sand with 2000-grit sandpaper (optional)</li>
                <li>4. Polish the area to blend</li>
              </ul>
              <p className="text-slate-400 text-sm mt-3"><strong>Cost:</strong> $15 - $40 | <strong>Difficulty:</strong> Moderate | <strong>Best for:</strong> Deep scratches showing primer or color layer</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When to Go Professional</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Scratches down to metal</strong> — These need professional wet sanding, primer, paint, and clear coat to repair properly and prevent rust.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Large panels with heavy scratching</strong> — If an entire panel is scratched (keying damage, for example), a professional repaint is the only clean solution.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Multi-stage paint correction</strong> — If you want the entire car swirl-free and showroom-perfect, a professional detailer with proper lighting, tools, and experience will deliver results that DIY can&apos;t match.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Before ceramic coating or PPF</strong> — If you&apos;re planning to apply paint protection, get professional paint correction first. Coating over scratches locks them in permanently.</div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Professional Scratch Repair Costs</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300 text-sm">
                <li><strong className="text-white">Light scratch buffing (per panel):</strong> $50 - $150</li>
                <li><strong className="text-white">Single-stage paint correction (full car):</strong> $300 - $600</li>
                <li><strong className="text-white">Two-stage paint correction (full car):</strong> $500 - $1,000</li>
                <li><strong className="text-white">Deep scratch repair with touch-up (per scratch):</strong> $75 - $200</li>
                <li><strong className="text-white">Panel repaint (body shop):</strong> $300 - $1,000+ per panel</li>
                <li><strong className="text-white">Full car repaint:</strong> $3,000 - $10,000+ depending on quality</li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How to Prevent Scratches</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Apply PPF to high-impact areas</strong> — Hood, bumper, fenders, and mirrors. PPF absorbs rock chips and minor scratches before they reach the paint.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Use ceramic coating</strong> — While it won&apos;t stop deep scratches, ceramic coating adds a sacrificial layer that resists light scratches and swirl marks.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Hand wash only</strong> — Automatic car washes with spinning brushes are the #1 cause of swirl marks. Use the two-bucket method at home.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Park smart</strong> — Farther spots in parking lots mean fewer door dings. End spots with one open side reduce risk by half.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Use quality microfiber towels</strong> — Cheap towels or old rags leave micro-scratches. Invest in plush, high-GSM microfiber towels and wash them separately.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Most light scratches are clear coat deep and can be handled at home with a good scratch remover or a DA polisher. For anything deeper — especially scratches showing primer or bare metal — professional repair is worth the investment to prevent rust and maintain your car&apos;s value.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              The best strategy is prevention: protect your paint with PPF and ceramic coating, wash carefully, and address scratches promptly before they worsen.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Need Professional Scratch Removal?</h3>
            <p className="text-slate-300 mb-6">Find paint correction and detailing specialists who can restore your car&apos;s finish to like-new condition.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Detailing Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          {/* Related */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/how-to-remove-swirl-marks" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Remove Swirl Marks</p></Link>
              <Link href="/blog/paint-correction-black-cars" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Paint Correction for Black Cars</p></Link>
              <Link href="/blog/ppf-vs-ceramic-coating" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">PPF vs Ceramic Coating</p></Link>
            </div>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Scratch Removal</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Paint Correction</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">DIY</span>
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

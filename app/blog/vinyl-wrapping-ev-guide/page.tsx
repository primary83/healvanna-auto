"use client";

import Link from "next/link";
import Image from "next/image";

export default function VinylWrappingEVGuide() {
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
              The Complete Guide to Vinyl Wrapping Your Electric Vehicle
            </h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>13 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/vinyl-wrapping-ev-guide.png" alt="Professional vinyl wrap installation on an electric vehicle in a wrap studio" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Vinyl wrapping has become one of the most popular ways for EV owners to customize their vehicles. Whether you want to change your car&apos;s color, protect the factory paint, or create a completely unique look, a quality wrap delivers on all three. Here&apos;s everything you need to know about wrapping your electric vehicle in 2026.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Why EV Owners Love Vinyl Wraps</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Color options are limited from the factory</strong> — Most EV manufacturers offer 5-7 colors. Tesla famously charges $1,000-$2,000 for anything beyond white. A wrap gives you access to hundreds of colors and finishes for a similar price.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Reversible customization</strong> — Unlike a repaint, a wrap can be removed in 3-5 years with the original paint untouched underneath. This is ideal for leased EVs or owners who like to change things up.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Paint protection</strong> — The vinyl layer shields the factory paint from UV rays, minor scratches, bird droppings, and road debris. When removed, the paint underneath looks like it did the day the wrap went on.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Resale value preservation</strong> — A wrapped EV with pristine original paint underneath can command a higher resale price than one with worn or damaged factory paint.</div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Types of Vinyl Wrap Finishes</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Popular Finishes</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li><strong className="text-white">Gloss</strong> — Mirror-like shine, looks like a factory paint job</li>
                    <li><strong className="text-white">Matte</strong> — Flat, non-reflective finish. Extremely popular on EVs, especially black and gray</li>
                    <li><strong className="text-white">Satin</strong> — Between gloss and matte. Subtle sheen that catches light beautifully</li>
                    <li><strong className="text-white">Metallic</strong> — Contains metallic flakes for depth and sparkle</li>
                    <li><strong className="text-white">Chrome</strong> — Full mirror finish. Eye-catching but may not be legal in all areas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Specialty Finishes</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li><strong className="text-white">Color shift</strong> — Changes color depending on viewing angle</li>
                    <li><strong className="text-white">Brushed metal</strong> — Mimics brushed aluminum or steel texture</li>
                    <li><strong className="text-white">Carbon fiber</strong> — Textured pattern for accents or full body</li>
                    <li><strong className="text-white">Forged carbon</strong> — Irregular carbon pattern, popular on performance EVs</li>
                    <li><strong className="text-white">Printed/custom</strong> — Custom graphics, logos, or artistic designs</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Much Does It Cost?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300 text-sm">
                <li><strong className="text-white">Partial wrap (roof, mirrors, trim):</strong> $500 - $1,500</li>
                <li><strong className="text-white">Full wrap — standard color (gloss/matte):</strong> $2,500 - $4,500</li>
                <li><strong className="text-white">Full wrap — premium color (satin/metallic):</strong> $3,500 - $6,000</li>
                <li><strong className="text-white">Full wrap — specialty (color shift, chrome):</strong> $5,000 - $8,000+</li>
                <li><strong className="text-white">Printed/custom design wrap:</strong> $4,000 - $10,000+</li>
              </ul>
              <p className="text-slate-400 text-sm mt-4">Prices vary by vehicle size, complexity of body lines, and your market. SUVs and trucks cost more than sedans due to surface area.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">EV-Specific Wrapping Considerations</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">1.</span>
                  <div><strong className="text-white">Flush door handles</strong> — Many EVs (Tesla, Rivian, Polestar) have retractable or flush-mounted door handles. Wrapping around these requires precision and experience. Ask if the installer has worked with your specific car.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">2.</span>
                  <div><strong className="text-white">Camera and sensor areas</strong> — Autopilot cameras, parking sensors, and surround-view cameras need to remain uncovered. A skilled installer knows where these are on your specific model.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">3.</span>
                  <div><strong className="text-white">Charging port door</strong> — The charge port area gets opened frequently and is exposed to heat from charging. Quality installation ensures the wrap around this area holds up over time.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">4.</span>
                  <div><strong className="text-white">Thinner factory paint</strong> — Some EVs (especially early Teslas) have thinner paint that&apos;s more susceptible to damage during wrap removal if done incorrectly. This makes choosing a skilled installer even more important.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">5.</span>
                  <div><strong className="text-white">Glass roof</strong> — If your EV has a panoramic glass roof, the wrap stops at the roof trim. Some owners add a contrasting color on the pillars or a gloss black roof trim wrap to complement the glass.</div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Wrapping Process</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">1.</span>
                  <div><strong className="text-white">Deep clean and decontamination</strong> — The car is thoroughly washed, clay barred, and wiped with isopropyl alcohol to remove any contaminants. Any wax, sealant, or ceramic coating may need to be removed for proper adhesion.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">2.</span>
                  <div><strong className="text-white">Disassembly</strong> — Badges, trim pieces, door handles, mirrors, and other components are removed for a clean wrap that tucks behind edges rather than cutting on the body.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">3.</span>
                  <div><strong className="text-white">Film application</strong> — Vinyl is applied panel by panel using squeegees and heat guns. Heat makes the vinyl conformable around curves and recesses. Skill here determines whether the wrap looks professional or amateur.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">4.</span>
                  <div><strong className="text-white">Post-heating</strong> — After application, all edges and curves are re-heated to ensure the vinyl&apos;s memory is set. This prevents lifting and shrinking over time.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">5.</span>
                  <div><strong className="text-white">Reassembly and inspection</strong> — Components are reinstalled and the entire wrap is inspected under bright light for bubbles, lifting, or alignment issues.</div>
                </li>
              </ul>
              <p className="text-slate-400 text-sm mt-4">Timeline: A full wrap typically takes 3-5 days. Rushed jobs lead to poor results.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How to Maintain Your Wrap</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Hand wash only</strong> — Automatic car washes can lift edges and scratch the film. Use a gentle car soap and microfiber mitt.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Avoid wax on matte/satin wraps</strong> — Traditional wax adds shine to matte finishes, ruining the effect. Use wrap-specific cleaners from brands like Avery or 3M.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Remove bird droppings and bugs quickly</strong> — Acidic contaminants can stain vinyl if left on too long, especially on lighter colors.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Park in shade when possible</strong> — Prolonged UV exposure degrades vinyl faster. Garage-kept wraps last significantly longer.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Ceramic coat over the wrap</strong> — A ceramic coating applied over the vinyl adds hydrophobic protection, makes cleaning easier, and extends the wrap&apos;s lifespan.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Choosing an Installer</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Check their EV portfolio</strong> — Ask for before-and-after photos of EVs they&apos;ve wrapped, specifically your make and model if possible.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Ask about removal technique</strong> — They should be confident in removing wraps cleanly from thinner EV paint without damage.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Verify the film brand</strong> — Reputable shops use 3M 2080, Avery Dennison Supreme, or KPMF premium vinyl. Cheap film from unknown brands fails faster and is harder to remove.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Get a written warranty</strong> — Quality shops warranty against peeling, bubbling, and premature failure for 1-3 years.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              A vinyl wrap is one of the most transformative things you can do to your EV. It changes the look completely, protects the factory paint, and is fully reversible when you&apos;re ready for a change. The key is choosing quality film, a skilled installer with EV experience, and maintaining the wrap properly.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              For maximum protection, consider combining a wrap with ceramic coating on top and PPF on high-impact areas that the wrap alone may not fully protect — like the leading edge of the hood and front bumper.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find a Vehicle Wrap Specialist</h3>
            <p className="text-slate-300 mb-6">Connect with professional wrap shops experienced with electric vehicles in your area.</p>
            <Link href="/car-wrapping" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Wrapping Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          {/* Related */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/vinyl-wrap-care-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Vinyl Wrap Care Guide</p></Link>
              <Link href="/blog/car-wrap-vs-paint" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Car Wrap vs Paint: Which Is Better?</p></Link>
              <Link href="/blog/ev-paint-protection-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Protect Your EV&apos;s Paint</p></Link>
            </div>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Vinyl Wrap</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Customization</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Wrapping</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Paint Protection</span>
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

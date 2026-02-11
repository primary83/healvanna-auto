"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVWindowTintingGuide() {
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
              How to Choose the Right Tint for Your EV: Complete Window Tinting Guide
            </h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>12 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ev-window-tinting-guide.png" alt="Professional window tinting being applied to a Tesla in a tinting studio" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Window tinting is one of the most popular modifications for electric vehicles — and for good reason. Beyond aesthetics, the right tint reduces cabin heat, protects your interior from UV damage, increases privacy, and can even improve your EV&apos;s range by reducing air conditioning load. Here&apos;s everything you need to know about choosing tint for your electric vehicle.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Why Window Tinting Matters More for EVs</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Range preservation</strong> — Air conditioning is one of the biggest battery drains in hot weather. Quality ceramic tint can reduce cabin temperature by 15-25°F, meaning less A/C usage and more range. Some owners report 5-8% range improvement in summer months.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Glass roof protection</strong> — Many EVs (Tesla, Polestar, Rivian) have large glass roofs that let in significant heat and UV. Tinting the roof glass is nearly essential in sunny climates.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Interior preservation</strong> — UV rays fade and crack leather, vegan leather, and dashboard surfaces. Quality tint blocks 99% of UV radiation, extending the life of your interior.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Screen visibility</strong> — EVs rely on large touchscreens. Tint reduces glare on the display, making it easier to read in direct sunlight.</div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Types of Window Tint</h2>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">1. Ceramic Tint (Recommended for EVs)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-300 text-sm mb-3">Uses nano-ceramic particles to block infrared heat without relying on metals or dyes. It&apos;s the best option for EVs because it doesn&apos;t interfere with GPS, cellular, Bluetooth, or key fob signals.</p>
                  <p className="text-emerald-400 text-sm font-medium">Heat rejection: 50-80% | UV rejection: 99%</p>
                </div>
                <div>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Cost:</strong> $400 - $800 (full car)</p>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Durability:</strong> 10+ years, no fading or bubbling</p>
                  <p className="text-slate-300 text-sm"><strong className="text-white">Top brands:</strong> 3M Ceramic IR, XPEL XR Plus, Llumar IRX</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">2. Carbon Tint</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-300 text-sm mb-3">Uses carbon particles embedded in the film. Good heat rejection and a matte finish that complements modern EV styling. No signal interference.</p>
                  <p className="text-emerald-400 text-sm font-medium">Heat rejection: 40-60% | UV rejection: 99%</p>
                </div>
                <div>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Cost:</strong> $250 - $500 (full car)</p>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Durability:</strong> 5-10 years</p>
                  <p className="text-slate-300 text-sm"><strong className="text-white">Best for:</strong> Budget-conscious buyers who want good performance</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">3. Metallic Tint (Avoid for EVs)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-300 text-sm mb-3">Uses metallic particles for heat rejection. While effective at blocking heat, the metal content interferes with electronic signals — a serious problem for EVs that depend on connectivity.</p>
                  <p className="text-red-400 text-sm font-medium">Can block: GPS, cell signal, Bluetooth, key fob, toll transponders</p>
                </div>
                <div>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Cost:</strong> $200 - $400 (full car)</p>
                  <p className="text-slate-300 text-sm"><strong className="text-red-400">Not recommended for EVs</strong> — signal interference can affect navigation, phone connectivity, and keyless entry.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">4. Dyed Tint (Budget Option)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-300 text-sm mb-3">Uses dye layers to darken the glass. Cheapest option but provides minimal heat rejection. The dye fades to purple over time, especially in sunny climates.</p>
                  <p className="text-slate-400 text-sm font-medium">Heat rejection: 15-30% | UV rejection: 90-95%</p>
                </div>
                <div>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Cost:</strong> $100 - $250 (full car)</p>
                  <p className="text-slate-300 text-sm"><strong className="text-white">Durability:</strong> 2-5 years before fading</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Tint Darkness Levels (VLT)</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Visible Light Transmission (VLT) is the percentage of light that passes through the tint. Lower VLT = darker tint. Each state has different legal limits, so check your local laws before choosing.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300 text-sm">
                <li><strong className="text-white">70% VLT</strong> — Nearly clear. Blocks heat and UV without visible darkness. Legal everywhere. Popular for windshields.</li>
                <li><strong className="text-white">50% VLT</strong> — Light tint. Subtle darkening, good heat rejection. Legal in most states for front windows.</li>
                <li><strong className="text-white">35% VLT</strong> — Medium tint. Noticeable but not aggressive. Most popular choice for front side windows.</li>
                <li><strong className="text-white">20% VLT</strong> — Dark tint. Strong privacy. Common for rear windows. May not be legal for front windows in your state.</li>
                <li><strong className="text-white">5% VLT (&quot;Limo tint&quot;)</strong> — Very dark. Maximum privacy. Typically only legal for rear windows in select states.</li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">EV-Specific Tinting Considerations</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">1.</span>
                  <div><strong className="text-white">Glass roof tinting</strong> — If your EV has a panoramic glass roof, consider ceramic tint on it even if you don&apos;t tint other windows. The roof is the biggest source of heat gain and UV exposure.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">2.</span>
                  <div><strong className="text-white">Windshield tint strip or clear ceramic</strong> — A ceramic tint strip across the top of the windshield or a full clear ceramic film (70% VLT) blocks heat without affecting visibility or legality.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">3.</span>
                  <div><strong className="text-white">Camera and sensor windows</strong> — EVs with autopilot, driver-assist, or surround-view cameras need clear zones around those sensors. A good installer knows where to leave gaps.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">4.</span>
                  <div><strong className="text-white">Avoid metallic films</strong> — As mentioned above, metal-based tints can interfere with your EV&apos;s electronics. Always specify ceramic or carbon film.</div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How to Choose an Installer</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Ask about EV experience</strong> — Tinting curved glass roofs and working around sensors requires specific experience.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Request ceramic film specifically</strong> — Some shops will default to cheaper dyed or metallic film unless you ask.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Check the warranty</strong> — Quality ceramic tint should come with a lifetime warranty against bubbling, peeling, and fading.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Look at their portfolio</strong> — Ask for photos of previous EV tint jobs, especially if you have a glass-roof vehicle.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><div><strong className="text-white">Get multiple quotes</strong> — Prices for the same ceramic film can vary 30-50% between shops.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              For EV owners, ceramic window tint is one of the best upgrades you can make. It reduces heat, protects the interior, improves screen visibility, and can even extend your driving range. Avoid metallic films, invest in quality ceramic, and make sure your installer has experience with electric vehicles and their unique glass configurations.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Combined with <Link href="/blog/ev-paint-protection-guide" className="text-emerald-400 hover:underline">proper paint protection</Link>, window tinting completes the exterior protection package for your EV.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find a Window Tinting Specialist</h3>
            <p className="text-slate-300 mb-6">Connect with professional tinting shops that have experience working on electric vehicles in your area.</p>
            <Link href="/window-tinting" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Tinting Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          {/* Related */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/window-tinting-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Window Tinting Guide</p></Link>
              <Link href="/blog/ev-paint-protection-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Protect Your EV&apos;s Paint</p></Link>
              <Link href="/blog/ceramic-coating-cost-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Ceramic Coating Cost in 2026</p></Link>
            </div>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Window Tinting</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Upgrades</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Ceramic Tint</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Tesla</span>
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

"use client";

import Link from "next/link";
import Image from "next/image";

export default function ChooseCarWrapColor() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">How to Choose the Right Car Wrap Color</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/choose-car-wrap-color.png" alt="Luxury sports car in a professional wrap shop with vinyl color samples on the hood" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              A vinyl wrap lets you completely change your car&apos;s appearance without touching the factory paint. But with hundreds of colors, finishes, and textures available, choosing the right one can be overwhelming. Here&apos;s how to narrow it down and pick a wrap you&apos;ll actually love living with.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Wrap Finishes Explained</h2>
            <p className="text-slate-300 leading-relaxed mb-4">The finish affects the look as much as the color itself. The same blue in gloss, matte, and satin looks like three completely different cars.</p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Finish</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Look</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Maintenance</th>
                    <th className="text-left py-3 text-white font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Gloss</td><td className="py-3 pr-4">Mirror-like shine, looks like fresh paint</td><td className="py-3 pr-4">Shows swirls and dirt easily</td><td className="py-3">Bold, vibrant colors</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Matte</td><td className="py-3 pr-4">Flat, no reflection, stealth look</td><td className="py-3 pr-4">Hides minor imperfections</td><td className="py-3">Dark colors, luxury vehicles</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Satin</td><td className="py-3 pr-4">Between gloss and matte, soft sheen</td><td className="py-3 pr-4">Most forgiving day-to-day</td><td className="py-3">Most colors, everyday drivers</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Metallic</td><td className="py-3 pr-4">Sparkle and depth, eye-catching</td><td className="py-3 pr-4">Similar to gloss</td><td className="py-3">Show cars, statement colors</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Color shift</td><td className="py-3 pr-4">Changes color depending on angle</td><td className="py-3 pr-4">Moderate</td><td className="py-3">Unique builds, attention-getters</td></tr>
                  <tr><td className="py-3 pr-4 font-medium text-white">Carbon fiber</td><td className="py-3 pr-4">Textured weave pattern</td><td className="py-3 pr-4">Traps dirt in texture</td><td className="py-3">Accents, trim, roof wraps</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Popular Colors and What They Communicate</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Matte black</strong> — The most popular wrap color worldwide. Aggressive, stealthy, and looks good on nearly every body style. Hides minor imperfections but shows fingerprints and dust.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Satin dark grey</strong> — Subtle and sophisticated. The go-to for luxury cars and EVs. Less dramatic than matte black but more interesting than stock paint.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Gloss racing red</strong> — Attention-grabbing and energetic. Works best on sports cars and compact vehicles. Fades faster than darker colors under UV exposure.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Satin white</strong> — Clean, modern, and premium. Popular on Teslas and EVs. The satin finish prevents the &quot;appliance&quot; look that gloss white sometimes has.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Deep blue metallic</strong> — Professional during the day, dramatic under lights at night. One of the most versatile colors across all vehicle types.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Army/olive green</strong> — Military-inspired and trending heavily in 2025-2026. Works best on trucks, SUVs, and vehicles with angular body lines.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Color shift (purple/teal, gold/green)</strong> — Maximum visual impact. These wraps change color based on viewing angle and lighting. Best for builds meant to be seen.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Factors to Consider Before Choosing</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div><strong className="text-white">Your car&apos;s body lines</strong> — Cars with aggressive lines and creases look best in matte and satin finishes that emphasize those shapes. Smooth, rounded cars benefit from gloss and metallic finishes that reflect light across curves.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div><strong className="text-white">Your daily environment</strong> — Light-colored wraps hide dust and light scratches better. Dark matte wraps show every water spot and fingerprint. If you can&apos;t wash frequently, lighter satin colors are more forgiving.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div><strong className="text-white">Interior color matching</strong> — A bright green exterior with a tan interior creates visual conflict. Consider how the wrap color will look through the windows and against your dashboard and seats.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">4.</span><div><strong className="text-white">Resale considerations</strong> — The wrap is removable, so it doesn&apos;t permanently affect resale. However, if you plan to sell the car wrapped, neutral colors (black, grey, white) appeal to more buyers than neon green.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">5.</span><div><strong className="text-white">Trim and wheel coordination</strong> — Chrome trim looks best with certain colors; blacked-out trim pairs differently. Plan the full look — wheels, calipers, badges, and trim — not just the body color.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Much Does a Wrap Cost?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Vehicle Size</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Standard Colors</th>
                    <th className="text-left py-3 text-white font-semibold">Premium/Specialty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Compact/sedan</td><td className="py-3 pr-4">$2,500 - $3,500</td><td className="py-3">$3,500 - $5,000</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Mid-size SUV</td><td className="py-3 pr-4">$3,500 - $5,000</td><td className="py-3">$5,000 - $7,000</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Full-size truck/SUV</td><td className="py-3 pr-4">$4,500 - $6,000</td><td className="py-3">$6,000 - $8,500</td></tr>
                  <tr><td className="py-3 pr-4 font-medium text-white">Exotic/luxury</td><td className="py-3 pr-4">$5,000 - $7,000</td><td className="py-3">$7,000 - $12,000+</td></tr>
                </tbody>
              </table>
              <p className="text-slate-400 text-xs mt-4">*Color-shift, chrome, and printed wraps cost more due to material expense and installation complexity.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Top Wrap Brands</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">3M 2080 Series</strong> — Industry standard. Wide color selection, excellent conformability, and proven longevity. 3-5 year rated durability.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Avery Dennison Supreme Wrapping Film</strong> — Known for easy installation and bubble-free application. Slightly better color depth than 3M in some finishes.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">XPEL APEX</strong> — The newest premium option. Self-healing clear coat layer on top of the color film. More expensive but combines wrap and protection in one product.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Inozetek</strong> — The enthusiast favorite for unique and vibrant colors. Super gloss finishes that rival wet paint. Newer brand but rapidly gaining market share.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How to Preview Colors Before Committing</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Request physical samples</strong> — Most wrap shops have swatch books. Hold samples against your actual car in both sun and shade. Colors look dramatically different on a 3-inch sample versus a full panel.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Digital mockups</strong> — Many wrap shops and online tools let you see your car&apos;s model rendered in different wrap colors. Not perfectly accurate, but helpful for narrowing options.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Look at completed wraps on similar cars</strong> — Instagram and YouTube are full of wrap reveals. Search your car model + the color you&apos;re considering to see how it looks in real life.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Start with a partial wrap</strong> — If you&apos;re unsure about a bold color, wrap the roof, mirrors, and trim first. This gives you a feel for the color at a fraction of the cost.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Verdict</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The best wrap color is one you&apos;ll still love after the novelty wears off. Satin and matte finishes in darker tones (black, dark grey, navy, deep green) are the safest bets for long-term satisfaction. Bold colors and specialty finishes are exciting but require more commitment and maintenance.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Always see physical samples on your car before committing, and choose a reputable installer — the quality of the installation matters as much as the color itself. A poorly installed wrap in a great color still looks bad.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find Wrap Installers Near You</h3>
            <p className="text-slate-300 mb-6">Browse certified vinyl wrap installers and car customization shops in your area.</p>
            <Link href="/car-wrapping" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Wrapping Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/car-wrap-vs-paint" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Car Wrap vs Paint: Which Is Better?</p></Link>
              <Link href="/blog/vinyl-wrap-care-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Vinyl Wrap Care Guide</p></Link>
              <Link href="/blog/vinyl-wrapping-ev-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Vinyl Wrapping Your EV</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Vinyl Wrap</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Color</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Customization</span>
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

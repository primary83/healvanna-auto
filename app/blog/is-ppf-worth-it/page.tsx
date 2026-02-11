"use client";

import Link from "next/link";
import Image from "next/image";

export default function IsPPFWorthIt() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Is Paint Protection Film (PPF) Worth It? A Honest Breakdown</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/is-ppf-worth-it.png" alt="Luxury car hood with paint protection film being applied" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Paint Protection Film costs $1,500 to $7,000+ depending on coverage. That&apos;s a significant investment for a product most people can&apos;t even see once it&apos;s installed. So is it worth it? The answer depends entirely on your car, your driving habits, and how long you plan to keep it.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Is PPF?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Paint Protection Film is a clear, thermoplastic urethane film applied to the exterior painted surfaces of a car. It&apos;s typically 6-8 mils thick (about the thickness of two sheets of paper) and is designed to absorb physical impacts that would otherwise chip, scratch, or damage the paint underneath.</p>
              <p className="text-slate-300">Modern PPF is self-healing — light scratches and swirl marks in the film disappear with heat exposure (sunlight, warm water, or a heat gun). The film is optically clear when properly installed, meaning it&apos;s virtually invisible on the car.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What PPF Actually Protects Against</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Rock chips</strong> — The #1 reason people get PPF. Highway debris that would chip paint down to the primer is absorbed by the film instead.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Bug splatter and bird droppings</strong> — Acidic contaminants sit on the film instead of the paint. They can be wiped off without etching the clear coat.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Light scratches</strong> — The self-healing top coat repairs minor scratches from washing, fingernails, or light contact.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">UV damage</strong> — Premium PPF blocks UV rays that cause paint oxidation and fading over time.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Door dings (minor)</strong> — The film absorbs some impact from adjacent doors, preventing paint chipping at the contact point.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Deep dents or impacts</strong> — PPF is not armor. A shopping cart hit or significant door slam will still dent the metal underneath.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Key scratches (deep)</strong> — A determined key scratch will go through the film. The film sacrifices itself (easier to replace than repainting), but it won&apos;t stop deep vandalism.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Much Does PPF Cost?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Coverage Level</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">What&apos;s Covered</th>
                    <th className="text-left py-3 text-white font-semibold">Cost Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Partial front</td><td className="py-3 pr-4">Hood (partial), fenders, bumper, mirrors</td><td className="py-3">$1,500 - $2,500</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Full front</td><td className="py-3 pr-4">Full hood, full fenders, bumper, mirrors, headlights</td><td className="py-3">$2,500 - $4,000</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Full front + rockers</td><td className="py-3 pr-4">Full front + rocker panels, door edges, rear bumper</td><td className="py-3">$3,500 - $5,000</td></tr>
                  <tr><td className="py-3 pr-4 font-medium text-white">Full body</td><td className="py-3 pr-4">Every painted panel</td><td className="py-3">$5,000 - $8,000+</td></tr>
                </tbody>
              </table>
              <p className="text-slate-400 text-xs mt-4">*Prices vary by vehicle size, film brand (XPEL, SunTek, 3M), and installer. Luxury/exotic vehicles cost more due to complex body lines.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">PPF vs Ceramic Coating vs Wax</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Feature</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">PPF</th>
                    <th className="text-left py-3 pr-4 text-white font-semibold">Ceramic Coating</th>
                    <th className="text-left py-3 text-white font-semibold">Wax/Sealant</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Rock chip protection</td><td className="py-3 pr-4 text-emerald-400">Yes</td><td className="py-3 pr-4 text-red-400">No</td><td className="py-3 text-red-400">No</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Scratch resistance</td><td className="py-3 pr-4 text-emerald-400">High (self-healing)</td><td className="py-3 pr-4">Moderate</td><td className="py-3 text-red-400">Minimal</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Hydrophobic</td><td className="py-3 pr-4">Moderate</td><td className="py-3 pr-4 text-emerald-400">High</td><td className="py-3">Moderate</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">UV protection</td><td className="py-3 pr-4 text-emerald-400">Yes</td><td className="py-3 pr-4 text-emerald-400">Yes</td><td className="py-3">Limited</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Durability</td><td className="py-3 pr-4">5-10 years</td><td className="py-3 pr-4">2-7 years</td><td className="py-3">1-3 months</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Cost</td><td className="py-3 pr-4">$1,500 - $8,000</td><td className="py-3 pr-4">$500 - $2,000</td><td className="py-3">$10 - $50</td></tr>
                  <tr><td className="py-3 pr-4">Best for</td><td className="py-3 pr-4">Physical protection</td><td className="py-3 pr-4">Easy maintenance + gloss</td><td className="py-3">Budget protection</td></tr>
                </tbody>
              </table>
              <p className="text-slate-400 text-sm mt-4">Many owners combine PPF on high-impact areas (front end) with ceramic coating on the rest of the car. This gives you physical protection where you need it and easy maintenance everywhere else.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When PPF Is Worth It</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">New or recently repainted cars</strong> — PPF preserves factory paint in pristine condition. The best time to apply is immediately after purchase.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Highway commuters</strong> — If you drive 20,000+ miles a year on highways, your front end is taking constant rock chip damage. PPF pays for itself in avoided touch-ups and repaints.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Vehicles you plan to keep 5+ years</strong> — The longer you keep the car, the more value PPF provides by preventing cumulative damage.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Cars with expensive paint options</strong> — If you paid $2,000 - $5,000 for a special paint color, PPF protects that investment.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Resale-conscious owners</strong> — A car with a perfect, chip-free front end commands significantly more at resale. The PPF can be removed before sale to reveal flawless paint underneath.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When PPF May Not Be Worth It</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Older cars with existing damage</strong> — If the paint already has chips, scratches, and wear, PPF preserves imperfections. You&apos;d need paint correction first, adding to the total cost.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Leased vehicles (short-term)</strong> — On a 2-3 year lease, you likely won&apos;t recoup the PPF cost through damage prevention. However, some lease agreements charge for paint damage at return — do the math.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Low-mileage/garage-kept cars</strong> — If you drive under 5,000 miles a year and the car lives in a garage, the exposure to rock chips and environmental damage is minimal.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Budget vehicles</strong> — If the car is worth $15,000, spending $5,000 on full-body PPF doesn&apos;t make financial sense. A partial front kit ($1,500) could still be justified.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Choosing an Installer</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">PPF installation is almost entirely about the installer&apos;s skill. The same film installed poorly will bubble, peel, yellow, or look terrible. The same film installed by a skilled technician will be invisible.</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Look for certified installers</strong> — XPEL, SunTek, and 3M all have certified installer networks. Certification means the shop has been trained and meets quality standards.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Check their portfolio</strong> — Any good PPF installer will have before/after photos and can show you cars they&apos;ve wrapped. Look at edges, seams, and complex curves.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Ask about warranty</strong> — Premium films come with manufacturer warranties (XPEL Ultimate Plus: 10 years). Make sure the installer is authorized to offer the full warranty.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Avoid the cheapest quote</strong> — PPF installation that costs significantly less than competitors is cutting corners somewhere — cheaper film, less coverage, or rushed installation.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Verdict</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              PPF is worth it if you drive frequently, value your paint, and plan to keep the car long enough to benefit from the protection. A full front kit ($2,500 - $4,000) is the sweet spot for most owners — it covers the areas that take 90% of road damage.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Full-body coverage makes sense for luxury vehicles, special paint colors, or owners who want maximum protection. For everyone else, a front kit paired with ceramic coating on the rest of the car offers the best value combination.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find PPF Installers Near You</h3>
            <p className="text-slate-300 mb-6">Browse certified paint protection film installers and detailing professionals in your area.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Detailing Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/ev-paint-protection-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Protect Your EV&apos;s Paint</p></Link>
              <Link href="/blog/ceramic-coating-maintenance-tips" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Ceramic Coating Maintenance Tips</p></Link>
              <Link href="/blog/protect-car-parking-lot-damage" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Protect Your Car from Parking Lot Damage</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">PPF</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Paint Protection</span>
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

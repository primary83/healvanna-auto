"use client";

import Link from "next/link";
import Image from "next/image";

export default function CeramicCoatingMaintenanceTips() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Best Ceramic Coating Maintenance Tips: Make It Last 5+ Years</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ceramic-coating-maintenance-tips.png" alt="Professional detailer inspecting ceramic coated car with water beading" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              You spent $500 to $2,000 on a professional ceramic coating. Now what? A ceramic coating isn&apos;t a set-it-and-forget-it product. How you wash, maintain, and care for the coating determines whether it lasts 2 years or 7+. Here are the maintenance practices that actually matter.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Ceramic Coating Does (and Doesn&apos;t Do)</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Before diving into maintenance, it&apos;s important to set realistic expectations:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">It does:</strong> Provide a hydrophobic surface that repels water and contaminants, make washing easier, protect against UV damage, chemical stains, and light scratches, and add deep gloss.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">It doesn&apos;t:</strong> Make your car scratch-proof, eliminate the need to wash, prevent rock chips or dents, or last forever without maintenance.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The First 7 Days After Application</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">The curing period is critical. During the first week after application:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Do not wash the car</strong> — The coating needs time to fully bond to the paint. Water, soap, and agitation can disrupt the curing process.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Avoid rain if possible</strong> — Park in a garage or under cover. Water spots during curing can become embedded in the coating.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Don&apos;t park under trees</strong> — Sap, pollen, and bird droppings on an uncured coating can cause permanent marks.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">No wax or sealant</strong> — Adding products on top of an uncured coating prevents proper bonding and wastes the coating.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Washing a Ceramic Coated Car</h2>
            <p className="text-slate-300 leading-relaxed mb-6">Washing is the single most important maintenance factor. The coating makes washing easier, but the wrong technique will degrade it faster than anything else.</p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Use pH-Neutral Soap Only</h3>
              <p className="text-slate-300 text-sm">Acidic or alkaline soaps break down the SiO2 (silicon dioxide) layer over time. Always use a pH-neutral car wash soap with a pH between 6 and 8. Avoid dish soap, all-purpose cleaners, or strip wash formulas — these are designed to remove protection.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Two-Bucket Method or Rinseless Wash</h3>
              <p className="text-slate-300 text-sm">Even with a coating, dragging dirty wash mitts across the paint creates micro-scratches in the coating layer. Use the two-bucket method (wash bucket + rinse bucket with grit guards) or a rinseless wash like Optimum No Rinse. A foam cannon pre-wash loosens dirt before contact.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Wash Every 2 Weeks</h3>
              <p className="text-slate-300 text-sm">Contaminants like bird droppings, tree sap, bug splatter, and industrial fallout are acidic or alkaline. Leaving them on the coating for weeks breaks down the hydrophobic layer. A bi-weekly wash prevents buildup and keeps the coating performing at its best.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-white mb-3">Dry Properly</h3>
              <p className="text-slate-300 text-sm">Use a clean, high-quality microfiber drying towel or a forced-air blower. Never let the car air dry — even with a coating, mineral deposits in water can leave spots that etch into the surface over time. A drying aid spray adds lubrication and reduces towel friction.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Avoid These Common Mistakes</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Automatic car washes</strong> — Brushes and harsh chemicals strip the coating. Even touchless washes use highly alkaline or acidic solutions that degrade the hydrophobic layer.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Applying wax on top</strong> — Wax fills in the coating&apos;s nano-pores, reducing its hydrophobic properties and gloss. It doesn&apos;t add protection — it interferes with it.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Using abrasive compounds</strong> — Cutting compounds and polishes remove the coating. If you need to polish, you&apos;re essentially removing the coating from that area and it will need to be reapplied.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Ignoring bird droppings</strong> — Bird droppings are highly acidic (pH 3-4). Left on a coating for more than 24-48 hours, they can etch through the coating and into the clear coat. Remove them as soon as possible with a damp microfiber towel.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Skipping decontamination</strong> — Iron fallout, brake dust, and industrial particles embed in the coating over time. A quarterly decontamination wash removes them before they cause damage.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Maintenance Schedule</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 overflow-x-auto">
              <table className="w-full text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 pr-4 text-white font-semibold">Frequency</th>
                    <th className="text-left py-3 text-white font-semibold">Task</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Every 2 weeks</td><td className="py-3">Hand wash with pH-neutral soap using two-bucket method</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Monthly</td><td className="py-3">Apply ceramic coating booster/topper spray after wash</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Every 3 months</td><td className="py-3">Iron decontamination wash + clay bar if needed</td></tr>
                  <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Every 6 months</td><td className="py-3">Full decontamination + ceramic booster application</td></tr>
                  <tr><td className="py-3 pr-4 font-medium text-white">Annually</td><td className="py-3">Professional inspection — check for thin spots, reapply booster or top coat</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Ceramic Coating Booster Sprays</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Booster sprays are SiO2-based products that refresh the coating&apos;s hydrophobic properties between professional maintenance. They&apos;re the single best product you can use to extend your coating&apos;s life.</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">How to use:</strong> Spray onto a freshly washed and dried panel, then wipe with a clean microfiber towel. Takes 5-10 minutes for the whole car.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">When to use:</strong> Once a month, or whenever you notice water is no longer beading tightly on the surface.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Cost:</strong> $15 - $30 per bottle. One bottle typically lasts 3-4 applications on a sedan.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How to Tell If Your Coating Is Failing</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Water sheeting instead of beading</strong> — Fresh coatings create tight, round water beads. When water starts to sheet (spread flat), the hydrophobic layer is degrading.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Dirt sticking more easily</strong> — If your car gets dirty faster than it used to, the self-cleaning effect is diminishing.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Reduced gloss</strong> — The deep, wet-look gloss fading to a duller appearance indicates the top layers are wearing away.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Water spots that won&apos;t come off</strong> — If water spots are etching into the surface and can&apos;t be removed with a detail spray, the coating has thinned to the point where minerals are reaching the clear coat.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              A ceramic coating is an investment in your car&apos;s appearance and protection. The coating itself does the heavy lifting, but your maintenance habits determine how long it lasts and how well it performs.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              The formula is simple: wash every two weeks with pH-neutral soap, use a booster spray monthly, decontaminate quarterly, and remove bird droppings and sap immediately. Do this consistently and your coating will outlast its warranty by years.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Need Professional Coating Maintenance?</h3>
            <p className="text-slate-300 mb-6">Find certified detailers near you who specialize in ceramic coating application, inspection, and maintenance.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Detailing Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/ceramic-coating-cost-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Ceramic Coating Cost in 2026</p></Link>
              <Link href="/blog/car-wash-soap-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Choose the Right Car Wash Soap</p></Link>
              <Link href="/blog/ev-paint-protection-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Protect Your EV&apos;s Paint</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Ceramic Coating</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Maintenance</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Detailing</span>
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

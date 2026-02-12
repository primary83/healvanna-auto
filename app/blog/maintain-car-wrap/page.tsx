"use client";

import Link from "next/link";
import Image from "next/image";

export default function MaintainCarWrap() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">How to Maintain Your Car Wrap</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>10 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/maintain-car-wrap.png" alt="Luxury car with glossy vinyl wrap being gently cleaned by a technician with a soft microfiber towel" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              A quality vinyl wrap can last 5-7 years — or as little as 2 years if maintained poorly. The difference is almost entirely about how you wash, store, and protect the wrap. Here&apos;s everything you need to know to keep your wrap looking showroom-fresh for as long as possible.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Washing Your Wrap</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Proper washing is the single most important factor in wrap longevity:</p>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Hand wash only</strong> — Automatic car washes with brushes and high-pressure spinners can lift edges, scratch the film, and degrade the finish. Always hand wash.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Use wrap-safe soap</strong> — Standard car wash soaps with wax additives can leave residue that dulls matte and satin wraps. Use a pH-neutral soap without added wax or gloss enhancers.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Rinse first, then wash</strong> — Pre-rinse with low-pressure water to remove loose dirt and debris. Then wash with a soft microfiber mitt using straight-line motions, not circles.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Dry immediately</strong> — Use a clean, plush microfiber drying towel. Don&apos;t let water air-dry on the wrap — mineral deposits and water spots are harder to remove from vinyl than paint.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Never use a pressure washer above 1,200 PSI</strong> — High pressure can lift edges and force water under the film, causing bubbling and peeling. If you use a pressure washer, keep it below 1,200 PSI and at least 12 inches from the surface.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Cleaning Stubborn Contaminants</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 pr-4 text-white font-semibold">Contaminant</th>
                      <th className="text-left py-3 pr-4 text-white font-semibold">Removal Method</th>
                      <th className="text-left py-3 text-white font-semibold">What NOT to Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Bird droppings</td><td className="py-3 pr-4">Soak with warm soapy water, blot gently</td><td className="py-3 text-red-400">Don&apos;t scrub or use acidic cleaners</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Tree sap</td><td className="py-3 pr-4">Isopropyl alcohol (70%) on a microfiber</td><td className="py-3 text-red-400">Don&apos;t use nail polish remover or acetone</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Bug splatter</td><td className="py-3 pr-4">Soak with warm water, wipe with soft cloth</td><td className="py-3 text-red-400">Don&apos;t use abrasive bug removers</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4">Fuel spills</td><td className="py-3 pr-4">Wipe immediately with damp cloth, then soap wash</td><td className="py-3 text-red-400">Don&apos;t let gasoline sit on vinyl</td></tr>
                    <tr><td className="py-3 pr-4">Road tar</td><td className="py-3 pr-4">Dedicated tar remover (vinyl-safe), dab gently</td><td className="py-3 text-red-400">Don&apos;t use WD-40 or harsh solvents</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-sm mt-4">The golden rule: remove contaminants as quickly as possible. The longer they sit on vinyl, the harder they are to remove and the more damage they cause. Keep a spray bottle of quick detailer in your car.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Protecting Your Wrap</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Use a wrap-specific sealant</strong> — Ceramic sprays formulated for vinyl provide UV protection, hydrophobic properties, and make washing easier. Apply every 3-4 months.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Never wax a matte or satin wrap</strong> — Traditional wax and gloss-enhancing sealants will add shine to matte and satin finishes, ruining the intended look. Only use products explicitly labeled for matte/satin if your wrap isn&apos;t gloss.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Ceramic coat the wrap</strong> — A professional ceramic coating applied over a wrap provides 1-2 years of protection. It makes washing easier, adds UV resistance, and gives gloss wraps deeper shine.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Use PPF on high-impact areas</strong> — Paint protection film can be applied over vinyl wrap on the front bumper, hood edge, and mirror caps to prevent rock chips and road debris damage.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Storage and Parking</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Park in a garage whenever possible</strong> — UV exposure is the number one cause of premature wrap failure. Garage parking can extend wrap life by 2-3 years.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Use a car cover outdoors</strong> — If you can&apos;t park in a garage, a breathable, UV-blocking car cover protects the wrap from sun, bird droppings, and sap.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Avoid prolonged sun exposure</strong> — Vinyl wraps, especially dark colors, absorb significant heat. Consistent exposure to 120°F+ surface temperatures accelerates adhesive breakdown and color fading.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Park away from sprinklers</strong> — Hard water from sprinkler systems leaves mineral deposits that are especially visible on dark and matte wraps.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Signs Your Wrap Needs Attention</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Edge lifting</strong> — If edges start peeling, especially around door handles, mirrors, and bumper curves, get them re-sealed by a professional before water and dirt get underneath.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Color fading</strong> — Compare horizontal panels (hood, roof) to vertical ones (doors). If horizontal surfaces are noticeably faded, UV damage is significant.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Cracking or brittleness</strong> — If the wrap feels stiff or shows micro-cracks, it&apos;s past its useful life. Old vinyl becomes brittle and can crack when flexed.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Bubbling</strong> — Air or water bubbles under the film indicate adhesive failure. Small bubbles near edges can sometimes be re-pressed, but widespread bubbling usually means rewrap.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Wrap Lifespan by Type</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 pr-4 text-white font-semibold">Wrap Type</th>
                      <th className="text-left py-3 pr-4 text-white font-semibold">Garaged</th>
                      <th className="text-left py-3 text-white font-semibold">Outdoor Parked</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Premium cast vinyl (3M, Avery)</td><td className="py-3 pr-4 text-emerald-400">5-7 years</td><td className="py-3">3-5 years</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Mid-range cast vinyl</td><td className="py-3 pr-4">4-5 years</td><td className="py-3">2-4 years</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Calendered vinyl (budget)</td><td className="py-3 pr-4">2-3 years</td><td className="py-3 text-red-400">1-2 years</td></tr>
                    <tr><td className="py-3 pr-4 font-medium text-white">Chrome or specialty finish</td><td className="py-3 pr-4">3-4 years</td><td className="py-3">2-3 years</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Wrap maintenance is simpler than most people think — it&apos;s mostly about what you don&apos;t do. Don&apos;t use automatic car washes, don&apos;t use harsh chemicals, don&apos;t let contaminants sit, and don&apos;t leave the car baking in the sun all day every day.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              A gentle hand wash every two weeks, a wrap-safe sealant every few months, and garage parking whenever possible will keep your wrap looking fresh for years. It&apos;s a small investment of time that protects a significant investment in your vehicle&apos;s appearance.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Professional Wrap Services</h3>
            <p className="text-slate-300 mb-6">Find certified wrap installers near you for installation, maintenance, and rewrapping services.</p>
            <Link href="/car-wrapping" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Wrap Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or find local providers in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/vinyl-wrap-care-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Vinyl Wrap Care Guide</p></Link>
              <Link href="/blog/choose-car-wrap-color" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Choose the Right Car Wrap Color</p></Link>
              <Link href="/blog/car-wrap-vs-paint" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Car Wrap vs Paint: Which Is Better?</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Wrap</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Vinyl Maintenance</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Wrap Care</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Vehicle Wrapping</span>
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

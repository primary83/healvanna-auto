"use client";

import Link from "next/link";
import Image from "next/image";

export default function HandWashVsAutomatic() {
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
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Comparison</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Hand Wash vs Automatic Car Wash: Which Is Safer for Your Paint?</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>January 26, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>10 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/hand-wash-vs-automatic-car-wash.png" alt="Split view of a hand wash with foam and an automatic car wash tunnel" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The <strong className="text-emerald-400">hand wash vs automatic car wash</strong> debate comes down to one key question: how much do you care about your paint? While automatic washes are fast and convenient, they come with hidden costs to your vehicle&apos;s finish. This guide breaks down the pros, cons, and best use cases for each — so you can make the <strong className="text-emerald-400">best choice for washing your car</strong> safely.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Automatic Car Washes Work</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              There are three main types of automatic car washes, each with different levels of risk to your paint:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Brush / friction washes</strong> — Spinning cloth or plastic strips physically scrub the car. These trap dirt and grit, dragging it across your paint. This is the most damaging type.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Touchless washes</strong> — Use high-pressure water and chemical detergents only. No physical contact. Safer for paint but less effective at removing all dirt.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Hybrid / soft-touch</strong> — Combination of foam strips and high-pressure water. Better than brush washes but still carries risk.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Professional Hand Washing Works</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              A proper <strong className="text-emerald-400">professional hand wash</strong> follows a multi-step process designed to minimize paint damage:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div><strong className="text-white">Pre-rinse</strong> — Loose dirt and debris are rinsed away before any contact.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div><strong className="text-white">Foam cannon</strong> — Thick foam encapsulates dirt particles, lifting them from the surface.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div><strong className="text-white">Two-bucket wash</strong> — One bucket holds clean soapy water, the other is for rinsing the mitt. This prevents reintroducing dirt to the paint.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">4.</span><div><strong className="text-white">Microfiber mitt</strong> — Soft, high-quality microfiber glides across the paint without scratching.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">5.</span><div><strong className="text-white">Final rinse & drying</strong> — Thorough rinse followed by air blower or clean microfiber towels to prevent water spots.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Paint Safety Comparison</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The evidence is clear: <strong className="text-emerald-400">automatic car washes damage paint</strong>. Brush-style washes in particular create swirl marks — thousands of micro-scratches that dull your paint&apos;s finish over time. These are especially visible on dark colors like black, dark blue, and dark gray.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              A single brush wash won&apos;t destroy your paint, but regular use over months and years causes cumulative damage that requires professional paint correction ($300-$1,000+) to fix. Hand washing with proper technique virtually eliminates this risk.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Cost Comparison</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Automatic Car Wash</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Basic wash: <strong className="text-white">$8 - $15</strong></li>
                    <li>Premium wash: <strong className="text-white">$15 - $25</strong></li>
                    <li>Monthly membership: <strong className="text-white">$20 - $50</strong></li>
                    <li>Hidden cost: paint correction from damage</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Professional Hand Wash</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Basic hand wash: <strong className="text-white">$25 - $40</strong></li>
                    <li>Hand wash + wax: <strong className="text-white">$40 - $75</strong></li>
                    <li>Mobile detailer wash: <strong className="text-white">$30 - $60</strong></li>
                    <li>Hidden savings: no paint correction needed</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When Is Each Option Acceptable?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Automatic OK For:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Touchless washes only</li>
                    <li>Older vehicles with existing paint damage</li>
                    <li>Work trucks and utility vehicles</li>
                    <li>Quick rinse to remove heavy mud/salt</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Hand Wash Essential For:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>New vehicles</li>
                    <li>Ceramic coated cars</li>
                    <li>Vinyl wrapped vehicles</li>
                    <li>Luxury / exotic cars</li>
                    <li>Dark-colored vehicles</li>
                    <li>Cars with PPF installed</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Touchless Compromise</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-emerald-400">Touchless automatic car washes</strong> offer a middle ground. With no physical contact, they won&apos;t cause swirl marks. However, they use stronger chemicals to compensate for the lack of friction, which can strip wax, sealants, and degrade ceramic coatings over time. They also may not fully remove stuck-on contaminants like bug splatter or tree sap.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Tips for a Safe DIY Hand Wash</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Always use two buckets</strong> — One for soap, one for rinsing your mitt.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Use grit guards</strong> — Place a grit guard in the bottom of each bucket to trap dirt below the water line.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Wash in the shade</strong> — Direct sunlight causes soap to dry on the paint, leaving spots and streaks.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Work top to bottom</strong> — The lower panels are dirtiest. Wash the roof and upper panels first.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Use pH-neutral soap</strong> — Dish soap strips wax and coatings. Use a dedicated car wash shampoo.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Dry with a blower or plush microfiber</strong> — Never let water air-dry on the paint.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              If you care about your paint, <strong className="text-emerald-400">hand washing is the safest way to clean your car</strong>. The extra time and cost pay for themselves by preserving your finish and avoiding expensive paint correction down the road. If you must use an automatic wash, stick to touchless only — and never use brush or friction-style washes on a vehicle you care about.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Your paint is a major part of your car&apos;s value and appearance. Treat it accordingly, and it will look great for years.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find a Professional Car Wash</h3>
            <p className="text-slate-300 mb-6">Browse hand wash and detailing services near you that use paint-safe techniques.</p>
            <Link href="/car-washing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Car Wash Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Washing</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Paint Care</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Hand Wash</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Auto Detailing</span>
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

"use client";

import Link from "next/link";
import Image from "next/image";

export default function FindBestCollisionRepairShop() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">How to Find the Best Collision Repair Shop Near You</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>January 26, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/find-best-collision-repair-shop.png" alt="Modern collision repair facility with vehicles being repaired" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Finding the <strong className="text-emerald-400">best collision repair shop near you</strong> after an accident is critical. The shop you choose determines the quality of your repair, how long it takes, and whether your car&apos;s safety systems function properly afterward. This guide gives you a clear process for evaluating and choosing a <strong className="text-emerald-400">collision repair shop</strong> you can trust.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Makes a Great Collision Repair Shop</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Not all body shops are equipped for modern collision repair. Today&apos;s vehicles use advanced materials, complex electronics, and intricate safety systems that require specialized training and equipment. A top-tier shop will have:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-semibold mb-2">Industry Certifications</h4>
                  <p className="text-slate-400 text-sm">I-CAR Gold Class, ASE-certified technicians, and manufacturer-specific approvals demonstrate ongoing training commitment.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Modern Equipment</h4>
                  <p className="text-slate-400 text-sm">Computerized frame measuring, aluminum repair tools, ADAS calibration equipment, and a quality paint booth.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Experience with Your Vehicle</h4>
                  <p className="text-slate-400 text-sm">Ask if they&apos;ve repaired your specific make and model. EV, luxury, and exotic repairs require specialized knowledge.</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Written Warranty</h4>
                  <p className="text-slate-400 text-sm">Reputable shops back their work with written warranties — often lifetime on workmanship and paint.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Key Certifications to Look For</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">I-CAR Gold Class</strong> — The highest collision repair training standard. Only ~20% of shops achieve this designation.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">ASE Certification</strong> — Individual technician credentials proving competency in specific repair areas.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">OEM Certifications</strong> — Tesla Approved Body Shop, BMW Certified, Mercedes-Benz Authorized — these mean the manufacturer trusts this shop with their vehicles.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Aluminum Certification</strong> — Critical for Tesla, Audi, Jaguar, and other vehicles with aluminum body panels.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How to Research Collision Shops</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div><strong className="text-white">Check online reviews</strong> — Look at Google, Yelp, and Facebook. Focus on reviews that mention similar repairs to yours.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div><strong className="text-white">Verify BBB rating</strong> — Check for complaints and how the shop responded to them.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div><strong className="text-white">Ask for referrals</strong> — Your mechanic, dealer, and friends are great sources for trusted recommendations.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">4.</span><div><strong className="text-white">Visit in person</strong> — A clean, organized facility with modern equipment is a positive sign. Chaos and clutter are red flags.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">5.</span><div><strong className="text-white">Check their website</strong> — Professional shops showcase certifications, before/after photos, and customer testimonials.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Questions to Ask When Calling</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Do you use OEM or aftermarket parts?</strong> OEM parts are manufacturer-made and guaranteed to fit. Aftermarket may save money but can affect fit and safety.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">What&apos;s your warranty?</strong> Look for lifetime warranty on workmanship and multi-year on paint.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Can you handle my vehicle&apos;s ADAS recalibration?</strong> Modern safety systems need recalibration after structural repairs.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">What&apos;s the realistic timeline?</strong> Honest shops give accurate estimates rather than overpromising.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Do you provide updates during repair?</strong> Good shops keep you informed with regular status updates.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Understanding the Repair Estimate</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              A collision repair estimate should be detailed and transparent. Key line items include:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Labor</strong> — Charged by the hour. Rates vary by market ($50-$100+/hr).</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Parts</strong> — New, recycled, or aftermarket. Each has different cost implications.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Paint & Materials</strong> — Paint, primer, clear coat, and supplies.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Frame / Structural</strong> — Frame straightening or unibody repair if applicable.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Sublet / Outside Services</strong> — ADAS calibration, glass work, or mechanical repairs may be outsourced.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Warning Signs of a Bad Shop</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Lowball estimates</strong> — If one quote is dramatically cheaper, they&apos;re likely cutting corners on parts or procedures.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">No written warranty</strong> — Any reputable shop provides a written warranty on their work.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Rushing you to decide</strong> — High-pressure tactics suggest the shop needs your business more than you need them.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Poor communication</strong> — If they can&apos;t clearly explain the repair plan, that&apos;s a red flag for the entire experience.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">No certifications displayed</strong> — Legitimate shops proudly display their credentials.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The <strong className="text-emerald-400">best collision repair shop near you</strong> is one that combines proper certifications, modern equipment, transparent communication, and a track record of quality work. Don&apos;t rush this decision — the shop you choose affects your vehicle&apos;s safety, appearance, and value for years to come.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Get multiple estimates, ask the right questions, and trust your instincts. A good shop will make you feel confident from the first phone call to the final inspection.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find a Collision Repair Specialist</h3>
            <p className="text-slate-300 mb-6">Browse our network of certified collision repair shops with verified credentials and reviews.</p>
            <Link href="/collision-repair" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Collision Repair Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Collision Repair</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Auto Body</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Insurance Claims</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Accident</span>
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

"use client";

import Link from "next/link";
import Image from "next/image";

export default function ChooseBodyShopAfterAccident() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">How to Choose a Body Shop After an Accident</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>January 26, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/choose-body-shop-after-accident.png" alt="Professional body shop technician inspecting vehicle damage" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              After a car accident, the last thing you want is the added stress of choosing the wrong repair shop. Knowing <strong className="text-emerald-400">how to choose a body shop after an accident</strong> can save you thousands of dollars, weeks of delays, and a lot of frustration. This guide walks you through everything you need to know to find a <strong className="text-emerald-400">trusted body shop</strong> that will restore your vehicle properly.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Can You Choose Your Own Body Shop?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Yes — and this is one of the most important things to know. Your insurance company may recommend or steer you toward their preferred shops (called Direct Repair Program or DRP shops), but <strong className="text-emerald-400">you have the legal right to choose any body shop</strong> you want in all 50 states. No insurance company can require you to use a specific shop.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              That said, DRP shops aren&apos;t automatically bad. Many are highly qualified. The key is making an informed choice rather than defaulting to whoever the adjuster suggests.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Certifications to Look For</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Certifications tell you a shop has invested in training and meets industry standards. Look for these credentials when evaluating a <strong className="text-emerald-400">collision repair shop</strong>:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">I-CAR Gold Class</strong> — The highest industry training standard. Only about 20% of shops achieve this. It means the entire team maintains ongoing education in repair techniques.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">ASE Certification</strong> — Automotive Service Excellence certification ensures technicians have passed rigorous testing in their specialty areas.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">OEM Certifications</strong> — Manufacturer-specific certifications (Tesla, BMW, Mercedes, etc.) mean the shop is approved to work on specific brands using factory procedures and parts.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">EPA Compliance</strong> — Proper environmental certifications show the shop operates responsibly and follows regulations.</div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Red Flags to Avoid</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">✕</span>
                  <div><strong className="text-white">No written estimate</strong> — Any legitimate shop will provide a detailed written estimate before starting work.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">✕</span>
                  <div><strong className="text-white">Pressuring you to skip insurance</strong> — A shop that encourages you to pay out of pocket and avoid filing a claim may be cutting corners.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">✕</span>
                  <div><strong className="text-white">No warranty on repairs</strong> — Reputable shops offer written warranties on their work, typically 1-5 years or lifetime.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">✕</span>
                  <div><strong className="text-white">Unlicensed or no visible credentials</strong> — Check for proper business licensing and displayed certifications.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">✕</span>
                  <div><strong className="text-white">Extremely low estimates</strong> — If one quote is dramatically lower than others, the shop may be planning to use substandard parts or skip important repair steps.</div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Questions to Ask Before Committing</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">1.</span>
                  <div><strong className="text-white">What warranty do you offer?</strong> — Look for at least a written lifetime warranty on workmanship.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">2.</span>
                  <div><strong className="text-white">What&apos;s the estimated timeline?</strong> — Get a realistic completion date in writing.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">3.</span>
                  <div><strong className="text-white">Do you use OEM or aftermarket parts?</strong> — OEM parts are made by the vehicle manufacturer and fit perfectly. Aftermarket parts are cheaper but may not match as well.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">4.</span>
                  <div><strong className="text-white">Can you help with a rental car?</strong> — Many shops coordinate directly with insurance for rental vehicle coverage.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">5.</span>
                  <div><strong className="text-white">How do you handle supplements?</strong> — Additional damage found during teardown is common. The shop should handle supplement negotiations with your insurer.</div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Insurance-Approved vs Independent Shops</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">DRP / Insurance-Approved</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Streamlined claims process</li>
                    <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Direct communication with insurer</li>
                    <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Often guaranteed by insurance company</li>
                    <li className="flex items-start"><span className="text-red-400 mr-2">-</span>May prioritize insurer relationship over quality</li>
                    <li className="flex items-start"><span className="text-red-400 mr-2">-</span>Pressure to use cheaper parts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Independent Shops</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Prioritize customer over insurance company</li>
                    <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>More likely to use OEM parts</li>
                    <li className="flex items-start"><span className="text-emerald-400 mr-2">+</span>Will fight for proper repair procedures</li>
                    <li className="flex items-start"><span className="text-red-400 mr-2">-</span>You may need to handle more paperwork</li>
                    <li className="flex items-start"><span className="text-red-400 mr-2">-</span>Claims process may take slightly longer</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How to Check Reviews and Reputation</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Before committing to any <strong className="text-emerald-400">body shop after a car accident</strong>, research their reputation across multiple sources:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Google Reviews</strong> — Look for 4.5+ stars with 50+ reviews. Read the negative reviews carefully for patterns.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">BBB Rating</strong> — Check for complaints and how they were resolved.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Word of Mouth</strong> — Ask friends, family, and your mechanic for personal recommendations.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Before/After Photos</strong> — Reputable shops showcase their work. Ask to see examples of similar repairs.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What to Expect During the Repair Process</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">1.</span><div><strong className="text-white">Initial Estimate</strong> — The shop writes an estimate based on visible damage. This is a starting point, not the final number.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">2.</span><div><strong className="text-white">Teardown & Inspection</strong> — Panels are removed to reveal hidden damage. This almost always uncovers additional repairs needed.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">3.</span><div><strong className="text-white">Supplement Filing</strong> — The shop documents additional damage and negotiates with your insurer for added coverage.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">4.</span><div><strong className="text-white">Repair Work</strong> — Structural repairs, panel replacement, body work, and paint are completed.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">5.</span><div><strong className="text-white">Quality Control</strong> — The shop inspects all work, checks panel gaps and alignment, and verifies paint match.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">6.</span><div><strong className="text-white">Delivery</strong> — You inspect the vehicle, review the work, and sign off on completion.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Choosing the right <strong className="text-emerald-400">body shop after an accident</strong> is one of the most important decisions you&apos;ll make during the repair process. Take the time to research certifications, read reviews, ask the right questions, and don&apos;t let anyone pressure you into a shop you&apos;re not comfortable with.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Remember: you have the right to choose your own shop, you deserve OEM-quality repairs, and a good body shop will advocate for you throughout the insurance process.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find a Trusted Body Shop</h3>
            <p className="text-slate-300 mb-6">Browse our network of certified body shops with verified reviews and credentials.</p>
            <Link href="/body-shops" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Body Shops
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Body Shops</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Collision Repair</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Insurance Claims</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Auto Body</span>
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

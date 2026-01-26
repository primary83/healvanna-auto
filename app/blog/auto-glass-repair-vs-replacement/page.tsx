"use client";

import Link from "next/link";
import Image from "next/image";

export default function AutoGlassRepairVsReplacement() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Auto Glass Repair vs Replacement: When to Fix and When to Replace</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>January 26, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>10 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/auto-glass-repair-vs-replacement.png" alt="Technician repairing a windshield chip on a modern vehicle" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              A rock chip or crack in your windshield can happen at any time, and the question of <strong className="text-emerald-400">auto glass repair vs replacement</strong> isn&apos;t always straightforward. The answer depends on the size, location, and severity of the damage. This guide explains exactly <strong className="text-emerald-400">when to repair a windshield</strong> and when a full replacement is the safer, smarter choice.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When Can a Windshield Be Repaired?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-emerald-400">Windshield repair</strong> is possible when the damage is minor and meets specific criteria. A skilled technician injects clear resin into the damaged area, restoring structural integrity and clarity. Repair is typically an option when:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Chips are smaller than a quarter</strong> — Bull&apos;s-eye, star, and half-moon chips under 1 inch in diameter are usually repairable.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Cracks are under 6 inches</strong> — Short, single-line cracks can often be repaired if caught early.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Damage is not in the driver&apos;s direct line of sight</strong> — Repairs can leave slight visual distortion, so damage directly in the driver&apos;s viewing area may require replacement.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Only the outer layer is damaged</strong> — Windshields have two glass layers with a laminate between them. If only the outer layer is chipped, repair works well.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When Does a Windshield Need Replacement?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Cracks longer than 6 inches</strong> — Long cracks compromise structural integrity and can&apos;t be reliably repaired.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Multiple chips or cracks</strong> — Three or more damage points weaken the glass beyond safe repair.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Damage in driver&apos;s critical viewing area</strong> — Safety regulations may require replacement for damage directly in the driver&apos;s line of sight.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Edge cracks</strong> — Cracks that start at or reach the edge of the windshield compromise the seal and structural bond.</div></li>
                <li className="flex items-start"><span className="text-red-400 mr-3 font-bold">✕</span><div><strong className="text-white">Inner layer damage</strong> — If both glass layers or the inner laminate are damaged, replacement is necessary.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Cost Comparison</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The <strong className="text-emerald-400">windshield crack repair cost</strong> is significantly less than replacement. Here&apos;s what to budget for:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Single chip repair</h4><p className="text-slate-400 text-sm">Small bull&apos;s-eye or star break</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$50 - $75</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Crack repair (up to 6&quot;)</h4><p className="text-slate-400 text-sm">Single-line crack</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$75 - $150</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Standard windshield replacement</h4><p className="text-slate-400 text-sm">Non-luxury, no ADAS</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$200 - $400</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Premium / luxury vehicle replacement</h4><p className="text-slate-400 text-sm">Acoustic glass, heated, HUD compatible</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$400 - $1,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <div><h4 className="text-white font-semibold">ADAS recalibration (add-on)</h4><p className="text-slate-400 text-sm">Camera and sensor recalibration after replacement</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$100 - $400</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Does Insurance Cover Auto Glass?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Most comprehensive auto insurance policies cover glass damage. Many states — including Florida, Kentucky, and South Carolina — require insurers to waive the deductible for windshield repairs. Some states like Arizona and Florida mandate free windshield replacement with comprehensive coverage. Check your policy and state laws, as you may pay nothing out of pocket.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">ADAS and Modern Windshields</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Modern vehicles equipped with Advanced Driver Assistance Systems (ADAS) have cameras and sensors mounted near the windshield. Features like lane departure warning, automatic emergency braking, and adaptive cruise control depend on these systems. After a <strong className="text-emerald-400">windshield replacement</strong>, ADAS recalibration is essential to ensure these safety features work correctly.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Not all glass shops have the equipment for ADAS recalibration. When getting quotes, confirm the shop can perform both the replacement and the recalibration — or has a partnership with a facility that can.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Long Does Each Process Take?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Windshield Repair</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Time: <strong className="text-white">20-30 minutes</strong></li>
                    <li>Drive immediately after</li>
                    <li>No cure time needed</li>
                    <li>Often available as mobile service</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Windshield Replacement</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Time: <strong className="text-white">1-2 hours</strong> for installation</li>
                    <li>1 hour minimum cure before driving</li>
                    <li>Full adhesive cure: 24 hours</li>
                    <li>ADAS recalibration adds 30-60 min</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Finding a Quality Auto Glass Shop</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              When choosing an <strong className="text-emerald-400">auto glass specialist</strong>, look for shops that:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Use OEM or OEM-equivalent glass</strong> — Cheap aftermarket glass may not fit properly, leak, or cause optical distortion.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Offer ADAS recalibration</strong> — Critical for modern vehicles with safety technology.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Provide a warranty</strong> — Look for warranty covering both the glass and the installation (leak-free guarantee).</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Are certified</strong> — Auto Glass Safety Council (AGSC) certification indicates the shop follows proper installation standards.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Don&apos;t ignore windshield damage. A small chip can spread into a crack that requires full replacement, turning a $75 fix into a $500+ job. Get damage assessed quickly — most chips can be repaired in under 30 minutes if caught early.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Whether you need a quick repair or a full replacement, choosing a qualified shop with proper certifications and ADAS capabilities ensures your safety and the longevity of the repair.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find an Auto Glass Specialist</h3>
            <p className="text-slate-300 mb-6">Connect with certified auto glass professionals for repair or replacement in your area.</p>
            <Link href="/auto-glass" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Auto Glass Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Auto Glass</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Windshield Repair</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Windshield Replacement</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">ADAS</span>
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

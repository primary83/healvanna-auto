"use client";

import Link from "next/link";
import Image from "next/image";

export default function InteriorDetailingChecklist() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Interior Detailing Checklist: What Professional Detailers Actually Do</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>January 26, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>12 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/interior-detailing-checklist.png" alt="Professional detailer cleaning a luxury car interior with specialized tools" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Ever wondered <strong className="text-emerald-400">what professional interior detailing includes</strong>? It&apos;s far more than vacuuming and wiping down surfaces. A thorough <strong className="text-emerald-400">interior detail</strong> involves 9 distinct steps, specialized tools and chemicals, and hours of focused work. This checklist shows you exactly what separates a professional interior detail from a basic clean — and why the results last months, not days.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 1: Complete Interior Vacuum</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The detail starts with a thorough vacuum of every surface: seats (including under and between cushions), carpets, floor mats, door pockets, center console, trunk, and all crevices. Professional detailers use compressed air to blow debris out of tight spots before vacuuming — vents, seat tracks, button gaps, and around the shifter.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 2: Dashboard and Console Deep Clean</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Every plastic, vinyl, and rubber surface is cleaned with appropriate cleaners. This includes the dashboard, center console, gauge cluster, infotainment screen, steering wheel, shift knob, and all buttons and knobs. Detailers use soft brushes to agitate dirt in textured surfaces and around buttons without causing damage.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 3: Leather or Fabric Seat Treatment</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Leather Seats</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>pH-balanced leather cleaner application</li>
                    <li>Soft brush agitation of the grain</li>
                    <li>Wipe with microfiber towels</li>
                    <li>Leather conditioner application</li>
                    <li>UV protectant to prevent cracking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Fabric Seats</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Pre-treat stains with enzyme cleaner</li>
                    <li>Hot water extraction (steam clean)</li>
                    <li>Agitate stubborn stains with brush</li>
                    <li>Extract dirty water with wet vac</li>
                    <li>Apply fabric protectant (Scotchgard-type)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 4: Door Panels and Trim</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Door panels collect fingerprints, scuffs, and grime. Each panel is cleaned with all-purpose cleaner, detailed with brushes around speakers, handles, and pockets, and dressed with UV protectant. Rubber door seals are cleaned and treated with rubber conditioner to prevent drying and cracking.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 5: Carpet and Floor Mat Shampooing</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Floor carpets and mats are some of the dirtiest surfaces in your car. Professional detailers use hot water extraction (similar to carpet cleaning in a home) to deep-clean carpets. Stains are pre-treated, the carpet is agitated with a brush, and then the dirty water is extracted with a powerful wet vacuum. Floor mats are cleaned separately, often outside the vehicle.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 6: Interior Glass Cleaning</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Interior glass develops a film from off-gassing (the haze that builds on your windshield from vinyl and plastic components). Professional detailers use automotive glass cleaner and lint-free microfiber towels to achieve streak-free clarity on every window and mirror inside the vehicle.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 7: Headliner Cleaning</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The headliner (ceiling fabric) is one of the most delicate interior surfaces. It&apos;s typically a fabric glued to a foam backing — aggressive cleaning can cause it to sag or separate. Professionals use a light mist of all-purpose cleaner and gently blot with microfiber, avoiding excessive moisture or scrubbing.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 8: Odor Elimination</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Simply masking odors with air freshener doesn&apos;t work long-term. Professional odor removal may include:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Ozone treatment</strong> — Ozone generators neutralize odor-causing bacteria and molecules. Highly effective for smoke odors.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Enzyme cleaners</strong> — Break down organic odor sources (pet accidents, food spills) at the molecular level.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Chlorine dioxide</strong> — Professional-grade odor eliminator for severe cases.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">HVAC treatment</strong> — Cleaning the air conditioning system&apos;s evaporator to eliminate musty smells.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Step 9: Final Dressing and Protection</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The final step applies protective products to all surfaces:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">UV protectant on plastics</strong> — Prevents fading and cracking from sun exposure.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Leather sealant</strong> — Adds a protective barrier to leather surfaces that repels spills and stains.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Fabric protectant</strong> — Coats upholstery fibers to resist future staining.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Rubber and vinyl dressing</strong> — Restores a like-new appearance to trim pieces without a greasy look.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Should Interior Detailing Cost?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Basic Interior Clean</h4><p className="text-slate-400 text-sm">Vacuum, wipe-down, glass, air freshener</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$75 - $125</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Full Interior Detail</h4><p className="text-slate-400 text-sm">All 9 steps, standard vehicle</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$150 - $300</span>
                </div>
                <div className="flex justify-between items-center">
                  <div><h4 className="text-white font-semibold">Premium Interior Detail</h4><p className="text-slate-400 text-sm">Full detail + ozone treatment + ceramic interior coating</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$300 - $500</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Often Should You Detail Your Interior?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              For most drivers, a full <strong className="text-emerald-400">interior detail</strong> every 3-6 months keeps your cabin fresh and protected. If you have kids, pets, or eat in your car, consider quarterly detailing. Between professional details, a quick weekly vacuum and wipe-down goes a long way.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Now you know exactly <strong className="text-emerald-400">what professional interior detailing includes</strong> — and why it&apos;s worth every penny. A clean interior isn&apos;t just about aesthetics; it protects your materials, eliminates allergens and bacteria, and preserves your vehicle&apos;s resale value. When you hire a professional detailer who follows this complete checklist, the results speak for themselves.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Ready for a fresh interior? Find a professional detailer in your area who takes the time to do it right.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find an Interior Detailing Specialist</h3>
            <p className="text-slate-300 mb-6">Connect with professional detailers who deliver thorough, high-quality interior detailing.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Detailing Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Interior Detailing</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Cleaning</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Auto Detailing</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Upholstery Care</span>
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

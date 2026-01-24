"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVCollisionRepairGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8">
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">Technology</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Electric Vehicle Collision Repair: What Every EV Owner Should Know</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>January 24, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>15 min read</span>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/ev-collision-repair.png" alt="Tesla in certified collision repair shop with technicians" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Finding the right <strong className="text-emerald-400">EV collision repair near me</strong> after an accident is critical for your safety and your vehicle's integrity. Electric vehicles have unique requirements that traditional body shops simply aren't equipped to handle. From high-voltage battery systems to aluminum body construction, <strong className="text-emerald-400">electric car accident repair cost</strong> considerations, and <strong className="text-emerald-400">Tesla body shop certified</strong> requirements, this guide covers everything EV owners need to know.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Why EV Collision Repair Is Different</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Electric vehicles present unique challenges that require specialized training, equipment, and safety protocols. Taking your Tesla, Rivian, or other EV to an uncertified shop can result in unsafe repairs, voided warranties, and potential safety hazards.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">High-Voltage Battery Safety</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              The most critical difference is the high-voltage battery system. Modern EVs operate at 400-800+ volts—enough to cause serious injury or death if improperly handled. Before any collision repair begins, technicians must properly isolate and de-energize the battery system following manufacturer-specific procedures.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Certified shops have technicians trained in high-voltage safety, proper personal protective equipment (PPE), and the diagnostic tools needed to safely work around these systems. They understand the risks of thermal runaway and know how to identify battery damage that may not be immediately visible.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Aluminum and Mixed-Material Construction</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Many EVs, particularly Teslas, use extensive aluminum construction to offset battery weight. Aluminum requires completely different repair techniques than traditional steel—different welding methods (MIG pulse welding), specialized rivet systems, and dedicated tools that can't be cross-contaminated with steel particles.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Using steel repair techniques on aluminum compromises structural integrity and can lead to galvanic corrosion. Certified EV repair shops maintain separate aluminum-only repair areas with dedicated tools and equipment.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">EV-Specific Repair Requirements</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">⚡</span><span><strong className="text-white">Battery isolation protocols</strong> – Must be performed before any repair work</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">⚡</span><span><strong className="text-white">Aluminum-specific welding</strong> – MIG pulse or resistance spot welding required</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">⚡</span><span><strong className="text-white">Structural scanning</strong> – 3D measuring to verify frame alignment</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">⚡</span><span><strong className="text-white">ADAS calibration</strong> – Required after windshield or structural repairs</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">⚡</span><span><strong className="text-white">OEM parts requirement</strong> – Often mandatory for safety-critical components</span></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Finding a Tesla Certified Body Shop</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Tesla maintains a network of <strong className="text-emerald-400">Tesla body shop certified</strong> facilities that have invested significantly in training, tooling, and equipment. These shops must meet Tesla's rigorous standards and maintain ongoing certification through continued education and audits.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">What Tesla Certification Requires</h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>Technicians complete Tesla-specific training programs</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>Access to Tesla repair procedures and technical documentation</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>Investment in specialized aluminum repair equipment ($100,000+)</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>High-voltage safety equipment and dedicated EV repair bays</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>Direct ordering access to Tesla OEM parts</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">✓</span><span>ADAS calibration equipment for Autopilot systems</span></li>
              </ul>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              You can find Tesla-approved body shops through the Tesla app or website. While you're legally allowed to use any shop, using a certified facility ensures repairs meet Tesla's standards and maintains your warranty coverage.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Other EV Manufacturer Certifications</h3>
            <p className="text-slate-300 leading-relaxed mb-6">Other EV manufacturers have similar certification programs:</p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><h4 className="text-white font-semibold">Rivian</h4><p className="text-slate-400 text-sm">Rivian Certified Collision Network</p></div>
                <div><h4 className="text-white font-semibold">Lucid</h4><p className="text-slate-400 text-sm">Lucid Certified Collision Center</p></div>
                <div><h4 className="text-white font-semibold">Ford EV</h4><p className="text-slate-400 text-sm">Ford Certified Aluminum Repair</p></div>
                <div><h4 className="text-white font-semibold">Porsche Taycan</h4><p className="text-slate-400 text-sm">Porsche Certified Collision</p></div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Electric Car Accident Repair Cost</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Understanding <strong className="text-emerald-400">electric car accident repair cost</strong> helps set realistic expectations. EV repairs typically cost 25-50% more than equivalent repairs on traditional vehicles due to specialized labor, equipment requirements, and parts costs.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <h4 className="text-white font-semibold mb-4">Typical EV Repair Cost Ranges</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <div><span className="text-white">Minor fender repair</span><p className="text-slate-400 text-sm">Dent repair, paint blend</p></div>
                  <span className="text-emerald-400 font-bold">$1,500 - $3,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <div><span className="text-white">Bumper replacement</span><p className="text-slate-400 text-sm">With sensors, paint match</p></div>
                  <span className="text-emerald-400 font-bold">$2,500 - $5,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-slate-700/50">
                  <div><span className="text-white">Quarter panel repair</span><p className="text-slate-400 text-sm">Aluminum panel, structural</p></div>
                  <span className="text-emerald-400 font-bold">$4,000 - $8,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <div><span className="text-white">Major structural damage</span><p className="text-slate-400 text-sm">Frame work, multiple panels</p></div>
                  <span className="text-emerald-400 font-bold">$15,000 - $30,000+</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Why EV Repairs Cost More</h3>
            <p className="text-slate-300 leading-relaxed mb-6">Several factors contribute to higher repair costs:</p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span><strong className="text-white">Specialized labor rates</strong> – Certified EV technicians command higher wages</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span><strong className="text-white">OEM parts requirements</strong> – Aftermarket alternatives often not available or approved</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span><strong className="text-white">Aluminum repair complexity</strong> – More time-intensive than steel repairs</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span><strong className="text-white">ADAS calibration</strong> – Adds $500-$1,500 to many repairs</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">•</span><span><strong className="text-white">Battery inspection</strong> – Required after impacts, adds diagnostic time</span></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The EV Collision Repair Process</h2>
            <p className="text-slate-300 leading-relaxed mb-6">Understanding what happens when your EV goes in for collision repair helps you know what to expect:</p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Step 1: Initial Assessment and Battery Safety</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Before anything else, technicians assess the vehicle for high-voltage safety. They check for battery damage indicators, isolate the high-voltage system, and verify it's safe to proceed. If battery damage is suspected, additional diagnostic procedures are required.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Step 2: Damage Documentation</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              The vehicle is thoroughly documented with photos and 3D scanning to identify all damage, including hidden structural issues. This documentation is crucial for insurance claims and ensures nothing is missed during repair planning.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Step 3: Repair Planning and Parts Ordering</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              A detailed repair plan is created following manufacturer procedures. OEM parts are ordered—note that Tesla parts availability can sometimes cause delays, though this has improved significantly in recent years.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Step 4: Structural and Body Repairs</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Repairs proceed following strict manufacturer guidelines. Aluminum panels require specialized techniques—they can't be heated and hammered like steel. Structural repairs must meet exact specifications verified by 3D measuring systems.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Step 5: Paint and Finishing</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Tesla and other EV manufacturers use specific paint formulations that require proper color matching and application techniques. Quality shops use computerized color matching and spray techniques that ensure seamless blending.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">Step 6: ADAS Calibration and Testing</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              After reassembly, all affected sensors and cameras must be calibrated. This includes Autopilot cameras, ultrasonic sensors, and radar systems. The vehicle is test-driven to verify all systems function correctly before delivery.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Insurance Considerations for EV Collision Repair</h2>
            <p className="text-slate-300 leading-relaxed mb-6">Working with insurance companies on EV repairs can be challenging. Here are tips for a smoother process:</p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">1.</span><span><strong className="text-white">Insist on certified shops</strong> – Don't let insurers steer you to uncertified facilities</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">2.</span><span><strong className="text-white">Request OEM parts</strong> – Document why aftermarket parts aren't acceptable for safety</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">3.</span><span><strong className="text-white">Get manufacturer repair procedures</strong> – These support the certified shop's repair plan</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">4.</span><span><strong className="text-white">Document everything</strong> – Keep records of all communications and decisions</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">5.</span><span><strong className="text-white">Know your policy</strong> – Review coverage for OEM parts and certified repairs</span></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Questions to Ask a Collision Repair Shop</h2>
            <p className="text-slate-300 leading-relaxed mb-6">Before choosing a shop for your EV repair, ask these important questions:</p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3">?</span><span>Are you certified by my vehicle's manufacturer?</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">?</span><span>Do your technicians have high-voltage safety training?</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">?</span><span>Do you have dedicated aluminum repair equipment?</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">?</span><span>Can you perform ADAS calibration in-house?</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">?</span><span>Do you use OEM parts or will you source aftermarket?</span></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3">?</span><span>What warranty do you offer on repairs?</span></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Finding qualified <strong className="text-emerald-400">EV collision repair near me</strong> requires more research than traditional vehicle repairs, but it's essential for your safety and your vehicle's integrity. The unique construction, high-voltage systems, and advanced technology in electric vehicles demand specialized expertise.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Always choose a manufacturer-certified shop when possible, insist on OEM parts for safety-critical repairs, and don't let cost pressure compromise the quality of your repair. Your EV represents a significant investment—protect it by ensuring repairs are done correctly the first time.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find Certified EV Collision Repair</h3>
            <p className="text-slate-300 mb-6">Connect with Tesla-certified and EV-specialized collision repair facilities in your area.</p>
            <Link href="/craft" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Craft Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Repair</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Tesla</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Collision Repair</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Body Shop</span>
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

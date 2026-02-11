"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVPaintProtectionGuide() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          <Link
            href="/blog"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              Guides
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              How to Protect Your EV&apos;s Paint: The Complete Guide for Electric Vehicle Owners
            </h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>14 min read</span>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/blog/ev-paint-protection-guide.png"
              alt="Matte black Tesla Model Y in a professional detailing studio with LED lighting"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Electric vehicles represent a significant investment — and their paint is one of the first things people notice. Whether you drive a Tesla, Rivian, BMW iX, or any other EV, protecting your paint goes beyond aesthetics. It preserves resale value, reduces long-term maintenance costs, and keeps your car looking factory-fresh for years. Here&apos;s everything you need to know.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Why EV Paint Needs Special Attention
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              EV paint faces the same environmental threats as any vehicle — UV rays, bird droppings, tree sap, road salt, and rock chips. But there are a few factors specific to electric vehicles that make paint protection even more important:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Higher Purchase Price</strong> — EVs typically cost more than their gas counterparts, making every scratch or chip a bigger hit to your investment.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">2.</span>
                  <div>
                    <strong className="text-white">Resale Value Sensitivity</strong> — The used EV market is maturing quickly. Buyers scrutinize paint condition closely because repainting an EV requires specialized shops familiar with the vehicle&apos;s electronics and sensors.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Thinner Factory Paint</strong> — Some manufacturers, notably Tesla, have been known to apply thinner paint layers compared to traditional automakers. Thinner paint is more susceptible to swirl marks, chips, and UV damage.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Aerodynamic Design</strong> — The smooth, flush body panels that help EVs achieve better range also make imperfections more visible. There are fewer body lines to hide swirl marks or scratches.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Paint Protection Options Ranked
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              There are several levels of paint protection available, each with different cost, durability, and effectiveness. Here&apos;s how they compare for EV owners:
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">
              1. Paint Protection Film (PPF) — The Gold Standard
            </h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">What It Does</h4>
                  <p className="text-slate-300 text-sm mb-4">
                    PPF is a clear, thick urethane film applied to painted surfaces. It physically absorbs rock chips, scratches, and bug splatter. Premium films like XPEL Ultimate Plus and 3M Scotchgard Pro even self-heal minor scratches with heat.
                  </p>
                  <h4 className="text-emerald-400 font-semibold mb-3">Best For</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• High-impact areas: hood, fenders, bumper, mirror caps</li>
                    <li>• Highway commuters exposed to road debris</li>
                    <li>• Owners who plan to keep or resell the vehicle</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Cost Range</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li><strong className="text-white">Partial front:</strong> $800 – $2,000</li>
                    <li><strong className="text-white">Full front:</strong> $1,500 – $3,500</li>
                    <li><strong className="text-white">Full body:</strong> $4,000 – $8,000+</li>
                  </ul>
                  <h4 className="text-emerald-400 font-semibold mb-3 mt-4">Durability</h4>
                  <p className="text-slate-300 text-sm">5 – 10 years with proper care</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">
              2. Ceramic Coating — Long-Term Shine and Protection
            </h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">What It Does</h4>
                  <p className="text-slate-300 text-sm mb-4">
                    Ceramic coating is a liquid polymer that chemically bonds to your paint, creating a hydrophobic (water-repelling) layer. It protects against UV damage, chemical stains, bird droppings, and light scratches while giving the paint an intense gloss.
                  </p>
                  <h4 className="text-emerald-400 font-semibold mb-3">Best For</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• Owners who want easier washing and maintenance</li>
                    <li>• Daily drivers parked outdoors</li>
                    <li>• Pairing with PPF for maximum protection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Cost Range</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li><strong className="text-white">Consumer-grade (DIY):</strong> $50 – $150</li>
                    <li><strong className="text-white">Professional (1-3 year):</strong> $500 – $1,200</li>
                    <li><strong className="text-white">Professional (5+ year):</strong> $1,000 – $2,500</li>
                  </ul>
                  <h4 className="text-emerald-400 font-semibold mb-3 mt-4">Durability</h4>
                  <p className="text-slate-300 text-sm">2 – 7+ years depending on product and maintenance</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">
              3. Vinyl Wrap — Style and Surface Protection
            </h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">What It Does</h4>
                  <p className="text-slate-300 text-sm mb-4">
                    A full or partial vinyl wrap covers the factory paint with a colored or textured film. While primarily a cosmetic choice, wraps also shield the original paint from UV exposure, minor abrasions, and chemical contaminants.
                  </p>
                  <h4 className="text-emerald-400 font-semibold mb-3">Best For</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• Owners who want a color change without repainting</li>
                    <li>• Protecting factory paint for resale</li>
                    <li>• Matte, satin, or textured finishes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Cost Range</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li><strong className="text-white">Partial wrap:</strong> $500 – $2,000</li>
                    <li><strong className="text-white">Full wrap:</strong> $2,500 – $6,000+</li>
                  </ul>
                  <h4 className="text-emerald-400 font-semibold mb-3 mt-4">Durability</h4>
                  <p className="text-slate-300 text-sm">3 – 5 years depending on material and conditions</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">
              4. Wax and Sealants — Basic Maintenance Protection
            </h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">What It Does</h4>
                  <p className="text-slate-300 text-sm mb-4">
                    Traditional carnauba wax or synthetic paint sealants add a sacrificial layer on top of your paint. They provide a temporary barrier against contaminants and add gloss.
                  </p>
                  <h4 className="text-emerald-400 font-semibold mb-3">Best For</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• Budget-conscious owners</li>
                    <li>• Supplementing ceramic coating between details</li>
                    <li>• Garage-kept vehicles with low exposure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Cost Range</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li><strong className="text-white">DIY wax:</strong> $15 – $50</li>
                    <li><strong className="text-white">Professional sealant:</strong> $100 – $300</li>
                  </ul>
                  <h4 className="text-emerald-400 font-semibold mb-3 mt-4">Durability</h4>
                  <p className="text-slate-300 text-sm">1 – 6 months</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              The Best Combination: PPF + Ceramic Coating
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              For EV owners who want the highest level of protection, the most effective approach is combining PPF on high-impact areas with ceramic coating over the entire vehicle — including on top of the PPF itself. This gives you:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">+</span>
                  <div>
                    <strong className="text-white">Physical impact protection</strong> from PPF on the hood, bumper, fenders, and mirrors
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">+</span>
                  <div>
                    <strong className="text-white">Chemical and UV resistance</strong> from ceramic coating across all panels
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">+</span>
                  <div>
                    <strong className="text-white">Hydrophobic self-cleaning effect</strong> that makes washing faster and reduces water spots
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">+</span>
                  <div>
                    <strong className="text-white">Uniform gloss</strong> across the entire vehicle — the ceramic ties the PPF and bare paint areas together visually
                  </div>
                </li>
              </ul>
              <p className="text-slate-400 text-sm mt-4">
                Typical cost for partial PPF + full ceramic: $2,500 – $5,000. Full body PPF + ceramic: $5,000 – $10,000+.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              EV-Specific Washing Tips
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              How you wash your EV matters just as much as what protection you apply. Improper washing is the leading cause of swirl marks and micro-scratches. Follow these practices:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Use the two-bucket method</strong> — One bucket with soap, one with clean rinse water. This prevents you from rubbing dirt back into the paint.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">2.</span>
                  <div>
                    <strong className="text-white">Avoid automatic car washes</strong> — Spinning brushes cause swirl marks. If you must use one, choose a touchless option.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Dry with microfiber towels</strong> — Use clean, high-quality microfiber drying towels. Air drying leaves water spots, especially on dark-colored EVs.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Wash in the shade</strong> — Direct sunlight causes soap to dry on the surface before you can rinse it, leaving residue and potential etching.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">5.</span>
                  <div>
                    <strong className="text-white">Clean charging port area regularly</strong> — This area collects dust and grime that can transfer to hands and the interior. A quick wipe during each wash keeps it clean.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              When to Get Paint Protection on Your EV
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Timing matters. The ideal window for applying PPF or ceramic coating is:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Brand new (best)</strong> — Apply within the first few weeks of ownership. The paint hasn&apos;t accumulated swirl marks or contamination yet, so minimal or no paint correction is needed. This saves $300 – $1,000 in prep work.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Within the first year (good)</strong> — Still manageable, but you&apos;ll likely need some paint correction to remove accumulated swirl marks before coating or film.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Any time (still worth it)</strong> — Even on an older vehicle, paint correction followed by ceramic coating or PPF will dramatically improve the appearance and protect what&apos;s left of the original paint.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              How to Choose an Installer for Your EV
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Not all detailing shops are equipped to work on electric vehicles. When choosing a paint protection installer for your EV, look for:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">EV experience</strong> — Ask if they&apos;ve worked on your specific make and model. EVs have unique panel gaps, sensor placements, and trim pieces.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Certifications</strong> — Look for manufacturer certifications from brands like XPEL, Ceramic Pro, or Gtechniq.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Controlled environment</strong> — The shop should have a climate-controlled, dust-free workspace. Applying PPF or ceramic in an open garage leads to poor results.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Written warranty</strong> — Reputable installers back their work with warranties that cover defects in application.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Portfolio of work</strong> — Ask for before-and-after photos, especially on EVs similar to yours.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Final Thoughts
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Your EV&apos;s paint is one of the most visible and value-affecting parts of the vehicle. Protecting it early with the right combination of PPF, ceramic coating, or even a quality wrap pays off in easier maintenance, better appearance, and higher resale value.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              For most EV owners, a <strong className="text-emerald-400">professional ceramic coating</strong> is the minimum worthwhile investment. For those wanting complete protection, adding <strong className="text-emerald-400">PPF on the front end</strong> eliminates the biggest threat — rock chips — while ceramic handles everything else.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Whatever you choose, the best time to protect your paint is before the damage happens.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find an EV Paint Protection Specialist</h3>
            <p className="text-slate-300 mb-6">Connect with certified detailing and PPF professionals who have experience working on electric vehicles in your area.</p>
            <Link
              href="/car-detailing"
              className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
            >
              Browse Detailing Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or browse providers by location in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          {/* Related Articles */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/ceramic-coating-cost-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How Much Does Ceramic Coating Cost in 2026?</p>
              </Link>
              <Link href="/blog/ppf-vs-ceramic-coating" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">PPF vs Ceramic Coating: Which Is Right for You?</p>
              </Link>
              <Link href="/blog/paint-correction-black-cars" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Paint Correction for Black Cars</p>
              </Link>
            </div>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Paint Protection</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Ceramic Coating</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">PPF</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Tesla</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Detailing</span>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

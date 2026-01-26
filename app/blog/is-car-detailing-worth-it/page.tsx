"use client";

import Link from "next/link";
import Image from "next/image";

export default function IsCarDetailingWorthIt() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Is Car Detailing Worth It? What You Actually Get for the Price</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>January 26, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>11 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/is-car-detailing-worth-it.png" alt="Professional detailer polishing a black luxury car to a mirror finish" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              You&apos;ve probably seen <strong className="text-emerald-400">car detailing prices</strong> ranging from $150 to over $1,000 and wondered: <strong className="text-emerald-400">is car detailing worth it?</strong> The short answer is yes — but only if you understand what you&apos;re paying for. Professional detailing goes far beyond a basic car wash, and the value it provides in paint protection, interior preservation, and resale value can pay for itself many times over.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">What Does Professional Car Detailing Actually Include?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Understanding <strong className="text-emerald-400">what car detailing includes</strong> helps explain the price difference between a $15 car wash and a $300 detail. A full professional detail typically covers:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Exterior Detail</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Multi-stage hand wash</li>
                    <li>Clay bar decontamination</li>
                    <li>Machine polish / paint correction</li>
                    <li>Wax, sealant, or ceramic coating</li>
                    <li>Wheel and tire deep clean + dressing</li>
                    <li>Trim restoration</li>
                    <li>Glass polishing and treatment</li>
                    <li>Engine bay cleaning (optional)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Interior Detail</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Full vacuum (seats, carpets, crevices)</li>
                    <li>Leather cleaning and conditioning</li>
                    <li>Fabric shampooing / extraction</li>
                    <li>Dashboard and console deep clean</li>
                    <li>Vent and crevice detailing</li>
                    <li>Interior glass cleaning</li>
                    <li>Odor elimination</li>
                    <li>UV protectant application</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Car Detailing Cost Breakdown by Service Level</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Basic Wash & Wax</h4><p className="text-slate-400 text-sm">Exterior wash, dry, spray wax, tire shine</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$50 - $100</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Full Interior + Exterior Detail</h4><p className="text-slate-400 text-sm">Hand wash, clay bar, polish, wax, full interior clean</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$150 - $300</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                  <div><h4 className="text-white font-semibold">Premium Detail</h4><p className="text-slate-400 text-sm">Paint correction, sealant, leather treatment, engine bay</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$300 - $500</span>
                </div>
                <div className="flex justify-between items-center">
                  <div><h4 className="text-white font-semibold">Show-Quality Detail</h4><p className="text-slate-400 text-sm">Multi-stage correction, ceramic coating, every surface restored</p></div>
                  <span className="text-emerald-400 font-bold text-lg">$500 - $1,000+</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Car Detailing vs Car Wash: What&apos;s the Difference?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Car Wash ($10-$25)</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Removes surface dirt</li>
                    <li>Automated or quick hand wash</li>
                    <li>Basic interior vacuum</li>
                    <li>No paint correction</li>
                    <li>Temporary shine from spray wax</li>
                    <li>Can cause swirl marks</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-emerald-400 font-semibold mb-3">Professional Detail ($150-$500+)</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>Removes embedded contaminants</li>
                    <li>Corrects paint imperfections</li>
                    <li>Deep cleans every surface</li>
                    <li>Applies lasting protection</li>
                    <li>Restores like-new appearance</li>
                    <li>Protects paint from damage</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Detailing Protects Your Vehicle&apos;s Value</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              This is where <strong className="text-emerald-400">professional car detailing</strong> truly pays for itself. Regular detailing preserves both the exterior and interior condition of your vehicle, which directly impacts resale value:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Resale value boost</strong> — A well-maintained vehicle can sell for 10-15% more than a neglected one. On a $30,000 car, that&apos;s $3,000-$4,500.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Paint preservation</strong> — Regular polishing and protection prevents UV damage, oxidation, and contamination that permanently damage paint.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">•</span><div><strong className="text-white">Interior longevity</strong> — Conditioning leather and protecting fabrics prevents cracking, fading, and staining that devalue interiors.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">When Is Car Detailing Especially Worth It?</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">→</span><div><strong className="text-white">Before selling your car</strong> — A $200-$300 detail can add $1,000+ to your selling price.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">→</span><div><strong className="text-white">After winter</strong> — Salt, sand, and road grime accumulate and damage paint if not properly removed.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">→</span><div><strong className="text-white">New car protection</strong> — Detailing + ceramic coating on a new car locks in that showroom condition.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">→</span><div><strong className="text-white">Special events</strong> — Weddings, car shows, or photo shoots where appearance matters.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">→</span><div><strong className="text-white">After buying a used car</strong> — A deep detail removes the previous owner&apos;s wear and refreshes the vehicle for you.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">How Often Should You Detail Your Car?</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              For most vehicle owners, a full professional detail 2-3 times per year provides optimal protection. If you park outdoors, live in a harsh climate, or drive a dark-colored vehicle that shows imperfections easily, consider quarterly detailing. Between details, regular hand washing with proper technique maintains the protective layers.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              <strong className="text-emerald-400">Is car detailing worth the price?</strong> When you factor in paint preservation, resale value protection, and the satisfaction of driving a truly clean car, professional detailing is one of the best investments you can make in your vehicle. The key is choosing a skilled detailer who uses quality products and takes the time to do the job right.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Start with a full detail and see the difference for yourself. Once you experience what a professionally detailed car looks and feels like, you&apos;ll understand why millions of car owners consider it essential maintenance.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Find a Professional Detailer</h3>
            <p className="text-slate-300 mb-6">Connect with verified detailing professionals in your area for a quote.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Detailing Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Detailing</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Auto Care</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Paint Protection</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Interior Cleaning</span>
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

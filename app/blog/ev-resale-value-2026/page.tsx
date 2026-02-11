"use client";

import Link from "next/link";
import Image from "next/image";

export default function EVResaleValue2026() {
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
              Insights
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              EV Resale Value: Which Electric Cars Hold Their Value Best in 2026?
            </h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>13 min read</span>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/blog/ev-resale-value-2026.png"
              alt="Premium electric vehicles displayed in a luxury dealership showroom"
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
              One of the biggest concerns for EV buyers is depreciation. Early electric vehicles lost value rapidly, but the market has shifted significantly. Some EVs now hold their value as well as — or better than — their gas-powered counterparts. Here&apos;s which ones are worth your money in 2026 and what drives EV resale value.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              How EV Depreciation Has Changed
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              In the early days of mass-market EVs, depreciation was brutal. First-generation Nissan Leafs and early Chevy Bolts lost 50-60% of their value in three years. Buyers feared battery degradation, limited range, and rapidly improving newer models making theirs obsolete.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              By 2026, the picture is different. Battery technology has matured, charging infrastructure is widespread, and consumer confidence in EVs has grown. The used EV market is now established with real demand, not just early adopters hunting for deals.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Top EVs for Resale Value in 2026
            </h2>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4">1. Tesla Model Y</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">3-Year Retention:</strong> ~65-70%</p>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Why It Holds Value:</strong></p>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• Best-selling EV globally with massive demand</li>
                    <li>• Supercharger network remains a major advantage</li>
                    <li>• Over-the-air updates keep older models current</li>
                    <li>• Strong brand recognition in used market</li>
                  </ul>
                </div>
                <div>
                  <p className="text-slate-300 text-sm">The Model Y consistently ranks among the top vehicles of any type for resale value. High demand and limited discounting on new models keep used prices firm.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4">2. Tesla Model 3</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">3-Year Retention:</strong> ~60-65%</p>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Why It Holds Value:</strong></p>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• The Highland refresh added significant appeal</li>
                    <li>• Lower entry price creates broader used market demand</li>
                    <li>• Proven reliability track record</li>
                    <li>• Supercharger access</li>
                  </ul>
                </div>
                <div>
                  <p className="text-slate-300 text-sm">The Model 3 benefits from being the most recognized EV on the road. Used buyers feel comfortable with the known quantity.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4">3. Hyundai Ioniq 5</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">3-Year Retention:</strong> ~58-63%</p>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Why It Holds Value:</strong></p>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• 800V architecture enables ultra-fast charging</li>
                    <li>• Distinctive retro-futuristic design ages well</li>
                    <li>• Vehicle-to-load (V2L) feature adds utility</li>
                    <li>• Strong reliability ratings</li>
                  </ul>
                </div>
                <div>
                  <p className="text-slate-300 text-sm">The Ioniq 5&apos;s unique styling and fast-charging capability make it highly desirable on the used market. It doesn&apos;t look like anything else on the road.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4">4. Rivian R1S</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">3-Year Retention:</strong> ~60-65%</p>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Why It Holds Value:</strong></p>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• Limited production keeps supply low</li>
                    <li>• Only premium electric 3-row SUV available</li>
                    <li>• Adventure-oriented brand loyalty</li>
                    <li>• Off-road capability unique in EV space</li>
                  </ul>
                </div>
                <div>
                  <p className="text-slate-300 text-sm">The R1S fills a niche no other EV covers — a capable, family-sized electric SUV. Limited availability and strong demand keep values high.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-4">5. Kia EV6</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">3-Year Retention:</strong> ~55-60%</p>
                  <p className="text-slate-300 text-sm mb-2"><strong className="text-white">Why It Holds Value:</strong></p>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>• Shares Ioniq 5&apos;s 800V platform</li>
                    <li>• GT variant offers performance credibility</li>
                    <li>• Aggressive styling attracts younger buyers</li>
                    <li>• Competitive pricing when new supports used values</li>
                  </ul>
                </div>
                <div>
                  <p className="text-slate-300 text-sm">The EV6 benefits from the same excellent platform as the Ioniq 5 with sportier styling that appeals to a different buyer demographic.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              EVs That Depreciate the Fastest
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Not all EVs hold value equally. Some categories tend to depreciate more rapidly:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Luxury EVs with high MSRPs</strong> — Vehicles like the Mercedes EQS and BMW iX lose value quickly because used buyers are price-sensitive. A $100K+ EV faces steep percentage drops even if the dollar amount is similar to a cheaper model.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">2.</span>
                  <div>
                    <strong className="text-white">First-generation models</strong> — The Nissan Ariya, VW ID.4 first edition, and similar early entries depreciate faster as newer versions with better range and features arrive.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">3.</span>
                  <div>
                    <strong className="text-white">EVs with limited charging networks</strong> — Vehicles that relied solely on CCS before the NACS standard adoption may see lower demand in the used market.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Heavily discounted new models</strong> — When manufacturers slash new prices (as Tesla did in 2023), used values drop in lockstep. Buyers won&apos;t pay used prices close to new.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              What Factors Affect EV Resale Value?
            </h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Battery Health</strong> — This is the single biggest factor. An EV with 95% battery health at 3 years commands significantly more than one at 85%. Battery degradation data from services like Recurrent is now used by dealers and buyers alike.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Range When New</strong> — EVs with 300+ miles of range hold value better than those under 250 miles. Range anxiety still influences used buyers.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Charging Speed</strong> — Vehicles with 800V architecture and fast DC charging (Ioniq 5, EV6, Porsche Taycan) are more desirable.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Paint and Body Condition</strong> — Just like gas cars, exterior condition matters. EVs with <Link href="/blog/ev-paint-protection-guide" className="text-emerald-400 hover:underline">proper paint protection</Link> (ceramic coating, PPF) sell for more because repainting an EV is expensive and requires specialized shops.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Software and Feature Access</strong> — Some manufacturers lock features behind subscriptions. Vehicles with permanently unlocked features (like Tesla&apos;s Full Self-Driving if purchased outright) transfer value to the next owner.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Tax Credit Eligibility</strong> — Used EVs that qualify for the federal used EV tax credit ($4,000) are more attractive to buyers, effectively boosting their market value.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              How to Maximize Your EV&apos;s Resale Value
            </h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Protect the battery</strong> — Avoid frequent DC fast charging when possible, keep the charge between 20-80% for daily use, and avoid leaving the battery at 0% or 100% for extended periods.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">2.</span>
                  <div>
                    <strong className="text-white">Protect the paint early</strong> — Apply ceramic coating or PPF within the first few weeks of ownership. This preserves the exterior and signals to future buyers that the car was well maintained.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Keep service records</strong> — Even though EVs need less maintenance, documented tire rotations, brake fluid changes, and cabin filter replacements demonstrate care.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Maintain the interior</strong> — Vegan leather seats, common in many EVs, can crack or stain without care. Regular cleaning and conditioning preserves the cabin.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">5.</span>
                  <div>
                    <strong className="text-white">Time your sale</strong> — Sell before the next model year refresh if your manufacturer tends to make significant changes. The announcement of a new version immediately impacts current model values.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Final Thoughts
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              EV resale values have stabilized significantly compared to just a few years ago. The best-performing models — Tesla Model Y, Ioniq 5, Rivian R1S, and others with strong brand loyalty, good range, and fast charging — now depreciate at rates comparable to popular gas vehicles.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The key takeaway: buying an EV is no longer a guaranteed path to rapid depreciation. Choose a model with strong demand, maintain it properly, and protect the battery and exterior — and your EV will hold its value well when it&apos;s time to sell or trade in.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Protect Your EV&apos;s Value</h3>
            <p className="text-slate-300 mb-6">Find certified detailing and paint protection specialists who can help preserve your electric vehicle&apos;s appearance and resale value.</p>
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
              <Link href="/blog/ev-paint-protection-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Protect Your EV&apos;s Paint: Complete Guide</p>
              </Link>
              <Link href="/blog/should-you-buy-used-ev" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Should You Buy a Used EV?</p>
              </Link>
              <Link href="/blog/best-used-evs-under-25k" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Best Used EVs Under $25K</p>
              </Link>
            </div>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Resale Value</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Depreciation</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Tesla</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Used EVs</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Buying Guide</span>
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

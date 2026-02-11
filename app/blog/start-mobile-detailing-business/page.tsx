"use client";

import Link from "next/link";
import Image from "next/image";

export default function StartMobileDetailingBusiness() {
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
              How to Start a Mobile Car Detailing Business in 2026
            </h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>15 min read</span>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/blog/start-mobile-detailing-business.png"
              alt="Professional mobile car detailing setup in a residential driveway"
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
              Mobile car detailing is one of the most accessible businesses to start in the automotive industry. Low overhead, flexible scheduling, and growing demand make it an attractive option for car enthusiasts and entrepreneurs alike. Here&apos;s a practical roadmap for launching a mobile detailing business in 2026.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Why Mobile Detailing Is a Strong Business Opportunity
            </h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Low startup cost</strong> — You can start with $3,000-$10,000 in equipment versus $50,000+ for a fixed-location shop.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">No lease required</strong> — Your workspace is wherever the customer&apos;s car is. No rent, no build-out, no long-term lease commitments.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Convenience sells</strong> — Customers pay a premium for someone who comes to their home or office. Time-strapped professionals and families are willing to pay more for convenience.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Recurring revenue</strong> — Detailing is a repeat service. A satisfied customer who comes back monthly is worth $2,000-$5,000+ per year.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">EV growth creates new demand</strong> — Electric vehicle owners are particularly invested in maintaining their cars&apos; appearance. Many prefer mobile detailing because their cars are often garaged at home charging overnight.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Essential Equipment to Start
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              You don&apos;t need everything on day one. Here&apos;s what to prioritize at each stage:
            </p>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Minimum Viable Setup ($3,000 - $5,000)</h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  <div><strong className="text-white">Pressure washer</strong> — Electric, 1,500-2,000 PSI. Portable and quiet for residential areas.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  <div><strong className="text-white">Foam cannon</strong> — Attaches to pressure washer for pre-wash foam application.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  <div><strong className="text-white">Dual-action polisher</strong> — For paint correction and applying sealants. A good DA polisher costs $150-$400.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  <div><strong className="text-white">Wet/dry vacuum</strong> — For interior cleaning. Cordless options work well for mobile setups.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  <div><strong className="text-white">Microfiber towels</strong> — Buy in bulk. You&apos;ll use 10-20 per detail. Budget $200-$300 for initial stock.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  <div><strong className="text-white">Chemicals and products</strong> — Car soap, iron remover, clay bar, interior cleaner, tire dressing, sealant. Start with one quality brand.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  <div><strong className="text-white">Water tank</strong> — 50-100 gallon tank for locations without water access. Essential for true mobile operation.</div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-bold text-white mt-8 mb-4">Growth Setup ($5,000 - $10,000 additional)</h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  <div><strong className="text-white">Enclosed trailer or van</strong> — Protects equipment, looks professional, and serves as mobile advertising.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  <div><strong className="text-white">Generator or battery system</strong> — For power at locations without outlets. Lithium battery stations are quieter than generators.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  <div><strong className="text-white">Carpet extractor</strong> — For deep interior cleaning and stain removal. Adds $100-$200 per job to your service menu.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  <div><strong className="text-white">Ceramic coating kit</strong> — Once you&apos;re comfortable with paint correction, adding ceramic coating services can bring in $500-$1,500 per vehicle.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">•</span>
                  <div><strong className="text-white">Paint depth gauge</strong> — Essential for safe paint correction. Tells you how much clear coat is available before polishing.</div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Setting Your Prices
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Pricing is one of the most important decisions you&apos;ll make. Price too low and you attract bargain hunters who don&apos;t value your work. Price too high before you have the reputation to back it, and you won&apos;t get booked.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-emerald-400 font-semibold mb-4">Typical Mobile Detailing Rates (2026)</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-white font-medium mb-2">Exterior Services</p>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li><strong className="text-white">Basic wash + dry:</strong> $40 - $80</li>
                    <li><strong className="text-white">Exterior detail:</strong> $150 - $300</li>
                    <li><strong className="text-white">Paint correction (1-step):</strong> $300 - $600</li>
                    <li><strong className="text-white">Paint correction (2-step):</strong> $500 - $1,000</li>
                    <li><strong className="text-white">Ceramic coating:</strong> $500 - $1,500</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-medium mb-2">Interior Services</p>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li><strong className="text-white">Interior detail:</strong> $150 - $300</li>
                    <li><strong className="text-white">Full detail (int + ext):</strong> $250 - $500</li>
                    <li><strong className="text-white">Deep clean / extraction:</strong> $300 - $600</li>
                    <li><strong className="text-white">Odor removal:</strong> $100 - $250</li>
                    <li><strong className="text-white">Leather conditioning:</strong> $75 - $150</li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-400 text-sm mt-4">Prices vary by market and vehicle size. SUVs and trucks typically cost 20-40% more than sedans.</p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Getting Your First Customers
            </h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Start with friends and family</strong> — Detail their cars for free or at a discount. Take high-quality before-and-after photos for your portfolio.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">2.</span>
                  <div>
                    <strong className="text-white">List on Google Business Profile</strong> — This is free and critical. Most customers search &quot;mobile detailing near me.&quot; Optimize your listing with photos, services, and pricing.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Join local Facebook groups and Nextdoor</strong> — Community groups are where people ask for service recommendations. Being active and helpful builds trust before you ever pitch your services.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Post on Instagram and TikTok</strong> — Detailing content is hugely popular. Satisfying before-and-after videos and foam cannon clips attract followers who become customers.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">5.</span>
                  <div>
                    <strong className="text-white">Partner with local businesses</strong> — Offer fleet detailing to real estate agents, car dealerships, or corporate offices. One fleet account can fill your entire week.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">6.</span>
                  <div>
                    <strong className="text-white">List on service directories</strong> — Platforms like Yelp, Thumbtack, and automotive directories connect you with customers actively searching for detailing services.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Legal and Business Basics
            </h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Business registration</strong> — Register as an LLC for liability protection. Cost varies by state, typically $50-$500.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Insurance</strong> — Get general liability insurance ($500-$1,500/year) and consider garage keeper&apos;s insurance which covers damage to customers&apos; vehicles while in your care.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Water discharge regulations</strong> — Many municipalities have rules about wash water runoff. Research your local regulations and invest in a water reclaim mat if needed.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Business bank account</strong> — Separate personal and business finances from day one. This simplifies taxes and looks professional.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Booking and payment system</strong> — Use a scheduling tool like Square Appointments or Urable (built for detailers). Accept cards from day one — cash-only businesses lose customers.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Common Mistakes to Avoid
            </h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Underpricing your services</strong> — Racing to be the cheapest means you attract price-sensitive customers and burn out fast. Charge what your time and skill are worth.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">2.</span>
                  <div>
                    <strong className="text-white">Skipping insurance</strong> — One accidental scratch on a customer&apos;s $80,000 car without insurance could end your business.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Buying too much equipment upfront</strong> — Start lean. Add equipment as demand justifies it. You don&apos;t need a $30,000 van setup to detail your first 50 cars.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">4.</span>
                  <div>
                    <strong className="text-white">No before-and-after photos</strong> — Documentation protects you (proving pre-existing damage) and markets your business simultaneously.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">5.</span>
                  <div>
                    <strong className="text-white">Ignoring reviews</strong> — Ask every happy customer for a Google review. Five-star reviews are the most powerful marketing tool in local services.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Final Thoughts
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Starting a mobile detailing business in 2026 is one of the most realistic paths into automotive entrepreneurship. The barrier to entry is low, the demand is real, and the profit margins are strong once you build a client base.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Focus on quality work, build your reputation through reviews and social media, and gradually expand your services and equipment as revenue grows. The detailers who succeed long-term are the ones who treat every car like it&apos;s their own.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Already a Detailing Professional?</h3>
            <p className="text-slate-300 mb-6">List your business in our directory and connect with customers searching for detailing services in your area.</p>
            <Link
              href="/for-business"
              className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
            >
              List Your Business
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or explore our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link> to see how providers are listed.</p>
          </div>

          {/* Related Articles */}
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/start-car-detailing-business" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">How to Start a Car Detailing Business</p>
              </Link>
              <Link href="/blog/is-car-detailing-worth-it" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Is Car Detailing Worth It?</p>
              </Link>
              <Link href="/blog/ceramic-coating-cost-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Ceramic Coating Cost in 2026</p>
              </Link>
            </div>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Mobile Detailing</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Business Guide</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Detailing</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Entrepreneurship</span>
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

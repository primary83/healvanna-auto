"use client";

import Link from "next/link";
import Image from "next/image";

export default function WinterEVCareGuide() {
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
              Winter EV Care: Protecting Your Electric Car Beyond the Battery
            </h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>13 min read</span>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/blog/winter-ev-care-guide.png"
              alt="White Tesla Model Y being hand-washed in a snowy driveway"
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
              Most winter EV advice focuses on range loss and battery performance. That&apos;s important, but it&apos;s only part of the picture. Road salt, ice, slush, and freezing temperatures attack your EV&apos;s paint, undercarriage, wheels, and interior just as aggressively. Here&apos;s how to protect your entire vehicle through the cold months.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Road Salt: Your EV&apos;s Worst Winter Enemy
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Road salt is devastating to any vehicle, but EVs deserve extra attention because of the components mounted underneath — the battery pack, electric motors, and high-voltage cables are all exposed to salt spray from the road surface.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h4 className="text-emerald-400 font-semibold mb-3">What Salt Does</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Corrodes metal components</strong> — Suspension, brake calipers, and exposed fasteners rust faster with salt exposure.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Damages paint and clear coat</strong> — Salt particles scratch the surface and chemical reactions can etch through clear coat if left unwashed.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Attacks wheel finishes</strong> — Alloy wheels and their protective coatings break down from prolonged salt contact.</div>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-3 font-bold">•</span>
                  <div><strong className="text-white">Corrodes charging port</strong> — The charging port pins and surrounding area are exposed to salt spray while driving. Corrosion here can cause charging issues.</div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Winter Washing Strategy
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              In winter, washing your EV isn&apos;t just about looks — it&apos;s maintenance. The goal is to remove salt before it causes damage.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Wash every 1-2 weeks minimum</strong> — If your area uses road salt, bi-weekly washing is the baseline. After heavy storms or extended highway driving, wash sooner.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">2.</span>
                  <div>
                    <strong className="text-white">Focus on the undercarriage</strong> — Use a pressure washer or touchless car wash with undercarriage spray. This is where salt accumulates most and where your battery pack lives.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Clean the wheel wells</strong> — Salt and slush pack into wheel wells and sit against the body. Spray them out thoroughly during every wash.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Wipe the charging port</strong> — After washing, dry the charging port area completely. A damp charging port in freezing temperatures can ice over and make plugging in difficult.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">5.</span>
                  <div>
                    <strong className="text-white">Avoid washing in below-freezing temps</strong> — Water in door handles, charge port covers, and window seals can freeze. If you must wash in freezing conditions, use a touchless wash and dry the car immediately.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Paint Protection for Winter
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Winter is when paint protection pays for itself. If you invested in <Link href="/blog/ev-paint-protection-guide" className="text-emerald-400 hover:underline">ceramic coating or PPF</Link> before winter, your car is in good shape. If not, here&apos;s what you can do now:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Apply a paint sealant</strong> — If you don&apos;t have ceramic coating, a synthetic paint sealant provides 3-6 months of protection. It creates a barrier between road salt and your paint. Cost: $20-$50 DIY or $100-$300 professionally applied.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Spray ceramic boost</strong> — If you already have ceramic coating, a spray ceramic booster refreshes the hydrophobic layer mid-winter. Apply after washing every 4-6 weeks.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Protect the wheels</strong> — Apply a wheel-specific sealant or ceramic coating. This makes brake dust and salt easier to wash off and prevents etching of the wheel finish.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Treat rubber seals</strong> — Apply silicone-based protectant to door seals, trunk seals, and charge port gaskets. This prevents them from freezing shut and cracking in cold weather.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Interior Winter Care
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Salt doesn&apos;t just attack the outside. It gets tracked in on shoes and boots, staining carpets and floor mats.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">All-weather floor mats are essential</strong> — Rubber floor mats with raised edges catch snow, slush, and salt from shoes. Without them, your carpet absorbs moisture and develops a permanent salt stain pattern.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Clean mats weekly</strong> — Pull them out and rinse off the accumulated salt water. Letting salt sit in pooled water on rubber mats can still damage the carpet underneath if it seeps through.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Condition leather and vinyl seats</strong> — Cold, dry air causes leather and vegan leather to dry out and crack. Apply conditioner every 4-6 weeks during winter to keep the material supple.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Keep a microfiber towel in the car</strong> — Use it to wipe condensation off windows and the touchscreen. EVs with large glass areas tend to fog up more in cold weather.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Tire and Wheel Care
            </h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Switch to winter tires</strong> — EVs are heavier than comparable gas cars due to the battery pack. This extra weight combined with instant torque makes winter tires even more important for traction. All-season tires lose grip below 45°F (7°C).
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Check tire pressure frequently</strong> — Tire pressure drops about 1 PSI for every 10°F drop in temperature. Underinflated tires reduce range and wear unevenly. Check at least monthly in winter.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Consider a dedicated winter wheel set</strong> — Running winter tires on a separate set of steel or basic alloy wheels protects your expensive OEM wheels from salt, curb rash from snow-covered curbs, and pothole damage.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Clean brake dust more frequently</strong> — Even though EVs use regenerative braking, the mechanical brakes still engage in cold weather. Salt and brake dust combined are particularly corrosive to wheel finishes.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Charging in Cold Weather
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              While this article focuses on physical care rather than battery management, there are a few charging-related tips that affect the vehicle itself:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Keep the charge port clean and dry</strong> — Ice can form inside the charge port door, making it difficult to open or preventing a proper connection. Apply a thin layer of silicone spray to the port gasket.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Precondition while plugged in</strong> — Use your car&apos;s scheduled departure or preconditioning feature while it&apos;s still connected to the charger. This heats the cabin and battery using grid power instead of battery power, preserving range.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">•</span>
                  <div>
                    <strong className="text-white">Garage your EV if possible</strong> — Even an unheated garage keeps the battery 10-20°F warmer than outside temperatures. A warmer battery means better efficiency, faster charging, and less strain on the thermal management system.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Spring Recovery Checklist
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Once winter ends, give your EV a thorough recovery service:
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">☐</span>
                  <div>Full exterior wash with thorough undercarriage rinse</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">☐</span>
                  <div>Clay bar treatment to remove embedded contaminants</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">☐</span>
                  <div>Inspect paint for chips and scratches — touch up before rust starts</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">☐</span>
                  <div>Reapply ceramic coating or sealant</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">☐</span>
                  <div>Deep clean interior — remove salt stains from carpet and mats</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">☐</span>
                  <div>Swap winter tires back to all-season or summer tires</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">☐</span>
                  <div>Inspect brake pads and rotors for salt corrosion</div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3">☐</span>
                  <div>Check and condition all rubber seals and gaskets</div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Final Thoughts
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Winter EV care goes well beyond plugging in and hoping for the best. Road salt, freezing temperatures, and moisture threaten your paint, undercarriage, interior, and components for months at a time.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              The investment in winter protection — regular washing, paint sealant or ceramic coating, rubber seal treatment, and proper tires — is small compared to the cost of repairing salt damage or restoring a neglected exterior. Take care of your EV through winter, and it&apos;ll emerge in spring looking as good as it did in fall.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Get Your EV Winter-Ready</h3>
            <p className="text-slate-300 mb-6">Find detailing professionals who can apply paint sealant, ceramic coating, and full winter protection packages for your electric vehicle.</p>
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
              <Link href="/blog/cold-weather-ev-range" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Cold Weather EV Range: What to Expect</p>
              </Link>
              <Link href="/blog/winter-car-care-checklist" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                <p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Winter Car Care Checklist</p>
              </Link>
            </div>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Winter Care</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">EV Maintenance</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Paint Protection</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Road Salt</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Detailing</span>
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

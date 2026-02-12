"use client";

import Link from "next/link";
import Image from "next/image";

export default function RoadTripCarPrep() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">How to Prep Your Car for a Road Trip</h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 11, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>12 min read</span>
            </div>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image src="/blog/road-trip-car-prep.png" alt="Overhead view of a car trunk being packed for a road trip with organized gear and supplies" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              A road trip is the best stress test for any vehicle. Hundreds of miles at highway speed will expose weak tires, low fluids, and deferred maintenance that might not matter for your daily commute. Here&apos;s a thorough pre-trip checklist to keep you safe and avoid a breakdown far from home.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Pre-Trip Mechanical Checklist</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Tires</strong> — Check tread depth (minimum 4/32&quot; for highway driving), look for uneven wear, cracks, or bulges. Inflate to the pressure listed on the driver&apos;s door jamb sticker, not the tire sidewall. Don&apos;t forget the spare.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Oil and filter</strong> — If you&apos;re within 1,000 miles of your next oil change, do it before the trip. Highway miles are easy on oil, but starting a trip with fresh oil is peace of mind.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Coolant</strong> — Check the level when the engine is cold. The reservoir should be between the min and max marks. If it&apos;s low, top off with the correct type (check your owner&apos;s manual).</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Brakes</strong> — Listen for squealing or grinding. If your brakes are near replacement age, get them done before the trip. Mountain driving demands strong brakes.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Battery</strong> — If your battery is 3+ years old, have it tested. Heat and extended use accelerate battery failure. A dead battery 200 miles from home ruins a trip fast.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Wipers and washer fluid</strong> — Replace worn wipers and fill the washer fluid reservoir. Highway driving kicks up bugs and road grime constantly.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Belts and hoses</strong> — Visually inspect for cracks, fraying, or soft spots. A serpentine belt failure on the highway will leave you stranded.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Lights</strong> — Check all headlights, taillights, brake lights, and turn signals. A burned-out light is an easy ticket and a safety hazard on unfamiliar roads at night.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">EV-Specific Prep</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">If you&apos;re road tripping in an EV, add these to your checklist:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Plan charging stops</strong> — Use your car&apos;s built-in planner or apps like A Better Route Planner (ABRP) to map DC fast chargers along your route with backups.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Install charging apps</strong> — Download and set up accounts for ChargePoint, Electrify America, EVgo, and Tesla (if applicable) before you leave.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Bring your Level 1/Level 2 cable</strong> — Your mobile charging cable is your backup. Many hotels and Airbnbs have standard outlets or 240V outlets you can use.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Check tire pressure carefully</strong> — EVs are heavier than gas cars and more sensitive to tire pressure. Proper inflation is critical for maximizing range.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Update your car&apos;s software</strong> — Manufacturers push navigation and charging updates. Make sure you&apos;re on the latest version before departing.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">The Interior Detail</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">A clean interior makes long hours in the car significantly more enjoyable:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Vacuum everything</strong> — Seats, carpets, crevices, and the trunk. Start the trip with a clean cabin.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Clean the windshield inside and out</strong> — A dirty interior windshield creates terrible glare at night and in direct sun. Clean it with glass cleaner and a microfiber towel.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Organize the cabin</strong> — Set up a center console organizer, door pocket bags, or a seatback organizer for snacks, chargers, and essentials within arm&apos;s reach.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Install a fresh air freshener</strong> — A subtle vent clip freshener makes the cabin more pleasant for hours of driving.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Emergency Kit Essentials</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-slate-300">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 pr-4 text-white font-semibold">Category</th>
                      <th className="text-left py-3 text-white font-semibold">Items</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Safety</td><td className="py-3">Reflective triangles, high-vis vest, flashlight with extra batteries</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Tire</td><td className="py-3">Spare tire (inflated), jack, lug wrench, tire inflator/sealant kit</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Electrical</td><td className="py-3">Jumper cables or jump starter pack, phone charger, USB cables</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">Fluid</td><td className="py-3">Extra quart of oil, coolant, washer fluid</td></tr>
                    <tr className="border-b border-slate-700/50"><td className="py-3 pr-4 font-medium text-white">First Aid</td><td className="py-3">Basic first aid kit, medications, hand sanitizer</td></tr>
                    <tr><td className="py-3 pr-4 font-medium text-white">Weather</td><td className="py-3">Blanket, rain poncho, sunscreen, water bottles</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Protecting the Exterior</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <p className="text-slate-300 mb-4">Highway driving is brutal on your paint. Hundreds of miles of bug splatter, road tar, and rock chips add up:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Wash and wax before you go</strong> — A fresh coat of wax or sealant makes bug and tar removal much easier when you get back. The slippery surface prevents contaminants from bonding.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Apply a temporary paint protection film</strong> — If you don&apos;t have PPF, temporary film for the hood and bumper is available for about $30 and peels off after the trip.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Pack a bug remover and microfiber towels</strong> — Clean bugs off the front end daily. Left overnight, they etch into clear coat, especially in summer heat.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Consider ceramic coating</strong> — If you road trip frequently, a ceramic coating on the front end makes decontamination dramatically easier year-round.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Comfort and Entertainment</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Download offline maps</strong> — Cell service can be spotty in rural areas. Download your route in Google Maps or Apple Maps for offline navigation.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Download podcasts and music</strong> — Streaming will cut out in dead zones. Pre-download entertainment for the whole trip.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Bring a quality phone mount</strong> — A secure, vibration-free phone mount keeps navigation visible and your phone off the seat.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Sunshade for parked stops</strong> — A windshield sunshade keeps the cabin bearable when you stop for lunch or sightseeing.</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div><strong className="text-white">Seat cushion for long drives</strong> — If your car doesn&apos;t have the most supportive seats, a quality lumbar cushion prevents back pain on 4+ hour drives.</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">One Week Before Checklist</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Schedule oil change if due within 1,000 miles</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Check and replace worn tires, wipers, or brake pads</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Have the battery tested if it&apos;s 3+ years old</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Verify your roadside assistance membership is current</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Download offline maps and entertainment</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Order any accessories you need (phone mount, organizers, cushion)</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Day Before Checklist</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Wash the car and apply wax/sealant</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Check tire pressure (including spare)</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Top off all fluids (oil, coolant, washer fluid)</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Vacuum and clean the interior</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Pack the emergency kit</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Charge your EV to 100% (or fill the gas tank)</div></li>
                <li className="flex items-start"><span className="text-emerald-400 mr-3 font-bold">✓</span><div>Set up cabin organizers and load the trunk</div></li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">Final Thoughts</h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              A little preparation prevents a lot of roadside stress. Most road trip breakdowns are caused by issues that were already present before the trip started — worn tires, old batteries, low fluids, and deferred maintenance.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Spend an hour going through this checklist before you leave, and you&apos;ll drive with confidence knowing your car is ready for whatever the road throws at it. The best road trips are the ones where the car is invisible — it just works while you enjoy the drive.
            </p>
          </article>

          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Pre-Trip Service</h3>
            <p className="text-slate-300 mb-6">Find certified mechanics and detailers near you to get your car road-trip ready with a full inspection and detail.</p>
            <Link href="/car-detailing" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse Services
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
            <p className="mt-4 text-sm text-slate-400">Or find local providers in our <Link href="/directory" className="text-[#4a90d9] hover:underline">national directory</Link>.</p>
          </div>

          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/ev-road-trip-planning-guide" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">EV Road Trip Planning Guide</p></Link>
              <Link href="/blog/ev-road-trip-accessories" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Best EV Road Trip Accessories</p></Link>
              <Link href="/blog/best-dashcams-car-protection-2026" className="group p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-emerald-500/30 transition-colors"><p className="text-white font-medium group-hover:text-emerald-400 transition-colors text-sm">Best Dashcams for Car Protection</p></Link>
            </div>
          </div>

          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Road Trip</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Maintenance</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Travel</span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">Car Prep</span>
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

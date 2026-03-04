"use client";

import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function BestUsedEVs2026() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto relative">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
              Buying Guide
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Best Used EVs to Buy Right Now in 2026
            </h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>February 28, 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>13 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/blog/best-used-evs-2026.png"
              alt="Row of certified pre-owned electric vehicles at a dealership"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert prose-emerald max-w-none">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The <strong className="text-emerald-400">best used EVs in 2026</strong> represent an unprecedented opportunity for budget-conscious buyers. Rapid depreciation on electric vehicles means that models originally priced at $40,000 or more are now available for half their original cost, often with years of battery warranty remaining. Whether you want a commuter car under $20K or a premium crossover under $40K, the used EV market has never been this strong. Here is our definitive guide to the smartest pre-owned electric vehicles you can buy right now.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Why Used EVs Are a Smart Buy in 2026
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Electric vehicles have historically depreciated faster than their gasoline counterparts, and that works entirely in the used buyer&apos;s favor. A three-year-old EV typically loses 40-50% of its original sticker price, compared to 30-35% for an equivalent gas vehicle. That steep depreciation curve means you can pick up a well-equipped electric car for a fraction of what the first owner paid, while still enjoying the vast majority of its useful life.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Battery technology has also matured significantly. The EVs built from 2022 onward feature advanced thermal management systems and more durable cell chemistry that hold up far better over time than earlier generations. Real-world data now shows that most modern EV batteries retain 90% or more of their original capacity after 100,000 miles. That means a used EV with 30,000 miles on the odometer still has the vast majority of its range intact, making it a genuinely reliable purchase.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The charging infrastructure has expanded dramatically as well. In early 2026, there are over 80,000 public fast-charging stations across the United States, and the Tesla Supercharger network is now open to most non-Tesla EVs via the NACS adapter standard. Owning a used EV today is far more practical than it was just two or three years ago.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Best Used EVs Under $20,000
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The sub-$20,000 segment is where <strong className="text-emerald-400">used EV value</strong> truly shines. These vehicles have taken the biggest depreciation hits, but they still deliver reliable daily transportation with minimal operating costs.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">
              Nissan Leaf (2022-2023)
            </h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-500">Range</span>
                  <p className="text-white font-semibold">226 miles (Plus)</p>
                </div>
                <div>
                  <span className="text-slate-500">Used Price Range</span>
                  <p className="text-white font-semibold">$13,000 - $17,000</p>
                </div>
                <div>
                  <span className="text-slate-500">Battery</span>
                  <p className="text-white font-semibold">62 kWh (Plus) / 40 kWh (S)</p>
                </div>
                <div>
                  <span className="text-slate-500">Fast Charging</span>
                  <p className="text-white font-semibold">CHAdeMO up to 50 kW</p>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              The Nissan Leaf remains one of the most affordable entry points into EV ownership. The 2022-2023 Leaf Plus with its 62 kWh battery pack delivers up to 226 miles of real-world range, which is more than enough for daily commuting and errands. Nissan&apos;s ProPILOT Assist driver-aid suite comes standard on SV and above trims, providing adaptive cruise control and lane-centering. The biggest caveat is the CHAdeMO fast-charging connector, which is becoming less common at public stations, so this car works best for buyers who primarily charge at home.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <Link href="/ev-deals/nissan-leaf" className="text-emerald-400 hover:text-emerald-300 underline">Compare current Nissan Leaf deals</Link> to see what&apos;s available near you.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">
              Chevrolet Bolt EUV (2022-2023)
            </h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-500">Range</span>
                  <p className="text-white font-semibold">247 miles</p>
                </div>
                <div>
                  <span className="text-slate-500">Used Price Range</span>
                  <p className="text-white font-semibold">$15,000 - $19,000</p>
                </div>
                <div>
                  <span className="text-slate-500">Battery</span>
                  <p className="text-white font-semibold">65 kWh (new replacement packs)</p>
                </div>
                <div>
                  <span className="text-slate-500">Fast Charging</span>
                  <p className="text-white font-semibold">CCS up to 55 kW</p>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              The Chevrolet Bolt EUV is arguably the <strong className="text-emerald-400">best overall value</strong> in the used EV market right now. GM replaced every single Bolt battery pack under the recall program, which means most used models effectively have a brand-new battery with a fresh warranty. You get 247 miles of range, a spacious interior with more rear legroom than the standard Bolt, and available Super Cruise hands-free driving on Premier trims. The only real downside is the modest 55 kW DC fast-charging speed, but for a car that will spend most of its life plugged in at home overnight, that rarely matters.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <Link href="/ev-deals/chevrolet-bolt-euv" className="text-emerald-400 hover:text-emerald-300 underline">Browse Chevrolet Bolt EUV pricing</Link> and find certified pre-owned inventory.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Best Used EVs Under $30,000
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Moving into the $20,000-$30,000 range opens up some of the most capable and well-rounded electric vehicles on the market. These models were mid-range when new and now offer extraordinary value as pre-owned purchases.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">
              Tesla Model 3 (2022-2023)
            </h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-500">Range</span>
                  <p className="text-white font-semibold">272 miles (Standard Range+)</p>
                </div>
                <div>
                  <span className="text-slate-500">Used Price Range</span>
                  <p className="text-white font-semibold">$22,000 - $28,000</p>
                </div>
                <div>
                  <span className="text-slate-500">Battery</span>
                  <p className="text-white font-semibold">60 kWh (LFP)</p>
                </div>
                <div>
                  <span className="text-slate-500">Fast Charging</span>
                  <p className="text-white font-semibold">Supercharger up to 170 kW</p>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              The Tesla Model 3 continues to be the benchmark sedan in the used EV market. Access to the Supercharger network alone makes it a compelling choice for anyone who road-trips regularly. The 2022-2023 models feature the refreshed interior with improved materials, a horizontal center display, and an LFP (lithium iron phosphate) battery on Standard Range models that can be charged to 100% daily without degradation concerns. Over-the-air software updates continue to add features long after purchase, which is a unique advantage no other used car offers.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <Link href="/ev-deals/tesla-model-3" className="text-emerald-400 hover:text-emerald-300 underline">Check Tesla Model 3 deals</Link> and compare prices across platforms.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">
              Hyundai Ioniq 5 (2023)
            </h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-500">Range</span>
                  <p className="text-white font-semibold">303 miles (Long Range RWD)</p>
                </div>
                <div>
                  <span className="text-slate-500">Used Price Range</span>
                  <p className="text-white font-semibold">$25,000 - $30,000</p>
                </div>
                <div>
                  <span className="text-slate-500">Battery</span>
                  <p className="text-white font-semibold">77.4 kWh</p>
                </div>
                <div>
                  <span className="text-slate-500">Fast Charging</span>
                  <p className="text-white font-semibold">800V architecture, up to 235 kW</p>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              The Hyundai Ioniq 5 is one of the most impressive used EVs you can buy in this price range. Its 800-volt architecture enables ultra-fast charging that adds roughly 200 miles of range in under 18 minutes, making it one of the fastest-charging vehicles at any price. The retro-futuristic exterior hides a remarkably spacious interior with a completely flat floor, sliding rear seats, and vehicle-to-load (V2L) capability that lets you power appliances or camping gear directly from the car. Hyundai&apos;s 10-year/100,000-mile powertrain warranty transfers to second owners, adding a valuable layer of protection.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <Link href="/ev-deals/hyundai-ioniq-5" className="text-emerald-400 hover:text-emerald-300 underline">View Hyundai Ioniq 5 deals</Link> and explore available inventory.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">
              Volkswagen ID.4 (2023)
            </h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-500">Range</span>
                  <p className="text-white font-semibold">275 miles (Pro S RWD)</p>
                </div>
                <div>
                  <span className="text-slate-500">Used Price Range</span>
                  <p className="text-white font-semibold">$22,000 - $27,000</p>
                </div>
                <div>
                  <span className="text-slate-500">Battery</span>
                  <p className="text-white font-semibold">82 kWh</p>
                </div>
                <div>
                  <span className="text-slate-500">Fast Charging</span>
                  <p className="text-white font-semibold">CCS up to 185 kW</p>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              The Volkswagen ID.4 is a comfortable, family-friendly crossover that has depreciated sharply, creating an excellent buying opportunity. The 2023 model year addressed the software issues that plagued earlier builds and increased fast-charging speeds to 185 kW. The ride quality is among the best in its class, with a smooth, composed demeanor that makes it ideal for long highway drives. The interior is spacious with generous cargo room, and the high driving position gives you excellent visibility. VW&apos;s 8-year/100,000-mile battery warranty transfers to subsequent owners, so used buyers still have significant coverage remaining.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <Link href="/ev-deals/volkswagen-id4" className="text-emerald-400 hover:text-emerald-300 underline">See Volkswagen ID.4 deals</Link> and compare trim-level pricing.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Best Used EVs Under $40,000
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              At the $30,000-$40,000 price point, you gain access to premium electric vehicles that were originally $50,000 to $65,000 when new. These models offer longer range, faster charging, and more refined driving experiences.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">
              Tesla Model Y (2023)
            </h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-500">Range</span>
                  <p className="text-white font-semibold">330 miles (Long Range AWD)</p>
                </div>
                <div>
                  <span className="text-slate-500">Used Price Range</span>
                  <p className="text-white font-semibold">$30,000 - $38,000</p>
                </div>
                <div>
                  <span className="text-slate-500">Battery</span>
                  <p className="text-white font-semibold">75 kWh</p>
                </div>
                <div>
                  <span className="text-slate-500">Fast Charging</span>
                  <p className="text-white font-semibold">Supercharger up to 250 kW</p>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              The Tesla Model Y was the world&apos;s best-selling car of any kind in 2023, and those high production volumes mean excellent availability on the used market. The Long Range AWD variant delivers 330 miles of range with all-wheel drive confidence, and access to the Supercharger network makes road trips effortless. The crossover body style accommodates families easily with 76 cubic feet of maximum cargo space and an optional third row. Continuous over-the-air updates mean even a used Model Y keeps getting new features, from improved Autopilot performance to entertainment upgrades.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <Link href="/ev-deals/tesla-model-y" className="text-emerald-400 hover:text-emerald-300 underline">Compare Tesla Model Y deals</Link> and find the best price near you.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">
              Ford Mustang Mach-E (2023)
            </h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-500">Range</span>
                  <p className="text-white font-semibold">312 miles (Extended Range RWD)</p>
                </div>
                <div>
                  <span className="text-slate-500">Used Price Range</span>
                  <p className="text-white font-semibold">$28,000 - $36,000</p>
                </div>
                <div>
                  <span className="text-slate-500">Battery</span>
                  <p className="text-white font-semibold">91 kWh (Extended Range)</p>
                </div>
                <div>
                  <span className="text-slate-500">Fast Charging</span>
                  <p className="text-white font-semibold">CCS up to 150 kW</p>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              The Ford Mustang Mach-E brings genuine driving excitement to the used EV market. Its athletic handling, muscular styling, and responsive acceleration make it one of the more engaging EVs to drive, period. The 2023 model benefits from improved software, faster charging, and Ford&apos;s BlueCruise hands-free highway driving system on Premium and GT trims. The front trunk (frunk) adds practical cargo space, and Ford&apos;s extensive dealer network means service accessibility is never a concern. For buyers who want a used EV that puts a smile on their face every time they press the accelerator, the Mach-E is hard to beat.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <Link href="/ev-deals/ford-mustang-mach-e" className="text-emerald-400 hover:text-emerald-300 underline">Browse Ford Mustang Mach-E deals</Link> and check current pricing.
            </p>

            <h3 className="text-xl font-bold text-white mt-10 mb-4">
              Kia EV6 (2023)
            </h3>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-6 border border-slate-700/50">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-500">Range</span>
                  <p className="text-white font-semibold">310 miles (Long Range RWD)</p>
                </div>
                <div>
                  <span className="text-slate-500">Used Price Range</span>
                  <p className="text-white font-semibold">$28,000 - $35,000</p>
                </div>
                <div>
                  <span className="text-slate-500">Battery</span>
                  <p className="text-white font-semibold">77.4 kWh</p>
                </div>
                <div>
                  <span className="text-slate-500">Fast Charging</span>
                  <p className="text-white font-semibold">800V architecture, up to 235 kW</p>
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              The Kia EV6 shares the same 800-volt platform as its Hyundai Ioniq 5 sibling, but wraps it in a sportier, more aggressive package. Ultra-fast charging capability adds roughly 210 miles of range in just 18 minutes, which makes it one of the quickest-charging EVs regardless of price. The EV6 also features vehicle-to-load technology, a spacious hatchback design with a low cargo floor, and Kia&apos;s class-leading 10-year/100,000-mile powertrain warranty that transfers to used buyers. The GT-Line trim adds a sportier appearance without the premium of the full GT, and is the sweet spot for used buyers looking for style and substance.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              <Link href="/ev-deals/kia-ev6" className="text-emerald-400 hover:text-emerald-300 underline">Explore Kia EV6 deals</Link> and find your ideal configuration.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              What to Check Before Buying a Used EV
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Buying a <strong className="text-emerald-400">pre-owned electric vehicle</strong> requires a slightly different checklist than a traditional used car. Here are the four critical areas to evaluate before committing to a purchase.
            </p>
            <div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50">
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">1.</span>
                  <div>
                    <strong className="text-white">Battery State of Health (SoH)</strong> -- Request a battery health report from the dealer or use a third-party diagnostic tool like Recurrent or Flip EV. Look for a battery retaining at least 85-90% of its original capacity. Anything above 90% on a 2022-2023 model is excellent and indicates the battery was well cared for.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">2.</span>
                  <div>
                    <strong className="text-white">Warranty Transfer</strong> -- Verify that the manufacturer&apos;s battery and powertrain warranty transfers to second owners. Most do, but terms vary. Federal law mandates a minimum 8-year/100,000-mile battery warranty on all EVs, and many manufacturers exceed this. Check the specific remaining coverage on any vehicle you are considering.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">3.</span>
                  <div>
                    <strong className="text-white">Charging History</strong> -- Vehicles that were primarily home-charged on Level 2 tend to have healthier batteries than those that relied heavily on DC fast charging. Ask the seller about their charging habits. Some brands like Tesla provide lifetime Supercharger usage statistics that can give you a clear picture.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-3 font-bold">4.</span>
                  <div>
                    <strong className="text-white">Open Recall Status</strong> -- Check the NHTSA recall database using the vehicle&apos;s VIN. Some EV recalls involve software updates that may not have been applied if the previous owner skipped dealer visits. Ensure all recalls are completed before finalizing your purchase to avoid inheriting unresolved issues.
                  </div>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Used EV Tax Credits
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              One of the biggest financial advantages of buying a <strong className="text-emerald-400">used electric vehicle in 2026</strong> is the federal used EV tax credit. Under the Inflation Reduction Act, qualified buyers can claim up to <strong className="text-emerald-400">$4,000</strong> on a used EV purchase. To qualify, the vehicle must be at least two model years old, priced at $25,000 or less, and purchased from a licensed dealer. Your modified adjusted gross income must be below $75,000 for single filers or $150,000 for joint filers.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The credit is transferable at the point of sale starting in 2024, meaning you can apply the $4,000 as a down payment at the dealership rather than waiting until tax season. This makes the credit immediately useful and reduces your out-of-pocket cost on day one. When you combine this credit with the natural depreciation savings of buying used, many of the vehicles in our under-$20,000 category effectively drop into the $10,000-$15,000 range, which is astonishing for a modern electric vehicle with 200+ miles of range.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              Keep in mind that the $25,000 price cap applies to the sale price, not the original MSRP. If a Tesla Model 3 is listed at $24,900, it qualifies. If it is listed at $25,100, it does not. Savvy buyers can sometimes negotiate a price just below the threshold to unlock the credit, saving an additional $4,000 on top of any negotiated discount.
            </p>
          </article>

          {/* CTA */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl p-8 border border-emerald-500/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Compare New EV Prices</h3>
            <p className="text-slate-300 mb-6">Not sure whether to go used or new? Compare the latest deals on brand-new electric vehicles and see how much you could save with current incentives.</p>
            <Link href="/ev-deals" className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors">
              Browse EV Deals
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Related Articles */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 mb-12">
            <h3 className="text-xl font-bold text-white mb-6">Related Articles</h3>
            <div className="space-y-4">
              <Link href="/blog/ev-lease-vs-buy" className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors">
                <svg className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                EV Lease vs Buy: Which Saves You More?
              </Link>
              <Link href="/blog/ev-battery-health-check" className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors">
                <svg className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                How to Check EV Battery Health Before Buying
              </Link>
              <Link href="/blog/ev-tax-credits-2026" className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors">
                <svg className="w-5 h-5 mr-3 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                EV Tax Credits Guide for 2026
              </Link>
            </div>
          </div>

          {/* Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">
                Used EVs
              </span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">
                Buying Guide
              </span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">
                Budget
              </span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">
                Pre-Owned
              </span>
              <span className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50">
                2026
              </span>
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

      {/* Related Deals */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <RelatedDeals serviceCategories={["EV service"]} />
        </div>
      </section>
    </main>
  );
}

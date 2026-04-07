"use client";

import Link from "next/link";
import Image from "next/image";
import RelatedDeals from "../../components/RelatedDeals";

export default function EvsSweep2026WorldCarAwards() {
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
              News
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              EVs Sweep Every 2026 World Car Award &mdash; Here&apos;s What Won and Why It Matters
            </h1>
            <div className="flex items-center gap-4 text-slate-400">
              <span>April 2026</span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span>14 min read</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/images/blog/evs-sweep-world-car-awards-hero.png"
              alt="Electric vehicles sweep every 2026 World Car Award category"
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
              For the first time in the 22-year history of the World Car Awards, <strong className="text-emerald-400">every single category winner is an electric vehicle</strong>. The results were announced at the 2026 New York International Auto Show in April, and they mark a decisive turning point for the global automotive industry. From luxury grand tourers to tiny city cars, battery-electric vehicles swept all six categories&mdash;proving that EVs don&apos;t just compete with internal combustion anymore. They dominate it.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              World Car of the Year: BMW iX3 (Neue Klasse)
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The <Link href="/cars/bmw" className="text-emerald-400 hover:text-emerald-300">BMW iX3</Link> built on the automaker&apos;s all-new Neue Klasse platform claimed the top prize, and it wasn&apos;t close. With a <strong className="text-emerald-400">400-mile EPA-estimated range</strong> and 400 kW peak DC fast-charging capability, the iX3 redefined what mainstream buyers can expect from an electric SUV. BMW&apos;s sixth-generation eDrive technology delivers 402 horsepower in the base rear-drive model, while the xDrive version pushes 536 hp with standard all-wheel drive.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The Neue Klasse architecture is a clean-sheet design that abandons the compromises of BMW&apos;s earlier CLAR-based EVs. The cylindrical battery cells, developed in partnership with CATL and Samsung SDI, are 20% more energy-dense than their predecessors, enabling that class-leading range in a package that weighs less than the outgoing iX xDrive50. Inside, BMW&apos;s new Panoramic Vision head-up display spans the full width of the windshield, creating an augmented-reality driving experience that jurors called &ldquo;genuinely transformative.&rdquo;
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Priced from $58,900, the iX3 undercuts the Mercedes EQE SUV and the Audi Q8 e-tron while delivering more range, faster charging, and a more cohesive technology suite. Read our full coverage of the <Link href="/blog/bmw-ix3-world-car-of-the-year" className="text-emerald-400 hover:text-emerald-300">BMW iX3&apos;s World Car of the Year win</Link> for a deeper dive into BMW&apos;s Neue Klasse revolution.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              World Electric Vehicle of the Year: BMW iX3 (Double Win)
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The iX3 didn&apos;t stop at the overall prize. It also took home the <strong className="text-emerald-400">World Electric Vehicle of the Year</strong> award, making it the first vehicle to win both categories simultaneously. Jurors praised the iX3&apos;s ability to make the EV experience feel completely effortless&mdash;from its 10-to-80% charge time of just 18 minutes on a 400 kW charger to its predictive energy management system that optimizes range based on real-time traffic and weather data.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              BMW&apos;s double victory underscores a broader trend: the best electric vehicles are no longer niche products evaluated on a separate curve. They&apos;re simply the best cars, period. The iX3 beat finalists including the Porsche Macan Electric and the Volvo EX90, both excellent vehicles in their own right, but neither could match BMW&apos;s combination of range, performance, technology, and value.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              World Performance Car of the Year: Hyundai IONIQ 6 N
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              <Link href="/cars/hyundai" className="text-emerald-400 hover:text-emerald-300">Hyundai&apos;s</Link> N performance division delivered a masterclass in making electric performance cars genuinely thrilling. The <strong className="text-emerald-400">IONIQ 6 N</strong> produces a staggering 600 horsepower from its dual-motor setup, launching from 0 to 60 mph in 3.1 seconds. But raw speed isn&apos;t what earned this sedan the performance crown.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The secret weapon is Hyundai&apos;s N e-shift system&mdash;a <strong className="text-emerald-400">simulated gear-shift experience</strong> that replicates the feeling of a dual-clutch transmission, complete with momentary torque interruptions and a synthesized exhaust note that changes character as you cycle through eight virtual gears. Purists scoffed when the technology debuted on the IONIQ 5 N, but the IONIQ 6 N&apos;s implementation is so refined that jurors described it as &ldquo;the most entertaining EV driving experience available today.&rdquo;
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Beyond the theatrics, the IONIQ 6 N delivers genuine track capability. An electronically controlled limited-slip differential manages torque at the rear axle, the adaptive suspension offers a dedicated track mode, and the 84 kWh battery provides enough juice for approximately 20 minutes of hard circuit driving before thermal management intervenes. At $67,500, it&apos;s a fraction of the price of the Porsche Taycan Turbo GT it routinely embarrasses at track days.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              World Luxury Car of the Year: Lucid Gravity
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              <Link href="/cars/lucid" className="text-emerald-400 hover:text-emerald-300">Lucid Motors</Link> proved that its engineering prowess extends beyond the Air sedan with the Gravity, a <strong className="text-emerald-400">three-row luxury SUV</strong> that redefines what&apos;s possible in the electric premium segment. The Grand Touring version delivers a jaw-dropping 440 miles of EPA-estimated range&mdash;the highest of any electric SUV on the market&mdash;thanks to Lucid&apos;s industry-leading powertrain efficiency of over 5 miles per kilowatt-hour.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The Gravity seats seven in genuine comfort across all three rows, a claim that few three-row luxury SUVs can make honestly. The second row offers captain&apos;s chairs with heating, ventilation, and massage, while the third row provides enough legroom for adults up to 6 feet tall. Lucid&apos;s Glass Canopy roof extends from the windshield to the rear hatch, flooding the cabin with natural light and creating an airy, open atmosphere that jurors compared to a private jet experience.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Starting at $79,900 for the Touring trim and $99,900 for the Grand Touring, the Gravity competes directly with the BMW iX, Mercedes EQS SUV, and the upcoming Rolls-Royce Spectre SUV. Its combination of range, space, technology, and American manufacturing earned it the luxury crown over some very stiff European competition.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              World Urban Car of the Year: Nio Firefly
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The Nio Firefly represents Chinese automaker Nio&apos;s push into the European and global market with a <strong className="text-emerald-400">compact, affordable city EV</strong> that punches well above its weight. Measuring just 155 inches long&mdash;roughly the size of a Mini Cooper&mdash;the Firefly is perfectly suited to urban environments where parking and maneuverability are paramount.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Don&apos;t let its diminutive size fool you. The Firefly packs a 42 kWh battery that delivers 185 miles of range, more than enough for a week of city commuting on a single charge. Nio&apos;s battery-swap technology is available in European markets, allowing Firefly owners to swap a depleted battery for a fully charged one in under three minutes&mdash;faster than filling a gas tank. Inside, the cabin is surprisingly spacious thanks to clever packaging, with a 10.2-inch central display running Nio&apos;s intuitive NOMI AI assistant.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Priced from the equivalent of $21,000 in European markets, the Firefly is a clear signal that the era of affordable, well-engineered small EVs has arrived. Its World Urban Car win puts established players like the Fiat 500e and Mini Cooper Electric on notice.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              World Car Design of the Year: Mazda EZ-6
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              Mazda&apos;s <strong className="text-emerald-400">EZ-6 electric sedan</strong> earned the design award with a stunning execution of the brand&apos;s Kodo design language adapted for the electric era. The EZ-6 is a sleek, low-slung four-door that manages to look both unmistakably Mazda and refreshingly futuristic. Its long hood, flowing roofline, and minimal body creases create a sense of elegant motion even when standing still.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The interior is equally impressive, with Mazda&apos;s signature driver-focused cockpit translated into a clean, uncluttered EV layout. Natural materials including sustainably sourced wood trim, recycled fabric upholstery, and hand-finished aluminum accents create a warmth that&apos;s often lacking in tech-heavy EV interiors. The 14.6-inch central touchscreen is angled slightly toward the driver, and essential climate and audio controls remain as physical knobs&mdash;a deliberate choice that jurors praised as &ldquo;refreshingly human-centric.&rdquo;
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Built on a platform co-developed with Chinese partner Changan, the EZ-6 offers 330 miles of range and 200 kW fast-charging capability. It&apos;s currently available in China and select Asian markets, with European and North American launches expected by late 2026.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              What This Sweep Means for the Industry
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              The significance of EVs sweeping all six World Car Award categories cannot be overstated. This isn&apos;t a panel of EV enthusiasts or environmental activists making these selections&mdash;it&apos;s a jury of 100 international automotive journalists from 32 countries who evaluate vehicles on their overall merit, including driving dynamics, design, value, safety, and environmental impact.
            </p>

            {/* In-Article Image */}
            <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden my-12">
              <Image
                src="/images/blog/evs-sweep-world-car-awards-lineup.png"
                alt="2026 World Car Award winning EV lineup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">
              The Technology Argument Is Over
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              For years, skeptics argued that EVs were a compromise&mdash;that you sacrificed range, performance, or refinement for the sake of zero emissions. The 2026 World Car Awards have definitively ended that debate. The BMW iX3 offers more range than most gas SUVs offer on a full tank. The Hyundai IONIQ 6 N is more exciting to drive than the vast majority of gas-powered sports cars. The Lucid Gravity provides luxury and space that rival the best from Bentley and Rolls-Royce. Electric vehicles aren&apos;t catching up anymore&mdash;they&apos;ve pulled ahead.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">
              A Global Shift in Competitive Pressure
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              The geographic diversity of the winners tells its own story. Germany (BMW, Mazda&apos;s platform partner), South Korea (Hyundai), the United States (Lucid), China (Nio), and Japan (Mazda) are all represented. This is no longer a Tesla-led American revolution or a Chinese manufacturing story. The <strong className="text-emerald-400">global auto industry has fully committed to electrification</strong>, and competition is driving innovation at an extraordinary pace.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Legacy automakers that have been slow to electrify&mdash;notably Toyota, which is only now gaining EV momentum, and Stellantis, whose Jeep and Dodge brands have struggled with their electric transitions&mdash;face enormous pressure to catch up. The bar for what constitutes a competitive EV has risen dramatically, and the 2026 winners demonstrate that half-hearted compliance vehicles won&apos;t cut it.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">
              Competitive Pressure Is Driving Better Products
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              The real beneficiary of this sweep is the consumer. When BMW, Hyundai, Lucid, Nio, and Mazda are all pushing the boundaries of what EVs can do, buyers get better vehicles at better prices. The BMW iX3&apos;s 400-mile range at $58,900 would have been unthinkable three years ago. The Nio Firefly at $21,000 makes the electric transition accessible to millions more buyers worldwide. Competition works, and the 2026 World Car Awards prove that the EV market is now intensely competitive across every segment and price point.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              What This Means for EV Buyers
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              If you&apos;ve been waiting for the &ldquo;right time&rdquo; to go electric, this is your signal. The 2026 World Car Award winners represent the most capable, most refined, and most diverse class of electric vehicles the industry has ever produced. Whether you&apos;re shopping for a $21,000 city car or a $100,000 luxury SUV, there&apos;s a world-beating EV for you.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              The <Link href="/blog/q1-2026-ev-sales-scorecard" className="text-emerald-400 hover:text-emerald-300">Q1 2026 EV sales data</Link> already reflects this shift, with electric vehicle market share reaching new highs across every major market. As these award-winning models reach full production volumes and dealer availability improves, expect that trend to accelerate throughout the year.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Ready to explore the latest electric vehicles? Browse our complete <Link href="/ev-deals" className="text-emerald-400 hover:text-emerald-300">EV deals page</Link> to see current pricing, incentives, and availability for all 50 models in our database. The future isn&apos;t coming&mdash;it&apos;s already here, and it&apos;s electric.
            </p>

            {/* Related Articles */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6">
              Related Articles
            </h2>
            <div className="grid gap-4 mb-8">
              <Link
                href="/blog/bmw-ix3-world-car-of-the-year"
                className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-emerald-400 text-sm font-medium">News</span>
                <h3 className="text-white font-semibold mt-1">BMW iX3 Named 2026 World Car of the Year</h3>
                <p className="text-slate-400 text-sm mt-1">A deep dive into BMW&apos;s Neue Klasse platform and why the iX3 took the top honors.</p>
              </Link>
              <Link
                href="/blog/q1-2026-ev-sales-scorecard"
                className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-emerald-400 text-sm font-medium">News</span>
                <h3 className="text-white font-semibold mt-1">Q1 2026 EV Sales Scorecard</h3>
                <p className="text-slate-400 text-sm mt-1">Which brands are winning the sales race and what the numbers tell us about the EV transition.</p>
              </Link>
              <Link
                href="/blog/every-new-ev-2026-tracker"
                className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-emerald-400 text-sm font-medium">Guide</span>
                <h3 className="text-white font-semibold mt-1">Every New EV Coming in 2026: Complete Tracker</h3>
                <p className="text-slate-400 text-sm mt-1">The definitive list of every new electric vehicle launching this year.</p>
              </Link>
              <Link
                href="/ev-deals"
                className="block bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
              >
                <span className="text-emerald-400 text-sm font-medium">Deals</span>
                <h3 className="text-white font-semibold mt-1">Find the Best EV Deals</h3>
                <p className="text-slate-400 text-sm mt-1">Compare pricing, incentives, and availability across 50 electric vehicle models.</p>
              </Link>
            </div>
          </article>

          {/* Share & Tags */}
          <div className="border-t border-slate-700/50 pt-8 mt-12">
            <div className="flex flex-wrap gap-3 mb-8">
              <Link href="/blog?tag=world-car-awards" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">
                World Car Awards
              </Link>
              <Link href="/blog?tag=bmw" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">
                BMW
              </Link>
              <Link href="/blog?tag=lucid" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">
                Lucid
              </Link>
              <Link href="/blog?tag=hyundai" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">
                Hyundai
              </Link>
              <Link href="/blog?tag=ev-news" className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-slate-400 border border-slate-700/50 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors">
                EV News
              </Link>
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
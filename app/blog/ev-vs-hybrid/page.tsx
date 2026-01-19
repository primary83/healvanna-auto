export default function EVvsHybrid() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-md border-b border-[rgba(74,144,217,0.15)]">
        <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
            HEALVANNA <span className="text-[#4a90d9]">AUTO</span>
          </a>
          <a href="/blog" className="text-[14px] text-[#4a90d9] hover:text-[#6ba8eb] transition-colors duration-300">
            ← Back to Blog
          </a>
        </div>
      </nav>

      {/* Article Content */}
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-[800px] mx-auto">
          {/* Category & Read Time */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[#f59e0b] text-white text-[12px] font-medium rounded-full">
              Reviews
            </span>
            <span className="text-[#6b7a94] text-[14px]">12 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-[42px] md:text-[52px] font-bold leading-[1.1] mb-6">
            EV vs Hybrid:
            <span className="text-[#f59e0b]"> Which Is Right for You?</span>
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-[#6b7a94] text-[14px] mb-8">
            <span>January 19, 2026</span>
            <span>•</span>
            <span>By Healvanna Editorial Team</span>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
            <img
              src="/blog/ev-vs-hybrid.png"
              alt="EV vs Hybrid comparison"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-8">
              The choice between a fully electric vehicle and a hybrid has never been more relevant. Both offer significant advantages over traditional gas-only cars, but they serve different needs and lifestyles. Understanding the differences helps you make the right choice for your situation. This guide breaks down everything you need to know to decide between an EV and a hybrid.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Understanding the Types
            </h2>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Battery Electric Vehicles (BEVs)
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Fully electric vehicles run entirely on battery power. They have no gasoline engine, no exhaust pipe, and never need gas. You charge them at home or at public charging stations. Examples include Tesla Model 3, Chevrolet Bolt, and Hyundai Ioniq 5.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Traditional Hybrids (HEVs)
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Traditional hybrids like the Toyota Prius combine a gasoline engine with a small electric motor and battery. The battery charges through regenerative braking and the gas engine—you never plug them in. They improve fuel efficiency but still rely primarily on gasoline.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Plug-In Hybrids (PHEVs)
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Plug-in hybrids have larger batteries that you can charge externally. They typically offer 20-50 miles of pure electric range before the gas engine kicks in. Examples include Toyota RAV4 Prime, BMW X5 xDrive50e, and Jeep Wrangler 4xe. PHEVs bridge the gap between full EVs and traditional hybrids.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Driving Experience Comparison
            </h2>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Performance and Acceleration
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              EVs deliver instant torque, providing immediate acceleration that feels effortless and smooth. Even modest EVs feel quick off the line. Hybrids feel more like traditional cars—adequate but not thrilling. The gas engine determines the character, with the electric motor providing occasional boost.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Noise and Refinement
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              EVs are nearly silent, creating a serene driving experience. You hear only wind and tire noise. Hybrids are quiet in electric mode but the gas engine cycles on and off, creating noticeable transitions. Some drivers find this distracting; others do not notice it.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Regenerative Braking
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Both EVs and hybrids use regenerative braking to recapture energy. EVs typically offer stronger regeneration with one-pedal driving capability. Hybrids usually have milder regeneration that feels more like traditional engine braking.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Costs: Purchase and Ownership
            </h2>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Purchase Price
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              EVs generally cost more upfront than equivalent hybrids, though federal tax credits up to $7,500 can close the gap significantly. Hybrids are priced closer to their gas counterparts, typically $2,000-$5,000 more. PHEVs fall between, often qualifying for smaller tax credits.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Fuel and Energy Costs
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              EVs cost roughly one-third to one-half as much to fuel as gas cars when charging at home. A typical EV costs $30-$50 per month in electricity versus $150-$200 for gas. Hybrids improve on gas car efficiency by 30-50%, reducing but not eliminating fuel costs. Over five years, EV fuel savings typically total $4,000-$8,000 compared to hybrids.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Maintenance Costs
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              EVs have dramatically lower maintenance costs—no oil changes, no transmission service, no spark plugs, and reduced brake wear due to regenerative braking. Hybrids require all traditional maintenance plus hybrid-specific components. Over 100,000 miles, EVs save $3,000-$5,000 in maintenance compared to hybrids.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Range and Charging vs. Refueling
            </h2>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              EV Range Reality
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Modern EVs offer 200-350+ miles of range per charge. For daily driving, this is more than sufficient—most people drive under 50 miles daily. However, long road trips require planning around charging stations and adding 20-40 minutes for charging stops.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Hybrid Flexibility
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Hybrids offer the same refueling convenience as gas cars—500+ miles of range and 5-minute fill-ups available everywhere. No range anxiety, no route planning, no charging infrastructure concerns. For those who travel frequently to areas with limited charging, this flexibility is valuable.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              The Charging Question
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              If you can charge at home, EV ownership is seamless—you wake up to a full battery daily. Without home charging, EVs require more planning and reliance on public infrastructure. Hybrids eliminate this consideration entirely.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Environmental Impact
            </h2>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Tailpipe Emissions
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              EVs produce zero direct emissions—no exhaust, no tailpipe pollution. Hybrids reduce emissions compared to gas cars but still burn fossil fuels and produce exhaust. In urban areas with air quality concerns, EVs offer clear local benefits.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Lifecycle Emissions
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              When considering electricity generation and manufacturing, EVs still produce significantly fewer lifetime emissions than hybrids in most regions. As electrical grids become cleaner, the EV advantage grows. In areas with very clean electricity, EVs produce 70-80% fewer lifetime emissions than gas cars.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Who Should Choose an EV?
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              An EV is likely right for you if you can charge at home or at work reliably. Your daily driving is under 200 miles. You want the lowest possible operating costs. You value smooth, quiet, instant-torque driving. You want to minimize your environmental impact. You are comfortable with occasional charging stops on road trips. You like being an early adopter of new technology.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Who Should Choose a Hybrid?
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              A hybrid is likely right for you if you cannot reliably charge at home or work. You frequently drive long distances to areas without charging infrastructure. You want improved efficiency without changing your refueling habits. You prefer a lower upfront purchase price. You tow heavy loads frequently, which significantly reduces EV range. You are not ready to fully commit to electric but want to reduce fuel consumption.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              The Plug-In Hybrid Compromise
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              PHEVs offer a middle ground that works well for specific situations. If your daily commute is under 30-40 miles, a PHEV can handle it on pure electricity while still offering gas backup for longer trips. However, you get the complexity of two powertrains and typically less EV range than you might expect. PHEVs work best for those with short daily drives who occasionally need unlimited range.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Conclusion: The Trend Is Clear
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-8">
              For most buyers who can charge at home, a full EV offers the best combination of low operating costs, driving enjoyment, and environmental benefits. The charging infrastructure continues to expand rapidly, making EVs practical for an ever-growing number of people. However, hybrids remain a sensible choice for those without charging access or with specific use cases that favor gas flexibility. There is no wrong answer—both represent significant improvements over traditional gas-only vehicles. Assess your personal situation honestly, and choose the technology that fits your life today while considering where transportation is headed tomorrow.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[rgba(74,144,217,0.2)]">
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">EV vs Hybrid</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Comparison</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Buying Guide</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Electric Cars</span>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#080c14] py-12 px-6 border-t border-[rgba(74,144,217,0.15)]">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[#6b7a94] text-[14px]">© 2025 Healvanna Auto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

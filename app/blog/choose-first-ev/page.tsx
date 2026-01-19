export default function ChooseFirstEV() {
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
            <span className="px-3 py-1 bg-[#4a90d9] text-white text-[12px] font-medium rounded-full">
              Guides
            </span>
            <span className="text-[#6b7a94] text-[14px]">14 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-[42px] md:text-[52px] font-bold leading-[1.1] mb-6">
            How to Choose Your First
            <span className="text-[#4a90d9]"> Electric Vehicle</span>
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
              src="/blog/choose-first-ev.png"
              alt="How to choose your first electric vehicle"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-8">
              Buying your first electric vehicle is an exciting milestone, but it can also feel overwhelming. With dozens of models available, varying ranges, different charging options, and new terminology to learn, where do you even start? This comprehensive guide walks you through everything you need to consider when choosing your first EV, helping you find the perfect match for your lifestyle, budget, and driving needs.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Step 1: Assess Your Daily Driving Needs
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Before looking at specific vehicles, understand your actual driving patterns. Most people overestimate how much range they need daily.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Calculate Your Daily Miles
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Track your driving for a typical week. Include your commute, errands, school runs, and activities. The average American drives about 37 miles per day. Even the shortest-range EVs on the market today offer 100+ miles, meaning most people could charge just once or twice a week for daily driving.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Consider Your Longest Regular Trips
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Think about trips you make monthly or quarterly—visiting family, weekend getaways, or regular travel for work. If these exceed 200 miles one-way, you will need to plan for charging stops or consider a longer-range vehicle.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Road Trip Frequency
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              How often do you take long road trips? If it is once or twice a year, a shorter-range EV with access to fast charging networks works fine. If you road trip monthly, prioritize range and fast-charging capability.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Step 2: Understand Your Charging Situation
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Charging infrastructure is the single most important factor in EV ownership satisfaction. Evaluate your options honestly.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Home Charging Possibilities
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Do you have a garage or dedicated parking space where you can install a charger? Home charging is the most convenient and cost-effective way to own an EV. Level 2 home charging (240V) adds 25-30 miles of range per hour, meaning overnight charging easily covers most daily needs. If you own your home, installation is straightforward. Renters should check with landlords about installation options.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Workplace Charging
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Does your employer offer EV charging? Workplace charging can supplement or even replace home charging for many commuters. Check if charging is free or paid, and how available the chargers typically are.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Public Charging Availability
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              If home charging is not possible, assess public charging in your area. Are there fast chargers near your home or along your regular routes? Apps like PlugShare show charging station locations and user reviews. Relying solely on public charging is possible but requires more planning.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Step 3: Set Your Budget
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              EVs are available at virtually every price point, from around $25,000 to over $100,000. Consider total cost of ownership, not just purchase price.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Purchase Price and Incentives
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Federal tax credits up to $7,500 can significantly reduce the effective price of qualifying EVs. State and local incentives may add additional savings. Factor these into your budget calculations. Some incentives apply at purchase (point-of-sale), while others come as tax credits when you file.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Operating Cost Savings
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              EVs cost significantly less to fuel and maintain than gas cars. Electricity costs roughly $1-2 per gallon equivalent. Maintenance savings from no oil changes, fewer brake repairs, and simpler drivetrains add up. Over five years, these savings can total $5,000-$10,000 compared to a similar gas vehicle.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              New vs. Used
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Used EVs offer excellent value, especially as lease returns flood the market. A 2-3 year old EV often costs 40-50% less than new while retaining most of its battery capacity. Used EVs under $25,000 may qualify for a $4,000 federal tax credit.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Step 4: Choose the Right Body Style
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              EVs now come in every body style. Match the vehicle type to your actual needs.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Sedans
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Electric sedans like the Tesla Model 3, Hyundai Ioniq 6, and BMW i4 offer excellent efficiency, sporty handling, and lower prices than SUVs. Great for commuters and those who do not need maximum cargo space.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              SUVs and Crossovers
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              The most popular EV category includes vehicles like Tesla Model Y, Ford Mustang Mach-E, Hyundai Ioniq 5, and Chevrolet Equinox EV. These offer versatile cargo space, higher seating positions, and family-friendly practicality.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Trucks
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Electric trucks like Ford F-150 Lightning, Rivian R1T, and Chevrolet Silverado EV combine truck capability with EV benefits. Many offer vehicle-to-home power and impressive towing capacity, though towing significantly reduces range.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Step 5: Prioritize the Features That Matter
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Different EVs excel in different areas. Decide what matters most to you.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Range
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              More range provides flexibility but costs more. Consider whether 250 miles meets your needs or if you truly need 300+ miles. Remember that real-world range varies with speed, weather, and driving style.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Charging Speed
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Fast-charging capability matters for road trips. Look at peak charging rates and the 10-80% charging time. Vehicles with 800V architecture like Hyundai Ioniq 5 and Kia EV6 charge exceptionally fast.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Performance
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              EVs are inherently quick due to instant torque. If performance matters, compare 0-60 times and consider dual-motor all-wheel-drive options. Even base EVs feel peppy compared to equivalent gas cars.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Technology and Software
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              EVs vary significantly in their software experience. Tesla leads in over-the-air updates and integrated navigation. Other manufacturers are catching up. Consider infotainment quality, smartphone integration, and driver assistance features.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Step 6: Test Drive Multiple Options
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Nothing replaces seat time. Test drive at least 3-4 different EVs before deciding.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              What to Evaluate
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Pay attention to seating comfort, visibility, cargo space practicality, infotainment usability, and driving feel. Test regenerative braking settings—some people love one-pedal driving while others prefer a more traditional feel. Check back seat space if you have passengers regularly.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Extended Test Drives
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Some manufacturers and dealers offer overnight or weekend test drives. Take advantage of these to experience charging at home and longer trips. Rental services like Turo also let you try specific EV models for a few days.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Top Picks for First-Time EV Buyers in 2026
            </h2>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Best Value: Chevrolet Equinox EV
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Starting around $35,000 with up to 319 miles of range, the Equinox EV offers exceptional value. Practical SUV packaging, good technology, and available tax credits make it an excellent first EV.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Best All-Rounder: Tesla Model Y
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              The best-selling EV worldwide for good reason. Excellent range, superior charging network access, regular software updates, and strong resale value. A safe choice that satisfies most buyers.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Best for Road Trips: Hyundai Ioniq 5
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Ultra-fast charging (10-80% in 18 minutes), comfortable ride, spacious interior, and distinctive styling. The 800V architecture makes long-distance travel exceptionally convenient.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Best Budget Option: Chevrolet Bolt EV/EUV
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Priced under $30,000, the Bolt offers proven reliability and adequate range for most daily needs. The EUV adds more space and available Super Cruise hands-free driving.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Conclusion: Trust Your Research
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-8">
              Choosing your first EV is a significant decision, but it does not have to be stressful. Assess your actual driving needs honestly, understand your charging situation, set a realistic budget including incentives, and test drive multiple options. The right EV for you balances your practical needs with the features you value most. Welcome to the world of electric driving—you are going to love it.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[rgba(74,144,217,0.2)]">
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">First EV</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Buying Guide</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">EV Shopping</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Beginners</span>
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

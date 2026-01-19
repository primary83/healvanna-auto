export default function VehicleToHomeTechnology() {
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
            <span className="px-3 py-1 bg-[#10b981] text-white text-[12px] font-medium rounded-full">
              Technology
            </span>
            <span className="text-[#6b7a94] text-[14px]">12 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-[42px] md:text-[52px] font-bold leading-[1.1] mb-6">
            Vehicle-to-Home (V2H) Technology:
            <span className="text-[#10b981]"> Your EV as a Backup Generator</span>
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-[#6b7a94] text-[14px] mb-8">
            <span>January 18, 2026</span>
            <span>•</span>
            <span>By Healvanna Editorial Team</span>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
            <img
              src="/blog/vehicle-to-home-v2h.png"
              alt="Vehicle to home V2H technology"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-8">
              Your electric vehicle is not just a car—it is a massive battery on wheels. With capacities ranging from 60 kWh to over 200 kWh, modern EVs store more energy than most homes use in several days. Vehicle-to-Home (V2H) technology unlocks this potential, allowing your EV to power your home during outages, reduce electricity bills, and even support the grid. This comprehensive guide explains how V2H works, which vehicles support it, the equipment needed, and whether this technology makes sense for your situation.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Understanding Bidirectional Charging
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              To understand V2H, we first need to understand bidirectional charging—the ability for power to flow both into and out of an EV battery. Standard EV charging is unidirectional: power flows from the grid through your charger, into your car, and to the battery. Bidirectional charging allows power to flow both ways, enabling the vehicle to export power back to your home or the grid.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              V2H vs. V2G vs. V2L
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              V2H (Vehicle-to-Home) powers your home from your EV, typically during outages or to reduce electricity costs. V2G (Vehicle-to-Grid) exports power from your EV back to the utility grid, potentially earning money. V2L (Vehicle-to-Load) provides power directly from your EV to external devices through outlets on the vehicle. This article focuses primarily on V2H.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              How V2H Powers Your Home
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              A typical V2H installation includes a bidirectional charger/inverter that connects to both your EV and your home electrical panel. An automatic transfer switch detects grid outages and switches your home to EV power. When the grid fails, the system automatically disconnects from the utility and begins powering your home from the EV. V2H systems typically output 9-11.5 kW of continuous power—enough to run most home essentials simultaneously.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Vehicles with V2H Capability
            </h2>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Ford F-150 Lightning
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Ford's electric pickup was designed with V2H as a headline feature. The Intelligent Backup Power system can automatically power your home during outages. With the extended-range 131 kWh battery, Ford claims up to 10 days of backup power with energy rationing.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Hyundai Ioniq 5 and Ioniq 6
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Hyundai E-GMP platform supports bidirectional charging. The Ioniq 5 and Ioniq 6 feature V2L capability standard. Full V2H capability requires compatible home equipment. The 77.4 kWh battery provides substantial backup capacity.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Kia EV6 and EV9
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Sharing the E-GMP platform with Hyundai, Kia EVs offer similar bidirectional capabilities. The EV6 includes V2L with interior and exterior outlets. Both support V2H with appropriate home equipment.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              GM Vehicles (Ultium Platform)
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              GM Ultium platform, used in the Chevrolet Silverado EV and GMC Hummer EV, supports bidirectional charging. GM PowerBase system enables V2H with compatible home equipment, delivering up to 10.2 kW of power.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Required Equipment for V2H
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              V2H requires a bidirectional charger/inverter, automatic transfer switch, and potentially electrical panel upgrades. For Ford Lightning, this includes the Charge Station Pro and Home Integration System. Options for other vehicles include Wallbox Quasar 2, dcbel r16, and Emporia V2H systems. Total installation typically costs $6,000-$15,000 including equipment and labor.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Benefits of V2H
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Emergency backup power is the most obvious benefit—reliable backup during outages with no emissions, silent operation, and no fuel storage required. Time-of-use arbitrage allows charging during cheap off-peak hours and powering your home during expensive peak hours. Solar integration lets you maximize self-consumption by charging from solar during the day and using EV power at night.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Considerations and Limitations
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Battery degradation is a consideration—every charge/discharge cycle contributes to battery wear, though modern EV batteries are designed for many thousands of cycles. Vehicle availability matters since your EV can only power your home when parked at home. Upfront costs of $6,000-$15,000 require careful consideration against alternatives like generators or home battery systems.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              The Future of V2H
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              More vehicle platforms are being designed with bidirectional capability. Utilities are developing V2G programs that pay EV owners for grid services. Industry standards for bidirectional charging are being finalized, improving interoperability and reducing costs.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Conclusion: A Compelling Technology
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-8">
              Vehicle-to-Home technology transforms your EV from transportation into a comprehensive energy asset. The ability to power your home during outages, reduce electricity costs, and maximize solar investments makes V2H increasingly attractive. If you are purchasing a new EV, strongly consider V2H-capable models. Your car is not just how you get around—it is becoming how you power your life.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[rgba(74,144,217,0.2)]">
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">V2H</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Vehicle to Home</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Bidirectional Charging</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Backup Power</span>
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

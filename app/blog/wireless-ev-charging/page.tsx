export default function WirelessEVCharging() {
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
            <span className="text-[#6b7a94] text-[14px]">11 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-[42px] md:text-[52px] font-bold leading-[1.1] mb-6">
            Wireless EV Charging:
            <span className="text-[#10b981]"> Is It Ready for Prime Time?</span>
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
              src="/blog/wireless-ev-charging.png"
              alt="Wireless EV charging technology"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-8">
              Imagine pulling into your garage and having your electric vehicle charge automatically—no plugs, no cables, no effort required. This is the promise of wireless EV charging, a technology that's moving from concept to reality. Using magnetic resonance to transfer power through the air, wireless charging systems can deliver thousands of watts to your vehicle's battery with nothing more than precise parking. But is this technology ready for mainstream adoption? This article explores how wireless EV charging works, its current capabilities, the vehicles and systems available today, and what the future holds.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              How Wireless EV Charging Works
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Wireless EV charging uses the same fundamental principle as wireless phone chargers—electromagnetic induction—but at a much higher power level and with different engineering challenges.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              The Basic Technology
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Wireless charging systems consist of two main components: a ground assembly (GA) containing a transmitter coil, and a vehicle assembly (VA) containing a receiver coil. The ground assembly connects to your electrical supply and generates a magnetic field. When the vehicle parks over the ground assembly with proper alignment, the magnetic field induces an electrical current in the vehicle's receiver coil. This current charges the battery, just like plugging in a cable. The system typically operates at frequencies between 79-90 kHz, optimized for efficient power transfer.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Magnetic Resonance vs. Inductive Coupling
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              While simple inductive coupling (like phone chargers) requires very close proximity, EV wireless charging uses magnetic resonance. This technology allows power transfer across larger gaps—typically 4-10 inches—accommodating different vehicle ground clearances. Resonant coupling also maintains efficiency better with minor misalignment, making it more practical for real-world parking.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Power Levels and Efficiency
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Current wireless EV charging systems operate at power levels from 3.3 kW (similar to Level 1 plug-in) to 11+ kW (matching Level 2 home charging). Higher power systems up to 22 kW are in development. Efficiency typically ranges from 90-93%, compared to 95%+ for plug-in charging. This means slightly more electricity is consumed for the same charge, but the difference is minimal in real-world use.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Current Wireless Charging Systems
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Several companies offer wireless EV charging systems today, ranging from aftermarket solutions to factory-integrated options.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              WiTricity
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              WiTricity is the leader in wireless EV charging technology, licensing its magnetic resonance technology to automakers worldwide. Their Halo system delivers up to 11 kW and is being integrated by multiple manufacturers. WiTricity's technology underpins many of the factory wireless charging systems appearing in new vehicles. The company also offers aftermarket solutions for existing EVs.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Plugless (by Evatran)
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Plugless offers aftermarket wireless charging systems for specific vehicle models including Tesla Model S and BMW i3. Their 7.2 kW system provides meaningful overnight charging without plugging in. Installation requires mounting a receiver unit under the vehicle and placing the ground pad in your parking space. Prices start around $3,000-$4,000 for complete systems.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Momentum Dynamics
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Momentum Dynamics focuses on high-power wireless charging for commercial fleets, particularly buses. Their systems can deliver 200-450 kW, enabling opportunity charging during regular route stops. While not consumer-focused, their technology demonstrates wireless charging's potential at much higher power levels.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              WAVE (Wireless Advanced Vehicle Electrification)
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              WAVE, now part of Ideanomics, provides wireless charging systems for commercial vehicles. Their technology is deployed in transit bus fleets across several cities, proving the concept's viability for heavy-duty applications.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Vehicles with Factory Wireless Charging
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Several automakers are now offering or developing factory-integrated wireless charging capability.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Genesis GV60
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              The Genesis GV60 offers optional factory wireless charging capability in select markets. Using WiTricity technology, the system provides up to 11 kW charging power. Owners purchase the ground assembly separately. The vehicle includes alignment assistance to help park precisely over the charging pad.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              BMW iX and Future Models
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              BMW has been a pioneer in wireless charging development. While the previous-generation 530e offered wireless charging in limited markets, the iX and other future models are expected to offer the technology more broadly. BMW's system includes automatic parking assistance to position the car precisely.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Mercedes-Benz
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Mercedes-Benz has demonstrated wireless charging capability and is developing systems for future EQ models. Their approach emphasizes integration with autonomous parking—the car would automatically position itself for optimal charging.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Hyundai/Kia/Genesis
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Beyond the Genesis GV60, Hyundai Motor Group is developing wireless charging for multiple platforms. Future Hyundai and Kia EVs are expected to offer the option, likely using standardized technology for interoperability.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Benefits of Wireless Charging
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Wireless charging offers several compelling advantages over traditional plug-in charging.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Ultimate Convenience
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              The primary benefit is pure convenience. Simply park and charging begins—no cables to handle, no plugs to connect, no thought required. In rain, snow, or extreme temperatures, this matters even more. For daily home charging, the small effort of plugging in is eliminated entirely.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Accessibility
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Wireless charging significantly improves accessibility for people with mobility challenges. Handling heavy charging cables can be difficult or impossible for some users. Wireless systems eliminate this barrier, making EVs more accessible to everyone.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Reduced Wear and Vandalism
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Charging ports and cables experience wear from daily use. Public charging stations face vandalism and cable theft. Wireless systems have no exposed connectors to damage or steal, potentially reducing maintenance costs and improving reliability.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Autonomous Vehicle Integration
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              For autonomous vehicles, wireless charging is essential. A self-driving car can't plug itself in, but it can park over a charging pad. As autonomy advances, wireless charging becomes not just convenient but necessary for fully autonomous operation.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Cleaner Aesthetics
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Wireless charging pads can be embedded in garage floors or parking surfaces, eliminating visible charging equipment. No cable management, no wall boxes—just a clean parking space that happens to charge your car.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Current Limitations and Challenges
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Despite its appeal, wireless EV charging faces several challenges that limit current adoption.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Cost
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Wireless charging systems cost significantly more than plug-in alternatives. A Level 2 home EVSE costs $500-$800 for the unit. A comparable wireless system costs $2,000-$4,000+, plus any vehicle modifications needed for aftermarket installations. As production scales, costs should decline, but the premium remains substantial.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Efficiency Loss
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Wireless charging loses 7-10% more energy compared to plug-in charging. For a typical driver charging at home, this might mean $50-$100 more per year in electricity costs. While not dramatic, efficiency-conscious users may prefer plug-in options.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Alignment Requirements
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              While resonant coupling allows some misalignment, efficiency drops significantly when the vehicle isn't positioned correctly over the ground pad. Most systems require parking within 4-6 inches of optimal position. Guidance systems help, but precise parking can be challenging in tight spaces or for less experienced drivers.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Power Level Limitations
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Current consumer wireless systems top out at 11 kW, matching Level 2 plug-in charging. There's no wireless equivalent to DC fast charging for consumers. For home overnight charging, this is adequate, but it limits wireless charging's usefulness for quick top-ups or road trip scenarios.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Standardization
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Unlike plug-in charging (where J1772 and NACS are well-established), wireless charging standards are still evolving. SAE J2954 provides a standard framework, but interoperability between different manufacturers' systems isn't guaranteed. Buying a ground assembly from one company may not work with a vehicle from another.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Installation Complexity
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Installing wireless charging requires positioning the ground pad precisely for your parking location and potentially modifying the garage floor. For embedded installations, this can involve concrete cutting. The installation is more complex than mounting a standard wall charger.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Dynamic Wireless Charging: The Future?
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              While static wireless charging (charging while parked) is available today, researchers and companies are developing dynamic wireless charging—charging while driving.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              How It Would Work
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Dynamic charging embeds transmitter coils in the roadway. As vehicles drive over the enabled lane, power transfers continuously to the vehicle. This could enable EVs with smaller batteries (lighter, cheaper) while providing unlimited range. The technology has been demonstrated in test tracks and pilot projects.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Current Projects
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Several dynamic charging pilot projects are underway. Sweden has installed charging rails in public roads. Italy has tested dynamic charging on a highway section. Michigan is building a wireless charging road in Detroit. These projects test the technology's viability but are years from commercial deployment.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Challenges
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Dynamic charging faces enormous infrastructure challenges. Embedding charging systems in roads is expensive and complex. Billing systems for charging while driving don't exist. Standardization across regions and countries is problematic. While the concept is exciting, widespread implementation is likely decades away.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Is Wireless Charging Right for You?
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Wireless EV charging makes sense for certain users and situations, but isn't necessary for everyone.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Consider Wireless Charging If...
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              You highly value convenience and are willing to pay a premium for it. You have mobility challenges that make handling cables difficult. You're purchasing a new vehicle with factory wireless capability. You want a completely clean garage aesthetic. You're planning for an autonomous vehicle future.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Stick with Plug-In Charging If...
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              You want the lowest cost solution. You're concerned about energy efficiency. You need faster than 11 kW charging at home. Your vehicle doesn't support wireless charging. You rent or might move soon (plug-in equipment is more portable).
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Conclusion: Ready but Still Maturing
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-8">
              Wireless EV charging technology works and is available today for certain vehicles and situations. The convenience is undeniable—parking and walking away while your car charges is genuinely delightful. However, high costs, limited vehicle compatibility, and efficiency penalties mean wireless charging remains a premium option rather than a mainstream choice. As more automakers integrate wireless capability and standards mature, expect costs to drop and adoption to increase. For most EV owners in 2026, plug-in charging remains the practical choice. But for those who value ultimate convenience and have compatible vehicles, wireless charging delivers on its promise of effortless power. The technology is ready—whether it's ready for your specific situation depends on your priorities and circumstances.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[rgba(74,144,217,0.2)]">
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Wireless Charging</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">EV Technology</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Inductive Charging</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Future Tech</span>
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

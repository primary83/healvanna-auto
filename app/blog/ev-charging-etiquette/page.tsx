export default function EVChargingEtiquette() {
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
            <span className="text-[#6b7a94] text-[14px]">9 min read</span>
          </div>

          {/* Title */}
          <h1 className="text-[42px] md:text-[52px] font-bold leading-[1.1] mb-6">
            EV Charging Etiquette:
            <span className="text-[#4a90d9]"> Do's and Don'ts</span>
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
              src="/blog/ev-charging-etiquette.png"
              alt="EV charging etiquette guide"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-8">
              As EV adoption grows, so does the importance of shared charging etiquette. Good charging manners ensure everyone gets the charge they need, reduces conflict at busy stations, and helps build a positive EV community. Whether you are new to electric vehicles or a seasoned owner, following these do's and don'ts makes charging better for everyone.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              The Do's of EV Charging
            </h2>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Do: Move Your Car When Charging Is Complete
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              This is the golden rule of charging etiquette. When your car finishes charging, move it promptly so others can use the charger. Set a phone alarm or use your car's app notifications to alert you when charging is complete. At busy stations, even 15 minutes of unnecessary occupation blocks someone else.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Do: Charge Only What You Need at Busy Stations
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              At crowded fast-charging stations, charge to 80% rather than 100%. Charging slows dramatically above 80%, so the last 20% takes disproportionately long. Getting to 80% and moving on lets more people charge in the same time. If you need more range, consider charging to 80%, driving to your destination, and topping up there.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Do: Return the Cable Properly
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              After charging, coil the cable neatly and return it to its holder. Do not leave cables on the ground where they can be driven over, tripped on, or damaged. A few seconds of care extends equipment life and shows respect for shared resources.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Do: Be Patient and Courteous
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Sometimes you will have to wait. Approach it with patience rather than frustration. The person charging ahead of you is not your enemy—they need a charge just like you. A friendly wave or brief conversation builds community. Road trip charging stops are great opportunities to meet fellow EV enthusiasts.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Do: Use Apps to Check Availability
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Before driving to a charging station, check apps like PlugShare or the network's own app for real-time availability. This saves time and reduces frustration. If a station shows all chargers occupied, consider an alternative location rather than adding to the queue.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Do: Report Broken Chargers
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              If you encounter a malfunctioning charger, report it through the network's app or on PlugShare. Your report helps the network dispatch repairs and warns other drivers to avoid the broken unit. A few taps on your phone improve the experience for everyone who follows.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Do: Leave Contact Information When Appropriate
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              At destination chargers where you might be parked for hours, consider leaving a note with your phone number on the dashboard. This allows another driver to contact you if they urgently need the charger rather than simply waiting indefinitely.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              The Don'ts of EV Charging
            </h2>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Don't: ICE a Charging Spot
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              "ICEing" refers to parking a gas car (Internal Combustion Engine) in an EV charging spot. This prevents EVs from charging and is illegal in many jurisdictions. If you drive a gas car, never park in EV charging spaces, even "just for a minute." If you see an ICEd spot, report it to the property manager.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Don't: Unplug Someone Else's Car
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Never unplug another vehicle without permission, even if it appears to be fully charged. Many EVs lock the charging cable while charging, but some do not. Unplugging without consent is considered extremely poor etiquette and may be illegal. If someone is overstaying, contact the charging network or property owner.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Don't: Hog Chargers You Don't Need
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              If your battery is at 85% and you are just running a quick errand, do not occupy a public charger when others might genuinely need it. Charge at home when possible. Public chargers, especially fast chargers, should serve those who need them for longer trips or lack home charging.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Don't: Leave Trash at Charging Stations
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Treat charging stations like you would want to find them. Dispose of trash properly. Do not leave coffee cups, food wrappers, or other debris. Clean stations reflect well on the EV community and encourage property owners to maintain and expand charging infrastructure.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Don't: Block Multiple Spaces
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Park carefully within a single space. Do not angle across two spots or position your car to block access to adjacent chargers. Some stations have tight layouts—take a moment to park properly so all chargers remain accessible.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Don't: Get Confrontational
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              If someone violates etiquette, address it calmly if at all. Aggressive confrontation helps no one and can escalate dangerously. A polite request works better than anger. If someone is consistently problematic, report to the network or property management rather than engaging directly.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Special Situations
            </h2>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Queuing at Busy Stations
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              When a station is full, form an orderly queue. Wait in your car rather than standing at the chargers. When a spot opens, the first car in line takes it. Some stations have designated waiting areas—use them. Tesla Superchargers often show queue times in the app.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Workplace and Shared Charging
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              At workplace chargers with limited availability, coordinate with coworkers. Many offices implement sign-up systems or time limits. Move your car at lunch or break times to let others charge. Fair sharing builds goodwill and encourages employers to add more chargers.
            </p>

            <h3 className="text-[22px] font-semibold text-[#e8edf5] mt-8 mb-4">
              Hotel and Destination Charging
            </h3>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              At hotels, charge overnight but move your car in the morning so other guests can charge. Inform the front desk if you plan to use a charger so they can manage availability. Consider tipping valets who help coordinate EV charging.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Understanding Idle Fees
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Many networks charge idle fees when you remain connected after charging completes while the station is busy. These fees encourage turnover and are typically $0.50-$1.00 per minute. Avoid them by setting alerts and moving promptly. Idle fees are not punishment—they are a market mechanism to improve charger availability.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Building EV Community
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-6">
              Good etiquette builds positive EV community. Help new EV owners learn the ropes. Share tips about good charging locations. Leave helpful reviews on PlugShare. When you see someone struggling with a charger, offer assistance. The EV community grows stronger when we support each other.
            </p>

            <h2 className="text-[28px] font-bold text-[#e8edf5] mt-12 mb-6">
              Conclusion: Charge Like You'd Want Others To
            </h2>
            <p className="text-[18px] text-[#b8c4d4] leading-relaxed mb-8">
              Charging etiquette boils down to the golden rule: charge as you would want others to charge. Be prompt, be courteous, and be considerate of fellow EV drivers. As charging infrastructure expands and more people join the electric revolution, good etiquette ensures a positive experience for everyone. You are not just charging a car—you are part of a community shaping the future of transportation.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-[rgba(74,144,217,0.2)]">
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Charging Etiquette</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">EV Tips</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">Public Charging</span>
              <span className="px-3 py-1 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-[13px] rounded-full">EV Community</span>
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

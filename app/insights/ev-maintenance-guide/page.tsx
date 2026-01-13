"use client";

import Link from "next/link";

export default function EVMaintenanceGuide() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="flex gap-10">
          {[
            { name: "HOME", href: "/" },
            { name: "CARS", href: "/cars" },
            { name: "CARE", href: "/care" },
            { name: "CRAFT", href: "/craft" },
            { name: "INSIGHTS", href: "/insights" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs tracking-[0.12em] cursor-pointer transition-colors duration-300 pb-2 ${
                item.name === "INSIGHTS"
                  ? "text-[#e8edf5] border-b border-[#4a90d9]"
                  : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Article Header */}
      <section className="pt-32 pb-12 px-12 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]">
        <div className="max-w-[900px] mx-auto">
          <Link href="/insights" className="inline-flex items-center text-[#4a90d9] text-sm mb-8 hover:underline">
            ← Back to Insights
          </Link>
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Complete Guide</div>
          <h1 className="text-[clamp(32px,5vw,48px)] font-extralight tracking-tight mb-6 leading-tight">
            The Complete Electric Vehicle <span className="italic text-[#4a90d9]">Maintenance Guide</span>
          </h1>
          <p className="text-[17px] text-[#6b7a94] leading-relaxed mb-8">
            Everything you need to know about maintaining your electric vehicle for optimal performance, longevity, and safety. From battery care to brake maintenance, we cover it all.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-[#6b7a94]">
            <span>January 2025</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-12 pb-16">
        <div className="max-w-[900px] mx-auto">
          <img
            src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&q=80"
            alt="Electric vehicle charging and maintenance"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <article className="px-12 pb-20">
        <div className="max-w-[900px] mx-auto">
          
          {/* Introduction */}
          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-[17px] text-[#a0aec0] leading-relaxed mb-6">
              If you've recently purchased an electric vehicle or are considering making the switch, you're probably wondering about <strong className="text-[#e8edf5]">how to maintain an electric car</strong> properly. The good news? Electric vehicles require significantly less maintenance than their gas-powered counterparts. However, that doesn't mean they're maintenance-free. Understanding <strong className="text-[#e8edf5]">EV maintenance requirements</strong> is crucial for maximizing your vehicle's lifespan, performance, and resale value.
            </p>
            <p className="text-[17px] text-[#a0aec0] leading-relaxed mb-6">
              In this comprehensive guide, we'll cover everything from <strong className="text-[#e8edf5]">electric vehicle battery maintenance tips</strong> to brake care, tire rotation schedules, and software updates. Whether you own a Tesla Model 3, Rivian R1S, Lucid Air, or any other EV, this guide will help you keep your vehicle running at peak performance for years to come.
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.2)] mb-12">
            <h2 className="text-lg font-medium mb-4 text-[#4a90d9]">What You'll Learn</h2>
            <ul className="space-y-2 text-[15px] text-[#a0aec0]">
              <li>• How to maintain your EV battery for maximum lifespan</li>
              <li>• Why EVs need different brake maintenance than gas cars</li>
              <li>• Tire care specific to electric vehicles</li>
              <li>• Cooling system and thermal management basics</li>
              <li>• Software updates and why they matter</li>
              <li>• Creating your EV maintenance schedule</li>
              <li>• Cost comparison: EV vs gas car maintenance</li>
            </ul>
          </div>

          {/* Section 1: Battery Maintenance */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">How to Maintain Your Electric Vehicle Battery</h2>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              The battery is the heart of your electric vehicle, and proper care is essential for longevity. Many new EV owners ask, "<strong className="text-[#e8edf5]">how long do electric car batteries last?</strong>" With proper maintenance, most EV batteries can last 15-20 years or 200,000+ miles before significant degradation occurs.
            </p>
            
            <h3 className="text-xl font-light text-[#e8edf5] mb-4 mt-8">Optimal Charging Habits for Battery Longevity</h3>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              One of the most important aspects of <strong className="text-[#e8edf5]">electric car battery care</strong> is developing good charging habits. Here's what the experts recommend:
            </p>
            <ul className="space-y-3 text-[16px] text-[#a0aec0] mb-6 ml-4">
              <li><strong className="text-[#e8edf5]">Keep your battery between 20-80%:</strong> Regularly charging to 100% or letting your battery drop below 20% can accelerate degradation. For daily driving, aim to keep your state of charge between 20% and 80%.</li>
              <li><strong className="text-[#e8edf5]">Use Level 2 charging at home:</strong> While DC fast charging is convenient for road trips, <strong className="text-[#e8edf5]">frequent fast charging effects on EV battery</strong> can cause additional wear. Use slower Level 2 charging (240V) for daily use when possible.</li>
              <li><strong className="text-[#e8edf5]">Avoid charging in extreme temperatures:</strong> If possible, charge your EV in a garage during very hot or cold weather. Extreme temperatures can stress the battery during charging.</li>
              <li><strong className="text-[#e8edf5]">Don't let your EV sit at 100% charge:</strong> If you charge to 100% for a road trip, try to start driving soon after. Leaving the battery at full charge for extended periods can cause stress on the cells.</li>
            </ul>

            <h3 className="text-xl font-light text-[#e8edf5] mb-4 mt-8">Temperature Management for EV Batteries</h3>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              <strong className="text-[#e8edf5]">How does cold weather affect electric car batteries?</strong> This is one of the most common questions from EV owners in northern climates. Cold temperatures can temporarily reduce your range by 20-40% and slow charging speeds. Here's how to minimize the impact:
            </p>
            <ul className="space-y-3 text-[16px] text-[#a0aec0] mb-6 ml-4">
              <li>Pre-condition your battery while plugged in before driving in cold weather</li>
              <li>Park in a garage when possible to maintain battery temperature</li>
              <li>Use scheduled departure features to warm the battery before your commute</li>
              <li>In extreme heat, park in shade and use cabin overheat protection features</li>
            </ul>
          </section>

          {/* Section 2: Brake Maintenance */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">EV Brake Maintenance: Why It's Different</h2>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              One of the biggest advantages of electric vehicles is <strong className="text-[#e8edf5]">regenerative braking</strong>, which uses the electric motor to slow the car while recapturing energy. This dramatically reduces wear on traditional friction brakes. Many EV owners find that their brake pads last 100,000+ miles compared to 30,000-50,000 miles on gas vehicles.
            </p>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              However, <strong className="text-[#e8edf5]">do electric cars need brake fluid changes?</strong> Absolutely yes. While your brake pads may last longer, brake fluid is hygroscopic, meaning it absorbs moisture over time. Most manufacturers recommend changing brake fluid every 2-3 years regardless of mileage.
            </p>

            <h3 className="text-xl font-light text-[#e8edf5] mb-4 mt-8">Preventing Brake Rotor Corrosion in EVs</h3>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              Because regenerative braking handles most of your stopping needs, your traditional brakes may not get used enough. This can actually cause problems! <strong className="text-[#e8edf5]">EV brake rotor rust and corrosion</strong> is a common issue, especially in humid climates or areas with salted winter roads.
            </p>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              To prevent this, periodically use your friction brakes more aggressively (when safe to do so) to clean off any surface rust. Some EV owners disable regenerative braking occasionally specifically for this purpose. If you live in a coastal or high-humidity area, this is especially important.
            </p>
          </section>

          {/* Section 3: Tire Maintenance */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Tire Care for Electric Vehicles</h2>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              <strong className="text-[#e8edf5]">Do electric cars wear tires faster than gas cars?</strong> Unfortunately, yes. EVs are typically heavier due to their battery packs, and they deliver instant torque which can accelerate tire wear. The good news is that proper maintenance can significantly extend tire life.
            </p>

            <h3 className="text-xl font-light text-[#e8edf5] mb-4 mt-8">EV-Specific Tire Considerations</h3>
            <ul className="space-y-3 text-[16px] text-[#a0aec0] mb-6 ml-4">
              <li><strong className="text-[#e8edf5]">Use EV-specific tires:</strong> Many manufacturers now offer <strong className="text-[#e8edf5]">best tires for electric vehicles</strong> designed to handle the extra weight and torque. These tires also often have lower rolling resistance to maximize range.</li>
              <li><strong className="text-[#e8edf5]">Rotate tires every 5,000-7,500 miles:</strong> Regular rotation is even more important for EVs due to uneven wear patterns from regenerative braking.</li>
              <li><strong className="text-[#e8edf5]">Check tire pressure monthly:</strong> Proper inflation is crucial for range and tire longevity. Under-inflated tires reduce efficiency and wear faster.</li>
              <li><strong className="text-[#e8edf5]">Get regular alignments:</strong> The weight of EV batteries can affect alignment. Have it checked every 12,000-15,000 miles or if you notice uneven wear.</li>
            </ul>

            <div className="bg-[rgba(74,144,217,0.1)] p-6 rounded-lg border border-[rgba(74,144,217,0.2)] my-8">
              <h4 className="text-lg font-medium text-[#4a90d9] mb-3">Pro Tip: EV Tire Rotation Pattern</h4>
              <p className="text-[15px] text-[#a0aec0]">
                For dual-motor AWD electric vehicles, use an X-pattern rotation (front left to rear right, front right to rear left). For single-motor EVs, follow the same rotation pattern you would for a front-wheel or rear-wheel drive gas car.
              </p>
            </div>
          </section>

          {/* Section 4: Cooling System */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Cooling System and Thermal Management</h2>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              While EVs don't have traditional radiators for engine cooling, they do have sophisticated <strong className="text-[#e8edf5]">thermal management systems for the battery, motor, and power electronics</strong>. Understanding <strong className="text-[#e8edf5]">how to maintain EV cooling system</strong> is important for vehicle longevity.
            </p>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              Most modern EVs use liquid cooling for the battery pack. This coolant typically needs to be replaced every 4-5 years or around 50,000 miles, though intervals vary by manufacturer. Tesla, for example, considers its coolant a "lifetime" fluid under normal conditions, while other manufacturers have specific replacement intervals.
            </p>

            <h3 className="text-xl font-light text-[#e8edf5] mb-4 mt-8">Signs Your EV Cooling System Needs Attention</h3>
            <ul className="space-y-3 text-[16px] text-[#a0aec0] mb-6 ml-4">
              <li>Reduced charging speeds (the car may be limiting power to protect an overheating battery)</li>
              <li>Reduced performance in hot weather</li>
              <li>Warning messages about battery temperature</li>
              <li>Unusual noises from cooling fans or pumps</li>
              <li>Visible coolant leaks under the vehicle</li>
            </ul>
          </section>

          {/* Section 5: Software Updates */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Software Updates: The New Oil Change</h2>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              One unique aspect of <strong className="text-[#e8edf5]">modern EV maintenance</strong> is software updates. Unlike traditional cars, electric vehicles can receive over-the-air (OTA) updates that improve performance, add features, fix bugs, and even increase range.
            </p>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              <strong className="text-[#e8edf5]">Are Tesla software updates free?</strong> Yes, most EV manufacturers provide software updates at no cost. These updates can include everything from improved regenerative braking algorithms to new entertainment features and enhanced autopilot capabilities.
            </p>

            <h3 className="text-xl font-light text-[#e8edf5] mb-4 mt-8">Best Practices for EV Software Updates</h3>
            <ul className="space-y-3 text-[16px] text-[#a0aec0] mb-6 ml-4">
              <li><strong className="text-[#e8edf5]">Keep your car connected to WiFi:</strong> Updates download faster and don't use your cellular data</li>
              <li><strong className="text-[#e8edf5]">Install updates promptly:</strong> Security patches and bug fixes are important</li>
              <li><strong className="text-[#e8edf5]">Ensure adequate battery charge:</strong> Most updates require at least 20-50% battery</li>
              <li><strong className="text-[#e8edf5]">Read release notes:</strong> Understand what changes are being made to your vehicle</li>
            </ul>
          </section>

          {/* Section 6: Maintenance Schedule */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Complete EV Maintenance Schedule</h2>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              Here's a comprehensive <strong className="text-[#e8edf5]">electric vehicle maintenance checklist</strong> to keep your car running smoothly:
            </p>

            <div className="space-y-6">
              <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)]">
                <h4 className="text-lg font-medium text-[#4a90d9] mb-3">Monthly</h4>
                <ul className="space-y-2 text-[15px] text-[#a0aec0]">
                  <li>• Check tire pressure and adjust as needed</li>
                  <li>• Inspect tires for wear or damage</li>
                  <li>• Check windshield washer fluid level</li>
                  <li>• Verify all lights are functioning</li>
                </ul>
              </div>

              <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)]">
                <h4 className="text-lg font-medium text-[#4a90d9] mb-3">Every 7,500 Miles</h4>
                <ul className="space-y-2 text-[15px] text-[#a0aec0]">
                  <li>• Rotate tires</li>
                  <li>• Inspect brake pads and rotors</li>
                  <li>• Check suspension components</li>
                  <li>• Inspect charging port for debris</li>
                </ul>
              </div>

              <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)]">
                <h4 className="text-lg font-medium text-[#4a90d9] mb-3">Every 15,000 Miles</h4>
                <ul className="space-y-2 text-[15px] text-[#a0aec0]">
                  <li>• Replace cabin air filter</li>
                  <li>• Inspect and clean HVAC system</li>
                  <li>• Check wheel alignment</li>
                  <li>• Inspect battery cooling system</li>
                </ul>
              </div>

              <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)]">
                <h4 className="text-lg font-medium text-[#4a90d9] mb-3">Every 2-3 Years</h4>
                <ul className="space-y-2 text-[15px] text-[#a0aec0]">
                  <li>• Replace brake fluid</li>
                  <li>• Inspect and possibly replace wiper blades</li>
                  <li>• Check 12V auxiliary battery</li>
                  <li>• Full inspection by certified EV technician</li>
                </ul>
              </div>

              <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)]">
                <h4 className="text-lg font-medium text-[#4a90d9] mb-3">Every 4-5 Years</h4>
                <ul className="space-y-2 text-[15px] text-[#a0aec0]">
                  <li>• Replace battery coolant (if specified by manufacturer)</li>
                  <li>• Replace 12V auxiliary battery</li>
                  <li>• Comprehensive battery health check</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: Cost Comparison */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">EV vs Gas Car Maintenance Costs</h2>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              One of the biggest advantages of EV ownership is <strong className="text-[#e8edf5]">lower maintenance costs compared to gas cars</strong>. According to studies, EV owners save an average of $4,600 in maintenance costs over the life of the vehicle.
            </p>

            <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)] mb-6">
              <h4 className="text-lg font-medium text-[#e8edf5] mb-4">What You DON'T Need in an EV:</h4>
              <ul className="space-y-2 text-[15px] text-[#a0aec0]">
                <li>❌ Oil changes (saves $50-100 every 3,000-5,000 miles)</li>
                <li>❌ Transmission fluid changes</li>
                <li>❌ Spark plugs</li>
                <li>❌ Timing belts</li>
                <li>❌ Fuel filters</li>
                <li>❌ Exhaust system repairs</li>
                <li>❌ Emission system maintenance</li>
              </ul>
            </div>

            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              <strong className="text-[#e8edf5]">How much does it cost to maintain an electric car per year?</strong> On average, EV maintenance costs between $300-600 per year compared to $1,000-1,500 for a comparable gas vehicle. This adds up to significant savings over the ownership period.
            </p>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Final Thoughts: Keep Your EV Running Strong</h2>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              Maintaining an electric vehicle is simpler and cheaper than maintaining a gas car, but it still requires attention to key areas. By following the guidelines in this <strong className="text-[#e8edf5]">comprehensive EV maintenance guide</strong>, you can ensure your electric vehicle provides reliable, efficient transportation for many years to come.
            </p>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              Remember: the best maintenance is preventive maintenance. Stay on top of tire rotations, monitor your battery health, keep your software updated, and address any issues promptly. Your future self (and your wallet) will thank you.
            </p>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              Whether you're driving a <strong className="text-[#e8edf5]">Tesla Model S maintenance schedule</strong>, following a <strong className="text-[#e8edf5]">Rivian R1T maintenance checklist</strong>, or caring for any other electric vehicle, the fundamentals remain the same. Take care of your battery, watch your tires, and enjoy the simplified maintenance experience that comes with electric vehicle ownership.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[rgba(74,144,217,0.1)] to-transparent rounded-lg border border-[rgba(74,144,217,0.2)]">
            <h3 className="text-xl font-light mb-3">Need Professional EV Service?</h3>
            <p className="text-[#6b7a94] mb-6">Find certified electric vehicle service centers and detailers in your area.</p>
            <div className="flex gap-4">
              <Link href="/care" className="inline-block px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">
                Find EV Detailers
              </Link>
              <Link href="/craft" className="inline-block px-8 py-3 text-[13px] font-medium border border-[#4a90d9] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">
                Find Service Centers
              </Link>
            </div>
          </div>

        </div>
      </article>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] pt-16 pb-8 px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto">
          <div className="text-[11px] text-[#3d4a61]">© 2025 Healvanna. All rights reserved.</div>
          <div className="flex gap-6">
            {[
              { name: "Privacy", href: "/privacy" },
              { name: "Terms", href: "/terms" },
              { name: "Contact", href: "/contact" }
            ].map((link) => (
              <Link key={link.name} href={link.href} className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors duration-300">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

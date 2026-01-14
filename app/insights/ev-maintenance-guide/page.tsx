"use client";

import Link from "next/link";

export default function EVMaintenanceGuide() {
  const maintenanceItems = [
    {
      category: "Battery Care",
      icon: "🔋",
      items: [
        { task: "Keep charge between 20-80%", frequency: "Daily driving", importance: "High", description: "Avoid regularly charging to 100% or depleting below 20% to maximize battery longevity." },
        { task: "Precondition before fast charging", frequency: "Before DC fast charging", importance: "Medium", description: "Use your vehicle's preconditioning feature to warm the battery before arriving at a fast charger." },
        { task: "Avoid extreme temperatures", frequency: "Ongoing", importance: "High", description: "Park in shade during summer and garage during winter when possible to reduce thermal stress." },
        { task: "Battery health check", frequency: "Annually", importance: "Medium", description: "Have your battery's state of health checked during annual service to track degradation." },
      ]
    },
    {
      category: "Tire Maintenance",
      icon: "🛞",
      items: [
        { task: "Check tire pressure", frequency: "Monthly", importance: "High", description: "EVs are heavier than ICE vehicles. Maintain manufacturer-recommended pressure for efficiency and tire life." },
        { task: "Rotate tires", frequency: "Every 5,000-7,500 miles", importance: "High", description: "EV torque causes faster front tire wear. Regular rotation extends tire life significantly." },
        { task: "Alignment check", frequency: "Annually", importance: "Medium", description: "The weight of EV batteries can affect alignment. Check annually or if you notice uneven wear." },
        { task: "Use EV-specific tires", frequency: "When replacing", importance: "High", description: "EV-rated tires handle extra weight and torque while reducing road noise and improving efficiency." },
      ]
    },
    {
      category: "Brake System",
      icon: "🛑",
      items: [
        { task: "Brake fluid check", frequency: "Every 2 years", importance: "High", description: "Even with regenerative braking, brake fluid absorbs moisture and needs periodic replacement." },
        { task: "Brake pad inspection", frequency: "Every 20,000 miles", importance: "Medium", description: "EV brake pads last 2-3x longer than ICE vehicles due to regenerative braking. Still inspect regularly." },
        { task: "Exercise brakes monthly", frequency: "Monthly", importance: "Medium", description: "If you rely heavily on regen braking, occasionally use friction brakes to prevent rotor corrosion." },
        { task: "Caliper service", frequency: "Every 2-3 years", importance: "Low", description: "Clean and lubricate caliper slides to prevent seizing from infrequent use." },
      ]
    },
    {
      category: "Cooling System",
      icon: "❄️",
      items: [
        { task: "Coolant level check", frequency: "Every 6 months", importance: "High", description: "EVs use coolant for battery thermal management. Low levels can cause charging issues." },
        { task: "Coolant replacement", frequency: "Every 4-5 years", importance: "Medium", description: "Follow manufacturer intervals. Battery cooling systems are critical for performance and longevity." },
        { task: "AC system check", frequency: "Annually", importance: "Medium", description: "The AC system also helps cool the battery during fast charging and hot weather driving." },
      ]
    },
    {
      category: "Software & Electronics",
      icon: "💻",
      items: [
        { task: "Software updates", frequency: "As available", importance: "High", description: "Keep your vehicle updated for the latest features, efficiency improvements, and bug fixes." },
        { task: "12V battery check", frequency: "Every 2-3 years", importance: "High", description: "The 12V battery powers accessories and door locks. A dead 12V battery can strand you." },
        { task: "Calibrate sensors", frequency: "After windshield replacement", importance: "High", description: "ADAS cameras need recalibration after windshield work. Use certified technicians." },
      ]
    },
    {
      category: "Cabin & Exterior",
      icon: "✨",
      items: [
        { task: "Cabin air filter", frequency: "Every 15,000-20,000 miles", importance: "Medium", description: "EVs with HEPA filters may need more frequent replacement. Check your owner's manual." },
        { task: "Wiper blades", frequency: "Every 6-12 months", importance: "Low", description: "Replace when streaking occurs. Quality blades improve visibility and safety." },
        { task: "Wash regularly", frequency: "Every 2 weeks", importance: "Low", description: "Keep sensors and cameras clean for proper ADAS function. Avoid automatic car washes." },
      ]
    },
  ];

  const commonMistakes = [
    { mistake: "Charging to 100% daily", why: "Accelerates battery degradation. Reserve full charges for long trips.", solution: "Set daily charge limit to 80%" },
    { mistake: "Ignoring the 12V battery", why: "Can leave you stranded even with a full main battery.", solution: "Check every 2-3 years, replace proactively" },
    { mistake: "Using regular car washes", why: "Brushes can damage sensors, paint, and charging ports.", solution: "Hand wash or use touchless washes" },
    { mistake: "Skipping tire rotations", why: "EV torque causes rapid uneven wear, especially on front tires.", solution: "Rotate every 5,000-7,500 miles" },
    { mistake: "Neglecting brake maintenance", why: "Infrequent use causes corrosion and seized calipers.", solution: "Exercise brakes monthly, service calipers" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-6 flex justify-between items-center bg-[rgba(10,15,26,0.95)] backdrop-blur-md border-b border-[rgba(74,144,217,0.1)]">
        <Link href="/" className="text-xl tracking-wider font-extralight">Healvanna<span className="text-[#4a90d9]">.</span></Link>
        <div className="flex gap-10">
          {[
            { name: "Home", href: "/" },
            { name: "Vehicles", href: "/cars" },
            { name: "Care", href: "/care" },
            { name: "Craft", href: "/craft" },
            { name: "Insights", href: "/insights" },
          ].map((item) => (
            <Link key={item.name} href={item.href} className={`text-[13px] tracking-wide transition-all duration-300 pb-1 ${item.name === "Insights" ? "text-[#e8edf5] border-b border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"}`}>{item.name}</Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-12 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8">
            <Link href="/" className="hover:text-[#4a90d9] transition-colors">Home</Link><span>/</span>
            <Link href="/insights" className="hover:text-[#4a90d9] transition-colors">Insights</Link><span>/</span>
            <span className="text-[#e8edf5]">EV Maintenance Guide</span>
          </div>

          <div className="mb-6">
            <span className="px-3 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] text-xs tracking-wider uppercase rounded-full">Guide</span>
          </div>
          
          <h1 className="text-[clamp(36px,5vw,56px)] font-extralight tracking-tight mb-6 leading-tight">The Complete EV Maintenance Guide</h1>
          <p className="text-xl text-[#6b7a94] mb-8 leading-relaxed">Everything you need to know about maintaining your electric vehicle for peak performance, maximum range, and long-term reliability.</p>
          
          <div className="flex items-center gap-6 text-sm text-[#6b7a94]">
            <span>By Healvanna Editorial</span>
            <span>•</span>
            <span>Updated January 2024</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-12 pb-16">
        <div className="max-w-[900px] mx-auto">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80" alt="EV Maintenance" className="w-full h-96 object-cover rounded-lg" />
        </div>
      </section>

      {/* Introduction */}
      <section className="px-12 pb-16">
        <div className="max-w-[900px] mx-auto">
          <div className="bg-[rgba(74,144,217,0.1)] border border-[rgba(74,144,217,0.2)] rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium mb-2">The Good News About EV Maintenance</h3>
            <p className="text-[#6b7a94]">Electric vehicles require significantly less maintenance than traditional gas-powered cars. No oil changes, no spark plugs, no transmission fluid, and brake pads that last 2-3x longer thanks to regenerative braking. However, EVs do have unique maintenance needs that owners should understand.</p>
          </div>
          
          <p className="text-[#6b7a94] leading-relaxed mb-6">
            The average EV owner saves $800-1,200 per year on maintenance compared to a comparable gas vehicle. But this doesn't mean EVs are maintenance-free. Proper care of your battery, tires, brakes, and cooling system will ensure your EV delivers maximum range and performance for years to come.
          </p>
        </div>
      </section>

      {/* Maintenance Categories */}
      <section className="px-12 pb-20">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">Complete Maintenance Checklist</h2>
          
          <div className="space-y-12">
            {maintenanceItems.map((category) => (
              <div key={category.category} className="bg-[rgba(15,22,40,0.5)] rounded-lg border border-[rgba(74,144,217,0.15)] overflow-hidden">
                <div className="bg-[rgba(74,144,217,0.1)] px-6 py-4 border-b border-[rgba(74,144,217,0.15)]">
                  <h3 className="text-xl font-medium flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    {category.category}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {category.items.map((item, index) => (
                      <div key={index} className="border-b border-[rgba(74,144,217,0.1)] pb-4 last:border-0 last:pb-0">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium">{item.task}</h4>
                          <span className={`text-xs px-2 py-1 rounded ${
                            item.importance === "High" ? "bg-[rgba(239,68,68,0.2)] text-[#ef4444]" :
                            item.importance === "Medium" ? "bg-[rgba(251,191,36,0.2)] text-[#fbbf24]" :
                            "bg-[rgba(34,197,94,0.2)] text-[#22c55e]"
                          }`}>{item.importance}</span>
                        </div>
                        <div className="text-xs text-[#4a90d9] mb-2">Frequency: {item.frequency}</div>
                        <p className="text-sm text-[#6b7a94]">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="px-12 py-20 bg-[#0d1424]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl font-light mb-8 text-center">5 Common EV Maintenance Mistakes</h2>
          
          <div className="space-y-4">
            {commonMistakes.map((item, index) => (
              <div key={index} className="bg-[rgba(15,22,40,0.5)] rounded-lg border border-[rgba(239,68,68,0.2)] p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-[rgba(239,68,68,0.2)] text-[#ef4444] rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{item.mistake}</h3>
                    <p className="text-[#6b7a94] text-sm mb-3"><strong className="text-[#ef4444]">Why it's bad:</strong> {item.why}</p>
                    <p className="text-sm"><strong className="text-[#22c55e]">Solution:</strong> <span className="text-[#6b7a94]">{item.solution}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="px-12 py-20 bg-[#0a0f1a]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl font-light mb-8 text-center">EV vs Gas: Maintenance Cost Comparison</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[rgba(15,22,40,0.5)] rounded-lg border border-[rgba(74,144,217,0.15)] p-6">
              <h3 className="text-xl font-medium mb-4 text-[#4a90d9]">Electric Vehicle</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-[#6b7a94]">Oil changes</span><span className="text-[#22c55e]">$0/year</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Brake pads (amortized)</span><span>$50/year</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Tire rotation</span><span>$80/year</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Cabin air filter</span><span>$50/year</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Coolant service (amortized)</span><span>$40/year</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">12V battery (amortized)</span><span>$50/year</span></div>
                <div className="border-t border-[rgba(74,144,217,0.2)] pt-3 mt-3 flex justify-between font-medium">
                  <span>Annual Total</span><span className="text-[#22c55e]">~$270/year</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[rgba(15,22,40,0.5)] rounded-lg border border-[rgba(74,144,217,0.15)] p-6">
              <h3 className="text-xl font-medium mb-4 text-[#6b7a94]">Gas Vehicle</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-[#6b7a94]">Oil changes (3x/year)</span><span>$180/year</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Brake pads (amortized)</span><span>$150/year</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Tire rotation</span><span>$80/year</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Air filter + cabin filter</span><span>$80/year</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Transmission fluid (amortized)</span><span>$60/year</span></div>
                <div className="flex justify-between"><span className="text-[#6b7a94]">Spark plugs (amortized)</span><span>$40/year</span></div>
                <div className="border-t border-[rgba(74,144,217,0.2)] pt-3 mt-3 flex justify-between font-medium">
                  <span>Annual Total</span><span className="text-[#ef4444]">~$590/year</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-center text-[#6b7a94] mt-6 text-sm">* Estimates based on average usage. Actual costs vary by vehicle and location.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-12 py-20 bg-[#0d1424]">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl font-light mb-4">Need EV Service Specialists?</h2>
          <p className="text-[#6b7a94] mb-8">Find certified EV technicians and detailers who understand the unique needs of electric vehicles.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/care" className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">Find EV Detailers</Link>
            <Link href="/craft" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">Find EV Body Shops</Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="px-12 py-20 bg-[#0a0f1a]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl font-light mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/insights/best-ceramic-coatings-2024" className="bg-[rgba(15,22,40,0.5)] rounded-lg border border-[rgba(74,144,217,0.15)] p-6 hover:border-[rgba(74,144,217,0.4)] transition-all">
              <div className="text-xs text-[#4a90d9] mb-2">GUIDE</div>
              <h3 className="text-lg font-medium mb-2">Best Ceramic Coatings 2024</h3>
              <p className="text-sm text-[#6b7a94]">Our ranking of the top ceramic coating brands for your premium vehicle.</p>
            </Link>
            <Link href="/insights/us-evs-vs-chinese-evs" className="bg-[rgba(15,22,40,0.5)] rounded-lg border border-[rgba(74,144,217,0.15)] p-6 hover:border-[rgba(74,144,217,0.4)] transition-all">
              <div className="text-xs text-[#4a90d9] mb-2">COMPARISON</div>
              <h3 className="text-lg font-medium mb-2">US EVs vs Chinese EVs</h3>
              <p className="text-sm text-[#6b7a94]">How American and Chinese electric vehicles compare in range, tech, and value.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-16 bg-[#070b12] border-t border-[rgba(74,144,217,0.1)]">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto">
          <div className="text-[11px] text-[#3d4a61]">© 2025 Healvanna. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

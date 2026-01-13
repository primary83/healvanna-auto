"use client";

import Link from "next/link";

export default function FindingTrustedBodyShop() {
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
            How to Find a Trusted <span className="italic text-[#4a90d9]">Body Shop</span> for Your Vehicle
          </h1>
          <p className="text-[17px] text-[#6b7a94] leading-relaxed mb-8">
            Your complete guide to finding reputable auto body repair shops. Learn what certifications to look for, red flags to avoid, and how to ensure quality repairs for your luxury or electric vehicle.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-[#6b7a94]">
            <span>January 2025</span>
            <span>•</span>
            <span>12 min read</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-12 pb-16">
        <div className="max-w-[900px] mx-auto">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&q=80"
            alt="Professional auto body shop"
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
              Whether you've been in an accident, discovered hail damage, or simply need to repair a dent or scratch, finding the <strong className="text-[#e8edf5]">right auto body shop</strong> is crucial. The wrong choice can result in poor repairs, mismatched paint, decreased vehicle value, and ongoing problems. The right choice means your car looks and performs like new.
            </p>
            <p className="text-[17px] text-[#a0aec0] leading-relaxed mb-6">
              This is especially important for owners of <strong className="text-[#e8edf5]">luxury vehicles and electric cars</strong>. Modern vehicles use advanced materials like aluminum and carbon fiber, sophisticated paint systems, and integrated electronics that require specialized training and equipment to repair correctly. A shop that does great work on a Honda Civic may not be equipped to handle a Tesla Model S or Porsche Taycan.
            </p>
            <p className="text-[17px] text-[#a0aec0] leading-relaxed mb-6">
              In this comprehensive guide, we'll walk you through everything you need to know about <strong className="text-[#e8edf5]">how to find a reputable body shop</strong>, what certifications matter, questions to ask, and red flags that should send you looking elsewhere.
            </p>
          </div>

          {/* Section 1: Why It Matters */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Why Choosing the Right Body Shop Matters</h2>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              <strong className="text-[#e8edf5]">Does it really matter which body shop I use?</strong> Absolutely. The quality of collision repair directly impacts your safety, vehicle value, and long-term ownership experience.
            </p>
            <ul className="space-y-3 text-[16px] text-[#a0aec0] mb-6 ml-4">
              <li><strong className="text-[#e8edf5]">Your safety:</strong> Poor structural repairs can compromise your vehicle's ability to protect you in future accidents. Crumple zones, airbag sensors, and structural integrity must be restored to factory specifications.</li>
              <li><strong className="text-[#e8edf5]">Vehicle value:</strong> Substandard repairs are visible to trained eyes and can significantly reduce resale value. Carfax reports show accident history, but quality repairs minimize the impact.</li>
              <li><strong className="text-[#e8edf5]">Future problems:</strong> Bad repairs often lead to rust, paint failure, water leaks, and mechanical issues down the road. What seems like a savings today becomes expensive tomorrow.</li>
              <li><strong className="text-[#e8edf5]">Warranty implications:</strong> Improper repairs on newer vehicles can void manufacturer warranties, leaving you responsible for future repairs.</li>
            </ul>
          </section>

          {/* Section 2: Certifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Essential Certifications to Look For</h2>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              <strong className="text-[#e8edf5]">Certifications indicate that a shop has invested in training, equipment, and processes</strong> to meet specific standards. Here are the most important ones:
            </p>

            <h3 className="text-xl font-light text-[#e8edf5] mb-4 mt-8">I-CAR Gold Class Certification</h3>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              <strong className="text-[#e8edf5]">What is I-CAR Gold Class certification?</strong> I-CAR (Inter-Industry Conference on Auto Collision Repair) Gold Class is the highest level of training recognition in the collision repair industry. Only about 10% of body shops nationwide achieve this status. To maintain it, shops must ensure their technicians complete ongoing training in the latest repair procedures and technologies.
            </p>

            <h3 className="text-xl font-light text-[#e8edf5] mb-4 mt-8">Manufacturer Certifications</h3>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              For luxury and electric vehicles, <strong className="text-[#e8edf5]">manufacturer-specific certifications</strong> are crucial:
            </p>
            <ul className="space-y-3 text-[16px] text-[#a0aec0] mb-6 ml-4">
              <li><strong className="text-[#e8edf5]">Tesla Approved Body Shop:</strong> Essential for any Tesla collision repair due to aluminum construction and integrated electronics</li>
              <li><strong className="text-[#e8edf5]">Rivian Certified Collision Network:</strong> Specialized training for Rivian's unique construction</li>
              <li><strong className="text-[#e8edf5]">Porsche Approved Collision Center:</strong> Rigorous certification for proper Porsche repair</li>
              <li><strong className="text-[#e8edf5]">BMW Certified Collision Repair Center:</strong> Ensures correct procedures for BMW systems</li>
              <li><strong className="text-[#e8edf5]">Mercedes-Benz Certified Collision Center:</strong> Training for Mercedes-specific materials</li>
              <li><strong className="text-[#e8edf5]">Lucid Certified Body Shop:</strong> Specialized knowledge for Lucid's EV platform</li>
            </ul>

            <h3 className="text-xl font-light text-[#e8edf5] mb-4 mt-8">ASE Certification</h3>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              <strong className="text-[#e8edf5]">ASE (Automotive Service Excellence)</strong> certification demonstrates that individual technicians have passed rigorous testing in collision repair, painting, and refinishing.
            </p>
          </section>

          {/* Section 3: Questions to Ask */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Essential Questions to Ask Before Choosing a Body Shop</h2>
            
            <div className="space-y-6">
              <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)]">
                <h4 className="text-lg font-medium text-[#4a90d9] mb-3">About Certifications & Training</h4>
                <ul className="space-y-2 text-[15px] text-[#a0aec0]">
                  <li>• "Are you I-CAR Gold Class certified?"</li>
                  <li>• "Are you certified by my vehicle's manufacturer?"</li>
                  <li>• "How often do your technicians receive training?"</li>
                  <li>• "Do you have experience with my specific vehicle?"</li>
                </ul>
              </div>

              <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)]">
                <h4 className="text-lg font-medium text-[#4a90d9] mb-3">About Parts & Materials</h4>
                <ul className="space-y-2 text-[15px] text-[#a0aec0]">
                  <li>• "Will you use OEM (Original Equipment Manufacturer) parts?"</li>
                  <li>• "If aftermarket parts are used, will you inform me first?"</li>
                  <li>• "What brand of paint do you use?"</li>
                  <li>• "Do you have computerized color-matching equipment?"</li>
                </ul>
              </div>

              <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)]">
                <h4 className="text-lg font-medium text-[#4a90d9] mb-3">About the Repair Process</h4>
                <ul className="space-y-2 text-[15px] text-[#a0aec0]">
                  <li>• "Can I get a detailed written estimate?"</li>
                  <li>• "How long will the repair take?"</li>
                  <li>• "Will ADAS systems be recalibrated after repair?"</li>
                  <li>• "Do you provide a warranty on repairs? For how long?"</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Red Flags */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Red Flags: Warning Signs of a Bad Body Shop</h2>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="text-red-400 text-xl">⚠️</span>
                <div>
                  <h4 className="text-lg font-medium text-[#e8edf5] mb-1">Significantly Lower Estimates</h4>
                  <p className="text-[15px] text-[#a0aec0]">If one shop is much cheaper, they're cutting corners—cheap parts, skipped procedures, or hidden charges coming later.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-red-400 text-xl">⚠️</span>
                <div>
                  <h4 className="text-lg font-medium text-[#e8edf5] mb-1">High-Pressure Sales Tactics</h4>
                  <p className="text-[15px] text-[#a0aec0]">A reputable shop understands you need time to compare options. Pressure suggests desperation.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-red-400 text-xl">⚠️</span>
                <div>
                  <h4 className="text-lg font-medium text-[#e8edf5] mb-1">No Written Estimates</h4>
                  <p className="text-[15px] text-[#a0aec0]">Every legitimate shop provides detailed written estimates. Verbal-only quotes leave you vulnerable.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-red-400 text-xl">⚠️</span>
                <div>
                  <h4 className="text-lg font-medium text-[#e8edf5] mb-1">Dirty or Disorganized Facility</h4>
                  <p className="text-[15px] text-[#a0aec0]">Quality body work requires clean conditions. A messy shop indicates careless habits.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-red-400 text-xl">⚠️</span>
                <div>
                  <h4 className="text-lg font-medium text-[#e8edf5] mb-1">No Certifications Displayed</h4>
                  <p className="text-[15px] text-[#a0aec0]">Reputable shops proudly display certifications. If you don't see any, be cautious.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <span className="text-red-400 text-xl">⚠️</span>
                <div>
                  <h4 className="text-lg font-medium text-[#e8edf5] mb-1">Poor Online Reviews</h4>
                  <p className="text-[15px] text-[#a0aec0]">Check Google, Yelp, and BBB. Consistent negative reviews are a clear warning sign.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Insurance */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Navigating Insurance and Body Shop Selection</h2>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              <strong className="text-[#e8edf5]">Can my insurance company force me to use a specific body shop?</strong> No! You have the legal right to choose your own body shop, regardless of what your insurance company suggests.
            </p>

            <h3 className="text-xl font-light text-[#e8edf5] mb-4 mt-8">Understanding DRP Shops</h3>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              Insurance companies maintain lists of <strong className="text-[#e8edf5]">DRP (Direct Repair Program) or "preferred" shops</strong>. While these aren't necessarily bad, understand that DRP shops agree to discounted rates and may face pressure to use cheaper parts. Choose based on quality, not insurance preferences.
            </p>

            <h3 className="text-xl font-light text-[#e8edf5] mb-4 mt-8">OEM vs Aftermarket Parts</h3>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              Insurers often push for aftermarket parts to save money. Know that <strong className="text-[#e8edf5]">OEM parts</strong> are guaranteed to fit correctly, while aftermarket quality varies. For newer or luxury vehicles, insist on OEM parts to protect your warranty and vehicle value.
            </p>
          </section>

          {/* Section 6: EV Considerations */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Special Considerations for Electric Vehicle Repairs</h2>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              <strong className="text-[#e8edf5]">Finding a body shop for Tesla or other EV repair</strong> requires extra diligence:
            </p>

            <h3 className="text-xl font-light text-[#e8edf5] mb-4 mt-8">High-Voltage Safety</h3>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              EVs contain high-voltage battery systems that require technicians with specific safety training, proper de-energizing equipment, and knowledge of safe handling procedures.
            </p>

            <h3 className="text-xl font-light text-[#e8edf5] mb-4 mt-8">Aluminum Construction</h3>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              Many EVs (especially Tesla) use aluminum bodies. <strong className="text-[#e8edf5]">Aluminum body repair</strong> requires dedicated repair areas, specialized welding equipment, and different techniques than steel repair.
            </p>

            <h3 className="text-xl font-light text-[#e8edf5] mb-4 mt-8">ADAS Recalibration</h3>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              Modern EVs have sensors, cameras, and radar for driver assistance. After collision repair, these systems require <strong className="text-[#e8edf5]">ADAS recalibration</strong>. Make sure your chosen shop has the equipment and expertise for this critical step.
            </p>
          </section>

          {/* Section 7: Steps to Finding the Right Shop */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Step-by-Step: Finding the Right Body Shop</h2>
            
            <div className="space-y-4">
              <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)]">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#4a90d9] text-xl font-light">1</span>
                  <h4 className="text-lg font-medium text-[#e8edf5]">Check Manufacturer Requirements</h4>
                </div>
                <p className="text-[15px] text-[#a0aec0] ml-8">For luxury or electric vehicles, start by finding shops certified by your vehicle's manufacturer.</p>
              </div>

              <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)]">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#4a90d9] text-xl font-light">2</span>
                  <h4 className="text-lg font-medium text-[#e8edf5]">Verify I-CAR Gold Class Status</h4>
                </div>
                <p className="text-[15px] text-[#a0aec0] ml-8">Use the I-CAR website to verify Gold Class certification.</p>
              </div>

              <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)]">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#4a90d9] text-xl font-light">3</span>
                  <h4 className="text-lg font-medium text-[#e8edf5]">Read Online Reviews</h4>
                </div>
                <p className="text-[15px] text-[#a0aec0] ml-8">Check Google, Yelp, and BBB for customer experiences and consistent quality.</p>
              </div>

              <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)]">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#4a90d9] text-xl font-light">4</span>
                  <h4 className="text-lg font-medium text-[#e8edf5]">Visit the Shop in Person</h4>
                </div>
                <p className="text-[15px] text-[#a0aec0] ml-8">Assess cleanliness, organization, and professionalism. Ask to see examples of previous work.</p>
              </div>

              <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)]">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#4a90d9] text-xl font-light">5</span>
                  <h4 className="text-lg font-medium text-[#e8edf5]">Get Multiple Estimates</h4>
                </div>
                <p className="text-[15px] text-[#a0aec0] ml-8">Compare at least 2-3 written estimates. Be wary of outliers on either end.</p>
              </div>

              <div className="bg-[rgba(15,22,40,0.8)] p-6 rounded-lg border border-[rgba(74,144,217,0.15)]">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[#4a90d9] text-xl font-light">6</span>
                  <h4 className="text-lg font-medium text-[#e8edf5]">Ask About Warranty</h4>
                </div>
                <p className="text-[15px] text-[#a0aec0] ml-8">Quality shops stand behind their work with written warranties, typically 3-5 years or lifetime.</p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Final Thoughts: Investing in Quality Repairs</h2>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              Finding a <strong className="text-[#e8edf5]">trusted body shop</strong> takes time and research, but it's worth the effort. Quality repairs protect your safety, preserve your vehicle's value, and prevent future problems. Don't let insurance companies or low prices pressure you into choosing a substandard shop.
            </p>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              For owners of luxury vehicles and electric cars, working with certified shops isn't optional—it's essential. The specialized materials, electronics, and safety systems in modern vehicles require expertise that not every shop possesses.
            </p>
            <p className="text-[16px] text-[#a0aec0] leading-relaxed mb-6">
              Take your time, ask questions, verify certifications, and trust your instincts. A reputable body shop will be happy to answer your questions and show you why they deserve your business. Your vehicle—and your safety—are worth the investment in quality repairs.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[rgba(74,144,217,0.1)] to-transparent rounded-lg border border-[rgba(74,144,217,0.2)]">
            <h3 className="text-xl font-light mb-3">Find Certified Body Shops Near You</h3>
            <p className="text-[#6b7a94] mb-6">Search our directory of verified collision repair specialists and restoration experts.</p>
            <Link href="/craft" className="inline-block px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">
              Browse Body Shops
            </Link>
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

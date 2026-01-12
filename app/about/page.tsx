export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-[rgba(74,144,217,0.15)]">
        <a href="/" className="text-xl tracking-[0.3em] font-light">
          HEALVANNA <span className="text-[#4a90d9]">AUTO</span>
        </a>
        <div className="flex gap-10">
          {["Home", "Cars", "Care", "Craft", "Insights", "About"].map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`text-[13px] tracking-wider transition-colors duration-300 ${
                item === "About"
                  ? "text-[#e8edf5] border-b border-[#4a90d9] pb-1"
                  : "text-[#6b7a94] hover:text-[#e8edf5]"
              }`}
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-12 py-24 max-w-[900px] mx-auto">
        <p className="text-[#4a90d9] text-[11px] tracking-[0.3em] uppercase mb-6">
          Our Story
        </p>
        <h1 className="text-5xl font-light mb-8 leading-tight">
          Where Cars Get <span className="text-[#4a90d9] italic">Better</span>
        </h1>
        <p className="text-[#8a9bb5] text-lg leading-relaxed mb-6">
          The name Healvanna carries a deeper meaning than meets the eye. In a world where cars are more than transportation—they're investments, passions, and extensions of who we are—we believe every vehicle deserves exceptional care.
        </p>
      </section>

      {/* The Healing Philosophy */}
      <section className="px-12 py-16 bg-[#0d1220]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">
            The Philosophy of <span className="text-[#4a90d9]">Healing Cars</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 bg-[#0a0f1a] border border-[rgba(74,144,217,0.15)] rounded-sm">
              <div className="text-[#4a90d9] text-2xl mb-4">🔧</div>
              <h3 className="text-lg font-medium mb-3">Body Shops</h3>
              <p className="text-[#6b7a94] text-sm leading-relaxed">
                Healing damaged cars back to their original glory. From minor dents to major collision repair, restoring what was broken.
              </p>
            </div>
            
            <div className="p-8 bg-[#0a0f1a] border border-[rgba(74,144,217,0.15)] rounded-sm">
              <div className="text-[#4a90d9] text-2xl mb-4">✨</div>
              <h3 className="text-lg font-medium mb-3">Detailing</h3>
              <p className="text-[#6b7a94] text-sm leading-relaxed">
                Healing the paint and finish. Bringing back that showroom shine through meticulous care and expert techniques.
              </p>
            </div>
            
            <div className="p-8 bg-[#0a0f1a] border border-[rgba(74,144,217,0.15)] rounded-sm">
              <div className="text-[#4a90d9] text-2xl mb-4">🛡️</div>
              <h3 className="text-lg font-medium mb-3">Ceramic Coating & PPF</h3>
              <p className="text-[#6b7a94] text-sm leading-relaxed">
                Preventive care—shielding your vehicle from future damage. Protection that preserves beauty for years to come.
              </p>
            </div>
            
            <div className="p-8 bg-[#0a0f1a] border border-[rgba(74,144,217,0.15)] rounded-sm">
              <div className="text-[#4a90d9] text-2xl mb-4">🪑</div>
              <h3 className="text-lg font-medium mb-3">Interior Restoration</h3>
              <p className="text-[#6b7a94] text-sm leading-relaxed">
                Healing worn interiors. Reviving leather, refreshing fabrics, and restoring the sanctuary where you spend your drive.
              </p>
            </div>
          </div>

          <div className="text-center p-10 border border-[rgba(74,144,217,0.3)] bg-[rgba(74,144,217,0.05)] rounded-sm">
            <p className="text-xl text-[#e8edf5] font-light italic mb-4">
              "HEALVANNA — Your Car's Wellness Guide"
            </p>
            <p className="text-[#6b7a94] text-sm">
              We curate the finest specialists who share our philosophy: every car deserves to be healed, protected, and celebrated.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-12 py-24 max-w-[900px] mx-auto">
        <h2 className="text-3xl font-light mb-8">Our Mission</h2>
        <p className="text-[#8a9bb5] text-lg leading-relaxed mb-6">
          Healvanna Auto exists to connect discerning automotive enthusiasts with verified, premium service providers. We believe finding exceptional car care shouldn't be a gamble.
        </p>
        <p className="text-[#8a9bb5] text-lg leading-relaxed mb-6">
          Every detailer, body shop, and specialist in our directory has been evaluated for quality, expertise, and commitment to excellence. We don't list everyone—we list the best.
        </p>
        <p className="text-[#8a9bb5] text-lg leading-relaxed">
          Whether you're seeking the perfect ceramic coating for your new Tesla, a trusted collision center for your Porsche, or expert guidance on EV maintenance, Healvanna is your curated guide to premium car ownership.
        </p>
      </section>

      {/* What We Offer */}
      <section className="px-12 py-16 bg-[#0d1220]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">What We Offer</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="text-[#4a90d9] text-sm font-medium min-w-[120px]">CARS</div>
              <p className="text-[#8a9bb5] leading-relaxed">
                In-depth guides to luxury and electric vehicles. Specs, comparisons, and insights to help you find your perfect car.
              </p>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="text-[#4a90d9] text-sm font-medium min-w-[120px]">CARE</div>
              <p className="text-[#8a9bb5] leading-relaxed">
                Verified detailers, ceramic coating specialists, and PPF installers. Premium protection from trusted professionals.
              </p>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="text-[#4a90d9] text-sm font-medium min-w-[120px]">CRAFT</div>
              <p className="text-[#8a9bb5] leading-relaxed">
                Expert body shops, collision repair centers, and restoration specialists. Master craftsmen who heal damaged vehicles.
              </p>
            </div>
            
            <div className="flex gap-6 items-start">
              <div className="text-[#4a90d9] text-sm font-medium min-w-[120px]">INSIGHTS</div>
              <p className="text-[#8a9bb5] leading-relaxed">
                Expert analysis, buying guides, and industry comparisons. Knowledge to make informed decisions about your vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-12 py-24 text-center">
        <h2 className="text-3xl font-light mb-6">Ready to Explore?</h2>
        <p className="text-[#6b7a94] mb-10 max-w-[500px] mx-auto">
          Discover premium vehicles and trusted service providers curated for the discerning enthusiast.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/"
            className="px-10 py-4 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300"
          >
            Explore Directory
          </a>
          <a
            href="/contact"
            className="px-10 py-4 text-[13px] font-medium border border-[#3d4a61] text-[#e8edf5] hover:border-[#4a90d9] transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] pt-16 pb-8 px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="flex justify-between items-center pt-8 max-w-[1200px] mx-auto">
          <div className="text-[11px] text-[#3d4a61]">© 2025 Healvanna Auto. All rights reserved.</div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Contact", "About"].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

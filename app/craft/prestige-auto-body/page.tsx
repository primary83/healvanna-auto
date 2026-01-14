"use client";

import Link from "next/link";

export default function PrestigeAutoBody() {
  const services = [
    { name: "Porsche Collision Repair", description: "Factory-certified Porsche body shop. Genuine parts, specialized tooling, and trained technicians for 911, Cayenne, Taycan, and all models.", price: "Estimate Required" },
    { name: "Ferrari & Lamborghini", description: "Approved collision center for Italian exotics. Aluminum and carbon fiber repair capabilities with factory color matching.", price: "Estimate Required" },
    { name: "Concours Finish Paint", description: "Show-quality paint and finishing. Multiple clear coat layers, wet sanding, and machine polishing for flawless results.", price: "From $5,000" },
    { name: "Aluminum & Carbon Repair", description: "Specialized repair techniques for aluminum spaceframes and carbon fiber body panels. No compromises on structural integrity.", price: "From $2,000" },
    { name: "Frame Straightening", description: "Computerized frame measuring and straightening. Return to factory specifications guaranteed.", price: "From $1,500" },
    { name: "Classic Car Collision", description: "Vintage and classic vehicle collision repair. Metal shaping, lead work, and period-correct finishing available.", price: "Estimate Required" },
  ];

  const certifications = [
    "Porsche Certified Collision",
    "Ferrari Approved",
    "Lamborghini Authorized",
    "I-CAR Platinum",
    "ASE Master Certified",
    "Aluminum Repair Network"
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&q=80",
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=600&q=80",
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
            <Link key={item.name} href={item.href} className={`text-[13px] tracking-wide transition-all duration-300 pb-1 ${item.name === "Craft" ? "text-[#e8edf5] border-b border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"}`}>{item.name}</Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-12 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8">
            <Link href="/" className="hover:text-[#4a90d9] transition-colors">Home</Link><span>/</span>
            <Link href="/craft" className="hover:text-[#4a90d9] transition-colors">Craft</Link><span>/</span>
            <span className="text-[#e8edf5]">Prestige Auto Body</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[rgba(34,197,94,0.15)] text-[#22c55e] text-xs tracking-wider uppercase rounded-full font-medium">✓ Verified</span>
                <span className="px-3 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] text-xs tracking-wider uppercase rounded-full">Luxury Body Shop</span>
              </div>
              <h1 className="text-[clamp(36px,5vw,52px)] font-extralight tracking-tight mb-2 leading-tight">Prestige Auto Body</h1>
              <p className="text-xl text-[#4a90d9] mb-4">Miami, FL</p>
              <p className="text-[17px] text-[#6b7a94] leading-relaxed mb-8 max-w-[500px]">OEM-certified repairs for European luxury brands. Show-quality paint and finishing with over 25 years of experience serving Miami's most discerning collectors.</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Porsche Certified", "Ferrari Approved", "Concours Finish", "Exotic Specialists"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-xs tracking-wider rounded">{tag}</span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="tel:+13055553456" className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">Call Now</a>
                <a href="mailto:info@prestigeautobody.com" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">Get Estimate</a>
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80" alt="Prestige Auto Body" className="w-full h-80 object-cover rounded-lg shadow-2xl" />
              <div className="absolute bottom-4 left-4 right-4 bg-[rgba(10,15,26,0.9)] backdrop-blur-sm rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-[#6b7a94]">Business Hours</div>
                    <div className="text-[#e8edf5]">Mon-Fri: 8AM - 6PM</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#6b7a94]">Rating</div>
                    <div className="text-[#e8edf5]">★★★★★ 5.0/5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-12 bg-[#0a0f1a]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">What We Offer</div>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extralight tracking-tight">Services & Repairs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-[rgba(15,22,40,0.5)] rounded-lg border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-300">
                <h3 className="text-lg font-medium mb-2">{service.name}</h3>
                <p className="text-[14px] text-[#6b7a94] leading-relaxed mb-4">{service.description}</p>
                <div className="text-[#4a90d9] font-medium">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-12 bg-[#0d1424]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Credentials</div>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extralight tracking-tight">Certifications & Approvals</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="px-6 py-3 bg-[rgba(74,144,217,0.1)] rounded-lg border border-[rgba(74,144,217,0.2)] text-[#e8edf5]">
                <span className="text-[#22c55e] mr-2">✓</span>{cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-12 bg-[#0a0f1a]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Our Work</div>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extralight tracking-tight">Recent Projects</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.map((img, index) => (
              <img key={index} src={img} alt={`Gallery ${index + 1}`} className="w-full h-48 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-12 bg-[#0d1424]">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-[clamp(24px,4vw,36px)] font-extralight mb-4">Your Exotic Deserves the Best</h2>
          <p className="text-[15px] text-[#6b7a94] mb-8">Contact Prestige Auto Body for factory-quality repairs on your luxury or exotic vehicle.</p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+13055553456" className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">Call (305) 555-3456</a>
            <Link href="/craft" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">Browse More Shops</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-16 bg-[#070b12] border-t border-[rgba(74,144,217,0.1)]">
        <div className="grid grid-cols-4 gap-12 max-w-[1200px] mx-auto mb-12">
          {[
            { title: "Vehicles", links: [{ name: "Browse All", href: "/cars" }, { name: "Electric", href: "/cars" }, { name: "Luxury", href: "/cars" }]},
            { title: "Care", links: [{ name: "Find Services", href: "/care" }, { name: "Detailing", href: "/care" }, { name: "Ceramic Coating", href: "/care" }]},
            { title: "Craft", links: [{ name: "Body Shops", href: "/craft" }, { name: "EV Repair", href: "/craft" }, { name: "Restoration", href: "/craft" }]},
            { title: "Company", links: [{ name: "About", href: "/about" }, { name: "Contact", href: "/contact" }, { name: "For Business", href: "#" }]},
          ].map((column, index) => (
            <div key={index}>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">{column.title}</h4>
              {column.links.map((link) => (<Link key={link.name} href={link.href} className="block text-[13px] text-[#6b7a94] mb-2.5 cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">{link.name}</Link>))}
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center pt-8 border-t border-[rgba(74,144,217,0.15)] max-w-[1200px] mx-auto">
          <div className="text-[11px] text-[#3d4a61]">© 2025 Healvanna. All rights reserved.</div>
          <div className="flex gap-6">
            {[{ name: "Privacy", href: "/privacy" }, { name: "Terms", href: "/terms" }].map((link) => (
              <Link key={link.name} href={link.href} className="text-[11px] text-[#6b7a94] cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">{link.name}</Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

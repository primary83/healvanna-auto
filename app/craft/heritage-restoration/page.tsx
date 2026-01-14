"use client";

import Link from "next/link";

export default function HeritageRestoration() {
  const services = [
    { name: "Full Frame-Off Restoration", description: "Complete disassembly, media blasting, rust repair, and ground-up rebuild. Every nut and bolt restored or replaced.", price: "From $75,000" },
    { name: "Concours Preparation", description: "Show-winning preparation for Pebble Beach, Amelia Island, and regional concours. Judging sheet review and point optimization.", price: "From $15,000" },
    { name: "Matching Numbers Verification", description: "Research and documentation of original components. Stamping verification and provenance research for authentication.", price: "From $2,500" },
    { name: "Engine Rebuilding", description: "Complete engine restoration including machine work, balancing, and dyno testing. Period-correct finishes and date codes.", price: "From $12,000" },
    { name: "Interior Restoration", description: "Leather, fabric, and vinyl restoration using correct materials and patterns. Woodwork refinishing and chrome replating.", price: "From $8,000" },
    { name: "Barn Find Assessment", description: "On-site evaluation of potential projects. Detailed condition report and restoration cost estimate.", price: "$500 + Travel" },
  ];

  const certifications = [
    "CCCA National First Prize",
    "Pebble Beach Class Winner",
    "AACA Senior Grand National",
    "Ferrari Classiche Certified",
    "Mercedes Classic Partner",
    "Porsche Classic Partner"
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
    "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=600&q=80",
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
            <span className="text-[#e8edf5]">Heritage Restoration</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[rgba(34,197,94,0.15)] text-[#22c55e] text-xs tracking-wider uppercase rounded-full font-medium">✓ Verified</span>
                <span className="px-3 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] text-xs tracking-wider uppercase rounded-full">Classic Restoration</span>
              </div>
              <h1 className="text-[clamp(36px,5vw,52px)] font-extralight tracking-tight mb-2 leading-tight">Heritage Restoration</h1>
              <p className="text-xl text-[#4a90d9] mb-4">Scottsdale, AZ</p>
              <p className="text-[17px] text-[#6b7a94] leading-relaxed mb-8 max-w-[500px]">Award-winning classic car restoration from barn finds to concours winners. Over 40 years of experience with American classics, European sports cars, and pre-war automobiles.</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Full Frame-Off", "Concours Prep", "Matching Numbers", "Award Winners"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-xs tracking-wider rounded">{tag}</span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="tel:+14805556789" className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">Call Now</a>
                <a href="mailto:info@heritagerestoration.com" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">Inquire</a>
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80" alt="Heritage Restoration" className="w-full h-80 object-cover rounded-lg shadow-2xl" />
              <div className="absolute bottom-4 left-4 right-4 bg-[rgba(10,15,26,0.9)] backdrop-blur-sm rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-[#6b7a94]">Business Hours</div>
                    <div className="text-[#e8edf5]">Mon-Fri: 8AM - 5PM</div>
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
            <h2 className="text-[clamp(28px,4vw,40px)] font-extralight tracking-tight">Restoration Services</h2>
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

      {/* Certifications / Awards */}
      <section className="py-20 px-12 bg-[#0d1424]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Recognition</div>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extralight tracking-tight">Awards & Certifications</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="px-6 py-3 bg-[rgba(74,144,217,0.1)] rounded-lg border border-[rgba(74,144,217,0.2)] text-[#e8edf5]">
                <span className="text-[#fbbf24] mr-2">★</span>{cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-12 bg-[#0a0f1a]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Portfolio</div>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extralight tracking-tight">Featured Restorations</h2>
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
          <h2 className="text-[clamp(24px,4vw,36px)] font-extralight mb-4">Start Your Restoration Journey</h2>
          <p className="text-[15px] text-[#6b7a94] mb-8">Contact Heritage Restoration to discuss your classic car project. From barn finds to concours preparation, we bring automotive dreams to life.</p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+14805556789" className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">Call (480) 555-6789</a>
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

"use client";

import Link from "next/link";

export default function LuxeInteriorStudio() {
  const services = [
    { name: "Full Leather Restoration", description: "Complete leather repair, recoloring, and conditioning. Restores cracked, faded, or damaged leather to like-new condition.", price: "From $800" },
    { name: "Custom Upholstery", description: "Bespoke seat covers, headliners, and door panels. Choose from premium leather, Alcantara, or custom fabrics.", price: "From $2,500" },
    { name: "Vegan Leather Conversion", description: "Eco-friendly alternative for Tesla and modern EV owners. Premium plant-based materials that match OEM quality.", price: "From $3,000" },
    { name: "Steam Deep Clean", description: "Chemical-free interior sanitization using professional steam equipment. Safe for all surfaces including screens.", price: "From $350" },
    { name: "Carpet & Fabric Restoration", description: "Deep extraction cleaning, stain removal, and fabric protection. Includes floor mats and trunk area.", price: "From $400" },
    { name: "Headliner Repair", description: "Fix sagging, stained, or damaged headliners. OEM-matching materials and seamless installation.", price: "From $500" },
  ];

  const certifications = [
    "Leather Craft Guild Member",
    "Tesla Interior Specialist",
    "Porsche Classic Partner",
    "Alcantara Certified",
    "SEMA Member",
    "Concours Quality Standards"
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
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
            { name: "Insights", href: "/insights" },
          ].map((item) => (
            <Link key={item.name} href={item.href} className={`text-[13px] tracking-wide transition-all duration-300 pb-1 ${item.name === "Care" ? "text-[#e8edf5] border-b border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"}`}>{item.name}</Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-12 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8">
            <Link href="/" className="hover:text-[#4a90d9] transition-colors">Home</Link><span>/</span>
            <Link href="/care" className="hover:text-[#4a90d9] transition-colors">Care</Link><span>/</span>
            <span className="text-[#e8edf5]">Luxe Interior Studio</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[rgba(34,197,94,0.15)] text-[#22c55e] text-xs tracking-wider uppercase rounded-full font-medium">✓ Verified</span>
                <span className="px-3 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] text-xs tracking-wider uppercase rounded-full">Interior Restoration</span>
              </div>
              <h1 className="text-[clamp(36px,5vw,52px)] font-extralight tracking-tight mb-2 leading-tight">Luxe Interior Studio</h1>
              <p className="text-xl text-[#4a90d9] mb-4">Los Angeles, CA</p>
              <p className="text-[17px] text-[#6b7a94] leading-relaxed mb-8 max-w-[500px]">Bespoke interior restoration for discerning owners. Specializing in vegan leather conversions for modern EVs and classic leather restoration for vintage vehicles.</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Leather Repair", "Custom Upholstery", "Vegan Leather", "Concours Quality"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-xs tracking-wider rounded">{tag}</span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href="tel:+13105554567" className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">Call Now</a>
                <a href="mailto:info@luxeinteriorstudio.com" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">Email</a>
                <Link href="/contact?service=luxe-interior-studio" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">Request a Quote</Link>
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80" alt="Luxe Interior Studio" className="w-full h-80 object-cover rounded-lg shadow-2xl" />
              <div className="absolute bottom-4 left-4 right-4 bg-[rgba(10,15,26,0.9)] backdrop-blur-sm rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-[#6b7a94]">Business Hours</div>
                    <div className="text-[#e8edf5]">Mon-Fri: 8AM - 5PM</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#6b7a94]">Rating</div>
                    <div className="text-[#e8edf5]">★★★★★ 4.8/5</div>
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
            <h2 className="text-[clamp(28px,4vw,40px)] font-extralight tracking-tight">Services & Pricing</h2>
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
            <h2 className="text-[clamp(28px,4vw,40px)] font-extralight tracking-tight">Certifications & Affiliations</h2>
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
            <h2 className="text-[clamp(28px,4vw,40px)] font-extralight tracking-tight">Gallery</h2>
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
          <h2 className="text-[clamp(24px,4vw,36px)] font-extralight mb-4">Transform Your Interior</h2>
          <p className="text-[15px] text-[#6b7a94] mb-8">Contact Luxe Interior Studio for a consultation on your custom interior project or restoration needs.</p>
          <div className="flex gap-4 justify-center">
            <a href="tel:+13105554567" className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">Call (310) 555-4567</a>
            <Link href="/care" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">Browse More Services</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-16 bg-[#070b12] border-t border-[rgba(74,144,217,0.1)]">
        <div className="grid grid-cols-4 gap-12 max-w-[1200px] mx-auto mb-12">
          {[
            { title: "Vehicles", links: [{ name: "Browse All", href: "/cars" }, { name: "Electric", href: "/cars" }, { name: "Luxury", href: "/cars" }]},
            { title: "Care", links: [{ name: "Find Services", href: "/care" }, { name: "Detailing", href: "/care" }, { name: "Ceramic Coating", href: "/care" }]},
            { title: "Insights", links: [{ name: "All Articles", href: "/insights" }, { name: "EV Guides", href: "/insights/category/electric-vehicles" }, { name: "Care Guides", href: "/insights/category/premium-care" }]},
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

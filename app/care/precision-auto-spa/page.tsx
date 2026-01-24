"use client";

import { useState } from "react";
import Link from "next/link";

export default function PrecisionAutoSpa() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
  });
  const [quoteStatus, setQuoteStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteStatus("submitting");
    
    try {
      const response = await fetch("https://formspree.io/f/xjggywyr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...quoteForm,
          source: "Precision Auto Spa - Quote Request",
        }),
      });
      
      if (response.ok) {
        setQuoteStatus("success");
        setQuoteForm({ name: "", email: "", phone: "", vehicle: "", service: "", message: "" });
      } else {
        setQuoteStatus("error");
      }
    } catch {
      setQuoteStatus("error");
    }
  };

  const services = [
    { name: "Full Detail Package", description: "Complete interior and exterior detailing with paint decontamination, clay bar treatment, and hand wax finish.", price: "From $350" },
    { name: "Ceramic Coating", description: "Professional-grade ceramic coating application with up to 5 years of protection. Includes paint correction.", price: "From $1,200" },
    { name: "Paint Correction", description: "Multi-stage machine polishing to remove swirls, scratches, and oxidation. Restores factory finish.", price: "From $600" },
    { name: "EV-Safe Detailing", description: "Specialized detailing for electric vehicles using EV-safe products and techniques. Tesla, Rivian, Lucid certified.", price: "From $400" },
    { name: "Interior Deep Clean", description: "Steam cleaning, leather conditioning, and fabric protection. Includes air vent and crevice detailing.", price: "From $250" },
    { name: "PPF Installation", description: "XPEL Ultimate Plus paint protection film installation. Full front, partial, or custom coverage available.", price: "From $1,500" },
  ];

  const certifications = [
    "Tesla Approved Detailer",
    "Rivian Certified",
    "Lucid Motors Partner",
    "Ceramic Pro Certified Installer",
    "XPEL Certified Installer",
    "IDA Member"
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=600&q=80",
    "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&q=80",
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Quote Request Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowQuoteModal(false)} />
          <div className="relative bg-[#0d1424] border border-[rgba(74,144,217,0.2)] rounded-lg w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-[rgba(74,144,217,0.1)]">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-light">Request a Quote</h3>
                <button onClick={() => setShowQuoteModal(false)} className="text-[#6b7a94] hover:text-[#e8edf5] text-2xl">&times;</button>
              </div>
              <p className="text-sm text-[#6b7a94] mt-1">Precision Auto Spa • Austin, TX</p>
            </div>
            
            {quoteStatus === "success" ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-[rgba(34,197,94,0.15)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#22c55e] text-3xl">✓</span>
                </div>
                <h4 className="text-lg font-medium mb-2">Quote Request Sent!</h4>
                <p className="text-[#6b7a94] text-sm mb-6">Precision Auto Spa will contact you within 24 hours with a custom quote.</p>
                <button onClick={() => { setShowQuoteModal(false); setQuoteStatus("idle"); }} className="px-6 py-2 bg-[#4a90d9] text-[#0a0f1a] rounded font-medium hover:bg-[#6ba8eb] transition-colors">Close</button>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[#6b7a94] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={quoteForm.name}
                      onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                      className="w-full px-3 py-2 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] text-sm focus:outline-none focus:border-[#4a90d9]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#6b7a94] mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={quoteForm.phone}
                      onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                      className="w-full px-3 py-2 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] text-sm focus:outline-none focus:border-[#4a90d9]"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-[#6b7a94] mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={quoteForm.email}
                    onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                    className="w-full px-3 py-2 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] text-sm focus:outline-none focus:border-[#4a90d9]"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-[#6b7a94] mb-1">Vehicle *</label>
                  <input
                    type="text"
                    required
                    value={quoteForm.vehicle}
                    onChange={(e) => setQuoteForm({ ...quoteForm, vehicle: e.target.value })}
                    className="w-full px-3 py-2 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] text-sm focus:outline-none focus:border-[#4a90d9]"
                    placeholder="2024 Tesla Model S"
                  />
                </div>
                
                <div>
                  <label className="block text-sm text-[#6b7a94] mb-1">Service Interested In *</label>
                  <select
                    required
                    value={quoteForm.service}
                    onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                    className="w-full px-3 py-2 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] text-sm focus:outline-none focus:border-[#4a90d9]"
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s.name} value={s.name}>{s.name} - {s.price}</option>
                    ))}
                    <option value="Multiple Services">Multiple Services</option>
                    <option value="Not Sure">Not Sure - Need Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-[#6b7a94] mb-1">Additional Details</label>
                  <textarea
                    value={quoteForm.message}
                    onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] text-sm focus:outline-none focus:border-[#4a90d9] resize-none"
                    placeholder="Any specific concerns or requests..."
                  />
                </div>
                
                {quoteStatus === "error" && (
                  <div className="text-[#ef4444] text-sm bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] rounded p-3">
                    Something went wrong. Please try again or call directly.
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={quoteStatus === "submitting"}
                  className="w-full py-3 bg-[#4a90d9] text-[#0a0f1a] font-medium rounded hover:bg-[#6ba8eb] transition-colors disabled:bg-[#3d4a61] disabled:cursor-not-allowed"
                >
                  {quoteStatus === "submitting" ? "Sending..." : "Submit Quote Request"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-12 py-6 flex justify-between items-center bg-[rgba(10,15,26,0.95)] backdrop-blur-md border-b border-[rgba(74,144,217,0.1)]">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em]">HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span></Link>
        <div className="flex gap-10">
          {[
            { name: "Home", href: "/" },
            { name: "Vehicles", href: "/cars" },
            { name: "Care", href: "/care" },
            { name: "Craft", href: "/craft" },
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
            <span className="text-[#e8edf5]">Precision Auto Spa</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[rgba(34,197,94,0.15)] text-[#22c55e] text-xs tracking-wider uppercase rounded-full font-medium">✓ Verified</span>
                <span className="px-3 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] text-xs tracking-wider uppercase rounded-full">Premium Detailing</span>
              </div>
              <h1 className="text-[clamp(36px,5vw,52px)] font-extralight tracking-tight mb-2 leading-tight">Precision Auto Spa</h1>
              <p className="text-xl text-[#4a90d9] mb-4">Austin, TX</p>
              <p className="text-[17px] text-[#6b7a94] leading-relaxed mb-8 max-w-[500px]">Austin&apos;s premier EV detailing specialists. Factory-trained on Tesla, Rivian, and Lucid vehicles with over 10 years of experience in premium automotive care.</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["EV-Safe", "Ceramic Coating", "Paint Correction", "PPF"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-[rgba(74,144,217,0.1)] text-[#4a90d9] text-xs tracking-wider rounded">{tag}</span>
                ))}
              </div>

              <div className="flex gap-4">
                <button onClick={() => setShowQuoteModal(true)} className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">Request a Quote</button>
                <a href="tel:+15125551234" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">Call Now</a>
              </div>
            </div>

            <div className="relative">
              <img src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80" alt="Precision Auto Spa" className="w-full h-80 object-cover rounded-lg shadow-2xl" />
              <div className="absolute bottom-4 left-4 right-4 bg-[rgba(10,15,26,0.9)] backdrop-blur-sm rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-[#6b7a94]">Business Hours</div>
                    <div className="text-[#e8edf5]">Mon-Sat: 8AM - 6PM</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[#6b7a94]">Rating</div>
                    <div className="text-[#e8edf5]">★★★★★ 4.9/5</div>
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
                <div className="flex justify-between items-center">
                  <div className="text-[#4a90d9] font-medium">{service.price}</div>
                  <button onClick={() => { setQuoteForm({ ...quoteForm, service: service.name }); setShowQuoteModal(true); }} className="text-xs text-[#4a90d9] hover:text-[#6ba8eb] transition-colors">Get Quote →</button>
                </div>
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
            <h2 className="text-[clamp(28px,4vw,40px)] font-extralight tracking-tight">Certifications & Training</h2>
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
          <h2 className="text-[clamp(24px,4vw,36px)] font-extralight mb-4">Ready to Book?</h2>
          <p className="text-[15px] text-[#6b7a94] mb-8">Contact Precision Auto Spa to schedule your appointment or get a custom quote for your vehicle.</p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => setShowQuoteModal(true)} className="px-8 py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#6ba8eb] transition-all duration-300 rounded">Request a Quote</button>
            <a href="tel:+15125551234" className="px-8 py-3 text-[13px] font-medium bg-transparent border border-[rgba(74,144,217,0.3)] text-[#4a90d9] hover:bg-[rgba(74,144,217,0.1)] transition-all duration-300 rounded">Call (512) 555-1234</a>
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
            { title: "Company", links: [{ name: "About", href: "/about" }, { name: "Contact", href: "/contact" }, { name: "For Business", href: "/for-business" }]},
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

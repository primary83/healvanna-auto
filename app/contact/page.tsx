"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xjggywyr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation - Matches rest of site */}
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
            <Link key={item.name} href={item.href} className="text-[13px] tracking-wide transition-all duration-300 pb-1 text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent">{item.name}</Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-12 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Contact Us</div>
          <h1 className="text-[clamp(36px,5vw,56px)] font-extralight tracking-tight mb-6 leading-tight">
            Get in <span className="text-[#4a90d9]">Touch</span>
          </h1>
          <p className="text-xl text-[#6b7a94] max-w-2xl mx-auto leading-relaxed">
            Have questions about electric vehicles or our services? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20 px-12">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form - Takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-[rgba(15,22,40,0.5)] border border-[rgba(74,144,217,0.15)] rounded-lg p-8">
                <h2 className="text-2xl font-light text-[#e8edf5] mb-6">Send us a Message</h2>
                
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-[rgba(34,197,94,0.15)] rounded-full flex items-center justify-center mb-4">
                      <span className="text-[#22c55e] text-3xl">✓</span>
                    </div>
                    <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Message Sent!</h3>
                    <p className="text-[#6b7a94] mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-6 py-2 bg-[#4a90d9] hover:bg-[#6ba8eb] text-[#0a0f1a] rounded transition-colors font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#6b7a94] mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#6b7a94] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#6b7a94] mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] focus:outline-none focus:border-[#4a90d9] transition-colors"
                      >
                        <option value="">Select a topic...</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Vehicle Information">Vehicle Information</option>
                        <option value="Service Provider Listing">Service Provider Listing</option>
                        <option value="Business Partnership">Business Partnership</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#6b7a94] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors resize-none"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    {status === "error" && (
                      <div className="flex items-center gap-2 text-[#ef4444] bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] rounded-lg p-4">
                        <span className="text-xl">⚠</span>
                        <p>Something went wrong. Please try again or email us directly.</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#4a90d9] hover:bg-[#6ba8eb] disabled:bg-[#3d4a61] text-[#0a0f1a] font-medium rounded-lg transition-all duration-300"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#0a0f1a]/30 border-t-[#0a0f1a] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact */}
              <div className="bg-[rgba(15,22,40,0.5)] border border-[rgba(74,144,217,0.15)] rounded-lg p-6">
                <h3 className="text-lg font-medium text-[#e8edf5] mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[rgba(74,144,217,0.1)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#4a90d9]">✉</span>
                    </div>
                    <div>
                      <p className="text-sm text-[#6b7a94]">Email</p>
                      <p className="text-[#e8edf5]">Use the contact form</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[rgba(74,144,217,0.1)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#4a90d9]">📞</span>
                    </div>
                    <div>
                      <p className="text-sm text-[#6b7a94]">Phone</p>
                      <p className="text-[#e8edf5]">Coming Soon</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[rgba(74,144,217,0.1)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#4a90d9]">📍</span>
                    </div>
                    <div>
                      <p className="text-sm text-[#6b7a94]">Location</p>
                      <p className="text-[#e8edf5]">United States</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-[rgba(74,144,217,0.1)] border border-[rgba(74,144,217,0.2)] rounded-lg p-6">
                <h3 className="text-lg font-medium text-[#e8edf5] mb-2">Quick Response</h3>
                <p className="text-[#6b7a94] text-sm leading-relaxed">
                  We typically respond within 24 hours during business days. For urgent matters, please indicate so in your message.
                </p>
              </div>

              {/* Business Inquiries */}
              <div className="bg-[rgba(15,22,40,0.5)] border border-[rgba(74,144,217,0.15)] rounded-lg p-6">
                <h3 className="text-lg font-medium text-[#e8edf5] mb-2">Business Inquiries?</h3>
                <p className="text-[#6b7a94] text-sm mb-4 leading-relaxed">
                  Want to list your service on Healvanna? Check out our business solutions.
                </p>
                <Link
                  href="/for-business"
                  className="inline-flex items-center text-[#4a90d9] hover:text-[#6ba8eb] transition-colors text-sm font-medium"
                >
                  View Business Plans →
                </Link>
              </div>
            </div>
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

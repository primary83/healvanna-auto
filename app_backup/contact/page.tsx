"use client";

import { useState } from "react";
import Link from "next/link";

const subjects = [
  "General Inquiry",
  "Vehicle Information",
  "Service Provider Listing",
  "Business Partnership",
  "Technical Support",
  "Feedback",
];

const faqs = [
  {
    question: "How do you verify service providers?",
    answer: "Every provider undergoes a rigorous vetting process including certification verification, customer review analysis, on-site visits where possible, and ongoing quality monitoring. We check credentials, insurance, and track record before listing any provider.",
  },
  {
    question: "How can my business join the directory?",
    answer: "Qualified automotive service providers can apply to join our network. We're looking for established businesses with proper certifications, positive customer reviews, and a commitment to quality. Use the contact form and select 'Service Provider Listing' to start the application process.",
  },
  {
    question: "Is there a cost to use Healvanna?",
    answer: "Healvanna is completely free for vehicle owners. We generate revenue through partnerships with verified service providers, not from our users. You'll never pay to browse vehicles or find service providers.",
  },
  {
    question: "What areas do you cover?",
    answer: "We currently cover 12 major US markets including Austin, Miami, Los Angeles, San Francisco, New York, Phoenix, Houston, Seattle, Denver, Chicago, Atlanta, and Dallas. We're expanding to new markets regularly.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-[rgba(74,144,217,0.1)]">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="hidden md:flex gap-10">
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
              className="text-xs tracking-[0.12em] cursor-pointer transition-colors duration-300 pb-2 text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">Contact Us</div>
          <h1 className="text-[clamp(32px,5vw,48px)] font-extralight tracking-tight mb-4">
            Get in <span className="font-semibold bg-gradient-to-r from-[#e8edf5] to-[#4a90d9] bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-[#6b7a94] leading-relaxed">
            Have a question about our directory? Want to list your business? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="px-6 md:px-12 pb-12">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <div className="bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-6">
              <div className="w-12 h-12 bg-[rgba(74,144,217,0.1)] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Email</h3>
              <a href="mailto:hello@healvanna.com" className="text-[#4a90d9] hover:underline text-sm">
                hello@healvanna.com
              </a>
              <p className="text-xs text-[#6b7a94] mt-2">We respond within 24 hours</p>
            </div>

            {/* Phone */}
            <div className="bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-6">
              <div className="w-12 h-12 bg-[rgba(74,144,217,0.1)] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Phone</h3>
              <a href="tel:+15125550199" className="text-[#4a90d9] hover:underline text-sm">
                (512) 555-0199
              </a>
              <p className="text-xs text-[#6b7a94] mt-2">Mon-Fri, 9am-6pm CST</p>
            </div>

            {/* Location */}
            <div className="bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-6">
              <div className="w-12 h-12 bg-[rgba(74,144,217,0.1)] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-medium mb-2">Office</h3>
              <p className="text-sm text-[#6b7a94]">
                1234 Auto Drive, Suite 500<br />
                Austin, TX 78701
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <div className="bg-[rgba(15,22,40,0.5)] border border-[rgba(74,144,217,0.15)] rounded-lg p-8">
                <h2 className="text-xl font-medium mb-6">Send us a Message</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[rgba(74,144,217,0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium mb-2">Message Sent!</h3>
                    <p className="text-[#6b7a94] mb-6">We&apos;ll get back to you within 24 hours.</p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
                      }}
                      className="text-[#4a90d9] hover:underline text-sm"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs tracking-wider uppercase text-[#6b7a94] mb-2">Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-[rgba(10,15,26,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs tracking-wider uppercase text-[#6b7a94] mb-2">Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[rgba(10,15,26,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs tracking-wider uppercase text-[#6b7a94] mb-2">Subject *</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-[rgba(10,15,26,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] focus:outline-none focus:border-[#4a90d9] transition-colors cursor-pointer"
                      >
                        {subjects.map((subject) => (
                          <option key={subject} value={subject} className="bg-[#0a0f1a]">
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs tracking-wider uppercase text-[#6b7a94] mb-2">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[rgba(10,15,26,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#4a90d9] text-[#0a0f1a] font-medium rounded hover:bg-[#6ba8eb] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Business Hours & Social */}
            <div className="md:col-span-2 space-y-6">
              {/* Business Hours */}
              <div className="bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-6">
                <h3 className="font-medium mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#6b7a94]">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6b7a94]">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6b7a94]">Sunday</span>
                    <span className="text-[#6b7a94]">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-[#6b7a94] mt-4">All times are Central Standard Time (CST)</p>
              </div>

              {/* Social Media */}
              <div className="bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-6">
                <h3 className="font-medium mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a
                    href="https://twitter.com/healvanna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[rgba(74,144,217,0.1)] rounded-lg flex items-center justify-center text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[rgba(74,144,217,0.2)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/healvanna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[rgba(74,144,217,0.1)] rounded-lg flex items-center justify-center text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[rgba(74,144,217,0.2)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com/company/healvanna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[rgba(74,144,217,0.1)] rounded-lg flex items-center justify-center text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[rgba(74,144,217,0.2)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@healvanna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[rgba(74,144,217,0.1)] rounded-lg flex items-center justify-center text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[rgba(74,144,217,0.2)] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-6">
                <h3 className="font-medium mb-2">Response Time</h3>
                <p className="text-sm text-[#6b7a94]">
                  We typically respond within <span className="text-[#e8edf5]">24 hours</span> during business days. For urgent matters, please call us directly or mark your message as urgent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-[1000px] mx-auto">
          <div className="bg-[rgba(15,22,40,0.5)] border border-[rgba(74,144,217,0.15)] rounded-lg overflow-hidden">
            <div className="aspect-[2/1] bg-[#0d1424] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[rgba(74,144,217,0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-[#6b7a94] mb-4">1234 Auto Drive, Suite 500<br />Austin, TX 78701</p>
                <a
                  href="https://maps.google.com/?q=Austin,TX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4a90d9] hover:underline text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 pb-20 bg-[#0d1424] py-20">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-12">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3 font-medium">FAQ</div>
            <h2 className="text-2xl font-light">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[rgba(15,22,40,0.5)] border border-[rgba(74,144,217,0.15)] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-[rgba(74,144,217,0.05)] transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#4a90d9] transition-transform ${expandedFaq === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[#6b7a94] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1a] pt-16 pb-8 px-6 md:px-12 border-t border-[rgba(74,144,217,0.15)]">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 max-w-[1200px] mx-auto mb-12">
          {[
            { title: "Cars", links: ["Electric Vehicles", "Luxury Sedans", "SUVs", "All Brands"] },
            { title: "Care", links: ["Detailing", "Ceramic Coating", "PPF", "Interior"] },
            { title: "Craft", links: ["EV Body Shops", "Luxury Collision", "Restoration"] },
            { title: "Insights", links: ["Comparisons", "Buying Guides", "Maintenance"] },
            { title: "Company", links: ["About", "For Business", "Contact"] },
          ].map((column, index) => (
            <div key={index}>
              <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">{column.title}</h4>
              {column.links.map((link) => (
                <a key={link} className="block text-[13px] text-[#6b7a94] mb-2.5 cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(74,144,217,0.15)] max-w-[1200px] mx-auto gap-4">
          <div className="text-[11px] text-[#3d4a61]">© 2024 Healvanna Auto. All rights reserved.</div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <span key={link} className="text-[11px] text-[#6b7a94] cursor-pointer hover:text-[#e8edf5] transition-colors duration-300">
                {link}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

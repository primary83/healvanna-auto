"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { guides, cities, getGuideBySlug } from "../../lib/guidesData";

export default function HomeEvChargingGuide() {
  const guide = getGuideBySlug("home-ev-charging");
  const [activeSection, setActiveSection] = useState("intro");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (!guide) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8">
            <Link href="/guides" className="hover:text-[#4a90d9] transition-colors">
              Guides
            </Link>
            <span>/</span>
            <span className="text-[#e8edf5]">{guide.shortTitle}</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{guide.icon}</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4a90d9]/10 text-[#4a90d9]">
              {guide.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#e8edf5] mb-6">
            {guide.title}
          </h1>
          
          <p className="text-lg text-[#6b7a94] mb-6 max-w-2xl">
            {guide.description}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-[#6b7a94]">
            <span>📖 {guide.readTime}</span>
            <span>📅 Updated January 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[280px_1fr] gap-12">
            
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <h3 className="text-sm font-medium text-[#e8edf5] mb-4 uppercase tracking-wider">
                  In This Guide
                </h3>
                <nav className="space-y-2">
                  {guide.sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setActiveSection(section.id)}
                      className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
                        activeSection === section.id
                          ? "bg-[#4a90d9]/10 text-[#4a90d9] border-l-2 border-[#4a90d9]"
                          : "text-[#6b7a94] hover:text-[#e8edf5] hover:bg-[#0d1424]"
                      }`}
                    >
                      {section.title}
                    </a>
                  ))}
                  <a
                    href="#faq"
                    onClick={() => setActiveSection("faq")}
                    className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === "faq"
                        ? "bg-[#4a90d9]/10 text-[#4a90d9] border-l-2 border-[#4a90d9]"
                        : "text-[#6b7a94] hover:text-[#e8edf5] hover:bg-[#0d1424]"
                    }`}
                  >
                    FAQ
                  </a>
                </nav>
                
                <div className="mt-8 pt-8 border-t border-[#4a90d9]/10">
                  <h3 className="text-sm font-medium text-[#e8edf5] mb-4 uppercase tracking-wider">
                    Local Guides
                  </h3>
                  <div className="space-y-2">
                    {cities.slice(0, 5).map((city) => (
                      <Link
                        key={city.slug}
                        href={`/guides/home-ev-charging/${city.slug}`}
                        className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all"
                      >
                        📍 {city.name}, {city.state}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="max-w-3xl">
              {guide.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
                    {section.title}
                  </h2>
                  <div className="prose prose-invert prose-lg max-w-none">
                    {section.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className="text-[#b8c4d9] leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              {/* FAQ Section */}
              <section id="faq" className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {guide.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"
                      >
                        <span className="font-medium text-[#e8edf5]">{faq.question}</span>
                        <span className={`text-[#4a90d9] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>
                          ↓
                        </span>
                      </button>
                      {openFaq === idx && (
                        <div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10">
                          <p className="text-[#b8c4d9] leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Email Signup */}
              <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#4a90d9]/10 to-transparent border border-[#4a90d9]/20">
                <h3 className="text-xl font-medium text-[#e8edf5] mb-2">
                  Stay Updated
                </h3>
                <p className="text-[#6b7a94] mb-6">
                  Get notified when we publish new guides and EV tips.
                </p>
                
                {subscribed ? (
                  <div className="flex items-center gap-3 text-[#4a90d9]">
                    <span>✓</span>
                    <span>Thanks! You&apos;re subscribed.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-3 rounded-lg bg-[#0a0f1a] border border-[#4a90d9]/20 text-[#e8edf5] placeholder-[#6b7a94] focus:outline-none focus:border-[#4a90d9]/50"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </section>

              {/* CTA */}
              <section className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10">
                <h3 className="text-xl font-medium text-[#e8edf5] mb-2">
                  Ready to Install a Home Charger?
                </h3>
                <p className="text-[#6b7a94] mb-6">
                  Find verified electricians and EV charger installers in your area.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
                >
                  Find Installers Near You
                  <span>→</span>
                </Link>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

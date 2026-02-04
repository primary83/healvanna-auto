"use client";

import { useState } from "react";
import Link from "next/link";
import { guides, cities, getGuideBySlug } from "../../lib/guidesData";

export default function HomeEvChargingGuide() {
  const guide = getGuideBySlug("home-ev-charging");
  const [activeSection, setActiveSection] = useState("intro");
  const [openFaq, setOpenFaq] = useState&lt;number | null&gt;(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (!guide) return null;

  const handleSubscribe = (e: React.FormEvent) =&gt; {
    e.preventDefault();
    // Here you would integrate with your email service
    setSubscribed(true);
    setEmail("");
  };

  return (
    &lt;main className="min-h-screen bg-[#0a0f1a]"&gt;
      {/* Hero Section */}
      &lt;section className="relative pt-32 pb-16 px-6"&gt;
        &lt;div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" /&gt;
        &lt;div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" /&gt;
        
        &lt;div className="relative max-w-4xl mx-auto"&gt;
          {/* Breadcrumb */}
          &lt;nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"&gt;
            &lt;Link href="/guides" className="hover:text-[#4a90d9] transition-colors"&gt;
              Guides
            &lt;/Link&gt;
            &lt;span&gt;/&lt;/span&gt;
            &lt;span className="text-[#e8edf5]"&gt;{guide.shortTitle}&lt;/span&gt;
          &lt;/nav&gt;
          
          &lt;div className="flex items-center gap-4 mb-6"&gt;
            &lt;span className="text-5xl"&gt;{guide.icon}&lt;/span&gt;
            &lt;div&gt;
              &lt;span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4a90d9]/10 text-[#4a90d9]"&gt;
                {guide.category}
              &lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          
          &lt;h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#e8edf5] mb-6"&gt;
            {guide.title}
          &lt;/h1&gt;
          
          &lt;p className="text-lg text-[#6b7a94] mb-6 max-w-2xl"&gt;
            {guide.description}
          &lt;/p&gt;
          
          &lt;div className="flex items-center gap-6 text-sm text-[#6b7a94]"&gt;
            &lt;span&gt;📖 {guide.readTime}&lt;/span&gt;
            &lt;span&gt;📅 Updated January 2026&lt;/span&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;

      {/* Main Content */}
      &lt;section className="py-12 px-6"&gt;
        &lt;div className="max-w-6xl mx-auto"&gt;
          &lt;div className="grid lg:grid-cols-[280px_1fr] gap-12"&gt;
            
            {/* Sidebar - Table of Contents */}
            &lt;aside className="hidden lg:block"&gt;
              &lt;div className="sticky top-24"&gt;
                &lt;h3 className="text-sm font-medium text-[#e8edf5] mb-4 uppercase tracking-wider"&gt;
                  In This Guide
                &lt;/h3&gt;
                &lt;nav className="space-y-2"&gt;
                  {guide.sections.map((section) =&gt; (
                    &lt;a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() =&gt; setActiveSection(section.id)}
                      className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
                        activeSection === section.id
                          ? "bg-[#4a90d9]/10 text-[#4a90d9] border-l-2 border-[#4a90d9]"
                          : "text-[#6b7a94] hover:text-[#e8edf5] hover:bg-[#0d1424]"
                      }`}
                    &gt;
                      {section.title}
                    &lt;/a&gt;
                  ))}
                  &lt;a
                    href="#faq"
                    onClick={() =&gt; setActiveSection("faq")}
                    className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${
                      activeSection === "faq"
                        ? "bg-[#4a90d9]/10 text-[#4a90d9] border-l-2 border-[#4a90d9]"
                        : "text-[#6b7a94] hover:text-[#e8edf5] hover:bg-[#0d1424]"
                    }`}
                  &gt;
                    FAQ
                  &lt;/a&gt;
                &lt;/nav&gt;
                
                {/* Local Guides Quick Links */}
                &lt;div className="mt-8 pt-8 border-t border-[#4a90d9]/10"&gt;
                  &lt;h3 className="text-sm font-medium text-[#e8edf5] mb-4 uppercase tracking-wider"&gt;
                    Local Guides
                  &lt;/h3&gt;
                  &lt;div className="space-y-2"&gt;
                    {cities.slice(0, 5).map((city) =&gt; (
                      &lt;Link
                        key={city.slug}
                        href={`/guides/home-ev-charging/${city.slug}`}
                        className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all"
                      &gt;
                        📍 {city.name}, {city.state}
                      &lt;/Link&gt;
                    ))}
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/aside&gt;

            {/* Main Content */}
            &lt;div className="max-w-3xl"&gt;
              {/* Content Sections */}
              {guide.sections.map((section) =&gt; (
                &lt;section
                  key={section.id}
                  id={section.id}
                  className="mb-12 scroll-mt-24"
                &gt;
                  &lt;h2 className="text-2xl font-medium text-[#e8edf5] mb-6"&gt;
                    {section.title}
                  &lt;/h2&gt;
                  &lt;div className="prose prose-invert prose-lg max-w-none"&gt;
                    {section.content.split('\n\n').map((paragraph, idx) =&gt; {
                      // Handle headers
                      if (paragraph.startsWith('**') &amp;&amp; paragraph.endsWith('**')) {
                        return (
                          &lt;h3 key={idx} className="text-xl font-medium text-[#e8edf5] mt-8 mb-4"&gt;
                            {paragraph.replace(/\*\*/g, '')}
                          &lt;/h3&gt;
                        );
                      }
                      
                      // Handle bold headers with content
                      if (paragraph.startsWith('**')) {
                        const parts = paragraph.split('**');
                        return (
                          &lt;div key={idx} className="mb-4"&gt;
                            &lt;h4 className="text-lg font-medium text-[#4a90d9] mb-2"&gt;
                              {parts[1]}
                            &lt;/h4&gt;
                            &lt;p className="text-[#b8c4d9] leading-relaxed"&gt;
                              {parts.slice(2).join('').trim()}
                            &lt;/p&gt;
                          &lt;/div&gt;
                        );
                      }
                      
                      // Handle bullet points
                      if (paragraph.includes('\n- ')) {
                        const lines = paragraph.split('\n');
                        const title = lines[0];
                        const bullets = lines.slice(1).filter(l =&gt; l.startsWith('- '));
                        return (
                          &lt;div key={idx} className="mb-4"&gt;
                            {title &amp;&amp; &lt;p className="text-[#b8c4d9] mb-2"&gt;{title}&lt;/p&gt;}
                            &lt;ul className="space-y-2"&gt;
                              {bullets.map((bullet, bIdx) =&gt; (
                                &lt;li key={bIdx} className="flex items-start gap-3 text-[#b8c4d9]"&gt;
                                  &lt;span className="text-[#4a90d9] mt-1"&gt;•&lt;/span&gt;
                                  &lt;span&gt;{bullet.replace('- ', '')}&lt;/span&gt;
                                &lt;/li&gt;
                              ))}
                            &lt;/ul&gt;
                          &lt;/div&gt;
                        );
                      }
                      
                      // Handle tables (simple markdown)
                      if (paragraph.includes('|')) {
                        const rows = paragraph.split('\n').filter(r =&gt; r.trim());
                        const headers = rows[0]?.split('|').filter(c =&gt; c.trim());
                        const dataRows = rows.slice(2); // Skip header and separator
                        
                        return (
                          &lt;div key={idx} className="overflow-x-auto my-6"&gt;
                            &lt;table className="w-full border-collapse"&gt;
                              &lt;thead&gt;
                                &lt;tr&gt;
                                  {headers?.map((header, hIdx) =&gt; (
                                    &lt;th 
                                      key={hIdx} 
                                      className="text-left py-3 px-4 bg-[#0d1424] text-[#e8edf5] font-medium border-b border-[#4a90d9]/20"
                                    &gt;
                                      {header.trim()}
                                    &lt;/th&gt;
                                  ))}
                                &lt;/tr&gt;
                              &lt;/thead&gt;
                              &lt;tbody&gt;
                                {dataRows.map((row, rIdx) =&gt; (
                                  &lt;tr key={rIdx} className="border-b border-[#4a90d9]/10"&gt;
                                    {row.split('|').filter(c =&gt; c.trim()).map((cell, cIdx) =&gt; (
                                      &lt;td key={cIdx} className="py-3 px-4 text-[#b8c4d9]"&gt;
                                        {cell.trim()}
                                      &lt;/td&gt;
                                    ))}
                                  &lt;/tr&gt;
                                ))}
                              &lt;/tbody&gt;
                            &lt;/table&gt;
                          &lt;/div&gt;
                        );
                      }
                      
                      // Regular paragraph
                      return (
                        &lt;p key={idx} className="text-[#b8c4d9] leading-relaxed mb-4"&gt;
                          {paragraph}
                        &lt;/p&gt;
                      );
                    })}
                  &lt;/div&gt;
                &lt;/section&gt;
              ))}

              {/* FAQ Section */}
              &lt;section id="faq" className="mb-12 scroll-mt-24"&gt;
                &lt;h2 className="text-2xl font-medium text-[#e8edf5] mb-6"&gt;
                  Frequently Asked Questions
                &lt;/h2&gt;
                &lt;div className="space-y-4"&gt;
                  {guide.faqs.map((faq, idx) =&gt; (
                    &lt;div
                      key={idx}
                      className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"
                    &gt;
                      &lt;button
                        onClick={() =&gt; setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"
                      &gt;
                        &lt;span className="font-medium text-[#e8edf5]"&gt;{faq.question}&lt;/span&gt;
                        &lt;span className={`text-[#4a90d9] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}&gt;
                          ↓
                        &lt;/span&gt;
                      &lt;/button&gt;
                      {openFaq === idx &amp;&amp; (
                        &lt;div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"&gt;
                          &lt;p className="text-[#b8c4d9] leading-relaxed"&gt;{faq.answer}&lt;/p&gt;
                        &lt;/div&gt;
                      )}
                    &lt;/div&gt;
                  ))}
                &lt;/div&gt;
              &lt;/section&gt;

              {/* Email Signup */}
              &lt;section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#4a90d9]/10 to-transparent border border-[#4a90d9]/20"&gt;
                &lt;h3 className="text-xl font-medium text-[#e8edf5] mb-2"&gt;
                  Stay Updated
                &lt;/h3&gt;
                &lt;p className="text-[#6b7a94] mb-6"&gt;
                  Get notified when we publish new guides and EV tips.
                &lt;/p&gt;
                
                {subscribed ? (
                  &lt;div className="flex items-center gap-3 text-[#4a90d9]"&gt;
                    &lt;span&gt;✓&lt;/span&gt;
                    &lt;span&gt;Thanks! You're subscribed.&lt;/span&gt;
                  &lt;/div&gt;
                ) : (
                  &lt;form onSubmit={handleSubscribe} className="flex gap-3"&gt;
                    &lt;input
                      type="email"
                      value={email}
                      onChange={(e) =&gt; setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-3 rounded-lg bg-[#0a0f1a] border border-[#4a90d9]/20 text-[#e8edf5] placeholder-[#6b7a94] focus:outline-none focus:border-[#4a90d9]/50"
                    /&gt;
                    &lt;button
                      type="submit"
                      className="px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
                    &gt;
                      Subscribe
                    &lt;/button&gt;
                  &lt;/form&gt;
                )}
              &lt;/section&gt;

              {/* CTA - Find Service Providers */}
              &lt;section className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10"&gt;
                &lt;h3 className="text-xl font-medium text-[#e8edf5] mb-2"&gt;
                  Ready to Install a Home Charger?
                &lt;/h3&gt;
                &lt;p className="text-[#6b7a94] mb-6"&gt;
                  Find verified electricians and EV charger installers in your area.
                &lt;/p&gt;
                &lt;Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
                &gt;
                  Find Installers Near You
                  &lt;span&gt;→&lt;/span&gt;
                &lt;/Link&gt;
              &lt;/section&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/section&gt;
    &lt;/main&gt;
  );
}

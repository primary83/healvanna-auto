"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const ppfGuide = {
  slug: "ppf-paint-protection-film",
  title: "PPF (Paint Protection Film): The Complete Guide for 2026",
  shortTitle: "Paint Protection Film (PPF)",
  description: "Everything you need to know about PPF - costs, coverage options, top brands, and how to choose the right installer for your vehicle.",
  icon: "🛡️",
  category: "Car Care",
  readTime: "12 min read",
  sections: [
    {
      id: "what-is-ppf",
      title: "What is Paint Protection Film?",
      content: `Paint Protection Film (PPF) is a transparent, self-healing urethane film applied to your vehicle's painted surfaces to protect against rock chips, scratches, bug acids, bird droppings, and UV damage.

Originally developed for military helicopters, PPF has evolved into the gold standard for automotive paint protection. Modern PPF is virtually invisible when properly installed and can last 5-10+ years with proper care.

Think of PPF as an invisible shield for your paint. Unlike wax or sealants that sit on top of the paint, PPF creates a physical barrier that absorbs impacts and prevents damage from reaching your clear coat.`
    },
    {
      id: "ppf-vs-ceramic-vs-wrap",
      title: "PPF vs Ceramic Coating vs Vinyl Wrap",
      content: `This is the most common question car owners ask. Here's the truth: these three products serve different purposes and can actually work together.

PPF (Paint Protection Film) provides physical protection against rock chips, scratches, and impacts. It's a thick, self-healing film that absorbs damage. Best for: protecting high-impact areas from physical damage.

Ceramic Coating is a liquid polymer that bonds to your paint, creating a hydrophobic layer that repels water and makes cleaning easier. It provides UV protection and chemical resistance but NO physical protection against rock chips. Best for: ease of cleaning and paint enhancement.

Vinyl Wrap is a colored or textured film used to change your car's appearance. It offers some protection but is primarily decorative. Best for: changing your car's color without permanent paint.

The ultimate combo? PPF on high-impact areas + ceramic coating on top of everything. This gives you physical protection plus easy maintenance.`
    },
    {
      id: "coverage-options",
      title: "Coverage Options & Packages",
      content: `PPF installers typically offer several coverage levels. Here's what each includes:

Partial Front / Track Pack ($800-$2,000): Covers the most vulnerable areas - a portion of the hood (usually 18-24 inches), front bumper, and mirror caps. Great for budget-conscious protection of high-impact zones.

Full Front / Clear Bra ($1,500-$3,500): Complete coverage of the hood, front bumper, fenders, mirror caps, and headlights. This is the most popular option and protects everything facing oncoming debris.

Full Front + Extras ($2,500-$5,000): Full front plus rocker panels, A-pillars, door edges, and door cups. Adds protection for commonly chipped and scratched areas.

Full Body ($5,000-$10,000+): Every painted surface covered. Maximum protection, but significant investment. Most popular with exotic cars, new vehicles, and enthusiasts who want complete coverage.

Custom packages are also available - many owners protect just the areas most prone to damage on their specific vehicle.`
    },
    {
      id: "cost-breakdown",
      title: "PPF Cost Breakdown",
      content: `PPF pricing varies based on coverage, film brand, vehicle size, and installer expertise. Here's what to expect in 2026:

Partial Front / Track Pack: $800 - $2,000
Full Front (Clear Bra): $1,500 - $3,500
Full Front + Rocker Panels: $2,500 - $4,500
Full Body (Sedan/Coupe): $5,000 - $7,000
Full Body (SUV/Truck): $6,000 - $8,500
Full Body (Exotic/Luxury): $8,000 - $12,000+

Factors that affect price include film brand (XPEL, 3M, SunTek vary in cost), vehicle size and complexity, new vs. used (used cars may need paint correction first), installer experience and reputation, geographic location, and warranty length.

Beware of prices that seem too good to be true - cheap installations often use inferior film or inexperienced installers, leading to yellowing, peeling, or poor fitment.`
    },
    {
      id: "top-brands",
      title: "Top PPF Brands Compared",
      content: `Not all PPF is created equal. Here are the top brands professionals recommend:

XPEL Ultimate Plus: The industry leader. Excellent clarity, self-healing properties, and a 10-year warranty. Known for precise pre-cut patterns and edge-to-edge coverage. Premium pricing but premium quality.

3M Scotchgard Pro: From a trusted name in protection. Good clarity and self-healing, backed by 3M's reputation. Slightly more affordable than XPEL with solid performance.

SunTek Ultra: Excellent value with great performance. Strong self-healing, good clarity, and competitive pricing. Popular among installers for its ease of application.

Llumar Stratos: Growing in popularity with excellent optical clarity. Good self-healing and stain resistance. Offers good value in the premium segment.

STEK DYNOshield: Known for superior hydrophobic properties and self-healing. Lifetime warranty available. Excellent for those who want low-maintenance protection.

All top brands offer self-healing technology - minor scratches disappear with heat (sunlight or warm water). The differences come down to clarity, warranty, installer preference, and price.`
    },
    {
      id: "choosing-installer",
      title: "How to Choose a PPF Installer",
      content: `PPF installation is an art. The same film can look flawless or terrible depending on who installs it. Here's how to find a great installer:

Look for certifications: Top installers are certified by film manufacturers (XPEL, 3M, SunTek). This means they've been trained and use genuine products.

Check their portfolio: Ask to see photos of completed work, especially on vehicles similar to yours. Look for clean edges, no bubbles, and seamless coverage.

Read reviews: Google reviews, Facebook, and automotive forums reveal real customer experiences. Look for patterns in feedback.

Visit the shop: A clean, climate-controlled installation bay indicates attention to detail. Dust is PPF's enemy.

Ask about warranty: Reputable installers offer workmanship warranties in addition to manufacturer film warranties.

Inquire about their process: Good installers will discuss prep work, installation time (usually 1-5 days), and aftercare instructions.

Get multiple quotes: But don't automatically choose the cheapest. A quality installation that lasts 10 years beats a cheap one that fails in 2.

Red flags: No portfolio, pressure tactics, unrealistically low prices, or reluctance to answer questions.`
    },
    {
      id: "maintenance",
      title: "PPF Maintenance & Care",
      content: `PPF is low-maintenance, but proper care extends its life and keeps it looking great:

Washing: Wait at least 7 days after installation before washing. Use pH-neutral car soap and avoid automatic car washes with harsh brushes. Hand washing or touchless washes are best.

Drying: Use a clean microfiber towel or air blower. Avoid dragging dirty towels across the film.

Ceramic coating on PPF: Highly recommended! A ceramic coating on top of PPF adds hydrophobic properties, makes cleaning easier, and adds UV protection to the film itself.

Avoid: Petroleum-based products, harsh chemicals, abrasive polishes, and pressure washing edges directly.

Self-healing activation: Minor scratches heal with heat. Park in sunlight or pour warm (not boiling) water over light scratches.

Inspect regularly: Check edges for lifting, especially after car washes. Catching issues early prevents bigger problems.

Expected lifespan: Quality PPF lasts 5-10+ years with proper care. Warranty coverage is typically 5-10 years depending on brand and installer.`
    }
  ],
  faqs: [
    {
      question: "Is PPF worth the money?",
      answer: "For most car owners, yes - especially if you drive frequently, park outside, or have a vehicle with soft paint (looking at you, German cars). PPF can prevent thousands in paint repair costs and keeps resale value high. A single rock chip repair can cost $150-$500, and respray panels run $500-$1,500+. Full-front PPF often pays for itself."
    },
    {
      question: "Does PPF damage paint when removed?",
      answer: "Quality PPF installed on healthy paint should not damage your paint when professionally removed. However, if applied over weak or damaged clear coat, issues can arise. This is why reputable installers inspect and sometimes correct paint before installation."
    },
    {
      question: "Can you see PPF on the car?",
      answer: "Modern high-quality PPF is virtually invisible when properly installed. You might notice it at extreme angles or on edges, but from normal viewing distances, it's undetectable. Cheap films or poor installations are more visible."
    },
    {
      question: "How long does PPF installation take?",
      answer: "Partial front: 3-5 hours. Full front: 1-2 days. Full body: 3-5 days. Quality installers don't rush - proper prep, precise fitting, and careful finishing take time."
    },
    {
      question: "Can PPF be applied to a used car?",
      answer: "Absolutely! However, used cars often need paint correction (polishing) first to remove existing scratches and swirls. Otherwise, you're sealing in imperfections. Budget an extra $200-$800 for paint correction if needed."
    },
    {
      question: "Does PPF void my car's warranty?",
      answer: "No. PPF doesn't void your vehicle warranty. In fact, many dealerships offer PPF as an add-on for new cars. Just make sure installation is done by professionals to avoid any cosmetic damage claims."
    }
  ]
};

const ppfCities = [
  { name: "Miami", slug: "miami", state: "FL" },
  { name: "Orlando", slug: "orlando", state: "FL" },
  { name: "Tampa", slug: "tampa", state: "FL" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale", state: "FL" },
  { name: "Jacksonville", slug: "jacksonville", state: "FL" },
];

export default function PPFGuide() {
  const [activeSection, setActiveSection] = useState("what-is-ppf");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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
            <span className="text-[#e8edf5]">{ppfGuide.shortTitle}</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{ppfGuide.icon}</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4a90d9]/10 text-[#4a90d9]">
              {ppfGuide.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#e8edf5] mb-6">
            {ppfGuide.title}
          </h1>
          
          <p className="text-lg text-[#6b7a94] mb-6 max-w-2xl">
            {ppfGuide.description}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-[#6b7a94]">
            <span>📖 {ppfGuide.readTime}</span>
            <span>📅 Updated January 2026</span>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 px-6 bg-[#0d1424]/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">$1.5K-$7K+</div>
              <div className="text-sm text-[#6b7a94]">Typical Cost Range</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">5-10+ yrs</div>
              <div className="text-sm text-[#6b7a94]">Film Lifespan</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">Self-Healing</div>
              <div className="text-sm text-[#6b7a94]">Technology</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">1-5 Days</div>
              <div className="text-sm text-[#6b7a94]">Install Time</div>
            </div>
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
                  {ppfGuide.sections.map((section) => (
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
                    Local PPF Guides
                  </h3>
                  <div className="space-y-2">
                    {ppfCities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/guides/ppf-paint-protection-film/${city.slug}`}
                        className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all"
                      >
                        📍 {city.name}, {city.state}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[#4a90d9]/10">
                  <h3 className="text-sm font-medium text-[#e8edf5] mb-4 uppercase tracking-wider">
                    Related Guides
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/guides/ceramic-coating-101"
                      className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all"
                    >
                      ✨ Ceramic Coating 101
                    </Link>
                    <Link
                      href="/guides/home-ev-charging"
                      className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all"
                    >
                      🔌 Home EV Charging
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="max-w-3xl">
              {ppfGuide.sections.map((section) => (
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
                  {ppfGuide.faqs.map((faq, idx) => (
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
                  Get notified when we publish new guides and car care tips.
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
                  Ready to Protect Your Paint?
                </h3>
                <p className="text-[#6b7a94] mb-6">
                  Find verified PPF installers and detailing specialists in your area.
                </p>
                <Link
                  href="/car-wrapping/ppf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
                >
                  Find PPF Installers Near You
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

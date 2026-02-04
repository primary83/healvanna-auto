"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const windowTintingGuide = {
  slug: "window-tinting",
  title: "Window Tinting: The Complete Guide for 2025",
  shortTitle: "Window Tinting",
  description: "Everything you need to know about car window tinting - costs, film types, legal limits, and how to choose the right tint for your vehicle.",
  icon: "🔧",
  category: "Car Care",
  readTime: "10 min read",
  sections: [
    {
      id: "what-is-tinting",
      title: "What is Window Tinting?",
      content: `Window tinting is the process of applying a thin film to your vehicle's glass to reduce heat, block UV rays, enhance privacy, and improve appearance. Modern window films are engineered with advanced technology that can reject significant amounts of solar heat while maintaining excellent visibility.

Beyond aesthetics, quality window tint serves practical purposes: protecting your interior from fading, reducing eye strain from glare, keeping your car cooler in summer, and adding a layer of security by making it harder to see inside your vehicle.

In sunny states like Florida, window tinting isn't just a luxury—it's almost a necessity for comfortable driving and protecting your investment.`
    },
    {
      id: "types-of-tint",
      title: "Types of Window Tint Film",
      content: `**Dyed Window Film ($50-$150)**
The most affordable option. Uses dye to absorb solar heat and reduce glare.
- Pros: Budget-friendly, good appearance, reduces glare
- Cons: Fades over time, less heat rejection, may turn purple
- Lifespan: 3-5 years

**Metalized Film ($100-$200)**
Contains metallic particles that reflect heat away from the vehicle.
- Pros: Excellent heat rejection, durable, strengthens glass
- Cons: Can interfere with GPS/phone signals, shiny appearance
- Lifespan: 5-8 years

**Carbon Film ($150-$300)**
Uses carbon particles for heat rejection without the metallic look.
- Pros: Great heat rejection, no signal interference, doesn't fade
- Cons: Higher cost than dyed or metalized
- Lifespan: 8-10 years

**Ceramic Film ($200-$400+)**
Premium option using ceramic particles for maximum performance.
- Pros: Best heat rejection (up to 50%), no signal interference, UV blocking, crystal clear visibility
- Cons: Most expensive option
- Lifespan: 10+ years with lifetime warranties common

**For Florida's intense sun, we recommend carbon or ceramic film for the best heat rejection and longevity.**`
    },
    {
      id: "tint-levels",
      title: "Understanding Tint Levels (VLT%)",
      content: `Tint darkness is measured by Visible Light Transmission (VLT) - the percentage of light that passes through the film. Lower VLT = darker tint.

**Common VLT Levels:**

| VLT % | Darkness | Best For |
|-------|----------|----------|
| 50% | Light | Front windows where legal |
| 35% | Medium | Good balance of privacy and visibility |
| 20% | Dark | Rear windows, strong privacy |
| 15% | Very Dark | Maximum privacy, limo-style |
| 5% | "Limo Tint" | Rear windows only, very dark |

**What the numbers mean:**
- 70% VLT = 70% of light passes through (very light)
- 20% VLT = Only 20% of light passes through (dark)
- 5% VLT = Only 5% of light passes through (nearly opaque)

Most people choose 35% for a good balance, or 20% for more privacy while still being able to see out at night.`
    },
    {
      id: "florida-laws",
      title: "Florida Window Tint Laws",
      content: `Florida has specific laws about how dark your tint can be. Here's what's legal:

**Sedans:**
- Windshield: Non-reflective tint allowed on top 5 inches (AS-1 line)
- Front Side Windows: Must allow more than 28% light in
- Back Side Windows: Must allow more than 15% light in
- Rear Window: Must allow more than 15% light in

**SUVs and Vans:**
- Windshield: Non-reflective tint allowed on top 5 inches
- Front Side Windows: Must allow more than 28% light in
- Back Side Windows: Any darkness allowed
- Rear Window: Any darkness allowed

**Additional Florida Rules:**
- No red, amber, or blue tint colors
- Must have side mirrors if rear window is tinted
- No more than 25% reflectivity on any window
- Medical exemptions available for darker tint

**Penalties for Illegal Tint:**
- First offense: $116 fine (non-moving violation)
- Can be required to remove illegal tint
- May affect vehicle inspection

**Pro tip:** Many Florida drivers go slightly darker than legal on rear windows since enforcement focuses mainly on front windows.`
    },
    {
      id: "cost-breakdown",
      title: "Window Tinting Costs",
      content: `Pricing varies based on film quality, vehicle size, and shop reputation.

**Average Costs by Film Type:**

| Film Type | Sedan | SUV/Truck |
|-----------|-------|-----------|
| Dyed | $150-$250 | $200-$350 |
| Metalized | $200-$350 | $300-$450 |
| Carbon | $300-$450 | $400-$550 |
| Ceramic | $400-$600 | $500-$800 |

**What affects price:**
- Vehicle size (more glass = higher cost)
- Number of windows
- Film brand and quality
- Removal of old tint (add $50-$150)
- Shop location and reputation

**Florida Market Pricing:**
- Miami/Fort Lauderdale: Typically 10-20% higher
- Orlando/Tampa: Average pricing
- Smaller cities: Often 10-15% lower

**What's usually included:**
- All side windows and rear window
- Warranty (varies by film type)
- Windshield strip (top 5 inches)

**Windshield tinting** (full or partial) is often extra: $100-$300 depending on type.`
    },
    {
      id: "benefits",
      title: "Benefits of Window Tinting",
      content: `**1. Heat Rejection**
Quality tint can reduce interior temperature by 15-60°F. Ceramic films block up to 50% of solar heat, making your AC work less and improving fuel efficiency.

**2. UV Protection**
Window film blocks up to 99% of harmful UV rays, protecting:
- Your skin from sun damage
- Dashboard and seats from fading
- Leather from cracking
- Electronics from heat damage

**3. Glare Reduction**
Reduces eye strain and improves visibility by cutting harsh sunlight and headlight glare at night (lighter tints).

**4. Privacy & Security**
Darker tints make it harder for people to see inside your car, deterring theft. Film also holds glass together if broken, adding security.

**5. Enhanced Appearance**
Gives your vehicle a sleek, finished look that complements any color or style.

**6. Interior Protection**
Prevents premature aging of your interior materials - especially important in Florida's intense sun.

**For Florida drivers, the heat rejection alone often pays for the tint within a year through reduced AC usage and cooler comfort.**`
    },
    {
      id: "choosing-installer",
      title: "How to Choose a Tint Shop",
      content: `Not all tint shops are equal. Here's what to look for:

**Signs of a Quality Shop:**
- Clean, dust-free installation bay
- Uses computer-cut patterns (not hand-cut)
- Offers multiple film brands and types
- Provides written warranty
- Has portfolio of completed work
- Good reviews mentioning longevity and no bubbling

**Questions to Ask:**
1. What brands of film do you carry?
2. Is the installation done indoors?
3. What's included in the warranty?
4. How long have you been in business?
5. Can I see examples of your work?

**Red Flags:**
- Prices that seem too good to be true
- No warranty offered
- Outdoor installation
- Pushy sales tactics
- Can't explain different film types

**Installation Time:**
- Sedan: 2-3 hours
- SUV/Truck: 3-4 hours
- Should cure for 3-5 days before rolling windows down

**Warranty Expectations:**
- Dyed film: 3-5 year warranty
- Carbon film: 5-10 year warranty
- Ceramic film: Lifetime warranty (common)`
    },
    {
      id: "maintenance",
      title: "Tint Care & Maintenance",
      content: `**First Week After Installation:**
- Don't roll down windows for 3-5 days
- Small water bubbles are normal - they'll disappear
- Avoid cleaning the inside of windows

**Ongoing Care:**
- Clean with ammonia-free glass cleaner
- Use soft microfiber cloths
- Avoid abrasive materials or scrapers
- Don't use paper towels (can scratch)

**Recommended Cleaners:**
- Invisible Glass (ammonia-free formula)
- Stoner Invisible Glass
- Any tint-safe glass cleaner

**Signs Your Tint Needs Replacement:**
- Purple or brown discoloration
- Bubbling that doesn't go away
- Peeling edges
- Scratches affecting visibility
- Fading or inconsistent color

**Lifespan Expectations:**
With proper care:
- Dyed: 3-5 years
- Metalized: 5-8 years
- Carbon: 8-10 years
- Ceramic: 10-15+ years`
    }
  ],
  faqs: [
    {
      question: "How long does window tint last?",
      answer: "Lifespan depends on film quality: dyed films last 3-5 years, carbon films 8-10 years, and ceramic films can last 15+ years. Florida's intense sun can reduce lifespan, making quality film a better investment."
    },
    {
      question: "Will window tint affect my visibility at night?",
      answer: "Darker tints (below 20% VLT) can reduce night visibility. For front windows, we recommend 35% or lighter. Quality ceramic films maintain better clarity than cheaper options at the same darkness level."
    },
    {
      question: "Can I tint my windshield?",
      answer: "In Florida, you can legally tint the top 5 inches of your windshield (above the AS-1 line). Full windshield tinting with clear ceramic film (70% VLT) is also popular for heat rejection while remaining legal."
    },
    {
      question: "How long until I can roll down my windows?",
      answer: "Wait 3-5 days for the tint to fully cure and adhere to the glass. In humid Florida weather, waiting the full 5 days is recommended. Rolling windows down too early can cause peeling."
    },
    {
      question: "Does window tint really reduce heat?",
      answer: "Yes! Quality ceramic tint can reduce interior temperature by up to 60°F and block 50% of solar heat. Even basic dyed film provides noticeable heat reduction. This is especially valuable in Florida's climate."
    },
    {
      question: "Will tint void my car warranty?",
      answer: "No, window tint will not void your vehicle warranty. However, if improperly installed tint damages a defroster or antenna, that specific damage wouldn't be covered. Always use a reputable installer."
    }
  ]
};

const tintCities = [
  { name: "Miami", slug: "miami", state: "FL" },
  { name: "Orlando", slug: "orlando", state: "FL" },
  { name: "Tampa", slug: "tampa", state: "FL" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale", state: "FL" },
  { name: "Jacksonville", slug: "jacksonville", state: "FL" },
];

export default function WindowTintingGuide() {
  const [activeSection, setActiveSection] = useState("what-is-tinting");
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
            <span className="text-[#e8edf5]">{windowTintingGuide.shortTitle}</span>
          </nav>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="text-5xl">{windowTintingGuide.icon}</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#4a90d9]/10 text-[#4a90d9]">
              {windowTintingGuide.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#e8edf5] mb-6">
            {windowTintingGuide.title}
          </h1>
          
          <p className="text-lg text-[#6b7a94] mb-6 max-w-2xl">
            {windowTintingGuide.description}
          </p>
          
          <div className="flex items-center gap-6 text-sm text-[#6b7a94]">
            <span>📖 {windowTintingGuide.readTime}</span>
            <span>📅 Updated January 2025</span>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 px-6 bg-[#0d1424]/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">$150-$600</div>
              <div className="text-sm text-[#6b7a94]">Typical Cost Range</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">2-4 hrs</div>
              <div className="text-sm text-[#6b7a94]">Installation Time</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">28% VLT</div>
              <div className="text-sm text-[#6b7a94]">FL Front Legal Limit</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0a0f1a] border border-[#4a90d9]/10">
              <div className="text-2xl font-medium text-[#4a90d9]">99%</div>
              <div className="text-sm text-[#6b7a94]">UV Rays Blocked</div>
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
                  {windowTintingGuide.sections.map((section) => (
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
                    Local Tinting Guides
                  </h3>
                  <div className="space-y-2">
                    {tintCities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/guides/window-tinting/${city.slug}`}
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
                      href="/guides/ppf-paint-protection-film"
                      className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all"
                    >
                      🛡️ Paint Protection Film
                    </Link>
                    <Link
                      href="/guides/home-ev-charging"
                      className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all"
                    >
                      ⚡ Home EV Charging
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="max-w-3xl">
              {windowTintingGuide.sections.map((section) => (
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
                  {windowTintingGuide.faqs.map((faq, idx) => (
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
                  Ready to Tint Your Windows?
                </h3>
                <p className="text-[#6b7a94] mb-6">
                  Find verified window tinting shops in your area.
                </p>
                <Link
                  href="/services/window-tinting"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
                >
                  Find Tint Shops Near You
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

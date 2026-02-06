"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const vinylWrapsGuide = {
  slug: "vinyl-wraps",
  title: "Vinyl Wraps & Color Change: The Complete Guide for 2026",
  shortTitle: "Vinyl Wraps & Color Change",
  description: "Everything you need to know about vinyl wrapping your vehicle - costs, wrap types, color options, durability, and how to choose the right installer.",
  icon: "🎨",
  category: "Car Care",
  readTime: "12 min read",
  sections: [
    {
      id: "what-are-wraps",
      title: "What is a Vinyl Wrap?",
      content: `A vinyl wrap is a large sheet of colored or textured adhesive film applied directly over your vehicle's existing paint. It completely transforms the look of your car without the permanence, cost, or downtime of a full respray.

Modern vinyl wraps have come a long way from the basic advertising wraps of the past. Today's premium films offer stunning finishes - from glossy and matte to satin, metallic, chrome, carbon fiber, brushed metal, and even color-shifting chameleon effects. The result is virtually indistinguishable from a high-end paint job.

The beauty of wrapping is its reversibility. Don't like the color? Want to sell the car? Simply remove the wrap and your original paint is preserved underneath - often in better condition than when you started, since the wrap acts as a protective layer.`
    },
    {
      id: "wrap-types",
      title: "Types of Vinyl Wraps & Finishes",
      content: `The variety of wrap finishes available today is staggering. Here's a breakdown of the most popular options:

**Gloss Wraps**
The most paint-like finish. Available in virtually every color imaginable. Gives your car a wet, shiny appearance similar to a fresh paint job. Great for bold color changes like bright reds, blues, or yellows.

**Matte Wraps**
A flat, non-reflective finish that's become extremely popular. Gives vehicles a stealth, military-inspired look. Matte black, matte gray, and matte white are the most requested. Requires specific care - no wax, polish, or automated car washes.

**Satin Wraps**
The sweet spot between gloss and matte. Offers a subtle sheen without the full mirror-like reflection of gloss. Satin finishes look sophisticated and are slightly more forgiving with fingerprints and imperfections than matte.

**Metallic Wraps**
Contains metallic flakes within the film that create a sparkling, pearlescent effect in sunlight. Adds depth and dimension that flat colors can't achieve. Metallic blue, green, and gray are especially popular.

**Chrome & Mirror Wraps**
Ultra-reflective, mirror-like finish. Eye-catching and dramatic but more expensive and harder to install. Note: chrome wraps are illegal on public roads in some jurisdictions due to glare concerns. Check local laws.

**Color-Shifting / Chameleon Wraps**
These wraps change color depending on the viewing angle and lighting. They shift between 2-3 colors, creating a mesmerizing effect. Popular combinations include purple-to-teal, gold-to-green, and blue-to-purple.

**Carbon Fiber Wraps**
Mimics the look of real carbon fiber weave at a fraction of the cost. Available in various colors beyond traditional black. Popular for accents like hoods, roofs, mirrors, and spoilers.

**Textured Wraps**
Includes brushed metal, leather, wood grain, and other textured finishes. Typically used for accents and interior trim rather than full vehicle wraps.`
    },
    {
      id: "full-vs-partial",
      title: "Full Wrap vs Partial Wrap vs Accents",
      content: `You don't have to wrap your entire car. Here are the main approaches:

**Full Wrap**
Covers every painted exterior surface - body panels, bumpers, mirrors, door handles, and sometimes even the roof. This is the go-to for a complete color change.
- Cost: $2,500-$6,000+
- Time: 3-5 days
- Best for: Complete color transformation

**Partial Wrap**
Covers select areas of the vehicle. Common configurations include half wraps (roof, hood, trunk), racing stripes, or two-tone designs combining wrap with your existing paint.
- Cost: $500-$2,500
- Time: 1-3 days
- Best for: Accent colors, two-tone looks, budget-friendly customization

**Accent Wraps**
Small targeted applications on specific parts: roof, mirrors, spoiler, hood, pillar trim, or bumper accents. Popular for adding contrast or highlighting design elements.
- Cost: $200-$800
- Time: A few hours to 1 day
- Best for: Subtle customization, testing the wrap look before committing to a full wrap

**Commercial / Fleet Wraps**
Designed for business vehicles with logos, contact information, and branding graphics. Can be partial or full coverage. An excellent advertising investment.
- Cost: $1,500-$5,000+
- Time: 2-5 days
- Best for: Business branding and mobile advertising`
    },
    {
      id: "cost",
      title: "How Much Does a Vinyl Wrap Cost?",
      content: `Wrap pricing depends on several factors. Here's a realistic breakdown:

**By Vehicle Size:**
- Compact cars (Civic, Corolla): $2,000-$3,500
- Mid-size sedans (Accord, Camry): $2,500-$4,000
- Sports cars (Mustang, Camaro): $3,000-$5,000
- Small SUVs (RAV4, CR-V): $3,000-$4,500
- Large SUVs (Tahoe, Expedition): $4,000-$6,000
- Trucks (F-150, RAM): $3,500-$5,500
- Exotic cars (Lamborghini, Ferrari): $5,000-$10,000+

**By Finish Type:**
- Gloss colors: Base pricing
- Matte/Satin: +10-20%
- Metallic: +15-25%
- Chrome: +50-100%
- Color-shifting: +30-60%
- Carbon fiber: +10-20%

**Regional Pricing (Florida):**
- Miami/Fort Lauderdale: $3,000-$7,000
- Orlando/Tampa: $2,500-$5,500
- Jacksonville/smaller markets: $2,000-$5,000

**What Affects Price:**
- Vehicle complexity (curves, recesses, trim pieces)
- Film quality and brand (3M, Avery Dennison, XPEL, Inozetek)
- Installer experience and reputation
- Whether old wrap or damaged paint needs removal/correction first
- Design complexity (multi-color, custom graphics)

**Hidden Costs to Budget For:**
- Wrap removal (if replacing old wrap): $500-$1,000
- Paint correction before wrapping: $200-$800
- Chrome delete (blackout trim): $300-$800 additional
- Ceramic coating on wrap: $200-$500 (highly recommended)`
    },
    {
      id: "durability",
      title: "How Long Does a Vinyl Wrap Last?",
      content: `Wrap longevity depends on the film quality, installation, environment, and maintenance:

**Expected Lifespan by Film Quality:**
- Budget/economy films: 2-3 years
- Mid-range films (Avery, Oracal): 4-5 years
- Premium films (3M 2080, XPEL, Inozetek): 5-7 years
- Commercial fleet films: 3-5 years (designed for durability over aesthetics)

**Factors That Shorten Wrap Life:**
- Constant sun exposure (Florida's #1 wrap enemy)
- Garage-less parking
- Automated car washes with brushes
- Neglected maintenance
- Low-quality installation with trapped air bubbles or lifted edges
- Harsh chemicals or abrasive cleaning products

**Factors That Extend Wrap Life:**
- Garage parking (the single biggest factor)
- Ceramic coating on top of the wrap
- Regular hand washing with wrap-safe products
- Prompt repair of any lifted edges
- Avoiding prolonged sun exposure when possible

**Florida-Specific Note:**
Florida's intense UV exposure is the biggest threat to wrap longevity. Wraps that might last 7 years in a northern climate may last 4-5 years in Florida without proper care. Ceramic coating your wrap and garage parking can add 2-3 years to your wrap's life.`
    },
    {
      id: "wrap-vs-paint",
      title: "Vinyl Wrap vs Paint: Which Should You Choose?",
      content: `Both have their place. Here's an honest comparison:

**Choose Vinyl Wrap If:**
- You want a color change but may want to revert later
- You're leasing your vehicle
- You want to protect your original paint
- You want exotic finishes (matte, satin, color-shift) that paint can't easily replicate
- You want it done in days, not weeks
- Your budget is $2,500-$6,000

**Choose Paint If:**
- You want a permanent color change
- You own the car long-term and love the color
- Your existing paint is severely damaged (dents, deep scratches, rust)
- You want a factory-perfect finish in a standard color
- Your budget is $5,000-$15,000+ for quality work

**Cost Comparison:**
- Quality vinyl wrap: $2,500-$6,000 (lasts 5-7 years)
- Quality respray (single color): $5,000-$10,000 (permanent)
- Show-quality paint job: $10,000-$25,000+ (permanent)

**Key Advantages of Wrap:**
- Reversible - removes cleanly if done right
- Protects original paint underneath
- Faster turnaround (days vs weeks)
- More finish options (matte, satin, chrome, color-shift)
- Less expensive than quality paint
- Doesn't affect vehicle title (repaints can)

**Key Advantages of Paint:**
- Permanent and doesn't need replacing
- Handles complex curves and areas better
- No edge lifting or peeling concerns
- Can repair damage more seamlessly
- Factory-matched colors available`
    },
    {
      id: "choosing-installer",
      title: "How to Choose a Vinyl Wrap Installer",
      content: `The installer matters more than the film brand. A great installer with mid-range film will outperform a mediocre installer with premium film every time.

**What to Look For:**

**Portfolio & Experience**
- Ask to see completed vehicles, not just close-up shots
- Look for complex vehicles they've wrapped (bumpers, mirrors, recessed areas)
- Check how their wraps look after 1-2 years, not just fresh installs
- Minimum 2-3 years of dedicated wrap experience

**Facility & Process**
- Clean, temperature-controlled indoor workspace (critical for proper adhesion)
- Proper lighting to spot imperfections
- Dedicated prep area for cleaning vehicles before wrapping
- Not working in a parking lot or open garage

**Film Brands They Use**
- Top-tier: 3M 1080/2080, XPEL, Inozetek
- Quality: Avery Dennison Supreme Wrapping Film, Hexis
- Acceptable: Oracal, KPMF
- Avoid: Unknown Chinese brands, ultra-cheap films

**Warranty & Guarantees**
- Reputable shops offer 1-2 year installation warranty
- This covers peeling, bubbling, and lifting caused by installation
- Film manufacturer warranty is separate (covers material defects)
- Get everything in writing

**Red Flags:**
- No photos of completed work
- Working outdoors or in uncontrolled environments
- Using unnamed or ultra-cheap vinyl
- Quoting significantly below market rate
- Rushing the job (full wrap in 1 day)
- No warranty offered
- Won't let you see the workspace

**Green Flags:**
- Certified by film manufacturers (3M Preferred, Avery Certified)
- Extensive portfolio of diverse vehicles
- Professional indoor facility
- Clear timeline and process explanation
- Written warranty
- Active, positive social media with customer feedback`
    },
    {
      id: "wrap-care",
      title: "Caring for Your Vinyl Wrap",
      content: `Proper care makes the difference between a wrap that looks great for 5+ years and one that fades in 2.

**Washing Your Wrap:**
- Hand wash only with wrap-safe, pH-neutral soap
- Use a microfiber wash mitt (never brushes or abrasive sponges)
- Rinse thoroughly before washing to remove loose dirt
- Wash in the shade, never in direct sunlight
- Avoid touchless car washes with harsh chemicals
- Never use automatic car washes with brushes

**Drying:**
- Pat dry with clean microfiber towels
- Or use a filtered air blower
- Don't let water spots air-dry on the wrap

**Protection:**
- Ceramic coating on vinyl wrap is highly recommended (adds UV protection and makes cleaning easier)
- Spray sealants designed for wraps can be used monthly
- Never use traditional wax or polish (especially on matte/satin finishes)

**What to Avoid:**
- Petroleum-based products
- Abrasive cleaners or compounds
- Bug and tar removers with harsh solvents (use wrap-safe versions)
- Pressure washers pointed directly at edges
- Parking under trees that drop sap

**Matte/Satin Specific Care:**
- Never apply wax, polish, or gloss-enhancing products
- Use only matte-specific wash soap and detail spray
- Fingerprints show more easily - keep a matte detail spray handy
- Isopropyl alcohol (diluted) can remove stubborn marks

**Addressing Issues:**
- Small bubbles: Your installer can fix these easily
- Lifted edges: Get them re-adhered promptly before dirt gets underneath
- Minor scratches: Some can be removed with heat
- Stains: Address immediately - the longer they sit, the harder they are to remove`
    },
    {
      id: "florida-wraps",
      title: "Vinyl Wraps in Florida: What You Need to Know",
      content: `Florida is one of the top markets for vinyl wraps in the country, but the climate presents unique challenges:

**UV Exposure**
Florida's intense sun is the #1 enemy of vinyl wraps. UV radiation breaks down the film over time, causing fading, discoloration, and premature failure. Mitigation: garage parking, ceramic coating, and choosing UV-resistant premium films.

**Heat**
Summer temperatures regularly exceed 95°F with black surfaces reaching 150°F+. Excessive heat can soften adhesive and cause lifting at edges. Good installers account for Florida heat during installation by using appropriate adhesive activation techniques.

**Humidity**
High humidity during installation can cause adhesion issues if not properly managed. This is why professional indoor facilities with climate control are essential in Florida. Avoid shops working outdoors.

**Salt Air**
Coastal areas expose wraps to salt-laden air, which can accelerate degradation at wrap edges and seams. Regular washing removes salt deposits and extends wrap life.

**Love Bugs**
Florida's love bug seasons are as problematic for wraps as they are for paint. Remove love bug remains within 24 hours. A ceramic-coated wrap makes removal much easier.

**Positive Florida Factor:**
No harsh winters, road salt, or freeze-thaw cycles that wraps in northern states must endure. Florida wraps never deal with salt trucks, ice scrapers, or extreme cold that can make vinyl brittle.`
    }
  ],
  faqs: [
    {
      question: "Will a vinyl wrap damage my paint?",
      answer: "A properly installed and removed vinyl wrap will not damage healthy paint. In fact, it protects it. However, if your paint is already peeling, oxidized, or has previous bodywork with weak adhesion, removal could potentially lift some paint. A good installer will inspect your paint first and advise you."
    },
    {
      question: "Can you wrap a leased vehicle?",
      answer: "Yes! This is one of the best uses for vinyl wrap. Wrap your leased car any color you want, then remove it before returning the vehicle. Your original paint stays pristine underneath. Just make sure to budget for professional removal before your lease ends."
    },
    {
      question: "How long does it take to wrap a car?",
      answer: "A full wrap typically takes 3-5 days for a quality installation. Simple accent wraps can be done in a few hours to one day. Rush jobs often result in poor quality - avoid installers who promise a full wrap in one day."
    },
    {
      question: "Can you wash a wrapped car normally?",
      answer: "Hand washing with wrap-safe soap is best. Touchless car washes are generally okay, but avoid automatic washes with brushes. Never use abrasive products, and avoid pressure washing directly at wrap edges. Matte and satin wraps require special matte-specific products."
    },
    {
      question: "Does wrapping a car affect its resale value?",
      answer: "Generally, wrapping helps resale value because it preserves the original paint underneath. When you remove the wrap, the paint is often in excellent condition. However, a poorly done or damaged wrap might give a negative impression to potential buyers, so keep it maintained or remove before selling."
    },
    {
      question: "Can you wrap over scratches and dents?",
      answer: "Minor surface scratches can sometimes be hidden by a wrap, but dents, deep scratches, and major paint damage will show through the vinyl. Wraps conform to the surface underneath, so any texture or imperfection will be visible. Fix bodywork issues before wrapping."
    }
  ]
};

const wrapCities = [
  { name: "Miami", slug: "miami", state: "FL" },
  { name: "Orlando", slug: "orlando", state: "FL" },
  { name: "Tampa", slug: "tampa", state: "FL" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale", state: "FL" },
  { name: "Jacksonville", slug: "jacksonville", state: "FL" },
];

export default function VinylWrapsGuide() {
  const [activeSection, setActiveSection] = useState("what-are-wraps");
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
            <span className="text-[#e8edf5]">{vinylWrapsGuide.shortTitle}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{vinylWrapsGuide.icon}</span>
            <span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">
              {vinylWrapsGuide.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">
            {vinylWrapsGuide.title}
          </h1>

          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">
            {vinylWrapsGuide.description}
          </p>

          <div className="flex items-center gap-6 text-sm text-[#6b7a94]">
            <span>{vinylWrapsGuide.readTime}</span>
            <span>•</span>
            <span>Updated January 2026</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative px-6 pb-24">
        <div className="max-w-6xl mx-auto flex gap-12">
          
          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-medium text-[#6b7a94] uppercase tracking-wider mb-4">
                In this guide
              </h3>
              <nav className="space-y-1">
                {vinylWrapsGuide.sections.map((section) => (
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
                  Local Wrap Guides
                </h3>
                <div className="space-y-2">
                  {wrapCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/guides/vinyl-wraps/${city.slug}`}
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
                  <Link href="/guides/ceramic-coating-101" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">
                    ✨ Ceramic Coating 101
                  </Link>
                  <Link href="/guides/ppf-paint-protection-film" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">
                    🛡️ Paint Protection Film
                  </Link>
                  <Link href="/guides/car-detailing" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">
                    🧽 Car Detailing
                  </Link>
                  <Link href="/guides/window-tinting" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">
                    🔧 Window Tinting
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="max-w-3xl">
            {vinylWrapsGuide.sections.map((section) => (
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
                {vinylWrapsGuide.faqs.map((faq, idx) => (
                  <div key={idx} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"
                    >
                      <span className="font-medium text-[#e8edf5]">{faq.question}</span>
                      <span className={`text-[#4a90d9] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>↓</span>
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
              <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Stay Updated</h3>
              <p className="text-[#6b7a94] mb-6">Get notified when we publish new car care guides and tips.</p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-green-400">
                  <span>✓</span>
                  <span>Thanks! You&apos;ll hear from us soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="flex-1 px-4 py-3 rounded-lg bg-[#0d1424] border border-[#4a90d9]/20 text-[#e8edf5] placeholder-[#6b7a94] focus:outline-none focus:border-[#4a90d9]/50" />
                  <button type="submit" className="px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Subscribe</button>
                </form>
              )}
            </section>

            {/* CTA */}
            <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10">
              <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Wrap Shops Near You</h3>
              <p className="text-[#6b7a94] mb-6">Browse top-rated vinyl wrap installers in your area.</p>
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">
                Find Wrap Shops <span>→</span>
              </Link>
            </div>

            {/* Other Cities */}
            <div className="mt-12 pt-8 border-t border-[#4a90d9]/10">
              <h3 className="text-lg font-medium text-[#e8edf5] mb-4">Vinyl Wrap Guides for Florida Cities</h3>
              <div className="flex flex-wrap gap-3">
                {wrapCities.map((city) => (
                  <Link key={city.slug} href={`/guides/vinyl-wraps/${city.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">
                    {city.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

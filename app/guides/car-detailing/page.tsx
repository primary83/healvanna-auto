"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const carDetailingGuide = {
  slug: "car-detailing",
  title: "Car Detailing: The Complete Guide for 2026",
  shortTitle: "Car Detailing",
  description: "Everything you need to know about interior and exterior car detailing - costs, what's included, DIY vs professional, and how to keep your vehicle looking showroom-new.",
  icon: "🧽",
  category: "Car Care",
  readTime: "11 min read",
  sections: [
    {
      id: "what-is-detailing",
      title: "What is Car Detailing?",
      content: `Car detailing goes far beyond a standard car wash. It's a thorough, meticulous cleaning and reconditioning of both the interior and exterior of your vehicle, restoring it as close to showroom condition as possible.

A basic car wash removes surface dirt. Detailing, on the other hand, involves deep cleaning every surface, removing contaminants, correcting imperfections, and protecting materials to extend their life. Think of a car wash as brushing your teeth - detailing is the full dental cleaning.

Detailing typically covers two main areas: exterior (paint, glass, wheels, trim) and interior (seats, carpets, dashboard, headliner, door panels). Most professional detailers offer packages that combine both, though you can usually book them separately.`
    },
    {
      id: "exterior-detailing",
      title: "Exterior Detailing: What's Included?",
      content: `A professional exterior detail typically follows a multi-step process designed to clean, correct, and protect your paint and other exterior surfaces.

**Hand Wash & Decontamination**
The process starts with a thorough hand wash using pH-neutral soap, followed by decontamination. This includes clay bar treatment to remove embedded contaminants like industrial fallout, tree sap, and brake dust that regular washing can't remove. Your paint should feel glass-smooth after this step.

**Paint Correction (Polish)**
This is where the magic happens. Machine polishing removes swirl marks, light scratches, water spots, and oxidation. Paint correction comes in stages - a single-stage polish handles minor issues, while multi-stage correction tackles deeper defects. This step alone can make a tired-looking car look years younger.

**Protection (Wax, Sealant, or Coating)**
After correction, a protective layer is applied. Options range from traditional carnauba wax (warm glow, 1-3 months protection) to synthetic sealants (6-12 months) to ceramic coatings (2-7 years). Your detailer will recommend the best option for your needs and budget.

**Wheels & Tires**
Wheels are cleaned with dedicated wheel cleaners to remove brake dust and road grime. Tires are dressed with a protectant that restores their dark appearance and provides UV protection.

**Glass & Trim**
Exterior glass is cleaned and may receive a hydrophobic coating for rain repellency. Plastic and rubber trim is treated with UV protectant to prevent fading and cracking.`
    },
    {
      id: "interior-detailing",
      title: "Interior Detailing: What's Included?",
      content: `Interior detailing is where you'll notice the biggest day-to-day difference. A thorough interior detail addresses every surface inside your vehicle.

**Vacuuming & Steam Cleaning**
Every inch gets vacuumed - seats, carpets, floor mats, trunk, and crevices. A steamer is used to sanitize and deep-clean fabric surfaces, kill bacteria, and loosen stubborn stains. This also cleans air vents and hard-to-reach areas.

**Leather Care**
If your vehicle has leather seats, they're cleaned with a pH-balanced leather cleaner to remove oils, dirt, and dye transfer (like from jeans). Then a leather conditioner is applied to keep the material supple and prevent cracking. Neglected leather dries out and cracks - conditioning is essential, especially in Florida's heat.

**Fabric & Carpet Shampooing**
Cloth seats, carpets, and floor mats are shampooed and extracted using hot water extractors. This removes deep-set stains, odors, and allergens that vacuuming alone can't touch. For stubborn stains, specialized treatments are applied.

**Dashboard, Console & Panels**
All hard surfaces are cleaned and protected with a UV-resistant dressing. This prevents the drying, cracking, and fading that Florida sun causes. Most detailers use a matte finish that looks natural rather than the shiny "Armor All" look.

**Glass Cleaning**
Interior glass is cleaned to remove the film that builds up from off-gassing (that hazy layer on your windshield). Clean interior glass dramatically improves visibility, especially at night.

**Odor Elimination**
Professional detailers use ozone generators or specialized treatments to eliminate odors at the molecular level - not just mask them with air fresheners. This is particularly effective for smoke, pet, and food odors.`
    },
    {
      id: "detail-levels",
      title: "Detail Packages: Basic vs Full vs Premium",
      content: `Most detailing shops offer tiered packages. Here's what to expect at each level:

**Basic/Maintenance Detail ($100-$200)**
- Hand wash and dry
- Interior vacuum and wipe-down
- Window cleaning inside and out
- Tire dressing
- Basic dashboard protectant
- Best for: Regular maintenance every 1-2 months

**Full Detail ($200-$400)**
- Everything in basic, plus:
- Clay bar decontamination
- Single-stage polish
- Wax or sealant application
- Leather cleaning and conditioning
- Carpet and fabric shampooing
- Best for: Seasonal deep cleaning, 3-4 times per year

**Premium/Show Detail ($400-$800+)**
- Everything in full, plus:
- Multi-stage paint correction
- Ceramic coating or premium sealant
- Engine bay cleaning
- Headlight restoration
- Complete odor elimination
- Detailed attention to every crevice
- Best for: Annual treatment, pre-sale prep, or car show preparation

**Add-On Services:**
- Engine bay cleaning: $50-$100
- Headlight restoration: $50-$150
- Pet hair removal: $25-$75
- Scratch/scuff removal: $50-$200
- Ceramic coating: $500-$2,500 (separate from detail)`
    },
    {
      id: "cost",
      title: "How Much Does Car Detailing Cost?",
      content: `Detailing costs vary based on vehicle size, condition, and the package you choose. Here's what you can expect in Florida:

**By Vehicle Size:**
- Sedans/coupes: Base pricing
- Small SUVs/crossovers: +10-20%
- Large SUVs/trucks: +20-40%
- Vans/full-size SUVs: +30-50%

**Regional Pricing (Florida):**
- Miami/Fort Lauderdale: $150-$800+
- Orlando/Tampa: $125-$700+
- Jacksonville/smaller markets: $100-$600+

**Factors That Increase Cost:**
- Heavy pet hair or staining
- Smoker's vehicle
- Vehicles that haven't been detailed in years
- Specialty vehicles (exotics, classics)
- Severe paint damage requiring extensive correction

**How Often Should You Detail?**
- Maintenance wash: Every 1-2 weeks
- Basic detail: Every 1-2 months
- Full detail: Every 3-6 months
- Premium detail: Annually

**Pro Tip:** Regular maintenance detailing is far cheaper than letting your car go and then paying for a restoration detail. A $150 maintenance detail every 2 months beats a $600 deep clean once a year.`
    },
    {
      id: "diy-vs-pro",
      title: "DIY Detailing vs Professional: Which is Right for You?",
      content: `Both approaches have their place. Here's an honest comparison:

**DIY Detailing**
Pros:
- Save money on routine maintenance
- Work at your own pace
- Satisfying hobby for car enthusiasts
- Can maintain your car between professional details

Cons:
- Initial investment in quality products and tools ($200-$500)
- Learning curve - mistakes can damage paint
- Time-consuming (4-8 hours for a full detail)
- Won't achieve same results as professional equipment
- No access to industrial extractors, polishers, or ozone generators

**Professional Detailing**
Pros:
- Expert knowledge of products and techniques
- Professional-grade equipment and products
- Faster results with higher quality
- Can handle paint correction and specialized treatments
- Insurance against damage

Cons:
- Higher cost per session
- Need to schedule and drop off vehicle
- Quality varies between shops

**Best Approach:** Use professional detailing for deep cleans and paint correction, then maintain between visits with basic DIY washing and interior wipe-downs. This gives you the best of both worlds.`
    },
    {
      id: "choosing-detailer",
      title: "How to Choose a Professional Detailer",
      content: `Not all detailers are created equal. Here's what to look for:

**Check Their Work**
- Look at before/after photos on their website and social media
- Read Google reviews and Yelp reviews (look for detailed reviews, not just ratings)
- Ask for references from regular customers
- Visit the shop if possible to see their workspace

**Ask the Right Questions**
- What products do you use? (Quality shops use professional-grade products)
- What does your paint correction process look like?
- How long will the detail take? (If a "full detail" takes 2 hours, it's not a full detail)
- Do you offer any guarantees?
- Are you insured?

**Red Flags to Watch For:**
- Unrealistically low prices (quality products and time cost money)
- No portfolio or photos of their work
- Pressure to buy unnecessary add-ons
- Extremely fast turnaround times for full details
- No clear explanation of what's included
- Working outdoors in direct sunlight (paint correction should be done in controlled environments)

**Green Flags:**
- Dedicated indoor workspace with proper lighting
- Uses professional-grade products by name (Gyeon, CarPro, Gtechniq, etc.)
- Takes time to inspect your car before quoting
- Explains the process and sets expectations
- Active social media with consistent quality work
- Multiple years in business with loyal customer base`
    },
    {
      id: "florida-considerations",
      title: "Car Detailing in Florida: Special Considerations",
      content: `Florida's climate presents unique challenges that make regular detailing especially important:

**Sun Damage**
Florida's intense UV exposure causes paint oxidation, interior fading, and dashboard cracking faster than in northern states. Regular waxing or ceramic coating provides essential UV protection. Interior surfaces need UV-resistant protectants applied regularly.

**Salt Air & Coastal Corrosion**
If you're near the coast (and in Florida, most people are), salt air accelerates corrosion on metal surfaces and dulls paint. Frequent washing and keeping a strong wax or sealant barrier is critical.

**Love Bugs**
Florida's love bug seasons (May and September) are notorious for paint damage. Love bug remains are acidic and can etch paint if left for more than 24-48 hours. A good wax or ceramic coating makes removal much easier and prevents etching.

**Rain & Water Spots**
Florida's afternoon rain showers leave mineral deposits (water spots) on your paint, especially if your car sits in the sun after rain. These can etch into paint over time. A hydrophobic coating causes water to bead and roll off, minimizing spots.

**Mold & Mildew**
Florida's humidity creates perfect conditions for mold and mildew growth in interiors, especially in vehicles that aren't driven regularly or have damp carpets. Regular interior detailing with steam cleaning prevents this.

**Pollen Season**
Florida's extended pollen season coats vehicles in a yellow-green film that can damage paint if left too long. Regular washes and a protective coating make pollen removal effortless.`
    },
    {
      id: "maintenance-tips",
      title: "Maintaining Your Detail: Tips Between Visits",
      content: `Make your professional detail last longer with these maintenance habits:

**Weekly:**
- Quick rinse or touchless wash to remove surface dirt
- Wipe down interior surfaces with a microfiber cloth
- Clean interior glass if needed
- Remove any trash and personal items

**Bi-Weekly:**
- Proper hand wash with pH-neutral soap
- Clean wheels and tire dressing
- Quick interior vacuum
- Treat any new stains immediately

**Monthly:**
- Apply spray sealant or detail spray to exterior
- Condition leather seats
- Deep vacuum including under seats and crevices
- Clean door jambs and trunk area

**Essential Products to Keep On Hand:**
- pH-neutral car wash soap
- Microfiber towels (multiple)
- Quick detail spray
- Interior cleaner
- Leather conditioner (if applicable)
- Glass cleaner
- Tire dressing

**Golden Rules:**
- Never use dish soap (strips protection)
- Wash in the shade, never in direct sun
- Use the two-bucket method (one for soapy water, one for rinsing)
- Dry with clean microfiber towels or a blower
- Address bird droppings, tree sap, and love bugs immediately
- Park in shade or garage whenever possible`
    }
  ],
  faqs: [
    {
      question: "How long does a professional detail take?",
      answer: "A basic maintenance detail takes 2-3 hours. A full detail takes 4-6 hours. A premium detail with paint correction can take 1-3 days. Be wary of shops promising a 'full detail' in under 2 hours - quality work takes time."
    },
    {
      question: "How often should I get my car detailed?",
      answer: "For most Florida drivers, a maintenance detail every 1-2 months and a full detail every 6 months is ideal. If you have a ceramic coating, you can extend intervals. The key is consistency - regular maintenance is always cheaper than restoration."
    },
    {
      question: "Is detailing worth it for an older car?",
      answer: "Absolutely. Detailing can make a 10-year-old car look dramatically better and protects it from further deterioration. It's also one of the best investments before selling - a $300-$500 detail can add $1,000+ to your sale price."
    },
    {
      question: "Can detailing remove scratches?",
      answer: "Paint correction (machine polishing) can remove or significantly reduce swirl marks, light scratches, and water spots. Deep scratches that have gone through the clear coat into the base paint usually cannot be fully corrected and may need touch-up paint or repainting."
    },
    {
      question: "What's the difference between detailing and a car wash?",
      answer: "A car wash cleans the surface. Detailing is a comprehensive process that cleans, corrects, and protects every surface of your vehicle. It includes steps like clay bar treatment, paint correction, leather conditioning, and steam cleaning that no car wash provides."
    },
    {
      question: "Should I detail my car before applying ceramic coating?",
      answer: "Yes, and a reputable ceramic coating installer will include a full detail (especially paint correction) as part of the coating process. The paint must be in the best possible condition before coating, as the coating locks in whatever is underneath - good or bad."
    }
  ]
};

const detailingCities = [
  { name: "Miami", slug: "miami", state: "FL" },
  { name: "Orlando", slug: "orlando", state: "FL" },
  { name: "Tampa", slug: "tampa", state: "FL" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale", state: "FL" },
  { name: "Jacksonville", slug: "jacksonville", state: "FL" },
];

export default function CarDetailingGuide() {
  const [activeSection, setActiveSection] = useState("what-is-detailing");
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
            <span className="text-[#e8edf5]">{carDetailingGuide.shortTitle}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{carDetailingGuide.icon}</span>
            <span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">
              {carDetailingGuide.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">
            {carDetailingGuide.title}
          </h1>

          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">
            {carDetailingGuide.description}
          </p>

          <div className="flex items-center gap-6 text-sm text-[#6b7a94]">
            <span>{carDetailingGuide.readTime}</span>
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
                {carDetailingGuide.sections.map((section) => (
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
                  Local Detailing Guides
                </h3>
                <div className="space-y-2">
                  {detailingCities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/guides/car-detailing/${city.slug}`}
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
                    href="/guides/window-tinting"
                    className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all"
                  >
                    🔧 Window Tinting
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
            {carDetailingGuide.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-12 scroll-mt-24"
              >
                <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
                  {section.title}
                </h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  {section.content.split('\n\n').map((paragraph, idx) => {
                    if (paragraph.startsWith('|') && paragraph.includes('|')) {
                      const rows = paragraph.split('\n').filter(r => r.trim());
                      const headerRow = rows[0];
                      const dataRows = rows.slice(2);
                      const headers = headerRow.split('|').filter(h => h.trim());
                      
                      return (
                        <div key={idx} className="overflow-x-auto mb-6">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-[#4a90d9]/20">
                                {headers.map((header, hIdx) => (
                                  <th key={hIdx} className="py-3 px-4 text-left text-[#4a90d9] font-medium">
                                    {header.trim()}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {dataRows.map((row, rIdx) => (
                                <tr key={rIdx} className="border-b border-[#4a90d9]/10">
                                  {row.split('|').filter(c => c.trim()).map((cell, cIdx) => (
                                    <td key={cIdx} className="py-3 px-4 text-[#b8c4d9]">
                                      {cell.trim()}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                    
                    return (
                      <p key={idx} className="text-[#b8c4d9] leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </section>
            ))}

            {/* FAQ Section */}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {carDetailingGuide.faqs.map((faq, idx) => (
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
                Get notified when we publish new car care guides and tips.
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-green-400">
                  <span>✓</span>
                  <span>Thanks! You&apos;ll hear from us soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-[#0d1424] border border-[#4a90d9]/20 text-[#e8edf5] placeholder-[#6b7a94] focus:outline-none focus:border-[#4a90d9]/50"
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
            <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10">
              <h3 className="text-xl font-medium text-[#e8edf5] mb-2">
                Find Detailing Pros Near You
              </h3>
              <p className="text-[#6b7a94] mb-6">
                Browse top-rated detailing professionals in your area.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors"
              >
                Find Detailers
                <span>→</span>
              </Link>
            </div>

            {/* Other Cities */}
            <div className="mt-12 pt-8 border-t border-[#4a90d9]/10">
              <h3 className="text-lg font-medium text-[#e8edf5] mb-4">
                Car Detailing Guides for Florida Cities
              </h3>
              <div className="flex flex-wrap gap-3">
                {detailingCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/guides/car-detailing/${city.slug}`}
                    className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors"
                  >
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

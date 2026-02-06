"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const leatherGuide = {
  slug: "leather-upholstery-care",
  title: "Leather & Upholstery Care: The Complete Guide for 2026",
  shortTitle: "Leather & Upholstery Care",
  description: "Everything you need to know about caring for your vehicle's interior - leather conditioning, fabric cleaning, stain removal, and protecting your seats from Florida's heat and humidity.",
  icon: "🛋️",
  category: "Car Care",
  readTime: "11 min read",
  sections: [
    {
      id: "why-interior-care",
      title: "Why Interior Care Matters",
      content: `Your vehicle's interior takes more abuse than most people realize. You sit on it, spill on it, sweat on it, and expose it to temperature extremes every single day. In Florida, the punishment is even more severe - intense UV rays bake through windshields, humidity promotes mold and mildew, and the constant heat cycle of a parked car slowly degrades every interior surface.

Proper interior care isn't just about appearances. Cracked, dried-out leather is uncomfortable and reduces your vehicle's resale value by thousands. Stained fabric seats look neglected and can harbor bacteria and allergens. A well-maintained interior, on the other hand, feels luxurious to sit in, smells clean, and preserves your investment.

The good news is that interior care is one of the most accessible and affordable areas of vehicle maintenance. A basic leather care routine takes 30 minutes every few weeks, and the products cost a fraction of what you'd spend fixing neglected seats.`
    },
    {
      id: "leather-types",
      title: "Types of Automotive Leather & Materials",
      content: `Not all "leather" interiors are the same. Understanding what's in your vehicle helps you choose the right care products:

**Full-Grain Leather (Premium)**
The highest quality automotive leather. Made from the top layer of the hide with natural grain intact. Found in luxury vehicles like Mercedes, BMW, and Lexus upper trims.
- Feel: Soft, supple, develops a patina over time
- Care: Requires regular conditioning to prevent drying
- Durability: Very durable when maintained
- Cost to replace: Very expensive

**Corrected-Grain / Top-Grain Leather**
The most common automotive leather. The surface is sanded and a protective coating is applied. Found in most mid-range to upper vehicles.
- Feel: Smooth, uniform texture
- Care: Easier to clean than full-grain, still needs conditioning
- Durability: Good - the coating provides some protection
- Most factory leather seats fall into this category

**Bonded Leather / Leatherette**
A blend of leather fibers and synthetic materials. Used in some entry-level vehicles as a budget leather option.
- Feel: Similar to leather but less supple
- Care: Clean like leather but less conditioning needed
- Durability: Less durable than real leather, can peel over time

**Vinyl / Faux Leather (Synthetic)**
Completely synthetic material designed to look and feel like leather. Increasingly common and increasingly good quality (Tesla uses vegan leather, for example).
- Feel: Can range from cheap-feeling to nearly indistinguishable from real leather
- Care: Easy to clean, doesn't require conditioning
- Durability: Varies widely by quality

**Alcantara / Suede / Microfiber**
A synthetic microfiber material with a suede-like feel. Used for seat inserts, headliners, and steering wheels in sport and luxury vehicles.
- Feel: Soft, grippy, premium texture
- Care: Requires specific cleaning methods - no leather conditioner
- Durability: Good but can stain and mat down if neglected

**Fabric / Cloth**
Standard woven fabric seats. Found in most base-model vehicles.
- Feel: Ranges from basic to quite comfortable
- Care: Vacuum regularly, shampoo when stained, protect with fabric guard
- Durability: Good but prone to staining`
    },
    {
      id: "leather-care",
      title: "How to Care for Leather Seats",
      content: `A proper leather care routine keeps seats soft, clean, and crack-free for years:

**Step 1: Vacuum First**
Before any cleaning, vacuum the seats thoroughly. Use a soft brush attachment to get into seams, stitching, and between bolsters. This removes dirt and debris that would scratch the leather during cleaning.

**Step 2: Clean with Leather Cleaner**
Apply a dedicated leather cleaner (never all-purpose cleaners or household products) to a microfiber cloth or soft brush. Work in small sections using gentle circular motions. For perforated leather seats, be careful not to push liquid into the perforations.
- Wipe clean with a damp microfiber towel
- Do not oversaturate the leather
- For stubborn stains, let the cleaner sit for 30-60 seconds before agitating

**Step 3: Condition the Leather**
After cleaning and while the leather is still slightly damp, apply leather conditioner. This is the most important step - it replaces the natural oils that keep leather soft and prevents cracking.
- Apply a thin, even coat with a microfiber applicator
- Work into the leather using gentle circular motions
- Let it absorb for 5-10 minutes
- Buff off any excess with a clean microfiber towel
- In Florida, condition every 2-4 weeks (more often than northern climates)

**Step 4: Protect (Optional but Recommended)**
Some products combine conditioning with UV protection. In Florida, UV protection for leather is highly recommended to prevent fading and drying.

**Recommended Products:**
- Cleaners: Lexol Leather Cleaner, Chemical Guys Leather Cleaner, Leather Honey
- Conditioners: Lexol Leather Conditioner, Chemical Guys Leather Conditioner, 303 Leather Conditioner
- All-in-one: Leather Honey Complete, CarPro Inside

**How Often:**
- Quick wipe-down: Weekly
- Full clean + condition: Every 2-4 weeks in Florida (monthly in cooler climates)
- Deep clean: Every 3-6 months or as needed`
    },
    {
      id: "fabric-care",
      title: "How to Care for Fabric & Cloth Seats",
      content: `Fabric seats are easier to maintain than leather but more prone to staining:

**Regular Maintenance:**
- Vacuum weekly using a crevice tool for seams and a brush attachment for surfaces
- Address spills immediately - blot (don't rub) with a clean towel
- Apply fabric protector spray every 3-6 months to resist staining

**Deep Cleaning Fabric Seats:**

**Method 1: Fabric Cleaner Spray**
- Spray dedicated fabric cleaner on the stained area
- Agitate with a soft brush or microfiber towel
- Blot with a clean damp towel to lift dirt
- Allow to air dry completely before sitting
- Best for: Spot cleaning and light refreshing

**Method 2: Hot Water Extraction (Best Results)**
- Use a portable carpet/upholstery extractor (Bissell SpotClean, etc.)
- Spray cleaning solution and immediately extract
- Multiple passes for heavily soiled areas
- Best for: Deep cleaning entire seats, heavy staining

**Method 3: Steam Cleaning**
- Automotive steam cleaners sanitize and clean without chemicals
- Effective for both stains and odor removal
- Best for: Sanitizing, light to moderate cleaning, chemical-free approach

**Common Fabric Stain Solutions:**
- Coffee/soda: Blot immediately, use fabric cleaner, extract with water
- Grease/oil: Apply baking soda to absorb, then fabric cleaner
- Ink: Isopropyl alcohol on a cotton ball, blot gently
- Food: Scrape off solids, fabric cleaner, extract
- Water stains: Re-wet the entire area and blot dry evenly

**Fabric Protection:**
- Scotchgard or similar fabric protector creates an invisible barrier
- Apply to clean, dry fabric every 3-6 months
- Makes future spills bead up instead of soaking in
- Doesn't change the look or feel of the fabric`
    },
    {
      id: "common-problems",
      title: "Common Interior Problems & Solutions",
      content: `Here are the most frequent interior issues and how to handle them:

**Cracked Leather**
Caused by UV exposure and lack of conditioning. Once cracked, it can't be fully reversed, but you can improve appearance.
- Prevention: Regular conditioning (the #1 defense)
- Mild cracking: Heavy conditioning can soften and minimize appearance
- Severe cracking: Professional leather repair or reupholstering
- Cost to repair: $200-$500 per seat (professional)

**Faded Leather / Discoloration**
UV exposure causes leather color to fade, especially on seats near windows.
- Prevention: Window tinting, UV protectant conditioners, windshield sunshade
- Mild fading: Leather dye or color-restoring conditioner
- Severe fading: Professional leather re-dyeing ($200-$600 per seat)

**Mold & Mildew**
A major concern in Florida's humidity. Develops when moisture is trapped inside a closed vehicle.
- Prevention: Don't leave wet items in the car, use moisture absorbers, run AC regularly
- Treatment: White vinegar solution (1:1 with water), followed by thorough cleaning
- Severe cases: Professional interior cleaning with antimicrobial treatment
- Always address the moisture source, not just the visible mold

**Odors**
Caused by spills, moisture, smoking, pets, or general use over time.
- Step 1: Identify and remove the source
- Step 2: Deep clean the affected area
- Step 3: Use an enzymatic odor eliminator (not just air freshener)
- Step 4: Ozone treatment for severe odors (professional service, $50-$150)
- Avoid: Simply masking odors with sprays - they always come back

**Pet Hair**
One of the most frustrating interior cleaning challenges.
- Best tool: Rubber squeegee or rubber-bristle pet hair brush
- Lint rollers work for light hair
- Slightly dampened rubber gloves rubbed across fabric pull hair into clumps
- Prevention: Use seat covers or pet hammock covers for regular pet passengers

**Dye Transfer (Jeans on Leather)**
Dark denim commonly transfers blue dye to light-colored leather seats.
- Prevention: Leather protectant creates a barrier
- Treatment: Leather cleaner with gentle agitation - address quickly
- Stubborn cases: Magic eraser (very gently) or professional cleaning
- Extremely common on beige and tan leather seats`
    },
    {
      id: "cost",
      title: "Interior Care Costs: DIY vs Professional",
      content: `You can maintain your interior yourself or hire professionals - here's what to expect:

**DIY Products (One-Time Investment):**
- Leather cleaner: $10-$20
- Leather conditioner: $10-$25
- Microfiber towels (pack of 10): $10-$20
- Soft detailing brush: $5-$10
- Fabric cleaner: $8-$15
- Fabric protector spray: $10-$20
- Total starter kit: $50-$100 (lasts 6-12 months)

**Professional Interior Detailing:**
- Basic interior clean: $75-$150
- Full interior detail (clean, condition, protect): $150-$300
- Deep interior restoration: $300-$600
- Leather repair (per seat): $200-$500
- Leather re-dyeing (per seat): $200-$600
- Full interior reupholstering: $1,500-$5,000+
- Ozone odor treatment: $50-$150
- Mold remediation: $200-$500

**When to DIY vs Go Pro:**
- DIY: Regular maintenance cleaning and conditioning
- DIY: Light stain removal
- Professional: Deep stains you can't remove
- Professional: Leather repair or re-dyeing
- Professional: Mold remediation
- Professional: Severe odor issues
- Professional: Pre-sale detail for maximum resale value

**How Often to Get Professional Detailing:**
- Every 3-6 months for regular maintenance
- Annually for a thorough deep clean
- Before selling your vehicle (huge ROI on resale value)
- After any major spill, pet accident, or water intrusion`
    },
    {
      id: "protection",
      title: "Protecting Your Interior Long-Term",
      content: `Prevention is always cheaper than repair. Here are the best ways to protect your interior:

**Window Tinting**
The single most effective interior protection measure. Quality tint blocks 99% of UV rays that cause fading, cracking, and aging. Even a light tint on the windshield (where legal) provides significant protection.
- See our Window Tinting guide for details
- This one investment protects every interior surface simultaneously

**Sunshade / Windshield Cover**
A reflective windshield sunshade dramatically reduces interior temperatures when parked. In Florida, interior surfaces can reach 160°F+ in direct sun.
- Reduces interior temp by 30-40°F
- Costs $15-$40
- The best $20 you'll spend on interior protection

**Ceramic Coating for Interior**
Yes, ceramic coating works on interiors too. Applied to leather, vinyl, and plastic surfaces.
- Creates a hydrophobic, UV-resistant barrier
- Makes cleaning easier
- Protects against stains and dye transfer
- Lasts 1-2 years
- Cost: $100-$300 (professional application)

**Seat Covers**
Physical protection for seats. Ranges from basic to custom-fitted luxury covers.
- Basic universal: $30-$80
- Custom-fitted: $200-$600
- Best for: Daily drivers, families with kids, pet owners
- Consider neoprene covers in Florida - they handle moisture and heat well

**Floor Mats**
Quality all-weather floor mats protect carpet from dirt, water, and spills.
- WeatherTech, Husky, or Tuxmat custom-fit mats: $100-$250 for full set
- Far cheaper than replacing stained or damaged carpet
- Essential in Florida where rain and beach trips bring moisture

**Regular Maintenance Schedule (Florida):**
- Weekly: Quick vacuum and wipe-down
- Bi-weekly: Leather conditioning (Florida's heat demands more frequent conditioning)
- Monthly: Full interior clean
- Quarterly: Professional detail or thorough DIY deep clean
- Annually: Inspect for wear, address any leather repair needs`
    },
    {
      id: "florida-interior",
      title: "Interior Care in Florida: Special Considerations",
      content: `Florida's climate is uniquely harsh on vehicle interiors. Here's what to watch for:

**Extreme Heat**
Parked cars in Florida regularly reach 140-160°F interior temperatures in summer. This heat:
- Dries out and cracks leather at an accelerated rate
- Warps and fades plastic trim
- Can cause adhesives to fail (trim pieces, badges)
- Makes vinyl and leather surfaces burning hot to touch
- Mitigation: Window tint, sunshade, garage parking, regular conditioning

**UV Exposure**
Florida's UV index regularly reaches extreme levels. UV damage causes:
- Leather fading and discoloration
- Dashboard cracking
- Steering wheel deterioration
- Fabric color fading
- Mitigation: Window tint (most effective), UV protectant products, sunshade

**Humidity & Mold**
Florida's 70-90% humidity creates a constant mold risk inside vehicles. Mold thrives in:
- Cars left closed for extended periods
- Vehicles with wet carpet or upholstery
- AC systems that aren't run regularly
- Under seats and in trunk areas
- Mitigation: Run AC regularly, use moisture absorbers, address leaks immediately

**Sand & Beach Life**
Beach trips are part of Florida life, but sand is brutal on interiors:
- Sand grinds into leather and fabric, causing premature wear
- Saltwater-damp beach gear promotes mold
- Mitigation: Shake off before entering, use towel on seats, vacuum after beach trips

**Love Bugs & Insects**
Love bug residue on steering wheels and interior surfaces transferred from hands:
- Clean hands before driving during love bug season
- Quick interior wipes can prevent staining on steering wheel and shift knob`
    }
  ],
  faqs: [
    {
      question: "How often should I condition leather seats in Florida?",
      answer: "Every 2-4 weeks in Florida, compared to every 4-8 weeks in cooler climates. Florida's intense heat and UV exposure dry out leather much faster. If your leather ever feels dry or stiff to the touch, it's overdue for conditioning. Consistency is key - frequent light conditioning is better than occasional heavy conditioning."
    },
    {
      question: "Can I use household cleaners on my car's leather?",
      answer: "No. Household cleaners like Windex, Lysol, bleach, and all-purpose cleaners can strip leather's protective coating and dry it out. Always use products specifically designed for automotive leather. Even baby wipes, while gentle, can leave residue that damages leather over time."
    },
    {
      question: "How do I remove jean dye from leather seats?",
      answer: "Act quickly - fresh dye transfer is easier to remove. Apply leather cleaner and gently agitate with a soft brush. For stubborn stains, a magic eraser used very gently can help, but be careful not to damage the leather's coating. Regular leather protectant application helps prevent dye transfer in the first place."
    },
    {
      question: "What's the best way to prevent mold in my car in Florida?",
      answer: "Run your AC regularly (it dehumidifies the cabin), never leave wet items in the car, use moisture absorber bags under seats, and park in a garage when possible. If your car sits unused for days, crack a window slightly or use a solar-powered ventilation fan to promote air circulation."
    },
    {
      question: "Are seat covers worth it?",
      answer: "For daily drivers, families with kids, or pet owners, absolutely. Custom-fitted neoprene covers work great in Florida - they're waterproof, UV-resistant, and machine washable. They protect your original seats from wear, stains, and sun damage while being comfortable in Florida's heat."
    },
    {
      question: "How much does professional leather repair cost?",
      answer: "Minor repairs (small tears, scuffs, light cracking) run $150-$300 per area. Full seat re-dyeing costs $200-$600 per seat. Complete reupholstering runs $500-$1,500 per seat. For significant damage, get multiple quotes - prices vary widely. Professional repair is almost always cheaper than replacement."
    }
  ]
};

const leatherCities = [
  { name: "Miami", slug: "miami", state: "FL" },
  { name: "Orlando", slug: "orlando", state: "FL" },
  { name: "Tampa", slug: "tampa", state: "FL" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale", state: "FL" },
  { name: "Jacksonville", slug: "jacksonville", state: "FL" },
];

export default function LeatherUpholsteryCareGuide() {
  const [activeSection, setActiveSection] = useState("why-interior-care");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleSubscribe = (e: React.FormEvent) => { e.preventDefault(); setSubscribed(true); setEmail(""); };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />
      <section className="relative pt-32 pb-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(74,144,217,0.1)_0%,_transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><span className="text-[#e8edf5]">{leatherGuide.shortTitle}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">{leatherGuide.icon}</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{leatherGuide.category}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">{leatherGuide.title}</h1>
          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{leatherGuide.description}</p>
          <div className="flex items-center gap-6 text-sm text-[#6b7a94]"><span>{leatherGuide.readTime}</span><span>•</span><span>Updated January 2026</span></div>
        </div>
      </section>
      <section className="relative px-6 pb-24">
        <div className="max-w-6xl mx-auto flex gap-12">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-medium text-[#6b7a94] uppercase tracking-wider mb-4">In this guide</h3>
              <nav className="space-y-1">
                {leatherGuide.sections.map((section) => (<a key={section.id} href={`#${section.id}`} onClick={() => setActiveSection(section.id)} className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${activeSection === section.id ? "bg-[#4a90d9]/10 text-[#4a90d9] border-l-2 border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5] hover:bg-[#0d1424]"}`}>{section.title}</a>))}
                <a href="#faq" onClick={() => setActiveSection("faq")} className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${activeSection === "faq" ? "bg-[#4a90d9]/10 text-[#4a90d9] border-l-2 border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5] hover:bg-[#0d1424]"}`}>FAQ</a>
              </nav>
              <div className="mt-8 pt-8 border-t border-[#4a90d9]/10">
                <h3 className="text-sm font-medium text-[#e8edf5] mb-4 uppercase tracking-wider">Local Interior Guides</h3>
                <div className="space-y-2">{leatherCities.map((city) => (<Link key={city.slug} href={`/guides/leather-upholstery-care/${city.slug}`} className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">📍 {city.name}, {city.state}</Link>))}</div>
              </div>
              <div className="mt-8 pt-8 border-t border-[#4a90d9]/10">
                <h3 className="text-sm font-medium text-[#e8edf5] mb-4 uppercase tracking-wider">Related Guides</h3>
                <div className="space-y-2">
                  <Link href="/guides/car-detailing" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">🧽 Car Detailing</Link>
                  <Link href="/guides/window-tinting" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">🔧 Window Tinting</Link>
                  <Link href="/guides/ceramic-coating-101" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">✨ Ceramic Coating</Link>
                  <Link href="/guides/vinyl-wraps" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">🎨 Vinyl Wraps</Link>
                </div>
              </div>
            </div>
          </aside>
          <div className="max-w-3xl">
            {leatherGuide.sections.map((section) => (<section key={section.id} id={section.id} className="mb-12 scroll-mt-24"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{section.title}</h2><div className="prose prose-invert prose-lg max-w-none">{section.content.split('\n\n').map((paragraph, idx) => (<p key={idx} className="text-[#b8c4d9] leading-relaxed mb-4">{paragraph}</p>))}</div></section>))}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">{leatherGuide.faqs.map((faq, idx) => (<div key={idx} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{faq.question}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === idx && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{faq.answer}</p></div>)}</div>))}</div>
            </section>
            <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#4a90d9]/10 to-transparent border border-[#4a90d9]/20">
              <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Stay Updated</h3>
              <p className="text-[#6b7a94] mb-6">Get notified when we publish new car care guides and tips.</p>
              {subscribed ? (<div className="flex items-center gap-2 text-green-400"><span>✓</span><span>Thanks! You&apos;ll hear from us soon.</span></div>) : (<form onSubmit={handleSubscribe} className="flex gap-3"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="flex-1 px-4 py-3 rounded-lg bg-[#0d1424] border border-[#4a90d9]/20 text-[#e8edf5] placeholder-[#6b7a94] focus:outline-none focus:border-[#4a90d9]/50" /><button type="submit" className="px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Subscribe</button></form>)}
            </section>
            <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10">
              <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Interior Care Specialists Near You</h3>
              <p className="text-[#6b7a94] mb-6">Browse top-rated interior detailing and upholstery specialists in your area.</p>
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link>
            </div>
            <div className="mt-12 pt-8 border-t border-[#4a90d9]/10">
              <h3 className="text-lg font-medium text-[#e8edf5] mb-4">Interior Care Guides for Florida Cities</h3>
              <div className="flex flex-wrap gap-3">{leatherCities.map((city) => (<Link key={city.slug} href={`/guides/leather-upholstery-care/${city.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{city.name}</Link>))}</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

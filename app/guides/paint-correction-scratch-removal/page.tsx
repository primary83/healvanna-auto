"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const paintCorrectionGuide = {
  slug: "paint-correction-scratch-removal",
  title: "Paint Correction & Scratch Removal: The Complete Guide for 2026",
  shortTitle: "Paint Correction & Scratch Removal",
  description: "Everything you need to know about restoring your vehicle's paint - swirl marks, scratches, oxidation, water spots, and how professional paint correction brings back that showroom shine.",
  icon: "✨",
  category: "Car Care",
  readTime: "12 min read",
  sections: [
    {
      id: "what-is-paint-correction",
      title: "What is Paint Correction?",
      content: `Paint correction is the process of permanently removing imperfections from your vehicle's clear coat through machine polishing. Unlike waxing or glazing, which temporarily mask defects, paint correction physically levels the clear coat to eliminate scratches, swirl marks, water spots, and oxidation.

Think of your clear coat like a hardwood floor. Over time, foot traffic creates scratches and dullness. You can put a coat of wax on it to make it look shiny temporarily, but the scratches are still there underneath. Sanding and refinishing the floor (paint correction) actually removes the scratches, restoring the surface to its original smooth, reflective state.

The result is dramatic. A properly corrected vehicle has mirror-like reflections, incredible depth of color, and a glass-smooth finish that looks better than new. It's the foundation that makes ceramic coatings and PPF perform their best, and it's the single most visually impactful thing you can do for your vehicle's appearance.`
    },
    {
      id: "paint-defects",
      title: "Common Paint Defects Explained",
      content: `Understanding what's wrong with your paint helps you communicate with detailers and set realistic expectations:

**Swirl Marks**
The most common paint defect. Fine circular scratches caused by improper washing (automatic car washes, dirty wash mitts, circular wiping). They appear as a spiderweb pattern under direct light.
- Severity: Light to moderate
- Correction: Single-stage polish usually removes them
- Prevention: Proper hand washing technique, touchless car washes only

**Light Scratches (Clear Coat Scratches)**
Surface scratches that haven't penetrated through the clear coat. You can feel them with your fingernail but they appear white rather than showing the color underneath.
- Severity: Light to moderate
- Correction: Compound and polish (1-2 stage correction)
- If your fingernail catches but the scratch is white/clear, it's correctable

**Deep Scratches (Through Clear Coat)**
Scratches that penetrate into the base coat or primer. You can see the car's base color or a white/gray primer layer in the scratch.
- Severity: Severe - cannot be fully corrected by polishing alone
- Correction: Touch-up paint, wet sanding by a professional, or repaint
- Paint correction can improve the appearance but not fully eliminate these

**Water Spots / Mineral Deposits**
White etched marks from water droplets drying on the paint. Minerals in the water bond to the clear coat and can etch into it if left too long.
- Severity: Light to severe (depending on how long they sat)
- Correction: Chemical treatment first, then polish if etching occurred
- Extremely common in Florida due to hard water and frequent rain

**Oxidation**
A chalky, faded appearance caused by UV damage breaking down the clear coat. The paint looks dull, flat, and sometimes white or hazy.
- Severity: Moderate to severe
- Correction: Heavy compound, possibly wet sanding for severe cases
- Very common on Florida vehicles, especially red and black paint
- If the clear coat is completely failed (peeling), correction won't help - repaint needed

**Orange Peel**
A textured surface that looks like the skin of an orange. Actually applied at the factory on most vehicles.
- Severity: Cosmetic (not damage)
- Correction: Wet sanding followed by polishing (advanced procedure)
- Most people don't notice it, but removing it creates incredible glass-like reflections

**Bird Droppings & Bug Etching**
Acidic bird droppings and bug splatter chemically etch into clear coat if not removed promptly. Leave permanent marks.
- Severity: Light to moderate
- Correction: Chemical treatment, then polishing
- In Florida, love bugs and bird droppings are the most common cause of etching`
    },
    {
      id: "correction-levels",
      title: "Levels of Paint Correction",
      content: `Professional detailers typically offer different levels of correction based on your needs and budget:

**Enhancement Polish / One-Stage Correction**
A single polishing step that removes 50-70% of light defects. The most popular service for daily drivers.
- Removes: Light swirl marks, light water spots, minor haze
- Doesn't remove: Deep scratches, heavy oxidation, severe etching
- Time: 3-6 hours
- Cost: $200-$500
- Best for: Well-maintained vehicles needing a refresh, pre-ceramic coating prep

**Two-Stage Correction**
A compounding step followed by a polishing step. Removes 80-90% of defects. The sweet spot for most vehicles.
- Removes: Moderate swirl marks, light scratches, water spot etching, light oxidation
- Doesn't remove: Deep scratches into base coat, severe clear coat failure
- Time: 6-12 hours
- Cost: $400-$800
- Best for: Vehicles with visible swirl marks and scratches, used car restoration

**Multi-Stage / Full Correction**
Three or more stages of compounding and polishing to achieve maximum defect removal (95%+). The gold standard.
- Removes: Nearly all correctable defects
- Doesn't remove: Scratches through clear coat, clear coat failure
- Time: 12-20+ hours
- Cost: $800-$2,000+
- Best for: Show cars, new vehicle protection prep, severe paint condition

**Wet Sanding + Correction**
The most aggressive approach. Wet sanding levels the clear coat before machine polishing. Can remove orange peel and severe defects.
- Removes: Orange peel, severe oxidation, deep clear coat scratches
- Risk: Highest clear coat removal - must be done by experienced professionals
- Time: 15-30+ hours
- Cost: $1,500-$3,000+
- Best for: Show cars, concours preparation, severely neglected paint`
    },
    {
      id: "diy-vs-pro",
      title: "DIY vs Professional Paint Correction",
      content: `Paint correction ranges from beginner-friendly to expert-only:

**What You Can Do Yourself:**

**Hand Polishing (Beginner)**
Using a cleaner polish by hand to remove very light haze and add gloss.
- Results: Minimal correction, mostly cosmetic improvement
- Risk: Very low - you can't really damage paint by hand
- Cost: $20-$40 for products
- Time: 1-2 hours

**Dual-Action (DA) Polisher (Intermediate)**
A random orbital polisher is safe for beginners and can achieve real correction.
- Results: Can remove light to moderate swirl marks effectively
- Risk: Low - the random orbit prevents burning through paint
- Cost: $100-$200 for polisher + $30-$60 for pads and polish
- Time: 4-8 hours for full vehicle
- Recommended polishers: Griots G9, Harbor Freight DA, Rupes LHR15

**What Professionals Should Do:**

**Rotary Polishing (Expert)**
Rotary polishers spin in a single direction, generating more cut and heat. Faster correction but higher risk of burning through clear coat.
- Only for experienced professionals
- Required for heavy correction and wet sanding

**Wet Sanding (Expert Only)**
Physically sanding the clear coat with fine-grit sandpaper before polishing.
- Extremely effective but permanently removes clear coat
- One mistake can require a respray
- Only trust experienced correction specialists

**When to Go Professional:**
- Deep scratches or heavy swirl marks
- Oxidation or faded paint
- Pre-ceramic coating or PPF preparation
- You want showroom-perfect results
- Vehicle has dark paint (shows every imperfection)
- You're not confident with a machine polisher

**When DIY Makes Sense:**
- Light swirl removal on a daily driver
- Maintaining previously corrected paint
- Budget is tight but you have time
- You enjoy detailing as a hobby
- Vehicle has light-colored paint (more forgiving)`
    },
    {
      id: "cost",
      title: "How Much Does Paint Correction Cost?",
      content: `Pricing varies based on vehicle size, paint condition, and correction level:

**By Correction Level:**
- Enhancement polish (1-stage): $200-$500
- Two-stage correction: $400-$800
- Multi-stage correction: $800-$2,000+
- Wet sanding + correction: $1,500-$3,000+

**By Vehicle Size:**
- Compact cars: Base pricing
- Mid-size sedans: +10-15%
- SUVs/Trucks: +20-40%
- Large SUVs/Full-size trucks: +30-50%
- Exotic/specialty vehicles: +50-100%

**Regional Pricing (Florida):**
- Miami/Fort Lauderdale: $300-$2,500 (premium market)
- Orlando/Tampa: $250-$1,800 (competitive pricing)
- Jacksonville: $200-$1,500 (best value)

**What's Included:**
A quality paint correction service should include:
- Thorough wash and decontamination (clay bar or chemical decontamination)
- Paint depth readings (to ensure safe correction)
- Machine polishing at the agreed correction level
- Panel-by-panel inspection under correction lights
- IPA wipe-down (reveals true correction without fillers)
- Optional: Sealant, wax, or ceramic coating application

**Common Add-Ons:**
- Ceramic coating after correction: $300-$1,500+ (highly recommended)
- PPF after correction: $500-$5,000+ (ultimate protection)
- Engine bay detail: $50-$150
- Headlight restoration: $50-$150

**The Value Proposition:**
Paint correction + ceramic coating ($600-$2,000 combined) protects your paint for 2-5 years, maintains resale value, and makes washing dramatically easier. Compare that to repainting ($3,000-$10,000+), and correction is a bargain.`
    },
    {
      id: "choosing-detailer",
      title: "How to Choose a Paint Correction Specialist",
      content: `Paint correction is a skill-intensive service. The difference between a good and bad correction specialist is enormous:

**What to Look For:**

**Portfolio & Before/After Photos**
- Request photos taken under proper lighting (LED panel or direct sunlight)
- Look for close-up 50/50 shots (half corrected, half uncorrected)
- Be skeptical of photos that only show the final result without the "before"
- Check if they photograph under correction-specific lighting, not just ambient light

**Paint Depth Gauge Usage**
- A professional should measure your clear coat thickness before starting
- This ensures they don't remove too much material
- If a shop doesn't mention paint depth readings, ask about their process

**Process & Products**
- They should explain their process: wash, decontaminate, correct, protect
- Ask what compounds, polishes, and pads they use
- Quality products: Menzerna, Sonax, Rupes, Lake Country, Koch Chemie
- They should do an IPA (isopropyl alcohol) wipe-down to verify results

**Facility**
- Indoor, well-lit workspace with correction lighting
- Clean environment (dust is the enemy of paint correction)
- Proper lighting to inspect work (LED panels, halogen floods)

**Red Flags:**
- No before/after portfolio
- Quoting without seeing the vehicle
- Promising to remove scratches that go through clear coat
- Very low pricing (quality correction takes time - cheap = rushed)
- Working outdoors or in poor lighting
- No paint depth measurements
- Using terms like "buff out" instead of proper correction terminology

**Green Flags:**
- IDA (International Detailing Association) membership
- Extensive portfolio under proper lighting
- Paint depth gauge in their toolkit
- Clear explanation of realistic expectations
- Written estimate after vehicle inspection
- Ceramic coating certified (Gtechniq, Ceramic Pro, IGL, etc.)`
    },
    {
      id: "maintenance",
      title: "Maintaining Corrected Paint",
      content: `After investing in paint correction, proper maintenance keeps your paint looking perfect:

**Protect After Correction**
The single most important step. Naked corrected paint will re-scratch quickly without protection.
- Best: Ceramic coating (2-5+ years of protection)
- Good: Paint sealant (6-12 months of protection)
- Basic: Quality carnauba wax (1-3 months of protection)
- Never leave corrected paint unprotected

**Proper Washing Technique:**
- Two-bucket method (one wash, one rinse) with grit guards
- Use quality microfiber wash mitts (not sponges)
- Pre-rinse to remove loose dirt before contact washing
- Wash from top down
- Use pH-neutral car wash soap
- Dry with clean, high-quality microfiber drying towels or a filtered blower
- Never use automatic car washes with brushes

**Products to Use:**
- pH-neutral wash soap (no dish soap)
- Quality microfiber towels (300+ GSM)
- Spray sealant or ceramic boost spray as a drying aid
- Dedicated wheel cleaner (keep wheel chemicals off paint)

**Products to Avoid:**
- Dish soap (strips protection)
- Abrasive cleaners or compounds (save for intentional correction)
- All-in-one products with "cut" (they re-introduce micro-scratches)
- Cheap microfiber towels (low quality fibers scratch paint)
- Automatic car washes with brushes (the #1 cause of swirl marks)

**Maintenance Schedule:**
- Weekly: Proper hand wash
- Monthly: Decontamination spray if needed
- Every 3-6 months: Apply spray sealant or ceramic boost
- Annually: Professional inspection, touch-up correction if needed
- Every 2-5 years: Re-apply ceramic coating`
    },
    {
      id: "florida-paint",
      title: "Paint Correction in Florida: Special Considerations",
      content: `Florida is one of the hardest states on automotive paint. Here's why correction is especially important here:

**UV Damage & Oxidation**
Florida's intense UV exposure causes paint to oxidize faster than almost anywhere else. Red, black, and dark blue paints are most susceptible. Regular correction and UV-protective coatings are essential.

**Water Spot Etching**
Florida's hard water combined with daily afternoon thunderstorms creates constant water spot risk. Sprinkler systems are equally problematic. Water spots that sit in Florida's sun quickly etch into clear coat, requiring correction to remove.

**Love Bug Damage**
Florida's love bug seasons (May and September) are a paint correction specialist's busy season. Love bug acids etch into clear coat within 24-48 hours, leaving permanent marks that require polishing to remove.

**Bird Droppings**
Florida's bird population leaves acidic droppings that etch paint rapidly in the heat. A dropping that might sit harmlessly for a week in cooler climates can etch in hours under Florida sun.

**Automatic Car Washes**
Many Floridians use automatic car washes frequently due to daily driving and frequent rain. These are the #1 cause of swirl marks. Educating yourself on proper washing is the best prevention.

**Salt Air Corrosion**
Coastal Florida vehicles face salt air that can affect clear coat longevity, especially around chips and scratches where salt reaches bare metal.

**The Florida Paint Care Path:**
1. Paint correction to restore the surface
2. Ceramic coating for UV protection, hydrophobic properties, and ease of cleaning
3. Proper washing technique to maintain the correction
4. Window tinting to reduce UV exposure on interior paint-adjacent surfaces
5. Annual inspection to catch issues early`
    }
  ],
  faqs: [
    {
      question: "How long does paint correction last?",
      answer: "The correction itself is permanent - those scratches are gone. However, new scratches will accumulate over time from washing, driving, and environmental exposure. With a ceramic coating and proper washing technique, corrected paint can look great for 2-5+ years before needing touch-up correction."
    },
    {
      question: "Can paint correction remove deep scratches?",
      answer: "Only if the scratch is in the clear coat. If you can see bare metal, primer, or base color in the scratch, it's gone through the clear coat and can't be fully removed by polishing. A professional can improve the appearance, but full removal requires touch-up paint or repainting."
    },
    {
      question: "Will paint correction damage my paint?",
      answer: "Done correctly, no. Paint correction removes a very thin layer of clear coat (typically 1-3 microns per stage out of a total 40-80+ microns). A professional uses a paint depth gauge to ensure safe removal. However, repeated aggressive correction over many years could thin the clear coat, which is why protection after correction is essential."
    },
    {
      question: "Should I get paint correction before ceramic coating?",
      answer: "Yes, absolutely. Ceramic coating locks in whatever is underneath it - including scratches and swirl marks. Correcting the paint first ensures the coating seals over a flawless surface. Most ceramic coating installers include at least a one-stage correction in their preparation process."
    },
    {
      question: "How often should I get paint correction?",
      answer: "With a ceramic coating and proper maintenance, most vehicles only need correction every 3-5 years. Without protection, heavily driven Florida vehicles may benefit from an annual enhancement polish. The goal is to minimize the need for correction through proper washing and protection."
    },
    {
      question: "Can I do paint correction myself?",
      answer: "Yes, with the right tools and patience. A dual-action polisher ($100-$200) is safe for beginners and effective for light to moderate correction. Start with a less aggressive polish and pad combination, practice on a less visible panel, and watch instructional videos. For heavy correction or dark-colored vehicles, consider professional help."
    }
  ]
};

const correctionCities = [
  { name: "Miami", slug: "miami", state: "FL" },
  { name: "Orlando", slug: "orlando", state: "FL" },
  { name: "Tampa", slug: "tampa", state: "FL" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale", state: "FL" },
  { name: "Jacksonville", slug: "jacksonville", state: "FL" },
];

export default function PaintCorrectionGuide() {
  const [activeSection, setActiveSection] = useState("what-is-paint-correction");
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
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><span className="text-[#e8edf5]">{paintCorrectionGuide.shortTitle}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">{paintCorrectionGuide.icon}</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{paintCorrectionGuide.category}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">{paintCorrectionGuide.title}</h1>
          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{paintCorrectionGuide.description}</p>
          <div className="flex items-center gap-6 text-sm text-[#6b7a94]"><span>{paintCorrectionGuide.readTime}</span><span>•</span><span>Updated January 2026</span></div>
        </div>
      </section>
      <section className="relative px-6 pb-24">
        <div className="max-w-6xl mx-auto flex gap-12">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-medium text-[#6b7a94] uppercase tracking-wider mb-4">In this guide</h3>
              <nav className="space-y-1">
                {paintCorrectionGuide.sections.map((s) => (<a key={s.id} href={`#${s.id}`} onClick={() => setActiveSection(s.id)} className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${activeSection === s.id ? "bg-[#4a90d9]/10 text-[#4a90d9] border-l-2 border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5] hover:bg-[#0d1424]"}`}>{s.title}</a>))}
                <a href="#faq" onClick={() => setActiveSection("faq")} className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${activeSection === "faq" ? "bg-[#4a90d9]/10 text-[#4a90d9] border-l-2 border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5] hover:bg-[#0d1424]"}`}>FAQ</a>
              </nav>
              <div className="mt-8 pt-8 border-t border-[#4a90d9]/10">
                <h3 className="text-sm font-medium text-[#e8edf5] mb-4 uppercase tracking-wider">Local Correction Guides</h3>
                <div className="space-y-2">{correctionCities.map((city) => (<Link key={city.slug} href={`/guides/paint-correction-scratch-removal/${city.slug}`} className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">📍 {city.name}, {city.state}</Link>))}</div>
              </div>
              <div className="mt-8 pt-8 border-t border-[#4a90d9]/10">
                <h3 className="text-sm font-medium text-[#e8edf5] mb-4 uppercase tracking-wider">Related Guides</h3>
                <div className="space-y-2">
                  <Link href="/guides/ceramic-coating-101" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">✨ Ceramic Coating</Link>
                  <Link href="/guides/ppf-paint-protection-film" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">🛡️ Paint Protection Film</Link>
                  <Link href="/guides/car-detailing" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">🧽 Car Detailing</Link>
                  <Link href="/guides/vinyl-wraps" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">🎨 Vinyl Wraps</Link>
                </div>
              </div>
            </div>
          </aside>
          <div className="max-w-3xl">
            {paintCorrectionGuide.sections.map((s) => (<section key={s.id} id={s.id} className="mb-12 scroll-mt-24"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{s.title}</h2><div className="prose prose-invert prose-lg max-w-none">{s.content.split('\n\n').map((p, i) => (<p key={i} className="text-[#b8c4d9] leading-relaxed mb-4">{p}</p>))}</div></section>))}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">{paintCorrectionGuide.faqs.map((faq, idx) => (<div key={idx} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{faq.question}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === idx && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{faq.answer}</p></div>)}</div>))}</div>
            </section>
            <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#4a90d9]/10 to-transparent border border-[#4a90d9]/20">
              <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Stay Updated</h3>
              <p className="text-[#6b7a94] mb-6">Get notified when we publish new car care guides and tips.</p>
              {subscribed ? (<div className="flex items-center gap-2 text-green-400"><span>✓</span><span>Thanks! You&apos;ll hear from us soon.</span></div>) : (<form onSubmit={handleSubscribe} className="flex gap-3"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="flex-1 px-4 py-3 rounded-lg bg-[#0d1424] border border-[#4a90d9]/20 text-[#e8edf5] placeholder-[#6b7a94] focus:outline-none focus:border-[#4a90d9]/50" /><button type="submit" className="px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Subscribe</button></form>)}
            </section>
            <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10">
              <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Paint Correction Specialists Near You</h3>
              <p className="text-[#6b7a94] mb-6">Browse top-rated paint correction and detailing specialists in your area.</p>
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link>
            </div>
            <div className="mt-12 pt-8 border-t border-[#4a90d9]/10">
              <h3 className="text-lg font-medium text-[#e8edf5] mb-4">Paint Correction Guides for Florida Cities</h3>
              <div className="flex flex-wrap gap-3">{correctionCities.map((city) => (<Link key={city.slug} href={`/guides/paint-correction-scratch-removal/${city.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{city.name}</Link>))}</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

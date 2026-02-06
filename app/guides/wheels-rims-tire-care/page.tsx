"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const wheelsGuide = {
  slug: "wheels-rims-tire-care",
  title: "Wheels, Rims & Tire Care: The Complete Guide for 2026",
  shortTitle: "Wheels, Rims & Tire Care",
  description: "Everything you need to know about wheel upgrades, rim styles, tire selection, and proper maintenance to keep your wheels looking and performing their best.",
  icon: "🛞",
  category: "Car Care",
  readTime: "12 min read",
  sections: [
    {
      id: "why-wheels-matter",
      title: "Why Wheels Matter More Than You Think",
      content: `Wheels are the single most transformative visual upgrade you can make to any vehicle. Swapping wheels changes the entire character of a car - from sporty to elegant, aggressive to refined - in a way that no other modification can match.

But wheels aren't just about looks. They directly affect your vehicle's ride quality, handling, braking performance, fuel efficiency, and even road noise. The right wheel and tire combination can improve every aspect of your driving experience, while the wrong one can compromise safety and comfort.

Whether you're upgrading to aftermarket wheels for style, maintaining your factory wheels, or simply making sure your tires are in top condition, understanding the fundamentals helps you make smarter decisions and avoid costly mistakes.`
    },
    {
      id: "wheel-types",
      title: "Wheel Types & Materials",
      content: `Not all wheels are created equal. The material and construction method significantly impact weight, strength, appearance, and price:

**Cast Aluminum (Most Common)**
Molten aluminum poured into a mold. The most affordable and widely available option.
- Weight: Moderate
- Strength: Good for daily driving
- Price: $100-$300 per wheel
- Best for: Daily drivers, budget upgrades
- Pros: Affordable, huge variety of styles, easy to repair
- Cons: Heavier than forged, can crack on severe impacts

**Flow-Formed / Rotary-Forged**
Cast wheel that's spun under pressure while hot, compressing the barrel for added strength. The sweet spot of performance and value.
- Weight: 15-25% lighter than standard cast
- Strength: Significantly stronger than cast
- Price: $200-$500 per wheel
- Best for: Enthusiasts, sporty drivers, anyone wanting better performance
- Pros: Lighter, stronger, good value for the performance gain
- Cons: More expensive than cast, fewer budget options

**Fully Forged**
Machined from a single block of aluminum under extreme pressure. The premium choice.
- Weight: Lightest option (30-40% lighter than cast)
- Strength: Strongest - bends rather than cracks on impact
- Price: $500-$3,000+ per wheel
- Best for: Performance vehicles, luxury/exotic cars, serious enthusiasts
- Pros: Lightest, strongest, best performance, prestige brands
- Cons: Expensive, longer lead times for custom orders

**Carbon Fiber**
The cutting edge of wheel technology. Extremely light but extremely expensive.
- Weight: Lightest possible (up to 50% lighter than cast)
- Price: $2,000-$5,000+ per wheel
- Best for: Track cars, hypercars, weight-obsessed builds
- Currently more of a motorsport and exotic car option

**Steel Wheels**
Stamped steel construction. Durable and cheap but heavy.
- Weight: Heaviest option
- Price: $50-$100 per wheel
- Best for: Winter tire sets, spare wheels, work trucks
- Pros: Very durable, cheapest option, easy to repair
- Cons: Heavy, limited styles, usually covered with hubcaps`
    },
    {
      id: "sizing",
      title: "Understanding Wheel Sizes & Fitment",
      content: `Wheel sizing can seem complicated, but understanding the basics prevents expensive mistakes:

**Key Measurements:**

**Diameter** (e.g., 18 inches)
The overall size of the wheel from edge to edge. Larger diameters generally look more aggressive but can affect ride comfort.
- Stock sizes typically range from 15" to 20"
- Upsizing 1-2 inches from stock is the sweet spot for looks without sacrificing ride quality
- Going too large reduces tire sidewall, making the ride harsher and wheels more vulnerable to pothole damage

**Width** (e.g., 8.5 inches)
How wide the wheel is from lip to lip. Wider wheels accommodate wider tires for better grip.
- Must match your tire width range
- Wider isn't always better - too wide can cause rubbing on fenders or suspension components

**Offset** (e.g., +35mm)
How far the wheel's mounting surface sits from the centerline. This determines how far the wheel sticks out (or tucks in) relative to the fender.
- Positive offset: Wheel sits more inward (most front-wheel-drive cars)
- Zero offset: Mounting surface at centerline
- Negative offset: Wheel sits more outward (aggressive, flush look)
- Incorrect offset causes rubbing, poor handling, and accelerated bearing wear

**Bolt Pattern** (e.g., 5x114.3)
The number of bolts and the diameter of the circle they form. Must match your vehicle exactly.
- Common patterns: 5x114.3, 5x120, 5x112, 5x100
- Some adapters exist but are generally not recommended for daily driving

**Hub Bore** (e.g., 73.1mm)
The center hole diameter. Must match your vehicle's hub or use hub-centric rings to fill the gap.
- Always use hub-centric rings if the wheel bore is larger than your hub
- Running without them causes vibration at highway speeds

**Pro Tip:** Always confirm fitment with your wheel retailer before purchasing. Provide your year, make, model, and any suspension modifications. A reputable shop will verify all measurements.`
    },
    {
      id: "popular-styles",
      title: "Popular Wheel Styles & Trends",
      content: `Wheel styles go through trends, but some designs remain timeless:

**Mesh / Multi-Spoke**
Classic design with many thin spokes radiating from the center. Looks great on everything from sedans to SUVs. Easy to clean and timeless in appearance.

**Split-Spoke / Y-Spoke**
Spokes that split into two or form Y shapes. Sporty and modern. Popular on performance vehicles and sport sedans.

**Deep Dish / Concave**
Wheels with a dramatic concave face that creates depth and shadow. The most aggressive look available. Best on vehicles with proper offset and wide fenders.

**Monoblock**
Single-piece wheels with a clean, unified design. The most common construction for both affordable and premium wheels.

**Multi-Piece (2-piece or 3-piece)**
Wheels assembled from separate barrel and face components. Allow for custom width, offset, and finish combinations. Premium pricing but maximum customization.

**Classic 5-Spoke**
Simple, clean five-spoke design. Looks good on virtually anything and is easy to keep clean. A safe choice that never goes out of style.

**Current Trends (2025-2026):**
- Satin and matte finishes over chrome
- Bronze and gold tones gaining popularity
- Larger diameters (19-21") on sedans and SUVs
- Flow-formed wheels as the value sweet spot
- Gloss black remaining the #1 aftermarket color
- OEM+ style (upgraded wheels that look factory-appropriate)`
    },
    {
      id: "tire-basics",
      title: "Tire Basics: What You Need to Know",
      content: `Your tires are the only part of your car that touches the road. They deserve serious attention:

**Reading Tire Sizes (e.g., 245/40R18)**
- 245: Tire width in millimeters
- 40: Aspect ratio (sidewall height as percentage of width)
- R: Radial construction
- 18: Wheel diameter in inches

**Tire Categories:**

**All-Season Tires**
The default choice for most drivers. Good in dry, wet, and light winter conditions.
- Best for: Daily driving in Florida
- Treadlife: 40,000-80,000 miles
- Brands: Michelin Defender, Continental DWS, Bridgestone Turanza

**Performance All-Season**
Better grip and handling than standard all-season with reasonable treadlife.
- Best for: Sport sedans, enthusiast daily drivers
- Treadlife: 30,000-60,000 miles
- Brands: Michelin Pilot Sport All Season 4, Continental ExtremeContact DWS06+

**Summer / Max Performance**
Maximum dry and wet grip. Not for cold temperatures (below 45°F).
- Best for: Sports cars, track days, performance driving in Florida's warm climate
- Treadlife: 15,000-40,000 miles
- Brands: Michelin Pilot Sport 4S, Continental ExtremeContact Sport, Bridgestone Potenza

**Highway / Touring**
Focused on comfort, low noise, and long treadlife.
- Best for: SUVs, trucks, long-distance driving
- Treadlife: 60,000-80,000+ miles
- Brands: Michelin Defender LTX, Bridgestone Alenza, Continental CrossContact

**All-Terrain (Trucks/SUVs)**
Aggressive tread for both on-road and off-road capability.
- Best for: Trucks and SUVs that go off-road occasionally
- Treadlife: 40,000-60,000 miles
- Brands: BFGoodrich KO2, Falken Wildpeak, Toyo Open Country`
    },
    {
      id: "cost",
      title: "How Much Do Wheels & Tires Cost?",
      content: `Budget planning for wheels and tires - here's what to expect:

**Wheels Only (Set of 4):**
- Budget cast aluminum: $400-$800
- Mid-range cast/flow-formed: $800-$2,000
- Premium flow-formed: $1,500-$3,000
- Forged: $2,000-$12,000+
- Multi-piece: $2,500-$8,000+

**Tires Only (Set of 4):**
- Budget all-season: $300-$500
- Quality all-season: $500-$800
- Performance all-season: $600-$1,000
- Summer performance: $600-$1,200
- Premium performance: $800-$2,000+

**Complete Wheel & Tire Package (Set of 4):**
- Budget: $700-$1,200
- Mid-range: $1,500-$3,000
- Premium: $3,000-$5,000
- High-end: $5,000-$15,000+

**Installation & Additional Costs:**
- Mounting and balancing: $15-$30 per wheel
- TPMS sensors: $30-$80 per sensor (if needed)
- Alignment: $80-$150 (recommended after wheel changes)
- Hub-centric rings: $15-$30 per set
- Lug nuts/bolts: $30-$100 per set (if needed)

**Florida-Specific Pricing:**
- Miami/Fort Lauderdale: Slightly above average (luxury market premium)
- Orlando/Tampa: Average pricing with good competition
- Jacksonville: Often the best value in the state`
    },
    {
      id: "wheel-care",
      title: "Wheel Care & Maintenance",
      content: `Keeping your wheels clean and protected extends their life and maintains their appearance:

**Regular Cleaning (Every 1-2 Weeks):**
- Use a dedicated pH-neutral wheel cleaner (not dish soap or all-purpose cleaner)
- Use a soft wheel brush - never wire brushes or abrasive pads
- Clean one wheel at a time to prevent cleaner from drying on the surface
- Rinse thoroughly before and after applying cleaner
- Don't clean wheels when they're hot (after driving) - let them cool first

**Brake Dust Management:**
Brake dust is your wheels' worst enemy. It's corrosive and bakes onto the surface when hot.
- Clean brake dust off weekly at minimum
- Iron remover products (like CarPro IronX) dissolve brake dust safely
- Ceramic-coated wheels resist brake dust adhesion significantly

**Wheel Protection:**
- Ceramic coating for wheels ($50-$200 DIY, $100-$400 professional)
- Dramatically reduces brake dust adhesion and makes cleaning easier
- Provides UV protection for painted and powder-coated finishes
- Lasts 1-3 years depending on product and maintenance
- The single best investment for keeping wheels looking new

**Tire Care:**
- Apply tire dressing every 2-4 weeks for UV protection and appearance
- Avoid silicone-based dressings that sling onto paint - water-based is better
- Check tire pressure monthly (Florida heat causes pressure fluctuations)
- Rotate tires every 5,000-7,500 miles for even wear
- Inspect for cracks, bulges, and uneven wear regularly

**Curb Rash Prevention & Repair:**
- Use curb-awareness when parallel parking (camera systems help)
- Minor curb rash on alloy wheels can be repaired for $75-$150 per wheel
- Severe damage may require wheel refinishing ($150-$300 per wheel)
- Rim protectors and wheel bands can prevent damage ($40-$100 per set)`
    },
    {
      id: "florida-wheels",
      title: "Wheels & Tires in Florida: Special Considerations",
      content: `Florida's climate and driving conditions create unique considerations for wheel and tire choices:

**Heat & Tire Pressure**
Florida's extreme summer heat causes tire pressure to increase significantly. A tire inflated to 35 PSI in your cool garage can reach 40+ PSI on hot asphalt. Check pressures in the morning before driving, and set them according to your vehicle's door placard, not the tire's max rating.

**Rain Performance**
Florida's afternoon thunderstorms dump massive amounts of water quickly. Tires with good wet traction are essential - not optional. Avoid tires with poor wet ratings, and replace tires before they reach 4/32" tread depth (not the legal minimum of 2/32") for adequate rain grip.

**UV & Tire Aging**
Florida's UV exposure accelerates tire rubber degradation even on tires with plenty of tread. Inspect sidewalls for cracking (dry rot) annually. Tires older than 6 years should be replaced regardless of tread depth - check the DOT date code on the sidewall.

**Road Hazards**
Florida's roads can be rough on wheels. Watch for:
- Potholes (especially after heavy rain)
- Construction debris on major highways
- Standing water hiding road damage
- Raised road reflectors that can scratch low-profile tires

**Salt & Coastal Corrosion**
Coastal Florida drivers should pay extra attention to wheel care. Salt air corrodes bare metal and can attack wheel finishes. Regular cleaning and ceramic coating provide essential protection.

**Hurricane Season Prep**
Keep your tires in good condition during hurricane season. You may need to evacuate on short notice, and worn tires in heavy rain are dangerous. Consider keeping your spare tire maintained as well.`
    }
  ],
  faqs: [
    {
      question: "How much does a set of aftermarket wheels cost?",
      answer: "Budget cast wheels start around $400-$800 for a set of 4. Quality flow-formed wheels run $800-$2,000. Premium forged wheels start at $2,000 and can exceed $10,000. Add $300-$1,000+ for tires and $100-$200 for mounting, balancing, and alignment."
    },
    {
      question: "Will bigger wheels affect my ride quality?",
      answer: "Generally yes - larger wheels require lower-profile tires with less sidewall to absorb bumps. Going up 1 inch from stock is usually fine. Going up 2+ inches noticeably stiffens the ride. The lower-profile tires also make wheels more vulnerable to pothole damage."
    },
    {
      question: "How often should I rotate my tires?",
      answer: "Every 5,000-7,500 miles or every other oil change. Regular rotation ensures even wear across all four tires, extending their total lifespan. Staggered setups (different front/rear sizes) can only be rotated side-to-side, not front-to-back."
    },
    {
      question: "Is ceramic coating worth it for wheels?",
      answer: "Absolutely - it's one of the best wheel maintenance investments. Ceramic coating makes brake dust wipe off easily, protects against corrosion and UV damage, and keeps wheels looking clean much longer between washes. DIY kits cost $50-$200 and last 1-2 years."
    },
    {
      question: "How do I know when to replace my tires?",
      answer: "Replace tires when tread reaches 4/32\" (for safe wet traction in Florida rain) or 2/32\" (legal minimum). Also replace if you see sidewall cracking, bulges, uneven wear, or if tires are older than 6 years regardless of tread depth. The penny test is a quick check - insert a penny into the tread with Lincoln's head down; if you can see the top of his head, it's time."
    },
    {
      question: "Can curb rash be repaired?",
      answer: "Minor curb rash on alloy wheels can usually be repaired by a wheel refinishing specialist for $75-$150 per wheel. Severe damage, cracking, or bent rims may require full refinishing ($150-$300) or replacement. It's worth getting quotes before assuming you need new wheels."
    }
  ]
};

const wheelCities = [
  { name: "Miami", slug: "miami", state: "FL" },
  { name: "Orlando", slug: "orlando", state: "FL" },
  { name: "Tampa", slug: "tampa", state: "FL" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale", state: "FL" },
  { name: "Jacksonville", slug: "jacksonville", state: "FL" },
];

export default function WheelsRimsTireCareGuide() {
  const [activeSection, setActiveSection] = useState("why-wheels-matter");
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
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><span className="text-[#e8edf5]">{wheelsGuide.shortTitle}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">{wheelsGuide.icon}</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{wheelsGuide.category}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">{wheelsGuide.title}</h1>
          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{wheelsGuide.description}</p>
          <div className="flex items-center gap-6 text-sm text-[#6b7a94]"><span>{wheelsGuide.readTime}</span><span>•</span><span>Updated January 2026</span></div>
        </div>
      </section>
      <section className="relative px-6 pb-24">
        <div className="max-w-6xl mx-auto flex gap-12">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-medium text-[#6b7a94] uppercase tracking-wider mb-4">In this guide</h3>
              <nav className="space-y-1">
                {wheelsGuide.sections.map((section) => (<a key={section.id} href={`#${section.id}`} onClick={() => setActiveSection(section.id)} className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${activeSection === section.id ? "bg-[#4a90d9]/10 text-[#4a90d9] border-l-2 border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5] hover:bg-[#0d1424]"}`}>{section.title}</a>))}
                <a href="#faq" onClick={() => setActiveSection("faq")} className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${activeSection === "faq" ? "bg-[#4a90d9]/10 text-[#4a90d9] border-l-2 border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5] hover:bg-[#0d1424]"}`}>FAQ</a>
              </nav>
              <div className="mt-8 pt-8 border-t border-[#4a90d9]/10">
                <h3 className="text-sm font-medium text-[#e8edf5] mb-4 uppercase tracking-wider">Local Wheel Guides</h3>
                <div className="space-y-2">{wheelCities.map((city) => (<Link key={city.slug} href={`/guides/wheels-rims-tire-care/${city.slug}`} className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">📍 {city.name}, {city.state}</Link>))}</div>
              </div>
              <div className="mt-8 pt-8 border-t border-[#4a90d9]/10">
                <h3 className="text-sm font-medium text-[#e8edf5] mb-4 uppercase tracking-wider">Related Guides</h3>
                <div className="space-y-2">
                  <Link href="/guides/car-detailing" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">🧽 Car Detailing</Link>
                  <Link href="/guides/ceramic-coating-101" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">✨ Ceramic Coating</Link>
                  <Link href="/guides/vinyl-wraps" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">🎨 Vinyl Wraps</Link>
                  <Link href="/guides/led-lighting-upgrades" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">🔦 LED Lighting</Link>
                </div>
              </div>
            </div>
          </aside>
          <div className="max-w-3xl">
            {wheelsGuide.sections.map((section) => (<section key={section.id} id={section.id} className="mb-12 scroll-mt-24"><h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{section.title}</h2><div className="prose prose-invert prose-lg max-w-none">{section.content.split('\n\n').map((paragraph, idx) => (<p key={idx} className="text-[#b8c4d9] leading-relaxed mb-4">{paragraph}</p>))}</div></section>))}
            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">{wheelsGuide.faqs.map((faq, idx) => (<div key={idx} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{faq.question}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === idx && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{faq.answer}</p></div>)}</div>))}</div>
            </section>
            <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#4a90d9]/10 to-transparent border border-[#4a90d9]/20">
              <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Stay Updated</h3>
              <p className="text-[#6b7a94] mb-6">Get notified when we publish new car care guides and tips.</p>
              {subscribed ? (<div className="flex items-center gap-2 text-green-400"><span>✓</span><span>Thanks! You&apos;ll hear from us soon.</span></div>) : (<form onSubmit={handleSubscribe} className="flex gap-3"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="flex-1 px-4 py-3 rounded-lg bg-[#0d1424] border border-[#4a90d9]/20 text-[#e8edf5] placeholder-[#6b7a94] focus:outline-none focus:border-[#4a90d9]/50" /><button type="submit" className="px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Subscribe</button></form>)}
            </section>
            <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10">
              <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Wheel & Tire Shops Near You</h3>
              <p className="text-[#6b7a94] mb-6">Browse top-rated wheel and tire specialists in your area.</p>
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link>
            </div>
            <div className="mt-12 pt-8 border-t border-[#4a90d9]/10">
              <h3 className="text-lg font-medium text-[#e8edf5] mb-4">Wheel & Tire Guides for Florida Cities</h3>
              <div className="flex flex-wrap gap-3">{wheelCities.map((city) => (<Link key={city.slug} href={`/guides/wheels-rims-tire-care/${city.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{city.name}</Link>))}</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

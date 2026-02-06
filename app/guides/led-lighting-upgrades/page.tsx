"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const ledLightingGuide = {
  slug: "led-lighting-upgrades",
  title: "LED & Lighting Upgrades: The Complete Guide for 2026",
  shortTitle: "LED & Lighting Upgrades",
  description: "Everything you need to know about upgrading your vehicle's lighting - headlights, taillights, interior LEDs, accent lighting, and what's legal in Florida.",
  icon: "🔦",
  category: "Car Care",
  readTime: "11 min read",
  sections: [
    {
      id: "why-upgrade",
      title: "Why Upgrade Your Vehicle's Lighting?",
      content: `Upgrading your vehicle's lighting is one of the most impactful modifications you can make - improving both safety and aesthetics in a single upgrade.

Factory halogen headlights, which still come standard on many vehicles, produce a warm yellow light that's significantly dimmer than modern alternatives. Upgrading to LED or HID headlights can increase visibility by 200-300%, making night driving dramatically safer.

Beyond headlights, lighting upgrades span a wide range: LED taillights for better visibility to drivers behind you, interior ambient lighting for a premium cabin feel, underbody accent lights for show appeal, and fog lights for improved visibility in bad weather. Each serves a different purpose, and many drivers choose a combination of upgrades.

The LED revolution has made these upgrades more accessible than ever. Prices have dropped significantly, quality has improved, and installation has become simpler for many applications.`
    },
    {
      id: "headlight-types",
      title: "Headlight Types: Halogen vs LED vs HID",
      content: `Understanding the three main headlight technologies helps you make the right choice:

**Halogen (Factory Standard)**
The most common factory headlight. Uses a tungsten filament heated by electrical current.
- Color temperature: 3,000-3,200K (warm yellow)
- Lifespan: 500-1,000 hours
- Brightness: ~1,400 lumens (low beam)
- Cost: $15-$30 per bulb
- Pros: Cheap, easy to replace, universal fitment
- Cons: Dim compared to modern alternatives, high heat output, shorter lifespan

**LED (Light Emitting Diode)**
The most popular upgrade. Uses semiconductor chips to produce light.
- Color temperature: 5,000-6,500K (bright white to cool white)
- Lifespan: 30,000-50,000 hours
- Brightness: ~3,000-6,000+ lumens
- Cost: $30-$150 per pair (bulbs) or $200-$800+ (full assemblies)
- Pros: Bright, energy efficient, long-lasting, instant on, compact
- Cons: Cheap LEDs can have poor beam patterns, may need heat sinks, some vehicles require adaptors

**HID / Xenon (High Intensity Discharge)**
Uses an electrical arc between two electrodes in xenon gas.
- Color temperature: 4,300-8,000K (depending on bulb)
- Lifespan: 2,000-3,000 hours
- Brightness: ~3,000-5,000 lumens
- Cost: $50-$200 per pair + ballast kit
- Pros: Very bright, good color rendering, proven technology
- Cons: Requires ballasts, warm-up time (1-2 seconds to full brightness), can blind oncoming drivers if improperly installed, glare issues in reflector housings

**The Verdict:** For most drivers, quality LED bulbs or LED headlight assemblies offer the best combination of brightness, lifespan, efficiency, and ease of installation.`
    },
    {
      id: "headlight-upgrades",
      title: "Headlight Upgrade Options",
      content: `There are several approaches to upgrading your headlights, ranging from simple bulb swaps to complete assembly replacements:

**LED Bulb Swap (Easiest)**
Replace your existing halogen bulbs with LED bulbs that fit the same socket. This is the simplest and most affordable upgrade.
- Cost: $30-$150 per pair
- Difficulty: Easy (DIY-friendly)
- Time: 15-30 minutes
- Important: Choose bulbs specifically designed for your housing type (projector vs reflector). Poor-quality LED bulbs in reflector housings can create dangerous glare for oncoming traffic.

**LED Headlight Assemblies (Best Results)**
Replace the entire headlight unit with a purpose-built LED assembly. These are designed from the ground up for LED light sources with proper optics.
- Cost: $200-$1,500+ per pair
- Difficulty: Moderate (some wiring involved)
- Time: 1-3 hours
- These provide the best beam pattern and light output since the optics are designed specifically for LED.

**HID Conversion Kit**
Add HID bulbs and ballasts to your existing housings. Popular but increasingly being replaced by LED options.
- Cost: $50-$200 per pair + ballasts
- Difficulty: Moderate
- Time: 1-2 hours
- Note: HID bulbs in reflector housings create significant glare. Only recommended for projector-style housings.

**Projector Retrofit**
Install projector lenses into your existing headlight housings, then pair with HID or LED bulbs. The gold standard for custom headlight builds.
- Cost: $300-$1,000+
- Difficulty: Advanced (professional recommended)
- Time: 4-8+ hours
- Provides the best beam control and output but requires opening and resealing headlight housings.`
    },
    {
      id: "other-lighting",
      title: "Beyond Headlights: Other Lighting Upgrades",
      content: `Headlights get the most attention, but there are many other lighting upgrades worth considering:

**LED Tail Lights**
Upgrade from incandescent to LED tail lights for faster illumination (LEDs light up 0.2 seconds faster than incandescent - at highway speeds, that's an extra 20 feet of warning for the car behind you).
- Cost: $100-$500 per pair (assemblies) or $15-$40 (bulb swap)
- Many aftermarket LED tail lights offer sequential turn signals and smoked lenses for a modern look.

**LED Fog Lights**
Yellow or white LED fog lights improve visibility in rain, fog, and low-light conditions.
- Cost: $30-$100 (bulbs) or $100-$400 (assemblies)
- Yellow/amber fog lights (3,000K) actually perform better in fog and rain than white lights because they reduce glare and reflection.

**Interior LED Conversion**
Replace all interior bulbs (dome lights, map lights, trunk, vanity mirror, door lights) with LEDs. Transforms the cabin feel from dim yellow to crisp white.
- Cost: $15-$50 for a complete kit
- Difficulty: Easy DIY
- One of the best bang-for-buck upgrades. Completely changes the interior ambiance.

**LED Accent Lighting / Ambient Lighting**
Add LED strips to footwells, under seats, dashboard, or door panels for ambient lighting. Many kits offer RGB color options controllable via app or remote.
- Cost: $20-$150 depending on quality and features
- Difficulty: Easy to moderate
- Great for creating a premium interior atmosphere, especially at night.

**Underbody / Underglow Lighting**
LED strips mounted under the vehicle for a show-car look. Available in single colors or RGB with various effects.
- Cost: $50-$300
- Difficulty: Moderate (mounting and wiring required)
- Check Florida laws before installing (see legal section below).

**LED Light Bars (Trucks/Off-Road)**
Auxiliary LED light bars for trucks and off-road vehicles. Produce massive amounts of light for trail driving and work applications.
- Cost: $50-$500+ depending on size
- Must be covered when driving on public roads in Florida.
- Available in spot, flood, or combo beam patterns.`
    },
    {
      id: "legal",
      title: "Florida Lighting Laws: What's Legal?",
      content: `Florida has specific laws about vehicle lighting modifications. Knowing these keeps you legal and avoids tickets:

**Headlights**
- Must be white or amber. No blue, red, green, or other colors.
- Must have both high and low beam capability.
- Must be properly aimed (not blinding oncoming traffic).
- LED and HID conversions are legal as long as they meet these requirements.
- Aftermarket headlight assemblies should be DOT-approved or SAE-compliant.

**Tail Lights**
- Must be red. Amber is allowed for turn signals.
- Must be visible from 1,000 feet.
- Smoked tail lights are legal as long as they remain visible from the required distance. Heavily smoked lights that reduce visibility can result in a ticket.

**Underglow / Accent Lighting**
- Florida law prohibits red or blue lights visible from the front of the vehicle (reserved for emergency vehicles).
- Green underglow is technically illegal in Florida (reserved for certain emergency vehicles).
- White and amber accent lights are generally acceptable.
- Flashing or rotating lights are prohibited on non-emergency vehicles.
- Best practice: Use underglow for shows and events, not daily driving.

**Interior Lighting**
- Interior accent lighting (footwell LEDs, ambient lighting) is legal as long as red or blue lights are not visible from outside the vehicle.
- Avoid bright interior lighting that could distract other drivers.

**Light Bars**
- Must be covered or turned off when driving on public roads.
- Only legal for off-road use or when the vehicle is stationary.
- Can result in a ticket if used on public highways.

**General Rule:** When in doubt, stick to white and amber for forward-facing lights, red and amber for rear-facing lights, and avoid any colors associated with emergency vehicles (red, blue, green flashing).`
    },
    {
      id: "choosing-leds",
      title: "How to Choose Quality LED Upgrades",
      content: `The LED market is flooded with cheap, low-quality products. Here's how to avoid wasting money:

**Key Specifications to Compare:**
- Lumens (brightness): Higher is brighter, but beam pattern matters more than raw lumens
- Color temperature: 5,000-6,000K is ideal for most drivers (bright white without being too blue)
- CRI (Color Rendering Index): Higher CRI means colors look more natural in the light
- Beam pattern: The most important factor - a well-focused beam is safer than a bright but scattered one
- Heat management: Good LEDs have proper heat sinks or fans (heat kills LEDs)

**Trusted LED Brands:**
- Premium: Morimoto, Diode Dynamics, AlphaRex
- Quality: Auxbeam, Hikari, Fahren, Cougar Motor
- Budget-friendly: Sealight, Beamtech, Marsauto
- Avoid: Ultra-cheap Amazon brands with no reviews or suspicious 5-star reviews

**Red Flags When Shopping:**
- Claims of 20,000+ lumens per bulb (physically impossible for the size)
- No mention of beam pattern or housing compatibility
- Extremely low prices ($10-$15 for "premium" LED headlights)
- No warranty or very short warranty
- No heat management system visible

**What to Prioritize:**
1. Beam pattern (safety first - don't blind other drivers)
2. Heat management (determines lifespan)
3. Compatibility with your housing type
4. Color temperature preference
5. Brand reputation and warranty
6. Brightness (lumens)`
    },
    {
      id: "diy-vs-pro",
      title: "DIY vs Professional Installation",
      content: `Some lighting upgrades are perfect DIY projects, while others are best left to professionals:

**Easy DIY Projects:**
- Interior LED bulb swaps (dome, map, trunk, license plate)
- LED bulb headlight/taillight swaps (direct fit)
- Interior accent LED strip kits
- License plate LED bulbs
- Time: 15 minutes to 1 hour
- Tools: Basic hand tools, possibly trim removal tools

**Moderate DIY (Some Experience Needed):**
- Headlight/taillight assembly replacement
- Fog light installation (if pre-wired)
- Underbody LED kit installation
- DRL (Daytime Running Light) installation
- Time: 1-3 hours
- Tools: Basic tools, electrical connectors, zip ties

**Professional Recommended:**
- Projector retrofits (requires opening headlight housings)
- Custom wiring or relay installations
- Headlight aiming and alignment
- Complex integration with vehicle computers
- Any work near airbag components
- Time: 2-8+ hours
- Cost: $50-$200+ labor depending on complexity

**Finding a Good Installer:**
- Look for shops specializing in automotive electrical or lighting
- Car audio/electronics shops often do lighting work
- Check reviews specifically mentioning lighting installations
- Avoid general mechanics for complex electrical work - specialist shops are worth the premium`
    },
    {
      id: "florida-lighting",
      title: "Lighting Upgrades in Florida: Special Considerations",
      content: `Florida's climate and driving conditions create unique considerations for lighting upgrades:

**Heat Management**
Florida's extreme heat puts extra stress on LED components. Choose LEDs with robust heat sinks or active cooling fans. Cheap LEDs without proper heat management will fail faster in Florida's climate.

**Rain and Humidity**
Waterproofing is critical. Ensure any exterior lighting modifications are properly sealed. Florida's frequent rain and high humidity can cause condensation inside headlight housings if seals are compromised during upgrades.

**Sun Exposure**
UV radiation can yellow plastic headlight lenses over time. When upgrading headlights, consider UV-resistant lens coatings or ceramic coating your headlight housings.

**Night Driving Safety**
Florida has a high rate of pedestrian and cyclist accidents at night. Quality headlight upgrades significantly improve your ability to see and react to hazards. This isn't just cosmetic - it's a genuine safety improvement.

**Inspection Considerations**
Florida doesn't have a regular vehicle inspection program, but law enforcement can still cite you for illegal lighting modifications during traffic stops. Stay within the legal guidelines outlined above.

**Hurricane Season**
Improved lighting can be valuable during hurricane evacuation driving, which often happens in rain and low visibility conditions. LED headlights and fog lights provide better visibility in severe weather.`
    }
  ],
  faqs: [
    {
      question: "Are LED headlight bulbs legal in Florida?",
      answer: "Yes, LED headlights are legal in Florida as long as they emit white or amber light, have proper high and low beam function, and are aimed correctly to not blind oncoming traffic. The key is proper beam pattern - cheap LED bulbs in reflector housings often create illegal glare."
    },
    {
      question: "Will LED bulbs work in my car without modifications?",
      answer: "Most modern LED headlight bulbs are designed as direct replacements for halogen bulbs with the same socket type. However, some vehicles (especially European cars) may trigger dashboard warning lights due to the lower power draw of LEDs. This is solved with a CANbus adapter or decoder, usually $10-$20."
    },
    {
      question: "How long do LED headlights last?",
      answer: "Quality LED headlights last 30,000-50,000 hours - essentially the lifetime of most vehicles. Compare that to halogen bulbs at 500-1,000 hours and HID bulbs at 2,000-3,000 hours. Even in Florida's heat, quality LEDs with proper heat management will last many years."
    },
    {
      question: "Is underglow legal in Florida?",
      answer: "It depends on the color. White and amber are generally acceptable. Red, blue, and green are prohibited as they're associated with emergency vehicles. Flashing lights of any color are illegal on non-emergency vehicles. Many enthusiasts use underglow only at shows and events to avoid any issues."
    },
    {
      question: "Can I install LED headlights myself?",
      answer: "LED bulb swaps are very DIY-friendly - most take 15-30 minutes with no tools. Full headlight assembly replacements are moderate difficulty. Projector retrofits and custom work should be done by professionals. Start with an interior LED swap to build confidence before tackling headlights."
    },
    {
      question: "Do LED lights drain my car battery?",
      answer: "LEDs actually draw less power than halogen bulbs - typically 20-40 watts vs 55-65 watts per bulb. This means less load on your alternator and electrical system. However, leaving any lights on with the engine off will eventually drain your battery."
    }
  ]
};

const lightingCities = [
  { name: "Miami", slug: "miami", state: "FL" },
  { name: "Orlando", slug: "orlando", state: "FL" },
  { name: "Tampa", slug: "tampa", state: "FL" },
  { name: "Fort Lauderdale", slug: "fort-lauderdale", state: "FL" },
  { name: "Jacksonville", slug: "jacksonville", state: "FL" },
];

export default function LEDLightingGuide() {
  const [activeSection, setActiveSection] = useState("why-upgrade");
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
          <nav className="flex items-center gap-2 text-sm text-[#6b7a94] mb-8"><Link href="/guides" className="hover:text-[#4a90d9] transition-colors">Guides</Link><span>/</span><span className="text-[#e8edf5]">{ledLightingGuide.shortTitle}</span></nav>
          <div className="flex items-center gap-3 mb-4"><span className="text-4xl">{ledLightingGuide.icon}</span><span className="px-3 py-1 bg-[#4a90d9]/10 text-[#4a90d9] text-sm rounded-full">{ledLightingGuide.category}</span></div>
          <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5] mb-6 leading-tight">{ledLightingGuide.title}</h1>
          <p className="text-xl text-[#6b7a94] mb-8 max-w-2xl">{ledLightingGuide.description}</p>
          <div className="flex items-center gap-6 text-sm text-[#6b7a94]"><span>{ledLightingGuide.readTime}</span><span>•</span><span>Updated January 2026</span></div>
        </div>
      </section>

      <section className="relative px-6 pb-24">
        <div className="max-w-6xl mx-auto flex gap-12">
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <h3 className="text-xs font-medium text-[#6b7a94] uppercase tracking-wider mb-4">In this guide</h3>
              <nav className="space-y-1">
                {ledLightingGuide.sections.map((section) => (<a key={section.id} href={`#${section.id}`} onClick={() => setActiveSection(section.id)} className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${activeSection === section.id ? "bg-[#4a90d9]/10 text-[#4a90d9] border-l-2 border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5] hover:bg-[#0d1424]"}`}>{section.title}</a>))}
                <a href="#faq" onClick={() => setActiveSection("faq")} className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${activeSection === "faq" ? "bg-[#4a90d9]/10 text-[#4a90d9] border-l-2 border-[#4a90d9]" : "text-[#6b7a94] hover:text-[#e8edf5] hover:bg-[#0d1424]"}`}>FAQ</a>
              </nav>
              <div className="mt-8 pt-8 border-t border-[#4a90d9]/10">
                <h3 className="text-sm font-medium text-[#e8edf5] mb-4 uppercase tracking-wider">Local Lighting Guides</h3>
                <div className="space-y-2">{lightingCities.map((city) => (<Link key={city.slug} href={`/guides/led-lighting-upgrades/${city.slug}`} className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">📍 {city.name}, {city.state}</Link>))}</div>
              </div>
              <div className="mt-8 pt-8 border-t border-[#4a90d9]/10">
                <h3 className="text-sm font-medium text-[#e8edf5] mb-4 uppercase tracking-wider">Related Guides</h3>
                <div className="space-y-2">
                  <Link href="/guides/car-detailing" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">🧽 Car Detailing</Link>
                  <Link href="/guides/vinyl-wraps" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">🎨 Vinyl Wraps</Link>
                  <Link href="/guides/window-tinting" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">🔧 Window Tinting</Link>
                  <Link href="/guides/ceramic-coating-101" className="block py-2 px-3 rounded-lg text-sm text-[#6b7a94] hover:text-[#4a90d9] hover:bg-[#0d1424] transition-all">✨ Ceramic Coating</Link>
                </div>
              </div>
            </div>
          </aside>

          <div className="max-w-3xl">
            {ledLightingGuide.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">{section.title}</h2>
                <div className="prose prose-invert prose-lg max-w-none">{section.content.split('\n\n').map((paragraph, idx) => (<p key={idx} className="text-[#b8c4d9] leading-relaxed mb-4">{paragraph}</p>))}</div>
              </section>
            ))}

            <section id="faq" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl font-medium text-[#e8edf5] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">{ledLightingGuide.faqs.map((faq, idx) => (<div key={idx} className="border border-[#4a90d9]/10 rounded-xl overflow-hidden"><button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex items-center justify-between p-5 text-left bg-[#0d1424]/50 hover:bg-[#0d1424] transition-colors"><span className="font-medium text-[#e8edf5]">{faq.question}</span><span className={`text-[#4a90d9] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>↓</span></button>{openFaq === idx && (<div className="p-5 bg-[#0a0f1a] border-t border-[#4a90d9]/10"><p className="text-[#b8c4d9] leading-relaxed">{faq.answer}</p></div>)}</div>))}</div>
            </section>

            <section className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-[#4a90d9]/10 to-transparent border border-[#4a90d9]/20">
              <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Stay Updated</h3>
              <p className="text-[#6b7a94] mb-6">Get notified when we publish new car care guides and tips.</p>
              {subscribed ? (<div className="flex items-center gap-2 text-green-400"><span>✓</span><span>Thanks! You&apos;ll hear from us soon.</span></div>) : (<form onSubmit={handleSubscribe} className="flex gap-3"><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required className="flex-1 px-4 py-3 rounded-lg bg-[#0d1424] border border-[#4a90d9]/20 text-[#e8edf5] placeholder-[#6b7a94] focus:outline-none focus:border-[#4a90d9]/50" /><button type="submit" className="px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Subscribe</button></form>)}
            </section>

            <div className="p-8 rounded-2xl bg-[#0d1424] border border-[#4a90d9]/10">
              <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Find Lighting Shops Near You</h3>
              <p className="text-[#6b7a94] mb-6">Browse top-rated automotive lighting specialists in your area.</p>
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#4a90d9] text-white font-medium hover:bg-[#6ba8eb] transition-colors">Find Shops <span>→</span></Link>
            </div>

            <div className="mt-12 pt-8 border-t border-[#4a90d9]/10">
              <h3 className="text-lg font-medium text-[#e8edf5] mb-4">LED Lighting Guides for Florida Cities</h3>
              <div className="flex flex-wrap gap-3">{lightingCities.map((city) => (<Link key={city.slug} href={`/guides/led-lighting-upgrades/${city.slug}`} className="px-4 py-2 rounded-lg bg-[#0d1424] text-[#6b7a94] hover:text-[#4a90d9] transition-colors">{city.name}</Link>))}</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

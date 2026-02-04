// Guides Data for Healvanna Auto
// This file contains all guide content and city-specific information

export interface Guide {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  readTime: string;
  category: string;
  featured: boolean;
  sections: GuideSection[];
  faqs: FAQ[];
}

export interface GuideSection {
  id: string;
  title: string;
  content: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  description: string;
  electricityRate: string;
  evIncentives: string[];
  popularEvs: string[];
  chargingNetworks: string[];
  localTips: string[];
}

// Florida Cities Data
export const cities: CityData[] = [
  {
    slug: "miami",
    name: "Miami",
    state: "FL",
    description: "Miami's year-round warm climate and growing EV infrastructure make it an ideal city for electric vehicle ownership.",
    electricityRate: "$0.12-0.15/kWh",
    evIncentives: [
      "Florida has no state income tax, so no state EV tax credit",
      "Some utilities offer time-of-use rates for EV charging",
      "FPL offers rebates for home charger installation",
      "HOV lane access for EVs"
    ],
    popularEvs: ["Tesla Model Y", "Tesla Model 3", "BMW iX", "Mercedes EQS", "Porsche Taycan"],
    chargingNetworks: ["Tesla Supercharger", "Electrify America", "ChargePoint", "EVgo"],
    localTips: [
      "FPL (Florida Power & Light) offers off-peak rates from 11 PM - 6 AM",
      "Many luxury condo buildings now offer EV charging amenities",
      "Salt air can affect your EV - regular detailing is recommended",
      "Hurricane season (June-November) - keep your EV charged for emergencies"
    ]
  },
  {
    slug: "orlando",
    name: "Orlando",
    state: "FL",
    description: "Orlando's suburban layout and growing tech scene have accelerated EV adoption, with expanding charging infrastructure throughout Central Florida.",
    electricityRate: "$0.11-0.14/kWh",
    evIncentives: [
      "OUC (Orlando Utilities Commission) offers EV rate plans",
      "Duke Energy rebates for Level 2 charger installation",
      "No state EV tax credit (no state income tax)",
      "Some employers offer workplace charging"
    ],
    popularEvs: ["Tesla Model Y", "Tesla Model 3", "Ford Mustang Mach-E", "Chevrolet Bolt", "Rivian R1S"],
    chargingNetworks: ["Tesla Supercharger", "Electrify America", "ChargePoint", "Blink"],
    localTips: [
      "OUC offers a dedicated EV rate plan with lower overnight rates",
      "Theme parks (Disney, Universal) have extensive EV charging",
      "I-4 corridor has good Supercharger coverage",
      "Summer heat means pre-conditioning your EV while plugged in saves range"
    ]
  },
  {
    slug: "tampa",
    name: "Tampa",
    state: "FL",
    description: "Tampa Bay's growing metropolitan area offers excellent EV infrastructure with multiple charging networks and utility incentives.",
    electricityRate: "$0.11-0.14/kWh",
    evIncentives: [
      "TECO Energy offers EV charging rebates",
      "No state EV registration fee premium",
      "Workplace charging programs expanding",
      "Some apartment complexes adding charging stations"
    ],
    popularEvs: ["Tesla Model Y", "Tesla Model 3", "Ford F-150 Lightning", "Rivian R1T", "Hyundai Ioniq 5"],
    chargingNetworks: ["Tesla Supercharger", "Electrify America", "ChargePoint", "EVgo"],
    localTips: [
      "TECO offers time-of-use rates beneficial for overnight charging",
      "Westshore area has high concentration of public chargers",
      "Beach trips to Clearwater - plan charging stops",
      "Summer afternoon storms - garage charging recommended"
    ]
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    state: "FL",
    description: "Fort Lauderdale's affluent population and environmental consciousness have made it a hotspot for luxury EV ownership in South Florida.",
    electricityRate: "$0.12-0.15/kWh",
    evIncentives: [
      "FPL EV charging rebate programs",
      "Broward County green initiatives",
      "Many HOAs now permit home charger installation",
      "Growing public charging network downtown"
    ],
    popularEvs: ["Tesla Model S", "Porsche Taycan", "Mercedes EQS", "BMW iX", "Lucid Air"],
    chargingNetworks: ["Tesla Supercharger", "Electrify America", "ChargePoint", "Blink"],
    localTips: [
      "Las Olas Boulevard area has multiple public charging options",
      "Beachside salt exposure - ceramic coating highly recommended",
      "FPL off-peak rates make overnight charging very affordable",
      "Many yacht clubs now offering EV charging for members"
    ]
  },
  {
    slug: "jacksonville",
    name: "Jacksonville",
    state: "FL",
    description: "Jacksonville's sprawling layout makes home charging essential for EV owners, with JEA offering competitive electricity rates.",
    electricityRate: "$0.10-0.13/kWh",
    evIncentives: [
      "JEA offers some of Florida's lowest electricity rates",
      "Growing workplace charging programs",
      "No additional EV registration fees",
      "City fleet electrification creating more public awareness"
    ],
    popularEvs: ["Tesla Model Y", "Ford Mustang Mach-E", "Chevrolet Bolt EUV", "Hyundai Ioniq 5", "Kia EV6"],
    chargingNetworks: ["Tesla Supercharger", "Electrify America", "ChargePoint", "Blink"],
    localTips: [
      "JEA's flat rates make any-time charging affordable",
      "Beach driving to Amelia Island - ensure full charge",
      "St. Johns Town Center has good public charging",
      "Longer commutes common - Level 2 home charging recommended"
    ]
  }
];

// Main Guides Content
export const guides: Guide[] = [
  {
    slug: "home-ev-charging",
    title: "Home EV Charging Explained: The Complete Guide",
    shortTitle: "Home EV Charging",
    description: "Everything you need to know about charging your electric vehicle at home. From choosing the right charger to installation costs and electrical requirements.",
    icon: "⚡",
    readTime: "12 min read",
    category: "EV Ownership",
    featured: true,
    sections: [
      {
        id: "intro",
        title: "Why Home Charging Matters",
        content: `For most EV owners, home charging is where 80% or more of your charging happens. It's convenient, cost-effective, and means you wake up every morning with a "full tank." But setting up home charging can feel overwhelming if you don't know where to start.

This guide breaks down everything in plain English: the different charging levels, what equipment you need, electrical requirements, costs, and how to choose the right setup for your situation.`
      },
      {
        id: "levels",
        title: "Level 1 vs Level 2 Charging: What's the Difference?",
        content: `**Level 1 Charging (120V)**
This is the simplest option - just plug into a standard household outlet using the cable that came with your EV. 

- **Speed:** 3-5 miles of range per hour
- **Best for:** Short commutes under 30 miles/day, plug-in hybrids
- **Cost:** $0 (uses existing outlet)
- **Pros:** No installation needed, works anywhere
- **Cons:** Very slow - overnight charging may not fully charge a depleted battery

**Level 2 Charging (240V)**
This requires a dedicated 240V outlet (like your dryer uses) and a Level 2 charging station.

- **Speed:** 25-40 miles of range per hour
- **Best for:** Daily drivers, longer commutes, anyone who wants faster charging
- **Cost:** $400-$700 for the charger + $300-$1,500 for installation
- **Pros:** Much faster, can fully charge overnight, often has smart features
- **Cons:** Requires professional installation, higher upfront cost`
      },
      {
        id: "do-you-need",
        title: "Do You Really Need a Level 2 Charger?",
        content: `Not everyone needs to invest in Level 2 charging. Here's a simple decision framework:

**Level 1 is probably fine if:**
- You drive less than 30-40 miles per day
- You have a plug-in hybrid (smaller battery)
- Your car is parked 12+ hours daily
- You want to test EV ownership before investing

**You should get Level 2 if:**
- You drive 50+ miles daily
- You have a long-range EV (60+ kWh battery)
- You need flexibility for unexpected trips
- You sometimes forget to plug in (faster recovery)
- You want smart features like scheduled charging

**The math:** If you drive 50 miles/day and Level 1 gives you 4 miles/hour, you need 12.5 hours of charging daily. That's cutting it close. Level 2 at 30 miles/hour means just 1.7 hours - much more practical.`
      },
      {
        id: "choosing-charger",
        title: "Choosing the Right Level 2 Charger",
        content: `**Key Specifications to Consider:**

**Amperage (Power)**
- 16-amp chargers: Budget option, ~12 miles/hour
- 32-amp chargers: Sweet spot for most EVs, ~25 miles/hour  
- 48-amp chargers: Fastest home option, ~37 miles/hour

*Tip: Check your EV's onboard charger limit. A 48-amp wall charger won't help if your car only accepts 32 amps.*

**Smart Features**
- WiFi connectivity for app control
- Scheduled charging (charge during off-peak hours)
- Energy monitoring
- Load management (if you have multiple EVs)

**Popular Reliable Brands:**
- Tesla Wall Connector (works with all EVs via adapter)
- ChargePoint Home Flex
- Grizzl-E
- Wallbox Pulsar Plus
- JuiceBox
- Emporia

**Price Ranges:**
- Basic (no smart features): $300-$400
- Smart chargers: $500-$700
- Premium/High-power: $700-$1,000`
      },
      {
        id: "electrical",
        title: "Electrical Requirements & Installation",
        content: `**What You'll Need:**

**For a 32-amp charger:**
- 40-amp circuit breaker
- 8-gauge wire (shorter runs) or 6-gauge (longer runs)
- NEMA 14-50 outlet OR hardwired connection

**For a 48-amp charger:**
- 60-amp circuit breaker
- 6-gauge wire
- Typically hardwired (no outlet)

**Panel Capacity**
Your electrical panel needs enough spare capacity. Most homes have 100-200 amp service.
- 100-amp panel: May need upgrade or load management
- 200-amp panel: Usually fine for one Level 2 charger
- Adding a second EV? Consider panel upgrade or smart load sharing

**Typical Installation Process:**
1. Electrician assesses your panel and garage
2. Pulls permit (required in most areas)
3. Runs wire from panel to charging location
4. Installs outlet or hardwires charger
5. Inspection (usually required)

**Installation Costs:**
- Simple install (panel in garage): $300-$500
- Moderate (panel nearby, some drywall work): $500-$1,000
- Complex (panel far away, trenching, panel upgrade): $1,000-$2,500+`
      },
      {
        id: "costs",
        title: "Total Cost Breakdown",
        content: `**Typical Total Investment:**

| Scenario | Charger | Installation | Total |
|----------|---------|--------------|-------|
| Budget Level 2 | $350 | $400 | $750 |
| Mid-range Smart | $550 | $600 | $1,150 |
| Premium Setup | $800 | $1,000 | $1,800 |
| Complex Install | $600 | $2,000+ | $2,600+ |

**Ways to Reduce Costs:**
- Check utility rebates (many offer $200-$500)
- Federal tax credits may apply in some cases
- Get multiple electrician quotes
- Consider a NEMA 14-50 outlet instead of hardwiring (more flexible)

**Ongoing Costs:**
Electricity for EVs is much cheaper than gas. At $0.12/kWh, driving 1,000 miles/month costs about $36-$45 in electricity. The same distance in a 30 MPG gas car at $3.50/gallon costs ~$117.`
      },
      {
        id: "mistakes",
        title: "Common Mistakes to Avoid",
        content: `**1. Buying more charger than you need**
A $900 48-amp charger is overkill if your car's onboard charger maxes out at 32 amps.

**2. Ignoring your panel capacity**
Discovering you need a $2,000 panel upgrade after buying your charger is frustrating. Get an electrician assessment first.

**3. Poor placement**
Think about where your charge port is located on the car, cable length, and keeping the cable off the ground.

**4. Skipping the permit**
Unpermitted electrical work can cause insurance issues and problems when selling your home.

**5. Not considering future needs**
Getting a second EV someday? Installing a higher-capacity circuit now is cheaper than doing it twice.

**6. Forgetting about outlet flexibility**
A NEMA 14-50 outlet lets you swap chargers or take it with you if you move. Hardwiring is permanent.`
      }
    ],
    faqs: [
      {
        question: "Can I charge my EV in the rain?",
        answer: "Yes, absolutely. EV charging equipment is designed to be weatherproof and safe in wet conditions. The charging port and connector have safety interlocks that prevent any electrical flow until a secure connection is made."
      },
      {
        question: "Should I charge to 100% every night?",
        answer: "For daily driving, charging to 80-90% is better for battery longevity. Most EVs let you set a charge limit. Save 100% charges for when you need maximum range for a trip."
      },
      {
        question: "Can I use an extension cord?",
        answer: "It's not recommended for Level 1 and never for Level 2. Extension cords can overheat and create fire hazards. If your outlet is too far, have an electrician install one closer or run a proper circuit."
      },
      {
        question: "How much does it add to my electric bill?",
        answer: "Roughly $30-$60/month for average driving (1,000-1,200 miles). This varies based on your local electricity rates and how efficient your EV is. It's typically 50-70% cheaper than gasoline."
      },
      {
        question: "Can I install a charger myself?",
        answer: "Unless you're a licensed electrician, no. Working with 240V circuits is dangerous and requires permits in most jurisdictions. The charger itself is plug-and-play, but the electrical circuit needs a professional."
      },
      {
        question: "What if I rent or live in an apartment?",
        answer: "Talk to your landlord or HOA. Many are now open to installing chargers, especially if you offer to pay. Some states have 'right to charge' laws. Alternatively, workplace charging or nearby public chargers may work for you."
      }
    ]
  },
  {
    slug: "ceramic-coating-101",
    title: "Ceramic Coating 101: Is It Worth It for Your Car?",
    shortTitle: "Ceramic Coating 101",
    description: "A complete guide to ceramic coating for cars. Learn what it is, how much it costs, how long it lasts, and whether it's the right choice for your vehicle.",
    icon: "✨",
    readTime: "10 min read",
    category: "Car Care",
    featured: true,
    sections: [
      {
        id: "intro",
        title: "What Is Ceramic Coating?",
        content: `Ceramic coating is a liquid polymer that chemically bonds with your car's paint to create a protective layer. Unlike wax or sealants that sit on top of the paint and wear off in weeks, ceramic coating becomes part of the surface and can last years.

Think of it as a semi-permanent shield that makes your car easier to clean, more resistant to environmental damage, and gives that deep, glossy "just detailed" look that lasts.

**What Ceramic Coating Is NOT:**
- It's not a replacement for paint protection film (PPF)
- It won't prevent rock chips or deep scratches
- It's not maintenance-free (you still need to wash your car)
- It's not a magic force field against all damage`
      },
      {
        id: "benefits",
        title: "Benefits of Ceramic Coating",
        content: `**1. Hydrophobic Properties**
Water beads up and rolls off, taking dirt with it. This "self-cleaning" effect means your car stays cleaner longer and is much easier to wash.

**2. UV Protection**
Blocks harmful UV rays that cause paint oxidation and fading. Especially important in sunny climates like Florida.

**3. Chemical Resistance**
Protects against bird droppings, tree sap, bug splatter, and acidic contaminants that can etch unprotected paint.

**4. Enhanced Gloss**
Adds depth and clarity to your paint, making colors pop and giving that wet, mirror-like finish.

**5. Easier Maintenance**
Dirt and grime don't bond as easily to the coated surface. Regular washes become quicker and more effective.

**6. Scratch Resistance (Minor)**
Adds a harder surface that resists light swirl marks and wash scratches. NOT scratch-proof against keys or impacts.`
      },
      {
        id: "types",
        title: "Types of Ceramic Coating",
        content: `**Consumer-Grade (DIY)**
- Available at auto parts stores
- Typically 1-2 year durability
- Easier application, more forgiving
- Cost: $30-$100 for supplies
- Best for: Enthusiasts who enjoy detailing

**Professional-Grade**
- Applied by trained detailers
- 2-5+ year durability
- Requires paint correction first
- Cost: $500-$2,500 depending on package
- Best for: Anyone wanting the best results

**Professional Coating Tiers:**

| Tier | Durability | What's Included | Price Range |
|------|------------|-----------------|-------------|
| Entry | 2 years | Single layer, basic prep | $500-$800 |
| Mid | 3-4 years | Paint correction + coating | $800-$1,500 |
| Premium | 5+ years | Full correction + multiple layers | $1,500-$2,500 |
| Ultimate | 7+ years | Extensive correction + top coating | $2,500+ |`
      },
      {
        id: "process",
        title: "The Professional Application Process",
        content: `A proper ceramic coating application isn't just spraying on a product. Here's what a quality installation involves:

**1. Thorough Wash & Decontamination (1-2 hours)**
- Hand wash to remove surface dirt
- Clay bar treatment to remove embedded contaminants
- Iron remover for brake dust and industrial fallout

**2. Paint Correction (2-8+ hours)**
- Machine polishing to remove swirls, scratches, and imperfections
- This is where most of the time (and cost) goes
- Skipping this locks imperfections under the coating forever

**3. Panel Wipe & Prep (30 min)**
- Isopropyl alcohol wipe to remove oils and residue
- Ensures coating bonds properly to paint

**4. Coating Application (2-3 hours)**
- Applied panel by panel in controlled environment
- Carefully leveled to avoid high spots
- Multiple layers may be applied with curing time between

**5. Curing (24-48 hours)**
- Coating needs to cure before exposure to water
- Car should stay dry and indoors during this period

**Total Time: 1-3 days depending on package**`
      },
      {
        id: "cost",
        title: "How Much Does Ceramic Coating Cost?",
        content: `**Price Factors:**

**Vehicle Size**
- Sedans/small SUVs: Base pricing
- Large SUVs/trucks: +20-30%
- Exotics/luxury: +30-50% (more careful handling)

**Paint Condition**
- New car (minimal correction needed): Lower cost
- Daily driver with swirls: Moderate correction needed
- Neglected paint: Extensive correction = higher cost

**Coating Quality**
- Entry-level coatings: Less expensive, shorter life
- Premium coatings: Higher cost, longer protection

**Regional Pricing (Florida):**
- Miami/Fort Lauderdale: $800-$3,000
- Orlando/Tampa: $600-$2,500
- Smaller markets: $500-$2,000

**What's Usually Included:**
- Entry packages: Wash, light polish, single layer
- Mid packages: Decontamination, 1-step correction, coating
- Premium packages: Full detail, multi-step correction, multiple layers, wheel coating, glass coating`
      },
      {
        id: "worth-it",
        title: "Is Ceramic Coating Worth It?",
        content: `**Ceramic Coating IS Worth It If:**
- You plan to keep your car 3+ years
- You want to maintain resale value
- You hate water spots and want easier washing
- You live somewhere with harsh sun (hello, Florida!)
- You take pride in your car's appearance

**Ceramic Coating May NOT Be Worth It If:**
- You're selling the car within a year
- You never wash your car anyway
- Your paint is already severely damaged
- You're on a very tight budget
- You're expecting it to prevent rock chips (get PPF instead)

**The Math:**

Professional coating: $1,200 (5-year coating)
= $240/year = $20/month

Compare to:
- Monthly detailing: $150-$300/month
- Quarterly wax/sealant: ~$50/quarter + time
- Repainting faded panels: $500-$2,000+

For most car owners who care about their vehicle's appearance, professional ceramic coating pays for itself in time saved and paint protection.`
      },
      {
        id: "maintenance",
        title: "Maintaining Your Ceramic Coating",
        content: `Ceramic coating isn't "apply and forget." To get the most life out of your coating:

**Regular Washing (Every 1-2 Weeks)**
- Use pH-neutral car shampoo
- Two-bucket wash method
- Avoid automatic car washes with brushes
- Touchless automatic washes are okay occasionally

**Avoid:**
- Harsh chemicals and degreasers on coated surfaces
- Abrasive compounds or heavy polishing
- Letting bird droppings or tree sap sit for days

**Annual Maintenance:**
- Consider a "maintenance coating" or spray sealant
- Professional inspection of coating condition
- Address any contamination that bonded to surface

**Signs Your Coating Needs Attention:**
- Water no longer beads tightly
- Surface feels rough after washing
- Gloss has diminished noticeably
- Contamination spots won't wash off`
      }
    ],
    faqs: [
      {
        question: "How long does ceramic coating last?",
        answer: "Professional coatings typically last 2-7 years depending on the product quality, application, and maintenance. Consumer DIY coatings usually last 6 months to 2 years."
      },
      {
        question: "Can I apply ceramic coating myself?",
        answer: "Yes, DIY ceramic coatings exist and are more forgiving than professional products. However, without proper paint correction first, you're just sealing in imperfections. For best results, especially on daily drivers with existing swirls, professional application is recommended."
      },
      {
        question: "Does ceramic coating prevent scratches?",
        answer: "It provides resistance against minor scratches and swirl marks but will NOT prevent rock chips, key scratches, or impact damage. For that level of protection, you need paint protection film (PPF)."
      },
      {
        question: "Can you wax over ceramic coating?",
        answer: "You don't need to and generally shouldn't use traditional wax. However, ceramic-compatible spray sealants or 'topper' products can enhance gloss and extend protection."
      },
      {
        question: "Should I get ceramic coating on a new car?",
        answer: "New cars are actually the ideal candidate - the paint is usually in good condition requiring minimal correction, which lowers the cost. Coating it early provides protection from day one."
      },
      {
        question: "What's the difference between ceramic coating and PPF?",
        answer: "Ceramic coating is a liquid that provides chemical/UV protection and gloss but minimal physical protection. PPF (paint protection film) is a thick clear film that absorbs impacts and prevents rock chips. Many owners use both: PPF on high-impact areas and ceramic coating over everything."
      }
    ]
  }
];

// Helper function to get guide by slug
export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

// Helper function to get city by slug
export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(c => c.slug === slug);
}

// Get all guide slugs for static generation
export function getAllGuideSlugs(): string[] {
  return guides.map(g => g.slug);
}

// Get all city slugs for static generation
export function getAllCitySlugs(): string[] {
  return cities.map(c => c.slug);
}

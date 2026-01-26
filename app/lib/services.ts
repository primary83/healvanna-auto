import { ServiceCategory, LocationCity } from "./types";

// SVG path constants for service icons
const ICONS = {
  detailing:
    "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  wrapping:
    "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
  bodyShop:
    "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  collision:
    "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  autoGlass:
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  autoPainting:
    "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  carWash:
    "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12",
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "car-detailing",
    name: "Car Detailing",
    shortName: "Detailing",
    description:
      "Professional auto detailing services that restore and protect your vehicle's appearance. From full interior cleaning to paint correction and ceramic coatings.",
    seoDescription:
      "Find the best car detailing services near you. Professional auto detailing, paint correction, ceramic coating, and interior cleaning by verified specialists.",
    icon: ICONS.detailing,
    yelpCategories: "autodetailing",
    subcategories: [
      {
        slug: "ceramic-coating",
        name: "Ceramic Coating",
        description:
          "Long-lasting paint protection using advanced nanoceramic technology. Provides years of hydrophobic protection with exceptional gloss.",
        parentSlug: "car-detailing",
        keywords: ["ceramic coating", "nano coating", "paint protection", "hydrophobic coating"],
      },
      {
        slug: "interior-detailing",
        name: "Interior Detailing",
        description:
          "Deep cleaning and restoration of your vehicle's interior. Leather conditioning, carpet shampooing, and sanitization.",
        parentSlug: "car-detailing",
        keywords: ["interior detailing", "leather cleaning", "carpet shampoo", "interior restoration"],
      },
      {
        slug: "mobile-detailing",
        name: "Mobile Detailing",
        description:
          "Professional detailing that comes to you. Convenient mobile services at your home, office, or preferred location.",
        parentSlug: "car-detailing",
        keywords: ["mobile detailing", "at home detailing", "mobile car wash", "on-site detailing"],
      },
    ],
    trustSignals: [
      "IDA Certified Detailers",
      "Ceramic Pro Installers",
      "Gtechniq Accredited",
      "Paint Correction Specialists",
    ],
    keywords: ["car detailing", "auto detailing", "paint correction", "ceramic coating", "interior detailing"],
  },
  {
    slug: "car-wrapping",
    name: "Car Wrapping",
    shortName: "Wrapping",
    description:
      "Transform your vehicle with professional vinyl wraps. Color changes, commercial wraps, and paint protection film installations by certified specialists.",
    seoDescription:
      "Find top-rated car wrapping shops near you. Professional vinyl wraps, color change wraps, PPF installation, and commercial vehicle wraps.",
    icon: ICONS.wrapping,
    yelpCategories: "vehiclewraps,autocustomization",
    subcategories: [
      {
        slug: "vinyl-wrap",
        name: "Vinyl Wrap",
        description:
          "Full and partial vinyl wrap installations. Premium materials from 3M, Avery Dennison, and KPMF for a flawless finish.",
        parentSlug: "car-wrapping",
        keywords: ["vinyl wrap", "car wrap", "vehicle wrap", "3M wrap", "Avery Dennison"],
      },
      {
        slug: "color-change-wrap",
        name: "Color Change Wrap",
        description:
          "Complete color transformation without permanent paint. Satin, matte, gloss, and specialty finishes available.",
        parentSlug: "car-wrapping",
        keywords: ["color change wrap", "matte wrap", "satin wrap", "gloss wrap"],
      },
      {
        slug: "ppf",
        name: "Paint Protection Film (PPF)",
        description:
          "Clear bra and paint protection film installations. Self-healing films that protect against rock chips, scratches, and UV damage.",
        parentSlug: "car-wrapping",
        keywords: ["PPF", "paint protection film", "clear bra", "XPEL", "SunTek"],
      },
    ],
    trustSignals: [
      "3M Certified Installers",
      "XPEL Authorized Dealers",
      "Avery Dennison Trained",
      "PDCA Members",
    ],
    keywords: ["car wrapping", "vinyl wrap", "vehicle wrap", "color change", "PPF", "paint protection film"],
  },
  {
    slug: "body-shops",
    name: "Body Shops",
    shortName: "Body Shops",
    description:
      "Trusted body shops specializing in cosmetic repairs, dent removal, and paint correction. Restore your vehicle to its original condition.",
    seoDescription:
      "Find certified body shops near you. Expert cosmetic repair, paintless dent removal, and paint correction by verified professionals.",
    icon: ICONS.bodyShop,
    yelpCategories: "bodyshops",
    subcategories: [
      {
        slug: "dent-repair",
        name: "Dent Repair",
        description:
          "Paintless dent removal and traditional dent repair. Fix hail damage, door dings, and minor dents without repainting.",
        parentSlug: "body-shops",
        keywords: ["dent repair", "paintless dent removal", "PDR", "hail damage repair", "door ding repair"],
      },
      {
        slug: "paint-correction",
        name: "Paint Correction",
        description:
          "Multi-stage paint correction to remove swirl marks, scratches, and oxidation. Restore factory-fresh clarity to your paint.",
        parentSlug: "body-shops",
        keywords: ["paint correction", "swirl removal", "scratch removal", "paint restoration"],
      },
    ],
    trustSignals: [
      "I-CAR Gold Class",
      "ASE Certified Technicians",
      "OEM Certified Repairs",
      "Lifetime Warranty",
    ],
    keywords: ["body shop", "auto body repair", "dent removal", "paint correction", "cosmetic repair"],
  },
  {
    slug: "collision-repair",
    name: "Collision Repair",
    shortName: "Collision",
    description:
      "Expert collision repair for accident damage, frame straightening, and insurance claim assistance. OEM-quality repairs with lifetime warranties.",
    seoDescription:
      "Find certified collision repair centers near you. Expert accident damage repair, frame straightening, and direct insurance billing.",
    icon: ICONS.collision,
    yelpCategories: "bodyshops,autorepair",
    subcategories: [
      {
        slug: "frame-repair",
        name: "Frame Repair",
        description:
          "Precision frame straightening and structural repair using computerized measuring systems. Restore your vehicle's structural integrity.",
        parentSlug: "collision-repair",
        keywords: ["frame repair", "frame straightening", "structural repair", "unibody repair"],
      },
      {
        slug: "insurance-claims",
        name: "Insurance Claims",
        description:
          "Shops that work directly with all major insurance providers. Streamlined claim process with no out-of-pocket hassle.",
        parentSlug: "collision-repair",
        keywords: ["insurance claims", "accident repair", "insurance billing", "claim assistance"],
      },
    ],
    trustSignals: [
      "Direct Repair Program (DRP)",
      "I-CAR Gold Class Certified",
      "OEM Parts Guaranteed",
      "Lifetime Repair Warranty",
    ],
    keywords: ["collision repair", "accident repair", "frame repair", "insurance claims", "body damage"],
  },
  {
    slug: "auto-glass",
    name: "Auto Glass",
    shortName: "Auto Glass",
    description:
      "Professional windshield repair and replacement, side window installation, and advanced driver assistance system (ADAS) recalibration.",
    seoDescription:
      "Find trusted auto glass repair and replacement shops near you. Windshield repair, window replacement, and ADAS recalibration services.",
    icon: ICONS.autoGlass,
    yelpCategories: "autoglass",
    subcategories: [
      {
        slug: "windshield-repair",
        name: "Windshield Repair",
        description:
          "Quick chip and crack repair that restores windshield integrity. Most repairs completed in under 30 minutes.",
        parentSlug: "auto-glass",
        keywords: ["windshield repair", "chip repair", "crack repair", "glass repair"],
      },
      {
        slug: "windshield-replacement",
        name: "Windshield Replacement",
        description:
          "Full windshield replacement using OEM or equivalent glass. Includes ADAS recalibration when required.",
        parentSlug: "auto-glass",
        keywords: ["windshield replacement", "auto glass replacement", "OEM windshield"],
      },
    ],
    trustSignals: [
      "AGSC Certified",
      "OEM Glass Available",
      "ADAS Recalibration",
      "Insurance Approved",
    ],
    keywords: ["auto glass", "windshield repair", "windshield replacement", "window repair", "ADAS"],
  },
  {
    slug: "auto-painting",
    name: "Auto Painting",
    shortName: "Painting",
    description:
      "Professional automotive painting and refinishing services. From color-matched spot repairs to full custom paint jobs by master painters.",
    seoDescription:
      "Find expert auto painting shops near you. Professional refinishing, color matching, custom paint jobs, and restoration painting.",
    icon: ICONS.autoPainting,
    yelpCategories: "auto_paint,bodyshops",
    subcategories: [
      {
        slug: "custom-paint",
        name: "Custom Paint Jobs",
        description:
          "One-of-a-kind custom paint work including specialty colors, effects, and multi-stage finishes by master painters.",
        parentSlug: "auto-painting",
        keywords: ["custom paint", "custom auto paint", "specialty paint", "show car paint"],
      },
      {
        slug: "color-matching",
        name: "Color Matching",
        description:
          "Precision computerized color matching to ensure seamless repair blending. Factory-exact color reproduction.",
        parentSlug: "auto-painting",
        keywords: ["color matching", "paint matching", "spot painting", "blend repair"],
      },
    ],
    trustSignals: [
      "PPG Certified Refinisher",
      "BASF Approved",
      "Axalta ColorNet",
      "Downdraft Spray Booth",
    ],
    keywords: ["auto painting", "car painting", "paint job", "refinishing", "color matching"],
  },
  {
    slug: "car-washing",
    name: "Car Washing",
    shortName: "Car Wash",
    description:
      "Professional car wash services from express exterior washes to full-service hand washes. Convenient locations with quality results.",
    seoDescription:
      "Find the best car wash services near you. Express wash, hand wash, touchless wash, and full-service car wash locations.",
    icon: ICONS.carWash,
    yelpCategories: "carwash",
    subcategories: [
      {
        slug: "hand-wash",
        name: "Hand Wash",
        description:
          "Gentle hand washing by trained professionals using premium products. No automated brushes that can damage paint.",
        parentSlug: "car-washing",
        keywords: ["hand car wash", "hand wash", "touchless wash", "premium car wash"],
      },
      {
        slug: "full-service",
        name: "Full Service Wash",
        description:
          "Complete interior and exterior cleaning including vacuuming, dashboard wipe-down, and window cleaning.",
        parentSlug: "car-washing",
        keywords: ["full service car wash", "interior exterior wash", "complete car wash"],
      },
    ],
    trustSignals: [
      "Eco-Friendly Products",
      "Water Reclamation",
      "Hand Wash Available",
      "Paint-Safe Process",
    ],
    keywords: ["car wash", "car washing", "hand wash", "express wash", "full service wash"],
  },
];

// Helper to find a service by slug
export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((s) => s.slug === slug);
}

// Helper to find a subcategory
export function getSubcategory(
  serviceSlug: string,
  subSlug: string
): { service: ServiceCategory; subcategory: ServiceCategory["subcategories"][0] } | undefined {
  const service = getServiceBySlug(serviceSlug);
  if (!service) return undefined;
  const subcategory = service.subcategories.find((sub) => sub.slug === subSlug);
  if (!subcategory) return undefined;
  return { service, subcategory };
}

// Major US cities for SEO pages
export const MAJOR_CITIES: LocationCity[] = [
  { city: "New York", state: "New York", stateCode: "NY", slug: "new-york-ny", latitude: 40.7128, longitude: -74.006, population: 8336817 },
  { city: "Los Angeles", state: "California", stateCode: "CA", slug: "los-angeles-ca", latitude: 34.0522, longitude: -118.2437, population: 3979576 },
  { city: "Chicago", state: "Illinois", stateCode: "IL", slug: "chicago-il", latitude: 41.8781, longitude: -87.6298, population: 2693976 },
  { city: "Houston", state: "Texas", stateCode: "TX", slug: "houston-tx", latitude: 29.7604, longitude: -95.3698, population: 2320268 },
  { city: "Phoenix", state: "Arizona", stateCode: "AZ", slug: "phoenix-az", latitude: 33.4484, longitude: -112.074, population: 1680992 },
  { city: "San Antonio", state: "Texas", stateCode: "TX", slug: "san-antonio-tx", latitude: 29.4241, longitude: -98.4936, population: 1547253 },
  { city: "Dallas", state: "Texas", stateCode: "TX", slug: "dallas-tx", latitude: 32.7767, longitude: -96.797, population: 1343573 },
  { city: "Austin", state: "Texas", stateCode: "TX", slug: "austin-tx", latitude: 30.2672, longitude: -97.7431, population: 978908 },
  { city: "Miami", state: "Florida", stateCode: "FL", slug: "miami-fl", latitude: 25.7617, longitude: -80.1918, population: 467963 },
  { city: "Orlando", state: "Florida", stateCode: "FL", slug: "orlando-fl", latitude: 28.5383, longitude: -81.3792, population: 307573 },
  { city: "Tampa", state: "Florida", stateCode: "FL", slug: "tampa-fl", latitude: 27.9506, longitude: -82.4572, population: 384959 },
  { city: "Jacksonville", state: "Florida", stateCode: "FL", slug: "jacksonville-fl", latitude: 30.3322, longitude: -81.6557, population: 949611 },
  { city: "Atlanta", state: "Georgia", stateCode: "GA", slug: "atlanta-ga", latitude: 33.749, longitude: -84.388, population: 498715 },
  { city: "Denver", state: "Colorado", stateCode: "CO", slug: "denver-co", latitude: 39.7392, longitude: -104.9903, population: 715522 },
  { city: "Seattle", state: "Washington", stateCode: "WA", slug: "seattle-wa", latitude: 47.6062, longitude: -122.3321, population: 737015 },
  { city: "San Francisco", state: "California", stateCode: "CA", slug: "san-francisco-ca", latitude: 37.7749, longitude: -122.4194, population: 873965 },
  { city: "San Diego", state: "California", stateCode: "CA", slug: "san-diego-ca", latitude: 32.7157, longitude: -117.1611, population: 1423851 },
  { city: "Las Vegas", state: "Nevada", stateCode: "NV", slug: "las-vegas-nv", latitude: 36.1699, longitude: -115.1398, population: 641903 },
  { city: "Portland", state: "Oregon", stateCode: "OR", slug: "portland-or", latitude: 45.5152, longitude: -122.6784, population: 652503 },
  { city: "Charlotte", state: "North Carolina", stateCode: "NC", slug: "charlotte-nc", latitude: 35.2271, longitude: -80.8431, population: 874579 },
];

// Navigation items for service-focused nav
export const SERVICE_NAV_ITEMS = SERVICE_CATEGORIES.map((s) => ({
  name: s.shortName,
  href: `/${s.slug}`,
  slug: s.slug,
}));

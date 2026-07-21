import type { Metadata } from "next";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProviderCard from "../components/ProviderCard";
import StructuredData, {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
} from "../components/StructuredData";
import { getPlaceById, PlaceDetail } from "../lib/googlePlaces";
import { Provider } from "../lib/types";

// Verified in Phase 1 against our live Places data source (see project notes).
// Fetched by place_id — deterministic, not a name-based text search.
const INDEPENDENT_PROVIDER_IDS = [
  "ChIJpTPgzoYr5ogR5z_c_04cgy4", // Electrified Garage
  "ChIJcxxBL2F754gRE1NXjrfGjrI", // Central Florida Hybrid EV Auto Repair
];

// Not fetched from Places — presented as plainly-labeled static info only,
// since this candidate was not confirmed through our own data pipeline.
const OFFICIAL_TESLA_CENTER = {
  name: "Tesla Service Center – Orlando (Eatonville)",
  address: "100 S Lake Destiny Dr, Orlando, FL 32810",
  officialUrl: "https://www.tesla.com/findus",
};

const TESLA_MODELS = [
  { name: "Model 3", href: "/cars/tesla/model-3" },
  { name: "Model Y", href: "/cars/tesla/model-y" },
  { name: "Model S", href: "/cars/tesla/model-s" },
  { name: "Model X", href: "/cars/tesla/model-x" },
  { name: "Cybertruck", href: "/cars/tesla/cybertruck" },
];

export const metadata: Metadata = {
  title: "Tesla Repair in Orlando - Independent & Official Service",
  description:
    "Find trusted Tesla and EV repair specialists in Orlando, FL. Compare independent repair shops and locate the official Tesla Service Center near you.",
  keywords: [
    "Tesla repair Orlando",
    "Tesla service Orlando",
    "EV repair Orlando",
    "independent Tesla repair Orlando",
    "Tesla Service Center Orlando",
  ],
  alternates: { canonical: "/tesla-repair-orlando" },
  openGraph: {
    title: "Tesla Repair in Orlando - Healvanna Auto",
    description:
      "Independent Tesla and EV repair specialists in Orlando, FL, plus the official Tesla Service Center.",
    url: "https://healvanna.com/tesla-repair-orlando",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tesla Repair in Orlando - Healvanna Auto",
    description:
      "Independent Tesla and EV repair specialists in Orlando, FL, plus the official Tesla Service Center.",
  },
};

// PlaceDetail (from googlePlaces.ts) has no `distance` field — this page has no
// user location to measure from, so distance is intentionally left blank and
// ProviderCard's optional distanceText is simply omitted (no distance shown).
function toProviderCardProps(detail: PlaceDetail): Provider {
  return {
    id: detail.id,
    name: detail.name,
    category: detail.category,
    city: detail.city,
    state: detail.state,
    address: detail.address,
    specialties: detail.specialties,
    verified: detail.verified,
    image: detail.image,
    description: detail.description,
    rating: detail.rating,
    reviewCount: detail.reviewCount,
    priceRange: detail.priceRange,
    phone: detail.phone,
    latitude: detail.latitude,
    longitude: detail.longitude,
    isOpen: detail.isOpen,
    distance: "",
    url: detail.url,
  };
}

export default async function TeslaRepairOrlandoPage() {
  const results = await Promise.allSettled(
    INDEPENDENT_PROVIDER_IDS.map((id) => getPlaceById(id))
  );

  const providers: Provider[] = [];
  results.forEach((result, index) => {
    const id = INDEPENDENT_PROVIDER_IDS[index];
    if (result.status === "fulfilled" && result.value.ok) {
      providers.push(toProviderCardProps(result.value.provider));
    } else {
      const reason = result.status === "fulfilled" ? result.value : result.reason;
      console.error(`[tesla-repair-orlando] Failed to load provider ${id}:`, reason);
    }
  });

  // Floor: never silently render an empty grid. One or two resolving is the
  // normal path; zero is surfaced explicitly, not hidden.
  const hasProviders = providers.length > 0;
  if (!hasProviders) {
    console.error(
      "[tesla-repair-orlando] Zero independent providers resolved at request time — rendering fallback state."
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <StructuredData
        data={generateServiceSchema({
          name: "Tesla Repair in Orlando",
          description:
            "Independent and official Tesla repair specialists serving Orlando, FL.",
          slug: "tesla-repair-orlando",
          city: "Orlando",
          state: "FL",
        })}
      />
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://healvanna.com" },
          { name: "Tesla Repair in Orlando", url: "https://healvanna.com/tesla-repair-orlando" },
        ])}
      />
      {providers.map((p) => (
        <StructuredData
          key={p.id}
          data={generateLocalBusinessSchema({
            name: p.name,
            address: p.address,
            city: p.city,
            state: p.state,
            phone: p.phone,
            rating: p.rating,
            reviewCount: p.reviewCount,
            latitude: p.latitude,
            longitude: p.longitude,
            url: p.url,
            category: p.category,
          })}
        />
      ))}

      <Navigation activeItem="SERVICES" />

      <main>
        {/* Breadcrumb */}
        <div className="pt-32 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto flex items-center gap-2 text-sm text-[#6b7a94]">
            <Link href="/" className="hover:text-[#4a90d9] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#4a90d9]">Tesla Repair in Orlando</span>
          </div>
        </div>

        {/* Hero */}
        <section className="pt-8 pb-16 px-6 md:px-12">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">
              Orlando EV Specialists
            </div>
            <h1 className="text-[clamp(32px,5vw,56px)] font-extralight tracking-tight mb-6 leading-tight">
              Tesla Repair in <span className="italic text-[#4a90d9]">Orlando</span>
            </h1>
            <p className="text-[15px] text-[#6b7a94] max-w-[650px] leading-relaxed">
              Compare independent Tesla and EV repair specialists near you, or find the official Tesla Service Center serving the Orlando area.
            </p>
          </div>
        </section>

        {/* Independent Providers */}
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-extralight mb-2">
              Independent Tesla &amp; EV Repair Specialists
            </h2>
            <p className="text-[14px] text-[#6b7a94] mb-8 max-w-[600px]">
              Independent shops near Orlando that service Tesla and other EVs, with real ratings and reviews.
            </p>
            {hasProviders ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {providers.map((p) => (
                  <ProviderCard key={p.id} provider={p} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border border-[rgba(74,144,217,0.15)] rounded-xl bg-[rgba(15,22,40,0.6)]">
                <p className="text-[#6b7a94]">
                  We&apos;re unable to load independent provider listings right now. Please check back shortly.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Official Tesla Center */}
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3 font-medium">
              Official Tesla Location
            </div>
            <h2 className="text-2xl md:text-3xl font-extralight mb-6">
              Tesla Service Center
            </h2>
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.15)] rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-[#e8edf5] mb-2">{OFFICIAL_TESLA_CENTER.name}</h3>
              <p className="text-[14px] text-[#6b7a94] mb-4">{OFFICIAL_TESLA_CENTER.address}</p>
              <p className="text-[12px] text-[#4a5568] mb-6 max-w-[600px]">
                This is Tesla&apos;s own official service location, not independently verified through our provider directory. For current hours, appointment availability, and service status, contact Tesla directly.
              </p>
              <a
                href={OFFICIAL_TESLA_CENTER.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#4a90d9] hover:text-[#6ba8eb] transition-colors"
              >
                Visit Tesla&apos;s Official Service Site
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Tesla Models */}
        <section className="px-6 md:px-12 pb-24">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-extralight mb-2">Shop Tesla Models</h2>
            <p className="text-[14px] text-[#6b7a94] mb-8 max-w-[600px]">
              Browse current Tesla deals and specs by model.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {TESLA_MODELS.map((model) => (
                <Link
                  key={model.href}
                  href={model.href}
                  className="p-5 bg-[rgba(15,22,40,0.6)] rounded-xl border border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <span className="text-[14px] font-medium text-[#e8edf5]">{model.name}</span>
                </Link>
              ))}
            </div>
            <Link
              href="/cars/tesla"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-[#4a90d9] hover:text-[#6ba8eb] transition-colors"
            >
              View All Tesla Models
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

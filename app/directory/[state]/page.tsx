import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  getAllStates,
  getStateBySlug,
  getCitiesByState,
  getNearbyStates,
  getCityUrl,
} from "../../lib/directoryData";
import { SERVICE_CATEGORIES } from "../../lib/services";

export async function generateStaticParams() {
  return getAllStates().map((state) => ({ state: state.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string }>;
}): Promise<Metadata> {
  const { state } = await params;
  const stateData = getStateBySlug(state);
  if (!stateData) return {};
  const cities = getCitiesByState(stateData.slug);
  return {
    title: `Car Services in ${stateData.name} - Find Providers in ${cities.length}+ Cities | Healvanna Auto`,
    description: `Browse car service providers in ${stateData.name}. Find car detailing, body shops, collision repair, auto glass, and more in ${cities
      .slice(0, 3)
      .map((c) => c.name)
      .join(", ")}, and more.`,
    alternates: { canonical: `/directory/${stateData.slug}` },
  };
}

function formatPopulation(pop: number): string {
  if (pop >= 1000000) return `${(pop / 1000000).toFixed(1)}M`;
  if (pop >= 1000) return `${(pop / 1000).toFixed(0)}K`;
  return pop.toString();
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state } = await params;
  const stateData = getStateBySlug(state);
  if (!stateData) notFound();

  const cities = getCitiesByState(stateData.slug);
  const nearbyStates = getNearbyStates(stateData.slug);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="DIRECTORY" />

      {/* Breadcrumbs */}
      <div className="pt-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 text-[12px] text-[#6b7a94]">
            <Link
              href="/"
              className="hover:text-[#e8edf5] transition-colors"
            >
              Home
            </Link>
            <span>&gt;</span>
            <Link
              href="/directory"
              className="text-[#4a90d9] hover:text-[#6ba8eb] transition-colors"
            >
              Directory
            </Link>
            <span>&gt;</span>
            <span className="text-[#e8edf5]">{stateData.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-12 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-[rgba(74,144,217,0.1)] flex items-center justify-center text-[#4a90d9] text-xl font-semibold">
              {stateData.abbreviation}
            </div>
            <div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] font-medium mb-1">
                Car Services Directory
              </div>
              <h1 className="text-3xl md:text-5xl font-extralight leading-tight">
                Car Services in{" "}
                <span className="italic text-[#4a90d9]">
                  {stateData.name}
                </span>
              </h1>
            </div>
          </div>
          <p className="text-[#6b7a94] text-lg max-w-2xl leading-relaxed">
            Find trusted car service providers across {stateData.name}. Browse{" "}
            {cities.length} cities for detailing, body shops, collision repair,
            and more.
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="py-12 px-6 md:px-12 bg-[#0d1420]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-2 font-medium">
                {cities.length} Cities
              </div>
              <h2 className="text-xl md:text-2xl font-extralight">
                Browse Cities in{" "}
                <span className="italic text-[#4a90d9]">
                  {stateData.name}
                </span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={getCityUrl(stateData.slug, city.slug)}
                className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(0,0,0,0.3)] ${
                  city.featured
                    ? "bg-[rgba(74,144,217,0.06)] border-[rgba(74,144,217,0.25)]"
                    : "bg-[rgba(15,22,40,0.6)] border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)]"
                }`}
              >
                <div>
                  <h3 className="text-[14px] font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-[11px] text-[#6b7a94]">
                    Pop. {formatPopulation(city.population)}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-[#3d4a61] group-hover:text-[#4a90d9] group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-2 font-medium">
            Available Services
          </div>
          <h2 className="text-xl md:text-2xl font-extralight mb-8">
            Services in{" "}
            <span className="italic text-[#4a90d9]">{stateData.name}</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {SERVICE_CATEGORIES.map((service) => (
              <div
                key={service.slug}
                className="flex items-start gap-3 p-4 rounded-xl bg-[rgba(15,22,40,0.4)] border border-[rgba(74,144,217,0.08)]"
              >
                <div className="w-9 h-9 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4.5 h-4.5 text-[#4a90d9]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={service.icon}
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] font-medium text-[#e8edf5]">
                    {service.name}
                  </div>
                  <div className="text-[11px] text-[#6b7a94] mt-0.5">
                    {service.subcategories.map((s) => s.name).join(" · ")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby States */}
      {nearbyStates.length > 0 && (
        <section className="py-12 px-6 md:px-12 bg-[#0d1420]">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-2 font-medium">
              Explore More
            </div>
            <h2 className="text-xl md:text-2xl font-extralight mb-6">
              Nearby{" "}
              <span className="italic text-[#4a90d9]">States</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {nearbyStates.slice(0, 6).map((ns) => {
                const nsCities = getCitiesByState(ns.slug);
                return (
                  <Link
                    key={ns.slug}
                    href={`/directory/${ns.slug}`}
                    className="group flex items-center gap-2.5 p-3 rounded-lg bg-[rgba(15,22,40,0.4)] border border-[rgba(74,144,217,0.08)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-300"
                  >
                    <span className="w-8 h-8 rounded-md bg-[rgba(74,144,217,0.08)] flex items-center justify-center text-[10px] font-semibold text-[#4a90d9] flex-shrink-0">
                      {ns.abbreviation}
                    </span>
                    <div className="min-w-0">
                      <div className="text-[12px] text-[#e8edf5] truncate group-hover:text-[#4a90d9] transition-colors">
                        {ns.name}
                      </div>
                      <div className="text-[10px] text-[#6b7a94]">
                        {nsCities.length} cities
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-extralight mb-4">
            Are You a Service Provider in{" "}
            <span className="italic text-[#4a90d9]">{stateData.name}</span>?
          </h2>
          <p className="text-[#6b7a94] mb-6 leading-relaxed">
            Get discovered by car owners in {stateData.name} looking for quality
            service.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#4a90d9] hover:bg-[#5a9ee5] text-[#0a0f1a] text-sm font-medium rounded-lg transition-colors duration-300"
          >
            List Your Business
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import Link from "next/link";
import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  getAllStates,
  getFeaturedStates,
  getCitiesByState,
} from "../lib/directoryData";
import { SERVICE_CATEGORIES } from "../lib/services";

export const metadata: Metadata = {
  title:
    "Car Services Directory - Find Auto Service Providers in All 50 States | Healvanna Auto",
  description:
    "Browse verified car service providers across all 50 states. Find car detailing, body shops, collision repair, auto glass, ceramic coating, and more near you.",
  alternates: { canonical: "/directory" },
};

export default function DirectoryPage() {
  const states = getAllStates();
  const featuredStates = getFeaturedStates();

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="DIRECTORY" />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="inline-block text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] font-medium mb-6 px-4 py-2 border border-[rgba(74,144,217,0.3)] rounded-full">
            National Car Services Directory
          </div>
          <h1 className="text-4xl md:text-6xl font-extralight mb-6 leading-tight">
            Find Car Service
            <br />
            <span className="italic text-[#4a90d9]">Providers</span> Near You
          </h1>
          <p className="text-[#6b7a94] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Browse verified car service providers across all 50 states. From
            detailing to collision repair, find the right shop for your vehicle.
          </p>
          <div className="flex justify-center gap-8 md:gap-16">
            {[
              { value: "50", label: "States" },
              { value: "7", label: "Service Categories" },
              { value: "1000s", label: "of Providers" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-light text-[#4a90d9]">
                  {stat.value}
                </div>
                <div className="text-[11px] tracking-[0.1em] text-[#6b7a94] mt-1 uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured States */}
      <section className="py-16 px-6 md:px-12 bg-[#0d1420]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-3 font-medium">
            Featured States
          </div>
          <h2 className="text-2xl md:text-3xl font-extralight mb-8">
            Popular <span className="italic text-[#4a90d9]">Destinations</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredStates.map((state) => {
              const cities = getCitiesByState(state.slug);
              return (
                <Link
                  key={state.slug}
                  href={`/directory/${state.slug}`}
                  className={`group relative bg-[rgba(15,22,40,0.6)] rounded-xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] ${
                    state.slug === "florida"
                      ? "border-[rgba(74,144,217,0.35)] ring-1 ring-[rgba(74,144,217,0.15)]"
                      : "border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.35)]"
                  }`}
                >
                  {state.slug === "florida" && (
                    <div className="absolute top-3 right-3 text-[8px] tracking-[0.1em] uppercase px-2 py-0.5 bg-[rgba(74,144,217,0.2)] text-[#4a90d9] rounded-sm font-semibold">
                      Our Home
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center text-[#4a90d9] text-lg font-semibold group-hover:bg-[rgba(74,144,217,0.2)] transition-colors">
                      {state.abbreviation}
                    </div>
                    <div>
                      <h3 className="text-[16px] font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">
                        {state.name}
                      </h3>
                      <p className="text-[12px] text-[#6b7a94]">
                        {cities.length} cities
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {cities.slice(0, 4).map((city) => (
                      <span
                        key={city.slug}
                        className="text-[10px] px-2 py-0.5 bg-[rgba(232,237,245,0.05)] text-[#6b7a94] rounded-sm"
                      >
                        {city.name}
                      </span>
                    ))}
                    {cities.length > 4 && (
                      <span className="text-[10px] px-2 py-0.5 text-[#4a90d9]">
                        +{cities.length - 4} more
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* All 50 States */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-3 font-medium">
            All States
          </div>
          <h2 className="text-2xl md:text-3xl font-extralight mb-8">
            Browse by <span className="italic text-[#4a90d9]">State</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {states.map((state) => {
              const cityCount = getCitiesByState(state.slug).length;
              return (
                <Link
                  key={state.slug}
                  href={`/directory/${state.slug}`}
                  className="group flex items-center gap-3 p-3 rounded-lg bg-[rgba(15,22,40,0.4)] border border-[rgba(74,144,217,0.08)] hover:border-[rgba(74,144,217,0.3)] hover:bg-[rgba(15,22,40,0.7)] transition-all duration-300"
                >
                  <span className="w-9 h-9 rounded-md bg-[rgba(74,144,217,0.08)] flex items-center justify-center text-[11px] font-semibold text-[#4a90d9] flex-shrink-0 group-hover:bg-[rgba(74,144,217,0.15)] transition-colors">
                    {state.abbreviation}
                  </span>
                  <div className="min-w-0">
                    <div className="text-[13px] text-[#e8edf5] truncate group-hover:text-[#4a90d9] transition-colors">
                      {state.name}
                    </div>
                    <div className="text-[10px] text-[#6b7a94]">
                      {cityCount} {cityCount === 1 ? "city" : "cities"}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-6 md:px-12 bg-[#0d1420]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-3 font-medium">
            Service Categories
          </div>
          <h2 className="text-2xl md:text-3xl font-extralight mb-8">
            Browse by{" "}
            <span className="italic text-[#4a90d9]">Service Type</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SERVICE_CATEGORIES.map((service) => (
              <div
                key={service.slug}
                className="bg-[rgba(15,22,40,0.6)] rounded-xl p-5 border border-[rgba(74,144,217,0.12)]"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center mb-3">
                  <svg
                    className="w-5 h-5 text-[#4a90d9]"
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
                <h3 className="text-[15px] font-medium text-[#e8edf5] mb-1.5">
                  {service.name}
                </h3>
                <p className="text-[12px] text-[#6b7a94] leading-relaxed line-clamp-2">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {service.subcategories.map((sub) => (
                    <span
                      key={sub.slug}
                      className="text-[9px] tracking-[0.05em] px-2 py-0.5 bg-[rgba(232,237,245,0.05)] text-[#6b7a94] rounded-sm"
                    >
                      {sub.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extralight mb-4">
            Are You a{" "}
            <span className="italic text-[#4a90d9]">Service Provider</span>?
          </h2>
          <p className="text-[#6b7a94] mb-8 leading-relaxed">
            Join thousands of auto service professionals on Healvanna&apos;s
            directory. Get discovered by car owners looking for quality service
            in their area.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 bg-[#4a90d9] hover:bg-[#5a9ee5] text-[#0a0f1a] text-sm font-medium rounded-lg transition-colors duration-300"
          >
            List Your Business
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

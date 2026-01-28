import type { Metadata } from "next";
import Link from "next/link";
import { SERVICE_CATEGORIES, MAJOR_CITIES } from "../lib/services";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import StructuredData, { generateBreadcrumbSchema } from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Automotive Services Directory - Find Trusted Auto Service Providers",
  description:
    "Browse all automotive services: car detailing, car wrapping, body shops, collision repair, auto glass, auto painting, and car washing. Find verified providers near you.",
  keywords: [
    "automotive services",
    "car services",
    "auto repair",
    "car detailing",
    "body shop",
    "collision repair",
    "auto glass",
    "car wrapping",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "All Automotive Services - Healvanna Auto",
    description:
      "Browse all automotive services and find verified providers near you.",
    url: "https://healvanna.com/services",
  },
};

export default function ServicesIndexPage() {
  const topCities = MAJOR_CITIES.slice(0, 12);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <StructuredData
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://healvanna.com" },
          { name: "Services", url: "https://healvanna.com/services" },
        ])}
      />

      <Navigation activeItem="SERVICES" />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-4 font-medium">
            Service Directory
          </div>
          <h1 className="text-[clamp(36px,5vw,64px)] font-extralight tracking-tight mb-5">
            Premium Automotive{" "}
            <span className="font-semibold bg-gradient-to-r from-[#e8edf5] to-[#4a90d9] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-[16px] text-[#6b7a94] max-w-[600px] mx-auto leading-relaxed">
            Find verified specialists across every automotive service category.
            Real reviews, trusted certifications, and quality you can count on.
          </p>
        </div>
      </section>

      {/* Service Categories Grid */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] rounded-xl p-8 border border-[rgba(74,144,217,0.15)] hover:border-[rgba(74,144,217,0.4)] transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[rgba(74,144,217,0.1)] flex items-center justify-center mb-5 group-hover:bg-[rgba(74,144,217,0.2)] transition-colors">
                <svg
                  className="w-7 h-7 text-[#4a90d9]"
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

              {/* Name & Description */}
              <h2 className="text-xl font-medium text-[#e8edf5] mb-3 group-hover:text-[#4a90d9] transition-colors">
                {service.name}
              </h2>
              <p className="text-[14px] text-[#6b7a94] leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Subcategories */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.subcategories.map((sub) => (
                  <span
                    key={sub.slug}
                    className="text-[10px] tracking-[0.05em] px-2.5 py-1 bg-[rgba(232,237,245,0.05)] text-[#6b7a94] rounded-md"
                  >
                    {sub.name}
                  </span>
                ))}
              </div>

              {/* Trust Signals Preview */}
              <div className="flex items-center gap-2 text-[11px] text-[#4a90d9]">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  {service.trustSignals[0]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Browse by City */}
      <section className="px-6 md:px-12 pb-20 bg-[#0d1424]">
        <div className="max-w-[1200px] mx-auto pt-16">
          <div className="text-center mb-12">
            <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3 font-medium">
              Browse by Location
            </div>
            <h2 className="text-[clamp(28px,4vw,40px)] font-extralight tracking-tight mb-4">
              Services in{" "}
              <span className="font-semibold text-[#4a90d9]">
                Major Cities
              </span>
            </h2>
            <p className="text-[15px] text-[#6b7a94] max-w-[500px] mx-auto">
              Find automotive service providers in your city with local reviews
              and ratings.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {topCities.map((city) => (
              <div
                key={city.slug}
                className="bg-[rgba(10,15,26,0.6)] rounded-lg p-5 border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.25)] transition-all"
              >
                <h3 className="text-[15px] font-medium text-[#e8edf5] mb-3">
                  {city.city}, {city.stateCode}
                </h3>
                <div className="space-y-1.5">
                  {SERVICE_CATEGORIES.slice(0, 4).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}/${city.slug}`}
                      className="block text-[12px] text-[#6b7a94] hover:text-[#4a90d9] transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <span className="block text-[11px] text-[#4a90d9] mt-2">
                    +{SERVICE_CATEGORIES.length - 4} more services
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-[800px] mx-auto text-center bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-xl p-12">
          <h3 className="text-2xl font-light mb-4">
            Are You an Automotive Service Provider?
          </h3>
          <p className="text-[#6b7a94] mb-6">
            Join our growing network of verified automotive service specialists.
            Get discovered by vehicle owners who value quality and
            craftsmanship.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#4a90d9] text-[#0a0f1a] font-medium rounded hover:bg-[#6ba8eb] transition-colors"
          >
            Apply to Join
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

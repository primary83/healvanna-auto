"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { ServiceCategory } from "../lib/types";
import { SERVICE_CATEGORIES, MAJOR_CITIES } from "../lib/services";
import { calculateDistance } from "../hooks/useGeoLocation";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ServiceHero from "./ServiceHero";
import ProviderCard from "./ProviderCard";
import TrustSignals from "./TrustSignals";
import StructuredData, {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "./StructuredData";
import RelatedArticles from "./RelatedArticles";
import { CompareBar } from "./CompareProviders";

interface LocationServicePageProps {
  service: ServiceCategory;
  cityName: string;
  stateCode: string;
  latitude: number;
  longitude: number;
}

interface Provider {
  id: string;
  name: string;
  category: string;
  city: string;
  state: string;
  address: string;
  specialties: string[];
  verified: boolean;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  phone: string;
  latitude: number;
  longitude: number;
  isOpen: boolean;
  distance: string;
  url: string;
}

const sortOptions = [
  { label: "Nearest", value: "distance" },
  { label: "Highest Rated", value: "rating" },
  { label: "Most Reviews", value: "reviews" },
];

function LocationServiceContent({
  service,
  cityName,
  stateCode,
  latitude,
  longitude,
}: LocationServicePageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("distance");
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<Provider[]>([]);

  function handleCompareToggle(provider: Provider) {
    setCompareList((prev) => {
      const exists = prev.find((p) => p.id === provider.id);
      if (exists) return prev.filter((p) => p.id !== provider.id);
      if (prev.length >= 3) return prev;
      return [...prev, provider];
    });
  }

  useEffect(() => {
    const fetchProviders = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams({
          latitude: latitude.toString(),
          longitude: longitude.toString(),
          categories: service.yelpCategories,
          limit: "20",
          sort_by:
            sortBy === "distance"
              ? "distance"
              : sortBy === "rating"
              ? "rating"
              : "review_count",
        });

        if (searchQuery) {
          params.append("term", searchQuery);
        }

        const response = await fetch(`/api/yelp?${params.toString()}`);
        if (!response.ok) throw new Error("Failed to fetch providers");
        const data = await response.json();
        setProviders(data.providers || []);
      } catch {
        setError("Unable to load providers. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProviders();
  }, [latitude, longitude, sortBy, searchQuery, service.yelpCategories]);

  // EV-related filter definitions
  const EV_FILTERS = [
    { label: "EV Friendly", value: "ev", keywords: ["ev", "electric", "tesla", "rivian", "lucid", "hybrid", "electric vehicle"] },
    { label: "Tesla Certified", value: "tesla", keywords: ["tesla"] },
    { label: "High Rated (4.5+)", value: "highrated", keywords: [] },
    { label: "Open Now", value: "open", keywords: [] },
  ];

  function toggleFilter(value: string) {
    setActiveFilters((prev) =>
      prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]
    );
  }

  const filteredProviders = useMemo(() => {
    return providers
      .map((provider) => {
        const dist = calculateDistance(
          latitude,
          longitude,
          provider.latitude,
          provider.longitude
        );
        return {
          ...provider,
          calculatedDistance: dist,
          distanceText: `${dist.toFixed(1)} mi`,
        };
      })
      .filter((provider) => {
        if (activeFilters.length === 0) return true;
        return activeFilters.every((filter) => {
          const searchText = `${provider.name} ${provider.category} ${provider.specialties.join(" ")} ${provider.description}`.toLowerCase();
          switch (filter) {
            case "highrated":
              return provider.rating >= 4.5;
            case "open":
              return provider.isOpen;
            default: {
              const filterDef = EV_FILTERS.find((f) => f.value === filter);
              if (!filterDef || filterDef.keywords.length === 0) return true;
              return filterDef.keywords.some((kw) => searchText.includes(kw));
            }
          }
        });
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "rating":
            return b.rating - a.rating;
          case "reviews":
            return b.reviewCount - a.reviewCount;
          default:
            return a.calculatedDistance - b.calculatedDistance;
        }
      });
  }, [providers, sortBy, latitude, longitude, activeFilters]);

  const locationString = `${cityName}, ${stateCode}`;

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: service.name, href: `/${service.slug}` },
    {
      name: locationString,
      href: `/${service.slug}/${cityName.toLowerCase().replace(/\s+/g, "-")}-${stateCode.toLowerCase()}`,
    },
  ];

  // Get nearby cities for internal linking
  const nearbyCities = MAJOR_CITIES.filter(
    (c) =>
      c.slug !==
      `${cityName.toLowerCase().replace(/\s+/g, "-")}-${stateCode.toLowerCase()}`
  ).slice(0, 8);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <StructuredData
        data={generateServiceSchema({
          name: `${service.name} in ${locationString}`,
          description: `Find the best ${service.name.toLowerCase()} providers in ${locationString}. ${service.description}`,
          slug: `${service.slug}/${cityName.toLowerCase().replace(/\s+/g, "-")}-${stateCode.toLowerCase()}`,
          city: cityName,
          state: stateCode,
        })}
      />
      <StructuredData
        data={generateBreadcrumbSchema(
          breadcrumbs.map((b) => ({
            name: b.name,
            url: `https://healvanna.com${b.href}`,
          }))
        )}
      />

      <Navigation activeItem="SERVICES" />

      <ServiceHero
        label={service.name}
        title={`Best ${service.name} in`}
        titleAccent={locationString}
        description={`Find top-rated ${service.name.toLowerCase()} providers in ${locationString}. Verified specialists with real reviews and ratings.`}
        detectedLocation={locationString}
        breadcrumbs={breadcrumbs}
      />

      {/* Subcategory Pills */}
      {service.subcategories.length > 0 && (
        <section className="px-6 md:px-12 pb-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-wrap gap-2">
              {service.subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/${service.slug}/${sub.slug}`}
                  className="px-4 py-2 text-xs tracking-wider rounded-full bg-[rgba(74,144,217,0.1)] text-[#6b7a94] hover:text-[#e8edf5] border border-[rgba(74,144,217,0.2)] hover:border-[#4a90d9] transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Sort */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder={`Search ${service.name.toLowerCase()} in ${cityName}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-4 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
              />
              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3d4a61]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-5 py-4 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] text-sm focus:outline-none focus:border-[#4a90d9] cursor-pointer"
            >
              {sortOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="bg-[#0a0f1a]"
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {EV_FILTERS.map((filter) => (
              <button
                key={filter.value}
                onClick={() => toggleFilter(filter.value)}
                className={`px-3.5 py-1.5 text-[11px] tracking-[0.03em] font-medium rounded-full border transition-all duration-200 ${
                  activeFilters.includes(filter.value)
                    ? "bg-[#4a90d9] text-[#0a0f1a] border-[#4a90d9]"
                    : "bg-transparent text-[#6b7a94] border-[rgba(74,144,217,0.2)] hover:border-[#4a90d9] hover:text-[#4a90d9]"
                }`}
              >
                {filter.label}
              </button>
            ))}
            {activeFilters.length > 0 && (
              <button
                onClick={() => setActiveFilters([])}
                className="px-3 py-1.5 text-[11px] text-[#6b7a94] hover:text-[#ef4444] transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>

          <p className="text-sm text-[#6b7a94]">
            {isLoading ? (
              "Loading providers..."
            ) : error ? (
              <span className="text-[#ef4444]">{error}</span>
            ) : (
              <>
                Showing{" "}
                <span className="text-[#e8edf5] font-medium">
                  {filteredProviders.length}
                </span>{" "}
                {service.name.toLowerCase()} providers in{" "}
                <span className="text-[#4a90d9]">{locationString}</span>
              </>
            )}
          </p>
        </div>
      </section>

      {/* Provider Grid */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[rgba(15,22,40,0.6)] rounded-xl p-5 border border-[rgba(74,144,217,0.12)] animate-pulse"
                >
                  <div className="flex gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-[rgba(74,144,217,0.1)]" />
                    <div className="flex-1">
                      <div className="h-4 bg-[rgba(74,144,217,0.1)] rounded mb-2 w-3/4" />
                      <div className="h-3 bg-[rgba(74,144,217,0.1)] rounded w-1/2" />
                    </div>
                  </div>
                  <div className="h-3 bg-[rgba(74,144,217,0.1)] rounded w-1/3 mb-4" />
                  <div className="flex gap-2">
                    <div className="h-6 bg-[rgba(74,144,217,0.1)] rounded w-16" />
                    <div className="h-6 bg-[rgba(74,144,217,0.1)] rounded w-24" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-[#6b7a94] mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-[#4a90d9] text-[#0a0f1a] rounded hover:bg-[#6ba8eb] transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : filteredProviders.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#6b7a94]">
                No providers found. Try a different search term.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProviders.map((provider) => (
                <ProviderCard
                  key={provider.id}
                  provider={provider}
                  onCompareToggle={handleCompareToggle}
                  isCompareSelected={compareList.some((p) => p.id === provider.id)}
                  compareDisabled={compareList.length >= 3}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Trust Signals */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <TrustSignals
            signals={service.trustSignals}
            title={`Why Trust Our ${cityName} ${service.name} Providers?`}
          />
        </div>
      </section>

      {/* Yelp Attribution */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[11px] text-[#3d4a61]">
            Business data provided by{" "}
            <span className="text-[#c41200]">Yelp</span>
          </p>
        </div>
      </section>

      {/* Other Cities */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-xl font-light mb-6">
            {service.name} in Other Cities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {nearbyCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${service.slug}/${city.slug}`}
                className="text-[13px] text-[#6b7a94] hover:text-[#4a90d9] transition-colors py-1"
              >
                {service.name} in {city.city}, {city.stateCode}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services in This City */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-xl font-light mb-6">
            Other Services in {cityName}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {SERVICE_CATEGORIES.filter((s) => s.slug !== service.slug).map(
              (s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/${cityName.toLowerCase().replace(/\s+/g, "-")}-${stateCode.toLowerCase()}`}
                  className="bg-[rgba(15,22,40,0.4)] rounded-lg p-4 border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all text-center group"
                >
                  <div className="text-[13px] font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">
                    {s.shortName}
                  </div>
                  <div className="text-[10px] text-[#6b7a94] mt-1">
                    in {cityName}
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <RelatedArticles
        serviceSlug={service.slug}
        serviceName={service.name}
        cityName={cityName}
      />

      {/* CTA */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-[800px] mx-auto text-center bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-12">
          <h3 className="text-2xl font-light mb-4">
            Own a {service.name} Business in {cityName}?
          </h3>
          <p className="text-[#6b7a94] mb-6">
            Join our network of verified automotive service specialists and get
            discovered by local vehicle owners.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#4a90d9] text-[#0a0f1a] font-medium rounded hover:bg-[#6ba8eb] transition-colors"
          >
            Apply to Join
          </Link>
        </div>
      </section>

      <CompareBar
        selected={compareList.map((p) => ({
          id: p.id,
          name: p.name,
          category: p.category,
          rating: p.rating,
          reviewCount: p.reviewCount,
          phone: p.phone,
          address: p.address,
          specialties: p.specialties,
          isOpen: p.isOpen,
          priceRange: p.priceRange,
          distanceText: (p as Provider & { distanceText?: string }).distanceText,
          url: p.url,
          image: p.image,
        }))}
        onRemove={(id) => setCompareList((prev) => prev.filter((p) => p.id !== id))}
        onClear={() => setCompareList([])}
      />

      <Footer />
    </div>
  );
}

export default function LocationServicePage(
  props: LocationServicePageProps
) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5] flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-[#4a90d9] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-[#6b7a94]">Loading...</p>
          </div>
        </div>
      }
    >
      <LocationServiceContent {...props} />
    </Suspense>
  );
}

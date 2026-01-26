"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useGeoLocation, calculateDistance } from "../hooks/useGeoLocation";
import { ServiceCategory } from "../lib/types";
import { SERVICE_CATEGORIES, MAJOR_CITIES } from "../lib/services";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ServiceHero from "./ServiceHero";
import ProviderCard from "./ProviderCard";
import TrustSignals from "./TrustSignals";
import StructuredData, {
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "./StructuredData";
import QuoteForm from "./QuoteForm";

interface ServiceListingPageProps {
  service: ServiceCategory;
  subcategorySlug?: string;
}

const locations = [
  "My Location",
  "Orlando, FL",
  "Tampa, FL",
  "Miami, FL",
  "Jacksonville, FL",
  "Austin, TX",
  "Houston, TX",
  "Dallas, TX",
  "Los Angeles, CA",
  "San Francisco, CA",
  "New York, NY",
  "Chicago, IL",
  "Phoenix, AZ",
  "Denver, CO",
  "Seattle, WA",
  "Atlanta, GA",
];

const locationCoordinates: Record<string, { lat: number; lon: number }> = {
  "Orlando, FL": { lat: 28.5383, lon: -81.3792 },
  "Tampa, FL": { lat: 27.9506, lon: -82.4572 },
  "Miami, FL": { lat: 25.7617, lon: -80.1918 },
  "Jacksonville, FL": { lat: 30.3322, lon: -81.6557 },
  "Austin, TX": { lat: 30.2672, lon: -97.7431 },
  "Houston, TX": { lat: 29.7604, lon: -95.3698 },
  "Dallas, TX": { lat: 32.7767, lon: -96.797 },
  "Los Angeles, CA": { lat: 34.0522, lon: -118.2437 },
  "San Francisco, CA": { lat: 37.7749, lon: -122.4194 },
  "New York, NY": { lat: 40.7128, lon: -74.006 },
  "Chicago, IL": { lat: 41.8781, lon: -87.6298 },
  "Phoenix, AZ": { lat: 33.4484, lon: -112.074 },
  "Denver, CO": { lat: 39.7392, lon: -104.9903 },
  "Seattle, WA": { lat: 47.6062, lon: -122.3321 },
  "Atlanta, GA": { lat: 33.749, lon: -84.388 },
};

const sortOptions = [
  { label: "Nearest", value: "distance" },
  { label: "Highest Rated", value: "rating" },
  { label: "Most Reviews", value: "reviews" },
];

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

function ServiceListingContent({ service, subcategorySlug }: ServiceListingPageProps) {
  const activeSubcategory = subcategorySlug
    ? service.subcategories.find((s) => s.slug === subcategorySlug)
    : null;

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("My Location");
  const [sortBy, setSortBy] = useState("distance");
  const [providers, setProviders] = useState<Provider[]>([]);
  const [isLoadingProviders, setIsLoadingProviders] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const {
    latitude: userLat,
    longitude: userLon,
    isLoading: isLoadingLocation,
    detectedLocation,
  } = useGeoLocation();

  const { centerLat, centerLon, displayLocation } = useMemo(() => {
    if (selectedLocation === "My Location") {
      return {
        centerLat: userLat,
        centerLon: userLon,
        displayLocation: detectedLocation,
      };
    }
    const coords = locationCoordinates[selectedLocation];
    if (coords) {
      return {
        centerLat: coords.lat,
        centerLon: coords.lon,
        displayLocation: selectedLocation,
      };
    }
    return {
      centerLat: userLat,
      centerLon: userLon,
      displayLocation: detectedLocation,
    };
  }, [selectedLocation, userLat, userLon, detectedLocation]);

  useEffect(() => {
    const fetchProviders = async () => {
      if (!centerLat || !centerLon) return;

      setIsLoadingProviders(true);
      setError(null);

      try {
        const params = new URLSearchParams({
          latitude: centerLat.toString(),
          longitude: centerLon.toString(),
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
        } else if (activeSubcategory) {
          params.append("term", activeSubcategory.name);
        }

        const response = await fetch(`/api/yelp?${params.toString()}`);
        if (!response.ok) throw new Error("Failed to fetch providers");
        const data = await response.json();
        setProviders(data.providers || []);
      } catch {
        setError("Unable to load providers. Please try again later.");
      } finally {
        setIsLoadingProviders(false);
      }
    };

    fetchProviders();
  }, [centerLat, centerLon, sortBy, searchQuery, service.yelpCategories, activeSubcategory]);

  const filteredProviders = useMemo(() => {
    return providers.map((provider) => {
      const dist = calculateDistance(
        centerLat,
        centerLon,
        provider.latitude,
        provider.longitude
      );
      return {
        ...provider,
        calculatedDistance: dist,
        distanceText: `${dist.toFixed(1)} mi`,
      };
    }).sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "reviews":
          return b.reviewCount - a.reviewCount;
        default:
          return a.calculatedDistance - b.calculatedDistance;
      }
    });
  }, [providers, sortBy, centerLat, centerLon]);

  const isLoading = isLoadingLocation || isLoadingProviders;

  // Build breadcrumbs
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: service.name, href: `/${service.slug}` },
  ];
  if (activeSubcategory) {
    breadcrumbs.push({
      name: activeSubcategory.name,
      href: `/${service.slug}/${activeSubcategory.slug}`,
    });
  }

  // Hero text
  const heroTitle = activeSubcategory
    ? `${activeSubcategory.name}`
    : `${service.name}`;
  const heroAccent = activeSubcategory ? "Specialists" : "Near You";
  const heroDescription = activeSubcategory
    ? activeSubcategory.description
    : service.description;

  // Cities for this service (for SEO internal linking)
  const topCities = MAJOR_CITIES.slice(0, 10);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      {/* Structured Data */}
      <StructuredData
        data={generateServiceSchema({
          name: activeSubcategory ? activeSubcategory.name : service.name,
          description: heroDescription,
          slug: activeSubcategory
            ? `${service.slug}/${activeSubcategory.slug}`
            : service.slug,
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
        label={activeSubcategory ? service.name : "Service Directory"}
        title={heroTitle}
        titleAccent={heroAccent}
        description={heroDescription}
        detectedLocation={displayLocation}
        isLoadingLocation={isLoadingLocation}
        breadcrumbs={breadcrumbs}
      />

      {/* Subcategory Pills (only on parent service page) */}
      {!activeSubcategory && service.subcategories.length > 0 && (
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

      {/* Search and Filters */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder={`Search ${service.name.toLowerCase()} by name or specialty...`}
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
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-5 py-4 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.2)] rounded text-[#e8edf5] text-sm focus:outline-none focus:border-[#4a90d9] cursor-pointer min-w-[180px]"
            >
              {locations.map((loc) => (
                <option key={loc} value={loc} className="bg-[#0a0f1a]">
                  {loc === "My Location"
                    ? `${loc}${detectedLocation ? ` (${detectedLocation})` : ""}`
                    : loc}
                </option>
              ))}
            </select>
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
                {service.name.toLowerCase()} providers
                {displayLocation && (
                  <span>
                    {" "}
                    near{" "}
                    <span className="text-[#4a90d9]">{displayLocation}</span>
                  </span>
                )}
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
                No providers found in this area. Try a different location or
                search term.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProviders.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
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
            title={`Why Trust Our ${service.name} Providers?`}
          />
        </div>
      </section>

      {/* Yelp Attribution */}
      <section className="px-6 md:px-12 pb-8">
        <div className="max-w-[1400px] mx-auto text-center">
          <p className="text-[11px] text-[#3d4a61]">
            Business data provided by <span className="text-[#c41200]">Yelp</span>
          </p>
        </div>
      </section>

      {/* Subcategories Section (on parent page) */}
      {!activeSubcategory && service.subcategories.length > 0 && (
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-2xl font-light mb-8">
              Explore{" "}
              <span className="font-semibold text-[#4a90d9]">
                {service.name}
              </span>{" "}
              Specialties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {service.subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/${service.slug}/${sub.slug}`}
                  className="bg-[rgba(15,22,40,0.6)] rounded-xl p-6 border border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.35)] transition-all duration-300 hover:-translate-y-1 group"
                >
                  <h3 className="text-lg font-medium text-[#e8edf5] mb-2 group-hover:text-[#4a90d9] transition-colors">
                    {sub.name}
                  </h3>
                  <p className="text-[13px] text-[#6b7a94] leading-relaxed mb-4">
                    {sub.description}
                  </p>
                  <span className="text-[11px] text-[#4a90d9] tracking-[0.1em] uppercase font-medium">
                    Find {sub.name} Specialists &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Location SEO Links */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-xl font-light mb-6">
            {service.name} by City
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {topCities.map((city) => (
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

      {/* Cross-link Other Services */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-xl font-light mb-6">Other Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {SERVICE_CATEGORIES.filter((s) => s.slug !== service.slug).map(
              (s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="bg-[rgba(15,22,40,0.4)] rounded-lg p-4 border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all text-center group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center mx-auto mb-3 group-hover:bg-[rgba(74,144,217,0.2)] transition-colors">
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
                        d={s.icon}
                      />
                    </svg>
                  </div>
                  <div className="text-[13px] font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">
                    {s.shortName}
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 pb-24">
        <div className="max-w-[800px] mx-auto text-center bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.15)] rounded-lg p-12">
          <h3 className="text-2xl font-light mb-4">
            Are You a {service.name} Provider?
          </h3>
          <p className="text-[#6b7a94] mb-6">
            Join our network of verified automotive service specialists. Get
            discovered by vehicle owners looking for quality{" "}
            {service.name.toLowerCase()} services.
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

export default function ServiceListingPage(props: ServiceListingPageProps) {
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
      <ServiceListingContent {...props} />
    </Suspense>
  );
}

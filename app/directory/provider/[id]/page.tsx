"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import QuoteRequestModal from "../../../components/QuoteRequestModal";

interface ProviderDetail {
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
  photos?: string[];
  hours?: { day: string; hours: string }[];
}

interface Review {
  id: string;
  user: { name: string; image_url?: string };
  rating: number;
  text: string;
  time_created: string;
}

export default function ProviderDetailPage() {
  const { id } = useParams();
  const [provider, setProvider] = useState<ProviderDetail | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  useEffect(() => {
    async function fetchProvider() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/places/${id}`);
        if (!res.ok) {
          const errorData = await res.json().catch(() => null);
          if (errorData?.details?.error?.code === "BUSINESS_UNAVAILABLE") {
            setError("This business is not currently available for detailed viewing. It may be new or not yet fully listed.");
          } else {
            setError("Unable to load provider details.");
          }
          return;
        }
        const data = await res.json();
        setProvider(data.provider);
        setReviews(data.reviews || []);
      } catch {
        setError("Unable to load provider details.");
      } finally {
        setIsLoading(false);
      }
    }
    if (id) fetchProvider();
  }, [id]);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="DIRECTORY" />

      {isLoading ? (
        <div className="pt-32 pb-20 px-6 md:px-12">
          <div className="max-w-[1000px] mx-auto animate-pulse">
            <div className="h-3 bg-[rgba(74,144,217,0.08)] rounded w-48 mb-8" />
            <div className="h-8 bg-[rgba(74,144,217,0.1)] rounded w-2/3 mb-4" />
            <div className="h-4 bg-[rgba(74,144,217,0.06)] rounded w-1/3 mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="h-12 bg-[rgba(74,144,217,0.06)] rounded-lg" />
              <div className="h-12 bg-[rgba(74,144,217,0.06)] rounded-lg" />
              <div className="h-12 bg-[rgba(74,144,217,0.06)] rounded-lg" />
            </div>
            <div className="h-64 bg-[rgba(74,144,217,0.06)] rounded-xl mb-8" />
            <div className="h-32 bg-[rgba(74,144,217,0.06)] rounded-xl" />
          </div>
        </div>
      ) : error ? (
        <div className="pt-32 pb-20 px-6 md:px-12 text-center">
          <div className="max-w-[600px] mx-auto">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(239,68,68,0.1)] flex items-center justify-center">
              <svg
                className="w-8 h-8 text-[#ef4444]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <p className="text-[#6b7a94] mb-6">{error}</p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => window.history.back()}
                className="px-6 py-2.5 bg-[rgba(232,237,245,0.06)] hover:bg-[rgba(232,237,245,0.12)] text-[#e8edf5] text-sm font-medium rounded-lg transition-colors border border-[rgba(232,237,245,0.1)]"
              >
                Go Back
              </button>
              <Link
                href="/directory"
                className="px-6 py-2.5 bg-[#4a90d9] hover:bg-[#5a9ee5] text-[#0a0f1a] text-sm font-medium rounded-lg transition-colors"
              >
                Back to Directory
              </Link>
            </div>
          </div>
        </div>
      ) : provider ? (
        <>
          {/* Breadcrumbs */}
          <div className="pt-24 px-6 md:px-12">
            <div className="max-w-[1000px] mx-auto">
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
                <span className="text-[#e8edf5] truncate">
                  {provider.name}
                </span>
              </nav>
            </div>
          </div>

          {/* Provider Header */}
          <section className="pt-6 pb-8 px-6 md:px-12">
            <div className="max-w-[1000px] mx-auto">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Image */}
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl bg-[rgba(74,144,217,0.1)] flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {provider.image ? (
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      className="w-12 h-12 text-[#4a90d9]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <h1 className="text-2xl md:text-4xl font-extralight">
                      {provider.name}
                    </h1>
                    {provider.verified && (
                      <span className="mt-2 text-[9px] tracking-[0.1em] uppercase px-2.5 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] rounded-sm font-semibold flex-shrink-0">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-[14px] text-[#6b7a94] mb-3">
                    {provider.address}
                    {provider.city && `, ${provider.city}`}
                    {provider.state && `, ${provider.state}`}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(provider.rating)
                                ? "text-[#f5c518]"
                                : "text-[#3d4a61]"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-[14px] font-medium">
                        {provider.rating}
                      </span>
                      <span className="text-[13px] text-[#6b7a94]">
                        ({provider.reviewCount} reviews)
                      </span>
                    </div>
                    {/* Open/Closed */}
                    <span
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-md ${
                        provider.isOpen
                          ? "bg-[rgba(34,197,94,0.1)] text-[#22c55e]"
                          : "bg-[rgba(239,68,68,0.1)] text-[#ef4444]"
                      }`}
                    >
                      {provider.isOpen ? "Open Now" : "Closed"}
                    </span>
                    {provider.priceRange && (
                      <span className="text-[13px] text-[#6b7a94]">
                        {provider.priceRange}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <section className="px-6 md:px-12 pb-8">
            <div className="max-w-[1000px] mx-auto flex flex-col sm:flex-row gap-3">
              {provider.phone && (
                <a
                  href={`tel:${provider.phone}`}
                  className="flex items-center justify-center gap-2 flex-1 py-3.5 text-[13px] font-medium text-[#e8edf5] bg-[rgba(232,237,245,0.06)] hover:bg-[rgba(232,237,245,0.12)] border border-[rgba(232,237,245,0.1)] rounded-lg transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  Call {provider.phone}
                </a>
              )}
              <button
                onClick={() => setShowQuoteModal(true)}
                className="flex items-center justify-center gap-2 flex-1 py-3.5 text-[13px] font-medium text-[#0a0f1a] bg-[#4a90d9] hover:bg-[#5a9ee5] rounded-lg transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                  />
                </svg>
                Get a Quote
              </button>
              {provider.url && (
                <a
                  href={provider.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 py-3.5 text-[13px] font-medium text-[#4a90d9] bg-[rgba(74,144,217,0.08)] hover:bg-[rgba(74,144,217,0.18)] border border-[rgba(74,144,217,0.2)] rounded-lg transition-all"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                  Visit Website
                </a>
              )}
            </div>
          </section>

          {/* About + Specialties */}
          <section className="px-6 md:px-12 pb-8">
            <div className="max-w-[1000px] mx-auto">
              <div className="bg-[rgba(15,22,40,0.6)] rounded-xl p-6 border border-[rgba(74,144,217,0.12)]">
                {provider.description && (
                  <div className="mb-5">
                    <h2 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-3 font-medium">
                      About
                    </h2>
                    <p className="text-[14px] text-[#6b7a94] leading-relaxed">
                      {provider.description}
                    </p>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  <span className="text-[11px] font-medium px-3 py-1.5 rounded-md bg-[rgba(74,144,217,0.12)] text-[#4a90d9]">
                    {provider.category}
                  </span>
                  {provider.specialties?.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] px-3 py-1.5 rounded-md bg-[rgba(232,237,245,0.05)] text-[#6b7a94]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Reviews */}
          {reviews.length > 0 && (
            <section className="px-6 md:px-12 pb-8">
              <div className="max-w-[1000px] mx-auto">
                <h2 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">
                  Reviews
                </h2>
                <div className="space-y-3">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-[rgba(15,22,40,0.6)] rounded-xl p-5 border border-[rgba(74,144,217,0.08)]"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-[rgba(74,144,217,0.1)] flex items-center justify-center text-[11px] font-semibold text-[#4a90d9]">
                          {review.user?.name?.[0] || "?"}
                        </div>
                        <div>
                          <div className="text-[13px] font-medium text-[#e8edf5]">
                            {review.user?.name || "Anonymous"}
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-3 h-3 ${
                                  i < review.rating
                                    ? "text-[#f5c518]"
                                    : "text-[#3d4a61]"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        {review.time_created && (
                          <span className="text-[11px] text-[#3d4a61] ml-auto">
                            {new Date(
                              review.time_created
                            ).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                      <p className="text-[13px] text-[#6b7a94] leading-relaxed">
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Map */}
          {provider.address && (
            <section className="px-6 md:px-12 pb-8">
              <div className="max-w-[1000px] mx-auto">
                <h2 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">
                  Location
                </h2>
                <div className="rounded-xl overflow-hidden border border-[rgba(74,144,217,0.12)] h-[300px]">
                  <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
                      `${provider.name} ${provider.address} ${provider.city} ${provider.state}`
                    )}`}
                  />
                </div>
              </div>
            </section>
          )}

          {/* Claim CTA */}
          <section className="px-6 md:px-12 pb-12">
            <div className="max-w-[1000px] mx-auto">
              <div className="bg-[rgba(74,144,217,0.06)] rounded-xl p-6 border border-[rgba(74,144,217,0.2)] text-center">
                <h3 className="text-lg font-extralight mb-2">
                  Is This Your Business?
                </h3>
                <p className="text-[13px] text-[#6b7a94] mb-4">
                  Claim your listing to manage your profile, respond to reviews,
                  and get discovered by more customers.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-2.5 bg-[#4a90d9] hover:bg-[#5a9ee5] text-[#0a0f1a] text-sm font-medium rounded-lg transition-colors"
                >
                  Claim This Business
                </Link>
              </div>
            </div>
          </section>

          {/* Google Attribution */}
          <section className="px-6 md:px-12 pb-8">
            <div className="max-w-[1000px] mx-auto">
              <p className="text-[11px] text-[#3d4a61] text-center">
                Provider data and reviews powered by Google.
              </p>
            </div>
          </section>

          <QuoteRequestModal
            isOpen={showQuoteModal}
            onClose={() => setShowQuoteModal(false)}
            providerName={provider.name}
            providerPhone={provider.phone}
          />
        </>
      ) : null}

      <Footer />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import QuoteRequestModal from "../../components/QuoteRequestModal";
import StructuredData, { generateLocalBusinessSchema } from "../../components/StructuredData";

const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function formatTime(time: string) {
  const h = parseInt(time.slice(0, 2));
  const m = time.slice(2);
  const period = h >= 12 ? "PM" : "AM";
  const hour = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${hour}:${m} ${period}`;
}

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
  photos: string[];
  description: string;
  rating: number;
  reviewCount: number;
  phone: string;
  latitude: number;
  longitude: number;
  isOpen: boolean;
  url: string;
  priceRange: string;
  hours: { day: number; start: string; end: string }[];
  isOpenNow: boolean;
  transactions: string[];
}

interface Review {
  id: string;
  rating: number;
  text: string;
  timeCreated: string;
  user: { name: string; imageUrl: string };
}

export default function ProviderDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [provider, setProvider] = useState<ProviderDetail | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    if (!id) return;
    const fetchProvider = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/yelp/${id}`);
        if (!res.ok) throw new Error("Failed to load provider");
        const data = await res.json();
        setProvider(data.provider);
        setReviews(data.reviews || []);
      } catch {
        setError("Unable to load provider details. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProvider();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
        <Navigation />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-[#4a90d9] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-[#6b7a94]">Loading provider details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !provider) {
    return (
      <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
        <Navigation />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <p className="text-[#6b7a94] mb-4">{error || "Provider not found."}</p>
            <Link href="/services" className="px-6 py-2 bg-[#4a90d9] text-[#0a0f1a] rounded hover:bg-[#6ba8eb] transition-colors">
              Browse Services
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Group hours by day
  const hoursByDay: Record<number, { start: string; end: string }[]> = {};
  provider.hours.forEach((h) => {
    if (!hoursByDay[h.day]) hoursByDay[h.day] = [];
    hoursByDay[h.day].push({ start: h.start, end: h.end });
  });

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <StructuredData
        data={generateLocalBusinessSchema({
          name: provider.name,
          address: provider.address,
          city: provider.city,
          state: provider.state,
          phone: provider.phone,
          rating: provider.rating,
          reviewCount: provider.reviewCount,
          latitude: provider.latitude,
          longitude: provider.longitude,
          url: `https://healvanna.com/provider/${provider.id}`,
          category: provider.category,
        })}
      />

      <Navigation />

      {/* Breadcrumbs */}
      <div className="px-6 md:px-12 pt-32 pb-2">
        <div className="max-w-[1100px] mx-auto">
          <nav className="flex items-center gap-2 text-[12px] text-[#6b7a94]">
            <Link href="/" className="hover:text-[#4a90d9] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#4a90d9] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#e8edf5]">{provider.name}</span>
          </nav>
        </div>
      </div>

      {/* Photo Gallery */}
      {provider.photos.length > 0 && (
        <section className="px-6 md:px-12 pb-6">
          <div className="max-w-[1100px] mx-auto">
            <div className="rounded-xl overflow-hidden h-[200px] sm:h-[300px] md:h-[400px] relative">
              <img
                src={provider.photos[activePhoto]}
                alt={`${provider.name} photo ${activePhoto + 1}`}
                className="w-full h-full object-cover"
              />
              {provider.photos.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {provider.photos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhoto(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        idx === activePhoto
                          ? "bg-[#4a90d9] scale-110"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column — Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-2xl sm:text-3xl font-semibold text-[#e8edf5]">{provider.name}</h1>
                {provider.verified && (
                  <span className="text-[9px] tracking-[0.1em] uppercase px-2.5 py-1 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] rounded-md font-semibold">
                    Verified
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-3 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(provider.rating) ? "text-[#f5c518]" : "text-[#3d4a61]"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-[15px] font-medium text-[#e8edf5] ml-1">{provider.rating}</span>
                  <span className="text-[13px] text-[#6b7a94]">({provider.reviewCount} reviews)</span>
                </div>
                {provider.priceRange && (
                  <span className="text-[13px] text-[#6b7a94]">{provider.priceRange}</span>
                )}
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md ${
                  provider.isOpenNow
                    ? "bg-[rgba(34,197,94,0.15)] text-[#22c55e]"
                    : "bg-[rgba(239,68,68,0.15)] text-[#ef4444]"
                }`}>
                  {provider.isOpenNow ? "Open Now" : "Closed"}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {provider.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-[rgba(74,144,217,0.1)] text-[#4a90d9]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <p className="text-[13px] text-[#6b7a94]">{provider.address}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {provider.phone && (
                <a
                  href={`tel:${provider.phone}`}
                  className="flex items-center gap-2 px-5 py-3 text-[13px] font-medium text-[#e8edf5] bg-[rgba(232,237,245,0.06)] hover:bg-[rgba(232,237,245,0.12)] border border-[rgba(232,237,245,0.1)] rounded-lg transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  {provider.phone}
                </a>
              )}
              <button
                onClick={() => setShowQuoteModal(true)}
                className="flex items-center gap-2 px-5 py-3 text-[13px] font-medium text-[#0a0f1a] bg-[#4a90d9] hover:bg-[#5a9ee5] rounded-lg transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
                Get a Quote
              </button>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(provider.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 text-[13px] font-medium text-[#e8edf5] bg-[rgba(232,237,245,0.06)] hover:bg-[rgba(232,237,245,0.12)] border border-[rgba(232,237,245,0.1)] rounded-lg transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Get Directions
              </a>
            </div>

            {/* Reviews */}
            {reviews.length > 0 && (
              <div>
                <h2 className="text-lg font-medium text-[#e8edf5] mb-4">Recent Reviews</h2>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-[rgba(74,144,217,0.1)] flex items-center justify-center overflow-hidden flex-shrink-0">
                          {review.user.imageUrl ? (
                            <img src={review.user.imageUrl} alt={review.user.name} className="w-full h-full object-cover" loading="lazy" />
                          ) : (
                            <span className="text-[11px] font-medium text-[#4a90d9]">
                              {review.user.name.charAt(0)}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="text-[13px] font-medium text-[#e8edf5]">{review.user.name}</p>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-3 h-3 ${i < review.rating ? "text-[#f5c518]" : "text-[#3d4a61]"}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                            <span className="text-[11px] text-[#3d4a61] ml-1">
                              {new Date(review.timeCreated).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-[13px] text-[#6b7a94] leading-relaxed">{review.text}</p>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[#3d4a61] mt-4">
                  Reviews provided by <span className="text-[#c41200]">Yelp</span>
                </p>
              </div>
            )}
          </div>

          {/* Right Column — Sidebar */}
          <div className="space-y-6">
            {/* Hours */}
            {provider.hours.length > 0 && (
              <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
                <h3 className="text-[14px] font-medium text-[#e8edf5] mb-3">Business Hours</h3>
                <div className="space-y-2">
                  {DAY_NAMES.map((day, idx) => {
                    const dayHours = hoursByDay[idx];
                    const today = new Date().getDay();
                    const isToday = (today === 0 ? 6 : today - 1) === idx;
                    return (
                      <div
                        key={day}
                        className={`flex justify-between text-[12px] py-1 ${
                          isToday ? "text-[#e8edf5] font-medium" : "text-[#6b7a94]"
                        }`}
                      >
                        <span>{day}{isToday && " (Today)"}</span>
                        <span>
                          {dayHours
                            ? dayHours.map((h, i) => (
                                <span key={i}>
                                  {formatTime(h.start)} – {formatTime(h.end)}
                                </span>
                              ))
                            : "Closed"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Services/Transactions */}
            {provider.transactions.length > 0 && (
              <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
                <h3 className="text-[14px] font-medium text-[#e8edf5] mb-3">Available Services</h3>
                <div className="space-y-2">
                  {provider.transactions.map((t) => (
                    <div key={t} className="flex items-center gap-2 text-[12px] text-[#6b7a94]">
                      <svg className="w-3.5 h-3.5 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="capitalize">{t.replace(/_/g, " ")}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Map placeholder */}
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
              <h3 className="text-[14px] font-medium text-[#e8edf5] mb-3">Location</h3>
              <p className="text-[12px] text-[#6b7a94] mb-3">{provider.address}</p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(provider.name + " " + provider.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2.5 text-[12px] font-medium text-[#4a90d9] bg-[rgba(74,144,217,0.08)] hover:bg-[rgba(74,144,217,0.18)] border border-[rgba(74,144,217,0.2)] rounded-lg transition-all"
              >
                Open in Google Maps
              </a>
            </div>

            {/* Yelp Attribution */}
            <div className="text-center">
              <p className="text-[11px] text-[#3d4a61]">
                Business data provided by <span className="text-[#c41200]">Yelp</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <QuoteRequestModal
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
        providerName={provider.name}
        providerPhone={provider.phone}
      />
    </div>
  );
}

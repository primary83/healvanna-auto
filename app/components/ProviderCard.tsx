"use client";

import { Provider } from "../lib/types";

interface ProviderCardProps {
  provider: Provider & { distanceText?: string };
}

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <a
      href={provider.url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[rgba(15,22,40,0.6)] rounded-xl p-5 border border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.35)] transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-1 cursor-pointer group block"
    >
      {/* Top Row: Image + Info */}
      <div className="flex gap-4 mb-4">
        <div className="w-14 h-14 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center flex-shrink-0 overflow-hidden">
          {provider.image ? (
            <img
              src={provider.image}
              alt={provider.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <svg
              className="w-7 h-7 text-[#4a90d9]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-[15px] font-semibold text-[#e8edf5] truncate group-hover:text-[#4a90d9] transition-colors">
              {provider.name}
            </h3>
            {provider.verified && (
              <span className="text-[8px] tracking-[0.1em] uppercase px-2 py-0.5 bg-[rgba(74,144,217,0.15)] text-[#4a90d9] rounded-sm font-semibold flex-shrink-0">
                Verified
              </span>
            )}
          </div>
          <p className="text-[12px] text-[#6b7a94] truncate">{provider.address}</p>
        </div>
      </div>

      {/* Rating Row */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-3.5 h-3.5 ${
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
        <span className="text-[13px] font-medium text-[#e8edf5]">
          {provider.rating}
        </span>
        <span className="text-[12px] text-[#6b7a94]">
          ({provider.reviewCount})
        </span>
        {provider.distanceText && (
          <span className="text-[12px] text-[#4a90d9] ml-1">
            {provider.distanceText}
          </span>
        )}
        {provider.priceRange && (
          <span className="text-[12px] text-[#6b7a94] ml-auto">
            {provider.priceRange}
          </span>
        )}
      </div>

      {/* Trust Signals Row */}
      <div className="flex flex-wrap gap-1.5 mb-3">
        <span
          className={`text-[10px] font-semibold px-2.5 py-1 rounded-md ${
            provider.isOpen
              ? "bg-[rgba(34,197,94,0.15)] text-[#22c55e]"
              : "bg-[rgba(239,68,68,0.15)] text-[#ef4444]"
          }`}
        >
          {provider.isOpen ? "Open Now" : "Closed"}
        </span>
        <span className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-[rgba(74,144,217,0.12)] text-[#4a90d9]">
          {provider.category}
        </span>
        {provider.insuranceAccepted && (
          <span className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-[rgba(34,197,94,0.1)] text-[#22c55e]">
            Insurance Accepted
          </span>
        )}
        {provider.oemCertified && (
          <span className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-[rgba(245,197,24,0.1)] text-[#f5c518]">
            OEM Certified
          </span>
        )}
      </div>

      {/* Specialties */}
      {provider.specialties.length > 0 && (
        <div className="flex flex-wrap gap-1 mt-2">
          {provider.specialties.slice(0, 3).map((specialty) => (
            <span
              key={specialty}
              className="text-[9px] tracking-[0.05em] px-2 py-1 bg-[rgba(232,237,245,0.05)] text-[#6b7a94] rounded-sm"
            >
              {specialty}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}

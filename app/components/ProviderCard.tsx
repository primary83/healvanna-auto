"use client";

import { useState } from "react";
import { Provider } from "../lib/types";
import QuoteRequestModal from "./QuoteRequestModal";

interface ProviderCardProps {
  provider: Provider & { distanceText?: string };
  onCompareToggle?: (provider: Provider & { distanceText?: string }) => void;
  isCompareSelected?: boolean;
  compareDisabled?: boolean;
}

export default function ProviderCard({ provider, onCompareToggle, isCompareSelected, compareDisabled }: ProviderCardProps) {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  return (
    <div className={`bg-[rgba(15,22,40,0.6)] rounded-xl p-5 border transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] hover:-translate-y-1 group ${isCompareSelected ? "border-[#4a90d9] ring-1 ring-[#4a90d9]/30" : "border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.35)]"}`}>
      {/* Compare Toggle + Top Row */}
      {onCompareToggle && (
        <div className="flex justify-end mb-1">
          <button
            onClick={(e) => { e.stopPropagation(); onCompareToggle(provider); }}
            disabled={compareDisabled && !isCompareSelected}
            className={`flex items-center gap-1.5 px-2.5 py-1 text-[10px] tracking-[0.03em] font-medium rounded-md border transition-all duration-200 ${
              isCompareSelected
                ? "bg-[#4a90d9] text-[#0a0f1a] border-[#4a90d9]"
                : compareDisabled
                ? "bg-transparent text-[#3d4a61] border-[rgba(74,144,217,0.1)] cursor-not-allowed"
                : "bg-transparent text-[#6b7a94] border-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] hover:text-[#4a90d9]"
            }`}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              {isCompareSelected ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              )}
            </svg>
            {isCompareSelected ? "Selected" : "Compare"}
          </button>
        </div>
      )}
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
        <div className="flex flex-wrap gap-1 mb-4">
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

      {/* Action Buttons */}
      <div className="flex gap-2 mt-auto pt-3 border-t border-[rgba(74,144,217,0.08)]">
        {provider.phone && (
          <a
            href={`tel:${provider.phone}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center gap-1.5 flex-1 py-2.5 text-[11px] tracking-[0.05em] font-medium text-[#e8edf5] bg-[rgba(232,237,245,0.06)] hover:bg-[rgba(232,237,245,0.12)] border border-[rgba(232,237,245,0.1)] rounded-lg transition-all duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call
          </a>
        )}
        <a
          href={provider.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center gap-1.5 flex-1 py-2.5 text-[11px] tracking-[0.05em] font-medium text-[#4a90d9] bg-[rgba(74,144,217,0.08)] hover:bg-[rgba(74,144,217,0.18)] border border-[rgba(74,144,217,0.2)] rounded-lg transition-all duration-200"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
          View Details
        </a>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowQuoteModal(true);
          }}
          className="flex items-center justify-center gap-1.5 flex-1 py-2.5 text-[11px] tracking-[0.05em] font-medium text-[#0a0f1a] bg-[#4a90d9] hover:bg-[#5a9ee5] rounded-lg transition-all duration-200"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>
          Get Quote
        </button>
      </div>

      <QuoteRequestModal
        isOpen={showQuoteModal}
        onClose={() => setShowQuoteModal(false)}
        providerName={provider.name}
        providerPhone={provider.phone}
      />
    </div>
  );
}

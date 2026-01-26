"use client";

import { useState } from "react";

interface CompareProvider {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  phone: string;
  address: string;
  specialties: string[];
  isOpen: boolean;
  priceRange: string;
  distanceText?: string;
  url: string;
  image: string;
}

interface CompareBarProps {
  selected: CompareProvider[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export function CompareBar({ selected, onRemove, onClear }: CompareBarProps) {
  const [showModal, setShowModal] = useState(false);

  if (selected.length === 0) return null;

  return (
    <>
      {/* Sticky Compare Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#111827]/95 backdrop-blur-md border-t border-[rgba(74,144,217,0.2)] shadow-[0_-8px_32px_rgba(0,0,0,0.4)]">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[13px] text-[#e8edf5] font-medium">
              {selected.length} provider{selected.length > 1 ? "s" : ""} selected
            </span>
            <div className="flex gap-2">
              {selected.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-1.5 px-2.5 py-1 bg-[rgba(74,144,217,0.1)] border border-[rgba(74,144,217,0.2)] rounded-full"
                >
                  <span className="text-[11px] text-[#e8edf5] max-w-[120px] truncate">{p.name}</span>
                  <button
                    onClick={() => onRemove(p.id)}
                    className="text-[#6b7a94] hover:text-[#ef4444] transition-colors"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClear}
              className="text-[11px] text-[#6b7a94] hover:text-[#ef4444] transition-colors"
            >
              Clear all
            </button>
            <button
              onClick={() => setShowModal(true)}
              disabled={selected.length < 2}
              className="px-5 py-2 text-[12px] font-medium bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Compare ({selected.length}/3)
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Modal */}
      {showModal && selected.length >= 2 && (
        <CompareModal providers={selected} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

function CompareModal({ providers, onClose }: { providers: CompareProvider[]; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 bg-[#0a0f1a]/85 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-[900px] bg-[#111827] border border-[rgba(74,144,217,0.2)] rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] mb-16">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[rgba(74,144,217,0.1)]">
          <h3 className="text-[16px] font-semibold text-[#e8edf5]">Compare Providers</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[rgba(232,237,245,0.1)] transition-colors text-[#6b7a94] hover:text-[#e8edf5]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgba(74,144,217,0.08)]">
                <th className="text-left p-4 text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] font-medium w-[140px]">
                  Attribute
                </th>
                {providers.map((p) => (
                  <th key={p.id} className="p-4 text-center">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center mx-auto mb-2 overflow-hidden">
                      {p.image ? (
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      ) : (
                        <svg className="w-5 h-5 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )}
                    </div>
                    <div className="text-[13px] font-medium text-[#e8edf5]">{p.name}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <CompareRow label="Rating" values={providers.map((p) => (
                <div key={p.id} className="flex items-center justify-center gap-1">
                  <span className="text-[#f5c518]">★</span>
                  <span className="text-[14px] font-medium text-[#e8edf5]">{p.rating}</span>
                  <span className="text-[11px] text-[#6b7a94]">({p.reviewCount})</span>
                </div>
              ))} />
              <CompareRow label="Status" values={providers.map((p) => (
                <span key={p.id} className={`text-[12px] font-medium ${p.isOpen ? "text-[#22c55e]" : "text-[#ef4444]"}`}>
                  {p.isOpen ? "Open Now" : "Closed"}
                </span>
              ))} />
              <CompareRow label="Distance" values={providers.map((p) => (
                <span key={p.id} className="text-[13px] text-[#4a90d9]">{p.distanceText || "—"}</span>
              ))} />
              <CompareRow label="Price" values={providers.map((p) => (
                <span key={p.id} className="text-[13px] text-[#e8edf5]">{p.priceRange || "—"}</span>
              ))} />
              <CompareRow label="Category" values={providers.map((p) => (
                <span key={p.id} className="text-[12px] text-[#6b7a94]">{p.category}</span>
              ))} />
              <CompareRow label="Specialties" values={providers.map((p) => (
                <div key={p.id} className="flex flex-wrap justify-center gap-1">
                  {p.specialties.slice(0, 3).map((s) => (
                    <span key={s} className="text-[9px] px-2 py-0.5 bg-[rgba(232,237,245,0.05)] text-[#6b7a94] rounded-sm">{s}</span>
                  ))}
                </div>
              ))} />
              <CompareRow label="Address" values={providers.map((p) => (
                <span key={p.id} className="text-[11px] text-[#6b7a94] leading-relaxed">{p.address}</span>
              ))} />
              <CompareRow label="Phone" values={providers.map((p) => (
                p.phone ? (
                  <a key={p.id} href={`tel:${p.phone}`} className="text-[12px] text-[#4a90d9] hover:underline">{p.phone}</a>
                ) : (
                  <span key={p.id} className="text-[12px] text-[#3d4a61]">—</span>
                )
              ))} />
              <CompareRow label="Actions" values={providers.map((p) => (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-1.5 text-[11px] font-medium bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-colors"
                >
                  View Details
                </a>
              ))} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function CompareRow({ label, values }: { label: string; values: React.ReactNode[] }) {
  return (
    <tr className="border-b border-[rgba(74,144,217,0.06)]">
      <td className="p-4 text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] font-medium align-middle">
        {label}
      </td>
      {values.map((value, idx) => (
        <td key={idx} className="p-4 text-center align-middle">
          {value}
        </td>
      ))}
    </tr>
  );
}

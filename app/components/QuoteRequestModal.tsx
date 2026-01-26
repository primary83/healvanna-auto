"use client";

import { useState, useEffect, useRef } from "react";

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  providerName: string;
  providerPhone?: string;
}

export default function QuoteRequestModal({
  isOpen,
  onClose,
  providerName,
  providerPhone,
}: QuoteRequestModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Close on outside click
  function handleBackdropClick(e: React.MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xjggywyr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          provider: providerName,
          type: "Quote Request",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", vehicle: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0f1a]/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="w-full max-w-[480px] max-h-[90vh] overflow-y-auto bg-[#111827] border border-[rgba(74,144,217,0.2)] rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[rgba(74,144,217,0.1)]">
          <div>
            <h3 className="text-[16px] font-semibold text-[#e8edf5]">Request a Quote</h3>
            <p className="text-[12px] text-[#6b7a94] mt-0.5">from {providerName}</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[rgba(232,237,245,0.1)] transition-colors text-[#6b7a94] hover:text-[#e8edf5]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {status === "success" ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 bg-[rgba(34,197,94,0.15)] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-[#e8edf5] mb-2">Quote Request Sent</h4>
            <p className="text-[13px] text-[#6b7a94] mb-6">
              Your request has been sent to {providerName}. We'll connect you within 24 hours.
            </p>
            {providerPhone && (
              <p className="text-[12px] text-[#6b7a94] mb-4">
                Want faster service? Call directly:{" "}
                <a href={`tel:${providerPhone}`} className="text-[#4a90d9] hover:underline">{providerPhone}</a>
              </p>
            )}
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#4a90d9] text-[#0a0f1a] font-medium text-[13px] rounded-lg hover:bg-[#5a9ee5] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            {status === "error" && (
              <div className="p-3 bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] rounded-lg text-[12px] text-[#ef4444]">
                Something went wrong. Please try again or call the provider directly.
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] mb-1.5 font-medium">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[13px] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] mb-1.5 font-medium">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[13px] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] mb-1.5 font-medium">Email *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[13px] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="block text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] mb-1.5 font-medium">Vehicle</label>
              <input
                type="text"
                value={formData.vehicle}
                onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[13px] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
                placeholder="e.g. 2024 Tesla Model 3"
              />
            </div>

            <div>
              <label className="block text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] mb-1.5 font-medium">Service Needed</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[13px] focus:outline-none focus:border-[#4a90d9] transition-colors"
              >
                <option value="" className="bg-[#0a0f1a]">Select a service</option>
                <option value="Full Detail" className="bg-[#0a0f1a]">Full Detail</option>
                <option value="Ceramic Coating" className="bg-[#0a0f1a]">Ceramic Coating</option>
                <option value="Paint Protection Film" className="bg-[#0a0f1a]">Paint Protection Film (PPF)</option>
                <option value="Paint Correction" className="bg-[#0a0f1a]">Paint Correction</option>
                <option value="Interior Detail" className="bg-[#0a0f1a]">Interior Detail</option>
                <option value="Vinyl Wrap" className="bg-[#0a0f1a]">Vinyl Wrap</option>
                <option value="Body Repair" className="bg-[#0a0f1a]">Body Repair</option>
                <option value="Collision Repair" className="bg-[#0a0f1a]">Collision Repair</option>
                <option value="Windshield Repair" className="bg-[#0a0f1a]">Windshield Repair/Replacement</option>
                <option value="Custom Paint" className="bg-[#0a0f1a]">Custom Paint</option>
                <option value="Other" className="bg-[#0a0f1a]">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] tracking-[0.05em] uppercase text-[#6b7a94] mb-1.5 font-medium">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full px-3.5 py-2.5 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[13px] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors resize-none"
                placeholder="Describe what you need..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-3 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === "submitting" ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#0a0f1a] border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Quote Request"
              )}
            </button>

            <p className="text-[11px] text-[#3d4a61] text-center">
              Your info is shared only with {providerName}. We never spam.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

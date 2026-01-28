"use client";

import { useState } from "react";

interface QuoteFormProps {
  serviceName: string;
}

export default function QuoteForm({ serviceName }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    zipCode: "",
    vehicleType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API endpoint
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.25)] rounded-xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-[rgba(74,144,217,0.15)] flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-[#e8edf5] mb-2">Quote Request Sent</h3>
        <p className="text-[#6b7a94] text-sm">
          Local {serviceName.toLowerCase()} providers will contact you shortly with estimates.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.2)] rounded-xl p-6 md:p-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-[rgba(74,144,217,0.15)] flex items-center justify-center">
          <svg className="w-5 h-5 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-medium text-[#e8edf5]">Get a Free Quote</h3>
          <p className="text-[12px] text-[#6b7a94]">Compare estimates from top-rated {serviceName.toLowerCase()} providers</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Full Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="px-4 py-3 bg-[rgba(10,15,26,0.8)] border border-[rgba(74,144,217,0.15)] rounded text-sm text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="px-4 py-3 bg-[rgba(10,15,26,0.8)] border border-[rgba(74,144,217,0.15)] rounded text-sm text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="px-4 py-3 bg-[rgba(10,15,26,0.8)] border border-[rgba(74,144,217,0.15)] rounded text-sm text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
          />
          <input
            type="text"
            placeholder="ZIP Code"
            required
            value={formData.zipCode}
            onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
            className="px-4 py-3 bg-[rgba(10,15,26,0.8)] border border-[rgba(74,144,217,0.15)] rounded text-sm text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
          />
        </div>
        <input
          type="text"
          placeholder="Vehicle (e.g. 2024 Tesla Model 3)"
          value={formData.vehicleType}
          onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
          className="w-full px-4 py-3 bg-[rgba(10,15,26,0.8)] border border-[rgba(74,144,217,0.15)] rounded text-sm text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
        />
        <textarea
          placeholder={`Describe what ${serviceName.toLowerCase()} service you need...`}
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-[rgba(10,15,26,0.8)] border border-[rgba(74,144,217,0.15)] rounded text-sm text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors resize-none"
        />
        <button
          type="submit"
          className="w-full py-3.5 bg-[#4a90d9] text-[#0a0f1a] font-medium rounded hover:bg-[#6ba8eb] transition-colors text-sm"
        >
          Get Free Quotes
        </button>
        <p className="text-[10px] text-[#3d4a61] text-center">
          No obligation. Providers will respond within 24 hours.
        </p>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICE_CATEGORIES, MAJOR_CITIES } from "../lib/services";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

interface QuoteFormData {
  year: string;
  make: string;
  model: string;
  serviceSlug: string;
  serviceName: string;
  subcategory: string;
  zipCode: string;
  citySlug: string;
  cityName: string;
  notes: string;
  name: string;
  email: string;
  phone: string;
}

const YEARS = Array.from({ length: 17 }, (_, i) => String(2026 - i));

const stepVariants = {
  enter: { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

export default function GetQuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    year: "",
    make: "",
    model: "",
    serviceSlug: "",
    serviceName: "",
    subcategory: "",
    zipCode: "",
    citySlug: "",
    cityName: "",
    notes: "",
    name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const update = (fields: Partial<QuoteFormData>) =>
    setFormData((prev) => ({ ...prev, ...fields }));

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.year && formData.make.trim();
      case 2:
        return formData.serviceSlug;
      case 3:
        return formData.zipCode.trim() || formData.citySlug;
      case 4:
        return formData.name.trim() && formData.email.trim() && /\S+@\S+\.\S+/.test(formData.email);
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    if (!canProceed()) return;
    setStatus("submitting");
    try {
      const locationText = formData.cityName || `ZIP ${formData.zipCode}`;
      const res = await fetch("https://formspree.io/f/xjggywyr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `New Quote Request - ${formData.serviceName} in ${locationText}`,
          type: "Quote Request",
          vehicle: `${formData.year} ${formData.make} ${formData.model}`.trim(),
          vehicleYear: formData.year,
          vehicleMake: formData.make,
          vehicleModel: formData.model,
          service: formData.serviceName,
          subcategory: formData.subcategory || "N/A",
          zipCode: formData.zipCode || "N/A",
          city: formData.cityName || "N/A",
          notes: formData.notes || "N/A",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "N/A",
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[13px] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors";
  const labelClass = "block text-[12px] tracking-[0.05em] text-[#6b7a94] mb-2 font-medium";

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-[700px] mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-light tracking-[0.04em] mb-3">
              Get a Free <span className="text-[#4a90d9] font-medium">Quote</span>
            </h1>
            <p className="text-[14px] text-[#6b7a94] max-w-md mx-auto">
              Tell us about your vehicle and the service you need. We&apos;ll connect you with verified providers in your area.
            </p>
          </div>

          {/* Progress Bar */}
          {status !== "success" && (
            <div className="flex items-center justify-center gap-2 mb-12">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <button
                    onClick={() => s < step && setStep(s)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-medium transition-all duration-300 ${
                      s === step
                        ? "bg-[#4a90d9] text-[#0a0f1a]"
                        : s < step
                        ? "bg-[#4a90d9]/20 text-[#4a90d9] cursor-pointer hover:bg-[#4a90d9]/30"
                        : "bg-[rgba(74,144,217,0.08)] text-[#3d4a61]"
                    }`}
                  >
                    {s < step ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      s
                    )}
                  </button>
                  {s < 4 && (
                    <div
                      className={`w-12 md:w-20 h-[2px] transition-colors duration-300 ${
                        s < step ? "bg-[#4a90d9]/40" : "bg-[rgba(74,144,217,0.08)]"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={status === "success" ? "success" : step}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
            >
              {status === "success" ? (
                /* Success Screen */
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[rgba(34,197,94,0.15)] flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-light tracking-[0.04em] mb-3">
                    Quote Request <span className="text-[#22c55e] font-medium">Sent</span>
                  </h2>
                  <p className="text-[14px] text-[#6b7a94] mb-2">
                    We&apos;ll get back to you within 24 hours with provider matches.
                  </p>
                  <p className="text-[13px] text-[#6b7a94] mb-8">
                    {formData.year} {formData.make} {formData.model} &middot; {formData.serviceName} &middot; {formData.cityName || `ZIP ${formData.zipCode}`}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {formData.citySlug && formData.serviceSlug && (
                      <Link
                        href={`/${formData.serviceSlug}/${formData.citySlug}`}
                        className="px-6 py-3 text-[12px] tracking-[0.05em] font-medium bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-colors"
                      >
                        Browse {formData.serviceName} Providers
                      </Link>
                    )}
                    <Link
                      href="/"
                      className="px-6 py-3 text-[12px] tracking-[0.05em] font-medium text-[#6b7a94] border border-[rgba(74,144,217,0.15)] rounded-lg hover:text-[#e8edf5] hover:border-[rgba(74,144,217,0.3)] transition-colors"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              ) : step === 1 ? (
                /* Step 1: Vehicle Info */
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0H21M3.375 14.25h-.375a1.5 1.5 0 010-3h8.25m-6.75 3V7.5a3 3 0 013-3h3.75a3 3 0 013 3v.75m-9 3h12.75" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-[17px] font-medium">Vehicle Information</h2>
                      <p className="text-[12px] text-[#6b7a94]">Tell us about your vehicle</p>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Year *</label>
                    <select
                      value={formData.year}
                      onChange={(e) => update({ year: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">Select year</option>
                      {YEARS.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Make *</label>
                    <input
                      type="text"
                      placeholder="e.g. Tesla, BMW, Ford"
                      value={formData.make}
                      onChange={(e) => update({ make: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Model</label>
                    <input
                      type="text"
                      placeholder="e.g. Model 3, X5, Mustang Mach-E"
                      value={formData.model}
                      onChange={(e) => update({ model: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>
              ) : step === 2 ? (
                /* Step 2: Service Selection */
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.077A.5.5 0 006 12.5v7a.5.5 0 00.036.193l5.384-3.077a1 1 0 000-1.446zM17.42 15.17l-5.384-3.077A.5.5 0 0012 12.5v7a.5.5 0 00.036.193l5.384-3.077a1 1 0 000-1.446z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-[17px] font-medium">Select a Service</h2>
                      <p className="text-[12px] text-[#6b7a94]">What does your vehicle need?</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {SERVICE_CATEGORIES.map((service) => (
                      <button
                        key={service.slug}
                        onClick={() =>
                          update({
                            serviceSlug: service.slug,
                            serviceName: service.name,
                            subcategory: "",
                          })
                        }
                        className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                          formData.serviceSlug === service.slug
                            ? "border-[#4a90d9] bg-[rgba(74,144,217,0.1)]"
                            : "border-[rgba(74,144,217,0.1)] bg-[rgba(15,22,40,0.5)] hover:border-[rgba(74,144,217,0.25)]"
                        }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${
                            formData.serviceSlug === service.slug
                              ? "bg-[#4a90d9]/20"
                              : "bg-[rgba(74,144,217,0.08)]"
                          }`}
                        >
                          <svg
                            className={`w-4 h-4 ${
                              formData.serviceSlug === service.slug ? "text-[#4a90d9]" : "text-[#6b7a94]"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                          </svg>
                        </div>
                        <p
                          className={`text-[12px] font-medium ${
                            formData.serviceSlug === service.slug ? "text-[#4a90d9]" : "text-[#e8edf5]"
                          }`}
                        >
                          {service.shortName}
                        </p>
                      </button>
                    ))}
                  </div>

                  {/* Subcategory pills */}
                  {formData.serviceSlug && (() => {
                    const selected = SERVICE_CATEGORIES.find((s) => s.slug === formData.serviceSlug);
                    if (!selected || !selected.subcategories?.length) return null;
                    return (
                      <div className="mt-5">
                        <p className={labelClass}>Specific service (optional)</p>
                        <div className="flex flex-wrap gap-2">
                          {selected.subcategories.map((sub) => (
                            <button
                              key={sub.slug}
                              onClick={() =>
                                update({
                                  subcategory: formData.subcategory === sub.name ? "" : sub.name,
                                })
                              }
                              className={`px-3 py-1.5 text-[11px] rounded-md border transition-colors ${
                                formData.subcategory === sub.name
                                  ? "border-[#4a90d9] bg-[rgba(74,144,217,0.15)] text-[#4a90d9]"
                                  : "border-[rgba(74,144,217,0.1)] text-[#6b7a94] hover:text-[#e8edf5]"
                              }`}
                            >
                              {sub.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              ) : step === 3 ? (
                /* Step 3: Location */
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-[17px] font-medium">Your Location</h2>
                      <p className="text-[12px] text-[#6b7a94]">Where should we find providers?</p>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Zip Code</label>
                    <input
                      type="text"
                      placeholder="e.g. 77001"
                      value={formData.zipCode}
                      onChange={(e) => update({ zipCode: e.target.value.replace(/\D/g, "").slice(0, 5) })}
                      className={inputClass}
                      maxLength={5}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-[rgba(74,144,217,0.1)]" />
                    <span className="text-[11px] text-[#3d4a61] tracking-[0.1em]">OR</span>
                    <div className="flex-1 h-px bg-[rgba(74,144,217,0.1)]" />
                  </div>

                  <div>
                    <label className={labelClass}>Select a City</label>
                    <select
                      value={formData.citySlug}
                      onChange={(e) => {
                        const city = MAJOR_CITIES.find((c) => c.slug === e.target.value);
                        update({
                          citySlug: e.target.value,
                          cityName: city ? `${city.city}, ${city.stateCode}` : "",
                        });
                      }}
                      className={inputClass}
                    >
                      <option value="">Choose a city</option>
                      {MAJOR_CITIES.map((city) => (
                        <option key={city.slug} value={city.slug}>
                          {city.city}, {city.stateCode}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Additional Notes (optional)</label>
                    <textarea
                      placeholder="Describe what you need, any damage, special requests..."
                      value={formData.notes}
                      onChange={(e) => update({ notes: e.target.value })}
                      className={`${inputClass} h-24 resize-none`}
                    />
                  </div>
                </div>
              ) : step === 4 ? (
                /* Step 4: Contact Info */
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-[17px] font-medium">Contact Information</h2>
                      <p className="text-[12px] text-[#6b7a94]">How should providers reach you?</p>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="p-4 rounded-lg bg-[rgba(74,144,217,0.05)] border border-[rgba(74,144,217,0.1)]">
                    <p className="text-[11px] tracking-[0.05em] text-[#6b7a94] mb-1 font-medium">YOUR REQUEST</p>
                    <p className="text-[13px] text-[#e8edf5]">
                      {formData.year} {formData.make} {formData.model} &middot;{" "}
                      {formData.serviceName}
                      {formData.subcategory ? ` (${formData.subcategory})` : ""} &middot;{" "}
                      {formData.cityName || `ZIP ${formData.zipCode}`}
                    </p>
                  </div>

                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => update({ name: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Email *</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => update({ email: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Phone (optional)</label>
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => update({ phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-[13px] text-red-400">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </div>
              ) : null}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          {status !== "success" && (
            <div className="flex justify-between mt-10">
              {step > 1 ? (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="px-6 py-3 text-[12px] tracking-[0.05em] font-medium text-[#6b7a94] border border-[rgba(74,144,217,0.15)] rounded-lg hover:text-[#e8edf5] hover:border-[rgba(74,144,217,0.3)] transition-colors"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 4 ? (
                <button
                  onClick={() => canProceed() && setStep((s) => s + 1)}
                  disabled={!canProceed()}
                  className={`px-8 py-3 text-[12px] tracking-[0.05em] font-medium rounded-lg transition-all duration-200 ${
                    canProceed()
                      ? "bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#5a9ee5]"
                      : "bg-[rgba(74,144,217,0.15)] text-[#3d4a61] cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed() || status === "submitting"}
                  className={`px-8 py-3 text-[12px] tracking-[0.05em] font-medium rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    canProceed() && status !== "submitting"
                      ? "bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#5a9ee5]"
                      : "bg-[rgba(74,144,217,0.15)] text-[#3d4a61] cursor-not-allowed"
                  }`}
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
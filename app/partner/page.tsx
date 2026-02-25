"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const SERVICE_OPTIONS = [
  "Detailing",
  "Ceramic Coating",
  "PPF / Paint Protection",
  "Window Tinting",
  "Vinyl Wraps",
  "Collision Repair",
  "Glass Repair",
  "Oil Change",
  "Tire Services",
  "EV Specialist",
  "Other",
];

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    businessName: "",
    ownerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    website: "",
    description: "",
  });
  const [services, setServices] = useState<string[]>([]);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleService = (service: string) => {
    setServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://formspree.io/f/xjggywyr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "New Partner Application — Healvanna",
          ...formData,
          servicesOffered: services.join(", "),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          businessName: "",
          ownerName: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          website: "",
          description: "",
        });
        setServices([]);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="PARTNER" />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-gradient-to-b from-[#0d1424] to-[#0a0f1a]">
        <div className="max-w-[900px] mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3.5 font-medium">
            For Business Owners
          </div>
          <h1 className="text-[clamp(32px,5vw,56px)] font-extralight tracking-tight mb-5 leading-tight">
            Partner With{" "}
            <span className="italic text-[#4a90d9]">Healvanna</span>
          </h1>
          <p className="text-[17px] text-[#6b7a94] max-w-[600px] mx-auto leading-relaxed">
            Get your shop in front of thousands of car owners looking for
            trusted services. List your business on our Deal Hunter directory
            &mdash; completely free.
          </p>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-extralight tracking-tight mb-3">
              Why{" "}
              <span className="italic text-[#4a90d9]">Partner</span> With Us
            </h2>
            <p className="text-[14px] text-[#6b7a94]">
              Everything you need to reach more customers and grow your shop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                ),
                title: "Get Discovered",
                desc: "Appear in our Deal Hunter directory seen by local car owners actively searching for auto services in your area.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
                title: "Build Trust",
                desc: "Earn a \"Verified by Healvanna\" badge on your listing, giving customers confidence in your shop before they walk through the door.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                ),
                title: "Grow Your Business",
                desc: "Feature your deals and promotions to targeted audiences who are ready to book services — not just browsing.",
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                  </svg>
                ),
                title: "Join Free",
                desc: "No cost to apply, no hidden fees, no contracts. We believe in earning your trust through results, not locking you in.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center text-[#4a90d9] mb-4">
                  {item.icon}
                </div>
                <h3 className="text-[16px] font-medium text-[#e8edf5] mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#6b7a94] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-extralight tracking-tight mb-3">
              How It{" "}
              <span className="italic text-[#4a90d9]">Works</span>
            </h2>
            <p className="text-[14px] text-[#6b7a94]">
              Three simple steps to get your shop listed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "1",
                title: "Submit Your Details",
                desc: "Fill out the application form below with your shop information, services, and contact details.",
              },
              {
                step: "2",
                title: "We Review & Verify",
                desc: "Our team reviews your application and verifies your business to ensure quality for our users.",
              },
              {
                step: "3",
                title: "Go Live on Deal Hunter",
                desc: "Once approved, your shop appears in our Deal Hunter directory with your deals and promotions.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-6 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] text-center"
              >
                <div className="w-12 h-12 rounded-full bg-[rgba(74,144,217,0.1)] border border-[rgba(74,144,217,0.2)] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[22px] font-bold text-[#4a90d9]">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-[15px] font-medium text-[#e8edf5] mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#6b7a94] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Application Form ── */}
      <section className="px-6 md:px-12 pb-20" id="apply">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-[clamp(24px,3.5vw,36px)] font-extralight tracking-tight mb-3">
              Apply{" "}
              <span className="italic text-[#4a90d9]">Now</span>
            </h2>
            <p className="text-[14px] text-[#6b7a94]">
              Fill out the form below and we&rsquo;ll be in touch within 2
              business days.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-xl bg-[rgba(15,22,40,0.5)] border border-[rgba(74,144,217,0.15)]">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 bg-[rgba(34,197,94,0.15)] rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-[#22c55e]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-[#e8edf5] mb-2">
                  Application Submitted!
                </h3>
                <p className="text-[#6b7a94] mb-6 max-w-md">
                  Thank you for your interest in partnering with Healvanna.
                  We&rsquo;ll review your application and get back to you within
                  2 business days.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-3 text-[13px] font-medium text-[#4a90d9] bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.2)] rounded-lg hover:bg-[rgba(74,144,217,0.15)] transition-all duration-200"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Business Name + Owner Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="businessName"
                      className="block text-[12px] text-[#6b7a94] uppercase tracking-wider mb-2 font-medium"
                    >
                      Business Name <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors text-[14px]"
                      placeholder="Acme Auto Care"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="ownerName"
                      className="block text-[12px] text-[#6b7a94] uppercase tracking-wider mb-2 font-medium"
                    >
                      Owner / Manager Name{" "}
                      <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="text"
                      id="ownerName"
                      name="ownerName"
                      required
                      value={formData.ownerName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors text-[14px]"
                      placeholder="John Smith"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[12px] text-[#6b7a94] uppercase tracking-wider mb-2 font-medium"
                    >
                      Email <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors text-[14px]"
                      placeholder="john@acmeauto.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[12px] text-[#6b7a94] uppercase tracking-wider mb-2 font-medium"
                    >
                      Phone <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors text-[14px]"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-[12px] text-[#6b7a94] uppercase tracking-wider mb-2 font-medium"
                  >
                    Business Address <span className="text-[#ef4444]">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors text-[14px]"
                    placeholder="1234 Main Street"
                  />
                </div>

                {/* City, State, ZIP */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="col-span-2">
                    <label
                      htmlFor="city"
                      className="block text-[12px] text-[#6b7a94] uppercase tracking-wider mb-2 font-medium"
                    >
                      City <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors text-[14px]"
                      placeholder="Orlando"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-[12px] text-[#6b7a94] uppercase tracking-wider mb-2 font-medium"
                    >
                      State <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors text-[14px]"
                      placeholder="FL"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="zip"
                      className="block text-[12px] text-[#6b7a94] uppercase tracking-wider mb-2 font-medium"
                    >
                      ZIP <span className="text-[#ef4444]">*</span>
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      required
                      value={formData.zip}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors text-[14px]"
                      placeholder="32801"
                    />
                  </div>
                </div>

                {/* Services Offered */}
                <div>
                  <label className="block text-[12px] text-[#6b7a94] uppercase tracking-wider mb-3 font-medium">
                    Services Offered <span className="text-[#ef4444]">*</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                    {SERVICE_OPTIONS.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg text-[13px] text-left transition-all duration-200 border ${
                          services.includes(service)
                            ? "bg-[rgba(74,144,217,0.12)] border-[#4a90d9] text-[#e8edf5]"
                            : "bg-[rgba(10,15,26,0.5)] border-[rgba(74,144,217,0.12)] text-[#6b7a94] hover:border-[rgba(74,144,217,0.3)] hover:text-[#e8edf5]"
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded flex-shrink-0 flex items-center justify-center border transition-colors ${
                            services.includes(service)
                              ? "bg-[#4a90d9] border-[#4a90d9]"
                              : "border-[rgba(74,144,217,0.3)] bg-transparent"
                          }`}
                        >
                          {services.includes(service) && (
                            <svg
                              className="w-3 h-3 text-[#0a0f1a]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                              />
                            </svg>
                          )}
                        </div>
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Website (optional) */}
                <div>
                  <label
                    htmlFor="website"
                    className="block text-[12px] text-[#6b7a94] uppercase tracking-wider mb-2 font-medium"
                  >
                    Website URL{" "}
                    <span className="text-[#3d4a61] normal-case">(optional)</span>
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors text-[14px]"
                    placeholder="https://www.acmeauto.com"
                  />
                </div>

                {/* Description (optional) */}
                <div>
                  <label
                    htmlFor="description"
                    className="block text-[12px] text-[#6b7a94] uppercase tracking-wider mb-2 font-medium"
                  >
                    Tell Us About Your Shop{" "}
                    <span className="text-[#3d4a61] normal-case">(optional)</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[rgba(10,15,26,0.5)] border border-[rgba(74,144,217,0.2)] rounded-lg text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors text-[14px] resize-none"
                    placeholder="Years in business, specialties, certifications, anything that sets your shop apart..."
                  />
                </div>

                {/* Error message */}
                {status === "error" && (
                  <div className="p-4 rounded-lg bg-[rgba(239,68,68,0.1)] border border-[rgba(239,68,68,0.2)] text-[13px] text-[#ef4444]">
                    Something went wrong. Please try again, or email us directly
                    at{" "}
                    <a
                      href="mailto:hello@healvanna.com"
                      className="underline hover:text-[#f87171]"
                    >
                      hello@healvanna.com
                    </a>
                    .
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting" || services.length === 0}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#4a90d9] hover:bg-[#5a9ee5] disabled:bg-[#3d4a61] disabled:cursor-not-allowed text-[#0a0f1a] font-medium rounded-lg transition-all duration-300 text-[15px]"
                >
                  {status === "submitting" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#0a0f1a]/30 border-t-[#0a0f1a] rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        />
                      </svg>
                      Submit Application
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#3d4a61] text-center leading-relaxed">
                  By submitting, you agree to our review process. We&rsquo;ll
                  never share your information with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

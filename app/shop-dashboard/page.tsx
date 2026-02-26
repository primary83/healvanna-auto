"use client";

import { useState } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const FEATURES = [
  { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", title: "Manage Listings", description: "Update your shop profile, photos, services, and pricing in real time." },
  { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", title: "Track Leads", description: "See who's viewing your shop, requesting quotes, and calling you." },
  { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "View Analytics", description: "Track impressions, clicks, and conversions with easy-to-read dashboards." },
  { icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", title: "Respond to Reviews", description: "Engage with customers and build your reputation directly from the dashboard." },
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Update Hours & Services", description: "Keep your business hours, service menu, and availability always up to date." },
];

export default function ShopDashboardPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.25)] text-[#10B981] text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            Coming Soon
          </div>
          <h1 className="text-[clamp(32px,4vw,48px)] font-extralight tracking-tight mb-4">
            Shop <span className="text-[#4a90d9] font-light">Dashboard</span>
          </h1>
          <p className="text-[15px] text-[#6b7a94] max-w-[600px] mx-auto leading-relaxed">
            We&apos;re building a powerful dashboard where partner shops can manage their listings, track customer leads, view analytics, and grow their business on Healvanna.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-6 font-medium text-center">
            Upcoming Features
          </h2>
          <div className="grid gap-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-[rgba(15,22,40,0.8)] to-[rgba(10,15,26,0.8)] border border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(16,185,129,0.1)] flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <div>
                  <div className="text-[15px] font-medium text-[#e8edf5] mb-1">{f.title}</div>
                  <div className="text-[13px] text-[#6b7a94] leading-relaxed">{f.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notify */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-xl mx-auto">
          <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[rgba(15,22,40,1)] to-[rgba(10,15,26,1)] border border-[rgba(74,144,217,0.15)] text-center">
            <h3 className="text-lg font-medium mb-2">Get Notified at Launch</h3>
            <p className="text-sm text-[#6b7a94] mb-6">Enter your email and we&apos;ll let you know when the dashboard is ready.</p>

            {submitted ? (
              <div className="py-4 px-6 rounded-lg bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.25)] text-[#10B981] text-sm font-medium">
                Thanks! We&apos;ll be in touch.
              </div>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (email.trim()) setSubmitted(true); }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="flex-1 px-4 py-3 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.25)] rounded-lg text-[#e8edf5] text-sm placeholder:text-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-[#10B981] hover:bg-[#059669] text-white text-sm font-medium transition-colors shrink-0"
                >
                  Notify Me
                </button>
              </form>
            )}

            <div className="mt-6 pt-6 border-t border-[rgba(74,144,217,0.1)]">
              <Link
                href="/partner"
                className="text-sm text-[#4a90d9] hover:text-[#6ba8eb] transition-colors"
              >
                Want to partner with us now? Learn more &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

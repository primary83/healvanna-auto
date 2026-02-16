"use client";

import { useState } from "react";
import Link from "next/link";
import { SERVICE_CATEGORIES } from "../lib/services";

interface NavigationProps {
  activeItem?: string;
}

export default function Navigation({ activeItem = "" }: NavigationProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainNav = [
    { name: "HOME", href: "/" },
    { name: "SERVICES", href: "#", hasDropdown: true },
    { name: "DIRECTORY", href: "/directory" },
    { name: "CARS", href: "/cars" },
    { name: "BLOG", href: "/blog" },
    { name: "SHOP", href: "/shop" },
    { name: "ESTIMATE", href: "/cost-estimator" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-[rgba(74,144,217,0.1)]">
      <Link
        href="/"
        className="text-[22px] font-light tracking-[0.12em]"
      >
        HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-10 items-center">
        {mainNav.map((item) =>
          item.hasDropdown ? (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`text-xs tracking-[0.12em] transition-colors duration-300 pb-2 flex items-center gap-1 ${
                  activeItem === "SERVICES"
                    ? "text-[#e8edf5] border-b border-[#4a90d9]"
                    : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
                }`}
              >
                {item.name}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Services Dropdown */}
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[520px]">
                  <div className="bg-[#0d1424] border border-[rgba(74,144,217,0.2)] rounded-lg shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] p-6">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">
                      Automotive Services
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {SERVICE_CATEGORIES.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/${service.slug}`}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-[rgba(74,144,217,0.08)] transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-[rgba(74,144,217,0.1)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(74,144,217,0.2)] transition-colors">
                            <svg
                              className="w-4.5 h-4.5 text-[#4a90d9]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d={service.icon}
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="text-[13px] font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">
                              {service.name}
                            </div>
                            <div className="text-[11px] text-[#6b7a94] mt-0.5 line-clamp-1">
                              {service.subcategories
                                .map((s) => s.name)
                                .join(" · ")}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-[rgba(74,144,217,0.1)]">
                      <Link
                        href="/services"
                        className="text-[11px] text-[#4a90d9] hover:text-[#6ba8eb] transition-colors tracking-[0.1em] uppercase font-medium"
                      >
                        View All Services &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs tracking-[0.12em] transition-colors duration-300 pb-2 ${
                activeItem === item.name
                  ? "text-[#e8edf5] border-b border-[#4a90d9]"
                  : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
              }`}
            >
              {item.name}
            </Link>
          )
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-[#e8edf5]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {mobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0d1424] border-b border-[rgba(74,144,217,0.2)] md:hidden">
          <div className="p-6 space-y-4">
            {mainNav
              .filter((item) => !item.hasDropdown)
              .map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-sm text-[#6b7a94] hover:text-[#e8edf5] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            <div className="pt-4 border-t border-[rgba(74,144,217,0.1)]">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-3 font-medium">
                Services
              </div>
              {SERVICE_CATEGORIES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/${service.slug}`}
                  className="block text-sm text-[#6b7a94] hover:text-[#e8edf5] transition-colors py-1.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <div className="pt-4 border-t border-[rgba(74,144,217,0.1)]">
              <Link
                href="/compare-evs"
                className="block text-sm text-[#6b7a94] hover:text-[#e8edf5] transition-colors py-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Compare EVs
              </Link>
              <Link
                href="/cost-estimator"
                className="block text-sm text-[#6b7a94] hover:text-[#e8edf5] transition-colors py-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cost Estimator
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

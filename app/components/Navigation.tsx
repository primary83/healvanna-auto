"use client";

import { useState } from "react";
import Link from "next/link";

interface NavigationProps {
  activeItem?: string;
}

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  name: string;
  href: string;
  green?: boolean;
  icon?: string;
  dropdown?: DropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    name: "CHARGE",
    href: "/charge",
    green: true,
    icon: "bolt",
  },
  {
    name: "DEALS",
    href: "/deals",
    green: true,
    icon: "tag",
  },
  {
    name: "CARS",
    href: "/cars",
    dropdown: [
      { label: "Browse EVs", href: "/cars", description: "Explore electric vehicles" },
      { label: "Compare EVs", href: "/compare-evs", description: "Side-by-side comparison" },
      { label: "My Garage", href: "/my-garage", description: "Maintenance schedule" },
    ],
  },
  {
    name: "SERVICES",
    href: "/directory",
    dropdown: [
      { label: "Browse Directory", href: "/directory", description: "Find local shops" },
      { label: "Detailing", href: "/car-detailing", description: "Interior & exterior" },
      { label: "Body Shops", href: "/body-shops", description: "Collision & dent repair" },
      { label: "Wrapping", href: "/car-wrapping", description: "Vinyl & PPF" },
      { label: "Collision", href: "/collision-repair", description: "Accident repair" },
      { label: "Auto Glass", href: "/auto-glass", description: "Windshield repair" },
      { label: "Painting", href: "/auto-painting", description: "Custom & touch-up" },
      { label: "Car Wash", href: "/car-washing", description: "Hand wash & full service" },
    ],
  },
  {
    name: "TOOLS",
    href: "/diagnose",
    dropdown: [
      { label: "Diagnose", href: "/diagnose", description: "OBD code lookup" },
      { label: "Calculate", href: "/calculate", description: "EV cost calculator" },
      { label: "Cost Estimator", href: "/cost-estimator", description: "Service cost estimates" },
      { label: "Recall Checker", href: "/recalls", description: "Vehicle safety recalls" },
    ],
  },
  {
    name: "BLOG",
    href: "/blog",
  },
  {
    name: "FOR SHOPS",
    href: "/partner",
    dropdown: [
      { label: "Partner With Us", href: "/partner", description: "List your business" },
      { label: "Shop Dashboard", href: "/shop-dashboard", description: "Manage your listing" },
    ],
  },
];

function BoltIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function Navigation({ activeItem = "" }: NavigationProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const toggleMobileAccordion = (name: string) => {
    setMobileAccordion(mobileAccordion === name ? null : name);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-[#0a0f1a]/95 backdrop-blur-xl border-b border-[rgba(74,144,217,0.1)]">
      {/* Logo */}
      <Link href="/" className="text-[22px] font-light tracking-[0.12em]">
        HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden lg:flex gap-8 items-center">
        {NAV_ITEMS.map((item) => {
          const isActive =
            activeItem === item.name ||
            (item.dropdown && item.dropdown.some((d) => activeItem === d.label.toUpperCase()));

          if (item.green) {
            // Green highlighted items (CHARGE, DEALS) — no dropdown
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1.5 text-xs tracking-[0.1em] font-semibold text-[#10B981] hover:text-[#34D399] transition-colors duration-300 pb-2 border-b border-transparent"
              >
                {item.icon === "bolt" && <BoltIcon />}
                {item.icon === "tag" && <TagIcon />}
                {item.name}
              </Link>
            );
          }

          if (item.dropdown) {
            // Dropdown items
            return (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className={`text-xs tracking-[0.12em] transition-colors duration-300 pb-2 flex items-center gap-1 ${
                    isActive
                      ? "text-[#e8edf5] border-b border-[#4a90d9]"
                      : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
                  }`}
                >
                  {item.name}
                  <ChevronIcon open={openDropdown === item.name} />
                </button>

                {openDropdown === item.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div
                      className={`bg-[#0d1424] border border-[rgba(74,144,217,0.2)] rounded-lg shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] p-4 ${
                        item.name === "SERVICES" ? "w-[380px]" : "w-[240px]"
                      }`}
                    >
                      {item.name === "SERVICES" ? (
                        <div className="grid grid-cols-2 gap-1">
                          {item.dropdown.map((d) => (
                            <Link
                              key={d.href}
                              href={d.href}
                              className="block px-3 py-2.5 rounded-lg hover:bg-[rgba(74,144,217,0.08)] transition-colors group"
                            >
                              <div className="text-[13px] font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">
                                {d.label}
                              </div>
                              {d.description && (
                                <div className="text-[11px] text-[#6b7a94] mt-0.5">{d.description}</div>
                              )}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-1">
                          {item.dropdown.map((d) => (
                            <Link
                              key={d.href}
                              href={d.href}
                              className="block px-3 py-2.5 rounded-lg hover:bg-[rgba(74,144,217,0.08)] transition-colors group"
                            >
                              <div className="text-[13px] font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">
                                {d.label}
                              </div>
                              {d.description && (
                                <div className="text-[11px] text-[#6b7a94] mt-0.5">{d.description}</div>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          }

          // Plain link (BLOG)
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`text-xs tracking-[0.12em] transition-colors duration-300 pb-2 ${
                isActive
                  ? "text-[#e8edf5] border-b border-[#4a90d9]"
                  : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-[#e8edf5]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0d1424] border-b border-[rgba(74,144,217,0.2)] lg:hidden max-h-[80vh] overflow-y-auto">
          <div className="p-6 space-y-1">
            {NAV_ITEMS.map((item) => {
              if (item.green) {
                // Green items first, no accordion
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 text-sm font-semibold text-[#10B981] hover:text-[#34D399] transition-colors py-2.5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon === "bolt" && <BoltIcon />}
                    {item.icon === "tag" && <TagIcon />}
                    {item.name}
                  </Link>
                );
              }

              if (item.dropdown) {
                const isOpen = mobileAccordion === item.name;
                return (
                  <div key={item.name} className="border-t border-[rgba(74,144,217,0.08)]">
                    <button
                      onClick={() => toggleMobileAccordion(item.name)}
                      className="flex items-center justify-between w-full text-sm text-[#6b7a94] hover:text-[#e8edf5] transition-colors py-3"
                    >
                      {item.name}
                      <ChevronIcon open={isOpen} />
                    </button>
                    {isOpen && (
                      <div className="pl-4 pb-3 space-y-1">
                        {item.dropdown.map((d) => (
                          <Link
                            key={d.href}
                            href={d.href}
                            className="block text-sm text-[#6b7a94] hover:text-[#e8edf5] transition-colors py-1.5"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {d.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // Plain link
              return (
                <div key={item.name} className="border-t border-[rgba(74,144,217,0.08)]">
                  <Link
                    href={item.href}
                    className="block text-sm text-[#6b7a94] hover:text-[#e8edf5] transition-colors py-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

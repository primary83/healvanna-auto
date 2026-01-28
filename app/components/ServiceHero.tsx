"use client";

import Link from "next/link";
import LocationBar from "./LocationBar";

interface Breadcrumb {
  name: string;
  href: string;
}

interface ServiceHeroProps {
  label: string;
  title: string;
  titleAccent: string;
  description: string;
  detectedLocation?: string;
  isLoadingLocation?: boolean;
  breadcrumbs?: Breadcrumb[];
}

export default function ServiceHero({
  label,
  title,
  titleAccent,
  description,
  detectedLocation,
  isLoadingLocation = false,
  breadcrumbs,
}: ServiceHeroProps) {
  return (
    <section className="pt-28 pb-8 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 mb-4 text-[12px]">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-[#3d4a61]">/</span>}
                {i < breadcrumbs.length - 1 ? (
                  <Link
                    href={crumb.href}
                    className="text-[#6b7a94] hover:text-[#4a90d9] transition-colors"
                  >
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-[#e8edf5]">{crumb.name}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Label + Location */}
        <div className="flex items-center gap-3 mb-3 flex-wrap">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] font-medium">
            {label}
          </div>
          {detectedLocation && (
            <LocationBar
              detectedLocation={detectedLocation}
              isLoading={isLoadingLocation}
            />
          )}
        </div>

        {/* Title */}
        <h1 className="text-[clamp(32px,5vw,56px)] font-extralight tracking-tight mb-4">
          {title}{" "}
          <span className="font-semibold bg-gradient-to-r from-[#e8edf5] to-[#4a90d9] bg-clip-text text-transparent">
            {titleAccent}
          </span>
        </h1>

        {/* Description */}
        <p className="text-[15px] text-[#6b7a94] max-w-[650px] leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}

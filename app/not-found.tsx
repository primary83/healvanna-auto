import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="" />

      <section className="pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-[600px] mx-auto text-center">
          {/* 404 badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(74,144,217,0.15)] bg-[rgba(74,144,217,0.06)] mb-8">
            <div className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse" />
            <span className="text-[12px] tracking-[0.1em] text-[#6b7a94] uppercase">Page Not Found</span>
          </div>

          {/* Large 404 */}
          <h1 className="text-[clamp(80px,15vw,160px)] font-extralight tracking-tight text-[rgba(74,144,217,0.15)] leading-none mb-4">
            404
          </h1>

          <h2 className="text-[clamp(20px,3vw,28px)] font-light mb-4">
            This page doesn&apos;t exist
          </h2>

          <p className="text-[15px] text-[#6b7a94] mb-10 max-w-[400px] mx-auto leading-relaxed">
            The page you&apos;re looking for may have been moved, removed, or never existed. Let&apos;s get you back on track.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <Link
              href="/"
              className="px-8 py-3.5 text-[13px] font-medium bg-[#4a90d9] text-[#0a0f1a] rounded-xl hover:bg-[#5a9ee5] transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/cars"
              className="px-8 py-3.5 text-[13px] font-medium border border-[rgba(74,144,217,0.2)] text-[#4a90d9] rounded-xl hover:bg-[rgba(74,144,217,0.08)] hover:border-[#4a90d9] transition-all"
            >
              Browse EVs
            </Link>
          </div>

          {/* Quick links */}
          <div className="pt-8 border-t border-[rgba(74,144,217,0.1)]">
            <p className="text-[11px] tracking-[0.15em] uppercase text-[#3d4a61] mb-4">Popular Pages</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Deals", href: "/deals" },
                { label: "Charging Stations", href: "/charge" },
                { label: "Service Directory", href: "/directory" },
                { label: "Compare EVs", href: "/compare-evs" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-[12px] text-[#6b7a94] border border-[rgba(74,144,217,0.1)] rounded-lg hover:text-[#e8edf5] hover:border-[rgba(74,144,217,0.3)] transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

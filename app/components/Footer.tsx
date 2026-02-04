import Link from "next/link";
import { SERVICE_CATEGORIES } from "../lib/services";

export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] pt-16 pb-8 px-6 md:px-12 border-t border-[rgba(74,144,217,0.15)]">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 max-w-[1200px] mx-auto mb-12">
        {/* Services Column */}
        <div>
          <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">
            Services
          </h4>
          {SERVICE_CATEGORIES.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="block text-[13px] text-[#6b7a94] mb-2.5 hover:text-[#e8edf5] transition-colors duration-300"
            >
              {service.name}
            </Link>
          ))}
        </div>

        {/* Popular Subcategories */}
        <div>
          <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">
            Popular
          </h4>
          <Link href="/car-detailing/ceramic-coating" className="block text-[13px] text-[#6b7a94] mb-2.5 hover:text-[#e8edf5] transition-colors duration-300">
            Ceramic Coating
          </Link>
          <Link href="/car-wrapping/ppf" className="block text-[13px] text-[#6b7a94] mb-2.5 hover:text-[#e8edf5] transition-colors duration-300">
            Paint Protection Film
          </Link>
          <Link href="/car-wrapping/vinyl-wrap" className="block text-[13px] text-[#6b7a94] mb-2.5 hover:text-[#e8edf5] transition-colors duration-300">
            Vinyl Wraps
          </Link>
          <Link href="/collision-repair/insurance-claims" className="block text-[13px] text-[#6b7a94] mb-2.5 hover:text-[#e8edf5] transition-colors duration-300">
            Insurance Claims
          </Link>
          <Link href="/body-shops/dent-repair" className="block text-[13px] text-[#6b7a94] mb-2.5 hover:text-[#e8edf5] transition-colors duration-300">
            Dent Repair
          </Link>
        </div>

        {/* Cars */}
        <div>
          <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">
            Cars
          </h4>
          <Link href="/cars" className="block text-[13px] text-[#6b7a94] mb-2.5 hover:text-[#e8edf5] transition-colors duration-300">
            Electric Vehicles
          </Link>
          <Link href="/cars/brands" className="block text-[13px] text-[#6b7a94] mb-2.5 hover:text-[#e8edf5] transition-colors duration-300">
            All Brands
          </Link>
          <Link href="/cars/suvs" className="block text-[13px] text-[#6b7a94] mb-2.5 hover:text-[#e8edf5] transition-colors duration-300">
            SUVs
          </Link>
        </div>

        {/* Guides - UPDATED SECTION */}
        <div>
          <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">
            Guides
          </h4>
          <Link href="/guides" className="block text-[13px] text-[#6b7a94] mb-2.5 hover:text-[#e8edf5] transition-colors duration-300">
            All Guides
          </Link>
          <Link href="/insights" className="block text-[13px] text-[#6b7a94] mb-2.5 hover:text-[#e8edf5] transition-colors duration-300">
            Blog
          </Link>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">
            Company
          </h4>
          <Link href="/about" className="block text-[13px] text-[#6b7a94] mb-2.5 hover:text-[#e8edf5] transition-colors duration-300">
            About
          </Link>
          <Link href="/contact" className="block text-[13px] text-[#6b7a94] mb-2.5 hover:text-[#e8edf5] transition-colors duration-300">
            Contact
          </Link>
          <Link href="/contact" className="block text-[13px] text-[#6b7a94] mb-2.5 hover:text-[#e8edf5] transition-colors duration-300">
            For Business
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[rgba(74,144,217,0.15)] max-w-[1200px] mx-auto gap-4">
        <div className="text-[11px] text-[#3d4a61]">
          &copy; {new Date().getFullYear()} Healvanna Auto. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors duration-300">
            Privacy
          </Link>
          <Link href="/terms" className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors duration-300">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}

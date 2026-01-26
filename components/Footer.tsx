import Link from "next/link";

const footerColumns = [
  {
    title: "Cars",
    links: [
      { name: "Electric Vehicles", href: "/cars" },
      { name: "Luxury Sedans", href: "/cars" },
      { name: "SUVs", href: "/cars" },
      { name: "All Brands", href: "/cars" },
    ],
  },
  {
    title: "Care",
    links: [
      { name: "Detailing", href: "/care" },
      { name: "Ceramic Coating", href: "/care" },
      { name: "PPF", href: "/care" },
      { name: "Interior", href: "/care" },
    ],
  },
  {
    title: "Craft",
    links: [
      { name: "Body Shops", href: "/craft" },
      { name: "Auto Repair", href: "/craft" },
      { name: "Restoration", href: "/craft" },
    ],
  },
  {
    title: "Shop",
    links: [
      { name: "Accessories", href: "/shop" },
      { name: "Detailing Products", href: "/shop" },
      { name: "EV Gear", href: "/shop" },
    ],
  },
  {
    title: "Blog",
    links: [
      { name: "Comparisons", href: "/blog" },
      { name: "Buying Guides", href: "/blog" },
      { name: "Maintenance Tips", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "For Business", href: "/for-business" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

const legalLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#070b12] pt-16 pb-8 px-6 md:px-12 border-t border-[rgba(74,144,217,0.15)]">
      {/* Footer Columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10 max-w-[1200px] mx-auto mb-12">
        {footerColumns.map((column) => (
          <div key={column.title}>
            <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-4 font-medium">
              {column.title}
            </h4>
            {column.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-[13px] text-[#6b7a94] mb-2.5 cursor-pointer hover:text-[#e8edf5] transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[rgba(74,144,217,0.15)] max-w-[1200px] mx-auto">
        <div className="text-[11px] text-[#3d4a61]">
          © {new Date().getFullYear()} Healvanna. All rights reserved.
        </div>
        <div className="flex gap-6">
          {legalLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] text-[#6b7a94] cursor-pointer hover:text-[#e8edf5] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

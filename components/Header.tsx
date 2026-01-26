"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "CARS", href: "/cars" },
  { name: "CARE", href: "/care" },
  { name: "CRAFT", href: "/craft" },
  { name: "SHOP", href: "/shop" },
  { name: "BLOG", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
      <Link href="/" className="text-[22px] font-light tracking-[0.12em] cursor-pointer">
        HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-xs tracking-[0.12em] cursor-pointer transition-colors duration-300 pb-2 ${
              isActive(item.href)
                ? "text-[#e8edf5] border-b border-[#4a90d9]"
                : "text-[#6b7a94] hover:text-[#e8edf5] border-b border-transparent"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-[#e8edf5]">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}

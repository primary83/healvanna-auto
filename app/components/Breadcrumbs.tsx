import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[12px] text-[#6b7a94] mb-6">
      <ol className="flex items-center gap-1.5 flex-wrap">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-[#3d4a61]">/</span>}
            {item.href && i < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-[#4a90d9] transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-[#8a9bb5]">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

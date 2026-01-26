import Link from "next/link";
import { getRelatedArticles } from "../lib/blogServiceMap";

interface RelatedArticlesProps {
  serviceSlug: string;
  serviceName: string;
  cityName?: string;
}

export default function RelatedArticles({ serviceSlug, serviceName, cityName }: RelatedArticlesProps) {
  const articles = getRelatedArticles(serviceSlug, 3);

  if (articles.length === 0) return null;

  return (
    <section className="px-6 md:px-12 pb-16">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-xl font-light mb-2">
          {cityName
            ? `${serviceName} Guides & Tips`
            : `Learn More About ${serviceName}`}
        </h2>
        <p className="text-[13px] text-[#6b7a94] mb-6">
          Expert guides to help you make informed decisions about {serviceName.toLowerCase()} services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="bg-[rgba(15,22,40,0.5)] rounded-xl overflow-hidden border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.4)] group block"
            >
              <div className="h-[140px] overflow-hidden bg-gradient-to-b from-[rgba(74,144,217,0.05)] to-transparent">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] tracking-[0.1em] uppercase text-[#4a90d9] font-medium">Guide</span>
                  <span className="text-[10px] text-[#3d4a61]">{article.readTime}</span>
                </div>
                <h3 className="text-[14px] font-medium text-[#e8edf5] mb-2 group-hover:text-[#4a90d9] transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-[12px] text-[#6b7a94] leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/blog"
            className="text-[13px] text-[#4a90d9] hover:text-[#6ba8eb] transition-colors"
          >
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  );
}

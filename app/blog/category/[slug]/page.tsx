import Link from "next/link";
import type { Metadata } from "next";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import { BLOG_CATEGORIES, getBlogCategory } from "../../../lib/blogCategories";
import { BLOG_POSTS } from "../../../lib/blogPosts";

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getBlogCategory(slug);
  if (!category) {
    return { title: "Blog Category" };
  }
  return {
    title: `${category.name} | Healvanna Auto Blog`,
    description: category.description,
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getBlogCategory(slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
        <Navigation activeItem="BLOG" />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <p className="text-[#6b7a94] mb-4">Category not found.</p>
            <Link href="/blog" className="px-6 py-2 bg-[#4a90d9] text-[#0a0f1a] rounded hover:bg-[#6ba8eb] transition-colors">
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Filter posts by matching slugs
  const slugSet = new Set(category.matchSlugs || []);
  const posts = BLOG_POSTS.filter((p) => slugSet.has(p.slug));

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-[1200px] mx-auto">
          <nav className="flex items-center gap-2 text-[12px] text-[#6b7a94] mb-6">
            <Link href="/" className="hover:text-[#4a90d9] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#4a90d9] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#e8edf5]">{category.name}</span>
          </nav>
          <h1 className="text-[36px] md:text-[48px] font-bold leading-[1.1] mb-4">
            {category.name}
          </h1>
          <p className="text-[16px] text-[#6b7a94] max-w-[700px] leading-relaxed">
            {category.description}
          </p>
          <p className="text-[13px] text-[#3d4a61] mt-4">
            {posts.length} article{posts.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={post.isInsight ? `/insights/${post.slug}` : `/blog/${post.slug}`}
                className="group bg-[rgba(74,144,217,0.05)] rounded-2xl overflow-hidden border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 text-white text-[10px] font-medium rounded-full ${
                      post.category === "Technology" ? "bg-[#10b981]" :
                      post.category === "Events" ? "bg-[#8b5cf6]" :
                      post.category === "Reviews" ? "bg-[#f59e0b]" :
                      post.category === "Insights" ? "bg-[#ec4899]" :
                      post.category === "Comparison" ? "bg-[#6366f1]" :
                      "bg-[#4a90d9]"
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] text-[#6b7a94] mb-2">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#e8edf5] mb-2 group-hover:text-[#4a90d9] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[13px] text-[#6b7a94] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="px-6 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-xl font-light mb-6">Explore Other Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BLOG_CATEGORIES.filter((c) => c.slug !== slug).map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="bg-[rgba(15,22,40,0.6)] rounded-xl p-5 border border-[rgba(74,144,217,0.12)] hover:border-[rgba(74,144,217,0.35)] transition-all group"
              >
                <h3 className="text-[14px] font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors mb-2">
                  {cat.name}
                </h3>
                <p className="text-[12px] text-[#6b7a94] line-clamp-2">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back to Blog */}
      <section className="px-6 pb-16 text-center">
        <Link
          href="/blog"
          className="text-[13px] text-[#4a90d9] hover:text-[#6ba8eb] transition-colors"
        >
          ← View All Articles
        </Link>
      </section>

      <Footer />
    </div>
  );
}

// Maps service category slugs to related blog post slugs
// Used by RelatedArticles component to show relevant content on service pages

export interface BlogPostRef {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
}

// Blog posts mapped to their relevant service categories
export const SERVICE_BLOG_MAP: Record<string, BlogPostRef[]> = {
  "car-detailing": [
    {
      slug: "ceramic-coating-cost-2026",
      title: "How Much Does Ceramic Coating Cost in 2026?",
      excerpt: "From entry-level to premium packages, here's what ceramic coating costs and what affects the price.",
      image: "/blog/ceramic-coating-cost-2026.png",
      readTime: "12 min",
    },
    {
      slug: "is-car-detailing-worth-it",
      title: "Is Car Detailing Worth It?",
      excerpt: "A breakdown of what professional detailing includes, what it costs, and why it's a smart investment.",
      image: "/blog/is-car-detailing-worth-it.png",
      readTime: "11 min",
    },
    {
      slug: "ceramic-coating-tesla-model-3",
      title: "Ceramic Coating Your Tesla Model 3",
      excerpt: "Complete guide to protecting your Tesla Model 3 with ceramic coating in 2026.",
      image: "/blog/ceramic-coating-tesla-model-3.png",
      readTime: "14 min",
    },
    {
      slug: "ppf-vs-ceramic-coating",
      title: "PPF vs Ceramic Coating: Which Is Best?",
      excerpt: "Compare paint protection film and ceramic coating to find the best protection for luxury cars.",
      image: "/blog/ppf-vs-ceramic-coating.png",
      readTime: "15 min",
    },
    {
      slug: "paint-correction-black-cars",
      title: "Paint Correction for Black Cars",
      excerpt: "Best paint correction techniques for black cars to eliminate swirls and scratches.",
      image: "/blog/paint-correction-black-cars.png",
      readTime: "11 min",
    },
    {
      slug: "interior-detailing-checklist",
      title: "Interior Detailing Checklist",
      excerpt: "What professional detailers actually do — the complete interior detailing process.",
      image: "/blog/interior-detailing-checklist.png",
      readTime: "10 min",
    },
  ],
  "car-wrapping": [
    {
      slug: "car-wrap-vs-paint",
      title: "Car Wrap vs Paint: Which Is Better?",
      excerpt: "Compare vinyl wraps and custom paint across cost, durability, and resale value.",
      image: "/blog/car-wrap-vs-paint.png",
      readTime: "14 min",
    },
    {
      slug: "vinyl-wrap-care-guide",
      title: "Vinyl Wrap Care Guide",
      excerpt: "How to maintain your vinyl wrap and make it last 7+ years.",
      image: "/blog/vinyl-wrap-care-guide.png",
      readTime: "9 min",
    },
    {
      slug: "ppf-vs-ceramic-coating",
      title: "PPF vs Ceramic Coating: Which Is Best?",
      excerpt: "Compare paint protection film and ceramic coating for your vehicle.",
      image: "/blog/ppf-vs-ceramic-coating.png",
      readTime: "15 min",
    },
    {
      slug: "matte-paint-protection",
      title: "How to Protect Matte Paint Finish",
      excerpt: "Specialized care and protection tips for matte and satin finishes.",
      image: "/blog/matte-paint-protection.png",
      readTime: "10 min",
    },
  ],
  "body-shops": [
    {
      slug: "choose-body-shop-after-accident",
      title: "How to Choose a Body Shop After an Accident",
      excerpt: "Certifications to look for, red flags to avoid, and questions to ask.",
      image: "/blog/choose-body-shop-after-accident.png",
      readTime: "11 min",
    },
    {
      slug: "paint-correction-black-cars",
      title: "Paint Correction for Black Cars",
      excerpt: "Best paint correction techniques to eliminate swirls and restore clarity.",
      image: "/blog/paint-correction-black-cars.png",
      readTime: "11 min",
    },
    {
      slug: "custom-car-paint-jobs",
      title: "Custom Car Paint Jobs: Costs & Options",
      excerpt: "From basic repaints to show-quality custom work — what to expect.",
      image: "/blog/custom-car-paint-jobs.png",
      readTime: "13 min",
    },
  ],
  "collision-repair": [
    {
      slug: "find-best-collision-repair-shop",
      title: "How to Find the Best Collision Repair Shop",
      excerpt: "A step-by-step guide to researching and choosing the right collision repair shop.",
      image: "/blog/find-best-collision-repair-shop.png",
      readTime: "12 min",
    },
    {
      slug: "choose-body-shop-after-accident",
      title: "How to Choose a Body Shop After an Accident",
      excerpt: "Certifications to look for, red flags to avoid, and the right questions to ask.",
      image: "/blog/choose-body-shop-after-accident.png",
      readTime: "11 min",
    },
    {
      slug: "ev-collision-repair-guide",
      title: "EV Collision Repair: What Owners Should Know",
      excerpt: "Special considerations for electric vehicle collision repair and safety.",
      image: "/blog/ev-collision-repair-guide.png",
      readTime: "12 min",
    },
  ],
  "auto-glass": [
    {
      slug: "auto-glass-repair-vs-replacement",
      title: "Auto Glass Repair vs Replacement",
      excerpt: "When a chip can be repaired, when you need a full replacement, and what each costs.",
      image: "/blog/auto-glass-repair-vs-replacement.png",
      readTime: "10 min",
    },
  ],
  "auto-painting": [
    {
      slug: "custom-car-paint-jobs",
      title: "Custom Car Paint Jobs: Costs & Options",
      excerpt: "From basic repaints to show-quality custom work — paint types, costs, and process.",
      image: "/blog/custom-car-paint-jobs.png",
      readTime: "13 min",
    },
    {
      slug: "paint-correction-black-cars",
      title: "Paint Correction for Black Cars",
      excerpt: "Best techniques to eliminate swirls, scratches, and oxidation on dark paint.",
      image: "/blog/paint-correction-black-cars.png",
      readTime: "11 min",
    },
    {
      slug: "car-wrap-vs-paint",
      title: "Car Wrap vs Paint: Which Is Better?",
      excerpt: "Compare vinyl wraps and custom paint across cost, durability, and resale value.",
      image: "/blog/car-wrap-vs-paint.png",
      readTime: "14 min",
    },
    {
      slug: "matte-paint-protection",
      title: "How to Protect Matte Paint Finish",
      excerpt: "Specialized care tips for matte and satin finishes on exotic cars.",
      image: "/blog/matte-paint-protection.png",
      readTime: "10 min",
    },
  ],
  "car-washing": [
    {
      slug: "hand-wash-vs-automatic-car-wash",
      title: "Hand Wash vs Automatic Car Wash",
      excerpt: "Which washing method is safer for your paint? A detailed comparison.",
      image: "/blog/hand-wash-vs-automatic-car-wash.png",
      readTime: "9 min",
    },
    {
      slug: "is-car-detailing-worth-it",
      title: "Is Car Detailing Worth It?",
      excerpt: "What professional detailing includes and why it's worth the investment.",
      image: "/blog/is-car-detailing-worth-it.png",
      readTime: "11 min",
    },
  ],
};

// Get related articles for a service (limited to max count)
export function getRelatedArticles(serviceSlug: string, max: number = 3): BlogPostRef[] {
  return (SERVICE_BLOG_MAP[serviceSlug] || []).slice(0, max);
}

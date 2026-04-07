# HealVanna Auto — Claude Code Project Instructions

## TECH STACK
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Hosted on Vercel
- Repo: primary83/healvanna-auto, branch: main

## SITE STRUCTURE
- /ev-deals — 50 EV model deal cards
- /ev-deals/[slug] — 50 individual model pages
- /ev-vs-hybrid — EV vs Hybrid guide with quiz
- /ev-tools — EV Match & Savings Hub (4-step tool)
- /blog — 222 blog articles with tag filtering
- /blog/[slug] — Individual blog posts
- /cars — Brand hub pages
- /services — Automotive service directory
- /my-garage — Saved EVs feature

## DESIGN SYSTEM
- Dark theme — primary background #0a0f1a
- Accent color — Emerald/Teal green
- Mobile-first, fully responsive
- Always match existing design language exactly

## BLOG SYSTEM
- Blog metadata in blogMeta array
- Each post: layout.tsx (SEO) + page.tsx (content)
- Images: /public/images/blog/[filename].png
- Article schema, OG tags, canonical URLs on every post
- Tags link to /blog?tag=[tagname]
- Categories: News, Guides, Technology, Reviews, Comparison, Insights, Events, EV Buying Guide, EV Ownership, EV Road Trips
- Current count: 222 articles

## EV DEALS SYSTEM
- 50 EV models with deal cards
- Individual pages at /ev-deals/[model-slug]
- Always link models to /ev-deals/[model-slug]

## EV TOOLS PAGE
- 4-step flow: EV Match → Savings → Readiness → Results
- 21-model EV database with scoring algorithm
- Formspree: https://formspree.io/f/xzdjbbzl
- SavingsCalculatorWidget on homepage, /ev-deals, /ev-vs-hybrid

## NAVIGATION
- CHARGE, DEALS, EV BEST PRICE (top level)
- CARS dropdown includes EV Tools, My Garage
- SERVICES dropdown
- TOOLS dropdown
- BLOG

## INTERNAL LINKING RULES
- EV models → /ev-deals/[model-slug]
- General deals → /ev-deals
- Hybrid comparisons → /ev-vs-hybrid
- Interactive tool → /ev-tools
- Blog → /blog

## SEO REQUIREMENTS
- Every page: title, meta description, canonical, OG tags
- Blog posts: Article schema
- Tool pages: WebApplication schema
- Update sitemap when adding new pages

## IMAGES
- Location: /public/images/blog/[filename].png
- Naming: kebab-case matching blog slug
- Format: 16:9 ratio

## DEPLOYMENT
- Push to main → Vercel auto-deploys
- Free tier — deploy in small batches
- Always check for build errors first

## FORMSPREE
- Contact: HealVanna Contact form
- EV Alerts: https://formspree.io/f/xzdjbbzl

## CONTENT TONE
- Expert but approachable
- Data-driven with real specs and prices
- Florida market awareness
- Target: first-time buyers, rideshare drivers, Florida residents, luxury buyers, suburban families

## AFFILIATE LINKS (PENDING)
- Carvana → Impact.com
- CarMax → Commission Junction
- Amazon Associates
- Autel Energy → direct
- Lectron → ShareASale
- Add to EV model pages and blog posts when approved

## CURRENT COUNTS
- Blog articles: 222
- EV models: 50
- Last updated: April 6, 2026

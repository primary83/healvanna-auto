/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://healvanna.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Higher priority for service category pages
    if (
      [
        "/car-detailing",
        "/car-wrapping",
        "/body-shops",
        "/collision-repair",
        "/auto-glass",
        "/auto-painting",
        "/car-washing",
        "/services",
      ].includes(path)
    ) {
      return {
        loc: path,
        changefreq: "daily",
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }

    // High priority for homepage
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }

    // Medium-high priority for location pages
    if (
      path.match(
        /^\/(car-detailing|car-wrapping|body-shops|collision-repair|auto-glass|auto-painting|car-washing)\/.+/
      )
    ) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    }

    // Blog and insights
    if (path.startsWith("/blog/") || path.startsWith("/insights/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.6,
        lastmod: new Date().toISOString(),
      };
    }

    // Default
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const POSTS_PER_PAGE = 12;

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", "Guides", "Technology", "Reviews", "Comparison", "Insights", "Events"];

  const blogPosts = [
    // Service SEO Articles
    {
      id: 201,
      title: "How Much Does Ceramic Coating Cost in 2026? Complete Price Guide",
      excerpt: "From entry-level to premium packages, here's what ceramic coating costs in 2026 and what affects the price.",
      category: "Guides",
      image: "/blog/ceramic-coating-cost-2026.png",
      date: "January 26, 2026",
      readTime: "12 min read",
      slug: "ceramic-coating-cost-2026",
    },
    {
      id: 202,
      title: "Car Wrap vs Paint: Which Is Better for Your Vehicle?",
      excerpt: "Compare vinyl wraps and custom paint jobs across cost, durability, appearance, and resale value to make the right choice.",
      category: "Comparison",
      image: "/blog/car-wrap-vs-paint.png",
      date: "January 26, 2026",
      readTime: "14 min read",
      slug: "car-wrap-vs-paint",
    },
    {
      id: 203,
      title: "How to Choose a Body Shop After an Accident",
      excerpt: "Your complete guide to finding a trusted body shop — certifications to look for, red flags to avoid, and questions to ask.",
      category: "Guides",
      image: "/blog/choose-body-shop-after-accident.png",
      date: "January 26, 2026",
      readTime: "11 min read",
      slug: "choose-body-shop-after-accident",
    },
    {
      id: 204,
      title: "Auto Glass Repair vs Replacement: When to Fix and When to Replace",
      excerpt: "Learn when a windshield chip can be repaired, when you need a full replacement, and what each costs.",
      category: "Guides",
      image: "/blog/auto-glass-repair-vs-replacement.png",
      date: "January 26, 2026",
      readTime: "10 min read",
      slug: "auto-glass-repair-vs-replacement",
    },
    {
      id: 205,
      title: "Is Car Detailing Worth It? What You Actually Get for the Price",
      excerpt: "A breakdown of what professional detailing includes, what it costs, and why it's one of the best investments for your car.",
      category: "Guides",
      image: "/blog/is-car-detailing-worth-it.png",
      date: "January 26, 2026",
      readTime: "11 min read",
      slug: "is-car-detailing-worth-it",
    },
    {
      id: 206,
      title: "Custom Car Paint Jobs: Costs, Options, and What to Expect",
      excerpt: "From basic repaints to show-quality custom work, learn about paint types, costs, and the full process.",
      category: "Guides",
      image: "/blog/custom-car-paint-jobs.png",
      date: "January 26, 2026",
      readTime: "13 min read",
      slug: "custom-car-paint-jobs",
    },
    {
      id: 207,
      title: "How to Find the Best Collision Repair Shop Near You",
      excerpt: "A step-by-step guide to researching, evaluating, and choosing the right collision repair shop after an accident.",
      category: "Guides",
      image: "/blog/find-best-collision-repair-shop.png",
      date: "January 26, 2026",
      readTime: "11 min read",
      slug: "find-best-collision-repair-shop",
    },
    {
      id: 208,
      title: "Hand Wash vs Automatic Car Wash: Which Is Safer for Your Paint?",
      excerpt: "The truth about automatic car washes, swirl marks, and why hand washing is the safest option for your paint.",
      category: "Comparison",
      image: "/blog/hand-wash-vs-automatic-car-wash.png",
      date: "January 26, 2026",
      readTime: "10 min read",
      slug: "hand-wash-vs-automatic-car-wash",
    },
    {
      id: 209,
      title: "Interior Detailing Checklist: What Professional Detailers Actually Do",
      excerpt: "The complete 9-step interior detailing process professionals follow — from deep vacuum to odor elimination.",
      category: "Guides",
      image: "/blog/interior-detailing-checklist.png",
      date: "January 26, 2026",
      readTime: "12 min read",
      slug: "interior-detailing-checklist",
    },
    {
      id: 210,
      title: "Vinyl Wrap Care Guide: How to Make Your Wrap Last 7+ Years",
      excerpt: "Everything you need to know about maintaining your vinyl wrap — washing, UV protection, and what to avoid.",
      category: "Guides",
      image: "/blog/vinyl-wrap-care-guide.png",
      date: "January 26, 2026",
      readTime: "11 min read",
      slug: "vinyl-wrap-care-guide",
    },
    // New Blog Posts — Batch 1 (Vehicle Comparisons, EV Buying, Car Care)
    {
      id: 301,
      title: "Hyundai Ioniq 6 vs Tesla Model 3: Which Electric Sedan Wins in 2026?",
      excerpt: "A detailed comparison of range, performance, technology, and value between the Ioniq 6 and Model 3.",
      category: "Comparison",
      image: "/blog/hyundai-ioniq-6-vs-tesla-model-3.png",
      date: "January 26, 2026",
      readTime: "16 min read",
      slug: "hyundai-ioniq-6-vs-tesla-model-3",
    },
    {
      id: 302,
      title: "Kia EV6 GT Review: Is the Fastest Korean EV Worth It?",
      excerpt: "We review the Kia EV6 GT's performance, range, technology, and value to see if it lives up to the hype.",
      category: "Reviews",
      image: "/blog/kia-ev6-gt-review.png",
      date: "January 26, 2026",
      readTime: "15 min read",
      slug: "kia-ev6-gt-review",
    },
    {
      id: 303,
      title: "BMW i4 vs Mercedes EQE: German Electric Luxury Compared",
      excerpt: "A head-to-head comparison of two premium electric sedans from Germany's finest automakers.",
      category: "Comparison",
      image: "/blog/bmw-i4-vs-mercedes-eqe.png",
      date: "January 26, 2026",
      readTime: "16 min read",
      slug: "bmw-i4-vs-mercedes-eqe",
    },
    {
      id: 304,
      title: "Chevrolet Equinox EV Review: The Affordable EV Everyone's Been Waiting For",
      excerpt: "A comprehensive review of the Chevy Equinox EV covering range, features, pricing, and real-world performance.",
      category: "Reviews",
      image: "/blog/chevrolet-equinox-ev-review.png",
      date: "January 26, 2026",
      readTime: "15 min read",
      slug: "chevrolet-equinox-ev-review",
    },
    {
      id: 305,
      title: "Should You Buy a Used Electric Vehicle? Complete 2026 Guide",
      excerpt: "Everything you need to know about buying a pre-owned EV, from battery health checks to the best models to buy used.",
      category: "Guides",
      image: "/blog/should-you-buy-used-ev.png",
      date: "January 26, 2026",
      readTime: "16 min read",
      slug: "should-you-buy-used-ev",
    },
    {
      id: 306,
      title: "Best Used Electric Vehicles Under $25,000 in 2026",
      excerpt: "Discover the top pre-owned EVs that deliver great range, reliability, and technology without breaking the bank.",
      category: "Reviews",
      image: "/blog/best-used-evs-under-25k.png",
      date: "January 26, 2026",
      readTime: "15 min read",
      slug: "best-used-evs-under-25k",
    },
    {
      id: 307,
      title: "EV Battery Health Check: How to Test Before You Buy",
      excerpt: "Learn how to assess electric vehicle battery degradation, check state of health, and avoid costly surprises.",
      category: "Guides",
      image: "/blog/ev-battery-health-check.png",
      date: "January 26, 2026",
      readTime: "15 min read",
      slug: "ev-battery-health-check",
    },
    {
      id: 308,
      title: "Cold Weather EV Range: How Winter Affects Your Electric Car",
      excerpt: "Understand how cold temperatures impact EV range and discover proven strategies to maximize winter driving distance.",
      category: "Guides",
      image: "/blog/cold-weather-ev-range.png",
      date: "January 26, 2026",
      readTime: "15 min read",
      slug: "cold-weather-ev-range",
    },
    {
      id: 309,
      title: "Winter Car Care Checklist: Protect Your Vehicle From Cold Weather Damage",
      excerpt: "A complete seasonal maintenance guide to protect your car's paint, interior, and mechanical systems through winter.",
      category: "Guides",
      image: "/blog/winter-car-care-checklist.png",
      date: "January 26, 2026",
      readTime: "16 min read",
      slug: "winter-car-care-checklist",
    },
    {
      id: 310,
      title: "EV Charging Cost Comparison: Home vs Public vs Workplace in 2026",
      excerpt: "A complete breakdown of EV charging costs across every method, with real-world calculations and money-saving tips.",
      category: "Guides",
      image: "/blog/ev-charging-cost-comparison.png",
      date: "January 26, 2026",
      readTime: "16 min read",
      slug: "ev-charging-cost-comparison",
    },
    // New Blog Posts — Batch 2 (Charging, Myths, Car Care, Business)
    {
      id: 311,
      title: "EV Charging Levels Explained: Level 1, Level 2, and DC Fast Charging",
      excerpt: "Understand the differences between EV charging levels, speeds, costs, and which setup is right for your needs.",
      category: "Guides",
      image: "/blog/ev-charging-levels-explained.png",
      date: "January 26, 2026",
      readTime: "15 min read",
      slug: "ev-charging-levels-explained",
    },
    {
      id: 312,
      title: "EV Myths Debunked: 12 Common Misconceptions About Electric Cars",
      excerpt: "Separate fact from fiction with data-backed answers to the most persistent myths about electric vehicles.",
      category: "Guides",
      image: "/blog/ev-myths-debunked.png",
      date: "January 26, 2026",
      readTime: "16 min read",
      slug: "ev-myths-debunked",
    },
    {
      id: 313,
      title: "EV Maintenance Myths: What You Actually Need to Service",
      excerpt: "Discover which maintenance items EVs still need and which ones you can skip entirely compared to gas cars.",
      category: "Guides",
      image: "/blog/ev-maintenance-myths.png",
      date: "January 26, 2026",
      readTime: "15 min read",
      slug: "ev-maintenance-myths",
    },
    {
      id: 314,
      title: "How to Remove Swirl Marks: Complete Paint Correction Guide",
      excerpt: "Step-by-step instructions to safely remove swirl marks and restore a flawless finish on any paint color.",
      category: "Guides",
      image: "/blog/how-to-remove-swirl-marks.png",
      date: "January 26, 2026",
      readTime: "15 min read",
      slug: "how-to-remove-swirl-marks",
    },
    {
      id: 315,
      title: "Window Tinting Guide: Laws, Types, and What to Expect",
      excerpt: "Everything you need to know about window tinting including legal limits, film types, costs, and installation.",
      category: "Guides",
      image: "/blog/window-tinting-guide.png",
      date: "January 26, 2026",
      readTime: "15 min read",
      slug: "window-tinting-guide",
    },
    {
      id: 316,
      title: "Headlight Restoration Guide: Clear Up Foggy Headlights for Under $20",
      excerpt: "Restore your cloudy headlights to crystal-clear condition with this step-by-step DIY guide using affordable tools.",
      category: "Guides",
      image: "/blog/headlight-restoration-guide.png",
      date: "January 26, 2026",
      readTime: "14 min read",
      slug: "headlight-restoration-guide",
    },
    {
      id: 317,
      title: "Car Waxing Schedule: How Often Should You Wax Your Car?",
      excerpt: "Learn the optimal waxing frequency for your climate and paint type, plus how to choose the best car wax.",
      category: "Guides",
      image: "/blog/car-waxing-schedule.png",
      date: "January 26, 2026",
      readTime: "14 min read",
      slug: "car-waxing-schedule",
    },
    {
      id: 318,
      title: "EV Fleet Management for Business: Complete 2026 Guide",
      excerpt: "How to transition your business fleet to electric vehicles, from cost analysis to charging infrastructure planning.",
      category: "Guides",
      image: "/blog/ev-fleet-management-business.png",
      date: "January 26, 2026",
      readTime: "16 min read",
      slug: "ev-fleet-management-business",
    },
    {
      id: 319,
      title: "How to Start a Car Detailing Business in 2026",
      excerpt: "A step-by-step guide to launching a profitable car detailing business, from equipment to marketing and pricing.",
      category: "Guides",
      image: "/blog/start-car-detailing-business.png",
      date: "January 26, 2026",
      readTime: "16 min read",
      slug: "start-car-detailing-business",
    },
    {
      id: 320,
      title: "Most Scenic EV Road Trips in America: 10 Routes You Need to Drive",
      excerpt: "Discover the most beautiful electric vehicle road trips across the US, complete with charging stops and range planning.",
      category: "Guides",
      image: "/blog/scenic-ev-road-trips.png",
      date: "January 26, 2026",
      readTime: "16 min read",
      slug: "scenic-ev-road-trips",
    },
    // Market Intelligence / Insights articles
    {
      id: 101,
      title: "US EVs vs Chinese EVs: A Complete Comparison",
      excerpt: "A comprehensive comparison of American and Chinese electric vehicles. We analyze range, technology, build quality, and value.",
      category: "Comparison",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
      date: "January 25, 2026",
      readTime: "8 min read",
      slug: "us-evs-vs-chinese-evs",
      isInsight: true,
    },
    {
      id: 102,
      title: "Best Ceramic Coatings 2025: We Tested Them All",
      excerpt: "We tested the top ceramic coating brands to find the best protection for your premium vehicle. From Ceramic Pro to Gtechniq.",
      category: "Guides",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80",
      date: "January 25, 2026",
      readTime: "8 min read",
      slug: "best-ceramic-coatings-2025",
      isInsight: true,
    },
    {
      id: 103,
      title: "Tesla vs Lucid vs Rivian: The Ultimate Showdown",
      excerpt: "The ultimate American EV showdown. We compare the top three US electric vehicle brands across performance, luxury, range, and value.",
      category: "Comparison",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
      date: "January 25, 2026",
      readTime: "12 min read",
      slug: "tesla-vs-lucid-vs-rivian",
      isInsight: true,
    },
    {
      id: 104,
      title: "Complete EV Maintenance Guide for 2026",
      excerpt: "Everything you need to know about maintaining your electric vehicle for optimal performance and longevity.",
      category: "Guides",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
      date: "January 25, 2026",
      readTime: "15 min read",
      slug: "ev-maintenance-guide",
      isInsight: true,
    },
    {
      id: 105,
      title: "PPF vs Ceramic Coating: The Ultimate Protection Guide",
      excerpt: "We break down the differences between paint protection film and ceramic coating, including costs and which option is best.",
      category: "Guides",
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80",
      date: "January 25, 2026",
      readTime: "14 min read",
      slug: "ppf-vs-ceramic-coating",
      isInsight: true,
    },
    {
      id: 106,
      title: "How to Find a Trusted Body Shop for Your Vehicle",
      excerpt: "How to find a reputable body shop for your luxury or electric vehicle. Red flags to avoid, certifications to look for.",
      category: "Guides",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      date: "January 25, 2026",
      readTime: "12 min read",
      slug: "finding-trusted-body-shop",
      isInsight: true,
    },
    // Blog articles
    {
      id: 23,
      title: "The Real Cost of Owning an Electric Car in 2026",
      excerpt: "From purchase price to charging costs, maintenance savings, and total cost of ownership—everything you need to know about EV costs.",
      category: "Guides",
      image: "/blog/real-cost-owning-ev-2026.png",
      date: "January 24, 2026",
      readTime: "14 min read",
      slug: "real-cost-owning-ev-2026"
    },
    {
      id: 24,
      title: "EV Range Anxiety: What Actually Matters (and What Doesn't)",
      excerpt: "Separate fact from fiction about EV range concerns. Learn what really affects range and how to eliminate range anxiety for good.",
      category: "Guides",
      image: "/blog/ev-range-anxiety.png",
      date: "January 24, 2026",
      readTime: "12 min read",
      slug: "ev-range-anxiety"
    },
    {
      id: 25,
      title: "Tesla Alternatives: The Best Electric Cars You're Not Hearing About",
      excerpt: "From budget-friendly options to luxury competitors, discover the best non-Tesla EVs on the market in 2026.",
      category: "Reviews",
      image: "/blog/tesla-alternatives.png",
      date: "January 24, 2026",
      readTime: "15 min read",
      slug: "tesla-alternatives"
    },
    {
      id: 26,
      title: "Solid-State Batteries Explained: Why Everyone's Talking About Them",
      excerpt: "The next revolution in EV technology promises longer range, faster charging, and improved safety. Here's what you need to know.",
      category: "Technology",
      image: "/blog/solid-state-batteries.png",
      date: "January 24, 2026",
      readTime: "13 min read",
      slug: "solid-state-batteries"
    },
    {
      id: 27,
      title: "Are Electric Cars Actually Better for the Environment?",
      excerpt: "A comprehensive lifecycle analysis comparing EVs to gas cars—from manufacturing to disposal. The answer may surprise you.",
      category: "Insights",
      image: "/blog/ev-environment-impact.png",
      date: "January 24, 2026",
      readTime: "14 min read",
      slug: "ev-environment-impact"
    },
    {
      id: 28,
      title: "Leasing vs Buying an EV: Which Makes Sense Today?",
      excerpt: "Tax credits, technology evolution, and depreciation all factor into the lease vs buy decision. Here's how to choose.",
      category: "Guides",
      image: "/blog/leasing-vs-buying-ev.png",
      date: "January 24, 2026",
      readTime: "13 min read",
      slug: "leasing-vs-buying-ev"
    },
    {
      id: 17,
      title: "Complete Guide to Ceramic Coating Your Tesla Model 3 in 2026",
      excerpt: "Everything you need to know about ceramic coating for Tesla Model 3, from costs and benefits to maintenance tips.",
      category: "Guides",
      image: "/blog/ceramic-coating-tesla-model-3.png",
      date: "January 24, 2026",
      readTime: "15 min read",
      slug: "ceramic-coating-tesla-model-3"
    },
    {
      id: 18,
      title: "PPF vs Ceramic Coating: Which Protection Is Best for Luxury Cars",
      excerpt: "Compare paint protection film and ceramic coating to find the best protection for your luxury vehicle.",
      category: "Guides",
      image: "/blog/ppf-vs-ceramic-coating.png",
      date: "January 24, 2026",
      readTime: "14 min read",
      slug: "ppf-vs-ceramic-coating"
    },
    {
      id: 19,
      title: "How to Protect Matte Paint Finish on Your Exotic Car",
      excerpt: "Learn the specialized care techniques for matte paint finishes, including safe washing methods and ceramic coating options.",
      category: "Guides",
      image: "/blog/matte-paint-protection.png",
      date: "January 24, 2026",
      readTime: "13 min read",
      slug: "matte-paint-protection"
    },
    {
      id: 20,
      title: "Electric Vehicle Collision Repair: What Every EV Owner Should Know",
      excerpt: "Find certified EV collision repair shops, understand repair costs, and learn why electric cars need specialized body work.",
      category: "Technology",
      image: "/blog/ev-collision-repair.png",
      date: "January 24, 2026",
      readTime: "15 min read",
      slug: "ev-collision-repair-guide"
    },
    {
      id: 21,
      title: "Interior Leather Restoration: Bringing Classic Car Seats Back to Life",
      excerpt: "A comprehensive guide to restoring vintage car leather interiors, from DIY techniques to professional restoration.",
      category: "Guides",
      image: "/blog/leather-restoration-classic.png",
      date: "January 24, 2026",
      readTime: "14 min read",
      slug: "leather-restoration-classic-cars"
    },
    {
      id: 22,
      title: "Best Paint Correction Techniques for Black Cars in 2026",
      excerpt: "Master the art of paint correction on black vehicles. Learn how to remove swirl marks and achieve a flawless finish.",
      category: "Guides",
      image: "/blog/paint-correction-black-cars.png",
      date: "January 24, 2026",
      readTime: "14 min read",
      slug: "paint-correction-black-cars"
    },
    {
      id: 1,
      title: "How to Choose Your First Electric Vehicle",
      excerpt: "A comprehensive guide for first-time EV buyers covering everything from range needs to charging infrastructure.",
      category: "Guides",
      image: "/blog/choose-first-ev.png",
      date: "January 19, 2026",
      readTime: "14 min read",
      slug: "choose-first-ev"
    },
    {
      id: 2,
      title: "EV vs Hybrid: Which Is Right for You?",
      excerpt: "Compare fully electric vehicles and hybrids across cost, performance, convenience, and environmental impact.",
      category: "Reviews",
      image: "/blog/ev-vs-hybrid.png",
      date: "January 19, 2026",
      readTime: "12 min read",
      slug: "ev-vs-hybrid"
    },
    {
      id: 3,
      title: "The Future of Autonomous EVs",
      excerpt: "Explore how self-driving technology and electric vehicles are converging to revolutionize transportation.",
      category: "Technology",
      image: "/blog/future-autonomous-evs.png",
      date: "January 19, 2026",
      readTime: "13 min read",
      slug: "future-autonomous-evs"
    },
    {
      id: 4,
      title: "EV Charging Etiquette: Do's and Don'ts",
      excerpt: "Learn the unwritten rules of public EV charging to be a courteous member of the electric vehicle community.",
      category: "Guides",
      image: "/blog/ev-charging-etiquette.png",
      date: "January 19, 2026",
      readTime: "9 min read",
      slug: "ev-charging-etiquette"
    },
    {
      id: 5,
      title: "Top EV Apps Every Owner Needs",
      excerpt: "Discover the essential smartphone apps for finding chargers, planning trips, and monitoring your vehicle.",
      category: "Technology",
      image: "/blog/top-ev-apps.png",
      date: "January 19, 2026",
      readTime: "10 min read",
      slug: "top-ev-apps"
    },
    {
      id: 6,
      title: "How to Install a Home EV Charger: Complete Guide",
      excerpt: "Everything you need to know about home EV charger installation, from choosing equipment to electrical requirements.",
      category: "Guides",
      image: "/blog/home-ev-charger-installation.png",
      date: "January 18, 2026",
      readTime: "12 min read",
      slug: "how-to-install-home-ev-charger"
    },
    {
      id: 7,
      title: "EV Road Trip Planning: Your Complete 2026 Guide",
      excerpt: "Master the art of electric road trips with our comprehensive guide covering route planning and charging strategies.",
      category: "Guides",
      image: "/blog/ev-road-trip-planning.png",
      date: "January 18, 2026",
      readTime: "14 min read",
      slug: "ev-road-trip-planning-guide"
    },
    {
      id: 8,
      title: "Understanding EV Tax Credits in 2026",
      excerpt: "Navigate the complex world of EV tax credits with our guide to federal incentives and how to maximize savings.",
      category: "Guides",
      image: "/blog/ev-tax-credits-2026.png",
      date: "January 18, 2026",
      readTime: "11 min read",
      slug: "ev-tax-credits-2026"
    },
    {
      id: 9,
      title: "How to Maintain Your Electric Vehicle",
      excerpt: "Discover the simplified maintenance requirements of EVs and learn how to keep your electric vehicle running efficiently.",
      category: "Guides",
      image: "/blog/ev-maintenance-guide.png",
      date: "January 18, 2026",
      readTime: "10 min read",
      slug: "ev-maintenance-guide"
    },
    {
      id: 10,
      title: "EV Charging Networks Compared: Tesla vs Electrify America",
      excerpt: "A comprehensive comparison of major EV charging networks including reliability, speed, coverage, and pricing.",
      category: "Technology",
      image: "/blog/ev-charging-networks-compared.png",
      date: "January 18, 2026",
      readTime: "13 min read",
      slug: "ev-charging-networks-compared"
    },
    {
      id: 11,
      title: "Wireless EV Charging: Is It Ready for Prime Time?",
      excerpt: "Explore the world of wireless EV charging technology, from how it works to current systems available.",
      category: "Technology",
      image: "/blog/wireless-ev-charging.png",
      date: "January 18, 2026",
      readTime: "11 min read",
      slug: "wireless-ev-charging"
    },
    {
      id: 12,
      title: "Vehicle-to-Home (V2H) Technology Explained",
      excerpt: "Learn how V2H technology transforms your electric vehicle into a home backup power system.",
      category: "Technology",
      image: "/blog/vehicle-to-home-v2h.png",
      date: "January 18, 2026",
      readTime: "12 min read",
      slug: "vehicle-to-home-v2h"
    },
    {
      id: 13,
      title: "Top Electric Car Shows to Attend in 2026",
      excerpt: "Discover the most anticipated electric vehicle exhibitions and auto shows happening in 2026.",
      category: "Events",
      image: "/blog/electric-car-show-2026.png",
      date: "January 15, 2026",
      readTime: "8 min read",
      slug: "top-electric-car-shows-2026"
    },
    {
      id: 14,
      title: "What to Expect at Electrify Expo 2026",
      excerpt: "Your complete guide to Electrify Expo 2026 - the largest outdoor electric vehicle festival.",
      category: "Events",
      image: "/blog/electrify-expo-2026.png",
      date: "January 14, 2026",
      readTime: "7 min read",
      slug: "what-to-expect-electrify-expo-2026"
    },
    {
      id: 15,
      title: "New EV Battery Technology: What's Coming in 2026",
      excerpt: "Explore the cutting-edge battery technologies set to revolutionize electric vehicles.",
      category: "Technology",
      image: "/blog/ev-battery-technology-2026.png",
      date: "January 12, 2026",
      readTime: "10 min read",
      slug: "ev-battery-technology-2026"
    },
    {
      id: 16,
      title: "Best Electric SUVs for Families in 2026",
      excerpt: "Find the perfect electric SUV for your family with our comprehensive guide covering range, safety, and value.",
      category: "Reviews",
      image: "/blog/electric-suv-family-2026.png",
      date: "January 10, 2026",
      readTime: "12 min read",
      slug: "best-electric-suvs-families-2026"
    }
  ];

  // Sort posts newest first by date
  const sortedPosts = useMemo(() =>
    [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    []
  );

  const filteredPosts = activeCategory === "All"
    ? sortedPosts
    : sortedPosts.filter(post => post.category === activeCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const scrollToGrid = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="BLOG" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <span className="text-[#4a90d9] text-[14px] tracking-[0.2em] uppercase mb-4 block">Our Blog</span>
          <h1 className="text-[48px] md:text-[64px] font-bold leading-[1.1] mb-6">
            Insights &
            <span className="text-[#4a90d9]"> News</span>
          </h1>
          <p className="text-[18px] text-[#6b7a94] max-w-[600px]">
            Stay informed with expert analysis, buying guides, industry comparisons, and the latest automotive news.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-6 pb-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#4a90d9] text-white"
                    : "bg-[rgba(74,144,217,0.1)] text-[#6b7a94] hover:bg-[rgba(74,144,217,0.2)] hover:text-[#e8edf5]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 pb-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Post count */}
          <p className="text-[14px] text-[#6b7a94] mb-6">
            Showing {(currentPage - 1) * POSTS_PER_PAGE + 1}–{Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)} of {filteredPosts.length} articles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedPosts.map((post) => (
              <Link
                key={post.id}
                href={post.isInsight ? `/insights/${post.slug}` : `/blog/${post.slug}`}
                className="group bg-[rgba(74,144,217,0.05)] rounded-2xl overflow-hidden border border-[rgba(74,144,217,0.1)] hover:border-[rgba(74,144,217,0.3)] transition-all duration-300"
              >
                <div className="relative h-[160px] overflow-hidden">
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
                      post.category === "Guides" ? "bg-[#4a90d9]" :
                      "bg-[#4a90d9]"
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 text-[11px] text-[#6b7a94] mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-[#e8edf5] mb-2 group-hover:text-[#4a90d9] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[12px] text-[#6b7a94] line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="px-6 pb-20">
          <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2">
            <button
              onClick={() => { setCurrentPage(p => Math.max(1, p - 1)); scrollToGrid(); }}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-all duration-300 ${
                currentPage === 1
                  ? "bg-[rgba(74,144,217,0.05)] text-[#3a4a5c] cursor-not-allowed"
                  : "bg-[rgba(74,144,217,0.1)] text-[#6b7a94] hover:bg-[rgba(74,144,217,0.2)] hover:text-[#e8edf5]"
              }`}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => { setCurrentPage(page); scrollToGrid(); }}
                className={`w-10 h-10 rounded-lg text-[14px] font-medium transition-all duration-300 ${
                  currentPage === page
                    ? "bg-[#4a90d9] text-white"
                    : "bg-[rgba(74,144,217,0.1)] text-[#6b7a94] hover:bg-[rgba(74,144,217,0.2)] hover:text-[#e8edf5]"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => { setCurrentPage(p => Math.min(totalPages, p + 1)); scrollToGrid(); }}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-[rgba(74,144,217,0.05)] text-[#3a4a5c] cursor-not-allowed"
                  : "bg-[rgba(74,144,217,0.1)] text-[#6b7a94] hover:bg-[rgba(74,144,217,0.2)] hover:text-[#e8edf5]"
              }`}
            >
              Next
            </button>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="px-6 pb-20">
        <div className="max-w-[800px] mx-auto bg-[rgba(74,144,217,0.1)] rounded-3xl p-6 md:p-12 text-center border border-[rgba(74,144,217,0.2)]">
          <h2 className="text-[32px] font-bold mb-4">Stay Updated</h2>
          <p className="text-[#6b7a94] mb-8">Get the latest EV news and insights delivered to your inbox weekly.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-[500px] mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-[#0a0f1a] border border-[rgba(74,144,217,0.3)] rounded-full text-[#e8edf5] placeholder-[#6b7a94] focus:outline-none focus:border-[#4a90d9]"
            />
            <button className="px-8 py-3 bg-[#4a90d9] text-white font-medium rounded-full hover:bg-[#3a7bc8] transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

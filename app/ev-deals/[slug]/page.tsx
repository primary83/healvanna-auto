import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  ALL_SLUGS,
  getDealBySlug,
  EV_DETAILS,
  getSlugForDeal,
} from "../../lib/evDetailData";
import { EV_DEALS } from "../../lib/evDealsData";

export function generateStaticParams() {
  return ALL_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const deal = getDealBySlug(params.slug);
  const detail = EV_DETAILS[params.slug];
  if (!deal || !detail) return { title: "EV Not Found" };

  const best = deal.bestUsedPrice ?? deal.bestNewPrice ?? deal.msrp;
  const title = `${deal.year} ${deal.brand} ${deal.model} Best Price — Compare Deals from 6+ Platforms | HealVanna`;
  const description = `Find the best price on the ${deal.year} ${deal.brand} ${deal.model}. Compare new and used prices from Carvana, CarMax, AutoTrader, Cars.com, CarGurus. ${deal.range} mi range, True Value Score ${deal.trueValueScore}/100. Updated March 2026.`;

  return {
    title,
    description,
    openGraph: {
      title: `${deal.year} ${deal.brand} ${deal.model} Best Price — Compare Deals`,
      description,
      url: `/ev-deals/${params.slug}`,
      type: "website",
    },
    alternates: { canonical: `/ev-deals/${params.slug}` },
  };
}

function formatPrice(n: number | null) {
  if (n === null) return "N/A";
  return "$" + n.toLocaleString();
}

function scoreColor(score: number) {
  if (score >= 85) return "text-emerald-400";
  if (score >= 75) return "text-[#4a90d9]";
  if (score >= 65) return "text-amber-400";
  return "text-red-400";
}

function scoreBg(score: number) {
  if (score >= 85) return "bg-emerald-500/20 border-emerald-500/30";
  if (score >= 75) return "bg-[rgba(74,144,217,0.2)] border-[rgba(74,144,217,0.3)]";
  if (score >= 65) return "bg-amber-500/20 border-amber-500/30";
  return "bg-red-500/20 border-red-500/30";
}

function trendColor(pct: number) {
  if (pct < -5) return "text-emerald-400";
  if (pct < 0) return "text-emerald-300";
  if (pct === 0) return "text-slate-400";
  return "text-red-400";
}

export default function EvDetailPage({ params }: { params: { slug: string } }) {
  const deal = getDealBySlug(params.slug);
  const detail = EV_DETAILS[params.slug];
  if (!deal || !detail) notFound();

  const bestPrice = deal.bestUsedPrice ?? deal.bestNewPrice ?? deal.msrp;
  const s = detail.specs;

  // Similar models
  const similar = detail.similarSlugs
    .map((sl) => {
      const d = getDealBySlug(sl);
      const dt = EV_DETAILS[sl];
      return d && dt ? { slug: sl, deal: d, detail: dt } : null;
    })
    .filter(Boolean) as { slug: string; deal: typeof deal; detail: typeof detail }[];

  // 5-year cost
  const oc = deal.ownershipCost;
  const purchasePrice = deal.bestNewPrice ?? deal.msrp;
  const totalOwnership = purchasePrice + oc.electricity5yr + oc.insurance5yr + oc.maintenance5yr + detail.registrationFees5yr;
  const netOwnership = totalOwnership - oc.resaleValue;

  // JSON-LD Product + AggregateOffer
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${deal.year} ${deal.brand} ${deal.model}`,
    description: `${deal.year} ${deal.brand} ${deal.model} electric vehicle with ${deal.range} miles of range.`,
    brand: { "@type": "Brand", name: deal.brand },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: bestPrice,
      highPrice: deal.msrp,
      priceCurrency: "USD",
      offerCount: detail.platformListings.length,
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://healvanna.com" },
      { "@type": "ListItem", position: 2, name: "EV Best Price", item: "https://healvanna.com/ev-deals" },
      { "@type": "ListItem", position: 3, name: `${deal.brand} ${deal.model}`, item: `https://healvanna.com/ev-deals/${params.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="EV BEST PRICE" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ===== SECTION 1: HERO ===== */}
      <section className="pt-28 pb-12 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-[12px] text-[#6b7a94]">
              <li><Link href="/" className="hover:text-[#e8edf5] transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/ev-deals" className="hover:text-[#e8edf5] transition-colors">EV Best Price</Link></li>
              <li>/</li>
              <li className="text-[#e8edf5]">{deal.brand} {deal.model}</li>
            </ol>
          </nav>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] tracking-wider text-[#6b7a94]">{deal.year}</span>
                <span className="px-2 py-0.5 text-[10px] tracking-wider uppercase bg-[rgba(74,144,217,0.1)] border border-[rgba(74,144,217,0.2)] rounded text-[#4a90d9]">
                  {deal.bodyType}
                </span>
                <span className="text-[11px] text-[#6b7a94]">{deal.brand}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-light tracking-wide mb-4">
                {deal.brand} <span className="font-medium">{deal.model}</span>
              </h1>
              <div className="flex items-center gap-3">
                <span className={`${trendColor(deal.trendPercent)} text-[13px] font-medium`}>
                  {deal.trendPercent > 0 ? "▲" : deal.trendPercent < 0 ? "▼" : "—"} {Math.abs(deal.trendPercent)}% this month
                </span>
                <span className="text-[12px] text-[#6b7a94]">{deal.trendNote}</span>
              </div>
            </div>

            {/* True Value Score badge */}
            <div className={`flex flex-col items-center justify-center w-28 h-28 rounded-2xl border ${scoreBg(deal.trueValueScore)}`}>
              <span className="text-[10px] uppercase tracking-wider text-[#6b7a94] mb-1">True Value</span>
              <span className={`text-4xl font-bold ${scoreColor(deal.trueValueScore)}`}>{deal.trueValueScore}</span>
              <span className="text-[10px] text-[#6b7a94]">/ 100</span>
            </div>
          </div>

          {/* Key stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Best Price", value: formatPrice(bestPrice) },
              { label: "Range", value: `${deal.range} mi` },
              { label: "0-60 mph", value: deal.zeroToSixty },
              { label: "Fast Charge", value: `${deal.chargingSpeed}/15min` },
            ].map((stat) => (
              <div key={stat.label} className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-4 text-center">
                <div className="text-[10px] uppercase tracking-wider text-[#6b7a94] mb-1">{stat.label}</div>
                <div className="text-xl font-semibold text-[#e8edf5]">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: PRICE COMPARISON TABLE ===== */}
      <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-xl font-light tracking-wide mb-6">Compare Prices Across Platforms</h2>
          <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[rgba(74,144,217,0.1)]">
                    <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-[#6b7a94] font-medium">Platform</th>
                    <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-[#6b7a94] font-medium">Condition</th>
                    <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-[#6b7a94] font-medium">Price</th>
                    <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-[#6b7a94] font-medium">Mileage</th>
                    <th className="px-5 py-3 text-[10px] uppercase tracking-wider text-[#6b7a94] font-medium">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.platformListings.map((pl, i) => {
                    const lowestPrice = Math.min(...detail.platformListings.map((p) => p.price));
                    const isBest = pl.price === lowestPrice;
                    return (
                      <tr key={i} className="border-b border-[rgba(74,144,217,0.06)] last:border-0">
                        <td className="px-5 py-3 text-[13px] font-medium text-[#e8edf5]">{pl.platform}</td>
                        <td className="px-5 py-3">
                          <span className={`text-[11px] px-2 py-0.5 rounded ${pl.condition === "New" ? "bg-[rgba(74,144,217,0.15)] text-[#4a90d9]" : "bg-[rgba(107,122,148,0.15)] text-[#6b7a94]"}`}>
                            {pl.condition}
                          </span>
                        </td>
                        <td className="px-5 py-3">
                          <span className={`text-[14px] font-semibold ${isBest ? "text-emerald-400" : "text-[#e8edf5]"}`}>
                            {formatPrice(pl.price)}
                          </span>
                          {isBest && <span className="ml-2 text-[10px] text-emerald-400 font-medium">BEST</span>}
                        </td>
                        <td className="px-5 py-3 text-[13px] text-[#6b7a94]">{pl.mileage}</td>
                        <td className="px-5 py-3">
                          <a
                            href={pl.url}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            className="text-[12px] text-[#4a90d9] hover:text-[#e8edf5] transition-colors font-medium"
                          >
                            View &rarr;
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 border-t border-[rgba(74,144,217,0.08)] flex items-center justify-between">
              <span className="text-[11px] text-[#3d4a61]">MSRP: <span className="line-through">{formatPrice(deal.msrp)}</span></span>
              <span className="text-[11px] text-[#3d4a61]">Prices last verified March 2026. Click to view current listing.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: FULL SPECIFICATIONS ===== */}
      <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-xl font-light tracking-wide mb-6">Full Specifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Performance */}
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
              <h3 className="text-[11px] uppercase tracking-wider text-[#4a90d9] mb-4 font-medium">Performance</h3>
              {[
                ["Range (EPA)", `${deal.range} mi`],
                ["Real-World Range", `~${Math.round(deal.range * 0.85)}-${Math.round(deal.range * 0.97)} mi`],
                ["Cold Weather Range", `~${Math.round(deal.range * 0.7)}-${Math.round(deal.range * 0.78)} mi`],
                ["0-60 mph", deal.zeroToSixty],
                ["Top Speed", s.topSpeed],
                ["Horsepower", s.horsepower],
                ["Torque", s.torque],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-2 border-b border-[rgba(74,144,217,0.06)] last:border-0">
                  <span className="text-[13px] text-[#6b7a94]">{label}</span>
                  <span className="text-[13px] text-[#e8edf5] font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* Battery & Charging */}
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
              <h3 className="text-[11px] uppercase tracking-wider text-[#4a90d9] mb-4 font-medium">Battery &amp; Charging</h3>
              {[
                ["Battery Capacity", deal.batteryDetails.capacity],
                ["Efficiency", `${deal.efficiency} mi/kWh`],
                ["DC Fast Charge", s.dcFastChargeKw],
                ["Miles / 15 min Fast Charge", s.milesPerFifteenMin],
                ["Level 2 Charge Time", s.level2ChargeTime],
                ["Charge Port", s.chargePortType],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-2 border-b border-[rgba(74,144,217,0.06)] last:border-0">
                  <span className="text-[13px] text-[#6b7a94]">{label}</span>
                  <span className="text-[13px] text-[#e8edf5] font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* Dimensions */}
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
              <h3 className="text-[11px] uppercase tracking-wider text-[#4a90d9] mb-4 font-medium">Dimensions</h3>
              {[
                ["Length", s.length],
                ["Width", s.width],
                ["Height", s.height],
                ["Wheelbase", s.wheelbase],
                ["Cargo Space", deal.cargoSpace],
                ["Curb Weight", s.curbWeight],
                ["Seating", `${s.seatingCapacity} passengers`],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-2 border-b border-[rgba(74,144,217,0.06)] last:border-0">
                  <span className="text-[13px] text-[#6b7a94]">{label}</span>
                  <span className="text-[13px] text-[#e8edf5] font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* Warranty */}
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
              <h3 className="text-[11px] uppercase tracking-wider text-[#4a90d9] mb-4 font-medium">Warranty</h3>
              {[
                ["Bumper-to-Bumper", s.bumperToBumper],
                ["Battery Warranty", s.batteryWarranty],
                ["Powertrain", s.powertrainWarranty],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-2 border-b border-[rgba(74,144,217,0.06)] last:border-0">
                  <span className="text-[13px] text-[#6b7a94]">{label}</span>
                  <span className="text-[13px] text-[#e8edf5] font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: 5-YEAR COST OF OWNERSHIP ===== */}
      <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-xl font-light tracking-wide mb-6">What It Really Costs to Own a {deal.model}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-6">
              <h3 className="text-[11px] uppercase tracking-wider text-[#4a90d9] mb-5 font-medium">5-Year EV Cost</h3>
              {[
                { label: "Purchase Price", value: purchasePrice, pct: Math.round((purchasePrice / totalOwnership) * 100) },
                { label: "Electricity (5yr)", value: oc.electricity5yr, pct: Math.round((oc.electricity5yr / totalOwnership) * 100) },
                { label: "Insurance (5yr)", value: oc.insurance5yr, pct: Math.round((oc.insurance5yr / totalOwnership) * 100) },
                { label: "Maintenance (5yr)", value: oc.maintenance5yr, pct: Math.round((oc.maintenance5yr / totalOwnership) * 100) },
                { label: "Registration & Fees", value: detail.registrationFees5yr, pct: Math.round((detail.registrationFees5yr / totalOwnership) * 100) },
              ].map((item) => (
                <div key={item.label} className="mb-3">
                  <div className="flex justify-between text-[12px] mb-1">
                    <span className="text-[#6b7a94]">{item.label}</span>
                    <span className="text-[#e8edf5] font-medium">{formatPrice(item.value)}</span>
                  </div>
                  <div className="w-full bg-[rgba(74,144,217,0.08)] rounded-full h-1.5">
                    <div className="bg-[#4a90d9] h-1.5 rounded-full" style={{ width: `${item.pct}%` }} />
                  </div>
                </div>
              ))}
              <div className="mt-5 pt-4 border-t border-[rgba(74,144,217,0.12)]">
                <div className="flex justify-between text-[13px] mb-2">
                  <span className="text-[#6b7a94]">Total 5-Year Cost</span>
                  <span className="text-[#e8edf5] font-semibold">{formatPrice(totalOwnership)}</span>
                </div>
                <div className="flex justify-between text-[13px] mb-2">
                  <span className="text-[#6b7a94]">Est. Resale Value ({oc.resalePercent}%)</span>
                  <span className="text-emerald-400 font-medium">-{formatPrice(oc.resaleValue)}</span>
                </div>
                <div className="flex justify-between text-[15px] pt-2 border-t border-[rgba(74,144,217,0.12)]">
                  <span className="text-[#e8edf5] font-semibold">Net Cost of Ownership</span>
                  <span className="text-emerald-400 font-bold">{formatPrice(netOwnership)}</span>
                </div>
              </div>
            </div>

            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-6">
              <h3 className="text-[11px] uppercase tracking-wider text-[#4a90d9] mb-5 font-medium">vs Gas Equivalent ({detail.gasEquivalentModel})</h3>
              <div className="flex items-center justify-between mb-6">
                <div className="text-center">
                  <div className="text-[10px] uppercase text-[#6b7a94] mb-1">{deal.model} (EV)</div>
                  <div className="text-2xl font-bold text-emerald-400">{formatPrice(netOwnership)}</div>
                </div>
                <div className="text-[#6b7a94] text-lg">vs</div>
                <div className="text-center">
                  <div className="text-[10px] uppercase text-[#6b7a94] mb-1">{detail.gasEquivalentModel}</div>
                  <div className="text-2xl font-bold text-red-400">{formatPrice(detail.gasEquivalentCost5yr)}</div>
                </div>
              </div>
              {detail.gasEquivalentCost5yr > netOwnership && (
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 text-center">
                  <div className="text-[11px] text-[#6b7a94] mb-1">5-Year Savings with EV</div>
                  <div className="text-2xl font-bold text-emerald-400">
                    {formatPrice(detail.gasEquivalentCost5yr - netOwnership)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: GAS vs EV SAVINGS ===== */}
      <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-xl font-light tracking-wide mb-6">How Much You&apos;ll Save vs Gas</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {detail.gasComparisons.map((gc) => (
              <div key={gc.name} className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
                <div className="text-[12px] text-[#6b7a94] mb-3">vs {gc.name}</div>
                <div className="text-2xl font-bold text-emerald-400 mb-1">{formatPrice(gc.annualSavings)}<span className="text-[13px] font-normal text-[#6b7a94]">/year</span></div>
                <div className="text-[13px] text-emerald-300">{formatPrice(gc.fiveYearSavings)} over 5 years</div>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[#3d4a61] mt-4">Based on 12,000 miles/year, $3.50/gal gas, $0.13/kWh electricity.</p>
        </div>
      </section>

      {/* ===== SECTION 6: BATTERY & RANGE DEEP DIVE ===== */}
      <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-xl font-light tracking-wide mb-6">Battery &amp; Range: What to Expect</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Range by temperature */}
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
              <h3 className="text-[11px] uppercase tracking-wider text-[#4a90d9] mb-4 font-medium">Range by Temperature</h3>
              {[
                { temp: "70°F (Ideal)", range: detail.rangeAt70F, pct: 100 },
                { temp: "30°F (Cold)", range: detail.rangeAt30F, pct: 78 },
                { temp: "0°F (Extreme)", range: detail.rangeAt0F, pct: 65 },
              ].map((r) => (
                <div key={r.temp} className="mb-3">
                  <div className="flex justify-between text-[12px] mb-1">
                    <span className="text-[#6b7a94]">{r.temp}</span>
                    <span className="text-[#e8edf5] font-medium">{r.range}</span>
                  </div>
                  <div className="w-full bg-[rgba(74,144,217,0.08)] rounded-full h-2">
                    <div className="bg-[#4a90d9] h-2 rounded-full transition-all" style={{ width: `${r.pct}%` }} />
                  </div>
                </div>
              ))}
              <div className="mt-4 flex justify-between text-[12px]">
                <div><span className="text-[#6b7a94]">Highway: </span><span className="text-[#e8edf5]">{detail.highwayRange}</span></div>
                <div><span className="text-[#6b7a94]">City: </span><span className="text-[#e8edf5]">{detail.cityRange}</span></div>
              </div>
            </div>

            {/* Charging costs & times */}
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
              <h3 className="text-[11px] uppercase tracking-wider text-[#4a90d9] mb-4 font-medium">Charging Costs &amp; Times</h3>
              {[
                ["Full Charge at Home", detail.chargeCostHome],
                ["Full Charge (Public DC)", detail.chargeCostPublic],
                ["Level 1 (120V) Time", detail.level1ChargeTime],
                ["Level 2 (240V) Time", s.level2ChargeTime],
                ["DC Fast Charge Speed", s.dcFastChargeKw],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-2 border-b border-[rgba(74,144,217,0.06)] last:border-0">
                  <span className="text-[13px] text-[#6b7a94]">{label}</span>
                  <span className="text-[13px] text-[#e8edf5] font-medium">{value}</span>
                </div>
              ))}
            </div>

            {/* Battery degradation */}
            <div className="md:col-span-2 bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
              <h3 className="text-[11px] uppercase tracking-wider text-[#4a90d9] mb-4 font-medium">Battery Degradation (Used Buyer Guide)</h3>
              <div className="grid grid-cols-4 gap-4 mb-4">
                {[
                  { mi: "New", pct: 100 },
                  { mi: "30k mi", pct: 95 },
                  { mi: "60k mi", pct: 90 },
                  { mi: "100k mi", pct: 85 },
                ].map((d) => (
                  <div key={d.mi} className="text-center">
                    <div className="text-[20px] font-bold text-[#e8edf5]">{d.pct}%</div>
                    <div className="text-[11px] text-[#6b7a94]">{d.mi}</div>
                    <div className="text-[11px] text-[#6b7a94] mt-1">~{Math.round(deal.range * d.pct / 100)} mi</div>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-[#6b7a94]">{deal.batteryDetails.degradationNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: PROS AND CONS ===== */}
      <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-xl font-light tracking-wide mb-6">Should You Buy the {deal.model}?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[rgba(15,22,40,0.6)] border border-emerald-500/20 rounded-xl p-5">
              <h3 className="text-[11px] uppercase tracking-wider text-emerald-400 mb-4 font-medium">Pros</h3>
              <ul className="space-y-3">
                {detail.pros.map((pro, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-[#e8edf5]">
                    <span className="text-emerald-400 mt-0.5 shrink-0">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[rgba(15,22,40,0.6)] border border-red-500/20 rounded-xl p-5">
              <h3 className="text-[11px] uppercase tracking-wider text-red-400 mb-4 font-medium">Cons</h3>
              <ul className="space-y-3">
                {detail.cons.map((con, i) => (
                  <li key={i} className="flex gap-3 text-[13px] text-[#e8edf5]">
                    <span className="text-red-400 mt-0.5 shrink-0">-</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: SIMILAR MODELS ===== */}
      <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-xl font-light tracking-wide mb-6">Compare Similar EVs</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {similar.map((s) => (
              <Link
                key={s.slug}
                href={`/ev-deals/${s.slug}`}
                className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5 hover:border-[rgba(74,144,217,0.3)] transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-[11px] text-[#6b7a94]">{s.deal.year} {s.deal.brand}</div>
                    <div className="text-[15px] font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors">{s.deal.model}</div>
                  </div>
                  <div className={`text-lg font-bold ${scoreColor(s.deal.trueValueScore)}`}>{s.deal.trueValueScore}</div>
                </div>
                <div className="flex justify-between text-[12px] text-[#6b7a94]">
                  <span>From {formatPrice(s.deal.bestUsedPrice ?? s.deal.bestNewPrice ?? s.deal.msrp)}</span>
                  <span>{s.deal.range} mi</span>
                </div>
                <div className="mt-3 text-[12px] text-[#4a90d9] font-medium group-hover:text-[#e8edf5] transition-colors">
                  Compare &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: FAQ ===== */}
      <section className="py-12 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-xl font-light tracking-wide mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {detail.faqs.map((faq, i) => (
              <div key={i} className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-5">
                <h3 className="text-[14px] font-medium text-[#e8edf5] mb-2">{faq.q}</h3>
                <p className="text-[13px] text-[#6b7a94] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 10: CTA ===== */}
      <section className="py-16 px-6 md:px-12 border-t border-[rgba(74,144,217,0.08)]">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-2xl font-light tracking-wide mb-4">
            Ready to Find Your {deal.model}?
          </h2>
          <p className="text-[14px] text-[#6b7a94] mb-8">
            Compare prices across {detail.platformListings.length} platforms and find the best deal.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {detail.platformListings.map((pl) => (
              <a
                key={pl.platform}
                href={pl.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="px-5 py-2.5 text-[13px] font-medium bg-[rgba(74,144,217,0.1)] border border-[rgba(74,144,217,0.2)] rounded-lg hover:bg-[rgba(74,144,217,0.2)] transition-all text-[#4a90d9]"
              >
                {pl.platform} &rarr;
              </a>
            ))}
          </div>

          <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-6 inline-block w-full max-w-md">
            <div className="text-[13px] text-[#6b7a94] mb-3">Get alerted when {deal.model} prices drop</div>
            <form
              action="https://formspree.io/f/xjggywyr"
              method="POST"
              className="flex gap-2"
            >
              <input type="hidden" name="source" value={`ev-deals-${params.slug}`} />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-2.5 rounded-lg bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.15)] text-[13px] text-[#e8edf5] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9]"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 rounded-lg text-[13px] font-medium hover:bg-emerald-500/30 transition-all"
              >
                Notify Me
              </button>
            </form>
          </div>

          <div className="mt-8">
            <Link
              href="/ev-deals"
              className="text-[13px] text-[#4a90d9] hover:text-[#e8edf5] transition-colors"
            >
              &larr; Back to All EV Deals
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

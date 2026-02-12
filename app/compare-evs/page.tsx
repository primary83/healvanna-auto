"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { EV_MODELS, getAllBrands, type EVModel } from "../lib/carData";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const PRESETS = [
  { label: "Tesla Model 3 vs BMW i4 vs Polestar 2", ids: ["tesla-model-3", "bmw-i4", "polestar-2"] },
  { label: "Model Y vs Ioniq 5 vs Mustang Mach-E", ids: ["tesla-model-y", "hyundai-ioniq-5", "ford-mustang-mach-e"] },
  { label: "Rivian R1T vs Cybertruck vs F-150 Lightning", ids: ["rivian-r1t", "tesla-cybertruck", "ford-f-150-lightning"] },
  { label: "Lucid Air vs Mercedes EQS vs BMW i7", ids: ["lucid-air-touring", "mercedes-eqs", "bmw-i7"] },
];

interface CompareRowProps {
  label: string;
  values: string[];
  numericValues?: number[];
  highlightBest?: "lowest" | "highest";
}

function CompareRow({ label, values, numericValues, highlightBest }: CompareRowProps) {
  let bestIdx = -1;
  if (highlightBest && numericValues) {
    const valid = numericValues.filter((v) => v > 0 && v < 99);
    if (valid.length > 1) {
      const best = highlightBest === "lowest" ? Math.min(...valid) : Math.max(...valid);
      bestIdx = numericValues.indexOf(best);
    }
  }

  return (
    <tr className="border-b border-[rgba(74,144,217,0.06)]">
      <td className="py-3.5 pr-4 text-[12px] text-[#6b7a94] font-medium w-[120px]">{label}</td>
      {values.map((val, i) => (
        <td
          key={i}
          className={`py-3.5 px-3 text-[13px] text-center ${
            i === bestIdx ? "text-[#4a90d9] font-semibold" : "text-[#e8edf5]"
          }`}
        >
          {val}
        </td>
      ))}
    </tr>
  );
}

function CompareEVsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedEVs, setSelectedEVs] = useState<EVModel[]>(() => {
    const carsParam = searchParams.get("cars");
    if (carsParam) {
      return carsParam
        .split(",")
        .map((id) => EV_MODELS.find((ev) => ev.id === id))
        .filter(Boolean) as EVModel[];
    }
    return [];
  });
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [search, setSearch] = useState("");

  const brands = useMemo(() => getAllBrands(), []);

  const filteredModels = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return EV_MODELS;
    return EV_MODELS.filter(
      (ev) =>
        ev.brand.toLowerCase().includes(q) ||
        ev.model.toLowerCase().includes(q) ||
        ev.id.includes(q)
    );
  }, [search]);

  const groupedModels = useMemo(() => {
    const map = new Map<string, EVModel[]>();
    for (const ev of filteredModels) {
      const existing = map.get(ev.brandSlug) || [];
      existing.push(ev);
      map.set(ev.brandSlug, existing);
    }
    return map;
  }, [filteredModels]);

  const addEV = (ev: EVModel) => {
    if (selectedEVs.length >= 3 || selectedEVs.some((s) => s.id === ev.id)) return;
    const updated = [...selectedEVs, ev];
    setSelectedEVs(updated);
    updateURL(updated);
    setSelectorOpen(false);
    setSearch("");
  };

  const removeEV = (id: string) => {
    const updated = selectedEVs.filter((ev) => ev.id !== id);
    setSelectedEVs(updated);
    updateURL(updated);
  };

  const clearAll = () => {
    setSelectedEVs([]);
    router.replace("/compare-evs", { scroll: false });
  };

  const loadPreset = (ids: string[]) => {
    const evs = ids.map((id) => EV_MODELS.find((ev) => ev.id === id)).filter(Boolean) as EVModel[];
    setSelectedEVs(evs);
    updateURL(evs);
  };

  const updateURL = (evs: EVModel[]) => {
    if (evs.length > 0) {
      const params = new URLSearchParams();
      params.set("cars", evs.map((ev) => ev.id).join(","));
      router.replace(`/compare-evs?${params.toString()}`, { scroll: false });
    } else {
      router.replace("/compare-evs", { scroll: false });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-[1000px] mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-light tracking-[0.04em] mb-3">
              Compare <span className="text-[#4a90d9] font-medium">Electric Vehicles</span>
            </h1>
            <p className="text-[14px] text-[#6b7a94] max-w-lg mx-auto">
              Select up to 3 electric vehicles to compare specs side by side. Find the perfect EV for your needs.
            </p>
          </div>

          {/* Selected EVs + Add Button */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {selectedEVs.map((ev) => (
              <div
                key={ev.id}
                className="flex items-center gap-2 px-4 py-2 bg-[rgba(74,144,217,0.1)] border border-[rgba(74,144,217,0.2)] rounded-lg"
              >
                <span className="text-[12px] font-medium text-[#e8edf5]">
                  {ev.brand} {ev.model}
                </span>
                <button
                  onClick={() => removeEV(ev.id)}
                  className="text-[#6b7a94] hover:text-red-400 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}

            {selectedEVs.length < 3 && (
              <div className="relative">
                <button
                  onClick={() => setSelectorOpen(!selectorOpen)}
                  className="flex items-center gap-2 px-4 py-2 text-[12px] font-medium text-[#4a90d9] border border-dashed border-[rgba(74,144,217,0.3)] rounded-lg hover:bg-[rgba(74,144,217,0.05)] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Add Vehicle
                </button>

                {selectorOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[320px] max-h-[400px] bg-[#0d1424] border border-[rgba(74,144,217,0.15)] rounded-xl shadow-2xl z-50 overflow-hidden">
                    <div className="p-3 border-b border-[rgba(74,144,217,0.1)]">
                      <input
                        type="text"
                        placeholder="Search brand or model..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-3 py-2 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[12px] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9]"
                        autoFocus
                      />
                    </div>
                    <div className="overflow-y-auto max-h-[340px]">
                      {Array.from(groupedModels.entries()).map(([brandSlug, models]) => (
                        <div key={brandSlug}>
                          <p className="px-4 pt-3 pb-1 text-[10px] tracking-[0.1em] text-[#4a90d9] font-medium uppercase">
                            {models[0].brand}
                          </p>
                          {models.map((ev) => {
                            const isSelected = selectedEVs.some((s) => s.id === ev.id);
                            return (
                              <button
                                key={ev.id}
                                onClick={() => !isSelected && addEV(ev)}
                                disabled={isSelected}
                                className={`w-full text-left px-4 py-2.5 flex items-center justify-between transition-colors ${
                                  isSelected
                                    ? "opacity-40 cursor-not-allowed"
                                    : "hover:bg-[rgba(74,144,217,0.08)] cursor-pointer"
                                }`}
                              >
                                <span className="text-[12px] text-[#e8edf5]">{ev.model}</span>
                                <span className="text-[11px] text-[#6b7a94]">
                                  {ev.price} &middot; {ev.range}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      ))}
                      {groupedModels.size === 0 && (
                        <p className="px-4 py-6 text-[12px] text-[#3d4a61] text-center">No results found</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {selectedEVs.length > 0 && (
              <button
                onClick={clearAll}
                className="text-[11px] text-[#6b7a94] hover:text-red-400 transition-colors ml-2"
              >
                Clear all
              </button>
            )}
          </div>

          {/* Comparison Content or Empty State */}
          {selectedEVs.length >= 2 ? (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[rgba(74,144,217,0.1)]">
                      <th className="w-[120px]" />
                      {selectedEVs.map((ev) => (
                        <th key={ev.id} className="pb-4 px-3 text-center">
                          <p className="text-[10px] tracking-[0.08em] text-[#4a90d9] uppercase mb-1">{ev.brand}</p>
                          <p className="text-[15px] font-medium text-[#e8edf5]">{ev.model}</p>
                          <p className="text-[11px] text-[#6b7a94] mt-0.5">{ev.category}</p>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <CompareRow
                      label="Price"
                      values={selectedEVs.map((ev) => ev.price)}
                      numericValues={selectedEVs.map((ev) => ev.priceNumeric)}
                      highlightBest="lowest"
                    />
                    <CompareRow
                      label="Range"
                      values={selectedEVs.map((ev) => ev.range)}
                      numericValues={selectedEVs.map((ev) => ev.rangeNumeric)}
                      highlightBest="highest"
                    />
                    <CompareRow
                      label="0-60 mph"
                      values={selectedEVs.map((ev) => ev.acceleration)}
                      numericValues={selectedEVs.map((ev) => ev.accelerationNumeric)}
                      highlightBest="lowest"
                    />
                    <CompareRow
                      label="Top Speed"
                      values={selectedEVs.map((ev) => ev.topSpeed)}
                    />
                    <CompareRow
                      label="Drive Type"
                      values={selectedEVs.map((ev) => ev.driveType)}
                    />
                    <CompareRow
                      label="Power"
                      values={selectedEVs.map((ev) => ev.power)}
                    />
                    <CompareRow
                      label="Category"
                      values={selectedEVs.map((ev) => ev.category)}
                    />
                    <tr>
                      <td />
                      {selectedEVs.map((ev) => (
                        <td key={ev.id} className="py-4 px-3 text-center">
                          <Link
                            href={ev.pageUrl}
                            className="inline-block px-4 py-2 text-[11px] font-medium text-[#4a90d9] border border-[rgba(74,144,217,0.2)] rounded-lg hover:bg-[rgba(74,144,217,0.08)] transition-colors"
                          >
                            View Details
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                {selectedEVs.map((ev) => (
                  <div
                    key={ev.id}
                    className="bg-[rgba(15,22,40,0.6)] rounded-xl p-5 border border-[rgba(74,144,217,0.12)]"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-[10px] tracking-[0.08em] text-[#4a90d9] uppercase">{ev.brand}</p>
                        <p className="text-[16px] font-medium">{ev.model}</p>
                      </div>
                      <span className="text-[11px] text-[#6b7a94] px-2.5 py-1 bg-[rgba(74,144,217,0.08)] rounded-md">
                        {ev.category}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Price", value: ev.price },
                        { label: "Range", value: ev.range },
                        { label: "0-60 mph", value: ev.acceleration },
                        { label: "Top Speed", value: ev.topSpeed },
                        { label: "Drive", value: ev.driveType },
                        { label: "Power", value: ev.power },
                      ].map((spec) => (
                        <div key={spec.label}>
                          <p className="text-[10px] text-[#6b7a94] mb-0.5">{spec.label}</p>
                          <p className="text-[13px] font-medium">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                    <Link
                      href={ev.pageUrl}
                      className="block mt-4 text-center py-2.5 text-[11px] font-medium text-[#4a90d9] border border-[rgba(74,144,217,0.2)] rounded-lg hover:bg-[rgba(74,144,217,0.08)] transition-colors"
                    >
                      View {ev.brand} Details
                    </Link>
                  </div>
                ))}
              </div>
            </>
          ) : selectedEVs.length === 1 ? (
            <div className="text-center py-16">
              <p className="text-[14px] text-[#6b7a94]">
                Add at least one more vehicle to compare.
              </p>
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-[rgba(74,144,217,0.08)] flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h2 className="text-[18px] font-medium mb-2">Select vehicles to compare</h2>
              <p className="text-[13px] text-[#6b7a94] mb-8 max-w-sm mx-auto">
                Choose 2-3 electric vehicles using the &quot;Add Vehicle&quot; button above, or try a quick comparison below.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                {PRESETS.map((preset) => (
                  <button
                    key={preset.label}
                    onClick={() => loadPreset(preset.ids)}
                    className="px-4 py-2.5 text-[11px] tracking-[0.03em] font-medium text-[#6b7a94] border border-[rgba(74,144,217,0.12)] rounded-lg hover:text-[#4a90d9] hover:border-[rgba(74,144,217,0.3)] transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function CompareEVsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0a0f1a] flex items-center justify-center">
          <p className="text-[#6b7a94]">Loading...</p>
        </div>
      }
    >
      <CompareEVsContent />
    </Suspense>
  );
}

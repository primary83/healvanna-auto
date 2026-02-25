"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { EV_MODELS } from "../lib/carData";
import { getEfficiency } from "../lib/evEfficiency";

// Group EV models by brand for dropdown
function groupByBrand() {
  const groups: Record<string, { id: string; label: string }[]> = {};
  for (const ev of EV_MODELS) {
    if (!groups[ev.brand]) groups[ev.brand] = [];
    groups[ev.brand].push({ id: ev.id, label: `${ev.brand} ${ev.model}` });
  }
  return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
}

// Animated number hook
function useAnimatedValue(target: number, duration = 600) {
  const [display, setDisplay] = useState(0);
  const frameRef = useRef<number>(0);
  const startRef = useRef<number>(0);
  const fromRef = useRef<number>(0);

  useEffect(() => {
    fromRef.current = display;
    startRef.current = performance.now();

    function animate(now: number) {
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(fromRef.current + (target - fromRef.current) * eased);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    }

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration]);

  return display;
}

function formatCurrency(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function formatNumber(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

export default function CalculatePage() {
  // Inputs
  const [mpg, setMpg] = useState(25);
  const [annualMiles, setAnnualMiles] = useState(12000);
  const [gasPrice, setGasPrice] = useState(3.5);
  const [selectedEV, setSelectedEV] = useState("");
  const [kwhPer100, setKwhPer100] = useState(30);
  const [electricityRate, setElectricityRate] = useState(0.13);
  const [manualMode, setManualMode] = useState(false);

  const brandGroups = useMemo(() => groupByBrand(), []);

  // When an EV is selected, auto-fill efficiency
  const handleEVSelect = useCallback(
    (evId: string) => {
      if (evId === "manual") {
        setManualMode(true);
        setSelectedEV("");
        return;
      }
      setManualMode(false);
      setSelectedEV(evId);
      setKwhPer100(getEfficiency(evId));
    },
    []
  );

  // Calculations
  const annualGasCost = (annualMiles / mpg) * gasPrice;
  const annualEVCost = (annualMiles / 100) * kwhPer100 * electricityRate;
  const annualFuelSavings = annualGasCost - annualEVCost;
  const fiveYearFuelSavings = annualFuelSavings * 5;
  const annualMaintenanceSavings = 700;
  const totalFiveYear = (annualFuelSavings + annualMaintenanceSavings) * 5;
  const gasCO2 = (annualMiles / mpg) * 19.6;
  const evCO2 = (annualMiles / 100) * kwhPer100 * 0.86;
  const co2Saved = gasCO2 - evCO2;

  // Animated values
  const animGasCost = useAnimatedValue(annualGasCost);
  const animEVCost = useAnimatedValue(annualEVCost);
  const animFuelSavings = useAnimatedValue(annualFuelSavings);
  const animFiveYear = useAnimatedValue(fiveYearFuelSavings);
  const animTotalFiveYear = useAnimatedValue(totalFiveYear);
  const animCO2 = useAnimatedValue(co2Saved);

  // Bar chart proportions
  const maxCost = Math.max(annualGasCost, annualEVCost, 1);
  const gasBarWidth = (annualGasCost / maxCost) * 100;
  const evBarWidth = (annualEVCost / maxCost) * 100;

  // Selected EV name for display
  const selectedEVName = useMemo(() => {
    if (!selectedEV) return null;
    const ev = EV_MODELS.find((e) => e.id === selectedEV);
    return ev ? `${ev.brand} ${ev.model}` : null;
  }, [selectedEV]);

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation activeItem="CALCULATE" />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
          EV vs Gas Cost{" "}
          <span className="italic text-[#4a90d9] font-normal">Calculator</span>
        </h1>
        <p className="text-[#6b7a94] text-lg max-w-2xl mx-auto">
          See how much you could save by switching from gas to electric. Enter
          your driving habits below for a personalized cost comparison.
        </p>
      </section>

      {/* Calculator */}
      <section className="px-6 pb-20 max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT — Inputs */}
          <div className="flex-1 bg-[#0d1424] border border-[rgba(74,144,217,0.15)] rounded-2xl p-8">
            <h2 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-6 font-medium">
              Your Driving Details
            </h2>

            <div className="space-y-5">
              {/* Gas MPG */}
              <div>
                <label className="block text-sm text-[#6b7a94] mb-1.5">
                  Gas Car MPG
                </label>
                <input
                  type="number"
                  min={1}
                  step={1}
                  value={mpg}
                  onChange={(e) => setMpg(Number(e.target.value) || 1)}
                  className="w-full bg-[#0a0f1a] border border-[rgba(74,144,217,0.2)] rounded-lg px-4 py-3 text-[#e8edf5] focus:border-[#4a90d9] focus:outline-none transition-colors"
                />
              </div>

              {/* Annual Miles */}
              <div>
                <label className="block text-sm text-[#6b7a94] mb-1.5">
                  Annual Miles Driven
                </label>
                <input
                  type="number"
                  min={0}
                  step={500}
                  value={annualMiles}
                  onChange={(e) => setAnnualMiles(Number(e.target.value) || 0)}
                  className="w-full bg-[#0a0f1a] border border-[rgba(74,144,217,0.2)] rounded-lg px-4 py-3 text-[#e8edf5] focus:border-[#4a90d9] focus:outline-none transition-colors"
                />
              </div>

              {/* Gas Price */}
              <div>
                <label className="block text-sm text-[#6b7a94] mb-1.5">
                  Gas Price ($/gallon)
                </label>
                <input
                  type="number"
                  min={0}
                  step={0.01}
                  value={gasPrice}
                  onChange={(e) => setGasPrice(Number(e.target.value) || 0)}
                  className="w-full bg-[#0a0f1a] border border-[rgba(74,144,217,0.2)] rounded-lg px-4 py-3 text-[#e8edf5] focus:border-[#4a90d9] focus:outline-none transition-colors"
                />
              </div>

              {/* Divider */}
              <div className="border-t border-[rgba(74,144,217,0.1)] my-2" />

              {/* EV Selection */}
              <div>
                <label className="block text-sm text-[#6b7a94] mb-1.5">
                  Select an Electric Vehicle
                </label>
                <select
                  value={manualMode ? "manual" : selectedEV}
                  onChange={(e) => handleEVSelect(e.target.value)}
                  className="w-full bg-[#0a0f1a] border border-[rgba(74,144,217,0.2)] rounded-lg px-4 py-3 text-[#e8edf5] focus:border-[#4a90d9] focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Choose an EV...</option>
                  {brandGroups.map(([brand, models]) => (
                    <optgroup key={brand} label={brand}>
                      {models.map((m) => (
                        <option key={m.id} value={m.id}>
                          {m.label}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                  <option value="manual">Enter manually</option>
                </select>
              </div>

              {/* kWh/100mi */}
              <div>
                <label className="block text-sm text-[#6b7a94] mb-1.5">
                  Energy Use (kWh per 100 miles)
                  {selectedEVName && !manualMode && (
                    <span className="text-[#4a90d9] ml-2 text-xs">
                      Auto-filled for {selectedEVName}
                    </span>
                  )}
                </label>
                <input
                  type="number"
                  min={1}
                  step={1}
                  value={kwhPer100}
                  onChange={(e) => {
                    setKwhPer100(Number(e.target.value) || 1);
                    if (!manualMode) setManualMode(true);
                  }}
                  className="w-full bg-[#0a0f1a] border border-[rgba(74,144,217,0.2)] rounded-lg px-4 py-3 text-[#e8edf5] focus:border-[#4a90d9] focus:outline-none transition-colors"
                />
              </div>

              {/* Electricity Rate */}
              <div>
                <label className="block text-sm text-[#6b7a94] mb-1.5">
                  Electricity Rate ($/kWh)
                </label>
                <input
                  type="number"
                  min={0}
                  step={0.01}
                  value={electricityRate}
                  onChange={(e) =>
                    setElectricityRate(Number(e.target.value) || 0)
                  }
                  className="w-full bg-[#0a0f1a] border border-[rgba(74,144,217,0.2)] rounded-lg px-4 py-3 text-[#e8edf5] focus:border-[#4a90d9] focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Results */}
          <div className="flex-1 space-y-6">
            {/* Cost Comparison Bar Chart */}
            <div className="bg-[#0d1424] border border-[rgba(74,144,217,0.15)] rounded-2xl p-8">
              <h2 className="text-[10px] tracking-[0.2em] uppercase text-[#4a90d9] mb-6 font-medium">
                Annual Fuel Cost Comparison
              </h2>
              <div className="space-y-4">
                {/* Gas Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#6b7a94]">Gas Vehicle</span>
                    <span className="text-[#ef4444] font-medium">
                      {formatCurrency(animGasCost)}/yr
                    </span>
                  </div>
                  <div className="h-8 bg-[rgba(239,68,68,0.1)] rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-[#ef4444] rounded-lg transition-all duration-500 ease-out"
                      style={{ width: `${gasBarWidth}%` }}
                    />
                  </div>
                </div>
                {/* EV Bar */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-[#6b7a94]">
                      Electric Vehicle
                      {selectedEVName && !manualMode && (
                        <span className="text-[#4a90d9] ml-1.5 text-xs">
                          ({selectedEVName})
                        </span>
                      )}
                    </span>
                    <span className="text-[#34d399] font-medium">
                      {formatCurrency(animEVCost)}/yr
                    </span>
                  </div>
                  <div className="h-8 bg-[rgba(52,211,153,0.1)] rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-[#34d399] rounded-lg transition-all duration-500 ease-out"
                      style={{ width: `${evBarWidth}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Savings Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Annual Fuel Savings */}
              <div className="bg-[#0d1424] border border-[rgba(74,144,217,0.15)] rounded-2xl p-6">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#6b7a94] mb-2">
                  Annual Fuel Savings
                </div>
                <div
                  className={`text-2xl font-medium ${
                    annualFuelSavings >= 0 ? "text-[#34d399]" : "text-[#ef4444]"
                  }`}
                >
                  {formatCurrency(animFuelSavings)}
                </div>
              </div>

              {/* 5-Year Fuel Savings */}
              <div className="bg-[#0d1424] border border-[rgba(74,144,217,0.15)] rounded-2xl p-6">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#6b7a94] mb-2">
                  5-Year Fuel Savings
                </div>
                <div
                  className={`text-2xl font-medium ${
                    fiveYearFuelSavings >= 0
                      ? "text-[#34d399]"
                      : "text-[#ef4444]"
                  }`}
                >
                  {formatCurrency(animFiveYear)}
                </div>
              </div>

              {/* Maintenance Savings */}
              <div className="bg-[#0d1424] border border-[rgba(74,144,217,0.15)] rounded-2xl p-6">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#6b7a94] mb-2">
                  Maintenance Savings/yr
                </div>
                <div className="text-2xl font-medium text-[#34d399]">$700</div>
                <div className="text-xs text-[#3d4a61] mt-1">
                  Gas ~$1,200/yr vs EV ~$500/yr
                </div>
              </div>

              {/* CO2 Saved */}
              <div className="bg-[#0d1424] border border-[rgba(74,144,217,0.15)] rounded-2xl p-6">
                <div className="text-[10px] tracking-[0.2em] uppercase text-[#6b7a94] mb-2">
                  CO₂ Saved per Year
                </div>
                <div className="text-2xl font-medium text-[#34d399]">
                  {formatNumber(animCO2)} lbs
                </div>
                <div className="text-xs text-[#3d4a61] mt-1">
                  {formatNumber(co2Saved / 2205)} metric tons
                </div>
              </div>
            </div>

            {/* Total 5-Year Savings — Hero Number */}
            <div className="bg-gradient-to-br from-[rgba(52,211,153,0.08)] to-[rgba(74,144,217,0.08)] border border-[rgba(52,211,153,0.2)] rounded-2xl p-8 text-center">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#34d399] mb-3 font-medium">
                Estimated 5-Year Total Savings
              </div>
              <div
                className={`text-5xl md:text-6xl font-bold ${
                  totalFiveYear >= 0 ? "text-[#34d399]" : "text-[#ef4444]"
                }`}
              >
                {formatCurrency(animTotalFiveYear)}
              </div>
              <div className="text-sm text-[#6b7a94] mt-3">
                Including fuel &amp; maintenance savings
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Link
            href="/cars"
            className="group bg-[#0d1424] border border-[rgba(74,144,217,0.15)] rounded-2xl p-8 hover:border-[#4a90d9] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-[rgba(74,144,217,0.1)] flex items-center justify-center mb-4 group-hover:bg-[rgba(74,144,217,0.2)] transition-colors">
              <svg
                className="w-6 h-6 text-[#4a90d9]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors mb-2">
              Browse Electric Vehicles
            </h3>
            <p className="text-sm text-[#6b7a94]">
              Explore our complete database of EVs with specs, pricing, and
              range information.
            </p>
          </Link>

          <Link
            href="/charge"
            className="group bg-[#0d1424] border border-[rgba(74,144,217,0.15)] rounded-2xl p-8 hover:border-[#4a90d9] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-[rgba(74,144,217,0.1)] flex items-center justify-center mb-4 group-hover:bg-[rgba(74,144,217,0.2)] transition-colors">
              <svg
                className="w-6 h-6 text-[#4a90d9]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors mb-2">
              Find Charging Stations
            </h3>
            <p className="text-sm text-[#6b7a94]">
              Locate fast chargers and Level 2 stations near you with real-time
              availability.
            </p>
          </Link>

          <Link
            href="/care"
            className="group bg-[#0d1424] border border-[rgba(74,144,217,0.15)] rounded-2xl p-8 hover:border-[#4a90d9] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-[rgba(74,144,217,0.1)] flex items-center justify-center mb-4 group-hover:bg-[rgba(74,144,217,0.2)] transition-colors">
              <svg
                className="w-6 h-6 text-[#4a90d9]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-[#e8edf5] group-hover:text-[#4a90d9] transition-colors mb-2">
              EV Maintenance Guide
            </h3>
            <p className="text-sm text-[#6b7a94]">
              Learn about EV-specific maintenance needs and find certified
              service providers.
            </p>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

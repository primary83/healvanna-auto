"use client";
import { useState } from "react";
import Link from "next/link";

export default function SavingsCalculatorWidget() {
  const [miles, setMiles] = useState(12000);
  const [mpg, setMpg] = useState(28);
  const [gasPrice, setGasPrice] = useState("3.50");
  const [elecRate, setElecRate] = useState("0.13");
  const [calculated, setCalculated] = useState(false);

  const gas = parseFloat(gasPrice) || 3.5;
  const elec = parseFloat(elecRate) || 0.13;
  const annualGas = (miles / mpg) * gas;
  const annualElec = (miles / 3.5) * elec;
  const annualSavings = annualGas - annualElec;

  return (
    <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-2xl p-6 md:p-8">
      <div className="text-center mb-6">
        <div className="text-[10px] tracking-[0.3em] uppercase text-emerald-400 font-medium mb-2">
          Quick Calculator
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-1">How Much Will You Save Switching to an EV?</h3>
        <p className="text-[13px] text-[#6b7a94]">Enter your driving habits to see your savings</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="flex justify-between text-sm mb-1.5">
              <span>Miles / year</span>
              <span className="text-[#4a90d9] font-bold">{miles.toLocaleString()}</span>
            </label>
            <input
              type="range"
              min={5000}
              max={50000}
              step={1000}
              value={miles}
              onChange={(e) => { setMiles(Number(e.target.value)); setCalculated(true); }}
              className="w-full accent-[#4a90d9] h-2 bg-[rgba(74,144,217,0.15)] rounded-full appearance-none cursor-pointer"
            />
          </div>
          <div>
            <label className="flex justify-between text-sm mb-1.5">
              <span>Your car&apos;s MPG</span>
              <span className="text-[#4a90d9] font-bold">{mpg}</span>
            </label>
            <input
              type="range"
              min={10}
              max={60}
              step={1}
              value={mpg}
              onChange={(e) => { setMpg(Number(e.target.value)); setCalculated(true); }}
              className="w-full accent-[#4a90d9] h-2 bg-[rgba(74,144,217,0.15)] rounded-full appearance-none cursor-pointer"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm mb-1.5 block">Gas $/gal</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7a94] text-sm">$</span>
                <input
                  type="number"
                  step="0.01"
                  value={gasPrice}
                  onChange={(e) => { setGasPrice(e.target.value); setCalculated(true); }}
                  className="w-full bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg pl-7 pr-3 py-2.5 text-sm focus:outline-none focus:border-[#4a90d9]"
                />
              </div>
            </div>
            <div>
              <label className="text-sm mb-1.5 block">Electric $/kWh</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7a94] text-sm">$</span>
                <input
                  type="number"
                  step="0.01"
                  value={elecRate}
                  onChange={(e) => { setElecRate(e.target.value); setCalculated(true); }}
                  className="w-full bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg pl-7 pr-3 py-2.5 text-sm focus:outline-none focus:border-[#4a90d9]"
                />
              </div>
            </div>
          </div>
          {!calculated && (
            <button
              onClick={() => setCalculated(true)}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl text-sm transition-colors"
            >
              Calculate Savings
            </button>
          )}
        </div>

        {/* Results */}
        <div className={`flex flex-col justify-center transition-opacity duration-500 ${calculated ? "opacity-100" : "opacity-30"}`}>
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-5 text-center mb-3">
            <div className="text-[11px] text-emerald-400 uppercase tracking-wider font-medium mb-1">Annual Savings</div>
            <div className="text-3xl md:text-4xl font-bold text-emerald-400">
              ${Math.round(annualSavings).toLocaleString()}
            </div>
            <div className="text-[12px] text-[#6b7a94] mt-0.5">per year by switching to EV</div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center p-2.5 bg-[rgba(15,22,40,0.8)] rounded-lg">
              <div className="text-base font-bold text-emerald-400">${Math.round(annualSavings / 12).toLocaleString()}</div>
              <div className="text-[10px] text-[#6b7a94] uppercase">Monthly</div>
            </div>
            <div className="text-center p-2.5 bg-[rgba(15,22,40,0.8)] rounded-lg">
              <div className="text-base font-bold text-emerald-400">${Math.round(annualSavings * 5).toLocaleString()}</div>
              <div className="text-[10px] text-[#6b7a94] uppercase">5-Year</div>
            </div>
            <div className="text-center p-2.5 bg-[rgba(15,22,40,0.8)] rounded-lg">
              <div className="text-base font-bold text-emerald-400">4.6 tons</div>
              <div className="text-[10px] text-[#6b7a94] uppercase">CO2/yr</div>
            </div>
          </div>
          <Link
            href="/ev-tools"
            className="mt-3 text-center text-[13px] text-[#4a90d9] hover:text-[#6ba8eb] font-medium transition-colors"
          >
            Get your full EV match + readiness score &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

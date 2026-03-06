"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

/* ────────────────────────────────────────────
   EV DATABASE FOR MATCHING
   ──────────────────────────────────────────── */
interface EVModel {
  name: string;
  slug: string;
  price: string;
  priceNum: number;
  range: string;
  rangeNum: number;
  tags: string[];
}

const EV_DATABASE: EVModel[] = [
  { name: "Chevrolet Bolt EUV", slug: "chevrolet-bolt-euv", price: "$27,800", priceNum: 27800, range: "247 mi", rangeNum: 247, tags: ["budget", "compact", "range"] },
  { name: "Nissan Leaf", slug: "nissan-leaf", price: "$28,140", priceNum: 28140, range: "212 mi", rangeNum: 212, tags: ["budget", "compact", "city"] },
  { name: "Hyundai Ioniq 6", slug: "hyundai-ioniq-6", price: "$38,615", priceNum: 38615, range: "361 mi", rangeNum: 361, tags: ["mid", "sedan", "range", "performance"] },
  { name: "Hyundai Ioniq 5", slug: "hyundai-ioniq-5", price: "$41,800", priceNum: 41800, range: "303 mi", rangeNum: 303, tags: ["mid", "suv", "family", "range"] },
  { name: "Kia EV6", slug: "kia-ev6", price: "$42,600", priceNum: 42600, range: "310 mi", rangeNum: 310, tags: ["mid", "suv", "family", "performance"] },
  { name: "Ford Mustang Mach-E", slug: "ford-mustang-mach-e", price: "$42,995", priceNum: 42995, range: "312 mi", rangeNum: 312, tags: ["mid", "suv", "family", "performance"] },
  { name: "Tesla Model 3", slug: "tesla-model-3", price: "$38,990", priceNum: 38990, range: "363 mi", rangeNum: 363, tags: ["mid", "sedan", "range", "performance"] },
  { name: "Volkswagen ID.4", slug: "volkswagen-id4", price: "$39,735", priceNum: 39735, range: "275 mi", rangeNum: 275, tags: ["mid", "suv", "family"] },
  { name: "Tesla Model Y", slug: "tesla-model-y", price: "$44,990", priceNum: 44990, range: "310 mi", rangeNum: 310, tags: ["mid-high", "suv", "family", "range"] },
  { name: "BMW i4", slug: "bmw-i4", price: "$52,200", priceNum: 52200, range: "301 mi", rangeNum: 301, tags: ["luxury", "sedan", "performance"] },
  { name: "Genesis GV60", slug: "genesis-gv60", price: "$52,000", priceNum: 52000, range: "248 mi", rangeNum: 248, tags: ["luxury", "suv", "performance"] },
  { name: "Cadillac Lyriq", slug: "cadillac-lyriq", price: "$57,195", priceNum: 57195, range: "314 mi", rangeNum: 314, tags: ["luxury", "suv", "range"] },
  { name: "Porsche Taycan", slug: "porsche-taycan", price: "$92,250", priceNum: 92250, range: "246 mi", rangeNum: 246, tags: ["ultra-luxury", "sedan", "performance"] },
  { name: "BMW iX", slug: "bmw-ix", price: "$87,100", priceNum: 87100, range: "324 mi", rangeNum: 324, tags: ["ultra-luxury", "suv", "performance", "range"] },
  { name: "Mercedes EQS SUV", slug: "mercedes-eqs-suv", price: "$104,400", priceNum: 104400, range: "305 mi", rangeNum: 305, tags: ["ultra-luxury", "suv", "performance"] },
  { name: "Rivian R1T", slug: "rivian-r1t", price: "$69,900", priceNum: 69900, range: "328 mi", rangeNum: 328, tags: ["premium", "truck", "range"] },
  { name: "Ford F-150 Lightning", slug: "ford-f150-lightning", price: "$49,995", priceNum: 49995, range: "320 mi", rangeNum: 320, tags: ["mid-high", "truck", "family"] },
  { name: "GMC Sierra EV", slug: "gmc-sierra-ev", price: "$99,495", priceNum: 99495, range: "440 mi", rangeNum: 440, tags: ["ultra-luxury", "truck", "range"] },
  { name: "Rivian R1S", slug: "rivian-r1s", price: "$75,900", priceNum: 75900, range: "321 mi", rangeNum: 321, tags: ["premium", "suv", "family", "range"] },
  { name: "Hyundai Ioniq 9", slug: "hyundai-ioniq-9", price: "$55,175", priceNum: 55175, range: "356 mi", rangeNum: 356, tags: ["mid-high", "suv", "family", "range"] },
  { name: "Kia EV9", slug: "kia-ev9", price: "$54,900", priceNum: 54900, range: "304 mi", rangeNum: 304, tags: ["mid-high", "suv", "family"] },
];

/* ────────────────────────────────────────────
   MATCHING LOGIC
   ──────────────────────────────────────────── */
function getEVMatches(
  budget: number,
  dailyMiles: number,
  size: number,
  charging: number,
  priority: number,
): EVModel[] {
  const budgetRanges = [
    [0, 32000],
    [28000, 48000],
    [42000, 65000],
    [55000, 999999],
  ];
  const [minPrice, maxPrice] = budgetRanges[budget];

  const sizeMap = ["sedan", "suv", "truck", "sedan"]; // 0=compact/sedan, 1=suv, 2=truck, 3=luxury
  const targetSize = sizeMap[size];
  const isLuxury = size === 3;

  const minRange = dailyMiles === 0 ? 150 : dailyMiles === 1 ? 200 : dailyMiles === 2 ? 260 : 300;

  const scored = EV_DATABASE.map((ev) => {
    let score = 0;

    // Price fit
    if (ev.priceNum >= minPrice && ev.priceNum <= maxPrice) score += 30;
    else if (ev.priceNum < minPrice * 1.2 && ev.priceNum > maxPrice * 0.8) score += 10;

    // Size fit
    if (ev.tags.includes(targetSize)) score += 25;
    if (isLuxury && (ev.tags.includes("luxury") || ev.tags.includes("ultra-luxury"))) score += 20;

    // Range fit
    if (ev.rangeNum >= minRange) score += 15;
    if (ev.rangeNum >= minRange + 50) score += 5;

    // Priority bonus
    if (priority === 0 && ev.priceNum <= maxPrice * 0.85) score += 10; // lowest price
    if (priority === 1 && ev.rangeNum >= 300) score += 10; // best range
    if (priority === 2 && (ev.tags.includes("performance") || ev.tags.includes("luxury"))) score += 10;
    if (priority === 3 && ev.tags.includes("family")) score += 10; // family

    // No-home-charging penalty for short-range
    if (charging === 2 && ev.rangeNum < 250) score -= 10;

    return { ...ev, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 3);
}

/* ────────────────────────────────────────────
   STEP COMPONENTS
   ──────────────────────────────────────────── */

function ProgressBar({ step }: { step: number }) {
  const labels = ["EV Match", "Savings", "Readiness", "Results"];
  return (
    <div className="w-full max-w-2xl mx-auto mb-10">
      <div className="flex items-center justify-between mb-3">
        {labels.map((label, i) => (
          <div key={label} className="flex flex-col items-center flex-1">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                i < step
                  ? "bg-emerald-500 text-white"
                  : i === step
                  ? "bg-[#4a90d9] text-white ring-4 ring-[rgba(74,144,217,0.3)]"
                  : "bg-[rgba(74,144,217,0.1)] text-[#6b7a94]"
              }`}
            >
              {i < step ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <span className={`text-[11px] mt-1.5 font-medium ${i <= step ? "text-[#e8edf5]" : "text-[#6b7a94]"}`}>
              {label}
            </span>
          </div>
        ))}
      </div>
      <div className="h-1.5 bg-[rgba(74,144,217,0.1)] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#4a90d9] to-emerald-500 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${((step) / 3) * 100}%` }}
        />
      </div>
    </div>
  );
}

/* ─── STEP 1: EV MATCH ─── */
interface Step1Props {
  onComplete: (answers: number[]) => void;
}

const quizQuestions = [
  {
    question: "What\u2019s your budget?",
    options: ["Under $30,000", "$30,000 \u2013 $45,000", "$45,000 \u2013 $60,000", "$60,000+"],
  },
  {
    question: "How many miles do you drive daily?",
    options: ["Under 30 miles", "30\u201360 miles", "60\u2013100 miles", "100+ miles"],
  },
  {
    question: "What size vehicle do you need?",
    options: ["Compact / Sedan", "SUV / Crossover", "Truck", "Luxury"],
  },
  {
    question: "Do you have home charging available?",
    options: ["Yes, I have a garage", "I can install a charger", "No, I rely on public charging"],
  },
  {
    question: "What matters most to you?",
    options: ["Lowest price", "Best range", "Performance & luxury", "Family space & cargo"],
  },
];

function Step1Quiz({ onComplete }: Step1Props) {
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (optionIdx: number) => {
    const next = [...answers, optionIdx];
    if (qIndex < quizQuestions.length - 1) {
      setAnswers(next);
      setQIndex(qIndex + 1);
    } else {
      onComplete(next);
    }
  };

  const handleBack = () => {
    if (qIndex > 0) {
      setAnswers(answers.slice(0, -1));
      setQIndex(qIndex - 1);
    }
  };

  const q = quizQuestions[qIndex];

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Let&apos;s Find Your Perfect EV</h2>
        <p className="text-[#6b7a94] text-base">
          Answer 5 quick questions and we&apos;ll match you with your top 3 electric cars
        </p>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <span className="text-[12px] text-[#6b7a94] uppercase tracking-wider">
          Question {qIndex + 1} of {quizQuestions.length}
        </span>
        {qIndex > 0 && (
          <button onClick={handleBack} className="text-[13px] text-[#4a90d9] hover:text-[#6ba8eb] flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        )}
      </div>

      <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-2xl p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-6">{q.question}</h3>
        <div className="grid gap-3">
          {q.options.map((opt, i) => (
            <button
              key={opt}
              onClick={() => handleAnswer(i)}
              className="w-full text-left px-5 py-4 rounded-xl border border-[rgba(74,144,217,0.15)] bg-[rgba(74,144,217,0.05)] hover:bg-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] transition-all duration-200 text-[15px] font-medium"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Mini progress dots */}
      <div className="flex justify-center gap-2 mt-6">
        {quizQuestions.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i < qIndex ? "bg-emerald-500" : i === qIndex ? "bg-[#4a90d9] scale-125" : "bg-[rgba(74,144,217,0.2)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── STEP 1 RESULTS ─── */
function Step1Results({
  matches,
  onContinue,
}: {
  matches: EVModel[];
  onContinue: () => void;
}) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Your Top 3 EV Matches</h2>
        <p className="text-[#6b7a94]">Based on your answers, these are the best electric vehicles for you</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-8">
        {matches.map((ev, i) => (
          <div
            key={ev.slug}
            className={`bg-[rgba(15,22,40,0.6)] border rounded-2xl p-5 text-center relative ${
              i === 0 ? "border-emerald-500/40 ring-1 ring-emerald-500/20" : "border-[rgba(74,144,217,0.12)]"
            }`}
          >
            {i === 0 && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-emerald-500 text-white text-[10px] font-bold uppercase rounded-full tracking-wider">
                Best Match
              </div>
            )}
            <div className="text-[40px] mb-2">{i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}</div>
            <h3 className="text-lg font-bold mb-1">{ev.name}</h3>
            <div className="text-emerald-400 font-bold text-xl mb-1">From {ev.price}</div>
            <div className="text-[#6b7a94] text-sm mb-4">{ev.range} range</div>
            <Link
              href={`/ev-deals/${ev.slug}`}
              className="inline-block w-full px-4 py-2.5 bg-[#4a90d9] hover:bg-[#5a9ee5] text-white text-sm font-semibold rounded-xl transition-colors"
            >
              View Deals &rarr;
            </Link>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={onContinue}
          className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl text-base transition-colors"
        >
          Next: See Your Savings &rarr;
        </button>
      </div>
    </div>
  );
}

/* ─── STEP 2: SAVINGS CALCULATOR ─── */
function Step2Savings({
  topMatch,
  onComplete,
  onBack,
}: {
  topMatch: EVModel;
  onComplete: (data: SavingsData) => void;
  onBack: () => void;
}) {
  const [miles, setMiles] = useState(12000);
  const [mpg, setMpg] = useState(28);
  const [gasPrice, setGasPrice] = useState("3.50");
  const [elecRate, setElecRate] = useState("0.13");
  const [showResults, setShowResults] = useState(false);

  const gas = parseFloat(gasPrice) || 3.5;
  const elec = parseFloat(elecRate) || 0.13;
  const annualGas = (miles / mpg) * gas;
  const annualElec = (miles / 3.5) * elec;
  const annualSavings = annualGas - annualElec;
  const monthlySavings = annualSavings / 12;
  const fiveYearSavings = annualSavings * 5;
  const co2Reduced = 4.6; // tons per year average

  const handleCalculate = () => setShowResults(true);

  const handleContinue = () => {
    onComplete({
      annualSavings,
      monthlySavings,
      fiveYearSavings,
      lifetimeSavings: annualSavings * 10,
      co2Reduced,
      miles,
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-[13px] text-[#4a90d9] hover:text-[#6ba8eb] flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <span className="text-[12px] text-[#6b7a94] uppercase tracking-wider">Step 2 of 4</span>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">See Your Exact Savings vs Gas</h2>
        <p className="text-[#6b7a94]">Based on your driving habits &mdash; real numbers, not estimates</p>
      </div>

      <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-2xl p-6 md:p-8 space-y-6">
        {/* Miles slider */}
        <div>
          <label className="flex justify-between text-sm mb-2">
            <span>Miles driven per year</span>
            <span className="text-[#4a90d9] font-bold">{miles.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min={5000}
            max={50000}
            step={1000}
            value={miles}
            onChange={(e) => setMiles(Number(e.target.value))}
            className="w-full accent-[#4a90d9] h-2 bg-[rgba(74,144,217,0.15)] rounded-full appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-[#6b7a94] mt-1">
            <span>5,000</span>
            <span>50,000</span>
          </div>
        </div>

        {/* MPG slider */}
        <div>
          <label className="flex justify-between text-sm mb-2">
            <span>Current car&apos;s MPG</span>
            <span className="text-[#4a90d9] font-bold">{mpg} MPG</span>
          </label>
          <input
            type="range"
            min={10}
            max={60}
            step={1}
            value={mpg}
            onChange={(e) => setMpg(Number(e.target.value))}
            className="w-full accent-[#4a90d9] h-2 bg-[rgba(74,144,217,0.15)] rounded-full appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-[11px] text-[#6b7a94] mt-1">
            <span>10 MPG</span>
            <span>60 MPG</span>
          </div>
        </div>

        {/* Gas + Electric fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm mb-2 block">Gas price / gallon</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7a94]">$</span>
              <input
                type="number"
                step="0.01"
                value={gasPrice}
                onChange={(e) => setGasPrice(e.target.value)}
                className="w-full bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-xl pl-7 pr-4 py-3 text-sm focus:outline-none focus:border-[#4a90d9]"
              />
            </div>
          </div>
          <div>
            <label className="text-sm mb-2 block">
              Electric rate / kWh
              <span className="ml-1 text-[#6b7a94] text-[11px]" title="Average US rate is $0.13/kWh">(avg $0.13)</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7a94]">$</span>
              <input
                type="number"
                step="0.01"
                value={elecRate}
                onChange={(e) => setElecRate(e.target.value)}
                className="w-full bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-xl pl-7 pr-4 py-3 text-sm focus:outline-none focus:border-[#4a90d9]"
              />
            </div>
          </div>
        </div>

        {!showResults && (
          <button
            onClick={handleCalculate}
            className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl text-base transition-colors"
          >
            Calculate My Savings
          </button>
        )}
      </div>

      {/* Results */}
      {showResults && (
        <div className="mt-6 space-y-4 animate-fade-in">
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 text-center">
            <div className="text-[11px] text-emerald-400 uppercase tracking-wider font-medium mb-1">Monthly Savings</div>
            <div className="text-4xl md:text-5xl font-bold text-emerald-400">
              ${Math.round(monthlySavings).toLocaleString()}
            </div>
            <div className="text-[13px] text-[#6b7a94] mt-1">per month vs gas</div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-emerald-400">${Math.round(annualSavings).toLocaleString()}</div>
              <div className="text-[11px] text-[#6b7a94] uppercase mt-1">Annual</div>
            </div>
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-emerald-400">${Math.round(fiveYearSavings).toLocaleString()}</div>
              <div className="text-[11px] text-[#6b7a94] uppercase mt-1">5-Year</div>
            </div>
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-emerald-400">{co2Reduced} tons</div>
              <div className="text-[11px] text-[#6b7a94] uppercase mt-1">CO2/year</div>
            </div>
          </div>

          <div className="bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.15)] rounded-xl p-4 text-center text-sm text-[#6b7a94]">
            Your top match, the <span className="text-[#e8edf5] font-semibold">{topMatch.name}</span>, would save you{" "}
            <span className="text-emerald-400 font-bold">${Math.round(annualSavings).toLocaleString()}</span> per year in fuel costs alone.
          </div>

          <div className="text-center pt-2">
            <button
              onClick={handleContinue}
              className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl text-base transition-colors"
            >
              Next: EV Readiness Score &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── STEP 3: READINESS SCORE ─── */
const readinessQuestions = [
  {
    question: "Do you have a place to charge at home?",
    options: [
      { label: "Yes, garage with outlet", points: 25 },
      { label: "Yes but need electrician", points: 20 },
      { label: "Apartment/condo \u2014 HOA permitting", points: 10 },
      { label: "No home charging option", points: 5 },
    ],
  },
  {
    question: "How far is your nearest public fast charger?",
    options: [
      { label: "Under 2 miles", points: 25 },
      { label: "2\u201310 miles", points: 20 },
      { label: "10\u201325 miles", points: 12 },
      { label: "Over 25 miles", points: 5 },
    ],
  },
  {
    question: "How predictable is your daily driving?",
    options: [
      { label: "Very predictable \u2014 same route daily", points: 25 },
      { label: "Mostly predictable", points: 20 },
      { label: "Varies a lot", points: 12 },
      { label: "Frequent long unpredictable trips", points: 5 },
    ],
  },
  {
    question: "What is your budget flexibility?",
    options: [
      { label: "Ready to buy now", points: 25 },
      { label: "Saving up \u2014 6 to 12 months", points: 18 },
      { label: "Just researching for now", points: 10 },
      { label: "Not sure yet", points: 5 },
    ],
  },
];

function ScoreMeter({ score, color }: { score: number; color: string }) {
  const [animatedScore, setAnimatedScore] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedScore(score), 200);
    return () => clearTimeout(timer);
  }, [score]);

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedScore / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg width="180" height="180" viewBox="0 0 180 180">
        <circle cx="90" cy="90" r={radius} fill="none" stroke="rgba(74,144,217,0.1)" strokeWidth="12" />
        <circle
          cx="90"
          cy="90"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 90 90)"
          style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
        />
        <text x="90" y="85" textAnchor="middle" className="fill-white text-4xl font-bold" style={{ fontSize: "36px" }}>
          {animatedScore}
        </text>
        <text x="90" y="108" textAnchor="middle" className="fill-[#6b7a94]" style={{ fontSize: "13px" }}>
          out of 100
        </text>
      </svg>
    </div>
  );
}

function Step3Readiness({
  onComplete,
  onBack,
}: {
  onComplete: (data: ReadinessData) => void;
  onBack: () => void;
}) {
  const [qIndex, setQIndex] = useState(0);
  const [points, setPoints] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const handleAnswer = (pts: number) => {
    const next = [...points, pts];
    if (qIndex < readinessQuestions.length - 1) {
      setPoints(next);
      setQIndex(qIndex + 1);
    } else {
      setPoints(next);
      setDone(true);
    }
  };

  const handleBack = () => {
    if (qIndex > 0) {
      setPoints(points.slice(0, -1));
      setQIndex(qIndex - 1);
    }
  };

  const totalScore = points.reduce((a, b) => a + b, 0);

  const getResult = (s: number) => {
    if (s >= 80) return { badge: "EV Ready!", emoji: "\u26A1", color: "#10b981", message: "You\u2019re an ideal EV candidate. Your lifestyle, charging situation, and budget align perfectly. Time to make the switch!" };
    if (s >= 60) return { badge: "Almost There", emoji: "\uD83D\uDD0B", color: "#4a90d9", message: "You\u2019re very close to EV-ready. A few small steps \u2014 like setting up home charging \u2014 and you\u2019ll be perfectly set up." };
    if (s >= 40) return { badge: "Getting There", emoji: "\uD83D\uDD0C", color: "#f59e0b", message: "EVs could work well for you with some planning. Check out our guides on home charging and range planning." };
    return { badge: "Keep Researching", emoji: "\uD83D\uDCCB", color: "#6b7a94", message: "You might not be quite ready yet, but that\u2019s okay. Explore our EV vs Hybrid guide to find your best path forward." };
  };

  if (done) {
    const result = getResult(totalScore);
    return (
      <div className="max-w-xl mx-auto text-center">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="text-[13px] text-[#4a90d9] hover:text-[#6ba8eb] flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          <span className="text-[12px] text-[#6b7a94] uppercase tracking-wider">Step 3 of 4</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">Your EV Readiness Score</h2>

        <ScoreMeter score={totalScore} color={result.color} />

        <div className="mt-4 mb-3">
          <span className="text-3xl mr-2">{result.emoji}</span>
          <span className="text-2xl font-bold" style={{ color: result.color }}>
            {result.badge}
          </span>
        </div>
        <p className="text-[#6b7a94] text-base max-w-md mx-auto mb-8">{result.message}</p>

        <button
          onClick={() => onComplete({ score: totalScore, badge: result.badge, color: result.color, emoji: result.emoji, message: result.message })}
          className="px-8 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl text-base transition-colors"
        >
          See Full Results &rarr;
        </button>
      </div>
    );
  }

  const q = readinessQuestions[qIndex];

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button onClick={qIndex > 0 ? handleBack : onBack} className="text-[13px] text-[#4a90d9] hover:text-[#6ba8eb] flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <span className="text-[12px] text-[#6b7a94] uppercase tracking-wider">Step 3 of 4</span>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">What&apos;s Your EV Readiness Score?</h2>
        <p className="text-[#6b7a94]">Get a personalized assessment of how ready you are to make the switch</p>
      </div>

      <div className="mb-4">
        <span className="text-[12px] text-[#6b7a94] uppercase tracking-wider">
          Question {qIndex + 1} of {readinessQuestions.length}
        </span>
      </div>

      <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-2xl p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-6">{q.question}</h3>
        <div className="grid gap-3">
          {q.options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => handleAnswer(opt.points)}
              className="w-full text-left px-5 py-4 rounded-xl border border-[rgba(74,144,217,0.15)] bg-[rgba(74,144,217,0.05)] hover:bg-[rgba(74,144,217,0.15)] hover:border-[#4a90d9] transition-all duration-200 text-[15px] font-medium"
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {readinessQuestions.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i < qIndex ? "bg-emerald-500" : i === qIndex ? "bg-[#4a90d9] scale-125" : "bg-[rgba(74,144,217,0.2)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── STEP 4: RESULTS + EMAIL CAPTURE ─── */
function Step4Results({
  matches,
  savings,
  readiness,
  onBack,
}: {
  matches: EVModel[];
  savings: SavingsData;
  readiness: ReadinessData;
  onBack: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xzdjbbzl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "EV Tools — Price Drop Alert Signup",
          name,
          email,
          topMatch: matches[0]?.name,
          match2: matches[1]?.name,
          match3: matches[2]?.name,
          annualSavings: Math.round(savings.annualSavings),
          readinessScore: readiness.score,
          readinessBadge: readiness.badge,
        }),
      });
      setSubmitStatus(res.ok ? "success" : "error");
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-[13px] text-[#4a90d9] hover:text-[#6ba8eb] flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <span className="text-[12px] text-[#6b7a94] uppercase tracking-wider">Your Results</span>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Your Personalized EV Report</h2>
        <p className="text-[#6b7a94]">Here&apos;s everything we found for you</p>
      </div>

      {/* Section 1: Top Matches */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="w-7 h-7 bg-[#4a90d9] rounded-full flex items-center justify-center text-xs font-bold">1</span>
          Your Top EV Matches
        </h3>
        <div className="grid gap-3 md:grid-cols-3">
          {matches.map((ev, i) => (
            <div
              key={ev.slug}
              className={`bg-[rgba(15,22,40,0.6)] border rounded-xl p-4 text-center ${
                i === 0 ? "border-emerald-500/40" : "border-[rgba(74,144,217,0.12)]"
              }`}
            >
              <div className="text-2xl mb-1">{i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}</div>
              <h4 className="font-bold mb-0.5">{ev.name}</h4>
              <div className="text-emerald-400 font-bold">{ev.price}</div>
              <div className="text-[#6b7a94] text-sm mb-3">{ev.range}</div>
              <Link
                href={`/ev-deals/${ev.slug}`}
                className="inline-block w-full px-3 py-2 bg-[#4a90d9] hover:bg-[#5a9ee5] text-white text-sm font-semibold rounded-lg transition-colors"
              >
                View Deals &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Savings Summary */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center text-xs font-bold">2</span>
          Your Savings Summary
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Monthly", value: `$${Math.round(savings.monthlySavings).toLocaleString()}` },
            { label: "Annual", value: `$${Math.round(savings.annualSavings).toLocaleString()}` },
            { label: "5-Year", value: `$${Math.round(savings.fiveYearSavings).toLocaleString()}` },
            { label: "CO2 Saved", value: `${savings.co2Reduced} tons/yr` },
          ].map((item) => (
            <div key={item.label} className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
              <div className="text-xl md:text-2xl font-bold text-emerald-400">{item.value}</div>
              <div className="text-[11px] text-[#6b7a94] uppercase mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Readiness Score */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: readiness.color }}>3</span>
          Your Readiness Score
        </h3>
        <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-xl p-6 flex flex-col md:flex-row items-center gap-6">
          <ScoreMeter score={readiness.score} color={readiness.color} />
          <div className="text-center md:text-left">
            <div className="text-2xl mb-1">
              <span className="mr-2">{readiness.emoji}</span>
              <span className="font-bold" style={{ color: readiness.color }}>{readiness.badge}</span>
            </div>
            <p className="text-[#6b7a94] text-sm">{readiness.message}</p>
          </div>
        </div>
      </div>

      {/* Email Capture */}
      <div className="bg-gradient-to-br from-[rgba(74,144,217,0.12)] to-[rgba(16,185,129,0.08)] border border-[rgba(74,144,217,0.2)] rounded-2xl p-6 md:p-8 text-center">
        {submitStatus === "success" ? (
          <div>
            <div className="text-4xl mb-3">✅</div>
            <h3 className="text-xl font-bold mb-2">You&apos;re on the list!</h3>
            <p className="text-[#6b7a94] text-sm">
              We&apos;ll alert you when prices drop on your matches. Check your inbox for your full EV report.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Want Us to Alert You When Prices Drop on Your Top EV Matches?
            </h3>
            <p className="text-[#6b7a94] text-sm mb-6 max-w-lg mx-auto">
              Enter your email and we&apos;ll notify you when deals improve on the{" "}
              <span className="text-[#e8edf5] font-semibold">{matches[0]?.name}</span> and your other top picks &mdash;
              plus send your full personalized EV report.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
              <input
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4a90d9]"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#4a90d9]"
              />
              <button
                type="submit"
                disabled={submitStatus === "sending"}
                className="w-full py-3.5 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl text-base transition-colors disabled:opacity-60"
              >
                {submitStatus === "sending" ? "Submitting..." : "Yes, Alert Me to Price Drops! 🔔"}
              </button>
            </form>
            <p className="text-[11px] text-[#6b7a94] mt-3">
              No spam ever. Unsubscribe anytime. We only send EV deal alerts and your personal report.
            </p>
            {submitStatus === "error" && (
              <p className="text-red-400 text-[12px] mt-2">Something went wrong. Please try again.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────
   TYPES
   ──────────────────────────────────────────── */
interface SavingsData {
  annualSavings: number;
  monthlySavings: number;
  fiveYearSavings: number;
  lifetimeSavings: number;
  co2Reduced: number;
  miles: number;
}

interface ReadinessData {
  score: number;
  badge: string;
  color: string;
  emoji: string;
  message: string;
}

/* ────────────────────────────────────────────
   MAIN PAGE
   ──────────────────────────────────────────── */
export default function EVToolsPage() {
  const [step, setStep] = useState(0);
  const [matches, setMatches] = useState<EVModel[]>([]);
  const [showMatchResults, setShowMatchResults] = useState(false);
  const [savings, setSavings] = useState<SavingsData | null>(null);
  const [readiness, setReadiness] = useState<ReadinessData | null>(null);

  const handleStep1Complete = (answers: number[]) => {
    const results = getEVMatches(answers[0], answers[1], answers[2], answers[3], answers[4]);
    setMatches(results);
    setShowMatchResults(true);
  };

  const handleStep1Continue = () => {
    setStep(1);
    setShowMatchResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStep2Complete = (data: SavingsData) => {
    setSavings(data);
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStep3Complete = (data: ReadinessData) => {
    setReadiness(data);
    setStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "EV Match & Savings Hub",
    description:
      "Find your perfect electric car, calculate your exact savings vs gas, and get your personal EV Readiness Score.",
    url: "https://healvanna.com/ev-tools",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "Healvanna Auto",
      url: "https://healvanna.com",
    },
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation activeItem="CARS" />

      {/* Hero */}
      <section className="pt-28 pb-6 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-[10px] tracking-[0.35em] uppercase text-[#4a90d9] mb-3 font-medium">Free Interactive Tool</div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            EV Match & Savings Hub
            <span className="block text-lg md:text-xl font-normal text-[#6b7a94] mt-3">
              Find Your Perfect Electric Car & See How Much You&apos;ll Save
            </span>
          </h1>
        </div>
      </section>

      {/* Progress + Content */}
      <section className="px-6 pb-20">
        <ProgressBar step={step} />

        <div className="max-w-4xl mx-auto">
          {step === 0 && !showMatchResults && <Step1Quiz onComplete={handleStep1Complete} />}
          {step === 0 && showMatchResults && (
            <Step1Results matches={matches} onContinue={handleStep1Continue} />
          )}
          {step === 1 && matches.length > 0 && (
            <Step2Savings
              topMatch={matches[0]}
              onComplete={handleStep2Complete}
              onBack={() => { setStep(0); setShowMatchResults(true); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            />
          )}
          {step === 2 && (
            <Step3Readiness
              onComplete={handleStep3Complete}
              onBack={() => { setStep(1); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            />
          )}
          {step === 3 && savings && readiness && (
            <Step4Results
              matches={matches}
              savings={savings}
              readiness={readiness}
              onBack={() => { setStep(2); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            />
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

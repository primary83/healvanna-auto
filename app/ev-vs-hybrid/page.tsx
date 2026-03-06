"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SavingsCalculatorWidget from "../components/SavingsCalculatorWidget";

const questions = [
  {
    question: "Do you have access to home charging (garage, driveway, or dedicated parking spot)?",
    answers: [
      { text: "Yes, I can install a charger", ev: 2, hybrid: 0 },
      { text: "No, I rely on street parking or shared garage", ev: 0, hybrid: 2 },
    ],
  },
  {
    question: "What\u2019s your typical daily driving distance?",
    answers: [
      { text: "Under 50 miles", ev: 2, hybrid: 0 },
      { text: "50\u2013150 miles", ev: 1, hybrid: 0 },
      { text: "Over 150 miles", ev: 0, hybrid: 2 },
    ],
  },
  {
    question: "How often do you take road trips over 300 miles?",
    answers: [
      { text: "Rarely (a few times a year)", ev: 1, hybrid: 0 },
      { text: "Monthly or more", ev: 0, hybrid: 2 },
    ],
  },
  {
    question: "What\u2019s your budget for a new car?",
    answers: [
      { text: "Under $35,000", ev: 1, hybrid: 1 },
      { text: "$35,000\u2013$50,000", ev: 1, hybrid: 0 },
      { text: "Over $50,000", ev: 1, hybrid: 0 },
    ],
  },
  {
    question: "What matters more to you?",
    answers: [
      { text: "Lowest running costs and zero emissions", ev: 2, hybrid: 0 },
      { text: "Simplicity and no lifestyle changes", ev: 0, hybrid: 2 },
    ],
  },
];

const evRecommendations = [
  { name: "Chevy Equinox EV", price: "$29,200", range: "319 mi", slug: "chevrolet-equinox-ev" },
  { name: "Hyundai Ioniq 5", price: "$35,200", range: "303 mi", slug: "hyundai-ioniq-5" },
  { name: "Honda Prologue", price: "$39,500", range: "296 mi", slug: "honda-prologue" },
  { name: "Tesla Model Y", price: "$42,000", range: "310 mi", slug: "tesla-model-y" },
  { name: "Kia Niro EV", price: "$35,000", range: "253 mi", slug: "kia-niro-ev" },
];

const hybridRecommendations = [
  { name: "Toyota RAV4 Hybrid", price: "$32,000", mpg: "39 mpg", desc: "Best-selling hybrid" },
  { name: "Honda CR-V Hybrid", price: "$35,000", mpg: "40 mpg", desc: "Most refined" },
  { name: "Toyota RAV4 Prime", price: "$43,000", mpg: "42 mi electric + gas", desc: "Best PHEV" },
  { name: "Hyundai Tucson PHEV", price: "$38,000", mpg: "33 mi electric + gas", desc: "Great value PHEV" },
  { name: "Toyota Prius Prime", price: "$33,000", mpg: "44 mi electric + gas", desc: "Legendary efficiency" },
];

const comparisonData = [
  { label: "Average Purchase Price", ev: "$35,000\u2013$55,000", hybrid: "$28,000\u2013$45,000" },
  { label: "Fuel/Energy Cost per Year", ev: "$500\u2013$800", hybrid: "$1,200\u2013$1,800" },
  { label: "Annual Maintenance", ev: "$300\u2013$600", hybrid: "$600\u2013$1,000" },
  { label: "5-Year Depreciation", ev: "~40\u201350%", hybrid: "~35\u201345%" },
  { label: "Range Anxiety", ev: "Moderate (improving fast)", hybrid: "None" },
  { label: "Road Trip Ease", ev: "Good (with planning)", hybrid: "Excellent" },
  { label: "Environmental Impact", ev: "Zero tailpipe emissions", hybrid: "Low emissions" },
  { label: "Charging/Fueling Time", ev: "20\u201360 min (DC fast)", hybrid: "5 min (gas station)" },
  { label: "Best For", ev: "Daily commuters, eco-conscious drivers", hybrid: "Road trippers, no-hassle drivers" },
];

const faqs = [
  {
    question: "Is an EV really cheaper to own than a hybrid?",
    answer:
      "Yes, typically $1,500\u2013$2,500 per year cheaper when you factor in fuel and maintenance savings. EVs have fewer moving parts, no oil changes, and electricity is cheaper than gasoline. Over a 5-year ownership period, an EV can save you $7,500\u2013$12,500 compared to a hybrid.",
  },
  {
    question: "What if I can\u2019t charge at home?",
    answer:
      "If you don\u2019t have access to home charging, a hybrid is generally the better choice. However, if your workplace offers charging, a plug-in hybrid (PHEV) can work well too. Public DC fast charging networks are expanding rapidly, but relying solely on them adds cost and inconvenience compared to home charging.",
  },
  {
    question: "Do EVs work in cold weather?",
    answer:
      "Yes, EVs work in cold weather, but you\u2019ll see a 20\u201330% range reduction in extreme cold due to battery chemistry and cabin heating. Modern EVs include battery preconditioning and heat pumps to minimize this. Hybrids handle cold weather slightly better since the gas engine provides cabin heat without range penalty.",
  },
  {
    question: "How long do EV batteries last?",
    answer:
      "Most EV batteries last 8\u201310+ years and are warrantied for 8 years or 100,000 miles (whichever comes first). Many EVs retain 80\u201390% of their original battery capacity after 200,000 miles. Battery degradation has improved dramatically with newer chemistry and thermal management systems.",
  },
  {
    question: "Are hybrid cars going away?",
    answer:
      "Not anytime soon. Hybrids will coexist with EVs through the 2030s and beyond. Many automakers are investing in both technologies. Hybrids serve as an important bridge for drivers who aren\u2019t ready for full electric, and plug-in hybrids offer the best of both worlds for many use cases.",
  },
  {
    question: "Should I wait for better EVs?",
    answer:
      "No. Current EVs are excellent, with ranges exceeding 300 miles, fast charging capability, and prices dropping steadily. Waiting means missing out on current federal tax credits (up to $7,500) and years of fuel savings. There will always be a better model around the corner, but today\u2019s EVs are more than ready for mainstream adoption.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function EvVsHybridPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [evScore, setEvScore] = useState(0);
  const [hybridScore, setHybridScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleAnswer = (ev: number, hybrid: number) => {
    const newEvScore = evScore + ev;
    const newHybridScore = hybridScore + hybrid;
    setEvScore(newEvScore);
    setHybridScore(newHybridScore);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setEvScore(0);
    setHybridScore(0);
    setShowResults(false);
    setQuizStarted(false);
  };

  const getResultMessage = () => {
    if (evScore > hybridScore) {
      return {
        title: "You\u2019re Ready for an EV!",
        description:
          "Based on your answers, a fully electric vehicle is the perfect fit for your lifestyle. You\u2019ll save money on fuel and maintenance while enjoying the latest technology.",
        type: "ev" as const,
      };
    } else if (hybridScore > evScore) {
      return {
        title: "A Hybrid Is Your Best Match",
        description:
          "Based on your answers, a hybrid or plug-in hybrid gives you the flexibility you need. You\u2019ll still save on fuel while keeping the convenience of a gas engine for longer trips.",
        type: "hybrid" as const,
      };
    } else {
      return {
        title: "You Could Go Either Way!",
        description:
          "Your lifestyle works with both EVs and hybrids. Consider test-driving one of each to see which driving experience you prefer.",
        type: "both" as const,
      };
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navigation />
      <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#0d1425] via-[#0a0f1a] to-[#0a0f1a]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              EV or Hybrid? Find Your Perfect Match
            </h1>
            <p className="text-xl md:text-2xl text-[#6b7a94] mb-10">
              Answer 5 quick questions and we&apos;ll help you decide
            </p>
            <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-[rgba(74,144,217,0.12)]">
              <Image
                src="/blog/ev-vs-hybrid-guide.png"
                alt="Electric vehicle vs hybrid comparison guide"
                width={1200}
                height={630}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Interactive Quiz Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
              Take the Quiz
            </h2>

            {!quizStarted && !showResults && (
              <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-2xl p-8 text-center">
                <p className="text-lg text-[#6b7a94] mb-6">
                  Five quick questions to find your ideal vehicle type. Ready?
                </p>
                <button
                  onClick={() => setQuizStarted(true)}
                  className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0a0f1a] font-bold rounded-xl transition-all duration-200 text-lg"
                >
                  Start the Quiz
                </button>
              </div>
            )}

            {quizStarted && !showResults && (
              <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-2xl p-8">
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-[#6b7a94] mb-2">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(((currentQuestion) / questions.length) * 100)}% complete</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(currentQuestion / questions.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-xl md:text-2xl font-semibold mb-8">
                  {questions[currentQuestion].question}
                </h3>

                {/* Answer Buttons */}
                <div className="space-y-4">
                  {questions[currentQuestion].answers.map((answer, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(answer.ev, answer.hybrid)}
                      className="w-full text-left bg-slate-800/60 hover:bg-emerald-500/20 border border-slate-700/50 hover:border-emerald-500/30 rounded-xl p-4 transition-all duration-200 text-[#e8edf5]"
                    >
                      {answer.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {showResults && (
              <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-2xl p-8 text-center">
                {/* Progress Bar - Complete */}
                <div className="mb-8">
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-2 rounded-full w-full" />
                  </div>
                </div>

                {/* Result */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/20 mb-6">
                    <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-emerald-400">
                    {getResultMessage().title}
                  </h3>
                  <p className="text-lg text-[#6b7a94] mb-4">
                    {getResultMessage().description}
                  </p>
                  <div className="flex justify-center gap-6 text-sm text-[#6b7a94]">
                    <span>EV Score: <strong className="text-emerald-400">{evScore}</strong></span>
                    <span>Hybrid Score: <strong className="text-cyan-400">{hybridScore}</strong></span>
                  </div>
                </div>

                {/* Recommended EVs in Results */}
                {(getResultMessage().type === "ev" || getResultMessage().type === "both") && (
                  <div className="mt-8 text-left">
                    <h4 className="text-lg font-semibold mb-4 text-emerald-400">Top EV Picks for You</h4>
                    <div className="grid gap-3">
                      {evRecommendations.map((car) => (
                        <Link
                          key={car.slug}
                          href={`/ev-deals/${car.slug}`}
                          className="flex items-center justify-between bg-slate-800/60 hover:bg-emerald-500/10 border border-slate-700/50 hover:border-emerald-500/30 rounded-xl p-4 transition-all duration-200"
                        >
                          <div>
                            <span className="font-semibold">{car.name}</span>
                            <span className="text-[#6b7a94] ml-2">{car.price} | {car.range}</span>
                          </div>
                          <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Recommended Hybrids in Results */}
                {(getResultMessage().type === "hybrid" || getResultMessage().type === "both") && (
                  <div className="mt-8 text-left">
                    <h4 className="text-lg font-semibold mb-4 text-cyan-400">Top Hybrid Picks for You</h4>
                    <div className="grid gap-3">
                      {hybridRecommendations.map((car, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between bg-slate-800/60 border border-slate-700/50 rounded-xl p-4"
                        >
                          <div>
                            <span className="font-semibold">{car.name}</span>
                            <span className="text-[#6b7a94] ml-2">{car.price} | {car.mpg}</span>
                          </div>
                          <span className="text-xs text-[#6b7a94]">{car.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  onClick={resetQuiz}
                  className="mt-8 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700/50 rounded-xl transition-all duration-200 text-[#6b7a94] hover:text-[#e8edf5]"
                >
                  Retake Quiz
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Side-by-Side Comparison Table */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              EV vs. Hybrid: Side-by-Side
            </h2>
            <p className="text-center text-[#6b7a94] mb-10 max-w-2xl mx-auto">
              A comprehensive look at how electric vehicles and hybrids compare across the categories that matter most.
            </p>
            <div className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-2xl overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 bg-slate-800/60 border-b border-[rgba(74,144,217,0.12)]">
                <div className="p-4 font-semibold text-[#6b7a94]">Category</div>
                <div className="p-4 font-semibold text-emerald-400 text-center">EV</div>
                <div className="p-4 font-semibold text-cyan-400 text-center">Hybrid</div>
              </div>
              {/* Table Rows */}
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${
                    index < comparisonData.length - 1 ? "border-b border-[rgba(74,144,217,0.06)]" : ""
                  } ${index % 2 === 0 ? "bg-transparent" : "bg-slate-800/20"}`}
                >
                  <div className="p-4 font-medium text-sm md:text-base">{row.label}</div>
                  <div className="p-4 text-sm md:text-base text-[#6b7a94] text-center">{row.ev}</div>
                  <div className="p-4 text-sm md:text-base text-[#6b7a94] text-center">{row.hybrid}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EV Savings Calculator Widget */}
        <section className="py-12 px-4">
          <div className="max-w-[900px] mx-auto">
            <SavingsCalculatorWidget />
          </div>
        </section>

        {/* If You Choose EV Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              If You Choose <span className="text-emerald-400">EV</span>
            </h2>
            <p className="text-center text-[#6b7a94] mb-10 max-w-2xl mx-auto">
              Our top 5 recommended electric vehicles for drivers making the switch.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {evRecommendations.map((car) => (
                <div
                  key={car.slug}
                  className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-2xl p-6 flex flex-col"
                >
                  <h3 className="text-lg font-bold mb-2">{car.name}</h3>
                  <div className="flex gap-4 text-sm text-[#6b7a94] mb-4">
                    <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full">{car.price}</span>
                    <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full">{car.range}</span>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={`/ev-deals/${car.slug}`}
                      className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-200"
                    >
                      View Details
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* If You Choose Hybrid Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              If You Choose <span className="text-cyan-400">Hybrid</span>
            </h2>
            <p className="text-center text-[#6b7a94] mb-10 max-w-2xl mx-auto">
              Our top 5 recommended hybrids and plug-in hybrids for every budget.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {hybridRecommendations.map((car, index) => (
                <div
                  key={index}
                  className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-2xl p-6 flex flex-col"
                >
                  <h3 className="text-lg font-bold mb-2">{car.name}</h3>
                  <div className="flex gap-4 text-sm text-[#6b7a94] mb-3">
                    <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full">{car.price}</span>
                    <span className="bg-slate-700/50 text-[#6b7a94] px-3 py-1 rounded-full">{car.mpg}</span>
                  </div>
                  <p className="text-sm text-[#6b7a94]">{car.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-[#6b7a94] mb-10">
              Common questions about choosing between an EV and a hybrid.
            </p>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/30 transition-colors duration-200"
                  >
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-[#6b7a94] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Go Electric?
            </h2>
            <p className="text-lg text-[#6b7a94] mb-10 max-w-xl mx-auto">
              Browse the latest EV deals and incentives to find the best price on your next electric vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ev-deals"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-[#0a0f1a] font-bold rounded-xl transition-all duration-200 text-lg"
              >
                Browse EV Deals
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/blog/ev-vs-hybrid-which-should-you-buy"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 hover:border-emerald-500/30 text-[#e8edf5] font-semibold rounded-xl transition-all duration-200 text-lg"
              >
                Read the Full Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MAJOR_CITIES } from "../lib/services";
import {
  calculateEstimate,
  SERVICE_GROUPS,
  VEHICLE_SIZES,
  SEVERITY_LEVELS,
  SERVICE_DISPLAY_NAMES,
  SERVICE_PARENT_SLUGS,
  CITY_MULTIPLIERS,
} from "../lib/pricingData";
import type {
  VehicleSize,
  Severity,
  EstimateResult,
} from "../lib/pricingData";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

type AnalysisStatus = "idle" | "uploading" | "analyzing" | "done" | "error";

interface AIClassification {
  vehicleType: VehicleSize;
  serviceNeeded: string;
  severity: Severity;
  description: string;
  confidence: "low" | "medium" | "high";
  serviceName: string;
  serviceParentSlug: string;
}

// ─── Image Resize Utility ──────────────────────────────────

function resizeImage(file: File, maxSize: number): Promise<{ base64: string; mimeType: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let { width, height } = img;

        if (width > maxSize || height > maxSize) {
          if (width > height) {
            height = Math.round((height * maxSize) / width);
            width = maxSize;
          } else {
            width = Math.round((width * maxSize) / height);
            height = maxSize;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas not supported"));
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
        const base64 = dataUrl.split(",")[1];
        resolve({ base64, mimeType: "image/jpeg" });
      };
      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = reader.result as string;
    };
    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

// ─── Main Component ────────────────────────────────────────

export default function CostEstimatorPage() {
  // Form state
  const [serviceSlug, setServiceSlug] = useState("");
  const [vehicleSize, setVehicleSize] = useState<VehicleSize | "">("");
  const [severity, setSeverity] = useState<Severity | "">("");
  const [citySlug, setCitySlug] = useState("");

  // Photo state
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [analysisStatus, setAnalysisStatus] = useState<AnalysisStatus>("idle");
  const [aiClassification, setAiClassification] = useState<AIClassification | null>(null);
  const [aiError, setAiError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Result state
  const [estimate, setEstimate] = useState<EstimateResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Drag state
  const [isDragging, setIsDragging] = useState(false);

  const inputClass =
    "w-full px-4 py-3 bg-[rgba(15,22,40,0.8)] border border-[rgba(74,144,217,0.15)] rounded-lg text-[#e8edf5] text-[13px] placeholder-[#3d4a61] focus:outline-none focus:border-[#4a90d9] transition-colors appearance-none";
  const labelClass =
    "block text-[12px] tracking-[0.05em] text-[#6b7a94] mb-2 font-medium";

  // ─── Photo Handling ──────────────────────────────────────

  const handleFile = useCallback(async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setAiError("Please upload an image file (JPEG, PNG, etc.)");
      return;
    }

    // Show preview immediately
    const previewUrl = URL.createObjectURL(file);
    setPhotoPreview(previewUrl);
    setAiError("");
    setAnalysisStatus("uploading");
    setAiClassification(null);
    setShowResult(false);
    setEstimate(null);

    try {
      // Resize image client-side
      setAnalysisStatus("analyzing");
      const { base64, mimeType } = await resizeImage(file, 1024);

      // Send to our API
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: base64, mimeType }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.debugInfo) console.error("Gemini debug:", data.debugInfo);
        setAiError(data.error || "Analysis failed");
        setAnalysisStatus("error");
        return;
      }

      // Auto-fill the form with AI results
      setAiClassification(data.classification);
      setServiceSlug(data.classification.serviceNeeded);
      setVehicleSize(data.classification.vehicleType);
      setSeverity(data.classification.severity);
      setAnalysisStatus("done");
    } catch {
      setAiError("Could not connect to the analysis service. Try the manual estimator below.");
      setAnalysisStatus("error");
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  // ─── Manual Estimate ─────────────────────────────────────

  const canEstimate = serviceSlug && vehicleSize && severity;

  const handleEstimate = () => {
    if (!canEstimate) return;
    const result = calculateEstimate(
      serviceSlug,
      vehicleSize as VehicleSize,
      severity as Severity,
      citySlug || undefined
    );
    if (result) {
      setEstimate(result);
      setShowResult(true);
    }
  };

  const handleReset = () => {
    setServiceSlug("");
    setVehicleSize("");
    setSeverity("");
    setCitySlug("");
    setPhotoPreview(null);
    setAnalysisStatus("idle");
    setAiClassification(null);
    setAiError("");
    setEstimate(null);
    setShowResult(false);
  };

  // Determine the service page link
  const serviceParentSlug =
    SERVICE_PARENT_SLUGS[serviceSlug] || serviceSlug;

  // Format price
  const fmt = (n: number) =>
    n >= 1000 ? `$${(n / 1000).toFixed(1).replace(/\.0$/, "")}k` : `$${n}`;
  const fmtFull = (n: number) => `$${n.toLocaleString()}`;

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <Navigation />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-[700px] mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(74,144,217,0.08)] border border-[rgba(74,144,217,0.15)] rounded-full mb-5">
              <svg
                className="w-3.5 h-3.5 text-[#4a90d9]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
              </svg>
              <span className="text-[11px] tracking-[0.1em] text-[#4a90d9] font-medium">
                AI-POWERED ESTIMATOR
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-light tracking-[0.04em] mb-3">
              What Should This{" "}
              <span className="text-[#4a90d9] font-medium">Cost</span>?
            </h1>
            <p className="text-[14px] text-[#6b7a94] max-w-md mx-auto">
              Snap a photo of your car or damage for an instant AI estimate — or
              use the manual form below.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {showResult && estimate ? (
              /* ─── Result View ───────────────────────────── */
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                {/* AI Detection Banner */}
                {aiClassification && (
                  <div className="flex items-start gap-3 p-4 mb-6 rounded-xl bg-[rgba(74,144,217,0.06)] border border-[rgba(74,144,217,0.12)]">
                    {photoPreview && (
                      <img
                        src={photoPreview}
                        alt="Uploaded vehicle"
                        className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                    )}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <svg
                          className="w-4 h-4 text-[#4a90d9]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                          />
                        </svg>
                        <span className="text-[11px] tracking-[0.05em] text-[#4a90d9] font-medium">
                          AI DETECTED
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full ${
                            aiClassification.confidence === "high"
                              ? "bg-[rgba(34,197,94,0.15)] text-[#22c55e]"
                              : aiClassification.confidence === "medium"
                              ? "bg-[rgba(245,197,24,0.15)] text-[#f5c518]"
                              : "bg-[rgba(239,68,68,0.15)] text-[#ef4444]"
                          }`}
                        >
                          {aiClassification.confidence} confidence
                        </span>
                      </div>
                      <p className="text-[13px] text-[#e8edf5]">
                        {aiClassification.description}
                      </p>
                    </div>
                  </div>
                )}

                {/* Estimate Header */}
                <div className="text-center mb-6">
                  <p className="text-[11px] tracking-[0.1em] text-[#6b7a94] mb-2 font-medium">
                    YOUR ESTIMATE
                  </p>
                  <p className="text-[15px] text-[#e8edf5]">
                    {SERVICE_DISPLAY_NAMES[serviceSlug] || serviceSlug}
                    {" — "}
                    {VEHICLE_SIZES.find((v) => v.value === vehicleSize)?.label}
                    {" — "}
                    {SEVERITY_LEVELS.find((s) => s.value === severity)?.label}
                  </p>
                </div>

                {/* Price Range Card */}
                <div className="p-6 rounded-xl bg-[rgba(15,22,40,0.6)] border border-[rgba(74,144,217,0.12)] mb-6">
                  {/* Price Numbers */}
                  <div className="flex justify-between items-end mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-light text-[#6b7a94]">
                        {fmtFull(estimate.low)}
                      </p>
                      <p className="text-[10px] tracking-[0.1em] text-[#3d4a61] mt-1">
                        LOW
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-4xl font-medium text-[#4a90d9]">
                        {fmtFull(estimate.mid)}
                      </p>
                      <p className="text-[10px] tracking-[0.1em] text-[#4a90d9] mt-1">
                        TYPICAL
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-light text-[#6b7a94]">
                        {fmtFull(estimate.high)}
                      </p>
                      <p className="text-[10px] tracking-[0.1em] text-[#3d4a61] mt-1">
                        HIGH
                      </p>
                    </div>
                  </div>

                  {/* Visual Range Bar */}
                  <div className="relative h-3 bg-[rgba(74,144,217,0.08)] rounded-full overflow-hidden mb-6">
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#22c55e] via-[#4a90d9] to-[#ef4444] rounded-full opacity-40 w-full" />
                    <div
                      className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[#4a90d9] rounded-full border-2 border-[#e8edf5] shadow-lg shadow-[rgba(74,144,217,0.4)]"
                      style={{
                        left: `${Math.min(
                          90,
                          Math.max(
                            10,
                            ((estimate.mid - estimate.low) /
                              (estimate.high - estimate.low)) *
                              100
                          )
                        )}%`,
                      }}
                    />
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-3">
                    <p className="text-[11px] tracking-[0.1em] text-[#6b7a94] font-medium mb-2">
                      PRICE BREAKDOWN
                    </p>

                    <div className="flex justify-between text-[13px]">
                      <span className="text-[#6b7a94]">
                        Base price ({estimate.breakdown.baseLabel})
                      </span>
                      <span className="text-[#e8edf5]">
                        {fmtFull(estimate.breakdown.baseMid)}
                      </span>
                    </div>

                    {estimate.breakdown.vehicleMultiplier !== 1 && (
                      <div className="flex justify-between text-[13px]">
                        <span className="text-[#6b7a94]">
                          Vehicle size ({estimate.breakdown.vehicleLabel},{" "}
                          {estimate.breakdown.vehicleMultiplier > 1 ? "+" : ""}
                          {Math.round(
                            (estimate.breakdown.vehicleMultiplier - 1) * 100
                          )}
                          %)
                        </span>
                        <span
                          className={
                            estimate.breakdown.vehicleAdjustment > 0
                              ? "text-[#ef4444]"
                              : "text-[#22c55e]"
                          }
                        >
                          {estimate.breakdown.vehicleAdjustment > 0 ? "+" : ""}
                          {fmtFull(estimate.breakdown.vehicleAdjustment)}
                        </span>
                      </div>
                    )}

                    {estimate.breakdown.severityMultiplier !== 1 && (
                      <div className="flex justify-between text-[13px]">
                        <span className="text-[#6b7a94]">
                          Condition ({estimate.breakdown.severityLabel},{" "}
                          {estimate.breakdown.severityMultiplier > 1 ? "+" : ""}
                          {Math.round(
                            (estimate.breakdown.severityMultiplier - 1) * 100
                          )}
                          %)
                        </span>
                        <span
                          className={
                            estimate.breakdown.severityAdjustment > 0
                              ? "text-[#ef4444]"
                              : "text-[#22c55e]"
                          }
                        >
                          {estimate.breakdown.severityAdjustment > 0 ? "+" : ""}
                          {fmtFull(estimate.breakdown.severityAdjustment)}
                        </span>
                      </div>
                    )}

                    {estimate.breakdown.cityLabel &&
                      estimate.breakdown.cityMultiplier !== 1 && (
                        <div className="flex justify-between text-[13px]">
                          <span className="text-[#6b7a94]">
                            Your area ({estimate.breakdown.cityLabel},{" "}
                            {estimate.breakdown.cityMultiplier > 1 ? "+" : ""}
                            {Math.round(
                              (estimate.breakdown.cityMultiplier - 1) * 100
                            )}
                            %)
                          </span>
                          <span
                            className={
                              estimate.breakdown.cityAdjustment > 0
                                ? "text-[#ef4444]"
                                : "text-[#22c55e]"
                            }
                          >
                            {estimate.breakdown.cityAdjustment > 0 ? "+" : ""}
                            {fmtFull(estimate.breakdown.cityAdjustment)}
                          </span>
                        </div>
                      )}

                    <div className="border-t border-[rgba(74,144,217,0.1)] pt-3 flex justify-between text-[14px] font-medium">
                      <span className="text-[#e8edf5]">Typical estimate</span>
                      <span className="text-[#4a90d9]">
                        {fmtFull(estimate.mid)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tip */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[rgba(245,197,24,0.05)] border border-[rgba(245,197,24,0.12)] mb-8">
                  <svg
                    className="w-5 h-5 text-[#f5c518] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                  <p className="text-[13px] text-[#6b7a94]">
                    <span className="text-[#f5c518] font-medium">Pro tip:</span>{" "}
                    Always get 2-3 quotes from different shops. Prices can vary
                    significantly based on the shop&apos;s equipment, certifications,
                    and warranty.
                  </p>
                </div>

                {/* CTAs */}
                <div>
                  <Link
                    href={`/${serviceParentSlug}`}
                    className="block w-full px-6 py-3.5 text-[12px] tracking-[0.05em] font-medium bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-colors text-center"
                  >
                    Find{" "}
                    {SERVICE_DISPLAY_NAMES[serviceParentSlug] || "Providers"}{" "}
                    Near Me
                  </Link>
                </div>

                <button
                  onClick={handleReset}
                  className="w-full mt-4 py-3 text-[12px] tracking-[0.05em] text-[#6b7a94] hover:text-[#e8edf5] transition-colors"
                >
                  Try Another Estimate
                </button>
              </motion.div>
            ) : (
              /* ─── Input View ────────────────────────────── */
              <motion.div
                key="input"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
              >
                {/* Photo Upload Zone */}
                <div
                  className={`relative rounded-xl border-2 border-dashed p-8 text-center mb-8 transition-all duration-300 cursor-pointer ${
                    isDragging
                      ? "border-[#4a90d9] bg-[rgba(74,144,217,0.08)]"
                      : photoPreview
                      ? "border-[rgba(74,144,217,0.2)] bg-[rgba(15,22,40,0.4)]"
                      : "border-[rgba(74,144,217,0.12)] bg-[rgba(15,22,40,0.3)] hover:border-[rgba(74,144,217,0.25)] hover:bg-[rgba(15,22,40,0.5)]"
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={() =>
                    analysisStatus === "idle" || analysisStatus === "error" || analysisStatus === "done"
                      ? fileInputRef.current?.click()
                      : null
                  }
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFile(file);
                    }}
                  />

                  {/* Analyzing Animation */}
                  {(analysisStatus === "uploading" ||
                    analysisStatus === "analyzing") && (
                    <div className="relative">
                      {photoPreview && (
                        <div className="relative w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden">
                          <img
                            src={photoPreview}
                            alt="Analyzing..."
                            className="w-full h-full object-cover"
                          />
                          {/* Scanning overlay */}
                          <div className="absolute inset-0 bg-[rgba(10,15,26,0.5)]" />
                          <motion.div
                            className="absolute left-0 right-0 h-1 bg-[#4a90d9] shadow-[0_0_12px_rgba(74,144,217,0.6)]"
                            initial={{ top: 0 }}
                            animate={{ top: "100%" }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                        </div>
                      )}
                      <div className="flex items-center justify-center gap-2">
                        <svg
                          className="w-5 h-5 text-[#4a90d9] animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        <span className="text-[13px] text-[#4a90d9]">
                          {analysisStatus === "uploading"
                            ? "Preparing image..."
                            : "Analyzing your vehicle with AI..."}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* AI Done State */}
                  {analysisStatus === "done" && aiClassification && (
                    <div>
                      {photoPreview && (
                        <div className="w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden relative">
                          <img
                            src={photoPreview}
                            alt="Analyzed"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-2 left-2 right-2 px-2 py-1.5 bg-[rgba(10,15,26,0.85)] backdrop-blur-sm rounded-md">
                            <div className="flex items-center gap-1.5">
                              <svg
                                className="w-3 h-3 text-[#22c55e]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M4.5 12.75l6 6 9-13.5"
                                />
                              </svg>
                              <span className="text-[10px] text-[#22c55e]">
                                AI analysis complete
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                      <p className="text-[13px] text-[#e8edf5] mb-1">
                        {aiClassification.description}
                      </p>
                      <p className="text-[11px] text-[#6b7a94]">
                        Fields auto-filled below. Adjust if needed, then click
                        &quot;Get Estimate&quot;.
                      </p>
                    </div>
                  )}

                  {/* Error State */}
                  {analysisStatus === "error" && (
                    <div>
                      {photoPreview && (
                        <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden opacity-50">
                          <img
                            src={photoPreview}
                            alt="Upload"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <p className="text-[13px] text-[#ef4444] mb-2">
                        {aiError}
                      </p>
                      <p className="text-[11px] text-[#6b7a94]">
                        Click to try another photo, or use the manual form below.
                      </p>
                    </div>
                  )}

                  {/* Default/Idle State */}
                  {analysisStatus === "idle" && (
                    <>
                      <div className="w-16 h-16 rounded-full bg-[rgba(74,144,217,0.1)] flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-[#4a90d9]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                          />
                        </svg>
                      </div>
                      <h2 className="text-[17px] font-medium mb-2">
                        Snap a Photo for AI Estimate
                      </h2>
                      <p className="text-[13px] text-[#6b7a94] mb-5 max-w-sm mx-auto">
                        Upload a photo of your car or damage and our AI will
                        identify the vehicle type, damage, and estimate the cost
                        instantly.
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            fileInputRef.current?.click();
                          }}
                          className="px-5 py-2.5 text-[12px] tracking-[0.05em] font-medium bg-[#4a90d9] text-[#0a0f1a] rounded-lg hover:bg-[#5a9ee5] transition-colors"
                        >
                          Upload Photo
                        </button>
                        <span className="text-[11px] text-[#3d4a61]">
                          or drag &amp; drop
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-[rgba(74,144,217,0.1)]" />
                  <span className="text-[11px] text-[#3d4a61] tracking-[0.1em]">
                    OR ESTIMATE MANUALLY
                  </span>
                  <div className="flex-1 h-px bg-[rgba(74,144,217,0.1)]" />
                </div>

                {/* Manual Form */}
                <div className="space-y-5">
                  {/* Service */}
                  <div>
                    <label className={labelClass}>Service Type *</label>
                    <select
                      value={serviceSlug}
                      onChange={(e) => setServiceSlug(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      {SERVICE_GROUPS.map((group) => (
                        <optgroup key={group.category} label={group.category}>
                          {group.services.map((svc) => (
                            <option key={svc.slug} value={svc.slug}>
                              {svc.name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>

                  {/* Vehicle Size + Severity Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Vehicle Size *</label>
                      <select
                        value={vehicleSize}
                        onChange={(e) =>
                          setVehicleSize(e.target.value as VehicleSize)
                        }
                        className={inputClass}
                      >
                        <option value="">Select size</option>
                        {VEHICLE_SIZES.map((v) => (
                          <option key={v.value} value={v.value}>
                            {v.label} — {v.examples}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Condition / Severity *</label>
                      <select
                        value={severity}
                        onChange={(e) =>
                          setSeverity(e.target.value as Severity)
                        }
                        className={inputClass}
                      >
                        <option value="">Select condition</option>
                        {SEVERITY_LEVELS.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label} — {s.description}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className={labelClass}>
                      Location{" "}
                      <span className="text-[#3d4a61]">(optional — adjusts for local pricing)</span>
                    </label>
                    <select
                      value={citySlug}
                      onChange={(e) => setCitySlug(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">National average</option>
                      {MAJOR_CITIES.map((city) => (
                        <option key={city.slug} value={city.slug}>
                          {city.city}, {city.stateCode}
                          {CITY_MULTIPLIERS[city.slug] &&
                          CITY_MULTIPLIERS[city.slug] !== 1
                            ? ` (${
                                CITY_MULTIPLIERS[city.slug] > 1 ? "+" : ""
                              }${Math.round(
                                (CITY_MULTIPLIERS[city.slug] - 1) * 100
                              )}%)`
                            : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Estimate Button */}
                  <button
                    onClick={handleEstimate}
                    disabled={!canEstimate}
                    className={`w-full py-4 text-[13px] tracking-[0.05em] font-medium rounded-lg transition-all duration-200 ${
                      canEstimate
                        ? "bg-[#4a90d9] text-[#0a0f1a] hover:bg-[#5a9ee5] hover:shadow-lg hover:shadow-[rgba(74,144,217,0.2)]"
                        : "bg-[rgba(74,144,217,0.15)] text-[#3d4a61] cursor-not-allowed"
                    }`}
                  >
                    {canEstimate
                      ? "Get Estimate"
                      : "Select service, vehicle size, and condition"}
                  </button>
                </div>

                {/* Disclaimer */}
                <p className="text-[11px] text-[#3d4a61] text-center mt-6 max-w-md mx-auto">
                  Estimates are based on industry averages and may vary. Always
                  get quotes from local providers for accurate pricing.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}

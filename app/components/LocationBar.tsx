"use client";

interface LocationBarProps {
  detectedLocation: string;
  isLoading: boolean;
  onLocationChange?: (location: string) => void;
}

export default function LocationBar({
  detectedLocation,
  isLoading,
}: LocationBarProps) {
  return (
    <div className="flex items-center gap-1.5 text-[11px] text-[#6b7a94] bg-[rgba(74,144,217,0.1)] px-3 py-1.5 rounded-full">
      <svg
        className="w-3.5 h-3.5 text-[#4a90d9]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      {isLoading ? (
        <span className="animate-pulse">Detecting location...</span>
      ) : (
        <span>
          Near <span className="text-[#4a90d9] font-medium">{detectedLocation}</span>
        </span>
      )}
    </div>
  );
}

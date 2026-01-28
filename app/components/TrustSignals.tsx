interface TrustSignalsProps {
  signals: string[];
  title?: string;
}

export default function TrustSignals({
  signals,
  title = "Why Trust These Shops?",
}: TrustSignalsProps) {
  return (
    <div className="bg-[rgba(74,144,217,0.04)] border border-[rgba(74,144,217,0.12)] rounded-xl p-8">
      <h3 className="text-lg font-medium text-[#e8edf5] mb-6">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {signals.map((signal) => (
          <div
            key={signal}
            className="flex items-center gap-3 p-3 bg-[rgba(10,15,26,0.5)] rounded-lg"
          >
            <div className="w-8 h-8 rounded-full bg-[rgba(74,144,217,0.15)] flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 text-[#4a90d9]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-[13px] text-[#e8edf5] font-medium">
              {signal}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

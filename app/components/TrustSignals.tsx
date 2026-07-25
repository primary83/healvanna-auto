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
              <div className="w-2 h-2 rounded-full bg-[#4a90d9]" />
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

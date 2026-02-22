import ChargingCompatibility from "./ChargingCompatibility";
import { CHARGING_SPECS } from "../lib/chargingData";

interface ChargingSectionProps {
  brand: string;
  model: string;
  slug: string;
  range: number;
  theme?: "sapphire" | "slate";
}

export default function ChargingSection({
  brand,
  model,
  slug,
  range,
  theme = "sapphire",
}: ChargingSectionProps) {
  const specs = CHARGING_SPECS[slug];
  if (!specs) return null;

  return (
    <section className="py-12 px-12">
      <div className="max-w-[1300px] mx-auto">
        <ChargingCompatibility
          brand={brand}
          model={model}
          batteryCapacity={specs.batteryCapacity}
          maxChargeSpeed={specs.maxChargeSpeed}
          connectorType={specs.connectorType}
          range={range}
          theme={theme}
        />
      </div>
    </section>
  );
}

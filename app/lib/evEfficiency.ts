// EV energy consumption in kWh per 100 miles (real-world estimates)
// Mapped by EVModel.id from carData.ts

export const EV_EFFICIENCY: Record<string, number> = {
  // Tesla
  "tesla-model-3": 25,
  "tesla-model-y": 27,
  "tesla-model-s": 28,
  "tesla-model-x": 33,
  "tesla-cybertruck": 40,
  // Rivian
  "rivian-r1t": 48,
  "rivian-r1s": 46,
  // BMW
  "bmw-i4": 27,
  "bmw-i7": 32,
  "bmw-ix": 33,
  // Mercedes-Benz
  "mercedes-eqs": 30,
  "mercedes-eqe": 30,
  "mercedes-eqb": 33,
  // Porsche
  "porsche-taycan": 33,
  "porsche-macan-ev": 30,
  // Lucid
  "lucid-air-pure": 24,
  "lucid-air-touring": 26,
  "lucid-air-grand-touring": 27,
  "lucid-air-sapphire": 30,
  "lucid-gravity": 29,
  // Hyundai
  "hyundai-ioniq-5": 30,
  "hyundai-ioniq-6": 26,
  "hyundai-ioniq-9": 35,
  "hyundai-kona-electric": 28,
  // Kia
  "kia-ev6": 30,
  "kia-ev9": 35,
  "kia-ev3": 27,
  "kia-niro-ev": 29,
  // Ford
  "ford-mustang-mach-e": 33,
  "ford-f-150-lightning": 48,
  "ford-e-transit": 46,
  // Volvo
  "volvo-ex30": 28,
  "volvo-ex90": 33,
  "volvo-ec40": 33,
  "volvo-xc40-recharge": 33,
  // Polestar
  "polestar-2": 28,
  "polestar-3": 33,
  "polestar-4": 29,
  // Audi
  "audi-q4-e-tron": 31,
  "audi-q8-e-tron": 35,
  "audi-e-tron-gt": 34,
  "audi-rs-e-tron-gt": 36,
  // Chevrolet
  "chevrolet-equinox-ev": 29,
  "chevrolet-blazer-ev": 32,
  "chevrolet-silverado-ev": 40,
  // Cadillac
  "cadillac-lyriq": 32,
  "cadillac-celestiq": 34,
  "cadillac-escalade-iq": 42,
  "cadillac-optiq": 30,
  // Genesis
  "genesis-gv60": 32,
  "genesis-electrified-g80": 34,
  "genesis-electrified-gv70": 35,
  // Volkswagen
  "volkswagen-id4": 31,
  "volkswagen-id-buzz": 35,
  "volkswagen-id7": 28,
};

const DEFAULT_EFFICIENCY = 30;

export function getEfficiency(id: string): number {
  return EV_EFFICIENCY[id] ?? DEFAULT_EFFICIENCY;
}

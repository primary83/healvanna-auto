export interface ChargingSpecs {
  batteryCapacity: number; // usable kWh
  maxChargeSpeed: number; // max DC fast charge kW
  connectorType: string; // "NACS", "CCS", "CCS/CHAdeMO", etc.
}

// Keyed by brand/model slug matching the /cars/ path structure
export const CHARGING_SPECS: Record<string, ChargingSpecs> = {
  // Tesla — all NACS, 250 kW Supercharger V3
  "tesla/model-3": { batteryCapacity: 60, maxChargeSpeed: 250, connectorType: "NACS" },
  "tesla/model-y": { batteryCapacity: 75, maxChargeSpeed: 250, connectorType: "NACS" },
  "tesla/model-s": { batteryCapacity: 100, maxChargeSpeed: 250, connectorType: "NACS" },
  "tesla/model-x": { batteryCapacity: 100, maxChargeSpeed: 250, connectorType: "NACS" },
  "tesla/cybertruck": { batteryCapacity: 123, maxChargeSpeed: 250, connectorType: "NACS" },

  // Rivian — CCS, 200 kW max
  "rivian/r1t": { batteryCapacity: 135, maxChargeSpeed: 200, connectorType: "CCS" },
  "rivian/r1s": { batteryCapacity: 135, maxChargeSpeed: 200, connectorType: "CCS" },

  // BMW — CCS, 195-200 kW
  "bmw/i4": { batteryCapacity: 84, maxChargeSpeed: 200, connectorType: "CCS" },
  "bmw/i7": { batteryCapacity: 102, maxChargeSpeed: 195, connectorType: "CCS" },
  "bmw/ix": { batteryCapacity: 105, maxChargeSpeed: 200, connectorType: "CCS" },

  // Mercedes — CCS, 200-210 kW
  "mercedes/eqb": { batteryCapacity: 67, maxChargeSpeed: 100, connectorType: "CCS" },
  "mercedes/eqe": { batteryCapacity: 91, maxChargeSpeed: 170, connectorType: "CCS" },
  "mercedes/eqs": { batteryCapacity: 108, maxChargeSpeed: 200, connectorType: "CCS" },

  // Porsche — CCS, 270 kW
  "porsche/taycan": { batteryCapacity: 93, maxChargeSpeed: 270, connectorType: "CCS" },
  "porsche/macan-ev": { batteryCapacity: 95, maxChargeSpeed: 270, connectorType: "CCS" },

  // Lucid — CCS/NACS, 300+ kW
  "lucid/air-pure": { batteryCapacity: 88, maxChargeSpeed: 250, connectorType: "NACS" },
  "lucid/air-touring": { batteryCapacity: 92, maxChargeSpeed: 300, connectorType: "NACS" },
  "lucid/air-grand-touring": { batteryCapacity: 112, maxChargeSpeed: 300, connectorType: "NACS" },
  "lucid/air-sapphire": { batteryCapacity: 118, maxChargeSpeed: 300, connectorType: "NACS" },
  "lucid/gravity": { batteryCapacity: 113, maxChargeSpeed: 300, connectorType: "NACS" },

  // Hyundai — CCS, 800V architecture (220-350 kW)
  "hyundai/ioniq-5": { batteryCapacity: 77, maxChargeSpeed: 235, connectorType: "CCS" },
  "hyundai/ioniq-6": { batteryCapacity: 77, maxChargeSpeed: 235, connectorType: "CCS" },
  "hyundai/ioniq-9": { batteryCapacity: 110, maxChargeSpeed: 350, connectorType: "CCS" },
  "hyundai/kona-electric": { batteryCapacity: 65, maxChargeSpeed: 100, connectorType: "CCS" },

  // Kia — CCS, 800V architecture
  "kia/ev6": { batteryCapacity: 77, maxChargeSpeed: 235, connectorType: "CCS" },
  "kia/ev9": { batteryCapacity: 100, maxChargeSpeed: 250, connectorType: "CCS" },
  "kia/ev3": { batteryCapacity: 58, maxChargeSpeed: 128, connectorType: "CCS" },
  "kia/niro-ev": { batteryCapacity: 65, maxChargeSpeed: 80, connectorType: "CCS" },

  // Ford — CCS/NACS, 150-250 kW
  "ford/mustang-mach-e": { batteryCapacity: 91, maxChargeSpeed: 150, connectorType: "CCS" },
  "ford/f-150-lightning": { batteryCapacity: 131, maxChargeSpeed: 150, connectorType: "CCS" },
  "ford/e-transit": { batteryCapacity: 89, maxChargeSpeed: 115, connectorType: "CCS" },

  // Chevrolet — CCS, 150-350 kW
  "chevrolet/equinox-ev": { batteryCapacity: 85, maxChargeSpeed: 150, connectorType: "CCS" },
  "chevrolet/blazer-ev": { batteryCapacity: 102, maxChargeSpeed: 190, connectorType: "CCS" },
  "chevrolet/silverado-ev": { batteryCapacity: 200, maxChargeSpeed: 350, connectorType: "CCS" },

  // Cadillac — CCS, 190-350 kW
  "cadillac/lyriq": { batteryCapacity: 102, maxChargeSpeed: 190, connectorType: "CCS" },
  "cadillac/celestiq": { batteryCapacity: 111, maxChargeSpeed: 200, connectorType: "CCS" },
  "cadillac/escalade-iq": { batteryCapacity: 200, maxChargeSpeed: 350, connectorType: "CCS" },
  "cadillac/optiq": { batteryCapacity: 85, maxChargeSpeed: 150, connectorType: "CCS" },

  // Audi — CCS, 150-270 kW
  "audi/q4-e-tron": { batteryCapacity: 77, maxChargeSpeed: 175, connectorType: "CCS" },
  "audi/q8-e-tron": { batteryCapacity: 106, maxChargeSpeed: 170, connectorType: "CCS" },
  "audi/e-tron-gt": { batteryCapacity: 93, maxChargeSpeed: 270, connectorType: "CCS" },
  "audi/rs-e-tron-gt": { batteryCapacity: 93, maxChargeSpeed: 270, connectorType: "CCS" },

  // Volvo — CCS, 200-250 kW
  "volvo/ex30": { batteryCapacity: 69, maxChargeSpeed: 153, connectorType: "CCS" },
  "volvo/ex90": { batteryCapacity: 107, maxChargeSpeed: 250, connectorType: "CCS" },
  "volvo/ec40": { batteryCapacity: 78, maxChargeSpeed: 200, connectorType: "CCS" },
  "volvo/xc40-recharge": { batteryCapacity: 78, maxChargeSpeed: 200, connectorType: "CCS" },

  // Polestar — CCS, 200-250 kW
  "polestar/polestar-2": { batteryCapacity: 78, maxChargeSpeed: 205, connectorType: "CCS" },
  "polestar/polestar-3": { batteryCapacity: 107, maxChargeSpeed: 250, connectorType: "CCS" },
  "polestar/polestar-4": { batteryCapacity: 100, maxChargeSpeed: 200, connectorType: "CCS" },

  // Genesis — CCS, 800V (240-350 kW)
  "genesis/gv60": { batteryCapacity: 77, maxChargeSpeed: 240, connectorType: "CCS" },
  "genesis/electrified-g80": { batteryCapacity: 82, maxChargeSpeed: 187, connectorType: "CCS" },
  "genesis/electrified-gv70": { batteryCapacity: 77, maxChargeSpeed: 240, connectorType: "CCS" },

  // Volkswagen — CCS, 135-200 kW
  "volkswagen/id4": { batteryCapacity: 77, maxChargeSpeed: 135, connectorType: "CCS" },
  "volkswagen/id-buzz": { batteryCapacity: 91, maxChargeSpeed: 200, connectorType: "CCS" },
  "volkswagen/id7": { batteryCapacity: 77, maxChargeSpeed: 175, connectorType: "CCS" },

  // Jaguar — CCS
  "jaguar/i-pace": { batteryCapacity: 90, maxChargeSpeed: 100, connectorType: "CCS" },
  "jaguar/type-00": { batteryCapacity: 105, maxChargeSpeed: 270, connectorType: "CCS" },

  // BYD — CCS/GB/T
  "byd/atto-3": { batteryCapacity: 60, maxChargeSpeed: 80, connectorType: "CCS" },
  "byd/dolphin": { batteryCapacity: 60, maxChargeSpeed: 88, connectorType: "CCS" },
  "byd/han": { batteryCapacity: 85, maxChargeSpeed: 120, connectorType: "CCS" },
  "byd/seal": { batteryCapacity: 83, maxChargeSpeed: 150, connectorType: "CCS" },
  "byd/seal-u": { batteryCapacity: 71, maxChargeSpeed: 110, connectorType: "CCS" },
  "byd/tang": { batteryCapacity: 108, maxChargeSpeed: 166, connectorType: "CCS" },

  // NIO — CCS (battery swap capable)
  "nio/ec6": { batteryCapacity: 100, maxChargeSpeed: 240, connectorType: "CCS" },
  "nio/ec7": { batteryCapacity: 100, maxChargeSpeed: 240, connectorType: "CCS" },
  "nio/es6": { batteryCapacity: 100, maxChargeSpeed: 240, connectorType: "CCS" },
  "nio/es8": { batteryCapacity: 100, maxChargeSpeed: 240, connectorType: "CCS" },
  "nio/et5": { batteryCapacity: 100, maxChargeSpeed: 240, connectorType: "CCS" },
  "nio/et7": { batteryCapacity: 100, maxChargeSpeed: 240, connectorType: "CCS" },

  // XPeng
  "xpeng/g6": { batteryCapacity: 88, maxChargeSpeed: 280, connectorType: "CCS" },
  "xpeng/g9": { batteryCapacity: 98, maxChargeSpeed: 300, connectorType: "CCS" },
  "xpeng/p7": { batteryCapacity: 80, maxChargeSpeed: 175, connectorType: "CCS" },
  "xpeng/x9": { batteryCapacity: 102, maxChargeSpeed: 280, connectorType: "CCS" },

  // Li Auto (EREV — small battery, most are plug-in hybrids)
  "li-auto/mega": { batteryCapacity: 103, maxChargeSpeed: 520, connectorType: "CCS" },
  "li-auto/l6": { batteryCapacity: 40, maxChargeSpeed: 100, connectorType: "CCS" },
  "li-auto/l7": { batteryCapacity: 42, maxChargeSpeed: 100, connectorType: "CCS" },
  "li-auto/l8": { batteryCapacity: 42, maxChargeSpeed: 100, connectorType: "CCS" },
  "li-auto/l9": { batteryCapacity: 44, maxChargeSpeed: 100, connectorType: "CCS" },
  "li-auto/g6": { batteryCapacity: 88, maxChargeSpeed: 280, connectorType: "CCS" },
  "li-auto/g9": { batteryCapacity: 98, maxChargeSpeed: 300, connectorType: "CCS" },
  "li-auto/p7": { batteryCapacity: 80, maxChargeSpeed: 175, connectorType: "CCS" },
  "li-auto/x9": { batteryCapacity: 102, maxChargeSpeed: 280, connectorType: "CCS" },

  // Zeekr — 800V
  "zeekr/001": { batteryCapacity: 100, maxChargeSpeed: 360, connectorType: "CCS" },
  "zeekr/007": { batteryCapacity: 100, maxChargeSpeed: 360, connectorType: "CCS" },
  "zeekr/009": { batteryCapacity: 116, maxChargeSpeed: 360, connectorType: "CCS" },
  "zeekr/x": { batteryCapacity: 69, maxChargeSpeed: 150, connectorType: "CCS" },

  // Xiaomi
  "xiaomi/su7": { batteryCapacity: 74, maxChargeSpeed: 210, connectorType: "CCS" },
  "xiaomi/su7-pro": { batteryCapacity: 94, maxChargeSpeed: 210, connectorType: "CCS" },
  "xiaomi/su7-max": { batteryCapacity: 101, maxChargeSpeed: 210, connectorType: "CCS" },

  // VinFast — CCS
  "vinfast/vf6": { batteryCapacity: 60, maxChargeSpeed: 110, connectorType: "CCS" },
  "vinfast/vf7": { batteryCapacity: 76, maxChargeSpeed: 110, connectorType: "CCS" },
  "vinfast/vf8": { batteryCapacity: 88, maxChargeSpeed: 200, connectorType: "CCS" },
  "vinfast/vf9": { batteryCapacity: 92, maxChargeSpeed: 230, connectorType: "CCS" },

  // Flat-path aliases for duplicate model pages
  "air-grand-touring": { batteryCapacity: 112, maxChargeSpeed: 300, connectorType: "NACS" },
  "air-pure": { batteryCapacity: 88, maxChargeSpeed: 250, connectorType: "NACS" },
  "air-sapphire": { batteryCapacity: 118, maxChargeSpeed: 300, connectorType: "NACS" },
  "air-touring": { batteryCapacity: 92, maxChargeSpeed: 300, connectorType: "NACS" },
  "gravity": { batteryCapacity: 113, maxChargeSpeed: 300, connectorType: "NACS" },
  "bmw-i7-xdrive60": { batteryCapacity: 102, maxChargeSpeed: 195, connectorType: "CCS" },
  "ec40": { batteryCapacity: 78, maxChargeSpeed: 200, connectorType: "CCS" },
  "ex30": { batteryCapacity: 69, maxChargeSpeed: 153, connectorType: "CCS" },
  "ex90": { batteryCapacity: 107, maxChargeSpeed: 250, connectorType: "CCS" },
  "id4": { batteryCapacity: 77, maxChargeSpeed: 135, connectorType: "CCS" },
  "id7": { batteryCapacity: 77, maxChargeSpeed: 175, connectorType: "CCS" },
  "id-buzz": { batteryCapacity: 91, maxChargeSpeed: 200, connectorType: "CCS" },
  "lucid-air-sapphire": { batteryCapacity: 118, maxChargeSpeed: 300, connectorType: "NACS" },
  "mercedes-eqs-580": { batteryCapacity: 108, maxChargeSpeed: 200, connectorType: "CCS" },
  "porsche-taycan-turbo-s": { batteryCapacity: 93, maxChargeSpeed: 270, connectorType: "CCS" },
  "rivian-r1s": { batteryCapacity: 135, maxChargeSpeed: 200, connectorType: "CCS" },
  "tesla-model-s-plaid": { batteryCapacity: 100, maxChargeSpeed: 250, connectorType: "NACS" },
  "xc40-recharge": { batteryCapacity: 78, maxChargeSpeed: 200, connectorType: "CCS" },
};

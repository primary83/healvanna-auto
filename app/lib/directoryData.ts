import { DirectoryState, DirectoryCity } from "./types";

export const DIRECTORY_STATES: DirectoryState[] = [
  { name: "Alabama", abbreviation: "AL", slug: "alabama", latitude: 32.3182, longitude: -86.9023, featured: false, region: "Southeast" },
  { name: "Alaska", abbreviation: "AK", slug: "alaska", latitude: 63.3886, longitude: -152.4814, featured: false, region: "Pacific" },
  { name: "Arizona", abbreviation: "AZ", slug: "arizona", latitude: 34.0489, longitude: -111.0937, featured: false, region: "Southwest" },
  { name: "Arkansas", abbreviation: "AR", slug: "arkansas", latitude: 35.2010, longitude: -91.8318, featured: false, region: "Southeast" },
  { name: "California", abbreviation: "CA", slug: "california", latitude: 36.7783, longitude: -119.4179, featured: true, region: "West" },
  { name: "Colorado", abbreviation: "CO", slug: "colorado", latitude: 39.5501, longitude: -105.7821, featured: false, region: "West" },
  { name: "Connecticut", abbreviation: "CT", slug: "connecticut", latitude: 41.6032, longitude: -73.0877, featured: false, region: "Northeast" },
  { name: "Delaware", abbreviation: "DE", slug: "delaware", latitude: 38.9108, longitude: -75.5277, featured: false, region: "Northeast" },
  { name: "District of Columbia", abbreviation: "DC", slug: "district-of-columbia", latitude: 38.9072, longitude: -77.0369, featured: false, region: "Northeast" },
  { name: "Florida", abbreviation: "FL", slug: "florida", latitude: 27.6648, longitude: -81.5158, featured: true, region: "Southeast" },
  { name: "Georgia", abbreviation: "GA", slug: "georgia", latitude: 32.1656, longitude: -82.9001, featured: false, region: "Southeast" },
  { name: "Hawaii", abbreviation: "HI", slug: "hawaii", latitude: 19.8968, longitude: -155.5828, featured: false, region: "Pacific" },
  { name: "Idaho", abbreviation: "ID", slug: "idaho", latitude: 44.0682, longitude: -114.7420, featured: false, region: "West" },
  { name: "Illinois", abbreviation: "IL", slug: "illinois", latitude: 40.6331, longitude: -89.3985, featured: false, region: "Midwest" },
  { name: "Indiana", abbreviation: "IN", slug: "indiana", latitude: 40.2672, longitude: -86.1349, featured: false, region: "Midwest" },
  { name: "Iowa", abbreviation: "IA", slug: "iowa", latitude: 41.8780, longitude: -93.0977, featured: false, region: "Midwest" },
  { name: "Kansas", abbreviation: "KS", slug: "kansas", latitude: 39.0119, longitude: -98.4842, featured: false, region: "Midwest" },
  { name: "Kentucky", abbreviation: "KY", slug: "kentucky", latitude: 37.8393, longitude: -84.2700, featured: false, region: "Southeast" },
  { name: "Louisiana", abbreviation: "LA", slug: "louisiana", latitude: 30.9843, longitude: -91.9623, featured: false, region: "Southeast" },
  { name: "Maine", abbreviation: "ME", slug: "maine", latitude: 45.2538, longitude: -69.4455, featured: false, region: "Northeast" },
  { name: "Maryland", abbreviation: "MD", slug: "maryland", latitude: 39.0458, longitude: -76.6413, featured: false, region: "Northeast" },
  { name: "Massachusetts", abbreviation: "MA", slug: "massachusetts", latitude: 42.4072, longitude: -71.3824, featured: false, region: "Northeast" },
  { name: "Michigan", abbreviation: "MI", slug: "michigan", latitude: 44.3148, longitude: -85.6024, featured: false, region: "Midwest" },
  { name: "Minnesota", abbreviation: "MN", slug: "minnesota", latitude: 46.7296, longitude: -94.6859, featured: false, region: "Midwest" },
  { name: "Mississippi", abbreviation: "MS", slug: "mississippi", latitude: 32.3547, longitude: -89.3985, featured: false, region: "Southeast" },
  { name: "Missouri", abbreviation: "MO", slug: "missouri", latitude: 37.9643, longitude: -91.8318, featured: false, region: "Midwest" },
  { name: "Montana", abbreviation: "MT", slug: "montana", latitude: 46.8797, longitude: -110.3626, featured: false, region: "West" },
  { name: "Nebraska", abbreviation: "NE", slug: "nebraska", latitude: 41.4925, longitude: -99.9018, featured: false, region: "Midwest" },
  { name: "Nevada", abbreviation: "NV", slug: "nevada", latitude: 38.8026, longitude: -116.4194, featured: false, region: "West" },
  { name: "New Hampshire", abbreviation: "NH", slug: "new-hampshire", latitude: 43.1939, longitude: -71.5724, featured: false, region: "Northeast" },
  { name: "New Jersey", abbreviation: "NJ", slug: "new-jersey", latitude: 40.0583, longitude: -74.4057, featured: false, region: "Northeast" },
  { name: "New Mexico", abbreviation: "NM", slug: "new-mexico", latitude: 34.5199, longitude: -105.8701, featured: false, region: "Southwest" },
  { name: "New York", abbreviation: "NY", slug: "new-york", latitude: 43.2994, longitude: -74.2179, featured: true, region: "Northeast" },
  { name: "North Carolina", abbreviation: "NC", slug: "north-carolina", latitude: 35.7596, longitude: -79.0193, featured: false, region: "Southeast" },
  { name: "North Dakota", abbreviation: "ND", slug: "north-dakota", latitude: 47.5515, longitude: -101.0020, featured: false, region: "Midwest" },
  { name: "Ohio", abbreviation: "OH", slug: "ohio", latitude: 40.4173, longitude: -82.9071, featured: false, region: "Midwest" },
  { name: "Oklahoma", abbreviation: "OK", slug: "oklahoma", latitude: 35.4676, longitude: -97.5164, featured: false, region: "Southwest" },
  { name: "Oregon", abbreviation: "OR", slug: "oregon", latitude: 43.8041, longitude: -120.5542, featured: false, region: "West" },
  { name: "Pennsylvania", abbreviation: "PA", slug: "pennsylvania", latitude: 41.2033, longitude: -77.1945, featured: false, region: "Northeast" },
  { name: "Rhode Island", abbreviation: "RI", slug: "rhode-island", latitude: 41.5801, longitude: -71.4774, featured: false, region: "Northeast" },
  { name: "South Carolina", abbreviation: "SC", slug: "south-carolina", latitude: 33.8361, longitude: -81.1637, featured: false, region: "Southeast" },
  { name: "South Dakota", abbreviation: "SD", slug: "south-dakota", latitude: 43.9695, longitude: -99.9018, featured: false, region: "Midwest" },
  { name: "Tennessee", abbreviation: "TN", slug: "tennessee", latitude: 35.5175, longitude: -86.5804, featured: false, region: "Southeast" },
  { name: "Texas", abbreviation: "TX", slug: "texas", latitude: 31.9686, longitude: -99.9018, featured: true, region: "Southwest" },
  { name: "Utah", abbreviation: "UT", slug: "utah", latitude: 39.3210, longitude: -111.0937, featured: false, region: "West" },
  { name: "Vermont", abbreviation: "VT", slug: "vermont", latitude: 44.5588, longitude: -72.5778, featured: false, region: "Northeast" },
  { name: "Virginia", abbreviation: "VA", slug: "virginia", latitude: 37.4316, longitude: -78.6569, featured: false, region: "Southeast" },
  { name: "Washington", abbreviation: "WA", slug: "washington", latitude: 47.7511, longitude: -120.7401, featured: false, region: "West" },
  { name: "West Virginia", abbreviation: "WV", slug: "west-virginia", latitude: 38.5976, longitude: -80.4549, featured: false, region: "Southeast" },
  { name: "Wisconsin", abbreviation: "WI", slug: "wisconsin", latitude: 43.7844, longitude: -88.7879, featured: false, region: "Midwest" },
  { name: "Wyoming", abbreviation: "WY", slug: "wyoming", latitude: 43.0760, longitude: -107.2903, featured: false, region: "West" },
];

export const DIRECTORY_CITIES: DirectoryCity[] = [
  // ─── Florida (24 cities) ───────────────────────────────────────────
  { name: "Miami", stateSlug: "florida", stateAbbreviation: "FL", slug: "miami", latitude: 25.7617, longitude: -80.1918, population: 442241, featured: false },
  { name: "Fort Lauderdale", stateSlug: "florida", stateAbbreviation: "FL", slug: "fort-lauderdale", latitude: 26.1224, longitude: -80.1373, population: 182760, featured: false },
  { name: "West Palm Beach", stateSlug: "florida", stateAbbreviation: "FL", slug: "west-palm-beach", latitude: 26.7153, longitude: -80.0534, population: 117415, featured: false },
  { name: "Boca Raton", stateSlug: "florida", stateAbbreviation: "FL", slug: "boca-raton", latitude: 26.3683, longitude: -80.1289, population: 99805, featured: false },
  { name: "Orlando", stateSlug: "florida", stateAbbreviation: "FL", slug: "orlando", latitude: 28.5383, longitude: -81.3792, population: 307573, featured: false },
  { name: "Tampa", stateSlug: "florida", stateAbbreviation: "FL", slug: "tampa", latitude: 27.9506, longitude: -82.4572, population: 384959, featured: false },
  { name: "St. Petersburg", stateSlug: "florida", stateAbbreviation: "FL", slug: "st-petersburg", latitude: 27.7676, longitude: -82.6403, population: 258308, featured: false },
  { name: "Jacksonville", stateSlug: "florida", stateAbbreviation: "FL", slug: "jacksonville", latitude: 30.3322, longitude: -81.6557, population: 949611, featured: true },
  { name: "Naples", stateSlug: "florida", stateAbbreviation: "FL", slug: "naples", latitude: 26.1420, longitude: -81.7948, population: 19537, featured: false },
  { name: "Sarasota", stateSlug: "florida", stateAbbreviation: "FL", slug: "sarasota", latitude: 27.3364, longitude: -82.5307, population: 57738, featured: false },
  { name: "Fort Myers", stateSlug: "florida", stateAbbreviation: "FL", slug: "fort-myers", latitude: 26.6406, longitude: -81.8723, population: 92754, featured: false },
  { name: "Cape Coral", stateSlug: "florida", stateAbbreviation: "FL", slug: "cape-coral", latitude: 26.5629, longitude: -81.9495, population: 194016, featured: false },
  { name: "Clearwater", stateSlug: "florida", stateAbbreviation: "FL", slug: "clearwater", latitude: 27.9659, longitude: -82.8001, population: 117044, featured: false },
  { name: "Tallahassee", stateSlug: "florida", stateAbbreviation: "FL", slug: "tallahassee", latitude: 30.4383, longitude: -84.2807, population: 196169, featured: false },
  { name: "Gainesville", stateSlug: "florida", stateAbbreviation: "FL", slug: "gainesville", latitude: 29.6516, longitude: -82.3248, population: 141085, featured: false },
  { name: "Lakeland", stateSlug: "florida", stateAbbreviation: "FL", slug: "lakeland", latitude: 28.0395, longitude: -81.9498, population: 112641, featured: false },
  { name: "Port St. Lucie", stateSlug: "florida", stateAbbreviation: "FL", slug: "port-st-lucie", latitude: 27.2730, longitude: -80.3582, population: 217223, featured: false },
  { name: "Pembroke Pines", stateSlug: "florida", stateAbbreviation: "FL", slug: "pembroke-pines", latitude: 26.0031, longitude: -80.2241, population: 171178, featured: false },
  { name: "Hollywood", stateSlug: "florida", stateAbbreviation: "FL", slug: "hollywood", latitude: 26.0112, longitude: -80.1495, population: 153627, featured: false },
  { name: "Hialeah", stateSlug: "florida", stateAbbreviation: "FL", slug: "hialeah", latitude: 25.8576, longitude: -80.2781, population: 223109, featured: false },
  { name: "Coral Springs", stateSlug: "florida", stateAbbreviation: "FL", slug: "coral-springs", latitude: 26.2712, longitude: -80.2706, population: 134394, featured: false },
  { name: "Pompano Beach", stateSlug: "florida", stateAbbreviation: "FL", slug: "pompano-beach", latitude: 26.2379, longitude: -80.1248, population: 112046, featured: false },
  { name: "Davie", stateSlug: "florida", stateAbbreviation: "FL", slug: "davie", latitude: 26.0765, longitude: -80.2521, population: 105691, featured: false },
  { name: "Daytona Beach", stateSlug: "florida", stateAbbreviation: "FL", slug: "daytona-beach", latitude: 29.2108, longitude: -81.0228, population: 72647, featured: false },

  // ─── California (12 cities) ────────────────────────────────────────
  { name: "Los Angeles", stateSlug: "california", stateAbbreviation: "CA", slug: "los-angeles", latitude: 34.0522, longitude: -118.2437, population: 3898747, featured: true },
  { name: "San Francisco", stateSlug: "california", stateAbbreviation: "CA", slug: "san-francisco", latitude: 37.7749, longitude: -122.4194, population: 873965, featured: false },
  { name: "San Diego", stateSlug: "california", stateAbbreviation: "CA", slug: "san-diego", latitude: 32.7157, longitude: -117.1611, population: 1386932, featured: false },
  { name: "San Jose", stateSlug: "california", stateAbbreviation: "CA", slug: "san-jose", latitude: 37.3382, longitude: -121.8863, population: 1013240, featured: false },
  { name: "Sacramento", stateSlug: "california", stateAbbreviation: "CA", slug: "sacramento", latitude: 38.5816, longitude: -121.4944, population: 524943, featured: false },
  { name: "Fresno", stateSlug: "california", stateAbbreviation: "CA", slug: "fresno", latitude: 36.7378, longitude: -119.7871, population: 542107, featured: false },
  { name: "Long Beach", stateSlug: "california", stateAbbreviation: "CA", slug: "long-beach", latitude: 33.7701, longitude: -118.1937, population: 466742, featured: false },
  { name: "Oakland", stateSlug: "california", stateAbbreviation: "CA", slug: "oakland", latitude: 37.8044, longitude: -122.2712, population: 433031, featured: false },
  { name: "Anaheim", stateSlug: "california", stateAbbreviation: "CA", slug: "anaheim", latitude: 33.8366, longitude: -117.9143, population: 350365, featured: false },
  { name: "Riverside", stateSlug: "california", stateAbbreviation: "CA", slug: "riverside", latitude: 33.9533, longitude: -117.3962, population: 314998, featured: false },
  { name: "Irvine", stateSlug: "california", stateAbbreviation: "CA", slug: "irvine", latitude: 33.6846, longitude: -117.8265, population: 307670, featured: false },
  { name: "Santa Ana", stateSlug: "california", stateAbbreviation: "CA", slug: "santa-ana", latitude: 33.7455, longitude: -117.8677, population: 310227, featured: false },

  // ─── Texas (12 cities) ─────────────────────────────────────────────
  { name: "Houston", stateSlug: "texas", stateAbbreviation: "TX", slug: "houston", latitude: 29.7604, longitude: -95.3698, population: 2304580, featured: true },
  { name: "Dallas", stateSlug: "texas", stateAbbreviation: "TX", slug: "dallas", latitude: 32.7767, longitude: -96.7970, population: 1304379, featured: false },
  { name: "San Antonio", stateSlug: "texas", stateAbbreviation: "TX", slug: "san-antonio", latitude: 29.4241, longitude: -98.4936, population: 1434625, featured: false },
  { name: "Austin", stateSlug: "texas", stateAbbreviation: "TX", slug: "austin", latitude: 30.2672, longitude: -97.7431, population: 978908, featured: false },
  { name: "Fort Worth", stateSlug: "texas", stateAbbreviation: "TX", slug: "fort-worth", latitude: 32.7555, longitude: -97.3308, population: 918915, featured: false },
  { name: "El Paso", stateSlug: "texas", stateAbbreviation: "TX", slug: "el-paso", latitude: 31.7619, longitude: -106.4850, population: 678815, featured: false },
  { name: "Arlington", stateSlug: "texas", stateAbbreviation: "TX", slug: "arlington", latitude: 32.7357, longitude: -97.1081, population: 394266, featured: false },
  { name: "Plano", stateSlug: "texas", stateAbbreviation: "TX", slug: "plano", latitude: 33.0198, longitude: -96.6989, population: 285494, featured: false },
  { name: "Corpus Christi", stateSlug: "texas", stateAbbreviation: "TX", slug: "corpus-christi", latitude: 27.8006, longitude: -97.3964, population: 317863, featured: false },
  { name: "Lubbock", stateSlug: "texas", stateAbbreviation: "TX", slug: "lubbock", latitude: 33.5779, longitude: -101.8552, population: 263648, featured: false },
  { name: "Laredo", stateSlug: "texas", stateAbbreviation: "TX", slug: "laredo", latitude: 27.5036, longitude: -99.5076, population: 255205, featured: false },
  { name: "Frisco", stateSlug: "texas", stateAbbreviation: "TX", slug: "frisco", latitude: 33.1507, longitude: -96.8236, population: 200509, featured: false },

  // ─── New York (10 cities) ──────────────────────────────────────────
  { name: "New York City", stateSlug: "new-york", stateAbbreviation: "NY", slug: "new-york-city", latitude: 40.7128, longitude: -74.0060, population: 8336817, featured: true },
  { name: "Buffalo", stateSlug: "new-york", stateAbbreviation: "NY", slug: "buffalo", latitude: 42.8864, longitude: -78.8784, population: 278349, featured: false },
  { name: "Rochester", stateSlug: "new-york", stateAbbreviation: "NY", slug: "rochester", latitude: 43.1566, longitude: -77.6088, population: 211328, featured: false },
  { name: "Yonkers", stateSlug: "new-york", stateAbbreviation: "NY", slug: "yonkers", latitude: 40.9312, longitude: -73.8988, population: 200370, featured: false },
  { name: "Syracuse", stateSlug: "new-york", stateAbbreviation: "NY", slug: "syracuse", latitude: 43.0481, longitude: -76.1474, population: 148620, featured: false },
  { name: "Albany", stateSlug: "new-york", stateAbbreviation: "NY", slug: "albany", latitude: 42.6526, longitude: -73.7562, population: 99224, featured: false },
  { name: "New Rochelle", stateSlug: "new-york", stateAbbreviation: "NY", slug: "new-rochelle", latitude: 40.9115, longitude: -73.7824, population: 79726, featured: false },
  { name: "Mount Vernon", stateSlug: "new-york", stateAbbreviation: "NY", slug: "mount-vernon", latitude: 40.9126, longitude: -73.8371, population: 73893, featured: false },
  { name: "White Plains", stateSlug: "new-york", stateAbbreviation: "NY", slug: "white-plains", latitude: 41.0340, longitude: -73.7629, population: 58588, featured: false },
  { name: "Schenectady", stateSlug: "new-york", stateAbbreviation: "NY", slug: "schenectady", latitude: 42.8142, longitude: -73.9396, population: 67878, featured: false },

  // ─── Alabama (4 cities) ────────────────────────────────────────────
  { name: "Birmingham", stateSlug: "alabama", stateAbbreviation: "AL", slug: "birmingham", latitude: 33.5186, longitude: -86.8104, population: 200733, featured: true },
  { name: "Montgomery", stateSlug: "alabama", stateAbbreviation: "AL", slug: "montgomery", latitude: 32.3792, longitude: -86.3077, population: 200603, featured: false },
  { name: "Huntsville", stateSlug: "alabama", stateAbbreviation: "AL", slug: "huntsville", latitude: 34.7304, longitude: -86.5861, population: 215006, featured: false },
  { name: "Mobile", stateSlug: "alabama", stateAbbreviation: "AL", slug: "mobile", latitude: 30.6954, longitude: -88.0399, population: 187041, featured: false },

  // ─── Alaska (3 cities) ─────────────────────────────────────────────
  { name: "Anchorage", stateSlug: "alaska", stateAbbreviation: "AK", slug: "anchorage", latitude: 61.2181, longitude: -149.9003, population: 291247, featured: true },
  { name: "Fairbanks", stateSlug: "alaska", stateAbbreviation: "AK", slug: "fairbanks", latitude: 64.8378, longitude: -147.7164, population: 32325, featured: false },
  { name: "Juneau", stateSlug: "alaska", stateAbbreviation: "AK", slug: "juneau", latitude: 58.3005, longitude: -134.4197, population: 32255, featured: false },

  // ─── Arizona (5 cities) ────────────────────────────────────────────
  { name: "Phoenix", stateSlug: "arizona", stateAbbreviation: "AZ", slug: "phoenix", latitude: 33.4484, longitude: -112.0740, population: 1608139, featured: true },
  { name: "Tucson", stateSlug: "arizona", stateAbbreviation: "AZ", slug: "tucson", latitude: 32.2226, longitude: -110.9747, population: 542629, featured: false },
  { name: "Mesa", stateSlug: "arizona", stateAbbreviation: "AZ", slug: "mesa", latitude: 33.4152, longitude: -111.8315, population: 504258, featured: false },
  { name: "Chandler", stateSlug: "arizona", stateAbbreviation: "AZ", slug: "chandler", latitude: 33.3062, longitude: -111.8413, population: 275987, featured: false },
  { name: "Scottsdale", stateSlug: "arizona", stateAbbreviation: "AZ", slug: "scottsdale", latitude: 33.4942, longitude: -111.9261, population: 241361, featured: false },

  // ─── Arkansas (4 cities) ───────────────────────────────────────────
  { name: "Little Rock", stateSlug: "arkansas", stateAbbreviation: "AR", slug: "little-rock", latitude: 34.7465, longitude: -92.2896, population: 202591, featured: true },
  { name: "Fort Smith", stateSlug: "arkansas", stateAbbreviation: "AR", slug: "fort-smith", latitude: 35.3859, longitude: -94.3985, population: 89142, featured: false },
  { name: "Fayetteville", stateSlug: "arkansas", stateAbbreviation: "AR", slug: "fayetteville", latitude: 36.0822, longitude: -94.1719, population: 93949, featured: false },
  { name: "Springdale", stateSlug: "arkansas", stateAbbreviation: "AR", slug: "springdale", latitude: 36.1867, longitude: -94.1288, population: 80433, featured: false },

  // ─── Colorado (5 cities) ───────────────────────────────────────────
  { name: "Denver", stateSlug: "colorado", stateAbbreviation: "CO", slug: "denver", latitude: 39.7392, longitude: -104.9903, population: 715522, featured: true },
  { name: "Colorado Springs", stateSlug: "colorado", stateAbbreviation: "CO", slug: "colorado-springs", latitude: 38.8339, longitude: -104.8214, population: 478961, featured: false },
  { name: "Aurora", stateSlug: "colorado", stateAbbreviation: "CO", slug: "aurora", latitude: 39.7294, longitude: -104.8319, population: 386261, featured: false },
  { name: "Fort Collins", stateSlug: "colorado", stateAbbreviation: "CO", slug: "fort-collins", latitude: 40.5853, longitude: -105.0844, population: 169810, featured: false },
  { name: "Lakewood", stateSlug: "colorado", stateAbbreviation: "CO", slug: "lakewood", latitude: 39.7047, longitude: -105.0814, population: 155984, featured: false },

  // ─── Connecticut (4 cities) ────────────────────────────────────────
  { name: "Bridgeport", stateSlug: "connecticut", stateAbbreviation: "CT", slug: "bridgeport", latitude: 41.1865, longitude: -73.1952, population: 148529, featured: true },
  { name: "New Haven", stateSlug: "connecticut", stateAbbreviation: "CT", slug: "new-haven", latitude: 41.3083, longitude: -72.9279, population: 134023, featured: false },
  { name: "Stamford", stateSlug: "connecticut", stateAbbreviation: "CT", slug: "stamford", latitude: 41.0534, longitude: -73.5387, population: 135470, featured: false },
  { name: "Hartford", stateSlug: "connecticut", stateAbbreviation: "CT", slug: "hartford", latitude: 41.7658, longitude: -72.6734, population: 121054, featured: false },

  // ─── Delaware (3 cities) ───────────────────────────────────────────
  { name: "Wilmington", stateSlug: "delaware", stateAbbreviation: "DE", slug: "wilmington", latitude: 39.7391, longitude: -75.5398, population: 70898, featured: true },
  { name: "Dover", stateSlug: "delaware", stateAbbreviation: "DE", slug: "dover", latitude: 39.1582, longitude: -75.5244, population: 39403, featured: false },
  { name: "Newark", stateSlug: "delaware", stateAbbreviation: "DE", slug: "newark", latitude: 39.6837, longitude: -75.7497, population: 33042, featured: false },

  // ─── District of Columbia (1 city) ─────────────────────────────────
  { name: "Washington", stateSlug: "district-of-columbia", stateAbbreviation: "DC", slug: "washington", latitude: 38.9072, longitude: -77.0369, population: 689545, featured: true },

  // ─── Georgia (5 cities) ────────────────────────────────────────────
  { name: "Atlanta", stateSlug: "georgia", stateAbbreviation: "GA", slug: "atlanta", latitude: 33.7490, longitude: -84.3880, population: 498715, featured: true },
  { name: "Augusta", stateSlug: "georgia", stateAbbreviation: "GA", slug: "augusta", latitude: 33.4735, longitude: -81.9748, population: 202081, featured: false },
  { name: "Columbus", stateSlug: "georgia", stateAbbreviation: "GA", slug: "columbus", latitude: 32.4610, longitude: -84.9877, population: 206922, featured: false },
  { name: "Savannah", stateSlug: "georgia", stateAbbreviation: "GA", slug: "savannah", latitude: 32.0809, longitude: -81.0912, population: 147780, featured: false },
  { name: "Athens", stateSlug: "georgia", stateAbbreviation: "GA", slug: "athens", latitude: 33.9519, longitude: -83.3576, population: 127064, featured: false },

  // ─── Hawaii (3 cities) ─────────────────────────────────────────────
  { name: "Honolulu", stateSlug: "hawaii", stateAbbreviation: "HI", slug: "honolulu", latitude: 21.3069, longitude: -157.8583, population: 350964, featured: true },
  { name: "Pearl City", stateSlug: "hawaii", stateAbbreviation: "HI", slug: "pearl-city", latitude: 21.3972, longitude: -157.9751, population: 47698, featured: false },
  { name: "Hilo", stateSlug: "hawaii", stateAbbreviation: "HI", slug: "hilo", latitude: 19.7241, longitude: -155.0868, population: 45703, featured: false },

  // ─── Idaho (3 cities) ──────────────────────────────────────────────
  { name: "Boise", stateSlug: "idaho", stateAbbreviation: "ID", slug: "boise", latitude: 43.6150, longitude: -116.2023, population: 235684, featured: true },
  { name: "Meridian", stateSlug: "idaho", stateAbbreviation: "ID", slug: "meridian", latitude: 43.6121, longitude: -116.3915, population: 117635, featured: false },
  { name: "Nampa", stateSlug: "idaho", stateAbbreviation: "ID", slug: "nampa", latitude: 43.5407, longitude: -116.5635, population: 100200, featured: false },

  // ─── Illinois (5 cities) ───────────────────────────────────────────
  { name: "Chicago", stateSlug: "illinois", stateAbbreviation: "IL", slug: "chicago", latitude: 41.8781, longitude: -87.6298, population: 2693976, featured: true },
  { name: "Aurora", stateSlug: "illinois", stateAbbreviation: "IL", slug: "aurora", latitude: 41.7606, longitude: -88.3201, population: 180542, featured: false },
  { name: "Rockford", stateSlug: "illinois", stateAbbreviation: "IL", slug: "rockford", latitude: 42.2711, longitude: -89.0940, population: 148655, featured: false },
  { name: "Joliet", stateSlug: "illinois", stateAbbreviation: "IL", slug: "joliet", latitude: 41.5250, longitude: -88.0817, population: 150362, featured: false },
  { name: "Naperville", stateSlug: "illinois", stateAbbreviation: "IL", slug: "naperville", latitude: 41.7508, longitude: -88.1535, population: 149540, featured: false },

  // ─── Indiana (5 cities) ────────────────────────────────────────────
  { name: "Indianapolis", stateSlug: "indiana", stateAbbreviation: "IN", slug: "indianapolis", latitude: 39.7684, longitude: -86.1581, population: 887642, featured: true },
  { name: "Fort Wayne", stateSlug: "indiana", stateAbbreviation: "IN", slug: "fort-wayne", latitude: 41.0793, longitude: -85.1394, population: 263886, featured: false },
  { name: "Evansville", stateSlug: "indiana", stateAbbreviation: "IN", slug: "evansville", latitude: 37.9716, longitude: -87.5711, population: 117429, featured: false },
  { name: "South Bend", stateSlug: "indiana", stateAbbreviation: "IN", slug: "south-bend", latitude: 41.6764, longitude: -86.2520, population: 103453, featured: false },
  { name: "Carmel", stateSlug: "indiana", stateAbbreviation: "IN", slug: "carmel", latitude: 39.9784, longitude: -86.1180, population: 99757, featured: false },

  // ─── Iowa (4 cities) ───────────────────────────────────────────────
  { name: "Des Moines", stateSlug: "iowa", stateAbbreviation: "IA", slug: "des-moines", latitude: 41.5868, longitude: -93.6250, population: 214237, featured: true },
  { name: "Cedar Rapids", stateSlug: "iowa", stateAbbreviation: "IA", slug: "cedar-rapids", latitude: 41.9779, longitude: -91.6656, population: 137710, featured: false },
  { name: "Davenport", stateSlug: "iowa", stateAbbreviation: "IA", slug: "davenport", latitude: 41.5236, longitude: -90.5776, population: 101724, featured: false },
  { name: "Sioux City", stateSlug: "iowa", stateAbbreviation: "IA", slug: "sioux-city", latitude: 42.4963, longitude: -96.4049, population: 85797, featured: false },

  // ─── Kansas (4 cities) ─────────────────────────────────────────────
  { name: "Wichita", stateSlug: "kansas", stateAbbreviation: "KS", slug: "wichita", latitude: 37.6872, longitude: -97.3301, population: 397532, featured: true },
  { name: "Overland Park", stateSlug: "kansas", stateAbbreviation: "KS", slug: "overland-park", latitude: 38.9822, longitude: -94.6708, population: 197238, featured: false },
  { name: "Kansas City", stateSlug: "kansas", stateAbbreviation: "KS", slug: "kansas-city", latitude: 39.1141, longitude: -94.6275, population: 156607, featured: false },
  { name: "Olathe", stateSlug: "kansas", stateAbbreviation: "KS", slug: "olathe", latitude: 38.8814, longitude: -94.8191, population: 141290, featured: false },

  // ─── Kentucky (4 cities) ───────────────────────────────────────────
  { name: "Louisville", stateSlug: "kentucky", stateAbbreviation: "KY", slug: "louisville", latitude: 38.2527, longitude: -85.7585, population: 633045, featured: true },
  { name: "Lexington", stateSlug: "kentucky", stateAbbreviation: "KY", slug: "lexington", latitude: 38.0406, longitude: -84.5037, population: 322570, featured: false },
  { name: "Bowling Green", stateSlug: "kentucky", stateAbbreviation: "KY", slug: "bowling-green", latitude: 36.9685, longitude: -86.4808, population: 74735, featured: false },
  { name: "Owensboro", stateSlug: "kentucky", stateAbbreviation: "KY", slug: "owensboro", latitude: 37.7719, longitude: -87.1112, population: 60183, featured: false },

  // ─── Louisiana (4 cities) ──────────────────────────────────────────
  { name: "New Orleans", stateSlug: "louisiana", stateAbbreviation: "LA", slug: "new-orleans", latitude: 29.9511, longitude: -90.0715, population: 383997, featured: true },
  { name: "Baton Rouge", stateSlug: "louisiana", stateAbbreviation: "LA", slug: "baton-rouge", latitude: 30.4515, longitude: -91.1871, population: 227470, featured: false },
  { name: "Shreveport", stateSlug: "louisiana", stateAbbreviation: "LA", slug: "shreveport", latitude: 32.5252, longitude: -93.7502, population: 187593, featured: false },
  { name: "Lafayette", stateSlug: "louisiana", stateAbbreviation: "LA", slug: "lafayette", latitude: 30.2241, longitude: -92.0198, population: 121374, featured: false },

  // ─── Maine (3 cities) ──────────────────────────────────────────────
  { name: "Portland", stateSlug: "maine", stateAbbreviation: "ME", slug: "portland", latitude: 43.6591, longitude: -70.2568, population: 68408, featured: true },
  { name: "Lewiston", stateSlug: "maine", stateAbbreviation: "ME", slug: "lewiston", latitude: 44.1004, longitude: -70.2148, population: 37121, featured: false },
  { name: "Bangor", stateSlug: "maine", stateAbbreviation: "ME", slug: "bangor", latitude: 44.8016, longitude: -68.7712, population: 32029, featured: false },

  // ─── Maryland (4 cities) ───────────────────────────────────────────
  { name: "Baltimore", stateSlug: "maryland", stateAbbreviation: "MD", slug: "baltimore", latitude: 39.2904, longitude: -76.6122, population: 585708, featured: true },
  { name: "Frederick", stateSlug: "maryland", stateAbbreviation: "MD", slug: "frederick", latitude: 39.4143, longitude: -77.4105, population: 78171, featured: false },
  { name: "Rockville", stateSlug: "maryland", stateAbbreviation: "MD", slug: "rockville", latitude: 39.0840, longitude: -77.1528, population: 68401, featured: false },
  { name: "Gaithersburg", stateSlug: "maryland", stateAbbreviation: "MD", slug: "gaithersburg", latitude: 39.1434, longitude: -77.2014, population: 67417, featured: false },

  // ─── Massachusetts (5 cities) ──────────────────────────────────────
  { name: "Boston", stateSlug: "massachusetts", stateAbbreviation: "MA", slug: "boston", latitude: 42.3601, longitude: -71.0589, population: 675647, featured: true },
  { name: "Worcester", stateSlug: "massachusetts", stateAbbreviation: "MA", slug: "worcester", latitude: 42.2626, longitude: -71.8023, population: 206518, featured: false },
  { name: "Springfield", stateSlug: "massachusetts", stateAbbreviation: "MA", slug: "springfield", latitude: 42.1015, longitude: -72.5898, population: 155929, featured: false },
  { name: "Cambridge", stateSlug: "massachusetts", stateAbbreviation: "MA", slug: "cambridge", latitude: 42.3736, longitude: -71.1097, population: 118403, featured: false },
  { name: "Lowell", stateSlug: "massachusetts", stateAbbreviation: "MA", slug: "lowell", latitude: 42.6334, longitude: -71.3162, population: 115554, featured: false },

  // ─── Michigan (5 cities) ───────────────────────────────────────────
  { name: "Detroit", stateSlug: "michigan", stateAbbreviation: "MI", slug: "detroit", latitude: 42.3314, longitude: -83.0458, population: 639111, featured: true },
  { name: "Grand Rapids", stateSlug: "michigan", stateAbbreviation: "MI", slug: "grand-rapids", latitude: 42.9634, longitude: -85.6681, population: 198917, featured: false },
  { name: "Warren", stateSlug: "michigan", stateAbbreviation: "MI", slug: "warren", latitude: 42.5145, longitude: -83.0147, population: 139387, featured: false },
  { name: "Sterling Heights", stateSlug: "michigan", stateAbbreviation: "MI", slug: "sterling-heights", latitude: 42.5803, longitude: -83.0302, population: 134346, featured: false },
  { name: "Ann Arbor", stateSlug: "michigan", stateAbbreviation: "MI", slug: "ann-arbor", latitude: 42.2808, longitude: -83.7430, population: 123851, featured: false },

  // ─── Minnesota (4 cities) ──────────────────────────────────────────
  { name: "Minneapolis", stateSlug: "minnesota", stateAbbreviation: "MN", slug: "minneapolis", latitude: 44.9778, longitude: -93.2650, population: 429954, featured: true },
  { name: "Saint Paul", stateSlug: "minnesota", stateAbbreviation: "MN", slug: "saint-paul", latitude: 44.9537, longitude: -93.0900, population: 311527, featured: false },
  { name: "Rochester", stateSlug: "minnesota", stateAbbreviation: "MN", slug: "rochester", latitude: 44.0121, longitude: -92.4802, population: 121395, featured: false },
  { name: "Duluth", stateSlug: "minnesota", stateAbbreviation: "MN", slug: "duluth", latitude: 46.7867, longitude: -92.1005, population: 90936, featured: false },

  // ─── Mississippi (3 cities) ────────────────────────────────────────
  { name: "Jackson", stateSlug: "mississippi", stateAbbreviation: "MS", slug: "jackson", latitude: 32.2988, longitude: -90.1848, population: 153701, featured: true },
  { name: "Gulfport", stateSlug: "mississippi", stateAbbreviation: "MS", slug: "gulfport", latitude: 30.3674, longitude: -89.0928, population: 72926, featured: false },
  { name: "Southaven", stateSlug: "mississippi", stateAbbreviation: "MS", slug: "southaven", latitude: 34.9889, longitude: -90.0126, population: 55026, featured: false },

  // ─── Missouri (4 cities) ───────────────────────────────────────────
  { name: "Kansas City", stateSlug: "missouri", stateAbbreviation: "MO", slug: "kansas-city", latitude: 39.0997, longitude: -94.5786, population: 508090, featured: true },
  { name: "St. Louis", stateSlug: "missouri", stateAbbreviation: "MO", slug: "st-louis", latitude: 38.6270, longitude: -90.1994, population: 301578, featured: false },
  { name: "Springfield", stateSlug: "missouri", stateAbbreviation: "MO", slug: "springfield", latitude: 37.2090, longitude: -93.2923, population: 169176, featured: false },
  { name: "Columbia", stateSlug: "missouri", stateAbbreviation: "MO", slug: "columbia", latitude: 38.9517, longitude: -92.3341, population: 126254, featured: false },

  // ─── Montana (3 cities) ────────────────────────────────────────────
  { name: "Billings", stateSlug: "montana", stateAbbreviation: "MT", slug: "billings", latitude: 45.7833, longitude: -108.5007, population: 119035, featured: true },
  { name: "Missoula", stateSlug: "montana", stateAbbreviation: "MT", slug: "missoula", latitude: 46.8721, longitude: -113.9940, population: 75516, featured: false },
  { name: "Great Falls", stateSlug: "montana", stateAbbreviation: "MT", slug: "great-falls", latitude: 47.5002, longitude: -111.3008, population: 60442, featured: false },

  // ─── Nebraska (3 cities) ───────────────────────────────────────────
  { name: "Omaha", stateSlug: "nebraska", stateAbbreviation: "NE", slug: "omaha", latitude: 41.2565, longitude: -95.9345, population: 486051, featured: true },
  { name: "Lincoln", stateSlug: "nebraska", stateAbbreviation: "NE", slug: "lincoln", latitude: 40.8136, longitude: -96.7026, population: 291082, featured: false },
  { name: "Bellevue", stateSlug: "nebraska", stateAbbreviation: "NE", slug: "bellevue", latitude: 41.1544, longitude: -95.8908, population: 64176, featured: false },

  // ─── Nevada (3 cities) ─────────────────────────────────────────────
  { name: "Las Vegas", stateSlug: "nevada", stateAbbreviation: "NV", slug: "las-vegas", latitude: 36.1699, longitude: -115.1398, population: 641903, featured: true },
  { name: "Henderson", stateSlug: "nevada", stateAbbreviation: "NV", slug: "henderson", latitude: 36.0395, longitude: -114.9817, population: 320189, featured: false },
  { name: "Reno", stateSlug: "nevada", stateAbbreviation: "NV", slug: "reno", latitude: 39.5296, longitude: -119.8138, population: 264165, featured: false },

  // ─── New Hampshire (3 cities) ──────────────────────────────────────
  { name: "Manchester", stateSlug: "new-hampshire", stateAbbreviation: "NH", slug: "manchester", latitude: 42.9956, longitude: -71.4548, population: 115644, featured: true },
  { name: "Nashua", stateSlug: "new-hampshire", stateAbbreviation: "NH", slug: "nashua", latitude: 42.7654, longitude: -71.4676, population: 91322, featured: false },
  { name: "Concord", stateSlug: "new-hampshire", stateAbbreviation: "NH", slug: "concord", latitude: 43.2081, longitude: -71.5376, population: 43976, featured: false },

  // ─── New Jersey (5 cities) ─────────────────────────────────────────
  { name: "Newark", stateSlug: "new-jersey", stateAbbreviation: "NJ", slug: "newark", latitude: 40.7357, longitude: -74.1724, population: 311549, featured: true },
  { name: "Jersey City", stateSlug: "new-jersey", stateAbbreviation: "NJ", slug: "jersey-city", latitude: 40.7178, longitude: -74.0431, population: 292449, featured: false },
  { name: "Paterson", stateSlug: "new-jersey", stateAbbreviation: "NJ", slug: "paterson", latitude: 40.9168, longitude: -74.1718, population: 159732, featured: false },
  { name: "Elizabeth", stateSlug: "new-jersey", stateAbbreviation: "NJ", slug: "elizabeth", latitude: 40.6640, longitude: -74.2107, population: 137298, featured: false },
  { name: "Trenton", stateSlug: "new-jersey", stateAbbreviation: "NJ", slug: "trenton", latitude: 40.2171, longitude: -74.7429, population: 90871, featured: false },

  // ─── New Mexico (3 cities) ─────────────────────────────────────────
  { name: "Albuquerque", stateSlug: "new-mexico", stateAbbreviation: "NM", slug: "albuquerque", latitude: 35.0844, longitude: -106.6504, population: 564559, featured: true },
  { name: "Las Cruces", stateSlug: "new-mexico", stateAbbreviation: "NM", slug: "las-cruces", latitude: 32.3199, longitude: -106.7637, population: 111385, featured: false },
  { name: "Santa Fe", stateSlug: "new-mexico", stateAbbreviation: "NM", slug: "santa-fe", latitude: 35.6870, longitude: -105.9378, population: 87505, featured: false },

  // ─── North Carolina (5 cities) ─────────────────────────────────────
  { name: "Charlotte", stateSlug: "north-carolina", stateAbbreviation: "NC", slug: "charlotte", latitude: 35.2271, longitude: -80.8431, population: 874579, featured: true },
  { name: "Raleigh", stateSlug: "north-carolina", stateAbbreviation: "NC", slug: "raleigh", latitude: 35.7796, longitude: -78.6382, population: 467665, featured: false },
  { name: "Greensboro", stateSlug: "north-carolina", stateAbbreviation: "NC", slug: "greensboro", latitude: 36.0726, longitude: -79.7920, population: 299035, featured: false },
  { name: "Durham", stateSlug: "north-carolina", stateAbbreviation: "NC", slug: "durham", latitude: 35.9940, longitude: -78.8986, population: 283506, featured: false },
  { name: "Winston-Salem", stateSlug: "north-carolina", stateAbbreviation: "NC", slug: "winston-salem", latitude: 36.0999, longitude: -80.2442, population: 249545, featured: false },

  // ─── North Dakota (3 cities) ───────────────────────────────────────
  { name: "Fargo", stateSlug: "north-dakota", stateAbbreviation: "ND", slug: "fargo", latitude: 46.8772, longitude: -96.7898, population: 125990, featured: true },
  { name: "Bismarck", stateSlug: "north-dakota", stateAbbreviation: "ND", slug: "bismarck", latitude: 46.8083, longitude: -100.7837, population: 73529, featured: false },
  { name: "Grand Forks", stateSlug: "north-dakota", stateAbbreviation: "ND", slug: "grand-forks", latitude: 47.9253, longitude: -97.0329, population: 56588, featured: false },

  // ─── Ohio (5 cities) ───────────────────────────────────────────────
  { name: "Columbus", stateSlug: "ohio", stateAbbreviation: "OH", slug: "columbus", latitude: 39.9612, longitude: -82.9988, population: 905748, featured: true },
  { name: "Cleveland", stateSlug: "ohio", stateAbbreviation: "OH", slug: "cleveland", latitude: 41.4993, longitude: -81.6944, population: 372624, featured: false },
  { name: "Cincinnati", stateSlug: "ohio", stateAbbreviation: "OH", slug: "cincinnati", latitude: 39.1031, longitude: -84.5120, population: 309317, featured: false },
  { name: "Toledo", stateSlug: "ohio", stateAbbreviation: "OH", slug: "toledo", latitude: 41.6528, longitude: -83.5379, population: 270871, featured: false },
  { name: "Akron", stateSlug: "ohio", stateAbbreviation: "OH", slug: "akron", latitude: 41.0814, longitude: -81.5190, population: 190469, featured: false },

  // ─── Oklahoma (4 cities) ───────────────────────────────────────────
  { name: "Oklahoma City", stateSlug: "oklahoma", stateAbbreviation: "OK", slug: "oklahoma-city", latitude: 35.4676, longitude: -97.5164, population: 681054, featured: true },
  { name: "Tulsa", stateSlug: "oklahoma", stateAbbreviation: "OK", slug: "tulsa", latitude: 36.1540, longitude: -95.9928, population: 413066, featured: false },
  { name: "Norman", stateSlug: "oklahoma", stateAbbreviation: "OK", slug: "norman", latitude: 35.2226, longitude: -97.4395, population: 128026, featured: false },
  { name: "Broken Arrow", stateSlug: "oklahoma", stateAbbreviation: "OK", slug: "broken-arrow", latitude: 36.0609, longitude: -95.7975, population: 113540, featured: false },

  // ─── Oregon (4 cities) ─────────────────────────────────────────────
  { name: "Portland", stateSlug: "oregon", stateAbbreviation: "OR", slug: "portland", latitude: 45.5152, longitude: -122.6784, population: 652503, featured: true },
  { name: "Salem", stateSlug: "oregon", stateAbbreviation: "OR", slug: "salem", latitude: 44.9429, longitude: -123.0351, population: 175535, featured: false },
  { name: "Eugene", stateSlug: "oregon", stateAbbreviation: "OR", slug: "eugene", latitude: 44.0521, longitude: -123.0868, population: 176654, featured: false },
  { name: "Bend", stateSlug: "oregon", stateAbbreviation: "OR", slug: "bend", latitude: 44.0582, longitude: -121.3153, population: 102059, featured: false },

  // ─── Pennsylvania (5 cities) ───────────────────────────────────────
  { name: "Philadelphia", stateSlug: "pennsylvania", stateAbbreviation: "PA", slug: "philadelphia", latitude: 39.9526, longitude: -75.1652, population: 1603797, featured: true },
  { name: "Pittsburgh", stateSlug: "pennsylvania", stateAbbreviation: "PA", slug: "pittsburgh", latitude: 40.4406, longitude: -79.9959, population: 302971, featured: false },
  { name: "Allentown", stateSlug: "pennsylvania", stateAbbreviation: "PA", slug: "allentown", latitude: 40.6084, longitude: -75.4902, population: 126092, featured: false },
  { name: "Erie", stateSlug: "pennsylvania", stateAbbreviation: "PA", slug: "erie", latitude: 42.1292, longitude: -80.0851, population: 94831, featured: false },
  { name: "Reading", stateSlug: "pennsylvania", stateAbbreviation: "PA", slug: "reading", latitude: 40.3357, longitude: -75.9269, population: 95112, featured: false },

  // ─── Rhode Island (3 cities) ───────────────────────────────────────
  { name: "Providence", stateSlug: "rhode-island", stateAbbreviation: "RI", slug: "providence", latitude: 41.8240, longitude: -71.4128, population: 190934, featured: true },
  { name: "Warwick", stateSlug: "rhode-island", stateAbbreviation: "RI", slug: "warwick", latitude: 41.7001, longitude: -71.4162, population: 82823, featured: false },
  { name: "Cranston", stateSlug: "rhode-island", stateAbbreviation: "RI", slug: "cranston", latitude: 41.7798, longitude: -71.4373, population: 82934, featured: false },

  // ─── South Carolina (4 cities) ─────────────────────────────────────
  { name: "Charleston", stateSlug: "south-carolina", stateAbbreviation: "SC", slug: "charleston", latitude: 32.7765, longitude: -79.9311, population: 150227, featured: true },
  { name: "Columbia", stateSlug: "south-carolina", stateAbbreviation: "SC", slug: "columbia", latitude: 34.0007, longitude: -81.0348, population: 136632, featured: false },
  { name: "North Charleston", stateSlug: "south-carolina", stateAbbreviation: "SC", slug: "north-charleston", latitude: 32.8546, longitude: -79.9748, population: 115382, featured: false },
  { name: "Greenville", stateSlug: "south-carolina", stateAbbreviation: "SC", slug: "greenville", latitude: 34.8526, longitude: -82.3940, population: 72095, featured: false },

  // ─── South Dakota (3 cities) ───────────────────────────────────────
  { name: "Sioux Falls", stateSlug: "south-dakota", stateAbbreviation: "SD", slug: "sioux-falls", latitude: 43.5446, longitude: -96.7311, population: 192517, featured: true },
  { name: "Rapid City", stateSlug: "south-dakota", stateAbbreviation: "SD", slug: "rapid-city", latitude: 44.0805, longitude: -103.2310, population: 77503, featured: false },
  { name: "Aberdeen", stateSlug: "south-dakota", stateAbbreviation: "SD", slug: "aberdeen", latitude: 45.4647, longitude: -98.4865, population: 28324, featured: false },

  // ─── Tennessee (5 cities) ──────────────────────────────────────────
  { name: "Nashville", stateSlug: "tennessee", stateAbbreviation: "TN", slug: "nashville", latitude: 36.1627, longitude: -86.7816, population: 689447, featured: true },
  { name: "Memphis", stateSlug: "tennessee", stateAbbreviation: "TN", slug: "memphis", latitude: 35.1495, longitude: -90.0490, population: 633104, featured: false },
  { name: "Knoxville", stateSlug: "tennessee", stateAbbreviation: "TN", slug: "knoxville", latitude: 35.9606, longitude: -83.9207, population: 190740, featured: false },
  { name: "Chattanooga", stateSlug: "tennessee", stateAbbreviation: "TN", slug: "chattanooga", latitude: 35.0456, longitude: -85.3097, population: 181099, featured: false },
  { name: "Clarksville", stateSlug: "tennessee", stateAbbreviation: "TN", slug: "clarksville", latitude: 36.5298, longitude: -87.3595, population: 166722, featured: false },

  // ─── Utah (4 cities) ───────────────────────────────────────────────
  { name: "Salt Lake City", stateSlug: "utah", stateAbbreviation: "UT", slug: "salt-lake-city", latitude: 40.7608, longitude: -111.8910, population: 199723, featured: true },
  { name: "West Valley City", stateSlug: "utah", stateAbbreviation: "UT", slug: "west-valley-city", latitude: 40.6916, longitude: -112.0011, population: 140230, featured: false },
  { name: "Provo", stateSlug: "utah", stateAbbreviation: "UT", slug: "provo", latitude: 40.2338, longitude: -111.6585, population: 115162, featured: false },
  { name: "West Jordan", stateSlug: "utah", stateAbbreviation: "UT", slug: "west-jordan", latitude: 40.6097, longitude: -111.9391, population: 116961, featured: false },

  // ─── Vermont (3 cities) ────────────────────────────────────────────
  { name: "Burlington", stateSlug: "vermont", stateAbbreviation: "VT", slug: "burlington", latitude: 44.4759, longitude: -73.2121, population: 44743, featured: true },
  { name: "South Burlington", stateSlug: "vermont", stateAbbreviation: "VT", slug: "south-burlington", latitude: 44.4669, longitude: -73.1710, population: 20292, featured: false },
  { name: "Rutland", stateSlug: "vermont", stateAbbreviation: "VT", slug: "rutland", latitude: 43.6106, longitude: -72.9726, population: 15807, featured: false },

  // ─── Virginia (5 cities) ───────────────────────────────────────────
  { name: "Virginia Beach", stateSlug: "virginia", stateAbbreviation: "VA", slug: "virginia-beach", latitude: 36.8529, longitude: -75.9780, population: 459470, featured: true },
  { name: "Norfolk", stateSlug: "virginia", stateAbbreviation: "VA", slug: "norfolk", latitude: 36.8508, longitude: -76.2859, population: 238005, featured: false },
  { name: "Chesapeake", stateSlug: "virginia", stateAbbreviation: "VA", slug: "chesapeake", latitude: 36.7682, longitude: -76.2875, population: 249422, featured: false },
  { name: "Richmond", stateSlug: "virginia", stateAbbreviation: "VA", slug: "richmond", latitude: 37.5407, longitude: -77.4360, population: 226610, featured: false },
  { name: "Arlington", stateSlug: "virginia", stateAbbreviation: "VA", slug: "arlington", latitude: 38.8799, longitude: -77.1068, population: 238643, featured: false },

  // ─── Washington (5 cities) ─────────────────────────────────────────
  { name: "Seattle", stateSlug: "washington", stateAbbreviation: "WA", slug: "seattle", latitude: 47.6062, longitude: -122.3321, population: 737015, featured: true },
  { name: "Spokane", stateSlug: "washington", stateAbbreviation: "WA", slug: "spokane", latitude: 47.6588, longitude: -117.4260, population: 228989, featured: false },
  { name: "Tacoma", stateSlug: "washington", stateAbbreviation: "WA", slug: "tacoma", latitude: 47.2529, longitude: -122.4443, population: 219346, featured: false },
  { name: "Vancouver", stateSlug: "washington", stateAbbreviation: "WA", slug: "vancouver", latitude: 45.6387, longitude: -122.6615, population: 190915, featured: false },
  { name: "Bellevue", stateSlug: "washington", stateAbbreviation: "WA", slug: "bellevue", latitude: 47.6101, longitude: -122.2015, population: 151854, featured: false },

  // ─── West Virginia (3 cities) ──────────────────────────────────────
  { name: "Charleston", stateSlug: "west-virginia", stateAbbreviation: "WV", slug: "charleston", latitude: 38.3498, longitude: -81.6326, population: 48006, featured: true },
  { name: "Huntington", stateSlug: "west-virginia", stateAbbreviation: "WV", slug: "huntington", latitude: 38.4192, longitude: -82.4452, population: 46842, featured: false },
  { name: "Morgantown", stateSlug: "west-virginia", stateAbbreviation: "WV", slug: "morgantown", latitude: 39.6295, longitude: -79.9559, population: 30955, featured: false },

  // ─── Wisconsin (4 cities) ──────────────────────────────────────────
  { name: "Milwaukee", stateSlug: "wisconsin", stateAbbreviation: "WI", slug: "milwaukee", latitude: 43.0389, longitude: -87.9065, population: 577222, featured: true },
  { name: "Madison", stateSlug: "wisconsin", stateAbbreviation: "WI", slug: "madison", latitude: 43.0731, longitude: -89.4012, population: 269840, featured: false },
  { name: "Green Bay", stateSlug: "wisconsin", stateAbbreviation: "WI", slug: "green-bay", latitude: 44.5133, longitude: -88.0133, population: 107395, featured: false },
  { name: "Kenosha", stateSlug: "wisconsin", stateAbbreviation: "WI", slug: "kenosha", latitude: 42.5847, longitude: -87.8212, population: 99889, featured: false },

  // ─── Wyoming (3 cities) ────────────────────────────────────────────
  { name: "Cheyenne", stateSlug: "wyoming", stateAbbreviation: "WY", slug: "cheyenne", latitude: 41.1400, longitude: -104.8202, population: 65132, featured: true },
  { name: "Casper", stateSlug: "wyoming", stateAbbreviation: "WY", slug: "casper", latitude: 42.8501, longitude: -106.3252, population: 58610, featured: false },
  { name: "Laramie", stateSlug: "wyoming", stateAbbreviation: "WY", slug: "laramie", latitude: 41.3114, longitude: -105.5911, population: 32158, featured: false },
];

// ─── Helper Functions ────────────────────────────────────────────────

export function getAllStates(): DirectoryState[] {
  return DIRECTORY_STATES;
}

export function getFeaturedStates(): DirectoryState[] {
  return DIRECTORY_STATES.filter((s) => s.featured);
}

export function getStateBySlug(slug: string): DirectoryState | undefined {
  return DIRECTORY_STATES.find((s) => s.slug === slug);
}

export function getCitiesByState(stateSlug: string): DirectoryCity[] {
  return DIRECTORY_CITIES.filter((c) => c.stateSlug === stateSlug).sort(
    (a, b) => b.population - a.population
  );
}

export function getCityBySlug(
  stateSlug: string,
  citySlug: string
): DirectoryCity | undefined {
  return DIRECTORY_CITIES.find(
    (c) => c.stateSlug === stateSlug && c.slug === citySlug
  );
}

export function getStatesByRegion(region: string): DirectoryState[] {
  return DIRECTORY_STATES.filter((s) => s.region === region);
}

export function getStateUrl(stateSlug: string): string {
  return `/directory/${stateSlug}`;
}

export function getCityUrl(stateSlug: string, citySlug: string): string {
  return `/directory/${stateSlug}/${citySlug}`;
}

export function getNearbyStates(stateSlug: string): DirectoryState[] {
  const state = getStateBySlug(stateSlug);
  if (!state) return [];
  return DIRECTORY_STATES.filter(
    (s) => s.region === state.region && s.slug !== stateSlug
  );
}

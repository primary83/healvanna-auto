interface CityServiceContent {
  intro: string;
  tip: string;
}

// City + service specific content for SEO-unique landing pages
const CITY_SERVICE_CONTENT: Record<string, Record<string, CityServiceContent>> = {
  "new-york-ny": {
    default: {
      intro: "New York City's dense urban environment and harsh winters make quality auto care essential. From Manhattan's tight parking to Brooklyn's bustling streets, your vehicle faces unique challenges.",
      tip: "NYC tip: Look for providers that offer indoor facilities — street-side work in the city can mean dust and debris compromise results.",
    },
    "car-detailing": {
      intro: "NYC's road salt, construction dust, and tight parking garages are tough on paint. Professional detailing in New York is essential for preserving your vehicle's finish in one of America's most demanding driving environments.",
      tip: "NYC tip: Mobile detailing services are popular here since parking at a shop can be difficult. Many top detailers will come to your garage.",
    },
    "car-wrapping": {
      intro: "From Times Square billboards to Brooklyn's creative scene, NYC is a hub for custom vehicle wraps. Whether you want a head-turning color change or commercial fleet branding, New York has top-tier wrap shops.",
      tip: "NYC tip: Indoor wrap facilities are crucial — temperature and dust control matter for a flawless wrap installation.",
    },
  },
  "los-angeles-ca": {
    default: {
      intro: "LA's year-round sunshine and car culture make it the ultimate destination for automotive services. From Beverly Hills exotics to Malibu cruisers, Los Angeles takes car care seriously.",
      tip: "LA tip: UV exposure is your paint's biggest enemy here. Look for providers offering ceramic coating or PPF for long-term sun protection.",
    },
    "car-detailing": {
      intro: "In a city where your car is your identity, LA's detailing scene is second to none. Hollywood's finest trust local specialists for paint correction, ceramic coating, and show-quality finishes.",
      tip: "LA tip: The constant sun means your car needs UV protection. Ask about ceramic coatings with UV-blocking properties.",
    },
    "car-wrapping": {
      intro: "Los Angeles is the epicenter of custom car culture. From Sunset Boulevard to car meets in the Valley, a quality wrap makes your vehicle stand out in a city where everyone notices rides.",
      tip: "LA tip: Matte and satin finishes are trending in LA. Ask your wrap shop about XPEL Stealth or 3M Satin wraps.",
    },
  },
  "chicago-il": {
    default: {
      intro: "Chicago's brutal winters and road salt create serious challenges for vehicle maintenance. Quality auto care in the Windy City isn't just about looks — it's about protecting your investment from corrosion.",
      tip: "Chicago tip: Road salt damage is a major concern. Consider paint protection film or ceramic coating before each winter season.",
    },
  },
  "miami-fl": {
    default: {
      intro: "Miami's tropical climate brings intense UV, salt air, and afternoon rain — all enemies of your vehicle's finish. Quality auto care in South Florida is essential for combating the elements year-round.",
      tip: "Miami tip: Salt air accelerates oxidation. Regular detailing with a quality sealant helps protect against coastal corrosion.",
    },
    "car-wrapping": {
      intro: "Miami's vibrant culture and luxury car scene make it one of the top cities for custom wraps. From South Beach supercars to Brickell business fleets, Miami wrap shops handle exotic and luxury vehicles daily.",
      tip: "Miami tip: Choose wraps with UV-resistant laminates. Florida's intense sun can shorten wrap life without proper UV protection.",
    },
  },
  "houston-tx": {
    default: {
      intro: "Houston's extreme heat, humidity, and highway driving put vehicles through their paces. Trusted auto care providers in Space City help protect your car from Texas-sized weather challenges.",
      tip: "Houston tip: Summer heat can damage paint and interiors. Ceramic coating and UV-protective window tinting are smart investments here.",
    },
  },
  "dallas-tx": {
    default: {
      intro: "Dallas drivers face everything from hailstorms to scorching summers. Quality auto services in the Metroplex help keep your vehicle looking its best despite unpredictable North Texas weather.",
      tip: "Dallas tip: Hail damage is common here. Consider a provider who also offers paintless dent repair if you need body work.",
    },
  },
  "austin-tx": {
    default: {
      intro: "Austin's tech-savvy and eco-conscious community has a growing EV scene. From downtown Teslas to Hill Country cruisers, Austin drivers value quality auto care from trusted local providers.",
      tip: "Austin tip: Gravel roads in the Hill Country cause rock chips. PPF on the front end protects against stone damage.",
    },
  },
  "tampa-fl": {
    default: {
      intro: "Tampa Bay's coastal humidity and afternoon storms create a challenging environment for vehicles. Professional auto care in the Tampa area helps combat Florida's corrosive salt air and intense UV rays.",
      tip: "Tampa tip: Coastal driving accelerates paint degradation. A quality ceramic coating provides critical protection from salt and sun.",
    },
  },
  "jacksonville-fl": {
    default: {
      intro: "Jacksonville's combination of beach proximity and urban driving means vehicles face both coastal corrosion and city wear. Local auto care specialists understand Northeast Florida's unique challenges.",
      tip: "Jacksonville tip: Beach sand and salt water are tough on paint. Regular washes and a protective coating are essential for coastal drivers.",
    },
  },
  "orlando-fl": {
    default: {
      intro: "Orlando's theme-park traffic, afternoon thunderstorms, and year-round sunshine create unique auto care needs. Central Florida's best providers keep your vehicle protected from the Sunshine State's elements.",
      tip: "Orlando tip: Bug and tar buildup from highway driving is common. Look for detailers who include decontamination in their services.",
    },
  },
  "phoenix-az": {
    default: {
      intro: "Phoenix's extreme desert heat — routinely exceeding 115°F — is the harshest environment for vehicles in the country. Quality auto care in the Valley is critical for protecting paint, interiors, and mechanical components.",
      tip: "Phoenix tip: The sun is relentless here. Ceramic coating with high UV protection and interior UV window film are must-haves.",
    },
  },
  "denver-co": {
    default: {
      intro: "Denver's altitude, UV exposure, and winter road treatments create a unique combination of challenges. Mile High City drivers need providers who understand Colorado's intense sun and sudden weather shifts.",
      tip: "Denver tip: High altitude means stronger UV rays. Your paint fades faster here — ceramic coating or PPF provides essential protection.",
    },
  },
  "seattle-wa": {
    default: {
      intro: "Seattle's persistent rain and damp climate make paint protection and rust prevention a priority. Pacific Northwest drivers value providers who understand the challenges of constant moisture exposure.",
      tip: "Seattle tip: Continuous moisture promotes water spots and moss growth. Regular detailing with hydrophobic coatings keeps water at bay.",
    },
  },
  "atlanta-ga": {
    default: {
      intro: "Atlanta's notorious pollen season, summer heat, and highway commuting make quality auto care essential. Peach State drivers trust local specialists to keep their vehicles pristine despite the Southern climate.",
      tip: "Atlanta tip: Spring pollen can damage paint if left too long. Ceramic coating makes pollen removal effortless.",
    },
  },
  "san-francisco-ca": {
    default: {
      intro: "San Francisco's fog, salt air, and steep hills create unique vehicle challenges. Bay Area drivers rely on skilled auto care providers who understand coastal California's demanding conditions.",
      tip: "SF tip: Fog and salt air cause invisible corrosion. A ceramic coating or sealant after detailing provides a critical protective barrier.",
    },
  },
  "san-antonio-tx": {
    default: {
      intro: "San Antonio's hot summers and occasional hailstorms demand reliable auto care. From the Pearl District to the Medical Center, local providers understand how South Texas heat affects paint and interiors.",
      tip: "San Antonio tip: Summer dashboard temperatures can exceed 160°F. Ceramic window tint and interior UV protection are smart investments.",
    },
  },
  "san-diego-ca": {
    default: {
      intro: "San Diego's coastal climate is easy on drivers but tough on paint. Salt air, marine fog, and year-round sun mean vehicles here need consistent protection and care from knowledgeable providers.",
      tip: "San Diego tip: Coastal moisture causes water spotting. Hydrophobic ceramic coatings help keep your paint clean between washes.",
    },
  },
  "las-vegas-nv": {
    default: {
      intro: "Las Vegas's extreme desert heat and dust storms are brutal on vehicles. Temperatures regularly exceed 110°F, making quality paint protection and interior care essential for any car in the Valley.",
      tip: "Vegas tip: Desert sand and UV exposure are your biggest enemies. PPF on the front end and ceramic coating everywhere else is the go-to setup here.",
    },
  },
  "portland-or": {
    default: {
      intro: "Portland's persistent rain and Pacific Northwest moisture make paint protection a year-round priority. Local auto care providers specialize in combating the effects of constant dampness and seasonal road grime.",
      tip: "Portland tip: Tree sap and bird droppings are common under the city's tree canopy. Regular detailing prevents permanent etching on your clear coat.",
    },
  },
  "charlotte-nc": {
    default: {
      intro: "Charlotte's mix of Southern humidity, pollen season, and growing urban traffic creates diverse auto care needs. The Queen City's providers handle everything from daily commuters to the NASCAR crowd.",
      tip: "Charlotte tip: Spring pollen coats vehicles in a thick yellow layer. A ceramic coating makes cleanup quick and prevents pollen from bonding to paint.",
    },
  },
};

export function getCityContent(
  citySlug: string,
  serviceSlug: string
): CityServiceContent | null {
  const cityData = CITY_SERVICE_CONTENT[citySlug];
  if (!cityData) return null;

  // Try service-specific content first, then fall back to default
  return cityData[serviceSlug] || cityData["default"] || null;
}

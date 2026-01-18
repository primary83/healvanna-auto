import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium SUVs - Electric & Luxury SUV Directory",
  description: "Explore the finest electric and luxury SUVs. From the Rivian R1S to the BMW iX, discover in-depth specs, features, and honest assessments of premium SUVs.",
  keywords: ["luxury SUV", "electric SUV", "Rivian R1S", "BMW iX", "Mercedes EQS SUV", "Tesla Model X", "premium SUV", "EV SUV"],
};

const suvs = [
  {
    name: "Rivian R1S",
    year: "2024",
    category: "Electric Adventure SUV",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    range: "352 mi",
    acceleration: "3.0s 0-60",
    price: "From $78,000",
    description: "The ultimate electric adventure SUV with three rows of seating, impressive off-road capability, and a range that rivals luxury competitors.",
    highlights: ["Quad Motor AWD", "Air Suspension", "Camp Mode", "8,800 lb Towing"],
    slug: "rivian-r1s"
  },
  {
    name: "Tesla Model X",
    year: "2024",
    category: "Electric Luxury SUV",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    range: "348 mi",
    acceleration: "2.5s 0-60",
    price: "From $79,990",
    description: "Tesla's flagship SUV combines supercar acceleration with family-friendly practicality and the iconic falcon-wing doors.",
    highlights: ["Falcon Wing Doors", "Autopilot", "17\" Touchscreen", "6 or 7 Seats"],
    slug: "tesla-model-x"
  },
  {
    name: "BMW iX xDrive50",
    year: "2024",
    category: "Electric Luxury SUV",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    range: "324 mi",
    acceleration: "4.4s 0-60",
    price: "From $87,100",
    description: "BMW's technology flagship combines sustainable luxury with cutting-edge design and the brand's legendary driving dynamics.",
    highlights: ["iDrive 8", "Shy Tech Design", "Recycled Materials", "Harman Kardon Audio"],
    slug: "bmw-ix"
  },
  {
    name: "Mercedes-Benz EQS SUV",
    year: "2024",
    category: "Ultra-Luxury Electric SUV",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    range: "305 mi",
    acceleration: "4.5s 0-60",
    price: "From $104,400",
    description: "The pinnacle of electric luxury SUVs, offering S-Class refinement with three rows and the stunning MBUX Hyperscreen.",
    highlights: ["MBUX Hyperscreen", "Air Suspension", "Third Row", "Burmester 3D Audio"],
    slug: "mercedes-eqs-suv"
  },
  {
    name: "Audi e-tron S",
    year: "2024",
    category: "Performance Electric SUV",
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80",
    range: "212 mi",
    acceleration: "4.3s 0-60",
    price: "From $84,800",
    description: "Audi's sporty electric SUV delivers quattro performance with premium refinement and cutting-edge virtual cockpit technology.",
    highlights: ["Tri-Motor Setup", "Virtual Cockpit", "Matrix LED Lights", "Sport Air Suspension"],
    slug: "audi-etron-s"
  },
  {
    name: "Lucid Gravity",
    year: "2025",
    category: "Ultra-Luxury Electric SUV",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    range: "440+ mi",
    acceleration: "3.5s 0-60",
    price: "From $79,900",
    description: "Lucid's upcoming SUV promises class-leading range and the same award-winning technology found in the Air sedan.",
    highlights: ["440+ Mile Range", "DreamDrive Pro", "Glass Canopy Roof", "Executive Seating"],
    slug: "lucid-gravity"
  },
];

export default function SUVsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-light tracking-wider">
            <span className="text-white">HEALVANNA</span>
            <span className="text-[#4a90d9] ml-2">AUTO</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">HOME</Link>
            <Link href="/cars" className="text-white border-b-2 border-[#4a90d9] pb-1">CARS</Link>
            <Link href="/care" className="text-gray-300 hover:text-white transition-colors">CARE</Link>
            <Link href="/craft" className="text-gray-300 hover:text-white transition-colors">CRAFT</Link>
            <Link href="/insights" className="text-gray-300 hover:text-white transition-colors">INSIGHTS</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#4a90d9] tracking-[0.3em] text-sm mb-4">SUV DIRECTORY</p>
          <h1 className="text-5xl md:text-6xl font-extralight text-white mb-2">
            Premium <span className="italic text-[#4a90d9]">SUVs</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Discover the finest electric and luxury SUVs. From family adventures to executive transport, 
            find the perfect blend of space, performance, and sophistication.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/cars" className="text-[#4a90d9] hover:underline">Cars</Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-400">SUVs</span>
        </div>
      </div>

      {/* SUV Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {suvs.map((suv) => (
              <Link 
                href={`/cars/${suv.slug}`} 
                key={suv.slug}
                className="group bg-[#0d1420] rounded-xl overflow-hidden border border-white/5 hover:border-[#4a90d9]/30 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={suv.image} 
                    alt={suv.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#4a90d9] text-white text-xs px-3 py-1 rounded-full">
                      EV
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                      {suv.year}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#4a90d9] text-xs tracking-wider mb-2">{suv.category}</p>
                  <h3 className="text-xl font-light text-white mb-2">{suv.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{suv.description}</p>
                  
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="text-gray-400">
                      <span className="text-white">{suv.range}</span> Range
                    </div>
                    <div className="text-gray-400">
                      <span className="text-white">{suv.acceleration}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {suv.highlights.slice(0, 3).map((highlight) => (
                      <span 
                        key={highlight}
                        className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-white font-light">{suv.price}</span>
                    <span className="text-[#4a90d9] text-sm group-hover:translate-x-1 transition-transform">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose an Electric SUV Section */}
      <section className="px-6 py-20 bg-[#0d1420]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extralight text-white text-center mb-12">
            Why Choose an <span className="italic text-[#4a90d9]">Electric SUV</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#4a90d9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl text-white mb-2">Instant Torque</h3>
              <p className="text-gray-400">Electric motors deliver maximum torque instantly, making highway merging and overtaking effortless.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#4a90d9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl text-white mb-2">Lower Running Costs</h3>
              <p className="text-gray-400">Save significantly on fuel and maintenance with fewer moving parts and home charging capability.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#4a90d9]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#4a90d9]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl text-white mb-2">Family-Friendly Space</h3>
              <p className="text-gray-400">No transmission tunnel means more interior space for passengers and cargo in electric SUVs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extralight text-white mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-gray-400 mb-8">
            Our comprehensive comparison guides break down the specs, features, and real-world performance 
            to help you find the perfect SUV for your lifestyle.
          </p>
          <Link 
            href="/insights"
            className="inline-block bg-[#4a90d9] text-white px-8 py-3 rounded-lg hover:bg-[#3a7bc8] transition-colors"
          >
            Browse Comparison Guides
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d1420] border-t border-white/10 px-6 py-12">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="text-xl font-light tracking-wider">
            <span className="text-white">HEALVANNA</span>
            <span className="text-[#4a90d9] ml-2">AUTO</span>
          </Link>
          <p className="text-gray-500 mt-4">© 2025 Healvanna. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

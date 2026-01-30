"use client";

import Image from "next/image";
import Link from "next/link";

export default function JaguarPage() {
  const models = [
    {
      id: "i-pace",
      name: "Jaguar I-PACE",
      year: "2024",
      price: "From $72,000",
      type: "ELECTRIC PERFORMANCE SUV",
      tag: "EV",
      description: "The award-winning electric SUV that combines British luxury with thrilling performance.",
      range: "246 mi",
      acceleration: "4.5s",
      power: "394 hp",
      image: "/cars/jaguar/i-pace.jpg",
    },
    {
      id: "type-00",
      name: "Jaguar Type 00",
      year: "2026",
      price: "From $150,000",
      type: "ELECTRIC GT CONCEPT",
      tag: "CONCEPT",
      description: "A glimpse into Jaguar's all-electric future. Bold, dramatic, and utterly revolutionary.",
      range: "400 mi",
      acceleration: "2.9s",
      power: "600 hp",
      image: "/cars/jaguar/type-00.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-[#e8edf5]">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex justify-between items-center bg-gradient-to-b from-[#0a0f1a]/95 to-transparent backdrop-blur-xl">
        <Link href="/" className="text-[22px] font-light tracking-[0.12em]">
          HEALVANNA <span className="text-[#4a90d9] font-medium">AUTO</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[{ name: "HOME", href: "/" }, { name: "CARS", href: "/cars" }, { name: "CARE", href: "/care" }, { name: "CRAFT", href: "/craft" }, { name: "SHOP", href: "/shop" }, { name: "BLOG", href: "/blog" }].map((item) => (
            <Link key={item.name} href={item.href} className={`text-xs tracking-[0.12em] transition-colors duration-300 ${item.name === "CARS" ? "text-[#4a90d9] border-b border-[#4a90d9] pb-1" : "text-[#8a919e] hover:text-[#e8edf5]"}`}>{item.name}</Link>
          ))}
        </div>
      </nav>

      <div className="pt-24 pb-8 px-6 md:px-12 border-b border-[#1a2235]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8">
          <div><span className="text-4xl md:text-5xl font-light text-[#e8edf5]">2</span><p className="text-sm text-[#6b7a94] mt-1">Models Available</p></div>
          <div><span className="text-4xl md:text-5xl font-light text-[#e8edf5]">400 mi</span><p className="text-sm text-[#6b7a94] mt-1">Max Range</p></div>
          <div><span className="text-4xl md:text-5xl font-light text-[#e8edf5]">2.9s</span><p className="text-sm text-[#6b7a94] mt-1">Fastest 0-60</p></div>
          <div><span className="text-4xl md:text-5xl font-light text-[#e8edf5]">British</span><p className="text-sm text-[#6b7a94] mt-1">Luxury Heritage</p></div>
        </div>
      </div>

      <div className="px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/cars" className="inline-flex items-center gap-2 text-[#6b7a94] hover:text-[#e8edf5] transition-colors mb-8"><span>←</span><span>Back to All Cars</span></Link>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-32 h-24 bg-[#1a1a1a] rounded-xl flex items-center justify-center">
              <span className="text-[#2d6b4d] font-bold text-lg tracking-wide">JAGUAR</span>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-[#e8edf5]">Jaguar</h1>
              <p className="text-[#6b7a94] mt-1">Copy Nothing. Reimagine Everything.</p>
            </div>
          </div>
          <p className="text-[#8a919e] max-w-3xl leading-relaxed">Jaguar is reimagining itself as an all-electric luxury brand. With the groundbreaking I-PACE and the bold vision of the Type 00 concept, Jaguar is creating a dramatic new chapter in British automotive excellence.</p>
        </div>
      </div>

      <div className="px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-[#e8edf5] mb-8">All Jaguar Models</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {models.map((model) => (
              <Link key={model.id} href={`/cars/jaguar/${model.id}`}>
                <div className="group bg-[#0d1420] rounded-2xl overflow-hidden border border-[#1a2235] hover:border-[#2a3a55] transition-all duration-300">
                  <div className="relative h-52 bg-gradient-to-br from-[#111927] to-[#0d1420] overflow-hidden">
                    <div className="absolute top-4 left-4 z-10"><span className="bg-[#1a1a1a] text-[#2d6b4d] text-[10px] font-bold px-3 py-1 rounded">JAGUAR</span></div>
                    <div className="absolute bottom-4 right-4 z-10"><span className={`text-[10px] font-bold px-2 py-1 rounded ${model.tag === "CONCEPT" ? "bg-[#6b4d2d] text-white" : "bg-[#1a2235] text-[#4a90d9]"}`}>{model.tag}</span></div>
                    <Image src={model.image} alt={model.name} fill className="object-contain group-hover:scale-105 transition-transform duration-50 />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1420] via-transparent to-transparent" />
                    <p className="absolute bottom-4 left-4 text-[10px] text-[#6b7a94] uppercase tracking-wider">{model.type}</p>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-medium text-[#e8edf5] mb-1">{model.name}</h3>
                    <p className="text-[#4a90d9] text-sm mb-3">{model.year} • {model.price}</p>
                    <p className="text-[#6b7a94] text-sm mb-4 line-clamp-2">{model.description}</p>
                    <div className="flex justify-between border-t border-[#1a2235] pt-4">
                      <div className="text-center"><span className="text-[#e8edf5] font-medium">{model.range}</span><p className="text-[10px] text-[#6b7a94]">Range</p></div>
                      <div className="text-center"><span className="text-[#e8edf5] font-medium">{model.acceleration}</span><p className="text-[10px] text-[#6b7a94]">0-60</p></div>
                      <div className="text-center"><span className="text-[#e8edf5] font-medium">{model.power}</span><p className="text-[10px] text-[#6b7a94]">Power</p></div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-[#1a2235]"><span className="text-[#4a90d9] text-sm font-medium group-hover:text-[#6ba5e7] transition-colors">VIEW DETAILS</span></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <footer className="px-6 md:px-12 py-12 border-t border-[#1a2235]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-[11px] text-[#6b7a94]">© 2024 Healvanna Auto. All rights reserved.</div>
            <div className="flex gap-6">{["Privacy", "Terms", "Cookies"].map((link) => (<Link key={link} href={`/${link.toLowerCase()}`} className="text-[11px] text-[#6b7a94] hover:text-[#e8edf5] transition-colors">{link}</Link>))}</div>
          </div>
        </div>
      </footer>
    </main>
  );
}

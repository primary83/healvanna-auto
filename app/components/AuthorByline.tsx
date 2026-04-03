"use client";

export default function AuthorByline() {
  return (
    <section className="px-4 pb-12 bg-gradient-to-b from-slate-950 to-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-4 p-6 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          <div>
            <p className="text-white font-semibold text-sm">Healvanna Editorial Team</p>
            <p className="text-slate-400 text-sm leading-relaxed mt-1">Our editorial team covers the EV market, car care industry, and automotive technology. We research specs, pricing, and real-world ownership data to help you make informed decisions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

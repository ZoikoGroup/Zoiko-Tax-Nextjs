"use client";

import React from "react";
import Image from "next/image";
import { PROOF_MODULES } from "./e-invoicing-data";
import { SectionHeader, Reveal } from "./shared";

export default function ProductProofSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAF3FF] py-14 sm:py-18 md:py-24 border-b border-[#D8CEDD]/50">
      {/* Pattern background overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <Image
          src="/e-invoicing-ctc/pattern-bg.png"
          alt="Section pattern"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        <SectionHeader
          eyebrow="Proof & Observability"
          title="Interactive dashboards built for fiscal accountability"
          description="Monitor billing streams, investigate schema transformation warnings, map country profiles, and resolve external responses with absolute data clarity."
          className="mb-12 sm:mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROOF_MODULES.map((module, idx) => (
            <Reveal key={module.id} delay={0.08 * idx}>
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white/95 p-7 sm:p-8 backdrop-blur-xs shadow-xs hover:border-[#D65A2C]/50 transition-all duration-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C] block mb-2">
                    {module.id}
                  </span>
                  <h3 className="text-2xl font-bold text-[#18141B] mb-3">
                    {module.title}
                  </h3>
                  <p className="text-base text-[#665F69] leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

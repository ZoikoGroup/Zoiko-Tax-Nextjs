"use client";

import React from "react";
import { BUYER_OUTCOMES } from "./e-invoicing-data";
import { SectionHeader, Reveal } from "./shared";

export default function BuyerOutcomesSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-18 md:py-24 border-b border-[#D8CEDD]">
      {/* Pattern background overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/e-invoicing-ctc/pattern-bg.png')" }}
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        <SectionHeader
          eyebrow="Value Realization"
          title="Defensible outcomes for commercial telcos"
          description="Unify e-invoicing workflows across billing silos, manage rejections transparently, and preserve immutable trace evidence for audit readiness."
          className="mb-12 sm:mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BUYER_OUTCOMES.map((card, idx) => (
            <Reveal key={card.title} delay={0.08 * idx}>
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 sm:p-8 backdrop-blur-xs shadow-xs hover:border-[#D65A2C]/50 transition-all duration-200 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#18141B] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#665F69] leading-relaxed">
                    {card.description}
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

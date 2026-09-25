"use client";

import React from "react";
import { STATE_MODEL_ROWS } from "./e-invoicing-data";
import { SectionHeader, Reveal } from "./shared";

export default function StateModelSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-18 md:py-24 border-b border-[#D8CEDD]">
      {/* Pattern background overlay matching Figma */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/e-invoicing-ctc/pattern-bg.png')" }}
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        <SectionHeader
          eyebrow="Traceability Architecture"
          title="Lifecycle & Exception State Model"
          description="We avoid simplistic summaries. Every invoice transaction represents multiple parallel states that must align before reconciliation."
          className="mb-10 sm:mb-12"
        />

        <Reveal delay={0.05}>
          <div className="w-full rounded-2xl border border-[#D8CEDD] bg-white divide-y divide-[#D8CEDD] shadow-xs overflow-hidden">
            {STATE_MODEL_ROWS.map((row) => (
              <div
                key={row.track}
                className="flex items-center justify-between gap-4 p-5 sm:px-6 sm:py-5 hover:bg-[#FAF8FA]/40 transition-colors duration-150"
              >
                <span className="text-sm sm:text-base font-semibold text-[#18141B]">
                  {row.track}
                </span>

                <div className="flex items-center gap-2 text-sm sm:text-base whitespace-nowrap">
                  <span className="font-semibold text-[#D65A2C]">
                    {row.statusBadge || "State Traceable"}
                  </span>
                  <span className="text-[#665F69]">
                    {row.statusDetail || "• Full version history preserved"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

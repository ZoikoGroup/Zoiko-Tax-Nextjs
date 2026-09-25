"use client";

import React from "react";
import { LIFECYCLE_STAGES } from "./e-invoicing-data";
import { Reveal } from "./shared";

export default function LifecycleSection() {
  return (
    <section className="w-full bg-[#FAF3FF] border-b border-[#D8CEDD]/50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        {/* Section Heading - Wide, no wrapping of the title */}
        <div className="flex flex-col gap-3.5 mb-10 sm:mb-12">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
              DETERMINISTIC FLOW
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-bold leading-[1.08] tracking-tight text-[#18141B]">
              The Ten Stages of Telecom Fiscal Validation
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-base sm:text-lg lg:text-[20px] font-normal leading-[1.5] text-[#665F69] max-w-4xl">
              E-invoicing compliance is not solved by a single &apos;Send&apos; button. We orchestrate a detailed multi-stage validation, transformation, and reconciliation pipeline.
            </p>
          </Reveal>
        </div>

        {/* 10 Stage Flow - Full width rows with 150px step label + description */}
        <div className="flex flex-col gap-3 w-full">
          {LIFECYCLE_STAGES.map((stage, idx) => (
            <Reveal key={stage.step} delay={0.02 * idx}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 w-full rounded-lg border border-[#D8CEDD] bg-white px-5 sm:px-6 py-4 shadow-2xs hover:border-[#D65A2C]/40 transition-colors duration-150">
                <span className="w-[150px] shrink-0 text-base font-bold text-[#D65A2C]">
                  {stage.step}
                </span>
                <span className="flex-1 text-sm sm:text-[14px] text-[#665F69] leading-relaxed">
                  {stage.description}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

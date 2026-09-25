"use client";

import React from "react";
import { VALIDATION_ITEMS } from "./e-invoicing-data";
import { SectionHeader, StatusBadge, Reveal } from "./shared";

export default function ValidationSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-18 md:py-24 border-b border-[#D8CEDD]">
      {/* Pattern background overlay matching Figma */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/e-invoicing-ctc/pattern-bg.png')" }}
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        <SectionHeader
          eyebrow="Payload Validation"
          title="Validation, Transformation & Profile Mapping"
          description="How the platform intercepts raw transaction data, checks business-rule compliance, and maps structures to destination standards."
          className="mb-10 sm:mb-12"
        />

        <div className="w-full space-y-3">
          {VALIDATION_ITEMS.map((item, idx) => (
            <Reveal key={item.title} delay={0.04 * idx}>
              <div className="flex items-center justify-between gap-4 rounded-lg border border-[#D8CEDD] bg-white px-5 py-4 sm:px-6 sm:py-4.5 shadow-xs hover:border-[#D65A2C]/40 transition-all duration-150">
                <span className="text-sm sm:text-base font-semibold text-[#18141B]">
                  {item.title}
                </span>
                <StatusBadge status={item.status} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { HANDOFF_STEPS } from "./e-invoicing-data";
import { SectionHeader, Reveal } from "./shared";

export default function HandoffBoundarySection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-18 md:py-24 border-b border-[#D8CEDD]">
      {/* Pattern background overlay */}
      <div
        className="absolute inset-0 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/e-invoicing-ctc/pattern-bg.png')" }}
      />

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16">
        <SectionHeader
          eyebrow="Operational Boundaries"
          title="The Clearance & Reporting Handoff Boundary"
          description="Clear boundaries separate internal invoice generation, ZoikoTax validation layers, and external government platforms."
          className="mb-12 sm:mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative">
          {HANDOFF_STEPS.map((step, idx) => (
            <React.Fragment key={step.title}>
              <Reveal delay={0.08 * idx}>
                <div
                  className={`h-full rounded-2xl p-6 sm:p-7 backdrop-blur-xs flex flex-col justify-between transition-all duration-200 ${
                    step.highlight
                      ? "border-2 border-[#D65A2C] bg-white shadow-md"
                      : "border border-[#D8CEDD] bg-white shadow-xs"
                  }`}
                >
                  <div>
                    <h3
                      className={`text-lg font-bold mb-3 ${
                        step.highlight ? "text-[#D65A2C]" : "text-[#18141B]"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#665F69]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

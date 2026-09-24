"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

const DETERMINATION_STEPS = [
  {
    step: "1. Billing Facts",
    description: "Commercial volumes & contract terms ingested.",
  },
  {
    step: "2. Tax situs Logic",
    description: "Resolves active tax jurisdiction & responsibility rules.",
  },
  {
    step: "3. Determination Run",
    description: "Calculates precise VAT, GST, and local utility surcharges.",
  },
  {
    step: "4. E-Invoice Mapping",
    description: "Converts totals and calculations to localized target profiles.",
  },
];

export default function DeterminationInterlockSection() {
  return (
    <SectionContainer className="bg-white border-b border-[#D8CEDD]/50">
      <SectionHeader
        eyebrow="Upstream Logic"
        title="Tax Determination & Surcharges Interlock"
        description="Ensure invoice data flows seamlessly from upstream calculation models to regional billing layouts."
        className="mb-12 sm:mb-14"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {DETERMINATION_STEPS.map((step, idx) => (
          <Reveal key={step.step} delay={0.06 * idx}>
            <div className="h-full rounded-xl border border-[#D8CEDD] bg-[#FAF8FA] p-6 shadow-xs flex flex-col justify-between hover:border-[#D65A2C]/40 transition-all duration-150">
              <div>
                <h3 className="text-base font-bold text-[#18141B] mb-2.5">
                  {step.step}
                </h3>
                <p className="text-sm text-[#665F69] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

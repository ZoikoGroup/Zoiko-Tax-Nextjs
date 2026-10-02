"use client";

import React from "react";
import { ShieldCheck, ListChecks, FileText } from "lucide-react";
import { SectionHeader, BoundaryNotice } from "./shared";
import { LIFECYCLE_STEPS } from "./types";

const HANDOFF_CARDS_DATA = [
  {
    icon: ShieldCheck,
    title: "Before processing",
    description:
      "Validate structure, version and required metadata before authoritative processing. Submission or acceptance does not bypass validation.",
  },
  {
    icon: ListChecks,
    title: "Through the outcome",
    description:
      "Accepted work is not synchronous completion. Preserve item-level outcomes; completion alone is not proof of business success.",
  },
  {
    icon: FileText,
    title: "At retrieval",
    description:
      "Use only the approved retrieval mechanism. Carry correlation, authority and currentness evidence into downstream verification.",
  },
];

export default function ValidationProcessingSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#120327]">
      {/* Full-bleed artwork exported from Figma (public/bulk-batch) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/bulk-batch/Validation processing and result lifecycle.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#120327]/60 via-[#120327]/40 to-[#120327]/70" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-10 lg:px-20 lg:py-20">
        <div className="flex flex-col items-start gap-8">
          <SectionHeader
            dark
            eyebrow="05 / VALIDATION, PROCESSING & RESULTS"
            title="Keep authority and evidence attached to every handoff."
            description="A conceptual lifecycle. State names, transitions and execution semantics must come from the controlled contract."
          />

          {/* Lifecycle panel */}
          <div className="w-full rounded-3xl bg-[#301153]/85 backdrop-blur-sm p-7 flex flex-col items-start gap-6 outline outline-1 -outline-offset-1 outline-white/10">
            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {LIFECYCLE_STEPS.map((step) => (
                <div key={step.num} className="flex flex-col items-start gap-3">
                  <span className="text-xs font-bold text-[#F4A261] font-['Inter',sans-serif]">{step.num}</span>
                  <div className="w-full min-h-24 rounded-xl bg-white/5 p-4 flex flex-col items-start gap-1.5 outline outline-1 -outline-offset-1 outline-white/10 transition-colors hover:bg-white/10">
                    <span className="text-base font-semibold text-white font-['Inter',sans-serif]">{step.label}</span>
                    {step.sub && (
                      <span className="text-xs leading-4 text-[#D8CEDD] font-['Inter',sans-serif]">{step.sub}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-base leading-6 text-[#D8CEDD] font-['Inter',sans-serif]">
              Ordered text alternative: Prepare → Submit → Validate → Process → Complete / Partial / Failed →
              Retrieve results. Preserve correlation, authority and evidence across the lifecycle.
            </p>
          </div>

          {/* Handoff cards */}
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
            {HANDOFF_CARDS_DATA.map((card) => (
              <div
                key={card.title}
                className="flex-1 rounded-2xl bg-[#301153] p-6 outline outline-1 -outline-offset-1 outline-[#493057] flex flex-col items-start gap-3.5 transition-colors hover:outline-[#593576]"
              >
                <card.icon className="h-5 w-5 shrink-0 text-[#F4A261]" strokeWidth={1.8} />
                <h3 className="text-xl leading-7 font-bold text-white font-['Inter',sans-serif]">{card.title}</h3>
                <p className="text-base leading-6 text-[#D8CEDD] font-['Inter',sans-serif]">{card.description}</p>
              </div>
            ))}
          </div>

          <BoundaryNotice
            dark
            title="Security notes belong beside the lifecycle"
            description="Use synthetic samples only. Do not invent transport, storage or retention behavior. Never include secrets or real subscriber, customer, invoice or tax datasets. Trace safe correlation—not full datasets or private job identifiers."
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

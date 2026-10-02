"use client";

import React from "react";

const steps = [
  {
    num: "01",
    title: (
      <>
        Choose integration<br className="hidden sm:inline" />
        surface
      </>
    ),
    desc: "API, SDK, Webhook/Event, Bulk/Batch or a guide-linked surface — only where governed.",
  },
  {
    num: "02",
    title: (
      <>
        Review authoritative<br className="hidden sm:inline" />
        contract
      </>
    ),
    desc: "Confirm syntax, version, compatibility and the contract that owns the behavior.",
  },
  {
    num: "03",
    title: "Prepare safe data",
    desc: "Prefer synthetic fixtures. Use approved fixtures only where separately governed.",
  },
  {
    num: "04",
    title: "Choose scenario",
    desc: "Select a sourced scenario, or use an explicitly illustrative conceptual walkthrough.",
  },
  {
    num: "05",
    title: "Execute or simulate",
    desc: "Use a separately enabled environment, or follow the conceptual walkthrough in docs.",
  },
  {
    num: "06",
    title: "Inspect result",
    desc: "Compare expected states and permitted traceability with the authoritative contract.",
  },
  {
    num: "07",
    title: "Troubleshoot",
    desc: "Follow contract-defined recovery. Unknown and unsafe conditions stop safely.",
  },
  {
    num: "08",
    title: (
      <>
        Review production<br className="hidden sm:inline" />
        readiness
      </>
    ),
    desc: "Verify Coverage, entitlement and controlled implementation prerequisites separately.",
  },
];

export default function GuidedJourneySection() {
  return (
    <section className="relative w-full bg-[#FAF3FF] overflow-hidden">
      {/* Background Diamond Pattern Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50 bg-[url('/status-and-releases/pattern-bg.png')] bg-repeat bg-center"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col items-start gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 max-w-[900px]">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
            GUIDED TESTING JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.15] font-bold text-[#18141B] tracking-tight font-['Inter',sans-serif]">
            Understand the contract. Then test the pattern.
          </h2>
          <p className="text-base sm:text-lg text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
            Recommended pattern — not a live environment. Follow the same readable path with or without access to a separately enabled environment.
          </p>
        </div>

        {/* 8 Step Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col items-start gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-2xl sm:text-[28px] font-bold text-[#D65A2C] font-['Inter',sans-serif]">
                {step.num}
              </span>
              <h3 className="text-lg sm:text-[19px] font-bold text-[#18141B] font-['Inter',sans-serif] leading-snug min-h-[48px] flex items-start">
                {step.title}
              </h3>
              <p className="text-xs sm:text-[13px] font-normal leading-relaxed text-[#665F69] font-['Inter',sans-serif]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Guidance & Separately Governed Access */}
        <div className="w-full p-6 sm:p-8 lg:p-10 bg-[#FAF3FF]/80 backdrop-blur-sm rounded-2xl border border-[#D8CEDD] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Conceptual Guidance */}
          <div className="flex flex-col items-start gap-3">
            <span className="inline-block px-3 py-1 bg-[#FFF0E7] text-[#D65A2C] text-[11px] font-bold rounded-full uppercase tracking-wider font-['Inter',sans-serif]">
              CONCEPTUAL GUIDANCE
            </span>
            <p className="text-sm sm:text-[15px] font-normal leading-relaxed text-[#665F69] font-['Inter',sans-serif]">
              Public documentation and safe walkthroughs remain useful even when an environment is unavailable or access is not established.
            </p>
            <a
              href="/developers/integration-guides/"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#D65A2C] hover:underline font-['Inter',sans-serif] pt-1"
            >
              Read Integration Guides ↗
            </a>
          </div>

          {/* Separately Governed Access */}
          <div className="flex flex-col items-start gap-3">
            <span className="inline-block px-3 py-1 bg-[#FFF0E7] text-[#D65A2C] text-[11px] font-bold rounded-full uppercase tracking-wider font-['Inter',sans-serif]">
              SEPARATELY GOVERNED ACCESS
            </span>
            <p className="text-sm sm:text-[15px] font-normal leading-relaxed text-[#665F69] font-['Inter',sans-serif]">
              Environment access, credentials and prerequisites must be established through authoritative contracts. Guidance is not entitlement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";

const audiences = [
  {
    title: "For an engineer",
    desc: "Read the contract → prepare a safe fixture → follow the walkthrough → inspect meaning → review production prerequisites.",
    link: "Integration Guides ↗",
    href: "/developers/integration-guides/",
  },
  {
    title: "For a buyer",
    desc: "Testing is not production availability. Verify exact Coverage and contractual entitlement before making a production decision.",
    link: "Verify Coverage ↗",
    href: "/coverage/",
  },
  {
    title: "When access is restricted",
    desc: "Use public docs and conceptual guidance. Do not disclose private environment state or imply a recovery promise.",
    link: "Read API Reference ↗",
    href: "/developers/api/",
  },
];

const safeStates = [
  { title: "Loading", desc: "No fabricated result count; keep static guidance visible." },
  { title: "No matches / reset", desc: "Clear filters; never infer missing capability or Coverage." },
  { title: "Registry unavailable", desc: "Continue with authoritative static docs." },
  { title: "Access restricted", desc: "No entitlement claim or private account disclosure." },
  { title: "Temporarily unavailable", desc: "Public guidance remains available; no incident detail." },
  { title: "Stale metadata", desc: "No current badge without a governed source." },
  { title: "Conflicting metadata", desc: "Do not guess a winner; defer to controlled guidance." },
  { title: "Unsafe-data warning", desc: "Stop the attempt and return to synthetic fixtures." },
  { title: "No-JS continuity", desc: "Core copy, scenarios, safety and docs remain readable." },
];

export default function RelatedGuidanceSection() {
  return (
    <section className="relative w-full bg-[#FAF3FF] overflow-hidden">
      {/* Background Diamond Pattern Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 bg-[url('/status-and-releases/pattern-bg.png')] bg-repeat bg-center"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col items-start gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 max-w-[900px]">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
            RELATED GUIDANCE · SAFE CONTINUITY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.15] font-bold text-[#18141B] tracking-tight font-['Inter',sans-serif]">
            Keep the next step useful, even when testing stops.
          </h2>
          <p className="text-base sm:text-lg text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
            Recommended patterns — not a live environment or claims of current service state. Public guidance remains available when a controlled interaction cannot proceed.
          </p>
        </div>

        {/* 3 Audience Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-between items-start gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-start gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
                  {audience.title}
                </h3>
                <p className="text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
                  {audience.desc}
                </p>
              </div>

              <a
                href={audience.href}
                className="text-sm font-semibold text-[#D65A2C] hover:underline font-['Inter',sans-serif]"
              >
                {audience.link}
              </a>
            </div>
          ))}
        </div>

        {/* Safe-state guide Box */}
        <div className="w-full p-6 sm:p-8 bg-white rounded-3xl border border-[#D8CEDD] flex flex-col items-start gap-6 shadow-sm">
          <div className="w-full flex justify-between items-center">
            <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
              Safe-state guide
            </h3>
            <span className="inline-block px-3 py-1 bg-[#FFF0E7] text-[#D65A2C] text-[11px] font-bold rounded-full uppercase tracking-wider font-['Inter',sans-serif]">
              RECOMMENDED PATTERNS
            </span>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {safeStates.map((state) => (
              <div
                key={state.title}
                className="p-4 sm:p-5 bg-[#FAF3FF] rounded-xl border border-[#E3D7EA] flex flex-col items-start gap-1.5"
              >
                <h4 className="text-sm sm:text-base font-bold text-[#18141B] font-['Inter',sans-serif]">
                  {state.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
                  {state.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs sm:text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif] pt-1">
            Unknown state fails closed. Preserve safe route or controlled topic context only — never payloads, credentials, raw errors or private operational information.
          </p>
        </div>
      </div>
    </section>
  );
}

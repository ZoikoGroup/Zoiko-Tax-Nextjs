"use client";

import React from "react";

const inputAnatomy = [
  { label: "Scenario", value: "Request / response walkthrough" },
  { label: "Authoritative contract", value: "API Reference — exact version defined by docs" },
  { label: "Input", value: "[Synthetic fixture placeholder — no real data]" },
  { label: "Conceptual action", value: "Follow the approved documented concept" },
  { label: "Expected state", value: "Contract-defined" },
  { label: "Correlation", value: "[Placeholder only — no trace identifier]" },
];

const resultAnatomy = [
  { label: "Conceptual result", value: "[Outcome placeholder — no live response]" },
  { label: "Interpretation", value: "Read the state using authoritative contract semantics" },
  { label: "Traceability", value: "Placeholder only; permitted evidence remains governed" },
  { label: "Failure or uncertainty", value: "Stop safely and follow contract-defined recovery" },
];

const forwardStates = [
  { title: "Prepared", desc: "Safe fixture and source identified." },
  { title: "Ready to test", desc: "Conceptual only; access is separate." },
  { title: "Validating", desc: "Input assessed against the contract." },
  { title: "Processing", desc: "Conceptual work in progress." },
  { title: "Completed", desc: "Non-production outcome only." },
];

const failureStates = [
  { title: "Partial", desc: "Some outcome remains unresolved." },
  { title: "Failed", desc: "Conceptual action did not complete." },
  { title: "Restricted", desc: "Access not established; use docs." },
  { title: "Temporarily unavailable", desc: "Environment use cannot continue." },
  { title: "Unknown", desc: "Fail closed; do not infer success.", warn: true },
];

const troubleshootRow1 = [
  { title: "Validation issue", desc: "Review fixture classification and contract-defined requirements." },
  { title: "Partial outcome", desc: "Inspect documented partial-state semantics before proceeding." },
  { title: "Processing failure", desc: "Use the exact documented recovery path; no retry cadence is implied." },
  { title: "Contract/version mismatch", desc: "Return to the authoritative version and compatibility guidance." },
];

const troubleshootRow2 = [
  { title: "Access restricted", desc: "Do not assume entitlement. Continue with public guidance." },
  { title: "Environment unavailable", desc: "Use static docs; no private incident or environment state is disclosed." },
  { title: "Unknown condition", desc: "Stop and seek controlled guidance. Never guess a successful state." },
  { title: "Potential sensitive data", desc: "Stop the attempt. Do not submit data; redirect to safety and security guidance." },
];

export default function ResultDiagnosticsSection() {
  return (
    <section className="relative w-full bg-[#FAF3FF] overflow-hidden">
      {/* Background Diamond Pattern Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 bg-[url('/status-and-releases/pattern-bg.png')] bg-repeat bg-center"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-20 py-16 sm:py-20 lg:py-24 flex flex-col items-start gap-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-3 sm:gap-4 max-w-[900px]">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
            RESULT &amp; DIAGNOSTICS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[1.15] font-bold text-[#18141B] tracking-tight font-['Inter',sans-serif]">
            Inspect meaning, not a manufactured response.
          </h2>
          <p className="text-base sm:text-lg text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
            Illustrative example · Non-production anatomy only. No methods, endpoints, JSON fields, schemas or real trace identifiers are supplied.
          </p>
        </div>

        {/* Sub-header row */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span className="inline-block px-3 py-1 bg-[#FFF0E7] text-[#D65A2C] text-[11px] font-bold rounded-full uppercase tracking-wider font-['Inter',sans-serif]">
            NON-PRODUCTION / ILLUSTRATIVE EXAMPLE
          </span>
          <span className="text-xs sm:text-sm text-[#665F69] font-normal font-['Inter',sans-serif]">
            Descriptive placeholders · Not executable
          </span>
        </div>

        {/* 2 Anatomy Cards (Input anatomy & Result anatomy) */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Card: Input Anatomy */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#D8CEDD] flex flex-col justify-between gap-6 shadow-sm">
            <div className="flex flex-col items-start gap-3">
              <span className="inline-block px-3 py-1 bg-[#FFF0E7] text-[#D65A2C] text-[11px] font-bold rounded-full uppercase tracking-wider font-['Inter',sans-serif]">
                ILLUSTRATIVE EXAMPLE
              </span>
              <h3 className="text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
                Input anatomy
              </h3>
            </div>

            <div className="flex flex-col gap-3.5 py-3 border-t border-b border-[#F0EBF4]">
              {inputAnatomy.map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-[#665F69] font-['Inter',sans-serif]">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-[#18141B] font-['Inter',sans-serif]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="/developers/api/"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#D65A2C] hover:underline font-['Inter',sans-serif]"
            >
              Read API Reference ↗
            </a>
          </div>

          {/* Right Card: Result Anatomy */}
          <div className="p-6 sm:p-8 bg-[#281541] rounded-3xl border border-white/10 flex flex-col justify-between gap-6 shadow-md">
            <div className="flex flex-col items-start gap-3">
              <span className="inline-block px-3 py-1 bg-white/10 text-[#FFA785] text-[11px] font-bold rounded-full uppercase tracking-wider font-['Inter',sans-serif]">
                NON-PRODUCTION / ILLUSTRATIVE EXAMPLE
              </span>
              <h3 className="text-2xl font-bold text-white font-['Inter',sans-serif]">
                Result anatomy
              </h3>
            </div>

            <div className="flex flex-col gap-3.5 py-3 border-t border-b border-white/10">
              {resultAnatomy.map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold text-[#FFA785] font-['Inter',sans-serif]">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-white/90 font-['Inter',sans-serif]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <div className="p-4 bg-[#180C2C] rounded-xl border border-white/10">
                <p className="text-xs sm:text-sm font-semibold text-[#FFA785] font-['Inter',sans-serif]">
                  Production implication: None — verify Coverage, entitlement and go-live separately.
                </p>
              </div>
              <p className="text-xs text-[#D8CEDD] font-['Inter',sans-serif]">
                No timing, latency, throughput or production parity is implied.
              </p>
            </div>
          </div>
        </div>

        {/* Read the state before deciding what comes next */}
        <div className="flex flex-col items-start gap-4 w-full pt-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#18141B] font-['Inter',sans-serif]">
            Read the state before deciding what comes next.
          </h3>
          <p className="text-xs sm:text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
            Recommended pattern — not a live environment. These text-based meanings are conceptual; the exact lifecycle belongs to the contract.
          </p>

          {/* Forward States */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {forwardStates.map((state) => (
              <div
                key={state.title}
                className="p-4 bg-[#F1E7F7] rounded-xl border border-[#E3D7EA] flex flex-col items-start gap-1"
              >
                <h4 className="text-sm sm:text-base font-bold text-[#18141B] font-['Inter',sans-serif]">
                  {state.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-[#665F69] leading-relaxed font-['Inter',sans-serif]">
                  {state.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Failure / Degraded States */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {failureStates.map((state) => (
              <div
                key={state.title}
                className={`p-4 rounded-xl flex flex-col items-start gap-1 ${
                  state.warn
                    ? "bg-[#FFF0E7] border border-[#FBD6C6]"
                    : "bg-[#F1E7F7] border border-[#E3D7EA]"
                }`}
              >
                <h4 className="text-sm sm:text-base font-bold text-[#18141B] font-['Inter',sans-serif]">
                  {state.title}
                </h4>
                <p className="text-xs sm:text-[13px] text-[#665F69] leading-relaxed font-['Inter',sans-serif]">
                  {state.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Troubleshoot without exposing private state */}
        <div className="flex flex-col items-start gap-4 w-full pt-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#18141B] font-['Inter',sans-serif]">
            Troubleshoot without exposing private state.
          </h3>
          <p className="text-xs sm:text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
            Recommended patterns — not live environment messages. Exact recovery stays contract-defined.
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {troubleshootRow1.map((card) => (
              <div
                key={card.title}
                className="p-6 bg-white rounded-2xl border border-[#D8CEDD] shadow-sm flex flex-col items-start gap-2 hover:shadow-md transition-shadow"
              >
                <h4 className="text-base sm:text-lg font-bold text-[#18141B] font-['Inter',sans-serif]">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {troubleshootRow2.map((card) => (
              <div
                key={card.title}
                className="p-6 bg-white rounded-2xl border border-[#D8CEDD] shadow-sm flex flex-col items-start gap-2 hover:shadow-md transition-shadow"
              >
                <h4 className="text-base sm:text-lg font-bold text-[#18141B] font-['Inter',sans-serif]">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#665F69] font-normal leading-relaxed font-['Inter',sans-serif]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

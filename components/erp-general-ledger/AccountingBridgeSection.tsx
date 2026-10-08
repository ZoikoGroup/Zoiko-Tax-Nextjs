import React from "react";
import { FlowDirectionIcon, InfoIcon } from "./icons";

const flowSteps = [
  { num: "01", title: "Fiscal outcome" },
  { num: "02", title: "Mapping" },
  { num: "03", title: <>Journal / export<br />preparation</> },
  { num: "04", title: "Transfer" },
  { num: "05", title: <>Ledger<br />processing</> },
  { num: "06", title: "Reconciliation" },
];

const stages = [
  {
    num: "01",
    title: "Fiscal outcome",
    desc: (
      <>
        <span className="lg:whitespace-nowrap">Identify eligible, supported fiscal output and its evidence context. Eligibility for an interface does not make the fiscal result</span>
        <br className="hidden lg:inline" />
        <span>an accounting posting.</span>
      </>
    ),
  },
  {
    num: "02",
    title: "Mapping",
    desc: (
      <>
        <span className="lg:whitespace-nowrap">Apply customer-owned or governed mapping configuration. Chart-of-accounts and finance-dimension treatment must be</span>
        <br className="hidden lg:inline" />
        <span>approved for the enterprise context.</span>
      </>
    ),
  },
  {
    num: "03",
    title: "Journal / export preparation",
    desc: (
      <>
        <span className="lg:whitespace-nowrap">Prepare only the approved finance interface. This page does not define entries, debits, credits, fields or an accounting</span>
        <br className="hidden lg:inline" />
        <span>treatment.</span>
      </>
    ),
  },
  {
    num: "04",
    title: "Transfer",
    desc: (
      <>
        <span className="lg:whitespace-nowrap">Use the source-controlled API, batch, file or event route only where documented and supported. Transport, authentication</span>
        <br className="hidden lg:inline" />
        <span>and versions are contract-specific.</span>
      </>
    ),
  },
  {
    num: "05",
    title: "Ledger processing",
    desc: (
      <>
        <span className="lg:whitespace-nowrap">The enterprise ERP/GL applies its own processing and posting controls. A transfer or acceptance signal is not evidence that</span>
        <br className="hidden lg:inline" />
        <span>ledger posting completed.</span>
      </>
    ),
  },
  {
    num: "06",
    title: "Reconciliation",
    desc: (
      <>
        <span className="lg:whitespace-nowrap">Connect defined references and investigate governed variances. Status and variance semantics remain source-controlled;</span>
        <br className="hidden lg:inline" />
        <span>do not infer correctness from a match.</span>
      </>
    ),
  },
];

export default function AccountingBridgeSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-[#FAF3FF] py-20 lg:py-24 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            02 · ACCOUNTING BRIDGE
          </div>
        <h2 className="w-full max-w-[1050px] text-[#18141B] text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight">
          Prepare the handoff. Preserve the controls.
        </h2>
        <p className="w-full max-w-[1060px] text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
          <span className="lg:whitespace-nowrap">Each stage has a purpose and a publication boundary. Exact interfaces come from approved technical</span>
          <br className="hidden lg:inline" />
          <span>documentation, not from the diagram.</span>
        </p>
      </div>

      <div className="relative z-10 w-full max-w-[1320px] min-h-[210px] p-6 sm:p-8 bg-[#F4EEF9] rounded-3xl border border-[#E7D6F0] flex flex-col justify-between items-start gap-6 shadow-sm">
        <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
          CONCEPTUAL FLOW · NOT A RUNTIME CONTRACT
        </div>
        <div className="self-stretch flex flex-wrap lg:flex-nowrap justify-between items-center gap-2 sm:gap-3 lg:gap-4">
          {flowSteps.map((step, index) => (
            <React.Fragment key={step.num}>
              <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-12px)] lg:w-[169.33px] h-[112px] p-4 bg-white rounded-2xl border border-[#E7D6F0]/60 flex flex-col justify-between items-start shrink-0 shadow-sm">
                <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif]">
                  {step.num}
                </div>
                <div className="text-[#18141B] text-sm sm:text-base font-semibold font-['Inter',sans-serif] leading-tight">
                  {step.title}
                </div>
              </div>
              {index < flowSteps.length - 1 && (
                <div className="hidden lg:flex shrink-0 items-center justify-center text-[#D65A2C]">
                  <FlowDirectionIcon className="w-[15px] h-[13px]" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="relative z-10 self-stretch flex flex-col justify-start items-start">
        {stages.map((stage) => (
          <div
            key={stage.num}
            className="self-stretch py-5 border-b border-[#E5DFE8] flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-6"
          >
            <div className="w-9 shrink-0 text-[#D65A2C] text-sm font-bold font-['Inter',sans-serif]">
              {stage.num}
            </div>
            <div className="w-64 shrink-0 text-[#18141B] text-base sm:text-lg font-semibold font-['Inter',sans-serif] leading-6">
              {stage.title}
            </div>
            <div className="flex-1 text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-relaxed">
              {stage.desc}
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1280px] min-h-[125px] p-5 sm:p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] flex justify-start items-start gap-4 shadow-sm">
        <InfoIcon className="size-5 shrink-0 text-[#D65A2C] mt-0.5" />
        <div className="flex-1 flex flex-col justify-start items-start gap-1">
          <div className="self-stretch justify-start text-[#18141B] text-sm sm:text-base font-bold font-['Inter',sans-serif]">
            Context travels with the handoff
          </div>
          <p className="self-stretch justify-start text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
            <span className="lg:whitespace-nowrap">Keep approved entity, ledger, period, currency, mapping and currentness context visible at consequential handoffs. Do not assume that context or support is</span>
            <br className="hidden lg:inline" />
            <span>universal.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}

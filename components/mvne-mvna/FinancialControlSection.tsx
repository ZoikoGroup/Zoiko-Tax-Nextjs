import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function FinancialControlSection() {
  const reconSteps = [
    { num: "1", label: "CALCULATED", isOrange: false },
    { num: "2", label: "BILLED", isOrange: false },
    { num: "3", label: "COLLECTED", isOrange: false },
    { num: "4", label: "REPORTED", isOrange: false },
    { num: "5", label: "REMITTED / PAID", isOrange: false },
    { num: "6", label: "ACCOUNTING", isOrange: true },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Financial control
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Reconcile the positions around the decision.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
            Connect calculated, billed, collected, reported, remitted or paid, and accounting positions while preserving the tenant and legal-entity context that explains each variance.
          </p>
        </div>

        {/* 2 White Cards */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="min-h-64 p-6 sm:p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3.5 shadow-sm transition-transform hover:-translate-y-1 duration-200">
            <div className="self-stretch flex justify-between items-center">
              <span className="justify-start text-orange-600 text-xs font-semibold font-['Roboto_Mono']">
                01
              </span>
              <div className="size-2 bg-purple-100 rounded-full" />
            </div>
            <h3 className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">
              Remittance Orchestration
            </h3>
            <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">
              Prepare governed remittance instructions, review states and approvals for supported workflows. ZoikoTax does not imply fund custody or payment processing.
            </p>
          </div>

          <div className="min-h-64 p-6 sm:p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3.5 shadow-sm transition-transform hover:-translate-y-1 duration-200">
            <div className="self-stretch flex justify-between items-center">
              <span className="justify-start text-orange-600 text-xs font-semibold font-['Roboto_Mono']">
                02
              </span>
              <div className="size-2 bg-purple-100 rounded-full" />
            </div>
            <h3 className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">
              Reconciliation
            </h3>
            <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">
              Trace differences across calculated, billed, collected, reported, remitted or paid, and general-ledger positions. A matched record does not independently prove legal correctness.
            </p>
          </div>
        </div>

        {/* 6 Lifecycle Steps Pill Bar */}
        <div className="self-stretch p-4 sm:p-6 bg-purple-100 rounded-2xl grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-center">
          {reconSteps.map((step) => (
            <div key={step.num} className="flex items-center gap-2">
              <div
                className={`size-7 rounded-[999px] flex justify-center items-center shrink-0 ${
                  step.isOrange ? "bg-orange-600" : "bg-violet-950"
                }`}
              >
                <span className="text-white text-[10px] font-bold font-['Roboto_Mono']">
                  {step.num}
                </span>
              </div>
              <span className="justify-start text-zinc-900 text-[10px] sm:text-xs font-bold font-['Roboto_Mono']">
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

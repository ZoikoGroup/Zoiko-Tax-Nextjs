import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";
import { ArrowRightLeft, ClipboardCheck, GitCompareArrows, Scale, ShieldAlert } from "lucide-react";

export default function FinancialControlSection() {
  const reconPills = [
    "CALCULATED",
    "BILLED",
    "COLLECTED",
    "REPORTED",
    "REMITTED / PAID",
    "ACCOUNTING",
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-9">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Financial control
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Connect invoice, remittance and accounting positions without overstating the platform’s role.
          </h2>
        </div>

        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left Card: Remittance Orchestration (Dark Violet) */}
          <div className="min-h-96 p-6 sm:p-8 bg-violet-950 rounded-3xl flex flex-col justify-start items-start gap-5 shadow-xl">
            <div className="size-10 bg-white/5 rounded-xl flex justify-center items-center">
              <ClipboardCheck className="w-6 h-6 text-orange-300" strokeWidth={1.8} />
            </div>

            <h3 className="justify-start text-white text-2xl sm:text-3xl font-bold font-['Inter']">
              Remittance Orchestration
            </h3>

            <p className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6 flex-1">
              Prepare governed instructions, approvals, due-date context and evidence for supported remittance workflows.
            </p>

            <div className="self-stretch p-4 bg-white/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-white/10 flex items-start gap-2.5 mt-auto">
              <ShieldAlert className="w-4 h-4 text-orange-300 shrink-0 mt-0.5" strokeWidth={2} />
              <p className="flex-1 justify-start text-white text-xs font-semibold font-['Inter'] leading-5">
                ZoikoTax prepares governed instructions and approvals. It does not imply fund custody or payment processing.
              </p>
            </div>
          </div>

          {/* Right Card: Reconciliation (White) */}
          <div className="min-h-96 p-6 sm:p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start gap-5 shadow-sm">
            <div className="size-10 bg-purple-100 rounded-xl flex justify-center items-center">
              <GitCompareArrows className="w-6 h-6 text-orange-600" strokeWidth={1.8} />
            </div>

            <h3 className="justify-start text-zinc-900 text-2xl sm:text-3xl font-bold font-['Inter']">
              Reconciliation
            </h3>

            <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">
              Connect calculated, billed, collected, reported, remitted/paid and accounting positions while retaining the facts behind each variance.
            </p>

            <div className="self-stretch flex flex-wrap justify-start items-start gap-1.5 pt-2">
              {reconPills.map((pill) => (
                <div
                  key={pill}
                  className="px-3.5 py-2 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-start shadow-sm"
                >
                  <span className="justify-start text-zinc-900 text-xs font-semibold font-['Roboto_Mono']">
                    {pill}
                  </span>
                </div>
              ))}
            </div>

            <p className="self-stretch justify-start text-zinc-900 text-xs font-semibold font-['Inter'] mt-auto pt-2">
              A matched position does not independently prove legal correctness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { CreditCard, GitCompareArrows, Route, Scale } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function FinancialPositionsSection() {
  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-9">
        <div className="w-full max-w-[1070px] flex flex-col justify-start items-start gap-3.5">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Invoice / remittance / reconciliation
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[47.52px]">
            Connect financial positions without obscuring who remains responsible.
          </h2>
        </div>

        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1: Remittance Orchestration (Dark) */}
          <div className="min-h-72 p-7 sm:p-8 bg-violet-950 rounded-3xl flex flex-col justify-between items-start gap-6 shadow-xl">
            <div className="self-stretch flex justify-between items-center">
              <span className="justify-start text-orange-300 text-xs font-bold font-['Roboto_Mono']">
                01
              </span>
              <div className="size-6 flex items-center justify-center text-white">
                <Route className="size-5" />
              </div>
            </div>

            <div className="self-stretch flex flex-col gap-3">
              <h3 className="justify-start text-white text-2xl font-bold font-['Inter']">
                Remittance Orchestration
              </h3>
              <p className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">
                Prepare governed instructions, approvals, due-state tracking and evidence for supported remittance workflows. ZoikoTax does not imply fund custody or payment processing.
              </p>
            </div>

            <div className="self-stretch justify-start text-orange-300 text-xs font-semibold font-['Roboto_Mono'] leading-4 tracking-wider">
              INSTRUCTIONS + APPROVALS · NOT CUSTODY
            </div>
          </div>

          {/* Card 2: Reconciliation (Light) */}
          <div className="min-h-72 p-7 sm:p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-between items-start gap-6 shadow-sm">
            <div className="self-stretch flex justify-between items-center">
              <span className="justify-start text-orange-600 text-xs font-bold font-['Roboto_Mono']">
                02
              </span>
              <div className="size-6 flex items-center justify-center text-violet-950">
                <GitCompareArrows className="size-5" />
              </div>
            </div>

            <div className="self-stretch flex flex-col gap-3">
              <h3 className="justify-start text-zinc-900 text-2xl font-bold font-['Inter']">
                Reconciliation
              </h3>
              <p className="self-stretch justify-start text-zinc-600 text-base font-normal font-['Inter'] leading-6">
                Relate calculated, billed, collected, reported, remitted/paid and accounting positions while preserving counterparty and entity attribution.
              </p>
            </div>

            <div className="self-stretch justify-start text-zinc-900 text-xs font-semibold font-['Inter'] leading-5">
              A matched position does not independently prove legal correctness.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

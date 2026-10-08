"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";
import { ClipboardCheck, CreditCard, GitCompareArrows, Scale } from "lucide-react";

export default function FinancialControlSection() {
  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-9">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Financial control
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-4xl font-bold font-['Inter'] leading-tight">
            Connect invoice, remittance and reconciliation positions.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-8">
            Keep the fiscal story coherent across calculated, billed, collected, reported, remitted or paid, and accounting positions.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Remittance */}
          <div className="p-7 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4 shadow-sm min-h-60">
            <div className="size-10 bg-violet-100 rounded-xl flex justify-center items-center text-orange-600">
              <ClipboardCheck className="w-5 h-5" />
            </div>
            <h3 className="justify-start text-zinc-900 text-2xl font-bold font-['Inter']">
              Remittance Orchestration
            </h3>
            <p className="flex-1 self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">
              Prepare governed remittance instructions, approval states and supporting evidence for downstream execution.
            </p>
            <div className="self-stretch justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5 pt-2">
              ZoikoTax does not imply fund custody or payment processing.
            </div>
          </div>

          {/* Card 2: Reconciliation */}
          <div className="p-7 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4 shadow-sm min-h-60">
            <div className="size-10 bg-violet-100 rounded-xl flex justify-center items-center text-orange-600">
              <GitCompareArrows className="w-5 h-5" />
            </div>
            <h3 className="justify-start text-zinc-900 text-2xl font-bold font-['Inter']">
              Reconciliation
            </h3>
            <p className="flex-1 self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">
              Connect calculated, billed, collected, reported, remitted or paid, and accounting positions so differences can be investigated with lineage.
            </p>
            <div className="self-stretch justify-start text-orange-600 text-xs font-bold font-['Inter'] leading-5 pt-2">
              A matched position does not independently prove legal correctness.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

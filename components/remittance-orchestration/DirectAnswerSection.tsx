"use client";

import React from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";

export default function DirectAnswerSection() {
  const provides = [
    "Instruction preparation & approval workflows",
    "Multilateral regulatory validation gates",
    "Supported handoff schema exports (ISO 20022 ready)",
    "Immutable control timeline evidence logs",
    "Replay manifests for corporate treasury audits",
  ];

  const doesNotDo = [
    "No custody of client funds or balances",
    "No bank account maintenance or account provision",
    "No payment execution or direct clearing houses access",
    "No autonomous AI money movements without approval",
    "No replacement of client treasury responsibilities",
  ];

  return (
    <section className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image - Full Opacity */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/remittance-orchestration/Operational Challenges Section.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col items-start gap-4 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
              DIRECT ANSWER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18141B]">
              What is Remittance Orchestration?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-[#535055]">
              Remittance Orchestration in ZoikoTax is the governed workflow layer for preparing remittance instructions, validating readiness, routing approvals, coordinating supported external handoff, and preserving reconciliation evidence. It ensures your compliance decisions stay linked directly to banking confirmation outcomes.
            </p>
          </div>

          {/* 2 Column Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* What ZoikoTax Provides Card */}
            <div className="rounded-2xl border border-[#D8CEDD] bg-[#FAF8FC]/85 p-6 sm:p-8 shadow-sm flex flex-col gap-5">
              <h3 className="text-xl font-semibold text-[#D65A2C]">
                What ZoikoTax Provides
              </h3>
              <div className="flex flex-col gap-3.5">
                {provides.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-normal text-[#18141B] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What ZoikoTax Does NOT Do Card */}
            <div className="rounded-2xl border border-[#D8CEDD] bg-white/95 p-6 sm:p-8 shadow-sm flex flex-col gap-5">
              <h3 className="text-xl font-semibold text-[#18141B]">
                What ZoikoTax Does NOT Do
              </h3>
              <div className="flex flex-col gap-3.5">
                {doesNotDo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-700 mt-0.5">
                      <X className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm font-normal text-[#535055] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

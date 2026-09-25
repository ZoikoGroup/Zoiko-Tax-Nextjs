"use client";

import React from "react";

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
    <section className="self-stretch px-4 sm:px-8 lg:px-20 py-16 sm:py-20 bg-purple-50 flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="justify-start text-orange-600 text-sm font-bold font-['Sora']">
          DIRECT ANSWER
        </div>
        <h2 className="justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
          What is Remittance Orchestration?
        </h2>
        <p className="self-stretch justify-start text-neutral-600 text-lg sm:text-xl font-medium  leading-8">
          Remittance Orchestration in ZoikoTax is the governed workflow layer for preparing remittance instructions, validating readiness, routing approvals, coordinating supported external handoff, and preserving reconciliation evidence. It ensures your compliance decisions stay linked directly to banking confirmation outcomes.
        </p>
      </div>

      <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-7 bg-purple-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5">
          <h3 className="justify-start text-orange-600 text-xl font-semibold font-['Sora'] leading-6">
            What ZoikoTax Provides
          </h3>
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            {provides.map((item, idx) => (
              <div
                key={idx}
                className="self-stretch justify-start text-zinc-900 text-sm font-normal"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

        <div className="p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5">
          <h3 className="justify-start text-zinc-900 text-xl font-semibold font-['Sora'] leading-6">
            What ZoikoTax Does NOT Do
          </h3>
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            {doesNotDo.map((item, idx) => (
              <div
                key={idx}
                className="self-stretch justify-start text-neutral-600 text-sm font-normal"
              >
                ✗ {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

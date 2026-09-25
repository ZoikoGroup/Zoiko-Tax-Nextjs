"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function TraceabilitySection() {
  const steps = [
    {
      num: "01",
      title: "Source Payload",
      desc: "Mirror raw BSS/Billing events securely.",
    },
    {
      num: "02",
      title: "Schema Normalization",
      desc: "Enforce consistent tax-mapping classifications.",
    },
    {
      num: "03",
      title: "Determination Run",
      desc: "Apply active, versioned jurisdictional guidelines.",
    },
    {
      num: "04",
      title: "Shadow Compare",
      desc: "Identify and reconcile legacy system variances.",
    },
    {
      num: "05",
      title: "Evidence Crypt-Lock",
      desc: "Commit processed records to immutable audit logs.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Replay Lineage
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Verifiable Compliance Traceability Flow
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            From active transaction ingest up to retroactive audit, trace every computation with verifiable provenance.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 items-stretch">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3 shadow-sm min-h-[160px]"
            >
              <div className="justify-start text-orange-600 text-xs font-bold font-['Roboto_Mono']">
                {step.num}
              </div>
              <h3 className="justify-start text-zinc-900 text-base font-bold font-['Inter']">
                {step.title}
              </h3>
              <p className="self-stretch justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

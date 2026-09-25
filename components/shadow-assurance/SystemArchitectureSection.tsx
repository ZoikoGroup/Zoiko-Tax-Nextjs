"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function SystemArchitectureSection() {
  const steps = [
    {
      step: "STEP 1: SOURCE SYSTEMS",
      title: "Production Billing BSS",
      desc: "Read-only payload stream extraction.",
    },
    {
      step: "STEP 2: ISOLATION BUS",
      title: "Tenant Isolation Fabric",
      desc: "Anonymizes and filters payload attributes.",
    },
    {
      step: "STEP 3: ASSURANCE EVALUATION",
      title: "ZoikoTax Parallel Engine",
      desc: "Calculates shadow results and files trace evidence.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            SYSTEM ARCHITECTURE
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
            Isolated Assurance Processing
          </h2>
          <p className="self-stretch justify-start text-zinc-900/70 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Production systems operate completely outside the shadow write boundary.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4 shadow-sm"
            >
              <div className="justify-start text-orange-500 text-xs font-normal font-['JetBrains_Mono']">
                {st.step}
              </div>
              <div className="justify-start text-zinc-900 text-lg font-bold font-['Inter']">
                {st.title}
              </div>
              <div className="justify-start text-stone-500 text-xs font-normal font-['Inter']">
                {st.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

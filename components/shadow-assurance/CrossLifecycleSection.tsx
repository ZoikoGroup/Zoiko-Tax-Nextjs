"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function CrossLifecycleSection() {
  const stages = [
    { step: "Connect", title: "Tax Determination" },
    { step: "Verify", title: "Exemptions Control" },
    { step: "Attribute", title: "Obligations Track" },
    { step: "Review", title: "Compliance filing" },
    { step: "Clear", title: "E-Invoicing Clearance" },
  ];

  return (
    <section className="w-full relative bg-[#FAF3FF] flex flex-col justify-start items-start overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            CROSS-LIFECYCLE INTERLOCKS
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
            Replay Outcomes Across Every Stage
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            The parallel shadow outcome feeds directly into continuous assurance stages.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="p-5 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3 shadow-sm min-h-36"
            >
              <div className="justify-start text-orange-600 text-xs font-normal font-['JetBrains_Mono'] uppercase tracking-wider">
                {stage.step}
              </div>
              <div className="justify-start text-zinc-900 text-base font-bold font-['Inter']">
                {stage.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

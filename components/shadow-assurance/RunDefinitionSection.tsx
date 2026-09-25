"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function RunDefinitionSection() {
  const runCards = [
    { label: "Active Cohort", val: "Global CPaaS Bundles" },
    { label: "Service Focus", val: "Voice/SMS hybrid products" },
    { label: "Tolerance Profile", val: "Zero Variance (Exact Match)" },
    { label: "Pinned Baseline", val: "Incumbent Engine v12.4" },
    { label: "Sampling Rate", val: "100% (Full Audit Trail)" },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            RUN DEFINITION
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
            Assurance Run Scope &amp; Sampling
          </h2>
          <p className="self-stretch justify-start text-zinc-900/70 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Pin exact configurations to compare comparable baselines.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {runCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-center items-start gap-3 shadow-sm min-h-[112px]"
            >
              <div className="justify-start text-orange-500 text-xs font-normal font-['JetBrains_Mono']">
                {card.label}
              </div>
              <div className="justify-start text-zinc-900 text-lg font-bold font-['Inter']">
                {card.val}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

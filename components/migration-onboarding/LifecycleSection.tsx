"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function LifecycleSection() {
  const stages = [
    {
      step: "01",
      title: "System & Source Profiling",
      objective: "Identify billing engines, GL structures, data feeds, and local jurisdictions.",
      evidence: "Verified data source connection manifests and system-owner registry.",
      exitCondition: "100% catalogued entities with zero blind spots.",
    },
    {
      step: "02",
      title: "Versioned Semantic Mapping",
      objective: "Align billing SKUs and product codes to governed tax classifications.",
      evidence: "Immutable schema definition files locked to audit hashes.",
      exitCondition: "Approved mapping sign-off from qualified tax controllers.",
    },
    {
      step: "03",
      title: "Baseline Reconciliation",
      objective: "Examine parallel calculation differences against legacy engines.",
      evidence: "Transaction variance reports and computational reconciliation runs.",
      exitCondition: "Variance levels fall within allowed tolerance bands.",
    },
    {
      step: "04",
      title: "Live Parallel Shadow Run",
      objective: "Evaluate real-time operational feeds without committing fiscal changes.",
      evidence: "Non-impact Shadow logs compared daily against active legacy lines.",
      exitCondition: "30 consecutive days of clean comparison data logs.",
    },
    {
      step: "05",
      title: "Contractual Transition",
      objective: "Shift authority to active ZoikoTax systems in a controlled fashion.",
      evidence: "Co-signed cutover agreement manifest and rollback contingency path.",
      exitCondition: "Authority transitioned safely with duplicate protection active.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Lifecycle Stages
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Staged Governance: Stage Gates &amp; Exit Controls
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Every step of the ZoikoTax onboarding lifecycle demands explicit inputs, verifiable artifact packages, and human sign-off.
          </p>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          {stages.map((stage) => (
            <div
              key={stage.step}
              className="self-stretch p-5 sm:p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-6 shadow-sm"
            >
              <div className="size-12 sm:size-14 rounded-[999px] bg-purple-50 flex justify-center items-center shrink-0">
                <span className="text-orange-600 text-lg sm:text-xl font-bold font-['Roboto_Mono']">
                  {stage.step}
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-start items-start gap-2">
                <h3 className="justify-start text-zinc-900 text-lg sm:text-xl font-bold font-['Inter']">
                  {stage.title}
                </h3>
                <div className="text-sm font-['Inter'] leading-relaxed">
                  <span className="text-zinc-900 font-semibold">Objective: </span>
                  <span className="text-stone-500 font-normal">{stage.objective}</span>
                </div>
                <div className="text-sm font-['Inter'] leading-relaxed">
                  <span className="text-zinc-900 font-semibold">Evidence Package: </span>
                  <span className="text-stone-500 font-normal">{stage.evidence}</span>
                </div>
                <div className="text-sm font-['Inter'] leading-relaxed">
                  <span className="text-zinc-900 font-semibold">Exit Condition: </span>
                  <span className="text-teal-800 font-semibold">{stage.exitCondition}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

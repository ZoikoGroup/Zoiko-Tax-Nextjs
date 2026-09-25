"use client";

import React from "react";
import Image from "next/image";

export default function AIBoundarySection() {
  const assists = [
    "Flag anomalous liabilities and potential variance errors before preparers build packets.",
    "Automatically suggest localized regulatory tax code categorizations for review.",
    "Parse external bank confirmation files and summarize reconciliation mismatches.",
  ];

  const cannotDo = [
    "Never auto-approve or sign off on remittance instructions under any scope.",
    "Never bypass system validation checklist overrides or credentials gates.",
    "Never autonomously direct payment executions outside of human verification loops.",
  ];

  return (
    <section className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image - Full Opacity */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/remittance-orchestration/AI Boundary Background Image.png"
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
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#F4A261]">
              GOVERNED COGNITION BOUNDARY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              AI assists. Approved rules decide. Evidence proves.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-zinc-300">
              To maintain strict corporate governance, autonomous models cannot execute payments or overwrite compliance configurations.
            </p>
          </div>

          {/* 2 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Left Card: How AI Assists */}
            <div className="flex flex-col justify-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              <h3 className="text-xl font-semibold text-[#F4A261]">
                How AI Assists Your Teams
              </h3>
              <div className="flex flex-col gap-3.5">
                {assists.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-sm text-[#F4A261] font-bold mt-0.5">•</span>
                    <span className="text-sm font-normal text-zinc-300 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: What AI Cannot Do */}
            <div className="flex flex-col justify-start gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm shadow-xl">
              <h3 className="text-xl font-semibold text-white">
                What AI Cannot &amp; Will Not Do
              </h3>
              <div className="flex flex-col gap-3.5">
                {cannotDo.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-sm text-rose-400 font-bold mt-0.5">•</span>
                    <span className="text-sm font-normal text-zinc-300 leading-relaxed">
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

"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function OperatingMatrixSection() {
  return (
    <section className="w-full relative bg-purple-300 flex flex-col justify-start items-start overflow-hidden">
      {/* Background Pattern */}
      <WhiteBgPattern className="object-cover object-center opacity-70" />
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/80 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Operating Matrix
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Onboarding Readiness vs. Active Market Coverage
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Technical onboarding verification remains separate from active jurisdiction-specific country package validation.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1 */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4 shadow-sm">
            <h3 className="justify-start text-zinc-900 text-xl font-bold font-['Inter']">
              Technical Integration Readiness
            </h3>
            <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">
              Measures BSS connection speed, payload normalization capabilities, database connection reliability, and API latency tolerances during dry-run testing.
            </p>
            <div className="mt-auto pt-2">
              <div className="px-3 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-teal-800 inline-flex justify-start items-start">
                <span className="justify-start text-teal-800 text-xs font-semibold font-['Inter']">
                  Illustrative readiness
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4 shadow-sm">
            <h3 className="justify-start text-zinc-900 text-xl font-bold font-['Inter']">
              Market Pack Activation State
            </h3>
            <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">
              Determines legal regulatory rules, authority templates, and filing form support in specific physical target markets before active cutover.
            </p>
            <div className="mt-auto pt-2">
              <div className="px-3 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-yellow-700 inline-flex justify-start items-start">
                <span className="justify-start text-yellow-700 text-xs font-semibold font-['Inter']">
                  Pack Validation Required
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function AIBoundarySection() {
  const mayItems = [
    "Suggest tax classification mapping options for manual audit review.",
    "Pinpoint computation anomalies or payload syntax mismatches in seconds.",
    "Compile and summarize compliance logs across active entities.",
  ];

  const mayNotItems = [
    "Commit final, binding tax rate classifications to live billing directories.",
    "Waive, bypass, or override active transition readiness gates.",
    "Sign-off on active operational cutover or transition contracts.",
  ];

  return (
    <section className="w-full relative bg-purple-100 flex flex-col justify-start items-start overflow-hidden">
      {/* Background Pattern */}
      <WhiteBgPattern className="object-cover object-center opacity-70" />
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/75 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Intelligence Fabric
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            The Governed AI Boundary: Advisory, Not Authoritative
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            AI is utilized exclusively in assistive, non-impact roles. Critical compliance decisions require human verification.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* AI MAY */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start gap-5 shadow-sm">
            <div className="justify-start text-orange-600 text-lg font-bold font-['Inter']">
              AI MAY:
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {mayItems.map((item) => (
                <div key={item} className="self-stretch justify-start text-slate-900 text-sm sm:text-base font-normal font-['Inter'] flex items-start gap-2">
                  <span className="text-teal-700 font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI MAY NOT */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5 shadow-sm">
            <div className="justify-start text-red-600 text-lg font-bold font-['Inter']">
              AI MAY NOT:
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {mayNotItems.map((item) => (
                <div key={item} className="self-stretch justify-start text-stone-500 text-sm sm:text-base font-normal font-['Inter'] flex items-start gap-2">
                  <span className="text-red-600 font-bold shrink-0">✗</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

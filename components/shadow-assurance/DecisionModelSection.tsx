"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function DecisionModelSection() {
  const steps = [
    {
      num: "01",
      title: "Connect",
      desc: "Mirror active billing transaction payloads read-only.",
      tag: "Connect",
    },
    {
      num: "02",
      title: "Compare",
      desc: "Isolate differences on rules, taxes and obligations.",
      tag: "Compare",
    },
    {
      num: "03",
      title: "Decide",
      desc: "Initiate governed cutover or flag for investigation.",
      tag: "Decide",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            OPERATIONAL DECISION MODEL
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
            Connect, Compare, Decide
          </h2>
          <p className="self-stretch justify-start text-zinc-900/70 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            A structured workflow designed for governed transaction assurance.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {steps.map((step) => (
            <div
              key={step.num}
              className="min-h-48 p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4 shadow-sm"
            >
              <div className="justify-start text-orange-400 text-xs font-normal font-['JetBrains_Mono']">
                {step.num}
              </div>
              <div className="justify-start text-zinc-900 text-xl font-bold font-['Inter']">
                {step.title}
              </div>
              <div className="flex-1 justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">
                {step.desc}
              </div>
              <div className="px-3 py-1 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-300 inline-flex justify-start items-start">
                <span className="justify-start text-orange-500 text-xs font-semibold font-['Inter'] uppercase">
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

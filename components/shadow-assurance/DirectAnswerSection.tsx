"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function DirectAnswerSection() {
  const isPoints = [
    "Governed parallel verification against production payload inputs",
    "A safe space to run shadow configurations next to incumbent tax engines",
    "Evidence-backed comparison that proves equivalence before change",
    "Granular difference explanation across jurisdiction levels",
  ];

  const isNotPoints = [
    "A production-write action that modifies active invoice records",
    "An autonomous decision maker that overrides human governance",
    "A legal-correctness guarantor (agreement does not constitute legal proof)",
    "A direct filing or monetary transaction system",
  ];

  return (
    <section className="w-full relative bg-[#FAF3FF] flex flex-col justify-start items-start overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            DIRECT ANSWER
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
            What is Shadow Assurance?
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            A non-disruptive compliance mechanism for validating tax outcomes before active cutover.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Card: IS */}
          <div className="p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5 shadow-sm">
            <div className="justify-start text-teal-800 text-xl font-bold font-['Inter']">
              ✓ Shadow Assurance IS
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {isPoints.map((item, idx) => (
                <div key={idx} className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-relaxed flex items-start gap-2">
                  <span>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card: IS NOT */}
          <div className="p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5 shadow-sm">
            <div className="justify-start text-orange-600 text-xl font-bold font-['Inter']">
              ✗ Shadow Assurance IS NOT
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {isNotPoints.map((item, idx) => (
                <div key={idx} className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-relaxed flex items-start gap-2">
                  <span>•</span>
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

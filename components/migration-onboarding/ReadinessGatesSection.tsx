"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function ReadinessGatesSection() {
  const gates = [
    {
      title: "Comparison Scope Gate",
      status: "PASSED",
      statusStyle: "outline-teal-800 text-teal-800",
      desc: "All system profiles mapped and compared with baseline logs.",
    },
    {
      title: "Discrepancy Clearance Gate",
      status: "PASSED",
      statusStyle: "outline-teal-800 text-teal-800",
      desc: "No critical or unresolved compliance exceptions remain.",
    },
    {
      title: "Evidence Lock Gate",
      status: "PASSED",
      statusStyle: "outline-teal-800 text-teal-800",
      desc: "Verifiable transaction histories hashed and committed.",
    },
    {
      title: "Country Pack Clearance",
      status: "PENDING",
      statusStyle: "outline-yellow-700 text-yellow-700",
      desc: "Governed country pack activated and fully certified.",
    },
    {
      title: "API & Integration Port Gate",
      status: "PASSED",
      statusStyle: "outline-teal-800 text-teal-800",
      desc: "BSS billing engines securely linked without transaction loss.",
    },
    {
      title: "Business & Compliance Signoff",
      status: "PENDING",
      statusStyle: "outline-yellow-700 text-yellow-700",
      desc: "Formal regulatory owner approval manifest locked.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Pre-Cutover Checklist
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Independent Operational Readiness Gates
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            To prevent transition failure, ZoikoTax rejects unified progress scorecards in favor of strict, isolated gating. All checks must pass.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {gates.map((gate) => (
            <div
              key={gate.title}
              className="p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3 shadow-sm"
            >
              <div className="self-stretch flex justify-between items-center gap-2">
                <h3 className="justify-start text-zinc-900 text-base font-bold font-['Inter']">
                  {gate.title}
                </h3>
                <div
                  className={`px-3 py-1.5 rounded-[999px] outline outline-1 outline-offset-[-1px] ${gate.statusStyle} flex justify-start items-start shrink-0`}
                >
                  <span className="text-xs font-semibold font-['Inter']">{gate.status}</span>
                </div>
              </div>
              <p className="justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-relaxed">
                {gate.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

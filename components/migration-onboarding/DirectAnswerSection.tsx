"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function DirectAnswerSection() {
  const isPoints = [
    {
      label: "Evidence-Backed:",
      desc: "Every step requires deterministic logs and approvals before advancing.",
    },
    {
      label: "Federated-Friendly:",
      desc: "Coexists seamlessly with incumbent tax engines.",
    },
    {
      label: "Risk-Isolated:",
      desc: "Protects active billing lines using parallel Shadow Assurance lanes.",
    },
    {
      label: "Audit-Replayable:",
      desc: "Supports retroactive execution replay to prove correctness.",
    },
  ];

  const isNotPoints = [
    {
      label: "One-Click Replacement:",
      desc: "No forced black-box database transformations.",
    },
    {
      label: "Automatic Authority Transfer:",
      desc: "Gate checks require human-in-the-loop review.",
    },
    {
      label: "Blind Cutover:",
      desc: "Does not skip verification or live baseline validation.",
    },
    {
      label: "Universal Claim Engine:",
      desc: "Respects local deployment configurations and market pack boundaries.",
    },
  ];

  return (
    <section className="w-full relative bg-[#FAF3FF] flex flex-col justify-start items-start overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Direct Answer
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Is ZoikoTax a forced system replacement?
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            No. Retain and Federated models remain valid paths. Migration is staged, evidence-led, and subject to independent gates rather than immediate replacement or automatic authority transfer.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Card: IS */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5 shadow-sm">
            <div className="justify-start text-teal-800 text-lg font-bold font-['Inter']">
              ZOIKOTAX MIGRATION IS:
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {isPoints.map((point) => (
                <div key={point.label} className="self-stretch justify-start text-zinc-900 text-base font-normal font-['Inter'] leading-relaxed">
                  <span className="text-teal-800 font-bold mr-2">✓</span>
                  <span className="font-semibold">{point.label}</span>
                  <span className="text-zinc-900"> {point.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card: IS NOT */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5 shadow-sm">
            <div className="justify-start text-red-600 text-lg font-bold font-['Inter']">
              ZOIKOTAX MIGRATION IS NOT:
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              {isNotPoints.map((point) => (
                <div key={point.label} className="self-stretch justify-start text-zinc-900 text-base font-normal font-['Inter'] leading-relaxed">
                  <span className="text-red-600 font-bold mr-2">✗</span>
                  <span className="font-semibold">{point.label}</span>
                  <span className="text-zinc-900"> {point.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

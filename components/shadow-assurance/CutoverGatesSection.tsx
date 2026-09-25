"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function CutoverGatesSection() {
  const gates = [
    {
      title: "Compare Parity",
      status: "100.0% Verified",
      desc: "No unexplained critical tax calculation discrepancies remain.",
    },
    {
      title: "Security Verification",
      status: "Passed",
      desc: "Data isolation verified by security control center.",
    },
    {
      title: "Country Pack Coverage",
      status: "Activated",
      desc: "All required local regulatory rule packs configured.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            MIGRATION READINESS
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
            Governed Cutover Gates
          </h2>
          <p className="self-stretch justify-start text-zinc-900/70 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Validate clear evidence parameters before launching live tax engines.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {gates.map((gate, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4 shadow-sm min-h-44"
            >
              <div className="justify-start text-zinc-900 text-lg font-bold font-['Inter']">
                {gate.title}
              </div>
              <div className="justify-start text-orange-500 text-sm font-semibold font-['Inter']">
                {gate.status}
              </div>
              <div className="justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-5">
                {gate.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

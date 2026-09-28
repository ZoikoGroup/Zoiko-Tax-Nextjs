"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function RolesAlignmentSection() {
  const roles = [
    {
      title: "Executive Sponsor",
      desc: "Approves overall transition budget, strategic program path, and final operational cutover signs.",
    },
    {
      title: "Tax / Regulatory Director",
      desc: "Validates semantic mappings, exemption rule configurations, and final jurisdictional filings.",
    },
    {
      title: "Revenue Assurance Lead",
      desc: "Monitors daily reconciliation variance thresholds and parallel Shadow computation agreement.",
    },
    {
      title: "Billing / Integration Engineer",
      desc: "Establishes secure BSS endpoints, payload parsing logic, and logs ingestion protocols.",
    },
    {
      title: "Security & Privacy Officer",
      desc: "Ensures tenant isolation, data residency compliance, and lease-privilege access keys.",
    },
    {
      title: "Transition Controller",
      desc: "Manages pre-cutover checklist gates and contract verification executions.",
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Program Controls
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Roles &amp; Responsibility Alignment
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Enforce strict accountability with fine-grained role mapping across technology, tax, and administrative leads.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          {roles.map((role) => (
            <div
              key={role.title}
              className="p-6 bg-white rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3 shadow-sm"
            >
              <h3 className="justify-start text-indigo-950 text-base font-bold font-['Inter']">
                {role.title}
              </h3>
              <p className="self-stretch justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-5">
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

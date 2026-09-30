"use client";

import React from "react";
import { AlertCircle } from "lucide-react";

export default function RemittanceReconciliationSection() {
  const steps = [
    {
      num: "01",
      title: "Governed instruction",
      desc: "Build supported remittance instructions from approved entity, authority and obligation context.",
    },
    {
      num: "02",
      title: "Approval and release",
      desc: "Route maker-checker approval and preserve the release event. ZoikoTax does not imply custody of funds.",
    },
    {
      num: "03",
      title: "Position matching",
      desc: "Compare determined, reported, filed and remittance positions across supported references.",
    },
    {
      num: "04",
      title: "Exception handling",
      desc: "Surface missing, blocked, unsupported and unmatched positions with explicit escalation paths.",
    },
  ];

  return (
    <section className="w-full bg-purple-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-9">
        {/* Section Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Remittance and reconciliation
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[50.16px]">
            Govern the instruction. Reconcile the position. Escalate the exception.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Operational control without overstating what a matched balance or completed payment workflow proves.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="min-h-48 p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3 transition-shadow hover:shadow-sm"
            >
              <div className="justify-start text-orange-600 text-xs font-bold font-['Inter']">
                {st.num}
              </div>
              <div className="self-stretch justify-start text-zinc-900 text-lg font-bold font-['Inter']">
                {st.title}
              </div>
              <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">
                {st.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Notice Banner */}
        <div className="self-stretch p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-200 flex items-start gap-3 shadow-xs">
          <AlertCircle className="size-5 text-orange-600 shrink-0 mt-0.5" />
          <div className="flex-1 justify-start text-zinc-900 text-sm font-semibold font-['Inter'] leading-5">
            Matched positions support control and investigation; they do not independently prove that the underlying legal interpretation or monetary outcome is correct.
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import {
  Search,
  CheckCircle,
  PlayCircle,
  ShieldCheck,
  Briefcase,
  AlertTriangle,
  XCircle,
  HelpCircle,
} from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function CoverageBuyingGateSection() {
  const states = [
    {
      state: "Research",
      meaning:
        "Sources and applicability are being researched; not ready for operational use.",
      icon: Search,
      iconColor: "text-orange-600",
    },
    {
      state: "Validation",
      meaning:
        "Interpretation and content are undergoing governed verification and testing.",
      icon: CheckCircle,
      iconColor: "text-orange-600",
    },
    {
      state: "Pilot",
      meaning:
        "Limited approved scope is available for controlled pilot use.",
      icon: PlayCircle,
      iconColor: "text-orange-600",
    },
    {
      state: "Production",
      meaning:
        "The named capability is approved for stated jurisdiction, pack and operating mode.",
      icon: ShieldCheck,
      iconColor: "text-teal-800",
    },
    {
      state: "Managed",
      meaning:
        "The named capability is available through an approved managed workflow.",
      icon: Briefcase,
      iconColor: "text-teal-800",
    },
    {
      state: "Suspended",
      meaning:
        "Previously available scope is temporarily unavailable; do not treat as production-ready.",
      icon: AlertTriangle,
      iconColor: "text-pink-800",
    },
    {
      state: "Withdrawn",
      meaning: "Scope is no longer offered for production use.",
      icon: XCircle,
      iconColor: "text-pink-800",
    },
    {
      state: "Status unavailable",
      meaning:
        "Readiness is unknown or not published; absence of status is not support.",
      icon: HelpCircle,
      iconColor: "text-orange-600",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-9">
        {/* Section Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Coverage buying gate
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[50.16px]">
            Readiness is capability-specific — and unknown is a real state.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Evaluate each jurisdiction, capability, pack and operating model on its current approved status. One production capability does not imply another is ready.
          </p>
        </div>

        {/* Readiness Table Card */}
        <div className="self-stretch bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="self-stretch px-6 py-3.5 bg-violet-950 flex justify-start items-center gap-4">
            <div className="w-48 sm:w-60 justify-start text-white text-xs font-bold font-['Inter'] uppercase tracking-wider shrink-0">
              READINESS STATE
            </div>
            <div className="flex-1 justify-start text-white text-xs font-bold font-['Inter'] uppercase tracking-wider">
              CAPABILITY-SPECIFIC MEANING
            </div>
          </div>

          {/* Table Rows */}
          {states.map((row, idx) => {
            const Icon = row.icon;
            const isAlt = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`self-stretch px-6 py-4 ${
                  isAlt ? "bg-stone-100/70" : "bg-white"
                } ${
                  idx < states.length - 1 ? "border-b border-zinc-200" : ""
                } flex flex-col sm:flex-row justify-start sm:items-center gap-2 sm:gap-4`}
              >
                <div className="w-48 sm:w-60 flex items-center gap-2.5 shrink-0">
                  <Icon className={`size-4 ${row.iconColor} shrink-0`} />
                  <span className="justify-start text-zinc-900 text-sm font-bold font-['Inter']">
                    {row.state}
                  </span>
                </div>
                <div className="flex-1 justify-start text-stone-600 text-sm font-normal font-['Inter'] leading-5">
                  {row.meaning}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

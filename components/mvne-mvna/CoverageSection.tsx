"use client";

import React from "react";
import Link from "next/link";
import { Globe } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function CoverageSection() {
  const statusPills = [
    { label: "RESEARCH", bg: "bg-white", text: "text-stone-500" },
    { label: "VALIDATION", bg: "bg-purple-100", text: "text-violet-950" },
    { label: "PILOT", bg: "bg-orange-50", text: "text-orange-600" },
    { label: "PRODUCTION", bg: "bg-slate-200", text: "text-teal-700" },
    { label: "MANAGED", bg: "bg-purple-100", text: "text-violet-950" },
    { label: "SUSPENDED", bg: "bg-orange-50", text: "text-orange-600" },
    { label: "WITHDRAWN", bg: "bg-white", text: "text-stone-500" },
    { label: "Status unavailable", bg: "bg-white", text: "text-stone-500" },
  ];

  return (
    <section id="coverage" className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Coverage
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-4xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Relevant to MVNEs &amp; MVNAs. Explicit about what is live.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-lg font-normal font-['Inter'] leading-7 sm:leading-8">
            Relevance does not mean production availability for every downstream tenant, market or capability. Current coverage is maintained as governed state—not implied by architecture or solution fit.
          </p>
        </div>

        {/* Legend Card Container */}
        <div className="self-stretch p-6 sm:p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-6 shadow-sm">
          <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col justify-start items-start gap-1">
              <h3 className="justify-start text-zinc-900 text-xl sm:text-2xl font-bold font-['Inter']">
                Governed capability state legend
              </h3>
              <p className="justify-start text-stone-500 text-xs sm:text-sm font-normal font-['Inter']">
                State is assessed by jurisdiction and capability.
              </p>
            </div>
            <Link
              href="#coverage-details"
              className="h-12 px-5 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 flex justify-center items-center shadow-sm transition-colors"
            >
              <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                View Current Coverage
              </span>
            </Link>
          </div>

          {/* 8 Status Badges */}
          <div className="self-stretch flex flex-wrap justify-start items-start gap-2.5">
            {statusPills.map((pill) => (
              <div
                key={pill.label}
                className={`px-3 py-2 ${pill.bg} rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-start shadow-sm`}
              >
                <span className={`justify-start ${pill.text} text-xs font-bold font-['Roboto_Mono']`}>
                  {pill.label}
                </span>
              </div>
            ))}
          </div>

          {/* Purple Architecture Callout */}
          <div className="self-stretch p-5 bg-purple-100 rounded-2xl flex items-center gap-3.5">
            <Globe className="size-6 text-orange-600 shrink-0" strokeWidth={1.8} />
            <span className="flex-1 justify-start text-zinc-900 text-sm sm:text-base font-bold font-['Inter']">
              Global architecture; jurisdictional capability is activated through governed country and regulatory packs.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

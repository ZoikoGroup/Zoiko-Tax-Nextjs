"use client";

import React from "react";
import Link from "next/link";
import { Globe } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function CoverageSection() {
  const statusPills = [
    { label: "RESEARCH", bg: "bg-gray-200", dot: "bg-violet-950" },
    { label: "VALIDATION", bg: "bg-slate-200", dot: "bg-violet-950" },
    { label: "PILOT", bg: "bg-amber-100", dot: "bg-violet-950" },
    { label: "PRODUCTION", bg: "bg-neutral-200", dot: "bg-teal-800" },
    { label: "MANAGED", bg: "bg-slate-200", dot: "bg-violet-950" },
    { label: "SUSPENDED", bg: "bg-amber-100", dot: "bg-violet-950" },
    { label: "WITHDRAWN", bg: "bg-stone-200", dot: "bg-violet-950" },
    { label: "Status unavailable", bg: "bg-gray-200", dot: "bg-stone-500" },
  ];

  return (
    <section id="coverage" className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Coverage
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Relevant to MVNOs. Explicit about what is live.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
            Relevance is not production availability. Every jurisdiction-and-capability combination carries a governed state and supporting evidence.
          </p>
        </div>

        {/* Global Architecture Card */}
        <div className="self-stretch p-6 sm:p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-7 shadow-sm">
          <div className="self-stretch flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 sm:gap-5">
            <div className="size-12 bg-violet-950 rounded-2xl flex justify-center items-center shrink-0">
              <Globe className="w-6 h-6 text-orange-300" strokeWidth={1.8} />
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-1.5">
              <h3 className="self-stretch justify-start text-zinc-900 text-lg sm:text-xl font-bold font-['Inter'] leading-snug">
                Global architecture; jurisdictional capability is activated through governed country and regulatory packs.
              </h3>
              <p className="self-stretch justify-start text-stone-500 text-xs sm:text-sm font-normal font-['Inter']">
                State is shown by capability and jurisdiction—not by a decorative global footprint.
              </p>
            </div>
          </div>

          <div className="self-stretch h-px bg-zinc-200" />

          {/* 8 Status Badges */}
          <div className="self-stretch flex flex-wrap justify-start items-start gap-2.5">
            {statusPills.map((pill) => (
              <div
                key={pill.label}
                className={`px-4 py-3 ${pill.bg} rounded-[999px] flex items-center gap-2.5 shadow-sm`}
              >
                <div className={`size-1.5 ${pill.dot} rounded-sm shrink-0`} />
                <span className="justify-start text-zinc-900 text-xs font-semibold font-['Roboto_Mono']">
                  {pill.label}
                </span>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="pt-2">
            <Link
              href="#coverage-details"
              className="h-12 px-6 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-500 inline-flex justify-center items-center shadow-sm transition-colors"
            >
              <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                View Current Coverage
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

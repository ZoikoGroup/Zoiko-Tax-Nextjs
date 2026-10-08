"use client";

import React from "react";
import Link from "next/link";
import WhiteBgPattern from "./WhiteBgPattern";
import { ArrowUpRight } from "lucide-react";

export default function CoverageSection() {
  const legendStates = [
    {
      state: "RESEARCH",
      dotColor: "bg-zinc-500",
      textColor: "text-zinc-500",
      desc: "Under governed research",
    },
    {
      state: "VALIDATION",
      dotColor: "bg-slate-500",
      textColor: "text-slate-500",
      desc: "Content and controls in validation",
    },
    {
      state: "PILOT",
      dotColor: "bg-yellow-700",
      textColor: "text-yellow-700",
      desc: "Limited governed pilot",
    },
    {
      state: "PRODUCTION",
      dotColor: "bg-teal-700",
      textColor: "text-teal-700",
      desc: "Activated production capability",
    },
    {
      state: "MANAGED",
      dotColor: "bg-cyan-700",
      textColor: "text-cyan-700",
      desc: "Managed operating support",
    },
    {
      state: "SUSPENDED",
      dotColor: "bg-yellow-700",
      textColor: "text-yellow-700",
      desc: "Temporarily unavailable",
    },
    {
      state: "WITHDRAWN",
      dotColor: "bg-pink-900",
      textColor: "text-pink-900",
      desc: "No longer available",
    },
    {
      state: "Status unavailable",
      dotColor: "bg-stone-500",
      textColor: "text-stone-500",
      desc: "No governed state published",
    },
  ];

  return (
    <section className="w-full relative bg-[#FAF3FF] flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-14">
        {/* Left Column */}
        <div className="w-full lg:w-[470px] flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
              Coverage
            </div>
            <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
              Relevant to MNOs. Explicit about what is live.
            </h2>
            <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-8">
              Telecom relevance does not equal production availability. Current state is governed by jurisdiction, capability and operating mode.
            </p>
          </div>

          <p className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter'] leading-6">
            Global architecture; jurisdictional capability is activated through governed country and regulatory packs.
          </p>

          <div className="pt-2">
            <Link
              href="#coverage"
              className="h-12 px-6 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-center items-center gap-2 shadow-sm transition-colors group"
            >
              <span className="text-zinc-900 text-sm font-semibold font-['Inter']">
                View Current Coverage
              </span>
              <ArrowUpRight className="w-4 h-4 text-zinc-900 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Right Column: Governed State Legend */}
        <div className="flex-1 w-full p-6 sm:p-7 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4 shadow-md">
          <div className="justify-start text-zinc-900 text-lg font-bold font-['Inter']">
            Governed state legend
          </div>

          <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {legendStates.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-neutral-50 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start gap-1.5"
              >
                <div className="flex items-center gap-2">
                  <div className={`size-2 ${item.dotColor} rounded-full`} />
                  <div
                    className={`text-xs font-bold font-['Roboto_Mono'] ${item.textColor}`}
                  >
                    {item.state}
                  </div>
                </div>
                <div className="self-stretch text-stone-500 text-xs font-normal font-['Inter']">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

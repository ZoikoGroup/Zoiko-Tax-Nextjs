"use client";

import React from "react";
import Link from "next/link";
import WhiteBgPattern from "./WhiteBgPattern";

export default function CoverageSection() {
  const states = [
    { label: "RESEARCH", bg: "bg-purple-100", text: "text-violet-950", border: "outline-violet-950/20" },
    { label: "VALIDATION", bg: "bg-orange-100", text: "text-yellow-800", border: "outline-yellow-700/20" },
    { label: "PILOT", bg: "bg-orange-100", text: "text-yellow-800", border: "outline-yellow-700/20" },
    { label: "PRODUCTION", bg: "bg-emerald-100", text: "text-teal-800", border: "outline-teal-700/20" },
    { label: "MANAGED", bg: "bg-emerald-100", text: "text-teal-800", border: "outline-teal-700/20" },
    { label: "SUSPENDED", bg: "bg-rose-100", text: "text-stone-600", border: "outline-stone-500/20" },
    { label: "WITHDRAWN", bg: "bg-rose-100", text: "text-stone-600", border: "outline-stone-500/20" },
    { label: "Status unavailable", bg: "bg-purple-100", text: "text-violet-950", border: "outline-violet-950/20" },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-9">
        <div className="w-full max-w-[1120px] flex flex-col justify-start items-start gap-3.5">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Coverage
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[47.52px]">
            Relevant to Wholesale Carriers &amp; Aggregators. Explicit about what is live.
          </h2>
          <p className="self-stretch justify-start text-zinc-600 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Relevance does not mean production availability for every counterparty, market or capability. Readiness remains visible as a governed lifecycle state.
          </p>
        </div>

        {/* Coverage Card Container */}
        <div className="self-stretch p-6 sm:p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-12 shadow-sm">
          {/* Left Column */}
          <div className="w-full lg:w-96 flex flex-col justify-start items-start gap-4">
            <h3 className="justify-start text-zinc-900 text-2xl font-bold font-['Inter'] leading-snug">
              Capability state, not a marketing map.
            </h3>
            <p className="self-stretch justify-start text-zinc-600 text-base font-normal font-['Inter'] leading-6">
              Global architecture; jurisdictional capability is activated through governed country and regulatory packs.
            </p>
            <div className="pt-2">
              <Link
                href="#coverage"
                className="h-12 px-5 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex justify-center items-center gap-2 transition-colors shadow-sm"
              >
                <span className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
                  View Current Coverage
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Legend Badges */}
          <div className="flex-1 flex flex-col justify-start items-start gap-3.5">
            <span className="justify-start text-zinc-600 text-xs font-bold font-['Roboto_Mono'] tracking-wider">
              STATE LEGEND
            </span>

            <div className="self-stretch flex flex-wrap items-center gap-2.5">
              {states.map((st) => (
                <div
                  key={st.label}
                  className={`px-3.5 py-2 ${st.bg} rounded-[999px] outline outline-1 outline-offset-[-1px] ${st.border} flex items-center justify-center`}
                >
                  <span className={`${st.text} text-xs font-bold font-['Roboto_Mono']`}>
                    {st.label}
                  </span>
                </div>
              ))}
            </div>

            <p className="self-stretch justify-start text-zinc-500 text-xs font-normal font-['Inter'] leading-5 pt-2">
              Status unavailable is shown when a reliable public capability state cannot be represented. States can change through governed review.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

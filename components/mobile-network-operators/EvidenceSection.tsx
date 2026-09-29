"use client";

import React from "react";
import Link from "next/link";
import WhiteBgPattern from "./WhiteBgPattern";
import { ArrowUpRight, Check } from "lucide-react";

export default function EvidenceSection() {
  const points = [
    "Input facts",
    "Classification",
    "Jurisdiction / responsibility",
    "Rule/content versions",
    "Source provenance",
    "Approvals / state",
    "Replay manifest",
  ];

  const propositionSteps = [
    { num: "01", label: "Facts" },
    { num: "02", label: "Versions" },
    { num: "03", label: "Approvals" },
    { num: "04", label: "Outcome" },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* Left Column: White Card */}
        <div className="p-7 sm:p-9 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-between items-start gap-6 shadow-sm">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
              Evidence and replay
            </div>
            <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
              Preserve why the outcome was authoritative.
            </h2>
          </div>

          <div className="self-stretch flex flex-col justify-start items-start gap-3 pt-2">
            {points.map((pt, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="size-5 bg-violet-100 rounded-[999px] flex justify-center items-center shrink-0">
                  <Check className="w-3 h-3 text-orange-600" />
                </div>
                <span className="text-zinc-900 text-base font-normal font-['Inter']">
                  {pt}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Violet 950 Card */}
        <div className="p-7 sm:p-9 bg-violet-950 rounded-3xl flex flex-col justify-between items-start gap-6 shadow-md text-white">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="justify-start text-orange-300 text-xs font-bold font-['Roboto_Mono'] tracking-wider">
              MNO PROOF PROPOSITION
            </div>
            <h2 className="self-stretch justify-start text-white text-3xl sm:text-4xl font-bold font-['Inter'] leading-tight">
              Evidence travels with every fiscal decision.
            </h2>
            <p className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-7">
              Historical replay reconstructs the facts, classification, responsibility, content versions and approval state that applied then—rather than silently substituting today’s policy.
            </p>
          </div>

          {/* 4 Mini Steps */}
          <div className="self-stretch grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {propositionSteps.map((st) => (
              <div
                key={st.num}
                className="p-3.5 bg-white/5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-2"
              >
                <div className="text-orange-300 text-[10px] font-normal font-['Roboto_Mono']">
                  {st.num}
                </div>
                <div className="text-white text-xs font-bold font-['Inter']">
                  {st.label}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="#evidence-replay"
              className="h-12 px-6 bg-white/5 hover:bg-white/10 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/40 flex justify-center items-center gap-2.5 transition-colors group"
            >
              <span className="text-white text-sm font-semibold font-['Inter']">
                Explore Evidence &amp; Replay
              </span>
              <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

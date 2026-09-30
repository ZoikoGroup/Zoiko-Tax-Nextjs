"use client";

import React from "react";
import { FileText, Check, AlertCircle } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function EvidenceReplaySection() {
  const manifestItems = [
    {
      title: "Source provenance",
      desc: "Authority source, citation and interpretation context.",
    },
    {
      title: "Input facts",
      desc: "The transaction, service, location and relationship facts supplied.",
    },
    {
      title: "Rule / content version",
      desc: "The approved version and effective-date basis used.",
    },
    {
      title: "Jurisdiction / responsibility context",
      desc: "The scoped conclusions connecting authority, entity and duty.",
    },
    {
      title: "Approval / workflow context",
      desc: "Review, approvals, state transitions and responsible actors.",
    },
    {
      title: "Visible uncertainty",
      desc: "Missing, conflicting, unsupported or unknown context remains explicit.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
        {/* Section Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Evidence &amp; Replay
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[50.16px]">
            A result you can reconstruct — in the context that produced it.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Evidence is a primary output, not an audit afterthought. Preserve what was known, which authority applied, what executed and who approved the workflow.
          </p>
        </div>

        {/* 2 Main Columns */}
        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
          {/* Left Column: Decision Evidence Manifest */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-between gap-5">
            <div className="self-stretch flex justify-between items-center">
              <h3 className="justify-start text-zinc-900 text-xl sm:text-2xl font-bold font-['Inter']">
                Decision evidence manifest
              </h3>
              <FileText className="size-6 text-orange-600" />
            </div>

            <div className="self-stretch flex flex-col gap-4">
              {manifestItems.map((item, idx) => (
                <div key={idx} className="self-stretch flex items-start gap-3">
                  <div className="size-6 bg-violet-100 rounded-full flex justify-center items-center shrink-0 mt-0.5">
                    <Check className="size-3.5 text-violet-950 stroke-[2.5]" />
                  </div>
                  <div className="flex-1 flex flex-col gap-0.5">
                    <div className="justify-start text-zinc-900 text-sm sm:text-base font-bold font-['Inter']">
                      {item.title}
                    </div>
                    <div className="self-stretch justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-5">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Replay History Without Replacing It */}
          <div className="p-6 sm:p-8 bg-violet-950 rounded-3xl flex flex-col justify-between gap-5">
            <h3 className="self-stretch justify-start text-white text-2xl sm:text-3xl font-bold font-['Inter'] leading-tight sm:leading-9">
              Replay history without replacing it.
            </h3>

            <div className="self-stretch flex flex-col gap-4">
              {/* Historical Replay Subcard */}
              <div className="self-stretch p-5 bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 flex flex-col justify-start items-start gap-2.5">
                <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] uppercase tracking-wider">
                  HISTORICAL REPLAY
                </div>
                <div className="self-stretch justify-start text-white text-sm sm:text-base font-normal font-['Inter'] leading-6">
                  Reconstruct using the facts, approved content version, effective date, context and workflow state retained for that historical outcome.
                </div>
              </div>

              {/* Current-Policy Comparison Subcard */}
              <div className="self-stretch p-5 bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 flex flex-col justify-start items-start gap-2.5">
                <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] uppercase tracking-wider">
                  CURRENT-POLICY COMPARISON
                </div>
                <div className="self-stretch justify-start text-white text-sm sm:text-base font-normal font-['Inter'] leading-6">
                  Run a separate, clearly labeled comparison against current approved policy to explain change — never overwrite the historical record.
                </div>
              </div>
            </div>

            {/* Incomplete Context Note */}
            <div className="self-stretch p-4 bg-orange-300/10 rounded-[10px] flex items-start gap-2.5">
              <AlertCircle className="size-5 text-orange-300 shrink-0 mt-0.5" />
              <div className="flex-1 justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-5">
                When context is incomplete, the replay says unknown, unsupported or blocked rather than manufacturing certainty.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

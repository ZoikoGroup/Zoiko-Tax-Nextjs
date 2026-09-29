"use client";

import React from "react";
import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function EvidenceSection() {
  const manifestItems = [
    "Input facts",
    "Classification",
    "Jurisdiction / responsibility",
    "Rule / content versions",
    "Source provenance",
    "Approvals / state",
    "Replay manifest",
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col lg:flex-row justify-start items-stretch gap-6">
        {/* Left Column: White Card with Details */}
        <div className="flex-1 min-h-[500px] p-6 sm:p-9 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-between items-start gap-6 shadow-sm">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
              Evidence + replay
            </div>
            <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
              Preserve why the outcome was authoritative.
            </h2>
            <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
              Evidence remains attributable to the correct downstream tenant and legal-entity context across every stage. Historical replay reconstructs historical state rather than substituting today’s policy.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="#evidence-replay"
              className="h-12 px-6 bg-amber-700 hover:bg-amber-800 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-orange-600 inline-flex justify-center items-center shadow-sm transition-colors"
            >
              <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                Explore Evidence &amp; Replay
              </span>
            </Link>
          </div>

          <div className="self-stretch p-4 bg-pink-50 rounded-[10px] flex items-center gap-3">
            <ShieldCheck className="size-5 text-orange-600 shrink-0" strokeWidth={2} />
            <p className="flex-1 justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-5">
              Replay uses retained versions, approvals and source state to reconstruct the historical decision.
            </p>
          </div>
        </div>

        {/* Right Column: Dark Violet Manifest Card */}
        <div className="flex-1 min-h-[500px] p-6 sm:p-9 bg-violet-950 rounded-3xl flex flex-col justify-start items-start gap-4 shadow-xl text-white">
          <div className="self-stretch flex justify-between items-center gap-3">
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="justify-start text-orange-300 text-xs font-bold font-['Roboto_Mono'] tracking-wider">
                ATTRIBUTABLE MANIFEST
              </span>
              <h3 className="justify-start text-white text-2xl sm:text-3xl font-bold font-['Inter']">
                Reconstructable evidence
              </h3>
            </div>
            <div className="px-3.5 py-1.5 bg-orange-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-start">
              <span className="justify-start text-orange-600 text-xs font-bold font-['Roboto_Mono']">
                REPLAYABLE
              </span>
            </div>
          </div>

          {/* 7 Check Items */}
          <div className="self-stretch flex flex-col justify-start items-start gap-2.5 pt-2">
            {manifestItems.map((item) => (
              <div key={item} className="self-stretch flex items-center gap-3">
                <div className="size-5 bg-purple-900 rounded-full flex justify-center items-center shrink-0">
                  <Check className="w-3 h-3 text-orange-300" strokeWidth={2.5} />
                </div>
                <span className="flex-1 justify-start text-white text-base font-medium font-['Inter']">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-5 pt-3 border-t border-white/10 mt-auto">
            Tenant, entity, relationship, jurisdiction and authority context remain attached to the manifest.
          </p>
        </div>
      </div>
    </section>
  );
}

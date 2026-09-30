"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function EvidenceSection() {
  const items = [
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

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col lg:flex-row justify-start items-stretch gap-7">
        {/* Left Card: 7-Row Governed Evidence Breakdown */}
        <div className="flex-1 p-6 sm:p-9 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-between items-start gap-6 shadow-sm">
          <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
            <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
              Evidence + replay
            </div>
            <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[47.52px]">
              Preserve why the outcome was authoritative.
            </h2>
            <p className="self-stretch justify-start text-zinc-600 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
              Evidence remains attributable to the correct provider/counterparty and legal-entity context across every stage.
            </p>
          </div>

          {/* 7 Item Checklist */}
          <div className="self-stretch flex flex-col justify-start items-start divide-y divide-zinc-200 border-t border-b border-zinc-200">
            {items.map((item) => (
              <div
                key={item}
                className="self-stretch py-3.5 flex justify-start items-center gap-3.5"
              >
                <div className="size-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                  <Check className="size-3 text-orange-600 stroke-[3]" />
                </div>
                <span className="justify-start text-zinc-900 text-base font-medium font-['Inter']">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-2">
            <Link
              href="#evidence"
              className="h-12 px-6 bg-white hover:bg-zinc-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex justify-center items-center gap-2 transition-colors shadow-sm"
            >
              <span className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">
                Explore Evidence &amp; Replay
              </span>
              <ArrowUpRight className="size-4 text-zinc-900" />
            </Link>
          </div>
        </div>

        {/* Right Card: Replay Visual Graphic & Bounded Context */}
        <div className="flex-1 min-h-[580px] lg:min-h-[710px] p-6 sm:p-8 relative bg-slate-950 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-between items-start overflow-hidden shadow-2xl">
          {/* Background Graphic */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <Image
              src="/wholesale-carriers-and-aggregators/Replay visual.png"
              alt="Historical Replay Visual"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover object-center "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          </div>

          {/* Top Pill Badge */}
          <div className="relative z-10 px-3.5 py-2 bg-slate-900/90 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-sm">
            <span className="justify-start text-orange-300 text-xs font-bold font-['Roboto_Mono'] tracking-wider">
              HISTORICAL REPLAY · BOUNDED CONTEXT
            </span>
          </div>

          {/* Bottom Card Overlay */}
          <div className="relative z-10 self-stretch p-6 bg-slate-900/90 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/20 flex flex-col justify-start items-start gap-4 backdrop-blur-md shadow-lg">
            <h3 className="justify-start text-white text-2xl font-bold font-['Inter']">
              Reconstruct historical state.
            </h3>
            <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-relaxed">
              Replay uses the facts, approved content, versions, relationship context and state in force for that event. It does not substitute today’s policy for yesterday’s decision.
            </p>
            <div className="self-stretch h-px bg-white/20" />
            <div className="self-stretch flex flex-col sm:flex-col justify-between items-start gap-2 text-orange-300 text-xs font-normal font-['Roboto_Mono'] leading-5">
              <span>ENTITY / PROVIDER / COUNTERPARTY</span>
              <span>JURISDICTION / AUTHORITY</span>
              <span>RULESET / APPROVAL / SOURCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

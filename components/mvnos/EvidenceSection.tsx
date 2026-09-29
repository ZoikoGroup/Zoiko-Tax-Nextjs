"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function EvidenceSection() {
  const evidenceItems = [
    {
      num: "01",
      title: "Input facts",
      desc: "The exact transaction and billing facts used",
    },
    {
      num: "02",
      title: "Classification",
      desc: "Service and regulatory-revenue decisions",
    },
    {
      num: "03",
      title: "Jurisdiction / responsibility",
      desc: "Place, authority, entities and assigned duty",
    },
    {
      num: "04",
      title: "Rule / content versions",
      desc: "Approved content active at decision time",
    },
    {
      num: "05",
      title: "Source provenance",
      desc: "Where each governed fact originated",
    },
    {
      num: "06",
      title: "Approvals / state",
      desc: "Review, exception and cutover state",
    },
    {
      num: "07",
      title: "Replay manifest",
      desc: "The versioned recipe for historical reconstruction",
    },
  ];

  const replaySteps = [
    { num: "01", text: "Historical facts locked" },
    { num: "02", text: "Versioned content restored" },
    { num: "03", text: "Approvals and exceptions reapplied" },
    { num: "04", text: "Outcome and evidence regenerated" },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      {/* Background Pattern */}
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        {/* Section Heading */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Evidence + replay
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Preserve why the outcome was authoritative.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
            Evidence travels with every fiscal decision. Historical replay reconstructs the approved historical state; it does not substitute today’s policy for the policy and facts that applied then.
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="self-stretch flex flex-col lg:flex-row justify-start items-stretch gap-6">
          {/* Left Card: 7-Row Governed Facts Checklist */}
          <div className="flex-1 p-6 sm:p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-200 flex flex-col justify-start items-start shadow-sm">
            {evidenceItems.map((item, idx) => (
              <div
                key={item.num}
                className={`self-stretch py-3.5 sm:py-4 flex items-center gap-4 ${
                  idx !== evidenceItems.length - 1 ? "border-b border-zinc-200" : ""
                }`}
              >
                {/* Number Badge */}
                <div className="size-8 bg-purple-100/70 rounded-[10px] flex justify-center items-center shrink-0">
                  <span className="text-orange-600 text-[11px] font-bold font-['Roboto_Mono']">
                    {item.num}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="flex-1 flex flex-col justify-start items-start gap-0.5">
                  <span className="justify-start text-zinc-900 text-base font-bold font-['Inter']">
                    {item.title}
                  </span>
                  <span className="self-stretch justify-start text-stone-500 text-xs sm:text-sm font-normal font-['Inter'] leading-tight">
                    {item.desc}
                  </span>
                </div>

                {/* Green Checkmark Circle */}
                <div className="size-5 rounded-full border-[1.5px] border-emerald-600/90 flex items-center justify-center shrink-0">
                  <Check className="size-3 text-emerald-600 stroke-[2.5]" />
                </div>
              </div>
            ))}
          </div>

          {/* Right Card: Replay Manifest with Abstract Governed Data Artwork */}
          <div className="w-full lg:w-[440px] xl:w-[460px] shrink-0 min-h-[580px] p-7 sm:p-8 relative bg-[#18141B] rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-between items-start gap-6 overflow-hidden shadow-2xl">
            {/* Background Graphic - Abstract governed data */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <Image
                src="/MVNO/Abstract governed data.png"
                alt="Abstract governed data"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover object-right"
              />
              {/* Subtle dark gradient overlay to guarantee text legibility on the left while preserving vibrant 3D artwork on the right */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#18141B]/90 via-[#18141B]/35 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18141B]/70 via-transparent to-[#18141B]/30 pointer-events-none" />
            </div>

            {/* Top Text Content */}
            <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-5">
              <div className="px-3.5 py-1.5 bg-white/10 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/20 flex justify-start items-start backdrop-blur-sm">
                <span className="justify-start text-white text-xs font-semibold font-['Roboto_Mono'] tracking-wider">
                  REPLAY MANIFEST
                </span>
              </div>

              <h3 className="self-stretch justify-start text-white text-2xl sm:text-3xl font-bold font-['Inter'] leading-tight sm:leading-9">
                Reconstruct the decision, not a present-day approximation.
              </h3>

              <p className="self-stretch justify-start text-zinc-300 text-sm sm:text-base font-normal font-['Inter'] leading-6">
                Rejoin historical facts, content versions, provenance, approvals and state into a reviewable outcome with explicit lineage.
              </p>

              {/* 4 Steps */}
              <div className="self-stretch flex flex-col justify-start items-start gap-2.5 pt-1">
                {replaySteps.map((step) => (
                  <div key={step.num} className="self-stretch flex items-center gap-3">
                    <span className="text-orange-400 text-[11px] font-bold font-['Roboto_Mono']">
                      {step.num}
                    </span>
                    <span className="text-white text-xs sm:text-sm font-normal font-['Inter']">
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action Button */}
            <div className="relative z-10 w-full pt-2">
              <Link
                href="#evidence"
                className="h-12 px-5 bg-white/10 hover:bg-white/20 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-white/30 inline-flex justify-center items-center gap-2.5 transition-colors group backdrop-blur-sm"
              >
                <span className="justify-start text-white text-sm font-semibold font-['Inter']">
                  Explore Evidence &amp; Replay
                </span>
                <ArrowUpRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

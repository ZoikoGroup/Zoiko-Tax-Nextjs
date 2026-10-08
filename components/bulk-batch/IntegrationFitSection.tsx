"use client";

import React from "react";
import { ArrowLeftRight, GitBranch, Bell } from "lucide-react";
import { SectionContainer, SectionHeader, BoundaryNotice } from "./shared";

const CARDS = [
  {
    icon: ArrowLeftRight,
    eyebrow: "SYNCHRONOUS API",
    title: "Request → response",
    description:
      "For contract-defined synchronous interactions and approved current-state checks. An API response has the meaning defined by its versioned contract.",
  },
  {
    icon: GitBranch,
    eyebrow: "ASYNCHRONOUS BULK JOB",
    title: "Submit → process → retrieve",
    description:
      "For high-volume ingestion or export patterns with a governed lifecycle, validation and item-level outcomes. Acceptance does not mean completion.",
  },
  {
    icon: Bell,
    eyebrow: "EVENT NOTIFICATION",
    title: "Notify → interpret",
    description:
      "For governed notifications and delivery semantics. An event may describe a change; it does not execute a bulk job or replace authoritative verification.",
  },
];

export default function IntegrationFitSection() {
  return (
    <SectionContainer className="bg-white">
      <div className="flex flex-col items-start gap-8">
        <SectionHeader
          eyebrow="01 / INTEGRATION FIT"
          title="A call, a job and a notification are different things."
          description="Choose the interaction model first. Confirm the exact interface and its availability through controlled sources."
        />

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.eyebrow}
              className="flex-1 rounded-2xl bg-white p-6 outline outline-1 -outline-offset-1 outline-[#D8CEDD] flex flex-col items-start gap-3.5 transition-shadow hover:shadow-sm"
            >
              <card.icon className="h-5 w-5 shrink-0 text-[#D65A2C]" strokeWidth={1.8} />
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#D65A2C] font-['Inter',sans-serif]">
                {card.eyebrow}
              </span>
              <h3 className="text-xl leading-7 text-[#18141B] font-['Inter',sans-serif]">{card.title}</h3>
              <p className="text-base leading-6 text-[#665F69] font-['Inter',sans-serif]">{card.description}</p>
            </div>
          ))}
        </div>

        <BoundaryNotice
          title="Choose by purpose, not an assumed performance tier"
          description="This guide does not publish capacity, processing windows, queues or SLAs. Event delivery and job execution remain separate contracts."
          className="w-full"
        />
      </div>
    </SectionContainer>
  );
}

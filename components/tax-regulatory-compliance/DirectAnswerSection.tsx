"use client";

import React from "react";
import {
  Layers,
  Network,
  Globe,
  Briefcase,
  RefreshCw,
  History,
} from "lucide-react";

export default function DirectAnswerSection() {
  const problems = [
    {
      icon: Layers,
      title: "Fragmented policy and systems",
      description:
        "Source material, billing facts and compliance workflows live in separate operating silos.",
    },
    {
      icon: Network,
      title: "Classification complexity",
      description:
        "Telecom products and bundled services do not map cleanly to one universal category.",
    },
    {
      icon: Globe,
      title: "Jurisdiction complexity",
      description:
        "Location, situs and authority depend on governed facts and capability-specific logic.",
    },
    {
      icon: Briefcase,
      title: "Responsibility ambiguity",
      description:
        "Legal entity, commercial relationship and responsibility must stay distinct.",
    },
    {
      icon: RefreshCw,
      title: "Continuous change",
      description:
        "Policy content, effective dates and operational readiness evolve independently.",
    },
    {
      icon: History,
      title: "Historical defensibility",
      description:
        "A current answer cannot replace the source and version behind a past decision.",
    },
  ];

  return (
    <section className="w-full bg-purple-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-9">
        {/* Direct Answer Featured Card */}
        <div className="self-stretch p-6 sm:p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-11">
          <div className="w-full lg:w-80 flex flex-col justify-start items-start gap-3.5 shrink-0">
            <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
              DIRECT ANSWER
            </div>
            <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl font-bold font-['Inter'] leading-tight sm:leading-10">
              Connect the decision to the duty — and the proof.
            </h2>
          </div>

          <div className="flex-1 flex flex-col justify-start items-start gap-4">
            <p className="self-stretch justify-start text-zinc-900 text-lg sm:text-xl font-medium font-['Inter'] leading-relaxed sm:leading-8">
              ZoikoTax helps tax and regulatory compliance teams connect what applies, what is due, what needs action and why — across governed tax determination, regulatory obligations, filing, reconciliation and evidence. Current production capability is jurisdiction- and function-specific.
            </p>
            <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">
              A telecom fiscal-control layer for governed conclusions and workflows — not legal advice, a claim of universal coverage, or a replacement for every enterprise system.
            </p>
          </div>
        </div>

        {/* Section Heading */}
        <h3 className="self-stretch justify-start text-zinc-900 text-2xl sm:text-3xl font-bold font-['Inter']">
          Why the operating problem persists
        </h3>

        {/* Problems Grid */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {problems.map((prob, idx) => {
            const Icon = prob.icon;
            return (
              <div
                key={idx}
                className="min-h-44 p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3 transition-shadow hover:shadow-sm"
              >
                <div className="size-5 relative flex items-center justify-center">
                  <Icon className="size-4 text-orange-600" />
                </div>
                <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">
                  {prob.title}
                </div>
                <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">
                  {prob.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

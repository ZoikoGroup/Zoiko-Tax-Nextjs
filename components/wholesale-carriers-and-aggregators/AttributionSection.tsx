"use client";

import React from "react";
import { Building2, Briefcase, MapPin, Landmark, UserCheck, FileText, Users, BadgeCheck, FileCheck } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function AttributionSection() {
  const contractFields = [
    {
      title: "Legal entity",
      desc: "Entity ledger + isolation",
      bg: "bg-stone-50",
      border: "outline-zinc-300",
      icon: Building2,
      isHighlight: false,
    },
    {
      title: "Operating / commercial role",
      desc: "Wholesale carrier · aggregator · provider · counterparty",
      bg: "bg-purple-100/70",
      border: "outline-zinc-300",
      icon: Users,
      isHighlight: false,
    },
    {
      title: "Jurisdiction",
      desc: "Approved location + nexus inputs",
      bg: "bg-stone-50",
      border: "outline-zinc-300",
      icon: MapPin,
      isHighlight: false,
    },
    {
      title: "Authority",
      desc: "Applicable governed authority",
      bg: "bg-stone-50",
      border: "outline-zinc-300",
      icon: Landmark,
      isHighlight: false,
    },
    {
      title: "Responsible party",
      desc: "Outcome-specific responsibility",
      bg: "bg-purple-100",
      border: "outline-orange-600",
      icon: BadgeCheck,
      isHighlight: true,
    },
    {
      title: "Evidence",
      desc: "Facts · rules · state · lineage",
      bg: "bg-stone-50",
      border: "outline-zinc-300",
      icon: FileCheck,
      isHighlight: false,
    },
  ];

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-9">
        <div className="w-full max-w-[1130px] flex flex-col justify-start items-start gap-3.5">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            Provider, legal-entity &amp; responsibility
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[47.52px]">
            Make attribution a first-class part of the fiscal architecture.
          </h2>
          <p className="self-stretch justify-start text-zinc-600 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Keep wholesale carrier, aggregator, provider and counterparty context connected to the specific legal entity, jurisdiction, authority and responsibility outcome.
          </p>
        </div>

        {/* Conceptual Responsibility Contract Card */}
        <div className="self-stretch p-6 sm:p-7 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5 shadow-sm">
          <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span className="justify-start text-orange-600 text-xs font-bold font-['Roboto_Mono'] tracking-wider">
              CONCEPTUAL RESPONSIBILITY CONTRACT
            </span>
            <span className="justify-start text-zinc-500 text-xs font-normal font-['Inter']">
              Field-level structure is illustrative, not an integration contract.
            </span>
          </div>

          {/* 6 Contract Field Blocks */}
          <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {contractFields.map((field) => {
              const Icon = field.icon;
              return (
                <div
                  key={field.title}
                  className={`h-40 sm:h-44 p-4 ${field.bg} rounded-2xl outline outline-1 outline-offset-[-1px] ${field.border} flex flex-col justify-between items-start transition-all shadow-xs`}
                >
                  <div
                    className={`size-6 flex items-center justify-center ${
                      field.isHighlight ? "text-orange-600" : "text-violet-950"
                    }`}
                  >
                    <Icon className="size-4" />
                  </div>
                  <div className="self-stretch flex flex-col gap-1">
                    <span className="self-stretch justify-start text-zinc-900 text-sm sm:text-base font-bold font-['Inter'] leading-tight">
                      {field.title}
                    </span>
                    <span className="self-stretch justify-start text-zinc-600 text-xs font-normal font-['Inter'] leading-4">
                      {field.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="self-stretch h-0.5 opacity-60 bg-orange-600 rounded-full" />

          {/* Footer Note */}
          <div className="self-stretch flex justify-start items-center gap-3">
            <div className="size-2 bg-orange-600 rounded-full shrink-0" />
            <p className="flex-1 justify-start text-zinc-900 text-xs sm:text-sm font-semibold font-['Inter'] leading-5">
              Role names alone do not establish tax, regulatory, filing or legal responsibility. Approved relationship context and authority-specific rules determine governed outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { FileCheck, Send, Check } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function ComplianceWorkflowsSection() {
  const workflows = [
    {
      icon: FileCheck,
      title: "Compliance & Filing",
      badge: "WHERE SUPPORTED",
      items: [
        "Prepare from governed obligation and determination context",
        "Review mapped positions, supporting evidence and exceptions",
        "Approve, submit or export through the supported operating mode",
        "Preserve receipt, workflow event and reconciliation context",
      ],
      note: "Submission channels, return types and workflow scope vary by approved pack. A completed event records process completion, not guaranteed legal compliance.",
    },
    {
      icon: Send,
      title: "E-Invoicing & CTC",
      badge: "WHERE SUPPORTED",
      items: [
        "Map supported fiscal document and reporting requirements",
        "Validate required facts before external transmission",
        "Connect to supported networks or provider endpoints",
        "Retain acknowledgments, rejection detail and retry history",
      ],
      note: "Document types, clearance models, networks and transmission support are jurisdiction- and capability-specific; no universal availability is implied.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
        {/* Section Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Compliance workflows
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[50.16px]">
            Prepare filing and e-invoicing work where supported.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Capability-specific availability language stays visible from planning through completion; unsupported and unknown states do not masquerade as ready.
          </p>
        </div>

        {/* 2 Workflows Grid */}
        <div className="self-stretch grid grid-cols-1 lg:grid-cols-2 gap-4">
          {workflows.map((wf, idx) => {
            const Icon = wf.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5 shadow-sm"
              >
                {/* Header row */}
                <div className="self-stretch flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Icon className="size-6 text-orange-600 shrink-0" />
                    <h3 className="justify-start text-zinc-900 text-xl sm:text-2xl font-bold font-['Inter']">
                      {wf.title}
                    </h3>
                  </div>
                  <div className="justify-start text-teal-800 text-xs font-bold font-['Inter'] uppercase tracking-wider">
                    {wf.badge}
                  </div>
                </div>

                {/* Items */}
                <div className="self-stretch flex flex-col gap-3 py-1">
                  {wf.items.map((item, i) => (
                    <div
                      key={i}
                      className="self-stretch flex items-start gap-2.5"
                    >
                      <div className="size-4 relative mt-1 shrink-0 flex items-center justify-center">
                        <Check className="size-3.5 text-teal-800 stroke-[2.5]" />
                      </div>
                      <div className="flex-1 justify-start text-zinc-900 text-sm sm:text-base font-normal font-['Inter'] leading-5">
                        {item}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footnote */}
                <div className="self-stretch pt-2 border-t border-zinc-100 justify-start text-stone-500 text-xs font-normal font-['Inter'] leading-5">
                  {wf.note}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

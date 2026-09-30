"use client";

import React from "react";
import {
  FileText,
  Boxes,
  PieChart,
  Scale,
  Cpu,
  Award,
  Library,
  ChartNoAxesColumn,
  Waypoints,
  Calculator,
} from "lucide-react";

export default function PolicyClassificationSection() {
  const cards = [
    {
      icon: Library,
      title: "Source and policy context",
      description:
        "Keep source provenance, interpretation notes, effective dates and approval status attached to the policy record.",
      boundary: "BOUNDARY · A proposal is not production authority.",
    },
    {
      icon: Boxes,
      title: "Product and service classification",
      description:
        "Classify offers, components, bundles and service facts through governed taxonomies.",
      boundary:
        "BOUNDARY · Classification depends on supplied facts and approved content.",
    },
    {
      icon: ChartNoAxesColumn,
      title: "Regulatory-revenue classification",
      description:
        "Maintain the revenue view required for supported regulatory obligation workflows.",
      boundary:
        "BOUNDARY · Not interchangeable with product or tax classification.",
    },
    {
      icon: Waypoints,
      title: "Taxability and applicability",
      description:
        "Connect policy, classification, jurisdiction, entity and responsibility before resolving applicability.",
      boundary: "BOUNDARY · Unsupported facts remain explicit.",
    },
    {
      icon: Calculator,
      title: "Deterministic determination",
      description:
        "Execute approved monetary rules against supported inputs with version and effective-date control.",
      boundary: "BOUNDARY · AI does not set monetary outcomes.",
    },
    {
      icon: Award,
      title: "Supported exemption evidence",
      description:
        "Evaluate approved exemption logic and retain certificate or evidence references where supported.",
      boundary:
        "BOUNDARY · Evidence presence does not guarantee legal sufficiency.",
    },
  ];

  return (
    <section className="w-full bg-purple-100 py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
        {/* Section Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Policy, classification and taxability
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[50.16px]">
            Separate proposed interpretation from production-approved authority.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Policy context, classification and determination work as linked records. Proposed changes remain visibly distinct until verified, tested, approved and released.
          </p>
        </div>

        {/* Status Distinction Cards */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-stone-100 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-yellow-700 text-xs font-bold font-['Inter'] uppercase tracking-wider">
              PROPOSED / UNDER REVIEW
            </div>
            <div className="self-stretch justify-start text-zinc-900 text-base font-normal font-['Inter'] leading-6">
              Research, interpretation, candidate classifications and impact analysis. Not executable production authority.
            </div>
          </div>

          <div className="p-5 bg-gray-200 rounded-2xl outline outline-1 outline-offset-[-1px] outline-neutral-300 flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-teal-800 text-xs font-bold font-['Inter'] uppercase tracking-wider">
              PRODUCTION-APPROVED
            </div>
            <div className="self-stretch justify-start text-zinc-900 text-base font-normal font-['Inter'] leading-6">
              Versioned, effective-dated content released through controlled approval for its stated capability and scope.
            </div>
          </div>
        </div>

        {/* 6 Capabilities with Boundaries */}
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-between gap-3.5 transition-all hover:translate-y-[-2px]"
              >
                <div className="flex flex-col gap-3.5">
                  <div className="size-9 bg-violet-100 rounded-[10px] flex justify-center items-center shrink-0">
                    <Icon className="size-5 text-orange-600" />
                  </div>
                  <div className="self-stretch justify-start text-zinc-900 text-lg font-bold font-['Inter'] leading-6">
                    {c.title}
                  </div>
                  <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">
                    {c.description}
                  </div>
                </div>

                <div className="self-stretch pt-2 justify-start text-orange-600 text-xs font-semibold font-['Inter'] leading-4">
                  {c.boundary}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

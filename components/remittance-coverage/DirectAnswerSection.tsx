"use client";

import React from "react";
import { Reveal, SectionContainer, SectionHeader, renderLucideIcon } from "./shared";

export default function DirectAnswerSection() {
  const principles = [
    {
      title: "Capability-specific",
      description: "State is reported for Remittance only—not adjacent capabilities.",
      iconName: "crosshair",
    },
    {
      title: "Evidence-governed",
      description: "Public state and scope follow current pack and release evidence.",
      iconName: "file-check-2",
    },
    {
      title: "No inference",
      description: "Unknown, stale or conflicting evidence never becomes Production.",
      iconName: "circle-off",
    },
  ];

  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]">
      <Reveal>
        <div className="space-y-10 lg:space-y-12">
          {/* Section heading */}
          <SectionHeader
            eyebrow="Direct answer"
            title="What is Remittance Coverage?"
          />

          {/* Answer content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left side: comprehensive answer text */}
            <div className="lg:col-span-7 xl:col-span-8">
              <p className="text-lg sm:text-xl lg:text-[22px] font-medium leading-[1.5] text-[#18141B]">
                Remittance Coverage is the public ZoikoTax readiness view for the Remittance capability by market. It shows governed public state and scope where available. A production state applies only to the stated capability and scope; it does not determine whether a specific customer has a remittance obligation or is legally compliant and does not automatically mean determination, obligations, e-invoicing/CTC or managed compliance is available.
              </p>
            </div>

            {/* Right side: 3 principles */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-3">
              {principles.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E9E1EC] bg-[#F7F0F8] p-4 flex items-start gap-3.5 transition-shadow hover:shadow-xs"
                >
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-white shadow-2xs flex items-center justify-center text-[#D65A2C]">
                    {renderLucideIcon(p.iconName, "w-4 h-4 text-[#D65A2C]")}
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-[15px] font-bold text-[#18141B] font-['Inter',sans-serif]">
                      {p.title}
                    </h3>
                    <p className="text-[13px] leading-[1.45] text-[#665F69]">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

const GUARDRAILS = [
  "Public readiness view",
  "Exact approved scope",
  "Two independent gates",
  "No inferred commitments",
];

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#E5D9EB]">
      <Reveal>
        <div className="space-y-8 sm:space-y-10">
          <SectionHeader
            eyebrow="Direct answer"
            title="What is Managed Compliance Coverage?"
            description="Managed Compliance Coverage is the public ZoikoTax readiness view for approved managed operations by market and scope. A MANAGED state may be shown only when the relevant underlying capability is in PRODUCTION and operational readiness is approved for the exact stated scope. It does not by itself create customer-specific filing responsibility, representation authority, legal advice, staffing commitments, SLAs, pricing, or guaranteed compliance outcomes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {GUARDRAILS.map((label, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-[14px] border border-[#E5D9EB] bg-white p-4 shadow-2xs hover:border-[#BF6735] transition-colors"
              >
                <div className="shrink-0 p-1 rounded-full bg-[#E8F5ED] text-[#177245]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-semibold text-[#18141B]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

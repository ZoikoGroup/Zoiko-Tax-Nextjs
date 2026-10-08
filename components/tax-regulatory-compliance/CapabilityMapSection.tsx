"use client";

import React from "react";
import {
  Calculator,
  ShieldCheck,
  ClipboardList,
  FileCheck,
  Send,
  CreditCard,
  Scale,
  History,
} from "lucide-react";

export default function CapabilityMapSection() {
  const capabilities = [
    {
      icon: Calculator,
      title: "Tax Determination",
      description:
        "Execute approved telecom taxability and monetary rules against supported transaction facts.",
      boundary: "BOUNDARY · Only approved capabilities and activated packs.",
    },
    {
      icon: ShieldCheck,
      title: "Exemptions & Certificates",
      description:
        "Apply supported exemption logic and connect evidence references to the decision record.",
      boundary: "BOUNDARY · No universal certificate validation claim.",
    },
    {
      icon: ClipboardList,
      title: "Regulatory Obligations",
      description:
        "Resolve supported information, review and action workflows from governed regulatory content.",
      boundary:
        "BOUNDARY · Obligation visibility is not legal-compliance certification.",
    },
    {
      icon: FileCheck,
      title: "Compliance & Filing",
      description:
        "Prepare, review and evidence supported return and filing workflows.",
      boundary:
        "BOUNDARY · Submission availability is capability- and jurisdiction-specific.",
    },
    {
      icon: Send,
      title: "E-Invoicing & CTC",
      description:
        "Orchestrate supported document, clearance and reporting workflows with external networks.",
      boundary: "BOUNDARY · No universal network or country support.",
    },
    {
      icon: CreditCard,
      title: "Remittance Orchestration",
      description:
        "Generate governed instructions and approvals for supported remittance workflows.",
      boundary: "BOUNDARY · ZoikoTax does not imply custody of funds.",
    },
    {
      icon: Scale,
      title: "Reconciliation",
      description:
        "Compare determined, reported, filed and remittance positions; route exceptions for review.",
      boundary: "BOUNDARY · A match does not prove legal correctness.",
    },
    {
      icon: History,
      title: "Evidence & Replay",
      description:
        "Preserve provenance, facts, versions, context and approvals; reconstruct historical outcomes.",
      boundary:
        "BOUNDARY · Current-policy comparison stays separate from historical replay.",
    },
  ];

  return (
    <section className="w-full bg-purple-50 py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
        {/* Section Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            Platform capability map
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[50.16px]">
            Named destinations across the fiscal-control lifecycle.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Each destination has a scoped value and an explicit boundary. Availability is evaluated independently by jurisdiction, capability and operating mode.
          </p>
        </div>

        {/* 8 Capabilities Grid */}
        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="min-h-64 p-6 bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-between gap-3.5 transition-all hover:translate-y-[-2px]"
              >
                <div className="flex flex-col gap-3.5">
                  <div className="size-9 bg-violet-100 rounded-[10px] flex justify-center items-center shrink-0">
                    <Icon className="size-5 text-orange-600" />
                  </div>
                  <div className="self-stretch justify-start text-zinc-900 text-lg font-bold font-['Inter'] leading-6">
                    {cap.title}
                  </div>
                  <div className="self-stretch justify-start text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-6">
                    {cap.description}
                  </div>
                </div>

                <div className="self-stretch pt-2 justify-start text-orange-600 text-xs font-semibold font-['Inter'] leading-4">
                  {cap.boundary}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

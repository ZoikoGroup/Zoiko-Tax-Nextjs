"use client";

import React from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function IngressContractSection() {
  const contractItems = [
    { label: "Source Type", value: "Billing & BSS Platform" },
    { label: "Entity Context", value: "Zoiko Telecom Ltd (UK)" },
    { label: "Jurisdiction", value: "EU/UK Multi-Authority" },
    { label: "Data Window", value: "30-Day Sliding Manifest" },
    { label: "Payload Version", value: "v4.1.2-Deterministic" },
    { label: "Ingestion Mode", value: "Real-time read-only replay" },
    { label: "Sensitive Data", value: "Anonymized via Tenant Boundary" },
    { label: "Retention Class", value: "Class 4 (Governed Evidence)" },
  ];

  return (
    <section className="w-full relative bg[#FAF3FF] flex flex-col justify-start items-start overflow-hidden">

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            INGRESS CONTRACT
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
            Source Payload &amp; Ingestion Metadata
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-7">
            Govern trace inputs through clear system boundaries and active status checks.
          </p>
        </div>

        <div className="self-stretch grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {contractItems.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-neutral-50/90 rounded-xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-2 shadow-xs"
            >
              <div className="justify-start text-stone-500 text-xs font-bold font-['Inter'] uppercase tracking-wider">
                {item.label}
              </div>
              <div className="justify-start text-zinc-900 text-base font-semibold font-['Inter']">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

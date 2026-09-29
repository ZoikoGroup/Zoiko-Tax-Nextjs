"use client";

import React, { useState } from "react";
import WhiteBgPattern from "./WhiteBgPattern";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      num: "01",
      q: "What does ZoikoTax do for Mobile Network Operators?",
      a: "It connects transaction context, telecom service classification, jurisdiction and responsibility, supported determination, obligations, compliance, reconciliation and replayable evidence through a governed control layer.",
    },
    {
      num: "02",
      q: "Can ZoikoTax work with an existing carrier tax engine?",
      a: "Yes. A federated model can coexist with incumbent engines, while Shadow Assurance can compare outcomes non-authoritatively before governed review and any approved cutover.",
    },
    {
      num: "03",
      q: "How does ZoikoTax handle multiple legal entities and fiscal authorities?",
      a: "It keeps legal entity, operating role, jurisdiction, authority, responsible party and evidence as explicit governed dimensions of each workflow.",
    },
    {
      num: "04",
      q: "Does ZoikoTax support high-volume billing/BSS integrations?",
      a: "It is designed for carrier-scale, high-volume fiscal workflows using controlled API, event, file and batch patterns; specific integration support depends on the agreed capability and architecture.",
    },
    {
      num: "05",
      q: "Which countries and capabilities are currently supported?",
      a: "Production availability varies by jurisdiction and capability. Consult Current Coverage for governed states across country and regulatory packs.",
    },
    {
      num: "06",
      q: "How does ZoikoTax preserve evidence for audits and historical review?",
      a: "Evidence connects input facts, classification, responsibility, content versions, provenance, approvals and replay manifests so historical state can be reconstructed.",
    },
    {
      num: "07",
      q: "Does AI make authoritative tax or filing decisions?",
      a: "No. AI may assist research, classification and variance review. Approved rules and governed human or deterministic-system actions decide; evidence proves.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            FAQ
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight">
            Direct answers. No inflated claims.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-8">
            Practical answers for mobile-network tax, finance, compliance, architecture and procurement teams.
          </p>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.num}
                className="self-stretch py-5 border-b border-zinc-300 first:border-t flex flex-col justify-start items-start gap-2.5 transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-start text-left gap-6 focus:outline-hidden"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="w-11 text-orange-600 text-xs font-bold font-['Roboto_Mono'] shrink-0 pt-1">
                      {faq.num}
                    </span>
                    <span className="text-zinc-900 text-base sm:text-lg font-bold font-['Inter']">
                      {faq.q}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-600 transition-transform duration-200 shrink-0 mt-1 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100 pl-15 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-stone-500 text-sm font-normal font-['Inter'] leading-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

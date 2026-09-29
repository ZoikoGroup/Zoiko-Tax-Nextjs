"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function FAQSection() {
  const faqs = [
    {
      num: "01",
      question: "What does ZoikoTax do for MVNEs & MVNAs?",
      answer:
        "It connects downstream attribution, service and billing facts, legal-entity isolation, jurisdiction, responsibility, supported determination, obligations, compliance, reconciliation and replayable evidence in one governed telecom fiscal-control layer.",
    },
    {
      num: "02",
      question: "Can ZoikoTax work with an existing MVNE/MVNA tax engine?",
      answer:
        "Yes, where supported. A federated model can coexist with incumbent engines, and Shadow Assurance can compare outcomes before governed review and approved cutover.",
    },
    {
      num: "03",
      question:
        "How does ZoikoTax preserve downstream tenant, legal-entity and fiscal-responsibility boundaries?",
      answer:
        "It carries tenant, entity, relationship, jurisdiction, authority and responsible-party context through determination, obligations, reconciliation and evidence. Role names alone are not treated as legal conclusions.",
    },
    {
      num: "04",
      question:
        "Does ZoikoTax support multi-tenant billing/BSS and embedded integration patterns?",
      answer:
        "It is designed for governed family-level billing, BSS, data, event and embedded patterns. Specific integrations and production availability depend on the downstream system, jurisdiction and activated capability.",
    },
    {
      num: "05",
      question: "Which countries and capabilities are currently supported?",
      answer:
        "Use Current Coverage for governed state by jurisdiction and capability. Global architecture and solution relevance do not imply production support for every market or tenant.",
    },
    {
      num: "06",
      question:
        "How does ZoikoTax preserve evidence for audits and historical review?",
      answer:
        "Evidence retains facts, classifications, responsibility context, rule and content versions, source provenance, approvals, state and replay manifests. Historical replay reconstructs historical state rather than applying today’s policy.",
    },
    {
      num: "07",
      question: "Does AI make authoritative tax or filing decisions?",
      answer:
        "No. AI may assist research, summaries, anomaly review and suggestions. Approved rules and governed human or deterministic-system decisions establish authoritative outcomes; evidence proves them.",
    },
  ];

  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({
    "01": true,
    "02": true,
    "03": true,
    "04": true,
    "05": true,
    "06": true,
    "07": true,
  });

  const toggleItem = (num: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [num]: !prev[num],
    }));
  };

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-12">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            FAQ
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Direct answers. No inflated claims.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-7 sm:leading-8">
            Practical boundaries for multi-tenant fiscal control, integrations, evidence and governed AI.
          </p>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start divide-y divide-zinc-300 border-t border-b border-zinc-300">
          {faqs.map((faq) => {
            const isOpen = !!openItems[faq.num];
            return (
              <div
                key={faq.num}
                className="self-stretch py-6 flex flex-col justify-start items-start gap-3"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.num)}
                  className="self-stretch flex justify-between items-start gap-6 text-left group"
                >
                  <span className="w-12 justify-start text-orange-600 text-xs sm:text-sm font-bold font-['Roboto_Mono'] shrink-0 mt-0.5">
                    {faq.num}
                  </span>
                  <span className="flex-1 justify-start text-zinc-900 text-base sm:text-lg font-bold font-['Inter'] group-hover:text-orange-600 transition-colors">
                    {faq.question}
                  </span>
                  <div className="size-5 flex justify-center items-center shrink-0 mt-0.5">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-orange-600" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-4 h-4 text-orange-600" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="self-stretch pl-16 pr-8">
                    <p className="justify-start text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-6">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

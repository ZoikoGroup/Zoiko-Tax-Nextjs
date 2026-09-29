"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function FAQSection() {
  const faqs = [
    {
      num: "01",
      question: "What does ZoikoTax do for MVNOs?",
      answer:
        "It connects service and billing facts, commercial-chain and host/operator context, jurisdiction, responsibility, supported determination, obligations, compliance, reconciliation and replayable evidence in one governed control layer.",
    },
    {
      num: "02",
      question: "Can ZoikoTax work with an existing MVNO tax engine?",
      answer:
        "Yes, where the relevant integration and capability are supported. A federated model can preserve incumbent determination while ZoikoTax governs context, comparison, downstream workflow and evidence.",
    },
    {
      num: "03",
      question:
        "How does ZoikoTax handle MVNO, host-operator and fiscal-responsibility boundaries?",
      answer:
        "It models roles, entities, relationships, jurisdiction and authority as distinct governed inputs. Role or model labels alone do not decide legal or fiscal responsibility.",
    },
    {
      num: "04",
      question:
        "Does ZoikoTax support billing/BSS and host-operator integration patterns?",
      answer:
        "It supports governed integration families for billing, usage, product and operator-dependent facts. Availability depends on the approved data contract, jurisdiction, capability and implementation—not a universal connector claim.",
    },
    {
      num: "05",
      question: "Which countries and capabilities are currently supported?",
      answer:
        "Current state is published through governed coverage information by jurisdiction and capability. Relevance to an MVNO does not mean production availability.",
    },
    {
      num: "06",
      question:
        "How does ZoikoTax preserve evidence for audits and historical review?",
      answer:
        "Each decision retains input facts, classification, jurisdiction and responsibility, source provenance, content versions, approvals, state and a replay manifest that reconstructs historical—not present-day—policy.",
    },
    {
      num: "07",
      question: "Does AI make authoritative tax or filing decisions?",
      answer:
        "No. AI may assist research, summarize variance or suggest classifications. Approved rules and governed actions decide; evidence proves the outcome.",
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

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-12 sm:gap-16">
        <div className="w-full max-w-[963px] flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            FAQ
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[47.52px]">
            Direct answers. No inflated claims.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-base sm:text-lg font-normal font-['Inter'] leading-6">
            The boundaries matter as much as the capability.
          </p>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start divide-y divide-zinc-300">
          {faqs.map((faq, idx) => {
            const isOpen = !!openItems[faq.num];
            return (
              <div
                key={faq.num}
                className={`self-stretch flex flex-col justify-start items-start gap-2.5 ${
                  idx === 0 ? "pb-6" : "py-6"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.num)}
                  className="self-stretch flex justify-between items-center gap-4 text-left group"
                >
                  <span className="w-7 justify-start text-orange-600 text-xs sm:text-sm font-bold font-['Roboto_Mono'] shrink-0">
                    {faq.num}
                  </span>
                  <span className="flex-1 justify-start text-zinc-900 text-base sm:text-lg font-bold font-['Inter'] group-hover:text-orange-600 transition-colors">
                    {faq.question}
                  </span>
                  <div className="size-6 flex justify-center items-center shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-orange-600" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-4 h-4 text-orange-600" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="self-stretch pl-11 pr-8 pt-1">
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

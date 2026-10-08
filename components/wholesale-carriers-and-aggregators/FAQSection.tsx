"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function FAQSection() {
  const faqs = [
    {
      num: "01",
      question: "What does ZoikoTax do for Wholesale Carriers & Aggregators?",
      answer:
        "It connects supported tax determination, regulatory obligations, compliance, reconciliation and replayable evidence to explicit provider/counterparty, legal-entity, jurisdiction and responsibility context.",
    },
    {
      num: "02",
      question: "Can ZoikoTax work with an existing Wholesale/inter-provider tax engine?",
      answer:
        "Yes, where supported. A federated model can preserve incumbent outcomes and sources while ZoikoTax compares, reconciles and evidences decisions before any governed cutover.",
    },
    {
      num: "03",
      question: "How does ZoikoTax preserve counterparty, legal-entity and fiscal-responsibility boundaries?",
      answer:
        "It carries provider, counterparty, entity, relationship, jurisdiction, authority and responsible-party context through determination, obligations, reconciliation and replay. Role labels alone do not establish responsibility.",
    },
    {
      num: "04",
      question: "Does ZoikoTax support inter-provider billing/BSS and embedded integration patterns?",
      answer:
        "It supports documented integration families where the relevant capability is available, including billing/BSS, batch, event and embedded patterns. This does not imply universal connectors or contractual allocation.",
    },
    {
      num: "05",
      question: "Which countries and capabilities are currently supported?",
      answer:
        "Coverage is published by governed lifecycle state and capability. Relevance is not production availability; current country and regulatory packs should be checked before planning.",
    },
    {
      num: "06",
      question: "How does ZoikoTax preserve evidence for audits and historical review?",
      answer:
        "It records attributable facts, classification, jurisdiction and responsibility, content versions, provenance, approvals, state and a replay manifest so historical state can be reconstructed.",
    },
    {
      num: "07",
      question: "Does AI make authoritative tax or filing decisions?",
      answer:
        "No. AI may assist research, classification review and anomaly discovery. Approved deterministic rules and governed approvals decide; evidence proves.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-center overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-9">
        <div className="w-full max-w-[960px] flex flex-col justify-start items-start gap-3.5">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase tracking-wider">
            FAQ
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[47.52px]">
            Direct answers. No inflated claims.
          </h2>
          <p className="self-stretch justify-start text-zinc-600 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            The operating boundaries that matter for wholesale and inter-provider fiscal control.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="self-stretch flex flex-col justify-start items-start divide-y divide-zinc-200 border-t border-b border-zinc-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.num}
                className="self-stretch py-6 flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-9 transition-colors"
              >
                <div
                  onClick={() => toggle(idx)}
                  className="w-full lg:w-[520px] flex justify-start items-start gap-3.5 cursor-pointer select-none group"
                >
                  <span className="w-8 shrink-0 justify-start text-orange-600 text-xs font-bold font-['Roboto_Mono']">
                    {faq.num}
                  </span>
                  <div className="flex-1 flex justify-between items-center gap-2">
                    <h3 className="justify-start text-zinc-900 text-base font-bold font-['Inter'] leading-6 group-hover:text-orange-600 transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`size-4 text-zinc-500 shrink-0 transition-transform duration-200 lg:hidden ${
                        isOpen ? "rotate-180 text-orange-600" : ""
                      }`}
                    />
                  </div>
                </div>

                <div
                  className={`flex-1 justify-start text-zinc-600 text-sm font-normal font-['Inter'] leading-6 ${
                    isOpen ? "block" : "hidden lg:block"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

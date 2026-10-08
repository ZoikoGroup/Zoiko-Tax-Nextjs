"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function FAQSection() {
  const faqs = [
    {
      q: "What does ZoikoTax do for tax and regulatory compliance teams?",
      a: "It connects telecom policy, classification, jurisdiction, responsibility, supported tax determination, regulatory obligations, filing, reconciliation and evidence so teams can see what applies, what is due, what needs action and why.",
    },
    {
      q: "How does ZoikoTax connect tax determination with regulatory obligations?",
      a: "Supported determination outcomes and the facts behind them flow into governed obligation logic and explicit action states. Each capability retains its own scope, version, responsibility and evidence context.",
    },
    {
      q: "Can ZoikoTax work with an existing tax engine?",
      a: "Yes, where supported. Federated and Shadow Assurance models can route, compare and preserve incumbent outcomes while ZoikoTax provides classification, obligation, reconciliation or evidence controls around them.",
    },
    {
      q: "How does ZoikoTax handle coverage and country readiness?",
      a: "Readiness is published by capability, jurisdiction, approved pack and operating mode using Research, Validation, Pilot, Production, Managed, Suspended, Withdrawn or Status unavailable. Unknown never implies support.",
    },
    {
      q: "Can ZoikoTax preserve evidence behind historical tax decisions?",
      a: "Yes, for supported workflows. Evidence & Replay retains source provenance, input facts, rule/content version, jurisdiction and responsibility context, approvals and workflow state. Historical replay is kept separate from current-policy comparison.",
    },
    {
      q: "How does ZoikoTax use AI in tax and compliance workflows?",
      a: "AI may assist research, summarize change, suggest classifications and surface anomalies. It cannot silently set monetary outcomes, invent authority, bypass approval or overwrite evidence. Approved rules and governed human authority control production.",
    },
    {
      q: "Does ZoikoTax support filing and e-invoicing everywhere?",
      a: "No. Filing, submission channels, fiscal documents, clearance models and e-invoicing networks are available only for supported jurisdictions and capabilities under approved packs. Unsupported, blocked and unknown states remain explicit.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
        {/* Section Header */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            FAQ
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight sm:leading-[50.16px]">
            Direct answers. No inflated claims.
          </h2>
          <p className="self-stretch justify-start text-stone-500 text-lg sm:text-xl font-normal font-['Inter'] leading-relaxed sm:leading-8">
            Scope, authority and availability stay visible in every answer.
          </p>
        </div>

        {/* FAQ List Card */}
        <div className="self-stretch bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col overflow-hidden shadow-sm">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`self-stretch ${
                  idx < faqs.length - 1 ? "border-b border-zinc-200" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 sm:px-7 py-6 flex justify-start items-start gap-4 sm:gap-5 text-left transition-colors hover:bg-stone-50"
                  aria-expanded={isOpen}
                >
                  <div className="size-8 bg-violet-100 rounded-full flex justify-center items-center shrink-0 mt-0.5">
                    <span className="text-violet-950 text-base font-bold font-['Inter']">
                      ?
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex justify-between items-center gap-4">
                      <h3 className="justify-start text-zinc-900 text-base sm:text-lg font-bold font-['Inter'] leading-6">
                        {faq.q}
                      </h3>
                      <ChevronDown
                        className={`size-5 text-zinc-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-orange-600" : ""
                        }`}
                      />
                    </div>

                    {/* Always visible or smoothly collapsible; in Figma both question and answer are displayed */}
                    <div
                      className={`text-stone-500 text-sm sm:text-base font-normal font-['Inter'] leading-relaxed ${
                        isOpen ? "block pt-2" : "hidden sm:block"
                      }`}
                    >
                      {faq.a}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

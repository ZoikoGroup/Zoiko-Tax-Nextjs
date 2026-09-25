"use client";

import React, { useState } from "react";
import WhiteBgPattern from "./WhiteBgPattern";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0, 1]);

  const faqs = [
    {
      q: "What is ZoikoTax?",
      a: "ZoikoTax is global telecom fiscal-compliance infrastructure for tax determination, regulatory obligations, filing, e-invoicing, reconciliation, and audit-verifiable records.",
    },
    {
      q: "Do we have to replace our existing tax engine?",
      a: "No. ZoikoTax supports Federated Coexistence and parallel Shadow Assurance lanes, allowing your legacy systems to run uninterrupted until transition sign-off.",
    },
    {
      q: "How does Shadow Assurance parallel testing work?",
      a: "It mirrors and processes live transaction feeds in a non-impact parallel lane, enabling precise daily computational comparison without affecting billing operations.",
    },
    {
      q: "How long does the average onboarding lifecycle take?",
      a: "Onboarding timelines vary based on architectural complexity, entity count, active jurisdictions, and active data hygiene, typically spanning 30 to 90 days.",
    },
    {
      q: "How does the system ensure zero duplicate taxation?",
      a: "Our cutover contract protocol defines precise first and last authoritative event sequence timestamps, preventing overlapping calculations.",
    },
    {
      q: "Can we roll back if a cutover fails?",
      a: "Yes. Our transition framework includes mandatory, pre-validated rollback tracks that allow immediate restoration of legacy routes if errors occur.",
    },
    {
      q: "What if some historical data is missing?",
      a: "Our semantic mapping rules fall back to governed baseline tax rules. System-wide gaps are flagged automatically for controller review rather than guessed.",
    },
    {
      q: "How is AI utilized during system onboarding?",
      a: "AI suggests structural mapping configurations and scans for anomalous transaction records. It has zero power to approve cutovers or waive gates.",
    },
    {
      q: "What security certifications does ZoikoTax hold?",
      a: "ZoikoTax public claims remain limited to approved evidence on isolation, permissions, processing, and residency. This page does not assert unsupported certifications.",
    },
    {
      q: "Is native determination available in all country packs?",
      a: "rollout depends on localized country activations and validation pipelines. Active coverage state can be checked live in the Coverage Portal.",
    },
  ];

  const toggle = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full relative bg-purple-50 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            FAQ
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Inter'] leading-tight lg:leading-[48.40px]">
            Direct Answers. No Inflated Claims.
          </h2>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start">
          {faqs.map((faq, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div
                key={faq.q}
                className="self-stretch py-5 border-b border-zinc-300 flex flex-col justify-start items-start gap-2.5 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center gap-4 text-left cursor-pointer group"
                >
                  <span className="justify-start text-zinc-900 text-base sm:text-lg font-bold font-['Inter'] group-hover:text-copper transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-zinc-600 text-xl font-bold font-['Roboto_Mono'] shrink-0 select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-relaxed pt-1">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

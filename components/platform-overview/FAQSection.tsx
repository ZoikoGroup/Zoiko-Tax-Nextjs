"use client";

import React from "react";
import Image from "next/image";
import { Reveal } from "./shared";

const platformFaqs = [
  {
    question: "What does ZoikoTax do?",
    answer:
      "ZoikoTax is a platform connecting telecom tax determination, non-tax regulatory duties, compliance preparation, and ledger reconciliation under unified, trace-ready proof manifest logs.",
  },
  {
    question: "Can we coexist with our existing tax engines?",
    answer:
      "Yes. Federated Coexistence and Shadow Assurance models allow standard tax engines to execute calculations while ZoikoTax maps wider regulatory obligations and audits system output.",
  },
  {
    question: "Is every capability available universally?",
    answer:
      "No. Capabilities are country-specific and require activated local country packs. Current live production support is verified via the Coverage Portal.",
  },
  {
    question: "How is AI utilized within the platform?",
    answer:
      "AI acts strictly as an assistant to analyze complex facts, flag anomalies, and suggest classification targets. Deterministic rules retain all final authority.",
  },
  {
    question: "Can outcomes be replayed for historical audits?",
    answer:
      "Yes. Every computation maps back to verified rule versions, source files, and operator approvals, ensuring outcomes can be safely recalculated.",
  },
  {
    question: "How do we evaluate the platform safely?",
    answer:
      "Through Shadow Assurance. You connect transaction mirrors, observe system calculations, and approve a gated cutover once consistency is verified.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="relative isolate w-full overflow-hidden bg-[#FAF8FA] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Image per user instructions (Platform and proof.png for section 12) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/platform-overview/Platform and proof.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col gap-2.5 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.1] tracking-tight text-[#18141B]">
              Direct answers. No inflated claims.
            </h2>
          </div>
        </Reveal>

        {/* 6 Clean FAQ Rows */}
        <div className="mt-8 sm:mt-12 flex flex-col divide-y divide-[#D8CEDD]">
          {platformFaqs.map((faq, idx) => (
            <Reveal key={faq.question} delay={idx * 0.04}>
              <div className="py-4.5 sm:py-5 first:pt-0">
                <h3 className="text-base sm:text-lg font-bold text-[#18141B]">
                  {faq.question}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-[#535055]">
                  {faq.answer}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

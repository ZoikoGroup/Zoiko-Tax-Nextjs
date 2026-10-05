"use client";

import { useState } from "react";
import { Container } from "./shared";

const faqs = [
  {
    question: "What does OEM / Embedded mean?",
    answer:
      "It describes approved partner provisioning and embedded capability patterns within a wider platform or service. Organization boundaries, capability scope, attribution and evidence remain explicit; technical embedding does not grant commercial rights.",
  },
  {
    question: "How do I provision partner organizations / tenants?",
    answer:
      "Confirm the approved partner identity and the actual organization model first. Exact creation, association and configuration mechanics follow platform and API source contracts. Provisioning does not itself create entitlement or approve production activation.",
  },
  {
    question: "Does embedded include white-label rights?",
    answer:
      "No. White-label, branding, attribution, resale and distribution permissions require approved commercial, legal and brand sources. Neither an API integration nor a partner context implies those rights.",
  },
  {
    question: "How do I activate tenant capabilities?",
    answer:
      "Verify the partner-eligible capability source, commercial / product grant, exact Coverage, environment and security readiness, then obtain controlled production activation approval. Navigation and test permission do not establish production entitlement.",
  },
  {
    question: "How do I attribute usage across organizations?",
    answer:
      "Use the supported organization context and source-defined capability, period and evidence references. Exact reporting mechanics remain governed and authenticated reporting is separate. Attribution does not establish charges, pricing, allowances or revenue share.",
  },
  {
    question: "How do I suspend or offboard?",
    answer:
      "Follow the approved lifecycle, restriction and data-handling sources with the accountable operational owner. Do not infer triggers, notice, restoration, retention or a right to continued service from this public page.",
  },
];

export default function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 bg-[rgba(240,230,247,1)] overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            14 / FAQ
          </span>
          <h2 className="text-[rgba(24,20,27,1)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            Direct answers. No implied rights.
          </h2>
          <p className="text-[rgba(102,95,105,1)] text-lg sm:text-xl font-normal leading-[1.6] font-['Inter',sans-serif]">
            Public architecture guidance; exact technical, operational and commercial mechanics remain governed.
          </p>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start">
          {faqs.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div
                key={faq.question}
                className="self-stretch py-6 sm:py-7 border-t border-[rgba(216,206,221,1)] flex flex-col justify-start items-start gap-3.5 transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex justify-between items-center gap-6 text-left cursor-pointer group"
                >
                  <div className="flex-1 text-[rgba(24,20,27,1)] text-xl sm:text-2xl font-normal font-['Inter',sans-serif] group-hover:text-[rgba(214,90,44,1)] transition-colors">
                    {faq.question}
                  </div>
                  <span className="relative size-6 shrink-0 flex items-center justify-center" aria-hidden="true">
                    <span className="block h-[2px] w-3.5 bg-[rgba(214,90,44,1)] rounded-full" />
                    <span
                      className={`absolute block h-3.5 w-[2px] bg-[rgba(214,90,44,1)] rounded-full transition-transform duration-200 ${
                        isOpen ? "scale-y-0" : "scale-y-100"
                      }`}
                    />
                  </span>
                </button>
                {isOpen && (
                  <p className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif] pt-1">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

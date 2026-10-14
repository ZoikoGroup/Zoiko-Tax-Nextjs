"use client";

import React, { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Can I find live Coverage information in the Documentation?",
    answer:
      "No. Documentation explains concepts and workflows, but it does not infer live market or capability support. You must route to the canonical Coverage destination for live availability truth.",
  },
  {
    question: "Are code samples in the Documentation ready for production?",
    answer:
      "Executable-looking examples must be source-backed or clearly illustrative/non-production. Public docs must not contain real credentials, secrets, customer payloads, or private endpoints.",
  },
  {
    question: "Does Documentation override the API Reference?",
    answer:
      "No. API, SDK, webhook, and batch contract truth must remain in canonical Developers sources. Documentation may route users to these sources but will not fork contract authority.",
  },
];

export default function DocumentationFAQ() {
  // In Figma, the first item is open by default
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full bg-white border-b border-[#E5E7EB] py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8">
        <Reveal>
          <h2 className="text-[30px] font-bold leading-[36px] text-[#1E1B4B] font-['Inter',sans-serif]">
            Frequently Asked Questions
          </h2>
        </Reveal>

        <div className="pt-8 flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <Reveal key={faq.question} delay={index * 0.06}>
                <div className="w-full bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-6 transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleIndex(index)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[18px] font-bold leading-[28px] text-[#1E1B4B] font-['Inter',sans-serif]">
                      {faq.question}
                    </span>
                    <span
                      className={`shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-0" : "rotate-180"
                      }`}
                    >
                      <Image
                        src="/images/documentation/faq-icon.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-4">
                      <p className="text-[16px] font-normal leading-[26px] text-[#374151] max-w-[782px] font-['Inter',sans-serif]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

interface FAQItem {
  question: string;
  answer: string;
  link?: {
    text: string;
    href: string;
  };
}

const FAQS: FAQItem[] = [
  {
    question: "Does Production mean available globally?",
    answer:
      "No. Production is capability- and scope-limited. Verify the current market record; global architecture does not mean every capability is live in every jurisdiction.",
  },
  {
    question: "Is Production the same as Managed?",
    answer:
      "No. Managed includes an approved managed service layer. Production alone does not grant managed operations or a commercial entitlement.",
  },
  {
    question: "Can a Pilot capability be used in production?",
    answer:
      "Pilot is controlled, limited deployment—not general Production availability. Confirm the permitted scope, contracts and approval rather than inferring production readiness.",
  },
  {
    question: "How often does coverage change?",
    answer:
      "Updates follow governed source, release and review controls. No fixed frequency or permanent status is promised. Verify the latest authoritative record before relying on its status.",
  },
  {
    question: "Where can I verify the current scope?",
    answer:
      "Use View Current Coverage and the approved capability record, including scoped conditions, source and currentness. Unresolved facts remain Status not confirmed.",
    link: {
      text: "View Current Coverage →",
      href: "/coverage-overview",
    },
  },
];

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4]);

  const toggle = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <SectionContainer
      id="faq"
      className="relative overflow-hidden bg-white"
    >
      {/* Background Dot Pattern Texture */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-40"
        aria-hidden="true"
      >
        <Image
          src="/coverage-production/dot-pattern-bg.webp"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10">
        <Reveal>
          <div className="flex flex-col gap-10">
            {/* Section Heading */}
            <SectionHeader
              eyebrow="Frequently asked questions"
              title="Direct answers. No inferred availability."
              className="mb-0"
            />

            {/* Questions and Answers List */}
            <div className="flex flex-col divide-y divide-[#D8CEDD] border-t border-[#D8CEDD]">
              {FAQS.map((faq, idx) => {
                const isOpen = openIndices.includes(idx);
                return (
                  <div key={idx} className="flex flex-col py-6 sm:py-7">
                    <button
                      type="button"
                      onClick={() => toggle(idx)}
                      className="flex w-full items-center justify-between gap-6 text-left focus:outline-none group"
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg sm:text-[21px] font-semibold text-[#18141B] group-hover:text-[#301153] transition-colors font-['Inter',sans-serif]">
                        {faq.question}
                      </span>

                      {/* Plus/Minus Indicator */}
                      <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-[#301153]">
                        {isOpen ? (
                          <svg
                            width="14"
                            height="2"
                            viewBox="0 0 14 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1H13"
                              stroke="#301153"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 1V13M1 7H13"
                              stroke="#301153"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3.5 pr-8 flex flex-col gap-3">
                            <p className="text-base font-normal leading-relaxed text-[#665F69] max-w-4xl font-['Inter',sans-serif]">
                              {faq.answer}
                            </p>
                            {faq.link && (
                              <Link
                                href={faq.link.href}
                                className="inline-flex items-center text-sm font-semibold text-[#301153] hover:underline font-['Inter',sans-serif]"
                              >
                                {faq.link.text}
                              </Link>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

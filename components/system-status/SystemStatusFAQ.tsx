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
    question: "Is ZoikoTax down?",
    answer:
      "Use System Status for the current authoritative answer. The page should show the source-backed overall state, affected services, active incidents and when that information was last verified. If status data is stale or unavailable, it must say so rather than defaulting to operational.",
  },
  {
    question: "What does an operational state mean?",
    answer:
      "It means the authoritative status source currently reports expected availability for the applicable published scope. It does not mean every customer/account/workflow is unaffected or that no issue exists outside public status scope.",
  },
  {
    question: "Why am I having trouble if no incident is listed?",
    answer:
      "Public status is platform/service-level. Account, permissions, data, integration or workflow issues can require Customer Support even when no public incident is active.",
  },
  {
    question: "Are maintenance and incidents the same?",
    answer:
      "No. Planned maintenance is approved scheduled work and must be presented separately from unplanned incidents unless the authoritative source explicitly links them.",
  },
  {
    question: "Does System Status show ZoikoTax’s SLA?",
    answer:
      "Not by default. Public status and incident history do not create a contractual SLA. Any SLA/availability commitment is governed by its approved commercial/legal source.",
  },
  {
    question: "Can I report a vulnerability here?",
    answer:
      "No. Use Responsible Disclosure so sensitive technical details are handled by the appropriate security process.",
  },
  {
    question: "Why does the page say status is unavailable?",
    answer:
      "The current operational source cannot be reliably verified. The interface must not reuse an older positive state as if it were current.",
  },
  {
    question: "Does a resolved incident mean every user is fixed?",
    answer:
      "No. It means the authoritative incident process has closed the public incident. If you still experience a problem, use Customer Support for account-specific investigation.",
  },
];

export default function SystemStatusFAQ() {
  // First item open by default as in Figma
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      className="w-full py-24 border-b border-[#E5E7EB] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/documentation/quick-paths-bg.png')",
      }}
    >
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8">
        <Reveal>
          <h2 className="text-[30px] font-bold leading-[36px] text-[#1E1B4B] font-['Inter',sans-serif]">
            System Status FAQ
          </h2>
        </Reveal>

        <div className="pt-8 flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <Reveal key={faq.question} delay={index * 0.04}>
                <div className="w-full bg-white border border-[#E5E7EB] rounded-xl p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-colors">
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
                        src="/images/system-status/faq-chevron.svg"
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

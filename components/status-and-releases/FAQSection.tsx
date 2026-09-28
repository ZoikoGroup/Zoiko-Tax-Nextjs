"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { SectionContainer, SectionHeader } from "./shared";
import { faqData } from "./status-data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col gap-10">
        <SectionHeader
          eyebrow="Direct answers"
          title="Questions buyers ask about Coverage chronology"
          description="Bounded answers keep status history, current Coverage and product delivery from being conflated."
        />

        {/* Questions List */}
        <div className="flex flex-col border-t border-[#D8CEDD]">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 lg:gap-8 py-6 border-b border-[#D8CEDD] transition-colors"
              >
                {/* Question */}
                <div
                  onClick={() => toggle(index)}
                  className="flex items-start gap-3.5 lg:w-[45%] shrink-0 cursor-pointer lg:cursor-default"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEE2F5] text-[#301153]">
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <h3 className="text-base font-bold leading-[1.45] text-[#18141B]">
                    {item.question}
                  </h3>
                  <button
                    type="button"
                    className="ml-auto lg:hidden text-[#665F69]"
                    aria-label="Toggle answer"
                  >
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Answer */}
                <div
                  className={`lg:w-[55%] ${
                    isOpen ? "block" : "hidden lg:block"
                  }`}
                >
                  <p className="text-base font-normal leading-[1.55] text-[#665F69] pl-11 lg:pl-0">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

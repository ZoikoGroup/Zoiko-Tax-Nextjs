"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ArrowRight } from "lucide-react";
import { Reveal, SectionHeader } from "./shared";
import { FAQS } from "./types";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-1": true,
    "faq-2": true,
    "faq-3": true,
    "faq-4": true,
    "faq-5": true,
    "faq-6": true,
    "faq-7": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF8FA] border-b border-[#E5D9EB] py-16 sm:py-20 lg:py-24">
      {/* Pattern background */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-20"
        aria-hidden="true"
      >
        <Image
          src="/remittance-coverage/pattern-bg.png"
          alt="FAQ pattern background"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1360px] px-4 sm:px-8 xl:px-16 space-y-10 sm:space-y-12">
        <Reveal>
          {/* Section Heading */}
          <SectionHeader
            eyebrow="Frequently asked questions"
            title="Direct answers. No inflated claims."
            description="Visible answers keep readiness truth available without a gate."
          />
        </Reveal>

        {/* FAQ Items List */}
        <Reveal delay={0.1}>
          <div className="space-y-3.5 max-w-5xl">
            {FAQS.map((faq) => {
              const isOpen = !!openItems[faq.id];

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-[#E9E1EC] bg-white p-5 sm:p-6 shadow-2xs hover:shadow-xs transition-shadow"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    className="w-full flex items-start justify-between gap-4 text-left cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs sm:text-sm font-bold text-[#D65A2C] mt-0.5 shrink-0">
                        {faq.number}
                      </span>
                      <h3 className="text-base sm:text-[17px] font-bold text-[#18141B] font-['Inter',sans-serif] leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div className="shrink-0 w-7 h-7 rounded-full bg-[#FAF3FF] flex items-center justify-center text-[#18141B] border border-[#E9E1EC]">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pl-8 sm:pl-9 pr-6 text-xs sm:text-sm leading-relaxed text-[#665F69]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* FAQ Support Footer */}
        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#F2EBF5]">
            <p className="text-xs sm:text-sm leading-relaxed text-[#665F69] max-w-[780px]">
              Still evaluating exact implementation or contract scope? Start with public Coverage, then bring the selected market identity and customer scenario to a scoped conversation.
            </p>

            <Link
              href="/coverage-overview"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D8CEDD] bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#18141B] shadow-2xs hover:bg-[#FAF6FC] hover:border-[#BF6735] transition-all shrink-0 self-start sm:self-auto cursor-pointer"
            >
              <span>View Coverage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

const FAQ_ITEMS = [
  {
    question: "What does Managed Compliance Coverage mean?",
    answer:
      "It is the public ZoikoTax readiness view for approved managed operations by market and exact scope. It combines the current underlying capability state, managed operational-readiness state, approved qualifier and currentness.",
  },
  {
    question: "Why are two readiness gates required?",
    answer:
      "Software readiness and operational readiness prove different things. The required underlying capability must be in PRODUCTION, and operations must be separately approved for the exact managed scope before MANAGED can be shown.",
  },
  {
    question: "Does underlying Production mean Managed Compliance is available?",
    answer:
      "No. PRODUCTION means the underlying software capability is production-ready. It does not approve managed operations, create a service promise or infer customer-specific responsibility.",
  },
  {
    question: "Does Managed status guarantee customer compliance or filing outcomes?",
    answer:
      "No. MANAGED is a bounded readiness state, not legal advice, a guarantee of compliance, authority acceptance, filing outcome, representation, SLA or customer responsibility allocation.",
  },
  {
    question: "Are all filings, authorities or services included?",
    answer:
      "No. Only the exact approved scope or qualifier shown in the governed record is included. Unlisted filings, authorities, networks, schemas, services and operational commitments remain outside the public statement.",
  },
  {
    question: "What happens when status is stale, conflicting or unknown?",
    answer:
      "The page shows Stale source, Conflicting records or Status unavailable explicitly and suppresses a positive MANAGED conclusion. Historical Production never overrides the current governed state.",
  },
  {
    question: "How should buyers verify exact scope?",
    answer:
      "Read the selected market record, approved qualifier, pack evidence and Status & Releases together. Use Book a Demo for customer-scenario, implementation and contract questions; it never replaces public Coverage truth.",
  },
];

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3, 4, 5, 6]);

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <SectionContainer className="bg-[#FAF8FA] border-b border-[#E5D9EB]">
      <Reveal>
        <div className="space-y-10 sm:space-y-12">
          <SectionHeader
            eyebrow="FAQ"
            title="Direct answers. No inflated claims."
            description="Visible answers preserve public readiness truth and explain the limits of every status."
          />

          {/* FAQ List from Figma */}
          <div className="divide-y divide-[#E5D9EB] rounded-[18px] border border-[#E5D9EB] bg-white overflow-hidden shadow-xs">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndices.includes(idx);

              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 hover:bg-[#FAF6FC]/50 transition-colors"
                >
                  <div
                    onClick={() => toggleItem(idx)}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-start cursor-pointer select-none"
                  >
                    {/* Question Column */}
                    <div className="md:col-span-5 flex items-start gap-3">
                      <div className="p-1 rounded-md bg-[#FAF3FF] text-[#D65A2C] shrink-0 mt-0.5">
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-[#18141B] leading-snug">
                        {item.question}
                      </h4>
                    </div>

                    {/* Answer Column */}
                    <div className="md:col-span-7">
                      <p
                        className={`text-sm sm:text-[15px] leading-relaxed text-[#665F69] ${
                          isOpen ? "block" : "hidden md:block opacity-60"
                        }`}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "What is ZoikoTax Remittance Orchestration?",
      a: "It is the governed control plane for tax and regulatory payment instruction workflows. It maps validated filing liabilities to structured instructions, coordinates sign-off loops, handles package handoff to external bank portals, and logs reconciliation audit records.",
    },
    {
      q: "Does ZoikoTax hold or transmit customer funds?",
      a: "Absolutely not. ZoikoTax has no custody of your corporate funds, does not operate customer bank accounts, and does not function as a money transmitter or payment processor.",
    },
    {
      q: "Does it pay tax and regulatory authorities directly?",
      a: "No. ZoikoTax generates the payment instructions in standard bank-friendly formats (like ISO 20022 schemas). Your treasury team or existing ERP/TMS executes the payment files through your authorized banking partners.",
    },
    {
      q: "How does remittance connect back to filing?",
      a: "When your bank confirms payment, ZoikoTax matches the transaction with the appropriate filing return and regulatory obligations. This closes the liability loop in the registry and generates permanent audit evidence.",
    },
  ];

  const [openIndices, setOpenIndices] = useState<number[]>([0, 1, 2, 3]);

  const toggle = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="self-stretch px-4 sm:px-8 lg:px-20 py-20 sm:py-24 bg-purple-50 flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="justify-start text-orange-600 text-sm font-bold font-['Sora']">
          FAQ
        </div>
        <h2 className="justify-start text-zinc-900 text-3xl sm:text-4xl lg:text-5xl font-bold font-['Sora'] leading-tight lg:leading-[48.40px]">
          Direct answers. No inflated claims.
        </h2>
      </div>

      <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
        {faqs.map((faq, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className="self-stretch py-5 border-b border-zinc-300 flex flex-col justify-start items-start gap-2.5"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="self-stretch flex justify-between items-center text-left"
              >
                <span className="justify-start text-zinc-900 text-lg font-semibold">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`size-4 text-zinc-600 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="self-stretch justify-start text-neutral-600 text-sm font-normal leading-relaxed pr-6">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

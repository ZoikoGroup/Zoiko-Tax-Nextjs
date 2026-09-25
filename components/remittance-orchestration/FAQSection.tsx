"use client";

import React, { useState } from "react";
import Image from "next/image";
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
    <section className="relative isolate w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background Image - Full Opacity */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/remittance-orchestration/Operational Challenges Section.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col items-start gap-4 max-w-4xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#18141B]">
              Direct answers. No inflated claims.
            </h2>
          </div>

          {/* FAQ List */}
          <div className="flex flex-col divide-y divide-[#D8CEDD] border-y border-[#D8CEDD] bg-white/70 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-2">
            {faqs.map((faq, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div key={idx} className="py-5 sm:py-6 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between gap-4 text-left transition-colors"
                  >
                    <span className="text-base sm:text-lg font-semibold text-[#18141B]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#535055] transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#D65A2C]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="text-sm sm:text-base font-normal text-[#535055] leading-relaxed pr-6">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

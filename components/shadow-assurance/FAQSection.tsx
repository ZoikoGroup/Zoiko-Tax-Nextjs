"use client";

import React, { useState } from "react";
import WhiteBgPattern from "./WhiteBgPattern";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is ZoikoTax a standalone tax engine?",
      a: "ZoikoTax can operate natively where supported, federate with legacy incumbent engines, or compare parallel compliance outcomes through non-impacting Shadow Assurance.",
    },
    {
      q: "Does parallel comparison prove legal correctness?",
      a: "No. Agreement between engines confirms computational consistency based on input payloads and active rules. Legal compliance remains under human officer review.",
    },
    {
      q: "Does Shadow Assurance write to my billing database?",
      a: "No. The pipeline strictly mirrors active billing payloads read-only. Production transaction databases remain entirely untouched.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full relative bg-purple-50 border-t border-zinc-300 flex flex-col justify-start items-start overflow-hidden">
      <WhiteBgPattern />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-16 sm:py-24 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="justify-start text-orange-600 text-sm font-bold font-['Inter'] uppercase">
            FAQ
          </div>
          <h2 className="self-stretch justify-start text-zinc-900 text-3xl sm:text-4xl font-extrabold font-['Inter'] leading-tight">
            Direct answers. No inflated claims.
          </h2>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="self-stretch py-5 border-b border-zinc-300 flex flex-col justify-start items-start gap-2.5 transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center text-left gap-4 focus:outline-hidden"
                >
                  <span className="justify-start text-zinc-900 text-lg font-semibold font-['Inter']">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-zinc-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

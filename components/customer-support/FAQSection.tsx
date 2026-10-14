"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_DATA as F } from "./customer-support-data";
import { Reveal } from "./shared";

export default function FAQSection() {
  return (
    <section className="w-full bg-[#FAF3FF] py-[90px]">
      <div className="mx-auto w-full max-w-[1156px] px-4 sm:px-8">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold leading-[1.2] text-[#1E1B4B]">{F.title}</h2>
        </Reveal>

        <div className="pt-10 flex flex-col gap-4">
          {F.items.map((item, i) => (
            <Reveal key={item.question} delay={0.02 * i}>
              <div className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base font-bold text-[#1E1B4B]">{item.question}</h3>
                  <ChevronDown className="h-6 w-6 shrink-0 text-[#1E1B4B]" aria-hidden="true" />
                </div>
                <p className="pt-4 text-sm leading-[1.625] text-[#4B5563] max-w-[782px]">{item.answer}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

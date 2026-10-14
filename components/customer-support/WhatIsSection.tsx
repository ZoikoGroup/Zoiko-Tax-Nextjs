"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { WHAT_IS_DATA as W } from "./customer-support-data";
import { Reveal } from "./shared";

export default function WhatIsSection() {
  return (
    <section className="w-full bg-[#FAF3FF] border-b border-[#E5E7EB] py-[90px]">
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-8">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold leading-[1.2] text-[#1E1B4B]">{W.title}</h2>
        </Reveal>

        <Reveal delay={0.04}>
          <p className="pt-8 text-lg leading-[1.56] text-[#374151] max-w-[896px]">{W.description}</p>
        </Reveal>

        <div className="pt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Reveal delay={0.08}>
            <div className="h-full rounded-xl border border-[#F3F4F6] bg-[#F9FAFB] p-6">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-[#15803D]" aria-hidden="true" strokeWidth={2.4} />
                <h3 className="text-lg font-bold text-[#15803D]">{W.is.label}</h3>
              </div>
              <ul className="pt-4 flex flex-col gap-3">
                {W.is.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-[1.4] text-[#374151]">
                    <span className="text-[#16A34A] shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="h-full rounded-xl border border-[#FEE2E2] bg-[#FEF2F2] p-6">
              <div className="flex items-center gap-2">
                <X className="h-5 w-5 text-[#B91C1C]" aria-hidden="true" strokeWidth={2.4} />
                <h3 className="text-lg font-bold text-[#B91C1C]">{W.isNot.label}</h3>
              </div>
              <ul className="pt-4 flex flex-col gap-3">
                {W.isNot.items.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-[1.4] text-[#374151]">
                    <span className="text-[#EF4444] shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { directAnswerData } from "./exemptions-data";
import { Check, X } from "lucide-react";

export default function DirectAnswerSection() {
  return (
    <SectionContainer id="direct-answer" className="bg-[#FAF8FA]">
      <Reveal>
        <SectionHeader
          eyebrow={directAnswerData.eyebrow}
          title={directAnswerData.title}
          description={directAnswerData.description}
        />
      </Reveal>

      <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* WHAT ZOIKOTAX IS */}
        <Reveal delay={0.1}>
          <div className="h-full rounded-2xl border border-[#A3F3D3] bg-[#EBFDF5] p-5 sm:p-8 shadow-sm transition-all duration-200 hover:shadow-md">
            <h3 className="text-sm sm:text-base font-bold tracking-wide uppercase text-[#26735B]">
              {directAnswerData.isTitle}
            </h3>

            <ul className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4">
              {directAnswerData.isItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#26735B]/15 text-[#26735B]">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-normal text-[#18141B] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* WHAT ZOIKOTAX IS NOT */}
        <Reveal delay={0.2}>
          <div className="h-full rounded-2xl border border-[#FCA5A5] bg-[#FEF2F2] p-5 sm:p-8 shadow-sm transition-all duration-200 hover:shadow-md">
            <h3 className="text-sm sm:text-base font-bold tracking-wide uppercase text-[#BF3535]">
              {directAnswerData.isNotTitle}
            </h3>

            <ul className="mt-5 sm:mt-6 space-y-3.5 sm:space-y-4">
              {directAnswerData.isNotItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#BF3535]/15 text-[#BF3535]">
                    <X className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base font-normal text-[#535055] leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

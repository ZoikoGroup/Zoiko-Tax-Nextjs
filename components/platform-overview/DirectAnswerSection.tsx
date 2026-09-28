"use client";

import React from "react";
import { SectionContainer, Reveal } from "./shared";

export default function DirectAnswerSection() {
  return (
    <SectionContainer id="direct-answer" className="bg-[#FAF3FF]/60 border-y border-[#D8CEDD]/40">
      <Reveal>
        <div className="flex flex-col gap-4 max-w-6xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#D65A2C]">
            DIRECT ANSWER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.1] tracking-tight text-[#18141B]">
            What is ZoikoTax?
          </h2>
          <p className="text-base sm:text-lg lg:text-sm leading-relaxed text-[#535055]">
            ZoikoTax is a telecom tax and regulatory obligations platform connecting fiscal determination, obligations, compliance workflows, reconciliation and evidence through governed telecom-specific architecture.
          </p>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

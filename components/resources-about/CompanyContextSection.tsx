"use client";

import React from "react";
import { FileText } from "lucide-react";
import { SectionContainer, Reveal } from "./shared";
import { companyContextData } from "./types";

export default function CompanyContextSection() {
  const { card } = companyContextData;

  return (
    <SectionContainer
      id="company-context"
      className="bg-[#FAF3FF] border-b border-[#D8CEDD]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left column: Introduction */}
        <div className="lg:col-span-5 space-y-4">
          <Reveal>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#D65A2C]">
              {companyContextData.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold leading-[1.1] tracking-tight text-[#18141B]">
              {companyContextData.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-base sm:text-[17px] font-normal leading-[1.55] text-[#665F69]">
              {companyContextData.subhead}
            </p>
          </Reveal>
        </div>

        {/* Right column: Corporate source notice card */}
        <div className="lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="rounded-[16px] bg-[#F4EDF8] border border-[#D8CEDD] p-7 sm:p-9 space-y-5 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#301153] shadow-xs">
                <FileText className="w-6 h-6 stroke-[1.8]" />
              </div>

              <h3 className="text-xl sm:text-[23px] font-normal leading-[1.25] text-[#18141B]">
                {card.title}
              </h3>

              <p className="text-sm sm:text-[17px] font-normal leading-[1.55] text-[#665F69]">
                {card.description}
              </p>

              <div className="pt-3 border-t border-[#D8CEDD]/60">
                <p className="text-xs sm:text-[14px] font-medium text-[#665F69]">
                  {card.footerTags}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}

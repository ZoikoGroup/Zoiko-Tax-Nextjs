"use client";

import React from "react";
import { SectionContainer, Reveal } from "./shared";
import { decisionChainData } from "./exemptions-data";

export default function DecisionChainSection() {
  return (
    <SectionContainer id="workflow" className="bg-[#FAF8FA]">
      <Reveal>
        <div className="flex flex-col gap-2.5 sm:gap-3 max-w-4xl">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-[#D65A2C]">
            {decisionChainData.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal leading-[1.12] tracking-tight text-[#18141B] font-['Tiro_Gurmukhi',serif] break-words">
            {decisionChainData.title}
          </h2>
          <p className="mt-1 text-sm sm:text-base leading-relaxed text-[#535055] max-w-3xl">
            {decisionChainData.description}
          </p>
        </div>
      </Reveal>

      {/* 8-Card Controlled Workflow Chain */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {decisionChainData.steps.map((step, index) => (
          <Reveal key={step.num} delay={index * 0.04}>
            <div className="group relative flex h-full min-h-[150px] sm:min-h-[160px] flex-col justify-between rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#D65A2C]/30 hover:shadow-md">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-[#D65A2C] tracking-wider">
                    {step.num}
                  </span>
                  <span className="rounded-full bg-[#EBFDF5] border border-[#A3F3D3] px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold tracking-wider text-[#26735B] whitespace-nowrap">
                    {step.tag}
                  </span>
                </div>

                <h3 className="mt-3.5 sm:mt-4 text-base sm:text-[17px] font-bold text-[#18141B]">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs sm:text-[13px] leading-[1.5] text-[#535055]">
                  {step.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

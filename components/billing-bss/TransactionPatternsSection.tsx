"use client";

import React from "react";
import { TRANSACTION_PATTERNS_DATA } from "./billing-bss-data";
import { SectionContainer, SectionHeader, SequenceStage, DocRef, AuthorityNotice, Reveal } from "./shared";

export default function TransactionPatternsSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={TRANSACTION_PATTERNS_DATA.eyebrow}
          title={TRANSACTION_PATTERNS_DATA.title}
          description={TRANSACTION_PATTERNS_DATA.description}
        />
      </Reveal>

      <div className="mt-8 flex flex-col gap-4">
        {TRANSACTION_PATTERNS_DATA.patterns.map((pattern, i) => (
          <Reveal key={pattern.title} delay={0.04 * i}>
            <div className="rounded-2xl border border-[#D8CEDD] bg-white p-6 grid grid-cols-1 lg:grid-cols-[310px_1fr_1fr] gap-6">
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[22px] font-bold leading-[1.2] text-[#18141B]">{pattern.title}</h3>
                <p className="text-xs font-semibold text-[#301153]">{pattern.badge}</p>
                <span className="text-[11px] font-bold text-[#D65A2C]">WHEN TO USE</span>
                <p className="text-sm leading-[1.55] text-[#665F69]">{pattern.whenToUse}</p>
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="text-[11px] font-bold text-[#D65A2C]">ENTERPRISE SUPPLIES · CONCEPTUAL</span>
                <p className="text-[15px] leading-[1.55] text-[#665F69]">{pattern.enterpriseSupplies}</p>
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="text-[11px] font-bold text-[#D65A2C]">ZOIKOTAX RETURNS · CONCEPTUAL</span>
                <p className="text-[15px] leading-[1.55] text-[#665F69]">{pattern.zoikoReturns}</p>
                <DocRef label={pattern.refLabel} path={pattern.refPath} />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-8 rounded-[26px] bg-[#F1E8F8] p-6 sm:p-7 flex flex-col gap-5">
          <span className="text-xs font-bold text-[#301153]">{TRANSACTION_PATTERNS_DATA.specimen.tag}</span>
          <div className="flex flex-col sm:flex-row gap-2.5">
            {TRANSACTION_PATTERNS_DATA.specimen.stages.map((stage, i) => (
              <SequenceStage
                key={stage.step}
                step={stage.step}
                title={stage.title}
                description={stage.description}
                showArrow={i < TRANSACTION_PATTERNS_DATA.specimen.stages.length - 1}
              />
            ))}
          </div>
          <p className="text-sm leading-[1.55] text-[#665F69]">{TRANSACTION_PATTERNS_DATA.specimen.textEquivalent}</p>
        </div>
      </Reveal>

      <Reveal delay={0.24} className="w-full mt-8">
        <AuthorityNotice title={TRANSACTION_PATTERNS_DATA.notice.title} description={TRANSACTION_PATTERNS_DATA.notice.description} />
      </Reveal>
    </SectionContainer>
  );
}

"use client";

import React from "react";
import { PackageCheck } from "lucide-react";
import { MAPPING_DATA } from "./data-enterprise-systems-data";
import { ArrowLink, Notice, Reveal, SectionContainer, SectionHeader } from "./shared";

export default function MappingSection() {
  const { ownerCard, unmapped } = MAPPING_DATA;

  return (
    <SectionContainer className="bg-[#FAF5FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={MAPPING_DATA.eyebrow} title={MAPPING_DATA.title} description={MAPPING_DATA.description} />
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <Reveal className="flex-1 min-w-0">
            <div className="rounded-3xl border border-[#D8CEDD] bg-white p-5 sm:p-7 flex flex-col">
              <span className="text-xs font-bold uppercase text-[#B4561E]">{MAPPING_DATA.anatomyLabel}</span>
              <ol className="flex flex-col">
                {MAPPING_DATA.steps.map((step, idx) => (
                  <li key={step.title} className="py-5 border-b border-[#D8CEDD] flex items-start gap-4 sm:gap-5">
                    <span className="size-7 shrink-0 rounded-full bg-[#EFE6F7] inline-flex items-center justify-center text-xs font-bold text-[#301153]">
                      {idx + 1}
                    </span>
                    <div className="flex-1 flex flex-col gap-1.5">
                      <p className="text-lg font-semibold text-[#18141B]">{step.title}</p>
                      <p className="text-sm leading-5 text-[#665F69]">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="w-full lg:w-[340px] xl:w-[436px] shrink-0">
            <div className="flex flex-col gap-5">
              <div className="rounded-3xl bg-[#301153] p-6 sm:p-8 flex flex-col gap-4">
                <PackageCheck className="h-7 w-7 text-[#F4A261]" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="text-2xl sm:text-[28px] font-bold leading-tight text-white">{ownerCard.title}</h3>
                <p className="text-base leading-6 text-[#E9E1EF]">{ownerCard.lead}</p>
                <p className="text-sm leading-6 text-[#D9D0DF]">{ownerCard.description}</p>
              </div>

              <div className="rounded-2xl bg-[#FFF0E7] p-6 flex flex-col gap-2.5">
                <span className="text-xs font-bold uppercase text-[#B4561E]">{unmapped.tag}</span>
                <p className="text-base leading-6 text-[#665F69]">{unmapped.description}</p>
              </div>

              <ArrowLink href={MAPPING_DATA.link.href}>{MAPPING_DATA.link.label}</ArrowLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <Notice title={MAPPING_DATA.notice.title} description={MAPPING_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}

"use client";

import React from "react";
import { Fingerprint, ArrowUpRight } from "lucide-react";
import { EVIDENCE_REPLAY_DATA } from "./billing-bss-data";
import { SectionContainer, SectionHeader, SequenceStage, AuthorityNotice, Reveal } from "./shared";

export default function EvidenceReplaySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={EVIDENCE_REPLAY_DATA.eyebrow}
          title={EVIDENCE_REPLAY_DATA.title}
          description={EVIDENCE_REPLAY_DATA.description}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_490px] gap-6">
        <Reveal delay={0.06}>
          <div className="h-full rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-[#18141B]">{EVIDENCE_REPLAY_DATA.anatomy.title}</h3>
              <Fingerprint className="h-7 w-7 text-[#D65A2C]" aria-hidden="true" />
            </div>
            <span className="text-xs font-semibold text-[#D65A2C]">{EVIDENCE_REPLAY_DATA.anatomy.tag}</span>
            <div className="flex flex-col">
              {EVIDENCE_REPLAY_DATA.anatomy.categories.map((cat, i) => (
                <div key={cat.title} className={"flex flex-col gap-1.5 pt-3.5" + (i > 0 ? " border-t border-[#D8CEDD] mt-3.5" : "")}>
                  <p className="text-base text-[#301153]">{cat.title}</p>
                  <p className="text-sm leading-[1.55] text-[#665F69]">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-[26px] bg-[#301153] p-7 sm:p-9 flex flex-col gap-5">
            <h3 className="text-2xl sm:text-3xl font-bold leading-[1.12] text-white">{EVIDENCE_REPLAY_DATA.safeguards.title}</h3>
            <p className="text-base leading-[1.55] text-[#D9D0DF]">{EVIDENCE_REPLAY_DATA.safeguards.paragraph1}</p>
            <p className="text-base leading-[1.55] text-[#D9D0DF]">{EVIDENCE_REPLAY_DATA.safeguards.paragraph2}</p>
            <div className="flex items-center gap-2 pt-1">
              <span className="text-[15px] font-semibold text-[#F4A261]">{EVIDENCE_REPLAY_DATA.safeguards.reference}</span>
              <ArrowUpRight className="h-4 w-4 text-[#F4A261]" aria-hidden="true" />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-2.5 items-stretch">
        {EVIDENCE_REPLAY_DATA.stages.map((stage, i) => (
          <Reveal key={stage.step} delay={0.04 * i} className="flex-1 flex">
            <div className="w-full flex">
              <SequenceStage
                step={stage.step}
                title={stage.title}
                description={stage.description}
                showArrow={i < EVIDENCE_REPLAY_DATA.stages.length - 1}
              />
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="w-full mt-8">
        <AuthorityNotice title={EVIDENCE_REPLAY_DATA.notice.title} description={EVIDENCE_REPLAY_DATA.notice.description} />
      </Reveal>
    </SectionContainer>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { ERRORS_RECOVERY_DATA } from "./billing-bss-data";
import { SectionContainer, SequenceStage, DocRef, AuthorityNotice, Reveal } from "./shared";

export default function ErrorsRecoverySection() {
  return (
    <div className="relative w-full overflow-hidden bg-[#120327]">
      <div className="absolute inset-0 opacity-[0.17] pointer-events-none select-none" aria-hidden="true">
        <Image src="/billing-bss/errors-recovery-bg.png" alt="" fill className="object-cover" />
      </div>

      <SectionContainer className="relative">
        <Reveal>
          <div className="flex flex-col gap-3.5">
            <span className="text-xs sm:text-[13px] font-bold uppercase text-[#F4A261]">{ERRORS_RECOVERY_DATA.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] tracking-tight text-white">
              {ERRORS_RECOVERY_DATA.title}
            </h2>
            <p className="text-base sm:text-lg md:text-[20px] leading-[1.55] text-[#D9D0DF]">
              {ERRORS_RECOVERY_DATA.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 rounded-[26px] bg-[#301153] p-6 sm:p-7 flex flex-col gap-5">
            <span className="text-xs font-bold text-[#F4A261]">{ERRORS_RECOVERY_DATA.diagramTag}</span>
            <div className="flex flex-col sm:flex-row gap-2.5">
              {ERRORS_RECOVERY_DATA.stages.map((stage, i) => (
                <SequenceStage
                  key={stage.step}
                  step={stage.step}
                  title={stage.title}
                  description={stage.description}
                  showArrow={i < ERRORS_RECOVERY_DATA.stages.length - 1}
                  dark
                />
              ))}
            </div>
            <div className="rounded-xl bg-[#241039] p-4">
              <p className="text-sm leading-[1.5] text-[#D9D0DF]">{ERRORS_RECOVERY_DATA.reviewBranch}</p>
            </div>
            <p className="text-sm leading-[1.55] text-[#D9D0DF]">{ERRORS_RECOVERY_DATA.textEquivalent}</p>
          </div>
        </Reveal>

        <div className="mt-6 flex flex-col">
          {ERRORS_RECOVERY_DATA.principles.map((item, i) => (
            <Reveal key={item.title} delay={0.03 * i}>
              <div
                className={
                  "flex flex-col md:flex-row md:items-start gap-2 md:gap-8 py-4" +
                  (i > 0 ? " border-t border-[#4B305E]" : "")
                }
              >
                <p className="text-lg text-white md:w-[270px] shrink-0">{item.title}</p>
                <p className="flex-1 text-[15px] leading-[1.55] text-[#D9D0DF]">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ERRORS_RECOVERY_DATA.references.map((ref) => (
            <DocRef key={ref.label} label={ref.label} path={ref.path} dark />
          ))}
        </div>

        <Reveal delay={0.1} className="w-full mt-8">
          <AuthorityNotice title={ERRORS_RECOVERY_DATA.notice.title} description={ERRORS_RECOVERY_DATA.notice.description} dark />
        </Reveal>
      </SectionContainer>
    </div>
  );
}

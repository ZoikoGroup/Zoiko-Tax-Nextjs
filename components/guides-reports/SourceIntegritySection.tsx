"use client";

import React from "react";
import Image from "next/image";
import { Files, SearchCheck, UserRoundCheck } from "lucide-react";
import { SOURCE_INTEGRITY_DATA as S } from "./guides-reports-data";
import { SectionContainer, Reveal } from "./shared";

const ICONS = [Files, SearchCheck, UserRoundCheck];

export default function SourceIntegritySection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/guides-reports/sources-bg.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(29,3,59,0.84)]" />
      </div>

      <SectionContainer className="relative">
        <Reveal>
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-xs font-bold text-[#F4A261]">{S.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.12] text-white">{S.title}</h2>
            <p className="text-base sm:text-lg leading-[1.5] text-[#D9D0DF]">{S.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {S.standards.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.title} delay={0.04 * i}>
                <div className="h-full rounded-2xl bg-[#301153] border border-white/15 p-7 flex flex-col gap-4">
                  <Icon className="h-6 w-6 text-[#F4A261]" aria-hidden="true" />
                  <h3 className="text-xl sm:text-[22px] leading-[1.3] text-white">{s.title}</h3>
                  <p className="text-base leading-[1.65] text-[#D9D0DF]">{s.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[26px] bg-[#14091F] border border-white/15 p-7 sm:p-8 flex flex-col lg:flex-row gap-8 lg:gap-10">
            <div className="lg:w-[420px] shrink-0 flex flex-col gap-3.5">
              <span className="text-xs font-bold text-[#F4A261]">{S.status.eyebrow}</span>
              <h3 className="text-2xl text-white">{S.status.title}</h3>
              <p className="text-base leading-[1.65] text-[#D9D0DF]">{S.status.description}</p>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              {S.rules.map((rule) => (
                <div key={rule.title} className="flex flex-col gap-1.5">
                  <span className="text-base text-white">{rule.title}</span>
                  <span className="text-sm leading-[1.65] text-[#D9D0DF]">{rule.description}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </SectionContainer>
    </section>
  );
}

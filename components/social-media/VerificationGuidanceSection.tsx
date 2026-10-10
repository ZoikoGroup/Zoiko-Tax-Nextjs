"use client";

import React from "react";
import Image from "next/image";
import { ScanLine, ExternalLink, Flag, Shield, LockKeyhole } from "lucide-react";
import { VERIFICATION_GUIDANCE_DATA as V, SAFE_STEPS_DATA as S } from "./social-media-data";
import { SectionContainer, Reveal } from "./shared";

export default function VerificationGuidanceSection() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#120327]">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/social-media/verification-bg.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[rgba(18,3,39,0.82)]" />
        </div>

        <SectionContainer className="relative">
          <Reveal>
            <div className="flex flex-col gap-4 mb-10">
              <span className="text-sm font-bold uppercase text-[#F4A261]">{V.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{V.title}</h2>
              <p className="text-lg sm:text-[20px] leading-[1.5] text-[#D9D0DF]">{V.description}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {V.steps.map((step, i) => (
              <Reveal key={step.title} delay={0.03 * i}>
                <div className="h-full rounded-2xl bg-[rgba(26,13,47,0.96)] border border-white/[0.13] p-6 flex flex-col gap-3.5">
                  <ScanLine className="h-6 w-6 text-[#F4A261]" aria-hidden="true" />
                  <h3 className="text-2xl font-bold leading-[1.2] text-white">{step.title}</h3>
                  <p className="text-base leading-[1.6] text-[#D9D0DF]">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-[#301153] p-7 flex flex-col sm:flex-row items-start gap-6">
              <ExternalLink className="h-7 w-7 shrink-0 text-[#F4A261]" aria-hidden="true" />
              <div className="flex-1 flex flex-col gap-2.5">
                <h3 className="text-2xl font-bold text-white">{V.disclosure.title}</h3>
                <p className="text-base leading-[1.6] text-[#D9D0DF]">{V.disclosure.description}</p>
              </div>
            </div>
          </Reveal>
        </SectionContainer>
      </section>

      <SectionContainer className="bg-[#FAF3FF]">
        <Reveal>
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{S.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{S.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{S.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Reveal>
            <div className="h-full rounded-[26px] border border-[#D8CEDD] bg-white p-9 flex flex-col gap-5">
              <Flag className="h-7 w-7 text-[#D65A2C]" aria-hidden="true" />
              <h3 className="text-2xl sm:text-[32px] font-bold leading-[1.15] text-[#18141B]">{S.impersonation.title}</h3>
              <p className="text-base leading-[1.6] text-[#665F69]">{S.impersonation.description}</p>
              <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-[#D8CEDD] bg-[#F3EEF7] px-[22px] h-12 text-sm font-semibold text-[#665F69]">
                {S.impersonation.action}
                <LockKeyhole className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-[13px] leading-[1.6] text-[#665F69]">{S.impersonation.actionNote}</p>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="h-full rounded-[26px] bg-[#301153] p-9 flex flex-col gap-5">
              <Shield className="h-7 w-7 text-[#F4A261]" aria-hidden="true" />
              <h3 className="text-2xl sm:text-[32px] font-bold leading-[1.15] text-white">{S.disclosure.title}</h3>
              <p className="text-base leading-[1.6] text-[#D9D0DF]">{S.disclosure.description}</p>
              <span className="inline-flex w-fit items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.07] px-[22px] h-12 text-sm font-semibold text-white">
                {S.disclosure.action}
                <LockKeyhole className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-[13px] leading-[1.6] text-[#D9D0DF]">{S.disclosure.actionNote}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-8 flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-[#18141B] mb-2">{S.needs.title}</h3>
            {S.needs.rows.map((row) => (
              <div key={row.need} className="border-b border-[#D8CEDD] py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
                <span className="text-base font-semibold text-[#18141B] sm:w-[300px] shrink-0">{row.need}</span>
                <span className="flex-1 text-base text-[#665F69]">{row.route}</span>
                <span className="inline-flex w-fit items-center rounded-full bg-[#F3EEF7] px-3.5 py-2 text-xs font-medium text-[#301153]">
                  {row.status}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </SectionContainer>
    </>
  );
}

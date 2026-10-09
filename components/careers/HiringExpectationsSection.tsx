"use client";

import React from "react";
import Image from "next/image";
import { ListChecks, MessageSquare, FileCheck, ArrowRight } from "lucide-react";
import { HIRING_EXPECTATIONS_DATA as H, EMPLOYER_INFO_DATA as E } from "./careers-data";
import { SectionContainer, SecondaryButton, Reveal } from "./shared";

const ICONS = [ListChecks, MessageSquare, FileCheck];

export default function HiringExpectationsSection() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#120327]">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/careers/hiring-expectations-bg.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[rgba(18,3,39,0.72)]" />
        </div>

        <SectionContainer className="relative">
          <Reveal>
            <div className="flex flex-col gap-4 mb-10">
              <span className="text-sm font-bold uppercase text-[#F4A261]">{H.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{H.title}</h2>
              <p className="text-lg sm:text-[20px] leading-[1.5] text-[#D9D0DF]">{H.description}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {H.cards.map((c, i) => {
              const Icon = ICONS[i];
              return (
                <Reveal key={c.title} delay={0.03 * i}>
                  <div className="h-full rounded-2xl bg-[#190A36] border border-white/10 p-7 flex flex-col gap-4">
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    <h3 className="text-xl sm:text-[22px] font-semibold leading-[1.25] text-white">{c.title}</h3>
                    <p className="text-base leading-[1.6] text-[#D9D0DF]">{c.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </SectionContainer>
      </section>

      <SectionContainer className="bg-[#FAF3FF]">
        <Reveal>
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{E.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{E.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{E.description}</p>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-6">
          <Reveal className="w-full lg:w-[450px] shrink-0">
            <div className="relative h-full rounded-[26px] border-[2.5px] border-white overflow-hidden p-8 flex flex-col gap-6">
              <div className="absolute inset-0" aria-hidden="true">
                <Image src="/careers/policy-card-bg.png" alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-white/65" />
              </div>
              <div className="relative flex flex-col gap-6">
                <h3 className="text-2xl sm:text-[28px] font-semibold leading-[1.2] text-[#18141B]">{E.companyContext.title}</h3>
                <p className="text-base leading-[1.6] text-[#665F69]">{E.companyContext.description}</p>
                <SecondaryButton>
                  <span className="inline-flex items-center gap-2">
                    {E.companyContext.action}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </SecondaryButton>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.04} className="flex-1 min-w-0">
            <div className="h-full rounded-[26px] border border-[#D8CEDD] bg-white p-8 flex flex-col gap-4">
              <span className="inline-flex w-fit items-center rounded-full border border-[#D8CEDD] bg-[#F3EDF7] px-3.5 py-2 text-xs font-mono text-[#665F69]">
                {E.termsStatus.badge}
              </span>
              <h3 className="text-2xl font-semibold text-[#18141B]">{E.termsStatus.title}</h3>
              {E.termsStatus.paragraphs.map((p) => (
                <p key={p} className="text-base leading-[1.6] text-[#665F69]">
                  {p}
                </p>
              ))}
              <p className="text-sm leading-[1.6] text-[#665F69]">{E.termsStatus.footnote}</p>
            </div>
          </Reveal>
        </div>
      </SectionContainer>
    </>
  );
}

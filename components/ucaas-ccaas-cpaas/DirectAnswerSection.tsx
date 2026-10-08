import React from "react";
import Image from "next/image";
import { SectionContainer, MonoPill, Reveal } from "./shared";
import { DIRECT_ANSWER_DATA } from "./ucaas-data";

export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF] py-[45px]">
      <div className="pointer-events-none absolute inset-0 select-none opacity-15 mix-blend-multiply" aria-hidden="true">
        <Image
          src="/ucaas-ccaas-cpaas/pattern-classification.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-9">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{DIRECT_ANSWER_DATA.eyebrow}</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#18141B] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.18]">
              What does ZoikoTax do for UCaaS,<br />CCaaS &amp; CPaaS providers?
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="flex w-full min-h-[226px] flex-col gap-10 rounded-3xl bg-white p-6 border border-[#D8CEDD] shadow-[0_6px_18px_0_rgba(0,0,0,0.06)] sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:p-8 lg:p-10">
            <p className="flex-1 text-base text-[#18141B] sm:text-lg sm:leading-7 lg:text-[1.125rem] lg:leading-[1.75rem]">
              ZoikoTax helps UCaaS, CCaaS &amp; CPaaS providers connect telecom service classification,<br className="hidden sm:inline" />
              relevant location and jurisdiction context, fiscal responsibility, supported tax determination,<br className="hidden sm:inline" />
              regulatory obligations, compliance, reconciliation and evidence within a governed fiscal-<br className="hidden sm:inline" />
              control architecture. Availability varies by jurisdiction and capability.
            </p>
            <div className="flex w-full shrink-0 flex-col items-start gap-2.5 sm:w-80">
              {DIRECT_ANSWER_DATA.pills.map((pill) => (
                <MonoPill key={pill.label} label={pill.label} highlight={pill.highlight} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

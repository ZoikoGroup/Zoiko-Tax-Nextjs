"use client";

import React from "react";
import { Shield } from "lucide-react";
import { INSTALL_DATA } from "./sdks-data";
import { SectionContainer, SectionHeader, Reveal, TextLink, IllustrativeBanner, NoticeBox } from "./shared";

export default function InstallUsageSection() {
  const { example } = INSTALL_DATA;

  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col gap-8">
        <Reveal>
          <SectionHeader eyebrow={INSTALL_DATA.eyebrow} title={INSTALL_DATA.title} description={INSTALL_DATA.description} />
        </Reveal>

        <Reveal delay={0.04}>
          <NoticeBox title={INSTALL_DATA.notice.title} description={INSTALL_DATA.notice.description} />
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-8">
          <Reveal className="lg:w-96 shrink-0">
            <div className="flex flex-col items-start gap-6">
              {INSTALL_DATA.steps.map((step, idx) => (
                <div key={step.title} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F1E8F8] text-sm font-bold text-[#301153]">
                    {idx + 1}
                  </span>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold leading-6 text-[#18141B]">{step.title}</p>
                    <p className="text-base leading-6 text-[#665F69]">{step.description}</p>
                  </div>
                </div>
              ))}
              <TextLink href={INSTALL_DATA.link.href}>{INSTALL_DATA.link.label}</TextLink>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="flex-1 min-w-0">
            <div className="rounded-3xl border border-[#D8CEDD] bg-[#FDFCFD] p-6 sm:p-8 flex flex-col gap-4">
              <IllustrativeBanner />
              <p className="text-xl sm:text-2xl font-semibold leading-7 text-[#18141B]">{example.title}</p>
              <p className="text-sm leading-5 text-[#665F69]">{example.description}</p>
              <dl className="flex flex-col gap-4">
                {example.rows.map((row) => (
                  <div
                    key={row.label}
                    className="rounded-[10px] border border-[#D8CEDD] bg-white p-4 flex flex-col sm:flex-row gap-1 sm:gap-5"
                  >
                    <dt className="sm:w-52 shrink-0 text-sm font-semibold leading-5 text-[#18141B]">{row.label}</dt>
                    <dd className="text-sm leading-5 text-[#665F69]">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex items-center gap-2.5">
                <Shield className="h-4 w-4 shrink-0 text-[#D65A2C]" aria-hidden="true" />
                <p className="text-xs leading-5 text-[#665F69]">{example.footnote}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p className="text-sm leading-5 text-[#665F69]">{INSTALL_DATA.footnote}</p>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

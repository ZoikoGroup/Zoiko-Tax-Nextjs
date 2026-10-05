"use client";

import React from "react";
import { ERRORS_DATA } from "./api-reference-data";
import { InfoNotice, Reveal, SectionContainer, SectionHeader, TextLink } from "./shared";

export default function ErrorsSection() {
  const { anatomy } = ERRORS_DATA;

  return (
    <SectionContainer className="bg-[#FAF5FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={ERRORS_DATA.eyebrow} title={ERRORS_DATA.title} description={ERRORS_DATA.description} />
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-8">
          <Reveal className="flex-1">
            <div className="flex flex-col gap-6">
              {ERRORS_DATA.items.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <h3 className="text-xl text-[#18141B]">{item.title}</h3>
                  <p className="text-base leading-6 text-[#665F69]">{item.description}</p>
                </div>
              ))}
              <TextLink href={ERRORS_DATA.link.href}>{ERRORS_DATA.link.label}</TextLink>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="w-full lg:w-[560px] shrink-0">
            <div className="rounded-3xl border border-[#D8CEDD] bg-[#F1E8F8] p-6 sm:p-7 flex flex-col gap-5">
              <span className="text-xs font-bold uppercase text-[#D65A2C]">{anatomy.eyebrow}</span>
              <h3 className="text-2xl text-[#301153]">{anatomy.title}</h3>
              <dl className="flex flex-col">
                {anatomy.rows.map((row) => (
                  <div key={row} className="py-3 border-b border-[#D8CEDD] flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                    <dt className="flex-1 text-sm font-semibold leading-5 text-[#301153]">{row}</dt>
                    <dd className="sm:w-44 text-xs leading-5 text-[#665F69]">{anatomy.status}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm leading-6 text-[#665F69]">{anatomy.note}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <InfoNotice title={ERRORS_DATA.notice.title} description={ERRORS_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}

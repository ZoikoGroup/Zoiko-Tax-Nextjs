"use client";

import React from "react";
import { History, Link2 } from "lucide-react";
import { LINEAGE_DATA } from "./data-enterprise-systems-data";
import { ArrowLink, FlowRow, Notice, Reveal, SectionContainer, SectionHeader } from "./shared";

export default function LineageSection() {
  const { card } = LINEAGE_DATA;

  return (
    <SectionContainer className="bg-[#FAF5FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={LINEAGE_DATA.eyebrow} title={LINEAGE_DATA.title} description={LINEAGE_DATA.description} />
        </Reveal>

        <Reveal delay={0.04}>
          <figure className="w-full rounded-3xl bg-[#160427] p-5 sm:p-7 flex flex-col gap-5">
            <span className="text-xs font-bold uppercase text-[#F4A261]">{LINEAGE_DATA.chainLabel}</span>
            <FlowRow steps={LINEAGE_DATA.chain} variant="dark" />
            <figcaption className="text-sm leading-5 text-[#D9D0DF]">{LINEAGE_DATA.chainNote}</figcaption>
          </figure>
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-10">
          <Reveal className="flex-1 min-w-0">
            <ul className="flex flex-col">
              {LINEAGE_DATA.links.map((l) => (
                <li key={l.title} className="py-4 border-b border-[#D8CEDD] flex items-start gap-4">
                  <Link2 className="h-5 w-5 shrink-0 mt-0.5 text-[#B4561E]" strokeWidth={1.7} aria-hidden="true" />
                  <div className="flex-1 flex flex-col gap-1.5">
                    <p className="text-lg font-semibold text-[#18141B]">{l.title}</p>
                    <p className="text-sm leading-5 text-[#665F69]">{l.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06} className="w-full lg:w-[340px] xl:w-[440px] shrink-0">
            <div className="rounded-3xl border border-[#D8CEDD] bg-white p-6 sm:p-8 flex flex-col gap-5">
              <History className="h-7 w-7 text-[#301153]" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="text-2xl sm:text-[28px] font-bold leading-tight text-[#18141B]">{card.title}</h3>
              {card.paragraphs.map((p) => (
                <p key={p} className="text-base leading-6 text-[#665F69]">
                  {p}
                </p>
              ))}
              <ArrowLink href={card.link.href}>{card.link.label}</ArrowLink>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <Notice title={LINEAGE_DATA.notice.title} description={LINEAGE_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}

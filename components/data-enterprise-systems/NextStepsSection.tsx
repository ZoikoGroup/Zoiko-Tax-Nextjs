"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NEXT_STEPS_DATA } from "./data-enterprise-systems-data";
import { ArrowLink, Reveal, SectionContainer, SectionHeader } from "./shared";

export default function NextStepsSection() {
  const { demo } = NEXT_STEPS_DATA;

  return (
    <SectionContainer className="bg-[#FAF5FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={NEXT_STEPS_DATA.eyebrow} title={NEXT_STEPS_DATA.title} description={NEXT_STEPS_DATA.description} />
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-stretch gap-6 lg:gap-8">
          <Reveal className="flex-1 min-w-0">
            <div className="h-full rounded-3xl border border-[#D8CEDD] bg-white p-6 sm:p-7 flex flex-col">
              <span className="text-xs font-bold uppercase text-[#B4561E]">{NEXT_STEPS_DATA.docsLabel}</span>
              <ul className="flex flex-col">
                {NEXT_STEPS_DATA.docs.map((d) => (
                  <li key={d.title} className="border-b border-[#D8CEDD]">
                    <Link href={d.href} className="group py-5 flex items-center gap-4">
                      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                        <span className="text-xl font-semibold text-[#18141B] group-hover:text-[#B4561E] transition-colors">
                          {d.title}
                        </span>
                        <span className="text-sm leading-5 text-[#665F69]">{d.description}</span>
                        <span className="text-xs text-[#665F69] break-words">{d.path}</span>
                      </div>
                      <span className="size-11 shrink-0 rounded-full bg-[#F1E8F8] inline-flex items-center justify-center transition-colors group-hover:bg-[#EADDF4]">
                        <ArrowUpRight className="h-4 w-4 text-[#B4561E]" aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="w-full lg:w-[360px] xl:w-[448px] shrink-0">
            <div className="h-full flex flex-col gap-6">
              <div className="rounded-3xl bg-[#F1E8F8] p-6 sm:p-7 flex flex-col gap-5">
                <span className="text-xs font-bold uppercase text-[#301153]">{NEXT_STEPS_DATA.assuranceLabel}</span>
                {NEXT_STEPS_DATA.assurance.map((a) => (
                  <div key={a.label} className="flex flex-col gap-2">
                    <ArrowLink href={a.href}>{a.label}</ArrowLink>
                    <p className="text-sm leading-5 text-[#665F69]">{a.description}</p>
                    <span className="text-xs text-[#665F69]">{a.path}</span>
                  </div>
                ))}
              </div>

              <div className="flex-1 rounded-3xl bg-[#FFF0E7] p-6 sm:p-7 flex flex-col gap-4">
                <span className="text-xs font-bold uppercase text-[#B4561E]">{demo.tag}</span>
                <h3 className="text-2xl font-semibold leading-tight text-[#18141B]">{demo.title}</h3>
                <p className="text-base leading-[26px] text-[#665F69]">{demo.description}</p>
                <ArrowLink href={demo.link.href}>{demo.link.label}</ArrowLink>
                <span className="text-xs text-[#665F69]">{demo.path}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}

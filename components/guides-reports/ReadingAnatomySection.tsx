"use client";

import React from "react";
import { ArrowRight, ArrowUpRight, BookOpen, Info } from "lucide-react";
import { READING_ANATOMY_DATA as R } from "./guides-reports-data";
import { SectionContainer, Reveal } from "./shared";

export default function ReadingAnatomySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-xs font-bold text-[#A64B22]">{R.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.12] text-[#18141B]">{R.title}</h2>
          <p className="text-base sm:text-lg leading-[1.5] text-[#665F69]">{R.description}</p>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row gap-10">
        <Reveal className="w-full lg:w-[256px] shrink-0">
          <div className="rounded-2xl bg-white p-6 flex flex-col gap-4">
            <span className="text-sm font-bold text-[#18141B]">{R.contents.label}</span>
            {R.contents.items.map((item, i) => (
              <div key={item} className="flex gap-2.5">
                <span className="text-xs font-semibold text-[#A64B22]">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 text-sm leading-[1.5] text-[#665F69]">{item}</span>
              </div>
            ))}
            <p className="text-sm leading-[1.65] text-[#665F69]">{R.contents.footnote}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04} className="flex-1 min-w-0 max-w-[832px]">
          <div className="flex flex-col gap-7">
            <div className="rounded-2xl bg-white p-6 flex flex-col gap-2">
              <span className="text-xs font-bold text-[#A64B22]">{R.metadataBand.label}</span>
              <div className="flex flex-col text-sm leading-[1.6] text-[#665F69]">
                {R.metadataBand.rows.map((row) => (
                  <span key={row}>{row}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#A64B22]">{R.articleHeading.label}</span>
              <h3 className="text-3xl sm:text-4xl font-bold leading-[1.16] text-[#18141B]">{R.articleHeading.title}</h3>
              <p className="text-base leading-[1.65] text-[#665F69]">{R.articleHeading.description}</p>
            </div>

            {R.sections.map((s) => (
              <div key={s.title} className="flex flex-col gap-3">
                <h4 className="text-xl sm:text-2xl text-[#18141B]">{s.title}</h4>
                <p className="text-base leading-[1.65] text-[#665F69]">{s.body}</p>
              </div>
            ))}

            <div className="rounded-2xl bg-white p-6 flex flex-col gap-3.5">
              <h4 className="text-xl sm:text-2xl text-[#18141B]">{R.keyTakeaways.title}</h4>
              {R.keyTakeaways.items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <ArrowRight className="h-[18px] w-[18px] shrink-0 mt-0.5 text-[#18141B]" aria-hidden="true" />
                  <p className="flex-1 text-base leading-[1.5] text-[#18141B]">{item}</p>
                </div>
              ))}
            </div>

            {R.moreSections.map((s) => (
              <div key={s.title} className="flex flex-col gap-3">
                <h4 className="text-xl sm:text-2xl text-[#18141B]">{s.title}</h4>
                <p className="text-base leading-[1.65] text-[#665F69]">{s.body}</p>
              </div>
            ))}

            <div className="flex flex-wrap gap-7">
              {R.nextRoutes.map((r) => (
                <span key={r} className="inline-flex items-center gap-1.5 text-base font-semibold text-[#A64B22]">
                  {r}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.08} className="w-full mt-10">
        <div className="rounded-[26px] bg-[#F4EDF8] p-7 sm:p-9 flex flex-col sm:flex-row gap-8 sm:gap-12">
          <div className="sm:w-[388px] shrink-0 flex flex-col gap-4">
            <BookOpen className="h-7 w-7 text-[#A64B22]" aria-hidden="true" />
            <h3 className="text-2xl sm:text-[28px] leading-[1.2] text-[#18141B]">{R.fileModule.title}</h3>
            <p className="text-base leading-[1.65] text-[#665F69]">{R.fileModule.description}</p>
            <p className="text-sm text-[#665F69]">{R.fileModule.status}</p>
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <span className="text-xs font-bold text-[#A64B22] mb-1">{R.fileModule.contractLabel}</span>
            {R.fileModule.rows.map((row) => (
              <div key={row.label} className="border-b border-[#D8CEDD] py-3.5 flex flex-col sm:flex-row gap-1 sm:gap-6">
                <span className="text-sm font-semibold text-[#18141B] sm:w-[172px] shrink-0">{row.label}</span>
                <span className="flex-1 text-sm leading-[1.55] text-[#665F69]">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="w-full mt-6">
        <div className="rounded-2xl bg-[#FAEEE6] p-6 flex items-start gap-4">
          <Info className="h-[22px] w-[22px] shrink-0 text-[#A64B22]" aria-hidden="true" />
          <div className="flex flex-col gap-2">
            <p className="text-base text-[#18141B]">{R.brokenDownloadNotice.title}</p>
            <p className="text-sm leading-[1.65] text-[#665F69]">{R.brokenDownloadNotice.description}</p>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

"use client";

import React from "react";
import { ArrowDown, CircleHelp } from "lucide-react";
import { READING_ANATOMY_DATA as R } from "./regulatory-change-data";
import { SectionContainer, Reveal } from "./shared";

export default function ReadingAnatomySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-xs font-bold text-[#B65326]">{R.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold leading-[1.15] text-[#18141B]">{R.title}</h2>
          <p className="text-base sm:text-lg leading-[1.5] text-[#665F69] max-w-[1040px]">{R.description}</p>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row gap-10">
        <Reveal className="w-full lg:w-[264px] shrink-0">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-bold text-[#B65326]">{R.contentsLabel}</span>
            {R.contents.map((item) => (
              <div key={item} className="flex items-center justify-between gap-2 border-b border-[#D8CEDD] pb-3">
                <span className="text-sm text-[#301153]">{item}</span>
                <ArrowDown className="h-3.5 w-3.5 shrink-0 text-[#301153]" aria-hidden="true" />
              </div>
            ))}
            <div className="rounded-2xl bg-white p-5 flex flex-col gap-2.5">
              <span className="text-xs font-bold text-[#B65326]">{R.readingBoundary.label}</span>
              <p className="text-sm leading-[1.6] text-[#665F69]">{R.readingBoundary.description}</p>
            </div>
            <p className="text-sm leading-[1.6] text-[#665F69]">{R.staticPatternNote}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04} className="flex-1 min-w-0">
          <div className="flex flex-col gap-6">
            <div className="rounded-[26px] bg-white p-7 sm:p-8 flex flex-col gap-5">
              <span className="inline-flex w-fit items-center rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#301153]">
                {R.detailHeader.badge}
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold leading-[1.15] text-[#18141B]">{R.detailHeader.title}</h3>
              <p className="text-base leading-[1.6] text-[#665F69]">{R.detailHeader.description}</p>
              <span className="inline-flex w-fit items-center rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#301153]">
                {R.detailHeader.statusBadge}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {R.detailHeader.dates.map((d) => (
                  <div key={d.label} className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-[#665F69]">{d.label}</span>
                    <span className="text-sm font-medium text-[#18141B]">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#D8CEDD] p-6 flex flex-col gap-3">
              <span className="text-xs font-bold text-[#B65326]">{R.whatChanged.label}</span>
              <h4 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{R.whatChanged.title}</h4>
              <p className="text-base leading-[1.6] text-[#665F69]">{R.whatChanged.description}</p>
            </div>

            <div className="rounded-2xl bg-[#301153] p-7 flex flex-col gap-[18px]">
              <span className="text-xs font-bold text-[#F4A261]">{R.primarySource.label}</span>
              <h4 className="text-2xl sm:text-[26px] font-bold text-white">{R.primarySource.title}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {R.primarySource.fields.map((f) => (
                  <div key={f.label} className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-[#D9D0DF]">{f.label}</span>
                    <span className="text-sm font-medium text-white">{f.value}</span>
                  </div>
                ))}
              </div>
              <span className="text-[15px] font-semibold text-white">{R.primarySource.linkLabel}</span>
              <p className="text-sm leading-[1.6] text-[#D9D0DF]">{R.primarySource.footnote}</p>
            </div>

            <div className="rounded-2xl border border-[#D8CEDD] p-7 flex flex-col gap-4">
              <span className="text-xs font-bold text-[#B65326]">{R.timeline.label}</span>
              <h4 className="text-2xl sm:text-[26px] font-bold text-[#18141B]">{R.timeline.title}</h4>
              {R.timeline.events.map((e, i) => (
                <div key={e.title} className="flex gap-4">
                  <span className="text-base font-bold text-[#B65326] w-6 shrink-0">{i + 1}.</span>
                  <div className="flex-1 flex flex-col gap-1">
                    <span className="text-[15px] font-semibold text-[#18141B]">{e.title}</span>
                    <span className="text-sm leading-[1.6] text-[#665F69]">{e.description}</span>
                  </div>
                </div>
              ))}
              <p className="text-sm leading-[1.6] text-[#665F69]">{R.timeline.footnote}</p>
            </div>

            <div className="rounded-2xl bg-white border border-[#D8CEDD] p-6 flex flex-col gap-3">
              <span className="text-xs font-bold text-[#B65326]">{R.affectedScope.label}</span>
              <h4 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{R.affectedScope.title}</h4>
              <p className="text-base leading-[1.6] text-[#665F69]">{R.affectedScope.description}</p>
            </div>

            <div className="rounded-2xl bg-white p-6 flex flex-col gap-3">
              <span className="text-xs font-bold text-[#B65326]">{R.editorialContext.label}</span>
              <h4 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{R.editorialContext.title}</h4>
              <p className="text-base leading-[1.6] text-[#665F69]">{R.editorialContext.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white border border-[#D8CEDD] p-6 flex flex-col gap-3">
                <span className="text-xs font-bold text-[#B65326]">{R.openQuestion.label}</span>
                <h4 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{R.openQuestion.title}</h4>
                <p className="text-base leading-[1.6] text-[#665F69]">{R.openQuestion.description}</p>
              </div>
              <div className="rounded-2xl bg-white p-6 flex flex-col gap-3">
                <span className="text-xs font-bold text-[#B65326]">{R.implication.label}</span>
                <h4 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{R.implication.title}</h4>
                <p className="text-base leading-[1.6] text-[#665F69]">{R.implication.description}</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#D8CEDD] p-7 flex flex-col gap-4">
              <span className="text-xs font-bold text-[#B65326]">{R.checklist.label}</span>
              {R.checklist.items.map((q) => (
                <div key={q} className="flex items-start gap-3">
                  <CircleHelp className="h-[18px] w-[18px] shrink-0 mt-0.5 text-[#18141B]" aria-hidden="true" />
                  <p className="flex-1 text-[15px] leading-[1.5] text-[#18141B]">{q}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-[#FFF0E7] p-6 flex flex-col gap-2.5">
              <span className="text-xs font-bold text-[#B65326]">{R.productRelevance.label}</span>
              <p className="text-base leading-[1.6] text-[#665F69]">{R.productRelevance.description}</p>
              <span className="text-sm font-semibold text-[#B65326]">{R.productRelevance.cta}</span>
              <p className="text-sm leading-[1.6] text-[#665F69]">{R.productRelevance.footnote}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#D8CEDD] pt-5">
              {R.reviewMetadata.map((m) => (
                <div key={m.label} className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-[#665F69]">{m.label}</span>
                  <span className="text-sm font-medium text-[#18141B]">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

"use client";

import React from "react";
import { SectionContainer, Reveal } from "./shared";
import { READING_ANATOMY_DATA as R } from "./telecom-tax-insights-data";

export default function ReadingAnatomySection() {
  return (
    <SectionContainer className="bg-white">
      <Reveal>
        <div className="flex flex-col gap-4 mb-11">
          <span className="text-xs font-bold uppercase text-[#D65A2C]">{R.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{R.title}</h2>
          <p className="text-base sm:text-lg leading-[1.5] text-[#665F69] max-w-[960px]">{R.description}</p>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row gap-16">
        <Reveal className="w-full lg:w-[248px] shrink-0">
          <div className="flex flex-col gap-0 pt-7">
            <span className="text-xs font-bold uppercase text-[#D65A2C] mb-6">{R.contentsLabel}</span>
            {R.contents.map((item, i) => (
              <div
                key={item}
                className={i === 0 ? "border-l-[3px] border-[#BF6735] py-2.5 pl-3.5" : "border-l border-[#D8CEDD] py-2.5 pl-3.5"}
              >
                <span className={i === 0 ? "text-sm text-[#BF6735]" : "text-sm text-[#665F69]"}>{item}</span>
              </div>
            ))}
            <div className="h-px bg-[#D8CEDD] my-6" />
            <p className="text-sm leading-[1.6] text-[#665F69] mb-6">{R.noJsNote}</p>
            <div className="flex flex-col gap-0.5">
              <span className="text-[15px] font-semibold text-[#BF6735]">{R.backRoute.label}</span>
              <span className="text-xs text-[#665F69]">{R.backRoute.path}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.04} className="flex-1 min-w-0">
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-8 sm:p-12 flex flex-col gap-8 shadow-[0px_8px_24px_0px_rgba(48,17,83,0.04)]">
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit rounded-full border border-[#D8CEDD] bg-[#F2EAF7] px-3 py-1.5 text-xs font-semibold text-[#301153]">
                {R.articleIntro.badge}
              </span>
              <p className="text-xs text-[#665F69]">{R.articleIntro.breadcrumb}</p>
              <p className="text-[13px] font-medium text-[#BF6735]">{R.articleIntro.contextFields}</p>
              <h3 className="text-3xl sm:text-4xl font-bold leading-[1.12] text-[#18141B]">{R.articleIntro.title}</h3>
              <p className="text-base sm:text-[17px] leading-[1.6] text-[#665F69]">{R.articleIntro.summary}</p>
            </div>

            <div className="rounded-[10px] bg-[#F8F5FA] p-5 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {R.dates.map((d) => (
                  <div key={d.label} className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-[#665F69]">{d.label}</span>
                    <span className="text-sm text-[#18141B]">{d.value}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {R.reviewFields.map((f) => (
                  <div key={f.label} className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-[#665F69]">{f.label}</span>
                    <span className="text-sm text-[#18141B]">{f.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xl sm:text-2xl text-[#18141B]">{R.executiveSummary.title}</h4>
              <p className="text-base sm:text-[17px] leading-[1.6] text-[#665F69]">{R.executiveSummary.description}</p>
            </div>

            <div className="rounded-2xl bg-[#F2EAF7] p-6 flex flex-col gap-3.5">
              <h4 className="text-xl sm:text-2xl text-[#18141B]">{R.keyTakeaways.title}</h4>
              {R.keyTakeaways.items.map((item) => (
                <p key={item} className="text-base leading-[1.55] text-[#18141B]">
                  •&nbsp;&nbsp;{item}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xl sm:text-2xl text-[#18141B]">{R.structuredAnalysis.title}</h4>
              <p className="text-base sm:text-[17px] leading-[1.6] text-[#665F69]">{R.structuredAnalysis.description}</p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xl sm:text-2xl text-[#18141B]">{R.currentness.title}</h4>
              <p className="text-base sm:text-[17px] leading-[1.6] text-[#665F69]">{R.currentness.description}</p>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xl sm:text-2xl text-[#18141B]">{R.operationalQuestions.title}</h4>
              <p className="text-base sm:text-[17px] leading-[1.6] text-[#665F69]">{R.operationalQuestions.description}</p>
              {R.operationalQuestions.items.map((q) => (
                <div key={q} className="border-b border-[#D8CEDD] py-3">
                  <p className="text-base leading-[1.5] text-[#18141B]">{q}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-[#301153] p-7 flex flex-col gap-5">
              <span className="text-xs font-bold uppercase text-[#F4A261]">{R.sourcesPanel.label}</span>
              <h4 className="text-xl sm:text-2xl leading-[1.25] text-white">{R.sourcesPanel.title}</h4>
              <p className="text-sm leading-[1.6] text-[#D9D0DF]">{R.sourcesPanel.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {R.sourcesPanel.fields.map((f) => (
                  <div key={f.label} className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-[#F4A261]">{f.label}</span>
                    <span className="text-sm text-white">{f.value}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-[#F4A261]">{R.sourcesPanel.scope.label}</span>
                <span className="text-sm text-white">{R.sourcesPanel.scope.value}</span>
              </div>
              <div className="h-px bg-white/15" />
              <p className="text-[13px] leading-[1.6] text-[#D9D0DF]">{R.sourcesPanel.footnote}</p>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-xl sm:text-2xl text-[#18141B]">{R.methodReview.title}</h4>
              <p className="text-base sm:text-[17px] leading-[1.6] text-[#665F69]">{R.methodReview.description}</p>
            </div>

            <div className="h-px bg-[#D8CEDD]" />

            <div className="flex flex-col gap-3.5">
              <h4 className="text-xl sm:text-2xl text-[#18141B]">{R.relatedResources.title}</h4>
              <p className="text-sm leading-[1.6] text-[#665F69]">{R.relatedResources.description}</p>
              <div className="flex flex-wrap gap-8">
                {R.relatedResources.routes.map((r) => (
                  <div key={r.label} className="flex flex-col gap-0.5">
                    <span className="text-[15px] font-semibold text-[#BF6735]">{r.label}</span>
                    <span className="text-xs text-[#665F69]">{r.path}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold text-[#BF6735]">{R.relatedResources.verifyRoute.label}</span>
                <span className="text-xs text-[#665F69]">{R.relatedResources.verifyRoute.path}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

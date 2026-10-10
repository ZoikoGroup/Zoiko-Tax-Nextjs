"use client";

import React from "react";
import { MATERIALS_REQUEST_DATA as M } from "./certifications-data";
import { SectionContainer, Reveal } from "./shared";

export default function MaterialsRequestSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold uppercase text-[#D65A2C]">{M.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.15] text-[#18141B]">{M.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{M.description}</p>
        </div>
      </Reveal>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-10">
        <Reveal className="w-full lg:w-[390px] shrink-0" delay={0.04}>
          <div className="flex flex-col gap-6">
            <h3 className="text-xl sm:text-2xl font-bold leading-[1.15] text-[#18141B]">{M.journeyTitle}</h3>
            {M.steps.map((step, i) => (
              <div key={step.title} className="flex gap-4">
                <span className="shrink-0 h-7 w-7 rounded-full bg-[#EEE5F4] flex items-center justify-center text-[13px] font-bold text-[#301153]">
                  {i + 1}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-base font-semibold text-[#18141B]">{step.title}</h4>
                  <p className="text-sm leading-[1.6] text-[#665F69]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="flex-1" delay={0.08}>
          <div className="h-full rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-6">
            <h3 className="text-xl sm:text-2xl font-bold leading-[1.15] text-[#18141B]">{M.form.title}</h3>

            <div className="rounded-lg bg-[#EEE5F4] p-5">
              <p className="text-sm leading-[1.6] text-[#665F69]">{M.form.note}</p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-[#18141B]">{M.form.categoryLabel}</span>
              <div className="flex flex-wrap gap-2">
                {M.form.categories.map((c) => (
                  <div key={c} className="flex items-center gap-2 rounded-lg border border-[#D8CEDD] bg-[#FFFAFA] px-3.5 py-3">
                    <span className="h-3.5 w-3.5 rounded-full border border-[#D8CEDD]" aria-hidden="true" />
                    <span className="text-sm text-[#18141B]">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#18141B]">{M.form.companyLabel}</span>
                <div className="h-[52px] rounded-lg border border-[#D8CEDD] bg-[#FFFAFA] px-4 flex items-center">
                  <span className="text-sm text-[#665F69]">{M.form.companyPlaceholder}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-[#18141B]">{M.form.emailLabel}</span>
                <div className="h-[52px] rounded-lg border border-[#D8CEDD] bg-[#FFFAFA] px-4 flex items-center">
                  <span className="text-sm text-[#665F69]">{M.form.emailPlaceholder}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#18141B]">{M.form.relationshipLabel}</span>
              <div className="h-[52px] rounded-lg border border-[#D8CEDD] bg-[#FFFAFA] px-4 flex items-center">
                <span className="text-sm text-[#665F69]">{M.form.relationshipPlaceholder}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[#18141B]">{M.form.purposeLabel}</span>
              <div className="min-h-[116px] rounded-lg border border-[#D8CEDD] bg-[#FFFAFA] px-4 py-4">
                <span className="text-sm text-[#665F69]">{M.form.purposePlaceholder}</span>
              </div>
            </div>

            <p className="text-sm leading-[1.6] text-[#665F69]">{M.form.disclaimer}</p>

            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center rounded-full border border-[#D8CEDD] bg-[#EEE5F4] px-6 h-12 text-sm font-semibold text-[#665F69]">
                {M.form.submitLabel}
              </span>
              <p className="text-sm leading-[1.6] text-[#665F69]">{M.form.submitNote}</p>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {M.accessStages.map((s) => (
            <div key={s.title} className="flex flex-col gap-2.5">
              <h3 className="text-xl font-bold leading-[1.15] text-[#18141B]">{s.title}</h3>
              <p className="text-sm leading-[1.6] text-[#665F69]">{s.description}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="rounded-lg bg-[#EEE5F4] p-5">
          <p className="text-sm leading-[1.6] text-[#665F69]">{M.scopeNote}</p>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

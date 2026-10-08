"use client";

import React from "react";
import { FileCheck2, ArrowUpRight, ChevronDown, Check } from "lucide-react";
import {
  AUTHORITY_NOTICE,
  BUYER_QUESTIONS,
  CATEGORY_CHIPS,
  FILTER_TOOLBAR,
  DISCOVERY_INTRO,
} from "./resources-faq-data";
import { SectionContainer, Reveal } from "./shared";

export default function AnswerDiscoverySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="rounded-lg bg-[#301153] px-5 py-5 sm:px-7 sm:py-6 flex items-start gap-4">
          <FileCheck2 className="h-5 w-5 shrink-0 text-white mt-0.5" aria-hidden="true" />
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold text-white">{AUTHORITY_NOTICE.title}</p>
            <p className="text-base leading-[1.6] text-white">{AUTHORITY_NOTICE.body}</p>
            <p className="text-sm leading-[1.6] text-[#D9D0DF]">{AUTHORITY_NOTICE.disclaimer}</p>
          </div>
        </div>
      </Reveal>

      <div className="mt-12 flex flex-wrap items-end justify-between gap-3">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#18141B]">Common buyer questions</h2>
        </Reveal>
        <span className="text-[13px] text-[#665F69]">Editorial selection · popularity data not supplied</span>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BUYER_QUESTIONS.map((q, i) => (
          <Reveal key={q.question} delay={0.03 * i}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-5 flex flex-col gap-3 hover:border-[#BF6735]/40 transition-colors">
              <span className="text-xs font-bold text-[#D65A2C]">{q.tag}</span>
              <div className="flex items-start justify-between gap-2">
                <p className="text-lg sm:text-[19px] font-semibold leading-[1.3] text-[#18141B]">{q.question}</p>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[#D65A2C]" aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <h2 className="mt-14 text-2xl sm:text-3xl md:text-[32px] font-bold text-[#18141B]">Find the answer you need.</h2>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          {CATEGORY_CHIPS.map((chip) => (
            <span
              key={chip.label}
              className={
                chip.active
                  ? "inline-flex items-center gap-1.5 rounded-full bg-[#301153] text-white px-4 py-2 text-sm font-semibold"
                  : "inline-flex items-center gap-1.5 rounded-full bg-white border border-[#D8CEDD] text-[#18141B] px-4 py-2 text-sm font-semibold"
              }
            >
              {chip.active && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
              {chip.label} · {chip.count}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-6 rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-6 flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="flex-[2] min-w-0 flex flex-col gap-1.5">
              <label className="text-xs text-[#665F69]">Keyword</label>
              <input
                type="text"
                readOnly
                placeholder={FILTER_TOOLBAR.keywordPlaceholder}
                className="w-full rounded-lg border border-[#D8CEDD] bg-[#FFFAFA] px-3.5 py-2.5 text-sm text-[#665F69] placeholder:text-[#665F69]"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-1.5">
              <label className="text-xs text-[#665F69]">Category</label>
              <div className="w-full rounded-lg border border-[#D8CEDD] bg-[#FFFAFA] px-3.5 py-2.5 text-sm text-[#665F69] flex items-center justify-between">
                {FILTER_TOOLBAR.categoryPlaceholder}
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-1.5">
              <label className="text-xs text-[#665F69]">Audience</label>
              <div className="w-full rounded-lg border border-[#D8CEDD] bg-[#FFFAFA] px-3.5 py-2.5 text-sm text-[#665F69] flex items-center justify-between">
                {FILTER_TOOLBAR.audiencePlaceholder}
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>
            <div className="flex-1 min-w-0 flex flex-col gap-1.5">
              <label className="text-xs text-[#665F69]">Sort</label>
              <div className="w-full rounded-lg border border-[#D8CEDD] bg-[#FFFAFA] px-3.5 py-2.5 text-sm text-[#665F69] flex items-center justify-between">
                {FILTER_TOOLBAR.sortPlaceholder}
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </div>
            </div>
          </div>

          <p className="text-xs text-[#665F69]">{FILTER_TOOLBAR.helperText}</p>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#D8CEDD] pt-4">
            <span className="text-sm font-medium text-[#301153]">{FILTER_TOOLBAR.statusText}</span>
            <span className="text-sm font-semibold text-[#BF6735] cursor-pointer">{FILTER_TOOLBAR.clearLabel}</span>
          </div>

          <p className="text-xs text-[#665F69]">{FILTER_TOOLBAR.footerNote}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-14">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#18141B]">{DISCOVERY_INTRO.title}</h2>
          <p className="text-base sm:text-[17px] leading-[1.6] text-[#665F69] max-w-[840px]">{DISCOVERY_INTRO.description}</p>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

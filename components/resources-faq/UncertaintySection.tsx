"use client";

import React from "react";
import { Search, FileWarning } from "lucide-react";
import { UNCERTAINTY_DATA } from "./resources-faq-data";
import { SectionContainer, SecondaryButton, Reveal } from "./shared";

export default function UncertaintySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-3.5 mb-8">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#D65A2C]">{UNCERTAINTY_DATA.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.12] text-[#18141B]">
            {UNCERTAINTY_DATA.title}
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Reveal>
          <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
            <span className="text-xs font-bold text-[#D65A2C]">{UNCERTAINTY_DATA.panels[0].label}</span>
            <Search className="h-7 w-7 text-[#665F69]" aria-hidden="true" />
            <h3 className="text-xl sm:text-2xl font-semibold text-[#18141B]">{UNCERTAINTY_DATA.panels[0].heading}</h3>
            <p className="text-base leading-[1.6] text-[#665F69]">{UNCERTAINTY_DATA.panels[0].body}</p>
            <div>
              <SecondaryButton>{UNCERTAINTY_DATA.panels[0].cta} ↗</SecondaryButton>
            </div>
            <div className="flex flex-col gap-2 pt-2 border-t border-[#EFE7F3]">
              {UNCERTAINTY_DATA.panels[0].routes?.map((r) => (
                <div key={r.label} className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#BF6735]">{r.label}</span>
                  <span className="text-xs text-[#665F69]">{r.path}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-4">
            <span className="text-xs font-bold text-[#D65A2C]">{UNCERTAINTY_DATA.panels[1].label}</span>
            <FileWarning className="h-7 w-7 text-[#665F69]" aria-hidden="true" />
            <h3 className="text-xl sm:text-2xl font-semibold text-[#18141B]">{UNCERTAINTY_DATA.panels[1].heading}</h3>
            <p className="text-base leading-[1.6] text-[#665F69]">{UNCERTAINTY_DATA.panels[1].body}</p>
            <p className="text-sm leading-[1.6] text-[#665F69]">{UNCERTAINTY_DATA.panels[1].note}</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.08}>
        <div className="mt-10 flex flex-col gap-2">
          <h3 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{UNCERTAINTY_DATA.crossDomain.title}</h3>
          <p className="text-base leading-[1.6] text-[#665F69] max-w-[840px]">{UNCERTAINTY_DATA.crossDomain.body}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 pt-8 border-t border-[#D8CEDD] flex flex-col gap-2">
          <h3 className="text-2xl sm:text-[28px] font-bold text-[#18141B]">{UNCERTAINTY_DATA.readingTools.title}</h3>
          <p className="text-base leading-[1.6] text-[#665F69] max-w-[840px]">{UNCERTAINTY_DATA.readingTools.body}</p>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <span className="mt-10 block text-xs font-bold text-[#D65A2C]">{UNCERTAINTY_DATA.patternsLabel}</span>
      </Reveal>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {UNCERTAINTY_DATA.interactionPatterns.map((p, i) => (
          <Reveal key={p.title} delay={0.03 * i}>
            <div
              className={
                p.highlighted
                  ? "h-full rounded-2xl border-2 border-[#BF6735] bg-[#F4EBF9] p-5 flex flex-col gap-3"
                  : "h-full rounded-2xl border border-[#D8CEDD] bg-white p-5 flex flex-col gap-3"
              }
            >
              <h4 className="text-base font-semibold text-[#18141B]">{p.title}</h4>
              {p.title === "Keyboard focus" ? (
                <span className="inline-flex w-fit items-center rounded-full border-[3px] border-[#301153] px-4 py-1.5 text-sm text-[#18141B]">
                  Focus example
                </span>
              ) : (
                <p className="text-sm leading-[1.55] text-[#665F69]">{p.description}</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {UNCERTAINTY_DATA.readingPatterns.map((p, i) => (
          <Reveal key={p.title} delay={0.03 * i}>
            <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-5 flex flex-col gap-3">
              <h4 className="text-base font-semibold text-[#18141B]">{p.title}</h4>
              <p className="text-sm leading-[1.55] text-[#665F69]">{p.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="w-full mt-8">
        <p className="text-[13px] leading-[1.6] text-[#665F69] max-w-[900px]">{UNCERTAINTY_DATA.footnote}</p>
      </Reveal>
    </SectionContainer>
  );
}

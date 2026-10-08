"use client";

import React from "react";
import { BookOpen, NotebookTabs, History, ArrowUpRight, ArrowRight } from "lucide-react";
import { PUBLICATION_STANDARD_DATA as P } from "./guides-reports-data";
import { SectionContainer, PrimaryButton, SecondaryButton, Reveal } from "./shared";

const ICONS = [BookOpen, NotebookTabs, History];

export default function PublicationStandardSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/guides-reports/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-[#A64B22]">{P.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.12] text-[#18141B]">{P.title}</h2>
            <p className="text-base sm:text-lg leading-[1.5] text-[#665F69]">{P.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {P.principles.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.title} delay={0.04 * i}>
                <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4 shadow-[0px_6px_20px_0px_rgba(48,17,83,0.04)]">
                  <Icon className="h-6 w-6 text-[#A64B22]" aria-hidden="true" />
                  <h3 className="text-xl sm:text-[22px] leading-[1.3] text-[#18141B]">{p.title}</h3>
                  <p className="text-base leading-[1.65] text-[#665F69]">{p.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-[26px] bg-[#F4EDF8] p-7 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div className="sm:w-[320px] shrink-0 flex flex-col gap-3">
              <span className="text-xs font-bold text-[#A64B22]">{P.featured.eyebrow}</span>
              <h3 className="text-2xl sm:text-[28px] font-medium leading-[1.15] text-[#18141B]">{P.featured.title}</h3>
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <p className="text-lg font-semibold text-[#18141B]">{P.featured.heading}</p>
              <p className="text-base leading-[1.65] text-[#665F69]">{P.featured.description}</p>
              <div className="flex flex-wrap gap-6 pt-1">
                {P.featured.routes.map((r) => (
                  <span key={r} className="inline-flex items-center gap-1.5 text-base font-semibold text-[#A64B22]">
                    {r}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-5">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#18141B]">{P.library.title}</h3>
              <span className="text-sm text-[#665F69]">{P.library.subtitle}</span>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-10 flex flex-col sm:flex-row gap-7 sm:gap-8">
              <div className="h-20 w-20 shrink-0 rounded-2xl bg-[#F4EDF8] flex items-center justify-center">
                <BookOpen className="h-9 w-9 text-[#301153]" aria-hidden="true" />
              </div>
              <div className="flex-1 flex flex-col gap-5">
                <h4 className="text-2xl sm:text-[28px] leading-[1.25] text-[#18141B]">{P.library.heading}</h4>
                <p className="text-base leading-[1.65] text-[#665F69]">{P.library.description}</p>
                <div className="flex flex-wrap gap-3">
                  <PrimaryButton>
                    <span className="inline-flex items-center gap-2">
                      {P.library.actions[0].label}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </PrimaryButton>
                  <SecondaryButton>
                    <span className="inline-flex items-center gap-2">
                      {P.library.actions[1].label}
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </SecondaryButton>
                </div>
                <p className="text-sm leading-[1.5] text-[#665F69]">{P.library.footnote}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}

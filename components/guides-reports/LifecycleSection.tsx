"use client";

import React from "react";
import {
  Pencil,
  SearchCheck,
  BookOpen,
  RefreshCw,
  Replace,
  Archive,
  FileX,
  CircleAlert,
  Info,
  Type,
  Keyboard,
  Printer,
  ClipboardList,
} from "lucide-react";
import { LIFECYCLE_DATA as L } from "./guides-reports-data";
import { SectionContainer, Reveal } from "./shared";

const STATE_ICONS = [Pencil, SearchCheck, BookOpen, RefreshCw, Replace, Archive, FileX, CircleAlert];
const READING_ICONS = [Type, Keyboard, Printer];

export default function LifecycleSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-xs font-bold text-[#A64B22]">{L.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.12] text-[#18141B]">{L.title}</h2>
          <p className="text-base sm:text-lg leading-[1.5] text-[#665F69]">{L.description}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {L.states.map((state, i) => {
          const Icon = STATE_ICONS[i];
          return (
            <Reveal key={state.title} delay={0.02 * i}>
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3.5">
                <div className="flex items-center gap-2.5">
                  <Icon className="h-5 w-5 text-[#A64B22]" aria-hidden="true" />
                  <span className="text-lg text-[#18141B]">{state.title}</span>
                </div>
                <p className="text-sm leading-[1.65] text-[#665F69]">{state.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.06}>
        <div className="rounded-2xl bg-[#FAEEE6] p-6 flex items-start gap-4 mb-10">
          <Info className="h-[22px] w-[22px] shrink-0 text-[#A64B22]" aria-hidden="true" />
          <div className="flex flex-col gap-2">
            <p className="text-base text-[#18141B]">{L.ownedReviewNotice.title}</p>
            <p className="text-sm leading-[1.65] text-[#665F69]">{L.ownedReviewNotice.description}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="flex flex-col gap-3 mb-6">
          <span className="text-xs font-bold text-[#A64B22]">{L.readingStandards.eyebrow}</span>
          <h3 className="text-2xl sm:text-[32px] text-[#18141B]">{L.readingStandards.title}</h3>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {L.readingStandards.cards.map((card, i) => {
          const Icon = READING_ICONS[i];
          return (
            <Reveal key={card.title} delay={0.04 * i}>
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-4 shadow-[0px_6px_20px_0px_rgba(48,17,83,0.04)]">
                <Icon className="h-6 w-6 text-[#A64B22]" aria-hidden="true" />
                <h4 className="text-xl sm:text-[22px] leading-[1.3] text-[#18141B]">{card.title}</h4>
                <p className="text-base leading-[1.65] text-[#665F69]">{card.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="rounded-2xl bg-[#F4EDF8] p-6 flex items-start gap-4">
          <ClipboardList className="h-6 w-6 shrink-0 text-[#A64B22]" aria-hidden="true" />
          <div className="flex flex-col gap-2">
            <p className="text-base text-[#18141B]">{L.releaseNotice.title}</p>
            <p className="text-sm leading-[1.65] text-[#665F69]">{L.releaseNotice.description}</p>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

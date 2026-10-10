"use client";

import React from "react";
import { Search, MessageSquare, Newspaper, Users } from "lucide-react";
import { CHANNEL_PURPOSE_DATA as C } from "./social-media-data";
import { SectionContainer, Reveal } from "./shared";

const ICONS = [Search, MessageSquare, Newspaper, Users];

export default function ChannelPurposeSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/social-media/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{C.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{C.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{C.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-2xl bg-[#FAF3FF] p-7 flex flex-col gap-4">
            <span className="text-xs font-bold text-[#D65A2C]">{C.taxonomy.label}</span>
            <div className="flex flex-wrap gap-3">
              {C.taxonomy.topics.map((t) => (
                <span key={t} className="rounded-full border border-[#D8CEDD] bg-white px-[18px] py-3 text-[15px] text-[#18141B]">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-[13px] leading-[1.6] text-[#665F69]">{C.taxonomy.footnote}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {C.audiences.map((a, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={a.title} delay={0.03 * i}>
                <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3.5">
                  <Icon className="h-6 w-6 text-[#D65A2C]" aria-hidden="true" />
                  <h3 className="text-2xl font-bold leading-[1.2] text-[#18141B]">{a.title}</h3>
                  <p className="text-base leading-[1.6] text-[#665F69]">{a.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}

"use client";

import React from "react";
import { ArrowRight, CircleMinus } from "lucide-react";
import { PACK_CONTEXT_DATA as P } from "./united-states-data";
import { SectionContainer, Reveal } from "./shared";

export default function PackContextSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/united-states/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-8">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-sm font-bold text-[#D65A2C]">{P.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{P.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.55] text-[#665F69]">{P.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-6">
            <div className="rounded-[26px] bg-[#301153] p-8 flex flex-col gap-5">
              <h3 className="text-2xl font-bold leading-[1.25] text-white">{P.panel.title}</h3>
              {P.panel.paragraphs.map((para, i) => (
                <p key={i} className={i === 0 ? "text-base leading-[1.55] text-[#D9D0DF]" : "text-sm leading-[1.55] text-[#D9D0DF]"}>
                  {para}
                </p>
              ))}
              <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#F4A261]">
                {P.panel.link}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>

            <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-8 flex flex-col gap-5">
              {P.fields.map((f) => (
                <div key={f.label} className="border-b border-[#D8CEDD] pb-5 flex items-center justify-between gap-4 flex-wrap">
                  <span className="text-[15px] font-semibold text-[#18141B]">{f.label}</span>
                  <span className="inline-flex items-center gap-2 rounded-lg border border-[#D8CEDD] bg-[#F5F1F6] px-3 py-2.5">
                    <CircleMinus className="h-4 w-4 text-[#665F69]" aria-hidden="true" />
                    <span className="text-sm font-semibold text-[#18141B]">{f.value}</span>
                  </span>
                </div>
              ))}
              <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#D65A2C]">
                {P.link}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

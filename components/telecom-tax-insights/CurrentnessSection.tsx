"use client";

import React from "react";
import { Info } from "lucide-react";
import { CURRENTNESS_DATA as C } from "./telecom-tax-insights-data";
import { SectionContainer, Reveal } from "./shared";

export default function CurrentnessSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/telecom-tax-insights/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase text-[#D65A2C]">{C.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.1] text-[#18141B]">{C.title}</h2>
            <p className="text-base sm:text-lg leading-[1.5] text-[#665F69] max-w-[960px]">{C.description}</p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <span className="text-xs font-bold uppercase text-[#D65A2C]">{C.lifecycleLabel}</span>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {C.states.map((s, i) => (
            <Reveal key={s.badge} delay={0.02 * i}>
              <div className={`h-full rounded-2xl border border-[#D8CEDD] p-7 flex flex-col gap-[18px] ${s.tone === "lavender" ? "bg-[#F2EAF7]" : "bg-white"}`}>
                <span className="inline-flex w-fit rounded-full border border-[#D8CEDD] bg-[#F2EAF7] px-3 py-1.5 text-xs font-semibold text-[#301153]">
                  {s.badge}
                </span>
                <p className="text-sm leading-[1.6] text-[#665F69]">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="rounded-2xl bg-[#F2EAF7] p-6 flex items-start gap-4">
            <Info className="h-6 w-6 shrink-0 text-[#301153]" aria-hidden="true" />
            <p className="flex-1 text-base leading-[1.6] text-[#301153]">{C.failSafeNote}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full rounded-[26px] border border-[#D8CEDD] bg-white p-7 sm:p-8 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase text-[#D65A2C]">{C.editorialBoundary.eyebrow}</span>
              <h3 className="text-xl sm:text-[22px] leading-[1.25] text-[#18141B]">{C.editorialBoundary.title}</h3>
              {C.editorialBoundary.paragraphs.map((p) => (
                <p key={p} className="text-base sm:text-[17px] leading-[1.6] text-[#665F69]">
                  {p}
                </p>
              ))}
              <p className="text-sm leading-[1.6] text-[#665F69]">{C.editorialBoundary.footnote}</p>
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold text-[#BF6735]">{C.editorialBoundary.route.label}</span>
                <span className="text-xs text-[#665F69]">{C.editorialBoundary.route.path}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="h-full rounded-[26px] bg-[#301153] p-7 sm:p-8 flex flex-col gap-4">
              <span className="text-xs font-bold uppercase text-[#F4A261]">{C.readerFirst.eyebrow}</span>
              <h3 className="text-xl sm:text-[22px] leading-[1.25] text-white">{C.readerFirst.title}</h3>
              {C.readerFirst.paragraphs.map((p) => (
                <p key={p} className="text-base sm:text-[17px] leading-[1.6] text-[#D9D0DF]">
                  {p}
                </p>
              ))}
              <p className="text-sm leading-[1.6] text-[#D9D0DF]">{C.readerFirst.footnote}</p>
              <div className="flex flex-col gap-0.5">
                <span className="text-[15px] font-semibold text-[#F4A261]">{C.readerFirst.route.label}</span>
                <span className="text-xs text-[#D9D0DF]">{C.readerFirst.route.path}</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-5">
          <Reveal>
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <h3 className="text-2xl sm:text-[28px] text-[#18141B]">{C.edgeStates.title}</h3>
              <span className="rounded-full border border-[#D8CEDD] bg-[#F2EAF7] px-3 py-1.5 text-xs font-semibold text-[#301153]">
                {C.edgeStates.badge}
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {C.edgeStates.items.map((item, i) => (
              <Reveal key={item.title} delay={0.02 * i}>
                <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-5 flex flex-col gap-3">
                  <h4 className="text-[17px] leading-[1.3] text-[#18141B]">{item.title}</h4>
                  <p className="text-sm leading-[1.6] text-[#665F69] flex-1">{item.description}</p>
                  <span className="text-xs text-[#301153]">{item.tag}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="text-sm leading-[1.6] text-[#665F69]">{C.edgeStates.footnote}</p>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}

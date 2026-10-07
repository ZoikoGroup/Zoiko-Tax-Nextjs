"use client";

import React from "react";
import { CURRENTNESS_DATA as C } from "./regulatory-change-data";
import { SectionContainer, Reveal } from "./shared";

export default function CurrentnessSection() {
  return (
    <SectionContainer className="bg-white relative">
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url(/regulatory-change/pattern-bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-[#B65326]">{C.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold leading-[1.15] text-[#18141B]">{C.title}</h2>
            <p className="text-base sm:text-lg leading-[1.5] text-[#665F69] max-w-[1040px]">{C.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {C.stateSpecimens.map((s, i) => (
            <Reveal key={s.title} delay={0.04 * i}>
              <div className={`h-full rounded-2xl border border-[#D8CEDD] p-7 flex flex-col gap-4 ${s.tone === "orange" ? "bg-[#FFF0E7]" : "bg-[#F3EBF8]"}`}>
                <span className="inline-flex w-fit items-center rounded-full border border-[#D8CEDD] bg-[#F3EBF8] px-3 py-1.5 text-xs font-semibold text-[#301153]">
                  {s.badge}
                </span>
                <h3 className="text-2xl sm:text-[26px] font-bold leading-[1.15] text-[#18141B]">{s.title}</h3>
                <p className="text-base leading-[1.6] text-[#665F69]">{s.description}</p>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-[#665F69]">{s.fieldLabel}</span>
                  <span className="text-sm font-medium text-[#18141B]">{s.fieldValue}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {C.disciplines.map((d, i) => (
            <Reveal key={d.label} delay={0.04 * i}>
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-7 flex flex-col gap-3.5">
                <span className="text-xs font-bold text-[#B65326]">{d.label}</span>
                <h3 className="text-2xl sm:text-[26px] font-bold leading-[1.15] text-[#18141B]">{d.title}</h3>
                <p className="text-base leading-[1.6] text-[#665F69]">{d.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold text-[#B65326]">{C.accountability.label}</span>
              <h3 className="text-2xl sm:text-[26px] font-bold leading-[1.15] text-[#18141B]">{C.accountability.title}</h3>
              <p className="text-base leading-[1.6] text-[#665F69]">{C.accountability.description}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {C.accountability.roles.map((role) => (
                <div key={role.title} className="rounded-2xl border border-[#D8CEDD] bg-[#FAF3FF] p-5 flex flex-col gap-2.5">
                  <span className="text-base font-semibold text-[#301153]">{role.title}</span>
                  <span className="text-sm leading-[1.6] text-[#665F69]">{role.description}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="rounded-[26px] bg-[#301153] p-7 flex flex-col gap-3">
            <span className="text-xs font-bold text-[#F4A261]">{C.gate.label}</span>
            <p className="text-base leading-[1.6] text-[#D9D0DF]">{C.gate.description}</p>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

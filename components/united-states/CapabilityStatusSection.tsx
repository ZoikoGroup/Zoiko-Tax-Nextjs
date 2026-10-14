"use client";

import React from "react";
import { Calculator, CircleMinus, ClipboardList, FileCheck2, Files, Landmark, UsersRound } from "lucide-react";
import { CAPABILITY_STATUS_DATA as C } from "./united-states-data";
import { SectionContainer, Reveal } from "./shared";

const ICONS: Record<string, typeof Calculator> = {
  calculator: Calculator,
  "clipboard-list": ClipboardList,
  files: Files,
  landmark: Landmark,
  "file-check-2": FileCheck2,
  "users-round": UsersRound,
};

export default function CapabilityStatusSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-sm font-bold text-[#D65A2C]">{C.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{C.title}</h2>
          <p className="text-lg sm:text-[20px] leading-[1.55] text-[#665F69]">{C.description}</p>
        </div>
      </Reveal>

      <Reveal delay={0.04}>
        <div className="rounded-[26px] border border-[#D8CEDD] bg-white overflow-hidden mb-8">
          <div className="hidden lg:flex bg-[#301153] gap-6 px-7 py-5">
            {C.tableColumns.map((col, i) => (
              <p key={col} className={i === 0 ? "w-[300px] shrink-0 text-[13px] font-bold text-white" : i === 1 ? "w-[180px] shrink-0 text-[13px] font-bold text-white" : i === 2 ? "w-[210px] shrink-0 text-[13px] font-bold text-white" : "flex-1 text-[13px] font-bold text-white"}>
                {col}
              </p>
            ))}
          </div>

          {C.capabilities.map((cap) => {
            const Icon = ICONS[cap.icon];
            return (
              <div key={cap.name} className="border-t border-[#D8CEDD] flex flex-col lg:flex-row gap-6 p-7">
                <div className="w-full lg:w-[300px] shrink-0 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Icon className="h-[22px] w-[22px] text-[#D65A2C]" aria-hidden="true" />
                    <h3 className="text-xl font-bold text-[#18141B]">{cap.name}</h3>
                  </div>
                  <p className="text-sm leading-[1.55] text-[#665F69]">{cap.boundary}</p>
                </div>

                <div className="w-full lg:w-[180px] shrink-0 flex flex-col gap-3">
                  <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#D8CEDD] bg-[#F5F1F6] px-3 py-2.5">
                    <CircleMinus className="h-4 w-4 text-[#665F69]" aria-hidden="true" />
                    <span className="text-sm font-semibold text-[#18141B]">Status unavailable</span>
                  </span>
                  <p className="text-[13px] leading-[1.5] text-[#665F69]">No current authoritative record supplied.</p>
                </div>

                <div className="w-full lg:w-[210px] shrink-0 flex flex-col gap-2">
                  <span className="text-[15px] font-semibold text-[#18141B]">{C.scopeNotEstablished}</span>
                  <p className="text-[13px] leading-[1.5] text-[#665F69]">{C.scopeFootnote}</p>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <span className="text-sm font-semibold text-[#18141B]">{C.currentnessLabel}</span>
                  <p className="text-[13px] leading-[1.5] text-[#665F69]">{C.currentnessFootnote}</p>
                </div>
              </div>
            );
          })}

          <div className="bg-[#F5F1F6] px-7 py-5">
            <p className="text-sm leading-[1.55] text-[#665F69]">{C.matrixLimitation}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="flex flex-col lg:flex-row gap-8 mb-7">
          <h3 className="w-full lg:w-[360px] shrink-0 text-2xl sm:text-[32px] font-bold text-[#18141B]">{C.legend.title}</h3>
          <div className="flex-1 flex flex-col gap-2">
            <span className="text-[13px] font-bold text-[#D65A2C]">{C.legend.badge}</span>
            <p className="text-base leading-[1.55] text-[#665F69]">{C.legend.description}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="rounded-2xl border border-[#D8CEDD] bg-white overflow-hidden">
          {C.legend.states.map((s) => (
            <div key={s.label} className="border-b border-[#D8CEDD] last:border-b-0 flex flex-col sm:flex-row gap-3 sm:gap-8 px-7 py-[18px]">
              <span className="w-full sm:w-[195px] shrink-0 font-mono text-sm font-semibold text-[#301153]">{s.label}</span>
              <span className="flex-1 text-[15px] leading-[1.5] text-[#665F69]">{s.description}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionContainer>
  );
}

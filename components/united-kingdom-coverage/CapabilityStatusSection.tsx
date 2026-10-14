"use client";

import React from "react";
import clsx from "clsx";
import { CAPABILITY_STATUS_DATA } from "./united-kingdom-data";
import {
  SectionContainer,
  SectionHeading,
  StatusUnavailableBadge,
  IconInfoMatrix,
  Reveal,
} from "./shared";

export default function CapabilityStatusSection() {
  return (
    <SectionContainer id="capability-matrix" className="bg-[#FAF3FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow={CAPABILITY_STATUS_DATA.eyebrow}
            title={CAPABILITY_STATUS_DATA.title}
            description={CAPABILITY_STATUS_DATA.description}
          />
        </Reveal>

        {/* Capability Table */}
        <Reveal delay={0.06}>
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white overflow-hidden shadow-xs">
            {/* Table caption */}
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D8CEDD]/60">
              <h3 className="text-lg font-bold text-[#18141B]">
                {CAPABILITY_STATUS_DATA.tableCaption}
              </h3>
              <span className="text-[13px] font-normal text-[#665F69]">
                {CAPABILITY_STATUS_DATA.tableSourceNote}
              </span>
            </div>

            {/* Column Headings (Desktop) */}
            <div className="hidden lg:flex bg-[#301153] px-6 py-[18px] gap-6 items-center">
              <span className="w-[314px] shrink-0 text-xs font-bold uppercase text-white">
                {CAPABILITY_STATUS_DATA.columns[0]}
              </span>
              <span className="w-[250px] shrink-0 text-xs font-bold uppercase text-white">
                {CAPABILITY_STATUS_DATA.columns[1]}
              </span>
              <span className="w-[280px] shrink-0 text-xs font-bold uppercase text-white">
                {CAPABILITY_STATUS_DATA.columns[2]}
              </span>
              <span className="flex-1 text-xs font-bold uppercase text-white">
                {CAPABILITY_STATUS_DATA.columns[3]}
              </span>
            </div>

            {/* Capability Rows */}
            <div className="divide-y divide-[#D8CEDD]">
              {CAPABILITY_STATUS_DATA.capabilities.map((cap) => (
                <div
                  key={cap.name}
                  className="p-6 flex flex-col lg:flex-row gap-6 lg:items-start hover:bg-[#FAF8FC]/50 transition-colors"
                >
                  {/* Col 1: Capability & Boundary */}
                  <div className="w-full lg:w-[314px] shrink-0 flex flex-col gap-3">
                    <span className="text-xs font-bold uppercase text-[#665F69] lg:hidden">
                      {CAPABILITY_STATUS_DATA.columns[0]}
                    </span>
                    <h4 className="text-[20px] font-bold leading-[1.3em] text-[#18141B]">
                      {cap.name}
                    </h4>
                    <p className="text-sm font-normal leading-[1.6em] text-[#665F69]">
                      {cap.boundary}
                    </p>
                  </div>

                  {/* Col 2: State / Source / Currentness */}
                  <div className="w-full lg:w-[250px] shrink-0 flex flex-col gap-3">
                    <span className="text-xs font-bold uppercase text-[#665F69] lg:hidden">
                      {CAPABILITY_STATUS_DATA.columns[1]}
                    </span>
                    <StatusUnavailableBadge className="self-start" />
                    <span className="text-[13px] font-normal leading-[1.5em] text-[#665F69]">
                      {cap.source}
                    </span>
                    <span className="text-[13px] font-normal leading-[1.5em] text-[#665F69]">
                      {cap.currentness}
                    </span>
                  </div>

                  {/* Col 3: Exact Public Scope */}
                  <div className="w-full lg:w-[280px] shrink-0 flex flex-col gap-3">
                    <span className="text-xs font-bold uppercase text-[#665F69] lg:hidden">
                      {CAPABILITY_STATUS_DATA.columns[2]}
                    </span>
                    <span className="text-[15px] font-medium leading-[1.5em] text-[#18141B]">
                      {cap.scopeTitle}
                    </span>
                    <span className="text-[13px] font-normal leading-[1.5em] text-[#665F69]">
                      {cap.scopeDetail}
                    </span>
                  </div>

                  {/* Col 4: Pack / Release */}
                  <div className="flex-1 flex flex-col gap-2.5">
                    <span className="text-xs font-bold uppercase text-[#665F69] lg:hidden">
                      {CAPABILITY_STATUS_DATA.columns[3]}
                    </span>
                    <span className="text-sm font-normal leading-[1.5em] text-[#665F69]">
                      {cap.pack}
                    </span>
                    <span className="text-sm font-normal leading-[1.5em] text-[#665F69]">
                      {cap.release}
                    </span>
                    <span className="text-xs font-normal leading-[1.5em] text-[#665F69]">
                      {cap.destination}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Matrix Reading Note */}
            <div className="p-6 bg-[#FBF8FD] border-t border-[#D8CEDD] flex items-start gap-3">
              <IconInfoMatrix className="w-[18px] h-[18px] shrink-0 mt-0.5" />
              <p className="text-sm font-normal leading-[1.6em] text-[#665F69]">
                {CAPABILITY_STATUS_DATA.matrixReadingNote}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Readiness Legend */}
        <Reveal delay={0.1}>
          <div className="pt-4 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl sm:text-[28px] font-bold text-[#18141B]">
                {CAPABILITY_STATUS_DATA.legend.title}
              </h3>
              <p className="text-base font-normal leading-[1.5em] text-[#665F69]">
                {CAPABILITY_STATUS_DATA.legend.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {CAPABILITY_STATUS_DATA.legend.states.map((state) => (
                <div
                  key={state.label}
                  className={clsx(
                    "p-[22px] gap-5 rounded-2xl border border-[#D8CEDD] flex flex-col sm:flex-row sm:items-center",
                    state.isHighlighted ? "bg-[#F1E9F7]" : "bg-white"
                  )}
                >
                  <span
                    className={clsx(
                      "w-full sm:w-[160px] shrink-0 text-[13px] leading-[1.5em] text-[#301153]",
                      state.isMono ? "font-mono font-semibold" : "font-semibold font-sans"
                    )}
                  >
                    {state.label}
                  </span>
                  <span className="flex-1 text-[15px] font-normal leading-[1.55em] text-[#665F69]">
                    {state.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

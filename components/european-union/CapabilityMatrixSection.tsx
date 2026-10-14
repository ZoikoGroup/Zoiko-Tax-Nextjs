"use client";

import React from "react";
import { CAPABILITY_MATRIX_DATA } from "./european-union-data";
import {
  SectionContainer,
  SectionHeading,
  StatusUnavailableBadge,
  Reveal,
} from "./shared";

export default function CapabilityMatrixSection() {
  const d = CAPABILITY_MATRIX_DATA;

  return (
    <SectionContainer id="capability-matrix" className="bg-[#FAF3FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow={d.eyebrow}
            title={d.title}
            description={d.description}
          />
        </Reveal>

        {/* Capability Readiness Table */}
        <Reveal delay={0.06}>
          <div className="rounded-[26px] border border-[#D8CEDD] bg-white overflow-hidden shadow-xs">
            {/* Table caption */}
            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#D8CEDD]/60">
              <h3 className="text-2xl font-bold text-[#301153]">
                {d.tableCaption}
              </h3>
              <span className="text-sm font-normal text-[#665F69]">
                {d.tableSourceNote}
              </span>
            </div>

            {/* Column Headings */}
            <div className="hidden lg:grid grid-cols-12 bg-[#301153] px-6 py-4 gap-6 items-center">
              <span className="col-span-3 text-[13px] font-semibold text-white">
                {d.columns[0]}
              </span>
              <span className="col-span-3 text-[13px] font-semibold text-white">
                {d.columns[1]}
              </span>
              <span className="col-span-3 text-[13px] font-semibold text-white">
                {d.columns[2]}
              </span>
              <span className="col-span-3 text-[13px] font-semibold text-white">
                {d.columns[3]}
              </span>
            </div>

            {/* Capability Rows */}
            <div className="divide-y divide-[#D8CEDD]">
              {d.capabilities.map((cap) => (
                <div
                  key={cap.name}
                  className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-start hover:bg-[#FAF8FC]/50 transition-colors"
                >
                  {/* Col 1 */}
                  <div className="col-span-3 flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase text-[#665F69] lg:hidden">
                      {d.columns[0]}
                    </span>
                    <h4 className="text-[20px] font-bold text-[#18141B]">
                      {cap.name}
                    </h4>
                    <p className="text-sm font-normal leading-[1.6em] text-[#665F69]">
                      {cap.boundary}
                    </p>
                  </div>

                  {/* Col 2 */}
                  <div className="col-span-3 flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase text-[#665F69] lg:hidden">
                      {d.columns[1]}
                    </span>
                    <StatusUnavailableBadge className="self-start" />
                    <span className="text-sm font-normal text-[#665F69]">
                      {cap.currentness}
                    </span>
                  </div>

                  {/* Col 3 */}
                  <div className="col-span-3 flex flex-col gap-1.5">
                    <span className="text-xs font-bold uppercase text-[#665F69] lg:hidden">
                      {d.columns[2]}
                    </span>
                    <span className="text-base font-normal text-[#18141B]">
                      {cap.scopeTitle}
                    </span>
                    <span className="text-sm font-normal leading-[1.5em] text-[#665F69]">
                      {cap.scopeDetail}
                    </span>
                  </div>

                  {/* Col 4 */}
                  <div className="col-span-3 flex flex-col gap-1">
                    <span className="text-xs font-bold uppercase text-[#665F69] lg:hidden">
                      {d.columns[3]}
                    </span>
                    <span className="text-sm font-normal text-[#18141B]">
                      {cap.source}
                    </span>
                    <span className="text-sm font-normal text-[#665F69]">
                      {cap.packRelease}
                    </span>
                    <span className="text-sm font-normal text-[#665F69]">
                      {cap.detail}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Interpretation Note */}
            <div className="p-6 bg-[#F6F1F8] border-t border-[#D8CEDD] flex flex-col gap-1.5">
              <span className="text-[15px] font-semibold text-[#301153]">
                {d.tableInterpretation.title}
              </span>
              <p className="text-sm font-normal leading-[1.6em] text-[#665F69]">
                {d.tableInterpretation.description}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Readiness Legend */}
        <Reveal delay={0.1}>
          <div className="pt-2 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl sm:text-[28px] font-bold text-[#18141B]">
                {d.legend.title}
              </h3>
              <p className="text-base font-normal leading-[1.5em] text-[#665F69]">
                {d.legend.subtitle}
              </p>
            </div>

            <div className="rounded-2xl border border-[#D8CEDD] bg-white divide-y divide-[#D8CEDD] overflow-hidden shadow-xs">
              {d.legend.states.map((st) => (
                <div
                  key={st.label}
                  className="px-6 py-4.5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 hover:bg-[#FAF8FC]/50 transition-colors"
                >
                  <span className="w-full sm:w-[160px] shrink-0 text-sm font-semibold text-[#301153]">
                    {st.label}
                  </span>
                  <span className="flex-1 text-base font-normal leading-[1.5em] text-[#665F69]">
                    {st.description}
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

"use client";

import React from "react";
import { DETAIL_PANEL_DATA } from "./e-invoicing-data";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function DetailPanelSection() {
  return (
    <SectionContainer className="bg-white border-b border-[#D8CEDD]/50">
      <SectionHeader
        eyebrow={DETAIL_PANEL_DATA.eyebrow}
        title={DETAIL_PANEL_DATA.title}
        description={DETAIL_PANEL_DATA.description}
        className="mb-12 sm:mb-14"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Metadata & Logs */}
        <div className="lg:col-span-7 space-y-6">
          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-[#D8CEDD] bg-[#FAF8FA] p-6 sm:p-7 shadow-xs">
              <h3 className="text-base font-bold text-[#18141B] mb-4">
                Transaction Identity
              </h3>
              <div className="space-y-2.5 text-sm text-[#665F69]">
                <div>
                  Document ID:{" "}
                  <span className="font-semibold text-[#18141B]">
                    {DETAIL_PANEL_DATA.identity.documentId}
                  </span>
                </div>
                <div>
                  Issuer Entity:{" "}
                  <span className="font-semibold text-[#18141B]">
                    {DETAIL_PANEL_DATA.identity.issuerEntity}
                  </span>
                </div>
                <div>
                  Counterparty:{" "}
                  <span className="font-semibold text-[#18141B]">
                    {DETAIL_PANEL_DATA.identity.counterparty}
                  </span>
                </div>
                <div>
                  Document Hash:{" "}
                  <span className="font-semibold text-[#D65A2C]">
                    {DETAIL_PANEL_DATA.identity.documentHash}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-[#D8CEDD] bg-[#FAF8FA] p-6 sm:p-7 shadow-xs">
              <h3 className="text-base font-bold text-[#18141B] mb-4">
                Mapping & Validation Logs
              </h3>
              <div className="space-y-2.5 text-sm text-[#665F69]">
                <div>
                  Target Schema:{" "}
                  <span className="text-[#18141B]">
                    {DETAIL_PANEL_DATA.logs.targetSchema}
                  </span>
                </div>
                <div>
                  Mapping Status:{" "}
                  <span className="font-semibold text-[#26735B]">
                    {DETAIL_PANEL_DATA.logs.mappingStatus}
                  </span>
                </div>
                <div>
                  Validation Run:{" "}
                  <span className="font-semibold text-[#26735B]">
                    {DETAIL_PANEL_DATA.logs.validationRun}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Immutable Replay Timeline */}
        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <div className="rounded-2xl bg-[#1D033B] p-6 sm:p-8 text-[#FFF8F5] shadow-lg">
              <h3 className="text-lg font-bold text-[#FFF8F5] mb-6">
                Immutable Replay Timeline
              </h3>
              <div className="space-y-6 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#F4A261]/30 pl-6">
                {DETAIL_PANEL_DATA.timeline.map((event) => (
                  <div key={event.time} className="relative">
                    <span className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full bg-[#F4A261]" />
                    <div className="text-xs font-bold text-[#F4A261] uppercase tracking-wider mb-1">
                      {event.time}
                    </div>
                    <div className="text-sm font-semibold text-white">
                      {event.title}
                    </div>
                    <div className="text-xs text-[#D8CEDD] mt-0.5">
                      {event.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}

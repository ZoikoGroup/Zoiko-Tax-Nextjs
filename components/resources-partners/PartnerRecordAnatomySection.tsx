"use client";

import React from "react";
import { Shield } from "lucide-react";
import { SectionContainer, SectionHeader, ContextualLink, ScopeNotice, Reveal } from "./shared";
import { partnerRecordAnatomyData } from "./types";

export default function PartnerRecordAnatomySection() {
  const { directoryCard, inlineDetail, notice } = partnerRecordAnatomyData;

  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]">
      <Reveal>
        <div className="space-y-12">
          {/* Section Heading */}
          <SectionHeader
            eyebrow={partnerRecordAnatomyData.eyebrow}
            title={partnerRecordAnatomyData.title}
            description={partnerRecordAnatomyData.introduction}
          />

          {/* Record and Inline Detail Specimens */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Directory Card Specimen (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl border border-[#E0D5E6] bg-white p-6 sm:p-7 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-[#F0EAF4] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                  {directoryCard.specimenLabel}
                </span>
                <span className="text-xs font-semibold text-[#665F69]">
                  Directory Card View
                </span>
              </div>

              {/* Logo Rights Field */}
              <div className="rounded-xl border border-[#DFD3E7] bg-[#F4EDF8] p-4 text-xs font-medium leading-relaxed text-[#665F69]">
                {directoryCard.logoRule}
              </div>

              {/* Name Field */}
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#665F69]">
                  Partner Name
                </span>
                <h3 className="text-2xl font-bold text-[#18141B]">
                  {directoryCard.nameField}
                </h3>
              </div>

              {/* Record Fields */}
              <div className="space-y-4 pt-2">
                {directoryCard.fields.map((field, idx) => (
                  <div key={idx} className="space-y-1 border-t border-[#F0EAF4] pt-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                      {field.label}
                    </span>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed text-[#665F69]">
                      {field.guidance}
                    </p>
                  </div>
                ))}
              </div>

              {/* Detail-link Gate */}
              <div className="rounded-xl border border-[#DFD3E7] bg-[#F7F1FA] p-3.5 text-xs font-semibold text-[#301153]">
                {directoryCard.detailGate}
              </div>
            </div>

            {/* Inline Detail Specimen (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl border border-[#4E2A6E] bg-[#301153] p-6 sm:p-8 lg:p-9 text-white shadow-md space-y-7">
              <div className="flex items-center justify-between border-b border-[#4E2A6E] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F4A261]">
                  {inlineDetail.specimenLabel}
                </span>
                <span className="text-xs font-semibold text-[#D9D0DF]">
                  Inline Record Detail
                </span>
              </div>

              {/* Title & Summary */}
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {inlineDetail.title}
                </h3>
                <p className="text-xs sm:text-sm font-normal leading-relaxed text-[#D9D0DF]">
                  {inlineDetail.summaryGuidance}
                </p>
              </div>

              {/* Scope Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inlineDetail.fields.map((field, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-[#4E2A6E] bg-[#24103D] p-4 space-y-1.5"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F4A261]">
                      {field.label}
                    </span>
                    <p className="text-xs font-medium leading-relaxed text-[#D9D0DF]">
                      {field.guidance}
                    </p>
                  </div>
                ))}
              </div>

              {/* Approved Proof Boundary Box */}
              <div className="rounded-xl border border-[#4E2A6E] bg-[#1D033B] p-5 space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#F4A261]" />
                  <h4 className="text-sm font-bold text-white">
                    {inlineDetail.proofBoundary.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm font-normal leading-relaxed text-[#D9D0DF]">
                  {inlineDetail.proofBoundary.guidance}
                </p>
              </div>

              {/* Context Routes */}
              <div className="pt-2 border-t border-[#4E2A6E] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D9D0DF]">
                  Context Verification Routes
                </span>
                <div className="flex flex-wrap items-center gap-5">
                  {inlineDetail.contextRoutes.map((route, idx) => (
                    <ContextualLink key={idx} label={route.label} href={route.href} dark />
                  ))}
                </div>
              </div>

              {/* Detail Source Requirement */}
              <p className="text-xs font-normal text-[#D9D0DF]/80 leading-relaxed italic border-t border-[#4E2A6E] pt-4">
                {inlineDetail.sourceRequirement}
              </p>
            </div>
          </div>

          {/* Scope Notice */}
          <ScopeNotice title={notice.title} explanation={notice.explanation} />
        </div>
      </Reveal>
    </SectionContainer>
  );
}

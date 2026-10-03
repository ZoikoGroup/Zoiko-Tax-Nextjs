"use client";

import React from "react";
import { Link as LinkIcon, ArrowUpRight } from "lucide-react";
import { EXPANDED_RECORD_DATA } from "./api-changelog-data";
import { SectionContainer, PrimaryButton, SecondaryButton, MetadataBadge, Reveal } from "./shared";

export default function ExpandedRecordSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/api-changelog/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <div className="flex flex-col gap-3.5 mb-6">
          <span className="text-xs font-bold text-[#D65A2C]">{EXPANDED_RECORD_DATA.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.12] text-[#18141B]">
            {EXPANDED_RECORD_DATA.title}
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="rounded-[26px] border border-[#D8CEDD] bg-white overflow-hidden">
          <div className="bg-[#301153] p-5 sm:p-6 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-sm font-semibold text-white">{EXPANDED_RECORD_DATA.bannerLabel}</p>
            <MetadataBadge tone="purpleDark">{EXPANDED_RECORD_DATA.bannerBadge}</MetadataBadge>
          </div>

          <div className="p-6 sm:p-8 flex flex-col gap-7">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-2xl sm:text-[32px] font-semibold text-[#18141B]">{EXPANDED_RECORD_DATA.recordTitle}</h3>
              <div className="flex items-center gap-2">
                <LinkIcon className="h-[18px] w-[18px] text-[#665F69]" aria-hidden="true" />
                <span className="text-[13px] text-[#665F69]">{EXPANDED_RECORD_DATA.copyLink}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {EXPANDED_RECORD_DATA.sourceFields.map((field) => (
                <div key={field.label} className="flex flex-col gap-1.5">
                  <span className="text-xs text-[#665F69]">{field.label}</span>
                  <span className="text-sm font-medium text-[#18141B]">{field.value}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-[#FFF0E7] p-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {EXPANDED_RECORD_DATA.impactFields.map((field) => (
                <div key={field.label} className="flex flex-col gap-1.5">
                  <span className="text-xs text-[#665F69]">{field.label}</span>
                  <span className="text-sm font-medium text-[#18141B]">{field.value}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-[#18141B]">{EXPANDED_RECORD_DATA.summaryTitle}</h4>
                  <p className="text-base leading-[1.6] text-[#665F69]">{EXPANDED_RECORD_DATA.summaryText}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-[#18141B]">{EXPANDED_RECORD_DATA.technicalTitle}</h4>
                  <p className="text-base leading-[1.6] text-[#665F69]">{EXPANDED_RECORD_DATA.technicalText}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-[#18141B]">{EXPANDED_RECORD_DATA.actionTitle}</h4>
                  <p className="text-base leading-[1.6] text-[#665F69]">{EXPANDED_RECORD_DATA.actionText}</p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#FAF3FF] p-6 flex flex-col gap-5">
                <h4 className="text-base font-semibold text-[#18141B]">{EXPANDED_RECORD_DATA.referencePanel.title}</h4>
                {EXPANDED_RECORD_DATA.referencePanel.fields.map((field) => (
                  <div key={field.label} className="flex flex-col gap-1.5">
                    <span className="text-xs text-[#665F69]">{field.label}</span>
                    <span className="text-sm font-medium text-[#18141B]">{field.value}</span>
                  </div>
                ))}
                <p className="text-sm leading-[1.6] text-[#665F69]">{EXPANDED_RECORD_DATA.referencePanel.note}</p>
                <div className="flex flex-col gap-2">
                  {EXPANDED_RECORD_DATA.referencePanel.links.map((link) => (
                    <span key={link} className="text-sm font-semibold text-[#D65A2C]">
                      {link}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {EXPANDED_RECORD_DATA.actions.map((action) =>
                action.variant === "primary" ? (
                  <PrimaryButton key={action.label} href={action.href}>
                    <span className="inline-flex items-center gap-2">
                      {action.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </PrimaryButton>
                ) : (
                  <SecondaryButton key={action.label} href={action.href}>
                    <span className="inline-flex items-center gap-2">
                      {action.label}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </SecondaryButton>
                )
              )}
            </div>

            <p className="text-sm leading-[1.6] text-[#665F69]">{EXPANDED_RECORD_DATA.footnote}</p>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

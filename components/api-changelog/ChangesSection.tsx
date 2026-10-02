"use client";

import React from "react";
import clsx from "clsx";
import { Search, ChevronDown, SquareCheck, Square, Link as LinkIcon, Files, ArrowUpRight } from "lucide-react";
import { CHANGES_DATA, CHANGE_RECORDS } from "./api-changelog-data";
import { SectionContainer, SectionHeader, PrimaryButton, SecondaryButton, MetadataBadge, Reveal } from "./shared";

export default function ChangesSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow={CHANGES_DATA.eyebrow}
          title={CHANGES_DATA.title}
          description={CHANGES_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.06}>
        <div className="mt-8 rounded-[26px] border border-[#D8CEDD] bg-[#FDFAFF] p-6 sm:p-7 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-black">{CHANGES_DATA.searchLabel}</span>
            <div className="flex items-center gap-3 rounded-[10px] border border-[#D8CEDD] bg-white p-4">
              <Search className="h-[18px] w-[18px] shrink-0 text-[#665F69]" aria-hidden="true" />
              <span className="flex-1 text-[15px] text-[#665F69]">{CHANGES_DATA.searchPlaceholder}</span>
              <span className="text-[13px] text-[#D65A2C] whitespace-nowrap">Clear search</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {CHANGES_DATA.filters.map((filter) => (
              <div key={filter.label} className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-[#18141B]">{filter.label}</span>
                <div
                  className={clsx(
                    "flex items-center justify-between rounded-[10px] bg-white p-3.5",
                    filter.active ? "border-2 border-[#D65A2C]" : "border border-[#D8CEDD]"
                  )}
                >
                  <span className="text-[13px] text-[#18141B]">{filter.value}</span>
                  <ChevronDown className="h-3.5 w-3.5 shrink-0 text-[#665F69]" aria-hidden="true" />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
            <div className="rounded-xl border border-[#D8CEDD] bg-white p-4.5 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[13px] font-semibold text-black">{CHANGES_DATA.taxonomy.title}</span>
                <span className="text-xs text-[#D65A2C]">{CHANGES_DATA.taxonomy.selectedCount}</span>
              </div>
              {CHANGES_DATA.taxonomy.options.map((opt) => (
                <div key={opt.label} className="flex items-center gap-2.5 py-1">
                  {opt.checked ? (
                    <SquareCheck className="h-[18px] w-[18px] shrink-0 text-[#D65A2C]" aria-hidden="true" />
                  ) : (
                    <Square className="h-[18px] w-[18px] shrink-0 text-[#D8CEDD]" aria-hidden="true" />
                  )}
                  <span className="text-sm text-[#18141B]">{opt.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 p-4">
              <div>
                <MetadataBadge>{CHANGES_DATA.guidance.badge}</MetadataBadge>
              </div>
              <p className="text-base font-semibold leading-[1.4] text-[#18141B]">{CHANGES_DATA.guidance.title}</p>
              <p className="text-sm leading-[1.6] text-[#665F69]">{CHANGES_DATA.guidance.paragraph1}</p>
              <p className="text-sm leading-[1.6] text-[#665F69]">{CHANGES_DATA.guidance.paragraph2}</p>
              <p className="text-sm leading-[1.6] text-[#665F69]">{CHANGES_DATA.guidance.paragraph3}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-md bg-[#FFF0E7] px-2.5 py-1.5 text-xs font-semibold text-[#9A421E] whitespace-nowrap">
              {CHANGES_DATA.activeFilterChip}
            </span>
            <span className="text-sm font-semibold text-[#D65A2C]">Clear filters</span>
            <div className="flex-1 flex justify-end items-center gap-2">
              <LinkIcon className="h-[18px] w-[18px] text-[#D65A2C]" aria-hidden="true" />
              <span className="text-[13px] text-[#D65A2C]">{CHANGES_DATA.shareLink}</span>
            </div>
          </div>

          <p className="text-sm leading-[1.6] text-[#665F69]">{CHANGES_DATA.shareNote}</p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 flex items-center justify-between flex-wrap gap-2">
          <p className="text-base font-semibold text-[#18141B]">{CHANGES_DATA.resultsStatus}</p>
          <span className="text-[13px] text-[#665F69]">{CHANGES_DATA.resultsOrder}</span>
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <div className="mt-5 rounded-2xl bg-white border border-[#D8CEDD] p-8 sm:p-10 flex flex-col items-center gap-4 text-center">
          <Files className="h-8 w-8 text-[#301153]" aria-hidden="true" />
          <h3 className="text-xl sm:text-2xl font-semibold text-[#18141B]">{CHANGES_DATA.emptyState.title}</h3>
          <p className="max-w-[740px] text-base leading-[1.6] text-[#665F69]">{CHANGES_DATA.emptyState.description}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            {CHANGES_DATA.emptyState.actions.map((action) =>
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
        </div>
      </Reveal>

      <div className="mt-10 flex flex-col gap-3.5 w-full">
        <Reveal>
          <span className="text-xs font-bold text-[#D65A2C]">{CHANGES_DATA.specimensEyebrow}</span>
        </Reveal>
        <Reveal delay={0.02}>
          <h3 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.12] text-[#18141B]">
            {CHANGES_DATA.specimensTitle}
          </h3>
        </Reveal>
        <Reveal delay={0.04}>
          <p className="text-base leading-[1.6] text-[#665F69]">{CHANGES_DATA.specimensDescription}</p>
        </Reveal>
      </div>

      <div className="mt-5 flex flex-col gap-4 w-full">
        {CHANGE_RECORDS.map((record, i) => (
          <Reveal key={record.tag} delay={0.04 * i}>
            <div
              className={clsx(
                "rounded-2xl border p-6 flex flex-col gap-4",
                record.highlighted ? "bg-[#FFF0E7] border-[#DCA180]" : "bg-white border-[#D8CEDD]"
              )}
            >
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold text-[#D65A2C]">{record.tag}</span>
                  <h4 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{record.title}</h4>
                </div>
                <div className="flex items-center gap-3">
                  <MetadataBadge>Not a published change</MetadataBadge>
                  <ChevronDown className="h-[18px] w-[18px] shrink-0 text-[#665F69]" aria-hidden="true" />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {record.fields.map((field) => (
                  <div key={field.label} className="flex flex-col gap-1.5">
                    <span className="text-xs text-[#665F69]">{field.label}</span>
                    <span className="text-sm font-medium text-[#18141B]">{field.value}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm leading-[1.6] text-[#665F69]">{record.footnote}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

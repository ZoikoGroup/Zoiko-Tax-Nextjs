import React from "react";
import clsx from "clsx";
import { Section, SectionHeading, Pill, Reveal } from "./shared";
import { registryData } from "./regulatory-obligations-data";

const cols = registryData.columns;

/**
 * Figma 233:11664 (desktop, flat #faf3ff, no image): filter bar + 9-column registry table.
 * Figma 233:12691 (mobile, on page #faf3ff): filters stack, each row becomes a #fffafa card.
 */
export default function RegistryMockupSection() {
  return (
    <Section className="bg-[#faf3ff] py-12 lg:py-[104px]" innerClassName="flex flex-col gap-6 lg:gap-8">
      <Reveal>
        <SectionHeading
          eyebrow={registryData.eyebrow}
          title={registryData.title}
          description={registryData.description}
          descriptionLg="lg:text-[14px] lg:leading-[normal]"
        />
      </Reveal>

      {/* Filters */}
      <Reveal delay={0.05}>
        <div className="flex w-full flex-col items-start gap-[10px] lg:flex-row lg:items-center lg:gap-4">
          <div className="flex w-full items-start rounded-[8px] bg-[#ebeaeb] p-3 lg:min-w-0 lg:flex-1">
            <span className="text-[12px] font-normal leading-[normal] text-[#665f69] lg:text-[13px]">
              <span className="lg:hidden">{registryData.searchMobile}</span>
              <span className="hidden lg:inline">{registryData.search}</span>
            </span>
          </div>
          <div className="flex items-start gap-2 lg:contents">
            {registryData.filters.map((filter) => (
              <span
                key={filter}
                className="inline-flex shrink-0 items-start rounded-[100px] border border-[#d8cedd] bg-[#fffafa] px-3 py-[6px] text-[11px] font-semibold leading-[normal] whitespace-nowrap text-[#18141b] lg:border-[#f5f5f5] lg:bg-transparent lg:px-4 lg:py-2 lg:text-[12px]"
              >
                {filter}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Desktop table */}
      <Reveal delay={0.1} className="hidden w-full lg:block">
        <div className="w-full overflow-x-auto rounded-[12px] border border-[#f5f5f5]">
          <div className="flex min-w-[1278px] flex-col">
            <div className="flex w-full items-start border-b border-[#f5f5f5] bg-[#e6e6e6] p-4 text-[12px] font-bold leading-[normal] text-[#18141b]">
              {cols.map((col) => (
                <span key={col.label} className={clsx("shrink-0", col.width)}>
                  {col.label}
                </span>
              ))}
            </div>
            {registryData.rows.map((row) => (
              <div key={row.name} className="flex w-full items-center border-b border-[#f5f5f5] p-4 text-[13px] leading-[normal]">
                <span className={clsx("shrink-0 font-semibold text-[#18141b]", cols[0].width)}>{row.name}</span>
                <span className={clsx("shrink-0 font-normal text-[#535055]", cols[1].width)}>{row.category}</span>
                <span className={clsx("shrink-0 font-normal text-[#535055]", cols[2].width)}>{row.entity}</span>
                <span className={clsx("shrink-0 font-normal text-[#535055]", cols[3].width)}>{row.authority}</span>
                <span className={clsx("shrink-0 font-normal text-[#535055]", cols[4].width)}>{row.period}</span>
                <span className={clsx("shrink-0 font-semibold text-[#18141b]", cols[5].width)}>{row.due}</span>
                <span className={clsx("flex shrink-0 items-start overflow-hidden", cols[6].width)}>
                  <Pill tone={row.status.tone} className="rounded-[4px]">
                    {row.status.label}
                  </Pill>
                </span>
                <span className={clsx("flex shrink-0 items-start overflow-hidden", cols[7].width)}>
                  <Pill tone={row.coverage.tone} filled={false} className="rounded-[100px]">
                    {row.coverage.label}
                  </Pill>
                </span>
                <span className="min-w-0 flex-1 font-mono text-[11px] font-normal text-[#665f69]">{row.hash}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Mobile cards */}
      <div className="flex w-full flex-col gap-3 lg:hidden">
        {registryData.rows.map((row) => (
          <Reveal key={row.name}>
            <div className="flex w-full flex-col items-start gap-[10px] rounded-[12px] border border-[#d8cedd] bg-[#fffafa] p-4 leading-[normal]">
              <div className="flex w-full items-start justify-between font-semibold whitespace-nowrap">
                <span className="text-[14px] text-[#18141b]">{row.name}</span>
                <span className="text-[12px] text-[#d65a2c]">{row.due}</span>
              </div>
              <div className="flex w-full flex-col items-start gap-1 font-normal">
                <span className="text-[11px] text-[#665f69]">{registryData.mobileLabels.categoryEntity}</span>
                <span className="text-[13px] text-[#535055]">
                  {row.category} • {row.entity}
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-1 font-normal">
                <span className="text-[11px] text-[#665f69]">{registryData.mobileLabels.authorityRecurrence}</span>
                <span className="text-[13px] text-[#535055]">
                  {row.authority} ({row.period})
                </span>
              </div>
              <div className="flex w-full flex-wrap items-start gap-2">
                <Pill tone={row.status.tone} className="rounded-[100px]">
                  {row.status.label}
                </Pill>
                <Pill tone={row.coverage.tone} className="rounded-[100px]">
                  {row.coverage.label}
                </Pill>
              </div>
              <span className="font-mono text-[11px] font-normal text-[#665f69]">{row.hash}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

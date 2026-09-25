import React from "react";
import clsx from "clsx";
import { CONTAINER, PatternBackground, Reveal } from "./shared";
import { filingRegistry, filingRegistryRows, evidencePanel, productProofIntro } from "./compliance-filing-data";

const pillTone: Record<string, string> = {
  orange: "bg-[rgba(191,103,53,0.12)] text-[#bf6735]",
  green: "bg-[rgba(38,115,91,0.12)] text-[#26735b]",
  gray: "bg-[rgba(102,95,105,0.12)] text-[#665f69]",
};

/** Figma 233:9705 / 233:10661 — intro heading (pattern background on desktop). */
function ProductProofIntro() {
  return (
    <section className="relative w-full overflow-hidden pt-12 pb-4 lg:min-h-[206px] lg:pb-0">
      <PatternBackground className="hidden lg:block" />
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex w-full flex-col items-start gap-3 lg:gap-4">
            <p className="font-manrope text-[12px] font-bold uppercase leading-[normal] text-[#bf6735] lg:text-[14px]">
              {productProofIntro.eyebrow}
            </p>
            <h2 className="font-sora text-[24px] font-extrabold leading-[normal] text-[#18141b] lg:text-[36px]">
              {productProofIntro.title}
            </h2>
            <p className="font-manrope text-[14px] font-normal leading-[1.5] text-[#665f69] lg:text-[16px] lg:leading-[normal]">
              {productProofIntro.descriptionBefore}
              <span className="font-bold">{productProofIntro.descriptionBold}</span>
              {productProofIntro.descriptionAfter}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Figma 233:9710 (desktop table on pattern) / 233:10665 (mobile stacked cards). */
function FilingRegistryMock() {
  return (
    <section className="relative w-full overflow-hidden pt-4 pb-6 lg:py-10">
      <PatternBackground className="hidden lg:block" />
      <div className={clsx(CONTAINER, "flex flex-col gap-4 lg:gap-0")}>
        <Reveal>
          {/* Workspace header */}
          <div className="flex w-full flex-col items-start gap-3 rounded-[12px] border border-[#d8cedd] bg-white p-4 lg:gap-4 lg:rounded-none lg:rounded-t-[16px] lg:p-6">
            <div className="flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/compliance-filing/icon-shield-orange.svg" alt="" aria-hidden className="size-4 shrink-0 lg:size-[18px]" />
                <h3 className="font-sora text-[15px] font-bold leading-[normal] text-[#18141b] lg:text-[18px]">{filingRegistry.title}</h3>
              </div>
              <div className="flex w-full flex-col items-start gap-[6px] lg:w-auto lg:flex-row lg:gap-3">
                <span className="w-full rounded-[6px] bg-[#faf3ff] px-2 py-1 font-manrope text-[11px] leading-[normal] whitespace-nowrap text-[#18141b] lg:w-auto lg:rounded-[8px] lg:px-3 lg:py-[6px] lg:text-[12px]">
                  {filingRegistry.tenant}
                </span>
                <span className="w-full rounded-[6px] bg-[#d8cedd] px-2 py-1 font-manrope text-[11px] leading-[normal] whitespace-nowrap text-[#18141b] lg:w-auto lg:rounded-[8px] lg:px-3 lg:py-[6px] lg:text-[12px]">
                  {filingRegistry.period}
                </span>
              </div>
            </div>
            <div className="w-full rounded-[6px] border border-[#bf6735] bg-[rgba(191,103,53,0.12)] p-[10px] lg:rounded-[8px] lg:bg-[rgba(191,103,53,0.1)] lg:p-3">
              <p className="font-manrope text-[11px] font-normal leading-[normal] text-[#bf6735] lg:text-[13px]">
                ⚠️ <span className="font-bold">System Notice:</span> {filingRegistry.notice}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Desktop registry table */}
        <Reveal delay={0.05} className="hidden lg:block">
          <div role="table" className="w-full overflow-hidden rounded-b-[16px] border-x border-b border-[#d8cedd] bg-white font-manrope leading-[normal]">
            <div role="row" className="flex items-start gap-3 border border-[#d8cedd] bg-[#fffafa] p-4 text-[12px] font-bold text-[#18141b]">
              {filingRegistry.columns.map((col, i) => (
                <span
                  key={col.label}
                  role="columnheader"
                  className={i === filingRegistry.columns.length - 1 ? "min-w-px flex-1 text-right" : "shrink-0"}
                  style={col.width ? { width: col.width } : undefined}
                >
                  {col.label}
                </span>
              ))}
            </div>
            {filingRegistryRows.map((row) => (
              <div key={row.returnName} role="row" className="flex items-center gap-3 border border-[#d8cedd] p-4 text-[13px]">
                <span role="cell" className="w-[180px] shrink-0 font-semibold text-[#18141b]">{row.returnName}</span>
                <span role="cell" className="w-[140px] shrink-0 text-[#665f69]">{row.authority}</span>
                <span role="cell" className="w-[90px] shrink-0 text-[#665f69]">{row.period}</span>
                <span role="cell" className="w-[90px] shrink-0 text-[#665f69]">{row.due}</span>
                <span role="cell" className={clsx("w-[140px] shrink-0 font-semibold", row.readinessTone === "green" ? "text-[#26735b]" : "text-[#bf6735]")}>
                  {row.readiness}
                </span>
                <span role="cell" className="w-[130px] shrink-0 text-[#18141b]">{row.status}</span>
                <span role="cell" className="w-[120px] shrink-0 text-[#665f69]">{row.owner}</span>
                <span role="cell" className="w-[100px] shrink-0 text-[#665f69]">{row.channel}</span>
                <span role="cell" className="min-w-px flex-1 text-right font-semibold text-[#bf6735]">View Details →</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile registry cards */}
        <div className="flex w-full flex-col gap-3 lg:hidden">
          {filingRegistryRows.map((row, idx) => (
            <Reveal key={row.returnName} delay={0.04 * idx}>
              <div className="flex w-full flex-col items-start gap-3 rounded-[12px] border border-[#d8cedd] bg-white p-4">
                <div className="flex w-full items-center justify-between gap-2">
                  <h4 className="font-sora text-[14px] font-bold leading-[normal] whitespace-nowrap text-[#18141b]">{row.returnName}</h4>
                  <span className={clsx("rounded-[6px] px-2 py-1 font-manrope text-[11px] font-bold leading-[normal] whitespace-nowrap", pillTone[row.statusTone])}>
                    {row.status}
                  </span>
                </div>
                <dl className="flex w-full flex-col gap-[6px] font-manrope text-[11px] leading-[normal] whitespace-nowrap">
                  <div className="flex justify-between">
                    <dt className="text-[#665f69]">Authority</dt>
                    <dd className="text-[#18141b]">{row.authority}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#665f69]">Period / Due</dt>
                    <dd className="text-[#18141b]">
                      {row.period} ({row.due})
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#665f69]">Readiness</dt>
                    <dd className="font-semibold text-[#bf6735]">{row.readiness}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-[#665f69]">Owner / Channel</dt>
                    <dd className="text-[#18141b]">
                      {row.owner} via {row.channel}
                    </dd>
                  </div>
                </dl>
                <div className="h-px w-full bg-[#d8cedd]" />
                <p className="w-full text-right font-manrope text-[12px] font-semibold leading-[normal] text-[#bf6735]">View Details →</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Figma 233:9786 / 233:10779 — sits on the page background (#faf3ff), no image. */
function DetailEvidencePanel() {
  return (
    <section className="relative w-full py-6 lg:py-10">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex w-full flex-col items-start gap-4 rounded-[16px] border border-[#d8cedd] bg-white p-5 lg:gap-6 lg:p-8">
            <div className="flex w-full items-center justify-between gap-2">
              <h3 className="min-w-px flex-1 font-sora text-[15px] font-bold leading-[normal] text-[#18141b] lg:flex-none lg:text-[20px] lg:whitespace-nowrap">
                <span className="lg:hidden">{evidencePanel.mobileTitle}</span>
                <span className="hidden lg:inline">{evidencePanel.title}</span>
              </h3>
              <span className="shrink-0 rounded-[4px] bg-[#26735b] px-2 py-1 font-manrope text-[9px] font-bold leading-[normal] whitespace-nowrap text-white lg:rounded-[8px] lg:px-3 lg:text-[12px]">
                {evidencePanel.status}
              </span>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 leading-[normal] lg:grid-cols-2 lg:gap-6">
              {evidencePanel.groups.map((group) => (
                <div key={group.label} className="flex flex-col items-start gap-[6px] lg:gap-2">
                  <p className="font-manrope text-[11px] font-bold whitespace-nowrap text-[#bf6735] uppercase lg:text-[12px]">{group.label}</p>
                  <p className="font-manrope text-[12px] font-normal text-[#18141b] lg:text-[14px] lg:whitespace-nowrap">{group.lines[0]}</p>
                  <p className="font-manrope text-[12px] font-normal text-[#665f69] lg:text-[14px] lg:whitespace-nowrap">
                    <span className="lg:hidden">{group.mobileSecondLine ?? group.lines[1]}</span>
                    <span className="hidden lg:inline">{group.lines[1]}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ProductProofSection() {
  return (
    <>
      <ProductProofIntro />
      <FilingRegistryMock />
      <DetailEvidencePanel />
    </>
  );
}

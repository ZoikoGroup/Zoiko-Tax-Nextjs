import React from "react";
import { SectionContainer, SectionHeader, PatternBackground, Reveal } from "./shared";
import { remittanceBoundary, einvoicingBoundary } from "./compliance-filing-data";

/**
 * Figma 233:9901 (desktop): white section with the diamond line pattern.
 * Figma 233:10893 (mobile): flat #f5f6fa, no image.
 */
export function RemittanceBoundarySection() {
  return (
    <SectionContainer
      className="bg-[#f5f6fa] lg:bg-white"
      innerClassName="flex flex-col gap-8 lg:gap-10"
      background={<PatternBackground className="hidden lg:block" />}
    >
      <Reveal>
        <SectionHeader
          eyebrow={remittanceBoundary.eyebrow}
          title={remittanceBoundary.title}
          mobileTitle={remittanceBoundary.mobileTitle}
          description={remittanceBoundary.description}
          descriptionClassName="leading-[normal] lg:leading-[normal]"
        />
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-6">
        {remittanceBoundary.columns.map((col, idx) => (
          <Reveal key={col.title} delay={0.05 * idx}>
            <div className="flex flex-col items-start gap-[10px] rounded-[12px] border border-[#d8cedd] bg-white p-5 lg:gap-4 lg:rounded-[16px] lg:p-8">
              <h3 className="font-sora text-[15px] font-bold leading-[normal] whitespace-nowrap text-[#18141b] lg:text-[18px]">{col.title}</h3>
              <p className="font-manrope text-[13px] font-normal leading-[1.4] text-[#665f69] lg:text-[14px] lg:leading-[normal]">
                {col.description}
                {col.limitation && (
                  <>
                    {" "}
                    <span className="font-bold">System Limitation:</span> {col.limitation}
                  </>
                )}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

/** Figma 233:9913 / 233:10905 — flat #faf3ff on both breakpoints, no image. */
export function EInvoicingBoundarySection() {
  return (
    <SectionContainer className="bg-[#faf3ff]" innerClassName="flex flex-col gap-8 lg:gap-10">
      <Reveal>
        <SectionHeader
          eyebrow={einvoicingBoundary.eyebrow}
          title={einvoicingBoundary.title}
          description={einvoicingBoundary.description}
          descriptionClassName="leading-[normal] lg:leading-[normal]"
        />
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-6">
        {einvoicingBoundary.columns.map((col, idx) => (
          <Reveal key={col.title} delay={0.05 * idx}>
            <div className="flex flex-col items-start gap-[10px] rounded-[12px] border border-[#d8cedd] bg-white p-5 lg:gap-3 lg:rounded-[16px] lg:p-6">
              <h3 className="font-sora text-[15px] font-bold leading-[normal] whitespace-nowrap text-[#18141b] lg:text-[16px]">
                <span className="lg:hidden">{col.mobileTitle ?? col.title}</span>
                <span className="hidden lg:inline">{col.title}</span>
              </h3>
              <p className="font-manrope text-[13px] font-normal leading-[1.4] text-[#665f69] lg:leading-[normal]">{col.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

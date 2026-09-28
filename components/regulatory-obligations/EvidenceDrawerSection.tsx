import React from "react";
import { Section, SectionHeading, PatternBackground, Reveal } from "./shared";
import { evidenceDrawer } from "./regulatory-obligations-data";

/**
 * Figma 233:11771 (desktop) / 233:12801 (mobile): diamond line-art pattern background.
 * White identity panel + fixed 420px dark #1d033b evidence manifest (stacked on mobile).
 */
export default function EvidenceDrawerSection() {
  return (
    <Section className="py-12 lg:py-[104px]" background={<PatternBackground />} innerClassName="flex flex-col gap-7 lg:gap-10">
      <Reveal>
        <SectionHeading eyebrow={evidenceDrawer.eyebrow} title={evidenceDrawer.title} description={evidenceDrawer.description} />
      </Reveal>

      <div className="flex w-full flex-col items-stretch gap-7 lg:flex-row lg:items-start lg:gap-8">
        <Reveal delay={0.05} className="w-full lg:min-w-0 lg:flex-1">
          <div className="flex w-full flex-col items-start gap-4 rounded-[16px] border border-[#d8cedd] bg-[#fffafa] p-5 leading-[normal] lg:gap-6 lg:rounded-[24px] lg:bg-white lg:p-8">
            <div className="flex w-full flex-col items-start gap-4 lg:gap-[6px]">
              <p className="font-mono text-[11px] font-normal uppercase text-[#d65a2c] lg:text-[12px]">{evidenceDrawer.identityLabel}</p>
              <h3 className="text-[18px] font-bold text-[#18141b] lg:text-[24px]">{evidenceDrawer.identityTitle}</h3>
            </div>
            <dl className="flex w-full flex-col items-start gap-4">
              {evidenceDrawer.context.map((row) => (
                <div key={row.label} className="flex w-full flex-col items-start gap-1 lg:gap-[6px] lg:border-b lg:border-[#d8cedd] lg:pb-4">
                  <dt className="text-[11px] font-bold uppercase text-[#665f69] lg:text-[12px]">{row.label}</dt>
                  <dd className="text-[13px] font-normal text-[#18141b] lg:text-[14px]">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="w-full lg:w-[420px] lg:shrink-0">
          <div className="flex w-full flex-col items-start gap-5 rounded-[16px] border border-[rgba(255,255,255,0.1)] bg-[#1d033b] p-6 lg:gap-6 lg:rounded-[24px] lg:p-8">
            <h3 className="text-[15px] font-bold leading-[normal] text-white lg:text-[16px]">{evidenceDrawer.manifestTitle}</h3>
            <dl className="flex w-full flex-col items-start gap-5 lg:gap-4">
              {evidenceDrawer.manifest.map((row) => (
                <div key={row.label} className="flex w-full flex-col items-start gap-1">
                  <dt className="font-mono text-[11px] font-bold uppercase leading-[normal] text-[#f4a261] lg:text-[12px]">{row.label}</dt>
                  <dd className="text-[12px] font-normal leading-[1.4] text-[#d9d0df] lg:text-[13px]">{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex w-full items-start rounded-[8px] border border-[#dd7235] bg-[#3b1800] p-3 lg:p-4">
              <p className="flex-1 text-[11px] font-normal leading-[1.4] text-[#ffeee7] lg:text-[12px]">{evidenceDrawer.warning}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

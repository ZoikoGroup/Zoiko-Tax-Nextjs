import React from "react";
import { Section, SectionHeading, PatternBackground, Icon, Reveal } from "./shared";
import { auditReplay } from "./regulatory-obligations-data";

/**
 * Figma 233:11986 (desktop) / 233:13010 (mobile): diamond line-art pattern background.
 * White trace-manifest checklist + dark #1d033b audit scenario card (equal columns → stacked).
 */
export default function AuditReplaySection() {
  return (
    <Section className="py-12 lg:py-[104px]" background={<PatternBackground />} innerClassName="flex flex-col gap-7 lg:gap-10">
      <Reveal>
        <SectionHeading eyebrow={auditReplay.eyebrow} title={auditReplay.title} description={auditReplay.description} />
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-8">
        <Reveal delay={0.05}>
          <div className="flex w-full flex-col items-start gap-3 rounded-[16px] border border-[#d8cedd] bg-[#fffafa] p-5 leading-[normal] lg:gap-5 lg:rounded-[24px] lg:bg-white lg:p-8">
            <h3 className="text-[15px] font-bold text-[#18141b] lg:text-[18px]">{auditReplay.manifestTitle}</h3>
            <ul className="flex w-full flex-col items-start gap-3 lg:gap-5">
              {auditReplay.manifest.map((item) => (
                <li key={item} className="flex w-full items-center gap-2 lg:gap-[10px]">
                  <Icon src="/regulatory-obligations/icon-check-green-mobile.svg" className="size-3 lg:hidden" />
                  <Icon src="/regulatory-obligations/icon-check-orange.svg" className="hidden size-[14px] lg:block" />
                  <span className="text-[12px] font-normal text-[#18141b] lg:text-[13px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex w-full flex-col items-start gap-3 rounded-[16px] border border-[rgba(255,255,255,0.1)] bg-[#1d033b] p-5 lg:min-h-[302px] lg:gap-5 lg:rounded-[24px] lg:p-8">
            <h3 className="text-[15px] font-bold leading-[normal] text-white lg:text-[18px]">{auditReplay.scenarioTitle}</h3>
            <p className="text-[12px] font-normal leading-[normal] text-[#d9d0df] lg:text-[14px]">{auditReplay.scenario}</p>
            <p className="text-[12px] font-normal leading-[1.4] text-[#d9d0df] lg:text-[13px] lg:leading-[1.5]">{auditReplay.scenarioBody}</p>
            <div className="flex w-full items-start rounded-[8px] bg-[#100031] p-3 lg:rounded-[12px] lg:p-4">
              <code className="min-w-0 flex-1 font-mono text-[11px] font-normal leading-[normal] break-all text-[#f4a261]">{auditReplay.code}</code>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

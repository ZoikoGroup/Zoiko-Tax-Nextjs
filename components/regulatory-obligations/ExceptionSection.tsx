import React from "react";
import clsx from "clsx";
import { Section, SectionHeading, PatternBackground, Pill, Reveal } from "./shared";
import { exceptionData } from "./regulatory-obligations-data";

const cols = exceptionData.columns;

/**
 * Figma 233:11879 (desktop) / 233:12901 (mobile): diamond line-art pattern background.
 * White exception table with #f7f3ed header → stacked #fffafa cards on mobile.
 */
export default function ExceptionSection() {
  return (
    <Section className="py-12 lg:py-[104px]" background={<PatternBackground />} innerClassName="flex flex-col gap-7 lg:gap-8">
      <Reveal>
        <SectionHeading eyebrow={exceptionData.eyebrow} title={exceptionData.title} description={exceptionData.description} />
      </Reveal>

      <Reveal delay={0.05} className="hidden w-full lg:block">
        <div className="w-full overflow-x-auto rounded-[12px] border border-[#d8cedd] bg-white">
          <div className="flex min-w-[1100px] flex-col">
            <div className="flex w-full items-start border-b border-[#d8cedd] bg-[#f7f3ed] p-4 text-[12px] font-bold leading-[normal] text-[#18141b]">
              {cols.map((col) => (
                <span key={col.label} className={clsx("shrink-0", col.width)}>
                  {col.label}
                </span>
              ))}
            </div>
            {exceptionData.rows.map((row, idx) => (
              <div
                key={row.reason}
                className={clsx(
                  "flex w-full items-center p-4 text-[13px] leading-[normal]",
                  idx < exceptionData.rows.length - 1 && "border-b border-[#d8cedd]"
                )}
              >
                <span className={clsx("shrink-0 font-semibold text-[#18141b]", cols[0].width)}>{row.reason}</span>
                <span className={clsx("shrink-0 font-normal text-[#535055]", cols[1].width)}>{row.obligation}</span>
                <span className={clsx("shrink-0 font-normal text-[#535055]", cols[2].width)}>{row.entity}</span>
                <span className={clsx("shrink-0 font-normal text-[#535055]", cols[3].width)}>{row.authority}</span>
                <span className={clsx("shrink-0 font-semibold text-[#18141b]", cols[4].width)}>{row.due}</span>
                <span className={clsx("flex shrink-0 items-start overflow-hidden", cols[5].width)}>
                  <Pill tone={row.status.tone} className="rounded-[4px]">
                    {row.status.label}
                  </Pill>
                </span>
                <span className="min-w-0 flex-1 font-mono text-[11px] font-normal text-[#665f69]">{row.ref}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="flex w-full flex-col gap-3 lg:hidden">
        {exceptionData.rows.map((row) => (
          <Reveal key={row.reason}>
            <div className="flex w-full flex-col items-start gap-[10px] rounded-[12px] border border-[#d8cedd] bg-[#fffafa] p-4 leading-[normal]">
              <div className="flex w-full items-start justify-between gap-2 font-semibold whitespace-nowrap">
                <span className="text-[14px] text-[#18141b]">{row.reason}</span>
                <span className="text-[12px] text-[#d65a2c]">{row.due}</span>
              </div>
              <div className="flex w-full flex-col items-start gap-[2px] font-normal">
                <span className="text-[11px] text-[#665f69]">{exceptionData.mobileLabels.obligation}</span>
                <span className="text-[13px] text-[#535055]">{row.obligation}</span>
              </div>
              <div className="flex w-full flex-col items-start gap-[2px] font-normal">
                <span className="text-[11px] text-[#665f69]">{exceptionData.mobileLabels.entityAuthority}</span>
                <span className="text-[13px] text-[#535055]">
                  {row.entity} • {row.authority}
                </span>
              </div>
              <Pill tone={row.status.tone} className="rounded-[100px]">
                {row.status.label}
              </Pill>
              <span className="font-mono text-[11px] font-normal text-[#665f69]">{row.ref}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

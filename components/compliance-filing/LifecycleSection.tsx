import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { lifecycleHeader, lifecycleStages } from "./compliance-filing-data";

/** Figma 233:9667 (desktop, transparent on #faf3ff) / 233:10592 (mobile, #f5f6fa vertical stepper). */
export default function LifecycleSection() {
  return (
    <SectionContainer className="bg-[#f5f6fa] lg:bg-transparent" innerClassName="flex flex-col gap-8 lg:gap-10">
      <Reveal>
        <SectionHeader
          eyebrow={lifecycleHeader.eyebrow}
          title={lifecycleHeader.title}
          description={lifecycleHeader.description}
          descriptionClassName="lg:leading-[normal]"
        />
      </Reveal>

      {/* Desktop: wrapped row of 134px stage cards */}
      <div className="hidden flex-wrap items-start gap-3 lg:flex">
        {lifecycleStages.map((s, idx) => (
          <Reveal key={s.stage} delay={0.04 * idx}>
            <div className="flex w-[134px] flex-col items-start gap-2 rounded-[12px] border border-[#d8cedd] bg-white p-4 whitespace-nowrap">
              <span className="font-jetbrains text-[11px] font-bold leading-[normal] text-[#bf6735]">{s.stage}</span>
              <h3 className="font-sora text-[15px] font-bold leading-[normal] text-[#18141b]">{s.title}</h3>
              <p className="font-manrope text-[11px] font-normal uppercase leading-[normal] text-[#665f69]">{s.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Mobile: vertical stepper */}
      <ol className="flex w-full flex-col pl-2 lg:hidden">
        {lifecycleStages.map((s, idx) => {
          const last = idx === lifecycleStages.length - 1;
          return (
            <li key={s.stage} className="flex w-full items-start gap-4">
              <div className="flex w-6 shrink-0 flex-col items-center self-stretch">
                <span className="size-[14px] shrink-0 rounded-[99px] border-2 border-[#bf6735] bg-white" />
                {!last && <span className="h-[44px] w-[2px] bg-[#d8cedd]" />}
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-start gap-1 pb-5 whitespace-nowrap">
                <span className="font-jetbrains text-[10px] font-bold leading-[normal] text-[#bf6735]">{s.stage}</span>
                <h3 className="font-sora text-[15px] font-bold leading-[normal] text-[#18141b]">{s.title}</h3>
                <p className="font-manrope text-[11px] font-normal uppercase leading-[normal] text-[#665f69]">{s.detail}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </SectionContainer>
  );
}

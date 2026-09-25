import React from "react";
import { Section, SectionHeading, PatternBackground, Reveal } from "./shared";
import { proofSystem } from "./regulatory-obligations-data";

/**
 * Figma 233:11634 (desktop) / 233:12661 (mobile): diamond line-art pattern background,
 * three representative-interface specimen cards (row → stack; mobile uses shorter titles).
 */
export default function ProofSystemSection() {
  return (
    <Section className="py-12 lg:py-[104px]" background={<PatternBackground />} innerClassName="flex flex-col gap-7 lg:gap-10">
      <Reveal>
        <SectionHeading eyebrow={proofSystem.eyebrow} title={proofSystem.title} description={proofSystem.description} />
      </Reveal>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
        {proofSystem.frames.map((frame, idx) => (
          <Reveal key={frame.meta} delay={0.05 * idx} className="h-full">
            <div className="flex h-full flex-col items-start gap-3 rounded-[12px] border border-[#d8cedd] bg-[#fffafa] p-4 lg:gap-4 lg:rounded-[16px] lg:bg-white lg:p-6 lg:drop-shadow-[0px_8px_8px_rgba(0,0,0,0.04)]">
              <div className="flex w-full items-start justify-between gap-2 font-mono text-[10px] font-normal leading-[normal] whitespace-nowrap lg:text-[11px]">
                <span className="text-[#d65a2c] lg:uppercase">{proofSystem.label}</span>
                <span className="text-[#665f69]">{frame.meta}</span>
              </div>
              <h3 className="text-[16px] font-bold leading-[normal] text-[#18141b] lg:text-[18px]">
                <span className="lg:hidden">{frame.titleMobile}</span>
                <span className="hidden lg:inline">{frame.title}</span>
              </h3>
              <p className="text-[12px] font-normal leading-[1.4] text-[#535055] lg:text-[13px] lg:leading-[1.5]">{frame.desc}</p>
              <div className="mt-auto flex h-[60px] w-full items-center justify-center rounded-[8px] bg-[#faf3ff] lg:h-20">
                <span className="font-mono text-[10px] font-normal leading-[normal] text-[#665f69] lg:text-[11px]">
                  <span className="lg:hidden">{proofSystem.placeholderMobile}</span>
                  <span className="hidden lg:inline">{proofSystem.placeholder}</span>
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

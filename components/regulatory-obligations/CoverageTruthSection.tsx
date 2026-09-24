import React from "react";
import { Section, SectionHeading, PatternBackground, PrimaryButton, Pill, Reveal } from "./shared";
import { coverageTruth } from "./regulatory-obligations-data";

/**
 * Figma 233:12052 (desktop) / 233:13069 (mobile): diamond line-art pattern background.
 * Desktop status chips are outline-only 16×8 / 12px in a row; mobile chips are tinted 10×4 / 11px, stacked.
 */
export default function CoverageTruthSection() {
  return (
    <Section id="coverage" className="py-12 lg:py-[104px]" background={<PatternBackground />} innerClassName="flex flex-col gap-7 lg:gap-10">
      <Reveal>
        <SectionHeading eyebrow={coverageTruth.eyebrow} title={coverageTruth.title} description={coverageTruth.description} />
      </Reveal>

      <Reveal delay={0.05}>
        <ul className="flex w-full flex-col items-start gap-2 lg:flex-row lg:flex-wrap lg:gap-3">
          {coverageTruth.statuses.map((status) => (
            <li key={status.label}>
              <Pill tone={status.tone} className="rounded-[100px] lg:bg-transparent lg:px-4 lg:py-2 lg:text-[12px]">
                {status.label}
              </Pill>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex w-full flex-col items-stretch lg:items-start">
          <PrimaryButton href={coverageTruth.cta.href}>{coverageTruth.cta.label}</PrimaryButton>
        </div>
      </Reveal>
    </Section>
  );
}

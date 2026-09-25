import React from "react";
import Image from "next/image";
import { Section, SectionHeading, Reveal } from "./shared";
import { taxInterlock } from "./regulatory-obligations-data";

/**
 * Figma 233:11963 (desktop, flat #faf3ff, no background image): numbered steps + 520×320 schema
 * mockup image. Figma 233:12988 (mobile, on page #faf3ff): stacked, schema full-width at 220px tall.
 */
export default function TaxInterlockSection() {
  return (
    <Section className="bg-[#faf3ff] py-12 lg:py-[104px]" innerClassName="flex flex-col gap-7 lg:gap-10">
      <Reveal>
        <SectionHeading eyebrow={taxInterlock.eyebrow} title={taxInterlock.title} description={taxInterlock.description} />
      </Reveal>

      <div className="flex w-full flex-col items-stretch gap-7 lg:flex-row lg:items-center lg:gap-6">
        <Reveal delay={0.05} className="w-full lg:min-w-0 lg:flex-1">
          <ol className="flex w-full flex-col items-start gap-4 leading-[normal] lg:gap-5">
            {taxInterlock.steps.map((step) => (
              <li key={step.number} className="flex w-full items-center gap-3">
                <span className="shrink-0 font-mono text-[12px] font-bold text-[#d65a2c]">{step.number}</span>
                <span className="min-w-0 flex-1 text-[13px] font-medium text-[#18141b] lg:text-[14px]">{step.text}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1} className="w-full lg:w-[520px] lg:shrink-0">
          <div className="relative h-[220px] w-full overflow-hidden rounded-[12px] lg:h-[320px] lg:rounded-[16px]">
            <Image src={taxInterlock.schemaImage} alt={taxInterlock.schemaAlt} fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

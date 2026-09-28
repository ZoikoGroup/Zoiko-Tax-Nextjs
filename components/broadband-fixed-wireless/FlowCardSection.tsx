import React from "react";
import { SectionContainer, SectionHeader, Badge, Reveal } from "./shared";
import type { BadgeTone } from "./broadband-data";

/**
 * Header followed by one wide mono-type card with a status badge. Shared by
 * the Determination and Evidence sections.
 */
export default function FlowCardSection({
  data,
  text,
  badge,
  tone = "success",
  bgImage,
  textClassName = "text-base",
}: {
  data: { eyebrow: string; title: string; description: string };
  text: string;
  badge: string;
  tone?: BadgeTone;
  bgImage: string;
  textClassName?: string;
}) {
  return (
    <SectionContainer className="bg-white" bgImage={bgImage}>
      <Reveal>
        <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className={`font-mono text-[#18141B] ${textClassName}`}>{text}</p>
          <Badge label={badge} tone={tone} className="self-start sm:self-auto" />
        </div>
      </Reveal>
    </SectionContainer>
  );
}

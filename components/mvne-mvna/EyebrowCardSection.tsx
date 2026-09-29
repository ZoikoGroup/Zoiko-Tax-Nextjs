import React from "react";
import { SectionContainer, SectionHeader, EyebrowCardGrid, Reveal } from "./shared";
import type { EyebrowCard } from "./mvne-mvna-data";

/**
 * Header + row of eyebrow cards. Shared by the Realities, Responsibility,
 * Compliance and Shadow sections, which differ only in content, surface and
 * column count.
 */
export default function EyebrowCardSection({
  data,
  gridClassName,
  className,
  bgImage,
}: {
  data: { title: string; description?: string; cards: EyebrowCard[] };
  gridClassName: string;
  className?: string;
  bgImage?: string;
}) {
  return (
    <SectionContainer className={className} bgImage={bgImage}>
      <Reveal>
        <SectionHeader title={data.title} description={data.description} />
      </Reveal>
      <EyebrowCardGrid cards={data.cards} gridClassName={gridClassName} />
    </SectionContainer>
  );
}

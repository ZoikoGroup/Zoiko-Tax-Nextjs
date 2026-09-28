import React from "react";
import { SectionContainer, SectionHeader, CardGrid, Reveal } from "./shared";
import type { TitledCard } from "./ucaas-data";

/**
 * Header + row of cards. Shared by Challenges, Responsibility, Obligations,
 * Evidence and Integrations, which differ only in content, surface and columns.
 */
export default function CardGridSection({
  data,
  gridClassName,
  className,
  bgImage,
  dark = false,
}: {
  data: { eyebrow: string; title: string; cards: TitledCard[] };
  gridClassName: string;
  className: string;
  bgImage?: string;
  dark?: boolean;
}) {
  return (
    <SectionContainer className={className} bgImage={bgImage}>
      <Reveal>
        <SectionHeader eyebrow={data.eyebrow} title={data.title} dark={dark} />
      </Reveal>
      <CardGrid cards={data.cards} gridClassName={gridClassName} dark={dark} />
    </SectionContainer>
  );
}

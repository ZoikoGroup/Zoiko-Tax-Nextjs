import React from "react";
import { SectionContainer, SectionHeader, SectionAction, CardGrid, Reveal } from "./shared";
import type { Action, TitledCard } from "./mvno-data";

/**
 * Header + row of title/description cards + optional "Explore" link. Shared by
 * the Complexity, Compliance, Evidence, Shadow, Architecture and Outcomes
 * sections, which differ only in content, surface and column count.
 */
export default function CardGridSection({
  data,
  gridClassName,
  cardClassName,
  className,
  bgImage,
  bgOpacity,
  dark = false,
  tinted = false,
}: {
  data: { eyebrow: string; title: string; description?: string; cards: TitledCard[]; action?: Action };
  gridClassName: string;
  cardClassName?: string;
  className?: string;
  bgImage?: string;
  bgOpacity?: string;
  dark?: boolean;
  tinted?: boolean;
}) {
  return (
    <SectionContainer className={className} bgImage={bgImage} bgOpacity={bgOpacity}>
      <Reveal>
        <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} dark={dark} />
      </Reveal>
      <CardGrid
        cards={data.cards}
        gridClassName={gridClassName}
        cardClassName={cardClassName}
        dark={dark}
        tinted={tinted}
      />
      {data.action && (
        <Reveal delay={0.1}>
          <SectionAction action={data.action} />
        </Reveal>
      )}
    </SectionContainer>
  );
}

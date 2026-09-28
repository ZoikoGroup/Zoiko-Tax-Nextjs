import React from "react";
import { SectionContainer, SectionHeader, CardGrid, Reveal } from "./shared";
import type { SectionIntro, TitledCard } from "./voice-data";

/** Header + card row. Most sections on this page are this shape with a different surface. */
export default function CardGridSection({
  data,
  className,
  bgImage,
  bgOpacity,
  dark = false,
  ...grid
}: {
  data: SectionIntro & { cards: TitledCard[] };
  className: string;
  bgImage?: string;
  bgOpacity?: string;
  dark?: boolean;
} & Omit<React.ComponentProps<typeof CardGrid>, "cards">) {
  return (
    <SectionContainer className={className} bgImage={bgImage} bgOpacity={bgOpacity}>
      <Reveal>
        <SectionHeader data={data} dark={dark} />
      </Reveal>
      <CardGrid cards={data.cards} {...grid} />
    </SectionContainer>
  );
}

export const pad = (n: number) => String(n + 1).padStart(2, "0");

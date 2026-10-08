import React from "react";
import { SectionContainer, SectionHeader, CardGrid, Reveal } from "./shared";
import type { Card, SectionIntro } from "./tech-data";

/** Header + card row + optional footnote. Most sections on this page are this shape. */
export default function CardGridSection({
  data,
  className,
  bgImage,
  note,
  ...grid
}: {
  data: SectionIntro & { cards: Card[] };
  className: string;
  bgImage?: string;
  note?: string;
} & Omit<React.ComponentProps<typeof CardGrid>, "cards">) {
  return (
    <SectionContainer className={className} bgImage={bgImage}>
      <Reveal>
        <SectionHeader data={data} dark={grid.dark} />
      </Reveal>
      <CardGrid cards={data.cards} {...grid} />
      {note && (
        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs text-[#D8CEDD]">{note}</p>
        </Reveal>
      )}
    </SectionContainer>
  );
}

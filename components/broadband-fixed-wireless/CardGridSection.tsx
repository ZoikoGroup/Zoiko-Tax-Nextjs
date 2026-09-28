import React from "react";
import clsx from "clsx";
import { SectionContainer, SectionHeader, Card, Reveal, StaggerGroup, StaggerItem } from "./shared";
import type { TitledCard } from "./broadband-data";

/**
 * Header + row of simple title/description cards. Shared by the Legal Entity,
 * Exemptions and Shadow Assurance sections, which differ only in content,
 * background and column count.
 */
export default function CardGridSection({
  data,
  className,
  bgImage,
  gridClassName,
  compact = false,
}: {
  data: { eyebrow: string; title: string; description?: string; cards: TitledCard[] };
  className?: string;
  bgImage?: string;
  gridClassName: string;
  compact?: boolean;
}) {
  return (
    <SectionContainer className={className} bgImage={bgImage}>
      <Reveal>
        <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />
      </Reveal>
      <StaggerGroup className={clsx("mt-8 grid grid-cols-1 gap-4 sm:gap-6", gridClassName)}>
        {data.cards.map((card) => (
          <StaggerItem key={card.title}>
            <Card className="flex flex-col gap-3 p-6">
              <h3 className={clsx("font-bold text-[#18141B]", compact ? "text-base" : "text-lg")}>{card.title}</h3>
              <p className={clsx("text-[#665F69]", compact ? "text-xs leading-5" : "text-sm leading-5")}>
                {card.description}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}

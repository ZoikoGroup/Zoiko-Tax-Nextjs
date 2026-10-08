"use client";

import React from "react";
import clsx from "clsx";
import { BG, PUBLIC_CONTROLLED_DATA } from "./developer-overview-data";
import { ICONS, Reveal, SectionContainer, SectionHeader } from "./shared";

export default function PublicControlledSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{ backgroundImage: `url('${BG.publicControlled}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={PUBLIC_CONTROLLED_DATA.eyebrow} title={PUBLIC_CONTROLLED_DATA.title} />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {PUBLIC_CONTROLLED_DATA.cards.map((card, idx) => {
            const Icon = ICONS[card.icon];
            const isPublic = card.variant === "public";
            return (
              <Reveal key={card.title} delay={0.04 * idx} className="h-full">
                <div
                  className={clsx(
                    "h-full rounded-3xl p-6 sm:p-8 flex flex-col gap-4",
                    isPublic ? "bg-[#F1E8F8]" : "bg-[#FFFAF8] border border-[#D8CEDD]"
                  )}
                >
                  <Icon className="h-6 w-6 text-[#D65A2C]" strokeWidth={1.7} aria-hidden="true" />
                  <h3 className={clsx("text-2xl font-bold", isPublic ? "text-[#301153]" : "text-[#18141B]")}>{card.title}</h3>
                  <p className="text-base leading-6 text-[#665F69]">{card.description}</p>
                  <p className="mt-auto text-sm text-[#18141B]">{card.items}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="text-sm leading-5 text-[#665F69]">{PUBLIC_CONTROLLED_DATA.footnote}</p>
      </div>
    </SectionContainer>
  );
}

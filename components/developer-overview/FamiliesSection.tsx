"use client";

import React from "react";
import clsx from "clsx";
import { ArrowLeftRight } from "lucide-react";
import { FAMILIES_DATA } from "./developer-overview-data";
import { IconTile, Reveal, SectionContainer, SectionHeader } from "./shared";

export default function FamiliesSection() {
  const { architecture } = FAMILIES_DATA;

  return (
    <SectionContainer className="bg-[#FAF5FF]">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader eyebrow={FAMILIES_DATA.eyebrow} title={FAMILIES_DATA.title} description={FAMILIES_DATA.description} />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FAMILIES_DATA.cards.map((card, idx) => (
            <Reveal key={card.title} delay={0.03 * idx} className="h-full">
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-7 shadow-[0px_4px_18px_0px_rgba(48,17,83,0.04)] flex flex-col gap-4">
                <IconTile icon={card.icon} />
                <h3 className="text-xl sm:text-2xl font-bold leading-7 text-[#18141B]">{card.title}</h3>
                <p className="text-base leading-6 text-[#665F69]">{card.description}</p>
                <div className="mt-auto pt-3.5 border-t border-[#D8CEDD] flex flex-col gap-1.5">
                  <span className="text-xs font-bold uppercase text-[#301153]">{FAMILIES_DATA.boundaryLabel}</span>
                  <p className="text-sm leading-5 text-[#665F69]">{card.boundary}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.06}>
          <figure className="w-full rounded-3xl bg-[#301153] p-6 sm:p-8 flex flex-col gap-6">
            <div className="flex flex-col-reverse sm:flex-row sm:items-start sm:justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">{architecture.title}</h3>
              <span className="text-xs uppercase text-[#D9D0DF]">{architecture.tag}</span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-5">
              {architecture.nodes.map((node, idx) => (
                <React.Fragment key={node.title}>
                  <div
                    className={clsx(
                      "flex-1 rounded-2xl border border-[#6B5B7B] p-5 sm:p-6 flex flex-col gap-3",
                      node.highlight ? "bg-[#5B2F86]" : "bg-[#200A38]"
                    )}
                  >
                    <p className="text-lg sm:text-xl font-bold text-white">{node.title}</p>
                    <p className="text-sm leading-5 text-[#D9D0DF]">{node.items}</p>
                    <p className="text-xs font-semibold text-[#F4A261]">{node.owner}</p>
                  </div>
                  {idx < architecture.nodes.length - 1 && (
                    <ArrowLeftRight
                      className="h-6 w-6 shrink-0 self-center text-[#F4A261] rotate-90 lg:rotate-0"
                      strokeWidth={1.4}
                      aria-hidden="true"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>

            <figcaption className="text-sm leading-5 text-[#D9D0DF]">{architecture.note}</figcaption>
          </figure>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

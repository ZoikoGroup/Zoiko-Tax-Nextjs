"use client";

import React from "react";
import Image from "next/image";
import { RELATIONSHIP_TAXONOMY_DATA } from "./partnerships-data";
import { SectionContainer, EyebrowTag, SectionHeading, SectionDescription, Reveal } from "./shared";

export default function RelationshipTaxonomySection() {
  return (
    <SectionContainer id="relationship-taxonomy" className="py-[90px] bg-[#FAFAFC] overflow-hidden">
      {/* Background Diamond Lattice Pattern */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-40" aria-hidden="true">
        <picture>
          <source srcSet="/partnerships/pattern-grid-bg.webp" type="image/webp" />
          <Image
            src="/partnerships/pattern-grid-bg.png"
            alt=""
            fill
            className="object-cover"
          />
        </picture>
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className="max-w-[720px] mb-12 sm:mb-16">
          <Reveal delay={0.05}>
            <EyebrowTag>{RELATIONSHIP_TAXONOMY_DATA.eyebrow}</EyebrowTag>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading>{RELATIONSHIP_TAXONOMY_DATA.title}</SectionHeading>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionDescription>
              {RELATIONSHIP_TAXONOMY_DATA.description}
            </SectionDescription>
          </Reveal>
        </div>

        {/* 3 Large Taxonomy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {RELATIONSHIP_TAXONOMY_DATA.cards.map((card, idx) => (
            <Reveal key={idx} delay={0.1 * (idx + 1)}>
              <div className="flex flex-col justify-between h-full bg-white border border-[#E7E0F1] rounded-[18px] p-6 sm:p-7 shadow-sm transition-all duration-200 hover:shadow-md hover:border-[#D9743E]">
                <div>
                  {/* Icon Box */}
                  <div className="w-[46px] h-[46px] rounded-[13px] bg-[#EFEAFC] flex items-center justify-center mb-5">
                    <Image
                      src={`/partnerships/${card.iconName}`}
                      alt=""
                      width={24}
                      height={24}
                      className="w-6 h-6 text-[#5A3CC6]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[18.88px] font-extrabold text-[#1D1526] leading-snug mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] leading-[22px] text-[#5C5468] mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Never Inferred & Exclusions */}
                <div className="pt-4 border-t border-[#F4F0F8]">
                  <p className="text-[11px] font-bold text-[#8A8198] uppercase tracking-wider mb-3">
                    {card.inferredTag}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {card.exclusions.map((item, exIdx) => (
                      <span
                        key={exIdx}
                        className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#5C5468] bg-[#F4F0F8] border border-[#E7E0F1] px-3 py-1.5 rounded-full"
                      >
                        <span className="text-[#C0392B] font-bold text-[10px]">✕</span>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

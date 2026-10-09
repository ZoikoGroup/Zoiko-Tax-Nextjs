"use client";

import React from "react";
import Link from "next/link";
import { Layers, Check, ArrowUpRight } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { productBoundariesData } from "./types";

export default function ProductBoundariesSection() {
  const { definitionCard, boundaries, boundariesEyebrow } = productBoundariesData;

  return (
    <SectionContainer
      id="product-boundaries"
      className="bg-[#FAF3FF] border-b border-[#D8CEDD]"
    >
      <div className="space-y-12 sm:space-y-16">
        <Reveal>
          <SectionHeader
            eyebrow={productBoundariesData.eyebrow}
            title={productBoundariesData.headline}
            description={productBoundariesData.subhead}
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left card: Fiscal control definition */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="rounded-[26px] bg-[#301153] p-7 sm:p-9 text-white shadow-xl border border-[#4E2A6E] space-y-6 sm:space-y-7">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-[#F4A261]">
                  <Layers className="w-8 h-8 stroke-[1.8]" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-[32px] font-normal leading-[1.15] text-white">
                    {definitionCard.title}
                  </h3>
                  <p className="text-sm sm:text-[17px] font-normal leading-[1.55] text-[#D9D0DF]">
                    {definitionCard.description}
                  </p>
                </div>

                {/* Attributes checklist */}
                <div className="space-y-3.5 pt-2">
                  {definitionCard.attributes.map((attr, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#F4A261]/20 flex items-center justify-center text-[#F4A261] shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-[15px] sm:text-[17px] font-normal text-white">
                        {attr}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Disclaimer note */}
                <p className="text-xs sm:text-[14px] font-normal leading-[1.55] text-[#D9D0DF]/80 pt-2 border-t border-white/10">
                  {definitionCard.disclaimer}
                </p>

                {/* Link */}
                <div className="pt-2">
                  <Link
                    href={definitionCard.linkHref}
                    className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#F4A261] hover:text-[#f8b884] transition-colors group"
                  >
                    <span className="group-hover:underline underline-offset-4">
                      {definitionCard.linkText}
                    </span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right side: Six boundaries */}
          <div className="lg:col-span-7 space-y-2">
            <Reveal delay={0.1}>
              <div className="pb-3">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.08em] text-[#A64B25]">
                  {boundariesEyebrow}
                </span>
              </div>
            </Reveal>

            <div className="divide-y divide-[#D8CEDD]">
              {boundaries.map((item, idx) => (
                <Reveal key={item.id} delay={0.06 * idx}>
                  <div className="py-5 sm:py-6 space-y-1.5 first:pt-2">
                    <h4 className="text-lg sm:text-[21px] font-normal leading-[1.3] text-[#18141B]">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base font-normal leading-[1.55] text-[#665F69]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

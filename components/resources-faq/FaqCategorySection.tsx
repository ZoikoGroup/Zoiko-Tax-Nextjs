"use client";

import React from "react";
import { FileText, Minus, ArrowUpRight } from "lucide-react";
import type { FaqCategory } from "./resources-faq-data";
import { SectionContainer, Reveal } from "./shared";

export default function FaqCategorySection({ category }: { category: FaqCategory }) {
  const isLight = category.bg === "lavender";

  return (
    <SectionContainer className={isLight ? "bg-[#F4EBF9] relative" : "bg-white relative"} id={category.id}>
      {!isLight && (
        <div
          className="absolute inset-0 pointer-events-none select-none"
          style={{
            backgroundImage: "url(/resources-faq/pattern-bg.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative flex flex-col lg:flex-row gap-10 lg:gap-14">
        <Reveal className="w-full lg:w-[280px] shrink-0">
          <div className="lg:sticky lg:top-24 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#D65A2C]">{category.sidebarEyebrow}</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#18141B]">{category.title}</h2>
            <p className="text-base leading-[1.6] text-[#665F69]">{category.summary}</p>
            <p className="text-sm font-medium text-[#301153]">{category.countLabel}</p>

            {category.conventionNote && (
              <div className="rounded-xl bg-white border border-[#D8CEDD] p-4 flex items-start gap-2.5">
                <FileText className="h-4 w-4 shrink-0 text-[#665F69] mt-0.5" aria-hidden="true" />
                <p className="text-xs leading-[1.6] text-[#665F69]">{category.conventionNote}</p>
              </div>
            )}

            <div className="flex flex-col gap-1.5 pt-1">
              <a href="#faq-search" className="text-sm font-semibold text-[#BF6735] hover:underline">
                Back to categories ↗
              </a>
              <span className="text-xs text-[#665F69]">#faq-search</span>
            </div>
          </div>
        </Reveal>

        <div className="flex-1 min-w-0 flex flex-col gap-5">
          {category.items.map((item, i) => (
            <Reveal key={item.slug} delay={0.03 * i}>
              <div
                className={
                  i === 0 && category.id === "platform"
                    ? "rounded-2xl border border-[#BF6735] bg-white p-6 flex flex-col gap-3.5"
                    : "rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3.5"
                }
              >
                {i === 0 && category.id === "platform" && (
                  <span className="text-xs font-bold text-[#D65A2C]">
                    EXPANDED ANSWER · LEAD + QUALIFICATION + SOURCE
                  </span>
                )}

                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl sm:text-[22px] font-semibold text-[#18141B]">{item.question}</h3>
                  <Minus className="h-5 w-5 shrink-0 text-[#18141B] mt-1" aria-hidden="true" />
                </div>

                <p className="text-base font-medium text-[#18141B]">{item.lead}</p>
                <p className="text-base leading-[1.6] text-[#665F69]">{item.qualification}</p>

                <div className="flex flex-col gap-1 pt-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-[#BF6735]">{item.sourceLabel}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#BF6735]" aria-hidden="true" />
                  </div>
                  {item.sourcePath && <span className="text-xs text-[#665F69]">{item.sourcePath}</span>}
                  {item.sourceNote && <span className="text-xs text-[#665F69]">{item.sourceNote}</span>}
                </div>

                <p className="text-xs text-[#665F69]">
                  {item.slug} · Copy link
                </p>

                <p className="text-xs text-[#665F69] pt-2 border-t border-[#EFE7F3]">
                  Source required · Illustrative owner: {item.owner} · Review date not supplied
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

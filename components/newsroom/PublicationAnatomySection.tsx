"use client";

import React from "react";
import { PUBLICATION_ANATOMY_DATA } from "./newsroom-data";
import { Reveal } from "./shared";

export default function PublicationAnatomySection() {
  const { cardAnatomy, registry, detailAnatomy } = PUBLICATION_ANATOMY_DATA;

  return (
    <section className="w-full bg-[#FAF3FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {PUBLICATION_ANATOMY_DATA.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.12] tracking-tight text-[#18141B]">
              {PUBLICATION_ANATOMY_DATA.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#605C66] max-w-4xl leading-relaxed mt-1">
              {PUBLICATION_ANATOMY_DATA.description}
            </p>
          </Reveal>
        </div>

        {/* Top Pair of Anatomy Cards */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Card: Card Anatomy Specimen */}
          <div className="lg:col-span-5">
            <Reveal className="h-full">
              <div className="h-full rounded-2xl border border-[#E9E2EE] bg-white p-6 sm:p-7 shadow-[0_2px_10px_rgba(40,10,60,0.02)] flex flex-col justify-between">
                <div>
                  <div className="h-36 sm:h-44 rounded-xl bg-[#F3ECF7] border border-[#E5DFEA] flex items-center justify-center p-4 text-center">
                    <span className="text-xs font-semibold text-[#5B2A86] max-w-[220px]">
                      {cardAnatomy.imagePlaceholder}
                    </span>
                  </div>

                  <div className="mt-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#F3ECF7] text-[#4A154B]">
                      {cardAnatomy.badge}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C25E30] block mt-3.5">
                    {cardAnatomy.tag}
                  </span>

                  <h3 className="text-lg font-bold text-[#18141B] mt-1">
                    {cardAnatomy.headline}
                  </h3>

                  <p className="text-xs text-[#605C66] mt-2 leading-relaxed">
                    {cardAnatomy.summary}
                  </p>

                  <span className="text-[11px] text-[#7A7582] block mt-3">
                    {cardAnatomy.dates}
                  </span>
                </div>

                <div className="mt-5 pt-4 border-t border-[#F0EAF4]">
                  <span className="text-xs font-bold text-[#18141B] block">
                    {cardAnatomy.actionTitle}
                  </span>
                  <span className="text-[11px] text-[#7A7582] block mt-0.5 leading-normal">
                    {cardAnatomy.actionNote}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Card: The Underlying Registry */}
          <div className="lg:col-span-7">
            <Reveal delay={0.08} className="h-full">
              <div className="h-full rounded-2xl border border-[#E9E2EE] bg-white p-6 sm:p-8 shadow-[0_2px_10px_rgba(40,10,60,0.02)] flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#18141B]">
                    {registry.title}
                  </h3>
                  <p className="text-xs text-[#7A7582] mt-0.5">
                    {registry.subtitle}
                  </p>

                  {/* Key-Value Table */}
                  <div className="mt-5 border-t border-[#F0EAF4]">
                    {registry.rows.map((row, i) => (
                      <div
                        key={i}
                        className="border-b border-[#F0EAF4] py-2.5 sm:py-3 flex flex-col sm:flex-row sm:items-center text-xs sm:text-[13px] gap-1 sm:gap-4"
                      >
                        <span className="font-bold text-[#18141B] sm:w-40 shrink-0">
                          {row.key}
                        </span>
                        <span className="text-[#605C66] flex-1">
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Badges */}
                <div className="mt-6 pt-4 border-t border-[#F0EAF4]">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C25E30] block">
                    {registry.statusTag}
                  </span>
                  <div className="mt-2.5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    {registry.statuses.map((st, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#F3ECF7] text-[#4A154B] border border-[#E5DAEB]"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] text-[#7A7582] block mt-2.5 leading-relaxed">
                    {registry.statusNote}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Bottom Card: Detail Article Anatomy */}
        <Reveal delay={0.14}>
          <div className="mt-6 sm:mt-8 rounded-2xl border border-[#E9E2EE] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_2px_10px_rgba(40,10,60,0.02)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Outline List */}
              <div className="lg:col-span-4 flex flex-col gap-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#5B2A86]">
                  {detailAnatomy.tag}
                </span>

                <div className="mt-1">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-[#F3ECF7] text-[#4A154B]">
                    {detailAnatomy.badge}
                  </span>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                  {detailAnatomy.outline.map((item, i) => (
                    <span
                      key={i}
                      className={
                        i === 0
                          ? "text-xs font-bold text-[#18141B]"
                          : "text-xs text-[#605C66] pl-2 border-l-2 border-[#E5DFEA]"
                      }
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <span className="text-[11px] text-[#7A7582] mt-4 leading-normal">
                  {detailAnatomy.outlineNote}
                </span>
              </div>

              {/* Right Column: Article Specimen */}
              <div className="lg:col-span-8 flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C25E30]">
                  {detailAnatomy.articleTag}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] mt-1">
                  {detailAnatomy.articleTitle}
                </h3>

                <span className="text-[11px] text-[#7A7582] mt-1.5 block">
                  {detailAnatomy.meta}
                </span>

                <div className="mt-5 flex flex-col gap-4">
                  {detailAnatomy.sections.map((sec, i) => (
                    <div key={i}>
                      <h4 className="text-xs sm:text-[13px] font-bold text-[#18141B]">
                        {sec.title}
                      </h4>
                      <p className="text-xs text-[#605C66] mt-1 leading-relaxed">
                        {sec.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Media Banner at bottom */}
                <div className="mt-6 rounded-xl bg-[#F7F2FA] border border-[#EADBEE] p-3.5 sm:p-4">
                  <h5 className="text-xs font-bold text-[#301153]">
                    {detailAnatomy.mediaBanner.title}
                  </h5>
                  <p className="text-[11px] text-[#605C66] mt-0.5 leading-normal">
                    {detailAnatomy.mediaBanner.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

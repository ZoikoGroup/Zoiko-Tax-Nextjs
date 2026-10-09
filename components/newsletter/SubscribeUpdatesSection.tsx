"use client";

import React from "react";
import { SUBSCRIBE_UPDATES_DATA } from "./newsletter-data";
import { Reveal } from "./shared";

export default function SubscribeUpdatesSection() {
  const { eyebrow, title, description, relationshipCard, audienceSection } =
    SUBSCRIBE_UPDATES_DATA;

  return (
    <section className="w-full bg-[#FAF3FF] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col gap-2.5">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#BF6735]">
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.04}>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold leading-[1.15] tracking-tight text-[#18141B]">
              {title}
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs sm:text-sm md:text-base text-[#605C66] max-w-3xl leading-relaxed mt-1">
              {description}
            </p>
          </Reveal>
        </div>

        {/* Two-Column Layout */}
        <div className="mt-10 sm:mt-12 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          {/* Left Column: Commercial Relationship Card */}
          <div className="w-full lg:w-[42%] shrink-0">
            <Reveal delay={0.1}>
              <div className="h-full bg-[#240A42] text-white rounded-3xl p-7 sm:p-9 flex flex-col justify-between shadow-md">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                    {relationshipCard.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#D8CEE4] leading-relaxed mt-4">
                    {relationshipCard.description}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <p className="text-xs sm:text-[12.5px] text-[#F39A62] leading-relaxed">
                    {relationshipCard.highlightText}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Audiences Across the Ecosystem */}
          <div className="flex-1 flex flex-col justify-center">
            <Reveal delay={0.14}>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#18141B] tracking-tight mb-3">
                {audienceSection.title}
              </h3>

              <div className="flex flex-col border-t border-[#EADBEE]">
                {audienceSection.audiences.map((aud, idx) => (
                  <div
                    key={idx}
                    className="border-b border-[#EADBEE] py-4 sm:py-5 flex flex-col gap-1"
                  >
                    <h4 className="text-sm font-semibold text-[#18141B]">
                      {aud.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#605C66] leading-relaxed">
                      {aud.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

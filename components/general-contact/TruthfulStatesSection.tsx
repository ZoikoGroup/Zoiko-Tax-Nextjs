"use client";

import React from "react";
import Image from "next/image";
import { GENERAL_CONTACT_TRUTHFUL_STATES_DATA } from "./general-contact-data";
import { EyebrowTag, SectionHeading, SectionDescription, Reveal } from "./shared";

export default function TruthfulStatesSection() {
  const { eyebrow, heading, description, bgImage, states } =
    GENERAL_CONTACT_TRUTHFUL_STATES_DATA;

  return (
    <section className="relative w-full overflow-hidden bg-[#271740] py-16 sm:py-20 lg:py-[84px] text-white">
      {/* Background Graphic from Figma */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none" aria-hidden="true">
        <Image
          src={bgImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-screen"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[120px]">
        {/* Section Header */}
        <div className="max-w-[700px] mb-10 sm:mb-12">
          <Reveal>
            <EyebrowTag light>{eyebrow}</EyebrowTag>
          </Reveal>
          <Reveal delay={0.06}>
            <SectionHeading light>{heading}</SectionHeading>
          </Reveal>
          <Reveal delay={0.12}>
            <SectionDescription light>{description}</SectionDescription>
          </Reveal>
        </div>

        {/* 6 State Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {states.map((st, i) => (
            <Reveal key={st.key} delay={0.06 * (i + 1)}>
              <div className="rounded-2xl bg-white/[0.055] border border-white/[0.12] p-5 sm:p-6 backdrop-blur-sm flex flex-col justify-between h-full transition-all duration-200 hover:bg-white/[0.08] hover:border-white/[0.25]">
                <div>
                  {/* Status Indicator Row */}
                  <div className="flex items-center gap-2.5 mb-3">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: st.dotColor }}
                      aria-hidden="true"
                    />
                    <span className="text-[12px] font-bold text-white tracking-wide">
                      {st.name}
                    </span>
                  </div>

                  {/* State Title */}
                  <h3 className="text-[14.5px] font-medium text-white leading-[1.4] mb-2">
                    {st.title}
                  </h3>

                  {/* State Description */}
                  {st.description && (
                    <p className="text-[12.5px] text-[#B6A8CF] leading-[1.5]">
                      {st.description}
                    </p>
                  )}
                </div>

                {/* Visual Indicators for Default and Submitting */}
                {st.key === "default" && (
                  <div className="mt-4 space-y-2 pt-2">
                    <div className="h-2.5 w-full rounded bg-white/15" />
                    <div className="h-2.5 w-3/5 rounded bg-white/15" />
                  </div>
                )}

                {st.key === "submitting" && (
                  <div className="mt-4 pt-2">
                    <div className="h-1 w-full rounded-full bg-white/20 overflow-hidden">
                      <div className="h-full w-2/3 rounded-full bg-[#F0B98A] animate-pulse" />
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

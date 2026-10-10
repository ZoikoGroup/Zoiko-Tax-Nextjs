"use client";

import React from "react";
import Image from "next/image";
import { PanelTop, Share2, Fingerprint, Eye, ArrowRight } from "lucide-react";
import { VISITOR_CHOICE_DATA as V, ACCESSIBLE_NAV_DATA as A } from "./social-media-data";
import { SectionContainer, Reveal } from "./shared";

const ICONS = [PanelTop, Share2, Fingerprint, Eye];

export default function VisitorChoiceSection() {
  return (
    <>
      <SectionContainer className="bg-[#FAF3FF]">
        <Reveal>
          <div className="flex flex-col gap-4 mb-10">
            <span className="text-sm font-bold uppercase text-[#D65A2C]">{V.eyebrow}</span>
            <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{V.title}</h2>
            <p className="text-lg sm:text-[20px] leading-[1.5] text-[#665F69]">{V.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {V.policies.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.label} delay={0.03 * i}>
                <div className="relative h-full rounded-2xl border-[2.5px] border-white overflow-hidden p-8 flex flex-col gap-4">
                  <div className="absolute inset-0" aria-hidden="true">
                    <Image src="/social-media/policy-card-bg.png" alt="" fill className="object-cover" />
                    <div className="absolute inset-0 bg-white/65" />
                  </div>
                  <div className="relative flex flex-col gap-4">
                    <Icon className="h-7 w-7 text-[#D65A2C]" aria-hidden="true" />
                    <span className="text-xs font-bold text-[#D65A2C]">{p.label}</span>
                    <h3 className="text-2xl sm:text-[32px] font-bold leading-[1.12] text-[#18141B]">{p.title}</h3>
                    <p className="text-base leading-[1.6] text-[#665F69]">{p.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionContainer>

      <section className="relative w-full overflow-hidden bg-[#301153]">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/social-media/accessible-nav-bg.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-[rgba(48,17,83,0.8)]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-[80px] py-14 sm:py-18 lg:py-[104px] flex flex-col lg:flex-row gap-10 lg:gap-16">
          <Reveal className="flex-1 min-w-0">
            <div className="flex flex-col gap-5">
              <span className="text-sm font-bold uppercase text-[#F4A261]">{A.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-white">{A.title}</h2>
              <p className="text-base leading-[1.6] text-[#D9D0DF]">{A.description}</p>
            </div>
          </Reveal>

          <Reveal delay={0.04} className="w-full lg:w-[440px] shrink-0">
            <div className="rounded-2xl bg-[rgba(57,39,90,0.96)] border border-white/[0.13] p-7 flex flex-col gap-5">
              <span className="text-[15px] font-semibold text-white">{A.example.label}</span>
              <span className="inline-flex w-fit items-center gap-2.5 rounded-full border-2 border-[#301153] bg-white px-[22px] h-12 text-sm font-semibold text-[#18141B]">
                {A.example.action}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-[13px] leading-[1.6] text-[#D9D0DF]">{A.example.note}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

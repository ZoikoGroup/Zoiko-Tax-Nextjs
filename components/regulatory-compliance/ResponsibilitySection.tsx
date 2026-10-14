"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { RESPONSIBILITY_DATA as R } from "./regulatory-compliance-data";
import { SectionContainer, Reveal, ScopeDisclosure, ReferenceTable, PrimaryButton } from "./shared";

export default function ResponsibilitySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-10">
        <Reveal className="flex-1">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-sm font-bold uppercase text-[#D65A2C]">{R.eyebrow}</span>
              <h2 className="text-2xl sm:text-3xl md:text-[44px] font-bold leading-[1.08] text-[#18141B]">{R.title}</h2>
              <p className="text-lg sm:text-[20px] leading-[1.55] text-[#665F69]">{R.description}</p>
            </div>
            <ScopeDisclosure>{R.disclosure}</ScopeDisclosure>
          </div>
        </Reveal>

        <Reveal className="w-full lg:w-[400px] shrink-0" delay={0.06}>
          <div className="flex flex-col gap-3">
            <div className="relative h-[292px] w-full rounded-2xl overflow-hidden">
              <Image src="/regulatory-compliance/responsibility-photo.png" alt="" fill className="object-cover" />
            </div>
            <p className="text-[13px] leading-[1.55] text-[#665F69]">{R.photoCaption}</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <ReferenceTable columns={R.tableColumns} rows={R.tableRows} />
      </Reveal>

      <Reveal delay={0.14}>
        <div className="flex items-center justify-between gap-4 flex-wrap mt-8">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold text-[#18141B]">{R.destination.title}</span>
            <span className="text-[13px] text-[#665F69]">{R.destination.note}</span>
          </div>
          <PrimaryButton>
            <span className="inline-flex items-center gap-2">
              {R.action.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </PrimaryButton>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

"use client";

import React from "react";
import {
  Calculator,
  MapPin,
  FileCheck,
  ListChecks,
  ClipboardList,
  FileText,
  ArrowLeftRight,
  Layers,
} from "lucide-react";
import { IMPACT_TAXONOMY_DATA as I } from "./regulatory-change-data";
import { SectionContainer, Reveal } from "./shared";

const ICONS = [Calculator, MapPin, FileCheck, ListChecks, ClipboardList, FileText, ArrowLeftRight, Layers];

export default function ImpactTaxonomySection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-4 mb-10">
          <span className="text-xs font-bold text-[#B65326]">{I.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[42px] font-bold leading-[1.15] text-[#18141B]">{I.title}</h2>
          <p className="text-base sm:text-lg leading-[1.5] text-[#665F69] max-w-[1040px]">{I.description}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {I.categories.map((cat, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={cat.title} delay={0.02 * i}>
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-white p-6 flex flex-col gap-3.5">
                <Icon className="h-7 w-7 text-[#301153]" aria-hidden="true" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#18141B]">{cat.title}</h3>
                <p className="text-sm leading-[1.6] text-[#665F69]">{cat.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="rounded-[26px] bg-[#301153] p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
          <div className="flex-1 flex flex-col gap-2.5">
            <span className="text-xs font-bold text-[#F4A261]">{I.coverageDistinction.label}</span>
            <p className="text-base leading-[1.6] text-[#D9D0DF]">{I.coverageDistinction.description}</p>
          </div>
          <span className="text-[15px] font-semibold text-white whitespace-nowrap">{I.coverageDistinction.cta}</span>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

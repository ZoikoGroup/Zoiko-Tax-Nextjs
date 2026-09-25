"use client";

import React from "react";
import clsx from "clsx";
import { CLASSIFICATION_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function ClassificationSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader eyebrow={CLASSIFICATION_DATA.eyebrow} title={CLASSIFICATION_DATA.title} />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 rounded-2xl border border-[#D8CEDD] bg-white p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="text-[18px] font-bold text-[#18141B]">{CLASSIFICATION_DATA.proposalId}</span>
            <span className="inline-flex items-center rounded-full border border-[#D8CEDD] bg-white px-3.5 py-1 text-xs font-semibold text-[#D65A2C]">
              {CLASSIFICATION_DATA.flag}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {CLASSIFICATION_DATA.fields.map((field, i) => (
              <div key={field.label}>
                <span className="text-xs font-normal text-[#665F69]">{field.label}</span>
                <p
                  className={clsx(
                    "mt-1.5 text-base font-semibold",
                    i === CLASSIFICATION_DATA.fields.length - 1 ? "text-[#26735B]" : "text-[#18141B]"
                  )}
                >
                  {field.value}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-[1.5] text-[#665F69]">{CLASSIFICATION_DATA.conflictContext}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <PrimaryButton>{CLASSIFICATION_DATA.actions[0]}</PrimaryButton>
            <SecondaryButton>{CLASSIFICATION_DATA.actions[1]}</SecondaryButton>
            <SecondaryButton>{CLASSIFICATION_DATA.actions[2]}</SecondaryButton>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

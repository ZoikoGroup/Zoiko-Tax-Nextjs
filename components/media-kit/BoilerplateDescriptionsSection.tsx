"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal, StatusPill, UnavailableButton, AuthorityNotice } from "./shared";
import { boilerplateOptionsData } from "./types";

export default function BoilerplateDescriptionsSection() {
  return (
    <SectionContainer id="boilerplate-descriptions" className="border-b border-[#D8CEDD]">
      <Reveal>
        <SectionHeader
          eyebrow="Boilerplate / descriptions"
          title="Use approved wording. Do not fill the gaps."
          description="Short, medium and long company descriptions each need their own approved source and current version."
        />
      </Reveal>

      {/* 3 Boilerplate Option Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boilerplateOptionsData.map((opt, idx) => (
          <Reveal key={opt.id} delay={0.05 * idx}>
            <div className="h-full rounded-2xl bg-white border border-[#D8CEDD] p-7 sm:p-8 flex flex-col justify-between space-y-5 hover:border-[#BF6735] hover:shadow-xs transition-all duration-200">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-[#18141B] font-['Inter',sans-serif]">
                  {opt.title}
                </h3>
                <p className="text-sm font-semibold text-[#301153]">
                  {opt.subtitle}
                </p>
                <StatusPill text={opt.status} />
                <p className="text-sm sm:text-base leading-[1.6] text-[#665F69] pt-1">
                  {opt.description}
                </p>
              </div>

              <div className="pt-2">
                <UnavailableButton icon="copy" label="Copy unavailable" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Authority Notice */}
      <Reveal delay={0.2}>
        <AuthorityNotice
          title="Resource description is not company boilerplate"
          description="The page-role wording in the introduction describes this Media Kit resource. It is not an approved description of ZoikoTax and must not be copied as official company boilerplate."
        />
      </Reveal>
    </SectionContainer>
  );
}

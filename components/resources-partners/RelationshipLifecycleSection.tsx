"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { relationshipLifecycleData } from "./types";

export default function RelationshipLifecycleSection() {
  const { states, governance, rightsRestraint } = relationshipLifecycleData;

  return (
    <SectionContainer className="bg-[#FAF3FF] border-b border-[#D8CEDD]">
      <Reveal>
        <div className="space-y-10 sm:space-y-12">
          {/* Section Heading */}
          <SectionHeader
            eyebrow={relationshipLifecycleData.eyebrow}
            title={relationshipLifecycleData.title}
            description={relationshipLifecycleData.introduction}
          />

          {/* Lifecycle State Flow (6 Cards) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {states.map((st, idx) => (
              <div
                key={idx}
                className="rounded-[16px] border border-[#D8CEDD] bg-white p-5 flex flex-col justify-start gap-3.5 shadow-2xs hover:border-[#BF6735] transition-colors"
              >
                <h4 className="text-[18px] font-bold text-[#301153] leading-snug">
                  {st.name}
                </h4>
                <p className="text-[14px] font-normal text-[#665F69] leading-[1.55]">
                  {st.meaning}
                </p>
              </div>
            ))}
          </div>

          {/* Governance Boundaries (2 Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Publication Governance (Dark Card) */}
            <div className="rounded-[26px] bg-[#301153] p-8 text-white shadow-md flex flex-col justify-start space-y-[18px]">
              <h3 className="text-2xl sm:text-[26px] font-bold text-white leading-tight">
                {governance.title}
              </h3>
              <p className="text-[16px] font-normal text-[#D9D0DF] leading-[1.55]">
                {governance.description}
              </p>
              <p className="text-[14px] font-normal text-[#D9D0DF] leading-[1.55]">
                {governance.releaseRequirement}
              </p>
            </div>

            {/* Rights and Data Restraint (White Card) */}
            <div className="rounded-[26px] border border-[#D8CEDD] bg-white p-8 shadow-2xs flex flex-col justify-start space-y-[18px]">
              <h3 className="text-2xl sm:text-[26px] font-bold text-[#18141B] leading-tight">
                {rightsRestraint.title}
              </h3>
              <p className="text-[16px] font-normal text-[#665F69] leading-[1.55]">
                {rightsRestraint.rule}
              </p>
              <p className="text-[14px] font-normal text-[#665F69] leading-[1.55]">
                {rightsRestraint.measurement}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}


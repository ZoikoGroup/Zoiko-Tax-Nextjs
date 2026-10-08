"use client";

import React from "react";
import { Network, Workflow, Layers, ShieldCheck } from "lucide-react";
import { SectionContainer, SectionHeader, ScopeNotice, Reveal } from "./shared";
import { relationshipTypesData } from "./types";

export default function RelationshipTypesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "network":
        return <Network className="w-6 h-6 text-[#301153]" />;
      case "workflow":
        return <Workflow className="w-6 h-6 text-[#301153]" />;
      case "layers":
      default:
        return <Layers className="w-6 h-6 text-[#301153]" />;
    }
  };

  return (
    <SectionContainer id="relationship-types" className="bg-[#FAF3FF] border-b border-[#D8CEDD]">
      <Reveal>
        <div className="space-y-12">
          {/* Section Heading */}
          <SectionHeader
            eyebrow={relationshipTypesData.eyebrow}
            title={relationshipTypesData.title}
            description={relationshipTypesData.introduction}
          />

          {/* 3 Relationship Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {relationshipTypesData.categories.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#E0D5E6] bg-white p-6 sm:p-7 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-200"
              >
                <div className="space-y-4">
                  {/* Role Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#F4EDF8] flex items-center justify-center border border-[#DFD3E7]">
                    {getIcon(cat.iconName)}
                  </div>

                  {/* Title & Definition */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                      {cat.name}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#18141B]">
                      {cat.definition}
                    </h3>
                  </div>

                  {/* Explanation */}
                  <p className="text-sm sm:text-[15px] font-normal leading-relaxed text-[#665F69]">
                    {cat.explanation}
                  </p>
                </div>

                {/* Verification Guidance */}
                <div className="pt-6 mt-6 border-t border-[#F0EAF4]">
                  <p className="text-xs sm:text-[13px] font-semibold text-[#301153] flex items-start gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#301153] mt-1.5 shrink-0" />
                    <span>{cat.verificationGuidance}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Authority Distinctions */}
          <div className="rounded-2xl border border-[#DFD3E7] bg-[#F4EDF8] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D65A2C]" />
              <h4 className="text-sm sm:text-base font-bold text-[#18141B]">
                Authority Distinctions & Boundaries
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relationshipTypesData.authorities.map((item, idx) => (
                <div key={idx} className="space-y-1.5 border-l-2 border-[#D65A2C]/40 pl-4">
                  <h5 className="text-sm sm:text-[15px] font-bold text-[#18141B]">
                    {item.term}
                  </h5>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-[#665F69]">
                    {item.limitation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Scope Notice */}
          <ScopeNotice
            title={relationshipTypesData.notice.title}
            explanation={relationshipTypesData.notice.explanation}
          />
        </div>
      </Reveal>
    </SectionContainer>
  );
}

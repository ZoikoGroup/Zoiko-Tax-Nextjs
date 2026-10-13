"use client";

import React from "react";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";

const specialCards = [
  {
    title: "Nonprofit & Public Sector",
    status: "No public program information is currently established",
    body: "Eligibility, benefits and an application process require an approved active program source. Nonprofit or public-sector status does not establish an automatic discount or government-specific terms.",
    footnote: "Ask whether an approved current source applies before relying on a program.",
  },
  {
    title: "Telecom Ecosystem",
    status: "No public program information is currently established",
    body: "OEM, reseller and implementation commercial context applies only where an agreement exists. No partner rights, commissions or revenue share are established. Partners and Developers govern their respective context.",
    footnote: "Ask whether an approved current source applies before relying on a program.",
  },
  {
    title: "Legacy & Migration",
    status: "Migration scope requires confirmation.",
    body: "Migration and coexistence require scoped commercial and technical review. No automatic credits, waived fees, free parallel runs or guaranteed timeline are established. Fair transition can include downscope as well as expansion.",
    footnote: "Clarify transition responsibilities and terms before making a commitment.",
  },
  {
    title: "Pricing for Startups",
    status: "No public program information is currently established",
    body: "No approved startup program is established. Funding or revenue thresholds, credits, free plans, discounts, accelerator affiliation and program duration must not be assumed.",
    footnote: "Ask whether an approved current source applies before relying on a program.",
  },
];

export default function SpecialProgramsSection() {
  return (
    <SectionContainer id="special-programs" className="bg-[#FAF3FF]">
      <Reveal>
        <SectionHeader
          eyebrow="Special contexts"
          title="A different context is not an automatic benefit."
          description="Special-program and migration labels explain what needs confirmation. They do not announce active programs, eligibility or partner rights."
          className="mb-10"
        />
      </Reveal>

      <StaggerGroup className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {specialCards.map((card) => (
          <StaggerItem key={card.title}>
            <div className="flex h-full flex-col justify-between rounded-[20px] border border-[#D8CEDD] bg-white p-7 sm:p-8 shadow-sm transition-all hover:border-[#BF6735]/40 hover:shadow-md">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-[#18141B]">
                  {card.title}
                </h3>
                <p className="text-sm font-medium text-[#D65A2C]">
                  {card.status}
                </p>
                <p className="text-base sm:text-[17px] font-normal leading-[1.55] text-[#665F69]">
                  {card.body}
                </p>
              </div>

              <div className="mt-6 border-t border-[#D8CEDD]/60 pt-4">
                <p className="text-sm font-normal text-[#665F69]">
                  {card.footnote}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionContainer>
  );
}

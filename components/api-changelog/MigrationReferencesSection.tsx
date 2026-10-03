"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { MIGRATION_REFERENCES_DATA } from "./api-changelog-data";
import { SectionContainer, PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function MigrationReferencesSection() {
  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <Reveal>
        <div className="flex flex-col gap-3.5 mb-6">
          <span className="text-xs font-bold text-[#D65A2C]">{MIGRATION_REFERENCES_DATA.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.12] text-[#18141B]">
            {MIGRATION_REFERENCES_DATA.title}
          </h2>
          <p className="text-base leading-[1.6] text-[#665F69]">{MIGRATION_REFERENCES_DATA.description}</p>
        </div>
      </Reveal>

      <div className="flex flex-col">
        {MIGRATION_REFERENCES_DATA.routes.map((route, i) => (
          <Reveal key={route.title} delay={0.03 * i}>
            <div className={"flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 py-5" + (i > 0 ? " border-t border-[#D8CEDD]" : "")}>
              <p className="text-base font-semibold text-[#18141B] sm:w-[250px] shrink-0">{route.title}</p>
              <p className="flex-1 text-[15px] leading-[1.5] text-[#665F69]">{route.description}</p>
              <span className="text-sm font-semibold text-[#D65A2C] sm:w-[220px] shrink-0">{route.action}</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-3">
          {MIGRATION_REFERENCES_DATA.actions.map((action) =>
            action.variant === "primary" ? (
              <PrimaryButton key={action.label} href={action.href}>
                <span className="inline-flex items-center gap-2">
                  {action.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </PrimaryButton>
            ) : (
              <SecondaryButton key={action.label} href={action.href}>
                <span className="inline-flex items-center gap-2">
                  {action.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </SecondaryButton>
            )
          )}
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <p className="mt-6 text-sm leading-[1.6] text-[#665F69]">{MIGRATION_REFERENCES_DATA.footnote}</p>
      </Reveal>
    </SectionContainer>
  );
}

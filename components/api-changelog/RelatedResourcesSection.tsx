"use client";

import React from "react";
import { BookOpen, Braces, Package, Webhook, Layers, Route, FlaskConical, ArrowUpRight } from "lucide-react";
import { RELATED_RESOURCES_DATA } from "./api-changelog-data";
import { SectionContainer, SecondaryButton, Reveal } from "./shared";

const ICONS = { book: BookOpen, braces: Braces, package: Package, webhook: Webhook, layers: Layers, route: Route };

export default function RelatedResourcesSection() {
  return (
    <SectionContainer className="bg-white">
      <Reveal>
        <div className="flex flex-col gap-3.5 mb-6">
          <span className="text-xs font-bold text-[#D65A2C]">{RELATED_RESOURCES_DATA.eyebrow}</span>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold leading-[1.12] text-[#18141B]">
            {RELATED_RESOURCES_DATA.title}
          </h2>
          <p className="text-base leading-[1.6] text-[#665F69]">{RELATED_RESOURCES_DATA.description}</p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {RELATED_RESOURCES_DATA.resources.map((resource, i) => {
          const Icon = ICONS[resource.icon];
          return (
            <Reveal key={resource.title} delay={0.03 * i}>
              <div className="h-full rounded-2xl border border-[#D8CEDD] bg-[#FAF3FF] p-6 flex flex-col gap-3.5">
                <Icon className="h-6 w-6 text-[#D65A2C]" aria-hidden="true" />
                <h3 className="text-base font-semibold text-[#18141B]">{resource.title}</h3>
                <p className="text-sm leading-[1.6] text-[#665F69]">{resource.description}</p>
                <span className="text-sm font-semibold text-[#D65A2C]">{resource.action}</span>
                <span className="text-xs text-[#665F69]">{resource.path}</span>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-6 rounded-2xl bg-[#F2EAF8] p-6 flex flex-col sm:flex-row sm:items-center gap-5">
          <FlaskConical className="h-[26px] w-[26px] shrink-0 text-[#301153]" aria-hidden="true" />
          <div className="flex-1 flex flex-col gap-1.5">
            <h3 className="text-base font-semibold text-[#18141B]">{RELATED_RESOURCES_DATA.sandbox.title}</h3>
            <p className="text-sm leading-[1.6] text-[#665F69]">{RELATED_RESOURCES_DATA.sandbox.description}</p>
          </div>
          <SecondaryButton href={RELATED_RESOURCES_DATA.sandbox.path}>
            <span className="inline-flex items-center gap-2">
              {RELATED_RESOURCES_DATA.sandbox.action}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </SecondaryButton>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

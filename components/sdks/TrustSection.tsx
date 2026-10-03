"use client";

import React from "react";
import { Shield } from "lucide-react";
import { BG, TRUST_DATA } from "./sdks-data";
import { SectionContainer, SectionHeader, Reveal, TextLink, ICONS } from "./shared";

export default function TrustSection() {
  return (
    <SectionContainer
      className="bg-[#25024D]"
      style={{ backgroundImage: `url('${BG.trust}')`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="flex flex-col gap-8">
        <Reveal>
          <SectionHeader dark eyebrow={TRUST_DATA.eyebrow} title={TRUST_DATA.title} description={TRUST_DATA.description} />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {TRUST_DATA.cards.map((card, idx) => {
            const Icon = ICONS[card.icon];
            return (
              <Reveal key={card.title} delay={0.05 * idx} className="h-full">
                <div className="h-full rounded-2xl border border-[#705186] bg-[#1C0B2E]/85 p-6 flex flex-col gap-4">
                  <Icon className="h-7 w-7 text-[#F4A261]" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="text-xl font-semibold leading-7 text-white">{card.title}</h3>
                  <p className="text-base leading-6 text-[#D9D0DF]">{card.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex-1 flex items-center gap-3">
              <Shield className="h-6 w-6 shrink-0 text-[#F4A261]" strokeWidth={1.5} aria-hidden="true" />
              <p className="text-sm text-[#D9D0DF]">{TRUST_DATA.footnote}</p>
            </div>
            <div className="flex gap-10 md:gap-40">
              {TRUST_DATA.links.map((l) => (
                <TextLink key={l.label} dark href={l.href}>
                  {l.label}
                </TextLink>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}

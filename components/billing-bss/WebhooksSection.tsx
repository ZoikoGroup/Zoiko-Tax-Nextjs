"use client";

import React from "react";
import { WEBHOOKS_DATA } from "./billing-bss-data";
import { SectionContainer, SectionHeader, SequenceStage, DocRef, AuthorityNotice, Reveal } from "./shared";

export default function WebhooksSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/billing-bss/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={WEBHOOKS_DATA.eyebrow}
          title={WEBHOOKS_DATA.title}
          description={WEBHOOKS_DATA.description}
        />
      </Reveal>

      <div className="mt-8 flex flex-col sm:flex-row gap-2.5">
        {WEBHOOKS_DATA.stages.map((stage, i) => (
          <Reveal key={stage.step} delay={0.04 * i} className="flex-1">
            <SequenceStage
              step={stage.step}
              title={stage.title}
              description={stage.description}
              showArrow={i < WEBHOOKS_DATA.stages.length - 1}
            />
          </Reveal>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-3">
            <p className="text-[15px] font-bold text-[#301153]">{WEBHOOKS_DATA.textEquivalentTitle}</p>
            <p className="text-base leading-[1.55] text-[#665F69]">{WEBHOOKS_DATA.textEquivalent}</p>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="flex flex-col gap-2">
            <DocRef label={WEBHOOKS_DATA.reference.label} path={WEBHOOKS_DATA.reference.path} />
            <p className="text-sm leading-[1.55] text-[#665F69]">{WEBHOOKS_DATA.reference.description}</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.18} className="w-full mt-8">
        <AuthorityNotice title={WEBHOOKS_DATA.notice.title} description={WEBHOOKS_DATA.notice.description} />
      </Reveal>
    </SectionContainer>
  );
}

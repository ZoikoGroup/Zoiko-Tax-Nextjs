"use client";

import React from "react";
import { Square } from "lucide-react";
import { SANDBOX_DATA } from "./billing-bss-data";
import { SectionContainer, SectionHeader, DocRef, AuthorityNotice, Reveal } from "./shared";

export default function SandboxSection() {
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
          eyebrow={SANDBOX_DATA.eyebrow}
          title={SANDBOX_DATA.title}
          description={SANDBOX_DATA.description}
        />
      </Reveal>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[560px_1fr] gap-8">
        <Reveal delay={0.06}>
          <div className="rounded-[26px] bg-[#F1E8F8] p-7 sm:p-8 flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-[#301153]">{SANDBOX_DATA.checklist.title}</h3>
            <p className="text-[13px] text-[#665F69]">{SANDBOX_DATA.checklist.subtitle}</p>
            <div className="flex flex-col gap-3.5">
              {SANDBOX_DATA.checklist.items.map((item) => (
                <div key={item} className="flex items-start gap-3.5">
                  <Square className="h-[18px] w-[18px] shrink-0 text-[#301153] mt-0.5" aria-hidden="true" />
                  <p className="text-[15px] leading-[1.55] text-[#665F69]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col">
            {SANDBOX_DATA.testRefs.map((ref, i) => (
              <div key={ref.label} className={"flex flex-col gap-1.5 pb-3.5" + (i > 0 ? " border-t border-[#D8CEDD] pt-3.5" : "")}>
                <DocRef label={ref.label} path={ref.path} />
                <p className="text-sm leading-[1.55] text-[#665F69]">{ref.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.16} className="w-full mt-8">
        <AuthorityNotice title={SANDBOX_DATA.notice.title} description={SANDBOX_DATA.notice.description} />
      </Reveal>
    </SectionContainer>
  );
}

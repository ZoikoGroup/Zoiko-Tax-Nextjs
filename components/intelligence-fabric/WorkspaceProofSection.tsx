"use client";

import React from "react";
import clsx from "clsx";
import { WORKSPACE_PROOF_DATA } from "./intelligence-fabric-data";
import { SectionContainer, SectionHeader, PrimaryButton, SecondaryButton, Reveal } from "./shared";

export default function WorkspaceProofSection() {
  return (
    <SectionContainer
      className="bg-[#FAF8FA]"
      style={{
        backgroundImage: "url('/intelligence-fabric/pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Reveal>
        <SectionHeader
          eyebrow={WORKSPACE_PROOF_DATA.eyebrow}
          title={WORKSPACE_PROOF_DATA.title}
          description={WORKSPACE_PROOF_DATA.description}
        />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 rounded-2xl border border-[#D8CEDD] bg-white p-5 sm:p-6 space-y-5">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-base font-bold text-[#18141B]">{WORKSPACE_PROOF_DATA.queueTitle}</h3>
            <span className="rounded-full bg-[#F7F3ED] px-3 py-1 text-xs text-[#D65A2C]">
              {WORKSPACE_PROOF_DATA.modeBadge}
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {WORKSPACE_PROOF_DATA.tabs.map((tab) => (
              <span
                key={tab.label}
                className={clsx(
                  "rounded-lg px-4 py-2 text-[13px] font-semibold whitespace-nowrap",
                  tab.active ? "bg-[#301153] text-white" : "bg-[#FAF8FA] text-[#18141B]"
                )}
              >
                {tab.label}
              </span>
            ))}
          </div>

          <div className="rounded-lg bg-[#D8CEDD] p-px">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-lg bg-white p-4">
              <p className="text-sm font-semibold text-[#18141B]">{WORKSPACE_PROOF_DATA.proposal}</p>
              <div className="flex flex-wrap gap-2.5">
                <PrimaryButton className="!px-5 !py-2.5 !text-[13px]">{WORKSPACE_PROOF_DATA.actions[0]}</PrimaryButton>
                <SecondaryButton className="!px-5 !py-2.5 !text-[13px]">{WORKSPACE_PROOF_DATA.actions[1]}</SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

import React from "react";
import clsx from "clsx";
import { Check, TriangleAlert } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { WORKSPACE_DATA } from "./mvno-data";

export default function WorkspaceSection() {
  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader
          eyebrow={WORKSPACE_DATA.eyebrow}
          title={WORKSPACE_DATA.title}
          description={WORKSPACE_DATA.description}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 rounded-3xl border border-[#D8CEDD] bg-[#FAFAFA] p-4 sm:p-6">
          <div className="flex flex-col gap-2 border-b border-[#D8CEDD] pb-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="flex items-start gap-2 text-sm font-bold text-[#18141B]">
              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[#26735B]" aria-hidden="true" />
              {WORKSPACE_DATA.tenant}
            </span>
            <span className="text-xs uppercase text-[#665F69]">{WORKSPACE_DATA.version}</span>
          </div>

          <StaggerGroup className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {WORKSPACE_DATA.tiles.map((tile) => (
              <StaggerItem key={tile.label}>
                <div className="flex h-full flex-col gap-1.5 rounded-xl bg-white p-4 transition-shadow hover:shadow-[0_8px_16px_0_rgba(29,3,59,0.06)]">
                  <span className="text-xs uppercase text-[#665F69]">{tile.label}</span>
                  <span className="text-lg font-bold text-[#18141B]">{tile.value}</span>
                  <span
                    className={clsx(
                      "flex items-center gap-1.5 text-sm",
                      tile.ok ? "text-[#26735B]" : "text-[#9A5B12]"
                    )}
                  >
                    {tile.ok ? (
                      <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                    ) : (
                      <TriangleAlert className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
                    )}
                    {tile.status}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

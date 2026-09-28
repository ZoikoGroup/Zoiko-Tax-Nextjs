import React from "react";
import clsx from "clsx";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { IMAGES, WORKSPACE_DATA, type StatusTone } from "./mvne-mvna-data";

const STATUS_TONES: Record<StatusTone, string> = {
  success: "bg-[#ECFDF5] text-[#26735B]",
  warning: "bg-[#FFF7ED] text-[#9A5B12]",
  info: "bg-[#F1F5F9] text-[#1E4FA0]",
};

export default function WorkspaceSection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.workspace}>
      <Reveal>
        <SectionHeader
          eyebrow={WORKSPACE_DATA.eyebrow}
          title={WORKSPACE_DATA.title}
          description={WORKSPACE_DATA.description}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 overflow-hidden rounded-2xl border border-[#D8CEDD] bg-white">
          <div className="flex flex-col gap-3 border-b border-[#D8CEDD] bg-[#F5F3EF] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <span className="break-all text-sm font-bold text-[#18141B] sm:break-normal">{WORKSPACE_DATA.scope}</span>
              <span className="rounded-sm bg-[#26735B] px-2.5 py-1 text-xs uppercase text-white">
                {WORKSPACE_DATA.scopeBadge}
              </span>
            </div>
            <span className="text-xs text-[#665F69]">{WORKSPACE_DATA.summary}</span>
          </div>

          <ul>
            {WORKSPACE_DATA.rows.map((row) => (
              <li
                key={row.brand}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-2 border-b border-[#D8CEDD] p-5 transition-colors last:border-b-0 hover:bg-[#FAF3FF]/60 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.3fr)_8.5rem_minmax(0,1fr)_auto]"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#18141B]">{row.brand}</span>
                  <span className="text-xs text-[#665F69]">{row.entity}</span>
                </div>
                <span
                  className={clsx(
                    "justify-self-end whitespace-nowrap rounded-sm px-2.5 py-1 text-xs font-semibold lg:order-3 lg:justify-self-start",
                    STATUS_TONES[row.tone]
                  )}
                >
                  {row.status}
                </span>
                <span className="text-sm text-[#18141B] lg:order-2">{row.service}</span>
                <span className="text-right text-xs text-[#665F69] lg:order-4 lg:text-left">{row.state}</span>
                <button
                  type="button"
                  className="col-span-2 justify-self-start rounded-sm border border-[#D8CEDD] px-3 py-1.5 text-xs font-semibold text-[#18141B] transition-colors hover:bg-[#F8F3FE] lg:order-5 lg:col-span-1 lg:justify-self-end"
                >
                  {row.action}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

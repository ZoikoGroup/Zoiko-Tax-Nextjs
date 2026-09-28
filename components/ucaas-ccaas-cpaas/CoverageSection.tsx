import React from "react";
import clsx from "clsx";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { COVERAGE_DATA, type BadgeTone } from "./ucaas-data";

const BADGE_TONES: Record<BadgeTone, string> = {
  success: "border-[#26735B] text-[#26735B]",
  neutral: "border-[#5F5862] text-[#5F5862]",
};

export default function CoverageSection() {
  return (
    <SectionContainer id="coverage" className="border-b border-[#D8CEDD] bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader
          eyebrow={COVERAGE_DATA.eyebrow}
          title={COVERAGE_DATA.title}
          description={COVERAGE_DATA.description}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <ul className="mt-8 flex flex-col gap-3 rounded-[20px] border border-[#D8CEDD] bg-white p-4 sm:p-6">
          {COVERAGE_DATA.markets.map((row) => (
            <li
              key={row.market}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-1 rounded-xl border border-[#D8CEDD] bg-[#FDF9F8] p-4 sm:grid-cols-3"
            >
              <span className="text-base font-bold text-[#18141B]">{row.market}</span>
              <span className="order-last col-span-2 text-sm text-[#5F5862] sm:order-none sm:col-span-1 sm:text-center">
                {row.scope}
              </span>
              <span
                className={clsx(
                  "justify-self-end whitespace-nowrap rounded-full border px-3 py-1.5 text-xs font-semibold",
                  BADGE_TONES[row.tone]
                )}
              >
                {row.badge}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </SectionContainer>
  );
}

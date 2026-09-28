import React from "react";
import clsx from "clsx";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { aiBoundary } from "./compliance-filing-data";

function AICard({ title, items, tone }: { title: string; items: string[]; tone: "may" | "mayNot" }) {
  const icon = tone === "may" ? "/compliance-filing/icon-check-green.svg" : "/compliance-filing/icon-alert-orange.svg";
  return (
    <div className="flex flex-col items-start gap-3 rounded-[12px] border border-[#d8cedd] bg-white p-5 lg:gap-4 lg:rounded-[16px] lg:p-8">
      <h3
        className={clsx(
          "font-sora text-[15px] font-bold leading-[normal] whitespace-nowrap lg:text-[18px]",
          tone === "may" ? "text-[#26735b]" : "text-[#bf6735]"
        )}
      >
        {title}
      </h3>
      <ul className="flex w-full flex-col gap-3 lg:gap-4">
        {items.map((item) => (
          <li key={item} className="flex w-full items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={icon} alt="" aria-hidden className="size-3 shrink-0" />
            <span className="min-w-px flex-1 font-manrope text-[13px] font-normal leading-[normal] text-[#18141b] lg:flex-none lg:whitespace-nowrap">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Figma 233:10020 (desktop, transparent on #faf3ff) / 233:11008 (mobile, white). No image. */
export default function AIBoundarySection() {
  return (
    <SectionContainer className="bg-white lg:bg-transparent" innerClassName="flex flex-col gap-8 lg:gap-10">
      <Reveal>
        <SectionHeader
          eyebrow={aiBoundary.eyebrow}
          title={aiBoundary.title}
          mobileTitle={aiBoundary.mobileTitle}
          description={aiBoundary.description}
          descriptionClassName="leading-[normal] lg:leading-[normal]"
        />
      </Reveal>
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-6">
        <Reveal delay={0.05}>
          <AICard title={aiBoundary.may.title} items={aiBoundary.may.items} tone="may" />
        </Reveal>
        <Reveal delay={0.1}>
          <AICard title={aiBoundary.mayNot.title} items={aiBoundary.mayNot.items} tone="mayNot" />
        </Reveal>
      </div>
    </SectionContainer>
  );
}

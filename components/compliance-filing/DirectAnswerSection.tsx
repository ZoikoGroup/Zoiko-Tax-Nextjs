import React from "react";
import clsx from "clsx";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { boundaryComparison, directAnswer } from "./compliance-filing-data";

function BoundaryCard({
  title,
  items,
  titleColor,
  icon,
}: {
  title: string;
  items: string[];
  titleColor: string;
  icon: string;
}) {
  return (
    <div className="flex w-full flex-col items-start gap-4 rounded-[16px] border border-[#d8cedd] bg-white p-5 lg:p-8">
      <h3 className={clsx("font-sora text-[16px] font-bold leading-[normal] lg:text-[18px]", titleColor)}>{title}</h3>
      <ul className="flex w-full flex-col gap-4">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={icon} alt="" aria-hidden className="size-3 shrink-0" />
            <span className="font-manrope text-[13px] font-normal leading-[normal] text-[#18141b]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Figma 233:9555 (desktop, transparent on page bg #faf3ff) / 233:10492 (mobile, white). */
export default function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-white lg:bg-transparent" innerClassName="flex flex-col gap-8 lg:gap-10">
      <Reveal>
        <SectionHeader eyebrow={directAnswer.eyebrow} title={directAnswer.title} description={directAnswer.description} />
      </Reveal>

      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2 lg:gap-6">
        <Reveal delay={0.05}>
          <BoundaryCard
            title={boundaryComparison.supports.title}
            items={boundaryComparison.supports.items}
            titleColor="text-[#26735b]"
            icon="/compliance-filing/icon-check-green.svg"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <BoundaryCard
            title={boundaryComparison.outOfScope.title}
            items={boundaryComparison.outOfScope.items}
            titleColor="text-[#bf6735]"
            icon="/compliance-filing/icon-alert-orange.svg"
          />
        </Reveal>
      </div>
    </SectionContainer>
  );
}

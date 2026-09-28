import React from "react";
import clsx from "clsx";
import { Section, SectionHeading, Icon, Reveal } from "./shared";
import { directAnswer } from "./regulatory-obligations-data";

function ListCard({
  title,
  items,
  icon,
  titleColor,
  bg,
}: {
  title: string;
  items: string[];
  icon: string;
  titleColor: string;
  bg: string;
}) {
  return (
    <div className={clsx("flex h-full w-full flex-col items-start gap-4 rounded-[12px] border border-[#d8cedd] p-5 lg:gap-5 lg:rounded-[16px] lg:p-8", bg)}>
      <h3 className={clsx("text-[14px] font-bold uppercase leading-[normal] lg:text-[16px]", titleColor)}>{title}</h3>
      <ul className="flex w-full flex-col gap-4 lg:gap-5">
        {items.map((item) => (
          <li key={item} className="flex w-full items-center gap-[10px]">
            <Icon src={icon} className="size-[14px] lg:size-4" />
            <span className="flex-1 text-[13px] font-medium leading-[normal] text-[#18141b] lg:text-[14px]">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Figma 233:11459 (desktop, flat #faf3ff, no image) / 233:12515 (mobile, on page #faf3ff).
 * Mobile Figma vectors for the check/x marks export empty, so the desktop icons are used at 14px.
 */
export default function DirectAnswerSection() {
  return (
    <Section className="bg-[#faf3ff] py-12 lg:py-[104px]" innerClassName="flex flex-col gap-7 lg:gap-10">
      <Reveal>
        <SectionHeading
          eyebrow={directAnswer.eyebrow}
          title={directAnswer.title}
          description={directAnswer.description}
          descriptionLg="lg:text-[18px] lg:leading-[1.5]"
        />
      </Reveal>
      <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-2 lg:gap-6">
        <Reveal delay={0.05}>
          <ListCard
            title={directAnswer.is.title}
            items={directAnswer.is.items}
            icon="/regulatory-obligations/icon-check-green.svg"
            titleColor="text-[#26735b]"
            bg="bg-[#fafbfd]"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <ListCard
            title={directAnswer.isNot.title}
            items={directAnswer.isNot.items}
            icon="/regulatory-obligations/icon-x-red.svg"
            titleColor="text-[#b23b3b]"
            bg="bg-[#fdf9fa]"
          />
        </Reveal>
      </div>
    </Section>
  );
}

import React from "react";
import Image from "next/image";
import { Section, SectionHeading, Reveal } from "./shared";
import { aiBoundary } from "./regulatory-obligations-data";

function BulletCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex h-full w-full flex-col items-start gap-3 rounded-[12px] bg-[rgba(255,255,255,0.1)] p-5 leading-[normal] lg:gap-4 lg:rounded-[16px] lg:p-8">
      <h3 className="font-mono text-[14px] font-bold uppercase text-[#f4a261] lg:text-[16px]">{title}</h3>
      <ul className="flex w-full flex-col items-start gap-3 lg:gap-4">
        {items.map((item) => (
          <li key={item} className="flex w-full items-start gap-[0.6em] text-[13px] font-normal text-[#d9d0df] lg:text-[14px]">
            <span aria-hidden>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Figma 233:12073 (desktop): #100031 fill + analyst photo at 27% opacity, with a 155px
 * rgba(16,0,49,0.98) band fading the bottom. Figma 233:13089 (mobile): rgba(16,0,49,0.93) fill with
 * the same photo at 25% on top.
 */
export default function AIBoundarySection() {
  return (
    <Section
      className="bg-[#100031] py-12 lg:py-[104px]"
      innerClassName="flex flex-col gap-7 lg:gap-10"
      background={
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[rgba(16,0,49,0.93)] lg:hidden" />
          <div className="absolute inset-0 opacity-25 lg:opacity-[0.27]">
            <Image src="/regulatory-obligations/ai-boundary-bg.webp" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-x-0 bottom-0 hidden h-[155px] bg-[rgba(16,0,49,0.98)] lg:block" />
        </div>
      }
    >
      <Reveal>
        <SectionHeading eyebrow={aiBoundary.eyebrow} title={aiBoundary.title} dark />
      </Reveal>
      <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-2 lg:gap-6">
        <Reveal delay={0.05} className="h-full">
          <BulletCard title={aiBoundary.may.title} items={aiBoundary.may.items} />
        </Reveal>
        <Reveal delay={0.1} className="h-full">
          <BulletCard title={aiBoundary.mustNot.title} items={aiBoundary.mustNot.items} />
        </Reveal>
      </div>
    </Section>
  );
}

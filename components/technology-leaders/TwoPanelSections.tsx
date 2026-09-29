import React from "react";
import clsx from "clsx";
import { SectionContainer, SectionHeader, CheckList, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { AI_DATA, DIRECT_ANSWER_DATA, IMAGES } from "./tech-data";

type Panel = { title: string; items: string[] };

function Panels({
  panels,
  dark = false,
  titleClasses,
}: {
  panels: [Panel, Panel];
  dark?: boolean;
  titleClasses: [string, string];
}) {
  return (
    <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
      {panels.map((panel, idx) => (
        <StaggerItem key={panel.title}>
          <div
            className={clsx(
              "flex h-full flex-col gap-4 rounded-2xl border p-6 sm:p-8",
              dark ? "border-white/10 bg-[#1D033B]" : "border-[#D8CEDD]"
            )}
          >
            <h3 className={clsx("text-lg font-bold", titleClasses[idx])}>{panel.title}</h3>
            <CheckList items={panel.items} dark={dark} />
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

export function DirectAnswerSection() {
  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader data={DIRECT_ANSWER_DATA} />
      </Reveal>
      <Panels
        panels={[DIRECT_ANSWER_DATA.is, DIRECT_ANSWER_DATA.isNot]}
        titleClasses={["text-[#26735B]", "text-[#D65A2C]"]}
      />
    </SectionContainer>
  );
}

export function AISection() {
  return (
    <SectionContainer className="bg-[#1D033B]" bgImage={IMAGES.ai}>
      <Reveal>
        <SectionHeader data={AI_DATA} dark />
      </Reveal>
      <Panels panels={[AI_DATA.may, AI_DATA.mayNot]} dark titleClasses={["text-[#F4A261]", "text-[#F4A261]"]} />
    </SectionContainer>
  );
}

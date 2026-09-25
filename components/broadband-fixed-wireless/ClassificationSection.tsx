import React from "react";
import { ArrowRight } from "lucide-react";
import { SectionContainer, SectionHeader, Card, Reveal } from "./shared";
import { CLASSIFICATION_DATA } from "./broadband-data";

export default function ClassificationSection() {
  const { from, to } = CLASSIFICATION_DATA;

  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader
          eyebrow={CLASSIFICATION_DATA.eyebrow}
          title={CLASSIFICATION_DATA.title}
          description={CLASSIFICATION_DATA.description}
        />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col items-stretch gap-4 md:flex-row md:gap-6">
          <Card className="flex flex-1 flex-col gap-4 p-6">
            <h3 className="text-lg font-bold text-[#D65A2C]">{from.title}</h3>
            <p className="text-sm text-[#665F69]">{from.description}</p>
          </Card>
          <div className="flex items-center justify-center md:w-12" aria-hidden="true">
            <ArrowRight className="size-6 rotate-90 text-[#665F69] md:rotate-0" />
          </div>
          <Card className="flex flex-1 flex-col gap-4 p-6">
            <h3 className="text-lg font-bold text-[#26735B]">{to.title}</h3>
            <p className="text-sm text-[#18141B]">{to.description}</p>
          </Card>
        </div>
      </Reveal>
    </SectionContainer>
  );
}

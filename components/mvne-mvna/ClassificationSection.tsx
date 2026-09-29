import React from "react";
import clsx from "clsx";
import { Check, TriangleAlert } from "lucide-react";
import { SectionContainer, SectionHeader, Card, EyebrowCardHead, Reveal, StaggerGroup, StaggerItem } from "./shared";
import { CLASSIFICATION_DATA, IMAGES } from "./mvne-mvna-data";

export default function ClassificationSection() {
  return (
    <SectionContainer className="bg-white" bgImage={IMAGES.classification}>
      <Reveal>
        <SectionHeader title={CLASSIFICATION_DATA.title} description={CLASSIFICATION_DATA.description} />
      </Reveal>
      <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2">
        {CLASSIFICATION_DATA.cards.map((card) => {
          const Icon = card.supported ? Check : TriangleAlert;
          return (
            <StaggerItem key={card.title}>
              <Card className="flex flex-col gap-5 p-6 sm:p-8">
                <EyebrowCardHead eyebrow={card.eyebrow} title={card.title} />
                <ul className="flex flex-col gap-2.5">
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className={clsx(
                        "flex items-start gap-2 text-sm font-semibold",
                        card.supported ? "text-[#26735B]" : "text-[#9A5B12]"
                      )}
                    >
                      <Icon className="mt-0.5 size-4 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </SectionContainer>
  );
}

import {
  NumberedCard,
  Reveal,
  Section,
  SectionIntro,
  StaggerGroup,
  StaggerItem,
  introDescription,
} from "./shared";
import { buildingBlocks } from "./about-data";

export default function BuildingSection() {
  return (
    <Section background="/about-us/pattern-building.webp" className="bg-white">
      <div className="flex flex-col gap-12">
        <Reveal>
          <SectionIntro
            eyebrow="What we are building"
            title="One telecom fiscal control plane."
            description="Telecom taxation does not end when a rate is calculated. ZoikoTax connects every stage of the fiscal lifecycle - from classification to evidence."
            descriptionClassName={introDescription}
          />
        </Reveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {buildingBlocks.map((block, i) => (
            <StaggerItem key={block.title}>
              <NumberedCard
                index={i}
                {...block}
                background="/about-us/card-building-bg.webp"
                className="min-h-48 p-7 outline outline-1 -outline-offset-1 outline-line"
                titleClassName="text-xl font-semibold text-ink"
                descriptionClassName="leading-6 text-neutral-600"
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </Section>
  );
}

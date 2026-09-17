import { NumberedCard, Reveal, Section, SectionIntro, StaggerGroup, StaggerItem } from "./shared";
import { operatingModels } from "./about-data";

export default function OperatingModelsSection() {
  return (
    <Section className="bg-mauve">
      <div className="flex flex-col gap-12">
        <Reveal>
          <SectionIntro
            eyebrow="Operating models"
            title="Adopt ZoikoTax around your architecture - not the other way around."
          />
        </Reveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {operatingModels.map((model, i) => (
            <StaggerItem key={model.title}>
              <NumberedCard
                index={i}
                {...model}
                className="bg-white p-7 shadow-[0_4px_12px_0_rgba(0,0,0,0.04)] outline outline-1 -outline-offset-1 outline-line"
                titleClassName="mt-1 text-xl font-bold text-ink"
                descriptionClassName="leading-[22px] text-ink-muted"
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </Section>
  );
}

import { NumberedCard, Reveal, Section, SectionIntro, StaggerGroup, StaggerItem } from "./shared";
import { lifecycleCapabilities } from "./home-data";

export default function LifecycleCapabilitiesSection() {
  return (
    <Section>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionIntro
            eyebrow="Lifecycle capabilities"
            title="Control the obligation. Keep the proof."
          />
        </Reveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lifecycleCapabilities.map((capability, i) => (
            <StaggerItem key={capability.title}>
              <NumberedCard
                index={i}
                {...capability}
                background="/home/card-lifecycle-bg.webp"
                className="outline outline-1 -outline-offset-1 outline-line"
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </Section>
  );
}

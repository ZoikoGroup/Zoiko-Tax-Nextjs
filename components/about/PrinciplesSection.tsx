import {
  IconCard,
  Reveal,
  Section,
  SectionIntro,
  StaggerGroup,
  StaggerItem,
  introDescription,
} from "./shared";
import { principles } from "./about-data";

export default function PrinciplesSection() {
  return (
    <Section background="/about-us/pattern-principles.webp" className="bg-white">
      <div className="flex flex-col gap-12">
        <Reveal>
          <SectionIntro
            eyebrow="Why this matters"
            title="Purpose & platform principles."
            description="The principles that govern how ZoikoTax is designed, built and operated."
            descriptionClassName={introDescription}
          />
        </Reveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-12">
          {principles.map((principle) => (
            <StaggerItem key={principle.title}>
              <IconCard
                {...principle}
                className="rounded-2xl bg-white p-7 sm:p-8 outline outline-1 -outline-offset-1 outline-zinc-200"
                iconBoxClassName="size-11 rounded-[10px] bg-violet-100/70"
                titleClassName="mt-5 text-lg font-bold text-ink"
                descriptionClassName="mt-2.5 text-sm leading-[22px] text-ink-muted"
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </Section>
  );
}

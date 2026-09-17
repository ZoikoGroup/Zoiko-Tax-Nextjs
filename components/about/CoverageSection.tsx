import {
  IconCard,
  Reveal,
  Section,
  SectionIntro,
  StaggerGroup,
  StaggerItem,
  introDescription,
} from "./shared";
import { coverageStatuses } from "./about-data";

export default function CoverageSection() {
  return (
    <Section id="coverage" background="/about-us/pattern-coverage.webp" className="bg-white">
      <div className="flex flex-col gap-12">
        <Reveal>
          <SectionIntro
            eyebrow="Global Coverage"
            title="Global by design. Explicit about readiness."
            description="Jurisdiction-specific tax, regulatory, filing and e-invoicing capability is activated through governed country and regulatory packs."
            descriptionClassName={introDescription}
          />
        </Reveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {coverageStatuses.map((status) => (
            <StaggerItem key={status.title}>
              <IconCard
                {...status}
                className="rounded-2xl bg-white p-7 xl:min-h-51 outline outline-1 -outline-offset-1 outline-zinc-200"
                iconBoxClassName="size-6"
                iconClassName="size-6 text-plum-700"
                titleClassName="mt-3 text-base font-bold text-ink"
                descriptionClassName="mt-3 text-[13px] leading-5 text-ink-muted"
              />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal>
          <p className="rounded-xl bg-cream px-6 py-6 text-sm leading-[22px] text-ink-muted outline outline-1 -outline-offset-1 outline-blush">
            Capability status does not imply universal coverage. Explore capability-specific
            readiness without assuming regional or global availability. Current production status
            is governed through approved country and regulatory packs.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

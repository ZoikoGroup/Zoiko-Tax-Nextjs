import {
  DataTable,
  IconCard,
  Reveal,
  Section,
  SectionIntro,
  StaggerGroup,
  StaggerItem,
  introDescription,
} from "./shared";
import { customerOrganizations, enterpriseFunctions } from "./about-data";

export default function MarketSection() {
  return (
    <Section background="/about-us/pattern-market.webp" className="bg-white">
      <div className="flex flex-col gap-12">
        <Reveal>
          <SectionIntro
            eyebrow="Who it's built for"
            title="The addressable market."
            description="Designed for communications businesses and the enterprise functions accountable for fiscal outcomes."
            descriptionClassName={introDescription}
          />
        </Reveal>

        <div className="flex flex-col gap-5">
          <h3 className="text-base font-bold text-menu-accent">Direct Customer Organizations</h3>
          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {customerOrganizations.map((organization) => (
              <StaggerItem key={organization.title}>
                <IconCard
                  {...organization}
                  className="rounded-2xl bg-white p-6 shadow-[0_2px_8px_0_rgba(0,0,0,0.05)] outline outline-1 -outline-offset-1 outline-zinc-200"
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <Reveal className="flex flex-col gap-5">
          <h3 className="text-base font-bold text-menu-accent">Enterprise Functions</h3>
          <DataTable
            gridClassName="md:grid-cols-[2fr_3fr]"
            columns={[
              { label: "Function", cellClassName: "text-sm font-semibold text-ink" },
              {
                label: "How ZoikoTax serves them",
                cellClassName: "text-sm leading-5 text-ink-muted",
              },
            ]}
            rows={enterpriseFunctions}
          />
        </Reveal>
      </div>
    </Section>
  );
}

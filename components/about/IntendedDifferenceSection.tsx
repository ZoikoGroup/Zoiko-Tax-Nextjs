import { DataTable, Reveal, Section, SectionIntro, introDescription } from "./shared";
import { industryShifts } from "./about-data";

export default function IntendedDifferenceSection() {
  return (
    <Section className="bg-mauve">
      <div className="flex flex-col gap-11">
        <Reveal>
          <SectionIntro
            eyebrow="Intended difference"
            title="A more connected fiscal operating model for global telecom."
            description="Eight industry shifts that ZoikoTax is designed to enable."
            descriptionClassName={introDescription}
          />
        </Reveal>

        <Reveal>
          <DataTable
            gridClassName="md:grid-cols-2"
            columns={[
              {
                label: "From (today)",
                headClassName: "text-danger",
                cellClassName: "text-sm leading-5 text-ink-muted",
              },
              {
                label: "To (with ZoikoTax)",
                headClassName: "text-success",
                cellClassName: "text-sm leading-5 text-ink",
              },
            ]}
            rows={industryShifts}
          />
        </Reveal>
      </div>
    </Section>
  );
}

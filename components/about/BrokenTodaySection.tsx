import { DataTable, Reveal, Section, SectionIntro, introDescription } from "./shared";
import { brokenToday } from "./about-data";

export default function BrokenTodaySection() {
  return (
    <Section className="bg-mauve">
      <div className="flex flex-col gap-11">
        <Reveal>
          <SectionIntro
            eyebrow="Telecom-native by design"
            title="What is broken today?"
            description="The central problem is fragmentation. Telecom fiscal decisions are distributed across systems that each know part of the story."
            descriptionClassName={introDescription}
          />
        </Reveal>

        <Reveal>
          <DataTable
            gridClassName="md:grid-cols-[1fr_1.4fr_1.4fr]"
            columns={[
              { label: "Problem", cellClassName: "text-sm font-semibold text-ink" },
              { label: "Why it matters", cellClassName: "text-xs leading-5 text-ink-muted" },
              { label: "ZoikoTax response", cellClassName: "text-xs leading-5 text-neutral-700" },
            ]}
            rows={brokenToday}
          />
        </Reveal>
      </div>
    </Section>
  );
}

import { Card, Field, NoticeCard, SectionHeading, SectionShell } from "./shared";

const CARDS = [
  {
    title: "Logical structure",
    description:
      "Headings and landmarks should express the reading order. Control names must describe the action or destination.",
  },
  {
    title: "Related information",
    description:
      "Table headers and cell relationships need semantic associations. Diagrams need full text equivalents.",
  },
  {
    title: "Dynamic updates",
    description: "Meaningful changes need appropriate announcements. Announcements should inform rather than overwhelm.",
  },
];

const MATRIX = [
  { label: "Environment / combination", value: "Approved matrix · Source required" },
  { label: "Task / build / scope", value: "Source required" },
  { label: "Observed result / limitation", value: "Not published" },
  { label: "Test date / evidence owner", value: "Source required" },
];

export default function AssistiveTechSection() {
  return (
    <SectionShell className="bg-white" bgImage="assistive-bg.webp">
      <SectionHeading
        eyebrow="06 / ASSISTIVE TECHNOLOGY"
        title="Structure is a requirement. Support needs evidence."
        description="Screen-reader compatibility must be based on approved, current test combinations—not on a list of technology names."
      />

      <NoticeCard title="Approved browser/assistive-technology test matrix not supplied">
        No browser, operating-system or assistive-technology combination is claimed as supported in this view. An
        actual matrix must identify its scope and observed results.
      </NoticeCard>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {CARDS.map((card) => (
          <Card key={card.title} title={card.title}>
            {card.description}
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-8 rounded-2xl bg-purple-50 px-6 py-2 sm:grid-cols-2 sm:py-4 lg:grid-cols-4">
        {MATRIX.map((field) => (
          <Field key={field.label} {...field} />
        ))}
      </div>
    </SectionShell>
  );
}

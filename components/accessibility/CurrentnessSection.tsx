import { Card, Field, NoticeCard, SectionHeading, SectionShell } from "./shared";

const FIELDS = [
  { label: "Reviewed / effective date", value: "Source required · Not published" },
  { label: "Statement / product version", value: "Source required · Not published" },
  { label: "Evidence state / approved scope", value: "Not supplied" },
];

const RULES = [
  {
    title: "Revalidate meaningful changes",
    description:
      "Major interface or component changes require revalidation of affected tasks and patterns. Release integration should retain traceable evidence.",
  },
  {
    title: "Resolve only with verification",
    description:
      "A fix is not a resolved issue until validation supports it. Keep the relevant build, scope and evidence with the limitation record.",
  },
  {
    title: "Narrow conflicting claims",
    description:
      "Stale, superseded or contradictory evidence should block or narrow a statement. A publishing system cannot infer conformance.",
  },
];

export default function CurrentnessSection() {
  return (
    <SectionShell className="bg-white" bgImage="currentness-bg.webp">
      <SectionHeading
        eyebrow="12 / CURRENTNESS & RELEASES"
        title="Evidence has a scope—and a shelf life."
        description="An old evaluation is not proof of the current interface. Reviewed, effective and version fields must come from approved sources."
      />

      <div className="grid grid-cols-1 gap-x-8 rounded-2xl bg-purple-50 px-6 py-3 sm:px-7 sm:py-6 md:grid-cols-3">
        {FIELDS.map((field) => (
          <Field key={field.label} {...field} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {RULES.map((rule) => (
          <Card key={rule.title} title={rule.title}>
            {rule.description}
          </Card>
        ))}
      </div>

      <NoticeCard title="Core trust information should remain readable.">
        Statement, scope, limitations, evidence and reporting guidance should remain available without JavaScript, in
        print and in narrow or large-text presentations. These are implementation requirements, not verified behavior
        of this static design.
      </NoticeCard>

      <p className="text-sm leading-5 text-stone-500">
        Source-state vocabulary, illustrative only: Current / Pending / Scope-limited / Historical / Unavailable. No
        current release or review date is asserted.
      </p>
    </SectionShell>
  );
}

import { SectionShell, SectionHeading, Card, StaggerGroup, StaggerItem } from "./shared";

const problems = [
  {
    title: "Fragmented jurisdictions",
    body: "Telecom taxes, surcharges and fees vary by country, state and even municipality — and change without warning.",
  },
  {
    title: "Manual, brittle filing",
    body: "Spreadsheet-driven determination and filing can't keep pace with usage-based billing at telecom scale.",
  },
  {
    title: "Blind spots in audits",
    body: "Without a governed system of record, exemption certificates and remittances are hard to reconstruct under audit.",
  },
];

export default function ProblemSection() {
  return (
    <SectionShell id="problem" tone="light">
      <SectionHeading
        eyebrow="The Problem"
        title="Telecom fiscal compliance outgrew spreadsheets years ago."
        description="Operators are left reconciling tax logic across billing, OSS and finance systems that were never built to talk to each other."
      />

      <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {problems.map((problem) => (
          <StaggerItem key={problem.title}>
            <Card className="h-full">
              <h3 className="text-lg font-semibold text-brand-navy">{problem.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">
                {problem.body}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}

import { SectionShell, SectionHeading, DarkCard, StaggerGroup, StaggerItem } from "./shared";

const capabilities = [
  {
    title: "Real-time orchestration",
    body: "Determination and reconciliation run in step with usage-based billing events, not on a nightly batch.",
  },
  {
    title: "Resilient by design",
    body: "Multi-region infrastructure with governed failover keeps filing and determination available when it matters.",
  },
  {
    title: "Auditable by default",
    body: "Every determination, override and filing is logged and reconstructable for regulators and auditors.",
  },
];

export default function InfrastructureSection() {
  return (
    <SectionShell id="infrastructure" tone="dark">
      <SectionHeading
        eyebrow="Infrastructure"
        title="Governed infrastructure built for telecom scale."
        description="The platform underneath ZoikoTax is engineered to stay accurate and available under real telecom transaction volume."
        tone="dark"
      />

      <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {capabilities.map((capability) => (
          <StaggerItem key={capability.title}>
            <DarkCard className="h-full">
              <h3 className="text-lg font-semibold text-white">{capability.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {capability.body}
              </p>
            </DarkCard>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}

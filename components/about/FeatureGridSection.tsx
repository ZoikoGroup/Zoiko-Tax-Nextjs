import { SectionShell, SectionHeading, Card, StaggerGroup, StaggerItem } from "./shared";

const features = [
  { title: "Tax Determination", body: "Governed, jurisdiction-aware determination at billing scale." },
  { title: "Exemptions & Certificates", body: "Centralized capture, validation and renewal tracking." },
  { title: "Compliance & Filing", body: "Automated calendars and filing workflows with full audit trails." },
  { title: "Real-time Orchestration", body: "Determination that keeps pace with usage-based billing events." },
  { title: "E-Invoicing & CTC", body: "Continuous transaction controls for markets that require them." },
  { title: "Reconciliation", body: "Close the loop between billing, remittance and the general ledger." },
];

export default function FeatureGridSection() {
  return (
    <SectionShell id="platform-capabilities" tone="muted">
      <SectionHeading
        eyebrow="Platform Capabilities"
        title="One governed platform, six core capabilities."
      />

      <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <StaggerItem key={feature.title}>
            <Card className="h-full bg-white">
              <h3 className="text-base font-semibold text-brand-navy">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">
                {feature.body}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}

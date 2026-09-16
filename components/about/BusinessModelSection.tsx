import { SectionShell, SectionHeading, Card, StaggerGroup, StaggerItem } from "./shared";

const pillars = [
  {
    title: "Governed platform",
    body: "A rules-driven determination engine that stays current with jurisdictional change, reviewed and approved before it ever touches production.",
  },
  {
    title: "Managed compliance service",
    body: "Our regulatory and filing team monitors obligations end-to-end, so your finance team is never chasing deadlines.",
  },
  {
    title: "Open integration layer",
    body: "APIs and connectors meet your billing, ERP and OSS stack where it already lives — no rip-and-replace required.",
  },
];

export default function BusinessModelSection() {
  return (
    <SectionShell id="business-model" tone="muted">
      <SectionHeading
        eyebrow="How We Work"
        title="A platform and a partner, not just another vendor."
        description="ZoikoTax pairs governed software with a compliance team that stays accountable for outcomes."
      />

      <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <StaggerItem key={pillar.title}>
            <Card className="h-full bg-white">
              <h3 className="text-lg font-semibold text-brand-navy">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">
                {pillar.body}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}

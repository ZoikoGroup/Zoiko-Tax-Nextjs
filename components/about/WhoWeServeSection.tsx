import { SectionShell, SectionHeading, Card, StaggerGroup, StaggerItem } from "./shared";

const teams = [
  {
    title: "Tax & Regulatory",
    body: "Determination logic, filing calendars and audit trails built around how regulatory teams actually work.",
  },
  {
    title: "CFO & Finance",
    body: "Accurate reconciliation and reporting that closes the loop between billing, remittance and the general ledger.",
  },
  {
    title: "Product & Commercial",
    body: "Launch new plans, bundles and markets without waiting on a tax review cycle to catch up.",
  },
  {
    title: "Technology Leaders",
    body: "Well-documented APIs and sandboxes that integrate cleanly with existing billing and OSS architecture.",
  },
];

export default function WhoWeServeSection() {
  return (
    <SectionShell id="who-we-serve" tone="light">
      <SectionHeading
        eyebrow="Who We Serve"
        title="Built for every team that touches telecom tax."
        description="ZoikoTax gives each stakeholder the view they need, from a single governed source of truth."
      />

      <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teams.map((team) => (
          <StaggerItem key={team.title}>
            <Card className="h-full">
              <h3 className="text-base font-semibold text-brand-navy">{team.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">
                {team.body}
              </p>
            </Card>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}

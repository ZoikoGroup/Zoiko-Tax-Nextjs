import { SectionShell, SectionHeading, StaggerGroup, StaggerItem } from "./shared";

const standards = ["SOC 2 Type II", "ISO 27001", "GDPR", "CCPA"];

export default function TrustStandardSection() {
  return (
    <SectionShell id="trust-standards" tone="muted">
      <SectionHeading
        eyebrow="Trust Standards"
        title="Held to the standards our customers are held to."
      />

      <StaggerGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {standards.map((standard) => (
          <StaggerItem key={standard}>
            <div className="flex h-24 items-center justify-center rounded-2xl border border-black/5 bg-white text-center text-sm font-semibold text-brand-navy transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
              {standard}
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}

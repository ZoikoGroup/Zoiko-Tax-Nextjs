import { SectionHeading, SectionShell, StepCard } from "./shared";

const POSITIONS = [
  { title: "Calculated", description: "Determined fiscal position" },
  { title: "Billed", description: "Billing-system position" },
  { title: "Collected / recovered", description: "Observed recovery position" },
  { title: "Reported", description: "Reporting position" },
  { title: "Paid", description: "Payment or remittance context" },
  { title: "Accounting control", description: "ERP / GL control position" },
];

export default function RecoverySection() {
  return (
    <SectionShell className="bg-white" bgImage="recovery-bg.webp">
      <SectionHeading
        eyebrow="Recovery and reconciliation positions"
        title="Connect every downstream position without promising a financial outcome."
        description="Reconciliation links calculated, billed, collected or recovered, reported, paid and accounting-control positions while preserving their distinct sources and timing."
      />

      <ol className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {POSITIONS.map((position, i) => (
          <StepCard
            key={position.title}
            label={String(i + 1).padStart(2, "0")}
            title={position.title}
            description={position.description}
            variant={i === 2 ? "highlight" : "light"}
            className="xl:min-h-40 xl:p-4 xl:[&_h3]:text-base xl:[&_h3]:leading-5"
          />
        ))}
      </ol>

      <p className="text-sm leading-5 text-stone-500">
        A connected position can support investigation and control. It is not a promise of recovered revenue, savings,
        leakage, recoverability or financial benefit.
      </p>
    </SectionShell>
  );
}

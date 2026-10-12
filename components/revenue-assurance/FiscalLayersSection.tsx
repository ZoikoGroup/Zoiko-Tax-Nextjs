import { SectionHeading, SectionShell, StepCard } from "./shared";

const LAYERS = [
  {
    title: "Tenant / legal entity",
    description: "Who operates and which legal entity owns the governed context.",
  },
  {
    title: "Product / service classification",
    description: "What the telecom supply or revenue item is understood to be.",
  },
  {
    title: "Situs / jurisdiction / authority / responsibility",
    description: "Where and under whose fiscal responsibility the position is evaluated.",
  },
  {
    title: "Calculated / determined fiscal position",
    description: "The governed tax, fee or obligation position produced for comparison.",
  },
  {
    title: "Billed / collected / recovered / downstream position",
    description: "What later operational and accounting stages observe.",
  },
  {
    title: "Assurance / evidence state",
    description: "How the finding, review and proof are represented over time.",
  },
];

export default function FiscalLayersSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Fiscal position, responsibility and reconciliation"
        title="Separate who, what, where, what was determined and what happened downstream."
        description="The architecture preserves responsibility and stage context so assurance teams can investigate without collapsing unlike fiscal positions into one status."
      />

      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {LAYERS.map((layer, i) => (
          <StepCard
            key={layer.title}
            label={`LAYER ${String(i + 1).padStart(2, "0")}`}
            title={layer.title}
            description={layer.description}
            variant={i === LAYERS.length - 1 ? "solid" : "light"}
            className="xl:min-h-60 xl:p-4 xl:[&_h3]:text-base xl:[&_h3]:leading-5"
          />
        ))}
      </ol>
    </SectionShell>
  );
}

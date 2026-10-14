import { Boxes, Layers, Network, Route, ScanSearch, Users } from "lucide-react";
import { DesktopBreak, IconCard, SectionHeading, SectionShell } from "./shared";

const MODELS = [
  {
    icon: Layers,
    title: "Native",
    description: "Use supported ZoikoTax capabilities as the system of control for scoped fiscal workflows.",
  },
  {
    icon: Network,
    title: "Federated",
    description:
      "Connect incumbent engines and platforms while centralizing governed position and evidence boundaries.",
  },
  {
    icon: ScanSearch,
    title: "Shadow Assurance",
    description: "Run supported comparisons beside current production to investigate differences before change.",
  },
  {
    icon: Boxes,
    title: "OEM / Embedded",
    description: "Embed scoped fiscal-control capabilities and evidence into partner or product experiences.",
  },
  {
    icon: Users,
    title: "Managed Compliance",
    description: "Combine supported technology workflows with governed operational service boundaries.",
  },
];

export default function OperatingModelsSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Operating models and migration paths"
        title={
          <>
            Modernize incrementally — <DesktopBreak />
            without pretending to replace it all.
          </>
        }
        description="Adopt supported capabilities natively, connect incumbent systems, or use assurance-led paths. Each model preserves explicit capability, authority and evidence boundaries."
      />

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:lg:col-span-1">
        {MODELS.map((model) => (
          <IconCard key={model.title} {...model} />
        ))}
      </div>

      <div className="flex items-start gap-4 rounded-3xl bg-[#301153] p-6 sm:items-center sm:px-7">
        <Route aria-hidden="true" className="size-6 shrink-0 text-orange-300" strokeWidth={2} />
        <p className="flex-1 text-sm leading-6 text-white sm:text-base">
          Incremental modernization means choosing scoped capabilities, proving interfaces and preserving rollback and
          evidence. It does not promise duration, match percentage, close acceleration, headcount reduction, recovery
          improvement, savings or audit outcomes.
        </p>
      </div>
    </SectionShell>
  );
}

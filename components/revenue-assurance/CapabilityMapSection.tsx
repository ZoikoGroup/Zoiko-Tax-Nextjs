import { SectionHeading, SectionShell } from "./shared";

const CAPABILITIES = [
  {
    title: "Shadow Assurance",
    role: "Non-impact comparison",
    boundary: "Does not change production billing or filing.",
  },
  {
    title: "Reconciliation",
    role: "Cross-stage variance control",
    boundary: "Does not itself prove error or recovery.",
  },
  {
    title: "Evidence & Replay",
    role: "Historical reconstruction",
    boundary: "Depends on preserved source and version context.",
    featured: true,
  },
  {
    title: "Tax Determination / Obligations",
    role: "Governed fiscal positions",
    boundary: "Availability varies by activated capability and market pack.",
  },
  {
    title: "Intelligence Fabric",
    role: "Investigation assistance",
    boundary: "Advisory; approved rules and review remain authoritative.",
  },
  {
    title: "Coverage",
    role: "Capability readiness",
    boundary: "A finding cannot create or override Coverage facts.",
  },
  {
    title: "Trust",
    role: "Control architecture",
    boundary: "Not a substitute for audit, legal or tax advice.",
  },
  {
    title: "Billing & BSS Integration",
    role: "Operational handoff",
    boundary: "ZoikoTax does not replace billing or BSS.",
  },
];

export default function CapabilityMapSection() {
  return (
    <SectionShell className="bg-white" bgImage="capability-bg.webp">
      <SectionHeading
        eyebrow="Platform capability and handoff map"
        title="A fiscal-control layer with explicit values and boundaries."
        description="Capabilities hand off governed context across the lifecycle while preserving where ZoikoTax stops and another system or accountable reviewer begins."
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {CAPABILITIES.map((capability) => (
          <div
            key={capability.title}
            className={`flex flex-col gap-2.5 rounded-2xl p-5 outline -outline-offset-1 xl:min-h-48 ${
              capability.featured ? "bg-[#301153] outline-[#301153]" : "bg-white outline-zinc-300"
            }`}
          >
            <h3 className={`text-lg font-bold leading-6 ${capability.featured ? "text-white" : "text-zinc-900"}`}>
              {capability.title}
            </h3>
            <p className={`text-sm font-semibold ${capability.featured ? "text-orange-300" : "text-orange-600"}`}>
              {capability.role}
            </p>
            <p className={`pt-1 text-xs leading-5 ${capability.featured ? "text-zinc-300" : "text-stone-500"}`}>
              {capability.boundary}
            </p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

import { FlaskConical, KeyRound } from "lucide-react";
import ResourceDirectory from "./ResourceDirectory";
import { SectionHeading, SectionShell } from "./shared";

const PRINCIPLES = [
  {
    icon: KeyRound,
    title: "Authentication is governed.",
    lead: "Public documentation is not a credential flow. Exact authentication requirements remain owned by the technical source.",
    note: "Least privilege is a general design principle—not a claim about an available protocol. This page never issues or displays tokens, keys or secrets.",
  },
  {
    icon: FlaskConical,
    title: "Keep environments distinct.",
    lead: "Documentation orients. Sandbox tests non-production behavior. Production access remains entitlement-controlled.",
    note: "Sandbox is non-production. Access, capabilities and parity depend on approved environment and entitlement sources. Use synthetic or sanitized test examples.",
  },
];

export default function ResourcesSection() {
  return (
    <SectionShell id="resources" className="bg-purple-50">
      <SectionHeading
        eyebrow="Developer resources"
        title="Technical depth lives at the source."
        description="Seven canonical resources for implementation. Open the owning document rather than relying on copied contracts."
      />

      <ResourceDirectory />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {PRINCIPLES.map(({ icon: Icon, title, lead, note }) => (
          <div key={title} className="flex flex-col gap-4 rounded-3xl bg-[#301153] p-6 sm:p-8">
            <Icon aria-hidden="true" className="size-5 text-orange-300" strokeWidth={1.6} />
            <h3 className="text-2xl font-bold text-white sm:text-3xl">{title}</h3>
            <p className="text-base leading-6 text-white">{lead}</p>
            <p className="text-sm leading-5 text-zinc-300">{note}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

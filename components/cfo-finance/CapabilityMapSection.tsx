import {
  Calculator,
  ClipboardList,
  FileCheck,
  GitCompareArrows,
  History,
  ScanLine,
  Send,
  Sparkles,
} from "lucide-react";
import { IconTile, SectionHeading, SectionShell } from "./shared";

const CAPABILITIES = [
  {
    icon: Calculator,
    title: "Tax Determination",
    description: "Calculate supported telecom fiscal outcomes from approved rules and scoped transaction facts.",
    boundary: "jurisdiction and product scope govern readiness.",
    href: "/determination",
  },
  {
    icon: ClipboardList,
    title: "Regulatory Obligations",
    description: "Identify supported obligations, owners, cadence and required control actions.",
    boundary: "obligation context is not legal advice.",
    href: "/regulatory-obligations",
  },
  {
    icon: FileCheck,
    title: "Compliance & Filing",
    description: "Prepare, approve and preserve supported filed positions and acknowledgements.",
    boundary: "capability-specific filing support.",
    href: "/compliance-filing",
  },
  {
    icon: ScanLine,
    title: "E-Invoicing & CTC",
    description: "Orchestrate supported fiscal-invoice and clearance events with evidence.",
    boundary: "no universal network implication.",
    href: "/e-invoicing-ctc",
  },
  {
    icon: Send,
    title: "Remittance Orchestration",
    description: "Govern remittance instructions, approvals and status evidence.",
    boundary: "no fund custody or payment processing.",
    href: "/remittance-orchestration",
  },
  {
    icon: GitCompareArrows,
    title: "Reconciliation",
    description: "Compare fiscal, billing, filing, remittance and accounting-control positions.",
    boundary: "comparator agreement is not legal correctness.",
    href: "/reconciliation",
  },
  {
    icon: History,
    title: "Evidence & Replay",
    description: "Reconstruct historical outcomes with original facts, versions and approvals.",
    boundary: "evidence is not an audit opinion.",
    href: "/evidence-auditability",
  },
  {
    icon: Sparkles,
    title: "Intelligence Fabric",
    description: "Assist research, investigation, explanation, simulation and classification proposals.",
    boundary: "AI is not fiscal or accounting authority.",
    href: "/intelligence-fabric",
  },
];

export default function CapabilityMapSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Platform capability map"
        title="Named destinations across the finance-control lifecycle."
        description="Each destination has a scoped value and explicit boundary. Availability is evaluated independently by jurisdiction, capability and operating mode."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {CAPABILITIES.map((capability) => (
          <a
            key={capability.title}
            href={capability.href}
            className="flex flex-col items-start gap-3.5 rounded-2xl bg-white p-5 outline -outline-offset-1 outline-zinc-300 transition-shadow hover:shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] xl:min-h-60"
          >
            <IconTile icon={capability.icon} />
            <h3 className="text-lg font-bold leading-6 text-zinc-900">{capability.title}</h3>
            <p className="text-xs leading-5 text-stone-500">{capability.description}</p>
            <p className="w-full border-t border-zinc-300 pt-3 text-xs font-semibold leading-4 text-orange-600">
              Boundary: {capability.boundary}
            </p>
          </a>
        ))}
      </div>
    </SectionShell>
  );
}

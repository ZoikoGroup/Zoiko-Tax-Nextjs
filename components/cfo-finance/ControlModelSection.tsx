import { Waypoints } from "lucide-react";
import { DesktopBreak, ROUTES, SectionHeading, SectionShell } from "./shared";

const POSITIONS = [
  {
    label: "Liability",
    question: "What is the liability position?",
    description: "Calculated from approved rules and scoped facts.",
  },
  {
    label: "Recovery",
    question: "What was billed or recovered?",
    description: "Kept distinct from calculated and collected positions.",
  },
  {
    label: "Accrual",
    question: "What should be accrued or reported?",
    description: "Governed input for customer-owned accounting policy.",
  },
  {
    label: "Reconciliation",
    question: "Where do positions differ?",
    description: "Comparator results, reasons and action states.",
  },
  {
    label: "Accounting-control outputs",
    question: "What reaches finance systems?",
    description: "Traceable exports and control handoffs, not a replacement GL.",
  },
  {
    label: "Evidence",
    question: "Can we prove the position?",
    description: "Sources, versions, approvals and lineage for replay.",
  },
];

export default function ControlModelSection() {
  return (
    <SectionShell className="bg-white" bgImage="control-model-bg.webp">
      <SectionHeading
        eyebrow="Finance control model"
        title={
          <>
            Six positions connected — <DesktopBreak />
            without collapsing their authority.
          </>
        }
        description="The model answers the questions finance teams need while preserving liability, recovery, accrual, reconciliation, accounting-control outputs and evidence as distinct conclusions."
      />

      <ol className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {POSITIONS.map((position, i) => (
          <li
            key={position.label}
            className="flex flex-col gap-3 rounded-2xl bg-white p-5 outline -outline-offset-1 outline-zinc-300 lg:min-h-48"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase text-orange-600">{position.label}</span>
              <span aria-hidden="true" className="text-xs font-bold text-zinc-300">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-lg font-bold leading-6 text-zinc-900 sm:text-xl">{position.question}</h3>
            <p className="text-sm leading-5 text-stone-500">{position.description}</p>
          </li>
        ))}
      </ol>

      <div className="flex flex-col gap-4 rounded-3xl bg-[#301153] p-6 md:flex-row md:items-center">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10">
          <Waypoints aria-hidden="true" className="size-6 text-orange-300" strokeWidth={2} />
        </span>
        <div className="flex flex-1 flex-col gap-1">
          <p className="text-base font-bold text-white">A connected control model — not one universal status</p>
          <p className="text-sm leading-5 text-zinc-300">
            A result can be calculated, billed, recovered, reconciled or evidenced on different timelines and under
            different owners. Each state remains visible.
          </p>
        </div>
        <a href={ROUTES.reconciliation} className="shrink-0 text-sm font-bold text-orange-300 hover:underline">
          Explore Reconciliation →
        </a>
      </div>
    </SectionShell>
  );
}

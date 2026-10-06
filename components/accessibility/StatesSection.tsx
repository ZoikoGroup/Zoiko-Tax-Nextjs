import { Minus } from "lucide-react";
import { SectionHeading, SectionShell } from "./shared";

const STATES = [
  {
    title: "Approved statement",
    description: "Only when supplied: read the exact approved wording and evaluated scope.",
    action: "Check scope, evaluation and exclusions.",
  },
  {
    title: "Pending review",
    description: "A statement is awaiting approval. Conformance is not established.",
    action: "Use the published design target, not an inferred claim.",
  },
  {
    title: "Scope-limited",
    description: "Evidence applies only to the named surfaces or tasks.",
    action: "Review exclusions before relying on the statement.",
  },
  {
    title: "Known limitation",
    description: "A published issue affects a specific task or scope.",
    action: "Read its impact and any verified workaround.",
  },
  {
    title: "Resolved · Verified",
    description: "Use only after validation confirms the fix for a specific version.",
    action: "Review the supporting validation record.",
  },
  {
    title: "Evidence unavailable",
    description: "Requested evaluation evidence is not available in this view.",
    action: "Do not infer a passing result. Review statement boundaries.",
  },
  {
    title: "Controlled ACR / VPAT",
    description: "Use only if the file and its access process are approved.",
    action: "Follow the published controlled-access instructions, if supplied.",
  },
  {
    title: "Stale / superseded",
    description: "Historical evidence does not establish current behavior.",
    action: "Use a current approved source; narrow the claim otherwise.",
  },
  {
    title: "Missing source",
    description: "Required statement or evaluation information is not supplied.",
    action: "Treat scope and conformance as unestablished.",
  },
  {
    title: "Report route unavailable",
    description: "An approved reporting channel has not been published here.",
    action: "Use the channel in the approved statement once published.",
  },
  {
    title: "No-JS / readable view",
    description: "Core statement, scope, limitation and report guidance should remain readable.",
    action: "Preserve the same information in a plain-text presentation.",
  },
];

export default function StatesSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="13 / CLEAR STATES & RECOVERY"
        title="Honest messages when evidence changes."
        description="Conditional copy specimens—not product status reports. Every state should explain its boundary and a useful next step without guessing a claim or contact route."
      />

      {/* 6-column grid so the last row of two cards spans halves on desktop. */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-6">
        {STATES.map((state, i) => (
          <div
            key={state.title}
            className={`flex flex-col gap-3 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 ${
              i >= 9 ? "xl:col-span-3" : "xl:col-span-2"
            }`}
          >
            <h3 className="text-lg font-semibold text-violet-950">{state.title}</h3>
            <p className="text-base leading-6 text-stone-500">{state.description}</p>
            <p className="text-sm leading-5 text-zinc-900">{state.action}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 outline-2 -outline-offset-2 outline-violet-950">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg text-zinc-900">Why isn’t a conformance level shown?</h3>
          <span className="flex shrink-0 items-center gap-4 pt-1 text-xs font-semibold text-stone-500">
            <span className="hidden sm:inline">EXPANDED SPECIMEN</span>
            <Minus aria-hidden="true" className="size-4 text-violet-950" strokeWidth={2} />
          </span>
        </div>
        <p className="text-base leading-7 text-stone-500 sm:text-lg">
          An approved statement and evaluated scope are not supplied. This design targets WCAG 2.2 AA, but a target is
          not proof of implementation, testing, formal conformance or legal compliance.
        </p>
      </div>
    </SectionShell>
  );
}

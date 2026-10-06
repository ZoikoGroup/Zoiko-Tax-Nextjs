import { SectionHeading, SectionShell } from "./shared";

const METHODS = [
  {
    method: "Automated checks",
    intent: "Identify machine-detectable issues; not proof of full conformance.",
    evidence: "Tool, build, exact scope, findings and owner",
  },
  {
    method: "Manual keyboard testing",
    intent: "Observe task reachability, focus order, visibility and recovery.",
    evidence: "Tasks, environment, observed results and owner",
  },
  {
    method: "Screen-reader matrix",
    intent: "Evaluate actual approved browser/AT combinations.",
    evidence: "Combination, task, version, date and results",
  },
  {
    method: "Zoom & reflow testing",
    intent: "Evaluate content and functions at intended zoom and narrow widths.",
    evidence: "Viewport, zoom, task, build and results",
  },
  {
    method: "Expert audit",
    intent: "Review a specific scope using a documented evaluation method.",
    evidence: "Provider, scope, date, findings and evidence owner",
  },
];

const GRID = "lg:grid lg:grid-cols-[1fr_1.6fr_1.9fr] lg:gap-6";

export default function TestingEvidenceSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="11 / TESTING & EVIDENCE"
        title="Ask for the result—not just the method."
        description="A method describes how to evaluate. An observed result describes what happened in a defined scope. Neither should be promoted into a broader claim."
      />

      <div className="overflow-hidden rounded-2xl bg-white outline -outline-offset-1 outline-zinc-300">
        <div className={`hidden bg-violet-950 px-6 py-6 text-xs font-semibold text-white ${GRID}`}>
          <span>METHOD</span>
          <span>EVALUATION INTENT</span>
          <span>ACTUAL EVIDENCE · NOT PUBLISHED</span>
        </div>
        {METHODS.map((row, i) => (
          <div
            key={row.method}
            className={`flex flex-col gap-3 px-5 py-6 sm:px-6 lg:items-center ${GRID} ${
              i < METHODS.length - 1 ? "border-b border-zinc-300" : ""
            }`}
          >
            <h3 className="text-base font-semibold text-zinc-900">{row.method}</h3>
            <p className="text-base leading-6 text-stone-500">{row.intent}</p>
            <div className="flex flex-col gap-1">
              <span className="text-sm text-amber-700">Source required</span>
              <span className="text-sm text-stone-500">{row.evidence}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 rounded-3xl bg-violet-950 p-6 sm:p-8 md:grid-cols-2 md:gap-10">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-orange-300">ACR / VPAT · SOURCE REQUIRED</span>
          <h3 className="text-xl text-white sm:text-2xl">Availability is not established.</h3>
          <p className="text-base leading-7 text-zinc-300">
            Public, controlled, customer-specific and unavailable are possible access states—not an actual file
            inventory. No ACR/VPAT file, download route or audit evidence is supplied.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold text-orange-300">PROCUREMENT BOUNDARY</span>
          <h3 className="text-xl text-white sm:text-2xl">A questionnaire is not a certification.</h3>
          <p className="text-base leading-7 text-zinc-300">
            Procurement answers need approved sources and exact scope. A sales response or automated scan cannot
            establish formal conformance, legal compliance or “100% accessible.”
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

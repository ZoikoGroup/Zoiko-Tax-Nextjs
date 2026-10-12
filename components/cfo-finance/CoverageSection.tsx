import { CircleCheck, CircleDot, CircleHelp, CircleX, Info, type LucideIcon } from "lucide-react";
import { DesktopBreak, ROUTES, SectionHeading, SectionShell } from "./shared";

const PROGRESS = { icon: CircleDot, color: "text-orange-600" };
const READY = { icon: CircleCheck, color: "text-green-700" };
const STOPPED = { icon: CircleX, color: "text-red-700" };
const UNKNOWN = { icon: CircleHelp, color: "text-orange-600" };

const STATES: { state: string; meaning: string; finance: string; icon: LucideIcon; color: string }[] = [
  {
    state: "Research",
    meaning: "Source discovery and interpretation work is in progress.",
    finance: "Not production-ready",
    ...PROGRESS,
  },
  {
    state: "Validation",
    meaning: "Content and capability are under governed verification.",
    finance: "Not production-ready",
    ...PROGRESS,
  },
  {
    state: "Pilot",
    meaning: "Scoped evaluation with explicit limitations and approvals.",
    finance: "Pilot scope only",
    ...PROGRESS,
  },
  {
    state: "Production",
    meaning: "Approved for the named capability, jurisdiction and pack.",
    finance: "Defined production scope",
    ...READY,
  },
  {
    state: "Managed",
    meaning: "Supported production capability with a managed operating boundary.",
    finance: "Defined managed scope",
    ...READY,
  },
  {
    state: "Suspended",
    meaning: "Previously available scope is temporarily unavailable.",
    finance: "Do not initiate",
    ...STOPPED,
  },
  {
    state: "Withdrawn",
    meaning: "Capability or pack has been removed from current availability.",
    finance: "Unavailable",
    ...STOPPED,
  },
  {
    state: "Status unavailable",
    meaning: "No approved readiness conclusion is currently published.",
    finance: "Treat as unknown",
    ...UNKNOWN,
  },
];

const GRID = "md:grid md:grid-cols-[1.3fr_2.6fr_1.4fr] md:gap-6 lg:grid-cols-[1.1fr_3.4fr_1.1fr]";

export default function CoverageSection() {
  return (
    <SectionShell className="bg-white" bgImage="coverage-bg.webp">
      <SectionHeading
        eyebrow="Coverage buying gate"
        title={
          <>
            Readiness is capability-specific <DesktopBreak />— and unknown is a real state.
          </>
        }
        description="Evaluate each jurisdiction, capability, pack and operating model on its current approved status. One production capability does not imply another is ready."
      />

      <div className="overflow-hidden rounded-3xl bg-white outline -outline-offset-1 outline-zinc-300">
        <div className={`hidden bg-[#301153] px-6 py-4 text-xs font-bold uppercase text-white ${GRID}`}>
          <span>Coverage state</span>
          <span>Meaning</span>
          <span>Finance interpretation</span>
        </div>
        {STATES.map(({ state, meaning, finance, icon: Icon, color }, i) => (
          <div
            key={state}
            className={`flex flex-col gap-1.5 px-5 py-4 sm:px-6 md:items-center ${GRID} ${
              i % 2 === 1 ? "bg-stone-100/70" : ""
            } ${i < STATES.length - 1 ? "border-b border-zinc-300" : ""}`}
          >
            <h3 className="flex items-center gap-2.5 text-sm font-bold text-zinc-900 sm:text-base">
              <Icon aria-hidden="true" className={`size-[18px] shrink-0 ${color}`} strokeWidth={2} />
              {state}
            </h3>
            <p className="pl-7 text-sm leading-5 text-stone-500 md:pl-0">{meaning}</p>
            <p className="pl-7 text-xs font-bold text-orange-600 md:pl-0">{finance}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 rounded-2xl bg-orange-50 p-5 outline -outline-offset-1 outline-orange-200 sm:p-6 md:flex-row md:items-center">
        <div className="flex flex-1 items-start gap-3.5 md:items-center">
          <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-orange-600 md:mt-0" strokeWidth={2} />
          <p className="flex-1 text-sm font-semibold leading-5 text-zinc-900">
            Coverage is assessed by jurisdiction, fiscal capability, content pack and operating mode. Fiscal capability
            does not imply support for the customer’s accounting policy.
          </p>
        </div>
        <a href={ROUTES.coverage} className="shrink-0 pl-8 text-sm font-bold text-orange-600 hover:underline md:pl-0">
          View Current Coverage →
        </a>
      </div>
    </SectionShell>
  );
}

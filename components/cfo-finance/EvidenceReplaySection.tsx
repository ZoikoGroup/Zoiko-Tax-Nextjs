import { Archive, Check, GitCompareArrows, History } from "lucide-react";
import { DesktopBreak, SectionHeading, SectionShell } from "./shared";

const MANIFEST = [
  {
    title: "Source provenance",
    description: "Where each source record came from and how it entered the governed workflow.",
  },
  {
    title: "Input facts",
    description: "The transaction, entity, period, product and relationship facts evaluated at the time.",
  },
  {
    title: "Rule / content version",
    description: "The exact approved fiscal content and effective version used for production.",
  },
  {
    title: "Position lineage",
    description: "How calculated, billed, recovered, accrued, filed and exported positions relate.",
  },
  {
    title: "Approval / workflow context",
    description: "Who reviewed, approved, released or escalated the consequential action.",
  },
  {
    title: "Visible uncertainty",
    description: "Unknown, unsupported, partial and proposed states remain explicit in the record.",
  },
];

const MODES = [
  { icon: Archive, title: "Historical replay", description: "Original facts + original approved authority" },
  {
    icon: GitCompareArrows,
    title: "Current-policy comparison",
    description: "Separate simulation + explicit variance",
  },
];

export default function EvidenceReplaySection() {
  return (
    <SectionShell className="bg-white" bgImage="evidence-bg.webp">
      <SectionHeading
        eyebrow="Evidence & Replay"
        title={
          <>
            A finance position you can reconstruct <DesktopBreak />— in the context that produced it.
          </>
        }
        description="Evidence is a primary control output. Preserve what was known, which approved authority applied, what executed, what changed and who approved the workflow."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline -outline-offset-1 outline-zinc-300 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">Position evidence manifest</h3>
            <span className="rounded-[999px] bg-green-50 px-2.5 py-1 text-[10px] font-bold uppercase text-green-700 outline -outline-offset-1 outline-green-200">
              Replayable
            </span>
          </div>
          <ul className="flex flex-col gap-5">
            {MANIFEST.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-orange-50">
                  <Check aria-hidden="true" className="size-3.5 text-orange-600" strokeWidth={2.5} />
                </span>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-zinc-900">{item.title}</p>
                  <p className="text-xs leading-5 text-stone-500">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl bg-[#301153] p-6 sm:p-8">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-white/10">
            <History aria-hidden="true" className="size-6 text-orange-300" strokeWidth={2} />
          </span>
          <h3 className="text-2xl font-bold text-white sm:text-[28px]">Replay history without repainting it.</h3>
          <p className="text-base leading-7 text-zinc-300">
            Historical replay uses the source facts, period context and approved version that produced the original
            position. A current-policy comparison is a separate analysis with separate evidence.
          </p>
          <div className="flex flex-col gap-2.5">
            {MODES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-center gap-3.5 rounded-xl bg-white/5 p-4 outline -outline-offset-1 outline-white/15"
              >
                <Icon aria-hidden="true" className="size-5 shrink-0 text-orange-300" strokeWidth={2} />
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-bold text-white">{title}</p>
                  <p className="text-xs text-zinc-300">{description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs font-semibold leading-5 text-orange-300">
            Evidence supports auditability and control review; it is not an audit opinion, certification or guarantee
            of outcome.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

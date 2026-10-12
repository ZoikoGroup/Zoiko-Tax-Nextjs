import { CircleCheck, CircleHelp, CircleX, FileWarning, Split, TriangleAlert, UserCheck } from "lucide-react";
import { SectionShell } from "./shared";

const STATES = [
  {
    icon: CircleCheck,
    title: "Matched",
    description: "Comparator agreement for the defined fields and period only.",
  },
  {
    icon: Split,
    title: "Variant",
    description: "One or more compared positions differ and need reasoned review.",
  },
  {
    icon: CircleHelp,
    title: "Unknown",
    description: "The comparator or required source context is not yet known.",
  },
  {
    icon: FileWarning,
    title: "Evidence partial",
    description: "A position exists, but one or more evidence elements are missing.",
  },
  {
    icon: UserCheck,
    title: "Review required",
    description: "A governed human decision or approval is required before progression.",
  },
  {
    icon: CircleX,
    title: "Blocked / unsupported",
    description: "The workflow cannot proceed because capability or prerequisites are unavailable.",
  },
];

export default function StatesSection() {
  return (
    <SectionShell className="bg-[#2a0b4d]" bgImage="states-bg.webp">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
        <div className="flex flex-col gap-4 lg:w-[420px] lg:shrink-0">
          <span className="text-sm font-bold uppercase text-orange-300">Reconciliation, variance and action</span>
          <h2 className="text-[28px] font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[49.28px]">
            States that say what finance actually knows.
          </h2>
          <p className="text-base leading-7 text-zinc-300 sm:text-lg lg:text-xl lg:leading-8">
            Every result uses an icon and a label — never color alone. The state describes comparator agreement,
            evidence and next action, not universal correctness.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-2.5">
          <ul className="flex flex-col gap-2.5">
            {STATES.map(({ icon: Icon, title, description }) => (
              <li
                key={title}
                className="flex items-start gap-3.5 rounded-[10px] bg-white/5 p-4 outline -outline-offset-1 outline-white/10 backdrop-blur-[2px] sm:items-center"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-white/5">
                  <Icon aria-hidden="true" className="size-4 text-orange-300" strokeWidth={2} />
                </span>
                <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-3.5">
                  <h3 className="text-sm font-bold text-white sm:w-48 sm:shrink-0">{title}</h3>
                  <p className="flex-1 text-xs leading-5 text-zinc-300">{description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-start gap-3 rounded-[10px] bg-orange-600/10 p-4 outline -outline-offset-1 outline-orange-300/40 sm:items-center">
            <TriangleAlert aria-hidden="true" className="size-5 shrink-0 text-orange-300" strokeWidth={2} />
            <p className="flex-1 text-xs font-semibold leading-5 text-white">
              Matched means comparator agreement only — not legal correctness, accounting compliance, audit approval or
              evidence completeness.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

import { Check } from "lucide-react";
import { SectionShell } from "./shared";

const PRESERVED = [
  "Source provenance",
  "Comparison inputs",
  "Rule / content version",
  "Fiscal / downstream positions",
  "Review / approval context",
  "Historical replay",
  "Downstream comparison",
  "Visible uncertainty",
];

const TIMELINE = [
  { title: "At observation", description: "Source and baseline context captured" },
  { title: "At comparison", description: "Inputs and effective versions bound" },
  { title: "At review", description: "Finding, uncertainty and approval context recorded" },
  { title: "At reconciliation", description: "Downstream positions tied or exception documented" },
  { title: "At replay", description: "Historical result reconstructed without silent rule substitution" },
];

export default function EvidenceReplaySection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.09)] outline -outline-offset-1 outline-zinc-200 sm:p-9">
          <span className="text-sm font-bold uppercase text-orange-600">Primary proof</span>
          <h2 className="text-[28px] font-bold leading-tight text-zinc-900 sm:text-4xl lg:text-5xl lg:leading-[48.40px]">
            Evidence &amp; Replay explains why a discrepancy existed.
          </h2>
          <p className="text-base leading-7 text-stone-500 sm:text-lg">
            Preserve the governed inputs, versions, positions and decisions that shaped an outcome—then reproduce what
            the team could know at that point in time.
          </p>
          <ul className="flex flex-col gap-3">
            {PRESERVED.map((item) => (
              <li key={item} className="flex items-center gap-3 text-base text-zinc-900">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-purple-100">
                  <Check aria-hidden="true" className="size-3.5 text-orange-600" strokeWidth={2} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl bg-[#301153] p-6 sm:p-9">
          <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            What governed review occurred over time?
          </h3>
          <p className="text-base leading-7 text-zinc-300">
            Replay brings the historical source, applicable version, observed positions, review state and later changes
            into one explainable sequence.
          </p>
          <ol className="flex flex-col gap-6">
            {TIMELINE.map((step, i) => (
              <li key={step.title} className="flex items-start gap-4">
                <span
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
                    i === TIMELINE.length - 1 ? "bg-orange-600" : "bg-white/10"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-bold text-white">{step.title}</p>
                  <p className="text-sm leading-5 text-zinc-300">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SectionShell>
  );
}

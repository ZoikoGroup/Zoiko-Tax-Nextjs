import { SectionHeading, SectionShell } from "./shared";

const ROWS = [
  {
    title: "Observed / source position",
    description: "The agreed input or incumbent outcome as ingested, with provenance.",
  },
  {
    title: "Classification discrepancy",
    description: "A difference in product, service or revenue classification.",
  },
  { title: "Tax/fee discrepancy", description: "A difference in determined or observed tax/fee position." },
  {
    title: "Recovery discrepancy",
    description: "A difference between determined and billed, collected or recovered position.",
  },
  { title: "Reconciliation break", description: "A stage-to-stage position that cannot yet be tied." },
  {
    title: "Evidence / review state",
    description: "What is known, approved, partial, blocked or still under review.",
  },
];

export default function ArchitectureSection() {
  return (
    <SectionShell className="bg-white" bgImage="architecture-bg.webp">
      <SectionHeading
        eyebrow="Discrepancy architecture"
        title="Keep the finding, its domain and its review state distinct."
        description="Classification, tax/fee, recovery, reconciliation and evidence are related—but they are not interchangeable states."
      />

      <ol className="flex flex-col gap-3">
        {ROWS.map((row, i) => (
          <li
            key={row.title}
            className="flex items-start gap-4 rounded-2xl bg-white px-5 py-4 outline -outline-offset-1 outline-zinc-300 sm:gap-5 md:min-h-20 md:items-center"
          >
            <span
              className={`flex size-9 shrink-0 items-center justify-center rounded-[10px] text-xs font-bold ${
                i === 0 ? "bg-[#301153] text-white" : "bg-purple-100 text-orange-600"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-center md:gap-5">
              <h3 className="text-base font-bold text-zinc-900 md:w-72 md:shrink-0">{row.title}</h3>
              <p className="flex-1 text-sm leading-6 text-stone-500 sm:text-base">{row.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="text-sm font-semibold leading-5 text-violet-950">
        A difference is a finding for review—not automatic blame, legal correctness, leakage or recoverability.
      </p>
    </SectionShell>
  );
}

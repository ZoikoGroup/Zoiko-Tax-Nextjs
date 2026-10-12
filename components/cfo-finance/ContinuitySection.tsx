import { DesktopBreak, SectionShell } from "./shared";

const STEPS = [
  { title: "Effective dating", description: "Bind policy and content to the period in force." },
  { title: "Period context", description: "Retain entity, obligation and reporting frame." },
  { title: "Change review", description: "Compare proposed interpretation before release." },
  { title: "Release governance", description: "Test, approve and version production authority." },
  { title: "Replay", description: "Reconstruct with original facts and historical rules." },
  { title: "Compare current policy", description: "Run a separate comparison without rewriting history." },
];

export default function ContinuitySection() {
  return (
    <SectionShell className="bg-[#2a0b4d]" bgImage="continuity-bg.webp">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="flex max-w-[820px] flex-col gap-4">
          <span className="text-sm font-bold uppercase text-orange-300">From effective fiscal rule to period evidence</span>
          <h2 className="text-[28px] font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[49.28px]">
            Controlled change <DesktopBreak />
            keeps history intact.
          </h2>
          <p className="text-base leading-7 text-zinc-300 sm:text-lg lg:text-xl lg:leading-8">
            Govern the path from a dated source to a released rule, then preserve the version that shaped each
            consequential finance position.
          </p>
        </div>
        <p className="text-base font-bold leading-6 text-orange-300 lg:max-w-[340px] lg:text-right">
          Historical positions must not be silently rewritten by current rules.
        </p>
      </div>

      <ol className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="flex flex-col gap-3 rounded-2xl bg-white/5 p-4 outline -outline-offset-1 outline-white/20 backdrop-blur-[2px] xl:min-h-40"
          >
            <span className="text-xs font-bold text-orange-300">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-base font-bold leading-5 text-white">{step.title}</h3>
            <p className="text-xs leading-5 text-zinc-300">{step.description}</p>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}

import { SectionHeading, SectionShell } from "./shared";

export default function TrustSection() {
  return (
    <SectionShell className="bg-[#1f0a3a]" bgImage="trust-bg.webp">
      <SectionHeading
        dark
        eyebrow="Trust & interpretation"
        title="Exploration is not fiscal authority."
        description="Research is not a tax or legal opinion, certification, production service, rollout commitment, or jurisdiction coverage assertion. It must not be relied on for live tax or regulatory decisions."
      />

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
        <span
          role="link"
          aria-disabled="true"
          className="inline-flex min-h-12 shrink-0 cursor-not-allowed items-center rounded-[999px] bg-white/5 px-5 py-3.5 text-sm font-semibold text-zinc-300 outline -outline-offset-1 outline-zinc-300"
        >
          Trust Center
          <span className="sr-only">(unavailable)</span>
        </span>
        <p className="max-w-[760px] text-base leading-6 text-zinc-300">
          Use only governed Trust sources. An approved Trust Center destination is not available here.
        </p>
      </div>
    </SectionShell>
  );
}

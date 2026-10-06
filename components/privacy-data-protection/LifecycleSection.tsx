import { NoticeCard, SectionHeading, SectionShell } from "./shared";

const STAGES = [
  "Collection / receipt",
  "Use / processing",
  "Storage",
  "Retention",
  "Deletion / return",
  "Backup / archive",
];

export default function LifecycleSection() {
  return (
    <SectionShell className="bg-violet-950" bgImage="lifecycle-bg.webp">
      <div className="flex flex-col gap-10">
        <SectionHeading
          dark
          eyebrow="05 / LIFECYCLE, RETENTION & DELETION"
          title="Follow the lifecycle. Verify every rule."
          description="The lifecycle is a reading map. Actual collection, processing, storage, retention, deletion and backup rules remain controlled by approved sources."
        />

        <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {STAGES.map((stage, i) => (
            <li
              key={stage}
              className="flex flex-col gap-4 rounded-2xl bg-white/5 p-5 outline outline-1 outline-offset-[-1px] outline-white/20 backdrop-blur-[2px]"
            >
              <span className="text-xs font-bold text-orange-300">
                {String(i + 1).padStart(2, "0")}
                {i < STAGES.length - 1 ? " →" : ""}
              </span>
              <span className="text-base font-semibold leading-6 text-white">{stage}</span>
              <span className="text-xs leading-5 text-zinc-300">Rule: Not supplied</span>
            </li>
          ))}
        </ol>

        <p className="text-base leading-6 text-zinc-300">
          Text equivalent: collection or receipt → use or processing → storage → retention → deletion or return →
          backup or archive. This map does not establish a sequence of actual operational practices.
        </p>

        <NoticeCard
          dark
          title="Periods, exceptions and locations are source-controlled."
          description="No retention duration, automatic deletion, restore or backup practice is established here. Legal holds and exceptions require an approved source. Storage does not establish geography; residency is a separate disclosure scope."
        />
      </div>
    </SectionShell>
  );
}

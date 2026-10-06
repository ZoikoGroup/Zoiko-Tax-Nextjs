import { ArrowRightIcon, Badge, NoticeCard, SectionHeading, SectionShell } from "./shared";

const METADATA = ["Reviewed", "Updated", "Effective date", "Version", "Review owner", "Approval status"];

const SAFE_STATES = [
  {
    title: "Approved source unavailable",
    description: "Withhold the unsupported claim. Keep the source boundary visible.",
  },
  {
    title: "Document pending approval",
    description: "Show a pending state, not an approved label or a document link.",
  },
  {
    title: "Request route unavailable",
    description: "No invented fallback mailbox, form or sales substitution.",
  },
  {
    title: "Subprocessor source stale",
    description: "Require owner review. Do not present the stale list as current.",
  },
  {
    title: "Role varies by context",
    description: "Show scoped wording only; do not generalize the role.",
  },
  {
    title: "Historical document",
    description: "Mark as historical and point to the current /trust/privacy/ route.",
  },
];

export default function CurrentnessSection() {
  return (
    <SectionShell className="bg-white" bgImage="currentness-bg.webp">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="11 / CURRENTNESS & SUPERSESSION"
          title="Approval is not the same as availability."
          description="Reviewed, updated and effective dates, version, owner and status must be taken from the source. Pending is not approved. Historical is not current."
        />

        <div className="flex flex-col gap-8 rounded-3xl bg-purple-100 p-6 sm:p-7 lg:flex-row lg:gap-10">
          <div className="flex flex-col gap-4 lg:w-[380px] lg:shrink-0">
            <h3 className="text-2xl text-violet-950 sm:text-3xl">Current public route</h3>
            <p className="break-all text-lg font-semibold text-violet-950 sm:text-xl">/trust/privacy/</p>
            <p className="text-sm leading-6 text-stone-500">
              The current route is not proof that a particular document is approved or operative.
            </p>
          </div>
          <dl className="grid flex-1 grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
            {METADATA.map((field) => (
              <div key={field} className="flex flex-col gap-2">
                <dt className="text-sm font-semibold text-violet-950">{field}</dt>
                <dd className="text-sm text-stone-500">Not supplied</dd>
              </div>
            ))}
          </dl>
        </div>

        <NoticeCard
          title="Missing approval source fails closed."
          description="An unavailable source is not replaced with generated law. Superseded versions remain historical; material-notice requirements come only from the operative source. No review date, approver or version is invented."
        />

        <div className="flex flex-col gap-10 pt-4 sm:pt-10">
          <SectionHeading
            eyebrow="12 / SAFE STATES & RECOVERY"
            title="When a source is missing, keep the boundary."
            description="Illustrative UI state patterns below are not reports of actual outages or a legal-document inventory. Recovery must preserve legal authority, not manufacture a substitute."
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {SAFE_STATES.map((state) => (
              <div
                key={state.title}
                className="flex flex-col items-start gap-4 rounded-2xl bg-white p-5 outline sm:p-6 outline-1 outline-offset-[-1px] outline-zinc-300"
              >
                <h3 className="text-xl text-zinc-900 sm:text-2xl">{state.title}</h3>
                <p className="text-base leading-7 text-stone-500">{state.description}</p>
                <Badge>Illustrative state pattern</Badge>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 rounded-2xl bg-violet-950 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl text-white sm:text-2xl">Core disclosure stays readable.</h3>
              <p className="text-sm leading-6 text-zinc-300">
                No-JS and print patterns retain legal boundaries and document destinations. If analytics is
                blocked, core content has no analytics dependency. No meaning is available only on hover or
                through motion.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 lg:w-80 lg:shrink-0">
              <Badge dark>Illustrative keyboard-focus state</Badge>
              <span className="inline-flex items-center gap-3 rounded-[999px] border-2 border-orange-300 px-5 py-3 text-sm font-semibold text-white">
                Trust Center
                <ArrowRightIcon />
              </span>
              <p className="text-xs leading-5 text-zinc-300">
                Visible outline + label; no color-only state. This is a static visual pattern.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

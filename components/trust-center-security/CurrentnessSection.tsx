import Image from "next/image";
import { NoticeCard, SectionHeading } from "./shared";

const FIELDS = [
  "Functional owner",
  "Service / surface scope",
  "Approved source / reference",
  "Reviewed at",
  "Source state",
  "Approval / visibility",
  "Review due / expiry",
  "Supersession",
];

const APPROVERS = [
  {
    title: "Security / architecture",
    description:
      "Factual security and architecture scope require accountable Security/CISO and architecture-owner review.",
  },
  {
    title: "Trust / compliance",
    description: "Evidence scope and currentness require the applicable assurance approval.",
  },
  {
    title: "Legal / privacy",
    description: "Access, privacy statements and contractual boundaries require the applicable legal review.",
  },
];

export default function CurrentnessSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[rgba(18,3,39,0.5)]">
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/trust-center-security/currentness-governance.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(18,3,39,0.5)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-9">
          <SectionHeading
            dark
            eyebrow="12 / CURRENTNESS & SCOPE"
            title="A claim is only as current as its source."
            description={<>Review dates, owners and approval states must come from governed records. No person, version, review date<br className="hidden lg:block" />or expiry date has been supplied.</>}
          />

          <NoticeCard
            dark
            title="Stale, withdrawn or ambiguous required evidence prevents current publication."
            description="Expired, superseded or uncertain sources fail closed. They do not justify a replacement assurance statement or a current-control badge."
          />

          <div className="flex flex-col gap-6 self-stretch rounded-3xl bg-white p-6 sm:p-8">
            <div className="inline-flex w-full flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="text-2xl text-zinc-900">Public review summary anatomy</h3>
              <span className="text-xs font-semibold text-violet-950">Illustrative · Not a live review record</span>
            </div>
            <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 xl:grid-cols-4">
              {FIELDS.map((field) => (
                <div key={field} className="inline-flex flex-col items-start gap-3 border-t border-zinc-300 py-5">
                  <p className="self-stretch text-sm leading-5 text-stone-500">{field}</p>
                  <p className="self-stretch text-lg text-violet-950">Not supplied</p>
                </div>
              ))}
            </div>
            <p className="max-w-[1100px] text-base leading-6 text-stone-500">
              This anatomy explains what a source-bound public review summary needs. Internal claim identities, statements, sources, approvals and audit records are controlled—not exposed as a public administration console.
            </p>
          </div>

          <div className="flex flex-col gap-4 self-stretch">
            <h3 className="self-stretch text-2xl text-white">Approval follows the statement’s scope.</h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {APPROVERS.map((approver) => (
                <div key={approver.title} className="inline-flex flex-1 flex-col items-start gap-3">
                  <p className="self-stretch text-base text-orange-300">{approver.title}</p>
                  <p className="self-stretch text-base leading-6 text-zinc-300">{approver.description}</p>
                </div>
              ))}
            </div>
            <p className="self-stretch text-sm leading-5 text-zinc-300">
              These are publication-accountability requirements, not named appointments. Editorial,
              developer-experience and accessibility changes cannot change the underlying claim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

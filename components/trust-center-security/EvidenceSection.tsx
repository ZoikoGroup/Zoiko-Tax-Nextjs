import { ArrowIcon, LinkColumn, NoticeCard, SectionHeading, SectionShell, StateCard } from "./shared";

const STATES = [
  { icon: "file-text", title: "Public", description: "Approved, scoped summary may be published." },
  { icon: "folder-lock", title: "Controlled request", description: "Eligibility and review required; access is not guaranteed." },
  { icon: "file-question", title: "Unavailable", description: "Source absent or approval incomplete; no artifact offered." },
  { icon: "archive", title: "Retired", description: "Withdrawn or superseded evidence is not current assurance." },
];

const ROWS = [
  { type: "Architecture", scope: "Approved high-level scope summary only.", controlled: "Sensitive diagrams and deployment detail." },
  { type: "Policy", scope: "Approved policy summary only.", controlled: "Internal policies and operational procedures." },
  { type: "Audit / assessment", scope: "Title and scope only where explicitly approved.", controlled: "Scoped reports and assessment detail." },
  { type: "Penetration testing", scope: "High-level summary only if verified and approved.", controlled: "Reports, findings and exploit detail." },
  { type: "Questionnaires", scope: "Availability only under a governed process.", controlled: "Scoped responses and supporting material." },
  { type: "Certification", scope: "Only a current, scoped, approved artifact.", controlled: "Controlled artifact where visibility requires it." },
];

const GATES = [
  { title: "Eligibility", description: "Must be defined by a current, source-approved process." },
  { title: "NDA & permitted scope", description: "Any confidentiality obligations and access limits require approved terms." },
  { title: "Trust / Legal / Security review", description: "Access remains conditional on the governed review and authorization required by the source." },
];

export default function EvidenceSection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="11 / EVIDENCE & ASSURANCE"
          title="Public clarity. Controlled depth."
          description="Different evidence types have different publication boundaries. No approved artifact details are supplied: these are evidence requirements, not available files or downloadable reports."
        />

        <div className="flex flex-col gap-4 self-stretch">
          <p className="text-xs font-bold text-violet-950">ILLUSTRATIVE STATES · NOT AN ARTIFACT CATALOG</p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {STATES.map((state) => (
              <StateCard key={state.title} title={state.title} description={state.description} icon={state.icon} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start self-stretch rounded-3xl bg-white p-6 outline outline-1 outline-offset-[-1px] outline-zinc-300 sm:p-7">
          <div className="inline-flex w-full flex-col gap-2 pb-5 lg:flex-row lg:gap-6">
            <p className="w-full text-xs font-bold text-violet-950 lg:w-48 lg:shrink-0">EVIDENCE TYPE</p>
            <p className="flex-1 text-xs font-bold text-violet-950">POTENTIAL PUBLIC SCOPE</p>
            <p className="flex-1 text-xs font-bold text-violet-950">CONTROLLED DETAIL</p>
          </div>
          {ROWS.map((row) => (
            <div
              key={row.type}
              className="inline-flex w-full flex-col gap-2 border-t border-zinc-300 py-5 lg:flex-row lg:gap-6"
            >
              <div className="inline-flex w-full flex-col items-start gap-2 lg:w-48 lg:shrink-0">
                <p className="self-stretch text-base text-zinc-900">{row.type}</p>
                <p className="self-stretch text-xs leading-5 text-violet-950">
                  Approved artifact details not supplied
                </p>
              </div>
              <p className="flex-1 text-base leading-6 text-stone-500">{row.scope}</p>
              <p className="flex-1 text-base leading-6 text-stone-500">{row.controlled}</p>
            </div>
          ))}
        </div>

        <div className="inline-flex w-full flex-col items-start gap-12 rounded-3xl bg-[rgba(48,17,83,1)] p-6 sm:p-9 lg:flex-row">
          <div className="inline-flex w-full flex-col items-start gap-4 lg:w-96 lg:shrink-0">
            <h3 className="self-stretch text-3xl font-bold leading-9 text-white">
              A request is not an access approval.
            </h3>
            <p className="self-stretch text-base leading-6 text-zinc-300">
              Request process details are not supplied. No request endpoint, evidence account or guaranteed
              fulfillment is presented.
            </p>
          </div>
          <div className="inline-flex w-full flex-1 flex-col items-start gap-5">
            {GATES.map((gate) => (
              <div key={gate.title} className="flex flex-col items-start gap-2 self-stretch">
                <p className="text-base text-orange-300">{gate.title}</p>
                <p className="self-stretch text-base leading-6 text-zinc-300">{gate.description}</p>
              </div>
            ))}
          </div>
        </div>

        <LinkColumn 
          label={
            <span className="inline-flex items-center gap-1.5">
              Evidence & Auditability
              <ArrowIcon white={false} />
            </span>
          } 
          route="/trust/evidence-auditability/" 
        />

        <NoticeCard
          title="No public sensitive-report downloads"
          description={
            <div className="max-w-[1100px]">
              A summary cannot stand in for a controlled report. Absent or ambiguous artifact evidence must remain unavailable rather than being replaced with a badge, certificate or implied assurance.
            </div>
          }
        />
      </div>
    </SectionShell>
  );
}

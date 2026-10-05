import { NoticeCard, SectionHeading, SectionShell } from "./shared";

const TOPICS = [
  { topic: "Data in transit", scope: "Approved transmission boundaries and protection scope." },
  { topic: "Data at rest", scope: "Approved stored-data scope and protection statements." },
  { topic: "Key management", scope: "Approved authority, lifecycle and visibility limits for key handling." },
  { topic: "Sensitive data", scope: "Approved data classification, access and handling boundaries." },
  { topic: "Backups & copies", scope: "Approved copy scope, handling and responsibility boundaries." },
  { topic: "Deletion & retention", scope: "Approved contractual and legal scope, including exceptions." },
  { topic: "Residency", scope: "Approved processing-location scope and contract applicability." },
];

export default function DataProtectionSection() {
  return (
    <SectionShell className="bg-slate-900">
      <div className="flex flex-col gap-9">
        <SectionHeading
          dark
          eyebrow="04 / DATA PROTECTION"
          title="State the boundary before the guarantee."
          description="Data-protection statements require both a current source and a defined service, data and contract scope. No algorithm, key size, retention period or residency guarantee is established here."
        />

        <NoticeCard
          dark
          title="Cryptographic specifics require current evidence and approval."
          description="Transit, storage and key-management detail must be verified independently. A conceptual data layer is not proof of encryption or a cryptographic implementation."
        />

        <div className="flex flex-col items-start self-stretch rounded-3xl bg-white p-6 sm:p-7">
          <div className="inline-flex w-full flex-col gap-2 pb-5 lg:flex-row lg:gap-7">
            <p className="w-full text-xs font-bold text-violet-950 lg:w-60 lg:shrink-0">PUBLICATION TOPIC</p>
            <p className="flex-1 text-xs font-bold text-violet-950">REQUIRED SOURCE & SCOPE</p>
            <p className="w-full text-xs font-bold text-violet-950 lg:w-60 lg:shrink-0">REVIEW GATE</p>
          </div>
          {TOPICS.map((row) => (
            <div
              key={row.topic}
              className="inline-flex w-full flex-col gap-2 border-t border-zinc-300 py-5 lg:flex-row lg:gap-7"
            >
              <p className="w-full text-base text-zinc-900 lg:w-60 lg:shrink-0">{row.topic}</p>
              <p className="flex-1 text-base leading-6 text-stone-500">{row.scope}</p>
              <p className="w-full whitespace-pre-line text-sm leading-5 text-violet-950 lg:w-60 lg:shrink-0">
                {"Not supplied\nScope + approval required"}
              </p>
            </div>
          ))}
        </div>

        <div className="inline-flex w-full flex-col items-start gap-6 lg:flex-row lg:gap-10">
          <div className="inline-flex flex-1 flex-col items-start gap-1.5 py-3.5">
            <span className="self-stretch text-base font-semibold leading-6 text-orange-300">Privacy →</span>
            <span className="self-stretch text-xs leading-5 text-zinc-300">/trust/privacy/</span>
          </div>
          <div className="inline-flex flex-1 flex-col items-start gap-1.5 py-3.5">
            <span className="self-stretch text-base font-semibold leading-6 text-orange-300">
              Data Processing & Residency →
            </span>
            <span className="self-stretch text-xs leading-5 text-zinc-300">
              Named governed destination · Exact route not supplied
            </span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

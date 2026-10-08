import { SectionHeading, SectionShell, NoticeCard } from "./shared";
import Image from "next/image";

const ACCESS_DEFINITIONS = [
  { state: "PUBLIC STATEMENT", meaning: "An approved disclosure or summary.", rule: <>Read the stated scope and date. A summary may have no public<br className="hidden md:block" />proof.</> },
  { state: "PUBLIC EVIDENCE", meaning: <>A specifically approved, publicly shareable<br className="hidden md:block" />source.</>, rule: <>Inspect the actual source and its limits. This label is not an<br className="hidden md:block" />inventory.</> },
  { state: "CONTROLLED — REQUEST", meaning: <>Material with a source-approved access<br className="hidden md:block" />policy.</>, rule: <>Access is conditional; eligibility, identity, NDA or sharing terms<br className="hidden md:block" />apply only if required by the actual policy.</> },
  { state: "NOT PUBLISHED", meaning: "No approved public material is supplied.", rule: "Do not infer a control, document, access route or availability." },
  { state: "SUPERSEDED", meaning: <>Historical material replaced by a later<br className="hidden md:block" />approved source.</>, rule: "Retain historical context. Never treat it as current assurance." },
];

export default function EvidenceStatusSection() {
  return (
    <SectionShell className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/about-us/c8523f5eef602c0fe8b5a3e644ae8c32d9eb960f.jpg" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(48,17,83,0.8)]" />
      </div>
      <div className="flex flex-col gap-10 relative z-10">
        <SectionHeading
          dark
          eyebrow="EVIDENCE LITERACY"
          title="A statement is not the same as its proof."
          description={<>Access labels explain how to read an approved source. They are not certifications, entitlements or claims that<br className="hidden md:block" />documents are available.</>}
        />

        <div className="flex flex-col rounded-3xl bg-[rgba(29,3,59,1)] p-6 shadow-sm border border-[rgba(255,255,255,0.15)] md:p-10">
          <p className="mb-8 text-xs font-bold tracking-wider text-orange-400"><span className="uppercase">ILLUSTRATIVE STATE ANATOMY</span> - Not a report or file listing</p>
          
          <div className="hidden grid-cols-12 gap-6 border-b border-white/10 pb-4 md:grid">
            <div className="col-span-3 text-xs font-bold uppercase tracking-wider text-slate-400">ACCESS LABEL</div>
            <div className="col-span-4 text-xs font-bold uppercase tracking-wider text-slate-400">WHAT IT MEANS</div>
            <div className="col-span-5 text-xs font-bold uppercase tracking-wider text-slate-400">HOW TO USE IT</div>
          </div>

          <div className="flex flex-col text-sm">
            {ACCESS_DEFINITIONS.map((def, i) => (
              <div key={i} className="grid grid-cols-1 gap-4 border-b border-white/5 last:border-b-0 py-6 md:grid-cols-12 md:gap-6">
                <div className="col-span-1 font-semibold text-white md:col-span-3">{def.state}</div>
                <div className="col-span-1 text-slate-300 md:col-span-4">{def.meaning}</div>
                <div className="col-span-1 text-slate-400 md:col-span-5">{def.rule}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-12 md:px-10">
          <div className="flex flex-col gap-2 md:col-span-3">
            <span className="text-[13px] font-bold text-white">Required source context</span>
            <span className="text-[13px] text-slate-300">Source identity · exact scope · approved owner</span>
          </div>
          <div className="flex flex-col gap-2 md:col-span-4">
            <span className="text-[13px] font-bold text-white">Required time context</span>
            <span className="text-[13px] text-slate-300">Reviewed / effective date · currentness state</span>
          </div>
          <div className="flex flex-col gap-2 md:col-span-5">
            <span className="text-[13px] font-bold text-white">Required access context</span>
            <span className="text-[13px] text-slate-300">Public or controlled · approved sharing rules</span>
          </div>
        </div>

        <NoticeCard
          dark
          title="No blanket right of access"
          description="Public trust information must not be sales-gated. Controlled material may require review under an approved policy; requesting it does not guarantee access. Approved access policy and artifact inventory: Not supplied."
          className="!bg-[rgba(255,255,255,0.03)] !border-[rgba(255,255,255,0.15)]"
        />
      </div>
    </SectionShell>
  );
}

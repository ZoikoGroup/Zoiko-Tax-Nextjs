import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const TOPICS = [
  {
    title: "Jurisdiction & legal basis",
    description: <span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Approved transfer and legal-basis<br/>information is jurisdiction-specific. Do not<br/>infer a mechanism or legal conclusion from<br/>storage, processing or infrastructure<br/>language.</span>,
    qualifier: "No legal mechanism supplied."
  },
  {
    title: "Contracts & DPA authority",
    description: <span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">The applicable contract and approved DPA /<br/>privacy source govern the relevant<br/>commitments. A public overview does not<br/>replace customer-specific contractual<br/>authority.</span>,
    qualifier: "No DPA source or terms supplied."
  },
  {
    title: "Support, rights & lawful access",
    description: <span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">International support, government or lawful<br/>access, and privacy rights require governed<br/>disclosures. No actual access rule or cross-<br/>border support arrangement is established.</span>,
    qualifier: "Approved Privacy / Legal source required."
  }
];

export default function CrossBorderTransfersSection() {
  return (
    <SectionShell id="cross-border-transfers" className="bg-transparent" imageSrc="/about-us/Cross-border transfers and privacy (1).png">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="CROSS-BORDER TRANSFERS & PRIVACY"
          title="Technical location is not a legal mechanism."
          description="Technical location controls do not create or interpret legal transfer mechanisms."
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TOPICS.map((topic, i) => (
            <div key={i} className="flex flex-col gap-3.5 rounded-2xl bg-[rgba(29,3,59,1)] border border-[rgba(118,89,137,1)] p-6">
              <h4 className="text-[22px] font-normal text-white">{topic.title}</h4>
              <p className="text-[17px] font-normal leading-relaxed text-[rgba(217,208,223,1)]">
                {topic.description}
              </p>
              <span className="text-[14px] font-semibold text-[rgba(244,162,97,1)] mt-auto">
                {topic.qualifier}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4.5 rounded-2xl bg-[rgba(29,3,59,1)] border border-[rgba(118,89,137,1)] p-6">
          <Info className="w-5.5 h-5.5 text-[rgba(244,162,97,1)] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="text-[17px] font-bold text-white">
              Keep legal interpretation with Privacy / Legal
            </h4>
            <p className="text-[17px] font-normal leading-relaxed text-[rgba(217,208,223,1)] whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">
              This is a technical scope guide, not legal advice. No transfer basis, standard mechanism, government-access rule or contractual interpretation is<br/>inferred. Privacy rights and approved transfer disclosures belong in the canonical privacy material.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between border-t border-[rgba(118,89,137,1)] pt-8">
          <div className="flex flex-col gap-1 shrink-0">
            <Link
              href="/trust/privacy/"
              className="text-[15px] font-semibold text-[rgba(244,162,97,1)] hover:underline flex items-center gap-1.5"
            >
              Privacy & Data Protection <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-[12px] text-[rgba(217,208,223,1)]">/trust/privacy/</span>
          </div>
          <p className="text-[15px] font-normal text-[rgba(217,208,223,1)] md:text-right">
            The source for approved privacy, transfer and contractual interpretation — not a residency badge.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

import { SectionHeading, SectionShell } from "../trust-center/shared";
import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TOPICS = [
  {
    title: "Jurisdiction & legal basis",
    description: "Approved transfer and legal-basis information is jurisdiction-specific. Do not infer a mechanism or legal conclusion from storage, processing or infrastructure language.",
    qualifier: "No legal mechanism supplied."
  },
  {
    title: "Contracts & DPA authority",
    description: "The applicable contract and approved DPA / privacy source govern the relevant commitments. A public overview does not replace customer-specific contractual authority.",
    qualifier: "No DPA source or terms supplied."
  },
  {
    title: "Support, rights & lawful access",
    description: "International support, government or lawful access, and privacy rights require governed disclosures. No actual access rule or cross-border support arrangement is established.",
    qualifier: "Approved Privacy / Legal source required."
  }
];

export default function CrossBorderTransfersSection() {
  return (
    <SectionShell className="bg-[#fdfaff] relative overflow-hidden">
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 pointer-events-none">
        <Image src="/images/data-processing-residency/cross_border_transfers.png" alt="" fill className="object-cover object-left" />
      </div>

      <div className="flex flex-col gap-12 relative z-10 max-w-6xl mx-auto w-full">
        <SectionHeading
          eyebrow="CROSS-BORDER TRANSFERS & PRIVACY"
          title="Technical location is not a legal mechanism."
          description="Technical location controls do not create or interpret legal transfer mechanisms."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOPICS.map((item, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm border border-purple-100">
              <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
              <p className="text-sm text-slate-600 flex-1">{item.description}</p>
              <div className="pt-4 border-t border-purple-50">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-700">{item.qualifier}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          <div className="flex items-start gap-4 rounded-2xl bg-purple-50/50 border border-purple-200 p-6 flex-1">
            <Info className="h-6 w-6 text-purple-700 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-2">
              <span className="text-base font-bold text-slate-900">Keep legal interpretation with Privacy / Legal</span>
              <span className="text-sm text-slate-700 leading-relaxed">This is a technical scope guide, not legal advice. No transfer basis, standard mechanism, government-access rule or contractual interpretation is inferred. Privacy rights and approved transfer disclosures belong in the canonical privacy material.</span>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-[#1f0b40] border border-[#2a0c4e] p-6 flex-1 lg:max-w-md">
            <Link href="/trust/privacy/" className="text-lg font-bold text-white hover:text-purple-300 transition-colors">
              Privacy & Data Protection →
            </Link>
            <span className="text-sm text-slate-400 mt-2">
              The source for approved privacy, transfer and contractual interpretation — not a residency badge.
            </span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

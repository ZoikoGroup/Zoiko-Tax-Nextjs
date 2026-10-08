import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const CARDS = [
  {
    title: "Public summary",
    desc: "Approved information intended for\npublic disclosure. This page provides\nreview concepts, not a verified location\ninventory."
  },
  {
    title: "Controlled-on-request",
    desc: "Conditional disclosure only where an\napproved process exists. No portal,\nNDA or response promise is\nestablished."
  },
  {
    title: "Customer-specific",
    desc: "Confirmation tied to the exact\ncustomer scope and relevant contract.\nA public summary cannot substitute for\nit."
  },
  {
    title: "Unavailable",
    desc: "Evidence not supplied or not approved\nfor disclosure. No positive location or\ncontrol claim follows."
  }
];

const TABLE_ROWS = [
  {
    topic: "Residency / deployment summary",
    source: "Current approved service, environment and data-domain summary",
    availability: "Not published in supplied sources"
  },
  {
    topic: "Architecture material",
    source: "Sensitive details controlled only by an approved disclosure process",
    availability: "Not published in supplied sources"
  },
  {
    topic: "DPA / privacy material",
    source: "Approved Privacy / Legal source; exact DPA source not supplied",
    availability: "Not published in supplied sources"
  },
  {
    topic: "Current subprocessor source",
    source: "Named governed source; exact URL and version not supplied",
    availability: "Not published in supplied sources"
  },
  {
    topic: "Security evidence",
    source: "Approved Trust / Security source and exact control scope",
    availability: "Not published in supplied sources"
  },
  {
    topic: "Customer-specific confirmation",
    source: "Exact service, capability, environment, data domain and applicable terms",
    availability: "Not published in supplied sources"
  }
];

export default function EvidenceProcurementSection() {
  return (
    <SectionShell id="evidence-procurement" className="bg-transparent" imageSrc="/existing-tax-engines/0.png">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="EVIDENCE & PROCUREMENT"
          title="Disclosure state is part of the evidence."
          description={<span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">A public overview is not a customer-specific confirmation. No residency report, architecture document, DPA or subprocessor source is<br/>supplied for this view.</span>}
        />

        <div className="flex flex-col xl:flex-row gap-4">
          {CARDS.map((card, i) => (
            <div key={i} className="flex-1 p-6 bg-[rgba(242,234,248,1)] rounded-2xl border border-[rgba(216,206,221,1)] flex flex-col gap-3.5">
              <h4 className="text-lg font-normal text-[rgba(48,17,83,1)] leading-6">{card.title}</h4>
              <p className="text-sm font-normal text-[rgba(102,95,105,1)] leading-6 whitespace-pre-line">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden border border-[rgba(216,206,221,1)] bg-white w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[rgba(242,234,248,1)] border-b border-[rgba(216,206,221,1)]">
                <th className="py-4 px-6 text-xs font-normal text-[rgba(24,20,27,1)] md:w-80">Evidence topic</th>
                <th className="py-4 px-6 text-xs font-normal text-[rgba(24,20,27,1)] md:w-[550px]">Approved source / disclosure boundary</th>
                <th className="py-4 px-6 text-xs font-normal text-[rgba(24,20,27,1)]">Availability in this view</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, i) => (
                <tr key={i} className="border-b border-[rgba(216,206,221,1)] last:border-b-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-5 px-6 text-base font-normal text-[rgba(24,20,27,1)] align-top">{row.topic}</td>
                  <td className="py-5 px-6 text-base font-normal text-[rgba(102,95,105,1)] align-top">{row.source}</td>
                  <td className="py-5 px-6 text-base font-normal text-[rgba(102,95,105,1)] align-top">{row.availability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col md:flex-row p-8 bg-[rgba(48,17,83,1)] rounded-[24px] gap-10">
          <div className="flex-1 flex flex-col gap-3.5">
            <h4 className="text-2xl font-normal text-white">Ask for scope before asking for a promise.</h4>
            <p className="text-base font-normal leading-7 text-[rgba(216,206,221,1)] whitespace-pre-line">
              Use only an approved evidence-request process, if one exists, with the minimum necessary information.{"\n"}Do not submit customer terms, detailed architectures, tenant IDs, PII or secret material through public{"\n"}navigation. No actual request process is guaranteed here.
            </p>
          </div>
          
          <div className="flex flex-col gap-6 md:w-80 shrink-0">
            <div className="flex flex-col gap-1.5">
              <Link
                href="/trust/evidence-auditability/"
                className="text-base font-normal text-[rgba(244,162,97,1)] hover:underline flex items-center gap-1.5"
              >
                Evidence &amp; Auditability <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs font-normal text-[rgba(216,206,221,1)]">/trust/evidence-auditability/</span>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <Link
                href="/trust/"
                className="text-base font-normal text-[rgba(244,162,97,1)] hover:underline flex items-center gap-1.5"
              >
                Trust Center <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs font-normal text-[rgba(216,206,221,1)]">/trust/</span>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

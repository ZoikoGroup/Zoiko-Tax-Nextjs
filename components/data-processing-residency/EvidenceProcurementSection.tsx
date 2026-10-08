import { SectionHeading, SectionShell } from "../trust-center/shared";
import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CARDS = [
  { state: "Public summary", description: "Approved information intended for public disclosure. This page provides review concepts, not a verified location inventory." },
  { state: "Controlled-on-request", description: "Conditional disclosure only where an approved process exists. No portal, NDA or response promise is established." },
  { state: "Customer-specific", description: "Confirmation tied to the exact customer scope and relevant contract. A public summary cannot substitute for it." },
  { state: "Unavailable", description: "Evidence not supplied or not approved for disclosure. No positive location or control claim follows." }
];

const MATRIX = [
  { topic: "Residency / deployment summary", boundary: "Current approved service, environment and data-domain summary", availability: "Not published in supplied sources" },
  { topic: "Architecture material", boundary: "Sensitive details controlled only by an approved disclosure process", availability: "Not published in supplied sources" },
  { topic: "DPA / privacy material", boundary: "Approved terms governing the relevant data domain", availability: "Not supplied in this view" },
  { topic: "Security posture / certs", boundary: "Approved control inventory or certification for the scoped service", availability: "Source required" },
  { topic: "Audit / compliance reports", boundary: "Assessor reports subject to governed disclosure rules", availability: "Controlled access; source required" }
];

export default function EvidenceProcurementSection() {
  return (
    <SectionShell className="bg-slate-50 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 h-full w-1/3 opacity-5 pointer-events-none">
        <Image src="/images/data-processing-residency/evidence_procurement.png" alt="" fill className="object-cover object-bottom" />
      </div>

      <div className="flex flex-col gap-12 relative z-10 max-w-6xl mx-auto w-full">
        <SectionHeading
          eyebrow="EVIDENCE & PROCUREMENT"
          title="Disclosure state is part of the evidence."
          description="A public overview is not a customer-specific confirmation. No residency report, architecture document, DPA or subprocessor source is supplied for this view."
        />

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex flex-col gap-4 lg:w-1/3">
            {CARDS.map((card, i) => (
              <div key={i} className="flex flex-col gap-2 rounded-2xl bg-white p-5 shadow-sm border border-slate-200">
                <span className="text-sm font-bold text-slate-900">{card.state}</span>
                <p className="text-sm text-slate-600">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 lg:w-2/3">
            <div className="w-full rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-100 border-b border-slate-200 p-4">
                <span className="text-xs font-bold text-slate-500 uppercase col-span-1">Evidence topic</span>
                <span className="text-xs font-bold text-slate-500 uppercase col-span-1 hidden md:block">Approved source / disclosure boundary</span>
                <span className="text-xs font-bold text-slate-500 uppercase col-span-1 hidden md:block">Availability in this view</span>
              </div>
              
              <div className="flex flex-col">
                {MATRIX.map((item, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-3 p-5 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors gap-4 md:gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-slate-400 uppercase md:hidden">Evidence topic</span>
                      <span className="text-sm font-bold text-slate-900">{item.topic}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-slate-400 uppercase md:hidden">Approved source / disclosure boundary</span>
                      <span className="text-sm text-slate-600">{item.boundary}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-slate-400 uppercase md:hidden">Availability in this view</span>
                      <span className="text-sm font-semibold text-orange-600">{item.availability}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl bg-orange-50 border border-orange-200 p-6">
              <Info className="h-6 w-6 text-orange-600 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-2">
                <span className="text-base font-bold text-slate-900">Evidence visibility matters</span>
                <span className="text-sm text-slate-700 leading-relaxed">
                  Do not distribute restricted evidence. A missing source state means no claim is approved for this audience.
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-2">
              <Link href="/trust/evidence-auditability/" className="text-base font-semibold text-orange-600 hover:text-orange-700">
                Evidence & Auditability →
              </Link>
              <Link href="/trust/" className="text-base font-semibold text-orange-600 hover:text-orange-700">
                Trust Center →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

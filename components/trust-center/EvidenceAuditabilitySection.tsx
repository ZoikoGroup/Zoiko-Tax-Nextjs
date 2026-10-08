import { SectionHeading, SectionShell, NoticeCard } from "./shared";
import Link from "next/link";
import { GitCommit, History, Workflow } from "lucide-react";

export default function EvidenceAuditabilitySection() {
  return (
    <SectionShell className="bg-[#fdfaff]">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="EVIDENCE & AUDITABILITY"
          title="Inspect the context behind an outcome."
          description="Supported traces, replay and source-version context can help investigation. They do not automatically establish legal correctness, accuracy or certification."
        />

        <div className="flex flex-col rounded-3xl bg-white p-6 shadow-sm border border-purple-100 md:p-10">
          <p className="mb-8 text-xs font-bold uppercase tracking-wider text-orange-600">CONCEPTUAL EVIDENCE PATH · Not an artifact inventory</p>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Workflow className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Decision trace</h3>
              <p className="text-sm text-slate-600">Input context, decision path and provenance, where source-supported.</p>
              <div className="mt-4 flex flex-col gap-1 border-t border-slate-100 pt-4">
                <span className="text-xs font-bold uppercase text-slate-500">Approved support / scope</span>
                <span className="text-sm font-medium text-orange-600">Not supplied</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <GitCommit className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Replay context</h3>
              <p className="text-sm text-slate-600">Source and rule versions needed to interpret a supported replay.</p>
              <div className="mt-4 flex flex-col gap-1 border-t border-slate-100 pt-4">
                <span className="text-xs font-bold uppercase text-slate-500">Approved support / scope</span>
                <span className="text-sm font-medium text-orange-600">Not supplied</span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <History className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Lineage & history</h3>
              <p className="text-sm text-slate-600">Evidence relationships and historical state, separate from current approval.</p>
              <div className="mt-4 flex flex-col gap-1 border-t border-slate-100 pt-4">
                <span className="text-xs font-bold uppercase text-slate-500">Approved support / scope</span>
                <span className="text-sm font-medium text-orange-600">Not supplied</span>
              </div>
            </div>
          </div>
          
          <p className="mt-8 text-xs text-slate-400 border-t border-slate-100 pt-6">Text alternative: inspect the decision trace, interpret its replay using source-version context, then distinguish lineage and historical state from current approved evidence.</p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <Link href="/trust-center/evidence-auditability" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 w-fit shrink-0">
            Review Evidence & Auditability <span>↗</span>
          </Link>

          <NoticeCard
            className="flex-1 lg:max-w-2xl bg-white border border-slate-200"
            title="Access and history remain explicit"
            description="Public or controlled evidence is conditional on the approved source and sharing policy. Source inventory, current artifacts and access terms: Not supplied. Superseded records remain historical; they are not current approval."
          />
        </div>
      </div>
    </SectionShell>
  );
}

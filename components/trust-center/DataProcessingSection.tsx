import { SectionHeading, SectionShell, NoticeCard } from "./shared";
import Link from "next/link";

export default function DataProcessingSection() {
  return (
    <SectionShell className="bg-white">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="DATA PROCESSING & RESIDENCY"
          title="Global architecture is not universal residency."
          description="Location and choice must be established by an approved source for the exact data domain—not inferred from platform architecture or Coverage."
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-slate-900">Ask where. Then ask what the answer covers.</h3>
              <p className="text-base text-slate-600">Personal-data disclosure belongs to Privacy & Data Protection. Processing location, residency options and transfer scope belong here. One does not substitute for the other.</p>
            </div>
            
            <div className="flex flex-col gap-4">
              <Link href="/trust-center/data-processing-residency" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
                Review processing & residency <span>↗</span>
              </Link>
              <Link href="/trust-center/privacy" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
                Review privacy disclosure <span>↗</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl bg-slate-50 p-6 md:p-8 border border-slate-100">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500">SOURCE-REQUIRED SCOPE</p>
            
            <div className="flex flex-col gap-4 border-b border-slate-200 pb-6">
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-slate-900">Service & environment</span>
                <span className="text-sm text-slate-600">Exact service, environment and data-domain scope.</span>
                <span className="text-sm font-medium text-orange-600">Not supplied · Source required</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-slate-900">Regional option or choice</span>
                <span className="text-sm text-slate-600">Source-approved availability, limitations and effective date.</span>
                <span className="text-sm font-medium text-orange-600">Not supplied · Source required</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-slate-900">Transfers & subprocessors</span>
                <span className="text-sm text-slate-600">Approved transfer scope and subprocessor disclosure.</span>
                <span className="text-sm font-medium text-orange-600">Not supplied · Source required</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-slate-500">Approved owner</span>
                <span className="text-sm text-slate-900 font-medium">Not supplied</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase text-slate-500">Effective date</span>
                <span className="text-sm text-slate-900 font-medium">Not supplied</span>
              </div>
            </div>
          </div>
        </div>

        <NoticeCard
          title="No implied locality or choice"
          description="No country list, location option, retention policy or subprocessor inventory is established here. An absent source is not permission to infer a regional choice."
        />
      </div>
    </SectionShell>
  );
}

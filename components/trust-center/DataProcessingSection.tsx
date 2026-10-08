import { SectionHeading, SectionShell, NoticeCard } from "./shared";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function DataProcessingSection() {
  return (
    <SectionShell className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="DATA PROCESSING & RESIDENCY"
          title="Global architecture is not universal residency."
          description="Location and choice must be established by an approved source for the exact data domain—not inferred from platform architecture or Coverage."
        />

        <div className="flex flex-col xl:flex-row xl:justify-between gap-10">
          <div className="flex flex-col gap-6 w-full xl:w-auto">
            <div className="flex flex-col gap-2">
              <h3 className="text-[21px] font-semibold text-[rgba(24,20,27,1)]">Ask where. Then ask what the<br className="hidden xl:block" />answer covers.</h3>
              <p className="text-[15px] text-[rgba(102,95,105,1)] leading-relaxed">Personal-data disclosure belongs to Privacy & Data<br className="hidden xl:block" />Protection. Processing location, residency options and<br className="hidden xl:block" />transfer scope belong here. One does not substitute for<br className="hidden xl:block" />the other.</p>
            </div>
            
            <div className="flex flex-col gap-8 mt-4">
              <Link href="/trust-center/data-processing-residency" className="flex items-center justify-between group cursor-pointer w-full">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-semibold text-[rgba(164,70,34,1)]">Review processing & residency</span>
                  <span className="text-[13px] text-slate-400">/trust/data-processing-residency/</span>
                </div>
                <div className="flex text-[rgba(164,70,34,1)]">
                  <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
                </div>
              </Link>
              <Link href="/trust-center/privacy" className="flex items-center justify-between group cursor-pointer w-full mt-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-semibold text-[rgba(164,70,34,1)]">Review privacy disclosure</span>
                  <span className="text-[13px] text-slate-400">/trust/privacy/</span>
                </div>
                <div className="flex text-[rgba(164,70,34,1)]">
                  <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col rounded-[16px] bg-[rgba(255,255,255,1)] p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.03)] border border-[rgba(216,206,221,1)] w-full xl:w-[790px] xl:h-[495px]">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[rgba(214,90,44,1)] mb-6">SOURCE-REQUIRED SCOPE</p>
            
            <div className="flex flex-col">
              <div className="flex flex-col gap-1 border-b border-slate-200 pb-5 mb-5">
                <span className="text-[15px] font-semibold text-[rgba(24,20,27,1)]">Service & environment</span>
                <span className="text-[13px] text-slate-500">Exact service, environment and data-domain scope.</span>
                <span className="text-[13px] mt-1 text-[rgba(24,20,27,1)]">
                  <span className="font-bold">Not supplied</span>
                  <span> - </span>
                  <span>Source required</span>
                </span>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-200 pb-5 mb-5">
                <span className="text-[15px] font-semibold text-[rgba(24,20,27,1)]">Regional option or choice</span>
                <span className="text-[13px] text-slate-500">Source-approved availability, limitations and effective date.</span>
                <span className="text-[13px] mt-1 text-[rgba(24,20,27,1)]">
                  <span className="font-bold">Not supplied</span>
                  <span> - </span>
                  <span>Source required</span>
                </span>
              </div>
              <div className="flex flex-col gap-1 border-b border-slate-200 pb-5 mb-5">
                <span className="text-[15px] font-semibold text-[rgba(24,20,27,1)]">Transfers & subprocessors</span>
                <span className="text-[13px] text-slate-500">Approved transfer scope and subprocessor disclosure.</span>
                <span className="text-[13px] mt-1 text-[rgba(24,20,27,1)]">
                  <span className="font-bold">Not supplied</span>
                  <span> - </span>
                  <span>Source required</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">Approved owner</span>
                <span className="text-[14px] text-[rgba(24,20,27,1)] font-semibold">Not supplied</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wider">Effective date</span>
                <span className="text-[14px] text-[rgba(24,20,27,1)] font-semibold">Not supplied</span>
              </div>
            </div>
          </div>
        </div>

        <NoticeCard
          title="No implied locality or choice"
          description="No country list, location option, retention policy or subprocessor inventory is established here. An absent source is not permission to infer a regional choice."
          className="!bg-[rgba(245,238,249,1)] !border-[rgba(216,206,221,1)]"
        />
      </div>
    </SectionShell>
  );
}

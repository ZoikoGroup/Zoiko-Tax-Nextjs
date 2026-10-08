import { SectionShell } from "./shared";
import Link from "next/link";
import { GitCommit, History, Workflow, ArrowUpRight } from "lucide-react";

export default function EvidenceAuditabilitySection() {
  return (
    <SectionShell className="bg-[rgba(250,243,255,1)]">
      <div className="w-full flex flex-col justify-start items-start gap-10">
        
        <div className="w-full flex flex-col justify-start items-start gap-4 overflow-hidden">
            <div className="self-stretch justify-start text-[rgba(214,90,44,1)] text-sm font-bold uppercase tracking-wider">EVIDENCE &amp; AUDITABILITY</div>
            <div className="self-stretch justify-start text-zinc-900 text-5xl font-bold leading-[47.52px]">Inspect the context behind an outcome.</div>
            <div className="w-full max-w-[1060px] justify-start text-[rgba(102,95,105,1)] text-xl font-normal leading-8">Supported traces, replay and source-version context can help investigation. They do not automatically establish legal correctness, accuracy or certification.</div>
        </div>
        
        <div className="w-full lg:w-[1280px] lg:h-[349px] p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-6 overflow-hidden">
            <div className="justify-start text-orange-600 text-xs font-bold">CONCEPTUAL EVIDENCE PATH · Not an artifact inventory</div>
            <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-5 overflow-hidden">
                
                <div className="flex-1 w-full p-6 bg-[rgba(245,238,249,1)] rounded-2xl flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                    <div className="self-stretch justify-start text-zinc-900 text-2xl font-normal">Decision trace</div>
                    <div className="self-stretch justify-start text-stone-500 text-base font-normal leading-7">Input context, decision path and provenance, where source-supported.</div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden pt-1">
                        <div className="self-stretch justify-start text-stone-500 text-xs font-normal">Approved support / scope</div>
                        <div className="self-stretch justify-start text-zinc-900 text-sm font-semibold leading-5">Not supplied</div>
                    </div>
                </div>
                
                <div className="flex-1 w-full p-6 bg-[rgba(245,238,249,1)] rounded-2xl flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                    <div className="self-stretch justify-start text-zinc-900 text-2xl font-normal">Replay context</div>
                    <div className="self-stretch justify-start text-stone-500 text-base font-normal leading-7">Source and rule versions needed to interpret a supported replay.</div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden pt-1">
                        <div className="self-stretch justify-start text-stone-500 text-xs font-normal">Approved support / scope</div>
                        <div className="self-stretch justify-start text-zinc-900 text-sm font-semibold leading-5">Not supplied</div>
                    </div>
                </div>
                
                <div className="flex-1 w-full p-6 bg-[rgba(245,238,249,1)] rounded-2xl flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                    <div className="self-stretch justify-start text-zinc-900 text-2xl font-normal">Lineage &amp; history</div>
                    <div className="self-stretch justify-start text-stone-500 text-base font-normal leading-7">Evidence relationships and historical state, separate from current approval.</div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden pt-1">
                        <div className="self-stretch justify-start text-stone-500 text-xs font-normal">Approved support / scope</div>
                        <div className="self-stretch justify-start text-zinc-900 text-sm font-semibold leading-5">Not supplied</div>
                    </div>
                </div>
                
            </div>
            <div className="self-stretch justify-start text-stone-500 text-sm font-normal leading-5">Text alternative: inspect the decision trace, interpret its replay using source-version context, then distinguish lineage and historical state from current approved evidence.</div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-10 overflow-hidden">
            <div className="w-full lg:w-96 flex flex-col justify-start items-start overflow-hidden">
                <div className="self-stretch py-2 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                    <div className="self-stretch flex justify-start items-center gap-2.5 overflow-hidden">
                        <Link href="/trust-center/evidence-auditability" className="flex-1 justify-start text-orange-800 text-base font-normal flex items-center gap-2 hover:text-orange-700">
                            Review Evidence &amp; Auditability
                            <ArrowUpRight className="text-orange-600 h-4 w-4" strokeWidth={2} />
                        </Link>
                    </div>
                    <div className="self-stretch justify-start text-stone-500 text-xs font-normal leading-5">/trust/evidence-auditability/</div>
                </div>
            </div>
            
            <div className="flex-1 w-full flex flex-col justify-start items-start overflow-hidden">
                <div className="self-stretch p-6 bg-[rgba(245,238,249,1)] rounded-2xl border border-[rgba(216,206,221,1)] flex flex-col justify-start items-start gap-2 overflow-hidden">
                    <div className="self-stretch justify-start text-zinc-900 text-sm font-bold">Access and history remain explicit</div>
                    <div className="self-stretch justify-start text-stone-500 text-sm font-normal leading-5">
                        Public or controlled evidence is conditional on the approved source and sharing policy. Source inventory, current artifacts and access terms: Not supplied. Superseded records remain historical; they are not current approval.
                    </div>
                </div>
            </div>
        </div>

      </div>
    </SectionShell>
  );
}

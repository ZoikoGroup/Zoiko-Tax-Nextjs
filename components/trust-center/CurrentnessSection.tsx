import { SectionHeading, SectionShell, NoticeCard } from "./shared";
import Image from "next/image";

export default function CurrentnessSection() {
  return (
    <SectionShell className="bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <Image src="/images/trust-center/currentness_and_updates.png" alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-10 relative z-10">
        <SectionHeading
          dark
          eyebrow="CURRENTNESS & UPDATES"
          title="Current means source-approved—not merely visible."
          description="A statement needs its own approved scope, owner and time context. Missing current-source metadata must not silently become a current claim."
        />

        <div className="flex flex-col rounded-3xl bg-slate-800 p-6 md:p-10 border border-slate-700">
          <div className="flex flex-col gap-2 border-b border-slate-700 pb-6 mb-6 md:flex-row md:items-center md:justify-between">
            <h3 className="text-xl font-bold text-white">Source record · Required metadata</h3>
            <div className="rounded-full bg-orange-500/20 px-4 py-2 text-sm font-semibold text-orange-400">
              Currentness: Not established
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex flex-col gap-1 border-b border-slate-700 pb-4">
              <span className="text-xs font-bold uppercase text-slate-400">Reviewed / effective date</span>
              <span className="text-sm font-medium text-white">Not supplied</span>
            </div>
            <div className="flex flex-col gap-1 border-b border-slate-700 pb-4">
              <span className="text-xs font-bold uppercase text-slate-400">Source / version / evidence reference</span>
              <span className="text-sm font-medium text-white">Not supplied</span>
            </div>
            <div className="flex flex-col gap-1 border-b border-slate-700 pb-4">
              <span className="text-xs font-bold uppercase text-slate-400">Accountable source owner</span>
              <span className="text-sm font-medium text-white">Not supplied</span>
            </div>
            <div className="flex flex-col gap-1 border-b border-slate-700 pb-4">
              <span className="text-xs font-bold uppercase text-slate-400">Scope / conditions / approval</span>
              <span className="text-sm font-medium text-white">Not supplied</span>
            </div>
            <div className="flex flex-col gap-1 border-b border-slate-700 pb-4 md:col-span-2">
              <span className="text-xs font-bold uppercase text-slate-400">Visibility / disclosure state</span>
              <span className="text-sm font-medium text-white">Exact evidence visibility not supplied</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-orange-400">Stale or conflicted</h4>
            <p className="text-sm text-slate-300">Without a positive claim when evidence is supplied elsewhere, conflicting sources require accountable owner review, not a geographic guess or a silently current label.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-orange-400">New or changing scope</h4>
            <p className="text-sm text-slate-300">New regions remain validation scope until approved. A region or data-domain change requires technical, Privacy / Legal and Trust approval with synchronized public content.</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-orange-400">Retired scope</h4>
            <p className="text-sm text-slate-300">Retired claims are historical only under governed disclosure. They must not appear as current availability or a selectable customer option.</p>
          </div>
        </div>

        <NoticeCard
          dark
          title="Publication must follow approved facts, not originate them."
          description="Platform source owners establish actual location and access facts; Privacy / Legal governs transfers and contracts; Security / Trust governs boundaries; Data Governance governs metadata; Product / Commercial confirms actual customer choice. Accountable identities are not supplied here. Core disclosures and source route labels must remain useful without Javascript or analytics. Location is not inferred from IP or geography, and disclosures are not removed by personalization or experiments. This static page illustrates the content contract; it does not claim runtime implementation."
        />
      </div>
    </SectionShell>
  );
}

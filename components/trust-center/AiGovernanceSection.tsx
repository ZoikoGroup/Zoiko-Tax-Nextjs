import { SectionHeading, SectionShell, NoticeCard } from "./shared";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function AiGovernanceSection() {
  return (
    <SectionShell className="bg-[#1a0b2e] relative overflow-hidden">
      <div className="absolute top-0 right-0 h-[600px] w-full max-w-4xl opacity-10 pointer-events-none">
        <Image src="/images/trust-center/ai_governance.png" alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-10 relative z-10">
        <SectionHeading
          dark
          eyebrow="AI GOVERNANCE"
          title="Assistance is not fiscal authority."
          description="Review the approved assistive role, authority boundaries and source-controlled governance—not product hype."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-8 rounded-3xl bg-[#2a0c4e] p-6 md:p-10 border border-white/10">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">GOVERNANCE BOUNDARY</span>
              <h3 className="text-2xl font-bold text-white">AI assistance does not independently authorize outcomes.</h3>
              <p className="text-base text-slate-300">AI assistance is not independent monetary, legal, filing or remittance authority. Governed human or deterministic-system authority must remain distinct from assistive output.</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 py-6">
              <div className="w-full rounded-xl border border-orange-500/20 bg-orange-500/10 p-4 text-center text-sm font-medium text-orange-200">
                Assistive output · Role requires an approved source
              </div>
              <ArrowDown className="text-slate-400" />
              <div className="w-full rounded-xl border border-white/20 bg-white/5 p-4 text-center text-sm font-medium text-white">
                Human / deterministic authority · Exact process source required
              </div>
            </div>
            
            <p className="text-xs text-slate-400">Diagram text alternative: assistive output is separate from authorized action. This is a boundary illustration, not an asserted operational workflow.</p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h4 className="text-xl font-bold text-white">What needs an approved source</h4>
              <div className="flex flex-col gap-4 border-l-2 border-orange-500 pl-4">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">Assistive role & service scope</span>
                  <span className="text-sm font-medium text-orange-400">Not supplied</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">Model governance & transparency</span>
                  <span className="text-sm font-medium text-orange-400">Not supplied</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">Evaluation methods & artifacts</span>
                  <span className="text-sm font-medium text-orange-400">Not supplied</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">Approved owner / reviewed date</span>
                  <span className="text-sm font-medium text-orange-400">Not supplied</span>
                </div>
              </div>
              <Link href="/trust-center/ai-governance" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300">
                Review AI Governance <span>↗</span>
              </Link>
            </div>

            <NoticeCard
              dark
              title="No inferred model or compliance facts"
              description="Model identities, evaluation outcomes, autonomy capabilities and compliance claims are not supplied. The authority boundary does not establish that a particular governance artifact is available."
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

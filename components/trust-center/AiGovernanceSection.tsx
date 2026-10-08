import { SectionShell } from "./shared";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function AiGovernanceSection() {
  return (
    <SectionShell className="relative overflow-hidden bg-[rgba(48,17,83,1)]">
      <div className="absolute inset-0 z-0">
        <Image src="/about-us/63e1d89d1d6149f3d7d6eaffb8ac7c591a6f139d.jpg" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-[rgba(48,17,83,0.8)]" />
      </div>
      
      <div className="w-full flex flex-col justify-start items-start gap-10 relative z-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
            <div className="self-stretch justify-start text-[rgba(214,90,44,1)] text-sm font-bold font-['Inter'] uppercase tracking-wider">AI GOVERNANCE</div>
            <div className="self-stretch justify-start text-white text-5xl font-bold font-['Inter'] leading-[47.52px]">Assistance is not fiscal authority.</div>
            <div className="w-full max-w-[1060px] justify-start text-zinc-300 text-xl font-normal font-['Inter'] leading-8">Review the approved assistive role, authority boundaries and source-controlled governance—not product hype.</div>
        </div>

        <div className="self-stretch flex flex-col lg:flex-row justify-start items-start gap-8 overflow-hidden">
            <div className="flex-1 w-full p-8 bg-[#1D033B] rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/15 flex flex-col justify-start items-start gap-6 overflow-hidden">
                <div className="justify-start text-orange-300 text-xs font-bold font-['Inter']">GOVERNANCE BOUNDARY</div>
                <div className="self-stretch justify-start text-white text-3xl font-normal font-['Inter'] leading-9">AI assistance does not independently authorize outcomes.</div>
                <div className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-7">AI assistance is not independent monetary, legal, filing or remittance authority. Governed human or deterministic-system authority must remain distinct from assistive output.</div>
                <div className="self-stretch flex flex-col justify-start items-start gap-3 overflow-hidden">
                    <div className="self-stretch p-4 bg-white/5 rounded-xl flex justify-start items-start overflow-hidden">
                        <div className="flex-1 justify-start text-white text-base font-normal font-['Inter']">Assistive output · Role requires an approved source</div>
                    </div>
                    <div className="w-full relative overflow-hidden flex justify-center">
                        <ArrowDown className="text-orange-300 h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div className="self-stretch p-4 bg-white/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-orange-300/40 flex justify-start items-start overflow-hidden">
                        <div className="flex-1 justify-start text-white text-base font-normal font-['Inter'] leading-6">Human / deterministic authority · Exact process source required</div>
                    </div>
                </div>
                <div className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">Diagram text alternative: assistive output is separate from authorized action. This is a boundary illustration, not an asserted operational workflow.</div>
            </div>

            <div className="w-full lg:w-[480px] p-8 bg-white/5 rounded-3xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-6 overflow-hidden">
                <div className="self-stretch justify-start text-white text-2xl font-normal font-['Inter']">What needs an approved source</div>
                
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                    <div className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter']">Assistive role &amp; service scope</div>
                    <div className="self-stretch justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Not supplied</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                    <div className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter']">Model governance &amp; transparency</div>
                    <div className="self-stretch justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Not supplied</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                    <div className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter']">Evaluation methods &amp; artifacts</div>
                    <div className="self-stretch justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Not supplied</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                    <div className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter']">Approved owner / reviewed date</div>
                    <div className="self-stretch justify-start text-white text-sm font-semibold font-['Inter'] leading-5">Not supplied</div>
                </div>
                
                <div className="self-stretch py-2 flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                    <div className="self-stretch flex justify-start items-center gap-2.5 overflow-hidden">
                        <Link href="/trust-center/ai-governance" className="flex-1 justify-start text-orange-300 text-base font-normal font-['Inter'] flex items-center gap-2 hover:text-orange-200">
                           Review AI Governance
                           <ArrowUpRight className="text-orange-300 h-4 w-4" strokeWidth={2} />
                        </Link>
                    </div>
                    <div className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-5">/trust/ai-governance/</div>
                </div>
            </div>
        </div>

        <div className="self-stretch p-6 bg-white/5 rounded-2xl outline outline-1 outline-offset-[-1px] outline-white/10 flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-white text-sm font-bold font-['Inter']">No inferred model or compliance facts</div>
            <div className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">Model identities, evaluation outcomes, autonomy capabilities and compliance claims are not supplied. The authority boundary does not establish that a particular governance artifact is available.</div>
        </div>
      </div>
    </SectionShell>
  );
}

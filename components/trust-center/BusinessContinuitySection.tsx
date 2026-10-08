import { Activity, RotateCcw, ClipboardCheck, ArrowUpRight } from "lucide-react";
import { SectionShell } from "./shared";
import Link from "next/link";
import Image from "next/image";

const TOPICS = [
  {
    icon: Activity,
    title: "Continuity posture",
    description: "Approved service scope, dependencies and recovery approach."
  },
  {
    icon: RotateCcw,
    title: "Recovery & backup",
    description: "Approved targets and backup posture, with explicit limitations."
  },
  {
    icon: ClipboardCheck,
    title: "Testing & evidence",
    description: "Source-verified test context, results and evidence access."
  }
];

export default function BusinessContinuitySection() {
  return (
    <SectionShell className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/existing-tax-engines/0.png" alt="Background" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-10 relative z-10">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold text-[rgba(214,90,44,1)] uppercase tracking-wider">
            BUSINESS CONTINUITY
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-[47.52px] text-[rgba(24,20,27,1)]">
            Review the posture. Don’t infer the promise.
          </h2>
          <p className="w-full max-w-[1060px] text-base sm:text-lg lg:text-xl lg:leading-8 text-[rgba(102,95,105,1)]">
            Continuity assurance must rest on approved recovery, backup and testing sources for the relevant service.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          {TOPICS.map((topic, i) => (
            <div key={i} className="flex flex-col gap-3 rounded-2xl bg-white p-6 border border-[rgba(216,206,221,1)] w-full lg:w-[411px] lg:h-[278px] justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(255,242,233,1)] text-[rgba(214,90,44,1)]">
                  <topic.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-normal text-[rgba(24,20,27,1)]">{topic.title}</h3>
                <p className="text-sm sm:text-[15px] text-[rgba(102,95,105,1)] leading-relaxed">{topic.description}</p>
              </div>
              <div className="flex flex-col gap-0.5 pt-2 border-t border-slate-100">
                <span className="text-xs text-[rgba(102,95,105,1)]">Approved source / scope</span>
                <span className="text-sm font-semibold text-[rgba(24,20,27,1)]">
                  Not supplied · Source required
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between pt-2">
          <Link href="/trust-center/business-continuity" className="flex items-center justify-between group cursor-pointer w-full lg:w-[430px] shrink-0">
            <div className="flex flex-col gap-0.5">
              <span className="text-base font-normal text-[rgba(164,70,34,1)] group-hover:opacity-80 transition-opacity">
                Review Business Continuity
              </span>
              <span className="text-[13px] text-[rgba(102,95,105,1)]">/trust/business-continuity/</span>
            </div>
            <div className="flex text-[rgba(214,90,44,1)]">
              <ArrowUpRight className="w-[18px] h-[18px]" strokeWidth={2} />
            </div>
          </Link>

          <div className="w-full lg:w-[810px] lg:h-[139px] shrink-0 flex flex-col justify-center gap-2 rounded-2xl border border-[rgba(216,206,221,1)] p-6 bg-[rgba(245,238,249,1)]">
            <p className="text-sm font-bold text-[rgba(24,20,27,1)]">Continuity posture is not live incident status</p>
            <p className="text-sm leading-relaxed text-[rgba(102,95,105,1)]">
              Live incidents belong to an approved status source. An exact status route has not been supplied, so no live-health link or current-health claim is shown. No uptime, recovery time, testing cadence or no-loss guarantee is established.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

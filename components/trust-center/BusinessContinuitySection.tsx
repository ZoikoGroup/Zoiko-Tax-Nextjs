import { Activity, RotateCcw, ClipboardCheck } from "lucide-react";
import { SectionHeading, SectionShell, NoticeCard } from "./shared";
import Link from "next/link";
import Image from "next/image";

const TOPICS = [
  {
    icon: Activity,
    title: "Continuity posture",
    description: "Approved service scope, dependencies and recovery approach.",
    metadata: "Not supplied · Source required"
  },
  {
    icon: RotateCcw,
    title: "Recovery & backup",
    description: "Approved targets and backup posture, with explicit limitations.",
    metadata: "Not supplied · Source required"
  },
  {
    icon: ClipboardCheck,
    title: "Testing & evidence",
    description: "Source-verified test context, results and evidence access.",
    metadata: "Not supplied · Source required"
  }
];

export default function BusinessContinuitySection() {
  return (
    <SectionShell className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <Image src="/images/trust-center/business_continuity.png" alt="" fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-10 relative z-10">
        <SectionHeading
          eyebrow="BUSINESS CONTINUITY"
          title="Review the posture. Don’t infer the promise."
          description="Continuity assurance must rest on approved recovery, backup and testing sources for the relevant service."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TOPICS.map((topic, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-6 border border-slate-100 hover:border-orange-200 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                <topic.icon className="h-6 w-6" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-xl font-bold text-slate-900">{topic.title}</h3>
                <p className="text-sm text-slate-600">{topic.description}</p>
              </div>
              <div className="flex flex-col gap-1 pt-4 border-t border-slate-200 mt-auto">
                <span className="text-xs font-bold uppercase text-slate-500">Approved source / scope</span>
                <span className="text-sm font-medium text-orange-600">{topic.metadata}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <Link href="/trust-center/business-continuity" className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800 w-fit shrink-0">
            Review Business Continuity <span>↗</span>
          </Link>

          <NoticeCard
            className="flex-1 lg:max-w-2xl"
            title="Continuity posture is not live incident status"
            description="Live incidents belong to an approved status source. An exact status route has not been supplied, so no live-health link or current-health claim is shown. No uptime, recovery time, testing cadence or no-loss guarantee is established."
          />
        </div>
      </div>
    </SectionShell>
  );
}

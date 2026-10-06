import { SectionHeading, SectionShell } from "../trust-center/shared";
import { Info } from "lucide-react";
import Image from "next/image";

const DIMENSIONS = [
  { dimension: "Primary storage", question: "Where is the scoped data held at rest?", state: "Unknown / Not published", context: "This page · exact domain source" },
  { dimension: "Compute processing", question: "Where does the scoped computation occur?", state: "Unknown / Not published", context: "Processing · exact service source" },
  { dimension: "Backup / recovery", question: "Where are recovery copies held or processed?", state: "Unknown / Not published", context: "Business Continuity" },
  { dimension: "Logs / telemetry", question: "Where are diagnostic and telemetry records processed and held?", state: "Unknown / Not published", context: "Security · exact domain source" },
  { dimension: "Evidence / archive", question: "Where are evidence and archival records processed and held?", state: "Unknown / Not published", context: "Evidence & Auditability" },
  { dimension: "Deletion / retention", question: "What approved deletion and retention rules apply to this domain?", state: "Rules not supplied; location unknown", context: "Privacy & Data Protection" },
  { dimension: "Disaster recovery", question: "What approved recovery scope and location dimensions apply?", state: "Unknown / Not published", context: "Business Continuity" }
];

export default function StorageDimensionsSection() {
  return (
    <SectionShell className="bg-slate-50 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 h-[80%] w-1/3 opacity-5 pointer-events-none">
        <Image src="/images/data-processing-residency/storage_dimensions.png" alt="" fill className="object-contain object-right-bottom" />
      </div>

      <div className="flex flex-col gap-10 relative z-10 max-w-6xl mx-auto w-full">
        <SectionHeading
          eyebrow="STORAGE, BACKUP & REPLICATION"
          title="Keep every location dimension visible."
          description="Even if a later approved source identifies a shared region, each dimension retains its own label, scope and evidence. No generic “global region” tag substitutes for these claims."
        />

        <div className="flex flex-col gap-6">
          <div className="w-full rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-4 bg-slate-100 border-b border-slate-200 p-4">
              <span className="text-xs font-bold text-slate-500 uppercase col-span-1">Dimension</span>
              <span className="text-xs font-bold text-slate-500 uppercase col-span-1 hidden lg:block">Question the source must answer</span>
              <span className="text-xs font-bold text-slate-500 uppercase col-span-1 hidden lg:block">Location / control state</span>
              <span className="text-xs font-bold text-slate-500 uppercase col-span-1 hidden lg:block">Canonical context</span>
            </div>
            
            <div className="flex flex-col">
              {DIMENSIONS.map((item, i) => (
                <div key={i} className="grid grid-cols-1 lg:grid-cols-4 p-5 border-b border-slate-100 last:border-b-0 hover:bg-orange-50/30 transition-colors gap-4 lg:gap-0">
                  <div className="flex flex-col gap-1 lg:pr-4">
                    <span className="text-xs font-bold text-slate-400 uppercase lg:hidden">Dimension</span>
                    <span className="text-sm font-bold text-slate-900">{item.dimension}</span>
                  </div>
                  <div className="flex flex-col gap-1 lg:pr-4">
                    <span className="text-xs font-bold text-slate-400 uppercase lg:hidden">Question the source must answer</span>
                    <span className="text-sm text-slate-600">{item.question}</span>
                  </div>
                  <div className="flex flex-col gap-1 lg:pr-4">
                    <span className="text-xs font-bold text-slate-400 uppercase lg:hidden">Location / control state</span>
                    <span className="text-sm font-semibold text-orange-600">{item.state}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase lg:hidden">Canonical context</span>
                    <span className="text-sm text-slate-500">{item.context}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-4 mt-2 rounded-2xl bg-orange-50 border border-orange-100 p-6 max-w-4xl">
            <Info className="h-6 w-6 text-orange-600 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-2">
              <span className="text-base font-bold text-slate-900">Do not read resilience or retention into a storage location</span>
              <span className="text-sm text-slate-700 leading-relaxed">No copy locations, retention periods, replication configuration or legal availability are established by these sources. Privacy governs deletion and retention interpretation; Business Continuity governs resilience and recovery claims.</span>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

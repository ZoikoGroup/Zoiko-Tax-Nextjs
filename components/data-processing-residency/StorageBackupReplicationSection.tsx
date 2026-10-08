import { Info } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const DIMENSIONS = [
  {
    dimension: "Primary storage",
    question: "Where is the scoped data held at rest?",
    state: "Unknown / Not published",
    context: "This page · exact domain source"
  },
  {
    dimension: "Compute processing",
    question: "Where does the scoped computation occur?",
    state: "Unknown / Not published",
    context: "Processing · exact service source"
  },
  {
    dimension: "Backup / recovery",
    question: "Where are recovery copies held or processed?",
    state: "Unknown / Not published",
    context: "Business Continuity"
  },
  {
    dimension: "Logs / telemetry",
    question: "Where are diagnostic and telemetry records processed and held?",
    state: "Unknown / Not published",
    context: "Security · exact domain source"
  },
  {
    dimension: "Evidence / archive",
    question: "Where are evidence and archival records processed and held?",
    state: "Unknown / Not published",
    context: "Evidence & Auditability"
  },
  {
    dimension: "Deletion / retention",
    question: "What approved deletion and retention rules apply to this domain?",
    state: "Rules not supplied; location unknown",
    context: "Privacy & Data Protection"
  },
  {
    dimension: "Disaster recovery",
    question: "What approved recovery scope and location dimensions apply?",
    state: "Unknown / Not published",
    context: "Business Continuity"
  }
];

export default function StorageBackupReplicationSection() {
  return (
    <SectionShell id="storage-backup-replication" className="bg-transparent" imageSrc="/existing-tax-engines/0.png">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="STORAGE, BACKUP & REPLICATION"
          title="Keep every location dimension visible."
          description={<span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Even if a later approved source identifies a shared region, each dimension retains its own label, scope and<br/>evidence. No generic &quot;global region&quot; tag substitutes for these claims.</span>}
        />

        <div className="rounded-2xl overflow-hidden border border-[rgba(216,206,221,1)] bg-white w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[rgba(242,234,248,1)] border-b border-[rgba(216,206,221,1)]">
                <th className="py-4.5 px-6 text-[13px] font-normal text-[rgba(24,20,27,1)]">Dimension</th>
                <th className="py-4.5 px-6 text-[13px] font-normal text-[rgba(24,20,27,1)]">Question the source must answer</th>
                <th className="py-4.5 px-6 text-[13px] font-normal text-[rgba(24,20,27,1)]">Location / control state</th>
                <th className="py-4.5 px-6 text-[13px] font-normal text-[rgba(24,20,27,1)]">Canonical context</th>
              </tr>
            </thead>
            <tbody>
              {DIMENSIONS.map((item, i) => (
                <tr key={i} className="border-b border-[rgba(216,206,221,1)] last:border-b-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-5 px-6 text-[15px] font-normal text-[rgba(24,20,27,1)] align-top">{item.dimension}</td>
                  <td className="py-5 px-6 text-[15px] font-normal text-[rgba(102,95,105,1)] align-top">{item.question}</td>
                  <td className="py-5 px-6 text-[15px] font-normal text-[rgba(102,95,105,1)] align-top">{item.state}</td>
                  <td className="py-5 px-6 text-[15px] font-normal text-[rgba(102,95,105,1)] align-top">{item.context}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-row gap-4.5 rounded-2xl bg-[rgba(252,240,232,1)] border border-[rgba(229,185,163,1)] p-6">
          <Info className="w-5.5 h-5.5 text-[rgba(214,90,44,1)] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="text-[17px] font-bold text-[rgba(24,20,27,1)]">
              Do not read resilience or retention into a storage location
            </h4>
            <p className="text-[17px] font-normal leading-relaxed text-[rgba(102,95,105,1)] whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">
              No copy locations, retention periods, replication configuration or legal availability are established by these sources. Privacy governs deletion and<br/>retention interpretation; Business Continuity governs resilience and recovery claims.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

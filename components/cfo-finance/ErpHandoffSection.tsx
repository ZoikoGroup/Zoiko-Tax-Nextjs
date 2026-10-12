import { Plug } from "lucide-react";
import { DesktopBreak, SectionHeading, SectionShell } from "./shared";

const SYSTEMS = [
  { title: "Billing & BSS", description: "Transaction, charge, invoice and adjustment context." },
  { title: "ERP & General Ledger", description: "Governed accounting-control outputs and reconciled handoffs." },
  {
    title: "Existing Tax Engines",
    description: "Federated outcomes, comparator inputs and migration assurance.",
  },
  {
    title: "E-Invoicing Networks",
    description: "Supported document, clearance and acknowledgement exchange.",
  },
  { title: "Data & Batch", description: "Controlled files, scheduled feeds and evidence-bearing exports." },
  {
    title: "OEM / Embedded",
    description: "Scoped fiscal controls within partner or product experiences.",
  },
];

export default function ErpHandoffSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="ERP and general ledger handoff"
        title={
          <>
            A telecom fiscal-control layer — <DesktopBreak />
            connected to the systems around it.
          </>
        }
        description="ZoikoTax integrates governed fiscal positions, evidence and control states with the customer architecture. It does not replace billing, ERP, the general ledger or established network endpoints."
      />

      <div className="flex flex-col gap-6 rounded-3xl bg-[#301153] p-5 sm:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase text-orange-300">Integration boundary</span>
            <h3 className="text-2xl font-bold text-white">ZoikoTax fiscal-control layer</h3>
          </div>
          <p className="text-sm leading-6 text-zinc-300 lg:max-w-[500px] lg:text-right">
            Governed determination, positions, reconciliation, workflow and evidence between source systems and
            finance-control outputs.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {SYSTEMS.map((system) => (
            <div
              key={system.title}
              className="flex flex-col items-start gap-2.5 rounded-xl bg-white/5 p-4 outline -outline-offset-1 outline-white/15"
            >
              <Plug aria-hidden="true" className="size-4 text-orange-300" strokeWidth={2} />
              <h4 className="text-sm font-bold text-white">{system.title}</h4>
              <p className="text-xs leading-4 text-zinc-300">{system.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

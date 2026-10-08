import { SectionHeading, SectionShell } from "../trust-center/shared";
import { ArrowRight } from "lucide-react";

const MATRIX = [
  { dimension: "Support / operations", required: "Access purpose, eligible service, environment and data domain", state: "Not published / Source required" },
  { dimension: "Privileged / emergency", required: "Approved scope, conditions and governing authority", state: "Not published / Source required" },
  { dimension: "Geographic restriction", required: "Actual restriction and its exact scope, if supported", state: "Unknown / Source required" },
  { dimension: "Customer access gate", required: "Actual customer-gating capability and conditions, if supported", state: "Not published / Source required" },
  { dimension: "Auditability", required: "Approved evidence of access and its visibility", state: "Not published / Source required" }
];

export default function OperationalAccessSection() {
  return (
    <SectionShell className="bg-white">
      <div className="flex flex-col gap-10 max-w-6xl mx-auto w-full">
        <SectionHeading
          eyebrow="OPERATIONAL / SUPPORT / ADMIN ACCESS"
          title="At-rest location does not locate every access."
          description="Human and system access require separate approved scope. Neither local storage nor a conceptual boundary proves geographically restricted access."
        />

        <div className="flex flex-col gap-8">
          {/* Conceptual access boundary */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 rounded-3xl bg-slate-50 border border-slate-200 p-8 shadow-sm">
            <div className="flex flex-col gap-2 flex-1 items-center text-center">
              <span className="text-sm font-bold text-slate-900">Support · Operations</span>
              <span className="text-sm font-bold text-slate-900">Privileged · Emergency</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Conceptual categories only</span>
            </div>
            
            <ArrowRight className="h-6 w-6 text-slate-300 hidden lg:block shrink-0" />
            <ArrowRight className="h-6 w-6 text-slate-300 block lg:hidden rotate-90 shrink-0" />

            <div className="flex flex-col gap-2 flex-1 items-center text-center border-x-0 lg:border-x border-y lg:border-y-0 border-slate-200 py-6 lg:py-0 lg:px-6 w-full lg:w-auto">
              <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">Approved access scope required</span>
              <span className="text-sm font-semibold text-slate-700">Geography · Customer access gate · Auditability</span>
              <span className="text-xs text-slate-500">No implemented approval workflow or tool is asserted.</span>
            </div>

            <ArrowRight className="h-6 w-6 text-slate-300 hidden lg:block shrink-0" />
            <ArrowRight className="h-6 w-6 text-slate-300 block lg:hidden rotate-90 shrink-0" />

            <div className="flex flex-col gap-2 flex-1 items-center text-center">
              <span className="text-sm font-bold text-slate-900">Stated service, environment & data domain</span>
            </div>
          </div>
          
          <p className="text-sm text-slate-500 text-center max-w-4xl mx-auto">
            Text equivalent: support, operational, privileged and emergency access must each be assessed against the approved source for the stated service, environment and data domain. Geographic restrictions, customer gates and auditability are separate dimensions. This model does not establish actual cross-border access, implemented controls or zero remote access.
          </p>

          {/* Scope matrix */}
          <div className="w-full rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-50 border-b border-slate-200 p-4">
              <span className="text-xs font-bold text-slate-500 uppercase col-span-1">Access dimension</span>
              <span className="text-xs font-bold text-slate-500 uppercase col-span-1 hidden md:block">Approved information required</span>
              <span className="text-xs font-bold text-slate-500 uppercase col-span-1 hidden md:block">State in supplied sources</span>
            </div>
            
            <div className="flex flex-col">
              {MATRIX.map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 p-5 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors gap-4 md:gap-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase md:hidden">Access dimension</span>
                    <span className="text-sm font-bold text-slate-900">{item.dimension}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase md:hidden">Approved information required</span>
                    <span className="text-sm text-slate-600">{item.required}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-slate-400 uppercase md:hidden">State in supplied sources</span>
                    <span className="text-sm font-semibold text-orange-600">{item.state}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

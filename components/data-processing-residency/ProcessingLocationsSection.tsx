import { SectionHeading, SectionShell } from "../trust-center/shared";
import { Info } from "lucide-react";
import Link from "next/link";

const MATRIX = [
  { field: "Service / capability", state: "Exact approved scope not supplied" },
  { field: "Environment / data domain", state: "Exact approved scope not supplied" },
  { field: "Processing location / conditions", state: "Unknown; approved source required" },
  { field: "Source reference / owner", state: "Not supplied; governed source required" },
  { field: "Currentness / approval / visibility", state: "Not supplied; current approved source required" }
];

export default function ProcessingLocationsSection() {
  return (
    <SectionShell className="bg-white" id="processing-locations">
      <div className="flex flex-col gap-12 max-w-6xl mx-auto w-full">
        <SectionHeading
          eyebrow="PROCESSING LOCATIONS"
          title="Processing requires its own location evidence."
          description="A storage statement does not establish where processing occurs. Use source-controlled metadata for the exact service, environment and data domain."
        />

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Claim Anatomy */}
          <div className="flex flex-col gap-6 rounded-3xl bg-slate-50 p-8 border border-slate-200 lg:w-1/3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">PROCESSING LOCATION</span>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-bold text-slate-900">Unknown / Not published</span>
              <p className="text-sm text-slate-600">
                No approved place value or processing-control inventory is supplied. This is a source-required state, not evidence of locality.
              </p>
            </div>
            
            <div className="mt-4 pt-6 border-t border-slate-200">
              <Link href="/trust/evidence-auditability/" className="text-base font-semibold text-orange-600 hover:text-orange-700">
                Evidence & Auditability →
              </Link>
            </div>
          </div>

          {/* Metadata Contract */}
          <div className="flex flex-col gap-6 lg:w-2/3">
            <h4 className="text-lg font-bold text-slate-900">What an approved claim must identify</h4>
            
            <div className="flex flex-col w-full rounded-2xl border border-slate-200 overflow-hidden bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 bg-slate-50 border-b border-slate-200 p-4">
                <span className="text-xs font-bold text-slate-500 uppercase">Required field</span>
                <span className="text-xs font-bold text-slate-500 uppercase hidden sm:block">Source state in this view</span>
              </div>
              
              <div className="flex flex-col">
                {MATRIX.map((item, i) => (
                  <div key={i} className="grid grid-cols-1 sm:grid-cols-2 p-4 border-b border-slate-100 last:border-b-0 hover:bg-slate-50 transition-colors">
                    <span className="text-sm font-semibold text-slate-900 mb-1 sm:mb-0">{item.field}</span>
                    <span className="text-sm text-slate-600">{item.state}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3 mt-4 rounded-xl bg-slate-100 p-5">
              <Info className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1">
                <span className="text-sm font-bold text-slate-900">No location inference</span>
                <span className="text-sm text-slate-600">Market Coverage, an integration endpoint, an IP address or browser geography does not establish processing location. Detailed processing information can be routed to a controlled source only where an approved disclosure process exists; no such process is established here.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

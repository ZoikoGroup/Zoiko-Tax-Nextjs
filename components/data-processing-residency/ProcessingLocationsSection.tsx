import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const METADATA = [
  { field: "Service / capability", value: "Exact approved scope not supplied" },
  { field: "Environment / data domain", value: "Exact approved scope not supplied" },
  { field: "Processing location / conditions", value: "Unknown; approved source required" },
  { field: "Source reference / owner", value: "Not supplied; governed source required" },
  { field: "Currentness / approval / visibility", value: "Not supplied; current approved source required" }
];

export default function ProcessingLocationsSection() {
  return (
    <SectionShell id="processing-locations" className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="PROCESSING LOCATIONS"
          title="Processing requires its own location evidence."
          description={<span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">A storage statement does not establish where processing occurs. Use source-controlled metadata for the exact service, environment<br/>and data domain.</span>}
        />

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex flex-col gap-4.5 rounded-2xl bg-[rgba(48,17,83,1)] p-8 lg:w-[430px]">
            <span className="text-[13px] font-bold text-[rgba(244,162,97,1)] tracking-wider">
              PROCESSING LOCATION
            </span>
            <h3 className="text-4xl font-bold text-white leading-tight">
              Unknown / Not<br/>published
            </h3>
            <p className="text-[17px] font-normal leading-relaxed text-[rgba(217,208,223,1)] whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">
              No approved place value or processing-<br/>control inventory is supplied. This is a<br/>source-required state, not evidence of<br/>locality.
            </p>
            <div className="flex flex-col mt-2">
              <Link
                href="/trust/evidence-auditability/"
                className="text-base font-semibold text-[rgba(244,162,97,1)] hover:underline flex items-center gap-1.5"
              >
                Evidence & Auditability <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-[rgba(217,208,223,1)]">/trust/evidence-auditability/</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <h4 className="text-2xl font-normal text-[rgba(24,20,27,1)]">
              What an approved claim must identify
            </h4>
            <div className="rounded-2xl overflow-hidden border border-[rgba(216,206,221,1)] bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[rgba(242,234,248,1)] p-4.5 border-b border-[rgba(216,206,221,1)]">
                <span className="text-[13px] font-normal text-[rgba(24,20,27,1)] md:col-span-1">Required field</span>
                <span className="text-[13px] font-normal text-[rgba(24,20,27,1)] md:col-span-2">Source state in this view</span>
              </div>
              {METADATA.map((item, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-6 p-5 border-b border-[rgba(216,206,221,1)] last:border-b-0 hover:bg-gray-50/50 transition-colors">
                  <span className="text-[15px] font-normal text-[rgba(24,20,27,1)] md:col-span-1">{item.field}</span>
                  <span className="text-[15px] font-normal text-[rgba(102,95,105,1)] md:col-span-2">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4.5 rounded-2xl bg-[rgba(252,240,232,1)] border border-[rgba(229,185,163,1)] p-6">
          <Info className="w-5.5 h-5.5 text-[rgba(214,90,44,1)] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="text-[17px] font-bold text-[rgba(24,20,27,1)]">
              No location inference
            </h4>
            <p className="text-[17px] font-normal leading-relaxed text-[rgba(102,95,105,1)] whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">
              Market Coverage, an integration endpoint, an IP address or browser geography does not establish processing location. Detailed processing<br/>information can be routed to a controlled source only where an approved disclosure process exists; no such process is established here.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

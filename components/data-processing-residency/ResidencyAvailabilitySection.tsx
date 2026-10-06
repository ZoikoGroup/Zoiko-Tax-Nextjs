import { SectionHeading, SectionShell } from "../trust-center/shared";
import Image from "next/image";
import Link from "next/link";
import { Info } from "lucide-react";

const STATES = [
  {
    state: "APPROVED",
    meaning: "A current approved claim for the exact service, capability, environment and data domain. Not blanket regional support."
  },
  {
    state: "CONDITIONAL",
    meaning: "A claim subject to stated service, contract, environment or capability conditions. Conditions remain part of the claim."
  },
  {
    state: "PILOT / VALIDATION",
    meaning: "Validation scope only. Does not establish general production availability or a customer-selectable option."
  },
  {
    state: "NOT AVAILABLE",
    meaning: "Unavailable for the stated scope. Not a selectable deployment or residency option."
  },
  {
    state: "UNKNOWN / NOT PUBLISHED",
    meaning: "Missing or undisclosed approved information. No locality, support or customer choice may be inferred."
  },
  {
    state: "SUSPENDED",
    meaning: "A governed suspension for a stated scope only. Requires the relevant approved source and owner."
  }
];

export default function ResidencyAvailabilitySection() {
  return (
    <SectionShell className="bg-white relative overflow-hidden">
      <div className="absolute left-0 bottom-0 h-2/3 w-1/3 opacity-10 pointer-events-none">
        <Image src="/images/data-processing-residency/residency_availability.png" alt="" fill className="object-cover object-bottom" />
      </div>
      
      <div className="flex flex-col gap-10 relative z-10 max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="RESIDENCY AVAILABILITY"
          title="A state only means something with its scope."
          description="Illustrative taxonomy below — not actual region states, supported locations or customer entitlements."
        />

        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-4 rounded-2xl bg-orange-50 border border-orange-200 p-6">
            <Info className="h-6 w-6 text-orange-600 shrink-0 mt-1" />
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-bold text-slate-900">Approved public location scope is not supplied in this view</h4>
              <p className="text-base text-slate-700 leading-relaxed">
                No country, region, location default or hosting topology is established by the supplied sources. Missing, stale or conflicted data blocks a residency promise; it must not be presented as positive locality or support.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {STATES.map((item, i) => (
              <div key={i} className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow bg-slate-50">
                <span className="text-sm font-bold tracking-wider uppercase text-orange-600">{item.state}</span>
                <p className="text-sm text-slate-600 leading-relaxed">{item.meaning}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-6 pt-6 border-t border-slate-100">
            <Link href="/trust/" className="text-base font-semibold text-orange-600 hover:text-orange-700">
              Trust Center →
            </Link>
            <Link href="/trust/evidence-auditability/" className="text-base font-semibold text-orange-600 hover:text-orange-700">
              Evidence & Auditability →
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

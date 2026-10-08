import Link from "next/link";
import { Info, ArrowRight } from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const LIFECYCLE_STATES = [
  {
    label: "Approved",
    meaning: "Use only for the exact scope supported by a current governed approval.",
  },
  {
    label: "Validation",
    meaning: "Do not present a validation record as approved or currently available.",
  },
  {
    label: "Suspended",
    meaning: "Do not present the affected scope as active. Follow the source-defined state.",
  },
  {
    label: "Retired",
    meaning: "Keep history separate. A retired record is not current capability.",
  },
];

const EVIDENCE_STATES = [
  {
    label: "Controlled evidence",
    meaning: "Identify restricted visibility without promising access or publication.",
    isWarning: false,
  },
  {
    label: "Stale / conflict",
    meaning: "Suppress unsupported current claims; seek an authorized resolution.",
    isWarning: true,
  },
  {
    label: "Missing source",
    meaning: "State the gap. Do not supply a plausible approval, date or metric.",
    isWarning: true,
  },
  {
    label: "Source unavailable / no-JS",
    meaning: "Keep core doctrine and public routes readable; no assumed live status.",
    isWarning: true,
  },
];

export default function CurrentnessSafeStatesSection() {
  return (
    <SectionShell id="currentness" className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="12 · CURRENTNESS & SAFE STATES"
          title="Unknown is not approved. History is not current."
          description="Currentness requires source-backed owner, scope, review and update information, status and evidence visibility. None of these values should be invented. The patterns below are illustrative—not present service status."
        />

        {/* State patterns */}
        <div className="flex flex-col gap-5">
          {/* Row 1: Lifecycle states */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LIFECYCLE_STATES.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-3.5 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-6"
              >
                <h4 className="text-lg font-semibold text-[rgba(48,17,83,1)]">{item.label}</h4>
                <p className="text-[15px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: Evidence and source states */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {EVIDENCE_STATES.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col gap-3.5 rounded-2xl p-6 ${
                  item.isWarning
                    ? "bg-[rgba(255,240,231,1)] border border-[rgba(234,204,185,1)]"
                    : "bg-white border border-[rgba(216,206,221,1)]"
                }`}
              >
                <h4
                  className={`text-lg font-semibold ${
                    item.isWarning
                      ? "text-[rgba(214,90,44,1)]"
                      : "text-[rgba(48,17,83,1)]"
                  }`}
                >
                  {item.label}
                </h4>
                <p className="text-[15px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Source notice */}
        <div className="w-full rounded-2xl bg-[rgba(255,240,231,1)] border border-[rgba(234,204,185,1)] p-6 flex items-start gap-4">
          <Info className="w-5.5 h-5.5 text-[rgba(214,90,44,1)] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="text-base font-semibold text-[rgba(24,20,27,1)]">
              When the source is unknown or stale, suppress the claim
            </h4>
            <p className="text-[15px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              Keep stable authority doctrine and public routing available. Do not infer a current approval, a review date or operational availability from a missing, conflicting, retired or inaccessible record.
            </p>
          </div>
        </div>

        {/* Stable public routes */}
        <div className="flex flex-wrap items-center gap-8 pt-1">
          <Link
            href="/trust/"
            className="flex items-center gap-1.5 text-[15px] font-semibold text-[rgba(214,90,44,1)] hover:underline"
          >
            Trust Center <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/trust/evidence-auditability/"
            className="flex items-center gap-1.5 text-[15px] font-semibold text-[rgba(214,90,44,1)] hover:underline"
          >
            Evidence & Auditability <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}

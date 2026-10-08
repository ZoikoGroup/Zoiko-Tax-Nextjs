import { Files } from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const ROW1_FIELDS = [
  {
    label: "Public system identifier",
    state: "Not published",
    meaning: "Approved public identifier only; never internal topology.",
  },
  {
    label: "Purpose & use case",
    state: "Source required",
    meaning: "A specific approved purpose, not a generic model claim.",
  },
  {
    label: "Model / provider",
    state: "Not published",
    meaning: "Identity only where approved for disclosure.",
  },
  {
    label: "Capability & environment",
    state: "Source required",
    meaning: "Exact capability and permitted environment scope.",
  },
];

const ROW2_FIELDS = [
  {
    label: "Authority level",
    state: "Source required",
    meaning: "Assistive or advisory role; fiscal authority remains separate.",
  },
  {
    label: "Owner role",
    state: "Source required",
    meaning: "Accountable approved role, not an invented name.",
  },
  {
    label: "Review / update record",
    state: "Not published",
    meaning: "Source-backed review and update information only.",
  },
  {
    label: "Lifecycle status",
    state: "Source required",
    meaning: "Approved, Validation, Suspended or Retired only from a governed record.",
  },
];

export default function ModelInventorySection() {
  return (
    <SectionShell id="inventory" className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="04 · SYSTEM & MODEL INVENTORY"
          title="Scope before system claims."
          description="A public inventory should identify what a system is for, where its capability applies and the authority it does not have. No actual system, model or provider inventory has been supplied."
        />

        {/* Inventory publication state container */}
        <div className="flex flex-col gap-7.5 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-8">
          {/* Header notice */}
          <div className="flex items-start gap-4.5">
            <Files className="h-8 w-8 text-[rgba(214,90,44,1)] shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-[rgba(24,20,27,1)]">
                Approved public inventory not supplied in this view
              </h3>
              <p className="text-sm font-normal text-[rgba(102,95,105,1)]">
                Illustrative field anatomy only · Not a system record or statement of current approval
              </p>
            </div>
          </div>

          {/* Row 1 fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROW1_FIELDS.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 border-t border-[rgba(216,206,221,1)] pt-5"
              >
                <span className="text-sm font-semibold text-[rgba(24,20,27,1)]">
                  {item.label}
                </span>
                <span className="text-xl font-semibold text-[rgba(48,17,83,1)]">
                  {item.state}
                </span>
                <p className="text-sm font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROW2_FIELDS.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 border-t border-[rgba(216,206,221,1)] pt-5"
              >
                <span className="text-sm font-semibold text-[rgba(24,20,27,1)]">
                  {item.label}
                </span>
                <span className="text-xl font-semibold text-[rgba(48,17,83,1)]">
                  {item.state}
                </span>
                <p className="text-sm font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom description */}
        <p className="text-sm font-normal leading-relaxed text-[rgba(102,95,105,1)]">
          Publication also requires approved source and visibility metadata. Internal secrets, infrastructure topology and sensitive implementation detail must not be included in a public record. A retired record is history, not current capability.
        </p>
      </div>
    </SectionShell>
  );
}

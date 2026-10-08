import { SectionHeading, SectionShell } from "../trust-center/shared";
import { KeyRound, PanelsTopLeft, Shield, Info } from "lucide-react";

const TOPICS = [
  {
    icon: KeyRound,
    title: "Encryption & key management",
    description: "Reference only approved transit, at-rest and key-management posture for the exact service and data domain. No provider, algorithm, key region or implementation is supplied.",
    qualifier: "Approved Security source required."
  },
  {
    icon: PanelsTopLeft,
    title: "Isolation & segmentation",
    description: "Organization or tenant isolation and segmentation are claims only where actually supported by an approved source. They do not independently establish geographic residency.",
    qualifier: "No isolation implementation established."
  },
  {
    icon: Shield,
    title: "Access & monitoring evidence",
    description: "Access controls and evidence monitoring belong to approved Security and Trust boundaries. Public content must not expose secrets or sensitive topology.",
    qualifier: "No control inventory or certification supplied."
  }
];

export default function SecurityInterfaceSection() {
  return (
    <SectionShell className="bg-white">
      <div className="flex flex-col gap-10 max-w-6xl mx-auto w-full">
        <SectionHeading
          eyebrow="SECURITY INTERFACE"
          title="Security claims stay with their approved source."
          description="Residency, security and isolation are related questions — not interchangeable assurances."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TOPICS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="flex flex-col gap-4 rounded-3xl bg-slate-50 p-6 shadow-sm border border-slate-200">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-600 flex-1">{item.description}</p>
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.qualifier}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-start gap-4 mt-2 rounded-2xl bg-orange-50 border border-orange-200 p-6">
          <Info className="h-6 w-6 text-orange-600 shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <span className="text-base font-bold text-slate-900">A location is not a security certification</span>
            <span className="text-sm text-slate-700 leading-relaxed">
              This page does not establish encryption, RBAC, isolation, monitoring or production certification. Confirm each substantive control against its own approved service, capability, environment and data-domain source.
            </span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

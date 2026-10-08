import { KeyRound, PanelsTopLeft, Shield, Info } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const TOPICS = [
  {
    icon: KeyRound,
    title: "Encryption & key management",
    description: <span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Reference only approved transit, at-rest and<br/>key-management posture for the exact<br/>service and data domain. No provider,<br/>algorithm, key region or implementation is<br/>supplied.</span>,
    qualifier: "Approved Security source required."
  },
  {
    icon: PanelsTopLeft,
    title: "Isolation & segmentation",
    description: <span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Organization or tenant isolation and<br/>segmentation are claims only where actually<br/>supported by an approved source. They do<br/>not independently establish geographic<br/>residency.</span>,
    qualifier: "No isolation implementation established."
  },
  {
    icon: Shield,
    title: "Access & monitoring evidence",
    description: <span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Access controls and evidence monitoring<br/>belong to approved Security and Trust<br/>boundaries. Public content must not expose<br/>secrets or sensitive topology.</span>,
    qualifier: "No control inventory or certification supplied."
  }
];

export default function SecurityInterfaceSection() {
  return (
    <SectionShell id="security-interface" className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="SECURITY INTERFACE"
          title="Security claims stay with their approved source."
          description="Residency, security and isolation are related questions — not interchangeable assurances."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TOPICS.map((topic, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-6">
              <topic.icon className="h-6 w-6 text-[rgba(214,90,44,1)]" strokeWidth={1.5} />
              <h4 className="text-[22px] font-normal text-[rgba(24,20,27,1)]">{topic.title}</h4>
              <p className="text-[17px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                {topic.description}
              </p>
              <span className="text-[14px] font-semibold text-[rgba(48,17,83,1)] mt-auto">
                {topic.qualifier}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-row gap-4.5 rounded-2xl bg-[rgba(252,240,232,1)] p-6 border border-[rgba(229,185,163,1)]">
          <Info className="w-5.5 h-5.5 text-[rgba(214,90,44,1)] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-2">
            <h4 className="text-[17px] font-bold text-[rgba(24,20,27,1)]">
              A location is not a security certification
            </h4>
            <p className="text-[17px] font-normal leading-relaxed text-[rgba(102,95,105,1)] whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">
              This page does not establish encryption, RBAC, isolation, monitoring or production certification. Confirm each substantive control against its own<br/>approved service, capability, environment and data-domain source.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

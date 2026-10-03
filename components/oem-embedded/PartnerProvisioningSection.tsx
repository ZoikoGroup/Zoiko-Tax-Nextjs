import { Container, Notice, SectionHeader } from "./shared";

const steps = [
  {
    num: "01  →",
    title: "Registration / authorization",
    desc: "Establish the separately approved partner identity.",
    note: "Authorization is not a public signup or a capability grant.",
  },
  {
    num: "02  →",
    title: "Organization creation / association",
    desc: "Connect the authorized organization context.",
    note: "Exact objects and association mechanics follow approved source contracts.",
  },
  {
    num: "03  →",
    title: "Configuration",
    desc: "Apply supported organization and integration settings.",
    note: "Use source-defined configuration; no fields or schemas are implied here.",
  },
  {
    num: "04  →",
    title: "Entitlement",
    desc: "Confirm permission for the exact capability scope.",
    note: "Creating a context does not grant permission; entitlement has its own authority.",
  },
  {
    num: "05  →",
    title: "Validation",
    desc: "Review readiness, Coverage, environment and security.",
    note: "Validation gates are independent and do not automatically pass.",
  },
  {
    num: "06  →",
    title: "Activation",
    desc: "Obtain controlled production activation approval.",
    note: "Test permission and validation do not establish production entitlement.",
  },
  {
    num: "07  →",
    title: "Operate",
    desc: "Perform scoped operations with attribution and evidence.",
    note: "The governed operating model defines responsibility; no SLA is promised.",
  },
  {
    num: "08  →",
    title: "Offboard",
    desc: "Follow approved restriction and deprovisioning procedures.",
    note: "Data, historical access and lifecycle handling remain policy-controlled.",
  },
];

export default function PartnerProvisioningSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          eyebrow="02 / PARTNER PROVISIONING"
          title="Provisioning is a sequence of governed decisions."
          description="Follow the approved lifecycle without treating setup as an entitlement or activation shortcut."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4"
            >
              <span className="text-orange-600 text-xs font-bold leading-5 font-['Inter',sans-serif]">
                {step.num}
              </span>
              <div className="self-stretch text-zinc-900 text-xl font-normal leading-7 font-['Inter',sans-serif]">
                {step.title}
              </div>
              <div className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {step.desc}
              </div>
              <div className="self-stretch pt-4 border-t border-zinc-300 flex flex-col justify-start items-start">
                <p className="self-stretch text-stone-500 text-sm font-normal leading-6 font-['Inter',sans-serif]">
                  {step.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Notice
          title="Provisioning ≠ entitlement ≠ production activation"
          body="Read this sequence in order: registration / authorization → organization creation / association → configuration → entitlement → validation → activation → operate → offboard. Each boundary requires its approved source; no instant self-service activation is implied."
        />
      </Container>
    </section>
  );
}

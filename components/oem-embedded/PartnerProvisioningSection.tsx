import Image from "next/image";
import { Container, Notice } from "./shared";

const steps = [
  {
    num: "01 ➔",
    title: "Registration / authorization",
    desc: "Establish the separately approved partner identity.",
    note: "Authorization is not a public signup or a capability grant.",
  },
  {
    num: "02 ➔",
    title: "Organization creation / association",
    desc: "Connect the authorized organization context.",
    note: "Exact objects and association mechanics follow approved source contracts.",
  },
  {
    num: "03 ➔",
    title: "Configuration",
    desc: "Apply supported organization and integration settings.",
    note: "Use source-defined configuration; no fields or schemas are implied here.",
  },
  {
    num: "04 ➔",
    title: "Entitlement",
    desc: "Confirm permission for the exact capability scope.",
    note: "Creating a context does not grant permission; entitlement has its own authority.",
  },
  {
    num: "05 ➔",
    title: "Validation",
    desc: "Review readiness, Coverage, environment and security.",
    note: "Validation gates are independent and do not automatically pass.",
  },
  {
    num: "06 ➔",
    title: "Activation",
    desc: "Obtain controlled production activation approval.",
    note: "Test permission and validation do not establish production entitlement.",
  },
  {
    num: "07 ➔",
    title: "Operate",
    desc: "Perform scoped operations with attribution and evidence.",
    note: "The governed operating model defines responsibility; no SLA is promised.",
  },
  {
    num: "08 ➔",
    title: "Offboard",
    desc: "Follow approved restriction and deprovisioning procedures.",
    note: "Data, historical access and lifecycle handling remain policy-controlled.",
  },
];

export default function PartnerProvisioningSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 bg-[rgba(243,234,249,1)] overflow-hidden">

      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            02 / PARTNER PROVISIONING
          </span>
          <h2 className="text-[rgba(24,20,27,1)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            Provisioning is a sequence of governed decisions.
          </h2>
          <p className="text-[rgba(102,95,105,1)] text-lg sm:text-xl font-normal leading-8 font-['Inter',sans-serif]">
            Follow the approved lifecycle without treating setup as an entitlement or activation shortcut.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] flex flex-col justify-start items-start gap-4"
            >
              <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 font-['Inter',sans-serif]">
                {step.num}
              </span>
              <div className="self-stretch text-[rgba(24,20,27,1)] text-xl font-normal leading-7 font-['Inter',sans-serif]">
                {step.title}
              </div>
              <div className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
                {step.desc}
              </div>
              <div className="self-stretch pt-4 border-t border-[#D8CEDD] flex flex-col justify-start items-start">
                <p className="self-stretch text-[rgba(102,95,105,1)] text-[13px] font-normal leading-[1.6] font-['Inter',sans-serif]">
                  {step.note}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Notice
          className="!bg-[rgba(255,240,231,1)]"
          title={<span className="text-[rgba(24,20,27,1)]">Provisioning ≠ entitlement ≠ production activation</span>}
          body={
            <span className="text-[rgba(102,95,105,1)]">
              Read this sequence in order: registration / authorization ➔ organization creation / association ➔ configuration ➔ entitlement ➔ validation ➔ activation ➔ operate ➔ offboard. Each boundary requires its approved source; no instant self-service activation is implied.
            </span>
          }
        />
      </Container>
    </section>
  );
}

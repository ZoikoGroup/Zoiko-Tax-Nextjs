import { Container, Notice, SectionHeader } from "./shared";

const routes = [
  {
    context: "Partner integration",
    route: "Partner technical team / governed support model.",
    boundary:
      "Resolve the partner-owned integration; scope follows the approved support contract.",
  },
  {
    context: "Organization configuration",
    route: "Approved partner / tenant administrator role.",
    boundary: "Confirm the actual authorized role. No delegated access is inferred.",
  },
  {
    context: "ZoikoTax issue",
    route: "Approved status / support source.",
    boundary:
      "Use the governed operational source; no status URL, response time or SLA is invented.",
  },
  {
    context: "Security concern",
    route: "Trust and the approved disclosure route.",
    boundary:
      "Follow the approved security process. Do not submit secrets through an unapproved form.",
  },
  {
    context: "Coverage question",
    route: "Authoritative Coverage source.",
    boundary:
      "Validate the exact capability, country / pack / network and readiness context.",
  },
  {
    context: "Commercial entitlement",
    route: "Approved commercial / legal owner.",
    boundary:
      "Commercial rights and grants are not created by developer support.",
  },
];

export default function SupportSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          eyebrow="09 / SUPPORT & ESCALATION"
          title="Route the issue to its accountable owner."
          description="Use the approved support model and authoritative sources. A developer route cannot grant commercial or production rights."
        />

        <div className="self-stretch bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch p-5 bg-violet-100 hidden lg:flex justify-start items-start gap-6">
            <div className="w-64 shrink-0 text-violet-950 text-xs font-bold font-['Inter',sans-serif]">
              Issue context
            </div>
            <div className="w-96 shrink-0 text-violet-950 text-xs font-bold font-['Inter',sans-serif]">
              First accountable route
            </div>
            <div className="flex-1 text-violet-950 text-xs font-bold font-['Inter',sans-serif]">
              Responsibility boundary
            </div>
          </div>
          {routes.map((row) => (
            <div
              key={row.context}
              className="self-stretch p-5 border-t border-zinc-300 flex flex-col lg:flex-row justify-start items-start gap-3 lg:gap-6"
            >
              <div className="w-full lg:w-64 shrink-0 text-zinc-900 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {row.context}
              </div>
              <div className="w-full lg:w-96 shrink-0 text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {row.route}
              </div>
              <div className="flex-1 text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                {row.boundary}
              </div>
            </div>
          ))}
        </div>

        <Notice
          title="Shared operations remain contract-defined"
          body="Partner, tenant and ZoikoTax responsibilities stay distinct. Confirm escalation ownership before activation; this public page supplies route-first guidance, not a new support contact, SLA or delegation model."
        />
      </Container>
    </section>
  );
}

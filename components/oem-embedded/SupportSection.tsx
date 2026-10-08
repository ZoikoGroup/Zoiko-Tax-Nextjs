import { Container, Notice } from "./shared";

const routes = [
  {
    context: "Partner integration",
    route: "Partner technical team / governed support model.",
    boundary: (
      <>
        <span className="block xl:whitespace-nowrap">Resolve the partner-owned integration; scope follows the approved</span>
        <span className="block xl:whitespace-nowrap">support contract.</span>
      </>
    ),
  },
  {
    context: "Organization configuration",
    route: "Approved partner / tenant administrator role.",
    boundary: "Confirm the actual authorized role. No delegated access is inferred.",
  },
  {
    context: "ZoikoTax issue",
    route: "Approved status / support source.",
    boundary: (
      <>
        <span className="block xl:whitespace-nowrap">Use the governed operational source; no status URL, response time or</span>
        <span className="block xl:whitespace-nowrap">SLA is invented.</span>
      </>
    ),
  },
  {
    context: "Security concern",
    route: "Trust and the approved disclosure route.",
    boundary: (
      <>
        <span className="block xl:whitespace-nowrap">Follow the approved security process. Do not submit secrets through an</span>
        <span className="block xl:whitespace-nowrap">unapproved form.</span>
      </>
    ),
  },
  {
    context: "Coverage question",
    route: "Authoritative Coverage source.",
    boundary: (
      <>
        <span className="block xl:whitespace-nowrap">Validate the exact capability, country / pack / network and readiness</span>
        <span className="block xl:whitespace-nowrap">context.</span>
      </>
    ),
  },
  {
    context: "Commercial entitlement",
    route: "Approved commercial / legal owner.",
    boundary: "Commercial rights and grants are not created by developer support.",
  },
];

export default function SupportSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 bg-[rgba(240,231,247,1)] overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            09 / SUPPORT & ESCALATION
          </span>
          <h2 className="text-[rgba(24,20,27,1)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            Route the issue to its accountable owner.
          </h2>
          <p className="text-[rgba(102,95,105,1)] text-lg sm:text-xl font-normal leading-[1.6] font-['Inter',sans-serif]">
            Use the approved support model and authoritative sources. A developer route cannot grant commercial or production rights.
          </p>
        </div>

        <div className="self-stretch bg-white rounded-[26px] outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch p-5 bg-[rgba(238,229,245,1)] hidden lg:flex justify-start items-start gap-6">
            <div className="w-[280px] shrink-0 text-[rgba(48,17,83,1)] text-xs font-bold font-['Inter',sans-serif]">
              Issue context
            </div>
            <div className="w-[380px] shrink-0 text-[rgba(48,17,83,1)] text-xs font-bold font-['Inter',sans-serif]">
              First accountable route
            </div>
            <div className="flex-1 text-[rgba(48,17,83,1)] text-xs font-bold font-['Inter',sans-serif]">
              Responsibility boundary
            </div>
          </div>
          {routes.map((row) => (
            <div
              key={row.context}
              className="self-stretch p-5 border-t border-[rgba(216,206,221,1)] flex flex-col lg:flex-row justify-start items-start gap-3 lg:gap-6"
            >
              <div className="w-full lg:w-[280px] shrink-0 text-[rgba(24,20,27,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                {row.context}
              </div>
              <div className="w-full lg:w-[380px] shrink-0 text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                {row.route}
              </div>
              <div className="flex-1 text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                {row.boundary}
              </div>
            </div>
          ))}
        </div>

        <Notice
          title={<span className="text-[rgba(24,20,27,1)]">Shared operations remain contract-defined</span>}
          body={
            <span className="text-[rgba(102,95,105,1)]">
              <span className="block xl:whitespace-nowrap">Partner, tenant and ZoikoTax responsibilities stay distinct. Confirm escalation ownership before activation; this public page supplies route-first guidance, not</span>
              <span className="block xl:whitespace-nowrap">a new support contact, SLA or delegation model.</span>
            </span>
          }
        />
      </Container>
    </section>
  );
}

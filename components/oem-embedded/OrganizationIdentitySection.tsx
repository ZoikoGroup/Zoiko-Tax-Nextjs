import Image from "next/image";
import { Container, Notice, SectionHeader } from "./shared";

const anatomy = [
  "Partner context",
  "Organization context",
  "Explicit environment",
  "Permitted capability / action",
  "Attribution & evidence reference",
];

const categories = [
  {
    label: "Partner context",
    meaning: "Approved integrating party; distinct from the organization.",
  },
  {
    label: "Organization / tenant identity",
    meaning: "Authorized business scope according to the actual platform model.",
  },
  {
    label: "External customer reference",
    meaning: "A permitted mapping only where the source contract supports it.",
  },
  {
    label: "Environment",
    meaning:
      "Explicit sandbox/test or production context; permissions stay separate.",
  },
  {
    label: "Request attribution",
    meaning:
      "Scope and origin of a supported request, without visibility expansion.",
  },
  {
    label: "Operator / delegated actor",
    meaning:
      "Only the actual supported actor model; no impersonation or delegation is inferred.",
  },
  {
    label: "Evidence reference",
    meaning:
      "A source-defined traceability link, not an invented record or key format.",
  },
];

export default function OrganizationIdentitySection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 bg-white overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-50">
        <Image
          src="/existing-tax-engines/0.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            03 / ORGANIZATION IDENTITY
          </span>
          <h2 className="text-[rgba(24,20,27,1)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            Keep the organization visible at the point of consequence.
          </h2>
          <p className="text-[rgba(102,95,105,1)] text-lg sm:text-xl font-normal leading-8 font-['Inter',sans-serif]">
            Partner identity and organization identity are separate. Attribution provides accountability, not unrestricted cross-tenant visibility.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-8 lg:gap-8">
          {/* Conceptual identity anatomy */}
          <div className="w-full lg:w-96 shrink-0 p-6 sm:p-8 bg-[rgba(48,17,83,1)] rounded-3xl flex flex-col justify-start items-start gap-5">
            <span className="text-[rgba(244,162,97,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
              CONCEPTUAL IDENTITY ANATOMY
            </span>
            <div className="self-stretch text-white text-3xl font-normal leading-9 font-['Inter',sans-serif]">
              Context travels with the action.
            </div>
            {anatomy.map((item) => (
              <div
                key={item}
                className="self-stretch p-4 bg-[rgba(255,255,255,0.04)] rounded-xl outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)]"
              >
                <div className="text-white text-base font-normal font-['Inter',sans-serif]">
                  {item}
                </div>
              </div>
            ))}
            <p className="self-stretch text-[#D9D0DF] text-sm font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Illustrative categories only. No identifier, key, API</span>
              <span className="block xl:whitespace-nowrap">field, delegation model or fixed tenancy</span>
              <span className="block xl:whitespace-nowrap">relationship is specified.</span>
            </p>
          </div>

          {/* Category table */}
          <div className="flex-1 flex flex-col justify-start items-start">
            <div className="self-stretch w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch p-5 bg-[rgba(243,234,249,1)] hidden lg:flex justify-start items-start gap-6">
                <div className="w-56 shrink-0 text-[rgba(36,16,61,1)] text-xs font-bold font-['Inter',sans-serif]">
                  Conceptual category
                </div>
                <div className="flex-1 text-[rgba(36,16,61,1)] text-xs font-bold font-['Inter',sans-serif]">
                  Governed meaning
                </div>
              </div>
              {categories.map((row) => (
                <div
                  key={row.label}
                  className="self-stretch p-5 border-t border-[#D8CEDD] flex flex-col lg:flex-row justify-start items-start gap-2 lg:gap-6"
                >
                  <div className="w-full lg:w-56 shrink-0 text-[rgba(24,20,27,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                    {row.label}
                  </div>
                  <div className="flex-1 text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                    {row.label === "Operator / delegated actor" ? (
                      <>
                        <span className="block xl:whitespace-nowrap">Only the actual supported actor model; no impersonation or delegation is</span>
                        <span className="block xl:whitespace-nowrap">inferred.</span>
                      </>
                    ) : (
                      <span className="block xl:whitespace-nowrap">{row.meaning}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Notice
          className="!bg-[rgba(255,240,231,1)]"
          title={<span className="text-[rgba(24,20,27,1)]">Exact technical semantics remain governed</span>}
          body={
            <span className="text-[rgba(102,95,105,1)]">
              <span className="block xl:whitespace-nowrap">Keep organization context and capability scope visible near consequential actions. Confirm the identity, authentication and authorization contracts in the API</span>
              <span className="block xl:whitespace-nowrap">Reference; never infer tenant hierarchy, RBAC or cross-tenant access from these conceptual categories.</span>
            </span>
          }
        />
      </Container>
    </section>
  );
}

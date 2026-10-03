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
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          eyebrow="03 / ORGANIZATION IDENTITY"
          title="Keep the organization visible at the point of consequence."
          description="Partner identity and organization identity are separate. Attribution provides accountability, not unrestricted cross-tenant visibility."
        />

        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-8 lg:gap-8">
          {/* Conceptual identity anatomy */}
          <div className="w-full lg:w-96 shrink-0 p-6 sm:p-8 bg-violet-950 rounded-3xl flex flex-col justify-start items-start gap-5">
            <span className="text-orange-300 text-xs font-bold leading-5 font-['Inter',sans-serif]">
              CONCEPTUAL IDENTITY ANATOMY
            </span>
            <div className="self-stretch text-white text-3xl font-normal leading-9 font-['Inter',sans-serif]">
              Context travels with the action.
            </div>
            {anatomy.map((item) => (
              <div
                key={item}
                className="self-stretch p-4 bg-white/5 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-500"
              >
                <div className="text-white text-base font-normal font-['Inter',sans-serif]">
                  {item}
                </div>
              </div>
            ))}
            <p className="self-stretch text-zinc-300 text-sm font-normal leading-6 font-['Inter',sans-serif]">
              Illustrative categories only. No identifier, key, API field,
              delegation model or fixed tenancy relationship is specified.
            </p>
          </div>

          {/* Category table */}
          <div className="flex-1 flex flex-col justify-start items-start">
            <div className="self-stretch w-full bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch p-5 bg-violet-100 hidden lg:flex justify-start items-start gap-6">
                <div className="w-56 shrink-0 text-violet-950 text-xs font-bold font-['Inter',sans-serif]">
                  Conceptual category
                </div>
                <div className="flex-1 text-violet-950 text-xs font-bold font-['Inter',sans-serif]">
                  Governed meaning
                </div>
              </div>
              {categories.map((row) => (
                <div
                  key={row.label}
                  className="self-stretch p-5 border-t border-zinc-300 flex flex-col lg:flex-row justify-start items-start gap-2 lg:gap-6"
                >
                  <div className="w-full lg:w-56 shrink-0 text-zinc-900 text-base font-normal leading-6 font-['Inter',sans-serif]">
                    {row.label}
                  </div>
                  <div className="flex-1 text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                    {row.meaning}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Notice
          title="Exact technical semantics remain governed"
          body="Keep organization context and capability scope visible near consequential actions. Confirm the identity, authentication and authorization contracts in the API Reference; never infer tenant hierarchy, RBAC or cross-tenant access from these conceptual categories."
        />
      </Container>
    </section>
  );
}

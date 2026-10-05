import { ControlCard, NoticeCard, SectionHeading, SectionShell } from "./shared";

const CARDS = [
  {
    title: "Authentication",
    description:
      "Required source: approved identity-verification methods, eligible surfaces and exclusions. Which authentication statements are supported for this service scope?",
  },
  {
    title: "Authorization",
    description:
      "Required source: approved permission boundaries and access-decision scope. How is authority bounded for the relevant surface?",
  },
  {
    title: "Privileged access",
    description:
      "Required source: approved administrative-access scope and accountable review. Public detail must exclude privileged endpoints and internal procedures.",
  },
  {
    title: "Service identity",
    description:
      "Required source: approved non-human identity boundaries and ownership. No service-identity mechanism is inferred from the architecture model.",
  },
  {
    title: "Secrets",
    description:
      "Required source: approved secret-handling scope and publication limits. Secret material, storage locations and operational details stay private.",
  },
  {
    title: "Sessions & tokens",
    description:
      "Required source: approved session and token lifecycle scope. Expiration, revocation and rotation details require explicit current evidence.",
  },
];

export default function IdentityAccessSection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="03 / IDENTITY & ACCESS"
          title="Access claims need more than a feature name."
          description="Authentication, authorization and administrative authority are separate evidence questions. None of the mechanisms below is confirmed by the supplied sources."
        />

        <div className="grid grid-cols-1 gap-4 self-stretch md:grid-cols-2 xl:grid-cols-3">
          {CARDS.map((card) => (
            <ControlCard
              key={card.title}
              title={card.title}
              description={card.description}
              footer="Control detail not supplied"
            />
          ))}
        </div>

        <NoticeCard
          title="Customer responsibility is scoped—not a settings screen"
          description="Customer and integrator credential responsibilities must follow an approved agreement and integration scope. Control detail is not supplied: no MFA, SSO, role model, privileged-access product, rotation policy or session duration is asserted here."
        />
      </div>
    </SectionShell>
  );
}

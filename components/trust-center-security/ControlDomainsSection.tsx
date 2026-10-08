import { ControlCard, NoticeCard, SectionHeading, SectionShell } from "./shared";

const DOMAINS = [
  { icon: "user-round", title: "Identity & access", description: <>Authentication, authority and identity<br className="hidden lg:block" />boundaries.</> },
  { icon: "database", title: "Data protection", description: "Data handling and cryptographic scope." },
  { icon: "layers", title: "Platform & infrastructure", description: "Compute, network and environment boundaries." },
  { icon: "code", title: "Secure development", description: "Design, testing and change evidence." },
  { icon: "search", title: "Vulnerability management", description: "Discovery through validated disclosure." },
  { icon: "activity", title: "Monitoring & incident", description: <>Detection, response and communications<br className="hidden lg:block" />scope.</> },
  { icon: "refresh-cw", title: "Resilience", description: "Continuity, recovery and dependencies." },
  { icon: "network", title: "Third-party risk", description: "Suppliers and supply-chain accountability." },
  { icon: "file-text", title: "Evidence & currentness", description: "Sources, scope, approval and expiry." },
];

const SCOPES = [
  {
    title: "ZoikoTax service scope",
    description:
      "Publish only verified, approved service-scope controls. Responsibilities and exclusions require a governed source.",
  },
  {
    title: "Customer / integrator scope",
    description:
      "Credential and data responsibilities follow the approved contract and integration scope. No customer settings are inferred here.",
  },
  {
    title: "External dependency scope",
    description:
      "External responsibilities require approved supplier and dependency evidence. A dependency is not a transfer of all accountability.",
  },
];

export default function ControlDomainsSection() {
  return (
    <SectionShell className="bg-[rgba(250,243,255,1)]" id="control-domains">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="02 / CONTROL DOMAINS"
          title="A clear scope for every security question."
          description={<>Use this index to review source requirements. These are publication domains—not a list of passed, certified or<br className="hidden lg:block" />implemented controls.</>}
        />

        <div className="grid grid-cols-1 gap-4 self-stretch md:grid-cols-2 xl:grid-cols-3">
          {DOMAINS.map((domain) => (
            <ControlCard
              key={domain.title}
              title={domain.title}
              description={domain.description}
              footer="Publication requires verified source"
              icon={domain.icon}
            />
          ))}
        </div>

        <div className="flex flex-col gap-6 self-stretch rounded-3xl bg-[rgba(48,17,83,1)] p-6 sm:p-8">
          <h3 className="self-stretch text-2xl text-white sm:text-3xl">
            Shared accountability. Contract-defined boundaries.
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {SCOPES.map((scope) => (
              <div key={scope.title} className="inline-flex flex-1 flex-col items-start gap-3">
                <p className="self-stretch text-lg text-orange-300">{scope.title}</p>
                <p className="self-stretch text-base leading-6 text-zinc-300">{scope.description}</p>
              </div>
            ))}
          </div>
        </div>

        <NoticeCard
          title="Reading the domains"
          description="All actual control details remain not publicly verified in supplied sources. Security can reduce risk; no control summary establishes threat elimination."
        />
      </div>
    </SectionShell>
  );
}

import { NoticeCard, SectionHeading, SectionShell, CardIcon } from "./shared";

const ZONES = [
  { icon: "waypoints-apricot", title: "Edge / ingress" },
  { icon: "layers-apricot", title: "Application / service layer" },
  { icon: "database-apricot", title: "Data layer" },
];

const BOUNDARIES = [
  {
    topic: "Edge / ingress",
    detail:
      "Which public entry boundaries are in scope? Publication needs approved ingress boundaries and exposure scope.",
  },
  {
    topic: "Application / service layer",
    detail:
      "Which service responsibilities and interfaces are approved for a public summary? Internal services remain private.",
  },
  {
    topic: "Data layer",
    detail:
      "What information crosses each boundary? Publication needs approved data classes and handling scope, without storage or key details.",
  },
  {
    topic: "Administrative plane",
    detail:
      "Where does administrative accountability sit? Publication needs approved authority boundaries—not privileged endpoints.",
  },
  {
    topic: "External integrations",
    detail:
      "Which responsibilities cross an external boundary? Publication needs approved dependency and contract scope.",
  },
];

export default function ArchitectureSection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="01 / SECURITY ARCHITECTURE"
          title="Understand the boundaries. Not the attack surface."
          description="A public architecture summary should describe responsibility and scope without disclosing sensitive topology. The anatomy below is conceptual only."
        />

        <div className="flex flex-col gap-7 self-stretch rounded-3xl bg-slate-900 p-6 sm:p-8">
          <p className="text-lg leading-6 text-orange-300">
            Conceptual trust-zone anatomy — not a verified deployment topology
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {ZONES.map((zone) => (
              <div
                key={zone.title}
                className="inline-flex flex-col items-start gap-4 self-stretch rounded-2xl bg-violet-950 p-6 outline outline-1 outline-offset-[-1px] outline-gray-500 sm:p-7"
              >
                <CardIcon name={zone.icon} size={28} />
                <h3 className="self-stretch text-xl font-semibold text-white">{zone.title}</h3>
                <p className="self-stretch text-xs text-zinc-300">Boundary evidence required</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-start rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-500">
              <p className="p-5 text-base font-semibold text-zinc-300">
                Administrative plane · Scope evidence required
              </p>
            </div>
            <div className="flex items-start rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-500">
              <p className="p-5 text-base font-semibold text-zinc-300">
                External integrations · Scope evidence required
              </p>
            </div>
          </div>
          <p className="text-sm leading-5 text-zinc-300">
            Text equivalent: Edge/ingress, application/service and data are conceptual domains.
            Administrative authority and external integrations are separate responsibility contexts. Their
            order does not establish network links, hosting locations or an actual deployment.
          </p>
        </div>

        <div className="flex flex-col items-start self-stretch">
          {BOUNDARIES.map((row) => (
            <div
              key={row.topic}
              className="inline-flex w-full flex-col items-start gap-1 border-b border-zinc-300 py-4 lg:flex-row lg:gap-7"
            >
              <p className="w-full text-base text-zinc-900 lg:w-72 lg:shrink-0">{row.topic}</p>
              <p className="flex-1 text-base leading-6 text-stone-500">{row.detail}</p>
            </div>
          ))}
        </div>

        <NoticeCard
          title="Actual architecture: not publicly verified in supplied sources"
          description="Host and provider names, internal services, IPs, rules, storage details, secrets, key material, customer controls and privileged endpoints are not public content. Approved source boundaries are required before describing a deployment."
        />
      </div>
    </SectionShell>
  );
}

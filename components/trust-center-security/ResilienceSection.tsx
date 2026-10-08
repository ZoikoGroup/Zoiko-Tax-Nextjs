import { ArrowIcon, ControlCard, LinkColumn, NoticeCard, SectionHeading, SectionShell } from "./shared";

const CARDS = [
  {
    icon: "archive",
    title: "Backups & recovery",
    description:
      "Required evidence: approved backup scope, recovery responsibilities and relevant exclusions. No recovery objective or backup cadence is supplied.",
  },
  {
    icon: "clipboard-list",
    title: "Continuity testing",
    description:
      "Required evidence: approved exercise scope, results and review context. No testing cadence or recovery performance is supplied.",
  },
  {
    icon: "network",
    title: "Dependency responsibility",
    description:
      "Required evidence: approved continuity boundaries for service, customer and external dependencies. No deployment or uptime assurance is inferred.",
  },
];

export default function ResilienceSection() {
  return (
    <SectionShell className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="09 / RESILIENCE"
          title="Security is not a continuity guarantee."
          description={<>Detailed posture belongs in Business Continuity. This security summary must not overstate recovery capability,<br className="hidden lg:block" />availability or dependency independence.</>}
        />

        <div className="grid grid-cols-1 gap-4 self-stretch md:grid-cols-3">
          {CARDS.map((card) => (
            <ControlCard
              key={card.title}
              title={card.title}
              description={card.description}
              footer="Control detail not supplied"
              icon={card.icon}
            />
          ))}
        </div>

        <div className="inline-flex items-start self-stretch">
          <LinkColumn 
            label={
              <span className="inline-flex items-center gap-1.5">
                Business Continuity
                <ArrowIcon white={false} />
              </span>
            } 
            route="/trust/business-continuity/" 
          />
        </div>

        <NoticeCard
          title="Recovery objectives and live service state are separate evidence"
          description={
            <div className="max-w-[1200px]">
              No RTO, RPO, uptime, recovery cadence or operational badge is supplied. An approved live service-state system, if present, is separate from this governed security summary.
            </div>
          }
        />
      </div>
    </SectionShell>
  );
}

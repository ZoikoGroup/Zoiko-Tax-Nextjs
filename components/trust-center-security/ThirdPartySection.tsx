import { ControlCard, LinkColumn, NoticeCard, SectionHeading, SectionShell } from "./shared";

const CARDS = [
  {
    title: "Supplier assessment",
    description:
      "Required source: approved assessment scope, accountable review and permitted summary. No supplier assurance is inferred.",
  },
  {
    title: "Subprocessor disclosure",
    description:
      "Required source: approved subprocessor disclosure and processing scope. Named disclosure must use its governed destination.",
  },
  {
    title: "Dependencies & build integrity",
    description:
      "Required source: approved dependency and build-integrity scope, provenance and review. No tooling or build protection is asserted.",
  },
  {
    title: "External shared boundary",
    description:
      "Required source: approved responsibility allocations and contract boundaries between service and external parties.",
  },
  {
    title: "Change monitoring",
    description:
      "Required source: approved supplier and dependency change-review scope. No continuous monitoring or review cadence is supplied.",
  },
  {
    title: "Exit & replacement",
    description:
      "Required source: approved exit, replacement and data-handling obligations. No seamless substitution or portability guarantee is implied.",
  },
];

export default function ThirdPartySection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="10 / THIRD-PARTY RISK"
          title="External dependencies need explicit scope."
          description="Supplier, dependency and supply-chain statements require approved evidence. No supplier name, certification, universal compliance or portability guarantee is supplied."
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

        <LinkColumn label="Subprocessor disclosure →" route="Named governed destination · Exact route not supplied" />

        <NoticeCard
          title="Publication slot, not supplier assurance"
          description="Supplier evidence and dependency boundaries remain not publicly verified in supplied sources. Approval must cover the specific service, dependency and statement before public publication."
        />
      </div>
    </SectionShell>
  );
}

import { MessagesSquare, UserCheck, ShieldAlert, Info } from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const CARDS = [
  {
    icon: MessagesSquare,
    tag: "AI ROLE",
    title: "Assistive support",
    description:
      "Analysis, classification, investigation and explanation only within approved scopes. Suggestions remain suggestions until the applicable governed action is taken.",
  },
  {
    icon: UserCheck,
    tag: "AUTHORITY REMAINS SEPARATE",
    title: "Approved decision rights",
    description:
      "Fiscal actions depend on approved authority. Human review, rejection, override and escalation must follow the source-defined roles and boundaries—not a newly assumed workflow.",
  },
  {
    icon: ShieldAlert,
    tag: "PROHIBITED BOUNDARY",
    title: "No independent fiscal authority",
    description:
      "AI does not independently establish law or rates, authorize filing or remittance, or establish Coverage authority. Applicable prohibited uses require approved source restrictions.",
  },
];

export default function RoleAuthoritySection() {
  return (
    <SectionShell id="authority" className="bg-[rgba(48,17,83,1)]" imageSrc="/about-us/AI role and authority.png">
      <div className="flex flex-col gap-9">
        <SectionHeading
          dark
          eyebrow="01 · AUTHORITY & DECISION RIGHTS"
          title="Recommendation ≠ decision."
          description={
            <>
              Assistive output may inform a governed process. It is not automatic acceptance, an approved fiscal decision or an
              <br className="hidden lg:block" />
              independent source of legal authority. Confidence is not authority.
            </>
          }
          descriptionClassName="max-w-none"
        />

        {/* 3 Disclosure cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-4.5 rounded-2xl bg-white/5 border border-[rgba(98,71,121,1)] p-7"
            >
              <card.icon className="h-6 w-6 text-[rgba(244,162,97,1)] mb-1" strokeWidth={1.5} />
              <span className="text-xs font-bold uppercase tracking-wider text-[rgba(244,162,97,1)]">
                {card.tag}
              </span>
              <h3 className="text-[22px] font-semibold text-white">{card.title}</h3>
              <p className="text-base font-normal leading-relaxed text-[rgba(217,208,223,1)]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Authority distinction banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[rgba(29,3,59,1)] p-7">
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-[22px] font-normal text-white">AI suggestion</span>
            <span className="text-3xl font-light text-[rgba(244,162,97,1)]">≠</span>
            <span className="text-[22px] font-normal text-white">Governed fiscal authorization</span>
          </div>
          <span className="text-xs font-semibold text-[rgba(217,208,223,1)]">
            Never inferred from confidence
          </span>
        </div>

        {/* Notice */}
        <div className="w-full rounded-2xl bg-white/5 border border-[rgba(98,71,121,1)] p-6 flex items-start gap-4">
          <Info className="w-5 h-5 text-[rgba(244,162,97,1)] shrink-0 mt-0.5" />
          <div className="flex flex-col gap-1.5">
            <h4 className="text-base font-semibold text-white">
              Boundary doctrine, not an enforcement blueprint
            </h4>
            <p className="text-sm sm:text-[15px] leading-relaxed text-[rgba(217,208,223,1)]">
              These authority limits do not assert a particular permissions model, deterministic gate, review tool or deployed enforcement architecture. Exact controls and roles require authorized sources.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

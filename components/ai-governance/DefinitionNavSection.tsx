import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const STAGES = [
  {
    step: "01",
    title: "Assistance",
    meaning: "Analysis or explanation within an approved scope.",
    hasArrow: true,
  },
  {
    step: "02",
    title: "Review",
    meaning: "Source-defined review and applicable decision rights.",
    hasArrow: true,
  },
  {
    step: "03",
    title: "Governed authorization",
    meaning: "Fiscal action under separate approved authority.",
    hasArrow: true,
  },
  {
    step: "04",
    title: "Evidence",
    meaning: "Scope, approvals and proof appropriate to visibility.",
    hasArrow: false,
  },
];

const NAV_GROUPS = [
  {
    category: "ROLE & SCOPE",
    links: [
      { label: "01  Authority & decision rights", href: "#authority" },
      { label: "02  Use-case categories", href: "#use-cases" },
      { label: "03  Human oversight", href: "#human-oversight" },
      { label: "04  Public inventory", href: "#model-inventory" },
    ],
  },
  {
    category: "CONTROL & CHANGE",
    links: [
      { label: "05  Input, output & safety", href: "#input-output" },
      { label: "06  Evaluation evidence", href: "#evaluation" },
      { label: "07  Monitoring & incidents", href: "#monitoring" },
      { label: "08  Change governance", href: "#change-governance" },
    ],
  },
  {
    category: "DATA & TRANSPARENCY",
    links: [
      { label: "09  Provider boundaries", href: "#provider-boundaries" },
      { label: "10  Privacy & data governance", href: "#privacy-governance" },
      { label: "11  Transparency", href: "#transparency" },
      { label: "12  Currentness & safe states", href: "#currentness" },
    ],
  },
  {
    category: "ASSURANCE ROUTES",
    links: [
      { label: "13  Common questions", href: "#faq" },
      { label: "14  Evidence & next routes", href: "#next-routes" },
      { label: "Trust Center", href: "/trust-center" },
      { label: "Evidence & Auditability", href: "/trust-center/evidence-auditability" },
    ],
  },
];

export default function DefinitionNavSection() {
  return (
    <SectionShell imageSrc="/existing-tax-engines/0.png">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="DIRECT ANSWER"
          title="What does AI governance mean here?"
          description={
            <>
              This is the dedicated Trust destination for approved AI authority boundaries, model governance and transparency.
              <br className="hidden lg:block" />
              A use case, its roles and its claims require approved sources; this page does not establish a model’s availability or
              <br className="hidden lg:block" />
              confer fiscal authority.
            </>
          }
          descriptionClassName="max-w-none"
        />

        {/* 4 Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {STAGES.map((s, i) => (
            <div
              key={i}
              className="flex flex-col justify-between gap-3.5 rounded-2xl bg-[rgba(243,237,248,1)] border border-[rgba(216,206,221,1)] p-6"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[rgba(214,90,44,1)]">{s.step}</span>
                {s.hasArrow && <ArrowRight className="w-4 h-4 text-[rgba(102,95,105,1)]" />}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-[rgba(24,20,27,1)]">{s.title}</h3>
                <p className="text-sm sm:text-[15px] leading-relaxed text-[rgba(102,95,105,1)]">
                  {s.meaning}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm font-normal text-[rgba(102,95,105,1)]">
          Conceptual lanes, not a depiction of a deployed technical workflow. AI assistance does not become authorization by passing through a diagram.
        </p>

        {/* On this page Section Navigator */}
        <div className="flex flex-col gap-6 rounded-2xl bg-[rgba(243,237,248,1)] p-7 sm:p-8">
          <h3 className="text-lg font-semibold text-[rgba(24,20,27,1)]">On this page</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {NAV_GROUPS.map((grp, i) => (
              <div key={i} className="flex flex-col gap-3.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[rgba(214,90,44,1)]">
                  {grp.category}
                </span>
                <div className="flex flex-col gap-2.5">
                  {grp.links.map((lnk, j) => (
                    <Link
                      key={j}
                      href={lnk.href}
                      className="group flex items-center justify-between text-sm text-[rgba(48,17,83,1)] hover:text-[rgba(214,90,44,1)] transition-colors"
                    >
                      <span>{lnk.label}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

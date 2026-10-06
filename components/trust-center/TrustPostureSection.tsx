import { ShieldCheck, UserCheck, Database, Activity, GitPullRequest, Bug, Accessibility, CircuitBoard } from "lucide-react";
import { SectionHeading, SectionShell } from "./shared";
import Link from "next/link";

const DOMAINS = [
  {
    icon: ShieldCheck,
    title: "Security",
    description: "Review source-verified controls and their exact service and environment scope.",
    qualification: "Approved scope / evidence: Not supplied",
    linkText: "Explore domain",
    href: "/trust-center/security"
  },
  {
    icon: UserCheck,
    title: "Privacy & Data Protection",
    description: "Find approved personal-data disclosures, responsibilities and privacy scope.",
    qualification: "Approved scope / evidence: Not supplied",
    linkText: "Explore domain",
    href: "/trust-center/privacy"
  },
  {
    icon: Database,
    title: "Data Processing & Residency",
    description: "Check exact data-domain processing locations, approved options and limitations.",
    qualification: "Approved scope / evidence: Not supplied",
    linkText: "Explore domain",
    href: "/trust-center/data-processing-residency"
  },
  {
    icon: Activity,
    title: "Business Continuity",
    description: "Review approved continuity posture, recovery targets and supporting evidence.",
    qualification: "Approved scope / evidence: Not supplied",
    linkText: "Explore domain",
    href: "/trust-center/business-continuity"
  },
  {
    icon: CircuitBoard,
    title: "AI Governance",
    description: "Understand assistance, authority boundaries and source-controlled model transparency.",
    qualification: "Approved scope / evidence: Not supplied",
    linkText: "Explore domain",
    href: "/trust-center/ai-governance"
  },
  {
    icon: GitPullRequest,
    title: "Evidence & Auditability",
    description: "Follow supported traces, replay context, lineage and evidence access rules.",
    qualification: "Approved scope / evidence: Not supplied",
    linkText: "Explore domain",
    href: "/trust-center/evidence-auditability"
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    description: "Locate an approved accessibility statement and its assessed scope—not inferred conformance.",
    qualification: "Approved scope / evidence: Not supplied",
    linkText: "Explore domain",
    href: "/trust-center/accessibility"
  },
  {
    icon: Bug,
    title: "Responsible Disclosure",
    description: "Find the approved security reporting policy, distinct from support and procurement.",
    qualification: "Approved scope / evidence: Not supplied",
    linkText: "Explore domain",
    href: "/trust-center/responsible-disclosure"
  }
];

export default function TrustPostureSection() {
  return (
    <SectionShell className="bg-[#fcfaff]">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="TRUST POSTURE SNAPSHOT"
          title="Choose a domain. Verify the scope. Follow the evidence."
          description="An index of assurance topics, not a scorecard. Each destination needs its own approved scope, owner and current source."
        />

        <div className="flex flex-col gap-6 rounded-3xl bg-white p-6 md:p-8 border border-slate-100 shadow-sm">
          <p className="text-sm font-semibold text-orange-600">Static domain snapshot · No assurance rating or operational-health signal</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase text-slate-500">Approved posture source</span>
              <span className="text-sm text-slate-900 font-medium">Not supplied</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase text-slate-500">Domain owners</span>
              <span className="text-sm text-slate-900 font-medium">Not supplied</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase text-slate-500">Reviewed / effective date</span>
              <span className="text-sm text-slate-900 font-medium">Not supplied</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase text-slate-500">Evidence inventory</span>
              <span className="text-sm text-slate-900 font-medium">Not supplied</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {DOMAINS.map((domain, index) => (
            <div key={index} className="flex flex-col justify-between gap-6 rounded-3xl bg-white p-6 shadow-sm border border-slate-100 transition-shadow hover:shadow-md">
              <div className="flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600">
                  <domain.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{domain.title}</h3>
                <p className="text-sm text-slate-600">{domain.description}</p>
                <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-500 border border-slate-100">
                  {domain.qualification}
                </div>
              </div>
              <Link href={domain.href} className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700">
                {domain.linkText} <span>↗</span>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="rounded-2xl border border-orange-100 bg-orange-50 p-6">
          <h4 className="font-semibold text-orange-800">Read the label before relying on the statement</h4>
          <p className="mt-2 text-sm text-orange-900/80">Domain routes are shown for navigation. No controls, certification, artifact availability, accessibility conformance or current health is established by this snapshot.</p>
        </div>
      </div>
    </SectionShell>
  );
}

import { ShieldCheck, UserCheck, Database, Bug, GitPullRequest } from "lucide-react";
import { SectionHeading, SectionShell } from "./shared";
import Link from "next/link";
import Image from "next/image";

const QUESTIONS = [
  {
    icon: ShieldCheck,
    question: "How is it secured?",
    description: "Review only controls supported by an approved source.",
    linkText: "Security",
    href: "/trust-center/security"
  },
  {
    icon: UserCheck,
    question: "How is personal data handled?",
    description: "Use the privacy disclosure, not a residency assumption.",
    linkText: "Privacy & Data Protection",
    href: "/trust-center/privacy"
  },
  {
    icon: Database,
    question: "Where is data processed?",
    description: "Verify the exact data domain, service and environment.",
    linkText: "Data Processing & Residency",
    href: "/trust-center/data-processing-residency"
  },
  {
    icon: Bug,
    question: "How do I report a vulnerability?",
    description: "Use the approved security reporting policy—not a sales or procurement form.",
    linkText: "Responsible Disclosure",
    href: "/trust-center/responsible-disclosure"
  },
  {
    icon: GitPullRequest,
    question: "Where are audit materials?",
    description: "Check source and access labels before relying on a summary.",
    linkText: "Evidence & Auditability",
    href: "/trust-center/evidence-auditability"
  }
];

export default function QuestionRoutingSection() {
  return (
    <SectionShell className="bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-1/2 opacity-5 pointer-events-none">
        <Image src="/images/trust-center/security_and_privacy_question_routing.png" alt="" fill className="object-cover object-right" />
      </div>
      <div className="flex flex-col gap-10 relative z-10">
        <SectionHeading
          eyebrow="START WITH YOUR QUESTION"
          title="Different questions. Different sources."
          description="Security, privacy, residency and disclosure are related—but not interchangeable."
        />

        <div className="flex flex-col gap-4">
          {QUESTIONS.map((q, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-2xl bg-slate-50 p-6 border border-slate-100 transition-colors hover:border-orange-200 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                  <q.icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-slate-900">{q.question}</h3>
                  <p className="text-sm text-slate-600">{q.description}</p>
                </div>
              </div>
              <Link href={q.href} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-200">
                {q.linkText} <span>↗</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

import { ShieldCheck, UserCheck, Database, Bug, GitPullRequest, ArrowUpRight } from "lucide-react";
import { SectionShell } from "./shared";
import Link from "next/link";
import Image from "next/image";

const QUESTIONS = [
  {
    icon: ShieldCheck,
    question: "How is it secured?",
    description: "Review only controls supported by an approved source.",
    linkText: "Security",
    route: "/trust/security/",
    href: "/trust-center/security"
  },
  {
    icon: UserCheck,
    question: "How is personal data handled?",
    description: "Use the privacy disclosure, not a residency assumption.",
    linkText: "Privacy & Data Protection",
    route: "/trust/privacy/",
    href: "/trust-center/privacy"
  },
  {
    icon: Database,
    question: "Where is data processed?",
    description: "Verify the exact data domain, service and environment.",
    linkText: "Data Processing & Residency",
    route: "/trust/data-processing-residency/",
    href: "/trust-center/data-processing-residency"
  },
  {
    icon: Bug,
    question: "How do I report a vulnerability?",
    description: "Use the approved security reporting policy—not a sales or procurement form.",
    linkText: "Responsible Disclosure",
    route: "/trust/responsible-disclosure/",
    href: "/trust-center/responsible-disclosure"
  },
  {
    icon: GitPullRequest,
    question: "Where are audit materials?",
    description: "Check source and access labels before relying on a summary.",
    linkText: "Evidence & Auditability",
    route: "/trust/evidence-auditability/",
    href: "/trust-center/evidence-auditability"
  }
];

export default function QuestionRoutingSection() {
  return (
    <SectionShell className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/existing-tax-engines/0.png" alt="Background" fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-10 relative z-10">
        <div className="flex flex-col gap-4">
          <span className="text-sm font-bold text-[rgba(214,90,44,1)] uppercase tracking-wider">
            START WITH YOUR QUESTION
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl lg:leading-[47.52px] text-[rgba(24,20,27,1)]">
            Different questions. Different sources.
          </h2>
          <p className="w-full max-w-[1060px] text-base sm:text-lg lg:text-xl lg:leading-8 text-[rgba(102,95,105,1)]">
            Security, privacy, residency and disclosure are related—but not interchangeable.
          </p>
        </div>

        <div className="flex flex-col rounded-2xl border border-[rgba(216,206,221,1)] bg-white/40 overflow-hidden">
          {QUESTIONS.map((q, i) => (
            <Link 
              key={i} 
              href={q.href} 
              className="flex flex-col gap-4 border-b border-[rgba(216,206,221,1)] p-6 last:border-0 hover:bg-white/70 transition-colors md:flex-row md:items-center md:justify-between group"
            >
              <div className="flex items-center gap-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[rgba(255,242,233,1)] text-[rgba(214,90,44,1)]">
                  <q.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-[21px] font-semibold text-[rgba(24,20,27,1)]">{q.question}</h3>
                  <p className="text-sm font-normal text-[rgba(102,95,105,1)]">{q.description}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:justify-end gap-10 md:text-right">
                <div className="flex flex-col gap-0.5 items-start md:items-end">
                  <span className="text-base font-normal text-[rgba(164,70,34,1)] group-hover:opacity-80 transition-opacity">
                    {q.linkText}
                  </span>
                  <span className="text-[13px] font-normal text-[rgba(102,95,105,1)]">{q.route}</span>
                </div>
                <div className="flex text-[rgba(214,90,44,1)] items-center justify-center shrink-0">
                  <ArrowUpRight className="w-[18px] h-[18px]" strokeWidth={2} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

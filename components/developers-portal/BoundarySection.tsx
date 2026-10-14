import { Activity, Globe, LifeBuoy, ShieldAlert, ShieldCheck, type LucideIcon } from "lucide-react";
import { SectionHeading, SectionShell } from "./shared";

const AUTHORITIES: { icon: LucideIcon; title: string; scope: string; detail: string; href: string }[] = [
  {
    icon: Globe,
    title: "Coverage",
    scope: "Current capability and jurisdiction availability.",
    detail: "Use Coverage for what is supported—not technical documentation as evidence of availability.",
    href: "/coverage-overview",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    scope: "Security, privacy, residency and continuity sources.",
    detail: "Architecture guidance does not establish a security claim, certification or assurance.",
    href: "/trust-center",
  },
  {
    icon: Activity,
    title: "System Status",
    scope: "Live incidents and operational updates.",
    detail: "Consult live incident information. This static portal does not report service health.",
    href: "/system-status",
  },
  {
    icon: LifeBuoy,
    title: "Technical Support",
    scope: "Account-specific technical issues.",
    detail: "Use the approved specialist route. Generic documentation feedback is not account support.",
    href: "/customer-support",
  },
  {
    icon: ShieldAlert,
    title: "Responsible Disclosure",
    scope: "Vulnerability reporting through the approved route.",
    detail: "Do not send vulnerability details to a generic feedback collection or public search.",
    href: "/responsible-disclosure",
  },
];

export default function BoundarySection() {
  return (
    <SectionShell className="bg-[#2a0b4d]" bgImage="boundary-bg.webp">
      <SectionHeading
        dark
        eyebrow="Know the boundary"
        title="Documentation is not availability."
        description="Use the authority that owns the question. Documentation, product coverage, security and live incidents answer different things."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
        {AUTHORITIES.map(({ icon: Icon, title, scope, detail, href }, i) => (
          <div
            key={title}
            className={`flex flex-col items-start gap-4 rounded-2xl bg-[#14062a]/80 p-6 outline -outline-offset-1 outline-white/15 ${
              i < 3 ? "lg:col-span-2" : "lg:col-span-3"
            } ${i === 4 ? "md:col-span-2 lg:col-span-3" : ""}`}
          >
            <Icon aria-hidden="true" className="size-5 text-orange-300" strokeWidth={1.6} />
            <h3 className="text-xl font-bold text-white sm:text-2xl">{title}</h3>
            <p className="text-base font-medium leading-6 text-white">{scope}</p>
            <p className="flex-1 text-sm leading-6 text-zinc-300">{detail}</p>
            <a href={href} className="text-xs text-orange-300 hover:underline">
              Go to {title} →
            </a>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 rounded-2xl bg-[#14062a]/80 p-6">
        <p className="text-base leading-6 text-white sm:text-lg">
          For account-specific technical issues, use the approved Technical Support route. For live incidents, use
          System Status.
        </p>
        <p className="text-sm leading-6 text-zinc-300">
          Customer Support is distinct from documentation feedback. A feedback destination has not been provided here.
          Keep credentials, payloads, customer tax records, private logs and vulnerability details out of public search
          or feedback.
        </p>
      </div>
    </SectionShell>
  );
}

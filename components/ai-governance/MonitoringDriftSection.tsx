import Link from "next/link";
import { Activity, SearchCheck, ShieldAlert } from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const CARDS = [
  {
    icon: Activity,
    tag: "SOURCE-REQUIRED",
    title: "Changes that warrant review",
    description:
      "Where applicable, source records should define performance or drift review and policy or rule re-evaluation triggers. A trigger is not an assumed monitoring integration.",
  },
  {
    icon: SearchCheck,
    tag: "SOURCE-REQUIRED",
    title: "Unexpected output",
    description:
      "Investigation duties, guidance and any governance suspension must follow approved records. Sensitive output, incident data and evaluation detail are not public content.",
  },
  {
    icon: ShieldAlert,
    tag: "DISTINCT SECURITY ROUTE",
    title: "Security & abuse concerns",
    description:
      "Security vulnerabilities belong on the Security and Responsible Disclosure routes. An AI-content issue is not automatically a vulnerability; follow its authorized guidance.",
  },
];

export default function MonitoringDriftSection() {
  return (
    <SectionShell id="monitoring" className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="07 · MONITORING, DRIFT & INCIDENTS"
          title="A review framework. Not a telemetry claim."
          description="Performance, data drift and model drift may be described only where approved sources establish the actual approach. No monitoring method, cadence, incident statistic, service level or zero-error claim is supplied."
        />

        {/* 3 Disclosure cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CARDS.map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-4.5 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-7"
            >
              <card.icon className="h-6.5 w-6.5 text-[rgba(214,90,44,1)]" strokeWidth={1.5} />
              <span className="text-xs font-bold uppercase tracking-wider text-[rgba(214,90,44,1)]">
                {card.tag}
              </span>
              <h3 className="text-[22px] font-semibold text-[rgba(24,20,27,1)]">{card.title}</h3>
              <p className="text-base font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Incident guidance bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-6">
          <span className="text-[15px] font-normal text-[rgba(102,95,105,1)]">
            Actual incident and suspension procedures require authorized disclosure. Do not publish sensitive incident details.
          </span>
          <Link
            href="/trust/responsible-disclosure/"
            className="text-[15px] font-semibold text-[rgba(214,90,44,1)] hover:underline shrink-0"
          >
            Responsible Disclosure →
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}

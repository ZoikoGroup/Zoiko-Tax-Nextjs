import { NoticeCard, SectionHeading, SectionShell } from "./shared";

const ROWS = [
  {
    topic: "Monitoring",
    needs: "Approved telemetry coverage and visibility scope.",
    controlled: "Collection detail and sensitive operational context.",
  },
  {
    topic: "Detection",
    needs: "Approved detection scope and limits.",
    controlled: "Detection rules, signatures and response triggers.",
  },
  {
    topic: "Escalation",
    needs: "Approved accountability and escalation boundaries.",
    controlled: "Internal contacts and operational escalation paths.",
  },
  {
    topic: "Containment",
    needs: "Approved containment responsibilities and scope.",
    controlled: "Runbooks, privileged actions and attack-path detail.",
  },
  {
    topic: "Communication",
    needs: "Approved disclosure authority and audience scope.",
    controlled: "Case-specific contacts, timing and sensitive notices.",
  },
  {
    topic: "Post-incident review",
    needs: "Approved review scope and publishable learnings.",
    controlled: "Internal findings and incident-specific records.",
  },
  {
    topic: "Evidence preservation",
    needs: "Approved preservation scope and handling authority.",
    controlled: "Forensic material and sensitive chain-of-custody records.",
  },
];

export default function MonitoringSection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="08 / MONITORING & INCIDENT RESPONSE"
          title="Explain the scope. Protect the operational detail."
          description="A verified public summary needs approved coverage, responsibility and disclosure boundaries. None of the monitoring or response capabilities below is verified in the supplied sources."
        />

        <div className="flex flex-col items-start self-stretch">
          <div className="inline-flex w-full flex-col gap-2 pb-4 lg:flex-row lg:gap-6">
            <p className="w-full text-xs font-bold text-violet-950 lg:w-56 lg:shrink-0">TOPIC</p>
            <p className="flex-1 text-xs font-bold text-violet-950">PUBLIC SUMMARY NEEDS</p>
            <p className="flex-1 text-xs font-bold text-violet-950">DETAIL REMAINS CONTROLLED</p>
          </div>
          {ROWS.map((row) => (
            <div
              key={row.topic}
              className="inline-flex w-full flex-col gap-2 border-t border-zinc-300 py-5 lg:flex-row lg:gap-6"
            >
              <div className="inline-flex w-full flex-col items-start gap-2 lg:w-56 lg:shrink-0">
                <p className="self-stretch text-base text-zinc-900">{row.topic}</p>
                <p className="text-xs text-stone-500">Evidence not supplied</p>
              </div>
              <p className="flex-1 text-base leading-6 text-stone-500">{row.needs}</p>
              <p className="flex-1 text-base leading-6 text-stone-500">{row.controlled}</p>
            </div>
          ))}
        </div>

        <NoticeCard
          title="No inferred operational assurance"
          description="No 24/7 coverage, SOC, response time, incident statistic or zero-breach statement is supplied. Incident disclosures must use a governed approved source. Live service state belongs to a separate approved system, if present; no live-status source or route is supplied here."
        />
      </div>
    </SectionShell>
  );
}

import { Card, NoticeCard, SectionHeading, SectionShell } from "./shared";

const REPORT_ITEMS = [
  {
    title: "Page or task",
    description: "Identify where you encountered the barrier and what you were trying to do.",
  },
  {
    title: "Steps and outcome",
    description: "Share the minimum steps to reproduce it, what you expected and what happened.",
  },
  {
    title: "Useful context, only if needed",
    description:
      "Include relevant technical context voluntarily. Do not include passwords, tax records, account secrets or disability details.",
  },
];

const ROUTES = [
  {
    title: "Accommodation requests",
    description:
      "A separate approved process is needed. No accommodation service, alternative format or contact route is promised in this view.",
  },
  {
    title: "Product support",
    description:
      "Support helps with operational tasks. It is not a substitute for an approved public accessibility-reporting route.",
  },
  {
    title: "Legal & procurement evidence",
    description:
      "Formal statements and controlled evidence have separate approval and access rules. They should not be confused with issue reporting.",
  },
];

export default function ReportingSection() {
  return (
    <SectionShell id="report" className="bg-white" bgImage="report-bg.webp">
      <SectionHeading
        eyebrow="10 / REPORTING & ACCOMMODATIONS"
        title="A barrier deserves a clear route—not a sales gate."
        description="This is reporting guidance, not an operational form. An approved report channel and reporting process have not been supplied."
      />

      <NoticeCard title="Use the channel in the approved accessibility statement once published.">
        No report endpoint, receipt process or response timescale is established here. This section does not submit a
        report. Accessibility reporting should not depend on booking a demo.
      </NoticeCard>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col gap-5 rounded-3xl bg-purple-50 p-6 outline -outline-offset-1 outline-zinc-300 sm:p-8">
          <h3 className="text-xl font-semibold text-zinc-900 sm:text-2xl">Describe the task, not a diagnosis.</h3>
          <ul className="flex flex-col gap-5">
            {REPORT_ITEMS.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span aria-hidden="true" className="mt-3 h-0.5 w-3 shrink-0 bg-amber-700" />
                <div className="flex flex-col gap-1">
                  <p className="text-base text-zinc-900">{item.title}</p>
                  <p className="text-base leading-7 text-stone-500">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl bg-violet-950 p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-white sm:text-2xl">Keep reporting accessible and private.</h3>
          <p className="text-base leading-7 text-zinc-300">
            A reporting route should not force an account unless an approved policy requires one. Accessible
            attachments should be optional and safe, and any receipt wording must reflect an approved process.
          </p>
          <p className="text-base leading-7 text-zinc-300">
            Report contents can be sensitive. Analytics must not collect free text, attachments, disability
            information or personal details from reports.
          </p>
          <p className="text-sm leading-6 text-zinc-300">
            Do not infer disability from browsing, zoom, keyboard use or assistive technology. Do not use those
            signals for risk profiling or experiments that manipulate disclosure of limitations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {ROUTES.map((route) => (
          <Card key={route.title} title={route.title}>
            {route.description}
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

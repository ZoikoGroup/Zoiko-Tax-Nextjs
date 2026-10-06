import { Badge, NoticeCard, SectionHeading, SectionShell } from "./shared";

const ROUTING_STEPS = [
  { title: "Applicable notice & eligibility", detail: "Approved notice and applicable scope: Not supplied" },
  { title: "Destination & verification", detail: "Approved route and verification requirements: Not supplied" },
  { title: "Supported request categories", detail: "Approved categories: Not supplied" },
  { title: "Timing, agent & appeal", detail: "Include only where the applicable source provides them: Not supplied" },
];

export default function RequestRoutingSection() {
  return (
    <SectionShell className="bg-white" bgImage="rights-bg.webp">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="06 / RIGHTS & REQUEST ROUTING"
          title="How should a privacy request be routed?"
          description="Use the request route identified in the applicable approved notice; a public request route is not established in supplied sources."
        />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="flex flex-col items-start gap-5 rounded-3xl bg-purple-100 p-6 sm:p-8 lg:w-[420px] lg:shrink-0">
            <Badge>Request route not established</Badge>
            <h3 className="text-2xl leading-8 text-violet-950 sm:text-3xl">The applicable notice comes first.</h3>
            <p className="text-base leading-6 text-stone-500">
              No request form, mailbox or eligibility mechanism is provided here. A demo or sales channel is not a
              substitute for an approved privacy request route.
            </p>
          </div>

          <div className="flex flex-1 flex-col">
            {ROUTING_STEPS.map((step) => (
              <div key={step.title} className="flex flex-col gap-2 border-b border-zinc-300 py-5">
                <h3 className="text-base font-semibold text-zinc-900">{step.title}</h3>
                <p className="text-sm leading-6 text-stone-500">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <NoticeCard
          title="Share only what an approved process requires."
          description="Do not send identity documents, credentials, secrets, payment details, subscriber information, tax or ledger records, or sensitive request documents through a generic form. This page does not ask you to submit personal information."
        />
      </div>
    </SectionShell>
  );
}

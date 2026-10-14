import { PendingNote, ROUTES, RouteLink, SectionHeading, SectionShell } from "./shared";

const OWNERS: { title: string; description: string; link?: { label: string; href: string }; pending?: string }[] = [
  {
    title: "Product or account help",
    description:
      "Already use ZoikoTax? Start with Customer Support for product or account help. Documentation can help with published technical guidance.",
    link: { label: "Customer Support", href: ROUTES.support },
  },
  {
    title: "Outage or technical problem",
    description:
      "Use live System Status for service incidents and approved support for help. The future Technical Support family route is not activated here.",
    link: { label: "Documentation", href: ROUTES.documentation },
  },
  {
    title: "Security vulnerability",
    description:
      "Do not use a sales textarea. Vulnerability reports belong with the approved Responsible Disclosure destination.",
    pending: "Responsible Disclosure · route pending",
  },
  {
    title: "Privacy or data rights",
    description:
      "Use the approved privacy owner and privacy destination—not Sales or Marketing. No privacy intake or policy route is confirmed here.",
    pending: "Privacy destination · approval pending",
  },
  {
    title: "General question",
    description:
      "Use the existing General Contact destination. It is not renamed Sales and is not an automatic fallback for sales submissions.",
    link: { label: "General Contact", href: ROUTES.contact },
  },
  {
    title: "Partnerships",
    description:
      "A partnership inquiry needs its own governed route. Existing Partners content describes approved relationships, not a new inquiry flow.",
    link: { label: "Existing Partners content", href: ROUTES.partners },
  },
];

export default function OwnersSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading eyebrow="Keep the right owner in the conversation" title="Some questions should never go to Sales." />

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {OWNERS.map(({ title, description, link, pending }) => (
          <div key={title} className="flex flex-col items-start gap-3.5 border-t border-zinc-300 pt-6">
            <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
            <p className="flex-1 text-base leading-7 text-stone-500">{description}</p>
            {link ? <RouteLink label={link.label} href={link.href} /> : <PendingNote>{pending}</PendingNote>}
          </div>
        ))}
      </div>

      <p className="text-sm leading-5 text-stone-500">
        Existing-customer commercial expansion needs a genuine, approved commercial path. Product help is support-first;
        this page does not promise account-manager access or enroll customers in marketing.
      </p>
    </SectionShell>
  );
}

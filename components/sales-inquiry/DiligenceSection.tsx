import { Activity, BookOpen, Code, Globe, LifeBuoy, ShieldCheck, type LucideIcon } from "lucide-react";
import { PendingNote, ROUTES, RouteLink, SectionHeading, SectionShell } from "./shared";

const SOURCES: {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: { label: string; href: string };
  pending?: string;
}[] = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Security, compliance, privacy and other approved trust information remains available through ZoikoTax Trust destinations.",
    pending: "Destination pending · no inquiry gate",
  },
  {
    icon: Globe,
    title: "Coverage",
    description:
      "Use Coverage for current published availability by market or capability; a sales inquiry does not establish production support.",
    link: { label: "Country & regulatory packs", href: ROUTES.packs },
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description:
      "Read the published product guidance. Documentation, not a sales summary, owns technical instructions and product detail.",
    link: { label: "Documentation", href: ROUTES.documentation },
  },
  {
    icon: Code,
    title: "Developers",
    description:
      "Use the governed Developers destination for API and integration references. Do not send keys or credentials to Sales.",
    link: { label: "Developers", href: ROUTES.developers },
  },
  {
    icon: Activity,
    title: "System Status",
    description:
      "Use the approved live status destination for outages. Coverage Status & Releases describes readiness and releases—not live service health.",
    pending: "Live status destination pending",
  },
  {
    icon: LifeBuoy,
    title: "Customer Support",
    description:
      "Product or account help for existing customers belongs with Customer Support, not the Sales or Marketing intake.",
    link: { label: "Customer Support", href: ROUTES.support },
  },
];

export default function DiligenceSection() {
  return (
    <SectionShell className="bg-white" bgImage="diligence-bg.webp">
      <SectionHeading
        eyebrow="Before you contact Sales"
        title="Find the facts at their source."
        description="Public diligence stays public. Explore the specialist information before deciding whether a commercial conversation is needed."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SOURCES.map(({ icon: Icon, title, description, link, pending }) => (
          <div
            key={title}
            className="flex flex-col items-start gap-4 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300"
          >
            <Icon aria-hidden="true" className="size-6 text-orange-600" strokeWidth={1.6} />
            <h3 className="text-xl font-bold leading-7 text-zinc-900 sm:text-2xl">{title}</h3>
            <p className="flex-1 text-base leading-7 text-stone-500">{description}</p>
            {link ? <RouteLink label={link.label} href={link.href} /> : <PendingNote>{pending}</PendingNote>}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 rounded-2xl bg-[#EEE5F4] p-6 outline -outline-offset-1 outline-zinc-300 md:flex-row md:items-center md:gap-8">
        <div className="flex flex-1 flex-col gap-1.5">
          <p className="text-base font-bold text-zinc-900">Readiness is not uptime.</p>
          <p className="text-sm leading-5 text-stone-500">
            For exact readiness or release questions, consult Coverage Status &amp; Releases. It is not a substitute
            for live System Status.
          </p>
        </div>
        <RouteLink label="Coverage Status & Releases" href={ROUTES.releases} />
      </div>
    </SectionShell>
  );
}

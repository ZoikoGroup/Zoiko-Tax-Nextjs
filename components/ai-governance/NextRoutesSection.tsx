import Link from "next/link";
import { Shield, Fingerprint, MapPin, Flag, ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionShell, SectionHeading } from "./shared";

const DOMAIN_ROUTES = [
  {
    icon: Shield,
    title: "Security",
    purpose: "Exact security and access-control disclosures. Do not infer AI-specific controls.",
    href: "/trust/security/",
  },
  {
    icon: Fingerprint,
    title: "Privacy",
    purpose:
      "Approved privacy and processing terms, including source-backed retention and reuse statements.",
    href: "/trust/privacy/",
  },
  {
    icon: MapPin,
    title: "Data Processing & Residency",
    purpose:
      "Approved data-domain and location disclosures; no global residency assumption.",
    href: "/trust/data-processing-residency/",
  },
  {
    icon: Flag,
    title: "Responsible Disclosure",
    purpose:
      "Security vulnerability reporting guidance. AI-content issues require the applicable authorized source guidance.",
    href: "/trust/responsible-disclosure/",
  },
];

export default function NextRoutesSection() {
  return (
    <SectionShell id="next-routes" className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="14 · ASSURANCE-FIRST NEXT ROUTES"
          title="Start with the source. Follow the evidence."
          description="Procurement review should establish purpose, exact scope, authority, source ownership, current approval and evidence visibility. No artifact availability or controlled-access outcome is promised by these routes."
        />

        {/* Primary assurance destinations banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-2xl bg-[rgba(48,17,83,1)] p-9 text-white">
          {/* Destination 1 */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-normal text-white">Evidence & Auditability</h3>
              <p className="text-base font-normal leading-relaxed text-[rgba(217,208,223,1)]">
                Review the evidence posture and source requirements. Public, controlled and unavailable material must remain distinct.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <Link
                href="/trust/evidence-auditability/"
                className="inline-flex items-center gap-3 rounded-full bg-[rgba(191,103,53,1)] border border-[rgba(221,114,53,1)] px-5.5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[rgba(214,90,44,1)]"
              >
                <span>Evidence & Auditability</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-xs font-normal text-[rgba(217,208,223,1)]">
                /trust/evidence-auditability/
              </span>
            </div>
          </div>

          {/* Destination 2 */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-normal text-white">Trust Center</h3>
              <p className="text-base font-normal leading-relaxed text-[rgba(217,208,223,1)]">
                Explore the broader Trust context. Use the relevant domain source rather than assuming controls from an AI description.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <Link
                href="/trust/"
                className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-[rgba(98,71,121,1)] px-5.5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-white/20"
              >
                <span>Trust Center</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <span className="text-xs font-normal text-[rgba(217,208,223,1)]">
                /trust/
              </span>
            </div>
          </div>
        </div>

        {/* Domain assurance routes 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {DOMAIN_ROUTES.map((route, i) => (
            <Link
              key={i}
              href={route.href}
              className="group flex flex-col justify-between gap-3.5 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-7 transition hover:border-[rgba(214,90,44,1)]"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <route.icon className="h-6 w-6 text-[rgba(214,90,44,1)] shrink-0" strokeWidth={1.5} />
                  <h4 className="text-[21px] font-normal text-[rgba(24,20,27,1)] group-hover:text-[rgba(214,90,44,1)] transition-colors">
                    {route.title}
                  </h4>
                </div>
                <ArrowUpRight className="h-4.5 w-4.5 text-[rgba(214,90,44,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-[15px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                {route.purpose}
              </p>
              <span className="text-xs font-normal text-[rgba(48,17,83,1)]">
                {route.href}
              </span>
            </Link>
          ))}
        </div>

        {/* Supporting product context footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[rgba(216,206,221,1)] pt-7">
          <div className="md:col-span-8 flex flex-col gap-2.5">
            <Link
              href="/platform/intelligence/"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[rgba(214,90,44,1)] hover:underline"
            >
              ZoikoTax Intelligence Fabric™ <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-sm font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              Supporting product context: assists operators; it is not fiscal authority. AI Governance remains the destination for authority boundaries and disclosure requirements.
            </p>
            <span className="text-xs font-normal text-[rgba(102,95,105,1)]">
              /platform/intelligence/
            </span>
          </div>

          <div className="md:col-span-4 flex flex-col gap-2.5">
            <Link
              href="/demo/"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[rgba(214,90,44,1)] hover:underline"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-sm font-normal leading-relaxed text-[rgba(102,95,105,1)]">
              For product context after assurance review. A demo is not evidence or an approval.
            </p>
            <span className="text-xs font-normal text-[rgba(102,95,105,1)]">
              /demo/
            </span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

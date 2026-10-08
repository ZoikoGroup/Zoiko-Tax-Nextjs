import { Globe, Database, FileCheck2, MessageSquare, Layers, Workflow } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const DOMAINS = [
  {
    icon: Globe,
    title: "Public web / marketing",
    scope: "Website content and marketing data",
    environment: "Public website; exact environment not supplied",
    claimSource: "Approved web / analytics source required",
    currentness: "Not supplied — current approved source required",
    location: "Unknown / Not published"
  },
  {
    icon: Database,
    title: "Customer application / operational",
    scope: "Application and operational customer data",
    environment: "Customer service; exact environment not supplied",
    claimSource: "Approved service / deployment source required",
    currentness: "Not supplied — current approved source required",
    location: "Unknown / Not published"
  },
  {
    icon: FileCheck2,
    title: "Evidence / audit",
    scope: "Evidence records and audit artifacts",
    environment: "Evidence service; exact environment not supplied",
    claimSource: "Approved evidence-domain source required",
    currentness: "Not supplied — current approved source required",
    location: "Unknown / Not published"
  },
  {
    icon: MessageSquare,
    title: "Support / diagnostic",
    scope: "Support records and diagnostic material",
    environment: "Support workflow; exact environment not supplied",
    claimSource: "Approved support-domain source required",
    currentness: "Not supplied — current approved source required",
    location: "Unknown / Not published"
  },
  {
    icon: Layers,
    title: "Backup / recovery",
    scope: "Recovery copies and related data",
    environment: "Recovery environment not supplied",
    claimSource: "Approved backup / recovery source required",
    currentness: "Not supplied — current approved source required",
    location: "Unknown / Not published"
  },
  {
    icon: Workflow,
    title: "Third-party / subprocessor",
    scope: "Processing in an approved third-party role",
    environment: "Third-party environment not supplied",
    claimSource: "Approved subprocessor / interface source required",
    currentness: "Not supplied — current approved source required",
    location: "Unknown / Not published"
  }
];

export default function DataDomainModelSection() {
  return (
    <SectionShell id="deployment-domains" className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="DEPLOYMENT & DATA DOMAINS"
          title="Start with the data. Not a region badge."
          description={<span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Separate the domains before assessing a location claim. These are conceptual review categories, not an<br/>inventory of deployed services.</span>}
        />

        <div className="flex flex-col lg:flex-row gap-10 rounded-2xl bg-[rgba(242,234,248,1)] p-8">
          <div className="flex flex-col gap-2.5 lg:w-[560px]">
            <h4 className="text-[15px] font-bold text-[rgba(48,17,83,1)] mb-1">
              Data-domain anatomy — not a verified deployment topology
            </h4>
            <div className="rounded border border-[rgba(216,206,221,1)] bg-white p-4.5">
              <span className="text-[15px] font-semibold text-[rgba(48,17,83,1)]">Public web / marketing</span>
            </div>
            <div className="rounded border border-[rgba(48,17,83,1)] bg-[rgba(48,17,83,1)] p-4.5">
              <span className="text-[15px] font-semibold text-white">Customer application / operational data</span>
            </div>
            <div className="rounded border border-[rgba(216,206,221,1)] bg-white p-4.5">
              <span className="text-[15px] font-semibold text-[rgba(48,17,83,1)]">Evidence · Support · Recovery · Third parties</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:w-[616px]">
            <h3 className="text-[26px] font-normal leading-tight text-[rgba(24,20,27,1)]">
              Shared architecture does not establish shared<br />location.
            </h3>
            <p className="text-[17px] font-normal leading-relaxed text-[rgba(102,95,105,1)] whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">
              Public website and analytics data are not the same as customer production<br />data. Evidence, support, backups and third-party processing must be<br />assessed separately; none is assumed colocated with the application. Each<br />layer needs its own service, capability, environment, dimension and source.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {DOMAINS.map((domain, i) => (
            <div key={i} className="flex flex-col gap-4.5 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-6">
              <domain.icon className="h-6 w-6 text-[rgba(214,90,44,1)]" strokeWidth={1.5} />
              <h4 className="text-[22px] font-normal text-[rgba(24,20,27,1)]">{domain.title}</h4>
              
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[rgba(48,17,83,1)] uppercase tracking-wider">SCOPE</span>
                <span className="text-sm font-normal text-[rgba(102,95,105,1)]">{domain.scope}</span>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[rgba(48,17,83,1)] uppercase tracking-wider">ENVIRONMENT</span>
                <span className="text-sm font-normal text-[rgba(102,95,105,1)]">{domain.environment}</span>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[rgba(48,17,83,1)] uppercase tracking-wider">CLAIM SOURCE</span>
                <span className="text-sm font-normal text-[rgba(102,95,105,1)]">{domain.claimSource}</span>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[rgba(48,17,83,1)] uppercase tracking-wider">CURRENTNESS</span>
                <span className="text-sm font-normal text-[rgba(102,95,105,1)]">{domain.currentness}</span>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold text-[rgba(48,17,83,1)] uppercase tracking-wider">LOCATION</span>
                <span className="text-sm font-normal text-[rgba(102,95,105,1)]">{domain.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

import { SectionHeading, SectionShell } from "../trust-center/shared";
import { Globe, Database, FileCheck2, MessageSquare, Layers, Network } from "lucide-react";

const DOMAINS = [
  {
    icon: Globe,
    title: "Public web / marketing",
    scope: "Website content and marketing data",
    environment: "Public website; exact environment not supplied",
    source: "Approved web / analytics source required",
    currentness: "Not supplied — current approved source required",
    location: "Unknown / Not published"
  },
  {
    icon: Database,
    title: "Customer application / operational",
    scope: "Application and operational customer data",
    environment: "Customer service; exact environment not supplied",
    source: "Approved service / deployment source required",
    currentness: "Not supplied — current approved source required",
    location: "Unknown / Not published"
  },
  {
    icon: FileCheck2,
    title: "Evidence / audit",
    scope: "Evidence records and audit artifacts",
    environment: "Evidence service; exact environment not supplied",
    source: "Approved evidence-domain source required",
    currentness: "Not supplied — current approved source required",
    location: "Unknown / Not published"
  },
  {
    icon: MessageSquare,
    title: "Support / diagnostic",
    scope: "Support records and diagnostic material",
    environment: "Support workflow; exact environment not supplied",
    source: "Approved support-domain source required",
    currentness: "Not supplied — current approved source required",
    location: "Unknown / Not published"
  },
  {
    icon: Layers,
    title: "Backup / recovery",
    scope: "Recovery copies and related data",
    environment: "Recovery environment not supplied",
    source: "Approved backup / recovery source required",
    currentness: "Not supplied — current approved source required",
    location: "Unknown / Not published"
  },
  {
    icon: Network,
    title: "Third-party / subprocessor",
    scope: "Processing in an approved third-party role",
    environment: "Third-party environment not supplied",
    source: "Approved subprocessor / interface source required",
    currentness: "Not supplied — current approved source required",
    location: "Unknown / Not published"
  }
];

export default function DataDomainModelSection() {
  return (
    <SectionShell className="bg-slate-50">
      <div className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="DEPLOYMENT & DATA DOMAINS"
          title="Start with the data. Not a region badge."
          description="Separate the domains before assessing a location claim. These are conceptual review categories, not an inventory of deployed services."
        />

        <div className="flex flex-col gap-6 lg:flex-row">
          {/* Conceptual Model illustration */}
          <div className="flex flex-col gap-6 rounded-3xl bg-[#13032b] p-8 shadow-md lg:w-1/3">
            <h4 className="text-sm font-bold text-orange-400 uppercase tracking-wider">Data-domain anatomy — not a verified deployment topology</h4>
            
            <div className="flex flex-col gap-3 mt-4">
              <div className="rounded-xl border border-white/20 bg-white/5 p-4 text-white text-center font-medium">
                Public web / marketing
              </div>
              <div className="rounded-xl border border-orange-500/50 bg-orange-500/10 p-4 text-white text-center font-bold">
                Customer application / operational data
              </div>
              <div className="rounded-xl border border-white/20 bg-white/5 p-4 text-white text-center font-medium">
                Evidence · Support · Recovery · Third parties
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h5 className="text-lg font-bold text-white mb-2">Shared architecture does not establish shared location.</h5>
              <p className="text-sm text-slate-400 leading-relaxed">
                Public website and analytics data are not the same as customer production data. Evidence, support, backups and third-party processing must be assessed separately; none is assumed colocated with the application. Each layer needs its own service, capability, environment, dimension and source.
              </p>
            </div>
          </div>

          {/* Domain Inventory */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-2/3">
            {DOMAINS.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <div key={i} className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{domain.title}</h4>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-slate-500 uppercase">SCOPE</span>
                      <span className="text-sm font-medium text-slate-900">{domain.scope}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-slate-500 uppercase">ENVIRONMENT</span>
                      <span className="text-sm text-slate-700">{domain.environment}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-slate-500 uppercase">CLAIM SOURCE</span>
                      <span className="text-sm text-slate-700">{domain.source}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-bold text-slate-500 uppercase">CURRENTNESS</span>
                      <span className="text-sm text-slate-700">{domain.currentness}</span>
                    </div>
                    <div className="flex flex-col gap-1 mt-2 pt-2 border-t border-slate-100">
                      <span className="text-xs font-bold text-slate-500 uppercase">LOCATION</span>
                      <span className="text-sm font-bold text-orange-600">{domain.location}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

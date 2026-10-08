import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const LINKS = [
  {
    title: "Scoped data & source requirements",
    path: "/trust/data-processing-residency/",
    desc: "Return to the scope, dimensions and required\nsource metadata on this page."
  },
  {
    title: "Privacy & Data Protection",
    path: "/trust/privacy/",
    desc: "Approved privacy, transfers and contractual\ninterpretation."
  },
  {
    title: "Trust Center",
    path: "/trust/",
    desc: "The broader assurance context and source\nboundaries."
  },
  {
    title: "Security",
    path: "/trust/security/",
    desc: "Canonical approved security and isolation claims."
  },
  {
    title: "Evidence & Auditability",
    path: "/trust/evidence-auditability/",
    desc: "Evidence scope, provenance and disclosure\nboundaries."
  },
  {
    title: "Business Continuity",
    path: "/trust/business-continuity/",
    desc: "Approved resilience and recovery scope."
  }
];

export default function ContinueYourDiligenceSection() {
  return (
    <SectionShell id="continue-your-diligence" className="bg-[rgba(48,17,83,0.9)] bg-blend-overlay" imageSrc="/about-us/Assurance-first next steps (1).png">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="CONTINUE YOUR DILIGENCE"
          title="Review the assurance. Then discuss the fit."
          description={<span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Public scope and source requirements come first. A commercial conversation cannot grant a residency option or replace approved<br/>evidence.</span>}
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {LINKS.map((link, i) => (
            <div key={i} className="flex-1 p-6 bg-[rgba(29,3,59,1)] rounded-2xl border border-[rgba(118,89,137,1)] flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Link
                  href={link.path}
                  className="text-base font-normal text-[rgba(244,162,97,1)] hover:underline flex items-center gap-1.5"
                >
                  {link.title} <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs font-normal text-[rgba(217,208,223,1)]">
                  {link.path}
                </span>
              </div>
              <p className="text-base font-normal text-[rgba(217,208,223,1)] leading-6 whitespace-pre-line">
                {link.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-7 border-t border-[rgba(118,89,137,1)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2 xl:w-[760px]">
            <h4 className="text-xl font-normal text-white">
              After diligence, discuss your service requirements.
            </h4>
            <p className="text-base font-normal text-[rgba(217,208,223,1)] leading-6 whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">
              A demo is contextual only — not a region selection, automatic residency grant or sales gate for public<br/>disclosure.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-2 shrink-0">
            <Link
              href="/demo/"
              className="h-12 px-5 py-3.5 bg-[#DD7235] rounded-full shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,0.2)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,0.2)] border border-[#F4A261] flex items-center gap-3 hover:bg-[#c2622b] transition-colors"
            >
              <span className="text-sm font-semibold text-white">Book a Demo</span>
              <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
            </Link>
            <span className="text-xs font-normal text-[rgba(217,208,223,1)]">/demo/</span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
